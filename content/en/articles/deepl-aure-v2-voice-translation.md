---
title: DeepL's Aure v2 cuts live voice translation delay in half
slug: deepl-aure-v2-voice-translation
locale: en
translationGroupId: deepl-aure-v2
translationStatus: original
dek: DeepL launched Aure v2 on November 26, 2026, a voice translation model that turns speech directly into translated speech in one step. DeepL says it cuts the median delay in half versus the original Aure, beats six rival systems in its own tests, and is live now for DeepL Voice customers in six languages.
format: news
topics: [AI, translation, voice]
author: hey.nous
publishedAt: 2026-11-28
updatedAt: 2026-11-28
readingMinutes: 4
cover:
  src: /assets/covers/cover-deepl-aure-v2-voice-translation.jpg
  alt: Abstract illustration of two flowing sound waves, navy and orange, merging into one smooth stream on a cream background
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - DeepL launched Aure v2 on November 26, 2026 at its first Unmute Summit in Tokyo. It is a new end-to-end model that translates speech directly to speech, replacing the old transcribe, translate, then synthesize relay.
  - DeepL says the model cuts median translation delay by 50% versus the original Aure, launched just 15 days earlier, and that half of translated words reach listeners within 3.3 seconds.
  - In DeepL's own November 2026 study, Aure v2 scored higher on translation quality than six competing systems in every language pair tested, with 32% fewer English-Japanese errors than Google Gemini 3.5 Live Translate.
  - Aure v2 is live now across DeepL Voice for Online Meetings, In-Person Conversations, and the API for Voice, in English, German, French, Spanish, Japanese, and Korean, and switches on automatically.
  - Every headline number comes from DeepL's own internal study, with no independent verification yet, so the figures are the company's claims, not settled fact.
primarySources:
  - title: "DeepL introduces Aure v2, its fastest Voice AI translation model (DeepL)"
    url: https://www.deepl.com/en/press-release/aure-v2
    publishedAt: 2026-11-26
  - title: "DeepL Introduces Aure v2, Its Fastest Voice AI Translation Model (PR Newswire)"
    url: https://www.prnewswire.com/news-releases/deepl-introduces-aure-v2-its-fastest-voice-ai-translation-model-302950629.html
    publishedAt: 2026-11-26
relatedSlugs: [tencent-hy4-vision-computer-use, gemini-computer-use-mac]
status: published
seo:
  title: DeepL Aure v2 halves voice translation delay | hey.nous
  description: DeepL launched Aure v2, a speech-to-speech translation model that cuts median delay by 50% versus the original Aure. The facts, the benchmarks, and the caveats.
---

## What happened

DeepL launched ==Aure v2== on November 26, 2026, its second voice translation model in fifteen days, and the headline number is simple: the median delay in live translation is cut in half.

The model was unveiled at DeepL's first Unmute Summit in Tokyo. It replaces the original Aure, which launched on November 11 and made translated speech follow the speaker's voice, tone, and intonation. Aure v2 keeps that behavior and changes what happens underneath. Instead of passing audio through three separate stages, transcribing speech to text, translating the text, then generating speech from the translation, it translates directly from speech to speech in a single model.

That matters because each stage in the old relay added its own waiting time. DeepL's argument is that the relay was the delay: remove the handoffs and the translation can start sooner and arrive closer to the pace of a real conversation. In the company's internal study, half of the translated words reached listeners within 3.3 seconds, and the delay grew by only 0.1 seconds across a full minute of continuous speech.

DeepL also used the summit to launch a Disaster Multilingual Communication Support Program in Japan, giving municipalities and support organizations free access to DeepL Voice for In-Person Conversations so they can talk with people affected by disasters in real time.

## The hard part is knowing when to start

The architecture is only half the story. The other half is a timing problem that DeepL's CTO, Sebastian Enderlein, calls the real challenge of live translation: start too early and you translate before you have enough context, start too late and the conversation drags.

This is hardest in languages like German and Japanese, where the information that decides a sentence's meaning can arrive at the very end of it. Training a model to make that call is difficult because recordings of real-time speech translation, with the right timing and expression, are scarce. DeepL says it used reinforcement learning instead: during training, Aure v2 was rewarded for translations that were both accurate and quick to start, so over time it learned to recognize when it had heard enough to begin.

:::ringkasan
Aure v2 collapses the old three-step relay into one model that translates speech straight to speech, and reinforcement learning taught it when to start translating instead of waiting for a full sentence. DeepL says the result is half the median delay of the original Aure, which launched only fifteen days earlier.
:::

## How it stacks up, according to DeepL

The launch comes with benchmark claims, and they are all DeepL's own. In a November 2026 internal study on one-minute recordings of real speech across ten language pairs, with human-validated transcripts, Aure v2 scored higher on translation quality than six competing systems in every language pair tested. The sharpest named comparison is English to Japanese, one of the hardest pairs for live voice translation, where DeepL says Aure v2 made 32% fewer errors than Google Gemini 3.5 Live Translate.

:::info End-to-end speech-to-speech
A model that takes spoken audio in one language and produces spoken audio in another, without separate transcription, text translation, and speech synthesis steps in between. Removing the handoffs cuts delay and keeps tone and rhythm closer to the original speaker.
:::

:::peringatan
Every performance figure in this story comes from DeepL's own November 2026 study. DeepL notes in the fine print that results may differ in real conversations, and no independent test of Aure v2 has been published yet. Treat the 50% delay cut and the quality wins as the company's claims until outside measurements arrive.
:::

The launch also lands on strong momentum for DeepL Voice. DeepL says total voice usage was up more than eight times year over year in the third quarter of 2026, with translated meeting minutes up about seven times. Growth was fastest in Asia: meeting usage grew more than seven times in Japan and five times in South Korea, and active DeepL Voice subscriptions with meeting usage grew about twelve times year over year in Japan and South Korea combined.

## What it means for you

If you already use DeepL Voice, there is nothing to install: Aure v2 is automatically enabled for supported languages across online meetings, in-person conversations, and the API. The practical test is whether a meeting across languages starts to feel like a normal conversation, where you can respond to an idea while it is still being shared instead of waiting for the translation to catch up.

For teams, the more interesting number may be the English-Japanese one. Japanese is the language where live translation usually breaks first, because the verb often comes last, so a 32% error reduction there, if it holds up outside DeepL's lab, would matter more than the headline delay figure. Customer support is the other obvious use: DeepL's CEO, Jarek Kutylowski, framed the launch around agents resolving issues faster without losing the nuance of a conversation.

What is still unclear: DeepL has published no price change for Aure v2, and the six launch languages leave out large parts of the world, including Indonesian, Hindi, and Portuguese. The quality claims rest entirely on DeepL's own study, scored with its own metric, so the real verdict will come from independent tests and from users running it in noisy, accented, real-world calls. Until then, the launch is a credible technical step with numbers that still need outside confirmation.
