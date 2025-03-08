Collecting workspace information# Moon Phase Now

A visually immersive Next.js application that displays accurate moon phases for any date with dynamic backgrounds, smooth transitions, and lunar information.

## Features

- **Real-time Moon Phase Display**: Shows accurate moon phase for the current date
- **Date Selection**: Select any date to see its corresponding moon phase
- **Dynamic Backgrounds**: Background changes to match the current moon phase
- **Smooth Transitions**: Animations between phase changes
- **Detailed Information**: Learn about the meaning and significance of each moon phase

## Technologies Used

- [Next.js](https://nextjs.org/) 15.2.1
- [React](https://reactjs.org/) 19.0.0
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- CSS-in-JS (styled-jsx)

## Project Structure

```
moon-phase-now/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Main application page
│   │   ├── layout.tsx      # Root layout component
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── MoonDisplay.tsx  # Moon visualization component
│   │   └── MoonPhaseInfo.tsx# Moon phase information component
│   └── utils/
│       └── moonPhase.js    # Logic for calculating moon phases
├── public/
│   ├── new-moon.webp       # Moon phase images
│   ├── waxing-crescent.webp
│   ├── first-quarter.webp
│   └── ...other moon phase images
```

## How It Works

The application calculates the moon phase for any given date using astronomical algorithms. It identifies eight distinct phases:

- New Moon
- Waxing Crescent
- First Quarter
- Waxing Gibbous
- Full Moon
- Waning Gibbous
- Third Quarter
- Waning Crescent

Each phase has a corresponding image and description that helps users understand lunar cycles and their significance.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/fcen/moon-phase-now.git
cd moon-phase-now
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- The application shows the current moon phase by default
- Use the date picker to select any date and see its corresponding moon phase
- Learn about the meaning and significance of each phase from the information provided

## License

MIT License

## Acknowledgements

- Moon phase calculation algorithm based on astronomical formulas
- Images sourced from astronomical databases
