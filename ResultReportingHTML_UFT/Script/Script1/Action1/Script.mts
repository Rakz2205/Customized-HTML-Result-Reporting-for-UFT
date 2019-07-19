desktopReporter "DONE STEP","","",false
wait 5
desktopReporter "Fail Step","True","False",false
wait 5
desktopReporter "Pass Step","True","True",false




RegisterUserFunc "Reporter", "ReportEvent", "desktopReporter"

Reporter.ReportEvent "DONE STEP","","",false

Reporter.ReportEvent "Fail Step","True","False",false

Reporter.ReportEvent "Pass Step","True","True",false
