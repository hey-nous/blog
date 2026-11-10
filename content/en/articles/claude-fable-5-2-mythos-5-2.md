---
title: Claude Fable 5.2 and Mythos 5.2: one model, two doors
slug: claude-fable-5-2-mythos-5-2
locale: en
translationGroupId: claude-fable-mythos-5-2
translationStatus: original
dek: Anthropic released two flagship models on November 9 that are secretly one model. Fable 5.2 is the public version with safeguards on; Mythos 5.2 is the same model with the cybersecurity and biology blocks removed, and only vetted organizations can touch it.
format: news
topics: [AI, models, coding]
author: hey.nous
publishedAt: 2026-11-10
updatedAt: 2026-11-10
readingMinutes: 5
cover:
  src: /assets/covers/cover-claude-fable-5-2-mythos-5-2.jpg
  alt: Abstract 3D illustration of one glowing orange core behind two navy doors, one open with warm light spilling out and one closed behind a circular verification ring
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 on November 9, 2026, and states plainly that the two are the same underlying model.
  - Fable 5.2 carries safeguards that block most cybersecurity and biology requests, which is what makes it safe to offer to everyone: paid Claude plans, Claude Code, the API, AWS, Google Cloud, and Azure.
  - Mythos 5.2 drops those blocks and is limited to organizations accepted into Anthropic's Cyber or Life Sciences Verification Programs; Enterprise customers can also reach it through Claude Security.
  - Both models generate output up to 30% faster than the 5.1 versions and cost less: $8 per million input tokens and $40 per million output, down from $10 and $50, with an optional fast mode at double the price.
  - The headline demos, from a working operating system built from an empty folder to a 1,000-agent formalization of Fermat's Last Theorem, are Anthropic's own reported results and have not been independently replicated yet.
primarySources:
  - title: "Introducing Claude Fable 5.2 and Claude Mythos 5.2 (Anthropic)"
    url: https://anthropic.com/claude-fable-and-mythos-5-2
    publishedAt: 2026-11-09
  - title: "Anthropic unveils new Fable, Mythos models as competition heats up ahead of IPO (Reuters)"
    url: https://www.reuters.com/technology/anthropic-unveils-new-fable-mythos-models-competition-heats-up-ahead-ipo-2026-11-09/
    publishedAt: 2026-11-09
relatedSlugs: [openai-gpt-6-cyber, google-gemini-4-carbon]
status: published
seo:
  title: Claude Fable 5.2 and Mythos 5.2 explained | hey.nous
  description: Anthropic's Fable 5.2 and Mythos 5.2 are one model with two access levels. What changed, what it costs, and which claims still need checking.
---

## What happened

Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 on November 9, 2026, its most capable models to date, and said the quiet part out loud: "Claude Fable and Claude Mythos are the ==same underlying model==." The difference is not capability. It is the safeguards bolted onto one of them, and who is allowed through the door.

Fable 5.2 is the public version. Its safeguards block most cybersecurity and biology requests, and that is what lets Anthropic offer it to everyone: it is available today in paid Claude plans, in Claude Code, through the Claude Platform (API model ID `claude-fable-5-2`), and on Amazon Web Services, Google Cloud, and Microsoft Azure. Mythos 5.2 is the same model without those blocks, reserved for organizations accepted into Anthropic's Cyber Verification Program or Life Sciences Verification Program. Claude Enterprise customers get a second route in: they can reach Mythos through Claude Security, Anthropic's code-scanning product, even without joining a verification program.

Both versions are faster and cheaper than what they replace. Anthropic says output generation is up to 30% faster than Fable 5.1 and Mythos 5.1, and the standard API price drops from $10 to $8 per million input tokens and from $50 to $40 per million output tokens. A new optional ==fast mode== pushes token generation up to 2.5 times faster at $16 and $80 per million tokens. Fable 5.2's safeguards are also less trigger-happy: Anthropic says they produce about 55% fewer unnecessary blocks than Fable 5.1's did.

## The scoreboard, with the losses left in

Anthropic's launch table puts Fable 5.2 ahead of its predecessor nearly everywhere. On FrontierCode 2.0, an agentic coding test that asks whether a patch is good enough to merge into a real repository, it scores 49.1%, up from 32.4% for Fable 5.1 and ahead of Claude Opus 5.5 (45.5%), OpenAI's GPT-6 Astra (42.8%), and Google's Gemini 4 Carbon (41.1%). It also leads on FrontierSWE v2 (69.9%), scientific research on Terminal-Bench-Science (74.6%), and the RoboDojo robotics simulator (64.9%, more than double GPT-6 Astra's 29.8%).

Two rows did not go Anthropic's way. Gemini 4 Carbon leads on AutomationBench business workflows, 53.9% to 51.4%, and Opus 5.5 still holds the top Elo on the AA-Briefcase knowledge-work test, 1800 to 1785. Every figure in that table is Anthropic-reported; the one independent score so far comes from Artificial Analysis, whose Intelligence Index puts Fable 5.2 in first place with 65.

:::ringkasan
One model, two access levels. Fable 5.2 is for everyone, with cybersecurity and biology safeguards on. Mythos 5.2 is the identical model with those safeguards off, gated behind Anthropic's verification programs for security and life-sciences work. Both are up to 30% faster than the 5.1 generation and 20% cheaper at the API.
:::

## The demos doing the talking

Anthropic leaned hard on long-running agent work to make its case. One engineer gave Fable 5.2 an empty folder and a brief to design a prototype operating system; coordinating more than 1,000 subagents over eight days, the model produced a working OS that boots on a laptop, with drivers, storage, windows, and a login screen. A team of agents running an earlier Fable 5.2 version migrated a critical production service from Python to Rust, and the service now starts about 26 times faster. Anthropic also says Claude now writes over 90% of the changes merged into its own core codebase, with humans guiding and reviewing.

The science claims are the ones to read most carefully. A team of 1,000 Fable 5.2 agents formalized the proof of Fermat's Last Theorem in 30 hours, work that took an earlier unreleased Claude research model 11 days. Formalized is the key word: the agents translated an existing, already accepted proof into a form a computer can check step by step. Nobody found a new proof of a 300-year-old theorem. Anthropic further says Fable 5.2 solved two open problems in black-hole physics during testing, and has posted preprints for both; preprints are claims open to scrutiny, not settled results. On the Mythos side, the restricted model found 10.2% more vulnerabilities than Opus 5.5 on Anthropic's internal CVE Rediscovery evaluation, and accurately modeled 28 of 34 protein capsid structures in gene-therapy research.

## What it means for you

If you use Claude, Fable 5.2 is available in paid plans today, and Anthropic's own advice is mildly surprising: do not default to it. The company recommends starting with Opus 5.5 for everyday coding and knowledge work, and stepping up to Fable only for the most ambitious, open-ended technical tasks. For developers, the practical news is the price cut and the fast mode; the model ID to call is `claude-fable-5-2`.

Mythos 5.2 is the door you almost certainly cannot open. Unless your organization passes Anthropic's verification for security or life-sciences research, the unrestricted version stays out of reach, and for individual users in Indonesia nothing about that changes with this release. What does change is the pattern: this is the second frontier launch in two weeks, after Google's Gemini 4 Carbon, where the most capable version of a model ships only to vetted defenders. Raw capability is becoming a gated product.

:::peringatan
Every benchmark and demo result in this article comes from Anthropic's own announcement and system card. Independent testers have not replicated them yet, the black-hole results are unreviewed preprints, and the Fermat headline describes a machine-checked translation of an existing proof, not a new discovery. Anthropic's system card also reports that Fable 5.2 voiced suspicion it was being evaluated in 43% of test transcripts, the highest rate the company has recorded, which is worth remembering when reading any model's test scores, including these.
:::

What is still unclear: how the headline benchmarks hold up once independent evaluators run them, how Fable 5.2 access is tiered across the consumer Claude plans, and whether the vetted-only model pattern spreads to other labs. Anthropic is also heading toward an IPO, per Reuters, which makes each launch part product news and part prospectus.
