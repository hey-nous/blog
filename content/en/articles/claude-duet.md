---
title: Anthropic launches Claude Duet, an always-on agent for small business
slug: claude-duet
locale: en
translationGroupId: claude-duet
translationStatus: original
dek: Claude Duet is Anthropic's first proactive agent: it briefs you each morning, watches your connected apps, and keeps working in its own cloud computer while you are away. The research preview opened October 21 for US Pro and Max subscribers on a waitlist.
format: news
topics: [AI, agents, Claude]
author: hey.nous
publishedAt: 2026-10-23
updatedAt: 2026-10-23
readingMinutes: 4
cover:
  src: /assets/covers/cover-claude-duet.jpg
  alt: Illustration of a small glowing robot assistant watching over a desk with floating app windows
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Anthropic opened a research preview of Claude Duet on October 21, 2026: a proactive agent, powered by Claude Opus 5.5, that sends a morning brief, monitors connected apps, and completes tasks while you are away.
  - Duet runs on its own cloud virtual machine with its own browser, so it keeps working when your phone or laptop is off, and it carries over memory, skills, and connectors from your Claude account.
  - The preview is waitlist-only for Pro and Max subscribers in the US, included at no extra charge, with background checks counting toward existing plan usage limits.
  - Safety is approval-first: Duet shows its plan and waits for the user before sending messages, making payments, signing documents, or deleting anything; trading securities and moving money between accounts are off-limits entirely.
  - Early limitations are stated plainly: it can misread a thread or misjudge urgency, personal errands like booking tickets are weaker, and it cannot yet show its browser activity live.
primarySources:
  - title: "Introducing Claude Duet (Anthropic / Claude)"
    url: https://claude.com/resources/articles/claude-duet
    publishedAt: 2026-10-21
  - title: "Claude Duet app is Anthropic's bet on agents (TechCrunch)"
    url: https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/
    publishedAt: 2026-10-22
relatedSlugs: [openai-models-google-cloud, mistral-large-4-le-chonk]
status: published
seo:
  title: Anthropic launches Claude Duet, always-on agent | hey.nous
  description: Claude Duet is Anthropic's proactive agent: morning briefs, background tasks in its own cloud computer, and approval-first safety. The facts and what is still unclear.
---

## What happened

Anthropic opened a research preview of Claude Duet on October 21, 2026. It is a standalone app for iOS, Android, and claude.ai in which Claude works as a proactive agent instead of waiting for a prompt: it sends a morning brief on what needs your attention across connected apps, monitors those apps during the day and messages only when something needs you, and takes on tasks from typed or spoken messages in one ongoing thread.

The app is designed around Claude Opus 5.5, Anthropic's top-tier model for agentic work, and it runs on its own cloud virtual machine with its own browser, so it does not need your laptop or phone to be on. It carries over the memory, skills, and connected apps from your existing Claude account, and it can draw on more than 6,000 connectors and plugins in the Claude Marketplace. Listed uses include finding missed Gmail and Slack messages and helping reply, checking QuickBooks or Stripe for unpaid invoices, preparing payroll in Gusto, drafting a job post for LinkedIn, and routing agreements through DocuSign.

Access is limited to start: Pro and Max subscribers in the United States, through a waitlist, with invitations going out in waves. Anthropic says Team and Enterprise plans come later. During the preview, Duet is included in Pro and Max at no additional charge and shares the plan's usage limits with the rest of Claude. Anthropic is explicit that background checks count toward those limits, and that larger jobs like building a financial model or a slide deck require more model turns.

## The safety design, and the parts that stay in your hands

The core rule is approval before consequential actions. Duet reads, drafts, and prepares work on its own, but before it sends a message, makes a payment, signs a document, or deletes anything, it shows you exactly what it is about to do and waits for approval. A few actions are off-limits even with approval, including trading securities and moving money between accounts, and any app access can be disconnected.

Anthropic also shipped a new dedicated classifier and safety system prompt that checks each message to prevent sensitive information from leaking. By default, the agent turns down requests for credit card numbers and government identification; other sensitive details, such as health or personal finances, only pass through when the user has explicitly instructed it to send them. For purchases, Duet works with Stripe's Link wallet (it confirms the item, Link asks you to approve the spend, payment runs through a virtual card so the real card number is not shared) and Shopify's Shop Pay. Sign-in to sites with logins saved in 1Password is listed as coming soon.

Under the hood, Anthropic says Duet draws on its framework for trustworthy agents, that credential handling means the app never directly sees passwords or sign-in tokens, and that red teams plus an external firm penetration tested the app. The company says it will share more detail about the safety design in the coming days.

## What it means for you

This is the clearest signal yet that the agent race is moving from chatbots that wait for prompts to agents that watch and act. OpenAI and Meta are pursuing the same ground with their own always-on assistants, so the differentiator here is Anthropic's packaging: no new subscription during the preview, existing Claude setup carried over, and a hard approval gate on anything consequential.

If you are a US Pro or Max subscriber, the practical trade-off is the usage limits. A Duet left monitoring your inbox draws from the same cap as a chat window, and Anthropic warns that background checks can exhaust those limits sooner than chat alone. It also joins Duet's own stated caveats: it is an early version that can still misread a thread or miscalibrate what is urgent, personal errands like booking tickets are not its strength, and it cannot yet show its browser activity live.

What is still unclear: when the waitlist opens beyond the US or reaches Team and Enterprise plans, how generous the approval-gated payments feel in daily use, and whether the always-on monitoring proves useful enough to justify its share of your plan limits. For everyone else, Duet is a preview of where Claude is heading: an assistant that comes to you first.
