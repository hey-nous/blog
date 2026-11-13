---
title: Google's Gemini 4 Hydrogen is the fast model for everyone
slug: google-gemini-4-hydrogen
locale: en
translationGroupId: google-gemini-4-hydrogen
translationStatus: original
dek: Google's third Gemini 4 model is built for speed: it finishes tasks 2.5 times faster than Gemini 3.8 Flash, costs $1.50 per million input tokens, and is rolling out to every Google surface, including free Search users. What was announced, what the numbers actually say, and what is still unproven.
format: news
topics: [AI, Google, models]
author: hey.nous
publishedAt: 2026-11-13
updatedAt: 2026-11-13
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-gemini-4-hydrogen.jpg
  alt: Abstract soft-3D illustration of a glowing orange sphere with motion trails racing across a deep navy background, surrounded by floating cream and orange geometric fragments
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Google announced Gemini 4 Hydrogen on November 12, 2026, the third Gemini 4 model after Argon and Carbon, built for fast everyday coding and agentic work.
  - Google says Hydrogen finishes tasks 2.5 times faster than Gemini 3.8 Flash and scores 57% on Terminal-Bench 4.1 against 18.2%, with flat pricing of $1.50 per million input tokens and $7.50 per million output tokens.
  - It is rolling out to all tiers of Google AI Studio, the Gemini API, the Gemini app, and Google Search for all users globally, the first Gemini 4 model free users get.
  - Google also launched Orchestrator in Antigravity, which switches between Carbon and Hydrogen in one session and, on Terminal-Bench 4.0, reached near-Carbon success while using 24% less quota and finishing 19% faster.
  - Every headline benchmark comes from Google's own announcement, with no independent replication yet.
primarySources:
  - title: "Introducing Gemini 4 Hydrogen (Google)"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
    publishedAt: 2026-11-12
  - title: "Google Search gets a major upgrade with Gemini 4 Hydrogen (Google)"
    url: https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/
    publishedAt: 2026-11-12
relatedSlugs: [google-gemini-4-carbon]
status: published
seo:
  title: Gemini 4 Hydrogen: Google's fast everyday model | hey.nous
  description: Google's Gemini 4 Hydrogen is built for speed: 2.5x faster than 3.8 Flash, $1.50 per million input tokens, and rolling out to everyone including free Search users.
---

## What happened

Google introduced ==Gemini 4 Hydrogen== on November 12, 2026, the third model in its Gemini 4 family after Argon and Carbon, and the first one aimed at everyone rather than at specialists.

The announcement, written by Koray Kavukcuoglu, Google DeepMind's senior vice president and Google's chief AI architect, positions Hydrogen as the execution model: fast and cheap enough for everyday coding and agentic workflows, while Carbon and Argon handle the deep, long-horizon reasoning. Google calls it "our daily driver for agentic workflows," and the pitch is that teams no longer need to spend frontier-model prices on routine work.

The headline numbers are all Google's own. Hydrogen finishes tasks 2.5 times faster than ==Gemini 3.8 Flash==, the model it succeeds, at its default high thinking setting, and more than triples its Terminal-Bench 4.1 score, 57% against 18.2%. Google also says it cuts fabricated claims by more than five times. On the Artificial Analysis Intelligence Index it scores 51 at its default high thinking level, one point ahead of Argon at 50, and reaches 54 at its highest xhigh setting. Hydrogen offers four thinking levels, low, medium, high as the default, and a new xhigh tier, so users pick how much reasoning a task gets.

## The price, and where it runs

Hydrogen costs $1.50 per million input tokens and $7.50 per million output tokens, flat across its entire 1 million-token context window. There is no long-context surcharge, which is the part that matters for budgeting: a long prompt costs the same per token as a short one.

Availability is the widest of any Gemini 4 model so far. Google says it is rolling out globally to all tiers of Google AI Studio, the Gemini API, Gemini for business, the Gemini app, Google Search, and Google Antigravity for paid Google AI Pro and Ultra subscribers. It is also in Android Studio and Gemini in Google Sheets for eligible subscribers. For consumers, the Search rollout is the notable part: Robby Stein, Google's vice president of product for Search, calls Hydrogen "the biggest model upgrade to Search yet," and it is available to all Search users globally, not just subscribers. Google says it brings better understanding of multi-part questions and typos, broader query fan-out to more links, and more visual, scannable responses.

## Orchestrator: two models, one session

Alongside Hydrogen, Google launched ==Orchestrator== inside Antigravity, its agentic coding environment. Instead of running one model for a whole session, Orchestrator switches between models as the work changes: Carbon plans and coordinates, Hydrogen executes and verifies, all inside the same session. On Terminal-Bench 4.0, Google says Orchestrator reached near-Carbon task success rates while using 24% less quota and finishing 19% faster. Orchestrator is rolling out to Google AI Ultra subscribers.

The idea is not new, routing easy work to a cheap model and hard work to a strong one, but this is the first time Google has shipped it as a built-in feature of its own coding tool rather than leaving the routing to the user.

:::ringkasan
Gemini 4 Hydrogen is Google's fast, cheap Gemini 4 tier: 2.5 times faster than 3.8 Flash, $1.50 per million input tokens, and available everywhere from the API to free Google Search. Paired with Orchestrator in Antigravity, it is meant to do the routine execution while Carbon handles the hard thinking. The open question is how the vendor-reported numbers hold up once independent testers get their hands on it.
:::

## What it means for you

If you build with Google's models, Hydrogen is the first Gemini 4 tier you can actually use without an application or a waitlist. It is the upgrade path from 3.8 Flash, and for high-volume agentic work, the flat $1.50 and $7.50 pricing is easy to budget against. Developers can try it today in AI Studio and the Gemini API, including on the free tier.

If you are a regular user, the change arrives quietly: Search answers and the Gemini app get faster and more visual, with no setting to change. Free users get a Gemini 4 model for the first time, though Google has not said whether Search will show which model answered a given query.

For teams running coding agents, the practical test is Orchestrator, not Hydrogen alone. The promised 24% quota saving only materializes if the routing actually picks the right model at the right moment, and that is the part no announcement can prove.

:::peringatan
Treat every benchmark in this story as a vendor claim until independent testers confirm it. The Intelligence Index score, the Terminal-Bench results, and the 2.5x speed figure all come from Google's own announcement and its own evaluations. Google also says Hydrogen is up to 2.3 times more resilient to indirect prompt injection and cuts agentic overreach by up to 81%, but those safety figures are from its internal evaluations too, and the model card warns of hallucinations and occasional slowness or timeouts.
:::

What is still unclear: how Hydrogen performs outside Google's benchmarks, whether Orchestrator's routing holds up on real codebases rather than Terminal-Bench, and how the model behaves at the xhigh thinking level, where token use climbs. The first independent results will matter more than this launch post, and they have not arrived yet.
