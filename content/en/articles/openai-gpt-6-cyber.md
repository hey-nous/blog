---
title: OpenAI's GPT-6 Cyber is a hacking model for vetted defenders
slug: openai-gpt-6-cyber
locale: en
translationGroupId: openai-gpt-6-cyber
translationStatus: original
dek: GPT-6 Cyber finds real flaws in Linux and Firefox, scores 48.5% on OpenAI's exploit benchmark, and stays inside the scope researchers set 99.93% of the time. You almost certainly cannot use it yet.
format: news
topics: [AI, OpenAI, cybersecurity]
author: hey.nous
publishedAt: 2026-11-07
updatedAt: 2026-11-07
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-gpt-6-cyber.jpg
  alt: Abstract soft-3D illustration of a shield made of glowing circuit lines guarding a dark navy vault
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - OpenAI announced GPT-6 Cyber on November 5, 2026, a cybersecurity model built on GPT-6 Astra that finds and validates exploitable vulnerabilities while staying inside the scope researchers set.
  - On ExploitGym, the model scored 48.5%, up from 32.1% for GPT-5.6 Cyber, and OpenAI rates it Critical for cybersecurity under its Preparedness Framework, up from High.
  - OpenAI says its researchers used the model to develop 948 privilege escalation exploits in Linux and find 81 previously unknown high-severity vulnerabilities in Firefox, with Mozilla releasing fixes for many of them.
  - Access is limited to a select group of approved Daybreak Red customers through the API and Codex, with wider access promised soon, and OpenAI announced a $1 billion grant program for resource-constrained defenders.
primarySources:
  - title: "GPT-6 Cyber: Advancing the frontier of aligned cybersecurity agents (OpenAI)"
    url: https://openai.com/index/introducing-gpt-6-cyber/
    publishedAt: 2026-11-05
  - title: "OpenAI announces GPT-6 Cyber, its most capable cybersecurity model yet (Neowin)"
    url: https://www.neowin.net/news/openai-announces-gpt-6-cyber-its-most-capable-cybersecurity-model-yet/
    publishedAt: 2026-11-05
relatedSlugs: [google-gemini-4-carbon, openai-offline-frontier-training]
status: published
seo:
  title: OpenAI GPT-6 Cyber: hacking model for defenders | hey.nous
  description: OpenAI's GPT-6 Cyber finds real vulnerabilities in Linux and Firefox and scores 48.5% on ExploitGym, but only vetted Daybreak Red defenders can use it.
---

## What happened

OpenAI announced ==GPT-6 Cyber== on November 5, 2026, a model built to find software flaws, build working exploits, and write fixes, and deliberately kept out of general reach. It is a cybersecurity variant of GPT-6 Astra, trained to validate vulnerabilities while staying within the boundaries researchers set, and it is initially available only to a select group of approved customers in ==Daybreak Red==, OpenAI's trusted-access program for authorized security work.

The headline numbers come from OpenAI's own tests. On ==ExploitGym==, a benchmark that asks a model to exploit a specified vulnerability in a remote target, GPT-6 Cyber scored 48.5%, up from 32.1% for its predecessor GPT-5.6 Cyber, a 51% relative improvement. On a separate web penetration test where models probe applications without seeing their source code, it recalled 40.3% of vulnerabilities, against 32.0% for GPT-6 Astra. And on RemoteExploitBench, a test of exploiting known flaws in apps like GitLab, PostgreSQL, and Jenkins in a controlled environment, Astra running under Daybreak Blue refused every task while GPT-6 Cyber completed 95% of them.

## The part OpenAI cares about most: staying in scope

A hacking model is only useful to defenders if it does what it is told and nothing else. OpenAI made that the center of the announcement. In a test where the model is given a hard exploitation task alongside services that are deliberately easy to exploit, GPT-6 Cyber avoided touching the out-of-scope services in 99.93% of cases without its deployment safety prompt, and 100% with it. GPT-5.6 Cyber managed 94.49% without the prompt.

That improvement is why OpenAI classifies the model as Critical for cybersecurity under its Preparedness Framework, its highest tier, up from High for GPT-5.6 Cyber. The classification is OpenAI's own, not an independent audit, and it is as much a statement about risk as capability: a model this good at breaking software is dangerous in the wrong hands, which is the stated reason for the gated rollout.

## What it has already found

OpenAI says the model is already doing real defensive work. Its researchers used GPT-6 Cyber to reproduce 1,724 vulnerabilities in the Linux kernel and develop working privilege escalation exploits for 948 of them, more than five times the 166 exploited by GPT-5.6 Sol on the same harness. They disclosed 304 critical findings to maintainers with candidate patches. In Firefox, the model produced evidence and reproducible tests for 81 previously unknown vulnerabilities Mozilla rated high severity, and showed that 30 known issues were worse than previously reported. Mozilla has released fixes for many of them.

Security teams at Cisco and CodeRabbit are using the model for vulnerability research and code review, according to OpenAI, and OpenAI says it relied on it to harden its own training infrastructure. Alongside the model, OpenAI announced a $1 billion Daybreak for Frontline Defenders grant program to subsidize access for resource-constrained teams such as government organizations and essential service providers, plus a new Daybreak Red for Critical Infrastructure group for approved defenders of power, water, and industrial systems.

:::ringkasan
GPT-6 Cyber is OpenAI's most capable security model yet: 48.5% on ExploitGym, 99.93% in-scope behavior without safety prompts, and real flaws found in Linux and Firefox. But it is not a product you can sign up for. Access runs through Daybreak Red approval, with IP allowlisting by default, and OpenAI has given no date for wider availability.
:::

## What it means for you

If you are not a vetted security team, almost nothing changes today. You cannot buy GPT-6 Cyber, try it in ChatGPT, or call it from the API without Daybreak Red approval plus a separate approval for this specific model. What changes is the shape of the security market: the same frontier capability that used to require a senior penetration tester can now be rented by approved teams, and OpenAI is openly subsidizing smaller defenders to get it.

For everyone else, the indirect effects matter more. The 81 Firefox flaws and the Linux kernel findings mean patches are already landing in software you run, and the $1 billion grant program means underfunded public infrastructure teams may soon have tooling that only large companies could afford. The open question is whether the gate holds: OpenAI pairs the model with misuse monitoring, credential protection, and blocks on high-risk assistance involving critical systems, but a model rated Critical is exactly the kind of capability attackers try hardest to steal or replicate.

:::peringatan
Every performance number in this article comes from OpenAI's own announcement and system card. No independent reviewer has published measurements of GPT-6 Cyber, and the ExploitGym and RemoteExploitBench scores are OpenAI-built benchmarks run by OpenAI. Treat them as the vendor's claims until third parties confirm them.
:::

What is still unclear: OpenAI has not published pricing for GPT-6 Cyber, has not said when access expands beyond the initial select group to all Daybreak Red customers, and has not disclosed how many organizations are in that first group. The model is also not a general ChatGPT feature, so there is no consumer rollout to wait for. If your team does authorized security work and wants in, the path is applying for Daybreak Red and waiting.
