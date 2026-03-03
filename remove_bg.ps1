Add-Type -AssemblyName System.Drawing
$images = @("d:\E\Yashwant\public\dhol_corner.png", "d:\E\Yashwant\public\tasha_corner.png", "d:\E\Yashwant\public\flag_corner.png", "d:\E\Yashwant\public\cymbals_corner.png")

foreach ($imgPath in $images) {
    try {
        $img = [System.Drawing.Bitmap]::FromFile($imgPath)
        $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
        
        for ($y = 0; $y -lt $img.Height; $y++) {
            for ($x = 0; $x -lt $img.Width; $x++) {
                $pixel = $img.GetPixel($x, $y)
                $brightness = ($pixel.R + $pixel.G + $pixel.B) / 3
                if ($brightness -gt 240) {
                    $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $pixel.R, $pixel.G, $pixel.B))
                } elseif ($brightness -gt 210) {
                    $alpha = [math]::Floor(255 * (240 - $brightness) / 30)
                    $alpha = [math]::Max(0, [math]::Min(255, $alpha))
                    $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $pixel.G, $pixel.B))
                } else {
                    $bmp.SetPixel($x, $y, $pixel)
                }
            }
        }
        $img.Dispose()
        $bmp.Save($imgPath.Replace('.png', '_tr.png'), [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Host "Processed $imgPath"
    } catch {
        Write-Host "Failed $imgPath : $_"
    }
}
