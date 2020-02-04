$pathToV16 = "C:\Users\" + $env:USERNAME + "\AppData\Roaming\Microsoft\Word\STARTUP"
$pathToV17 = "C:\Users\" + $env:USERNAME + "\AppData\Local\Packages\Microsoft.Office.Desktop_8wekyb3d8bbwe\LocalCache\Roaming\Microsoft\Word\STARTUP"
$TemplateName = "CATOVIS_WordCore.dotm"
$v16 = test-path $pathToV16
$v17 = test-path $pathToV17

$startup = ""

if ($v16) {
    $startup = $pathToV16
} elseif ($v17) {
    $startup = $pathToV17
} else {
    Write-host "Sorry, CATOVIS Word Core auto-installer cannot find the path to Word STARTUP."
    Write-host "Please install manuary accoring to 'https://quankaoyang.github.io/catovis-docs'"
}

Write-Host "Please select:"
Write-Host "1. Install CATOVIS Word Core"
Write-Host "2. Uninstall CATOVIS Word Core"
$sw = Read-Host 

if ($sw -eq 1) {
    Copy-Item .\${TemplateName} -Destination $startup -Force
    Write-Host "CATOVIS Word Core is successfully installed!"
} elseif ($sw -eq 2) {
    Remove-Item ${startup}\${TemplateName}
    Write-Host "CATOVIS Word Core is successfully uninstalled!"
} else {
    Write-Host "Please select '1' or '2'"
}

if (test-path "${startup}\SelectAndRequest.dotm") {
    Remove-Item "${startup}\SelectAndRequest.dotm"
}

Read-Host("Pleas type any key:")