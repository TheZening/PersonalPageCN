---
title: "QM+ Floquet system入门"
date: 2025-09-18
categories:
  - QM+
---

> 关于态有可能跟不上Hamiltonian变化这件事, 我们已经在 [绝热定理和Berry phase中讨论过了](https://thezening.github.io/PersonalPageCN/qm1/QM1-AdiabaticTheoremAndBerryPhase/)


## 什么是Floquet system?

我们知道一个态 $$\ket{\psi(t)}$$ 的时间演化是由Schrödinger方程决定的:

$$
\begin{equation}
\mathrm{i}\,\hbar \pdv{}{t} \ket{\psi; t} = H(t) \ket{\psi; t}
\end{equation}
$$

或者说我们想知道态的演化也可以考虑时间演化算符:

$$
\begin{equation}
\ket{\psi; t} = U(t, t_0) \ket{\psi; t_0}
\end{equation}
$$


但是这两种方法都绕不过去一个抽象的事儿, 那就是时间演化算符能写但是基本没有办法算:

$$
\begin{align}
U(t, t_0) =& \mathcal{T} \exp\left[-\frac{\mathrm{i}}{\hbar} \int_{t_0}^{t} H(t') \dd{t'}\right] \\
=& \mathbb{1} + \left(-\frac{\mathrm{i}}{\hbar}\right) \int_{t_0}^{t} H(t_1) \dd{t_1} + \\
& \left(-\frac{\mathrm{i}}{\hbar}\right)^2 \int_{t_0}^{t} H(t_1) \int_{t_0}^{t_1} H(t_2) \dd{t_2} \dd{t_1} + \cdots
\end{align}
$$

这东西算起来有点麻烦.
但是我们考虑的Floqeut system有一个特别的地方, 就是我们Hamiltonian的时间依赖性一般是人为调制的, 比如说周期性的控制电场, 广场, 声场.
这样的话, 我们很简单的可以赋予他一个周期性:

$$
\begin{equation}
H(t + T) = H(t)
\end{equation}
$$

我们称这样的系统叫做Floquet system, 所以一般往往跟随着人工调控的周期性变化.
如果这个Hamiltonian有周期性, 我们立刻可以借用Floquet theorem:

> **Floquet theorem**: 对于周期性Hamiltonian $$H(t + T) = H(t)$$, 对应的Schrödinger方程的解可以写成:
>
> $$
> \begin{equation}
> \ket{\psi_\alpha(t)} = \mathrm{e}^{-\frac{\mathrm{i}}{\hbar} \epsilon_\alpha t} \ket{u_\alpha(t)}
> \end{equation}
> $$
>
> 其中 $$\ket{u_\alpha(t)}$$ 是周期性的, 即 $$\ket{u_\alpha(t + T)} = \ket{u_\alpha(t)}$$, $$\epsilon_\alpha$$ 是一个实数, 称为Floquet quasi-energy, $$\alpha$$ 是态的标号.

我们的任务就是尝试理解这个定义, 并且尝试计算出Floquet quasi-energy和周期函数 $$\ket{u_\alpha(t)}$$.