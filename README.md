# Fullstack Boilerplate

A modern fullstack web application boilerplate with a unified monorepo structure. Both frontend and backend share a single `src` directory with a common TypeScript configuration, allowing selective imports of only what's needed.

## Architecture

The project uses a **monorepo approach** where:
- **Frontend** (`src/client/`) - React application built with Vite
- **Backend** (`src/server/`) - Express server with tRPC API
- **Shared** (`src/shared/`) - Utilities and types shared between client and server
- **Single `tsconfig.json`** - Unified TypeScript configuration for both frontend and backend

This architecture enables type-safe communication between frontend and backend while maintaining clean separation of concerns.

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool with HMR
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework

### Backend
- **Express** - Web server framework
- **tRPC** - End-to-end typesafe APIs
- **Better Auth** - Authentication library
- **Prisma** - ORM for database management
- **PostgreSQL** - Database

### Development & Testing
- **TypeScript** - Type safety
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **React Query** - Server state management
- **Prettier** - Code formatter with Tailwind plugin

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure your database connection:

```bash
cp .env.example .env
```

### Database Setup

Generate Prisma client and push schema to database:

```bash
npm run db:generate
npm run db:push
```

### Development

Run both frontend and backend in development mode:

```bash
npm run dev
```

This starts:
- **Frontend** on `http://localhost:5173` (Vite dev server)
- **Backend** on `http://localhost:5000` (Express server)

The frontend proxies tRPC and API requests to the backend.

### Available Scripts

- `npm run dev` - Start frontend and backend in development mode
- `npm run client:dev` - Start only frontend dev server
- `npm run server:dev` - Start only backend dev server
- `npm run build` - Build both frontend and backend for production
- `npm run client:build` - Build frontend only
- `npm run server:build` - Build backend only
- `npm run start` - Start production server
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and apply database migrations

## Project Structure

```
src/
├── client/              # React frontend
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── app.tsx          # Root component
│   ├── main.tsx         # Entry point
│   ├── trpc.ts          # tRPC client setup
│   └── auth.ts          # Client auth utilities
├── server/              # Express backend
│   ├── router.ts        # tRPC router definition
│   ├── trpc.ts          # tRPC server setup
│   ├── main.tsx         # Server entry point
│   ├── prisma.ts        # Prisma client instance
│   └── env.ts           # Environment variables
├── shared/              # Shared utilities
│   └── utils.ts         # Common utilities
└── auth.ts              # Shared auth configuration
```

## Key Features

- **Type-Safe APIs** - tRPC ensures end-to-end type safety between frontend and backend
- **Authentication** - Better Auth integration for secure user authentication
- **Database ORM** - Prisma for type-safe database queries
- **Styling** - TailwindCSS with Prettier integration for consistent formatting
- **Testing** - Vitest for unit and integration tests
- **Protected Routes** - Built-in protected route component for authenticated pages
