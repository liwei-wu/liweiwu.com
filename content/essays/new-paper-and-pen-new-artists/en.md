---
id: new-paper-and-pen-new-artists
type: essay
locale: en
title: New Paper and Pen, New Artists
subtitle: How AI Changes Software and People
description: When implementation is no longer the scarcest part, what does human work become?
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-03
translation_status: author-reviewed
source_locale: zh-Hans
topics:
  - AI
  - Software
  - Authorship
---

When Andrej Karpathy introduced “vibe coding” in February 2025, he deliberately framed it casually: you tell AI what you want in natural language, accept the code it generates, paste errors back when they appear, and can even forget that the code exists. He said the approach was “not too bad for throwaway weekend projects.” [1]

That description also captured the boundary within which we were then willing to use it.

It revealed a new direction for software development, but it was not yet enough for us to let go entirely in serious products. Throughout 2025, we mainly used tools such as Cursor in a hybrid mode: a person expressed an intention; AI generated or modified code; the person continued to read the code, enter the implementation, judge the details, and take responsibility for the result.

By early 2026, at least for the kinds of applications we build, we believed that the capabilities of coding agents—and the engineering methods forming around them—were crossing the line from auxiliary tool to viable engineering path. A coding agent is a programming agent that can read a project, modify files, run tests, and continue acting on the results. In early February, Karpathy described this way of working as “agentic engineering”: professional developers no longer merely use AI to complete code, but organize and supervise agents to do the work, amplifying individual execution while retaining responsibility for review and quality. [2] The name did not mark the sudden beginning of a new practice so much as summarize a change already underway.

It was during this period that we decided to use this approach in earnest on a serious product.

Beginning in March, I treated it as an engineering practice with explicit boundaries. I deliberately stopped using code as the interface through which I directly controlled the system. Instead, I worked with coding agents through natural language, product documents, architectural constraints, runtime results, and acceptance feedback to build a complete product spanning a desktop application, browser extension, server, and database. In other words, I neither wrote nor read a single line of code, but I did not give up defining, validating, or taking responsibility for the system.

Nearly half a year of practice cannot prove that all software can be developed this way. But for the kinds of products we are building, it has already become a viable engineering path. “Viable” does not mean occasionally producing a version that happens to run. It means entering a complete loop of continuous planning, implementation, testing, correction, and iteration.

To me, the important change is not that “AI can write code.” That has not been new for some time. The real change is that, in the applications we are building, implementation is gradually receding from its position as one of the primary bottlenecks. I believe the range within which this is true will continue to expand.

When implementation is no longer the scarcest part, what does human work become?

That is the question this essay seeks to discuss.

## What Do We Mean by AI?

AI has never been a fixed term. What each generation calls AI usually points toward what computers of that time have not yet fully learned to do.

In middle school and university, I built robots. In graduate school, I studied computer vision. Today, I build AI applications. Looking back, at every stage we were working with whatever AI could do at that particular time and place. Once many capabilities become mature, reliable, and embedded in everyday products, they no longer feel like AI. The term moves on toward the next unsolved frontier.

So AI in this essay does not refer broadly to every artificial intelligence technology. It refers specifically to an important current trajectory: systems centered on large language models and exemplified by coding agents, through which machines understand goals expressed in natural language, use tools, carry out tasks, and repeatedly correct themselves in response to feedback. This trajectory may lead toward more general agents and, under limited conditions, toward systems capable of improving themselves through feedback. That, however, is a future direction—not an established fact on which this argument depends.

What has already happened is that, for a growing number of software authors, natural language is becoming a new higher-level language for expressing intent.

## Code Is Becoming an Intermediate Artifact

The history of computing can be read as a history of adding layers of abstraction.

People first operated machines with switches and patch cables. Then came machine code, assembly languages, and high-level programming languages. Each new layer encapsulated another level of the machine’s complexity and allowed people to move closer to their intentions.

Coding agents add another layer of abstraction.

They resemble a kind of super-compiler: a traditional compiler translates a high-level language into machine instructions; a coding agent continually unfolds human intention into products, interfaces, data, services, and code.

This is, of course, only a metaphor. Traditional compilers process formally specified languages. Coding agents face human expressions that are ambiguous, incomplete, and sometimes contradictory. They do not deterministically translate one sentence into one result. They must cycle repeatedly through understanding, planning, execution, operation, and verification.

Natural language has therefore not simply “replaced” programming languages. More precisely, natural language and documents are becoming the principal means by which people express intent, while code increasingly serves as an implementation medium generated and maintained by agents.

This also changes what we need to write clearly.

In the past, documentation was often an explanation of code. In our work today, that relationship is beginning to reverse: more and more code is generated and verified from documents. Why a product exists, how a system should work, which boundaries must not be crossed, and what counts as done—these matters, once easily left beside the code, are becoming the sources that people must truly maintain.

No longer writing code by hand does not reduce the demand for precise expression. It increases it.

An ambiguous idea might once have stalled during a long implementation process. Now an agent can rapidly turn it into a functioning but wrong system. The faster implementation becomes, the faster unclear thinking is exposed.

AI does not exempt us from thinking. It only makes it harder to use the busyness of implementation to conceal ambiguity of thought.

## The Other Half of “Paper and Pen”

In 2025, Jian Wang compared AI to humanity’s “new paper and pen”: not thought itself, but an extension of human thought. [3] I find the metaphor compelling.

It even carries an intriguing historical symmetry. In 1948, Alan Turing imagined that a person equipped with paper, pencil, and eraser, and strictly following a set of rules, could be regarded as a universal machine. [4] People then used paper and pencil to explain how a person might simulate a machine. Nearly eighty years later, the direction appears to have reversed: the machine is becoming the new paper and pen, helping people unfold intentions into worlds that can run.

The metaphor also reminds me of university life. Apart from sleeping, I probably spent a third of my time tinkering with software: installing operating systems, configuring environments, learning new tools, and then making demonstrations of things I wanted to build. There was pleasure in the process, but I often spent more time preparing to create than actually creating—like a painter forever searching for paper, making pigments, and repairing brushes.

When I say AI is the new paper and pen, I do not mean that it can do everything. Quite the opposite: paper and pen have never been omnipotent.

Paper does not write a novel by itself. Pigment does not paint a good picture, nor does a camera make a good film. Tools lower the cost of expression, but they do not decide for the creator what is worth expressing. Coding agents are far more active than paper and pen: they offer suggestions, execute tasks, and make choices within a certain scope. Yet as long as they cannot take responsibility for a work’s purpose and consequences, they do not automatically become its authors.

I did not originate the comparison of AI to new paper and pen. What truly interests me is the other half of the metaphor:

If we have new paper and pen, what kind of artists do we need?

## Art Is Moving Up a Layer of Abstraction

“Programmers are artists” is not a new idea either.

In 1974, Donald Knuth published “Computer Programming as an Art,” discussing why programming requires knowledge, skill, and creativity, and why it can produce objects of beauty. [5] In 2003, Paul Graham argued in “Hackers and Painters” that hackers and painters are both “makers”; for software creators, computers are a medium of expression just as paint is for a painter or concrete is for an architect. [6]

AI is therefore not turning programmers into artists for the first time.

It is changing the level at which the art takes place.

In the past, much of a programmer’s art occurred inside the code: whether an algorithm was ingenious, an abstraction elegant, or a system able to contain ample possibility with minimal structure. This is a beauty one can appreciate only by entering deeply into the implementation, and it will not lose its value because agents have appeared.

But as more implementation work is delegated downward to agents, the center of human creation moves upward. The art of software will increasingly take place in the work as a whole: the problem it chooses, the people it understands, the order it establishes, the possibilities it gives up, how it responds to users, and how it enters their lives.

This art at the level of product and experience has of course existed for a long time. What changes is that, when implementation no longer consumes most of our attention, it can become the primary object of work for more software creators.

Elegant code still matters, but it is no longer the whole of software’s beauty, nor is it always the part humans create directly. What people and AI make together should not be understood merely as a pile of correctly running code. It should be understood as a complete work of software.

This is the real change toward which “new artists” points.

Using existing professional language, this person might be approximated as a hybrid of product manager and architect. A product manager asks what to make and for whom. An architect asks how the system can endure, and where its boundaries and constraints lie. Yet neither title is sufficient. The new software artist also needs aesthetic judgment, empathy, the ability to make tradeoffs, and responsibility for the whole result.

“Artist” here is not a more noble job title, nor does it necessarily refer to one person. It is the role of an author responsible for the complete work, and it may be assumed collectively by a cross-functional team.

Technology answers how something can be made. Art decides what is worth making and how we hope people will feel it. This is not an absolute boundary—what we make and how we make it have always shaped each other—but it identifies a shift in the center of software creation.

Engineering ensures that a work can exist reliably. Art determines why it exists and how it enters human life.

## Engineering Has Not Disappeared, and Neither Has Responsibility

The new artist does not merely propose a good idea and wait for AI to do everything else.

The spread of paper and pen did not make writing require no training. The spread of cameras did not make photography require no judgment. Coding agents lower the threshold of implementation, but they do not automatically solve architecture, security, performance, quality, and maintenance in complex systems.

The fact that I do not read code does not mean that I have relinquished engineering control. The points of control have changed: from inspecting implementation line by line to specifying system goals, architectural principles, data boundaries, permission models, testing standards, observability, and acceptance results. AI can participate in every one of these tasks, but people must ultimately judge whether the constraints are sufficient, whether the evidence is trustworthy, and whether the result can be delivered.

Some fields—including infrastructure, safety-critical systems, and low-level software—will continue to require people to work deep inside code for a long time. They may need a small number of people who truly understand the lower layers more than ever. A new abstraction layer never eliminates the layers below it. High-level languages did not eliminate assembly, nor did cloud computing eliminate operating systems. They simply allowed most creators to avoid traversing every lower layer each time they create.

More powerful tools will also produce mediocrity at a greater scale. As implementation becomes cheaper, we are likely first to get more repetitive, crude software that meets no real need. Paper and pen do not automatically produce literature. Coding agents will not automatically produce a software renaissance.

AI does not eliminate scarcity. It relocates it.

In the past, much of software production’s scarcity was concentrated in programming ability, engineering resources, and implementation time. As those costs continue to fall, problem judgment, product intuition, systems understanding, aesthetics, understanding people, and the willingness to take responsibility for consequences will become relatively scarcer.

As “how to make it” becomes cheaper, “what to make” becomes more expensive.

## From Authors of Code to Authors of Software

Bret Taylor once repeated and endorsed Arya Asemanfar’s precise formulation: AI can draft for you, but you are still the author. [7] Addy Osmani has described the developer’s new role as architect and strategist. [8]

An author need not personally carry out every action that produces a work. Architects do not lay every brick with their own hands, nor do directors operate every camera on a film set. But they must know what the work is to become, be able to judge whether it succeeds, and take responsibility for the whole.

The same change is happening in software.

In the past, we often identified the author of software by asking who wrote the code. In the future, authorship will increasingly depend on another set of questions: Who defined the problem? Who established the constraints? Who made the critical tradeoffs? Who judged the work to be complete? And who bears responsibility for its consequences after it enters the real world?

This may also change the economic unit of software. In the past, a need had to be shared by enough people to justify developing a piece of software. When implementation costs fall dramatically, the particular workflow of a team, a family, or even one person may deserve software of its own. Not everyone in the future must become a programmer, but more people can become authors of software.

I began my entrepreneurial journey three years ago and registered DeepFlywheel in 2025. Our work over nearly the past half year was not the beginning of that journey, nor did it prove that I had understood everything correctly from the start. It simply clarified a direction that had remained constant: we chose to build applications because only applications place model capabilities in the hands of real people, where use, trust, and payment provide the most honest feedback. How that feedback should enter the next cycle of creation is a subject for another essay.

For this essay, the conclusion can be simpler.

AI pushes a great deal of implementation work downward while moving human responsibility and the center of creation upward by one layer of abstraction. Programmers will no longer be only authors of code. Increasingly, they will become authors of complete works of software. These are the “new artists” I mean.

The new paper and pen have arrived. But a new renaissance will not arrive automatically. It will depend not on how much code agents can generate, but on whether we possess judgment and are willing to take responsibility for answering a question more difficult than “how can it be made?”

What is worth creating, and how do we hope people will feel it?

---

## References

[1] Andrej Karpathy, [X post introducing “vibe coding”](https://x.com/karpathy/status/1886192184808149383), 2025-02-02.

[2] Andrej Karpathy, [X post proposing “agentic engineering”](https://x.com/karpathy/status/2019137879310836075), 2026-02-04.

[3] Liu Ningxin, [“Wang Jian: Innovation Comes from ‘Imperfection’ and ‘Crossing Boundaries’”](https://www.21jingji.com/article/20250925/herald/63dd40dc7eeb8b21044db93b5a1ae23f.html), *21st Century Business Herald*, 2025-09-25.

[4] Alan M. Turing, [“Intelligent Machinery”](https://www.alanturing.net/turing_archive/archive/l/l32/L32-001.html), National Physical Laboratory report, 1948.

[5] Donald E. Knuth, [“Computer Programming as an Art”](https://doi.org/10.1145/361604.361612), *Communications of the ACM*, 17(12), 1974, pp. 667–673.

[6] Paul Graham, [“Hackers and Painters”](https://paulgraham.com/hp.html), May 2003.

[7] Bret Taylor, [“AI is your ghostwriter, but you are the author”](https://www.linkedin.com/posts/brettaylor_ai-is-your-ghostwriter-but-you-are-the-author-activity-7426807696881815552-Vwr9), LinkedIn, 2026-02-10.

[8] Addy Osmani, [*Beyond Vibe Coding*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/), O’Reilly Media, August 2025.
