---
id: gourd-before-magic
type: essay
locale: fr
title: La gourde est là, mais la magie ne s’est pas encore manifestée
description: Durant la première année après avoir plongé dans la rivière suivante, nous avons publié 27 versions et commencé à comprendre comment transformer une démo en un produit capable de servir durablement ses utilisateurs.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: f9dc9ea4e7b36be0
topics:
  - Entrepreneuriat
  - Produit
  - Intelligence artificielle
  - MagicGourd
  - Notes intelligentes
---

Le dernier jour de 2023, j’ai publié sur ce site personnel mon premier essai, « Plonger dans la rivière suivante ». Sa dernière phrase était : « Je suis encore dans l’eau. »

Un an a passé, et je suis toujours dans l’eau.

La rivière n’est pas devenue plus facile, ni l’autre rive plus nette. Mais quelque chose a changé. Au second semestre 2023, après avoir quitté SenseTime où j’avais travaillé près de dix ans, j’ai passé l’essentiel de mon temps à lutter et à chercher une direction. En 2024, nous avons commencé à consacrer la majeure partie de notre temps à construire un produit précis.

Le produit a constitué le fil principal de l’année ; quelques tentatives limitées de financement en ont été un fil secondaire. Nous n’avons pas levé de fonds ni vu de signal de marché assez fort pour confirmer notre direction, mais nous avons développé et publié 27 versions.

Après avoir plongé dans la rivière suivante, nous commencions enfin à apprendre à avancer à la nage.

## D’abord, fabriquer une gourde

Dans l’essai écrit à la fin de l’année dernière, je disais avoir finalement décidé de commencer par les notes intelligentes.

Depuis le collège, j’ai pour habitude de ne pas lire sans écrire. Lorsque je lis un livre ou un article, ou que je regarde une vidéo, je remarque les passages qui me touchent, je les marque et je note les idées qui surgissent. J’appelle ce processus « trouver des points » : percevoir ce qui nous touche et consigner l’inspiration qui en naît.

Un point n’est parfois qu’une phrase, une image ou une seule séquence. Sur le moment, ces points peuvent sembler sans rapport. Mais, lorsqu’ils sont assez nombreux, ils finissent par se relier, m’aidant à comprendre un problème ou à former un jugement auquel je n’avais pas encore pensé.

Pendant des années, j’ai essayé différents outils de prise de notes sans jamais trouver un produit réellement adapté à cette habitude. Après avoir quitté SenseTime, j’ai retrouvé un ami d’enfance — celui avec qui je dénichais des oiseaux et me battais — et nous avons décidé de le construire ensemble. Durant le premier semestre 2024, nous avons travaillé la plupart du temps dans un espace partagé de la tour Sohu.

Nous avons appelé le produit MagicGourd.

« Gourd », la gourde, est aussi le surnom de mon enfant. Lorsque nous avons choisi ce nom, je ne lui ai pas consciemment attribué beaucoup de sens. Avec le recul, il contenait peut-être un espoir inconscient : que le premier produit construit après être devenu entrepreneur à plein temps puisse, comme un enfant, grandir lentement sous nos soins.

Un produit n’est évidemment pas un enfant. Mais ils ont un point commun : le faire naître n’est qu’un début. Le long travail qui consiste à en prendre soin et à le faire grandir est la partie réellement difficile.

Le véritable second cerveau que nous imaginions était encore loin de la réalité et ne pouvait être achevé en une seule étape. Nous avons donc commencé par la plus élémentaire : permettre aux utilisateurs de marquer ce qui les touche et de noter leur inspiration lorsqu’ils parcourent le Web, lisent un PDF en ligne ou regardent une vidéo.

D’abord, fabriquer une gourde capable de recueillir ces points.

## Les choix de produit derrière un bouton de surlignage

Peu après le début du développement, nous avons rencontré une question qui semblait minuscule : à quoi devait ressembler le bouton de surlignage ?

Devait-il s’agir d’un seul bouton ou d’un panneau regroupant plusieurs actions ? Après la sélection d’un texte, devait-il apparaître immédiatement ou attendre d’être appelé ? Où devait-il apparaître, et quand devait-il disparaître ? Si quelqu’un n’aimait pas qu’il apparaisse automatiquement, fallait-il ajouter un réglage pour le désactiver ?

Chaque option supplémentaire semble répondre à davantage de besoins, mais elle augmente aussi le coût de compréhension et d’utilisation. Faire apparaître le bouton plus activement rend la fonction plus facile à découvrir, mais peut aussi interrompre sans cesse la lecture. Le rendre plus discret aide peut-être à rester concentré, mais l’utilisateur risque alors de ne jamais découvrir son existence.

Il n’existe pas de réponse standard, au sens algorithmique, à ce genre de questions.

Lorsque nous développons des algorithmes, nous demandons si une capacité peut être mise en œuvre, si la précision peut être améliorée et si les performances satisfont les exigences. En construisant un produit, nous avons commencé à poser une autre question : quand une fonction doit-elle intervenir, et quand doit-elle se retirer à l’arrière-plan ?

Le fait qu’une fonction s’exécute prouve seulement que la technologie fonctionne. Le fait que les utilisateurs la comprennent, ne se sentent pas interrompus et veuillent la garder dans leur quotidien détermine si le produit fonctionne.

J’avais déjà traité de nombreux problèmes du monde réel en développant des algorithmes et de grands projets. Mais, lorsque nous avons créé un produit à partir de zéro, des choix auparavant partagés entre les équipes produit, design, client et ingénierie sont soudain devenus les nôtres. Nous devions décider ce qui devait être visible et ce qui devait rester caché ; ce qu’il fallait construire maintenant et ce qu’il fallait laisser de côté, même si cela pouvait être utile.

Nous avons progressivement compris qu’un produit n’est pas fait du nombre de ses fonctions, mais d’innombrables arbitrages. Parfois, ne pas apparaître et ne pas interrompre sont aussi des capacités du produit.

## Un produit doit tenir dans le temps

Le caractère naturel d’un bouton est une expérience immédiatement perceptible. Mais bien davantage de facteurs qui déterminent si un produit sera utilisé pendant des années restent invisibles.

MagicGourd conserve l’historique de lecture, les moments de résonance et les idées d’une personne. Nous voulions protéger autant que possible la vie privée des utilisateurs tout en proposant une synchronisation entre appareils et, à terme, des services intelligents. Pour concilier les deux, nous avons choisi de chiffrer les données localement et de ne stocker que du texte chiffré côté serveur. Cela a accru la complexité du développement et de la maintenance. Mais si une personne ne peut pas réellement posséder ses données, un véritable second cerveau est impossible dès le départ.

La synchronisation est un autre problème qui paraît simple et ne l’est pas. Lorsqu’une personne crée un surlignage, l’interface doit répondre immédiatement au lieu de s’arrêter pour attendre le réseau. La prise de notes ne doit pas être interrompue, même avec une connexion faible ou sans connexion. Lorsque le réseau revient, les données de différents appareils doivent se synchroniser correctement, sans doublon, écrasement ni disparition silencieuse.

Cela nous a obligés à repenser la collaboration entre le frontend et le backend, l’organisation des données dans la base, la compatibilité lors des mises à jour et la récupération après une erreur. L’utilisateur ne voit généralement pas ces choix. Mais lorsque l’un d’eux échoue, toute cette complexité cachée devient immédiatement l’expérience la plus directe.

L’expérience à court terme est relativement facile à produire. Il n’est pas si difficile de réaliser une démonstration fluide qui impressionne pendant quelques minutes. Mais, à nos yeux, ce ne serait encore qu’une démo.

Une démo doit seulement tenir sous nos yeux. Un produit doit tenir dans le temps.

Si un produit doit accompagner quelqu’un pendant dix ans, les fondations de son expérience dans dix ans doivent être construites aujourd’hui. Une panne dans un outil ordinaire n’est peut-être qu’un désagrément temporaire. Dans un produit qui contient des années de notes, une seule perte de données peut détruire toute la confiance accumulée par l’utilisateur.

Nous ne pouvons pas promettre que le système ne connaîtra jamais de problème. Mais « ne pas perdre une seule note d’utilisateur » doit rester l’une de nos contraintes de conception les plus importantes. L’expérience produit ne se déroule pas seulement à l’écran ; elle existe aussi dans la base de données que l’utilisateur ne voit jamais.

## Un très court détour par le financement

Il est peut-être exagéré de qualifier le financement de fil secondaire de l’année. Nous n’avons parlé qu’à trois sociétés d’investissement et avons consacré presque tout le reste de notre temps au produit.

Notre idée était simple : approcher des investisseurs en phase initiale que nous connaissions directement ou indirectement, leur présenter ce que nous construisions et essayer d’obtenir notre premier investissement providentiel.

La valeur de cet investissement ne résidait pas seulement dans l’argent. Le produit n’était pas terminé et aucun signal clair du marché n’était apparu. À ce stade, nous voulions un regard extérieur sur la question de savoir si d’excellents investisseurs jugeaient cette direction pertinente.

Aucune de ces tentatives n’a abouti. À l’époque, nous l’expliquions par un environnement de financement difficile pour les applications d’IA et par notre manque d’expérience dans les échanges avec les investisseurs. Ces deux facteurs existaient. Mais, avec le recul, un fait plus immédiat s’imposait : nous avions consacré peu de temps à la levée de fonds et parlé à seulement trois sociétés. Plutôt que de dire que nous avions traversé un tour de financement raté, il serait plus juste de parler de quelques conversations préliminaires.

Ce qui mérite davantage de réflexion, c’est ma réaction face aux objections.

Lors de notre entretien avec MiraclePlus, les personnes assises en face de moi étaient des gens que je respectais profondément. Lorsqu’elles remettaient sans cesse nos idées en question et formulaient leurs questions de façon très tranchante, j’étais partagé : puisque nous étions venus chercher un investissement, il me semblait devoir respecter leur jugement et même, dans une certaine mesure, me rapprocher des réponses qu’elles attendaient.

Mais si le but de la levée de fonds était de recevoir un retour sincère, dire des choses auxquelles nous ne croyions pas aurait privé ce retour de tout sens.

Plus tard, j’ai commencé à me demander si nous ne cherchions vraiment qu’un retour. Peut-être voulions-nous aussi, avant que le marché ne valide le produit, l’approbation d’un groupe d’excellents investisseurs pour nous rassurer sur la direction choisie.

C’était comme se tenir dans une rivière inconnue en espérant que quelqu’un, sur la rive, nous indique d’abord où nager. Mais un entrepreneur doit finalement sentir lui-même le courant et juger à partir des faits qu’il a devant lui.

## Les « Anciens de Xuanming » de la tour Dongsheng

Au second semestre 2024, nous avons quitté la tour Sohu pour la tour Dongsheng.

Mon ami d’enfance et moi programmions en binôme pendant de longues périodes, souvent assis devant le même écran à discuter. Parmi les jeunes entrepreneurs de l’espace partagé, cette manière de travailler se remarquait. Avec le temps, on nous a donné un surnom : les « Anciens de Xuanming ».

C’était amusant. Deux personnes qui, enfants, dénichaient des oiseaux et se battaient ensemble se retrouvaient vingt ans plus tard dans un bureau partagé à construire un produit appelé MagicGourd.

C’est à la tour Dongsheng que nous avons rencontré Kehan. Chez MiraclePlus, il était chargé de la communauté et du recrutement de projets entrepreneuriaux. La première fois qu’il nous a parlé, il a demandé : « Vous êtes des entrepreneurs, n’est-ce pas ? Je vous observe depuis longtemps. Dans tout le bureau, c’est vous deux qui avez le plus l’allure de véritables fondateurs. »

Plus tard, lorsqu’il a appris que nous avions passé un entretien avec MiraclePlus, nous avons reparlé de ce moment. Il nous a expliqué que, lorsque les investisseurs remettent sans cesse une idée en question, ils n’expriment pas toujours seulement leur désaccord. Ils peuvent aussi vérifier si les fondateurs ont réellement réfléchi au sujet et s’ils savent conserver leur jugement sous pression.

Cela m’a permis de relire l’entretien autrement.

Respecter les investisseurs ne signifie pas leur remettre notre jugement. Un entrepreneur doit comprendre pourquoi les autres ne sont pas d’accord sans abandonner son propre jugement simplement parce que ces personnes méritent son respect. Ce qu’il faut éviter, ce n’est pas de changer d’avis face à de nouveaux faits, mais de changer ce que l’on dit uniquement pour obtenir une approbation avant d’avoir réellement réfléchi.

Cette leçon dépasse le financement. En construisant un produit, nous rencontrons chaque jour des retours d’utilisateurs, des choix faits par des produits concurrents et de nouvelles tendances technologiques. Tous ces signaux extérieurs méritent notre attention, mais décider de ce qui doit entrer dans le produit reste notre responsabilité.

## La gourde est là

À la fin de 2024, nous avions développé et publié 27 versions de MagicGourd.

Nous avons commencé par les annotations de texte et d’image sur des pages Web ordinaires, puis ajouté la prise en charge des PDF en ligne et étendu la même méthode à Bilibili et YouTube. L’utilisateur pouvait marquer une image vidéo qui le touchait, écrire une note et revenir rapidement à ces moments sur la ligne du temps. Nous avons également ajouté la gestion des étiquettes, la recherche et l’exportation, et synchronisé les données entre navigateurs et appareils.

Chaque nouveau format de contenu exigeait beaucoup d’adaptation. Les pages Web n’ont pas de structure uniforme et les plateformes vidéo changent constamment. Une fonction qui marche correctement sur un site peut se comporter tout autrement sur une autre page ou dans un autre navigateur. Une grande partie de notre temps n’a pas produit de capacités nouvelles et visibles ; elle a servi à traiter les cas limites afin que les capacités existantes fonctionnent de façon plus stable.

Dans les 27 versions publiées cette année-là, nous n’avons constaté aucun cas de perte ou de corruption de données utilisateur. Les défaillances occasionnelles concernaient surtout des étapes de service telles que les codes de vérification de connexion. Lorsque nous recevions un signalement, nous pouvions généralement localiser et résoudre rapidement le problème. Cela ne prouve pas que le système ne connaîtra jamais de panne, mais montre au moins que le temps consacré à ce que l’utilisateur ne voit pas n’a pas été perdu.

En novembre, nous avons présenté la fonction de notes vidéo sur [sspai](https://sspai.com/post/93549). Des utilisateurs ont commencé à laisser des commentaires. Une personne qui sauvegardait auparavant les images utiles d’une vidéo en faisant des captures d’écran puis en les collant ailleurs a écrit après avoir essayé MagicGourd : « Cette extension m’a sauvé ! » D’autres appréciaient les marqueurs en forme de goutte sur la ligne du temps, demandaient des notes indépendantes ou espéraient une prise en charge rapide de Safari.

Recevoir les retours des utilisateurs a été l’une des plus grandes joies de l’année.

Ce qui nous réjouissait n’était pas seulement que l’on fasse l’éloge du produit, mais que quelqu’un ait intégré à sa vie réelle quelque chose que nous avions créé. Les utilisateurs proposaient aussi des suggestions utiles qui nous obligeaient à continuer de choisir : quels commentaires révélaient un problème commun et lesquels venaient d’une habitude individuelle ; ce qui devait être résolu immédiatement et ce qui, bien qu’utile, ne devait pas encore entrer dans le produit.

Si l’on sépare le nom du produit en deux, à la fin de l’année nous avions au moins construit la « gourde » : un récipient pour recueillir, conserver et organiser les moments de résonance et d’inspiration.

## La magie ne s’est pas encore manifestée

Mais ce n’était pas encore la magie que nous avions en tête.

Elle ferait certainement appel à l’IA, mais ne se contenterait pas de générer le résumé d’un article. Un résumé peut compresser l’information sans faire progresser la cognition.

Selon notre compréhension, l’information est le contenu qu’une personne reçoit ; la connaissance est une information comprise et organisée ; la cognition est la manière dont une personne comprend le monde, établit des liens et des jugements, puis les révise à mesure que de nouvelles expériences arrivent.

L’IA actuelle sait bien traiter l’information et devient de plus en plus efficace pour organiser les connaissances. Elle peut résumer un article, extraire des mots-clés et répondre à des questions dont la réponse figure déjà dans le contenu. Mais si elle se contente de réduire dix pages à une ou d’ajouter une fenêtre de discussion à côté d’une application de notes, elle n’a pas encore touché ce que nous voulons réellement construire.

Nous voulons qu’un futur MagicGourd comprenne les traces accumulées par une personne au fil du temps et réunisse des moments de résonance dispersés entre différentes périodes et différents médias. Il pourrait découvrir des thèmes récurrents qui n’ont jamais été formulés explicitement, révéler les liens et les contradictions entre des notes, repérer des questions restées longtemps sans réponse ou faire ressurgir une réflexion passée au bon moment.

Plus important encore, il devrait soulever des questions que l’utilisateur n’a pas encore envisagées mais qui méritent d’être poursuivies, afin de l’aider à former ses propres nouveaux jugements.

Une limite claire est nécessaire : l’IA ne peut pas présenter ses suppositions comme une « vérité » que l’utilisateur n’aurait pas encore découverte. Elle peut proposer des liens, des contradictions et des questions possibles. Il appartient toujours à l’utilisateur de décider si ces liens tiennent.

La magie ne pense pas à la place de l’utilisateur. Elle l’aide à voir la réflexion qu’il n’a pas encore terminée.

Au cours de l’année, nous avons construit plusieurs démos internes autour de cette idée. Elles pouvaient générer des résumés, organiser du contenu et répondre à des questions. Elles ressemblaient déjà à des produits d’IA. Mais elles restaient loin de ce que nous appelions « faire progresser la cognition », et nous ne les avons donc pas mises en ligne à la hâte simplement pour suivre la vague de l’IA.

Plus l’IA participe profondément au processus cognitif d’une personne, plus les données auxquelles elle doit accéder sont privées. Cela nous a encore davantage convaincus que la vie privée et la propriété des données ne sont pas des problèmes d’ingénierie séparés de la magie : elles sont des conditions préalables à son existence. Nous ne pouvons pas prétendre vouloir comprendre les utilisateurs tout en leur demandant d’abandonner le contrôle de leurs propres données.

Ainsi, au 31 décembre 2024, la gourde était là, mais la magie ne s’était pas encore manifestée.

Nous n’avions pas levé de fonds, ni vu de signal décisif du marché, ni établi de modèle économique clair. Nous ne savions toujours pas où cette rivière finirait par nous conduire.

Mais nous avions publié 27 versions. Des utilisateurs commençaient à intégrer le produit à leur vie. Et nous commencions à comprendre comment transformer une démo fonctionnelle en un véritable produit et en assumer la responsabilité dans la durée.

Un an plus tôt, j’avais écrit : « Je suis encore dans l’eau. »

Un an plus tard, j’étais toujours dans l’eau. La rivière n’était pas devenue plus facile, ni l’autre rive plus nette.

Mais nous avions construit la gourde.

La magie ne s’était pas encore manifestée. Nous n’avions pas atteint l’autre rive non plus. Mais au moins, nous avions commencé à avancer à la nage.
