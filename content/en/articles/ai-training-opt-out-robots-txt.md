---
title: Four AI labs back one robots.txt opt-out for AI training
slug: ai-training-opt-out-robots-txt
locale: en
translationGroupId: ai-training-opt-out-robots-txt
translationStatus: original
dek: OpenAI, Google, Microsoft, and Anthropic said on October 30, 2026 that they will honor one shared robots.txt token for AI training preferences. One line could replace a rule per company, but most of the system is not live yet, and it does not cover AI answers or data already collected.
format: news
topics: [AI, policy, web]
author: hey.nous
publishedAt: 2026-10-31
updatedAt: 2026-10-31
readingMinutes: 4
cover:
  src: /assets/covers/cover-ai-training-opt-out-robots-txt.jpg
  alt: Abstract 3D illustration of a cream web page panel with a small navy gate and soft navy and orange shapes approaching it
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - OpenAI, Google, Microsoft, and Anthropic announced on October 30, 2026 that they will honor a shared robots.txt policy token, __usage_ai-training, for AI training preferences.
  - The token is defined in an individual IETF Internet-Draft by Anthropic standards lead Kevin Kelley, dated October 30, 2026 and expiring May 3, 2027; it is not yet a formal IETF standard.
  - Timelines differ sharply: Anthropic says it has already started implementing support, OpenAI says in the coming months, Microsoft names February 1, 2027, and Google says 2027.
  - The signal covers training only. It does not block crawling or search, does not remove content already collected or trained on, and is voluntary, so it binds only providers that adopt it.
  - Microsoft goes further than the shared token, adding a separate AI grounding preference and page-level training controls, with a March 1, 2027 deadline for sites still relying on its older NoArchive and NoCache tags.
primarySources:
  - title: "Supporting a shared AI training control for websites (Google Search Central Blog)"
    url: https://developers.google.com/search/blog/2026/10/ai-training-control
    publishedAt: 2026-10-30
  - title: "Making it easier for websites to express AI training preferences (OpenAI)"
    url: https://openai.com/index/helping-websites-express-ai-training-preferences
    publishedAt: 2026-10-30
  - title: "Machine-Readable Training Preference Signal (IETF Internet-Draft)"
    url: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/
    publishedAt: 2026-10-30
  - title: "Microsoft Bing gives publishers more control over how AI uses their content (Search Engine Land)"
    url: https://searchengineland.com/microsoft-bing-gives-publishers-more-control-over-how-ai-uses-their-content-499967
    publishedAt: 2026-10-30
relatedSlugs: [google-gemini-4-carbon]
status: published
seo:
  title: Four AI labs back one robots.txt opt-out | hey.nous
  description: OpenAI, Google, Microsoft, and Anthropic will honor one shared robots.txt token for AI training opt-outs. How it works, when each lab acts, and what it does not do.
---

## What happened

On October 30, 2026, four of the largest AI labs lined up behind a single way for websites to say no to AI training. OpenAI, Google, Microsoft, and Anthropic each said they will honor a shared ==robots.txt== policy token, ==__usage_ai-training==, so a publisher no longer has to write a separate rule for every company's crawler. Until now, opting out meant naming each crawler one by one, such as Google-Extended for Google, and repeating the work whenever a new crawler appeared.

The mechanism itself is deliberately boring, and that is the point. It uses ordinary robots.txt syntax, introduces no new directives and no new grammar, and puts the token where a crawler name normally goes. The draft's own example is:

```
User-Agent: __usage_ai-training
Disallow: /
Allow: /press-kit/
```

That group expresses a preference against AI training for all paths except those under /press-kit/. A wildcard group, User-Agent: *, does not match the token, and a robots.txt file with no token group expresses no preference at all. The draft, titled Machine-Readable Training Preference Signal, was written by Kevin Kelley, a technical lead for standards at Anthropic, in the IETF's AI Preferences working group. It is dated October 30, 2026 and expires May 3, 2027. As an individual Internet-Draft, it is not endorsed by the IETF and has no formal standing in the IETF standards process yet.

The four commitments are not the same commitment on the same day. Anthropic has already started implementing support, according to Kelley. OpenAI says it aims to implement the signal in the coming months and will share implementation details later, while its existing crawler controls continue to apply. Google says it aims to support the control along with other AI providers in 2027. Microsoft gives the firmest date: it will begin honoring the new preferences on February 1, 2027, as it crawls pages.

## One token, four different clocks

Google's post explains the most important interaction for its own system. If a site uses the shared token to opt out of training and does not explicitly specify Google-Extended, Google plans to interpret that as if the publisher had disallowed Google-Extended, the training control Google has offered since 2023. Company-specific controls keep working alongside the shared signal, so a site can opt out broadly and still tailor rules per provider. Google also says sites that specifically allow Google-Extended remain eligible to appear in responses and receive clicks via grounding in Gemini Apps.

Microsoft is the outlier in scope, not just timing. Beyond the shared training preference, it is adding a separate ==AI grounding== preference: whether content may help generate AI answers in Bing, Copilot, and Microsoft 365, as distinct from training a model. It is also extending the training preference to individual pages through a meta tag or response header, and adding a Limited Grounding option that allows grounding in Microsoft's own products but not in the grounding services it sells to others. Training and grounding both default to Allow when no preference is published. Microsoft's timeline, as reported from its post, runs from temporary grounding controls in Bing Webmaster Tools on December 15, 2026, to honoring the new preferences on February 1, 2027, with sites using the older NoArchive or NoCache tags asked to switch by March 1, 2027. Temporary grounding preferences expire September 30, 2027.

:::ringkasan
The headline is coordination, not instant protection. Four labs agreed on one token and one meaning for AI training preferences, but only Anthropic says implementation has started. Everyone else is months away, and the shared token itself still needs to survive the standards process before it can be called a standard.
:::

## What it means for you

If you run a website, the practical advice for today is unchanged: keep the company-specific rules you already have, because they are what works now. The shared token costs nothing to add and may cover you as support arrives, but adding it today does not switch anything on at Google, OpenAI, or Microsoft. Think of it as a reservation for a system still being built, not a block that is already enforced.

If you only read the web, the change is even more indirect. This signal is about training future models, not about what appears in today's search results or AI answers. Opting a site out of training does not take it out of search, and for Microsoft it explicitly does not affect eligibility for regular Bing results. The fight over AI answers, where a model quotes or summarizes a page in real time, is a separate question, and only Microsoft's grounding control addresses it directly in this announcement.

The reason publishers care anyway is leverage. For years, each lab set its own crawler names and its own rules, which put the maintenance burden on the smallest sites. A shared token flips that burden: one entry, read the same way by every participating provider. If it sticks, the next new AI crawler will not force every publisher to learn another name. If it does not stick, publishers will be back to maintaining a list, and the early adopters will have spent very little to find out.

:::peringatan
Do not mistake this token for a general AI block. It is not a directive for crawling behavior, it does not stop a page from being indexed or quoted in AI answers, and it does nothing about content already collected into datasets or trained into existing models. Robots.txt has always worked on trust, and this signal is voluntary: it binds only the providers that choose to honor it.
:::

What is still unclear: whether the draft becomes a durable standard before it expires on May 3, 2027, how each lab's implementation will handle edge cases such as page-level overrides and private agreements, and whether other providers join. Meta, for example, welcomed a common signal in reporting of the announcement but did not commit to honoring it. The first real test will not be the announcement. It will be the first publisher who adds the token, waits for a recrawl, and checks whether every lab actually respected it.
