---
title: OpenAI's GPT-6.1 Terra halves the price of AI that can use your computer
slug: openai-gpt-61-terra
locale: en
translationGroupId: openai-gpt-61-terra
translationStatus: original
dek: OpenAI's new mid-tier model costs 50% less than its predecessor and its bigger sibling, while matching the flagship on professional computer tasks. What was announced, what the benchmarks actually say, and what is still unproven.
format: news
topics: [AI, OpenAI, models]
author: hey.nous
publishedAt: 2026-10-29
updatedAt: 2026-10-29
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-gpt-61-terra.jpg
  alt: Abstract 3D illustration of a small glowing robot hand reaching toward floating app windows above a warm cream desk
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - OpenAI released GPT-6.1 Terra on October 26, 2026, a mid-tier model built for visual reasoning and computer use, replacing GPT-5.6 Terra.
  - Standard API prices are $1 per million input tokens and $5 per million output tokens, 50% lower than both GPT-5.6 Terra and GPT-6.1 Sol.
  - It is available to Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex, and to developers through the API as gpt-6.1-terra.
  - OpenAI says Terra matches GPT-6 Astra on professional computer tasks at one-tenth the price per token, but all benchmark figures are the company's own and untested by independent reviewers so far.
primarySources:
  - title: "Introducing GPT-6.1 Terra (OpenAI)"
    url: https://openai.com/index/introducing-gpt-6-1-terra/
    publishedAt: 2026-10-26
  - title: "OpenAI launches GPT-6.1 Terra with 3x faster AI agents, 50% lower pricing (BleepingComputer)"
    url: https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/
    publishedAt: 2026-10-26
relatedSlugs: [openai-models-google-cloud]
status: published
seo:
  title: OpenAI's GPT-6.1 Terra halves AI agent costs | hey.nous
  description: OpenAI's GPT-6.1 Terra costs half as much as its predecessor, works in ChatGPT Work and Codex, and matches the flagship on computer tasks. The facts and the caveats.
---

## What happened

OpenAI released GPT-6.1 Terra on October 26, 2026, a new mid-tier model built for the everyday computer work that fills an office day: reading what is on screen, clicking through apps, filling out forms, and drafting text. It replaces GPT-5.6 Terra in OpenAI's lineup, sitting below the more capable GPT-6.1 Sol and GPT-6 Astra, and it is the model OpenAI pitches when the job is high-volume rather than hardest-case.

The headline is price. Standard API rates are $1 per million input tokens, $0.05 per million cached input tokens, and $5 per million output tokens, which OpenAI says is 50% lower than both GPT-5.6 Terra and GPT-6.1 Sol. In ChatGPT Work and Codex, OpenAI says the same usage allowance now covers more tasks than with GPT-5.6 Terra, and substantially more than with Sol or Astra. Starting October 26, Terra is available to all Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex, and to developers through the API as gpt-6.1-terra. It is not a regular ChatGPT chat model: access runs through Work and Codex, not the standard chat window.

## The benchmarks, with the caveat attached

OpenAI's own tests are the reason the launch is interesting, and also the reason to read it carefully. On ==Agents' Last Exam==, a benchmark of professional computer tasks such as turning architectural drawings into a 3D model, Terra scores 15 percentage points higher than GPT-5.6 Terra at medium reasoning effort, at about one-third the cost. OpenAI says it even performs on par with GPT-6 Astra at one-tenth the price per token, and completes tasks over three times faster than both Astra and Sol.

The gains extend to accuracy and coding. On OpenAI's internal set of error-inducing prompts, the error rate at low reasoning effort fell from 53.6% with GPT-5.6 Terra to 16.7% with GPT-6.1 Terra, and to 4.3% at maximum effort. On Terminal-Bench 4.0, a test of command-line coding tasks, Terra solves 50.3% of tasks at maximum effort, more than double GPT-5.6 Terra's 21.5%. OpenAI is explicit about the limit here: for the most complex coding tasks, Sol and Astra remain the better choice.

:::ringkasan
GPT-6.1 Terra is OpenAI's cheaper middle model: half the API price of its predecessor and of Sol, available in ChatGPT Work and Codex and through the API, with vendor-reported gains on computer-use, accuracy, and coding tests. The open question is how those gains hold up on real customer workflows, which no independent test has measured yet.
:::

## What it means for you

The practical shift is who can afford to hand routine computer work to an agent. At half the price per token and three times the speed of the flagship models, tasks that were too expensive to automate at scale, like reading incoming invoices and entering their details into accounting software, or reviewing long documents form by form, become plausible for smaller teams. That is the market OpenAI is aiming at: not the hardest problems, but the most repeated ones.

There is also a safety note worth reading before granting an agent access to your apps. OpenAI says Terra meets the Critical threshold in cybersecurity under its Preparedness Framework, and it carries the safeguards developed for GPT-6 Astra, including resistance to prompt-injection attempts in OpenAI's own tests. A cheaper agent that can click through your software is still an agent with your permissions, so the testing burden moves to you: try it on your own tasks, with bounded access, before letting it run across production systems.

:::peringatan
Do not read the benchmark claims as independent results. Every performance figure in this article comes from OpenAI's own announcement and system card, and independent reviewers have not yet published their own measurements. The price cut is verified from OpenAI's pricing page, but the speed and accuracy gains are vendor-reported until third parties confirm them.
:::

What is still unclear: how Terra performs on real-world workflows outside OpenAI's test suites, whether its error rate stays low on documents and apps it was not tuned for, and how quickly independent benchmarks will confirm or qualify the launch claims. If your team already uses ChatGPT Work or Codex, the cheapest way to answer those questions is to run Terra on a small batch of your own repetitive tasks and compare the cost per finished task, not just the cost per token.
