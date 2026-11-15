---
title: OpenAI's ChatGPT Wallet lets your AI agent pay for you
slug: openai-chatgpt-wallet
locale: en
translationGroupId: openai-chatgpt-wallet
translationStatus: original
dek: OpenAI launched ChatGPT Wallet on November 13, 2026. Inside its dots agents, a ChatGPT Pro subscriber in the US can now have the agent complete a purchase, approving each one with a biometric check while the real card number never leaves the wallet.
format: news
topics: [AI, agents, payments]
author: hey.nous
publishedAt: 2026-11-15
updatedAt: 2026-11-15
readingMinutes: 4
cover:
  src: /assets/covers/cover-openai-chatgpt-wallet.jpg
  alt: Abstract soft-3D illustration of a wallet opening into floating payment cards and a glowing checkout button
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - OpenAI launched ChatGPT Wallet on November 13, 2026, a wallet that lets its dots agents complete purchases on a user's behalf.
  - Every purchase needs the user to review the items, total, and card, then approve it with a security check such as Face ID or a fingerprint scan.
  - The agent and the merchant never see the real card number: the payment network issues a token that stands in for it, the same model as tap to pay.
  - At launch it is limited to ChatGPT Pro subscribers aged 18 and older in the US with eligible US-issued cards, and it works only inside dots conversations.
  - OpenAI says users will eventually be able to delegate purchases to their agent within limits they set, but that is a future step with no date attached.
primarySources:
  - title: "Introducing ChatGPT Wallet (OpenAI)"
    url: https://openai.com/index/introducing-chatgpt-wallet/
    publishedAt: 2026-11-13
  - title: "OpenAI launches ChatGPT Wallet, enabling 'dot' agents to make purchases (9to5Mac)"
    url: https://9to5mac.com/2026/11/13/openai-launches-chatgpt-wallet-enabling-dot-agents-to-make-purchases/
    publishedAt: 2026-11-13
relatedSlugs: [openai-gpt-6-cyber, kimi-hosted-agents]
status: published
seo:
  title: ChatGPT Wallet: your AI agent can now pay | hey.nous
  description: OpenAI's ChatGPT Wallet lets dots agents complete purchases with a tokenized card and a biometric check on every buy. Who can use it, and what is still missing.
---

## What happened

OpenAI announced ==ChatGPT Wallet== on November 13, 2026, a wallet that lets its AI agents pay for things on a user's behalf. It is the first time ChatGPT has moved from helping people research and compare products to actually completing the purchase, and OpenAI frames the scale of that step with one number: 1.2 billion people use ChatGPT each week.

The wallet is built in partnership with American Express, Mastercard, and Visa, and it works inside ==dots==, OpenAI's always-on agents. It starts narrow: rolling out first to ChatGPT Pro subscribers in the United States who are 18 or older and hold eligible US-issued cards. OpenAI's support page, as reported by The Verge, lists eligible American Express, Chase, Mastercard, and Visa credit cards, and says debit cards are not supported at launch.

## How a purchase works

The flow has three steps, and the user is in the middle of every one. You add a card once. When your dot finds something to buy, you review the items, the total, and the selected card, then approve it with a security check such as Face ID or a fingerprint scan. Each approval creates a clear record of the purchase you authorized.

The security design is the point of the announcement. After you approve, the payment network issues a ==payment token==, a substitute card number with its own security code and expiration date, and that token is what the merchant sees. Your actual card details are never shared with the agent or the business, the same tokenization model behind tap to pay, Apple Pay, and Google Wallet. You keep your card's existing rewards and protections for eligible disputes, and you transact directly with the business, which keeps control of pricing, fulfillment, returns, and customer service.

:::info What is a payment token?
A payment token is a stand-in card number issued by the payment network for one wallet or device. If it leaks, it cannot be used like your real card, because the network maps it back to your account only for authorized transactions. It is the same mechanism that lets your phone pay at a store without handing over your card number.
:::

What the wallet is not: it does not create a bank account or a stored balance, extend credit, or transfer funds. OpenAI is not the seller and not the bank. And it does not work everywhere yet. OpenAI says some websites may unintentionally block agent purchases, and the feature only works inside a conversation with a dot, not in ordinary ChatGPT chats, Work, or standalone Codex threads.

## What it means for you

For most readers, the honest answer is: not much, yet. The launch is limited to US Pro subscribers, and OpenAI has given no date for Plus, Business, or free users, or for any country outside the US. If you are outside that group, the wallet is a preview of where agent shopping is heading, not something you can try today.

For the people who can use it, the design choice that matters is the approval step. OpenAI is not asking you to trust an agent with your card. It is asking you to trust a per-purchase check: the agent can assemble the order, but nothing is charged until you look at it and pass a biometric check. That is a deliberately conservative first step, and OpenAI says so, describing a limited rollout so it can learn from real-world use before expanding.

The direction of travel is stated in the announcement too. Over time, OpenAI expects users to be able to delegate purchases entirely to their agent by setting clear parameters, such as spending limits, purchase categories, or time periods, and pre-approving purchases on that basis, with enhanced safeguards. That is the version where an agent could reorder supplies or book travel without asking each time. It is also the version that raises the real questions about spending control, mistaken orders, and who is liable when an agent buys the wrong thing, and OpenAI has not answered those yet.

:::peringatan
Full delegation does not exist yet. At launch, every purchase needs your review and a security check. Any claim that ChatGPT can already buy things on its own, without you approving each order, is wrong.
:::

Alongside the wallet, OpenAI published a Commerce Partner Playbook for businesses, with guidance on claiming a business profile in ChatGPT, letting verified agent requests through with Web Bot Auth, and configuring fraud systems to recognize legitimate agent purchases. Its fraud prevention partners include Forter, Riskified, Sardine, and Signifyd, and its payment service providers include Adyen, Checkout.com, and Stripe.

:::ringkasan
ChatGPT Wallet, launched November 13, lets OpenAI's dots agents complete purchases for US ChatGPT Pro subscribers, with a biometric approval on every order and a payment token standing in for the real card number. It is built with American Express, Mastercard, and Visa, and it works only inside dots conversations for now. Wider availability and full purchase delegation are promised for later, with no dates given.
:::

What is still unclear: when Wallet reaches users outside the US or below the Pro tier, how many merchants will accept agent purchases in practice, and what the delegation controls will actually look like when they arrive. OpenAI has also not said whether it takes a cut of purchases. The answers will come from the rollout itself, and from whether retailers adapt their checkout and fraud systems to agents or keep blocking them.
