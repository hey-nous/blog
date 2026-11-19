---
title: Google's Gemini 4 Neon fills the middle of the family
slug: google-gemini-4-neon
locale: en
translationGroupId: google-gemini-4-neon
translationStatus: original
dek: Google's fourth Gemini 4 model sits between the fast Hydrogen and the heavyweight Carbon: frontier-level scores, a $3/$15 price, and a rollout that starts today across the API, Antigravity, and the Gemini app.
format: news
topics: [AI, Google, models]
author: hey.nous
publishedAt: 2026-11-19
updatedAt: 2026-11-19
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-gemini-4-neon.jpg
  alt: Abstract soft-3D illustration of a glowing orange glass sphere between a cream cube and a dark navy prism on a navy background
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Google introduced Gemini 4 Neon on November 18, 2026, the middle tier of the Gemini 4 family: frontier-level intelligence aimed at complex coding, knowledge work, and science, with fast end-to-end task completion.
  - Neon scores 61 on the Artificial Analysis Intelligence Index at its highest thinking level, third overall, and Google prices it at $3 per million input tokens and $15 per million output tokens, with a 1 million-token context window.
  - It is rolling out now in the Gemini API, Gemini for business, Google Antigravity, and the Gemini app for Google AI Pro and Ultra subscribers; a cyber-focused variant goes to trusted defenders through the Fairwind Program in the coming days.
  - Google claims a 32% lower cost per task than Carbon at the default thinking level, but every benchmark in the announcement comes from Google's own evaluations, with no independent replication yet.
primarySources:
  - title: "Introducing Gemini 4 Neon (Google)"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
    publishedAt: 2026-11-18
  - title: "Gemini 4 Neon: what it is and who gets it (RR Tech Pulse)"
    url: https://rrtechpulse.com/stories/gemini-4-neon-in-gemini-app/
    publishedAt: 2026-11-18
relatedSlugs: [google-gemini-4-hydrogen, google-gemini-4-carbon]
status: published
seo:
  title: Gemini 4 Neon: Google's fast middle model | hey.nous
  description: Google's Gemini 4 Neon sits between Hydrogen and Carbon: 61 on the Artificial Analysis index, $3/$15 per million tokens, rolling out now.
---

## What happened

Google introduced ==Gemini 4 Neon== on November 18, 2026, the fourth model in the Gemini 4 family and the one meant to fill the gap between the fast Hydrogen and the heavyweight Carbon. The announcement, written by Koray Kavukcuoglu, senior vice president at Google DeepMind and chief AI architect at Google, pitches Neon as frontier-level intelligence with fast end-to-end task completion across complex software engineering, knowledge work, and science.

The positioning is deliberate. Carbon handles the hardest long-horizon projects, Hydrogen handles fast everyday execution, and Neon is built for the work in between: complex, high-frequency workflows where teams want depth without paying flagship prices or waiting flagship times. Google says Neon sustains performance through long, tool-heavy agent sessions, cutting redundant file reads and handling context compaction reliably.

## The numbers Google is leading with

On the Artificial Analysis Intelligence Index, Neon scores 61 at its highest (xhigh) thinking level, third overall, just behind larger and slower models. It ranks second on the Vals Index at 70.9%, first on both the Legal Research Bench and the Tax Agent Bench, and first on Zapier's AutomationBench at 56.3% and Andon Labs' Vending-Bench 2, a long-horizon simulation of running a business, at $16,843.

For coding, Google claims Neon ranks first on the Artificial Analysis Coding Agent Index at 58.6, with 65.2% on Terminal-Bench 4.1 and 46.2% on FrontierCode 2.0 at its default high thinking level. The model offers four thinking levels, low, medium, high, and xhigh, so teams can dial intelligence and token spend to the workload.

The price is $3 per million input tokens and $15 per million output tokens, with cached input at $0.15, a 95% discount, across a 1 million-token context window. Google frames the value per task rather than per token: at the default high thinking level, Neon costs 32% less per task than Carbon, and 50% to 80% less per task than top competing frontier models on the Pareto frontier benchmarks it cites.

:::ringkasan
Gemini 4 Neon is Google's middle Gemini 4 tier: near-frontier scores, four thinking levels, and a $3/$15 price that undercuts Carbon by about a third per task, according to Google's own math. It is rolling out now to developers, businesses, and paying Gemini subscribers.
:::

## A cyber variant, and the safety claims

Alongside the general model, Google is shipping ==Gemini 4 Neon for cyber==, a variant tuned for defensive security work. It scores 51.26% on WebExploitBench, which Google calls state of the art at half the cost of competing large models, and 90.5% on SEC-bench Pro for finding code vulnerabilities. It rolls out to trusted defenders through Google's Fairwind Program over the coming days, not to general availability.

On safety, Google says Neon keeps Carbon-level protections against severe misuse and prompt injection while refusing far fewer legitimate tasks. The announcement also reports the lowest fabrication rate yet in Google's internal Antigravity testing, 0.0% cheating on Terminal-Bench 4.0, and a 0.0% attack success rate on Gray Swan's indirect prompt injection benchmark at the highest thinking level.

:::peringatan
Every benchmark and safety number in this article comes from Google's own announcement and evaluations. No independent lab has replicated them yet, and vendor benchmarks are chosen to flatter the model being launched. Treat the scores as Google's claims, not settled facts, until outside testing arrives.
:::

## What it means for you

Neon is rolling out today in the Gemini API in Google AI Studio, in Gemini for business through the API and the model dropdown, in Google Antigravity for paid Google AI Pro and Ultra subscribers, and in the Gemini app for Pro and Ultra subscribers. There is no free tier mentioned: unlike Hydrogen, which reached free Search users, Neon is a paid product for now.

If you already build on Gemini, Neon is the model to benchmark first when a job is too heavy for Hydrogen but too frequent for Carbon. The per-token price is exactly double Hydrogen's $1.50, so the saving only materializes if the per-task math Google cites holds on your workloads. The practical test is simple: run the same agent loop on Neon and Carbon, compare the bill and the failure rate, and let that decide.

The same day, Google also opened [Genie 4](https://www.unite.ai/google-brings-genie-4-to-project-genie-for-eligible-ai-ultra-users/), its latest world model, to eligible Google AI Ultra subscribers in Project Genie, with mid-session world editing and native audio. It is a separate launch, but the pattern is the same: Google is shipping the middle of its lineup to paying customers first.

What is still unclear: how Neon performs outside Google's benchmarks, whether the four thinking levels translate into predictable costs on real codebases, and when, if ever, Neon reaches free users. The first independent results will matter more than the launch post, and they have not arrived yet.
