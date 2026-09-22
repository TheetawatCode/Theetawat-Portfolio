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
- The homepage shows the first three projects with `featured: true`, in array order. All projects remain available at `/projects`; each appears once there.
- The project collection filters by `status`, initially shows six cards, and reveals more on request. `Coming Soon` entries live in a collapsed ideas list, outside the card filters.
- Keep statuses accurate: `Live` for a public experience, `In Progress` for active work, `Prototype` for explorations, and `Coming Soon` for planned ideas. Describe mockups and simulated flows honestly.
- Set `selected: true` on up to three certificates to feature them. The remaining credentials are available in the expandable list.
- Add or edit skill categories in `skillGroups`.
- Add or edit roles in `experiences`.
- Use experience `kind: "work"` or `kind: "training"` to distinguish professional roles from courses. Professional roles appear first; details after the first two bullets remain expandable.
- Update profile links, biography, and education in their named exports.

Sections are composed in `src/app/page.tsx`. Shared design tokens and responsive styles live in `src/app/globals.css`.

## Commands

- `pnpm dev` — local development
- `pnpm lint` — code-quality checks
- `pnpm typecheck` — generate Next.js route types and check TypeScript
- `pnpm build` — production build
- `pnpm start` — run the production server

## Deployment

The project is ready for Vercel. Keep the framework preset as Next.js and use pnpm for dependency installation.
