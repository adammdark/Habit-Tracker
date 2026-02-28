# 🔥 Habit Tracker

A clean, modern habit tracking web app built with **React**, **TypeScript**, **Material UI**, and **Zustand**. Build consistency, track your streaks, and stay on top of your daily goals.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)

---

## ✨ Features

- **Add Habits** — Quickly create new habits with a name to track daily
- **Mark as Complete** — Hit the complete button each day to log your progress
- **Streak Tracking** — Automatically calculates your current streak based on daily completions
- **Habit Stats Dashboard** — At-a-glance overview including:
  - 📋 Total Habits
  - 🏆 Longest Streak
  - ✅ Today's Completion Rate
- **Delete Habits** — Remove habits you no longer want to track
- **Persistent State** — State managed efficiently with Zustand and stored it on local storage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Material UI (MUI) | Component library & styling |
| Zustand | Global state management |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/habit-tracker.git
   
   cd habit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---

## 🧠 How Streak Calculation Works

A streak is counted as the number of consecutive days a habit has been marked complete up to and including today. If a day is missed, the streak resets to 0. Completing a habit today starts or continues the streak.

---

## 🎥 Live Demo 

To see the live demo please click [here](https://habit-tracker-eight-steel.vercel.app/)

---

## 👨‍💻 Author

Made with ❤️ by [M A Hussian](https://github.com/your-username)

> If you found this project useful, consider giving it a ⭐ on GitHub!
