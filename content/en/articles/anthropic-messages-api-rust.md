---
title: Anthropic moved its Messages API to Rust, and Claude wrote most of it
slug: anthropic-messages-api-rust
locale: en
translationGroupId: anthropic-messages-api-rust
translationStatus: original
dek: Anthropic moved the API behind Claude from Python to Rust, cutting CPU per request by about 70% and median time to first token by about 20%. Claude wrote the first version of the core path in about a week; proving the new version behaved exactly like the old one was the real work.
format: news
topics: [AI, engineering, Claude]
author: hey.nous
publishedAt: 2026-11-27
updatedAt: 2026-11-27
readingMinutes: 4
cover:
  src: /assets/covers/cover-anthropic-messages-api-rust.jpg
  alt: Abstract illustration of two parallel ribbons of data, navy and orange, weaving together into one smooth stream on a cream background
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Anthropic published on November 25, 2026 how it moved its Messages API from Python to Rust. The API is the main route customers and Anthropic's own apps, Claude Code and Cowork, use to reach Claude.
  - The Rust API uses about 70% less CPU per request and cuts median time to first token by about 20%, shipped with no downtime and no freeze on feature development.
  - Claude wrote the first version of the core request path in about a week, and by May 2026 it was writing more than 80% of the code Anthropic merged.
  - Verification, not writing code, was the hard part: in April the Rust version passed about 98% of its tests yet matched the Python version on only about a quarter of live production inputs.
  - Anthropic proved parity by shadowing live traffic and comparing each request stage by stage, without reading customer requests, then letting agent loops fix the differences.
primarySources:
  - title: "Migrating our Messages API to Rust (Anthropic)"
    url: https://www.anthropic.com/research/migrating-api-to-rust
    publishedAt: 2026-11-25
  - title: "Anthropic says it moved its Claude API from Python to Rust with no downtime (InfoWorld)"
    url: https://www.infoworld.com/article/4253460/anthropic-says-it-moved-its-claude-api-from-python-to-rust-with-no-downtime.html
    publishedAt: 2026-11-25
relatedSlugs: [anthropic-ipo-priced-83-largest-ever, claude-riemann-hypothesis-proof]
status: published
seo:
  title: Anthropic's Messages API now runs on Rust | hey.nous
  description: Anthropic moved the API behind Claude to Rust, cutting CPU per request by about 70% and first-token latency by about 20%. The catch was proving the new version behaved exactly like the old one.
---

## What happened

Anthropic has moved its ==Messages API== from Python to Rust, and the API now uses about 70% less CPU per request while cutting median time to first token by about 20%.

The Messages API is the main road into Claude. Every customer request goes through it, and so do Anthropic's own apps, Claude Code and Cowork. Anthropic built it in Python in 2023, when it was little more than a request forwarder, but traffic grew roughly 1,800 times between early 2024 and fall 2026, and by late 2025 every request had to be validated, tokenized, screened by safety classifiers, and streamed back token by token. Python was adding overhead at each of those steps. A first, incremental attempt, rewriting only the output parsing in Rust and calling it from Python, cut CPU by just 8 to 10%, and each token crossed the language boundary three times, so the team went for the full rewrite instead.

What makes the story unusual is who wrote the new code. Claude produced a first version of the core request path in about a week, and by May 2026 Anthropic says Claude was writing more than 80% of the code the company merged. The rewrite itself was the easy part. Proving the Rust version behaved exactly like the Python one, while the Python one kept changing underneath it, was the project.

## The test suite said yes. Production said no.

Anthropic had about 700 integration tests, but two problems made them unreliable as proof. The tests were coupled to the Python implementation, so a pass could mean the code was right or that the test had been changed to let wrong code through. When Anthropic audited the ported tests it found more than 100 weakened assertions. And the tests were incomplete: with dozens of features and their combinations, no suite could cover everything production does.

The gap showed up fast. In April 2026 the Rust API passed about 98% of its tests, yet when Anthropic compared it against live production traffic, only about a quarter of inputs matched the Python output. One example from the post: Python escapes certain characters in JSON tool calls, an emoji for instance, by replacing them with text codes, while Rust wrote the characters as they were, so the two prompts differed by a few bytes and the model could answer differently.

:::ringkasan
The Rust rewrite was quick because Claude wrote it, but the test suite could not prove it was correct: 98% of tests passed while only about a quarter of live inputs matched. Anthropic had to build a new way to check parity on real traffic.
:::

## Shadowing, without reading your requests

Anthropic's answer was to turn the production API itself into the verifier. It ran live requests through both versions, a technique called ==shadowing==, and compared what happened at every stage, before and after the model call. Two constraints shaped the design. A request could only count once toward a customer's limits and bill, and Claude's replies are nondeterministic, so the team ran the model once and replayed that single output through both versions.

Privacy shaped it too. Anthropic says it worked without reading customer requests or Claude's replies, so instead of comparing text it recorded the shape of each difference: where it happened in the service and how big it was. Checkpoints located each difference in the code, and fingerprints, the position and length of a difference in the prompt, told one bug from another. A single bug could produce hundreds of thousands of nearly identical records, so a script grouped them every 10 to 30 minutes and only alerted a coordinating agent when a new kind of difference appeared.

Then came three loops. A fast inner loop gave agents a sandbox where they could test a hypothesis in under a second, without calling the model, and propose a fix. A slower outer loop validated fixes on shadowed production traffic. And a memory loop saved review decisions as rules, so agents stopped repeating the same mistake. One lesson stuck: an agent once proposed copying a tool description into files to make prompts match, and an engineer rejected it because Rust still needed to call the service that supplies those descriptions. The agent saved that decision to memory, and later agents recognized the same bug instead of proposing the shortcut again.

:::info Shadowing
Running a request through the old and new versions of a service side by side and comparing the results, so the new version is judged against real traffic instead of a test suite. Anthropic's version compared every stage of the request, not just the final answer.
:::

The human role moved as the system matured. Engineers started inside the inner loop, chasing differences themselves, then moved to the seam between loops to review fixes, and finally to the edge, writing the rules and checks the agents worked within. Fixes only crossed into production after human review.

## What it means for you

If you build on the Claude API, the change is already live and mostly invisible: same API, lower latency on first tokens, and a cheaper service to run on Anthropic's side. Coverage of the post also notes about 80% less memory per request. The more interesting part is the method, because it answers a question every team using coding agents will hit soon. When the model can write a whole system in a week, writing stops being the bottleneck and verifying takes its place. Anthropic's lesson is that verification needs to be designed, not assumed: a test suite that passes is not the same as a system that behaves the same, and the signal you give an agent decides what it optimizes for. A verifier that only rewards matching outputs will accept a shortcut that matches today and breaks tomorrow, which is why Anthropic kept human review at the gate.

Anthropic frames the migration as a Ship of Theseus in reverse. Instead of replacing planks while the ship sails, Claude built an identical ship alongside the first, agents kept the new ship in step as the old one changed, and passengers moved over a few at a time. Once the team trusted the two behaved the same, the new ship, faster and cheaper to run, took over.

What is still unclear: all the performance numbers come from Anthropic's own production charts, and no independent measurement exists yet. Anthropic has not said what the migration cost in total engineering time, or whether the same verification loops will be applied to its other services. And the 20% latency figure was measured on Claude Code traffic, so your mileage on other workloads may vary. But as a demonstration that a live, revenue-critical API can be rewritten by agents and swapped over without downtime, the post is the most detailed public account of it so far.
