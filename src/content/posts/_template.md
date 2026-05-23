---
# === Frontmatter del post ===
# Il file inizia con "_" → Astro lo esclude automaticamente dalle collections.
# Inoltre draft: true → non viene mai pubblicato anche se rinominato.

title: "Nome del locale — sottotitolo accattivante"
published: 2026-01-01                                # data di pubblicazione
description: "Una frase secca che riassuma cosa hai trovato. Compare in archivio e nelle preview social."
image: ""                                            # cover image (path relativo o vuoto)
tags: ["Pizza"]                                      # solo tag dalla lista canonical (src/constants/tags.ts)
category: Recensioni                                 # categoria singola — per ora sempre "Recensioni"
draft: true                                          # metti false quando il post è pronto

# === Campi specifici delle recensioni (tutti opzionali) ===
rating: 4                                            # numero 0-5, step 0.5 (es. 3.5, 4, 4.5)
priceRange: $$                                       # uno tra: $ / $$ / $$$ / $$$$
mapsUrl: ""                                          # link Google Maps del locale
visitedOn: 2026-01-01                                # data della visita (diversa da published)
---

Apertura narrativa: come ci sei arrivata, cosa ti aspettavi, primo impatto. Una manciata di righe per agganciare chi legge. Mantieni il tono in prima persona, *picky* ma onesta.

## Il posto

Descrizione dell'atmosfera, della sala, dell'accoglienza, dei dettagli che ti hanno colpita (luci, musica, servizio, dehors, vista). Le cose che rendono il locale "quel locale" e non un altro.

## Il conto

Rapporto qualità-prezzo. Sorprese, in positivo o in negativo. Una nota sul valore percepito rispetto a quanto pagato.

## Note

Sezione opzionale per appunti extra che non rientrano nelle sezioni sopra: prenotazione obbligatoria, parcheggio, accessibilità, opzioni vegetariane/vegane, allergeni dichiarati, orari particolari, chiusure stagionali, suggerimenti pratici.
