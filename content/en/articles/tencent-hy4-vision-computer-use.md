---
title: Tencent's Hy4 can now see and use a computer
slug: tencent-hy4-vision-computer-use
locale: en
translationGroupId: tencent-hy4-vision-computer-use
translationStatus: original
dek: Tencent released the full version of Hy4 on November 4, 2026, adding visual understanding and computer-use skills for the first time. It is available now through hosted services, but the model weights Tencent promises are not out yet.
format: news
topics: [AI, models, Tencent]
author: hey.nous
publishedAt: 2026-11-05
updatedAt: 2026-11-05
readingMinutes: 4
cover:
  src: /assets/covers/cover-tencent-hy4-vision-computer-use.jpg
  alt: Abstract soft-3D illustration of a large lens eye and floating app windows over a navy desk shape, in cream, navy, and orange
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Tencent announced the full release of Hy4 on November 4, 2026, adding visual understanding and computer-use capabilities for the first time in the Hy line.
  - Hy4 can read fine-grained image details and complex charts, and it can operate software through command-line and graphical interfaces, including professional tools such as Blender and CAD.
  - The model is available now through Tencent Cloud TokenHub, OpenRouter, and Tencent products including WorkBuddy, CodeBuddy, Yuanbao, and ima, at unchanged list pricing.
  - The model weights and a comprehensive system card are only promised for the coming days, so for now Hy4 is a hosted release, not one you can download and run yourself.
  - Tencent says a cheaper, faster Hy4 Flash follows soon, and WorkBuddy and CodeBuddy are free from November 4 to 15, with TokenHub at 50 percent off through December 31, 2026.
primarySources:
  - title: "Tencent Launches Hy4, Joining the Ranks of the World's Leading Open-Source AI Models (Tencent)"
    url: https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
    publishedAt: 2026-11-04
  - title: "Tencent Releases Full Hy4 Model With Vision and Computer Use (Unite.AI)"
    url: https://www.unite.ai/tencent-releases-full-hy4-model-with-vision-and-computer-use/
    publishedAt: 2026-11-04
relatedSlugs: [india-indigenous-ai-models-eka1-dhir, openai-models-google-cloud]
status: published
seo:
  title: Tencent Hy4 adds vision and computer use | hey.nous
  description: Tencent's full Hy4 release adds vision and computer use for the first time, but its weights are still promised, not published. The facts and the catch.
---

## What happened

Tencent announced the full release of Hy4 on November 4, 2026, ten weeks after the text-only Hy4 preview arrived in August. Two things are genuinely new. First, ==visual understanding==: Hy4 can now process fine-grained image details, analyze complex charts, and reason about mathematical problems presented as images. Second, ==computer use==: it can operate software through both command-line interfaces and graphical interfaces, planning and executing long tasks across applications.

Tencent says the model received specialized training on professional software such as Blender and CAD, and on long-horizon work spanning several applications. The pitch is aimed squarely at workplace use: office collaboration, financial analysis, front-end and game development, and scientific research.

:::ringkasan
Hy4 goes from a text-only preview to a model that can look at a screen and act on it. Vision and computer use are the headline additions, with the same list pricing as the preview.
:::

## A hosted release, for now

Here is the part worth reading twice. The August preview was open-sourced on arrival, but this full release ships as a hosted service first. Tencent says it plans to release the model weights and a comprehensive system card in the coming days, with ecosystem support from the vLLM and SGLang communities. Until those files actually appear, you cannot download Hy4 and run it on your own servers. Every request goes through Tencent's services or a partner such as OpenRouter.

Access is broad, at least. Hy4 is live on Tencent Cloud TokenHub and inside WorkBuddy, CodeBuddy, Yuanbao, WeCom's AI assistant, and ima, plus third-party platforms including OpenRouter, Hermes, and OpenCode. Pricing is unchanged from the preview at approximately 0.90 dollars per million input tokens, 2.70 dollars per million output tokens, and 0.045 dollars per million cached input tokens. WorkBuddy and CodeBuddy are free from November 4 to 15, and TokenHub runs at 50 percent off through December 31, 2026. A cheaper, faster Hy4 Flash is scheduled to follow soon, with no date given.

## What it means for you

Tencent's own numbers make the strongest case in two areas. In a company-run finance evaluation covering 579 real-world tasks and judged with 213 financial professionals, Hy4 scored 3.04, ahead of DeepSeek-V4.1-Flash at 2.97 and Kimi K3.1 Pro and GLM-5.3 at 2.68 each. In internal search evaluations, Tencent says Hy4 cut its hallucination rate from 12.95 percent in the preview to 7.2 percent, with errors from unsupported assumptions falling from 23.1 percent to 5.6 percent. Game development improved too, by 19.1 percent on GameDev and 9.8 percent on GameLogic against the preview.

:::info What computer use means here
Computer use means the model does not just answer in text. It can look at an interface, decide what to click or type, and carry a multi-step task through, for example across a design tool or a spreadsheet. It is the same class of capability that agent products from other labs now offer, and its reliability depends heavily on the task, the permissions it is given, and the safeguards around it.
:::

What is still unclear matters as much as the launch itself. All of the benchmark figures above are Tencent's own, from internal or company-run evaluations, and none have been independently reproduced yet. Tencent itself acknowledges a significant gap to the top closed models, especially on its hardest internal tests. On safety, the company says Hy4 was trained on defensive security data only, with exploit material excluded, and that its ability to turn biological knowledge into experimental protocols is limited. Those claims also await the promised system card.

So treat Hy4 as a useful new option to try through a hosted API, especially if you already work in Tencent's products, and as an open model only once the weights actually land. The release to watch is not this one alone. It is the weights release Tencent says comes in the coming days, because that is what decides whether Hy4 joins the open models developers can actually run, inspect, and build on themselves.
