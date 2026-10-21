---
title: Why does AI sometimes make up answers?
slug: why-ai-makes-up-answers
locale: en
translationGroupId: ai-mengarang
translationStatus: reviewed
dek: Language models predict the next word, they do not check facts. Here is how the mechanism works, and when you should be careful.
format: explainer
topics: [AI, language]
author: hey.nous
publishedAt: 2026-10-20
updatedAt: 2026-10-20
readingMinutes: 6
cover:
  src: /assets/covers/cover-hallucination.jpg
  alt: Illustration of a navy speech bubble breaking into fragments
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - A generative model produces the statistically most plausible continuation of text, not an answer it has verified as true.
  - Researchers call fluent but ungrounded output hallucination. The term does not mean the model intends to deceive.
  - No single technique eliminates hallucination entirely; the most reliable systems verify answers against external sources.
  - For important decisions, treat AI answers as drafts and check primary sources.
primarySources:
  - title: "Attention Is All You Need (transformer architecture, 2017)"
    url: https://arxiv.org/abs/1706.03762
    publishedAt: 2017-06-12
  - title: "Survey and analysis of hallucinations in large language models (Frontiers in Artificial Intelligence, 2025)"
    url: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1622292/full
    publishedAt: 2025-10-17
relatedSlugs: [when-are-ai-tools-useful]
status: published
seo:
  title: Why does AI sometimes make up answers? | hey.nous
  description: Language models predict the next word, they do not check facts. A clear explanation of AI hallucination.
---

## The mechanism

A language model is trained for one core task: guessing the most plausible next word from patterns in its training data. The architecture behind it, the transformer, was introduced in 2017 and has since become the foundation of nearly every modern language model.

It does not open an encyclopedia in its head. It strings together a continuation of text that sounds convincing based on statistics. That is why its answers can be fluent and wrong at the same time, delivered with the same confidence.

PARAPHRASE: researchers call this phenomenon hallucination, meaning output that is fluent and coherent but not grounded in verifiable sources. The term is technical, not moral. The model is not aware, does not intend, and does not lie. It only computes probabilities.

## Why it cannot be eliminated entirely

A 2025 survey of hallucination research summarizes a consistent finding: no single technique has been shown to eliminate hallucination completely. The most effective path is layered: an intervention at training or decoding time, followed by verification against external sources retrieved as the answer is produced.

In other words, better models help, but checking against the real world matters most. That is good news and a warning at once: systems that force the model to cite its sources are far more trustworthy than those that do not.

## When to be careful

The practical rule is simple. The bigger the impact of the decision, the more mandatory independent verification becomes.

Be fully careful with health, law, finance, and work where the data must be exact. For brainstorming, drafting, or exploring ideas, the model is a genuinely helpful companion, because there what you need is plausible continuation, not final truth.

INTERPRETATION: treat every factual answer as a tidy first draft, not a verdict. If you cannot check it yourself, do not base a decision on it.

## How to use it in practice

Three habits that are cheap and effective. First, ask the model to include sources, then open them; do not just trust the citations. Second, for numbers and dates, cross-check against primary sources. Third, give enough context in the prompt; the same survey found that structured prompting techniques, such as chain-of-thought, reduce hallucination in prompt-sensitive cases, though the model's intrinsic limits remain.
