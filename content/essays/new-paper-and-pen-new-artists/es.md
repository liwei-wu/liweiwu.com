---
id: new-paper-and-pen-new-artists
type: essay
locale: es
title: "Nuevo papel y bolígrafo, nuevos artistas"
subtitle: "Cuando el código se convierte en un artefacto intermedio, ¿quién es el autor del software?"
description: "Cuando la implementación ya no es la parte más escasa, ¿qué pasa con el trabajo humano?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - IA
  - Software
  - Autoría
---

Durante casi seis meses de trabajo de ingeniería, construí varios productos inéditos con agentes de codificación, utilizando únicamente lenguaje natural, documentos de producto, restricciones arquitectónicas, resultados de tiempo de ejecución y comentarios de aceptación. Los productos abarcan aplicaciones de escritorio, extensiones de navegador, servicios backend y bases de datos.

No escribí ni una sola línea de código. Tampoco leí una sola línea.

Pero eso no significa que entregara los productos a la IA. Aun así, decidí qué problemas debían resolver, definí cómo debían funcionar los sistemas, juzgué qué límites no podían cruzarse, verifiqué si los resultados eran fiables y asumí la responsabilidad del software final. Lo que cambió fue simplemente mi interfaz con la implementación.

Esto me obligó a reconsiderar una pregunta que antes parecía simple: si alguien ya no escribe código a mano, pero define el trabajo, decide si tiene éxito y sigue siendo responsable de él, ¿sigue siendo el autor del software?

Esta práctica no prueba que todo el software pueda construirse de esta manera. Ni siquiera prueba que estos productos inéditos tengan éxito en el mercado. Pero para los tipos de aplicaciones que creamos, un flujo de trabajo centrado en agentes de codificación ya no es simplemente una forma de programar más rápido. Se está convirtiendo en un enfoque de ingeniería que puede sustentar la planificación, implementación, prueba, corrección e iteración.

El cambio importante no es que "la IA pueda escribir código". La implementación solía ser una de las partes más escasas de la creación de software; ahora está empezando a pasar a un segundo plano.

Cuando la implementación ya no es la parte más escasa, ¿qué pasa con el trabajo humano?

Ésa es la cuestión de este ensayo.

## La frontera de la IA se está moviendo

La IA nunca ha sido un término fijo. La gente tiende a llamar IA a aquello que las computadoras aún no pueden hacer de forma fiable; cuando una capacidad madura y llega a los productos cotidianos, pronto se convierte en tecnología ordinaria y deja de parecer IA.

Mi propio camino también ha seguido este límite. En la escuela secundaria y la universidad, trabajé con robots con ruedas, usando sensores y control de retroalimentación para hacerlos seguir caminos, evitar obstáculos y coordinar formación. Durante la escuela de posgrado, estudié visión por computadora y al mismo tiempo me uní a la recién fundada [SenseTime][entity-sensetime] como uno de los primeros empleados fundadores. Ayudé a llevar las tecnologías de visión industrial y detección de vida facial a aplicaciones a gran escala, incluidos teléfonos inteligentes y trenes de alta velocidad. Hoy en día, los modelos de fundaciones de propósito general y los agentes que impulsan han vuelto a ampliar los límites. Estos sistemas ya no abordan sólo problemas aislados. Están empezando a comprender los objetivos, utilizar herramientas y seguir actuando en respuesta a la retroalimentación; Mi trabajo también se ha movido hacia estos productos. Mirando hacia atrás, desde controlar el movimiento y comprender imágenes hasta completar tareas enteras, las máquinas están asumiendo cadenas de trabajo más largas y completas.

Entonces, en este ensayo, la IA se refiere principalmente a agentes impulsados por modelos básicos de propósito general, con los agentes codificadores como un ejemplo representativo. Su desarrollo apunta hacia la ejecución autónoma de tareas de horizontes más amplios, una autoevolución gradual e incluso la capacidad de capacitar a sus propios sucesores.

En 2025, Andrej Karpathy utilizó «vibe coding» para describir un estilo de programación flexible: decirle a la IA lo que se quiere, aceptar el código generado, devolverle los mensajes de error e incluso olvidar que el código existe. [1] Pero llegar tan lejos tiene una condición previa: el coste del fracaso debe ser bajo. En aquel momento, para productos serios, todavía usábamos Cursor. Los desarrolladores humanos dirigían el trabajo y seguían siendo responsables del código; el agente ayudaba.

A principios de 2026, vimos cómo la frontera avanzaba nuevamente. Más tarde, Karpathy llamó a la nueva forma de trabajar “ingeniería agencial”: los desarrolladores ya no solo usan IA para completar el código, sino que organizan y supervisan a los agentes mientras llevan a cabo tareas de ingeniería, manteniendo al mismo tiempo la responsabilidad de la revisión y la calidad. [2] El nombre no es importante. Lo que importa es que la IA está pasando de ofrecer sugerencias una por una a acciones sostenidas dentro de limitaciones.

Para algunos creadores de software, el lenguaje natural y los documentos ya se están convirtiendo en una nueva capa para expresar intenciones.

## El código se está convirtiendo en un artefacto intermedio

La historia de la informática es también la historia de la adición de capas de abstracción.

Las primeras máquinas fueron operadas con interruptores y cables de conexión. Luego vinieron el código de máquina, el ensamblador y los lenguajes de programación de alto nivel. Cada nueva capa ocultaba parte de la complejidad que había debajo y permitía a las personas trabajar más cerca de sus intenciones.

Los agentes de codificación añaden una nueva capa de abstracción al desarrollo de software. Son algo así como un supercompilador no determinista: un compilador tradicional traduce un programa formalmente especificado en instrucciones de máquina, mientras que un agente codificador intenta desplegar la intención humana en interfaces, datos, servicios y código.

La diferencia importa. El lenguaje humano es ambiguo. Los requisitos suelen ser incompletos y las restricciones pueden entrar en conflicto. Un agente no puede traducir mecánicamente una frase en un único resultado correcto. Tiene que pasar por la comprensión, la planificación, la implementación, la ejecución y la verificación.

El lenguaje natural no ha sustituido a los lenguajes de programación. Más precisamente, el lenguaje natural y los documentos se están convirtiendo en una capa de intención mantenida por personas, mientras que el código sirve cada vez más como un medio de implementación generado y mantenido por agentes.

Eso hace que el código se parezca más a un artefacto intermedio, pero "intermedio" no significa que no sea importante. El código aún tiene que ser correcto, seguro y mantenible. Es posible que simplemente no sea necesario que una persona lo escriba y lea línea por línea. La mayoría de los programadores no inspeccionan el código de máquina emitido por un compilador, pero siguen siendo responsables de lo que hace el programa.

Esto cambia lo que debemos dejar claro.

La documentación solía ser una explicación del código. En nuestro trabajo, la relación está empezando a revertirse: se genera y verifica más código a partir de documentos. Por qué existe el producto, cómo debería funcionar el sistema, qué límites no se pueden cruzar y qué evidencia demuestra que cumple con sus requisitos: estas cosas, una vez tratadas como archivos adjuntos al código, se están convirtiendo en la fuente del software en sí.

Luego: "Hablar es barato. Muéstrame el código".

Ahora: "El código es barato. Muéstrame el documento".

No escribir código a mano no reduce las exigencias de expresión. Los levanta. En el pasado, una idea ambigua tenía tiempo de emerger y aclararse tras un largo proceso de implementación. Ahora un agente puede convertirlo rápidamente en un sistema funcional y aparentemente completo. La ambigüedad no ha desaparecido. Simplemente ha quedado enterrado en la implementación, donde saldrá a la luz más tarde como fracasos y pérdidas.

La IA no nos ahorra la necesidad de pensar. Sólo hace que sea más difícil ocultar ideas vagas detrás del ajetreo de la implementación.

## La otra mitad de “papel y bolígrafo”

En 2025, Wang Jian comparó la IA con el “nuevo papel y bolígrafo” de la humanidad: no el pensamiento en sí, sino una extensión del pensamiento humano. [3] Me gusta esta metáfora.

Contiene una interesante simetría histórica. En 1948, Alan Turing imaginó a una persona equipada con papel, lápiz y goma de borrar, siguiendo una serie de reglas, cuyo comportamiento podría considerarse como el de una máquina universal. [4] Luego, la gente usó papel y lápiz para explicar cómo una persona podría simular una máquina. Casi ochenta años después, la dirección parece haberse invertido. La máquina se está convirtiendo en el nuevo papel y bolígrafo, ayudando a las personas a desarrollar sus intenciones en mundos que pueden funcionar.

La metáfora también me recuerda a la universidad. Aparte de dormir, probablemente pasaba un tercio de mi tiempo yendo y viniendo entre software y hardware: instalando sistemas operativos, configurando entornos, aprendiendo herramientas, jugando con microcontroladores, depurando robots con ruedas y haciendo que coordinaran información, y construyendo cualquier demostración que me interesara. Disfruté el proceso, pero a menudo pasaba más tiempo preparándome para crear que creando, como un pintor que siempre busca papel, crea pigmentos y repara pinceles.

Llamar a la IA el nuevo papel y lápiz no significa que pueda hacerlo todo. El papel no escribe una novela. Los pigmentos no pintan una buena imagen y una cámara no hace una buena película. Las herramientas reducen el costo de la expresión, pero no deciden qué vale la pena expresar.

Los agentes codificadores son mucho más activos que el papel y el bolígrafo. Ofrecen sugerencias, ejecutan tareas y toman decisiones dentro de un alcance limitado. Pero hasta que puedan asumir la responsabilidad del propósito y las consecuencias de una obra, una mayor participación no los convierte automáticamente en autores.

Lo que me interesa es la otra mitad de “papel y bolígrafo nuevos”:

Si tenemos papel y bolígrafo nuevos, ¿qué tipo de artistas necesitamos?

## El centro de creación de software está avanzando

La idea de que los programadores son artistas no es nueva.

En 1974, Donald Knuth explicó en “La programación informática como arte” por qué la programación requiere conocimiento, habilidad y creatividad, y cómo puede producir objetos bellos. [5] En 2003, Paul Graham argumentó en “Hackers and Painters” que tanto los hackers como los pintores son creadores. Para los creadores de software, las computadoras son un medio de expresión como lo es la pintura para un pintor o el concreto para un arquitecto. [6]

La IA no está convirtiendo a los programadores en artistas por primera vez. Está cambiando donde ocurre principalmente el arte.

Gran parte del arte de un programador solía ocurrir dentro del código: ya fuera un algoritmo ingenioso, una abstracción elegante o un sistema capaz de contener suficientes posibilidades con la menor estructura posible. Este tipo de belleza no desaparecerá porque hayan llegado agentes.

Pero a medida que más trabajo de implementación desciende a los agentes, el centro de la creación humana asciende. El arte del software se expresará cada vez más en la obra en su conjunto: qué problemas elegir, qué vidas comprender, qué orden establecer, a qué posibilidades renunciar, cómo responder a los usuarios y cómo la obra debería entrar en sus vidas.

La creación a nivel de producto y experiencia siempre ha existido. El cambio es que cuando la implementación ya no consume la mayor parte de nuestra atención, estas preocupaciones pueden convertirse en el trabajo principal de más creadores de software.

El código elegante todavía importa, pero el código nunca ha sido toda la belleza del software. El software creado por personas e IA juntas no debe verse simplemente como un montón de código que se ejecuta, sino como un trabajo completo de software.

Este es el cambio que implican los “nuevos artistas”.

En términos profesionales actuales, el rol se asemeja a una combinación de gerente de producto y arquitecto: pregunta qué se debe hacer y para quién, cómo puede perdurar el sistema y dónde se encuentran sus límites. Pero esos títulos no son suficientes. El autor de software también necesita gusto, empatía, capacidad para hacer concesiones y voluntad de asumir la responsabilidad del resultado general.

“Artista” aquí no es un título más noble, ni necesariamente describe a una persona. Es el rol de un autor responsable de una obra completa, y un equipo puede compartirla.

La ingeniería permite que el trabajo exista de forma fiable. El arte determina por qué existe y cómo entra en la vida humana.

## La ingeniería no desaparecerá y la responsabilidad no se puede subcontratar

El nuevo artista no propone una buena idea y luego espera a que la IA termine todo lo demás.

Incluso después de que el papel y el lápiz se generalizaran, la escritura todavía requería formación; Después de que las cámaras se generalizaron, la fotografía todavía requería criterio. Los agentes de codificación reducen el costo de implementación, pero no resuelven automáticamente la arquitectura, la seguridad, el rendimiento, la calidad o el mantenimiento en sistemas complejos.

El hecho de que no lea código no significa que haya abandonado el control de ingeniería. Los puntos de control han cambiado: desde inspeccionar la implementación línea por línea hasta definir objetivos del sistema, principios arquitectónicos, límites de datos, modelos de permisos, estándares de prueba, observabilidad y resultados de pruebas de aceptación.

Esto no hace que el trabajo sea menos estricto. Coloca el rigor en otra parte. ¿Las pruebas cubren los riesgos reales? ¿Los resultados del tiempo de ejecución muestran que el sistema satisface sus restricciones? ¿Existe evidencia para la explicación del agente? Si se ejecuta una función, ¿también está lista para enviarse? La IA puede participar en cada una de estas tareas, pero en última instancia, una persona debe decidir si la evidencia es confiable y asumir las consecuencias de estar equivocada.

Algunos campos, incluidos la infraestructura, los sistemas críticos para la seguridad y el software de bajo nivel, seguirán requiriendo que las personas trabajen profundamente dentro del código. Es posible que necesiten más que nunca un pequeño número de personas que realmente comprendan las capas inferiores. Una nueva capa de abstracción nunca borra las capas debajo de ella. Los lenguajes de alto nivel no eliminaron el ensamblador y la computación en la nube no eliminó los sistemas operativos. Una nueva capa simplemente permite que más creadores eviten atravesar cada capa inferior cada vez que crean algo.

Mi decisión de no escribir ni leer código es una práctica limitada, no una regla para todos. Su valor no es que demuestre que el código es obsoleto. Me ayuda a ver qué partes del trabajo aún no se pueden entregar cuando el código ya no es la única interfaz a través de la cual las personas controlan el software.

El primero es el juicio. El segundo es la responsabilidad.

Herramientas más poderosas también pueden producir mediocridad a mayor escala. Cuando la implementación se vuelve más barata, es posible que primero obtengamos software más repetitivo y tosco que no satisface ninguna necesidad real. El papel y el bolígrafo no producen literatura automáticamente. Los agentes codificadores no producirán automáticamente un renacimiento del software.

La IA no elimina la escasez. Solo la desplaza.

La producción de software solía estar limitada principalmente por las habilidades de programación, los recursos de ingeniería y el tiempo de implementación. A medida que esas limitaciones se alivian, el juicio sobre qué problemas importan, la intuición del producto, la comprensión de los sistemas, el gusto, la comprensión de las personas y la voluntad de asumir la responsabilidad de las consecuencias se vuelven relativamente más escasos.

A medida que “cómo hacerlo” se vuelve más barato, “qué hacer” se vuelve más caro.

## De autores de código a autores de software

Bret Taylor citó una observación de Arya Asemanfar: La IA puede redactar por ti, pero tú sigues siendo el autor. [7] Addy Osmani ha descrito el nuevo papel del desarrollador como arquitecto y editor en jefe. [8]

Un autor no tiene que realizar todas las acciones que producen una obra. Los arquitectos no colocan todos los ladrillos y los directores no manejan todas las cámaras en un set de filmación. Pero deben saber en qué debería convertirse el trabajo, juzgar si tiene éxito y asumir la responsabilidad del trabajo en su conjunto.

El mismo cambio está ocurriendo en el software.

Solíamos identificar al autor del software preguntando quién escribió el código. En el futuro, la autoría puede depender cada vez más de un conjunto diferente de preguntas: ¿Quién definió el problema? ¿Quién estableció las restricciones? ¿Quién hizo las concesiones críticas? ¿Quién decidió que la obra estaba completa? ¿Y quién es responsable de lo que suceda después de su llegada al mundo?

Esto también puede cambiar la unidad económica del software. En el pasado, una necesidad generalmente tenía que ser compartida por suficientes personas para justificar la creación de software para ella. Cuando los costos de implementación caen lo suficiente, el flujo de trabajo particular de un equipo, una familia o incluso una persona puede justificar su propio software. No todo el mundo tiene que convertirse en programador, pero más personas pueden convertirse en autores de software.

La IA impulsa más trabajo de implementación hacia abajo mientras mueve los puntos de control humano y el centro de creación hacia arriba una capa de abstracción. Los programadores ya no serán meros autores de código. Cada vez más, se convertirán en autores de obras completas de software (me refiero a los “nuevos artistas”).

Han llegado el papel y el bolígrafo nuevos. Pero un nuevo renacimiento no se producirá automáticamente. No depende de cuánto código puedan generar los agentes, sino de si tenemos el criterio (y la voluntad de asumir la responsabilidad) para responder a una pregunta más difícil que "¿cómo se puede crear?".

¿Qué vale la pena crear y cómo queremos que la gente lo experimente?

---

## Referencias

[1] Andrej Karpathy, [publicación en X que presenta «vibe coding»](https://x.com/karpathy/status/1886192184808149383), 2 de febrero de 2025.

[2] Andrej Karpathy, [X publicación que propone “ingeniería agentica”](https://x.com/karpathy/status/2019137879310836075), 4 de febrero de 2026.

[3] Liu Ningxin, [“Wang Jian: La innovación proviene de la ‘imperfección’ y el ‘cruce de límites’”](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25 de septiembre de 2025.

[4] Alan M. Turing, [“Maquinaria inteligente”](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), Informe del Laboratorio Nacional de Física, 1948.

[5] Donald E. Knuth, [“La programación informática como arte”](https://doi.org/10.1145/361604.361612), *Comunicaciones del ACM*, 17(12), 1974, págs. 667–673.

[6] Paul Graham, [“Hackers y pintores”](https://paulgraham.com/hp.html), mayo de 2003.

[7] Bret Taylor, [“La IA es tu escritor fantasma, pero tú eres el autor”](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O'Reilly Media, agosto de 2025.
