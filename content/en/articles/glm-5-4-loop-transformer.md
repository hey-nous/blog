---
title: Z.ai's GLM-5.4 runs its layers twice to think deeper
slug: glm-5-4-loop-transformer
locale: en
translationGroupId: glm-5-4-loop-transformer
translationStatus: original
dek: Z.ai's new flagship runs a block of 28 layers twice per token instead of adding parameters, and claims the result thinks like a model two to four times its size. The catch: no flagship benchmark scores yet.
format: news
topics: [AI, models, research]
author: hey.nous
publishedAt: 2026-11-24
updatedAt: 2026-11-24
readingMinutes: 4
cover:
  src: /assets/covers/cover-glm-5-4-loop-transformer.jpg
  alt: Abstract soft-3D illustration of a looping ribbon of navy and orange layers folding back on itself over a cream background
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Z.ai released GLM-5.4 on November 23, 2026, its first flagship built on a Loop Transformer: 28 layers of the roughly 750B-parameter GLM-5 base run twice per token.
  - Z.ai claims the looped model reaches intelligence comparable to 2T-3T parameter models, but it has published no flagship benchmark scores; the only numbers come from a smaller 30B test model.
  - On that 30B test, looping cut output tokens by 10-14% on math and science benchmarks, shifting some reasoning from visible chain-of-thought into the loop itself.
  - GLM-5.4 is live now in the GLM Coding Plan, ZCode, and Z.ai Chat; the API is coming soon and open weights are promised after safety hardening.
  - Z.ai warns the model can fall into overly long "marathon thinking" loops, where it keeps reasoning instead of answering.
primarySources:
  - title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer (Z.ai)"
    url: https://z.ai/blog/glm-5.4
    publishedAt: 2026-11-23
  - title: "Z AI Releases GLM-5.4: A 750B Loop Transformer That Runs 28 Layers Twice (MarkTechPost)"
    url: https://www.marktechpost.com/2026/11/23/zai-glm-5-4-loop-transformer/
    publishedAt: 2026-11-23
relatedSlugs: [google-gemini-4-neon, kimi-hosted-agents]
status: published
seo:
  title: GLM-5.4 loops its layers to think deeper | hey.nous
  description: Z.ai's GLM-5.4 runs 28 layers twice per token instead of growing to trillions of parameters. The idea, the numbers, and what is still unproven.
---

## What happened

Z.ai released GLM-5.4 on November 23, 2026, a flagship model built on an idea the lab calls the ==Loop Transformer==. Instead of stacking more layers or more parameters, GLM-5.4 takes a block of 28 layers from its roughly 750B-parameter GLM-5 base and runs it twice for every token, refining the result on the second pass. Z.ai says the looped model reaches intelligence comparable to models with 2 to 3 trillion parameters, without actually being one.

The idea itself is not new. The 2018 Universal Transformer proposed weight-shared depth, and smaller looped models have shown gains before. What is new is doing it at flagship scale. Z.ai says it validated the design progressively on 1B, 4B, 30B, and 750B base models before committing its flagship to it.

:::ringkasan
GLM-5.4 is Z.ai's first flagship Loop Transformer: 28 layers, run twice per token, on a roughly 750B-parameter base. Z.ai claims it thinks like a 2-3 trillion parameter model, but has not published flagship benchmark scores to prove it.
:::

## How the loop works

In a standard Transformer, each layer runs once per forward pass. In GLM-5.4, a group of weight-shared layers runs for multiple iterations, refining the hidden states from the previous pass. The network gets deeper without gaining parameters, because the same weights are reused.

Doing that at 750B scale took three engineering changes, according to Z.ai. Per-token gates control how much each iteration writes back into the model's working memory, so the first pass writes conservatively and the second pass refines. A hybrid cache design lets the second loop reuse the sparse attention data selected in the first pass, so the extra loop costs only a small sliding window of memory instead of a full second cache. And the second loop reuses the first loop's attention indices, adding no extra indexing work.

The payoff Z.ai reports is speed and shorter answers. GLM-5.4 reaches up to 200 tokens per second off-peak and holds 70-80 tokens per second at peak load. On a controlled 30B test model, looping cut average output length by 10-14% on math and science benchmarks, mostly from shorter chains of thought. In effect, part of the reasoning moves from explicit output tokens into the silent depth of the loop.

The model also marks the start of what Z.ai calls ==Generalized Coding==: using code as the execution layer for tasks beyond software, from generating videos and games to 3D modeling and mechanical design in FreeCAD. GLM-5.4 adds native vision to the flagship tier to support that push.

## What it means for you

For now, the practical reach is narrow. GLM-5.4 is available through Z.ai's own products: the GLM Coding Plan, the ZCode desktop app, and Z.ai Chat. There is no public API yet, listed as coming soon, and no open weights yet, promised after safety hardening is complete.

The bigger question is whether looping becomes a real alternative to scaling up. If a 750B model can genuinely match a 2-3T model by thinking twice instead of growing, that changes the economics of frontier models: less memory, less bandwidth, cheaper serving. Z.ai is not alone here either. Thinking Machines shipped Inkling 2 Mini, another looped model, on November 20, three days before GLM-5.4.

:::peringatan
Do not take the 2-3 trillion parameter claim as measured fact. Z.ai published no flagship benchmark scores for GLM-5.4. The only quantitative results in its post come from a 30B test model, far below frontier level, and independent evaluators have not yet published verified scores.
:::

What is still unclear: whether the loop holds up on the hardest reasoning tasks without spiraling. Z.ai admits GLM-5.4 can get caught in overly long "marathon thinking" loops, though it says the extra reflection consistently improves accuracy. The lab is now exploring adaptive compute, where harder tokens would dynamically get more iterations, and says its next, significantly larger model will carry forward what it learned here.
