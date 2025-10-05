---
title: "QM2 Lindblad量子动力学方程"
date: 2024-10-12T08:06:00-05:00
categories:
  - QM2
---

Lindblad方程是描述开放量子系统动力学的一个重要工具, 它扩展了闭合量子系统的薛定谔方程, 允许我们考虑系统与环境之间的相互作用.
这种相互作用通常会导致系统的非单位演化, 包括耗散, 跃迁, 退相干现象.

>  Markov过程: 未来的状态只依赖于当前状态, 与过去的状态无关.
>  所以没有什么时间核, 记忆积分啥的.

> 耗散: 能量从系统流失到环境中.
> 退相干: 系统的量子相干性由于与环境的相互作用而减弱.

我们引入如下记号:

1. $$S$$: 系统, 我们感兴趣的量子系统.
2. $$E$$: 环境, 系统所处的外部环境.

系统和环境构成封闭系统, 它们的联合状态由密度矩阵 $$\rho_{SE}$$ 描述.
总体的Hamiltonian是:

$$
\begin{equation}
H = H_S \otimes I_E + I_S \otimes H_E + \alpha H_{\text{SB}}
\end{equation}
$$

其中$$\alpha$$描述了系统与环境之间的相互作用强度.

---
## 1. 闭合系统的动力学

大的密度矩阵自然是由von Neumann方程描述的:

$$
\begin{equation}
\dv{\rho_{SE}}{t} = -\frac{i}{\hbar} [H_S + H_E + \alpha H_{SE}, \rho_{SE}]
\end{equation}
$$

对付这种方程, 最省力的就是用interaction picture, 也就是把$$H_S + H_E$$的作用给去掉:

$$
\begin{equation}
H = \mathrm{e}^{\mathrm{i}\,(H_S + H_E)t/\hbar} \alpha H_{SE} \mathrm{e}^{-\mathrm{i}\,(H_S + H_E)t/\hbar}
\end{equation}
$$

自然而然的, 密度矩阵也要变:

$$
\begin{equation}
\rho = \mathrm{e}^{\mathrm{i}\,(H_S + H_E)t/\hbar} \rho_{SE} \mathrm{e}^{-\mathrm{i}\,(H_S + H_E)t/\hbar}
\end{equation}
$$

反过来的变换就是:

$$
\begin{equation}
\rho_{SE} = \mathrm{e}^{-\mathrm{i}\,(H_S + H_E)t/\hbar} \rho \mathrm{e}^{\mathrm{i}\,(H_S + H_E)t/\hbar}
\end{equation}
$$

$$
\begin{equation}
H_{SE} = \mathrm{e}^{-\mathrm{i}\,(H_S + H_E)t/\hbar} \alpha H_{SE} \mathrm{e}^{\mathrm{i}\,(H_S + H_E)t/\hbar}
\end{equation}
$$

如果我们记:

$$
\begin{equation}
H_0 = H_S + H_E \quad U = \mathrm{e}^{-\mathrm{i} H_0 t/\hbar}
\end{equation}
$$

那么我们有:

$$
\begin{align}
\dv{\rho}{t} =& \dv{(U^\dagger \rho_{SE} U)}{t} \\
=& \dv{U^\dagger}{t} \rho_{SE} U + U^\dagger \dv{\rho_{SE}}{t} U + U^\dagger \rho_{SE} \dv{U}{t} \\
=& \frac{\mathrm{i}}{\hbar} H_0 U^\dagger \rho_{SE} U + U^\dagger \left(-\frac{\mathrm{i}}{\hbar} [H_0+H_{SE}, \rho_{SE}]\right) U - U^\dagger \rho_{SE} \frac{\mathrm{i}}{\hbar} H_0 U \\
=& \frac{\mathrm{i}}{\hbar} [H_0, \rho] - \frac{\mathrm{i}}{\hbar} [H_{0}, \rho] - \frac{\mathrm{i}}{\hbar} [H, \rho] \\
=& - \frac{\mathrm{i}}{\hbar} [H, \rho]
\end{align}
$$

有了这个就好搞了, 直接积分:

$$
\begin{equation}
\rho(t) = \rho(0) - \alpha\frac{\mathrm{i}}{\hbar} \int_0^t [H(t'), \rho(t')] \dd{t'}
\end{equation}
$$

此时我们要小心了, 我们要把这个式子带原来的方程里面, 进行迭代展开:

$$
\begin{equation}
\dv{\rho}{t} = -\alpha\frac{\mathrm{i}}{\hbar} [H(t), \rho(0)] - \alpha^2 \frac{1}{\hbar^2} \int_0^t [H(t), [H(t'), \rho(t')]] \dd{t'}
\end{equation}
$$

如果我们就近似到这里, 我们就可以对$$\rho_S$$进行求迹, 得到:

$$
\begin{equation}
\dv{\rho_S}{t} = -\alpha\frac{\mathrm{i}}{\hbar} \tr_{E} [H(t), \rho(0)] - \alpha^2 \frac{1}{\hbar^2} \int_0^t \tr_E [H(t), [H(t'), \rho(t')]] \dd{t'}
\end{equation}
$$

为了进一步往下走, 我们必须引入初态因子化假设, 也就是:

$$
\begin{equation}
\rho(0) = \rho_S(0) \otimes \rho_E
\end{equation}
$$

这个假设意味着系统和环境在初始时刻是没有纠缠的, 这在很多实际情况下是合理的, 尤其是在系统和环境之间的相互作用较弱时.
我们现在考虑一般的相互作用Hamiltonian:

$$
\begin{equation}
H_{SE} = \sum_i A_i \otimes B_i
\end{equation}
$$

我们可以先计算对易子:

$$
\begin{equation}
[H(t), \rho(0)] = \sum_i [A_i(t) \otimes B_i(t) \rho_E - \rho_S A_i(t) \otimes \rho_E B_i(t)]
\end{equation}
$$

我们对环境求迹:

$$
\begin{equation}
\tr_E [H(t), \rho(0)] = \sum_i [A_i(t) \tr_E (B_i(t) \rho_E) - \rho_S A_i(t) \tr_E (\rho_E B_i(t))]
\end{equation}
$$

我们定义:

$$
\begin{equation}
\langle B_i(t) \rangle_E = \tr_E (B_i(t) \rho_E)
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\tr_E [H(t), \rho(0)] = \sum_i [A_i(t), \rho_S] \langle B_i(t) \rangle_E
\end{equation}
$$

这实际上是一个平均值, 这样的话, 如果我们假设环境的平均值为零, 也就是$$\langle B_i(t) \rangle_E = 0$$, 那么第一项就消失了.
还有一个方法, 就是我最开始定义$$H_{E}$$的时候, 我就把这个平均值给吸收掉了, 也就是说, 我们可以重新定义环境的Hamiltonian, 使得$$\langle B_i(t) \rangle_E = 0$$.
无论如何, 第一项扔掉是合理的.

于是现在我们的方程变成:

$$
\begin{equation}
\dv{\rho_S}{t} = - \alpha^2 \frac{1}{\hbar^2} \int_0^t \tr_E [H(t), [H(t'), \rho(t')]] \dd{t'}
\end{equation}
$$

现在我们应用Markov近似, 也就是假设系统的未来状态只依赖于当前状态, 与过去的状态无关.
这允许我们将$$\rho(t')$$替换为$$\rho_S(t) \otimes \rho_E$$, 并将积分上限扩展到无穷大:

$$
\begin{equation}
\dv{\rho_S}{t} = - \alpha^2 \frac{1}{\hbar^2} \int_0^\infty \tr_E [H(t), [H(t'), \rho_S(t) \otimes \rho_E]] \dd{t'}
\end{equation}
$$

我们现在必须得给$$H_{SE}$$一个具体的形式, 以便计算对易子, 我们考虑如下Jaynes-Cummings形式:

$$
\begin{equation}
H_{SE} = \hbar S B^\dagger + \hbar S^\dagger B
\end{equation}
$$

也就是说, 系统少一个激发态, 环境多一个激发态, 反之亦然.
我们现在再假设, 关于系统的算符是和系统本身的Hamiltonian对易的:

$$
\begin{equation}
[S, H_S] = 0 \Rightarrow S(t) = S
\end{equation}
$$

就是说在Interaction picture下, 系统的算符不变.
我们的环境的Hamiltonian就是简单的Bosonic reservoir:

$$
\begin{equation}
H_E = \sum_k \hbar \omega_k a_k^\dagger a_k
\end{equation}
$$

然后定义环境的算符是:

$$
\begin{equation}
B = \sum_k g_k^* a_k \quad B^\dagger = \sum_k g_k a_k^\dagger
\end{equation}
$$

在相互作用图景下, 环境的算符是:

$$
\begin{equation}
B(t) = \sum_k g_k^* \mathrm{e}^{\mathrm{i} H_E t/\hbar} a_k \mathrm{e}^{-\mathrm{i} H_E t/\hbar}
\end{equation}
$$

我们注意到:

$$
\begin{equation}
[H_E, a_k] = \hbar \omega_k [a_k^\dagger a_k, a_k] = -\hbar \omega_k a_k
\end{equation}
$$

类似的:

$$
\begin{equation}
[H_E, a_k^\dagger] = \hbar \omega_k a_k^\dagger
\end{equation}
$$

我们考虑一般公式:

$$
\begin{equation}
\mathrm{e}^{At} X \mathrm{e}^{-At} = \mathrm{e}^{\mathrm{ad}_A t} X
\end{equation}
$$

所以我们有:

$$
\begin{equation}
\dv{}{t} \mathrm{e}^{\mathrm{i}\, H_E t} a_k \mathrm{e}^{-\mathrm{i}\, H_E t} = \frac{\mathrm{i}}{\hbar} [H_E, a_k(t)]
\end{equation}
$$

求解这个方程, 我们得到:

$$
\begin{equation}
a_k(t) = a_k \mathrm{e}^{-\mathrm{i} \omega_k t} \quad a_k^\dagger(t) = a_k^\dagger \mathrm{e}^{\mathrm{i} \omega_k t}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
B(t) = \sum_k g_k^* a_k \mathrm{e}^{-\mathrm{i} \omega_k t} \quad B^\dagger(t) = \sum_k g_k a_k^\dagger \mathrm{e}^{\mathrm{i} \omega_k t}
\end{equation}
$$

现在我们来计算对易子, 先算里面的一层:

$$
\begin{equation}
[H(t'), \rho_S(t) \otimes \rho_E] = \hbar [S B^\dagger(t') + S^\dagger B(t'), \rho_S(t) \otimes \rho_E]
\end{equation}
$$

这好像没有什么简便方法:

$$
\begin{align}
=& \hbar [S B^\dagger(t') + S^\dagger B(t')] \rho_S(t) \otimes \rho_E - \hbar\rho_S(t) \otimes \rho_E [S B^\dagger(t') + S^\dagger B(t')]
\end{align}
$$

所以我们有:

$$
\begin{align}
[H(t), [H(t'), \rho_S(t) \otimes \rho_E]] =& \hbar [S B^\dagger(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
& + \hbar [S^\dagger B(t), [H(t'), \rho_S(t) \otimes \rho_E]]
\end{align}
$$

只能一步步算下去了:

$$
\begin{align}
&[S B^\dagger(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
=& \hbar S B^\dagger(t) (S B^\dagger(t') + S^\dagger B(t')) \rho_S(t) \otimes \rho_E \\
& - \hbar S B^\dagger(t) \rho_S(t) \otimes \rho_E (S B^\dagger(t') + S^\dagger B(t')) \\
& - \hbar (S B^\dagger(t') + S^\dagger B(t')) \rho_S(t) \otimes \rho_E S B^\dagger(t) \\
& + \hbar \rho_S(t) \otimes \rho_E (S B^\dagger(t') + S^\dagger B(t')) S B^\dagger(t)
\end{align}
$$

$$
\begin{align}
&[S^\dagger B(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
=& \hbar S^\dagger B(t) (S B^\dagger(t') + S^\dagger B(t')) \rho_S(t) \otimes \rho_E \\
& - \hbar S^\dagger B(t) \rho_S(t) \otimes \rho_E (S B^\dagger(t') + S^\dagger B(t')) \\
& - \hbar (S B^\dagger(t') + S^\dagger B(t')) \rho_S(t) \otimes \rho_E S^\dagger B(t) \\
& + \hbar \rho_S(t) \otimes \rho_E (S B^\dagger(t') + S^\dagger B(t')) S^\dagger B(t)
\end{align}
$$

剩下的一样展开吗, 一点技术含量都没有.
我们现在对环境求迹, 这里面有很多项, 但是大部分项在求迹之后都会消失.
我们来看看哪些项会留下来.
我们注意到:

$$
\begin{equation}
\tr_E (B(t) B(t') \rho_E) = \tr_E (B^\dagger(t) B^\dagger(t') \rho_E) = 0
\end{equation}
$$

这是因为二阶的生产湮灭肯定就产生0粒子的问题了, 不用担心!
所以我们有:

$$
\begin{align}
&\tr_E [S B^\dagger(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
=& \hbar S S^\dagger \rho_S(t) \tr_E (B^\dagger(t) B(t') \rho_E) \\
& - \hbar S \rho_S(t) S^\dagger \tr_E (B^\dagger(t) \rho_E B(t')) \\
& - \hbar S^\dagger \rho_S(t) S \tr_E (B(t') \rho_E B^\dagger(t)) \\
& + \hbar \rho_S(t) S^\dagger S \tr_E (\rho_E B(t') B^\dagger(t))
\end{align}
$$

$$
\begin{align}
&\tr_E [S^\dagger B(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
=& \hbar S^\dagger S \rho_S(t) \tr_E (B(t) B^\dagger(t') \rho_E) \\
& - \hbar S^\dagger \rho_S(t) S \tr_E (B(t) \rho_E B^\dagger(t')) \\
& - \hbar S \rho_S(t) S^\dagger \tr_E (B^\dagger(t') \rho_E B(t)) \\  
& + \hbar \rho_S(t) S^\dagger S \tr_E (\rho_E B(t) B^\dagger(t'))
\end{align}
$$

还是加减乘除各种计算, 我们有:

$$
\begin{align}
&\tr_E [H(t), [H(t'), \rho_S(t) \otimes \rho_E]] \\
=& \hbar^2 [S S^\dagger \rho_S(t) - S^\dagger \rho_S(t) S] \tr_E (B^\dagger(t) B(t') \rho_E) \\
& + \hbar^2 [\rho_S(t) S^\dagger S - S \rho_S(t) S^\dagger] \tr_E (B(t') B^\dagger(t) \rho_E) \\
& + \hbar^2 [S^\dagger S \rho_S(t) - S \rho_S(t) S^\dagger] \tr_E (B(t) B^\dagger(t') \rho_E) \\
& + \hbar^2 [\rho_S(t) S^\dagger S - S^\dagger \rho_S(t) S] \tr_E (B^\dagger(t) B(t)\rho_E)
\end{align}
$$

我们定义两个关键积分:

$$
\begin{equation}
F(t) = \int_0^t \tr_E (B(t) B^\dagger(t') \rho_E) \dd{t'}
\end{equation}
$$

$$
\begin{equation}
G(t) = \int_0^t \tr_E (B^\dagger(t) B(t') \rho_E) \dd{t'}
\end{equation}
$$

从而我们最开始想要的方程变成:

$$
\begin{align}
\dv{\rho_S}{t} =& - [S S^\dagger \rho_S(t) - S^\dagger \rho_S(t) S] G^*(t) \\
& - [\rho_S(t) S^\dagger S - S \rho_S(t) S^\dagger] F^*(t) \\
& - [S^\dagger S \rho_S(t) - S \rho_S(t) S^\dagger] F(t) \\
& - [\rho_S(t) S S^\dagger - S^\dagger \rho_S(t) S] G(t)
\end{align}
$$


如果我们环境的初始态是:

$$
\begin{equation}
\rho_E = |0,0,\cdots\rangle \langle 0,0,\cdots|
\end{equation}
$$

我们可以计算:

$$
\begin{align}
\tr_E (B(t) B^\dagger(t') \rho_E) =& \sum_{k,k'} g_k^* g_{k'} \mathrm{e}^{-\mathrm{i} \omega_k t} \mathrm{e}^{\mathrm{i} \omega_{k'} t'} \tr_E (a_k a_{k'}^\dagger \rho_E) \\
=& \sum_k |g_k|^2 \mathrm{e}^{-\mathrm{i} \omega_k (t - t')}
\end{align}
$$

以及:

$$
\begin{equation}
\tr_E (B^\dagger(t) B(t') \rho_E) = 0
\end{equation}
$$

所以我们有: $$F(t)$$是非零的, $$G(t) = 0$$.
我们现在计算$$F(t)$$:

$$
\begin{equation}
F(t) = \int_0^\infty \sum_k |g_k|^2 \delta(\omega - \omega_k) \int_0^t \mathrm{e}^{-\mathrm{i} \omega (t - t')} \dd{t'} \dd{\omega}
\end{equation}
$$

考虑如下换元方法:

$$
\begin{equation}
\tau = t - t' \Rightarrow \dd{\tau} = -\dd{t'} \quad t' = 0 \Rightarrow \tau = t \quad t' = t \Rightarrow \tau = 0
\end{equation}
$$

我们有:

$$
\begin{equation}
F(t) = \int_0^\infty \sum_k |g_k|^2 \delta(\omega - \omega_k) \int_0^t \mathrm{e}^{-\mathrm{i} \omega \tau} (\dd{\tau}) \dd{\omega}
\end{equation}
$$

这个可以使用Sokhotski-Plemelj公式:

$$
\begin{equation}
F(t) = \pi \\int_0^\infty \sum_k |g_k|^2 \delta(\omega - \omega_k) \delta(\omega) \dd{\omega} - \mathrm{i} \mathcal{P} \int_0^\infty \sum_k |g_k|^2 \delta(\omega - \omega_k) \frac{1}{\omega} \dd{\omega}
\end{equation}
$$

这无非就是:

$$
\begin{equation}
F(t) = \gamma/2 + \mathrm{i}\,\varepsilon/2
\end{equation}
$$

从而我们的方程写为:

$$
\begin{align}
\dv{\rho_S}{t} =& -\frac{\gamma}{2} (\rho_S S^\dagger S - S \rho_S S^\dagger + S^\dagger S \rho_S - S \rho_S S^\dagger) \\
& + \mathrm{i}\,\frac{\varepsilon}{2} (\rho_S S^\dagger S - S \rho_S S^\dagger - S^\dagger S \rho_S - S \rho_S S^\dagger)
\end{align}
$$

如果我们把Density of state搞成Lorentzian那种的, 那么我们可以得到:

$$
\begin{equation}
\dv{\rho_S}{t} = \gamma (S \rho_S S^\dagger - \frac{1}{2} \{S^\dagger S, \rho_S\}))
\end{equation}
$$

现在我们回到Schrödinger picture, 我们有:

$$
\begin{equation}
\rho_S = \mathrm{e}^{-\mathrm{i} H_S t/\hbar} \rho_S^{(S)} \mathrm{e}^{\mathrm{i} H_S t/\hbar}
\end{equation}
$$

我们有:
$$
\begin{equation}
\dv{\rho_S}{t} = \mathrm{e}^{\mathrm{i}\,H_S t/\hbar} \dv{\rho_S^{(S)}}{t} \mathrm{e}^{-\mathrm{i}\,H_S t/\hbar} + \frac{\mathrm{i}}{\hbar} \mathrm{e}^{\mathrm{i}\,H_S t/\hbar} [H_S, \rho_S]  \mathrm{e}^{-\mathrm{i}\,H_S t/\hbar}
\end{equation}
$$

对等时右边也做这个变换, 我们有:

$$
\begin{equation}
\dv{\rho_S^{(S)}}{t} = -\frac{\mathrm{i}}{\hbar} [H_S, \rho_S^{(S)}] + \gamma (S \rho_S^{(S)} S^\dagger - \frac{1}{2} \{S^\dagger S, \rho_S^{(S)}\})
\end{equation}
$$