# CLAUDE.md — FoodBlogApp

Questo file fornisce a Claude Code il contesto persistente del progetto. Va aggiornato man mano che il progetto evolve.

## Obiettivo del progetto

Costruire **FoodBlogApp** (titolo del sito provvisorio: *"Tavola Rosa"*), un blog statico in italiano di **recensioni di ristoranti**, con vibes *cute e femminili* (palette rosa cipria, tono di voce caldo), partendo dal template [Fuwari](https://github.com/saicaca/fuwari).

## Struttura della directory

Template appiattito alla root del progetto. Repository git inizializzato (branch `main`).

```
FoodBlogApp/                       ← working directory + git root
├── .claude/
│   ├── CLAUDE.md                  ← questo file
│   └── SESSION_NOTES.md           ← log per sessione
├── .gitignore
├── README.md                      ← README originale di Fuwari
├── package.json                   ← pnpm, Astro 5
├── astro.config.mjs               ← config Astro (site URL, integrazioni, plugin markdown)
├── biome.json
├── tailwind.config.cjs
├── tsconfig.json
├── svelte.config.js
├── postcss.config.mjs
├── pagefind.yml
├── frontmatter.json
├── vercel.json
├── public/favicon/
├── scripts/new-post.js
└── src/
    ├── config.ts                  ← sito, navbar, profilo (PERSONALIZZATO)
    ├── content/
    │   ├── config.ts              ← schema collections
    │   ├── posts/                 ← articoli .md (ancora i demo Fuwari)
    │   └── spec/about.md
    ├── components/                ← componenti Astro + Svelte
    ├── layouts/
    ├── pages/                     ← [...page].astro, archive, about, rss, robots, posts/[...slug]
    ├── styles/                    ← main.css, markdown.css, variables.styl ...
    ├── i18n/
    │   ├── translation.ts         ← mappa lang → traduzione (it registrato)
    │   ├── i18nKey.ts
    │   └── languages/             ← en, es, id, it, ja, ko, th, tr, vi, zh_CN, zh_TW
    ├── plugins/                   ← remark/rehype custom + expressive-code
    ├── assets/images/             ← avatar e banner demo (da sostituire)
    ├── constants/
    ├── utils/
    └── types/config.ts            ← tipi SiteConfig / ProfileConfig / NavBarConfig

## Stack tecnico

- **Framework:** Astro 5.13.10 (static site generator)
- **UI:** Svelte 5 + Tailwind CSS 3.4
- **Linguaggio:** TypeScript
- **Package manager:** pnpm 9 (obbligatorio — `preinstall` blocca npm/yarn)
- **Runtime richiesto:** Node.js ≥ 20, pnpm ≥ 9
- **Linter/formatter:** Biome
- **Search:** Pagefind (indicizzazione statica)
- **Markdown:** remark/rehype con plugin custom (admonitions, GitHub cards, expressive code)
- **Deploy target:** Vercel (presente `vercel.json`), ma è supportato qualunque host statico

## Comandi principali

Tutti da eseguire nella root del progetto (`FoodBlogApp/`):

| Comando | Cosa fa |
|---|---|
| `pnpm install` | Installa dipendenze |
| `pnpm dev` | Dev server su `localhost:4321` |
| `pnpm build` | Build di produzione in `./dist/` + indicizzazione Pagefind |
| `pnpm preview` | Anteprima build locale |
| `pnpm check` | Type/error check Astro |
| `pnpm format` | Formatta con Biome |
| `pnpm new-post <filename>` | Crea un nuovo articolo |

## File chiave da personalizzare

1. **`src/config.ts`** — già personalizzato: titolo "Tavola Rosa", `lang: "it"`, `hue: 340` (rosa cipria), navbar senza link GitHub, profilo con placeholder Instagram/TikTok. Nome/bio/social ancora placeholder.
2. **`astro.config.mjs`** — `site` ancora puntato a `https://fuwari.vercel.app/`, da cambiare prima del deploy.
3. **`src/content/spec/about.md`** — pagina "Chi sono", ancora il testo demo Fuwari.
4. **`src/content/posts/`** — contiene i post demo Fuwari (draft, expressive-code, markdown, markdown-extended, video, guide). Da eliminare quando si inizia a pubblicare.
5. **`src/assets/images/demo-avatar.png` e `demo-banner.png`** — da sostituire con asset a tema food/rosa.
6. **`public/favicon/`** — favicon Fuwari di default, da sostituire.
7. **`src/i18n/languages/it.ts`** — traduzione italiana creata e registrata in `translation.ts` (alias `it`, `it_it`). Tono "Autrice" al femminile.

## Frontmatter dei post

```yaml
---
title: Titolo del post
published: 2026-05-16
description: Descrizione breve
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: it    # solo se differisce dalla lingua del sito
---
```

## Convenzioni di lavoro

- Le risposte e i commit messages sono in **italiano**.
- Tono di voce del sito: caldo, femminile, accogliente — vibes "cute".
- Palette rosa cipria (hue 340). Se si vuole più caldo/saturo provare 345-350, più tenue 335.
- Lingua del sito: italiano. Tradurre eventuali nuove chiavi i18n anche in `it.ts`.

## TODO / prossimi passi suggeriti

- [ ] Inserire nome reale, bio e link social in `src/config.ts`
- [ ] Sostituire avatar e banner demo (`src/assets/images/`)
- [ ] Sostituire favicon (`public/favicon/`)
- [ ] Riscrivere `src/content/spec/about.md` (Chi sono)
- [ ] Eliminare i post demo Fuwari e creare il primo articolo di recensione
- [ ] Definire categorie/tag (es. *cucina italiana*, *brunch*, *pizzeria*, *fine dining*, *dolci*, *vegetariano*…)
- [ ] Configurare `site` URL definitivo in `astro.config.mjs` prima del deploy
- [ ] `pnpm install` e prima esecuzione di `pnpm dev` per verificare che il setup giri
- [ ] Considerare uno schema custom per le recensioni (rating, indirizzo, prezzo medio) in `src/content/config.ts`
