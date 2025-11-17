# Erkebulan AI Trading Suite — Hybrid Multi-Model Intelligence LAB
**Enterprise-grade AI/ML Trading System • Multi-model Ensemble • Auto-Training • Telegram SaaS • Ready-to-Scale**

🔗 **Live Demo UI:** https://yerkebulan444.github.io/erkebulan-web-demo/  
🔗 **Listing / Sale:** Flippa — Full AI-Powered Forex Trading SaaS (Erkebulan AI Trading Suite)

---

## Executive Summary
**Erkebulan AI Trading Suite** is a turnkey, research-grade AI trading laboratory: a hybrid multi-model forecasting stack combined with production-ready trading bots, an automated feedback → retrain pipeline, and a subscription SaaS delivery layer via Telegram/Stripe.

This offering is packaged as a full IP transfer (code, models, dataset, docs) and is built for buyers who want a scalable AI trading product — not a single bot script. It is positioned as a brand-new research product (never publicly monetized) and includes enterprise-grade ML artifacts (multiple model snapshots, ensemble artifacts, and model meta) ready for deployment.

**Value proposition:** multi-model ensemble (RF/XGB/meta), auto-training loop, dataset with labeled outcomes, two complementary bot engines (stable + impulse), SaaS delivery and subscription handling, and an AI analysis layer for real-time commentary.

---

## Quick Highlights (for buyers)
- Multi-model ML core: `model.pkl`, `model_rf.pkl`, `model_xgb.pkl`, `model_ss.pkl`, `model_backup.pkl`, `model_meta.json`  
- Feature-engineered dataset: `signals_dataset.csv` (15 features per signal + profit/loss labels)  
- Two production bots:
  - `bot_777sss.py` — stable bot (5 assets)
  - `bot_777sss_impulse_v2.py` — impulse bot (18 assets, flat detection)
- Auto-training: `auto_train.py` — RF, XGBoost, Ensemble flows and meta model
- Feedback loop: `feedback_handler.py` — records trade outcome labels into CSV
- SaaS & payments: `saas_signal_bot.py`, `subscription_bot_stripe.py` — subscription delivery + Stripe integration
- Real-time AI layer: `ai_financial_vision.py` — live signal analysis & commentary engine
- Demo UI: GitHub Pages static dashboard (reads `sample_signals.json`) — instant live demo for buyers

---

## Architecture Overview (high level)
### Core design principles
- **Hybrid approach:** deterministic indicator filters + probabilistic ML scoring
- **Self-improving:** automated feedback loop updates the dataset, triggers retraining
- **Multi-model ensemble:** different learners capture diverse market regimes
- **Separation of concerns:** clear boundary between Signal Engine, ML, Bots, and Delivery
- **Zero dependency on paid external APIs** for signals — runs on standard market feeds / TradingView connectors when deployed

---

## ML Pipeline (technical)
- **Features (15):** score, rsi, ema20, ema50, macd, macd_sig, phase, ema_gap, ema_gap_pct, macd_hist, rsi_dist_50, direction_up, ema_ratio, rsi_slope, trend_strength (consistent order preserved in CSV header)
- **Labels:** `result` (profit/loss), `signal_id`, `model_name`, `model_n_features`
- **Models produced:** RandomForest (`model_rf.pkl`), XGBoost (`model_xgb.pkl`), ensemble/meta (`model.pkl`, `model_ss.pkl`), backup model (`model_backup.pkl`), metadata (`model_meta.json`)
- **Training trigger:** `auto_train.py` runs when dataset grows beyond `MIN_ROWS` (configurable). It conducts CV, trains RF/XGB, builds ensemble meta, exports model artifacts and model_meta with accuracy/metrics and timestamp.
- **Evaluation:** per-model accuracy, confusion matrix, and meta-model selection logic are logged and snapshot saved.

---

## Trading Engine & Bots
### `bot_777sss.py` — Stable Bot
- Targets 5 major FX assets (configurable)
- Conservative scoring thresholds (`MIN_SCORE`, `ML_THRESHOLD`)
- Delay and phase logic to align with candle cycles
- Base stake and risk management parameters configurable via env

### `bot_777sss_impulse_v2.py` — Impulse / Flat Detection Bot
- 18 assets with impulse detection and flat-mode avoidance
- Multiple safety filters, ML thresholding and ensemble advice built-in
- Uses `model.pkl` by default, falls back to RF/XGB ensemble logic
- Designed to provide higher frequency signals while keeping risk controls

Common bot features:
- Model file path configurable via `MODEL_FILE` env var
- CSV logging of every signal with full 15-feature row and ML advice
- Telegram integration for signal delivery and admin notifications

---

## SaaS Delivery & Payments
- `saas_signal_bot.py`: reads newly appended signals from `signals_dataset.csv` (or from API/microservice) and distributes signals to paid subscribers via Telegram groups/private channels.
- `subscription_bot_stripe.py`: Stripe integration for subscription flows (webhook ready); includes code to validate subscription status and grant access in SaaS bot.
- Designed for one-click enablement of paid tiers (monthly/quarterly/VIP).

---

## Feedback & Dataset
- `feedback_handler.py` collects user-reported or automated trade results (profit/loss) and appends labeled rows to `signals_dataset.csv`. This enables supervised training and reduces manual labeling load.
- Dataset schema preserved, ready for offline analysis or re-training at scale.

---

## AI Financial Vision
- `ai_financial_vision.py` operates as a real-time analysis layer. It:
  - consumes live signals,
  - runs additional micro-models and heuristics,
  - generates human-readable commentary and confidence narrative,
  - provides extra confidence score to the SaaS delivery layer.

---

## Included Assets (full transfer if purchased)
**Code & Execution**
- All `.py` scripts (bots, auto_train, feedback handler, SaaS & stripe modules, AI vision)
**Models**
- `model.pkl`, `model_rf.pkl`, `model_xgb.pkl`, `model_ss.pkl`, `model_backup.pkl`
**Metadata & Dataset**
- `model_meta.json`, `signals_dataset.csv`
**Demos & UI**
- `index.html` demo UI, `sample_signals.json`, GitHub Pages deployment instructions
**Docs & Scripts**
- `README.md`, `run.sh`, `termux_start.sh`, start/install guides
**Other**
- Screenshots, screen recordings and VPS/Termux setup guides (as attachments)

---

## Installation & Quickstart (VPS / Debian / Termux)
> Note: For production use a VPS with stable public IP, SSL and monitoring. The repo contains `run.sh` and `termux_start.sh` for convenience.

**Quick start (example VPS / Debian):**
```bash
git clone https://github.com/Yerkebulan444/erkebulan-web-demo.git
cd mltradingpro  # repo root (packaged release)
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
# run training or bots as needed
python3 auto_train.py
python3 bot_777sss.py
python3 bot_777sss_impulse_v2.py
# copy termux_start.sh into device and run
bash termux_start.sh
# 1) Закрываем heredoc (если ещё не закрыт)
echo "EOF" >> README.md

# 2) Создадим run.sh и termux_start.sh (если ещё не созданы)
cat > run.sh << 'EOF'
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
