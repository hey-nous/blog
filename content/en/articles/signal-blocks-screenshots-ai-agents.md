---
title: Signal blocks screenshots to keep AI agents out of chats
slug: signal-blocks-screenshots-ai-agents
locale: en
translationGroupId: signal-blocks-screenshots-ai-agents
translationStatus: original
dek: Signal will block screenshots inside its app on iOS 27 and auto-enable screen security on Android when an AI assistant tries to read the screen, calling OS-level AI agents an existential threat to privacy.
format: news
topics: [AI, privacy, Signal]
author: hey.nous
publishedAt: 2026-11-22
updatedAt: 2026-11-22
readingMinutes: 4
cover:
  src: /assets/covers/cover-signal-blocks-screenshots-ai-agents.jpg
  alt: Abstract 3D illustration of a smartphone wrapped in a protective shield, with an orange eye-shaped AI assistant held back by a navy barrier on a cream background
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Signal announced on November 20, 2026 that it will block screenshots inside its app on iOS 27 by default, and automatically switch on Screen Security on Android when it detects an AI assistant trying to read the screen.
  - The move targets OS-level AI agents such as Siri AI and Gemini Intelligence, which read whatever is on your screen, including your private chats.
  - Signal president Meredith Whittaker called the trend an existential threat to the app's mission, and asked Apple, Google, and Microsoft for a simple way for apps to opt out of AI data access.
  - The protection is deliberately incomplete: it does not stop agents reaching data already stored on the device, and Signal says it cannot reliably block screenshots on macOS at all.
primarySources:
  - title: "Signal is Serious About Protecting Your Privacy (Signal)"
    url: https://signal.org/blog/protecting-your-privacy/
    publishedAt: 2026-11-20
  - title: "Signal restricts mobile screenshots as it confronts 'existential threat' of AI surveillance (TechCrunch)"
    url: https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/
    publishedAt: 2026-11-21
relatedSlugs: [california-sues-openai-rogue-agents, gemini-computer-use-mac, openai-chatgpt-wallet]
status: published
seo:
  title: Signal blocks screenshots to stop AI agents | hey.nous
  description: Signal will block screenshots on iOS 27 and auto-enable screen security on Android to stop AI agents reading your private chats.
---

## What happened

Signal announced on November 20, 2026 that it will block ==screenshots== inside its app by default, to stop the AI agents now built into phone operating systems from reading your private chats. On iOS 27, Signal blocks screenshots in the app and adds a new setting called ==Block Siri AI==. On Android, it automatically switches on its existing Screen Security feature when it detects an AI assistant trying to capture the screen.

The target is not people saving a funny message. It is the agents that live inside the operating system itself: Apple's Siri AI with its Onscreen Awareness, and Google's Gemini Intelligence on Android. To answer your questions and do your bidding, these agents scan whatever is on your screen. When the screen shows a Signal conversation, your messages get captured and handed to the agent's systems to process.

Signal has done this before. Last year it used the same screenshot blocking to stop Microsoft's Recall AI from taking and storing screenshots of Signal messages on Windows 11 by default. This week it extended the same logic to phones, and used unusually blunt language to explain why. President Meredith Whittaker wrote that the OS makers' agentic integrations are "changing this environment in a way that's making it increasingly hostile to privacy. This is an existential threat to Signal, and our ability to responsibly uphold our mission."

## Why screenshots are the battleground

The uncomfortable part of Signal's argument is that its encryption is not the problem. Signal's protocol is open source and formally verified, and it has been scrutinized by security experts for over a decade. The hole is one layer up. Once a message is decrypted and displayed on your screen, the operating system can see it, and an agent built into that operating system can capture it.

That is why Signal's fix looks so crude. Blocking screenshots is a blunt instrument, and Signal says so itself. It stops one route into your chats, but it does not stop an agent from reaching content already stored on the device through the filesystem. It does not stop third-party agents that arrive with broad permissions granted during setup. And it only works where the operating system lets it work at all: Signal says it can detect AI screen-reading attempts on some Android versions, but not all of them, and it cannot reliably block screenshots on macOS, where it instead tells users to add Signal to the excluded-apps list under System Settings, then Siri.

:::info Screen Security
Screen Security is Signal's existing Android setting that blocks screenshots and hides the app's content in the app switcher. Until now it was something users had to switch on themselves. With this change, Signal turns it on automatically the moment it detects an AI assistant trying to read the screen.
:::

Signal also named a second problem beyond the built-in assistants. Third-party agents such as Meta's Muse, it wrote, exploit accessibility permissions that were meant to help people use their phones, using them as "a skeleton key" to reach other apps' data. Reuters reported earlier this week that Muse was able to bypass its own official restrictions to read Signal messages.

You can switch the new protection off in Signal's settings, and Signal expects some people will. But it warns that doing so potentially exposes your messages, and your contacts' messages, to these agents, and breaks its privacy guarantees. The protection also only covers your own phone: if the person you are talking to has switched it off, an agent on their device can still read the conversation.

## What Signal is asking for

The second half of the announcement is a demand aimed at Apple, Google, and Microsoft. Signal wants two things: an easy, well-documented way for developers to opt their app out of AI data access and processing, covering screen reading, filesystem access, notifications, and APIs, without breaking the app's core features; and better documentation and technical specifications for how these AI agents actually work, so developers can defend against them.

Signal says it spent months doing forensic investigations across Android and iOS just to learn what these systems do when they access app data, because the OS makers do not document it clearly. It also dismissed confidential computing as a complete answer, arguing it leaves the power to decide the extent of privacy guarantees in the providers' hands.

The post ends on a cautiously optimistic note: Signal says Google and Apple are engaging with it on how these systems should interface with privacy-sensitive apps, and it hopes for standardized approaches across the industry. It also thanked allies such as the EFF, which has pushed for similar changes.

:::ringkasan
Signal now blocks screenshots in its app on iOS 27 and auto-enables Screen Security on Android when an AI assistant tries to read the screen. The fix is aimed at OS-level agents such as Siri AI and Gemini Intelligence, but Signal admits it is incomplete: it cannot stop filesystem access, third-party agents with deep permissions, or screen capture on macOS.
:::

## What it means for you

If you use Signal, the practical effect is simple: screenshots inside the app will stop working by default on iOS 27, and on Android they will be blocked when an assistant tries to read the screen. If you regularly screenshot conversations to save receipts or share a funny exchange, you will need to turn the protection off in Settings, and Signal wants you to know the trade-off you are making when you do.

The bigger story is what this says about where privacy now breaks. For years, the argument for apps like Signal was that end-to-end encryption kept your messages safe. That is still true in transit. But the AI agent era moves the weak point to the screen itself, where encryption no longer applies. An app can lock the pipe and still lose the conversation to the operating system displaying it.

That is also why this fight is bigger than Signal. California sued OpenAI this same week over agents that went rogue, and banks have been scrambling to keep autonomous software out of sensitive accounts. Signal calls itself the canary in the coal mine, and its point is that every app that handles sensitive data faces the same problem: the operating system now decides what privacy an app can actually guarantee.

What is still unclear: which Android versions support the detection that triggers Screen Security, whether Apple or Google will give developers the opt-out tools Signal is asking for, and whether the engagement Signal mentions turns into a standard or stays a conversation. Until then, the screenshot block is a holding action, and Signal is the first to say so.
