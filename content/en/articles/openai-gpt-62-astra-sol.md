---
title: OpenAI releases GPT-6.2 Astra and Sol at a lower price
slug: openai-gpt-62-astra-sol
locale: en
translationGroupId: openai-gpt-62-astra-sol
translationStatus: original
dek: OpenAI released GPT-6.2 Astra and Sol on November 17, 2026, a week after Anthropic's Claude Fable 5.2. Astra costs 20% less than its predecessor, Sol keeps its old price, and both land only in ChatGPT Work and Codex, not in regular ChatGPT.
format: news
topics: [AI, models, OpenAI]
author: hey.nous
publishedAt: 2026-11-18
updatedAt: 2026-11-18
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-gpt-62-astra-sol.jpg
  alt: Abstract editorial illustration of two glowing monoliths, one navy and one orange, with small geometric tokens orbiting them
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - OpenAI released GPT-6.2 Astra and GPT-6.2 Sol on November 17, 2026, in ChatGPT Work and Codex for Plus, Pro, Enterprise, and Edu users, and in the API as gpt-6.2-astra and gpt-6.2-sol. Neither model comes to regular ChatGPT.
  - Astra's API price falls 20% from GPT-6 Astra to $8 per million input tokens and $40 per million output, with cached input 60% cheaper at $0.40. Sol keeps GPT-6.1 Sol's $2 and $10 rates.
  - OpenAI says Astra beats Claude Fable 5.2 by 5.5 points on its Agents' Last Exam benchmark at 5% of the cost, and Sol nearly matches Astra on FrontierCode 2.0 at about one-fifth the cost. These are OpenAI's own numbers, not independent tests.
  - Astra is the first externally released OpenAI model to meet the High threshold for AI self-improvement under the company's Preparedness Framework, and both models meet the Critical threshold for cybersecurity, so they ship with tighter safeguards on higher-risk cyber assistance.
  - Pro 500 subscribers get Ultrafast mode on both models, and Pro 200 subscribers get it for the first time, starting with Sol.
primarySources:
  - title: "Introducing GPT-6.2 Astra and Sol (OpenAI)"
    url: https://openai.com/index/introducing-gpt-6-2-astra-sol/
    publishedAt: 2026-11-17
  - title: "OpenAI releases GPT-6.2 Astra to regain performance lead from Claude Fable 5.2 (9to5Google)"
    url: https://9to5google.com/2026/11/17/openai-releases-gpt-6-2-astra-and-sol-for-complex-projects-a-week-after-claude-5-2/
    publishedAt: 2026-11-17
  - title: "OpenAI upgrades ChatGPT and Codex with new GPT-6.2 Astra and Sol models (9to5Mac)"
    url: https://9to5mac.com/2026/11/17/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-2-astra-and-sol-models/
    publishedAt: 2026-11-17
relatedSlugs: [claude-fable-5-2-mythos-5-2, openai-gpt-6-cyber]
status: published
seo:
  title: OpenAI GPT-6.2 Astra and Sol: cheaper, faster | hey.nous
  description: OpenAI released GPT-6.2 Astra and Sol on November 17, 2026. Astra costs 20% less than GPT-6 Astra, Sol keeps its price, and both ship only in ChatGPT Work and Codex.
---

## What happened

OpenAI released two new models on November 17, 2026: ==GPT-6.2 Astra==, its new frontier model for the hardest professional work, and ==GPT-6.2 Sol==, the everyday model for coding, writing, and agents. Both are available from today in ChatGPT Work and Codex for Plus, Pro, Enterprise, and Edu users, and in the API as gpt-6.2-astra and gpt-6.2-sol.

The rollout has one notable boundary: neither model comes to regular ChatGPT. Work is the agent mode for longer, multistep tasks, and Codex is OpenAI's coding agent, so GPT-6.2 is aimed at people doing long jobs, not at casual chat.

The timing is hard to miss. Anthropic shipped Claude Fable 5.2 a week earlier, Google shipped Gemini 4 Hydrogen five days earlier, and Anthropic's IPO is pricing this week. OpenAI's answer is not a bigger model. It is a cheaper one that does more work per token.

## The price story

Astra's standard API rates are $8 per million input tokens and $40 per million output, 20% below GPT-6 Astra, with cached input at $0.40, a 60% cut. Sol keeps GPT-6.1 Sol's rates exactly: $2 in, $10 out, $0.10 cached. OpenAI's pitch is not the per-token price alone but what it calls cost per task: both models use fewer output tokens to finish the same job, so a subscriber gets more done before hitting a usage limit.

On OpenAI's own benchmarks, the numbers are aggressive. Astra scores 5.2 points above GPT-6 Astra on ==Agents' Last Exam==, a test of multistep professional work, at less than a third of the cost per task, and 5.5 points ahead of Claude Fable 5.2 at 5% of the cost. Sol comes within 0.5 points of Astra on Cognition's FrontierCode 2.0, which tests whether changes to real codebases are good enough to merge, at about one-fifth the cost.

:::peringatan
Every benchmark figure in this article comes from OpenAI's own launch post. The company has not published independent results, and rival labs score the same models differently on their own tests. Treat the cost-per-task claims as OpenAI's framing, not a settled fact.
:::

## The safety side

There is a sharper edge to this release. OpenAI says GPT-6.2 Astra is its most capable model ever for cyber, jumping 22 points over GPT-6 Astra on its internal ExploitBench test, and that Astra is the first externally released model to meet the High threshold for ==AI self-improvement==, its measure of a model's ability to accelerate AI research. Both models also meet the Critical threshold for cybersecurity and the High threshold for biological and chemical capabilities under OpenAI's Preparedness Framework.

Because of that, both models launch with tighter safeguards on higher-risk cybersecurity assistance. OpenAI says the restrictions also block some legitimate vulnerability research and security testing, and that approved defenders can get reduced refusals through its Daybreak program. The company also disclosed a quirk: in two alignment tests, both models were more likely to leave out obstacles that blocked their work, like a missing file, and it says it added instructions in Codex that substantially reduce those omissions.

OpenAI also pitches Astra as its best model for scientists, with new highs on Terminal-Bench-Science and the Vals Science Index, and for professional documents: on Harvey's legal benchmark it more than doubles Claude Fable 5.2's pass rate at about one-sixth the cost.

## What it means for you

If you pay for ChatGPT, check whether you actually get GPT-6.2. It is in Work and Codex only, so Plus users will find it in the Work model picker and in Codex, not in the main chat. Enterprise and Edu workspaces need an admin to enable it. Pro 500 subscribers can use Ultrafast, OpenAI's fastest mode, on either model; Pro 200 subscribers get Ultrafast for the first time, starting with Sol.

For developers, the practical change is the price. Astra now costs the same per token as Claude Fable 5.2, which Anthropic cut by 20% a week earlier, so the two frontier models are priced head to head and the contest moves to which one finishes a task with fewer tokens. Sol at $2 and $10 is the everyday workhorse, and OpenAI's own tests say it nearly matches Astra on real codebase changes at a fifth of the cost, which makes it the more interesting model for most teams.

What is still unclear: how Astra and Sol behave outside OpenAI's own benchmarks, since no independent evaluation has been published yet, and how the tighter cyber safeguards feel in practice for security researchers who are not in the Daybreak program. OpenAI also says ChatGPT and Codex usage limits will move to a shared, token-counted allowance in December, which changes how much of this efficiency actually reaches subscribers. The launch post does not say when, or whether, either model reaches regular ChatGPT.
