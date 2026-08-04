---
id: gourd-before-magic
type: essay
locale: en
title: The Gourd Is Here, but the Magic Has Yet to Appear
description: In the first year after jumping into the next river, we shipped 27 versions and began to understand how to turn a demo into a product that could serve users for the long term.
slug: gourd-before-magic
published_at: 2024-12-31
translation_status: author-reviewed
source_locale: zh-Hans
topics:
  - Entrepreneurship
  - Product
  - Artificial Intelligence
  - MagicGourd
  - Intelligent Notes
---

On the last day of 2023, I published the first essay on this personal site, “Jumping into the Next River.” Its final sentence was: “I am still in the water.”

A year has passed, and I am still in the water.

The river has not become easier, nor has the opposite bank become clearer. But something has changed. In the second half of 2023, after leaving SenseTime, where I had worked for nearly ten years, I spent most of my time struggling and looking for a direction. In 2024, we began spending most of our time building a specific product.

The main thread of the year was product development. A few limited fundraising attempts formed a side thread. We raised no money and saw no market signal strong enough to validate our direction, but we built and released 27 versions.

After jumping into the next river, we had finally begun learning how to swim forward.

## First, Make a Gourd

In the essay I wrote at the end of last year, I said that I had ultimately decided to begin with intelligent notes.

Since middle school, I have believed that reading should involve writing. When I read a book or an article, or watch a video, I notice the parts that move me, mark them, and record the thoughts that arise. I call this process “finding points”: noticing what resonates and recording the inspiration it produces.

Sometimes a point is only a sentence, an image, or a single frame. At first, these points may seem unrelated. But once enough of them accumulate, they connect at unexpected moments, helping me understand a problem or form a judgment I had not previously considered.

Over the years, I tried many note-taking tools but never found a product that truly fit this habit. After leaving SenseTime, I asked a childhood friend—the same friend with whom I used to raid birds’ nests and get into fights—to build it with me. During the first half of 2024, we spent most of our time working in a coworking space in Sohu Tower.

We named the product MagicGourd.

“Gourd” is also my child’s nickname. I did not consciously attach much meaning to the name when we chose it. Looking back, perhaps it contained a subconscious hope: that the first product I built after becoming a full-time founder could, like a child, grow slowly under our care.

A product is not a child, of course. But they share one quality: bringing one into the world is only the beginning. The long work of caring for it and helping it grow is much harder.

The true second brain we envisioned was still far from reality and could not be completed in one step. So we decided to begin with the most basic one: let people mark what moves them and write down their inspiration while browsing the web, reading an online PDF, or watching a video.

First, make a gourd that could hold these points.

## The Product Judgment Behind a Highlight Button

Soon after we started building, we ran into a question that seemed almost too small to matter: what should the highlight button look like?

Should it be a single button or a panel containing several actions? When someone selects text, should it appear immediately or wait to be invoked? Where should it appear, and when should it disappear? If someone dislikes having it appear automatically, should we add a setting to turn it off?

Every additional option seems capable of meeting more needs, but it also raises the cost of understanding and using the product. Making the button appear more proactively makes the feature easier to discover, but it may also interrupt reading. Keeping it quiet may help someone stay focused, but they may never realize the feature exists.

There is no algorithmic standard answer to questions like these.

When building algorithms, we tend to ask whether a capability can be implemented, whether accuracy can be improved, and whether performance meets the target. When building a product, we found ourselves asking a different question: when should a feature step in, and when should it recede into the background?

The fact that a feature runs only proves that the technology works. Whether people understand it, feel interrupted by it, and choose to keep it in their daily lives determines whether the product works.

I had dealt with many real-world problems while building algorithms and large projects. But when we created a product from scratch, product decisions that had once been shared among product, design, customer, and engineering teams suddenly became ours alone. We had to decide what should be visible and what should remain behind the scenes; what to build now and what to leave out, even if it might be useful.

We gradually realized that a product is not made from a count of its features. It is made from countless choices. Sometimes, not appearing and not interrupting are themselves product capabilities.

## A Product Must Hold Up Over Time

Whether a button feels natural is an experience people can perceive immediately. But more of what determines whether a product will be used for years is hidden from view.

MagicGourd stores a person’s reading history, moments of resonance, and thoughts. We wanted to protect user privacy as much as possible while still providing cross-device synchronization and, in the future, intelligent services. To do both, we chose to encrypt data locally and store only ciphertext on the backend. This made development and maintenance more complex. But if people cannot truly own their data, a true second brain is impossible from the start.

Synchronization is another problem that looks simple and is anything but. When someone creates a highlight, the interface should respond immediately rather than stop and wait for the network. Recording should continue even on a weak connection or with no connection at all. When the network returns, data from different devices must synchronize correctly, without duplication, overwriting, or silent disappearance.

This forced us to reconsider how the frontend and backend should work together, how the database should organize data, how upgrades should preserve compatibility, and how the system should recover from errors. People do not usually see these decisions. But when one of them fails, all that hidden complexity becomes the most immediate part of the user experience.

Short-term experience is relatively easy to produce. It is not that difficult to make a smooth demo that impresses someone for a few minutes. But to us, it would still be only a demo.

A demo only has to hold up in the moment. A product has to hold up over time.

If a product is meant to accompany someone for ten years, the foundations of their experience ten years from now must be built today. A failure in an ordinary tool may be a temporary inconvenience. In a product that holds years of notes, a single loss of data can destroy all the trust a user has built.

We cannot promise that the system will never fail. But “do not lose a single user note” must remain one of our most important design constraints. Product experience does not exist only on the screen. It also exists in the database, where the user never sees it.

## A Very Short Fundraising Side Thread

Even calling fundraising a side thread of the year may be an exaggeration. We spoke with only three investment firms and spent most of the rest of our time building the product.

Our idea was simple: approach early-stage investors whom we knew directly or indirectly, explain what we were building, and try to raise our first angel round.

The value of that investment would not have been only the money. The product was unfinished, and there was no clear market signal. At that stage, we wanted outside feedback on whether strong investors believed the direction made sense.

None of these attempts led anywhere. At the time, we attributed the result to a difficult funding environment for AI applications and to our own inexperience talking with investors. Both were true. But looking back, there was a more immediate fact: we invested little time in fundraising and spoke with only three firms. Rather than saying that we went through a failed fundraising round, it would be more accurate to say that we had a few preliminary conversations with investors.

What deserves more reflection is how I responded to being challenged.

When we interviewed with MiraclePlus, the people sitting across from me were people I respected deeply. When they repeatedly challenged our ideas and framed their questions sharply, I felt torn. We had come seeking investment, so it seemed that I should respect their judgment and, to some extent, move closer to the answers they expected.

But if the purpose of fundraising was to receive honest feedback, saying things I did not truly believe would make that feedback meaningless.

I later began to wonder whether feedback was really all we wanted. Perhaps, before the product had been validated by the market, we also wanted approval from a group of outstanding investors to reassure ourselves that we had not chosen the wrong direction.

It was like standing in an unfamiliar river and hoping that someone on the bank would first tell us where to swim. But a founder must ultimately feel the current firsthand and make judgments from the facts in front of them.

## The “Xuanming Elders” of Dongsheng Tower

In the second half of 2024, we moved from Sohu Tower to Dongsheng Tower.

My childhood friend and I practiced pair programming for long stretches, often sitting together and staring at the same screen as we talked. Among the younger founders in the coworking space, this way of working was conspicuous. Before long, people gave us a nickname: the “Xuanming Elders.”

It was funny. Two people who had raided birds’ nests and fought together as children were sitting in a coworking space twenty years later, building a product called MagicGourd.

It was at Dongsheng Tower that we met Kehan. He was responsible for community work and founder recruitment at MiraclePlus. The first time he spoke to us, he asked, “You two are founders, right? I’ve been watching you for a long time. Of everyone in this office, you two look the most like you’re truly in founder mode.”

Later, when he learned that we had interviewed with MiraclePlus, we talked about what had happened. He told us that when investors repeatedly question a startup idea, they are not always merely expressing disagreement. They may also be testing whether the founders have truly thought it through and can preserve their judgment under pressure.

That helped me reinterpret the interview.

Respecting investors does not mean handing them your judgment. A founder must understand why others disagree without abandoning their own judgment simply because those people deserve respect. What must be avoided is not changing your mind in response to new facts. It is changing what you say merely to win approval before you have thought the question through.

This lesson applies beyond fundraising. When building a product, we encounter user feedback, choices made by competing products, and new technology trends every day. These external signals all deserve careful attention. But deciding what belongs in the product remains our responsibility.

## The Gourd Is Here

By the end of 2024, we had built and released 27 versions of MagicGourd.

We began with annotations for text and images on ordinary web pages, then added support for online PDFs and extended the same method to Bilibili and YouTube. People could mark a video frame that moved them, add a note, and quickly return to those moments on the timeline. We also added tag management, search, and export, and synchronized data across browsers and devices.

Every new content format required a great deal of adaptation. Web pages have no uniform structure, and video platforms keep changing. A feature that works correctly on one site may behave entirely differently on another page or browser. Much of our time did not produce conspicuous new capabilities. It went into handling edge cases so that existing capabilities would work more reliably.

Across the 27 versions released during the year, we found no cases of user data being lost or corrupted. The occasional failures were concentrated in service steps such as login verification codes. When we received a report, we could usually locate and resolve the problem quickly. This does not prove that the system will never fail, but it does suggest that the time we spent on what users cannot see was not wasted.

In November, we introduced our video-note feature on [sspai](https://sspai.com/post/93549). Users began leaving feedback in the comments. One person, who had previously saved useful video frames by taking screenshots and pasting them elsewhere, wrote after trying MagicGourd: “This plugin saved me!” Others liked the droplet markers on the video timeline, asked for standalone notes, or hoped we would support Safari soon.

Receiving user feedback was one of the happiest parts of the year.

What made us happy was not only that people praised the product, but that someone had finally placed something we made into their real life. They also offered useful suggestions that pushed us to keep deciding: which comments reflected a shared problem and which came from an individual habit; what should be fixed immediately and what, though useful, did not belong in the product at this stage.

If the product’s name is divided in two, by the end of the year we had at least built the “gourd”: a vessel for collecting, preserving, and managing moments of resonance and inspiration.

## The Magic Has Yet to Appear

But this was not yet the magic we had in mind.

It would certainly use AI, but it would not merely generate a summary of an article. A summary can compress information without advancing cognition.

As we understand them, information is the content a person receives; knowledge is information that has been understood and organized; cognition is the way a person understands the world, forms connections and judgments, and revises them as new experience arrives.

AI today is good at processing information and increasingly good at organizing knowledge. It can summarize an article, extract keywords, and answer questions already contained in the material. But if it only compresses ten pages into one, or adds a chat box beside a note-taking app, it has not touched what we truly want to build.

We want a future MagicGourd to understand the records a person has accumulated over time and bring together moments of resonance scattered across different periods and media. It might discover themes that recur without ever being stated explicitly, reveal connections and contradictions among notes, identify questions that have gone unanswered for a long time, or bring an earlier thought back at the right moment.

More importantly, it should raise questions the user has not yet considered but that are worth pursuing, helping them form new judgments of their own.

There must be a clear boundary here: AI cannot package its guesses as a “truth” the user has not yet realized. It can propose possible connections, contradictions, and questions. Whether those connections hold is still for the user to decide.

Magic does not think in place of the user. It helps the user see the thinking they have not yet finished.

During the year, we built several internal demos related to this idea. They could generate summaries, organize content, and answer questions. They already looked somewhat like AI products. But they were still far from what we meant by “advancing cognition,” so we did not rush them into production merely to keep up with the AI wave.

The more deeply AI participates in a person’s cognitive process, the more private the data it needs to access. This made us even more certain that privacy and data ownership are not engineering concerns separate from the magic. They are prerequisites for the magic to exist. We cannot claim that we want to understand users while asking them to surrender control of their own data.

And so, on December 31, 2024, the gourd was here, but the magic had yet to appear.

We had not raised investment, seen a decisive market signal, or established a clear business model. We still did not know where this river would ultimately lead.

But we had shipped 27 versions. Users had begun bringing the product into their lives. And we had begun to understand how to turn a demo that could run into a real product—and take responsibility for it over the long term.

A year earlier, I had written: “I am still in the water.”

A year later, I was still in the water. The river had not become easier, nor had the opposite bank become clearer.

But we had made the gourd.

The magic had yet to appear. We had not reached the opposite bank, either. But at least we had begun to swim forward.
