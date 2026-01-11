# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive educational documentation site teaching SVG (Scalable Vector Graphics) development. Built with Next.js 14 and MDX for content pages, featuring ~43 lessons covering fundamentals through advanced animations with GSAP and Matter.js physics.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Content System
- **MDX Pages**: Lesson content lives in `src/app/(content)/*/page.mdx` (43 pages)
- **Navigation Config**: `src/config.js` defines page order and hierarchy via `navConfig.pages` (hierarchical menu) and `navConfig.links` (flat sequential order for prev/next navigation)
- **Route Groups**: The `(content)` folder is a Next.js route group that applies `ContentLayout` (sidebar + next button) to all lesson pages

### Layout Structure
```
RootLayout (src/app/layout.tsx)
├── AppHeader - Site header
└── ContentLayout (src/app/(content)/layout.tsx) - For lesson pages only
    ├── Navigation - Sidebar with hierarchical menu
    └── Nextbutton - Sequential navigation between lessons
```

### Component Organization
Components in `src/components/` fall into these categories:

- **Chapter demos** (`*chapter/`): Interactive SVG examples embedded in lessons (e.g., `colorschapter/`, `transformschapter/`)
- **Animation libraries**: `gsap/` (GreenSock demos), `matterjs/` (physics simulations), `bganimation/` (homepage particles)
- **Bezier demos** (`*bezierdemo/`): Path visualization tools
- **UI components**: `blocks/` (code display with syntax highlighting), `navigation/`, `nextbutton/`, `appheader/`

### Key Dependencies
- **GSAP** (`@gsap/react`): Animation library used in greensock lesson demos
- **Matter.js**: 2D physics engine for particle simulations in matterjs lessons
- **react-code-blocks**: Syntax highlighting for code examples
- **MUI**: UI components (icons, material design)

### Adding New Lessons
1. Create folder in `src/app/(content)/[lesson-name]/`
2. Add `page.mdx` with lesson content
3. Update `src/config.js`: add to both `pages` array (for menu) and `links` array (for sequential navigation)
