---
title: 'Inside an AI interview simulator: the architecture, at a high level'
date: 2026-05-19
summary: 'What it takes to make an AI interviewer feel demanding and coherent, without turning the product into a bag of disconnected model calls.'
---

An AI interview product sounds simple from the outside: user speaks, model responds, score
appears, report shows up later.

In practice, the product quality depends on whether those steps behave like one coherent
system or a pile of unrelated API calls.

We are careful about how much implementation detail we share publicly, but the broad
architecture matters because it explains the product philosophy.

## The system has to do more than "chat"

To feel like an interviewer instead of a generic assistant, the system needs to keep a few
invariants true across the whole session:

- the interviewer persona has to stay stable,
- the question difficulty has to react to the candidate,
- hints cannot instantly destroy the challenge,
- scoring cannot block the main conversation,
- and the final report has to reflect the session you actually had, not a different one.

That pushes the design toward specialized components rather than one giant prompt.

## The product shape we care about

At a high level, we think in layers:

- a live interview loop that handles the conversation in real time,
- separate evaluation passes that do not interrupt the candidate,
- and a session-finalization step that turns the full transcript into something actionable.

That sounds obvious, but it changes a lot of engineering decisions. Latency matters in one
layer. Consistency matters in another. Cost control matters everywhere.

## Why we do not want a "magic black box"

There is a temptation to build AI products as mystery machines: no visible structure, no
clear expectations, no explanation for why a score moved or why a follow-up happened.

We think that is the wrong direction for a product people use to train for high-stakes
interviews.

Candidates need the experience to feel:

- demanding,
- predictable enough to trust,
- and specific enough to improve from.

That means the architecture has to support traceable behavior, not just clever output.

## What this means for the user

You should not need to care which internal component handled which part of the session.
What you should notice is:

- the interviewer keeps the thread,
- the pressure feels deliberate,
- the report lines up with what happened,
- and each practice session suggests a next move.

That is the level where architecture becomes product.

We will keep sharing more from the build, but we are more interested in making the system
feel sharp than in publishing a vanity diagram. If that direction resonates, join the
[Mentara waitlist](/).
