---
title: India releases three homegrown AI models for its languages
slug: india-indigenous-ai-models-eka1-dhir
locale: en
translationGroupId: india-indigenous-ai-models-eka1-dhir
translationStatus: original
dek: India unveiled three homegrown AI foundation models on November 3, 2026: EKA-1, a 26.3-billion-parameter model covering all 22 scheduled Indian languages, and the smaller, offline-capable Dhīr 2B and Dhīr 5B. The release is the IndiaAI Mission's bid for AI that India builds and controls itself.
format: news
topics: [AI, models, India]
author: hey.nous
publishedAt: 2026-11-04
updatedAt: 2026-11-04
readingMinutes: 4
cover:
  src: /assets/covers/cover-india-indigenous-ai-models-eka1-dhir.jpg
  alt: Abstract soft-3D illustration of three glowing model blocks rising over a stylized map shape, in cream, navy, and orange
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - On November 3, 2026, India's Ministry of Electronics and IT unveiled three indigenous foundation models in New Delhi: EKA-1 by Soket Labs and Dhīr 2B and Dhīr 5B by ZenteiQ.
  - EKA-1 has 26.3 billion parameters, was trained on about 7.5 trillion tokens, and covers all 22 scheduled Indian languages plus English, aimed at math, code, reasoning, and agentic work.
  - Dhīr 2B and Dhīr 5B are compact, open-source models for English and 10 Indian languages, built to run offline on laptops, phones, and on-premise systems in low-connectivity or sensitive settings.
  - The models are available through AIKosh, the IndiaAI Mission's datasets platform, for researchers, students, enterprises, and the public.
  - No benchmark scores or independent evaluations were published with the launch, so how these models compare with global alternatives is still unverified.
primarySources:
  - title: "IndiaAI Mission Released Indigenous Foundation Models EKA-1 by Soket and Dhīr 2B & Dhīr 5B by ZenteiQ (Press Information Bureau)"
    url: https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2332315
    publishedAt: 2026-11-03
  - title: "IndiaAI Foundation Models: EKA-1 and Dhir Launch (CIO)"
    url: https://cio.eletsonline.com/artificial-intelligence/indiaai-soket-zenteiq-foundation-models/76707/
    publishedAt: 2026-11-03
  - title: "India Launches Three Homegrown AI Models For Banking, Cybersecurity And Offline Use (The 420)"
    url: https://the420.in/india-launches-three-homegrown-ai-models-for-banking-cybersecurity-and-offline-use/
    publishedAt: 2026-11-03
relatedSlugs: [dhs-deepseek-ban-federal-systems, ai-training-opt-out-robots-txt]
status: published
seo:
  title: India's homegrown AI models EKA-1 and Dhīr | hey.nous
  description: India unveiled three homegrown AI models on November 3, 2026: EKA-1 for 22 Indian languages and the offline-capable Dhīr 2B and 5B. What was announced.
---

## What happened

India unveiled three homegrown AI ==foundation models== on November 3, 2026, at a press event in New Delhi: EKA-1, built by Soket Labs, and Dhīr 2B and Dhīr 5B, built by ZenteiQ. The release was presented by S. Krishnan, Secretary of the Ministry of Electronics and Information Technology (MeitY), under the IndiaAI Mission's Innovation Centre pillar for foundation models.

The pitch from the ministry is strategic autonomy. Krishnan said developing indigenous models strengthens India's technological and strategic autonomy in AI, and opens up productivity gains across government, industry, research, and education. Both builders were selected under the mission's foundation-model program, and their work was supported by subsidized national AI compute infrastructure and research funding.

## EKA-1: the big model, tuned for India

EKA-1 is the heavyweight of the three. Soket Labs describes it as an open, sparse hybrid language model with 26.3 billion parameters, trained on approximately 7.5 trillion tokens. It covers all 22 languages listed in India's Eighth Schedule alongside English, and is designed for math, code, reasoning, and agentic work.

Soket CEO Abhishek Upperwal said the model was tailored to India's banking, financial services, and cybersecurity landscape, built to handle sector-specific requirements and the country's evolving digital ecosystem. That is the target market, not a deployment claim: the launch announcement does not establish that any bank or cyber-defence system is already using EKA-1 in production.

## Dhīr: small models that run without the cloud

The Dhīr pair takes the opposite approach. ZenteiQ, a startup born at the Indian Institute of Science in Bengaluru, built Dhīr 2B and Dhīr 5B as open-source models trained from scratch, rather than adapted from existing weights. Dhīr 2B is a dense model with 2.03 billion parameters; Dhīr 5B uses a mixture-of-experts design with 5.09 billion total parameters, of which 1.79 billion are active at a time.

Both support English and 10 Indian languages, and both are built to run offline: on laptops, on phones, and on an organization's own servers. ZenteiQ CEO Prof. Sashikumaar Ganesan said the lightweight design lets the models run on-device on mobile phones without cloud connectivity, keeping data on the device. The intended settings are exactly where a cloud call is a problem: defence, government, industrial, and education work in low-connectivity or sensitive environments. ZenteiQ is releasing the model weights under the Apache 2.0 licence, with documentation and evaluation tools, through AIKosh.

:::ringkasan
India's November 3 release pairs two strategies: EKA-1, a large model covering all 22 scheduled Indian languages for enterprise and sector work, and the Dhīr pair, small open-source models that run offline on ordinary devices. Both are available through AIKosh for researchers, students, enterprises, and the public.
:::

## What it means for you

If you build for Indian users, the practical news is language coverage plus deployment choice. A model that handles all 22 scheduled languages natively is aimed at the long tail of Indian-language services that global models serve unevenly, from customer support to citizen services. The Dhīr models matter differently: an offline, on-premise assistant changes the compliance conversation for banks, hospitals, and government offices that cannot send sensitive data to a foreign cloud.

For everyone else, this is a sovereignty play to watch. India is following the same logic as other governments building domestic models: reduce dependence on technology built and controlled elsewhere, and keep the data and the decisions closer to home. The IndiaAI Mission, approved by the Union Cabinet in March 2024, runs seven pillars spanning compute, datasets, skills, and startup financing; these three models are among its first public foundation-model outputs.

:::info What a foundation model is
A foundation model is a large AI model trained on broad data that can be adapted to many tasks, rather than built for one job. EKA-1 and the Dhīr models are the base layers: developers and organizations fine-tune them, or build assistants on top of them, for specific uses like document retrieval, coding help, or citizen services.
:::

:::peringatan
Do not read this launch as proof the models match global leaders. No benchmark scores, independent evaluations, or training-cost figures were published with the announcement, so claims about quality and competitiveness are unverified for now. The real test is what happens after launch: adoption, outside scrutiny, and results that others can check.
:::

What is still unclear: how EKA-1 and the Dhīr models score on public benchmarks, when wider enterprise deployments will appear, what the larger follow-ups look like (Soket is also building a 120-billion-parameter open-source model for Indian languages, and a Dhīr 9B is reportedly in development), and whether the open weights attract a developer community or stay mostly a government showcase. The announcement is real and the models are available; the verdict on their quality is still to come.
