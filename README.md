# Sylvera Projects Web Application

A modern web application built with Next.js that displays environmental projects with their status, country, and related information. The application connects to the Sylvera API to fetch and display project data in an intuitive card-based interface.

## Features

- 🌍 **Project Dashboard**: Browse environmental projects with country and status information
- 🎨 **Modern UI**: Clean, responsive interface built with Tailwind CSS
- ⚡ **Performance**: Optimized with Next.js 15 and Turbopack
- 🧪 **Testing**: End-to-end testing with Playwright
- 🎯 **Type Safety**: Full TypeScript implementation
- 📱 **Responsive Design**: Works seamlessly across devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Testing**: Playwright
- **Code Quality**: Biome (formatting & linting)
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Sylvera API server running on `http://localhost:4000`

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run format` - Format code with Biome

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page (redirects to projects)
│   └── projects/       # Projects listing page
├── clients/            # API clients
│   └── sylvera-api/    # Sylvera API client configuration
├── components/         # Reusable UI components
│   ├── Card/          # Generic card component
│   ├── Page/          # Page layout components
│   └── ProjectCard/   # Project-specific card component
└── types.ts           # TypeScript type definitions
```

## API Integration

The application connects to a Sylvera API server expected to run on `http://localhost:4000`. The main endpoint used is:

- `GET /projects` - Retrieves a list of environmental projects

Each project includes:
- `id`: Unique project identifier
- `country`: Project location
- `status`: Current project status
- `url`: Optional project URL

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test:e2e`)
5. Format code (`npm run format`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Development

### Code Quality

This project uses Biome for code formatting and linting. Run `npm run format` to format your code before committing.

### Testing

End-to-end tests are located in the `e2e-tests/` directory and can be run with:

```bash
npm run test:e2e
```

Tests cover:
- Home page functionality
- Projects page rendering and data display

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - Typed JavaScript
- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [Biome](https://biomejs.dev/) - Fast formatter and linter
