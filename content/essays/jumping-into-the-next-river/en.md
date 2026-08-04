---
id: jumping-into-the-next-river
type: essay
locale: en
title: Jumping into the Next River
description: Why I left SenseTime in June 2023, after nearly ten years, to start a company before I knew what I would build.
slug: jumping-into-the-next-river
published_at: 2023-12-31
translation_status: author-reviewed
source_locale: zh-Hans
topics:
  - Entrepreneurship
  - Artificial Intelligence
  - SenseTime
  - Computer Vision
  - Intelligent Notes
---

In June 2023, I left [SenseTime][entity-sensetime] after working there for nearly ten years.

When I left, I had no validated product, no complete business plan, and not even a clear idea of exactly what I was going to build.

But I knew it was time for me to jump into the next river.

It was not the first time I had changed rivers, but it was the first time doing so required me to leave a company.

## A Choice I Keep Making

I went from a rural primary school to a middle school in the county seat, then to [Nanjing University][entity-nanjingUniversity] for my undergraduate degree and [Tsinghua University][entity-tsinghuaUniversity] for graduate school. While at Tsinghua, I joined SenseTime when it was just getting started. At SenseTime, I first founded the liveness detection team and later the industrial vision team.

Looking back, a change like this seems to happen every few years.

These changes were not parts of a life plan drawn up in advance. Nor did they happen because the work I had been doing had lost its meaning. It was simply that after years of effort, both the field and I had gradually matured. The work was not necessarily finished, but it no longer forced me to push beyond my own limits.

For many people, that would be an ideal state. For me, it creates unease. I do not like a life whose end I can see from where I stand. Every so often, I need to put myself inside a problem I do not know how to solve—sometimes one I do not even know how to begin.

The “river” here is not a company. Changing rivers does not necessarily mean leaving a job. A river is a field I have to learn from scratch, a difficult thing I do not yet know how to make work. During my nearly ten years at SenseTime, I jumped into two different rivers.

But I am not someone who pursues change for its own sake. There is another force in me that pulls almost in the opposite direction: a sense of responsibility.

I hate leaving things half done. Once I decide to do something, I want to do it properly. One force makes me search for the next river; the other keeps me in the old one, trying to finish what I started.

My departure this year was the result of a long struggle between these two forces.

## Taking Algorithms into the Real World

I joined SenseTime as a member of the research department, but what interested me most was always applications. I wanted to know not only whether an algorithm worked on an experimental dataset, but whether it could enter the real world and solve a concrete problem.

Liveness detection was a core part of SenseTime's first major deployment. Before then, we already had some impressive face-recognition demos. But when we faced a genuinely large-scale application, we discovered that many production problems remained unsolved, especially attacks against the online system.

The system handled more than a million visits a day. At peak times, it faced hundreds of thousands of attack attempts in a single day. The technology still had to improve, while the service already online had to keep running. Much of the work became hand-to-hand combat. We often left the office at three or four in the morning, and sometimes stayed all night.

A familiar pattern was that we would fight for a day and a night, fix every attack we knew about, and go home to sleep. Soon after we fell asleep, the phone would ring again: the online system had been broken once more.

It was during this process that we helped push forward SenseTime's end-to-end model architecture for face recognition. Before then, many deep-learning algorithms were used only in isolated parts of the system, with several stages connected in sequence. But against constantly changing attacks, manually assembled methods could not iterate fast enough. The only way forward we could see was to let a single end-to-end deep-learning model learn directly from data. At the time, we called it the “unified model.”

This project taught me for the first time what it means for an algorithm to be real. Working in a demo is not enough. A technology becomes truly usable only after it survives large-scale traffic, continuous attacks, and all kinds of unexpected conditions.

We later moved into smartphones. Before each launch, phone makers would organize tests involving hundreds of people, while competitors and users kept discovering new problems. This forced us to build what was, as far as we knew, one of the largest testing teams at any AI algorithm company at the time, in an attempt to exhaust every possibility.

One backlighting bug could be reproduced only in a particular men's restroom in one of SenseTime's offices. Another problem, which we called the “half-lit face,” appeared only from a particular angle beneath a certain tree. To make a product work reliably in the daily lives of hundreds of millions of people, we did an enormous amount of work like this.

In the end, we made identity authentication on smartphones a market leader.

This was the first river I entered at SenseTime. Liveness detection began as a research demo, passed through several rounds of large-scale deployment, and eventually became a fairly mature field. By 2019, many problems that had once required risky exploration could be solved with accumulated experience. I had not finished everything, but I knew I had entered a comfort zone again.

So I began to grow restless.

## Changing Rivers Without Leaving SenseTime

In 2019, I did not leave SenseTime. I chose to move within the same company, from identity authentication to industrial vision.

After extensive research and many discussions with company leaders and the business team, we chose intelligent inspection of the C4 overhead contact system on high-speed railways as our first industrial vision project.

The presales team and I visited many railway inspection centers and railway bureaus. The place that left the deepest impression on me was the Xuzhou inspection center. It had just rained when we visited. The center was in a fairly remote location, and we made our way through a muddy road, sinking into it with every step.

Inside were rows and rows of computers. Inspectors spent much of every day looking through images for possible faults in railway overhead contact systems. Almost all of them had dark circles under their eyes. After finding a fault, they still had to travel along thousands of kilometers of railway and deal with each problem in turn. Sometimes it was only a loose screw or nut, but they still had to reach the site. Whether in bitter cold or intense heat, the repair could not wait.

The need was painfully clear. At the very least, we should help them with the most time-consuming part: looking at images.

Only after we started did we discover how much harder the problem was than we had imagined. An overhead contact system contains more than a hundred types of components and over a thousand types of defects. Even those numbers emerged only after we repeatedly worked through them with frontline colleagues. Much inspection work had long depended on experience, while documents and historical data were scattered across different places. We had to collect the material from scratch, work beside the people on the front line, and understand every fault item one by one. The process took nearly two years.

The greater challenge was the small-sample problem. Faults on high-speed rail lines are rare by nature. Some might not occur even once in a year, but can have serious consequences when they do. We could not wait until we had gathered enough samples. We had to redesign our methods around the conditions of the real world.

Eventually, the project worked and was deployed at scale.

Industrial vision was the second river I entered at SenseTime. I did not change companies, but almost everything familiar changed: the problems, data, customers, evaluation criteria, and way of working. I became a beginner again, then worked with the team to accomplish something we had not previously known how to do.

This is why I say a river is not a company. What attracts me is not leaving a place, but entering a harder problem.

## The Year I Did Not Change Rivers

After SenseTime went public, it began to face new financial and resource pressures. At the same time, the previous wave of computer vision was entering maturity, while the next wave had not yet clearly appeared. Many things were constrained by resources, the market, or the limits of the technology, and could no longer advance as quickly as before.

Throughout 2022, I was in a somewhat dispirited—or perhaps passive—state. I started working ordinary hours.

There is nothing wrong with that sentence. Working regular hours is a normal life for many people. But I had always treated my work as if I were building a startup. When I suddenly entered this state, I felt deeply discouraged.

On the surface, life was much more comfortable than before. I no longer woke each day to a new problem that had to be solved, and I no longer stayed up all night so often because of an online failure. Yet that comfort was exactly what troubled me: I could begin to imagine what my life would look like several years later if nothing changed.

I did not leave immediately. What kept me there was responsibility.

We had made high-speed railway inspection work, but we had not succeeded with quality inspection in automobile factories, and we had not finished the intelligent industrial robot arm. I wanted to keep working on these things. I could not easily accept founding a team, choosing a direction, and then leaving at its most difficult moment.

One force told me to look for the next river. The other told me that the work in front of me was not finished.

In 2022, the second force was stronger.

## I Saw the Next River

ChatGPT appeared at the end of last year. GPT-4 arrived in the first half of this year. The old balance was broken.

I had a powerful feeling at the time: computer vision's base had been raided.

The future would not be made of separate models for text, images, and speech. Computer vision would not disappear, but it would become one part of how general models understand the world. We had treated vision as a complete technical center. Now a larger age of general intelligence was emerging.

This was not another technical upgrade within computer vision. The main course of technological progress itself had changed.

I saw another river whose currents I did not yet understand.

In the past, I had been able to change rivers without leaving SenseTime. Moving from identity authentication to industrial vision in 2019 was one such choice. This time, however, the next river did not lie along the extension of my existing work. I wanted to enter general intelligence and the new applications it would create.

My role and responsibilities were still in industrial vision. If I stayed, I should devote myself fully to doing that work well. I should not carry my existing responsibilities while preparing for my own next destination on the side.

To truly jump into the next river, I first had to leave my old role.

By the first half of this year, I had become increasingly unable to sit still. I did not know what products the new technology would ultimately create, or what role I could play in them. But I knew that if I waited until I had thought everything through, I might miss the years when I most needed to begin learning.

Things that truly matter rarely reach a moment when one can declare them “completely finished.” If responsibility means waiting until every problem is over, a person may never make a new choice.

I gradually realized that responsibility does not only mean staying. Staying is also a choice, and its consequences must also be borne. A sense of responsibility cannot become a reason to postpone a decision forever.

So in June this year, I left SenseTime.

## Why I Left Without an Answer

Before leaving, I did not secretly prepare a startup outside work, nor did I plan to take SenseTime's existing business and build a company around it.

If I was still employed by a company, responsible for delivering its work and using the resources it provided, while privately thinking about how to prepare for my next destination, I would feel that I was not being honest with my current work.

This meant I truly was not ready when I resigned.

I was unprepared to start a company not because I did not take entrepreneurship seriously, but because, before I left, I was still taking my previous work seriously.

I could only leave first, then search for the answer.

Knowing how to swim does not mean knowing every river. Nor can someone stand on the bank until they fully understand the current before jumping in. Some knowledge can be gained only in the water, and some directions become visible only after we begin moving.

This time, changing rivers happened to mean leaving my job. But what moved me was not a desire to resign. It was the appearance of the next river.

## Choosing Applications

After ChatGPT appeared, I discussed a question with friends: if AGI arrives, will intelligence eventually be concentrated in the hands of a few platforms, or will it be shared more widely?

My judgment was that it would inevitably spread.

I cannot prove this rigorously. My intuition is simply that the universe itself is not a centralized system. The real world consists of countless people, devices, environments, and local problems. If intelligence is to truly enter this world, it too must exist in countless different forms. The training of foundation models may be concentrated in a small number of companies, but applications of intelligence will not belong only to a few platforms.

That is why I do not want to build foundation models. I would rather build applications that use this new intelligence to respond to one concrete need after another.

This choice also comes from my own life.

I grew up in the countryside. From primary school through middle school, I spent many holidays and spare hours helping with farm work at home. I sowed seed, applied fertilizer and pesticides, drove tractors, and raised animals. During school holidays, I considered myself a farmer in every practical sense.

I liked the sense of accomplishment this work brought. Whether the crops grew well and whether the animals were raised well were direct and visible. If you did the work a little better, a family's life became a little better.

At university, I took many part-time jobs and ran a summer tutoring program with several classmates. We recruited students, collected fees, and taught the classes ourselves. That summer, each of us involved earned enough to cover the following year's living expenses.

In graduate school, I worked as a private tutor. Later, when SenseTime was just getting started, its office was still a guest room in the Wenjin Hotel near Tsinghua's south gate. I joined as an early founding employee.

On the surface, these things have little in common. But they gave me a sense of accomplishment in the same way: I solved a real problem and saw something change because I had taken part.

So when the new age of general intelligence appeared, I instinctively chose the application side again. My concern is not how to prove that a technology is more powerful, but what it can eventually do for a particular person.

## After I Jumped In

Entering the next river did not mean that I immediately knew where to swim.

In the first few months after leaving SenseTime, I still instinctively looked for opportunities in the place I knew best. A friend and I tried several image-related products. After all, nearly ten years of my work had been in computer vision. Starting there seemed the most natural choice.

But after working on them for a while, I increasingly felt that the direction was wrong. The problem was not necessarily the products themselves. It was that we were still starting from what we knew how to do, rather than from what users truly needed.

After carrying a hammer for ten years, even in a different room, everything can still look like a nail.

I realized that entering a new field does not mean moving somewhere else and continuing to apply the methods that worked before. To truly begin again, one has to temporarily put aside the answers one knows best.

So I asked myself a question: if I ignored the technical experience I had accumulated over the previous ten years, what AI product would I most want for myself?

My answer was notes.

## The Product I Wanted Most

Since middle school, I have followed a rule: “Never read without making marks and notes.” To me, notes have never been just a place to store material. They are an extension of memory and a part of thinking.

People often call notes a “second brain,” but this second brain is not actually intelligent.

We put things into it, but still have to organize them, find them, connect them, and figure out how to retrieve them ourselves. It is more like an external hard drive than another brain.

This generation of large models made me believe for the first time that this could change fundamentally. Notes in the future may not only preserve what a person has written. They may understand it, find connections within it, help us remember when needed, and even take part in our thinking.

What I want to build is not note-taking software with a few AI features added. It is a genuinely intelligent second brain.

General intelligence is the next river I jumped into. Intelligent notes are the first direction I decided to swim toward once inside.

## Not Yet on the Other Bank

Before this, I had done many things that resembled entrepreneurship. Running the tutoring program at university was an informal startup. Joining SenseTime at its beginning meant participating in a startup. Founding the liveness detection and industrial vision teams inside SenseTime was also much like starting companies within a company.

But this time was different. In June this year, for the first time, I left a company, placed myself fully in the market, and began working full-time on a startup in the true sense.

Today is December 31, 2023. Half a year has passed since I left SenseTime.

I still do not have answers to every question, nor have I reached any opposite bank that could be called success. I am learning many things I was not good at before, including how to build a product, how to understand a market, and how to make the two fit.

Many people might find this state painful. To me, it carries a long-missed sense of familiarity, because I am once again in a place where I do not know the answers.

This is the first essay on my personal blog. I am writing it not because this journey is over, but because I want to record, at the moment it truly begins, why I set out. In the future, I will continue to write here about technology, products, people, and the things I am building.

I do not know where this river will ultimately lead.

But looking back, several important changes in my life began with the same choice: after investing enough time and finding myself gradually entering a comfort zone, I started looking for the next river.

In June this year, I made that choice again.

I am still in the water.
