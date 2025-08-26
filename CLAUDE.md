# SiteSheep.io Project

## Project Overview
This is a modern Next.js website for SiteSheep.io, built with TypeScript and Tailwind CSS, optimized for deployment on Vercel.

## Brand Colors
- **Primary Gray**: `#595758`
- **White**: `#FFFFFF`
- **Dark Brown**: `#231815`
- **Gradients**: Linear from #595758 to #231815

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure
```
/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── public/           # Static assets
├── .vscode/          # VS Code settings
└── vercel.json       # Vercel configuration
```

## Development Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Key Features
- Responsive design with mobile-first approach
- Modern gradient backgrounds
- Card-based feature sections
- Call-to-action section
- Optimized for performance

## Deployment
The site is configured for automatic deployment on Vercel:
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploy on push to main branch

**IMPORTANT**: Always auto-deploy after making any changes to the website by running:
```bash
git add .
git commit -m "Update: [brief description of changes]"
git push
```

## Future Enhancements
- Add more pages (About, Services, Contact)
- Implement contact form functionality
- Add analytics tracking
- SEO optimizations
- Dark mode support

## Session Management
To save and restore context when approaching token limits:

### Ending a Session:
1. Type `/end-session` 
2. I'll create/update SESSION_HISTORY.md with a complete recap
3. Type `/clear` to reset context

### Starting a New Session:
1. After `/clear`, type `/prime`
2. I'll read SESSION_HISTORY.md to restore context
3. Continue working from where we left off

**Last Session**: See SESSION_HISTORY.md for details