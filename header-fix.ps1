$shouldBe = '<a href="/catovis-docs/zh/" class="nav-link router-link-exact-active router-link-active">'
$indexContents = Get-Content .\docs\index.html -Encoding UTF8

for ($i=0;$i -lt $indexContents.Length; $i++) {
    if ($indexContents[$i].Contains("简体中文")) {
        echo "hit"
        $indexContents[$i-1] = $shouldBe
    }
}

$indexContents -join "`n" | Set-Content ./index2.html -Encoding UTF8