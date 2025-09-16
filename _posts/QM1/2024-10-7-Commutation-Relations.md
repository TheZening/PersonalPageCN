---
title: "常见对易关系的推导和结果"
date: 2024-10-07T08:06:00
categories:
  - QM1+
---

这里我们将讨论一些在作业中有用的基本对易关系, 我们从基础开始:

$$
  \bqty{\hat{x}_\alpha,\,\hat{x}_\beta}=0 \quad \bqty{\hat{p}_\alpha,\,\hat{p}_\beta}=0
$$

最重要的对易关系是位置和动量的对易关系:

$$
  \bqty{\hat{x}_\alpha,\,\hat{p}_\beta}=\mathrm{i}\hbar\delta_{\alpha\beta}
$$

简单介绍一下Levi-Civita符号:

$$
\epsilon_{\alpha \beta \gamma}
$$

正着来就是+1, 反着来就是-1:

$$
  \epsilon_{123}=\epsilon_{231}=\epsilon_{312}= 1 \quad \epsilon_{132}=\epsilon_{213}=\epsilon_{321}= -1
$$

一旦有指标重复了, 结果就是0.
接下来, 我们讨论角动量算符:

$$
  \left[\hat{L}_\alpha,\,\hat{x}_\beta\right]=\mathrm{i}\hbar\epsilon_{\alpha\beta\gamma}\hat{x}_\gamma
$$

$$
  \left[\hat{L}_\alpha,\,\hat{p}_\beta\right]=\mathrm{i}\hbar\epsilon_{\alpha\beta\gamma}\hat{p}_\gamma
$$

$$
  \left[\hat{L}_\alpha,\,\hat{L}_\beta\right]=\mathrm{i}\hbar\epsilon_{\alpha\beta\gamma}\hat{L}_\gamma
$$

为了证明这些关系, 我们还需要以下两个公式:

$$
  \epsilon_{\alpha\beta\gamma}\epsilon_{\rho\tau\gamma}=\delta_{\alpha\rho}\delta_{\beta\tau} - \delta_{\alpha\tau}\delta_{\beta\rho}
$$

$$
  \left[\hat{A}\hat{B},\,\hat{C}\right]=\hat{A}\left[\hat{B},\hat{C}\right] + \left[\hat{A},\hat{C}\right]\hat{B}
$$

$$
  \left[\hat{A},\,\hat{B}\hat{C}\right]=\left[\hat{A},\,\hat{B}\right]\hat{C} + \hat{B}\left[\hat{A},\,\hat{C}\right]
$$

先证明第一个:

$$
\begin{aligned}
    \bqty{\hat{L}_\alpha,\,\hat{x}_\beta} =& \bqty{\epsilon_{\alpha\mu\nu}\hat{x}_\mu\hat{p}_\nu,\,\hat{x}_\beta} = \epsilon_{\alpha\mu\nu}\bqty{\hat{x}_\mu\hat{p}_\nu,\,\hat{x}_\beta} \\
  =& \epsilon_{\alpha\mu\nu}\hat{x}_\mu\bqty{\hat{p}_\nu,\,\hat{x}_\beta}+\epsilon_{\alpha\mu\nu}\bqty{\hat{x}_\mu,\,\hat{x}_\beta}\hat{p}_\nu \\
  =& \epsilon_{\alpha\mu\nu}\hat{x}_\mu\bqty{\hat{p}_\nu,\,\hat{x}_\beta}+0\\
  =& \epsilon_{\alpha\mu\nu} \hat{x}_\mu (-\mathrm{i}\hbar\delta_{\nu\beta}) \\
  =& \epsilon_{\alpha\beta\mu} \mathrm{i} \hbar \hat{x}_\mu
\end{aligned}
$$

第二个证明方法类似.
现在看看第三个

$$
\begin{aligned}
\left[\hat{L}_\alpha,\,\hat{L}_\beta\right]=&\left[\epsilon_{\alpha \mu \nu} \hat{x}_\mu \hat{p}_\nu, \epsilon_{\beta \lambda \tau} \hat{x}_\lambda \hat{p}_\tau\right]\\
=& \varepsilon_{\alpha \mu \nu}\varepsilon_{\beta \lambda \tau}\left[\hat{x}_\mu \hat{p}_v, \hat{x}_\lambda \hat{p}_\tau\right]\\
=& \text{Expand everything}\\
=& \mathrm{i}\hbar \epsilon_{\alpha \mu \nu} \epsilon_{\beta \tau v} \hat{x}_\mu \hat{p}_\tau-\mathrm{i}\hbar \epsilon_{\alpha \nu \mu} \epsilon_{\beta \lambda \mu} \hat{x}_\lambda \hat{p}_\nu \\
=& \mathrm{i}\hbar\left(\delta_{\alpha \beta} \delta_{\mu \tau}-\delta_{\alpha \tau} \delta_{\mu \beta}\right) \hat{x}_\mu \hat{p}_\tau-\mathrm{i}\hbar\left(\delta_{\alpha \beta} \delta_{\nu \lambda}-\delta_{\alpha \lambda} \delta_{\nu \beta}\right) \hat{x}_\lambda \hat{p}_\nu \\
=& \mathrm{i}\hbar\left(\hat{x}_\alpha \hat{p}_\beta-\hat{x}_\beta \hat{p}_\alpha\right)
\end{aligned}
$$

关键在于要认识到指标$$\mu$$和$$\nu$$是任意的, 当$$\alpha=\beta$$时, 结果为0.
此外，我们可以利用$$\delta$$来简化表达式.
你可以展开右边作为一个简单的检查.
自旋的对易关系也是一样的:


$$
  \left[\hat{S}_\alpha, \hat{S}_\beta\right]=\mathrm{i} \hbar \epsilon_{\alpha \beta \gamma} \hat{S}_\gamma
$$




















































