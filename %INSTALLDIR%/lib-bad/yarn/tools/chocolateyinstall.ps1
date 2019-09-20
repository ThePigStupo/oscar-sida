$ErrorActionPreference = 'Stop'; # stop on all errors

$packageName = 'yarn'

$packageArgs = @{
  packageName = $packageName
  softwareName = 'Yarn*'
  fileType = 'msi'
  silentArgs = "/qn /norestart"
  validExitCodes = @(0, 3010, 1641)
  checksumType = 'sha256'

  url = 'https://yarnpkg.com/downloads/1.17.3/yarn-1.17.3.msi'
  checksum = '46E618592076FF2882A5D7E1D4F8D0FFB8B29918A6366A1FEA0F0BBDF145A4FA'
}

Install-ChocolateyPackage @packageArgs

# Update Yarn's package.json file so it can tell that it was installed via Chocolatey.
if (Test-Path "${env:ProgramFiles(x86)}\Yarn\package.json") {
  $path = "${env:ProgramFiles(x86)}\Yarn\package.json"
} else {
  $path = "$env:ProgramFiles\Yarn\package.json"
}

$script = @"
  (Get-Content -Path '$path') ``
    -replace 'installationMethod":.+', 'installationMethod": "choco",' ``
    | Set-Content '$path'
"@

Start-ChocolateyProcessAsAdmin -Statements $script

if (-Not (Get-Command "node" -errorAction SilentlyContinue)) {
  Write-Host "Yarn requires NodeJS to be installed. To install, use either of the commands below:"
  Write-Host "choco install nodejs"
  Write-Host "choco install nodejs-lts"
}
