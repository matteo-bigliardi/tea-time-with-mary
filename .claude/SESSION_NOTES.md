# SESSION_NOTES.md — FoodBlogApp

Log cronologico delle sessioni di lavoro con Claude Code. Ogni sessione contiene: data, obiettivo, cosa è stato fatto, decisioni, problemi aperti, prossimi passi.

> **Convenzione:** ordine cronologico inverso (sessioni più recenti in alto). Ogni sessione ha un titolo `## Sessione N — YYYY-MM-DD — Titolo breve`.

---

## Sessione 2 — 2026-05-16 — Setup repo + identità del blog

### Obiettivo
Appiattire la struttura, inizializzare git, predisporre il sito in italiano con vibes cute/femminili a tema recensioni di ristoranti.

### Cosa è stato fatto
- **Appiattimento directory:** spostato tutto il contenuto di `fuwari-main/fuwari-main/` alla root `FoodBlogApp/`. Rimossa la cartella `fuwari-main/` vuota.
- **Git:** `git init -b main`, creato `.gitignore` (dist, node_modules, .astro, pagefind output, env, IDE), primo commit con tutto il template + cartella `.claude/`.
- **Traduzione italiana i18n:**
  - Creato `src/i18n/languages/it.ts` (tono "Autrice" al femminile).
  - Registrato `it` e `it_it` nella mappa di `src/i18n/translation.ts`.
- **`src/config.ts` personalizzato:**
  - `title: "Tavola Rosa"`, `subtitle: "Recensioni di ristoranti, con dolcezza"`
  - `lang: "it"`
  - `themeColor.hue: 340` (rosa cipria)
  - Navbar: rimosso link GitHub (lasciati Home/Archive/About)
  - Profilo: nome/bio placeholder, social Instagram + TikTok come placeholder (al posto di Twitter/Steam/GitHub demo)
- **`.claude/CLAUDE.md` aggiornato:** struttura piatta, file chiave aggiornati con stato attuale, TODO rivisto.

### Decisioni
- **Nome provvisorio del sito:** "Tavola Rosa" — utente può sostituirlo subito modificando `src/config.ts:11`.
- **Hue 340 (rosa cipria):** scelto come punto di partenza per le vibes femminili. Picker tema lasciato attivo (`fixed: false`), così l'utente può provare valori vicini live.
- **Social:** Instagram + TikTok come default per un food blog (più rilevanti di Twitter/GitHub).
- **Tono i18n al femminile:** "Autrice" invece di "Autore" — riflette la voce del blog.
- **`site` URL in `astro.config.mjs`:** NON modificato (ancora `https://fuwari.vercel.app/`), in attesa del dominio definitivo.
- **Post demo Fuwari:** lasciati nel repo per ora (utili come riferimento di sintassi markdown estesa). Da eliminare al primo articolo reale.

### Stato del progetto a fine sessione
- Repo git inizializzato su `main` con un commit.
- Struttura piatta, pronta a `pnpm install`.
- Sito configurato in italiano, palette rosa, identità "Tavola Rosa".
- Nessuna dipendenza ancora installata. `pnpm dev` non ancora lanciato.

### Problemi aperti / domande per l'utente
- Confermare il nome del sito ("Tavola Rosa" o altro?).
- Nome reale dell'autrice + bio + link social effettivi (Instagram/TikTok username).
- Eventuale dominio per `astro.config.mjs`.
- Vuoi che lo schema delle recensioni includa campi extra (rating, indirizzo, prezzo, tipo cucina)? In quel caso si modifica `src/content/config.ts`.

### Prossimi passi suggeriti
1. `pnpm install` e `pnpm dev` per verificare che tutto giri.
2. Sostituire avatar/banner/favicon con asset a tema.
3. Personalizzare `about.md` e creare la prima recensione vera.
4. Decidere schema custom per le recensioni.

---

## Sessione 1 — 2026-05-16 — Setup contesto di progetto

### Obiettivo
Predisporre la cartella `.claude/` con i file di contesto (`CLAUDE.md` e questo `SESSION_NOTES.md`) per supportare le sessioni future.

### Cosa è stato fatto
- Esplorata la struttura del progetto: il template Fuwari è scaricato in `fuwari-main/fuwari-main/` (doppio innesto).
- Letti `README.md`, `package.json`, `src/config.ts` del template per capire stack e configurazione.
- Creata la cartella `.claude/` con:
  - `CLAUDE.md` — descrizione del progetto, stack, struttura, comandi, file chiave, convenzioni, TODO.
  - `SESSION_NOTES.md` — questo file.

### Decisioni
- Lingua di lavoro: **italiano**.
- File di contesto in `.claude/` (cartella nascosta convenzionale di Claude Code), non in `./claude/`.
- Per ora la struttura nidificata `fuwari-main/fuwari-main/` viene mantenuta — l'eventuale flatten è demandato all'utente.

### Stato del progetto a fine sessione
- Template Fuwari presente, non personalizzato.
- Nessun `git init` eseguito.
- Nessuna dipendenza installata (`pnpm install` non ancora lanciato).

### Problemi aperti / domande per l'utente
- Confermare se si vuole appiattire la cartella nidificata.
- Inizializzare git?
- Lingua del sito: italiano o inglese?
- Tematica precisa del blog food (ricette personali, recensioni ristoranti, food review, ecc.)?

### Prossimi passi suggeriti
Vedi sezione "TODO" in `CLAUDE.md`.

---

<!-- Template per nuove sessioni:

## Sessione N — YYYY-MM-DD — Titolo

### Obiettivo

### Cosa è stato fatto

### Decisioni

### Stato del progetto a fine sessione

### Problemi aperti / domande per l'utente

### Prossimi passi suggeriti

---
-->
