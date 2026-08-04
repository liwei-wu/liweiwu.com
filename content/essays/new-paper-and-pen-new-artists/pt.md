---
id: new-paper-and-pen-new-artists
type: essay
locale: pt
title: "Novo papel e nova caneta, novos artistas"
subtitle: "Quando o código se torna um artefato intermediário, quem é o autor do software?"
description: "Quando a implementação não é mais a parte mais escassa, o que acontece com o trabalho humano?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - IA
  - Software
  - Autoria
---

Ao longo de quase seis meses de trabalho de engenharia, construí vários produtos inéditos com agentes de codificação, usando apenas linguagem natural, documentos de produto, restrições de arquitetura, resultados de tempo de execução e feedback de aceitação. Os produtos abrangem aplicativos de desktop, extensões de navegador, serviços de back-end e bancos de dados.

Não escrevi uma única linha de código. Nem li um.

Mas isso não significa que entreguei os produtos à IA. Ainda decidi quais problemas eles deveriam resolver, defini como os sistemas deveriam funcionar, julguei quais limites não poderiam ser ultrapassados, verifiquei se os resultados eram confiáveis e assumi a responsabilidade pelo software final. O que mudou foi simplesmente a minha interface com a implementação.

Isso me forçou a reconsiderar uma questão que antes parecia simples: se alguém não escreve mais código à mão, mas ainda define o trabalho, decide se ele será bem-sucedido e permanece responsável por ele, ainda será o autor do software?

Esta prática não prova que todo software possa ser construído desta forma. Nem sequer prova que estes produtos inéditos terão sucesso no mercado. Mas para os tipos de aplicativos que construímos, um fluxo de trabalho centrado em agentes de codificação não é mais apenas uma forma de programar mais rapidamente. Está se tornando uma abordagem de engenharia que pode sustentar planejamento, implementação, testes, correção e iteração.

A mudança importante não é que “a IA possa escrever código”. A implementação costumava ser uma das partes mais escassas da criação de software; agora está começando a ficar em segundo plano.

Quando a implementação não é mais a parte mais escassa, o que acontece com o trabalho humano?

Essa é a questão deste ensaio.

## A fronteira da IA está mudando

IA nunca foi um termo fixo. As pessoas tendem a chamar algo de IA, enquanto os computadores ainda não conseguem fazê-lo de forma confiável; uma vez que a capacidade amadurece e entra nos produtos de uso diário, ela rapidamente se torna uma tecnologia comum e deixa de se parecer com IA.

Meu próprio caminho também seguiu esse limite. No ensino fundamental e na universidade, trabalhei com robôs com rodas, usando sensores e controle de feedback para fazê-los seguir caminhos, evitar obstáculos e coordenar a formação. Durante a pós-graduação, estudei visão computacional e também ingressei na recém-fundada [SenseTime][entity-sensetime] como um dos primeiros funcionários fundadores. Ajudei a trazer tecnologias de detecção de vivacidade facial e visão industrial para aplicações de grande escala, incluindo smartphones e trens de alta velocidade. Hoje, os modelos de fundação de uso geral e os agentes que eles capacitam empurraram os limites novamente. Estes sistemas já não abordam apenas problemas isolados. Eles estão começando a compreender os objetivos, a usar ferramentas e a continuar agindo em resposta ao feedback; meu trabalho também mudou para esses produtos. Olhando para trás, desde o controle do movimento e compreensão de imagens até a conclusão de tarefas inteiras, as máquinas estão assumindo cadeias de trabalho mais longas e completas.

Neste ensaio, portanto, a IA refere-se principalmente a agentes orientados por modelos básicos de uso geral, com agentes de codificação como exemplo representativo. O seu desenvolvimento aponta para a execução autónoma de tarefas num horizonte mais longo, para a autoevolução gradual e até para a capacidade de treinar os seus próprios sucessores.

Em 2025, Andrej Karpathy usou “vibe coding” para descrever um estilo flexível de programação: diga à IA o que você deseja, aceite o código gerado, envie-lhe mensagens de erro e até mesmo esqueça que o código existe. [1] Mas chegar até aqui tem uma pré-condição: o custo do fracasso deve ser baixo. Na época, para produtos sérios, ainda usávamos o Cursor. Os desenvolvedores humanos lideraram o trabalho e permaneceram responsáveis pelo código; o agente ajudou.

No início de 2026, vimos a fronteira avançar novamente. Mais tarde, Karpathy chamou a nova forma de trabalhar de “engenharia agentica”: os desenvolvedores não usam mais apenas a IA para completar o código, mas organizam e supervisionam os agentes à medida que realizam tarefas de engenharia, mantendo a responsabilidade pela revisão e qualidade. [2] O nome não é importante. O que importa é que a IA está a passar da oferta de sugestões, uma de cada vez, para uma ação sustentada dentro de restrições.

Para alguns criadores de software, a linguagem natural e os documentos já estão se tornando uma nova camada para expressar intenções.

## O código está se tornando um artefato intermediário

A história da computação é também uma história de adição de camadas de abstração.

As pessoas primeiro operaram máquinas com interruptores e cabos patch. Depois vieram o código de máquina, o assembly e as linguagens de programação de alto nível. Cada nova camada ocultava parte da complexidade abaixo e permitia que as pessoas trabalhassem mais perto de suas intenções.

Os agentes de codificação adicionam uma nova camada de abstração ao desenvolvimento de software. Eles são algo como um supercompilador não determinístico: um compilador tradicional traduz um programa formalmente especificado em instruções de máquina, enquanto um agente de codificação tenta desdobrar a intenção humana em interfaces, dados, serviços e código.

A diferença importa. A linguagem humana é ambígua. Os requisitos costumam ser incompletos e as restrições podem entrar em conflito. Um agente não pode traduzir mecanicamente uma frase em um único resultado correto. Tem que passar por compreensão, planejamento, implementação, execução e verificação.

A linguagem natural não substituiu as linguagens de programação. Mais precisamente, a linguagem natural e os documentos estão a tornar-se uma camada de intenção mantida pelas pessoas, enquanto o código serve cada vez mais como um meio de implementação gerado e mantido pelos agentes.

Isso torna o código mais parecido com um artefato intermediário, mas “intermediário” não significa sem importância. O código ainda precisa ser correto, seguro e passível de manutenção. Simplesmente pode não precisar ser escrito e lido linha por linha por uma pessoa. A maioria dos programadores não inspeciona o código de máquina emitido por um compilador, mas permanece responsável pelo que o programa faz.

Isso muda o que precisamos deixar claro.

A documentação costumava ser uma explicação do código. Em nosso trabalho, a relação está começando a se inverter: mais código está sendo gerado e verificado a partir de documentos. Por que o produto existe, como o sistema deve funcionar, quais limites não podem ser ultrapassados e quais evidências mostram que ele atende aos seus requisitos – essas coisas, uma vez tratadas como anexos ao código, estão se tornando a fonte do próprio software.

Depois: "Falar é fácil. Mostre-me o código."

Agora: "O código é barato. Mostre-me o documento."

Não escrever código manualmente não diminui as demandas de expressão. Isso os levanta. No passado, uma ideia ambígua teve tempo de surgir e se tornar mais clara ao longo de um longo processo de implementação. Agora, um agente pode transformá-lo rapidamente em um sistema funcional e aparentemente completo. A ambiguidade não desapareceu. Foi apenas enterrado na implementação, onde surgirá mais tarde como falhas e perdas.

A IA não nos poupa da necessidade de pensar. Isso apenas torna mais difícil esconder ideias vagas por trás da agitação da implementação.

## A outra metade de “papel e caneta”

Em 2025, Wang Jian comparou a IA ao “novo papel e caneta” da humanidade: não o pensamento em si, mas uma extensão do pensamento humano. [3] Gosto dessa metáfora.

Ele contém uma simetria histórica interessante. Em 1948, Alan Turing imaginou uma pessoa equipada com papel, lápis e borracha, seguindo um conjunto de regras, cujo comportamento poderia ser considerado o de uma máquina universal. [4] As pessoas então usaram papel e lápis para explicar como uma pessoa poderia simular uma máquina. Quase oitenta anos depois, a direção parece ter se invertido. A máquina está se tornando o novo papel e caneta, ajudando as pessoas a desdobrar intenções em mundos que podem funcionar.

A metáfora também me lembra a universidade. Além de dormir, provavelmente passei um terço do meu tempo alternando entre software e hardware: instalando sistemas operacionais, configurando ambientes, aprendendo ferramentas, mexendo em microcontroladores, depurando robôs com rodas e fazendo com que eles se coordenassem em formação, e construindo quaisquer demonstrações que me interessassem. Gostei do processo, mas muitas vezes passei mais tempo preparando-me para criar do que criando – como um pintor que está sempre procurando papel, fazendo pigmentos e consertando pincéis.

Chamar a IA de novo papel e caneta não significa que ela possa fazer tudo. O papel não escreve um romance. O pigmento não pinta uma boa imagem e uma câmera não faz um bom filme. As ferramentas reduzem o custo da expressão, mas não decidem o que vale a pena expressar.

Os agentes de codificação são muito mais ativos do que papel e caneta. Eles oferecem sugestões, executam tarefas e fazem escolhas dentro de um escopo limitado. Mas até que possam assumir a responsabilidade pelo propósito e pelas consequências de uma obra, uma maior participação não os torna automaticamente autores.

O que me interessa é a outra metade do “novo papel e caneta”:

Se tivermos papel e caneta novos, de que tipo de artistas precisamos?

## O centro de criação de software está subindo

A ideia de que programadores são artistas não é nova.

Em 1974, Donald Knuth explicou em “Computer Programming as an Art” porque a programação requer conhecimento, habilidade e criatividade, e como pode produzir objetos belos. [5] Em 2003, Paul Graham argumentou em “Hackers and Painters” que hackers e pintores são ambos criadores. Para os criadores de software, os computadores são um meio de expressão, assim como a tinta é para um pintor ou o concreto para um arquiteto. [6]

A IA não está transformando programadores em artistas pela primeira vez. Está mudando onde a arte acontece principalmente.

Grande parte da arte de um programador costumava acontecer dentro do código: seja um algoritmo engenhoso, uma abstração elegante ou um sistema capaz de conter possibilidades suficientes com o mínimo de estrutura possível. Esse tipo de beleza não desaparecerá porque os agentes chegaram.

Mas à medida que mais trabalho de implementação passa para os agentes, o centro da criação humana sobe. A arte do software será cada vez mais expressa no trabalho como um todo: que problemas escolher, que vidas compreender, que ordem estabelecer, que possibilidades renunciar, como responder aos utilizadores e como o trabalho deve entrar nas suas vidas.

A criação ao nível do produto e da experiência sempre existiu. A mudança é que quando a implementação não consumir mais a nossa atenção, essas preocupações podem se tornar o principal trabalho de mais criadores de software.

O código elegante ainda é importante, mas o código nunca foi toda a beleza do software. O software feito por pessoas e IA em conjunto não deve ser visto apenas como uma pilha de código em execução, mas como um trabalho completo de software.

Esta é a mudança implícita nos “novos artistas”.

Em termos profissionais existentes, o papel assemelha-se a uma combinação de gestor de produto e arquiteto: perguntando o que deve ser feito e para quem, e como o sistema pode resistir e onde estão os seus limites. Mas esses títulos não são suficientes. O autor do software também precisa de bom gosto, empatia, capacidade de fazer concessões e disposição para assumir a responsabilidade pelo resultado geral.

“Artista” aqui não é um título mais nobre, nem descreve necessariamente uma pessoa. É papel de um autor responsável por uma obra completa, e uma equipe pode compartilhá-la.

A engenharia permite que o trabalho exista de forma confiável. A arte determina por que existe e como entra na vida humana.

## A engenharia não desaparecerá e a responsabilidade não poderá ser terceirizada

O novo artista não propõe uma boa ideia e depois espera que a IA termine todo o resto.

Mesmo depois da difusão do papel e da caneta, a escrita ainda exigia treinamento; depois que as câmeras se espalharam, a fotografia ainda exigia julgamento. Os agentes de codificação reduzem o custo de implementação, mas não resolvem automaticamente a arquitetura, a segurança, o desempenho, a qualidade ou a manutenção em sistemas complexos.

O fato de eu não ler código não significa que abandonei o controle de engenharia. Os pontos de controle mudaram: desde a inspeção da implementação linha por linha até a definição de objetivos do sistema, princípios de arquitetura, limites de dados, modelos de permissão, padrões de teste, observabilidade e resultados de testes de aceitação.

Isso não torna o trabalho menos rigoroso. Coloca rigor em outro lugar. Os testes cobrem os riscos reais? Os resultados do tempo de execução mostram que o sistema satisfaz suas restrições? Existem evidências para a explicação do agente? Se um recurso for executado, ele também estará pronto para ser enviado? A IA pode participar em cada uma destas tarefas, mas uma pessoa deve, em última análise, decidir se as provas são fiáveis e suportar as consequências de estar errada.

Alguns campos – incluindo infraestrutura, sistemas críticos de segurança e software de baixo nível – continuarão a exigir que as pessoas trabalhem profundamente no código. Eles podem precisar do pequeno número de pessoas que realmente entendem as camadas inferiores, mais do que nunca. Uma nova camada de abstração nunca apaga as camadas abaixo dela. As linguagens de alto nível não eliminaram o assembly e a computação em nuvem não eliminou os sistemas operacionais. Uma nova camada simplesmente permite que mais criadores evitem atravessar todas as camadas inferiores cada vez que fazem algo.

Minha decisão de não escrever ou ler código é uma prática limitada, não uma regra para todos. Seu valor não é provar que o código é obsoleto. Isso me ajuda a ver quais partes do trabalho ainda não podem ser entregues quando o código não é mais a única interface através da qual as pessoas controlam o software.

O primeiro é o julgamento. A segunda é a responsabilidade.

Ferramentas mais poderosas também podem produzir mediocridade em maior escala. Quando a implementação se torna mais barata, podemos primeiro obter software mais repetitivo e rudimentar que não atende a nenhuma necessidade real. Papel e caneta não produzem literatura automaticamente. Os agentes de codificação não produzirão automaticamente um renascimento do software.

A IA não elimina a escassez. Apenas a desloca.

A produção de software costumava ser limitada principalmente pela habilidade de programação, recursos de engenharia e tempo de implementação. À medida que essas restrições diminuem, o julgamento sobre quais problemas são importantes, a intuição do produto, a compreensão dos sistemas, o gosto, a compreensão das pessoas e a disposição para assumir a responsabilidade pelas consequências tornam-se relativamente mais escassos.

À medida que “como fazer” fica mais barato, “o que fazer” fica mais caro.

## De autores de código a autores de software

Bret Taylor citou uma observação de Arya Asemanfar: A IA pode redigir para você, mas você ainda é o autor. [7] Addy Osmani descreveu a nova função do desenvolvedor como arquiteto e editor-chefe. [8]

Um autor não precisa realizar todas as ações que produzem uma obra. Os arquitetos não colocam todos os tijolos e os diretores não operam todas as câmeras de um set de filmagem. Mas devem saber o que o trabalho deverá tornar-se, avaliar se terá êxito e assumir a responsabilidade pelo trabalho como um todo.

A mesma mudança está acontecendo no software.

Costumávamos identificar o autor do software perguntando quem escreveu o código. No futuro, a autoria poderá depender cada vez mais de um conjunto diferente de questões: Quem definiu o problema? Quem estabeleceu as restrições? Quem fez as compensações críticas? Quem decidiu que o trabalho estava concluído? E quem é o responsável pelo que acontece depois que ele entra no mundo?

Isto também pode alterar a unidade económica do software. No passado, uma necessidade geralmente precisava ser compartilhada por um número suficiente de pessoas para justificar a construção de software para ela. Quando os custos de implementação caem o suficiente, o fluxo de trabalho específico de uma equipe, de uma família ou mesmo de uma pessoa pode justificar seu próprio software. Nem todo mundo precisa se tornar programador, mas mais pessoas podem se tornar autores de software.

A IA empurra mais trabalho de implementação para baixo enquanto move os pontos de controle humano e o centro da criação para uma camada de abstração. Os programadores não serão mais apenas autores de código. Cada vez mais, eles se tornarão autores de obras completas de software – quero dizer, os “novos artistas”.

Chegaram o novo papel e caneta. Mas um novo renascimento não se seguirá automaticamente. Não depende de quanto código os agentes podem gerar, mas se temos o julgamento – e a vontade de assumir responsabilidade – para responder a uma pergunta mais difícil do que “como isso pode ser feito?”

O que vale a pena criar e como queremos que as pessoas experimentem isso?

---

## Referências

[1] Andrej Karpathy, [X post apresentando “vibe coding”](https://x.com/karpathy/status/1886192184808149383), 02/02/2025.

[2] Andrej Karpathy, [X post propondo “engenharia agentica”](https://x.com/karpathy/status/2019137879310836075), 04/02/2026.

[3] Liu Ningxin, [“Wang Jian: A inovação vem da ‘imperfeição’ e ‘cruzando limites’”](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25/09/2025.

[4] Alan M. Turing, [“Intelligent Machinery”](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), relatório do National Physical Laboratory, 1948.

[5] Donald E. Knuth, [“Programação de Computadores como uma Arte”](https://doi.org/10.1145/361604.361612), *Communications of the ACM*, 17(12), 1974, pp. 667–673.

[6] Paul Graham, [“Hackers e Pintores”](https://paulgraham.com/hp.html), maio de 2003.

[7] Bret Taylor, [“AI é seu ghostwriter, mas você é o autor”](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O’Reilly Media, agosto de 2025.
