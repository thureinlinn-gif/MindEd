# MindEd - Mental Wellness Dashboard

A real-time mental wellness monitoring dashboard that visualizes brainwave patterns and provides AI-powered insights for stress management and cognitive optimization.

## Features

- **Real-time Brainwave Visualization** - Interactive charts displaying Alpha, Beta, Theta, Delta, and Gamma wave patterns
- **Mental State Analysis** - Dynamic assessment of focus, relaxation, stress, and creativity levels
- **AI-Powered Assistant** - Conversational interface for personalized wellness guidance using Google Gemini 2.5 Flash
- **Stress Monitoring** - Visual gauge with real-time stress level tracking
- **Daily Trend Analysis** - Historical data visualization for pattern recognition
- **Personalized Recommendations** - Context-aware suggestions for mental wellness improvement
- **Accessibility Controls** - Customizable interface options for enhanced usability
- **Multiple Viewing Modes** - Focus, Relax, Sleep, and Meditate modes with tailored visualizations

## Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe component development
- **Vite** for fast build tooling and hot module replacement
- **Tailwind CSS** for utility-first responsive styling
- **shadcn/ui** for accessible, customizable UI components
- **Recharts** for data visualization and interactive charts
- **React Router DOM** for client-side routing
- **TanStack React Query** for server state management
- **React Hook Form + Zod** for form handling and validation

### Backend
- **Deno Edge Functions** for serverless API endpoints
- **Google Gemini 2.5 Flash** for AI-powered chat functionality
- **PostgreSQL** database with Row Level Security
- **Real-time subscriptions** for live data updates

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mindease
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env file with the following variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── BrainwaveChart.tsx
│   ├── DailyTrendChart.tsx
│   ├── MentalStateCard.tsx
│   ├── StressGauge.tsx
│   └── ...
├── pages/              # Route pages
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # Main dashboard
│   └── Assistant.tsx   # AI chat interface
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── integrations/       # External service integrations

supabase/
└── functions/          # Edge functions
    └── chat/           # AI chat endpoint
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Backend API URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public API key |
| `GEMINI_API_KEY` | (Optional) Google Gemini API key for local development |


