---
id: new-paper-and-pen-new-artists
type: essay
locale: de
title: "Neues Papier und neuer Stift, neue Künstler"
subtitle: "Wenn Code zu einem Zwischenartefakt wird, wer ist der Autor der Software?"
description: "Was wird aus menschlicher Arbeit, wenn die Umsetzung nicht mehr der knappste Teil ist?"
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: ai-translated
source_locale: zh-Hans
source_hash: c4e25867a729fb37
topics:
  - KI
  - Software
  - Urheberschaft
---

In fast sechs Monaten Entwicklungsarbeit habe ich mehrere unveröffentlichte Produkte mit Codierungsagenten erstellt und dabei ausschließlich natürliche Sprache, Produktdokumente, architektonische Einschränkungen, Laufzeitergebnisse und Akzeptanzfeedback verwendet. Die Produkte umfassen Desktop-Apps, Browser-Erweiterungen, Backend-Dienste und Datenbanken.

Ich habe keine einzige Codezeile geschrieben. Ich habe auch keine gelesen.

Das heißt aber nicht, dass ich die Produkte an die KI übergeben habe. Ich entschied immer noch, welche Probleme sie lösen sollten, definierte, wie die Systeme funktionieren sollten, beurteilte, welche Grenzen nicht überschritten werden durften, überprüfte, ob die Ergebnisse zuverlässig waren, und übernahm die Verantwortung für die endgültige Software. Was sich geändert hat, war einfach meine Schnittstelle zur Implementierung.

Dies zwang mich, eine Frage zu überdenken, die einst einfach schien: Wenn jemand den Code nicht mehr von Hand schreibt, aber dennoch das Werk definiert, über den Erfolg entscheidet und dafür verantwortlich bleibt, ist er dann immer noch der Autor der Software?

Diese Praxis beweist nicht, dass jede Software auf diese Weise erstellt werden kann. Es beweist nicht einmal, dass diese unveröffentlichten Produkte auf dem Markt erfolgreich sein werden. Aber für die Arten von Anwendungen, die wir erstellen, ist ein auf Codierungsagenten basierender Workflow nicht mehr nur eine Möglichkeit, schneller zu programmieren. Es wird zu einem technischen Ansatz, der Planung, Implementierung, Tests, Korrektur und Iteration unterstützen kann.

Die wichtige Änderung besteht nicht darin, dass „KI Code schreiben kann“. Früher war die Implementierung einer der seltensten Teile bei der Entwicklung von Software. jetzt beginnt es in den Hintergrund zu treten.

Was passiert aus der menschlichen Arbeit, wenn die Umsetzung nicht mehr das Geringste ist?

Das ist die Frage dieses Aufsatzes.

## Die Grenzen der KI verschieben sich

KI war noch nie ein fester Begriff. Menschen neigen dazu, etwas KI zu nennen, während Computer es noch nicht zuverlässig können; Sobald die Fähigkeit ausgereift ist und in alltägliche Produkte Einzug hält, wird sie schnell zur gewöhnlichen Technologie und sieht nicht mehr wie KI aus.

Auch mein eigener Weg ist dieser Grenze gefolgt. In der Mittelschule und an der Universität habe ich an Robotern auf Rädern gearbeitet und dabei Sensoren und Feedback-Steuerung eingesetzt, um sie dazu zu bringen, Pfaden zu folgen, Hindernissen auszuweichen und sich in Formationen zu koordinieren. Während des Graduiertenstudiums habe ich Computer Vision studiert und bin gleichzeitig als einer der frühen Gründungsmitarbeiter der neu gegründeten [SenseTime][entity-sensetime] beigetreten. Ich habe dazu beigetragen, Gesichtserkennungs- und industrielle Bildverarbeitungstechnologien in groß angelegte Anwendungen zu integrieren, darunter Smartphones und Hochgeschwindigkeitszüge. Heutzutage haben universelle Stiftungsmodelle und die von ihnen angetriebenen Agenten die Grenzen erneut verschoben. Diese Systeme lösen nicht mehr nur isolierte Probleme. Sie beginnen, Ziele zu verstehen, Tools zu nutzen und weiterhin auf Feedback zu reagieren; Auch meine Arbeit hat sich auf diese Produkte konzentriert. Rückblickend übernehmen Maschinen von der Bewegungssteuerung über das Verstehen von Bildern bis hin zur Erledigung ganzer Aufgaben immer längere und umfassendere Arbeitsketten.

In diesem Aufsatz bezieht sich KI in erster Linie auf Agenten, die von allgemeinen Basismodellen gesteuert werden, wobei Coding-Agenten ein repräsentatives Beispiel sind. Ihre Entwicklung deutet auf die autonome Ausführung längerfristiger Aufgaben, eine schrittweise Selbstentwicklung und sogar auf die Fähigkeit hin, ihre eigenen Nachfolger auszubilden.

Im Jahr 2025 verwendete Andrej Karpathy „Vibe Coding“, um einen lockeren Programmierstil zu beschreiben: Sagen Sie der KI, was Sie wollen, akzeptieren Sie den generierten Code, geben Sie Fehlermeldungen zurück und vergessen Sie sogar, dass der Code überhaupt existiert. [1] Aber wenn man so weit gehen will, muss man eine Voraussetzung haben: Die Kosten des Scheiterns müssen gering sein. Für seriöse Produkte verwendeten wir damals noch Cursor. Menschliche Entwickler leiteten die Arbeit und blieben für den Code verantwortlich; Der Agent hat geholfen.

Anfang 2026 sahen wir, wie sich die Grenze wieder nach vorne verschob. Karpathy nannte die neue Arbeitsweise später „Agentic Engineering“: Entwickler nutzen KI nicht mehr nur zur Vervollständigung von Code, sondern organisieren und überwachen Agenten bei der Ausführung von Engineering-Aufgaben und behalten dabei die Verantwortung für Überprüfung und Qualität. [2] Der Name ist nicht wichtig. Entscheidend ist, dass die KI von der Bereitstellung einzelner Vorschläge zu einer nachhaltigen Aktion innerhalb von Einschränkungen übergeht.

Für einige Softwareentwickler werden natürliche Sprache und Dokumente bereits zu einer neuen Ebene für die Absichtsäußerung.

## Code wird zu einem Zwischenartefakt

Die Geschichte der Informatik ist auch eine Geschichte der Hinzufügung von Abstraktionsebenen.

Der Mensch bediente Maschinen zunächst mit Schaltern und Patchkabeln. Dann kamen Maschinencode, Assembler und höhere Programmiersprachen. Jede neue Ebene verbarg einen Teil der darunter liegenden Komplexität und ermöglichte es den Menschen, näher an ihren Absichten zu arbeiten.

Codierungsagenten fügen der Softwareentwicklung eine neue Abstraktionsebene hinzu. Sie sind so etwas wie ein nichtdeterministischer Super-Compiler: Ein traditioneller Compiler übersetzt ein formal spezifiziertes Programm in Maschinenanweisungen, während ein Coding-Agent versucht, menschliche Absichten in Schnittstellen, Daten, Dienste und Code umzusetzen.

Der Unterschied ist wichtig. Die menschliche Sprache ist mehrdeutig. Anforderungen sind oft unvollständig und Einschränkungen können widersprüchlich sein. Ein Agent kann einen Satz nicht mechanisch in ein einziges korrektes Ergebnis übersetzen. Es muss den Zyklus Verständnis, Planung, Implementierung, Ausführung und Überprüfung durchlaufen.

Natürliche Sprache hat Programmiersprachen nicht ersetzt. Genauer gesagt werden natürliche Sprache und Dokumente zu einer Absichtsschicht, die von Menschen verwaltet wird, während Code zunehmend als Implementierungsmedium dient, das von Agenten generiert und verwaltet wird.

Das macht Code eher zu einem Zwischenartefakt, aber „mittelmäßig“ bedeutet nicht unwichtig. Code muss immer noch korrekt, sicher und wartbar sein. Möglicherweise muss es einfach nicht von einer Person Zeile für Zeile geschrieben und gelesen werden. Die meisten Programmierer überprüfen nicht den von einem Compiler ausgegebenen Maschinencode, bleiben aber für die Funktionsweise des Programms verantwortlich.

Das ändert, was wir klarstellen müssen.

Dokumentation war früher eine Erklärung von Code. In unserer Arbeit beginnt sich das Verhältnis umzukehren: Es wird mehr Code aus Dokumenten generiert und verifiziert. Warum das Produkt existiert, wie das System funktionieren sollte, welche Grenzen nicht überschritten werden dürfen und welche Beweise zeigen, dass es seine Anforderungen erfüllt – diese Dinge, die einmal als Anhänge zum Code behandelt wurden, werden zur Quelle der Software selbst.

Dann: „Reden ist billig. Zeig mir den Code.“

Jetzt: „Code ist günstig. Zeigen Sie mir das Dokument.“

Wenn Sie den Code nicht von Hand schreiben, werden die Anforderungen an den Ausdruck nicht verringert. Es erhöht sie. In der Vergangenheit konnte eine mehrdeutige Idee erst im Laufe eines langen Umsetzungsprozesses an die Oberfläche kommen und klarer werden. Jetzt kann ein Agent es schnell in ein funktionierendes, scheinbar vollständiges System verwandeln. Die Unklarheit ist nicht verschwunden. Es wurde lediglich in der Implementierung vergraben, wo es später als Fehler und Verluste zum Vorschein kommt.

KI erspart uns nicht den Zwang zum Nachdenken. Es macht es nur schwieriger, vage Vorstellungen hinter der Hektik der Umsetzung zu verbergen.

## Die andere Hälfte von „Papier und Stift“

Im Jahr 2025 verglich Wang Jian KI mit dem „neuen Papier und Stift“ der Menschheit: nicht mit dem Gedanken selbst, sondern mit einer Erweiterung des menschlichen Denkens. [3] Ich mag diese Metapher.

Es enthält eine interessante historische Symmetrie. Im Jahr 1948 stellte sich Alan Turing einen Menschen vor, der mit Papier, Bleistift und Radiergummi ausgestattet war und einem Regelwerk folgte, dessen Verhalten als das einer Universalmaschine angesehen werden könnte. [4] Anschließend wurde mit Papier und Bleistift erklärt, wie eine Person eine Maschine simulieren könnte. Fast achtzig Jahre später scheint sich die Richtung umgekehrt zu haben. Die Maschine wird zum neuen Papier und Stift und hilft Menschen dabei, Absichten in lauffähige Welten zu entfalten.

Die Metapher erinnert mich auch an die Universität. Abgesehen vom Schlafen verbrachte ich wahrscheinlich ein Drittel meiner Zeit damit, zwischen Software und Hardware hin und her zu wechseln: Betriebssysteme zu installieren, Umgebungen zu konfigurieren, Tools zu erlernen, an Mikrocontrollern herumzubasteln, Radroboter zu debuggen und sie dazu zu bringen, sich in Formationen zu koordinieren, und Demos zu erstellen, die mich interessierten. Der Prozess hat mir Spaß gemacht, aber ich habe oft mehr Zeit mit der Vorbereitung als mit dem Schaffen verbracht – wie ein Maler, der ständig nach Papier sucht, Pigmente herstellt und Pinsel repariert.

KI als das neue Papier und den neuen Stift zu bezeichnen, bedeutet nicht, dass sie alles kann. Papier schreibt keinen Roman. Pigmente zeichnen kein gutes Bild und eine Kamera macht keinen guten Film. Werkzeuge senken die Ausdruckskosten, entscheiden aber nicht darüber, was es wert ist, ausgedrückt zu werden.

Kodiermittel sind weitaus aktiver als Papier und Stift. Sie machen Vorschläge, führen Aufgaben aus und treffen Entscheidungen in einem begrenzten Rahmen. Solange sie jedoch nicht die Verantwortung für den Zweck und die Folgen eines Werks übernehmen können, werden sie durch eine stärkere Beteiligung nicht automatisch zu Autoren.

Was mich interessiert, ist die andere Hälfte von „Neues Papier und Stift“:

Wenn wir neues Papier und neuen Stift haben, welche Art von Künstlern brauchen wir dann?

## Das Zentrum für Software-Erstellung befindet sich auf dem Vormarsch

Die Idee, dass Programmierer Künstler sind, ist nicht neu.

Im Jahr 1974 erklärte Donald Knuth in „Computerprogrammierung als Kunst“, warum Programmieren Wissen, Können und Kreativität erfordert und wie sich damit Objekte von Schönheit herstellen lassen. [5] Im Jahr 2003 argumentierte Paul Graham in „Hackers and Painters“, dass sowohl Hacker als auch Maler Macher seien. Für Softwareentwickler sind Computer ein Ausdrucksmittel, genau wie Farbe für einen Maler oder Beton für einen Architekten. [6]

KI macht Programmierer nicht zum ersten Mal zu Künstlern. Es verändert sich dort, wo die Kunst hauptsächlich stattfindet.

Ein Großteil der Kunst eines Programmierers spielte sich früher im Code ab: ob ein Algorithmus genial, eine Abstraktion elegant oder ein System war, das in der Lage war, genügend Möglichkeiten mit möglichst wenig Struktur zu enthalten. Diese Art von Schönheit wird nicht verschwinden, weil Agenten da sind.

Doch je mehr Umsetzungsarbeit auf die Agenten verlagert wird, desto höher rückt das Zentrum der menschlichen Schöpfung nach oben. Die Kunst der Software wird zunehmend in der Arbeit als Ganzes zum Ausdruck kommen: welche Probleme man wählen muss, wessen Leben man verstehen muss, welche Ordnung man etablieren muss, auf welche Möglichkeiten man verzichten sollte, wie man auf Benutzer reagiert und wie die Arbeit in ihr Leben eintreten soll.

Schöpfung auf der Ebene von Produkt und Erfahrung gab es schon immer. Die Veränderung besteht darin, dass diese Anliegen zur Hauptaufgabe von mehr Softwareentwicklern werden können, wenn die Implementierung nicht mehr den größten Teil unserer Aufmerksamkeit in Anspruch nimmt.

Eleganter Code ist immer noch wichtig, aber Code war noch nie die ganze Schönheit einer Software. Software, die von Menschen und KI gemeinsam erstellt wird, sollte nicht nur als ein Haufen Codes betrachtet werden, der ausgeführt wird, sondern als ein vollständiges Softwarewerk.

Dies ist die Veränderung, die mit „neuen Künstlern“ impliziert wird.

Aus heutiger Sicht ähnelt die Rolle einer Kombination aus Produktmanager und Architekt: Sie fragt sowohl, was und für wen gemacht werden soll, als auch, wie das System Bestand haben kann und wo seine Grenzen liegen. Aber diese Titel reichen nicht aus. Der Autor von Software braucht außerdem Geschmack, Einfühlungsvermögen, die Fähigkeit, Kompromisse einzugehen und die Bereitschaft, Verantwortung für das Gesamtergebnis zu übernehmen.

„Künstler“ ist hier weder ein edlerer Titel noch beschreibt er unbedingt eine Person. Es ist die Rolle eines Autors, der für ein vollständiges Werk verantwortlich ist und ein Team es teilen kann.

Engineering lässt die Arbeit zuverlässig existieren. Kunst bestimmt, warum sie existiert und wie sie in das menschliche Leben eindringt.

## Das Engineering wird nicht verschwinden und die Verantwortung kann nicht ausgelagert werden

Der neue Künstler schlägt keine gute Idee vor und wartet dann darauf, dass die KI alles andere fertigstellt.

Auch nachdem Papier und Stift weit verbreitet waren, erforderte das Schreiben noch eine Ausbildung; Nachdem Kameras weit verbreitet waren, erforderte die Fotografie immer noch Urteilsvermögen. Codierungsagenten senken die Implementierungskosten, lösen jedoch nicht automatisch Architektur, Sicherheit, Leistung, Qualität oder Wartung in komplexen Systemen.

Die Tatsache, dass ich keinen Code lese, bedeutet nicht, dass ich die technische Kontrolle aufgegeben habe. Die Kontrollpunkte haben sich geändert: von der zeilenweisen Überprüfung der Implementierung bis hin zur Definition von Systemzielen, Architekturprinzipien, Datengrenzen, Berechtigungsmodellen, Teststandards, Beobachtbarkeit und Akzeptanztestergebnissen.

Dadurch wird die Arbeit nicht weniger streng. Es setzt an anderer Stelle Strenge voraus. Decken die Tests die tatsächlichen Risiken ab? Zeigen die Laufzeitergebnisse, dass das System seine Einschränkungen erfüllt? Gibt es Beweise für die Erklärung des Agenten? Wenn eine Funktion ausgeführt wird, ist sie auch versandbereit? KI kann an jeder dieser Aufgaben beteiligt sein, aber letztendlich muss eine Person entscheiden, ob die Beweise vertrauenswürdig sind, und die Konsequenzen tragen, wenn sie falsch liegen.

In einigen Bereichen – darunter Infrastruktur, sicherheitskritische Systeme und Low-Level-Software – wird es weiterhin erforderlich sein, dass Mitarbeiter tief im Code arbeiten. Möglicherweise brauchen sie die kleine Anzahl von Menschen, die die unteren Schichten wirklich verstehen, mehr denn je. Eine neue Abstraktionsschicht löscht niemals die darunter liegenden Schichten. Durch Hochsprachen wurde Assembler nicht abgeschafft, und Cloud Computing hat Betriebssysteme nicht abgeschafft. Mit einer neuen Ebene können einfach mehr Entwickler vermeiden, jedes Mal, wenn sie etwas erstellen, jede untere Ebene zu durchlaufen.

Meine Entscheidung, keinen Code zu schreiben oder zu lesen, ist eine begrenzte Praxis und keine Regel für jedermann. Sein Wert besteht nicht darin, dass er beweist, dass Code veraltet ist. Es hilft mir zu erkennen, welche Teile der Arbeit immer noch nicht übergeben werden können, wenn Code nicht mehr die einzige Schnittstelle ist, über die Menschen Software steuern.

Das erste ist das Urteil. Das zweite ist Verantwortung.

Leistungsstärkere Werkzeuge können in größerem Maßstab auch zu Mittelmäßigkeit führen. Wenn die Implementierung billiger wird, erhalten wir möglicherweise zunächst mehr repetitive, grobe Software, die keinen wirklichen Bedarf deckt. Papier und Stift ergeben nicht automatisch Literatur. Codierungsagenten werden nicht automatisch eine Software-Renaissance bewirken.

KI beseitigt die Knappheit nicht. Es bewegt es.

Früher wurde die Softwareproduktion hauptsächlich durch Programmierkenntnisse, technische Ressourcen und Implementierungszeit eingeschränkt. Wenn diese Einschränkungen nachlassen, werden das Urteilsvermögen darüber, welche Probleme wichtig sind, die Produktintuition, das Systemverständnis, der Geschmack, das Verständnis für Menschen und die Bereitschaft, Verantwortung für Konsequenzen zu übernehmen, relativ selten.

Je billiger „wie man es macht“ wird, desto teurer wird „was man macht“.

## Von Code-Autoren zu Software-Autoren

Bret Taylor zitierte eine Beobachtung von Arya Asemanfar: KI kann für Sie Entwürfe erstellen, aber Sie sind immer noch der Autor. [7] Addy Osmani hat die neue Rolle des Entwicklers als Architekt und Chefredakteur beschrieben. [8]

Ein Autor muss nicht jede Handlung ausführen, die ein Werk hervorbringt. Architekten legen nicht jeden Stein und Regisseure bedienen nicht jede Kamera an einem Filmset. Aber sie müssen wissen, was aus der Arbeit werden soll, beurteilen, ob sie gelingt, und die Verantwortung für die Arbeit als Ganzes übernehmen.

Die gleiche Veränderung vollzieht sich in der Software.

Früher haben wir den Autor von Software ermittelt, indem wir gefragt haben, wer den Code geschrieben hat. In Zukunft könnte die Urheberschaft zunehmend von einer anderen Reihe von Fragen abhängen: Wer hat das Problem definiert? Wer hat die Beschränkungen festgelegt? Wer hat die entscheidenden Kompromisse gemacht? Wer hat entschieden, dass die Arbeiten abgeschlossen waren? Und wer trägt die Verantwortung für das, was passiert, nachdem es auf die Welt gekommen ist?

Dadurch kann sich auch die wirtschaftliche Einheit der Software ändern. In der Vergangenheit musste ein Bedürfnis in der Regel von genügend Menschen geteilt werden, um die Entwicklung von Software dafür zu rechtfertigen. Wenn die Implementierungskosten weit genug sinken, kann der besondere Arbeitsablauf eines Teams, einer Familie oder sogar einer einzelnen Person eine eigene Software rechtfertigen. Nicht jeder muss Programmierer werden, aber mehr Menschen können Software-Autoren werden.

KI verschiebt mehr Implementierungsarbeit nach unten, während sie menschliche Kontrollpunkte und das Zentrum der Schöpfung um eine Abstraktionsebene nach oben verschiebt. Programmierer werden nicht länger nur Code-Autoren sein. Sie werden zunehmend zu Autoren kompletter Softwarewerke – die „neuen Künstler“ meine ich.

Das neue Papier und der neue Stift sind angekommen. Aber eine neue Renaissance wird nicht automatisch folgen. Es hängt nicht davon ab, wie viel Code-Agenten generieren können, sondern davon, ob wir das Urteilsvermögen – und die Bereitschaft, Verantwortung zu übernehmen – haben, um eine Frage zu beantworten, die schwieriger ist als „Wie kann es gemacht werden?“

Was ist es wert, geschaffen zu werden, und wie möchten wir, dass die Menschen es erleben?

---

## Referenzen

[1] Andrej Karpathy, [X-Beitrag zur Einführung von „Vibe Coding“](https://x.com/karpathy/status/1886192184808149383), 02.02.2025.

[2] Andrej Karpathy, [X-Beitrag mit dem Vorschlag „Agentic Engineering“](https://x.com/karpathy/status/2019137879310836075), 04.02.2026.

[3] Liu Ningxin, [„Wang Jian: Innovation kommt von ‚Unvollkommenheit‘ und ‚Grenzen überschreiten‘“](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 25.09.2025.

[4] Alan M. Turing, [„Intelligent Machinery“](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), Bericht des National Physical Laboratory, 1948.

[5] Donald E. Knuth, [„Computer Programming as an Art“](https://doi.org/10.1145/361604.361612), *Communications of the ACM*, 17(12), 1974, S. 667–673.

[6] Paul Graham, [„Hackers and Painters“](https://paulgraham.com/hp.html), Mai 2003.

[7] Bret Taylor, [„KI ist Ihr Ghostwriter, aber Sie sind der Autor“](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 10.02.2026.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O’Reilly Media, August 2025.
