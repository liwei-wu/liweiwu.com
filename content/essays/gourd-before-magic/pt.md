---
id: gourd-before-magic
type: essay
locale: pt
title: A cabaça já existe, mas a magia ainda não apareceu
description: No primeiro ano depois de saltar para o próximo rio, lançamos 27 versões e começamos a entender como transformar uma demo em um produto capaz de servir aos usuários no longo prazo.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: f9dc9ea4e7b36be0
topics:
  - Empreendedorismo
  - Produto
  - Inteligência artificial
  - MagicGourd
  - Notas inteligentes
---

No último dia de 2023, publiquei neste site pessoal meu primeiro ensaio, “Saltar para o próximo rio”. A frase final era: “Ainda estou na água.”

Um ano se passou, e continuo na água.

O rio não ficou mais fácil, nem a margem oposta mais nítida. Mas algo mudou. No segundo semestre de 2023, logo depois de deixar a SenseTime, onde trabalhei por quase dez anos, passei a maior parte do tempo lutando e procurando uma direção. Em 2024, começamos a dedicar a maior parte do nosso tempo ao desenvolvimento de um produto concreto.

O fio principal do ano foi o produto; algumas tentativas limitadas de captação formaram um fio secundário. Não conseguimos investimento nem vimos um sinal de mercado forte o bastante para confirmar a direção, mas desenvolvemos e lançamos 27 versões.

Depois de saltar para o próximo rio, finalmente começamos a aprender a nadar para a frente.

## Primeiro, fazer uma cabaça

No ensaio do fim do ano passado, escrevi que havia decidido começar pelas notas inteligentes.

Desde o ensino médio, tenho o hábito de não ler sem escrever. Quando leio um livro ou artigo, ou assisto a um vídeo, presto atenção aos trechos que me tocam, marco-os e registro as ideias que surgem. Chamo esse processo de “encontrar pontos”: perceber o que nos toca e registrar a inspiração.

Às vezes, um ponto é apenas uma frase, uma imagem ou um quadro de vídeo. Naquele momento, eles podem parecer desconectados. Mas, quando se acumulam em quantidade suficiente, acabam se ligando e me ajudam a compreender um problema ou formar um julgamento no qual eu ainda não havia pensado.

Durante muitos anos, experimentei diferentes ferramentas de notas, mas nunca encontrei um produto que realmente se ajustasse a esse hábito. Depois de deixar a SenseTime, procurei um amigo de infância — o mesmo com quem eu mexia em ninhos de pássaros e entrava em brigas — e decidimos construí-lo juntos. No primeiro semestre de 2024, passamos a maior parte do tempo trabalhando em um espaço compartilhado na Torre Sohu.

Chamamos o produto de MagicGourd.

“Gourd”, cabaça, também é o apelido do meu filho. Quando escolhemos o nome, não lhe atribuí conscientemente tanto significado. Olhando para trás, talvez houvesse ali um desejo inconsciente: que o primeiro produto construído por mim como empreendedor em tempo integral pudesse, como uma criança, crescer aos poucos sob nossos cuidados.

Um produto não é uma criança, claro. Mas eles têm algo em comum: trazê-lo ao mundo é apenas o começo. O longo trabalho de cuidar dele e ajudá-lo a crescer é a parte realmente difícil.

O verdadeiro segundo cérebro que imaginávamos ainda estava longe da realidade e não poderia ser concluído de uma só vez. Por isso, decidimos começar pelo passo mais básico: permitir que as pessoas marcassem o que as tocava e anotassem suas inspirações enquanto navegavam na web, liam um PDF on-line ou assistiam a um vídeo.

Primeiro, fazer uma cabaça capaz de guardar esses pontos.

## As decisões de produto por trás de um botão de destaque

Logo depois de começar o desenvolvimento, encontramos uma questão que parecia pequena demais para importar: como deveria ser o botão de destaque?

Ele deveria ser um único botão ou um painel com várias ações? Depois que alguém selecionasse um texto, deveria aparecer imediatamente ou esperar ser chamado? Onde deveria aparecer e quando deveria desaparecer? Se alguém não gostasse que aparecesse automaticamente, deveríamos oferecer uma opção para desativá-lo?

Cada opção adicional parece atender a mais necessidades, mas também aumenta o custo de entender e usar o produto. Fazer o botão aparecer de forma mais ativa facilita descobrir a função, mas também pode interromper a leitura repetidamente. Mantê-lo mais discreto pode ajudar na concentração, mas talvez a pessoa nunca perceba que a função existe.

Não existe uma resposta padrão, no sentido algorítmico, para perguntas como essas.

Ao desenvolver algoritmos, costumamos perguntar se uma capacidade pode ser implementada, se a precisão pode aumentar e se o desempenho atende aos requisitos. Ao desenvolver um produto, passamos a fazer outra pergunta: quando uma função deve intervir e quando deve recuar para os bastidores?

O fato de uma função rodar apenas demonstra que a tecnologia funciona. Se as pessoas a compreendem, se se sentem interrompidas e se querem mantê-la em sua vida cotidiana é o que determina se o produto funciona.

Eu já havia lidado com muitos problemas do mundo real ao desenvolver algoritmos e grandes projetos. Mas, quando criamos um produto do zero, decisões antes compartilhadas entre equipes de produto, design, clientes e engenharia de repente passaram a ser só nossas. Precisávamos decidir o que deveria ser visível e o que deveria permanecer nos bastidores; o que fazer agora e o que deixar de fora, mesmo que pudesse ser útil.

Aos poucos, percebemos que um produto não é formado pela quantidade de funções, mas por incontáveis escolhas. Às vezes, não aparecer e não interromper também são capacidades do produto.

## Um produto precisa se sustentar no tempo

Se um botão parece natural é algo que o usuário percebe imediatamente. Mas muitos dos fatores que determinam se um produto será usado por anos ficam escondidos.

O MagicGourd guarda o histórico de leitura, os momentos de impacto e as ideias de uma pessoa. Queríamos proteger ao máximo a privacidade dos usuários e, ao mesmo tempo, oferecer sincronização entre dispositivos e, no futuro, serviços inteligentes. Para fazer as duas coisas, escolhemos criptografar os dados localmente e armazenar apenas texto cifrado no backend. Isso aumentou a complexidade do desenvolvimento e da manutenção. Mas, se a pessoa não pode ser verdadeiramente dona dos próprios dados, um verdadeiro segundo cérebro é impossível desde o início.

A sincronização é outro problema que parece simples, mas é muito complexo. Quando alguém cria um destaque, a interface deve responder imediatamente, em vez de parar e esperar pela rede. O registro não deve ser interrompido nem com conexão fraca nem sem conexão. Quando a rede voltar, os dados de diferentes dispositivos precisam ser sincronizados corretamente, sem duplicação, sobrescrita ou desaparecimento silencioso.

Isso nos obrigou a repensar como frontend e backend deveriam trabalhar juntos, como o banco de dados deveria organizar as informações, como as atualizações preservariam a compatibilidade e como o sistema se recuperaria de falhas. O usuário normalmente não vê essas decisões. Mas, quando uma delas falha, toda a complexidade oculta se transforma de imediato na experiência mais direta.

A experiência de curto prazo é relativamente fácil de produzir. Não é tão difícil criar uma demonstração fluida que impressione por alguns minutos. Mas, para nós, ela ainda seria apenas uma demo.

Uma demo só precisa funcionar diante dos olhos. Um produto precisa se sustentar no tempo.

Se um produto pretende acompanhar alguém por dez anos, os alicerces da experiência daqui a dez anos precisam ser construídos hoje. Uma falha em uma ferramenta comum talvez seja apenas um incômodo temporário. Em um produto que guarda anos de notas, uma única perda de dados pode destruir toda a confiança acumulada pelo usuário.

Não podemos prometer que o sistema nunca terá problemas. Mas “não perder uma única nota do usuário” precisa ser uma das nossas restrições de projeto mais importantes. A experiência do produto não acontece apenas na tela; ela também acontece no banco de dados que o usuário nunca vê.

## Um fio secundário de captação muito curto

Talvez seja exagero até chamar a captação de recursos de fio secundário do ano. Conversamos com apenas três firmas de investimento e passamos quase todo o restante do tempo desenvolvendo o produto.

Nossa ideia era simples: procurar investidores em estágio inicial que conhecíamos direta ou indiretamente, explicar o que estávamos construindo e tentar obter nosso primeiro investimento-anjo.

O valor desse investimento não estaria apenas no dinheiro. O produto ainda não estava pronto e não havia um sinal claro do mercado. Naquele momento, queríamos receber uma avaliação externa sobre se bons investidores consideravam que a direção fazia sentido.

Nenhuma dessas tentativas produziu resultado. Na época, atribuímos isso a um ambiente de financiamento ruim para aplicações de IA e à nossa pouca experiência em conversar com investidores. Os dois fatores existiam. Mas, olhando agora, havia um fato mais imediato: dedicamos pouco tempo à captação e falamos com apenas três firmas. Em vez de dizer que passamos por uma rodada de captação fracassada, seria mais preciso dizer que tivemos algumas conversas preliminares com investidores.

O que merece mais reflexão é como reagi quando nossas ideias foram questionadas.

Na entrevista com a MiraclePlus, diante de mim estavam pessoas que eu respeitava profundamente. Quando elas desafiavam repetidamente nossas ideias e faziam perguntas muito duras, eu sentia uma tensão: estávamos ali buscando investimento, então parecia que eu deveria respeitar o julgamento delas e até me aproximar, em alguma medida, das respostas que esperavam.

Mas, se buscávamos investimento para receber um retorno honesto, dizer algo em que não acreditávamos tornaria esse retorno sem sentido.

Mais tarde, comecei a me perguntar se era mesmo só isso que queríamos. Talvez, antes de o produto ser validado pelo mercado, também buscássemos a aprovação de um grupo de excelentes investidores para nos assegurar de que não havíamos escolhido a direção errada.

Era como estar em um rio desconhecido, esperando que alguém na margem nos dissesse primeiro para onde nadar. Mas um empreendedor precisa sentir a corrente por si mesmo e julgar com base nos fatos à sua frente.

## Os “Anciãos de Xuanming” da Torre Dongsheng

No segundo semestre de 2024, mudamos da Torre Sohu para a Torre Dongsheng.

Meu amigo de infância e eu programávamos em par por longos períodos, muitas vezes sentados diante da mesma tela enquanto conversávamos. Entre os jovens empreendedores do espaço compartilhado, essa forma de trabalhar chamava bastante atenção. Com o tempo, ganhamos um apelido: os “Anciãos de Xuanming”.

Era engraçado. Duas pessoas que, quando crianças, mexiam em ninhos de pássaros e brigavam juntas estavam, vinte anos depois, sentadas em um escritório compartilhado construindo um produto chamado MagicGourd.

Foi na Torre Dongsheng que conhecemos Kehan. Na MiraclePlus, ele era responsável pela comunidade e pelo recrutamento de projetos empreendedores. Na primeira vez que falou conosco, perguntou: “Vocês são empreendedores, certo? Observo vocês há muito tempo. De todo mundo neste escritório, vocês dois são os que mais parecem estar de verdade no modo fundador.”

Mais tarde, quando soube que havíamos participado de uma entrevista da MiraclePlus, conversamos sobre o que tinha acontecido. Ele explicou que, quando investidores questionam repetidamente uma ideia, nem sempre estão apenas expressando discordância. Também podem estar testando se os fundadores realmente pensaram bem no assunto e se conseguem preservar o próprio julgamento sob pressão.

Isso me fez reinterpretar a entrevista.

Respeitar os investidores não significa entregar a eles nosso julgamento. Um empreendedor precisa entender por que os outros discordam sem abandonar o próprio critério só porque essas pessoas merecem respeito. O que deve ser evitado não é mudar de opinião diante de novos fatos, mas mudar o que dizemos apenas para obter aprovação antes de pensar bem na questão.

Essa lição não vale apenas para captação. Ao desenvolver um produto, encontramos diariamente comentários de usuários, escolhas feitas por produtos concorrentes e novas tendências tecnológicas. Todos esses sinais externos merecem atenção, mas decidir o que deve entrar no produto continua sendo nossa responsabilidade.

## A cabaça já existe

No fim de 2024, havíamos desenvolvido e lançado 27 versões do MagicGourd.

Começamos com anotações de texto e imagem em páginas comuns, depois adicionamos suporte a PDFs on-line e estendemos o mesmo método ao Bilibili e ao YouTube. O usuário podia marcar um quadro de vídeo que o tocasse, escrever uma nota e retornar rapidamente àqueles momentos na linha do tempo. Também adicionamos gerenciamento de etiquetas, busca e exportação, e sincronizamos dados entre navegadores e dispositivos.

Cada novo formato de conteúdo exigia muita adaptação. As páginas da web não têm uma estrutura uniforme, e as plataformas de vídeo mudam continuamente. Uma função que opera corretamente em um site pode se comportar de maneira totalmente diferente em outra página ou navegador. Grande parte do nosso tempo não produziu capacidades novas e visíveis: foi dedicada a resolver casos-limite para que as capacidades existentes funcionassem com mais estabilidade.

Nas 27 versões lançadas durante o ano, não encontramos casos de perda ou corrupção de dados dos usuários. As falhas ocasionais se concentraram em etapas do serviço, como códigos de verificação de login. Quando recebíamos um relato, quase sempre conseguíamos localizar e resolver o problema rapidamente. Isso não prova que o sistema nunca falhará, mas sugere que o tempo dedicado ao que o usuário não vê não foi desperdiçado.

Em novembro, apresentamos o recurso de notas de vídeo no [sspai](https://sspai.com/post/93549). Os usuários começaram a deixar comentários. Uma pessoa que antes salvava quadros úteis tirando capturas de tela e colando-as em outro lugar escreveu, depois de experimentar o MagicGourd: “Este plugin me salvou!” Outros gostaram dos marcadores em forma de gota na linha do tempo, pediram notas independentes ou esperavam suporte ao Safari em breve.

Receber comentários dos usuários foi uma das maiores alegrias do ano.

O que nos alegrou não foi apenas o elogio ao produto, mas o fato de alguém ter incorporado à vida real algo que havíamos criado. As pessoas também davam sugestões úteis que nos levavam a continuar decidindo: quais comentários revelavam um problema comum e quais vinham de um hábito individual; o que deveria ser resolvido imediatamente e o que, embora útil, ainda não deveria entrar no produto.

Se dividirmos o nome do produto em duas partes, no fim do ano pelo menos já havíamos construído a “cabaça”: um recipiente para coletar, preservar e organizar momentos de impacto e inspiração.

## A magia ainda não apareceu

Mas aquilo ainda não era a magia que tínhamos em mente.

Ela certamente usaria IA, mas não se limitaria a gerar o resumo de um artigo. Um resumo pode comprimir informação sem fazer a cognição avançar.

Na nossa maneira de entender, informação é o conteúdo que uma pessoa recebe; conhecimento é informação compreendida e organizada; cognição é a forma como uma pessoa entende o mundo, cria conexões e julgamentos e os revisa quando chegam novas experiências.

A IA de hoje é boa em processar informação e cada vez melhor em organizar conhecimento. Ela pode resumir um artigo, extrair palavras-chave e responder a perguntas cuja resposta já está no material. Mas, se apenas comprime dez páginas em uma ou adiciona uma caixa de conversa ao lado de um aplicativo de notas, ainda não tocou no que realmente queremos construir.

Queremos que um futuro MagicGourd compreenda os registros que uma pessoa acumulou ao longo do tempo e reúna momentos de impacto dispersos entre diferentes épocas e mídias. Ele poderia descobrir temas que se repetem sem nunca terem sido explicitados, revelar conexões e contradições entre notas, identificar perguntas há muito tempo sem resposta ou trazer de volta um pensamento anterior no momento certo.

Mais importante, deveria levantar perguntas que o usuário ainda não considerou, mas que valem a pena investigar, ajudando-o a formar novos julgamentos próprios.

É preciso haver um limite claro: a IA não pode apresentar suas suposições como uma “verdade” que o usuário ainda não percebeu. Ela pode propor possíveis conexões, contradições e perguntas. Se essas conexões fazem sentido, ainda cabe ao usuário decidir.

A magia não pensa no lugar do usuário. Ela o ajuda a enxergar o pensamento que ainda não terminou.

Durante o ano, construímos algumas demos internas relacionadas a essa ideia. Elas conseguiam gerar resumos, organizar conteúdo e responder a perguntas. Já pareciam produtos de IA. Mas ainda estavam longe do que chamamos de “fazer a cognição avançar”, por isso não as lançamos às pressas apenas para acompanhar a onda da IA.

Quanto mais profundamente a IA participa do processo cognitivo de uma pessoa, mais privados são os dados que precisa acessar. Isso nos deixou ainda mais certos de que privacidade e propriedade dos dados não são questões de engenharia separadas da magia: são condições para que a magia possa existir. Não podemos afirmar que queremos compreender os usuários e, ao mesmo tempo, pedir que abram mão do controle dos próprios dados.

Assim, em 31 de dezembro de 2024, a cabaça já existia, mas a magia ainda não havia aparecido.

Não tínhamos conseguido investimento, visto um sinal decisivo do mercado nem estabelecido um modelo de negócio claro. Ainda não sabíamos aonde aquele rio acabaria nos levando.

Mas havíamos lançado 27 versões. Os usuários começavam a incorporar o produto à própria vida. E nós começávamos a entender como transformar uma demo que funcionava em um produto real e assumir responsabilidade por ele no longo prazo.

Um ano antes, eu havia escrito: “Ainda estou na água.”

Um ano depois, continuava na água. O rio não havia ficado mais fácil, nem a margem oposta mais clara.

Mas já tínhamos feito a cabaça.

A magia ainda não havia aparecido. Também não tínhamos chegado à outra margem. Mas, pelo menos, havíamos começado a nadar para a frente.
