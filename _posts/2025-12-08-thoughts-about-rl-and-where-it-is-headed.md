---
layout: post
title: Thoughts About RL and Where It Is Headed
date: 2025-12-08
description: Reflections on reinforcement learning trends from NeurIPS 2025
tags: reinforcement-learning rl machine-learning research
categories: blog
---

*By Yuval Kansal, PhD student at Princeton*

> I was at NeurIPS last week, and these are some of my thoughts from the conversations I had with people and the general sentiment from my lens.

---

## Big Picture: Data, SFT, and RL

I think the general sentiment in the community right now is converging on the idea that we need high-quality data, and that vanilla RL (effortless RL, as Yejin Choi called it in her amazing keynote) is neither better nor useful compared to effortful, careful SFT. I am largely in agreement with this sentiment.

Good data is the most basic necessity of training ML systems. Before LLMs took over, the AI community was largely focused on curating careful and high-quality data. Only after LLMs started to show unprecedented capabilities (largely driven by the success of GPT3, 4...), by loosely and generally training on web-scale unstructured data, people seemed to discard the "good data first" paradigm and started betting purely on scale.

SFT and instruction tuning helped make good products, and revenue started to flow, encouraging more places to start training general models.

---

## From Pre-Training at Scale to RLHF

Once the general web-scale pre-training was saturated, the community discovered RL for LMs (RLHF) and started seeing gains in personalization, better textual reasoning, and increased performance in math, coding, and conversation.

Once all the basic reasoning tasks were saturated, people turned to complex reasoning tasks such as international olympiads (ICPC, IOI, IMO). Vanilla-scaled models still showed decent results, but the community realized something more is needed to reach the "superintelligence" level.

This seems to have turned people back to looking for and curating "high-quality data" again, going back to the FIRST BASIC PRINCIPLE of ML. I imagine the frontier labs were already doing this by recruiting human annotators, but this is obviously beyond the resource capacity of academic labs. This led to the current point where I think the research community has also found that better SFT works better than vanilla RL.

---

## My Take: Where RL Still Shines

Coming back to my own take on this, high-quality data curation at scale is super hard, and a lot of efforts have started going into better pre-/mid-training using SFT. These systems have now started matching vanilla scaled RL, which seems to have led to the community's sentiment on the efficacy of RL.

I still think RL, if done right, is very useful and can offer amazing capabilities. Unfortunately, I do not have a concrete answer to what the best way to do RL is! High-quality and a mixture of data (comprising STEM, conversation, etc) seems to be the way to go forward.

Basically, this is what I think the formula:

**Vanilla SFT < Vanilla RL ~ Good SFT < Good SFT + Good RL**

Researchers in the OLMO3 team seem to have done very good RL and open-sourced it, and it seems the Dr Tulu project, Tulu 3 RLVR projects seem to validate RL's capability and contribution.

---

## Connection to Multimodal Models

Connection to multi-modal: My thoughts above are mostly specific to textual reasoning, but I think the lessons are similarly applicable to multi-modal reasoning.

Here, though, we might need to come up with better architectures that combine multiple modalities and see if reasoning capabilities in one modality can transfer to others (there was a paper at NeurIPS this year that seemed to show that only amplifying textual reasoning in a multimodal model can lead to better visual reasoning, too).

I would definitely not throw out the idea of doing RL, but I would be cautious on how to do "good" RL.

---

I would also really value other people's views and experiences on this, especially from those working directly on RL and multimodal systems. Feel free to get in touch at yuvalkansal@princeton.edu
