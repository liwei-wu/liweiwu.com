---
id: new-paper-and-pen-new-artists
type: essay
locale: it
title: "Nuova carta e penna, nuovi artisti"
subtitle: "Quando il codice diventa un artefatto intermedio, chi è l’autore del software?"
description: "Quando l’implementazione non sarà più la parte più scarsa, cosa ne sarà del lavoro umano?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - IA
  - Software
  - Autorialità
---

Nel corso di quasi sei mesi di lavoro di progettazione, ho creato diversi prodotti inediti con agenti di codifica, utilizzando solo linguaggio naturale, documenti di prodotto, vincoli architettonici, risultati di runtime e feedback di accettazione. I prodotti comprendono app desktop, estensioni del browser, servizi backend e database.

Non ho scritto una sola riga di codice. Né ne ho letto uno.

Ma ciò non significa che abbia consegnato i prodotti all’IA. Ho comunque deciso quali problemi dovessero risolvere, definito come dovessero funzionare i sistemi, giudicato quali confini non potessero essere superati, verificato l’affidabilità dei risultati e assunto la responsabilità del software finale. A cambiare è stata soltanto la mia interfaccia con l’implementazione.

Questo mi ha costretto a riconsiderare una domanda che un tempo sembrava semplice: se qualcuno non scrive più il codice a mano, ma definisce ancora il lavoro, decide se riesce e ne rimane responsabile, è ancora l’autore del software?

Questa pratica non dimostra che tutto il software possa essere costruito in questo modo. Non dimostra nemmeno che questi prodotti inediti avranno successo sul mercato. Ma per il tipo di applicazioni che creiamo, un flusso di lavoro incentrato sugli agenti di codifica non è più semplicemente un modo per programmare più velocemente. Sta diventando un approccio ingegneristico in grado di sostenere la pianificazione, l'implementazione, il test, la correzione e l'iterazione.

Il cambiamento importante non è che “l’intelligenza artificiale può scrivere codice”. L'implementazione era una delle parti più scarse della creazione di software; ora sta cominciando a retrocedere in secondo piano.

Quando l’implementazione non sarà più la parte più scarsa, cosa ne sarà del lavoro umano?

Questa è la domanda di questo saggio.

## Il confine dell’intelligenza artificiale si sta spostando

L’intelligenza artificiale non è mai stata un termine fisso. Le persone tendono a chiamare qualcosa IA finché i computer non riescono ancora a farlo in modo affidabile; quando una capacità matura ed entra nei prodotti di uso quotidiano, diventa rapidamente una tecnologia ordinaria e smette di sembrare intelligenza artificiale.

Anche il mio percorso ha seguito questo confine. Alle scuole medie e all'università ho lavorato su robot su ruote, utilizzando sensori e controllo del feedback per farli seguire percorsi, evitare ostacoli e coordinarsi nella formazione. Durante la scuola di specializzazione, ho studiato visione artificiale e allo stesso tempo sono entrato a far parte della neonata [SenseTime][entity-sensetime] come uno dei primi dipendenti fondatori. Ho contribuito a portare le tecnologie di rilevamento della vitalità dei volti e di visione industriale in applicazioni su larga scala, inclusi smartphone e treni ad alta velocità. Oggi, i modelli fondazionali generalisti e gli agenti da essi alimentati hanno nuovamente spinto in avanti il confine. Questi sistemi non affrontano più solo problemi isolati. Stanno iniziando a comprendere gli obiettivi, a utilizzare gli strumenti e a continuare ad agire in risposta al feedback; anche il mio lavoro si è spostato verso questi prodotti. Guardando indietro, dal controllo del movimento e dalla comprensione delle immagini al completamento di intere attività, le macchine stanno intraprendendo catene di lavoro più lunghe e complete.

In questo saggio, quindi, l’intelligenza artificiale si riferisce principalmente ad agenti guidati da modelli di base di carattere generale, con gli agenti di codifica come esempio rappresentativo. Il loro sviluppo punta verso l’esecuzione autonoma di compiti a lungo termine, una graduale autoevoluzione e persino la capacità di formare i propri successori.

Nel 2025, Andrej Karpathy ha utilizzato il “vibe coding” per descrivere uno stile di programmazione ampio: dì all’IA cosa vuoi, accetta il codice generato, restituiscigli messaggi di errore e dimentica persino che il codice esiste. [1] Ma lasciare andare così lontano ha una precondizione: il costo del fallimento deve essere basso. All'epoca, per i prodotti seri, utilizzavamo ancora Cursor. Gli sviluppatori umani guidavano il lavoro e rimanevano responsabili del codice; l'agente ha assistito.

All’inizio del 2026, abbiamo visto il confine spostarsi nuovamente in avanti. Karpathy in seguito chiamò il nuovo modo di lavorare “ingegneria degli agenti”: gli sviluppatori non utilizzano più semplicemente l’intelligenza artificiale per completare il codice, ma organizzano e supervisionano gli agenti mentre svolgono compiti di ingegneria mantenendo la responsabilità della revisione e della qualità. [2] Il nome non è importante. Ciò che conta è che l’intelligenza artificiale sta passando dall’offrire suggerimenti uno alla volta all’azione sostenuta entro limiti.

Per alcuni creatori di software, il linguaggio naturale e i documenti stanno già diventando un nuovo livello per esprimere le intenzioni.

## Il codice sta diventando un artefatto intermedio

La storia dell’informatica è anche una storia di aggiunta di livelli di astrazione.

Per prima cosa le persone azionavano le macchine con interruttori e cavi patch. Poi sono arrivati il codice macchina, l’assembly e i linguaggi di programmazione di alto livello. Ogni nuovo livello nascondeva parte della complessità sottostante e consentiva alle persone di lavorare più vicino alle proprie intenzioni.

Gli agenti di codifica aggiungono un nuovo livello di astrazione allo sviluppo del software. Sono qualcosa come un supercompilatore non deterministico: un compilatore tradizionale traduce un programma formalmente specificato in istruzioni macchina, mentre un agente di codifica cerca di sviluppare l'intento umano in interfacce, dati, servizi e codice.

La differenza conta. Il linguaggio umano è ambiguo. I requisiti sono spesso incompleti e i vincoli possono entrare in conflitto. Un agente non può tradurre meccanicamente una frase in un unico risultato corretto. Deve passare attraverso la comprensione, la pianificazione, l’implementazione, l’esecuzione e la verifica.

Il linguaggio naturale non ha sostituito i linguaggi di programmazione. Più precisamente, il linguaggio naturale e i documenti stanno diventando uno strato di intenti gestito dalle persone, mentre il codice funge sempre più da mezzo di implementazione generato e gestito dagli agenti.

Ciò rende il codice più simile a un artefatto intermedio, ma “intermedio” non significa non importante. Il codice deve ancora essere corretto, sicuro e gestibile. Potrebbe non essere necessario scriverlo e leggerlo riga per riga da una persona. La maggior parte dei programmatori non controlla il codice macchina emesso da un compilatore, ma rimane responsabile di ciò che fa il programma.

Ciò cambia ciò che dobbiamo chiarire.

La documentazione era una spiegazione del codice. Nel nostro lavoro, la relazione sta iniziando a invertirsi: viene generato e verificato più codice dai documenti. Perché esiste il prodotto, come dovrebbe funzionare il sistema, quali confini non possono essere superati e quali prove dimostrano che soddisfa i suoi requisiti: queste cose, una volta trattate come allegati al codice, stanno diventando la fonte del software stesso.

Poi: "Parlare costa poco. Mostrami il codice".

Ora: "Il codice costa poco. Mostrami il documento".

Non scrivere il codice a mano non riduce le esigenze di espressione. Li solleva. In passato, un'idea ambigua aveva il tempo di emergere e diventare più chiara nel corso di un lungo processo di implementazione. Ora un agente può trasformarlo rapidamente in un sistema funzionante e apparentemente completo. L'ambiguità non è scomparsa. È stato semplicemente sepolto nell’implementazione, dove emergerà in seguito sotto forma di fallimenti e perdite.

L’intelligenza artificiale non ci risparmia la necessità di pensare. Rende solo più difficile nascondere idee vaghe dietro la frenesia dell’implementazione.

## L’altra metà di “Carta e penna”

Nel 2025, Wang Jian ha paragonato l’intelligenza artificiale alla “nuova carta e penna” dell’umanità: non il pensiero in sé, ma un’estensione del pensiero umano. [3] Mi piace questa metafora.

Contiene un'interessante simmetria storica. Nel 1948 Alan Turing immaginò una persona dotata di carta, matita e gomma, che seguiva una serie di regole, il cui comportamento poteva essere considerato quello di una macchina universale. [4] Le persone hanno quindi utilizzato carta e matita per spiegare come una persona potrebbe simulare una macchina. Quasi ottant’anni dopo, la direzione sembra essersi invertita. La macchina sta diventando la nuova carta e penna, aiutando le persone a manifestare le proprie intenzioni in mondi che possono funzionare.

La metafora mi ricorda anche l'università. A parte dormire, probabilmente ho passato un terzo del mio tempo spostandomi avanti e indietro tra software e hardware: installando sistemi operativi, configurando ambienti, strumenti di apprendimento, armeggiando con microcontrollori, debuggando robot su ruote e facendoli coordinare in formazione, e costruendo qualunque demo mi interessasse. Mi è piaciuto il processo, ma spesso ho trascorso più tempo a prepararmi per creare che a creare, come un pittore che cerca sempre la carta, produce pigmenti e ripara i pennelli.

Chiamare l’intelligenza artificiale “la nuova carta e penna” non significa che possa fare tutto. La carta non scrive un romanzo. I pigmenti non dipingono una buona immagine e una macchina fotografica non produce una buona pellicola. Gli strumenti abbassano il costo dell’espressione, ma non decidono cosa vale la pena esprimere.

Gli agenti di codifica sono molto più attivi di carta e penna. Offrono suggerimenti, eseguono compiti e fanno scelte in un ambito limitato. Ma finché non riescono ad assumersi la responsabilità dello scopo e delle conseguenze di un’opera, una maggiore partecipazione non li rende automaticamente autori.

Ciò che mi interessa è l’altra metà di “carta e penna nuove”:

Se abbiamo carta e penna nuove, di che tipo di artisti abbiamo bisogno?

## Il centro della creazione di software si sta espandendo

L’idea che i programmatori siano artisti non è nuova.

Nel 1974, Donald Knuth spiegò in “Computer Programming as an Art” perché la programmazione richiede conoscenza, abilità e creatività e come può produrre oggetti di bellezza. [5] Nel 2003, Paul Graham ha sostenuto in “Hackers and Painters” che gli hacker e i pittori sono entrambi creatori. Per i creatori di software, i computer sono un mezzo di espressione proprio come la pittura lo è per un pittore o il cemento per un architetto. [6]

L’intelligenza artificiale non sta rendendo i programmatori artisti per la prima volta. Sta cambiando dove l'arte si svolge principalmente.

Gran parte dell’arte di un programmatore si svolgeva all’interno del codice: se un algoritmo era ingegnoso, un’astrazione elegante o un sistema in grado di contenere abbastanza possibilità con la minima struttura possibile. Questo tipo di bellezza non scomparirà perché sono arrivati gli agenti.

Ma man mano che sempre più lavoro di implementazione si sposta verso gli agenti, il centro della creazione umana si sposta verso l’alto. L’arte del software si esprimerà sempre più nell’opera nel suo complesso: quali problemi scegliere, quali vite comprendere, quale ordine stabilire, a quali possibilità rinunciare, come rispondere agli utenti e come l’opera dovrebbe entrare nelle loro vite.

La creazione a livello di prodotto e di esperienza è sempre esistita. Il cambiamento è che quando l’implementazione non consuma più la maggior parte della nostra attenzione, queste preoccupazioni possono diventare il lavoro principale di un numero maggiore di creatori di software.

Il codice elegante conta ancora, ma il codice non è mai stato l’intera bellezza del software. Il software creato insieme da persone e intelligenza artificiale non dovrebbe essere visto semplicemente come una pila di codice che funziona, ma come un’opera software completa.

Questo è il cambiamento implicito nei “nuovi artisti”.

In termini professionali esistenti, il ruolo assomiglia a una combinazione tra un product manager e un architetto: chiedersi sia cosa dovrebbe essere realizzato e per chi, sia come il sistema può durare e dove si trovano i suoi confini. Ma quei titoli non bastano. L’autore del software ha bisogno anche di gusto, empatia, capacità di scendere a compromessi e disponibilità ad assumersi la responsabilità del risultato complessivo.

“Artista” qui non è un titolo più nobile, né descrive necessariamente una persona. È il ruolo di un autore responsabile di un'opera completa e un team può condividerlo.

L'ingegneria consente al lavoro di esistere in modo affidabile. L'arte determina perché esiste e come entra nella vita umana.

## L'ingegneria non scomparirà e la responsabilità non potrà essere esternalizzata

Il nuovo artista non propone una buona idea per poi aspettare che l'IA finisca tutto il resto.

Anche dopo la diffusione di carta e penna, la scrittura richiedeva ancora formazione; dopo che le macchine fotografiche si sono diffuse, la fotografia richiedeva ancora un giudizio. Gli agenti di codifica riducono il costo di implementazione, ma non risolvono automaticamente l'architettura, la sicurezza, le prestazioni, la qualità o la manutenzione nei sistemi complessi.

Il fatto che non leggo codici non significa che abbia abbandonato il controllo ingegneristico. I punti di controllo sono cambiati: dall'ispezione dell'implementazione linea per linea alla definizione degli obiettivi del sistema, dei principi dell'architettura, dei limiti dei dati, dei modelli di autorizzazione, degli standard di test, dell'osservabilità e dei risultati dei test di accettazione.

Ciò non rende il lavoro meno rigoroso. Pone il rigore altrove. I test coprono i rischi reali? I risultati di runtime mostrano che il sistema soddisfa i suoi vincoli? Esistono prove a sostegno della spiegazione dell’agente? Se una funzionalità viene eseguita, è anche pronta per la spedizione? L’intelligenza artificiale può partecipare a ciascuno di questi compiti, ma alla fine è la persona che deve decidere se le prove sono affidabili e sopportare le conseguenze di eventuali errori.

Alcuni campi, tra cui infrastrutture, sistemi critici per la sicurezza e software di basso livello, continueranno a richiedere che le persone lavorino in profondità nel codice. Potrebbero aver bisogno più che mai del piccolo numero di persone che comprendono veramente gli strati inferiori. Un nuovo livello di astrazione non cancella mai i livelli sottostanti. I linguaggi di alto livello non hanno eliminato l’assembly e il cloud computing non ha eliminato i sistemi operativi. Un nuovo livello consente semplicemente a più creatori di evitare di attraversare ogni livello inferiore ogni volta che realizzano qualcosa.

La mia decisione di non scrivere o leggere codice è una pratica limitata, non una regola per tutti. Il suo valore non è dimostrare che il codice è obsoleto. Mi aiuta a vedere quali parti del lavoro non possono ancora essere trasferite quando il codice non è più l’unica interfaccia attraverso la quale le persone controllano il software.

Il primo è il giudizio. La seconda è la responsabilità.

Strumenti più potenti possono anche produrre mediocrità su scala più ampia. Quando l’implementazione diventa più economica, potremmo prima ottenere software più ripetitivo e rozzo che non soddisfa alcuna esigenza reale. Carta e penna non producono automaticamente letteratura. Gli agenti di codifica non produrranno automaticamente una rinascita del software.

L’intelligenza artificiale non elimina la scarsità. Lo muove.

La produzione di software era limitata principalmente dalle competenze di programmazione, dalle risorse ingegneristiche e dai tempi di implementazione. Man mano che questi vincoli si allentano, il giudizio su quali problemi siano importanti, l’intuizione del prodotto, la comprensione dei sistemi, il gusto, la comprensione delle persone e la volontà di assumersi la responsabilità delle conseguenze diventano relativamente scarsi.

Poiché “come farlo” diventa più economico, “cosa fare” diventa più costoso.

## Da autori di codice ad autori di software

Bret Taylor ha citato un'osservazione di Arya Asemanfar: L'intelligenza artificiale può redigere per te, ma tu sei ancora l'autore. [7] Addy Osmani ha descritto il nuovo ruolo dello sviluppatore come architetto e redattore capo. [8]

Un autore non è obbligato a compiere ogni azione che produce un'opera. Gli architetti non posano ogni mattone e i registi non azionano ogni telecamera su un set cinematografico. Ma devono sapere cosa dovrebbe diventare il lavoro, giudicare se avrà successo e assumersi la responsabilità del lavoro nel suo insieme.

Lo stesso cambiamento sta avvenendo nel software.

Eravamo soliti identificare l'autore del software chiedendo chi ha scritto il codice. In futuro, la paternità potrebbe dipendere sempre più da una serie diversa di domande: chi ha definito il problema? Chi ha stabilito i vincoli? Chi ha effettuato i compromessi critici? Chi ha deciso che il lavoro era finito? E chi ha la responsabilità di ciò che accade dopo che è entrato nel mondo?

Ciò potrebbe anche cambiare l'unità economica del software. In passato, un'esigenza di solito doveva essere condivisa da un numero sufficiente di persone per giustificare la creazione di un software specifico. Quando i costi di implementazione scendono abbastanza, il particolare flusso di lavoro di un team, di una famiglia o anche di una sola persona può giustificare un software proprio. Non tutti devono diventare programmatori, ma più persone possono diventare autori di software.

L’intelligenza artificiale spinge più lavoro di implementazione verso il basso, spostando i punti di controllo umani e il centro della creazione verso l’alto di un livello di astrazione. I programmatori non saranno più semplici autori di codice. Diventeranno sempre più autori di opere software complete: i “nuovi artisti” intendo.

Sono arrivate la nuova carta e la penna. Ma un nuovo rinascimento non seguirà automaticamente. Non dipende da quanto codice gli agenti possono generare, ma dal fatto che abbiamo il giudizio – e la volontà di assumerci la responsabilità – di rispondere a una domanda più difficile di “come può essere realizzato?”

Cosa vale la pena creare e come vogliamo che le persone lo vivano?

---

## Riferimenti

[1] Andrej Karpathy, [post su X che introduce il “vibe coding”](https://x.com/karpathy/status/1886192184808149383), 2025-02-02.

[2] Andrej Karpathy, [post su X che propone l’“agentic engineering”](https://x.com/karpathy/status/2019137879310836075), 2026-02-04.

[3] Liu Ningxin, ["Wang Jian: L'innovazione deriva dall'imperfezione e dall'attraversamento dei confini"](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25-09-2025.

[4] Alan M. Turing, [“Intelligent Machinery”](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), rapporto del National Physical Laboratory, 1948.

[5] Donald E. Knuth, [“La programmazione come arte”](https://doi.org/10.1145/361604.361612), *Comunicazioni dell'ACM*, 17(12), 1974, pp. 667–673.

[6] Paul Graham, ["Hackers and Painters"](https://paulgraham.com/hp.html), maggio 2003.

[7] Bret Taylor, ["L'intelligenza artificiale è il tuo ghostwriter, ma tu sei l'autore"](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O'Reilly Media, agosto 2025.
