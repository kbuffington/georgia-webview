ls out\*.* -rec | %{ $f=$_; (gc $f.PSPath) | %{ $_ -replace "`"/_next", "`"./_next" } | %{ $_ -replace "`"/static", "`"./static" } | %{ $_ -replace "`"/favicon", "`"./favicon" } | sc $f.PSPath }
# ls out\*.js -rec | %{ $f=$_; (gc $f.PSPath) | %{ $_ -replace "`"/_next", "`"./_next" } | %{ $_ -replace "`"/static", "`"./static" } | sc $f.PSPath }
ls out\*.css -rec | %{ $f=$_; (gc $f.PSPath) | %{ $_ -replace [Regex]::Escape("url(/_next"), "url(../../../_next" } | %{ $_ -replace [Regex]::Escape("url(/static"), "url(../../../static" } | sc $f.PSPath }
