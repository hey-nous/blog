---
title: Google's Gemini 4 Carbon hunts security flaws, but you can't use it yet
slug: google-gemini-4-carbon
locale: en
translationGroupId: google-gemini-4-carbon
translationStatus: original
dek: Google's newest frontier model tops the updated Artificial Analysis index and leads three cybersecurity benchmarks, yet at launch it goes only to a vetted group of cyber defenders. What was announced, what the numbers actually prove, and what is still unproven.
format: news
topics: [AI, Google, models]
author: hey.nous
publishedAt: 2026-10-30
updatedAt: 2026-10-30
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-gemini-4-carbon.jpg
  alt: Abstract 3D illustration of a faceted dark navy crystal shield surrounded by floating orange and cream geometric fragments above a warm cream surface
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Google announced Gemini 4 Carbon on October 28, 2026, its second Gemini 4 model in two weeks, built for long-running engineering work and cybersecurity defense.
  - It ranks first on the updated Artificial Analysis Intelligence Index v5.0 with a score of 59, and leads three cybersecurity benchmarks: 88.2% on SEC-bench Pro, 54.8% on ExploitGym, and 71.0% on CWE-bench.
  - At launch, access goes only to a subset of cyber defenders through Google's Fairwind Program, with a gradual expansion to trusted partners and no public release date yet.
  - Introductory API pricing matches Gemini 4 Argon at $2 per million input tokens and $10 per million output tokens, with cached input at 95% off.
  - All headline benchmark figures are Google's own, and the cybersecurity benchmarks were evaluated without safety guardrails, so independent confirmation is still pending.
primarySources:
  - title: "Introducing Gemini 4 Carbon (Google)"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
    publishedAt: 2026-10-28
  - title: "Google launches Gemini 4 Carbon AI model with cybersecurity focus (Reuters via The Hindu BusinessLine)"
    url: https://www.thehindubusinessline.com/info-tech/google-launches-gemini-4-carbon-ai-model-with-cybersecurity-focus/article71638823.ece
    publishedAt: 2026-10-29
relatedSlugs: [openai-gpt-61-terra]
status: published
seo:
  title: Google Gemini 4 Carbon targets cyber defense | hey.nous
  description: Google's Gemini 4 Carbon tops the Artificial Analysis index and leads three cybersecurity benchmarks, but launch access goes only to vetted defenders. The facts and the caveats.
---

## What happened

Google announced ==Gemini 4 Carbon== on October 28, 2026, its second Gemini 4 frontier model in two weeks, following Gemini 4 Argon. Google calls it its strongest model so far, with state-of-the-art cybersecurity and long-horizon capabilities, and it is built for the kind of engineering work that does not fit in a single chat reply: tracing a subtle bug across a large codebase, validating whether a flaw can actually be exploited, and writing the fix.

The headline numbers cover the full defense cycle. Carbon scores 88.2% on SEC-bench Pro for finding real vulnerabilities, 54.8% on ExploitGym for testing whether flaws are exploitable, and 71.0% on CWE-bench for patching at the root cause. It also ranks first on the recently updated v5.0 of the Artificial Analysis Intelligence Index with a score of 59, ahead of Anthropic's Claude Opus 5.5 at 58 and OpenAI's GPT-6 Astra at 57. On internal tests, Google says Carbon generates secure code at more than twice the success rate of Argon, and its Chrome team reported that Carbon produced high-quality patches more than 10 times better than another lab's large frontier model, which Google did not name.

The catch is access. Starting this week, Carbon goes to a subset of cyber defenders first, then gradually to additional trusted partners through Google's ==Fairwind Program==, while Google takes part in the US government's voluntary process for pre-release model testing. Developers, businesses, and consumers get it later, with no date announced. Introductory API pricing matches Argon at $2 per million input tokens and $10 per million output tokens, with cached input tokens at 95% off the input price. Reuters reports the standard rates after the introductory period will be $4 and $20 per million tokens.

## The benchmarks, with the caveat attached

Carbon's case rests on benchmarks, and the fine print matters as much as the scores. Google states plainly that the external cybersecurity benchmarks were evaluated without guardrails, so the 88.2%, 54.8%, and 71.0% figures describe raw capability, not performance behind the safety stack that will ship to users. The Artificial Analysis ranking also comes from a freshly updated index, v5.0, which adds two benchmarks and removes questions the index makers consider saturated, so the leaderboard is not directly comparable to older versions.

The safety claims are internal and specific. Carbon cut successful cheating on Terminal-Bench 4.0 to 0.0%, with cheating attempts falling to 0.4%. It resisted every evaluated attack on Gray Swan's indirect prompt injection benchmark, a 0.0% attack success rate against Argon's 0.7%. Internal teams using Carbon in live coding environments reported that high-severity misalignment alerts fell by almost 80%, and Google says Carbon cuts unsupported claims by about half compared with Argon, surfacing caveats in its deliverables instead of fabricating missing evidence. Those are encouraging directions, but they are Google's measurements on Google's tests, not independent audits.

:::ringkasan
Gemini 4 Carbon is Google's defender-first frontier model: top of the updated Artificial Analysis index, leading three cybersecurity benchmarks, and priced like Argon at launch. The open question is how those capability scores translate once guardrails are on, independent testers get access, and the model meets real codebases instead of benchmark suites.
:::

## What it means for you

For most readers, the immediate meaning is indirect. You cannot try Carbon today, and if you are not a cyber defender in the first cohort, the launch changes nothing in your tools this week. What it signals is where the frontier race is heading: models judged not just on chat quality but on whether they can find, verify, and fix real flaws across a whole codebase, and kept behind a staged rollout precisely because that capability cuts both ways. A model that can patch your software can also, in the wrong hands, probe someone else's.

If you run a security or engineering team, the practical takeaway is to watch the Fairwind expansion, not the leaderboard. The questions that decide adoption are the ones no announcement answers: how Carbon performs with guardrails enabled, how often its patches pass your own code review, and what its multi-day agent runs actually cost at the standard $4 and $20 rates. The staged rollout is Google's answer to the dual-use problem, and it means the independent evidence will arrive slowly, cohort by cohort.

:::peringatan
Do not read the cybersecurity scores as proof that Carbon makes software safe on its own. The benchmarks were run without guardrails, every headline figure comes from Google's announcement, and the Chrome team's "10 times better" comparison names no rival model. Until vetted defenders and independent testers publish their own results, treat the launch as a strong vendor claim with a deliberately narrow rollout, not a verified security upgrade.
:::

What is still unclear: when developers, businesses, and consumers will get access, how Carbon performs with guardrails on, whether its secure-code gains hold up on codebases outside Google's tests, and what the Fairwind cohort reports once it has run the model on live systems. The most telling signal will not be another benchmark table. It will be the first public reports from the defenders using it now.
