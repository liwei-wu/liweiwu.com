---
id: gourd-before-magic
type: essay
locale: it
title: La zucca c’è, ma la magia non si è ancora manifestata
description: Nel primo anno dopo esserci tuffati nel fiume successivo, abbiamo pubblicato 27 versioni e iniziato a capire come trasformare una demo in un prodotto capace di servire gli utenti nel lungo periodo.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: f9dc9ea4e7b36be0
topics:
  - Imprenditoria
  - Prodotto
  - Intelligenza artificiale
  - MagicGourd
  - Note intelligenti
---

L’ultimo giorno del 2023 ho pubblicato su questo blog personale il primo articolo, “Tuffarsi nel fiume successivo”. La frase finale era: «Sono ancora in acqua».

È passato un anno e sono ancora in acqua.

Il fiume non è diventato più facile, né l’altra riva più nitida. Eppure, rispetto a un anno fa, qualcosa è cambiato. Nella seconda metà del 2023, dopo aver lasciato SenseTime, dove avevo lavorato per quasi dieci anni, ho trascorso gran parte del tempo dibattendomi e cercando una direzione. Nel 2024 abbiamo cominciato a dedicare la maggior parte del nostro tempo allo sviluppo di un prodotto concreto.

Il filo principale dell’anno è stato il prodotto; quello secondario, alcuni tentativi di raccolta fondi molto limitati. Non abbiamo ricevuto investimenti, né visto un segnale di mercato abbastanza forte da confermare la direzione, ma abbiamo sviluppato e pubblicato 27 versioni.

Dopo esserci tuffati nel fiume successivo, finalmente abbiamo iniziato a imparare a nuotare in avanti.

## Prima, costruire una zucca

Nell’articolo scritto alla fine dell’anno scorso raccontavo di avere infine deciso di partire dalle note intelligenti.

Fin dalle scuole medie ho l’abitudine di non leggere senza prendere appunti. Quando leggo un libro o un articolo, oppure guardo un video, presto attenzione ai passaggi che mi colpiscono, li segno e annoto i pensieri che fanno nascere in quel momento. Chiamo questo processo “trovare punti”: accorgersi di ciò che ci tocca e registrare l’ispirazione.

A volte questi punti sono soltanto una frase, un’immagine o un’inquadratura. Sul momento sembrano non avere alcun rapporto tra loro. Ma, quando se ne accumulano abbastanza, prima o poi si collegano, aiutandomi a capire un problema o a formulare un giudizio a cui non avevo mai pensato.

Per molti anni ho provato diversi strumenti per prendere appunti, senza mai trovare un prodotto davvero adatto a questa abitudine. Dopo aver lasciato SenseTime, ho cercato l’amico d’infanzia con cui un tempo andavo a stanare nidi e facevo a botte, e abbiamo deciso di realizzarlo insieme. Nella prima metà del 2024 abbiamo lavorato per lo più in uno spazio di coworking nella Sohu Tower.

Abbiamo chiamato il prodotto MagicGourd.

“Gourd” è anche il soprannome di mio figlio. Quando abbiamo scelto il nome, non gli ho attribuito intenzionalmente troppi significati. Guardandomi indietro, però, forse nascondeva un’aspettativa inconscia: speravo che il primo prodotto creato dopo essermi dedicato a tempo pieno all’impresa potesse crescere lentamente sotto le nostre cure, proprio come un bambino.

Naturalmente un prodotto non è un bambino. Ma hanno qualcosa in comune: essere creati è soltanto l’inizio; la lunga cura e la crescita che seguono sono la parte davvero difficile.

Il vero secondo cervello che immaginavamo era ancora molto lontano dalla realtà e non poteva essere realizzato in un solo passo. Così abbiamo deciso di partire da quello più essenziale: permettere alle persone di segnare ciò che le colpisce e annotare un’ispirazione mentre navigano sul web, leggono un PDF online o guardano un video.

Prima di tutto, costruire una zucca capace di raccogliere questi punti.

## Le scelte di prodotto dietro un pulsante di evidenziazione

Appena iniziato lo sviluppo, ci siamo imbattuti in una domanda apparentemente minuscola: che aspetto dovrebbe avere il pulsante di evidenziazione?

Dovrebbe essere un solo pulsante o un pannello con diverse azioni? Dopo che una persona seleziona del testo, dovrebbe apparire subito o aspettare di essere richiamato? Dove dovrebbe comparire, e quando dovrebbe scomparire? Se qualcuno non vuole che appaia automaticamente, dovremmo offrirgli anche un interruttore per disattivarlo?

Ogni opzione in più sembra soddisfare più esigenze, ma aumenta anche il costo di comprensione e di utilizzo. Far apparire il pulsante in modo più attivo rende la funzione più facile da scoprire, ma può interrompere continuamente la lettura. Tenerlo più discreto può aiutare a concentrarsi, ma una persona potrebbe non accorgersi mai che la funzione esiste.

Domande simili non hanno una risposta standard in senso algoritmico.

Quando lavoriamo sugli algoritmi, siamo abituati a chiederci se una capacità sia realizzabile, se la precisione possa migliorare, se le prestazioni soddisfino i requisiti. Dopo aver iniziato a costruire un prodotto, abbiamo cominciato a chiederci ripetutamente: quando dovrebbe intervenire una funzione, e quando dovrebbe ritirarsi sullo sfondo?

Il fatto che una funzione sia eseguibile dimostra soltanto che la tecnologia funziona. Che le persone la capiscano, si sentano disturbate oppure no e vogliano mantenerla nella propria vita quotidiana è ciò che determina se il prodotto funziona davvero.

Quando lavoravo su algoritmi e grandi progetti avevo già affrontato molti problemi del mondo reale. Ma, creando davvero un prodotto da zero, le decisioni che prima erano condivise tra gruppi di prodotto, design, clienti e ingegneria sono improvvisamente ricadute tutte su di noi. Dovevamo decidere che cosa mostrare e che cosa nascondere; che cosa realizzare subito e che cosa, pur utile, rimandare.

Poco a poco abbiamo capito che un prodotto non è fatto dal numero delle sue funzioni, ma da innumerevoli scelte. A volte anche “non apparire” e “non disturbare” sono capacità del prodotto.

## Un prodotto deve reggere nel tempo

Che un pulsante sia comodo è un’esperienza immediatamente percepibile. Ma molti dei fattori che decidono se un prodotto verrà usato a lungo rimangono nascosti agli utenti.

MagicGourd conserva la cronologia di lettura, i momenti di risonanza e i pensieri di una persona. Vogliamo proteggere il più possibile la privacy degli utenti e, al tempo stesso, offrire la sincronizzazione tra dispositivi e futuri servizi intelligenti. Per fare entrambe le cose, abbiamo scelto di cifrare i dati in locale e di conservare sul backend soltanto il testo cifrato. Questo aumenta la complessità dello sviluppo e della manutenzione, ma se le persone non possono possedere davvero i propri dati, un vero secondo cervello è impossibile fin dall’inizio.

La sincronizzazione è un altro problema che sembra semplice e in realtà è molto complesso. Quando una persona crea un’evidenziazione, l’interfaccia dovrebbe rispondere immediatamente, senza fermarsi ad aspettare a causa di una connessione scadente. La registrazione non dovrebbe interrompersi nemmeno con una rete debole o assente; quando la connessione torna, i dati sui diversi dispositivi devono sincronizzarsi correttamente, senza duplicarsi, sovrascriversi a vicenda o, peggio, scomparire in silenzio.

Questo ci ha costretto a ripensare come frontend e backend dovessero collaborare, come organizzare i dati nel database, come mantenere la compatibilità durante gli aggiornamenti e come recuperare in caso di anomalie. Di solito le persone non vedono queste scelte, ma basta che un solo anello fallisca perché tutta quella complessità si trasformi all’istante nella parte più diretta dell’esperienza utente.

L’esperienza a breve termine è relativamente facile da ottenere. Non è così difficile creare una dimostrazione fluida che sorprenda per qualche minuto. Ma, ai nostri occhi, rimane soltanto una demo.

Una demo deve reggere soltanto nel momento presente; un prodotto deve reggere nel tempo.

Se un prodotto intende accompagnare una persona per dieci anni, le fondamenta dell’esperienza che avrà tra dieci anni devono essere costruite già oggi. In uno strumento comune, un guasto può essere soltanto un disagio temporaneo; in un prodotto che custodisce anni di appunti, una sola perdita di dati può distruggere tutta la fiducia costruita dall’utente.

Non possiamo promettere che il sistema non avrà mai problemi, ma dobbiamo trattare “non perdere nemmeno una nota dell’utente” come uno dei vincoli progettuali più importanti. L’esperienza di prodotto non avviene soltanto sullo schermo, ma anche nel database invisibile agli utenti.

## Un brevissimo filo secondario: la raccolta fondi

Definire la raccolta fondi un filo secondario dell’anno è forse già un’esagerazione. In tutto abbiamo parlato soltanto con tre società d’investimento; per il resto, abbiamo continuato a dedicare la maggior parte del tempo allo sviluppo del prodotto.

La nostra idea era semplice: rivolgerci ad alcuni investitori early-stage che conoscevamo direttamente o indirettamente, presentare ciò che stavamo costruendo e cercare di ottenere il primo investimento angel.

Per noi il significato di quell’investimento non stava soltanto nel denaro. Il prodotto non era ancora finito e mancava un chiaro segnale di mercato; in quella fase volevamo prima ricevere un riscontro esterno, per capire se la direzione avesse senso agli occhi di investitori eccellenti.

Nessuno di questi tentativi ha portato a un risultato. All’epoca attribuivamo la cosa a un contesto poco favorevole per finanziare applicazioni di AI e alla nostra scarsa esperienza nel parlare con gli investitori. Entrambi i fattori esistevano. Ma, guardando indietro, c’è un fatto ancora più diretto: abbiamo investito pochissimo tempo nella raccolta fondi e parlato soltanto con tre società. Più che dire di avere attraversato un round fallito, sarebbe corretto dire che abbiamo avuto alcuni colloqui preliminari con degli investitori.

Ciò su cui vale maggiormente la pena riflettere è il modo in cui reagivo alle contestazioni.

Al colloquio con MiraclePlus, davanti a me sedevano persone che rispettavo profondamente. Quando mettevano ripetutamente in discussione le nostre idee, a volte con domande molto taglienti, provavo sentimenti contrastanti: dato che eravamo lì per cercare un investimento, mi sembrava di dover rispettare il loro giudizio e, fino a un certo punto, avvicinarmi alle risposte che si aspettavano.

Ma, se attraverso la raccolta fondi volevamo ottenere un riscontro autentico, compiacerli dicendo cose in cui non credevamo avrebbe reso quel riscontro privo di significato.

In seguito ho anche cominciato a chiedermi se desiderassimo davvero soltanto un riscontro. Forse, prima che il mercato convalidasse il prodotto, volevamo anche l’approvazione di un gruppo di ottimi investitori, per rassicurarci di non avere scelto la direzione sbagliata.

Era come trovarsi in un fiume sconosciuto e sperare che qualcuno sulla riva ci dicesse prima dove nuotare. Ma un fondatore, alla fine, deve sentire la corrente in prima persona e giudicare sulla base dei fatti che ha davanti.

## I “due anziani Xuanming” della Dongsheng Tower

Nella seconda metà del 2024 ci siamo trasferiti dalla Sohu Tower alla Dongsheng Tower.

Il mio amico d’infanzia e io programmavamo spesso in coppia per lunghi periodi, seduti insieme a discutere davanti allo stesso schermo. In mezzo ai giovani fondatori dello spazio di coworking, il nostro modo di lavorare saltava all’occhio. Con il tempo ci hanno dato un soprannome: i “due anziani Xuanming”.

Era una cosa molto divertente. Due persone che da bambini andavano insieme a stanare nidi e facevano a botte, vent’anni dopo sedevano di nuovo in un ufficio condiviso per costruire un prodotto chiamato MagicGourd.

È stato proprio alla Dongsheng Tower che abbiamo conosciuto Kehan. Allora si occupava della community e del reclutamento di progetti imprenditoriali per MiraclePlus. La prima volta che ci parlò, chiese: «Voi siete fondatori, vero? Vi osservo da molto tempo. In tutto questo ufficio, voi due siete quelli che più di tutti hanno lo stato d’animo dell’imprenditore».

In seguito seppe che avevamo partecipato al colloquio con MiraclePlus e parlammo di ciò che era accaduto. Ci spiegò che, quando gli investitori contestano ripetutamente un’idea imprenditoriale, a volte non stanno soltanto manifestando disaccordo: stanno anche verificando se i fondatori abbiano davvero riflettuto a fondo e sappiano mantenere il proprio giudizio sotto pressione.

Questo mi fece reinterpretare quel colloquio.

Rispettare gli investitori non significa cedere loro il proprio giudizio. Un fondatore deve capire perché gli altri non sono d’accordo, ma non può rinunciare al proprio giudizio solo perché li rispetta. Ciò che va davvero evitato non è cambiare opinione in base a fatti nuovi, ma cambiare ciò che si dice soltanto per ottenere approvazione prima di aver riflettuto fino in fondo.

Non è una lezione che riguarda soltanto la raccolta fondi. Costruendo un prodotto, ogni giorno incontriamo i riscontri degli utenti, le scelte dei prodotti concorrenti e nuove tendenze tecnologiche. Tutti questi segnali esterni meritano di essere compresi con attenzione, ma decidere che cosa debba entrare nel prodotto resta una nostra responsabilità.

## La zucca c’è

Alla fine del 2024 avevamo sviluppato e pubblicato 27 versioni di MagicGourd.

Siamo partiti dalle annotazioni di testo e immagini sulle normali pagine web, poi abbiamo aggiunto il supporto ai PDF online ed esteso lo stesso metodo a Bilibili e YouTube. Le persone potevano segnare in un video un fotogramma che le aveva colpite, aggiungere una nota e tornare rapidamente a quei momenti sulla timeline. Abbiamo anche aggiunto gradualmente la gestione dei tag, la ricerca e l’esportazione, oltre alla sincronizzazione dei dati tra browser e dispositivi diversi.

Ogni nuovo formato di contenuto richiedeva moltissimo lavoro di adattamento. Le pagine web non hanno una struttura uniforme e le piattaforme video cambiano continuamente. Una funzione che opera correttamente su un sito può comportarsi in modo completamente diverso su un’altra pagina o in un altro browser. Molto del nostro tempo non è servito a creare una nuova capacità appariscente, ma a gestire casi limite di ogni genere affinché quelle esistenti funzionassero in modo più stabile.

Nelle 27 versioni pubblicate durante l’anno non abbiamo rilevato casi di perdita o danneggiamento dei dati degli utenti. I problemi occasionali si sono concentrati soprattutto in passaggi del servizio come i codici di verifica per l’accesso; dopo una segnalazione, nella maggior parte dei casi siamo riusciti a individuarli e risolverli rapidamente. Questo non dimostra che il sistema non sbaglierà mai più, ma indica almeno che il tempo investito in ciò che non si vede non è andato sprecato.

A novembre abbiamo presentato su [sspai](https://sspai.com/post/93549) la funzione per prendere appunti sui video. Dopo la pubblicazione dell’articolo, gli utenti hanno iniziato a lasciare commenti. Una persona, che prima poteva salvare un fotogramma utile soltanto facendo uno screenshot e incollandolo altrove, dopo avere provato MagicGourd ha scritto: «Questo plugin mi ha salvato!» Altri hanno apprezzato i marcatori a goccia sulla timeline del video, chiesto note indipendenti o auspicato un rapido supporto per Safari.

Ricevere i riscontri degli utenti è stata una delle cose più felici dell’anno.

A renderci davvero felici non erano soltanto gli elogi, ma il fatto che finalmente qualcuno avesse inserito ciò che avevamo costruito nella propria vita reale. Gli utenti offrivano anche molti suggerimenti utili, spingendoci a continuare a valutare: quali osservazioni indicavano un problema comune e quali derivavano da un’abitudine individuale; che cosa andava risolto subito e che cosa, pur utile, non era adatto al prodotto in quella fase.

Dividendo in due il nome del prodotto, alla fine dell’anno avevamo realizzato almeno la “zucca”: un contenitore capace di raccogliere, conservare e gestire momenti di risonanza e ispirazioni.

## La magia non si è ancora manifestata

Ma non era ancora la magia che avevamo in mente.

Avrebbe certamente usato l’AI, ma non si sarebbe limitata a generare il riassunto di un articolo. Un riassunto può comprimere l’informazione senza necessariamente far avanzare la cognizione.

Secondo la nostra interpretazione, l’informazione è il contenuto che una persona riceve; la conoscenza è informazione compresa e organizzata; la cognizione è il modo in cui una persona comprende il mondo, crea connessioni, formula giudizi e li corregge con l’arrivo di nuove esperienze.

Oggi l’AI è molto brava a elaborare informazioni e sempre più capace di organizzare la conoscenza. Può riassumere un articolo, estrarre parole chiave e rispondere alle domande già contenute nel materiale. Ma, se si limita a comprimere dieci pagine in una o ad aggiungere una finestra di chat accanto a un’app per appunti, non ha ancora toccato ciò che vogliamo davvero costruire.

Vorremmo che in futuro MagicGourd fosse capace di comprendere le annotazioni accumulate da una persona nel tempo, facendo incontrare nuovamente momenti di risonanza dispersi tra periodi e media differenti. Potrebbe scoprire temi ricorrenti mai espressi in modo esplicito, mostrare collegamenti e contraddizioni tra gli appunti, individuare domande rimaste a lungo senza risposta o riportare alla luce un pensiero passato al momento opportuno.

Soprattutto, dovrebbe sollevare domande a cui l’utente non ha ancora pensato ma che vale la pena approfondire, aiutandolo a formulare nuovi giudizi propri.

Qui deve esserci un confine chiaro: l’AI non può confezionare le proprie congetture come “verità” di cui l’utente non si è ancora accorto. Può proporre possibili collegamenti, contraddizioni e domande; spetta comunque all’utente stabilire se quei collegamenti reggano davvero.

La magia non consiste nel pensare al posto dell’utente, ma nell’aiutarlo a vedere il pensiero che non ha ancora portato a termine.

Durante l’anno abbiamo realizzato internamente alcune demo legate a questa idea. Potevano generare riassunti, organizzare contenuti e rispondere a domande; sembravano già avere qualcosa dell’AI. Ma erano ancora molto lontane da ciò che intendiamo per “far avanzare la cognizione”, quindi non le abbiamo pubblicate in fretta soltanto per inseguire l’ondata dell’AI.

Quanto più profondamente l’AI partecipa al processo cognitivo di una persona, tanto più privati diventano i dati a cui deve accedere. Questo ci ha resi ancora più convinti che privacy e proprietà dei dati non siano problemi ingegneristici separati dalla magia, ma i presupposti perché la magia possa esistere. Non possiamo affermare di voler comprendere gli utenti mentre chiediamo loro di rinunciare al controllo dei propri dati.

Così, il 31 dicembre 2024, la zucca c’era, ma la magia non si era ancora manifestata.

Non avevamo ottenuto investimenti, né un segnale di mercato decisivo, né stabilito un modello di business chiaro. Non sapevamo ancora dove avrebbe portato quel fiume.

Ma avevamo pubblicato 27 versioni, alcuni utenti avevano cominciato a portare il prodotto nella propria vita e noi avevamo iniziato a capire come trasformare una demo funzionante in un vero prodotto, assumendocene la responsabilità nel lungo periodo.

Un anno prima avevo scritto: «Sono ancora in acqua».

Un anno dopo ero ancora in acqua. Il fiume non era diventato più facile, né l’altra riva più nitida.

Ma avevamo costruito la zucca.

La magia non si era ancora manifestata. Non avevamo nemmeno raggiunto l’altra riva, ma almeno avevamo iniziato a nuotare in avanti.
