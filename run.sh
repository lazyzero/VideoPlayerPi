#!/bin/bash
sleep 10

point-rpi
xset s noblank
xset s off
xset -dpms
unclutter &

cd /home/pi/VideoPlayer
chromium-browser --kiosk file://~/VideoPlayer/index.html --start-fullscreen --disable-infobars --disable-session-crashed-bubble &
sudo node app.js
sudo fuser -k -n tcp 8888
sudo killall chromium-browser

