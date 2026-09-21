@echo off
title Rep Ledger
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Get the LTS version from https://nodejs.org then run this again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo First run: installing packages. This takes a minute...
  call npm install
  if errorlevel 1 ( pause & exit /b 1 )
)
echo Starting Rep Ledger - your browser will open. Keep this window open while you use the app.
call npm run dev -- --open
pause
