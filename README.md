# Nuxt Minimal Starter

Welcome to the Nuxt Minimal Starter.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Live Preview

You can see a live preview of the project at:

[Live Preview](https://nuxt-test-beige.vercel.app/)

## Project Overview

This project is a front-end application built with Nuxt.js. It is designed to demonstrate the implementation of a given design while ensuring accuracy, responsiveness, and interactivity. The primary focus is on developing a scalable and maintainable codebase.

## Development Process

### Approach

- Set up the Nuxt.js project structure with reusable components.
- Reading Nuxt.js documentation for the project
- Implement layouts and pages following the design specifications.
- Setup Tailwind v4 for the project
- Implement Reusable Components for the project
- Ensure responsiveness across different screen sizes.
- Conduct testing to validate functionality and correctness.

### Challenges Faced & Solutions

## Development Process

### Approach

- Set up the Nuxt.js project structure with reusable components.
- Read the Nuxt.js documentation for the project.
- Implement layouts and pages following the design specifications.
- Set up Tailwind v4 for the project.
- Implement reusable components for the project.
- Ensure responsiveness across different screen sizes.
- Conduct testing to validate functionality and correctness.

### Challenges Faced & Solutions

1. **First Experience with Nuxt.js**: This was my first time using Nuxt.js. Despite having some experience with Vue.js, I found the structure confusing as I came from a React.js and Next.js background.

   - _Solution_: Read the Vue.js and Nuxt.js documentation, watched YouTube tutorials, and consulted AI for clarifications on concepts I found confusing.

2. **Implementing UI Functionality**: Some UI elements like modals, toggles, and dropdowns were not clearly defined in the Figma design, making their implementation uncertain.

   - _Solution_: Focused on implementing necessary features such as table search, checkboxes, and popovers for better functionality within the table component.

3. **State Management and Reusability**: Managing state in Nuxt.js is different from React, where hooks like `useState` and `useEffect` are used. Understanding Vue’s approach to reusable logic via composables (`use*` functions), `ref`, `reactive`, `computed`, and `watch` was initially challenging.

   - _Solution_: Watched YouTube tutorials, read Vue.js documentation, and consulted AI to understand Vue’s reactivity system. Implemented reusable logic through composables (e.g., `useTable`) to encapsulate shared functionality, similar to React hooks.

4. **Ensuring Responsiveness Across All Platforms**: Proper rendering across mobile, tablet, and desktop devices was essential.

   - _Solution_: Used Tailwind’s media queries and Nuxt’s built-in responsive utilities to ensure a smooth user experience on different screen sizes.

5. **Deployment Issues**: Encountered issues with Vite bundling CSS, causing some styles to be excluded during build time.
   - _Solution_: Used `lightningcss` in the Vite configuration for optimized CSS bundling and correct style inclusion during the build process.

## Project Structure

Below is the folder structure of the project:

```
nuxt-test/
├── assets/             # Uncompiled assets such as stylesheets and images
│   └── css/            # CSS files
├── components/         # Reusable Vue components
│   └── common/         # Component for reusable Vue element
│       └── icon/       # Component for custom icon vue element
│   └── ui/             # Component for reusable UI element
├── composables/        # Custom composable functions (useTable)
├── constants/          # Application constants
├── layouts/            # Layout components
├── pages/              # Application views and routes
├── public/             # Publicly accessible files
├── server/             # Server-related code
├── utils/              # Utility functions
├── .gitignore          # Git ignore file
├── README.md           # Project documentation
├── app.vue             # Main application component
├── eslint.config.mjs   # ESLint configuration
├── nuxt.config.ts      # Nuxt configuration file
├── package-lock.json   # Lockfile for npm dependencies
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Cloning the Repository

To start working on this project, clone the repository:

```bash
git clone https://github.com/Dogtear/nuxt-test.git
cd nuxt-test
```

### Installation

Ensure you have all dependencies installed:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Running the Project Locally

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

For deploying the project, follow these steps:

1. Build the project using `npm run build`.
2. Use a hosting provider such as Vercel, Netlify, or any static site host.
3. Follow the specific deployment instructions for your hosting provider.
