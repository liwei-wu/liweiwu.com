---
id: jumping-into-the-next-river
type: essay
locale: es
title: Saltar al siguiente río
description: Por qué dejé SenseTime en junio de 2023, después de casi diez años, para emprender sin saber aún cuál sería mi siguiente paso.
slug: jumping-into-the-next-river
published_at: 2023-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: 43420b02f3de32e3
topics:
  - Emprendimiento
  - Inteligencia artificial
  - SenseTime
  - Visión artificial
  - Notas inteligentes
---

En junio de 2023, dejé [SenseTime][entity-sensetime] después de trabajar allí durante casi diez años.

Cuando me fui, no tenía un producto validado ni un plan de negocio completo. Ni siquiera había decidido exactamente qué iba a hacer.

Pero sabía que había llegado otra vez el momento de saltar al siguiente río.

No era la primera vez que cambiaba de río, pero sí la primera en que hacerlo exigía dejar una empresa.

## Una elección que repito

Pasé de una escuela primaria rural a un instituto en la capital del condado. Después estudié la carrera en la [Universidad de Nankín][entity-nanjingUniversity] y el posgrado en la [Universidad de Tsinghua][entity-tsinghuaUniversity]. Durante el posgrado me incorporé a SenseTime, que acababa de nacer. Allí fundé primero el equipo de detección de vida y, más tarde, el de visión industrial.

Al mirar atrás, veo que estos cambios aparecen cada pocos años.

No formaban parte de un plan de vida diseñado de antemano, ni ocurrían porque lo anterior hubiera perdido su sentido. Sencillamente, después de años de dedicación, tanto el campo como yo íbamos madurando. El trabajo no tenía por qué estar terminado, pero ya no me obligaba a superar mis propios límites.

Para muchas personas, ese sería el estado ideal. A mí, en cambio, me inquieta. No me gusta una vida cuyo final se ve de un vistazo. Por eso, cada cierto tiempo necesito meterme en un problema que no sé resolver, uno en el que a veces ni siquiera sé por dónde empezar.

El «río» no es una empresa. Cambiar de río tampoco implica necesariamente renunciar. Es un campo que exige aprender de nuevo, algo difícil que todavía no sé cómo llevar a buen término. En mis casi diez años en SenseTime salté a dos ríos distintos.

Pero no soy una persona que busque el cambio por sí mismo. Dentro de mí actúa otra fuerza, casi opuesta: el sentido de la responsabilidad.

Detesto dejar las cosas a medias. Cuando decido hacer algo, quiero hacerlo de verdad y hacerlo bien. Una fuerza me lleva a buscar el siguiente río; la otra me mantiene en el anterior, intentando terminar lo que ya empecé.

Mi marcha de este año fue el resultado de una larga lucha entre ambas.

## Llevar los algoritmos al mundo real

Cuando entré en SenseTime trabajaba en el departamento de investigación, pero lo que siempre me interesó fueron las aplicaciones. No solo quería saber si un algoritmo funcionaba con datos experimentales, sino si podía entrar en el mundo real y resolver un problema concreto.

La detección de vida era una pieza central del primer gran proyecto implantado por SenseTime. Antes ya teníamos algunas demostraciones de reconocimiento facial bastante buenas. Sin embargo, al enfrentarnos a una aplicación realmente masiva descubrimos que muchos problemas de producción seguían sin resolverse, sobre todo los ataques contra el sistema en línea.

El sistema recibía más de un millón de accesos diarios y, en los momentos de mayor actividad, hasta cientos de miles de ataques en un solo día. La tecnología tenía que seguir avanzando, mientras el servicio ya desplegado debía mantenerse en pie. Muchas veces aquello era un combate cuerpo a cuerpo. Solíamos salir de la oficina a las tres o cuatro de la madrugada y, en ocasiones, pasábamos allí toda la noche.

Era habitual que, después de luchar durante un día y una noche y resolver todos los ataques conocidos, volviéramos a casa para dormir. Poco después de acostarnos sonaba otra vez el teléfono: habían vuelto a vulnerar el sistema.

En ese proceso ayudamos a impulsar la arquitectura de modelos de extremo a extremo de SenseTime para el reconocimiento facial. Hasta entonces, muchos algoritmos de aprendizaje profundo se utilizaban solo en partes aisladas y el sistema completo encadenaba varias etapas. Pero frente a ataques que cambiaban continuamente, los métodos combinados a mano no podían iterar con suficiente rapidez. La única salida que veíamos era dejar que un único modelo de aprendizaje profundo de extremo a extremo aprendiera directamente de los datos. Entonces lo llamábamos el «modelo unificado».

Ese proyecto me enseñó por primera vez que un algoritmo funcione en una demostración no significa que la tecnología ya sea válida. Solo se vuelve realmente utilizable cuando resiste el acceso a gran escala, los ataques continuos y toda clase de situaciones imprevistas.

Después entramos en los teléfonos inteligentes. Antes de cada lanzamiento, los fabricantes organizaban pruebas con cientos de personas, y tanto otras empresas como los usuarios seguían descubriendo nuevos problemas. Eso nos obligó a crear uno de los mayores equipos de pruebas que, hasta donde sabíamos, existían entonces en una empresa de algoritmos de IA, con la intención de agotar todas las posibilidades.

Un problema de contraluz solo podía reproducirse en un aseo masculino concreto de una de las oficinas de SenseTime. Otro, al que llamábamos «rostro de dos luces», aparecía únicamente desde cierto ángulo bajo un árbol determinado. Para que un producto funcionara con fiabilidad en la vida cotidiana de cientos de millones de personas, hicimos una enorme cantidad de trabajo de este tipo.

Al final conseguimos que la autenticación de identidad en teléfonos inteligentes liderara el mercado.

Ese fue el primer río al que entré en SenseTime. La detección de vida comenzó como una demostración de investigación, superó varias rondas de aplicaciones a gran escala y terminó convirtiéndose en un campo bastante maduro. En 2019, muchos problemas que antes exigían explorar asumiendo riesgos ya podían resolverse con la experiencia acumulada. No había terminado todo, pero sabía que había vuelto a entrar en una zona de confort.

Y empecé de nuevo a sentirme inquieto.

## Quedarme en SenseTime y cambiar de río

En 2019 no dejé SenseTime. Elegí pasar, dentro de la misma empresa, de la autenticación de identidad a la visión industrial.

Tras mucha investigación y numerosas conversaciones con los responsables de la empresa y el equipo comercial, escogimos como primer proyecto de visión industrial la inspección inteligente del sistema de catenaria C4 de los trenes de alta velocidad.

El equipo de preventa y yo visitamos muchos centros de inspección y organismos ferroviarios. El que más me impresionó fue el centro de Xuzhou. Acababa de llover cuando llegamos. Estaba en una zona bastante apartada y avanzamos por un camino embarrado, hundiéndonos a cada paso.

Dentro había filas y filas de ordenadores. Los inspectores pasaban gran parte del día mirando imágenes para localizar posibles fallos en la catenaria ferroviaria. Casi todos tenían ojeras. Después de encontrar un fallo, todavía debían recorrer miles de kilómetros de vías para solucionar cada problema. A veces solo se trataba de un tornillo o una tuerca flojos, pero tenían que desplazarse hasta allí. Con frío intenso o calor sofocante, la reparación no podía esperar.

La necesidad me pareció dolorosamente clara. Como mínimo, debíamos ayudarles con lo que más tiempo consumía: mirar imágenes.

Solo al empezar descubrimos que era mucho más difícil de lo imaginado. Una catenaria contiene más de cien tipos de componentes y más de mil tipos de defectos. Incluso esas cifras surgieron después de contarlos y ordenarlos repetidamente con los compañeros de primera línea. Gran parte de las inspecciones dependía de la experiencia, mientras los documentos y datos históricos estaban dispersos. Tuvimos que reunir el material desde cero, trabajar junto a quienes estaban sobre el terreno y entender uno a uno todos los tipos de fallo. El proceso se prolongó durante casi dos años.

El reto aún mayor era la escasez de muestras. Los fallos en las líneas de alta velocidad son, por naturaleza, muy raros. Algunos no aparecen ni una vez al año, pero cuando ocurren pueden tener consecuencias graves. No podíamos esperar a reunir suficientes muestras. Solo podíamos rediseñar los métodos a partir de las condiciones reales.

Finalmente, el proyecto funcionó y se implantó a gran escala.

La visión industrial fue mi segundo río en SenseTime. No cambié de empresa, pero cambió casi todo lo que conocía: los problemas, los datos, los clientes, los criterios de evaluación y la manera de trabajar. Volví a ser principiante y, junto con el equipo, conseguimos hacer algo que al principio no sabíamos hacer.

Por eso digo que el río no es la empresa. Lo que de verdad me atrae no es dejar un lugar, sino entrar en un problema más difícil.

## El 2022 en que no cambié de río

Después de salir a bolsa, SenseTime empezó a afrontar nuevas presiones financieras y de recursos. Al mismo tiempo, la ola anterior de visión artificial entraba poco a poco en su madurez y la siguiente aún no había aparecido con claridad. Muchas cosas estaban limitadas por los recursos, el mercado o las fronteras de la tecnología, y ya no podían avanzar tan deprisa como antes.

Durante todo 2022 estuve algo abatido o, dicho de otro modo, un poco resignado. Empecé a cumplir un horario normal.

No hay nada malo en esa frase. Trabajar un horario normal es la vida normal de mucha gente. Pero yo siempre había tratado mi trabajo como un emprendimiento. Al entrar de pronto en ese estado, me sentí profundamente desanimado.

En apariencia, aquella vida era mucho más cómoda. Ya no me despertaba cada día con un problema nuevo que exigía una solución inmediata, ni pasaba tantas noches en vela por una avería en línea. Sin embargo, lo que de verdad me incomodaba era precisamente eso: empezaba a imaginar cómo sería mi vida unos años después si nada cambiaba.

No me fui de inmediato. Lo que me hizo quedarme fue la responsabilidad.

La inspección ferroviaria había funcionado, pero no habíamos conseguido la inspección de calidad en fábricas de automóviles ni terminado el brazo robótico industrial inteligente. Quería seguir trabajando en ello. Me costaba aceptar haber fundado un equipo y elegido una dirección para luego marcharme en el momento más difícil.

Una fuerza me decía que buscara el siguiente río; la otra, que el trabajo que tenía delante aún no estaba terminado.

En 2022, la segunda era más fuerte.

## Vi el siguiente río

ChatGPT apareció a finales del año pasado. GPT-4 llegó durante la primera mitad de este año. El equilibrio anterior se rompió.

Entonces tuve una sensación muy intensa: la visión artificial había perdido su propia base.

El futuro no estaría formado por modelos independientes para texto, imagen y voz. La visión artificial no desaparecería, pero se convertiría en una parte de la forma en que los modelos generales entienden el mundo. Antes tratábamos la visión como un centro tecnológico completo; ahora empezaba a aparecer una era más amplia de inteligencia general.

No era otra actualización técnica dentro de la visión artificial. Había cambiado la corriente principal del desarrollo tecnológico.

Volví a ver un río cuyas corrientes todavía desconocía.

Antes podía cambiar de río sin salir de SenseTime. El paso de la autenticación a la visión industrial en 2019 fue una decisión de ese tipo. Esta vez, sin embargo, el siguiente río no estaba en la prolongación de mi trabajo anterior. Yo quería entrar en la inteligencia general y en las nuevas aplicaciones que esta crearía.

Mi puesto y mis responsabilidades seguían estando en la visión industrial. Si me quedaba, debía dedicarme por completo a hacer bien ese trabajo. No debía cargar con mis responsabilidades actuales mientras preparaba por otro lado mi próximo destino.

Para saltar de verdad al siguiente río, primero tenía que dejar mi antiguo puesto.

En la primera mitad de este año cada vez me costaba más quedarme quieto. No sabía qué productos crearía finalmente la nueva tecnología, ni qué podría hacer yo dentro de ella. Pero sabía que, si esperaba a tenerlo todo claro, podía perder los años en los que más necesitaba empezar a aprender.

Las cosas que de verdad importan rara vez llegan a un momento en el que se pueda declarar que están «completamente terminadas». Si ser responsable significa esperar a que todos los problemas hayan acabado, una persona quizá nunca pueda tomar una decisión nueva.

Poco a poco entendí que la responsabilidad no solo significa quedarse. Quedarse también es una elección y exige asumir sus consecuencias. El sentido de la responsabilidad no puede convertirse en un motivo para posponer una decisión indefinidamente.

Por eso, en junio de este año, dejé SenseTime.

## Por qué me fui sin tener una respuesta

Antes de marcharme, no preparé en secreto una empresa fuera del trabajo ni pensé en sacar fuera el negocio que SenseTime estaba desarrollando para fundar la mía.

Si seguía trabajando en una empresa, con la responsabilidad de entregar su trabajo y usando los recursos que me proporcionaba, mientras por dentro pensaba cómo preparar mi siguiente destino, sentiría que no estaba siendo honesto con mi trabajo actual.

Eso significaba que, cuando renuncié, de verdad no estaba preparado.

No me faltaba preparación porque no me tomara en serio emprender, sino porque hasta el momento de marcharme seguía tomándome en serio mi trabajo anterior.

Solo podía irme primero y buscar la respuesta después.

Saber nadar no significa conocer todos los ríos. Tampoco se puede permanecer en la orilla hasta entender por completo la corriente antes de saltar. Hay conocimientos que solo se adquieren en el agua y direcciones que solo se ven después de empezar a moverse.

Esta vez, cambiar de río significó dejar mi empleo. Pero lo que me impulsó no fue el deseo de renunciar, sino la aparición del siguiente río.

## Elegir el lado de las aplicaciones

Después de la aparición de ChatGPT, hablé con amigos sobre una cuestión: si llega la AGI, ¿acabará la inteligencia concentrada en unas pocas plataformas o será compartida por más personas?

Mi conclusión fue que terminaría por extenderse.

No puedo demostrarlo de manera rigurosa. Mi intuición es simplemente que el universo no es un sistema centralizado. El mundo real está compuesto por innumerables personas, dispositivos, entornos y problemas locales. Para entrar de verdad en este mundo, la inteligencia también tendrá que existir de incontables formas. El entrenamiento de los modelos fundacionales puede concentrarse en unas pocas empresas, pero las aplicaciones de la inteligencia no pertenecerán solo a unas pocas plataformas.

Por eso no quiero crear modelos fundacionales. Prefiero crear aplicaciones que utilicen esta nueva inteligencia para responder a necesidades concretas, una tras otra.

Esta elección también viene de mi propia vida.

Crecí en el campo. Desde la primaria hasta el instituto dediqué muchas vacaciones y horas libres a las labores agrícolas de mi familia. Sembré, aboné, apliqué pesticidas, conduje tractores y crié animales. Durante las vacaciones, me consideraba un agricultor en el sentido más real.

Me gustaba la sensación de logro que producía ese trabajo. Si los cultivos crecían bien o los animales estaban bien criados, el resultado era directo y visible. Si hacías el trabajo un poco mejor, la vida de una familia mejoraba un poco.

En la universidad tuve muchos trabajos a tiempo parcial y organicé un curso de verano con varios compañeros. Nosotros mismos captábamos a los alumnos, cobrábamos y dábamos las clases. Aquel verano, todos los que participamos ganamos lo suficiente para cubrir los gastos de vida del año siguiente.

Durante el posgrado trabajé como tutor particular. Más tarde, cuando SenseTime acababa de empezar y su oficina seguía siendo una habitación del hotel Wenjin, cerca de la puerta sur de Tsinghua, me incorporé como uno de sus primeros empleados fundadores.

A primera vista, estas cosas tienen poco en común. Pero me daban satisfacción de la misma forma: resolviendo un problema real y viendo cómo algo cambiaba gracias a mi participación.

Por eso, cuando apareció la nueva era de la inteligencia general, volví a situarme instintivamente del lado de las aplicaciones. No me preocupa cómo demostrar que una tecnología es más potente, sino qué podrá hacer al final por una persona concreta.

## Después de saltar

Entrar en el siguiente río no significaba que supiera de inmediato hacia dónde nadar.

Durante los primeros meses tras dejar SenseTime, seguí buscando oportunidades de forma instintiva en el lugar que mejor conocía. Con un amigo probé varios productos relacionados con imágenes. Al fin y al cabo, casi diez años de mi trabajo habían estado ligados a la visión artificial. Empezar desde ahí parecía lo más natural.

Pero después de un tiempo sentí cada vez con más fuerza que la dirección no era la correcta. El problema no estaba necesariamente en los productos, sino en que seguíamos partiendo de lo que sabíamos hacer, no de lo que los usuarios necesitaban de verdad.

Después de llevar un martillo durante diez años, aunque uno cambie de habitación, es fácil que todo siga pareciendo un clavo.

Entendí que entrar en un campo nuevo no consiste en cambiar de lugar para seguir usando los métodos que funcionaron antes. Empezar realmente de nuevo implica apartar por un tiempo las respuestas que mejor conocemos.

Así que me hice una pregunta: si no tuviera en cuenta la experiencia técnica acumulada en los últimos diez años, ¿qué producto de IA desearía más para mí?

Mi respuesta fueron las notas.

## El producto que más quería

Desde la secundaria sigo una regla: «No leer sin escribir ni hacer anotaciones». Para mí, las notas nunca han sido solo un lugar donde guardar información. Son una extensión de la memoria y una parte del pensamiento.

La gente suele llamarlas un «segundo cerebro», pero ese supuesto segundo cerebro no es verdaderamente inteligente.

Ponemos cosas en él, pero seguimos teniendo que ordenarlas, encontrarlas, relacionarlas y pensar cómo recuperarlas. Se parece más a un disco duro externo que a otro cerebro.

Esta generación de grandes modelos me hizo creer por primera vez que eso podía cambiar de manera fundamental. Las notas del futuro quizá no solo conserven lo que una persona ha escrito. Podrían comprenderlo, descubrir las relaciones entre los contenidos, ayudarnos a recordar cuando lo necesitemos e incluso participar en nuestro pensamiento.

No quiero crear una aplicación de notas a la que se hayan añadido unas cuantas funciones de IA, sino un segundo cerebro verdaderamente inteligente.

La inteligencia general es el siguiente río al que salté. Las notas inteligentes son la primera dirección hacia la que decidí nadar una vez dentro.

## Aún no he llegado a la otra orilla

Antes había hecho muchas cosas con rasgos de emprendimiento. Organizar el curso de verano en la universidad fue una empresa informal. Unirme a SenseTime en sus inicios fue participar en una empresa emergente. Fundar dentro de SenseTime los equipos de detección de vida y visión industrial también se parecía mucho a emprender dentro de una empresa.

Pero esta vez era distinto. En junio de este año dejé por primera vez una empresa, me expuse por completo al mercado y empecé a emprender a tiempo completo en el sentido real.

Hoy es 31 de diciembre de 2023. Ha pasado medio año desde que dejé SenseTime.

Aún no he encontrado las respuestas a todas las preguntas ni he llegado a una orilla que pueda llamarse éxito. Estoy aprendiendo muchas cosas que antes no dominaba: crear un producto, entender un mercado y lograr que ambos encajen.

Para muchas personas, este estado puede resultar doloroso. A mí me produce una familiaridad que echaba de menos, porque he vuelto a un lugar en el que no conozco las respuestas.

Este es el primer artículo de mi blog personal. No lo escribo porque el viaje haya terminado, sino porque quiero dejar constancia, justo cuando comienza de verdad, de por qué partí. En el futuro seguiré escribiendo aquí sobre tecnología, productos y personas, así como sobre las cosas que estoy creando.

No sé adónde llevará finalmente este río.

Pero, al mirar atrás, varios de los cambios importantes de mi vida empezaron con la misma elección: después de invertir suficiente tiempo y descubrir que iba entrando poco a poco en una zona de confort, comenzaba a buscar el siguiente río.

En junio de este año volví a elegirlo.

Todavía estoy en el agua.
