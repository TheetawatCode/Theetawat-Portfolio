# Theetawat Portfolio

Personal portfolio for Theetawat Premsawat, rebuilt with Next.js App Router, TypeScript, Tailwind CSS v4, and pnpm.

## Development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Content updates

Portfolio content is centralized in `src/data/portfolio.ts`:

- Add or edit projects in `projects`.
- Add or edit skill categories in `skillGroups`.
- Add or edit roles in `experiences`.
- Update profile links, biography, and education in their named exports.

Sections are composed in `src/app/page.tsx`. Shared design tokens and responsive styles live in `src/app/globals.css`.

## Commands

- `pnpm dev` — local development
- `pnpm lint` — code-quality checks
- `pnpm build` — production build
- `pnpm start` — run the production server

## Deployment

The project is ready for Vercel. Keep the framework preset as Next.js and use pnpm for dependency installation.
