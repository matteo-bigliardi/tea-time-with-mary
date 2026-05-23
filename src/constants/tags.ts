/**
 * Lista chiusa dei tag canonical usabili nei post di recensione.
 *
 * Pensata come fonte unica per:
 * - autocompletamento/dropdown nel CMS (Decap) — vincola Mara a scegliere
 *   solo da questa lista, evitando typo e proliferazione di varianti.
 * - eventuali validazioni future / pagine di indice tag.
 *
 * Lo schema Zod in `src/content/config.ts` resta volutamente libero
 * (`z.array(z.string())`) per non bloccare il build se serve introdurre
 * un tag nuovo "al volo" — la disciplina la impone il CMS.
 *
 * Aggiungere un tag: appendere alla lista (ordine non significativo
 * per il rendering; lo manteniamo per leggibilità).
 */
export const CANONICAL_TAGS = [
	"Breakfast",
	"Brunch",
	"Pizza",
	"Fast Food",
	"Ethnic Cuisine",
	"Fine Dining",
	"Gelato",
	"Aperitivo",
	"Hamburger",
	"Tea House",
] as const;

export type CanonicalTag = (typeof CANONICAL_TAGS)[number];
