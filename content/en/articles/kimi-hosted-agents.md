---
title: Moonshot's Kimi will run your AI agents for you
slug: kimi-hosted-agents
locale: en
translationGroupId: kimi-hosted-agents
translationStatus: original
dek: Moonshot AI launched Kimi Hosted Agents on November 5, 2026, turning the agent harness into a managed cloud service. Enterprises get a 24/7 runtime for long-running, multi-agent work without building the scaffolding themselves.
format: news
topics: [AI, agents, Moonshot]
author: hey.nous
publishedAt: 2026-11-06
updatedAt: 2026-11-06
readingMinutes: 4
cover:
  src: /assets/covers/cover-kimi-hosted-agents.jpg
  alt: Abstract soft-3D illustration of small robot agents collaborating around a glowing console with floating task cards
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Moonshot AI formally launched Kimi Hosted Agents on November 5, 2026, a managed cloud service that runs AI agents so enterprises do not have to build and maintain the agent harness themselves.
  - The service offers a 24/7 hosted environment for long-running tasks and multi-agent collaboration, with persistent sessions, isolated sandboxes, and automatic recovery after platform failures.
  - It ships with more than 140 skills, more than 30 plugins, and 12 official agent templates, eight of them for financial work.
  - Kimi Inference Hook lets an enterprise's own security service inspect inputs and tool returns before each model call, but it is offered selectively to enterprise-verified users.
  - Pricing is usage-based: sandbox runtime at 0.072 yuan per hour, plus model inference at token rates and plugin charges per call.
primarySources:
  - title: "Kimi Hosted Agents 正式发布：Harness as a Service (Kimi)"
    url: https://www.kimi.com/news/kimi-hosted-agents
    publishedAt: 2026-11-05
  - title: "Kimi Formally Launches Hosted Agents for Enterprise AI Workloads (Unite.AI)"
    url: https://www.unite.ai/kimi-formally-launches-hosted-agents-for-enterprise-ai-workloads/
    publishedAt: 2026-11-05
relatedSlugs: [tencent-hy4-vision-computer-use, openai-models-google-cloud]
status: published
seo:
  title: Kimi Hosted Agents: Moonshot runs your agents | hey.nous
  description: Moonshot AI launches Kimi Hosted Agents, a managed runtime for long-running AI agents with sandboxes, templates, and a safety hook. The facts and the limits.
---

## What happened

Moonshot AI is no longer just selling you a model. On November 5, 2026, the company launched ==Kimi Hosted Agents==, a managed cloud service that runs AI agents for enterprises and developers, so teams no longer have to build and maintain the runtime framework underneath them.

The announcement, titled "Harness as a Service," packages the ==agent harness==, the operational layer that handles sessions, tool execution, sandboxes, and failure recovery, as a hosted service on the Kimi API Open Platform. Moonshot's pitch is blunt: building a reliable harness takes months, and maintaining it after launch costs more time still. Hosted Agents takes that work over, offering a 24/7 environment for long-running tasks and multi-agent collaboration.

The service is stateful. Session history, sandbox state, and output files persist on the server, and an event stream supports resumption with a Last-Event-ID header after a disconnected client reconnects. Developers work through a web console, a REST API, or the kha command-line interface. For multi-agent work, a coordinator agent delegates subtasks to child threads inside the same session, with between one and 20 agent entries in its delegation configuration. Child threads cannot spawn further children or talk to each other directly, and each keeps separate status, history, and event streams so individual subtasks can be inspected and audited.

:::ringkasan
Kimi Hosted Agents moves the unglamorous plumbing of AI agents, sessions, sandboxes, retries, and permissions, onto Moonshot's servers. The model is only one part of a working agent; this launch sells the rest of it as a service.
:::

## Skills, templates, and a safety hook

Kimi says Hosted Agents ships with more than 140 skills and more than 30 plugins covering web retrieval, professional data queries, office-document processing, and content generation. Enterprises can add custom skills, plugins, MCP services, and tools to connect their own systems and data sources.

Twelve official agent templates are included: eight financial templates covering modeling, deep research, morning reports, IPO tracking, and portfolio reviews, plus game development, player-advisor, SRE incident-response, and Discord community-operations examples. Enterprises can copy a template into their own project space and connect internal systems and private databases.

:::info What is an agent harness
The harness is everything around the model that makes an agent work in production: keeping session state, calling tools in a sandbox, retrying after failures, and enforcing permissions. A model answers questions; a harness lets an agent carry a task through several steps without a human watching.
:::

Security is a named selling point. ==Kimi Inference Hook== connects an enterprise's own security service to inspect task inputs and tool returns before each model call, with the enterprise defining the rules and the hook allowing or rejecting content. The hook is offered selectively to enterprise-verified users. A self-hosted option moves sandbox tool execution to a customer-managed host, though Kimi notes this is not equivalent to private deployment, since tool inputs and results still pass through the platform's model-inference interface.

## What it means for you

Pricing is usage-based across three parts: sandbox runtime at 0.072 yuan per hour, roughly one US cent, model inference at the chosen model's token rates, and plugin charges by call count. Usage reports break down resource consumption and cost by agent project. Kimi positions the service for internal business monitoring and operations response, as well as customer-facing investment-research and customer-service assistants.

Context matters here. The launch caps a big week for Moonshot: Kimi K3.1 Pro, a 2.8-trillion-parameter model with a 1-million-token context window, had its open weights published on Hugging Face on November 4. Hosted Agents moves Moonshot one step further down the stack, from supplying the model to operating the environment the model works in.

What is still unclear: the November announcement formalizes a service that has been in beta since September 2026 for domestic enterprise-verified users, and the Inference Hook and self-hosted options remain restricted to that group. Moonshot has not said when broader access opens, and the launch materials describe capabilities rather than publishing independent performance or reliability figures. Treat it as a managed-runtime option worth evaluating if you already build on Kimi, not as a proven replacement for a harness you control.
