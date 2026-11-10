---
title: Google's two new TPUs: one locked down, one doubled up
slug: google-tpu-8tx-8i-max
locale: en
translationGroupId: google-tpu-8tx-8i-max
translationStatus: original
dek: Google has added TPU 8tx and TPU 8i Max to its eighth-generation lineup: one keeps sensitive data encrypted while it is being processed, the other packs two chips into one package for massive context windows. Neither has a price or a ship date yet.
format: news
topics: [AI, hardware, cloud]
author: hey.nous
publishedAt: 2026-11-10
updatedAt: 2026-11-10
readingMinutes: 4
cover:
  src: /assets/covers/cover-google-tpu-8tx-8i-max.jpg
  alt: Abstract 3D illustration of a navy chip inside a glowing orange shield beside two paired navy chips linked by orange circuit lines
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Google announced TPU 8tx and TPU 8i Max on November 9, 2026, completing four TPU systems in a single year for the first time.
  - TPU 8tx is built for secure and confidential inference: it keeps data and model weights protected even while in active use, and Google claims up to 2x lower latency than TPU 8t.
  - TPU 8i Max combines two TPU 8i chips in one package, doubling compute, SRAM, and HBM bandwidth for workloads with massive context windows.
  - Google published no price, general-availability date, or named customer for either system; Bloomberg reported both are due in 2027.
primarySources:
  - title: "Introducing TPU 8tx and TPU 8i Max (Google Blog)"
    url: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/
    publishedAt: 2026-11-09
  - title: "Google Unveils TPU 8tx and 8i Max AI Chips in Nvidia Challenge (Bloomberg via Lexx)"
    url: https://blog.lexx.in/news/google-tpu-8tx-8i-max-ai-chips-nov-2026/
    publishedAt: 2026-11-09
relatedSlugs: [google-gemini-4-carbon, openai-models-google-cloud]
status: published
seo:
  title: Google TPU 8tx and 8i Max: what they do | hey.nous
  description: Google adds TPU 8tx for confidential AI and TPU 8i Max for massive context windows. The facts, the caveats, and what is still unproven.
---

## What happened

Google announced two new additions to its eighth-generation TPU lineup on November 9, 2026: ==TPU 8tx==, built for secure and confidential inference, and ==TPU 8i Max==, built for AI workloads with massive context windows. The announcement, written by Amin Vahdat, Google's senior vice president and chief technologist for AI and infrastructure, makes 2026 the first year Google has introduced four TPU systems, following the TPU 8t and TPU 8i at Google Cloud Next in April.

The two systems solve two different problems. The 8tx is for organizations that run frontier or proprietary models and autonomous agents next to their most sensitive data, such as regulated enterprises and governments. The 8i Max is for teams whose AI agents juggle huge amounts of context at once, for example dozens of agents working across an entire software codebase or hours of video.

## Not new chips: new systems

Google is careful with its wording here, and the distinction matters. Designing a new chip takes years. A new system repackages existing silicon with different compute, networking, and security around it, which Google says it can do in months.

TPU 8tx uses the same silicon as the TPU 8t training chip, paired with 5th Generation AMD EPYC CPU hosts and the low-latency Boardfly network Google built for real-time reasoning. TPU 8i Max puts two existing TPU 8i chips into a single package. So the news is about configuration, not a new generation of silicon.

:::ringkasan
Google now has four eighth-generation TPU systems: 8t for large-scale training, 8i for low-latency reasoning, 8tx for confidential computing, and 8i Max for massive context windows. Both new systems are reconfigurations of chips announced in April, aimed at the two problems Google says enterprises now care about most: keeping data secret while it is processed, and fitting ever larger context into memory.
:::

## TPU 8tx: encrypted while it runs

The 8tx is the more interesting of the two, and not because of speed. Normally, data is encrypted when stored or sent over a network, but it has to be unlocked in memory while a computer processes it. Google says the 8tx builds security into the hardware layer, keeping sensitive data and model weights protected and isolated even while in active use. It calls this the first cloud TPU system with hardware-enforced ==confidential computing==.

Google also claims the 8tx delivers up to 2x lower latency than the TPU 8t, with what it calls a near-zero performance penalty for the security. Because it pairs training-grade compute with a fast inference network, teams can fine-tune models on private data, distill large models into smaller ones, and train agents through reinforcement learning on a single system, without moving sensitive data between separate clusters.

## TPU 8i Max: two chips, one package

The 8i Max goes after what Google calls the memory wall. When agents reason across million-token contexts, memory bandwidth becomes the bottleneck. By combining two low-latency TPU 8i chips on a single package, Google says the 8i Max delivers double the compute, double the SRAM, and double the HBM bandwidth of a single TPU 8i, while fitting twice the silicon within the existing rack footprint. That means more computing power per square foot and per watt of data center space.

Alongside the hardware, Google announced a batch of software moves aimed at making TPUs easier to use: it open-sourced TorchTPU last month so PyTorch code and Hugging Face models run natively, opened a TPU agent suite in preview that plugs into coding tools such as Claude Code and Cursor, open-sourced TPU Sync for managing model state across clusters, and made Cloud Pathways and GKE dynamic slicing generally available. Google also said its TPUs now serve nearly 100 customers, including frontier labs, trading firms, retailers, and universities, though it named none of them.

## What it means for you

For most readers, nothing changes tomorrow. These are data center systems, not something you buy, and Google published no price, no general-availability date, and no named customer for either one. Bloomberg reported that both are due in 2027.

What does change is the shape of the AI chip market. Google is now selling its custom silicon to outside customers at a pace of four systems a year, and the two new ones target the exact workloads Nvidia's customers are asking about: running agents on private data, and running agents that need enormous context. Every performance figure in the announcement is Google's own, with no independent benchmark or audit published so far, so treat the 2x claims as vendor numbers until third parties test them.

If you run AI workloads on Google Cloud, the practical near-term news is the software: native PyTorch support and the TPU agent suite lower the barrier to trying TPUs at all, which is the point. Google's bet is that once the hardware is easy to use, the specialized systems sell themselves.

:::peringatan
Do not read this as a new chip generation. Both systems reuse silicon announced in April 2026, and neither is available yet. Google gave no price or ship date, and no independent party has tested the confidential-computing or performance claims. The 2027 arrival date comes from Bloomberg, not from Google.
:::

What is still unclear: whether the 8tx's confidential-computing protections will be independently audited, what either system will cost, and which customers actually adopt them. Google scheduled a broadcast on the new systems for the morning of the announcement, with more details promised there.
