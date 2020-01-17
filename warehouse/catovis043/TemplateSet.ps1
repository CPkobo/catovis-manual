$OfficeVersion = ((Get-ItemProperty -Path "C:\Program Files (x86)\Microsoft Office\root\Office16\winword.exe").VersionInfo).FileVersion
$TemplateName = "SelectAndRequest.dotm"
if ($OfficeVersion.substring(0,2) -eq "17") {
    $StartUpLoc = "C:\Users\" + $env:USERNAME + "\AppData\Local\Packages\Microsoft.Office.Desktop_8wekyb3d8bbwe\LocalCache\Roaming\Microsoft\Word\STARTUP"
} else {
    $StartUpLoc = "C:\Users\" + $env:USERNAME + "\AppData\Roaming\Microsoft\Word\STARTUP"
}

Copy-Item .\${TemplateName} -Destination $StartUpLoc -Force

if (Test-Path("${StartUpLoc}\${TemplateName}")) {
    Write-Host "CATOVIS-Word Macro is successfully installed!"
} else {
    Write-Host "CATOVIS-Word Macro installation may failed..."
}

Read-Host("Pleas type any key:")