---
title: "Commutation Relations"
date: 2024-10-07T08:06:00
categories:
  - QM1+
---

Here we discuss some fundamental commutation relations useful in assignments. We start from the baiscs:

$$
  \bqty{\hat{x}_\alpha,\,\hat{x}_\beta}=0 \quad \bqty{\hat{p}_\alpha,\,\hat{p}_\beta}=0
$$

The most important commutation relations:

$$
  \bqty{\hat{x}_\alpha,\,\hat{p}_\beta}=i\hbar\delta_{\alpha\beta}
$$

Before we preceed further, we introduce the Levi-Civita tensor:

$$
\epsilon_{\alpha \beta \gamma}
$$

For example:

$$
  \epsilon_{123}=\epsilon_{231}=\epsilon_{312}= 1 \quad \epsilon_{132}=\epsilon_{213}=\epsilon_{321}= -1
$$

If there is any repeated index, the Levi-Civita tensor will be 0. Next, we discuss the angular momentum operators:

$$
  \left[\hat{L}_\alpha,\,\hat{x}_\beta\right]=i\hbar\epsilon_{\alpha\beta\gamma}\hat{x}_\gamma
$$

$$
  \left[\hat{L}_\alpha,\,\hat{p}_\beta\right]=i\hbar\epsilon_{\alpha\beta\gamma}\hat{p}_\gamma
$$

$$
  \left[\hat{L}_\alpha,\,\hat{L}_\beta\right]=i\hbar\epsilon_{\alpha\beta\gamma}\hat{L}_\gamma
$$

To prove these relations, we need to use the following relations:

$$
  \epsilon_{\alpha\beta\gamma}\epsilon_{\rho\tau\gamma}=\delta_{\alpha\rho}\delta_{\beta\tau} - \delta_{\alpha\tau}\delta_{\beta\rho}
$$

$$
  \left[\hat{A}\hat{B},\,\hat{C}\right]=\hat{A}\left[\hat{B},\hat{C}\right] + \left[\hat{A},\hat{C}\right]\hat{B}
$$

$$
  \left[\hat{A},\,\hat{B}\hat{C}\right]=\left[\hat{A},\,\hat{B}\right]\hat{C} + \hat{B}\left[\hat{A},\,\hat{C}\right]
$$

Noe we prove the first one:

$$
\begin{aligned}
    \bqty{\hat{L}_\alpha,\,\hat{x}_\beta} =& \bqty{\epsilon_{\alpha\mu\nu}\hat{x}_\mu\hat{p}_\nu,\,\hat{x}_\beta} = \epsilon_{\alpha\mu\nu}\bqty{\hat{x}_\mu\hat{p}_\nu,\,\hat{x}_\beta} \\
  =& \epsilon_{\alpha\mu\nu}\hat{x}_\mu\bqty{\hat{p}_\nu,\,\hat{x}_\beta}+\epsilon_{\alpha\mu\nu}\bqty{\hat{x}_\mu,\,\hat{x}_\beta}\hat{p}_\nu \\
  =& \epsilon_{\alpha\mu\nu}\hat{x}_\mu\bqty{\hat{p}_\nu,\,\hat{x}_\beta}+0\\
  =& \epsilon_{\alpha\mu\nu} \hat{x}_\mu (-i\hbar\delta_{\nu\beta}) \\
  =& \epsilon_{\alpha\beta\mu} i \hbar \hat{x}_\mu
\end{aligned}
$$

The second commutation relation can be proved in a smilar way. For the third one, we have:

$$
\begin{aligned}
\left[\hat{L}_\alpha,\,\hat{L}_\beta\right]=&\left[\epsilon_{\alpha \mu \nu} \hat{x}_\mu \hat{p}_\nu, \epsilon_{\beta \lambda \tau} \hat{x}_\lambda \hat{p}_\tau\right]\\
=& \varepsilon_{\alpha \mu \nu}\varepsilon_{\beta \lambda \tau}\left[\hat{x}_\mu \hat{p}_v, \hat{x}_\lambda \hat{p}_\tau\right]\\
=& \text{Expand everything}\\
=& i \hbar \epsilon_{\alpha \mu \nu} \epsilon_{\beta \tau v} \hat{x}_\mu \hat{p}_\tau-i \hbar \epsilon_{\alpha \nu \mu} \epsilon_{\beta \lambda \mu} \hat{x}_\lambda \hat{p}_\nu \\
=& i\hbar\left(\delta_{\alpha \beta} \delta_{\mu \tau}-\delta_{\alpha \tau} \delta_{\mu \beta}\right) \hat{x}_\mu \hat{p}_\tau-i \hbar\left(\delta_{\alpha \beta} \delta_{\nu \lambda}-\delta_{\alpha \lambda} \delta_{\nu \beta}\right) \hat{x}_\lambda \hat{p}_\nu \\
=& i \hbar\left(\hat{x}_\alpha \hat{p}_\beta-\hat{x}_\beta \hat{p}_\alpha\right)
\end{aligned}
$$

The key is realizing that the index $$\mu$$ and $$\nu$$ are arbitary, when $$\alpha=\beta$$, the result will be 0. Furthermore, we can simplify the expression using the $$\delta$$. You can expand the right hand side as an easy test. The spin commutation relations are the same:

$$
  \left[\hat{S}_\alpha, \hat{S}_\beta\right]=i \hbar \epsilon_{\alpha \beta \gamma} \hat{S}_\gamma
$$




















































