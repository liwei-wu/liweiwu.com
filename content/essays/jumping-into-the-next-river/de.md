---
id: jumping-into-the-next-river
type: essay
locale: de
title: In den nächsten Fluss springen
description: Warum ich SenseTime im Juni 2023 nach fast zehn Jahren verließ, um zu gründen, obwohl ich noch nicht wusste, was ich bauen würde.
slug: jumping-into-the-next-river
published_at: 2023-12-31
translation_status: ai-translated
source_locale: zh-Hans
source_hash: 43420b02f3de32e3
topics:
  - Unternehmertum
  - Künstliche Intelligenz
  - SenseTime
  - Computer Vision
  - Intelligente Notizen
---

Im Juni 2023 verließ ich [SenseTime][entity-sensetime], nachdem ich dort fast zehn Jahre gearbeitet hatte.

Als ich ging, hatte ich weder ein validiertes Produkt noch einen vollständigen Geschäftsplan. Ich wusste nicht einmal genau, was ich tun würde.

Aber ich wusste, dass für mich wieder die Zeit gekommen war, in den nächsten Fluss zu springen.

Es war nicht das erste Mal, dass ich den Fluss wechselte. Aber zum ersten Mal musste ich dafür ein Unternehmen verlassen.

## Eine Entscheidung, die ich immer wieder treffe

Von einer ländlichen Grundschule wechselte ich auf eine Mittelschule in der Kreisstadt. Später studierte ich an der [Universität Nanjing][entity-nanjingUniversity] und absolvierte mein Aufbaustudium an der [Tsinghua-Universität][entity-tsinghuaUniversity]. Währenddessen schloss ich mich SenseTime an, das gerade erst begonnen hatte. Dort gründete ich zuerst das Team für Lebenderkennung und später das Team für industrielle Bildverarbeitung.

Rückblickend scheint eine solche Veränderung alle paar Jahre einzutreten.

Diese Veränderungen waren kein vorab entworfener Lebensplan. Sie geschahen auch nicht, weil die bisherige Arbeit ihre Bedeutung verloren hatte. Nach jahrelangem Einsatz waren das Gebiet und ich einfach allmählich gereift. Die Arbeit war nicht unbedingt beendet, aber sie zwang mich nicht mehr dazu, meine eigenen Grenzen zu überschreiten.

Für viele Menschen wäre das ein Idealzustand. Mich macht er unruhig. Ich mag kein Leben, dessen Ende ich von meinem Standort aus schon sehen kann. Deshalb muss ich mich von Zeit zu Zeit in ein Problem versetzen, das ich nicht lösen kann — manchmal eines, bei dem ich nicht einmal weiß, wo ich anfangen soll.

Der „Fluss“ ist hier kein Unternehmen. Den Fluss zu wechseln bedeutet auch nicht zwingend zu kündigen. Er steht für ein Gebiet, das ich neu lernen muss, für eine schwierige Sache, die ich noch nicht zu verwirklichen weiß. In meinen fast zehn Jahren bei SenseTime sprang ich nacheinander in zwei verschiedene Flüsse.

Aber ich bin niemand, der nur der Veränderung nachjagt. In mir wirkt noch eine andere, fast entgegengesetzte Kraft: Verantwortungsgefühl.

Ich hasse es, Dinge auf halbem Weg aufzugeben. Wenn ich mich für etwas entscheide, möchte ich es wirklich und gut zu Ende bringen. Die eine Kraft lässt mich nach dem nächsten Fluss suchen; die andere hält mich im bisherigen fest, damit ich vollende, was ich begonnen habe.

Mein Weggang in diesem Jahr war das Ergebnis eines langen Kampfes zwischen diesen beiden Kräften.

## Algorithmen in die reale Welt bringen

Als ich zu SenseTime kam, arbeitete ich in der Forschungsabteilung. Mein Interesse galt jedoch immer den Anwendungen. Ich wollte nicht nur wissen, ob ein Algorithmus mit experimentellen Daten funktionierte, sondern ob er in die reale Welt eintreten und ein konkretes Problem lösen konnte.

Die Lebenderkennung war ein Kernstück des ersten großen Einsatzprojekts von SenseTime. Zuvor hatten wir bereits einige gute Demos zur Gesichtserkennung. Doch als wir mit einer wirklich groß angelegten Anwendung konfrontiert waren, stellten wir fest, dass viele Produktionsprobleme ungelöst waren — besonders die Angriffe auf das Onlinesystem.

Das System verzeichnete täglich mehr als eine Million Zugriffe und war zu Spitzenzeiten Hunderttausenden Angriffen pro Tag ausgesetzt. Die Technik musste weiterentwickelt werden, während der bereits laufende Dienst zugleich stabil bleiben musste. Oft war die Arbeit ein Nahkampf. Wir verließen das Büro regelmäßig erst um drei oder vier Uhr morgens und arbeiteten manchmal die ganze Nacht durch.

Häufig kämpften wir einen Tag und eine Nacht lang, behoben alle bekannten Angriffe und fuhren zum Schlafen nach Hause. Kurz nachdem wir eingeschlafen waren, klingelte wieder das Telefon: Das Onlinesystem war erneut überwunden worden.

In diesem Prozess halfen wir, die End-to-End-Modellarchitektur von SenseTime für die Gesichtserkennung voranzutreiben. Zuvor kamen viele Deep-Learning-Algorithmen nur in einzelnen Teilen zum Einsatz, während das Gesamtsystem mehrere Stufen miteinander verkettete. Gegen ständig wechselnde Angriffe konnten manuell kombinierte Methoden jedoch nicht schnell genug iterieren. Der einzige Ausweg, den wir sahen, war ein einziges End-to-End-Deep-Learning-Modell, das direkt aus Daten lernte. Damals nannten wir es das „vereinheitlichte Modell“.

Dieses Projekt ließ mich zum ersten Mal wirklich verstehen, dass ein in einer Demo funktionierender Algorithmus noch keine tragfähige Technologie ist. Erst wenn er massenhafte Zugriffe, fortlaufende Angriffe und alle möglichen unerwarteten Situationen übersteht, wird er tatsächlich nutzbar.

Später gingen wir in den Smartphone-Markt. Vor jeder Einführung organisierten die Hersteller Tests mit Hunderten Menschen, während Wettbewerber und Nutzer ständig neue Probleme fanden. Das zwang uns, eines der damals nach unserem Wissen größten Testteams eines KI-Algorithmusunternehmens aufzubauen und zu versuchen, jede Möglichkeit auszuschöpfen.

Ein Problem mit Gegenlicht ließ sich nur in einer bestimmten Herrentoilette an einem SenseTime-Standort reproduzieren. Ein anderes, das wir „Halblicht-Gesicht“ nannten, trat nur aus einem bestimmten Winkel unter einem bestimmten Baum auf. Damit ein Produkt im Alltag von Hunderten Millionen Menschen zuverlässig funktionierte, erledigten wir sehr viel Arbeit dieser Art.

Am Ende machten wir die Identitätsauthentifizierung auf Smartphones zu einem Marktführer.

Das war der erste Fluss, in den ich bei SenseTime einstieg. Die Lebenderkennung begann als Forschungsdemo, wurde in mehreren groß angelegten Anwendungen geprüft und entwickelte sich schließlich zu einem recht ausgereiften Gebiet. Bis 2019 ließen sich viele Probleme, die früher riskante Erkundung verlangt hatten, mit gesammelter Erfahrung lösen. Ich hatte nicht alles abgeschlossen, aber ich wusste, dass ich wieder in einer Komfortzone angekommen war.

Also wurde ich erneut unruhig.

## Bei SenseTime bleiben und den Fluss wechseln

2019 verließ ich SenseTime nicht. Ich entschied mich, im selben Unternehmen von der Identitätsauthentifizierung zur industriellen Bildverarbeitung zu wechseln.

Nach umfassender Recherche und vielen Gesprächen mit der Unternehmensleitung und dem Vertriebsteam wählten wir als erstes Projekt für industrielle Bildverarbeitung die intelligente Inspektion des C4-Oberleitungssystems von Hochgeschwindigkeitszügen.

Gemeinsam mit dem Presales-Team besuchte ich viele Eisenbahn-Prüfzentren und Behörden. Den tiefsten Eindruck hinterließ das Zentrum in Xuzhou. Als wir ankamen, hatte es gerade geregnet. Das Zentrum lag recht abgelegen, und wir stapften über einen schlammigen Weg hinein.

Drinnen standen Computer in langen Reihen. Die Prüfer verbrachten jeden Tag viel Zeit damit, Bilder nach möglichen Fehlern an Eisenbahnoberleitungen zu durchsuchen. Fast alle hatten dunkle Augenringe. Nachdem sie einen Fehler gefunden hatten, mussten sie noch Tausende Kilometer Schienenstrecke entlangfahren und jedes Problem einzeln behandeln. Manchmal war nur eine Schraube oder Mutter locker, trotzdem mussten sie vor Ort sein. Ob bei bitterer Kälte oder großer Hitze — die Reparatur durfte nicht warten.

Der Bedarf war für mich schmerzhaft deutlich. Wenigstens bei der zeitaufwendigsten Arbeit sollten wir ihnen helfen: beim Betrachten der Bilder.

Erst nach dem Start merkten wir, wie viel schwieriger das Problem war als gedacht. Eine Oberleitung enthält mehr als hundert Arten von Bauteilen und über tausend Arten von Defekten. Selbst diese Zahlen entstanden erst, nachdem wir sie gemeinsam mit den Kollegen vor Ort wiederholt gezählt und geordnet hatten. Viele Prüfungen beruhten auf Erfahrung, während Dokumente und historische Daten verstreut lagen. Wir mussten das Material von Grund auf sammeln, an der Seite der Menschen vor Ort arbeiten und jeden Fehlertyp einzeln verstehen. Dieser Prozess dauerte fast zwei Jahre.

Die größere Herausforderung waren die wenigen Beispiele. Fehler auf Hochgeschwindigkeitsstrecken sind von Natur aus äußerst selten. Manche treten vielleicht kein einziges Mal im Jahr auf, können dann aber schwerwiegende Folgen haben. Wir konnten nicht warten, bis wir genügend Beispiele gesammelt hatten. Wir mussten unsere Methoden für die realen Bedingungen neu entwerfen.

Schließlich gelang das Projekt und wurde in großem Maßstab eingesetzt.

Die industrielle Bildverarbeitung war der zweite Fluss, in den ich bei SenseTime einstieg. Ich wechselte nicht das Unternehmen, doch fast alles Vertraute änderte sich: Probleme, Daten, Kunden, Bewertungskriterien und Arbeitsweise. Ich wurde wieder zum Anfänger und schaffte mit dem Team etwas, von dem wir anfangs nicht wussten, wie es ging.

Deshalb sage ich, dass der Fluss nicht das Unternehmen ist. Was mich wirklich anzieht, ist nicht, einen Ort zu verlassen, sondern ein schwierigeres Problem zu betreten.

## Das Jahr 2022, in dem ich den Fluss nicht wechselte

Nach dem Börsengang stand SenseTime unter neuem finanziellen und materiellem Druck. Gleichzeitig trat die vorherige Welle der Computer Vision allmählich in die Reifephase ein, während die nächste noch nicht klar sichtbar war. Vieles wurde durch Ressourcen, den Markt oder technische Grenzen eingeschränkt und ließ sich nicht mehr so schnell vorantreiben wie zuvor.

Das ganze Jahr 2022 war ich etwas niedergeschlagen oder, anders gesagt, ein wenig passiv. Ich begann, zu gewöhnlichen Zeiten zu arbeiten.

An diesem Satz ist nichts falsch. Regelmäßige Arbeitszeiten sind für viele Menschen ein normales Leben. Aber ich hatte meine Arbeit immer wie ein Start-up behandelt. Als ich plötzlich in diesen Zustand geriet, fühlte ich mich tief entmutigt.

Oberflächlich betrachtet war das Leben viel bequemer als früher. Ich wachte nicht mehr jeden Tag mit einem neuen, unbedingt zu lösenden Problem auf und blieb nicht mehr so oft wegen eines Onlinefehlers die ganze Nacht wach. Doch genau dieser Komfort machte mir zu schaffen: Ich konnte mir allmählich vorstellen, wie mein Leben in einigen Jahren aussähe, wenn sich nichts änderte.

Ich ging nicht sofort. Was mich hielt, war Verantwortung.

Die Eisenbahninspektion war gelungen, doch bei der Qualitätsprüfung in Automobilwerken waren wir nicht erfolgreich, und auch der intelligente Industrieroboterarm war nicht fertig. Ich wollte diese Arbeit fortsetzen. Ich konnte nur schwer akzeptieren, ein Team gegründet und eine Richtung gewählt zu haben, um dann im schwierigsten Moment zu gehen.

Eine Kraft sagte mir, ich solle nach dem nächsten Fluss suchen; die andere, dass die Arbeit vor mir noch nicht beendet sei.

Im Jahr 2022 war die zweite Kraft stärker.

## Ich sah den nächsten Fluss

Ende letzten Jahres erschien ChatGPT. In der ersten Hälfte dieses Jahres kam GPT-4. Das alte Gleichgewicht zerbrach.

Damals hatte ich ein sehr starkes Gefühl: Der Computer Vision war ihre eigene Basis genommen worden.

Die Zukunft würde nicht aus voneinander getrennten Modellen für Text, Bild und Sprache bestehen. Computer Vision würde nicht verschwinden, sondern ein Teil davon werden, wie allgemeine Modelle die Welt verstehen. Früher hatten wir das Sehen als vollständiges technisches Zentrum betrachtet; nun zeichnete sich eine größere Ära allgemeiner Intelligenz ab.

Das war kein weiteres technisches Upgrade innerhalb der Computer Vision. Der Hauptstrom der technologischen Entwicklung selbst hatte sich verändert.

Ich sah wieder einen Fluss, dessen Strömungen ich noch nicht kannte.

Früher hatte ich den Fluss wechseln können, ohne SenseTime zu verlassen. Der Wechsel von Identitätsauthentifizierung zu industrieller Bildverarbeitung im Jahr 2019 war eine solche Entscheidung. Diesmal lag der nächste Fluss jedoch nicht in der Verlängerung meiner bisherigen Arbeit. Ich wollte in die allgemeine Intelligenz und die neuen Anwendungen eintreten, die sie schaffen würde.

Meine Rolle und meine Verantwortung lagen weiterhin in der industriellen Bildverarbeitung. Wenn ich blieb, sollte ich mich ganz darauf konzentrieren, diese Arbeit gut zu machen. Ich sollte nicht meine bestehenden Pflichten tragen und nebenher meine nächste Station vorbereiten.

Um wirklich in den nächsten Fluss zu springen, musste ich zuerst meine alte Rolle verlassen.

In der ersten Jahreshälfte fiel es mir immer schwerer, stillzusitzen. Ich wusste nicht, welche Produkte die neue Technologie letztlich hervorbringen würde oder was ich darin tun könnte. Aber ich wusste: Wenn ich wartete, bis alles durchdacht war, verpasste ich vielleicht die Jahre, in denen ich am dringendsten mit dem Lernen beginnen musste.

Wirklich wichtige Dinge erreichen selten einen Zeitpunkt, an dem man sie für „vollständig abgeschlossen“ erklären kann. Wenn Verantwortung bedeutet, bis zum Ende aller Probleme zu warten, trifft ein Mensch womöglich nie eine neue Entscheidung.

Nach und nach erkannte ich, dass Verantwortung nicht nur Bleiben bedeutet. Auch das Bleiben ist eine Entscheidung, deren Folgen man tragen muss. Verantwortungsgefühl darf kein Grund werden, eine Entscheidung auf unbestimmte Zeit zu verschieben.

Deshalb verließ ich SenseTime im Juni dieses Jahres.

## Warum ich ohne Antwort ging

Vor meinem Weggang bereitete ich nicht heimlich außerhalb der Arbeit ein Start-up vor. Ich plante auch nicht, das laufende Geschäft von SenseTime mitzunehmen und darauf ein eigenes Unternehmen aufzubauen.

Wenn ich weiterhin für ein Unternehmen arbeitete, für seine Ergebnisse verantwortlich war und seine Ressourcen nutzte, innerlich aber darüber nachdachte, wie ich meine nächste Station vorbereiten könnte, würde ich mich gegenüber meiner bisherigen Arbeit unehrlich fühlen.

Das bedeutete, dass ich bei meiner Kündigung tatsächlich nicht vorbereitet war.

Ich war nicht unvorbereitet, weil ich das Gründen nicht ernst nahm, sondern weil ich bis zu meinem Weggang meine bisherige Arbeit weiterhin ernst nahm.

Ich konnte nur zuerst gehen und danach nach der Antwort suchen.

Schwimmen zu können bedeutet nicht, jeden Fluss zu kennen. Man kann auch nicht am Ufer stehen bleiben, bis man die Strömung vollständig verstanden hat, und erst dann hineinspringen. Manches Wissen gewinnt man nur im Wasser, und manche Richtung wird erst sichtbar, nachdem man sich in Bewegung gesetzt hat.

Diesmal bedeutete der Flusswechsel, meine Stelle aufzugeben. Aber nicht die Sehnsucht nach dem Kündigen trieb mich an, sondern das Erscheinen des nächsten Flusses.

## Die Seite der Anwendungen wählen

Nach dem Erscheinen von ChatGPT diskutierte ich mit Freunden eine Frage: Wenn AGI kommt, wird Intelligenz am Ende in den Händen weniger Plattformen konzentriert sein oder von mehr Menschen geteilt werden?

Meine Einschätzung war, dass sie sich unweigerlich verbreiten würde.

Streng beweisen kann ich das nicht. Meine Intuition ist schlicht, dass das Universum selbst kein zentralisiertes System ist. Die reale Welt besteht aus unzähligen Menschen, Geräten, Umgebungen und lokalen Problemen. Wenn Intelligenz wirklich in diese Welt eintreten soll, muss auch sie in zahllosen Formen existieren. Das Training von Basismodellen mag sich auf wenige Unternehmen konzentrieren, aber die Anwendungen der Intelligenz werden nicht nur wenigen Plattformen gehören.

Deshalb möchte ich keine Basismodelle bauen. Lieber entwickle ich Anwendungen, die mit dieser neuen Intelligenz auf konkrete Bedürfnisse antworten, eines nach dem anderen.

Diese Entscheidung kommt auch aus meinem eigenen Leben.

Ich wuchs auf dem Land auf. Von der Grundschule bis zur Mittelschule verbrachte ich viele Ferien und freie Stunden mit der landwirtschaftlichen Arbeit meiner Familie. Ich säte, düngte, brachte Pflanzenschutzmittel aus, fuhr Traktor und hielt Tiere. In den Ferien war ich für mich ein ganz wirklicher Bauer.

Ich mochte das Erfolgserlebnis dieser Arbeit. Ob die Pflanzen gut wuchsen und die Tiere gut aufgezogen waren, zeigte sich unmittelbar. Wenn man die Arbeit ein wenig besser machte, wurde das Leben einer Familie ein wenig besser.

An der Universität hatte ich viele Nebenjobs und veranstaltete mit Kommilitonen einen Sommerkurs. Wir warben selbst die Schüler an, kassierten die Gebühren und unterrichteten. In jenem Sommer verdienten alle Beteiligten genug für die Lebenshaltungskosten des folgenden Jahres.

Im Aufbaustudium arbeitete ich als Privatlehrer. Später, als SenseTime gerade begonnen hatte und das Büro noch aus einem Hotelzimmer im Wenjin Hotel nahe dem Südtor von Tsinghua bestand, kam ich als einer der frühen Gründungsmitarbeiter hinzu.

Oberflächlich haben diese Dinge wenig gemeinsam. Doch sie gaben mir auf dieselbe Weise ein Erfolgserlebnis: Ich löste ein reales Problem und sah, wie sich durch meine Beteiligung etwas veränderte.

Als die neue Ära allgemeiner Intelligenz erschien, stellte ich mich daher instinktiv wieder auf die Seite der Anwendungen. Mich beschäftigt nicht, wie man beweist, dass eine Technologie stärker ist, sondern was sie am Ende für einen konkreten Menschen tun kann.

## Nach dem Sprung

In den nächsten Fluss einzutreten bedeutete nicht, dass ich sofort wusste, wohin ich schwimmen sollte.

In den ersten Monaten nach meinem Weggang von SenseTime suchte ich instinktiv weiter dort nach Möglichkeiten, wo ich mich am besten auskannte. Mit einem Freund probierte ich einige bildbezogene Produkte aus. Schließlich hatten sich fast zehn Jahre meiner Arbeit um Computer Vision gedreht. Dort zu beginnen schien am natürlichsten.

Doch nach einiger Zeit spürte ich immer stärker, dass die Richtung nicht stimmte. Das Problem lag nicht unbedingt in den Produkten selbst, sondern darin, dass wir weiterhin von dem ausgingen, was wir konnten, statt von dem, was die Nutzer wirklich brauchten.

Wer zehn Jahre lang einen Hammer getragen hat, sieht selbst in einem anderen Raum leicht überall nur Nägel.

Mir wurde klar, dass der Eintritt in ein neues Gebiet nicht bedeutet, nur den Ort zu wechseln und dort weiter die früher erfolgreichen Methoden anzuwenden. Ein echter Neuanfang verlangt, die vertrautesten Antworten vorübergehend beiseitezulegen.

Also fragte ich mich: Wenn ich die technische Erfahrung der vergangenen zehn Jahre außer Acht ließe, welches KI-Produkt würde ich selbst am liebsten haben?

Meine Antwort lautete: Notizen.

## Das Produkt, das ich am meisten wollte

Seit der Mittelschule halte ich mich an den Grundsatz: „Nie lesen, ohne zu schreiben und Notizen zu machen.“ Für mich waren Notizen nie nur ein Ort zur Ablage von Informationen. Sie sind eine Erweiterung des Gedächtnisses und ein Teil des Denkens.

Oft nennt man sie ein „zweites Gehirn“. Doch dieses sogenannte zweite Gehirn ist nicht wirklich intelligent.

Wir legen Dinge hinein, müssen sie aber weiterhin selbst ordnen, suchen, miteinander verbinden und wieder hervorholen. Es ähnelt eher einer externen Festplatte als einem anderen Gehirn.

Diese Generation großer Modelle ließ mich zum ersten Mal glauben, dass sich das grundlegend ändern könnte. Notizen der Zukunft bewahren vielleicht nicht nur auf, was jemand geschrieben hat. Sie könnten die Inhalte verstehen, Verbindungen finden, uns bei Bedarf beim Erinnern helfen und sogar an unserem Denken teilnehmen.

Ich möchte keine Notizsoftware mit ein paar hinzugefügten KI-Funktionen bauen, sondern ein wirklich intelligentes zweites Gehirn.

Allgemeine Intelligenz ist der nächste Fluss, in den ich gesprungen bin. Intelligente Notizen sind die erste Richtung, in die ich darin schwimmen will.

## Noch nicht am anderen Ufer

Zuvor hatte ich vieles mit unternehmerischem Charakter getan. Der Sommerkurs an der Universität war eine informelle Gründung. Mich SenseTime in seinen Anfängen anzuschließen bedeutete, an einer Gründung teilzunehmen. Die Teams für Lebenderkennung und industrielle Bildverarbeitung innerhalb von SenseTime aufzubauen ähnelte ebenfalls dem Gründen innerhalb eines Unternehmens.

Doch diesmal war es anders. Im Juni dieses Jahres verließ ich zum ersten Mal ein Unternehmen, setzte mich vollständig dem Markt aus und begann im eigentlichen Sinne in Vollzeit zu gründen.

Heute ist der 31. Dezember 2023. Seit meinem Weggang von SenseTime ist ein halbes Jahr vergangen.

Ich habe noch nicht auf alle Fragen Antworten gefunden und kein Ufer erreicht, das man Erfolg nennen könnte. Ich lerne vieles, das mir zuvor nicht lag: ein Produkt zu bauen, einen Markt zu verstehen und beides zur Deckung zu bringen.

Viele Menschen würden diesen Zustand vielleicht als schmerzhaft empfinden. Mir vermittelt er eine lange vermisste Vertrautheit, weil ich wieder an einem Ort bin, an dem ich die Antworten nicht kenne.

Dies ist der erste Beitrag in meinem persönlichen Blog. Ich schreibe ihn nicht, weil die Reise beendet wäre, sondern weil ich in dem Augenblick, in dem sie wirklich beginnt, festhalten möchte, warum ich aufgebrochen bin. Künftig werde ich hier weiter über Technologie, Produkte und Menschen sowie über die Dinge schreiben, die ich erschaffe.

Ich weiß nicht, wohin dieser Fluss schließlich führen wird.

Doch rückblickend begannen mehrere wichtige Veränderungen in meinem Leben mit derselben Entscheidung: Nachdem ich lange genug Zeit investiert und bemerkt hatte, dass ich allmählich in eine Komfortzone geriet, begann ich nach dem nächsten Fluss zu suchen.

Im Juni dieses Jahres traf ich diese Entscheidung erneut.

Ich bin noch immer im Wasser.
