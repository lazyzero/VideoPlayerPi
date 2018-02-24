#!/bin/bash
sleep 10

point-rpi
xset s noblank
xset s off
xset -dpms
unclutter &

cd /home/pi/VideoPlayer
chromium-browser --kiosk --incognito file://~/VideoPlayer/index.html &
sudo node app.js
sudo fuser -k -n tcp 8888
sudo killall chromium-browser

