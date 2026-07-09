# CyberSafe PK - Cybersecurity Awareness Platform

![React](https://img.shields.io/badge/React-18-61dafb.svg)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.10-ff6f00.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A cybersecurity awareness and education platform aimed at Pakistan, combining a React front end with client-side ML (TensorFlow.js) for phishing/threat detection, plus a full education and community layer.

## Why this project

Most cybersecurity-awareness content is generic and text-heavy. CyberSafe PK pairs interactive tooling (file scanning, a forensics lab, quizzes) with a client-side ML model, so threat detection runs in the browser with no server round-trip — and wraps it in localized content and guides for individuals, small businesses, and enterprises.

## Features

- **ML-powered threat detection**: TensorFlow.js model for phishing/malware pattern detection, running client-side
- **Forensics Lab & Demo**: hands-on file/content analysis exercises
- **Learning Hub**: structured cybersecurity education content
- **Interactive Quiz + Leaderboard**: gamified assessment of security awareness
- **Audience-specific guides**: separate tracks for individuals, small businesses, and enterprises
- **Community Forum & Social Feed**: user-facing discussion and awareness-sharing surfaces
- **News & Insights**: curated cybersecurity news feed
- **Complaints/reporting flow**: structured incident reporting

## Tech Stack

- **Frontend**: React 18, React Router
- **ML**: TensorFlow.js (client-side inference)
- **Styling**: Tailwind CSS, Radix UI primitives
- **Animations**: Framer Motion

## Installation

```bash
npm install
npm start
```

See [API_SETUP.md](API_SETUP.md) for any external API keys required, and [ASSETS.md](ASSETS.md) for asset handling.

## Project Structure

```
src/
├── components/    # Feature components (Quiz, ForensicLab, LearningHub, CommunityForum, ...)
├── App.js         # Routing and app shell
└── index.js       # Entry point
```

## Scope note

This is a front-end education/awareness platform, not a production security product — the ML detection is a demonstration of client-side inference patterns, not a vetted threat-detection engine. Frame it accordingly: strong for showing React architecture, ML integration, and building a large multi-feature app end-to-end.

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Made by Faisal Hakimi**
