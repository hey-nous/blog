---
title: Claude helped prove the Riemann Hypothesis
slug: claude-riemann-hypothesis-proof
locale: en
translationGroupId: claude-riemann-hypothesis-proof
translationStatus: original
dek: Anthropic mathematician Levent Alpöge says he and Claude proved the Riemann Hypothesis, math's most famous open problem. The Lean and Mathlib communities certified the 17-million-line formal proof within a day, but a critic says part of it is vacuous, and the $1 million prize is still open.
format: news
topics: [AI, mathematics, research]
author: hey.nous
publishedAt: 2026-11-23
updatedAt: 2026-11-23
readingMinutes: 5
cover:
  src: /assets/covers/cover-claude-riemann-hypothesis-proof.jpg
  alt: Abstract 3D illustration of a cream landscape crossed by a single glowing orange line, with small navy spheres scattered along it
  width: 2048
  height: 1152
  caption: Editorial illustration.
  credit: Hey Nous
keyTakeaways:
  - On November 20, 2026, Anthropic mathematician Levent Alpöge posted a four-page note claiming he and Claude had proved the Riemann Hypothesis, and the Generalized Riemann Hypothesis too, releasing the proof only as Lean code: 175,187 files and about 17 million lines.
  - On November 21, the Lean and Mathlib communities certified the proof, saying they have "full confidence" it is correct. Dozens of independent builders compiled it without errors, and MIT's Andrew Sutherland confirmed the checks, including all 175,187 modules passing through the lean4lean checker.
  - There is no human-readable paper yet. Alpöge says an AI-written draft ran past 250,000 pages, so he published only the machine-checkable code and plans to write the argument up properly.
  - A critique posted November 21 by Jenny Lorraine Nielsen says a geometry predicate inside the proof is defined as always true, which could make part of the argument vacuous. As of November 22 there was no public rebuttal.
  - The Clay Mathematics Institute still lists the $1 million Millennium Prize as open. Its rules require publication, two years, and general acceptance by mathematicians.
primarySources:
  - title: "Remark (Levent Alpöge)"
    url: https://alpo.ge/remark.pdf
    publishedAt: 2026-11-20
  - title: "Lean verification of the Riemann Hypothesis (Lean and Mathlib communities)"
    url: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
    publishedAt: 2026-11-21
  - title: "The AI Riemann hypothesis proof is true, independent mathematicians confirm (Scientific American)"
    url: https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/
    publishedAt: 2026-11-20
relatedSlugs: [anthropic-ipo-priced-83-largest-ever, deepmind-ai-agents-rsa-1024, openai-gpt-62-astra-sol]
status: published
seo:
  title: Claude helped prove the Riemann Hypothesis | hey.nous
  description: Anthropic's Levent Alpöge says he and Claude proved the Riemann Hypothesis. Lean and Mathlib certified it, but a critic and the Clay prize say not so fast.
---

## What happened

On November 20, 2026, Levent Alpöge, a mathematician on Anthropic's technical staff, posted a four-page note on his personal website with an extraordinary claim: working with ==Claude==, he had found a proof of the ==Riemann Hypothesis==, the most famous unsolved problem in mathematics, first posed in 1859. The note says the same method also resolves the Generalized Riemann Hypothesis, which extends the claim to a whole family of related functions.

The hypothesis is about the distribution of prime numbers. In technical terms it says that all the nontrivial zeros of the Riemann zeta function lie on one vertical line in the complex plane. In plain terms it says the primes, which look irregular, follow a deep hidden pattern. It is one of the seven Millennium Prize Problems of the Clay Mathematics Institute, each carrying a $1 million prize, and it had resisted mathematicians for 167 years.

What Alpöge released was not a paper. It was a formal proof written in ==Lean==, a programming language in which every logical step can be checked by computer: a 14-part archive of 175,187 files, about 17 million lines of code, expanding to more than 61 gigabytes. Alpöge says a full written argument would be extremely long, and that an AI-written version ran past 250,000 pages, so he published only the Lean formalization for now. He also says he has not yet mastered all of the mathematics involved and plans to write the argument up properly.

The timing was awkward, and Alpöge says so himself in the note. The final pieces fell into place late on Sunday night, November 15, and he messaged Anthropic chief executive Dario Amodei before announcing. The claim went public the day after Anthropic's record-breaking stock market debut. Alpöge writes that the cynical reading of the timing is false, and that he felt he could not wait any longer.

## How the proof was checked in a day

A proof nobody can read is a strange object, but Lean gives it a concrete route to scrutiny. If a Lean-coded proof compiles error-free, the logic of each step has been verified by machine. Within hours of the release, mathematicians were compiling the archive independently, and by the next day the two organizations behind the Lean ecosystem had ruled.

On November 21 at 13:55 UTC, the Lean and Mathlib communities published a joint statement, endorsed by the Lean Focused Research Organization and the Mathlib Initiative: "We have full confidence that Alpöge's proof of the Riemann Hypothesis is correct, and we congratulate him on this achievement. We hereby certify that both the statement and the proof of the Riemann Hypothesis are correct."

Their certification rests on four checks. First, the target theorem is Mathlib's own vetted definition of the Riemann Hypothesis, so the proof aims at the right statement. Second, dozens of independent builders compiled the 175,187-file library without errors and reproduced the same proof export. Third, two independent comparison tools confirmed the theorem Alpöge proved is exactly Mathlib's statement. Fourth, the exported proof was checked by several independent proof checkers, including Lean's official kernel and the con-leche and con-ron checkers, which come with a formal proof that they cannot accept a false proof.

MIT mathematician Andrew Sutherland, who coordinated much of the independent verification, reported that the lean4lean checker accepted all 175,187 of 175,187 modules, and that the five headline theorems rest only on the three standard axioms of mathematics. His verdict, quoted by Scientific American: "Honestly the chance that anything is fishy here is approximately zero."

:::info Lean
Lean is a proof assistant: a programming language for writing mathematics so that a computer can check every step. A proof written in Lean is not an argument a human reads and judges, it is code that either compiles against the stated theorem or fails. That is what made a 17-million-line proof checkable in a day, and also what makes it unreadable in the usual sense.
:::

The scale of the surprise is worth stating plainly. Forecasters on Metaculus had expected a proof of the Riemann Hypothesis by May 2035, and mathematician Terence Tao said last month that he expected the problem to fall to a combination of humans and AI around 2050. In August, Anthropic said an unreleased version of Claude had improved a long-standing result related to the hypothesis while stressing it had not proved it. Three months later, the problem appears to have fallen.

:::ringkasan
Anthropic mathematician Levent Alpöge says he and Claude proved the Riemann Hypothesis, releasing the proof only as 175,187 files of Lean code. Within a day, the Lean and Mathlib communities certified it as correct, with independent checkers confirming every module. There is still no human-readable paper, and one critic says part of the proof is vacuous.
:::

## What it means for you

If you do not work in mathematics, nothing in your daily life changes because of this proof. The Riemann Hypothesis has no direct application that flips on a single day, and no cryptography breaks because the primes now have a proven pattern. What changes is what AI is now credibly able to do in science.

Until this weekend, the strongest story about AI in mathematics was assistance: models that helped mathematicians explore, conjecture, and formalize. This claim is different in kind. Alpöge credits Claude with genuine mathematical ideas, including the central step of the argument, a chain of theta lifts whose length Claude suggested, and says Claude "far outpaced me near the finish line." If the certification holds up, it is the first time an AI system has been a co-author of the solution to a problem of this stature, not just a tool used along the way.

It also changes how a proof can be delivered. The traditional route is a human-readable paper, peer review, and years of scrutiny. This proof arrived as code first, certified by machines in a day, with the human-readable explanation still to come. That inversion is the part other fields will copy, and the part that will be argued about the longest. Peer review of a 17-million-line formalization is a new kind of work, and nobody yet knows what it looks like when the argument is too long for any one person to read.

:::peringatan
Certified is not the same as settled. A critique posted November 21 by Jenny Lorraine Nielsen argues that a geometry predicate inside the proof, named anyGeometry, is defined as true for every input, so steps relying on it carry no geometric content. An independent audit places that predicate eight dependency steps below the headline theorem. The paper is not peer-reviewed, and as of November 22 there was no public rebuttal from Alpöge or the Lean community. The Clay Mathematics Institute also still lists the prize as open: its rules require publication, two years, and general acceptance. Treat the certification as what it is, a machine check that the formal proof is correct, not as the final word of the mathematical community.
:::

What is still unclear: whether the Nielsen critique holds up or gets answered, when a readable version of the argument will exist, what the Clay Mathematics Institute will do, and what happens to the rival proof. Hours after Alpöge's announcement, Stanford professor Ravi Vakil said a postdoctoral researcher in the same department had independently submitted a proof of the hypothesis, a 940-page manuscript twelve years in the making. Two proofs of the most famous problem in mathematics, announced on the same day, would be its own story. For now, the formal check says Alpöge's proof is correct, the human understanding of why is still catching up, and the prize money is staying where it is.
