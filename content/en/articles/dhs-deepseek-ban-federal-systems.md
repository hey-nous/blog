---
title: US orders DeepSeek purged from federal civilian IT systems
slug: dhs-deepseek-ban-federal-systems
locale: en
translationGroupId: dhs-deepseek-ban-federal-systems
translationStatus: original
dek: DHS published an exclusion and removal order barring DeepSeek from federal civilian procurements and ordering its removal from agency IT, including third-party tools built on it. The order was signed in July but only made public this week.
format: news
topics: [AI, policy, DeepSeek]
author: hey.nous
publishedAt: 2026-10-24
updatedAt: 2026-10-24
readingMinutes: 4
cover:
  src: /assets/covers/cover-dhs-deepseek-ban.jpg
  alt: Illustration of a stack of navy server blocks with one module being removed, and a broken orange chain floating nearby
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - The Department of Homeland Security published Exclusion and Removal Order #2026-01 in the Federal Register on October 20, 2026, banning DeepSeek products from federal civilian IT procurements and ordering their removal from agency systems.
  - The order reaches beyond DeepSeek itself: third-party products and services "developed using DeepSeek implementations" must also be removed, pulling federal contractors' software supply chains into scope.
  - The order was signed by DHS Secretary Markwayne Mullin on July 24, 2026 and surfaced publicly nearly three months later; the 60-day window for agencies to request exceptions had already closed.
  - The Federal Register notice itself gives no reasons for the order. Reuters reported the signed order calls DeepSeek's models "multiple threat vectors," citing risks of sensitive data reaching China and potential malware.
  - This is Washington's first full-system removal order against a Chinese AI lab; earlier restrictions were piecemeal bans on government devices.
primarySources:
  - title: "Notice of Order Regarding Exclusion and Removal of DeepSeek Products (Federal Register)"
    url: https://www.federalregister.gov/d/2026-21447
    publishedAt: 2026-10-20
  - title: "U.S. Orders DeepSeek Removed From Federal Civilian Systems, Bans New Purchases (The Hacker News)"
    url: http://thehackernews.com/2026/10/us-orders-deepseek-removed-from-federal.html
    publishedAt: 2026-10-21
relatedSlugs: [claude-duet, openai-models-google-cloud]
status: published
seo:
  title: US bans DeepSeek from federal IT systems | hey.nous
  description: DHS ordered DeepSeek products purged from US federal civilian IT, including third-party tools built on them. The facts, the scope, and what is still unclear.
---

## What happened

The US government has ordered DeepSeek off its civilian agency networks, and the ban follows the model into anything built on it.

On October 20, 2026, the Department of Homeland Security published ==Exclusion and Removal Order #2026-01== in the Federal Register. It does two things. First, it excludes information technology products and services developed by Hangzhou DeepSeek Artificial Intelligence Co., Ltd. and its affiliated entities from federal civilian agency procurements. Second, it orders all DeepSeek and DeepSeek-affiliate products, plus third-party products and services "developed using DeepSeek implementations," removed from civilian agency information technology systems.

The timeline is the strange part. The order was signed by DHS Secretary Markwayne Mullin on July 24, 2026, and the law requires the company named and the relevant congressional committees to be notified. But DHS filed it for public inspection at the Federal Register on October 19, a full 87 days later, and it was published the next day. The order's exception clause let agencies request written exceptions within 60 days of issuance with a compelling justification, which means that window had already closed before the public ever saw the order.

The legal authority is the Federal Acquisition Supply Chain Security Act of 2018, under which the Secretary of Homeland Security may issue exclusion and removal orders for civilian agencies, following a recommendation from the Federal Acquisition Security Council. This is only the second time the law has been used: its first use was the Director of National Intelligence's 2025 exclusion of Acronis from intelligence community procurement.

## The clause that reaches beyond DeepSeek

The headline ban covers DeepSeek's own products, the R1 and V3 models the company is known for. The sharper part is the derivative clause. Agencies must also strip out third-party software developed using ==DeepSeek implementations==, a term the notice never defines. That turns a targeted prohibition into a supply chain audit: agencies cannot rely on the supplier's name on the box, because a third-party interface does not exempt a covered DeepSeek implementation underneath. Any vendor selling into civilian agencies now has to know what model sits under every product it ships.

The order also binds government contractors. A federal contract carrying FAR clause 52.204-30 bars the contractor from providing or using any covered product or service while performing the contract, and requires checking SAM.gov for "FASCSA order" at least once every three months, making a reasonable inquiry into its supply chain when a new order could affect it, and reporting any covered product to the contracting officer within 3 business days of identifying it.

:::peringatan
The Federal Register notice itself gives no reasons for the order. The "multiple threat vectors" language, including risks that sensitive data could reach China, that the models could contain malware or other vulnerabilities, and that use could produce "actionable intelligence" on US persons, comes from the signed order as reported by Reuters, not from the published notice. Treat those as the department's stated risk assessment, not proven incidents.
:::

## What it means for you

Scope matters here, because the order is narrower than the headlines. It covers only what civilian executive branch agencies buy and run. National security systems are excluded, the Defense Department is not covered, and it restricts nothing for companies or the public. If you sell into US federal contracts, though, this is a compliance event: audit your stack for DeepSeek now, including tools that quietly call its API under the hood.

For context, this escalates a pattern that started small. By February 2025, Congress, NASA, the Navy, the Pentagon, and Texas had each barred DeepSeek from government devices one body at a time. This is the first order that reaches into whole systems and procurement pipelines rather than devices.

Beijing responded quickly. Foreign ministry spokesperson Mao Ning said at an October 20 briefing that China opposes "overstretching of the concept of national security" and will "resolutely safeguard the legitimate rights and interests of Chinese companies," the Associated Press reported. DeepSeek did not immediately respond to the AP's request for comment.

:::ringkasan
DHS banned DeepSeek from US civilian federal IT and ordered it removed from agency systems, including third-party tools built on it. The order dates to July but surfaced publicly on October 20; the 60-day exception request window had already closed. Reasons were not stated in the published notice.
:::

What is still unclear: the notice never defines "DeepSeek implementations," so nobody knows exactly which derivative tools count. DHS has not explained the three-month gap between signing and publication, or how agencies are supposed to verify compliance across their vendor stacks. Watch for contractors disclosing FASCSA reviews in earnings calls, that is where the real scope will show.
