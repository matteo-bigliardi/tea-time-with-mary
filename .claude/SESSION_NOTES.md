# SESSION_NOTES.md — FoodBlogApp

Log cronologico delle sessioni di lavoro con Claude Code. Ogni sessione contiene: data, obiettivo, cosa è stato fatto, decisioni, problemi aperti, prossimi passi.

> **Convenzione:** ordine cronologico inverso (sessioni più recenti in alto). Ogni sessione ha un titolo `## Sessione N — YYYY-MM-DD — Titolo breve`.

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
