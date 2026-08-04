---
id: new-paper-and-pen-new-artists
type: essay
locale: fr
title: "Nouveau papier et nouveau stylo, nouveaux artistes"
subtitle: "Lorsque le code devient un artefact intermédiaire, qui est l’auteur du logiciel ?"
description: "Lorsque la mise en œuvre n’est plus la partie la plus rare, que devient le travail humain ?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - IA
  - Logiciel
  - Qualité d’auteur
---

Pendant près de six mois de travail d'ingénierie, j'ai construit plusieurs produits inédits avec des agents de codage, en utilisant uniquement le langage naturel, les documents produits, les contraintes architecturales, les résultats d'exécution et les commentaires d'acceptation. Les produits couvrent les applications de bureau, les extensions de navigateur, les services backend et les bases de données.

Je n'ai pas écrit une seule ligne de code. Je n’en ai pas lu non plus.

Mais cela ne veut pas dire que j’ai confié les produits à l’IA. J'ai néanmoins décidé des problèmes à résoudre, défini comment les systèmes devaient fonctionner, jugé quelles limites ne pouvaient pas être franchies, vérifié si les résultats étaient fiables et pris la responsabilité du logiciel final. Ce qui a changé, c'est simplement mon interface avec l'implémentation.

Cela m'a obligé à reconsidérer une question qui paraissait simple autrefois : si quelqu'un n'écrit plus de code à la main, mais définit quand même le travail, décide de sa réussite et en reste responsable, est-il toujours l'auteur du logiciel ?

Cette pratique ne prouve pas que tous les logiciels peuvent être construits de cette façon. Cela ne prouve même pas que ces produits inédits réussiront sur le marché. Mais pour les types d’applications que nous construisons, un flux de travail centré sur les agents de codage n’est plus simplement un moyen de programmer plus rapidement. Cela devient une approche d'ingénierie capable de soutenir la planification, la mise en œuvre, les tests, la correction et l'itération.

Le changement important n’est pas que « l’IA puisse écrire du code ». La mise en œuvre était autrefois l’une des parties les plus rares de la création de logiciels ; maintenant, il commence à passer au second plan.

Lorsque la mise en œuvre n’est plus la partie la plus rare, que devient le travail humain ?

C'est la question de cet essai.

## Les frontières de l’IA bougent

L’IA n’a jamais été un terme fixe. Les gens ont tendance à appeler quelque chose IA alors que les ordinateurs ne peuvent pas encore le faire de manière fiable ; Une fois que la capacité mûrit et entre dans les produits quotidiens, elle devient rapidement une technologie ordinaire et cesse de ressembler à l’IA.

Mon propre chemin a également suivi cette frontière. Au collège et à l'université, j'ai travaillé sur des robots à roues, en utilisant des capteurs et un contrôle par rétroaction pour leur faire suivre des chemins, éviter les obstacles et se coordonner en formation. Pendant mes études supérieures, j'ai étudié la vision par ordinateur tout en rejoignant la nouvelle société [SenseTime][entity-sensetime] en tant qu'un des premiers employés fondateurs. J'ai contribué à intégrer les technologies de détection de l'activité des visages et de vision industrielle dans des applications à grande échelle, notamment les smartphones et les trains à grande vitesse. Aujourd’hui, les modèles de fondation généralistes et les agents qu’ils alimentent ont encore repoussé la frontière. Ces systèmes ne répondent plus uniquement à des problèmes isolés. Ils commencent à comprendre les objectifs, à utiliser les outils et à continuer d'agir en réponse aux commentaires ; mon travail s'est également orienté vers ces produits. Avec le recul, depuis le contrôle du mouvement et la compréhension des images jusqu'à l'exécution de tâches entières, les machines assument des chaînes de travail plus longues et plus complètes.

Dans cet essai, l’IA fait donc principalement référence à des agents pilotés par des modèles de base à usage général, les agents de codage étant un exemple représentatif. Leur développement laisse présager une exécution autonome de tâches à plus long terme, une auto-évolution progressive et même la capacité de former leurs propres successeurs.

En 2025, Andrej Karpathy a utilisé le « vibe coding » pour décrire un style de programmation libre : dites à l’IA ce que vous voulez, acceptez le code généré, renvoyez-lui des messages d’erreur et oubliez même que le code existe. [1] Mais lâcher prise jusqu’ici a une condition préalable : le coût de l’échec doit être faible. A l’époque, pour les produits sérieux, on utilisait encore Cursor. Les développeurs humains ont dirigé le travail et sont restés responsables du code ; l’agent a aidé.

Début 2026, nous avons vu la frontière avancer à nouveau. Karpathy a ensuite qualifié cette nouvelle façon de travailler d'« ingénierie agent » : les développeurs n'utilisent plus simplement l'IA pour compléter le code, mais organisent et supervisent les agents lorsqu'ils effectuent des tâches d'ingénierie tout en conservant la responsabilité de l'examen et de la qualité. [2] Le nom n'a pas d'importance. Ce qui compte, c’est que l’IA passe de l’offre de suggestions une par une à une action soutenue dans le cadre de contraintes.

Pour certains créateurs de logiciels, le langage naturel et les documents constituent déjà une nouvelle couche d’expression d’intention.

## Le code devient un artefact intermédiaire

L’histoire de l’informatique est aussi celle de l’ajout de couches d’abstraction.

Les gens ont d'abord utilisé des machines avec des commutateurs et des câbles de brassage. Viennent ensuite le code machine, l’assembleur et les langages de programmation de haut niveau. Chaque nouvelle couche masquait une partie de la complexité sous-jacente et permettait aux gens de travailler au plus près de leurs intentions.

Les agents de codage ajoutent une nouvelle couche d'abstraction au développement logiciel. Ils ressemblent en quelque sorte à un super-compilateur non déterministe : un compilateur traditionnel traduit un programme formellement spécifié en instructions machine, tandis qu'un agent de codage tente de déployer l'intention humaine en interfaces, données, services et code.

La différence compte. Le langage humain est ambigu. Les exigences sont souvent incomplètes et les contraintes peuvent entrer en conflit. Un agent ne peut pas traduire mécaniquement une phrase en un seul résultat correct. Il doit passer par la compréhension, la planification, la mise en œuvre, l’exécution et la vérification.

Le langage naturel n’a pas remplacé les langages de programmation. Plus précisément, le langage naturel et les documents deviennent une couche d'intention gérée par les utilisateurs, tandis que le code sert de plus en plus de support de mise en œuvre généré et maintenu par les agents.

Cela fait du code davantage un artefact intermédiaire, mais « intermédiaire » ne signifie pas sans importance. Le code doit toujours être correct, sécurisé et maintenable. Il n’est peut-être tout simplement pas nécessaire qu’une personne l’écrive et le lise ligne par ligne. La plupart des programmeurs n'inspectent pas le code machine émis par un compilateur, mais ils restent responsables de ce que fait le programme.

Cela change ce que nous devons clarifier.

La documentation était autrefois une explication du code. Dans notre travail, la relation commence à s'inverser : davantage de code est généré et vérifié à partir de documents. Pourquoi le produit existe, comment le système doit fonctionner, quelles limites ne peuvent être franchies et quelles preuves montrent qu'il répond à ses exigences : ces éléments, autrefois traités comme des pièces jointes au code, deviennent la source du logiciel lui-même.

Puis : "Parler ne coûte pas cher. Montre-moi le code."

Maintenant : "Le code ne coûte pas cher. Montrez-moi la doc."

Ne pas écrire de code à la main ne réduit pas les exigences d’expression. Cela les élève. Dans le passé, une idée ambiguë avait le temps de surgir et de se préciser au fil d’un long processus de mise en œuvre. Désormais, un agent peut rapidement le transformer en un système fonctionnel et apparemment complet. L'ambiguïté n'a pas disparu. Il a simplement été enterré dans la mise en œuvre, où il fera surface plus tard sous forme d’échecs et de pertes.

L’IA ne nous épargne pas le besoin de réfléchir. Cela ne fait que rendre plus difficile la dissimulation d’idées vagues derrière l’agitation de la mise en œuvre.

## L'autre moitié de « Papier et stylo »

En 2025, Wang Jian a comparé l’IA au « nouveau papier et au nouveau stylo » de l’humanité : non pas la pensée elle-même, mais une extension de la pensée humaine. [3] J'aime cette métaphore.

Il contient une symétrie historique intéressante. En 1948, Alan Turing imaginait une personne équipée de papier, d'un crayon et d'une gomme, suivant un ensemble de règles, dont le comportement pouvait être considéré comme celui d'une machine universelle. [4] Les gens utilisaient ensuite du papier et un crayon pour expliquer comment une personne pouvait simuler une machine. Près de quatre-vingts ans plus tard, la tendance semble s’être inversée. La machine devient le nouveau papier et le nouveau stylo, aidant les gens à concrétiser leurs intentions dans des mondes qui peuvent fonctionner.

La métaphore me rappelle aussi l’université. En plus de dormir, j'ai probablement passé un tiers de mon temps à faire des allers-retours entre les logiciels et le matériel : installer des systèmes d'exploitation, configurer des environnements, apprendre des outils, bricoler des microcontrôleurs, déboguer des robots à roues et les faire coordonner en formation, et construire toutes les démos qui m'intéressaient. J'ai apprécié le processus, mais j'ai souvent passé plus de temps à me préparer à créer qu'à créer, comme un peintre toujours à la recherche de papier, à fabriquer des pigments et à réparer des pinceaux.

Appeler l’IA le nouveau papier et le nouveau stylo ne signifie pas qu’elle peut tout faire. Le papier n’écrit pas de roman. Les pigments ne donnent pas une bonne image et un appareil photo ne fait pas un bon film. Les outils réduisent le coût de l’expression, mais ils ne décident pas de ce qui vaut la peine d’être exprimé.

Les agents de codage sont bien plus actifs que le papier et le stylo. Ils proposent des suggestions, exécutent des tâches et font des choix dans un cadre limité. Mais tant qu’ils ne peuvent pas assumer la responsabilité du but et des conséquences d’une œuvre, une plus grande participation ne fait pas automatiquement d’eux des auteurs.

Ce qui m’intéresse, c’est l’autre moitié du « nouveau papier et stylo » :

Si nous avons du nouveau papier et un nouveau stylo, de quel genre d’artistes avons-nous besoin ?

## Le centre de création de logiciels évolue

L’idée selon laquelle les programmeurs sont des artistes n’est pas nouvelle.

En 1974, Donald Knuth expliquait dans « Computer Programming as an Art » pourquoi la programmation nécessite des connaissances, des compétences et de la créativité, et comment elle peut produire des objets de beauté. [5] En 2003, Paul Graham affirmait dans « Hackers and Painters » que les hackers et les peintres sont tous deux des créateurs. Pour les créateurs de logiciels, les ordinateurs sont un moyen d’expression, tout comme la peinture l’est pour un peintre ou le béton pour un architecte. [6]

L’IA ne fait pas des programmeurs des artistes pour la première fois. Cela change là où l’art se produit principalement.

Une grande partie de l’art d’un programmeur se déroulait autrefois à l’intérieur du code : qu’il s’agisse d’un algorithme ingénieux, d’une abstraction élégante ou d’un système capable de contenir suffisamment de possibilités avec le moins de structure possible. Ce genre de beauté ne disparaîtra pas parce que les agents sont arrivés.

Mais à mesure que le travail de mise en œuvre se déplace vers les agents, le centre de la création humaine s’élève. L’art du logiciel s’exprimera de plus en plus dans l’œuvre dans son ensemble : quels problèmes choisir, quelles vies comprendre, quel ordre établir, à quelles possibilités renoncer, comment répondre aux utilisateurs et comment l’œuvre doit entrer dans leur vie.

La création au niveau du produit et de l'expérience a toujours existé. Le changement est que lorsque la mise en œuvre n’absorbe plus l’essentiel de notre attention, ces préoccupations peuvent devenir le travail principal d’un plus grand nombre de créateurs de logiciels.

Un code élégant est toujours important, mais le code n’a jamais été la seule beauté d’un logiciel. Les logiciels créés conjointement par des personnes et l’IA ne doivent pas être considérés simplement comme un tas de code qui s’exécute, mais comme une œuvre logicielle complète.

C’est le changement qu’impliquent les « nouveaux artistes ».

Dans les termes professionnels existants, le rôle ressemble à une combinaison de chef de produit et d'architecte : se demandant à la fois ce qui doit être fait et pour qui, comment le système peut durer et où se situent ses limites. Mais ces titres ne suffisent pas. L'auteur d'un logiciel a également besoin de goût, d'empathie, de capacité à faire des compromis et de volonté d'assumer la responsabilité du résultat global.

« Artiste » n'est pas ici un titre plus noble et ne décrit pas nécessairement une seule personne. C'est le rôle d'un auteur responsable d'une œuvre complète, et une équipe peut la partager.

L'ingénierie permet au travail d'exister de manière fiable. L'art détermine pourquoi il existe et comment il entre dans la vie humaine.

## L'ingénierie ne disparaîtra pas et la responsabilité ne peut pas être externalisée

Le nouvel artiste ne propose pas de bonne idée et attend ensuite que l'IA termine tout le reste.

Même après la généralisation du papier et du stylo, l’écriture nécessitait toujours une formation ; Après la généralisation des appareils photo, la photographie exigeait encore du jugement. Les agents de codage réduisent le coût de mise en œuvre, mais ils ne résolvent pas automatiquement l'architecture, la sécurité, les performances, la qualité ou la maintenance des systèmes complexes.

Le fait que je ne lise pas le code ne signifie pas que j'ai abandonné le contrôle technique. Les points de contrôle ont changé : de l'inspection de la mise en œuvre ligne par ligne à la définition des objectifs du système, des principes architecturaux, des limites des données, des modèles d'autorisation, des normes de test, de l'observabilité et des résultats des tests d'acceptation.

Cela ne rend pas le travail moins strict. Cela place la rigueur ailleurs. Les tests couvrent-ils les risques réels ? Les résultats d'exécution montrent-ils que le système satisfait à ses contraintes ? Existe-t-il des preuves de l’explication de l’agent ? Si une fonctionnalité est exécutée, est-elle également prête à être livrée ? L’IA peut participer à chacune de ces tâches, mais l’individu doit en fin de compte décider si les preuves sont dignes de confiance et supporter les conséquences d’une erreur.

Certains domaines, notamment les infrastructures, les systèmes critiques pour la sécurité et les logiciels de bas niveau, continueront à nécessiter un travail approfondi dans le code. Ils auront peut-être plus que jamais besoin du petit nombre de personnes qui comprennent vraiment les couches inférieures. Un nouveau calque d'abstraction n'efface jamais les calques situés en dessous. Les langages de haut niveau n’ont pas éliminé l’assemblage, et le cloud computing n’a pas éliminé les systèmes d’exploitation. Une nouvelle couche permet simplement à davantage de créateurs d'éviter de parcourir chaque couche inférieure à chaque fois qu'ils créent quelque chose.

Ma décision de ne pas écrire ou lire de code est une pratique limitée, pas une règle pour tout le monde. Sa valeur n’est pas qu’il prouve que le code est obsolète. Cela m'aide à voir quelles parties du travail ne peuvent toujours pas être transférées lorsque le code n'est plus la seule interface par laquelle les gens contrôlent les logiciels.

Le premier est le jugement. La seconde est la responsabilité.

Des outils plus puissants peuvent également produire une médiocrité à plus grande échelle. Lorsque la mise en œuvre devient moins coûteuse, nous pouvons d’abord obtenir des logiciels plus répétitifs et rudimentaires qui ne répondent à aucun besoin réel. Le papier et le stylo ne produisent pas automatiquement de la littérature. Les agents de codage ne produiront pas automatiquement une renaissance du logiciel.

L’IA n’élimine pas la rareté. Elle ne fait que la déplacer.

La production de logiciels était auparavant principalement limitée par les compétences en programmation, les ressources d'ingénierie et le temps de mise en œuvre. À mesure que ces contraintes s’atténuent, le jugement sur les problèmes importants, l’intuition du produit, la compréhension des systèmes, le goût, la compréhension des personnes et la volonté d’assumer la responsabilité des conséquences deviennent relativement rares.

À mesure que « comment le fabriquer » devient moins cher, « quoi fabriquer » devient plus cher.

## Des auteurs de code aux auteurs de logiciels

Bret Taylor a cité une observation d'Arya Asemanfar : l'IA peut rédiger pour vous, mais vous en êtes toujours l'auteur. [7] Addy Osmani a décrit le nouveau rôle du promoteur en tant qu’architecte et rédacteur en chef. [8]

Un auteur n’est pas obligé d’accomplir toutes les actions qui produisent une œuvre. Les architectes ne posent pas toutes les briques et les réalisateurs ne font pas fonctionner toutes les caméras d'un plateau de tournage. Mais ils doivent savoir ce que doit devenir l’œuvre, juger de sa réussite et assumer la responsabilité de l’œuvre dans son ensemble.

Le même changement se produit dans les logiciels.

Nous avions l'habitude d'identifier l'auteur d'un logiciel en demandant qui a écrit le code. À l’avenir, la paternité pourrait dépendre de plus en plus d’un ensemble différent de questions : qui a défini le problème ? Qui a établi les contraintes ? Qui a fait les compromis critiques ? Qui a décidé que les travaux étaient terminés ? Et qui porte la responsabilité de ce qui se passe après son entrée dans le monde ?

Cela peut également modifier l'unité économique du logiciel. Dans le passé, un besoin devait généralement être partagé par suffisamment de personnes pour justifier la création d'un logiciel correspondant. Lorsque les coûts de mise en œuvre diminuent suffisamment, le flux de travail particulier d'une équipe, d'une famille ou même d'une seule personne peut justifier son propre logiciel. Tout le monde n’est pas obligé de devenir programmeur, mais davantage de personnes peuvent devenir auteurs de logiciels.

L'IA pousse davantage de travail de mise en œuvre vers le bas tout en déplaçant les points de contrôle humain et le centre de création d'une couche d'abstraction. Les programmeurs ne seront plus de simples auteurs de code. De plus en plus, ils deviendront auteurs d’œuvres complètes de logiciels – je veux dire les « nouveaux artistes ».

Le nouveau papier et le nouveau stylo sont arrivés. Mais une nouvelle renaissance ne suivra pas automatiquement. Cela ne dépend pas de la quantité de code que les agents peuvent générer, mais de notre capacité de discernement (et de notre volonté d’assumer nos responsabilités) pour répondre à une question plus difficile que « comment cela peut-il être réalisé ? »

Qu’est-ce qui vaut la peine d’être créé et comment voulons-nous que les gens en fassent l’expérience ?

---

## Références

[1] Andrej Karpathy, [publication sur X présentant le « vibe coding »](https://x.com/karpathy/status/1886192184808149383), 02/02/2025.

[2] Andrej Karpathy, [post X proposant « l'ingénierie agentique »](https://x.com/karpathy/status/2019137879310836075), 04/02/2026.

[3] Liu Ningxin, [« Wang Jian : L'innovation vient de « l'imperfection » et du « franchissement des frontières » »](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25/09/2025.

[4] Alan M. Turing, [« Intelligent Machinery »](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), rapport du Laboratoire national de physique, 1948.

[5] Donald E. Knuth, [« La programmation informatique en tant qu’art »](https://doi.org/10.1145/361604.361612), *Communications of the ACM*, 17(12), 1974, pp. 667–673.

[6] Paul Graham, [« Hackers and Painters »](https://paulgraham.com/hp.html), mai 2003.

[7] Bret Taylor, [« L’IA est votre prête-plume, mais vous restez l’auteur »](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O'Reilly Media, août 2025.
