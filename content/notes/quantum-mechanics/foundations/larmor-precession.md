---
title: "Larmor 进动"
date: 2024-10-08
weight: 3
legacySeries: "QM1"
aliases:
  - "/qm1/QM1-LarmourProblem/"
---
在这篇文章中, 我们讨论Larmour问题.
我们首先介绍轨道和自旋电子磁矩.
先定义Bohr磁子:

$$
  \mu_{\text{B}}=\frac{e \hbar}{2 m_{e}}
$$

> **轨道磁矩** 指的是电子在原子中围绕原子核运动所产生的磁矩.

$$
  \boldsymbol{\mu}=-g_e\frac{e}{2 m_e} \boldsymbol{L} = -g_e \mu_{\text{B}} \frac{\boldsymbol{L}}{\hbar}
$$
!!\(e=1.602 \times 10^{-19}\) C, 一个正数!!

> **自旋磁矩** 是电子内禀角动量产生的磁矩

$$
  \boldsymbol{\mu}=-g_s \mu_{\text{B}} \frac{\boldsymbol{S}}{\hbar}
$$

我们只考虑自旋磁矩, 假设在一个外加的垂直磁场中有一个自旋, 从现在起我们将 \(g_s\) 简写为 \(g\):
$$
  H = -\frac{1}{2} g \mu_{\text{B}} \boldsymbol{\sigma}\cdot\boldsymbol{B} = \begin{bmatrix}-g \mu_{\text{B}} B_z/2 & 0 \\\\ 0 & g \mu_{\text{B}} B_z/2
\end{bmatrix}
$$
这是一个标准的双能级系统, 当偶极矩与磁场平行时能量最低.
我们可以计算时间演化算符:
$$
  U=\mqty[\exp(+\mathrm{i}\Omega t) & 0 \\\\ 0 & \exp(-\mathrm{i}\Omega t)] \quad \Omega=g \mu_{\text{B}} B_z/2\hbar
$$
假设初态为 \(\chi(0)=(a,b)^T\), 在时间 \(t\) 时, 态为:
$$
  \chi(t)=U\chi(0)=(a\exp(+\mathrm{i}\Omega t), b\exp(-\mathrm{i}\Omega t))^T
$$
现在, 我们来计算自旋极化矢量 \(\boldsymbol{S}=(S_x, S_y, S_z)\) 的期望值:
$$
   \expval{S_x}= \hbar a b \cos(2\Omega t)
$$
$$
  \expval{S_y}= -\hbar a b \sin(2\Omega t)
$$
$$
  \expval{S_z}= \frac{\hbar}{2}(a^2-b^2)
$$
对于那些更习惯于在Bloch球语言中工作的读者, 我们可以做如下映射:
$$
  a \to \cos\alpha/2 \quad b \to \sin\alpha/2
$$
于是有:

$$
\begin{align}
  \expval{S_x}=& \frac{\hbar}{2} \cos\alpha \cos(2\Omega t) \\
  \expval{S_y}=& -\frac{\hbar}{2} \sin\alpha \cos(2\Omega t) \\
  \expval{S_z}=& \frac{\hbar}{2}\cos\alpha
\end{align}
$$

这表明 \(S_x, S_y\) 的期望值将以频率 \(2\Omega\) 围绕z轴旋转!
这就是我们称之为Larmour进动的原因.
