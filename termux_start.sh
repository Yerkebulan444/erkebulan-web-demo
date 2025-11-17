#!/data/data/com.termux/files/usr/bin/bash
# termux_start.sh - Quick start for Termux
pkg update -y
pkg install python -y
python -m venv venv
. venv/bin/activate
pip install -r requirements.txt || true
python3 auto_train.py &
python3 bot_777sss.py &
python3 bot_777sss_impulse_v2.py &
echo "Started in Termux"
