@echo off
echo ========================================================
echo        PARAM INDUSTRIES - Website Launcher
echo ========================================================
echo Starting local production preview server...
start "" "http://localhost:4173"
npm run preview -- --port 4173 --host
pause

