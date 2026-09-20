# Stay with Claudia — Bozza mobile

Prototipo mobile-first del sito, struttura standard da progetto web statico.

## Struttura dei file

```
stay-with-claudia/
├── index.html          → markup della pagina
├── css/
│   └── style.css       → tutti gli stili (design tokens, componenti, responsive)
├── js/
│   └── main.js         → navbar allo scroll, selezione miniature confronto,
│                          generazione link WhatsApp dal form di richiesta
├── img/
│   └── hero-vicolo-bari.jpg   → foto hero
└── README.md
```

## Come vederlo in locale

Basta aprire `index.html` con doppio click nel browser. Non serve un server:
non ci sono chiamate a API esterne, solo Google Fonts (richiede connessione
internet per caricare i caratteri Google Sans Flex e Besley).

## Come metterlo online

È un sito statico puro: si può caricare così com'è su qualsiasi hosting
(Netlify, Vercel, GitHub Pages, o l'hosting che sceglierete) senza build
step. Basta mantenere la struttura delle cartelle (`css/`, `js/`, `img/`)
relativa a `index.html`.

## Cosa manca ancora (bozza, non versione finale)

- Foto placeholder (tratteggiate, con etichetta) per gli appartamenti,
  la foto di Claudia e le miniature di confronto — vanno sostituite con
  scatti reali.
- Prezzi per notte: al momento "su richiesta", non presenti nei dati
  originali del vecchio sito.
- La "Quarta Casa" è una scheda segnaposto: mancano indirizzo, foto e
  descrizione nei materiali forniti finora.
- Solo versione mobile: la versione desktop è il prossimo step.
- Numero WhatsApp e email presi dal vecchio sito (Stay with Claudia):
  da confermare che siano ancora quelli corretti.

## Design system seguito

- Font: **Besley** (titoli, nomi propri) + **Google Sans Flex** (tutto il
  resto), caricati da Google Fonts.
- Palette: sfondo off-white `#FAF9F6`, testo `#1C1C1C`, accento
  chartreuse `#C7DD33` usato solo per badge/bordi selezionati/pin mappa.
- Raggio angoli uniforme (~18px), nessuna ombra, bordi sottili invece di
  card con drop-shadow.
