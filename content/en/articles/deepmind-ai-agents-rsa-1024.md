---
title: DeepMind's AI agents found two flaws in legacy RSA-1024
slug: deepmind-ai-agents-rsa-1024
locale: en
translationGroupId: deepmind-rsa-1024
translationStatus: original
dek: Google DeepMind says human-guided AI agents found two weaknesses in legacy 1024-bit RSA in a matter of weeks: a faster way to forge signatures, and a cheaper way to factor many keys at once. Modern 2048-bit keys are not affected.
format: news
topics: [AI, security, research]
author: hey.nous
publishedAt: 2026-11-09
updatedAt: 2026-11-09
readingMinutes: 4
cover:
  src: /assets/covers/cover-deepmind-ai-agents-rsa-1024.jpg
  alt: Abstract soft-3D illustration of two glowing key fragments splitting apart above a navy grid
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - Google DeepMind announced on November 6, 2026 that human-guided AI agents found two weaknesses in legacy 1024-bit RSA, described in two working papers.
  - The first result weakens padded RSA signatures: once an attacker controls about half of the signed block, the padding adds no meaningful protection, and DeepMind estimates a new forgery method about 1,600 times better than the previous best for short 32-byte digests.
  - The second result, called fan factories, cuts the cost of factoring each additional 1024-bit key to about 1/58 of a full factoring run, roughly 30 times cheaper than the best batch method since 1993.
  - Both papers state plainly that 2048-bit and larger RSA is not threatened, and neither result has been peer reviewed yet.
primarySources:
  - title: "Modular Roots from a Restricted Oracle: Faster Affine Roots and a 1024-bit Computation (Google DeepMind working paper)"
    url: https://storage.googleapis.com/deepmind-media/papers/Faster_Affine_Root_and_a_1024bit%20Computation.pdf
    publishedAt: 2026-11-06
  - title: "Fan Factories: Multiple Number Fields in Factorization Factories and Batch NFS (Google DeepMind working paper)"
    url: https://storage.googleapis.com/deepmind-media/papers/Fan_Factories_Multiple_Number_Fields_in_Factorization_Factories_and_Batch_NFS.pdf
    publishedAt: 2026-11-05
  - title: "Google DeepMind AI agents find two weaknesses in legacy 1024-bit RSA (Data Studios)"
    url: https://www.datastudios.org/post/google-deepmind-ai-agents-two-weaknesses-legacy-1024-bit-rsa
    publishedAt: 2026-11-07
relatedSlugs: [openai-gpt-6-cyber, google-gemini-4-carbon]
status: published
seo:
  title: DeepMind's AI agents crack legacy RSA-1024 | hey.nous
  description: DeepMind's AI agents found two weaknesses in legacy 1024-bit RSA: faster signature forgery and cheaper batch factoring. 2048-bit keys are safe.
---

## What happened

Google DeepMind announced on November 6, 2026 that AI agents working under human direction found two weaknesses in legacy ==1024-bit RSA==, the older encryption standard that the web retired years ago. The work is described in two working papers, and DeepMind's vice president of science Pushmeet Kohli presented it under the title "Advancing the frontier of cryptanalysis".

The research was led at DeepMind by Krishnamurthy (Dj) Dvijotham and Abhradeep Thakurta, working with cryptographers Nadia Heninger of UC San Diego and Inria and Emmanuel Thomé of Inria. DeepMind stresses that this was AI-assisted research, not autonomous discovery: experts chose the problems and judged which results mattered, while the agents produced and checked candidate algorithms and proofs. The whole effort took weeks, not the years such cryptanalysis usually takes.

## Forging signatures gets cheaper

The first result targets RSA digital signatures. A signature is made by applying a private key to a padded block of data, and that padding has long been treated as a defense against forgery. The agents found that the defense fades fast once an attacker controls a large share of the signed block. When the attacker controls roughly half of the block or more, the padding adds no meaningful protection, and forging a signature becomes about as hard as attacking an unpadded system.

That matters in practice because signing interfaces, in hardware security modules or signing APIs, often let a caller choose part of the data being signed. DeepMind tested the finding in a sandbox against a 1024-bit benchmark key from a September 2026 study by Shea, Haller, Suhl, Heninger and Thomé. The agents reproduced that computation with 3.5 times less CPU time, 391 CPU core-years against 1,380, running on up to 300,000 CPU cores and 16 GPUs over 3.2 days. For the harder case, where the attacker controls only a small part of the block such as a 32-byte fingerprint, DeepMind estimates a new algorithm about 1,600 times better than the best previously known method. That figure is a theoretical estimate, not a measured run.

## Factoring many keys at once gets cheaper too

The second result is about scale, and it has a name: ==fan factories==. Factoring one 1024-bit number is hugely expensive, and normally the second costs as much as the first. A factorization factory pays once for a large precomputation and then spends less on each target, but since 1993 the best batch method at a modest precomputation budget has been Coppersmith's multiple number field sieve.

The DeepMind paper gives every target integer its own family, or fan, of number fields, all fed by one shared precomputed side. With a precomputation equal to the cost of one factoring run, each further 1024-bit key costs about 1/58 of a full factoring run, roughly 30 times less than the best previous batch method. The algebraic identities behind the result are machine-checked in Lean 4, and the paper says the work came from a two-agent harness in which one model generated the proofs and a second verified them. No fan factory has actually been built, and the paper is careful that these are leading-order estimates, not predicted running times.

:::ringkasan
DeepMind's agents found two weaknesses in legacy 1024-bit RSA: padding stops protecting signatures once an attacker controls about half the signed block, and a new "fan factory" method makes factoring many keys at once much cheaper. Both results are theoretical or sandbox-tested, and both papers state that 2048-bit and larger RSA is not threatened.
:::

## What it means for you

If you use the internet normally, nothing changes. Your banking, messaging, and software updates run on 2048-bit or larger RSA, which DeepMind says these results do not touch, and the public web stopped issuing 1024-bit certificates years ago. US federal guidance has disallowed 1024-bit RSA for new signatures since 2013.

The exposure sits in systems that were never upgraded. Old hardware, embedded devices, long-lived code-signing roots, and archived certificates can still carry 1024-bit keys, and signing services that let outsiders choose part of the signed data are the most exposed. For those teams, this is one more documented reason to inventory and retire 1024-bit keys now, rather than waiting for the post-quantum migration to force the issue.

The deeper signal is about speed. Cryptographic hardness assumptions used to move slowly enough that defenders could treat them as fixed. DeepMind's framing is that they should now be stress-tested continuously, because AI-assisted research can move a field in weeks that used to take years. That is the claim worth watching, and it is also the one that needs independent replication before anyone treats it as settled.

What is still unclear: neither working paper has been peer reviewed, and no outside group has reproduced either result yet. The full paper on the signature result was not publicly available at announcement time, so outside cryptographers cannot yet check the 1,600x estimate themselves. The 30x batch-factoring figure is a leading-order estimate with no implementation behind it, and the authors list making the offline phase practical as an open problem.

:::peringatan
Do not read this as "RSA is broken." Both papers state in bold that 2048-bit and larger RSA is not threatened, no live systems were touched, and the biggest numbers here, 1,600x and 30x, are theoretical estimates. The results apply only to obsolete 1024-bit RSA.
:::
