# Eric Babu | Product Owner portfolio

A portfolio for Product Owner and Product Manager roles, built from the MIT-licensed
[magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) template
(Next.js, React, Tailwind CSS, shadcn/ui and Magic UI).

The homepage has two distinct sections:

- **Shipped Products**: what exists, who it serves, my contribution and reported outcomes.
- **Case Studies**: problems, research, prioritisation, trade-offs and learning, with the project type clearly labelled.

## Run it locally

You need Node.js 18 or later. No admin rights are required.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Unfinished items marked draft stay off the site, including local preview.
Set `SHOW_DRAFTS=true` to see them on a machine that is not a Vercel
production deployment. They never appear in the sitemap or on Vercel production.

Useful checks:

```bash
npm run lint        # code style
npm run typecheck   # TypeScript
npm run build       # production build (public view: drafts excluded)
```

To preview drafts in a local production build, create a file called `.env.local`
containing `SHOW_DRAFTS=true`, then run `npm run build` and `npm run start`.
To see exactly what the public will see while developing, set `SHOW_DRAFTS=false`.

## Where to edit content

You should not need to change layout code to update content.

| What                                  | File                          |
| ------------------------------------- | ----------------------------- |
| Name, headline, about, experience, education, skills, contact | `src/data/resume.tsx` |
| Shipped Products                      | `src/data/shipped-products.ts` |
| Case Studies                          | `src/data/case-studies.ts`    |
| Types (what fields exist)             | `src/data/types.ts`           |

Each product and case study has its own `status`: `"published"` or `"draft"`.

### Publish a case study

1. Set `projectType` to its true type (the build stops if it is still `"unconfirmed"`).
2. Fill in at least `executiveSummary` and `problem`.
3. For a group assignment, also fill in `role.individualContribution`.
4. Set `status: "published"`.

Keep `proposedMetrics` (plans) separate from `measuredResults` (real data).
Only add results you have actually measured.

### Add screenshots, a portrait or the CV

- **Screenshots:** put images in `public/covers/` and add `cover: { src, alt }` to the entry. Use real screenshots only. Until then a neutral cover is shown.
- **Portrait:** add `public/portrait.jpg` and set `avatarUrl: "/portrait.jpg"` in `src/data/resume.tsx`. Until then an "EB" avatar is shown.
- **CV download:** add a PDF at `public/Eric-Babu-Product-Owner-CV.pdf`. The button appears automatically. The CV contains a phone number, so use a copy you are happy to publish.
- **Live URL:** set `url` on a product. If `url` is missing, the "Visit website" button is not shown.

### Blog

The blog is hidden. Add an `.mdx` file to `content/` (see `content/README.md`) and the
Blog link and pages appear automatically.

## Before deploying

Set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) so links, the sitemap
and social previews use your real address. This project does not deploy itself.

## Licence

MIT. Original template copyright (c) 2024 Dillion Verma; modifications copyright (c) 2026 Eric Babu.
See [LICENSE](./LICENSE).
