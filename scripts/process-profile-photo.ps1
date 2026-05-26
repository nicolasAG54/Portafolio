param(
  [Parameter(Mandatory = $true)]
  [string] $Source,

  [Parameter(Mandatory = $true)]
  [string] $Destination
)

Add-Type -AssemblyName System.Drawing

Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class PortfolioImageProcessor
{
    public static void RemoveWhiteBackground(string source, string destination)
    {
        using (var original = new Bitmap(source))
        {
            const int maxWidth = 760;
            var scale = Math.Min(1.0, (double)maxWidth / original.Width);
            var width = (int)Math.Round(original.Width * scale);
            var height = (int)Math.Round(original.Height * scale);

            using (var resized = new Bitmap(width, height, PixelFormat.Format32bppArgb))
            using (var graphics = Graphics.FromImage(resized))
            {
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.DrawImage(original, 0, 0, width, height);

                var rect = new Rectangle(0, 0, width, height);
                var data = resized.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                var bytes = Math.Abs(data.Stride) * height;
                var pixels = new byte[bytes];
                Marshal.Copy(data.Scan0, pixels, 0, bytes);

                var visited = new bool[width * height];
                var queue = new Queue<int>();

                Action<int, int> add = (x, y) =>
                {
                    if (x < 0 || y < 0 || x >= width || y >= height) return;

                    var index = y * width + x;
                    if (visited[index]) return;
                    visited[index] = true;

                    var offset = y * data.Stride + x * 4;
                    var blue = pixels[offset];
                    var green = pixels[offset + 1];
                    var red = pixels[offset + 2];

                    if (IsWhiteBackground(red, green, blue))
                    {
                        queue.Enqueue(index);
                    }
                };

                for (var x = 0; x < width; x++)
                {
                    add(x, 0);
                }

                for (var y = 0; y < height; y++)
                {
                    add(0, y);
                    add(width - 1, y);
                }

                while (queue.Count > 0)
                {
                    var index = queue.Dequeue();
                    var x = index % width;
                    var y = index / width;
                    var offset = y * data.Stride + x * 4;
                    pixels[offset + 3] = 0;

                    add(x + 1, y);
                    add(x - 1, y);
                    add(x, y + 1);
                    add(x, y - 1);
                }

                Marshal.Copy(pixels, 0, data.Scan0, bytes);
                resized.UnlockBits(data);

                var directory = Path.GetDirectoryName(destination);
                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                resized.Save(destination, ImageFormat.Png);
            }
        }
    }

    private static bool IsWhiteBackground(byte red, byte green, byte blue)
    {
        var distance = Math.Sqrt(
            Math.Pow(255 - red, 2) +
            Math.Pow(255 - green, 2) +
            Math.Pow(255 - blue, 2)
        );

        return red > 232 && green > 232 && blue > 232 && distance < 42;
    }
}
"@

$sourcePath = [System.IO.Path]::GetFullPath($Source)
$destinationPath = [System.IO.Path]::GetFullPath($Destination)

[PortfolioImageProcessor]::RemoveWhiteBackground($sourcePath, $destinationPath)
