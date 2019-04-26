pushd
git add .
git commit -m "sync !mytime!"
for /f "delims=" %%a in ("%CD%") do set CURR=%%~na
del G:\@Go\%CURR%*.bundle /f
git bundle create repo.%CURR%_!mytime!.bundle --all
goto :EOF

@echo off && setlocal enabledelayedexpansion
call :getDateTime mytime
echo !mytime!
goto :eof

:getDateTime
for /f %%j in ('Date /T') do set s=%%j
set t=%time: =0%
set s=%s:/=_%
set s=%s%_%t:~0,8%
set s=%s::=_%
set %1=!s!
goto :EOF
