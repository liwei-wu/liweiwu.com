---
id: new-paper-and-pen-new-artists
type: essay
locale: en
title: New Paper and Pen, New Artists
subtitle: When Code Becomes an Intermediate Artifact, Who Authors the Software?
description: When implementation is no longer the scarcest part, what becomes of human work?
slug: new-paper-and-pen-new-artists
published_at: 2026-08-03
revised_at: 2026-08-04
translation_status: author-reviewed
source_locale: zh-Hans
topics:
  - AI
  - Software
  - Authorship
---

Over nearly six months of engineering work, I built several unreleased products with coding agents, using only natural language, product documents, architectural constraints, runtime results, and acceptance feedback. The products span desktop apps, browser extensions, backend services, and databases.

I did not write a single line of code. Nor did I read one.

But that does not mean I handed the products over to AI. I still decided which problems they should solve, defined how the systems should work, judged which boundaries could not be crossed, verified whether the results were reliable, and took responsibility for the final software. What changed was simply my interface with the implementation.

This forced me to reconsider a question that once seemed simple: if someone no longer writes code by hand, but still defines the work, decides whether it succeeds, and remains responsible for it, are they still the author of the software?

This practice does not prove that all software can be built this way. It does not even prove that these unreleased products will succeed in the market. But for the kinds of applications we build, a workflow centered on coding agents is no longer merely a way to program faster. It is becoming an engineering approach that can sustain planning, implementation, testing, correction, and iteration.

The important change is not that “AI can write code.” Implementation used to be one of the scarcest parts of creating software; now it is beginning to recede into the background.

When implementation is no longer the scarcest part, what becomes of human work?

That is the question of this essay.

## The Boundary of AI Is Moving

AI has never been a fixed term. People tend to call something AI while computers cannot yet do it reliably; once the capability matures and enters everyday products, it quickly becomes ordinary technology and stops looking like AI.

My own path has followed this boundary as well. In middle school and university, I worked on wheeled robots, using sensors and feedback control to make them follow paths, avoid obstacles, and coordinate in formation. During graduate school, I studied computer vision while also joining the newly founded [SenseTime][entity-sensetime] as an early founding employee. I helped bring face liveness detection and industrial vision technologies into large-scale applications, including smartphones and high-speed rail. Today, general-purpose foundation models and the agents they power have pushed the boundary forward again. These systems no longer address only isolated problems. They are beginning to understand goals, use tools, and continue acting in response to feedback; my work has moved toward these products as well. Looking back, from controlling motion and understanding images to completing entire tasks, machines are taking on longer and more complete chains of work.

In this essay, then, AI refers primarily to agents driven by general-purpose foundation models, with coding agents as a representative example. Their development points toward autonomous execution of longer-horizon tasks, gradual self-evolution, and even the ability to train their own successors.

In 2025, Andrej Karpathy used “vibe coding” to describe a loose style of programming: tell AI what you want, accept the generated code, feed error messages back to it, and even forget that the code exists at all. [1] But letting go this far has one precondition: the cost of failure must be low. At the time, for serious products, we still used Cursor. Human developers led the work and remained responsible for the code; the agent assisted.

By early 2026, we saw the boundary move forward again. Karpathy later called the new way of working “agentic engineering”: developers no longer merely use AI to complete code, but organize and supervise agents as they carry out engineering tasks while retaining responsibility for review and quality. [2] The name is not important. What matters is that AI is moving from offering suggestions one at a time to sustained action within constraints.

For some software creators, natural language and documents are already becoming a new layer for expressing intent.

## Code Is Becoming an Intermediate Artifact

The history of computing is also a history of adding abstraction layers.

People first operated machines with switches and patch cables. Then came machine code, assembly, and high-level programming languages. Each new layer concealed some of the complexity below and let people work closer to their intentions.

Coding agents add a new abstraction layer to software development. They are something like a nondeterministic super-compiler: a traditional compiler translates a formally specified program into machine instructions, while a coding agent tries to unfold human intent into interfaces, data, services, and code.

The difference matters. Human language is ambiguous. Requirements are often incomplete, and constraints can conflict. An agent cannot mechanically translate a sentence into a single correct result. It has to cycle through understanding, planning, implementation, execution, and verification.

Natural language has not replaced programming languages. More precisely, natural language and documents are becoming an intent layer maintained by people, while code increasingly serves as an implementation medium generated and maintained by agents.

That makes code more like an intermediate artifact, but “intermediate” does not mean unimportant. Code still has to be correct, secure, and maintainable. It simply may not need to be written and read line by line by a person. Most programmers do not inspect the machine code emitted by a compiler, but they remain responsible for what the program does.

This changes what we need to make clear.

Documentation used to be an explanation of code. In our work, the relationship is starting to reverse: more code is being generated and verified from documents. Why the product exists, how the system should work, which boundaries cannot be crossed, and what evidence shows that it meets its requirements—these things, once treated as attachments to the code, are becoming the source of the software itself.

Then: “Talk is cheap. Show me the code.”

Now: “Code is cheap. Show me the doc.”

Not writing code by hand does not lower the demands on expression. It raises them. In the past, an ambiguous idea had time to surface and become clearer over a long implementation process. Now an agent can quickly turn it into a working, seemingly complete system. The ambiguity has not disappeared. It has merely been buried in the implementation, where it will surface later as failures and losses.

AI does not spare us the need to think. It only makes it harder to hide vague ideas behind the busyness of implementation.

## The Other Half of “Paper and Pen”

In 2025, Wang Jian compared AI to humanity’s “new paper and pen”: not thought itself, but an extension of human thought. [3] I like this metaphor.

It contains an interesting historical symmetry. In 1948, Alan Turing imagined a person equipped with paper, pencil, and eraser, following a set of rules, whose behavior could be regarded as that of a universal machine. [4] People then used paper and pencil to explain how a person might simulate a machine. Nearly eighty years later, the direction seems to have reversed. The machine is becoming the new paper and pen, helping people unfold intentions into worlds that can run.

The metaphor also reminds me of university. Aside from sleeping, I probably spent a third of my time moving back and forth between software and hardware: installing operating systems, configuring environments, learning tools, tinkering with microcontrollers, debugging wheeled robots and getting them to coordinate in formation, and building whatever demos interested me. I enjoyed the process, but I often spent more time preparing to create than creating—like a painter forever looking for paper, making pigments, and repairing brushes.

Calling AI the new paper and pen does not mean it can do everything. Paper does not write a novel. Pigment does not paint a good picture, and a camera does not make a good film. Tools lower the cost of expression, but they do not decide what is worth expressing.

Coding agents are far more active than paper and pen. They offer suggestions, execute tasks, and make choices within a limited scope. But until they can take responsibility for a work’s purpose and consequences, greater participation does not automatically make them authors.

What interests me is the other half of “new paper and pen”:

If we have new paper and pen, what kind of artists do we need?

## The Center of Software Creation Is Moving Up

The idea that programmers are artists is not new.

In 1974, Donald Knuth explained in “Computer Programming as an Art” why programming requires knowledge, skill, and creativity, and how it can produce objects of beauty. [5] In 2003, Paul Graham argued in “Hackers and Painters” that hackers and painters are both makers. For software creators, computers are a medium of expression just as paint is for a painter or concrete for an architect. [6]

AI is not making programmers artists for the first time. It is changing where the art mainly happens.

Much of a programmer’s art used to happen inside the code: whether an algorithm was ingenious, an abstraction elegant, or a system able to contain enough possibilities with as little structure as possible. This kind of beauty will not disappear because agents have arrived.

But as more implementation work moves down to agents, the center of human creation moves up. The art of software will increasingly be expressed in the work as a whole: which problems to choose, whose lives to understand, what order to establish, which possibilities to forgo, how to respond to users, and how the work should enter their lives.

Creation at the level of product and experience has always existed. The change is that when implementation no longer consumes most of our attention, these concerns can become the main work of more software creators.

Elegant code still matters, but code has never been the whole of software’s beauty. Software made by people and AI together should not be seen merely as a pile of code that runs, but as a complete work of software.

This is the change implied by “new artists.”

In existing professional terms, the role resembles a combination of a product manager and an architect: asking both what should be made and for whom, and how the system can endure and where its boundaries lie. But those titles are not enough. The author of software also needs taste, empathy, the ability to make tradeoffs, and the willingness to take responsibility for the overall result.

“Artist” here is not a more noble title, nor does it necessarily describe one person. It is the role of an author responsible for a complete work, and a team can share it.

Engineering lets the work exist reliably. Art determines why it exists and how it enters human life.

## Engineering Will Not Disappear, and Responsibility Cannot Be Outsourced

The new artist does not propose a good idea and then wait for AI to finish everything else.

Even after paper and pen became widespread, writing still required training; after cameras became widespread, photography still required judgment. Coding agents lower the cost of implementation, but they do not automatically solve architecture, security, performance, quality, or maintenance in complex systems.

The fact that I do not read code does not mean I have abandoned engineering control. The control points have changed: from inspecting implementation line by line to defining system goals, architectural principles, data boundaries, permission models, testing standards, observability, and acceptance-test results.

This does not make the work less strict. It places strictness elsewhere. Do the tests cover the real risks? Do the runtime results show that the system satisfies its constraints? Is there evidence for the agent’s explanation? If a feature runs, is it also ready to ship? AI can participate in each of these tasks, but a person must ultimately decide whether the evidence is trustworthy and bear the consequences of being wrong.

Some fields—including infrastructure, safety-critical systems, and low-level software—will continue to require people to work deep inside the code. They may need the small number of people who truly understand the lower layers more than ever. A new abstraction layer never erases the layers below it. High-level languages did not eliminate assembly, and cloud computing did not eliminate operating systems. A new layer simply lets more creators avoid traversing every lower layer each time they make something.

My decision not to write or read code is a bounded practice, not a rule for everyone. Its value is not that it proves code is obsolete. It helps me see which parts of the work still cannot be handed off when code is no longer the only interface through which people control software.

The first is judgment. The second is responsibility.

More powerful tools may also produce mediocrity at a larger scale. When implementation becomes cheaper, we may first get more repetitive, crude software that meets no real need. Paper and pen do not automatically produce literature. Coding agents will not automatically produce a software renaissance.

AI does not eliminate scarcity. It moves it.

Software production used to be constrained mainly by programming skill, engineering resources, and implementation time. As those constraints ease, judgment about which problems matter, product intuition, systems understanding, taste, an understanding of people, and the willingness to take responsibility for consequences become relatively scarcer.

As “how to make it” gets cheaper, “what to make” gets more expensive.

## From Authors of Code to Authors of Software

Bret Taylor cited an observation by Arya Asemanfar: AI can draft for you, but you are still the author. [7] Addy Osmani has described the developer’s new role as architect and editor-in-chief. [8]

An author does not have to perform every action that produces a work. Architects do not lay every brick, and directors do not operate every camera on a film set. But they must know what the work should become, judge whether it succeeds, and take responsibility for the work as a whole.

The same change is happening in software.

We used to identify the author of software by asking who wrote the code. In the future, authorship may depend increasingly on a different set of questions: Who defined the problem? Who established the constraints? Who made the critical tradeoffs? Who decided that the work was complete? And who bears responsibility for what happens after it enters the world?

This may also change the economic unit of software. In the past, a need usually had to be shared by enough people to justify building software for it. When implementation costs fall far enough, the particular workflow of a team, a family, or even one person may warrant software of its own. Not everyone has to become a programmer, but more people can become authors of software.

AI pushes more implementation work downward while moving human control points and the center of creation up one abstraction layer. Programmers will no longer be merely authors of code. Increasingly, they will become authors of complete works of software—the “new artists” I mean.

The new paper and pen have arrived. But a new renaissance will not follow automatically. It depends not on how much code agents can generate, but on whether we have the judgment—and the willingness to take responsibility—to answer a question harder than “how can it be made?”

What is worth creating, and how do we want people to experience it?

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
