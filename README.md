# VideoPlayerPi
A first project to explore NodeJS and Johnny-Five on RaspberryPi

Requires Nodejs 8.x
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
```

To autorun the VideoPlayerPi edit `/home/pi/.config/lxsession/LXDE-pi/autostart`
```
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@xscreensaver -no-splash
@lxterminal -e /home/pi/VideoPlayer/run.sh #<-- add this line
@point-rpi
```
