# Create target directories if they don't exist
$targetDir = "../services/virtual-tryon/static/react-app"
$assetsDir = "$targetDir/assets"

# Create directories if they don't exist
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
}
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
}

# First remove any existing files to avoid conflicts
Write-Host "Removing old files..."
Remove-Item -Path "$targetDir/*" -Recurse -Force -ErrorAction SilentlyContinue

# Copy new build files
Write-Host "Copying new build files..."
Copy-Item -Path "dist/*" -Destination $targetDir -Recurse -Force

Write-Host "Build files copied successfully to Flask static directory" 