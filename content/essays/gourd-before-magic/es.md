---
id: gourd-before-magic
type: essay
locale: es
title: La calabaza ya está, pero la magia aún no ha aparecido
description: En el primer año después de saltar al siguiente río, publicamos 27 versiones y empezamos a entender cómo convertir una demo en un producto capaz de servir a sus usuarios a largo plazo.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: f9dc9ea4e7b36be0
topics:
  - Emprendimiento
  - Producto
  - Inteligencia artificial
  - MagicGourd
  - Notas inteligentes
---

El último día de 2023 publiqué en este sitio personal mi primer ensayo, «Saltar al siguiente río». Su última frase era: «Sigo en el agua».

Ha pasado un año y sigo en el agua.

El río no se ha vuelto más fácil ni la otra orilla más clara. Pero algo ha cambiado. En la segunda mitad de 2023, recién salido de SenseTime, donde había trabajado casi diez años, pasé la mayor parte del tiempo luchando y buscando una dirección. En 2024 empezamos a dedicar la mayor parte de nuestro tiempo a desarrollar un producto concreto.

La línea principal del año fue el producto; unos pocos intentos limitados de financiación fueron una línea secundaria. No conseguimos inversión ni vimos una señal de mercado lo bastante fuerte como para confirmar la dirección, pero desarrollamos y publicamos 27 versiones.

Después de saltar al siguiente río, por fin empezábamos a aprender a nadar hacia delante.

## Primero, hacer una calabaza

En el ensayo de finales del año pasado escribí que al final había decidido empezar por las notas inteligentes.

Desde la escuela secundaria tengo el hábito de no leer sin escribir. Cuando leo un libro o un artículo, o veo un vídeo, presto atención a los fragmentos que me conmueven, los marco y anoto las ideas que surgen. Llamo a este proceso «encontrar puntos»: percibir lo que nos toca y registrar la inspiración que produce.

A veces un punto es solo una frase, una imagen o un fotograma. Al principio pueden parecer elementos sin relación. Pero, cuando se acumulan suficientes, se conectan en algún momento y me ayudan a entender un problema o a formar un juicio que antes no había considerado.

Durante muchos años probé distintas herramientas de notas, pero nunca encontré un producto que encajara de verdad con este hábito. Después de dejar SenseTime, busqué a un amigo de la infancia —el mismo con quien sacaba nidos de pájaros y me metía en peleas— y decidimos construirlo juntos. Durante la primera mitad de 2024 trabajamos casi todo el tiempo en un espacio compartido de la Torre Sohu.

Llamamos al producto MagicGourd.

«Gourd», calabaza, es también el apodo de mi hijo. Cuando elegimos el nombre no le atribuí conscientemente demasiado significado. Visto en retrospectiva, quizá contenía un deseo inconsciente: que el primer producto que construyera como emprendedor a tiempo completo pudiera crecer poco a poco bajo nuestro cuidado, como un niño.

Un producto no es un niño, por supuesto. Pero comparten algo: traerlo al mundo es solo el comienzo. El largo trabajo de cuidarlo y ayudarlo a crecer es la parte verdaderamente difícil.

El verdadero segundo cerebro que imaginábamos todavía estaba lejos de la realidad y no podía completarse de un solo paso. Decidimos empezar por el más básico: permitir que las personas marcaran aquello que les conmovía y anotaran su inspiración mientras navegaban por la web, leían un PDF en línea o veían un vídeo.

Primero, hacer una calabaza capaz de guardar esos puntos.

## Las decisiones de producto detrás de un botón de resaltado

Poco después de empezar a desarrollar nos encontramos con una pregunta que parecía insignificante: ¿qué aspecto debía tener el botón de resaltado?

¿Debía ser un solo botón o un panel con varias acciones? Después de seleccionar un texto, ¿debía aparecer de inmediato o esperar a que el usuario lo invocara? ¿Dónde debía aparecer y cuándo debía desaparecer? Si a alguien no le gustaba que apareciera automáticamente, ¿debíamos ofrecer un interruptor para desactivarlo?

Cada opción adicional parece satisfacer más necesidades, pero también aumenta el coste de comprender y utilizar el producto. Hacer que el botón aparezca de forma más activa facilita descubrir la función, pero también puede interrumpir constantemente la lectura. Mantenerlo más discreto puede ayudar a concentrarse, pero quizá el usuario nunca descubra que la función existe.

No hay una respuesta estándar, en el sentido algorítmico, para preguntas como estas.

Cuando hacemos algoritmos solemos preguntar si una capacidad puede implementarse, si puede mejorar la precisión y si el rendimiento cumple los requisitos. Al hacer un producto empezamos a preguntarnos otra cosa: ¿cuándo debe intervenir una función y cuándo debe retirarse al fondo?

Que una función se ejecute solo demuestra que la tecnología funciona. Que la gente la entienda, que no se sienta interrumpida y que quiera conservarla en su vida cotidiana determina si el producto funciona.

Ya había afrontado muchos problemas del mundo real al desarrollar algoritmos y grandes proyectos. Pero, al crear un producto desde cero, decisiones que antes compartían los equipos de producto, diseño, clientes e ingeniería recayeron de pronto sobre nosotros. Teníamos que decidir qué debía verse y qué debía permanecer oculto; qué construir ahora y qué dejar fuera por el momento, aunque pudiera ser útil.

Poco a poco entendimos que un producto no está compuesto por la cantidad de sus funciones, sino por innumerables decisiones. A veces, no aparecer y no interrumpir también son capacidades del producto.

## Un producto debe sostenerse en el tiempo

Que un botón resulte natural es una experiencia que el usuario puede percibir de inmediato. Pero muchos más factores que determinan si un producto se utilizará durante años permanecen fuera de su vista.

MagicGourd guarda el historial de lectura, los momentos de resonancia y las ideas de una persona. Queríamos proteger al máximo la privacidad de los usuarios y, al mismo tiempo, ofrecer sincronización entre dispositivos y futuros servicios inteligentes. Para lograr ambas cosas, decidimos cifrar los datos en el dispositivo y guardar solo texto cifrado en el servidor. Esto aumentó la complejidad del desarrollo y el mantenimiento. Pero, si una persona no puede ser verdaderamente dueña de sus datos, un verdadero segundo cerebro es imposible desde el principio.

La sincronización es otro problema que parece sencillo y en realidad es muy complejo. Cuando alguien crea un resaltado, la interfaz debe responder de inmediato en lugar de quedarse esperando a la red. La toma de notas no debe interrumpirse ni siquiera con una conexión débil o sin conexión. Cuando vuelva la red, los datos de distintos dispositivos deben sincronizarse correctamente, sin duplicarse, sobrescribirse ni desaparecer en silencio.

Esto nos obligó a reconsiderar cómo debían colaborar el frontend y el backend, cómo organizar los datos en la base de datos, cómo mantener la compatibilidad entre versiones y cómo recuperarse de los errores. El usuario normalmente no ve estas decisiones. Pero, cuando falla una de ellas, toda esa complejidad oculta se convierte de inmediato en la experiencia más directa.

La experiencia a corto plazo es relativamente fácil de conseguir. No es tan difícil crear una demostración fluida que impresione durante unos minutos. Pero, para nosotros, seguiría siendo solo una demo.

Una demo solo tiene que sostenerse ante los ojos. Un producto debe sostenerse en el tiempo.

Si un producto pretende acompañar a alguien durante diez años, los cimientos de la experiencia dentro de diez años deben construirse hoy. Un fallo en una herramienta normal quizá solo sea una molestia temporal. En un producto que contiene años de notas, una sola pérdida de datos puede destruir toda la confianza acumulada por el usuario.

No podemos prometer que el sistema nunca tendrá problemas. Pero «no perder ni una sola nota del usuario» debe ser una de nuestras restricciones de diseño más importantes. La experiencia de producto no solo ocurre en la pantalla; también ocurre en la base de datos que el usuario nunca ve.

## Una línea secundaria de financiación muy breve

Quizá sea exagerado incluso llamar a la financiación una línea secundaria del año. Solo hablamos con tres firmas de inversión y dedicamos casi todo el resto del tiempo a desarrollar el producto.

Nuestra idea era sencilla: acercarnos a inversores de fase inicial que conociéramos directa o indirectamente, explicarles lo que estábamos construyendo e intentar conseguir nuestra primera inversión ángel.

El valor de esa inversión no estaría solo en el dinero. El producto aún no estaba terminado y no había una señal clara del mercado. En ese momento queríamos recibir una opinión externa sobre si inversores excelentes consideraban que la dirección tenía sentido.

Ninguno de esos intentos produjo resultados. Entonces lo atribuíamos a un entorno de financiación poco favorable para las aplicaciones de IA y a nuestra falta de experiencia hablando con inversores. Ambos factores existían. Pero, visto ahora, había un hecho más inmediato: dedicamos poco tiempo a financiar y solo hablamos con tres firmas. Más que haber atravesado una ronda de financiación fallida, tuvimos unas pocas conversaciones preliminares con inversores.

Lo que merece más reflexión es cómo reaccioné cuando cuestionaron nuestras ideas.

Durante la entrevista con MiraclePlus, frente a mí había personas a las que respetaba profundamente. Cuando cuestionaban repetidamente nuestras ideas y formulaban preguntas muy duras, sentía una tensión: habíamos ido a buscar inversión, así que parecía que debía respetar su juicio e incluso acercarme, hasta cierto punto, a las respuestas que esperaban.

Pero, si buscábamos financiación para recibir opiniones sinceras, decir algo en lo que no creíamos haría inútiles esas opiniones.

Más tarde empecé a preguntarme si de verdad solo queríamos opiniones. Tal vez, antes de que el mercado validara el producto, también buscábamos la aprobación de un grupo de inversores excelentes para asegurarnos de no haber elegido la dirección equivocada.

Era como estar en un río desconocido esperando que alguien en la orilla nos dijera primero hacia dónde nadar. Pero un emprendedor debe sentir la corriente por sí mismo y juzgar a partir de los hechos que tiene delante.

## Los «Ancianos de Xuanming» de la Torre Dongsheng

En la segunda mitad de 2024 nos mudamos de la Torre Sohu a la Torre Dongsheng.

Mi amigo de la infancia y yo programábamos en pareja durante largos periodos, sentados frente a la misma pantalla mientras hablábamos. Entre los jóvenes emprendedores del espacio compartido, nuestra forma de trabajar llamaba mucho la atención. Con el tiempo nos pusieron un apodo: los «Ancianos de Xuanming».

Era divertido. Dos personas que de niños sacaban nidos de pájaros y se peleaban juntas estaban, veinte años después, sentadas en una oficina compartida construyendo un producto llamado MagicGourd.

Fue en la Torre Dongsheng donde conocimos a Kehan. En MiraclePlus se ocupaba de la comunidad y de captar proyectos emprendedores. La primera vez que habló con nosotros preguntó: «Ustedes son emprendedores, ¿verdad? Llevo mucho tiempo observándolos. De toda la oficina, ustedes dos son quienes más parecen estar en modo fundador».

Más tarde, cuando supo que habíamos pasado por una entrevista de MiraclePlus, hablamos de lo ocurrido. Nos explicó que, cuando los inversores cuestionan repetidamente una idea, no siempre se limitan a expresar desacuerdo. También pueden estar comprobando si los fundadores han pensado realmente el asunto y si pueden mantener su propio juicio bajo presión.

Eso me hizo reinterpretar la entrevista.

Respetar a los inversores no significa entregarles nuestro juicio. Un emprendedor debe entender por qué otros discrepan sin abandonar su propio criterio solo porque esas personas merecen respeto. Lo que hay que evitar no es cambiar de opinión ante nuevos hechos, sino cambiar lo que decimos únicamente para obtener aprobación antes de haber pensado bien la cuestión.

Esta lección no se limita a la financiación. Al crear un producto nos enfrentamos cada día a comentarios de usuarios, decisiones de productos competidores y nuevas tendencias tecnológicas. Todas estas señales externas merecen atención, pero decidir qué debe entrar en el producto sigue siendo responsabilidad nuestra.

## La calabaza ya está

A finales de 2024 habíamos desarrollado y publicado 27 versiones de MagicGourd.

Empezamos con anotaciones de texto e imágenes en páginas web normales, añadimos compatibilidad con PDF en línea y extendimos el mismo método a Bilibili y YouTube. El usuario podía marcar un fotograma de vídeo que le conmoviera, escribir una nota y volver rápidamente a esos momentos en la línea temporal. También añadimos gestión de etiquetas, búsqueda y exportación, y sincronizamos datos entre navegadores y dispositivos.

Cada nuevo formato de contenido exigía una gran cantidad de adaptación. Las páginas web no tienen una estructura uniforme y las plataformas de vídeo cambian constantemente. Una función que opera correctamente en un sitio puede comportarse de manera muy distinta en otra página o navegador. Buena parte de nuestro tiempo no produjo capacidades nuevas y visibles: se dedicó a resolver casos límite para que las capacidades existentes funcionaran con mayor estabilidad.

En las 27 versiones publicadas durante el año no encontramos ningún caso de pérdida o corrupción de datos de usuarios. Los fallos ocasionales se concentraron en pasos del servicio como los códigos de verificación de inicio de sesión. Cuando recibíamos un aviso, casi siempre podíamos localizar y resolver el problema con rapidez. Esto no demuestra que el sistema nunca vaya a fallar, pero sí indica que el tiempo dedicado a lo que el usuario no ve no fue en vano.

En noviembre presentamos la función de notas de vídeo en [sspai](https://sspai.com/post/93549). Los usuarios empezaron a dejar comentarios. Una persona que antes guardaba fotogramas útiles haciendo capturas de pantalla y pegándolas en otro lugar escribió después de probar MagicGourd: «¡Este complemento me salvó!». A otros les gustaron las marcas en forma de gota en la línea temporal, pidieron notas independientes o esperaban que pronto ofreciéramos compatibilidad con Safari.

Recibir comentarios de los usuarios fue una de las mayores alegrías del año.

Lo que nos alegraba no era solo que elogiaran el producto, sino que alguien hubiera incorporado a su vida real algo que nosotros habíamos creado. También aportaban sugerencias útiles que nos obligaban a seguir decidiendo: qué comentarios reflejaban un problema común y cuáles nacían de un hábito individual; qué debíamos resolver de inmediato y qué, aunque útil, no debía entrar todavía en el producto.

Si dividimos el nombre del producto en dos, al final del año al menos habíamos construido la «calabaza»: un recipiente para recopilar, conservar y gestionar momentos de resonancia e inspiración.

## La magia aún no ha aparecido

Pero aquello todavía no era la magia que teníamos en mente.

Sin duda usaría IA, pero no consistiría simplemente en generar el resumen de un artículo. Un resumen puede comprimir información sin hacer avanzar la cognición.

Según nuestra forma de entenderlo, la información es el contenido que una persona recibe; el conocimiento es información comprendida y organizada; la cognición es la manera en que una persona comprende el mundo, crea conexiones y juicios, y los revisa cuando llegan nuevas experiencias.

La IA actual procesa bien la información y cada vez organiza mejor el conocimiento. Puede resumir un artículo, extraer palabras clave y responder preguntas cuya respuesta ya está en el material. Pero, si solo comprime diez páginas en una o añade un cuadro de chat junto a una aplicación de notas, aún no ha tocado lo que realmente queremos construir.

Queremos que un futuro MagicGourd comprenda los registros que una persona ha acumulado a lo largo del tiempo y reúna momentos de resonancia dispersos entre distintas épocas y medios. Podría descubrir temas que se repiten sin haber sido expresados de forma explícita, mostrar conexiones y contradicciones entre notas, encontrar preguntas que llevan mucho tiempo sin respuesta o recuperar un pensamiento anterior en el momento oportuno.

Más importante aún, debería plantear preguntas que el usuario todavía no haya considerado pero que merezca la pena explorar, ayudándolo a formar nuevos juicios propios.

Aquí debe existir un límite claro: la IA no puede presentar sus conjeturas como una «verdad» que el usuario todavía no ha descubierto. Puede proponer posibles conexiones, contradicciones y preguntas. Si esas conexiones son válidas, debe decidirlo el usuario.

La magia no piensa en lugar del usuario. Le ayuda a ver el pensamiento que aún no ha terminado.

Durante el año construimos varias demos internas relacionadas con esta idea. Podían generar resúmenes, organizar contenido y responder preguntas. Ya parecían productos de IA. Pero todavía estaban lejos de lo que llamamos «hacer avanzar la cognición», así que no las publicamos deprisa solo para seguir la ola de la IA.

Cuanto más participa la IA en el proceso cognitivo de una persona, más privados son los datos a los que necesita acceder. Esto nos convenció aún más de que la privacidad y la propiedad de los datos no son cuestiones de ingeniería separadas de la magia: son requisitos para que la magia pueda existir. No podemos afirmar que queremos comprender a los usuarios y, al mismo tiempo, pedirles que renuncien al control de sus propios datos.

Así, el 31 de diciembre de 2024, la calabaza ya estaba, pero la magia aún no había aparecido.

No habíamos conseguido inversión, ni visto una señal decisiva del mercado, ni establecido un modelo de negocio claro. Seguíamos sin saber adónde acabaría llevando este río.

Pero habíamos publicado 27 versiones. Los usuarios empezaban a incorporar el producto a sus vidas. Y nosotros empezábamos a comprender cómo convertir una demo que funcionaba en un producto real y asumir la responsabilidad de mantenerlo a largo plazo.

Un año antes había escrito: «Sigo en el agua».

Un año después seguía en el agua. El río no se había vuelto más fácil ni la otra orilla más clara.

Pero ya habíamos construido la calabaza.

La magia aún no había aparecido. Tampoco habíamos llegado a la otra orilla. Pero, al menos, habíamos empezado a nadar hacia delante.
