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



# Regole Generali da seguire durante tutto lo sviluppo

## 1. Design System
Questo prompt definisce le regole standard per la creazione di qualsiasi nuova interfaccia utente basata sul design system "refined boutique". Queste regole sono vincolanti e devono essere applicate a ogni nuovo elemento, layout o stato, garantendo che il design non degeneri mai nei canoni standard dell'industria.

1. Color Palette (Strict Enforcement)
Non utilizzare gradienti o altri colori oltre a quelli specificati.

Background (Sfondo principale): Off-white caldo (#FAF9F6 o #FAF8F1). Mai bianco puro (#FFFFFF).

Typography & Core Elements: Deep Charcoal/Nero Morbido (#1C1C1C).

Accento Principale (Positive Highlight): Chartreuse/Lime Gold (#C7DD33). Utilizzato solo per metriche positive (es. percentuale di match), bordi di selezione attiva e badge.

Secondary Elements/Lines: Thin Slate Grey (#E0E0E0 o #F0F0F0) per linee divisorie o bordi non attivi.

2. Typography & Font Hierarchy
L'uso delle font è rigidamente gerarchico e definisce l'identità del sito.
Font: **Besley** (titoli, nomi propri) + **Google Sans Flex** (tutto il
  resto), caricati da Google Fonts.


4. Layout, Spacing & Corner Radius
Il design predilige la pulizia dei dati su layout a "griglia fissa", evitando card complesse o ombreggiature.

Corner Radius: Uniforme e morbido, ma non circolare (18 px) applicato a bordi di immagini, pulsanti e sezioni principali (come l'header). Le metriche rotonde (come gli anelli) sono un'eccezione. bordi sottili invece di
  card con drop-shadow.

Griglie e Tabelle: Le comparazioni devono essere strutturate in tabelle a griglia pulite e allineate, senza bordi divisori verticali. Le linee divisorie orizzontali devono essere sottili (Slate Grey).

Elenchi: Gli elenchi di dettagli (es. "Why we matched you") usano icone minimali allineate a sinistra con testo Sans-Serif a destra, separati da sottili linee divisorie orizzontali.

Padding: Generoso padding interno per dare "aria" ai dati numerici nelle tabelle.

4. Iconography & Visual Style
Icone: Esclusivamente line-art, a tratto sottile, di colore Deep Charcoal (#1C1C1C). Mai icone piene o colorate (tranne l'accento chartreuse se applicabile).

Bordi: I bordi sono rari; quando utilizzati per evidenziare (es. thumbnail selezionata), devono usare il colore Chartreuse. I pulsanti ghost usano un bordo sottile.

5. Interactive & Static Elements
Pulsanti: Prediligere pulsanti a "bordo fantasma" (ghost buttons) con angoli arrotondati, testo Serif e un bordo sottile. Nessun effetto ombra o gradiente.

Highlights: Quando un'opzione è selezionata (es. una thumbnail nella comparazione), deve avere un bordo sottile Chartreuse. Le metriche chiave (percentuale di match) sono all'interno di un ovale Chartreuse pieno.

6. Header, Footer & Global Elements
Header: L'header principale può contenere un'immagine a schermo intero con un overlay testuale Serif (es. "Cozy Den"). Un header di sezione secondaria (es. "Profile") usa testo Serif scuro su sfondo Off-white.

Navigation: La barra di navigazione inferiore è minimale, con icone line-art sottili e testo Serif scuro. L'icona della pagina attiva è evidenziata o ha un indicatore sottile (come un pallino chartreuse o un'icona piena scura).

Stato: Sezioni come "Confronta alternative" rimangono visibili per fornire contesto e un punto di ancoraggio.

7. Comportamento dell'LLM: "Strict No-Slop Mode"
Vietato: Creare card con ombre, layout "masonry" non allineati, font standard (es. Arial, Helvetica), icone colorate standard, gradienti, colori pastello diversi da quelli definiti, e pulsanti pieni di default.

Mandatorio: Mantenere la pulizia della tabella comparativa. Qualsiasi nuovo dato deve adattarsi alla struttura a tabella esistente. Qualsiasi nuovo elenco deve adattarsi allo stile "Why we matched you".

Durante la creazione di nuove sessioni o pagine, attenersi alle regole prescritte e mantenere un design uniforme alla home page esistente.


## 2. Strategia SEO e meta tags

--- PARTE 1: LE 5 KEYWORD E FRASI CHIAVE STRATEGICHE ---

1. "B&B Bari Vecchia" (e la variante "B&B Bari centro storico")
   * Intento: Transazionale puro. L'utente ha già deciso la zona esatta ed è pronto a prenotare.
   * Dove usarla: Meta Title della Homepage, H1 principale e nei testi introduttivi.

2. "Appartamenti vacanze Bari centro" (e la variante "Case vacanza Bari vecchia")
   * Intento: Transazionale specifico. Per intercettare famiglie e gruppi che cercano cucina, spazi più ampi e indipendenza.
   * Dove usarla: Nella pagina di listing (comparazione immobili) e negli URL delle singole pagine (es: /appartamento-vacanze-bari-centro-nome).

3. "Dove dormire a Bari [per visitare la Puglia]"
   * Intento: Informativo (Top of Funnel). Per chi usa Bari come "hub" per spostarsi (Alberobello, Polignano, Matera).
   * Dove usarla: In una sezione "Esplora" o nel blog del sito per posizionare gli appartamenti come "campo base perfetto".

4. "B&B Bari vicino Basilica San Nicola" (oppure "vicino porto" / "vicino stazione")
   * Intento: Coda lunga geografica. Intercetta nicchie (turisti religiosi, crocieristi, viaggiatori in treno).
   * Dove usarla: Nella pagina "Dove Siamo" / "Location", inserendo le distanze a piedi reali.

5. "Where to stay in Bari old town" / "Bari Italy apartments"
   * Intento: Internazionale. Il turismo a Bari è trainato dagli stranieri, essenziale per massimizzare le prenotazioni dirette.
   * Dove usarla: Nella versione inglese del sito (Meta Tag, H1, URL), puntando alle vere query inglesi e non a traduzioni letterali.


--- PARTE 2: STRUTTURA META TITLE E META DESCRIPTION ---

La Formula per il Meta Title (Max 60 caratteri)
[Keyword Principale] + [Caratteristica Unica / Nome] | [Brand / Località]

La Formula per la Meta Description (Max 155 caratteri)
[Gancio Emotivo/Location] + [2-3 Benefit Chiave/Amenities] + [Call To Action per Disintermediare].


--- ESEMPI PRATICI PER I 4 APPARTAMENTI ---

APPARTAMENTO 1 (Focus: Autenticità e Coppie)
* Meta Title: B&B Bari Vecchia: Romantico e con Volte in Pietra | Casa [Nome]
* Meta Description: Vivi la magia di Bari Vecchia. Appartamento indipendente per coppie con volte in pietra del '500, Wi-Fi e cucina. Miglior tariffa sul sito ufficiale!

APPARTAMENTO 2 (Focus: Famiglie/Spazio in Centro)
* Meta Title: Appartamento Vacanze Bari Centro: Fino a 6 Posti | Casa [Nome]
* Meta Description: Cerchi spazio a Bari centro? Ampio appartamento vacanze ideale per famiglie: 2 camere, 2 bagni e parcheggio vicino. Prenota diretto e risparmia il 15%.

APPARTAMENTO 3 (Focus: Vista/Location Premium)
* Meta Title: Case Vacanza Bari Vecchia con Terrazza sul Mare | Casa [Nome]
* Meta Description: Svegliati guardando il mare. Luminoso appartamento a 2 passi dalla Basilica di San Nicola con terrazza privata. Clicca qui per verificare le date libere.

APPARTAMENTO 4 (Focus: Smart/Business/Snodo logistico)
* Meta Title: B&B Bari vicino Stazione: Smart e Design | Casa [Nome]
* Meta Description: Il campo base perfetto per visitare la Puglia. B&B di design a 5 minuti dalla stazione di Bari Centrale. Self check-in h24 e colazione inclusa. Scopri di più.


--- PARTE 3: 3 TRUCCHI TECNICI PER AUMENTARE IL CTR (Click-Through Rate) ---

1. Simboli ed Emojis: Usali con parsimonia (come ✔️, ✨, o 📍) nella Meta Description per spezzare il muro di testo della SERP e attirare l'attenzione.
2. Leva della Disintermediazione: Inserisci frasi come "Miglior tariffa garantita", "Risparmia il 15%", o "Sito Ufficiale" per convincere l'utente a non usare Booking.
3. Schema Markup (Dati Strutturati): Implementa i dati di tipo 'LodgingBusiness' o 'Product'. Far apparire le stelline (es. ⭐⭐⭐⭐⭐) e il prezzo direttamente su Google raddoppia i click.


--- PARTE 4: I 4 PILASTRI DELLA SEO TECNICA E STRATEGICA ---

1. LOCAL SEO E GOOGLE BUSINESS PROFILE (Il Local Pack)
   * Scheda GBP: Ottimizza un'unica scheda per l'intera struttura o 4 separate a seconda delle licenze e ubicazioni.
   * NAP Consistency: Nome, Indirizzo e Telefono devono essere identici su sito, Google e directory locali.
   * Google Hotels: Usa un Booking Engine abilitato ai "Free Booking Links" per mostrare il tuo prezzo diretto su Google Maps.

2. CORE WEB VITALS E OTTIMIZZAZIONE IMMAGINI
   * Formati Next-Gen: Usa immagini in formato WebP o AVIF (peso inferiore a 150-200 KB) al posto di JPEG/PNG.
   * Lazy Loading: Le foto che non si vedono subito (below the fold) devono caricarsi solo quando l'utente fa scroll giù.
   * Mobile-First: Elementi di conversione (pulsante "Prenota") sempre visibili e "sticky" su mobile, dato che porta il 70-80% delle visite.

3. SEO MULTILINGUA TECNICA (Hreflang)
   * URL Localizzati: Traduci gli slug per ogni lingua (es. /it/appartamento-bari-vecchia e /en/old-town-bari-apartment).
   * Tag Hreflang: Inserisci i tag nel codice <head> per dire a Google quale lingua mostrare in base alla nazionalità dell'utente, evitando la cannibalizzazione dei contenuti.

4. ARCHITETTURA A SILOS E CONTENT MARKETING LOCALE
   * Guida Locale: Crea una sezione per intercettare dubbi logistici. (es: "Come arrivare dall'aeroporto a Bari Vecchia", "Dove parcheggiare a Bari centro").
   * Internal Linking: Da questi articoli "Top of funnel", inserisci link strategici che puntino alle pagine dei tuoi appartamenti (per trasferire autorevolezza e traffico).


