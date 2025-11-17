#!/bin/bash
# run.sh - Quick start (VPS / Debian)
set -e
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt || true
nohup python3 auto_train.py &>/dev/null &
nohup python3 bot_777sss.py &>/dev/null &
nohup python3 bot_777sss_impulse_v2.py &>/dev/null &
echo "Bots and auto-train started in background."
