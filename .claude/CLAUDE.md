# CLAUDE.md — FoodBlogApp

Questo file fornisce a Claude Code il contesto persistente del progetto. Va aggiornato man mano che il progetto evolve.

## Obiettivo del progetto

Costruire **FoodBlogApp**, un blog statico a tema food, partendo dal template [Fuwari](https://github.com/saicaca/fuwari) scaricato da GitHub.

Stato attuale: template scaricato, non ancora personalizzato. Non è ancora un repository git.

## Struttura della directory

Il template è attualmente innestato due livelli sotto la root:

```
FoodBlogApp/                       ← working directory
├── .claude/                       ← contesto Claude (questa cartella)
│   ├── CLAUDE.md                  ← questo file
│   └── SESSION_NOTES.md           ← log per sessione
└── fuwari-main/
    └── fuwari-main/               ← root effettiva del template Fuwari
        ├── README.md
        ├── package.json
        ├── astro.config.mjs
        ├── src/
        │   ├── config.ts          ← configurazione sito (titolo, profilo, navbar...)
        │   ├── content/posts/     ← articoli markdown
        │   ├── content/spec/about.md
        │   ├── components/        ← componenti Astro/Svelte
        │   ├── layouts/
        │   ├── pages/
        │   ├── styles/
        │   ├── i18n/              ← traduzioni UI
        │   └── plugins/           ← plugin remark/rehype custom
        ├── public/favicon/
        └── scripts/new-post.js
```

**Da decidere:** se appiattire l'innesto (spostare i file di `fuwari-main/fuwari-main/` alla root di `FoodBlogApp/`) prima di iniziare le personalizzazioni. Consigliato sì, per evitare percorsi scomodi.

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

Tutti da eseguire nella root del template (per ora `fuwari-main/fuwari-main/`):

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

1. **`src/config.ts`** — titolo sito, sottotitolo, lingua, theme color, banner, navbar, profilo (avatar/nome/bio/social), licenza.
2. **`astro.config.mjs`** — `site` URL (necessario per deploy/sitemap/RSS).
3. **`src/content/spec/about.md`** — pagina "About".
4. **`src/content/posts/`** — articoli demo da eliminare/sostituire.
5. **`src/assets/images/`** — avatar e banner demo.
6. **`public/favicon/`** — favicon (light/dark).
7. **`src/i18n/`** — eventuali traduzioni (se si vuole UI in italiano, valutare se esiste `it.ts` o se crearne uno).

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

- Le risposte e i commit messages sono in **italiano** (preferenza utente).
- Non ancora un git repo: valutare `git init` prima delle modifiche sostanziali.
- Prima di modifiche grosse al template, considerare di flatten della cartella nidificata.

## TODO / prossimi passi suggeriti

- [ ] Decidere se appiattire la struttura della directory
- [ ] `git init` + primo commit con il template originale
- [ ] Personalizzare `src/config.ts` (nome, bio, social)
- [ ] Sostituire avatar/banner demo con asset a tema food
- [ ] Aggiungere lingua `it` se non presente, oppure tenere `en`
- [ ] Definire categorie/tag base del blog food (es. ricette, recensioni, ingredienti)
- [ ] Eliminare post demo e creare il primo post reale
- [ ] Configurare `site` URL in `astro.config.mjs` per il deploy
