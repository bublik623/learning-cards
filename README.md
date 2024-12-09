# Learning Cards Application

This project demonstrates a learning cards feature that displays a collection of learning modules and events to the user. It includes both a **frontend** (Vue 3 + TypeScript + Bootstrap) and an **backend** (Node.js/Express + TypeScript) that serves mock data generated via a factory.

## Features

- **Frontend:**
    - Written in Vue 3 using the Composition API and TypeScript.
    - Uses Bootstrap for responsive UI and consistent styling.
    - Displays a row of learning cards for modules and events.
    - Shows loading and error states when fetching data from the backend.
- **Backend:**
    - A Node.js/Express server written in TypeScript.
    - Provides a `/api/learning-content` endpoint that returns generated mock data.
    - Uses factories to create random modules and events, simulating real data.

## Requirements

- **Node.js** (v14+ recommended)
- **npm** or **yarn** package manager

## Setup Instructions

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd server
npm install
```

## Run Instructions

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd server
npm run start
```
