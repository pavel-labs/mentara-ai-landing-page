---
title: "QA interview practice: a realistic 30-minute plan"
date: 2026-10-27
summary: "Practice test design, API investigation, defect reporting and automation judgment with one concrete scenario and an evidence-based review."
---

A useful QA interview rehearsal gives you a system to investigate, a constraint to work within,
and a reason to explain your decisions. Listing testing terms is a starting point. The next step
is showing what you would test first, what evidence you need, and what you would tell the team.

You can run the following 30-minute practice with a peer or by recording your own answers.
Use one scenario throughout: a shop has introduced discount codes, and customers sometimes see a
successful payment while their order remains pending. These are fictional practice conditions;
fill in the missing details explicitly instead of quietly assuming them.

## Minutes 0–4: clarify the product and the risk

Start with questions that change your testing plan. Can codes be combined? When is stock
reserved? Does the payment provider retry notifications? What does “pending” mean to the
customer, the support team and the fulfillment service?

State two or three assumptions after asking your questions. For example, assume that a discount
must never reduce the total below zero and that a paid order must not be charged again after a
retry. Explain which failures could cause financial loss or block a customer from receiving an
order. This gives your later priorities a visible basis.

## Minutes 4–11: build a small test design

Choose a few cases that separate different kinds of failure:

- A valid code applies to an eligible basket and the receipt shows the same total.
- An expired code fails without changing the basket or the amount charged.
- Two requests try to redeem the final use of a limited code at the same time.
- The payment succeeds, but the confirmation arrives late or twice.

For each case, give the starting state, the action and an observable result. “Test the API” is
not yet a case. “Repeat the payment notification and verify that only one order transition
occurs” describes a behavior someone can check.

Then make a choice: if you had ten minutes before release, which case would you run first,
and why? Include a happy path, but defend your risk priorities rather than trying to name every
possible input.

## Minutes 11–18: investigate the pending order

Treat “payment successful, order pending” as a symptom. Separate your hypotheses: the provider
has accepted the payment; the notification has not arrived; a signature check rejects it; the
order update fails; or the customer view has stale data.

Describe what you would inspect in sequence. Compare the provider status, the notification
response, the order state and the customer-facing response. Use a fictional correlation value
in your rehearsal. Never paste real customer details, access tokens or payment data into a
practice session.

Explain what would rule out each hypothesis. A good investigation answer names the next
observation and how it changes your next action. It also distinguishes what you know from what
you still need to verify.

## Minutes 18–23: communicate the defect

Give a short defect report aloud: affected behavior, environment, preconditions, minimal steps,
expected result, actual result and evidence. Describe severity through customer impact and
priority through the release context. They may differ.

End with a clear handoff. Say whether the issue is reproducible, whether you have found a
workaround, and which question remains open. Avoid assigning a root cause before the evidence
supports it. The same habit makes [thinking aloud in technical interviews](/blog/thinking-out-loud-in-coding-interviews)
easier to follow: expose the reasoning that another person needs to assess.

## Minutes 23–27: decide what to automate

Choose one stable regression check from the scenario and place it at a suitable layer. You might
check duplicate payment notifications through an API or integration test, then keep a small UI
check for the customer-visible result. State the test data, the oracle and how the test cleans
up after itself.

If a UI test is flaky, investigate its dependencies before increasing retries. Discuss timing,
shared state and the reliability of selectors. Explain what belongs in a lower-level check
and what still needs human exploration.

## Minutes 27–30: review evidence, then repeat

Score the rehearsal against five questions: Did I clarify uncertainty? Did I prioritize risk?
Were my expected results observable? Did I investigate with evidence? Could another person act
on my defect report?

For junior practice, concentrate on clear cases and reproducible reports. At middle level,
connect service boundaries, test layers and investigation steps. At senior level, defend release
trade-offs, residual risk and how the team will monitor the result. These are practice targets,
not a universal hiring rubric.

Pick one weak answer and repeat it with one improvement. A [mock interview](/blog/inside-an-ai-interview-simulator)
is most useful when the review changes your next attempt.

Mentarika’s QA interview mode is a controlled pilot; availability is shown in the app. The pilot
focuses on interviews and reports. You can use this plan independently or
[check the available practice modes](/#waitlist).
