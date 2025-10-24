---
title: "CMP1 全同粒子的再表述4"
date: 2025-09-12
categories:
  - CMP1
---

上一小节我们讨论了单粒子算符在多粒子系统的中的对应, 如果我们考虑任意的一组基:

$$
\begin{equation}
\{ \ket{u_1}, \ket{u_2}, \ket{u_3}, \cdots \}
\end{equation}
$$

我们可以将单粒子算符 $\hat{f}$ 在该基下展开:

$$
\begin{equation}
\hat{F} = \sum_{i,j} \mel{u_i}{\hat{f}}{u_j} \hat{a}_i^\dagger \hat{a}_j
\end{equation}
$$

对应的, 我们也可以考虑二粒子算符在多粒子系统中的对应:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{i,j,k,l} \mel{1=u_i, 2=u_j}{\hat{g}}{1=u_k, 2=u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

如果恰好单粒子算符层面上是可以拆的 $$\hat{g}(q,q') = \hat{f}{q} \hat{h}{q'}$$, 那么二粒子算符在多粒子系统中的对应就可以写成单粒子算符的形式:

$$
\begin{equation}
\hat{G} = \sum_{i,j,k,l} \mel{u_i}{\hat{f}}{u_k} \mel{u_j}{\hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

我们现在主要讨论一下这些算符的性质, 当然, 主要是双粒子算符的性质.

---
## 最小的例子: 两个粒子

我们现在考虑两个粒子的体系, 最简单的体系.
我们想描述如下的实验过程抽象:

> 我们扔进去两个粒子, 态分别是 $$\ket{u_\alpha}$$ 和 $$\ket{u_\beta}$$, 然后经过一段时间的黑盒演化.
> 然后我们观测到最后的态是 $$\ket{u_\gamma}$$ 和 $$\ket{u_\delta}$$.
> 我们如何用一个算符抽象的描述这个过程呢?

首先我们知道, 我们的初态编号是任意的:

$$
\begin{equation}
\ket{1=u_\alpha, 2=u_\beta} \quad \text{或者} \quad \ket{1=u_\beta, 2=u_\alpha}
\end{equation}
$$

我们的末态编号也是任意的:

$$
\begin{equation}
\ket{1=u_\gamma, 2=u_\delta} \quad \text{或者} \quad \ket{1=u_\delta, 2=u_\gamma}
\end{equation}
$$

所以我们有四种可能:

$$
\begin{equation}
\frac{1}{2} \mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\alpha, 2=u_\beta} \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\beta, 2=u_\alpha} \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\beta, 2=u_\alpha} \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\alpha, 2=u_\beta} \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

在这四个式子里面, 我们注意到, 前两个式子实际上是一样的, 后两个式子实际上也是一样的, 就是标号不一样的.
然后我们对产生-湮灭算符进行置换:

$$
\begin{equation}
\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha} = \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$
$$
\begin{equation}
\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta} = \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha} = \eta \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

其中$$\eta$$是粒子的交换相位, 玻色子 $$\eta = +1$$, 费米子 $$\eta = -1$$.
现在我们把可能的过程都加起来:

$$
\begin{equation}
\left( \mel{u_\gamma, u_\delta}{\hat{g}}{u_\alpha, u_\beta} + \eta \mel{u_\delta, u_\gamma}{\hat{g}}{u_\alpha, u_\beta} \right) \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

如果我们用布居数态求那些生成湮灭算符, 如果是玻色子:

$$
\begin{equation}
\mel{n_\alpha, n_\beta, n_\gamma, n_\delta}{\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}}{n_\alpha, n_\beta, n_\gamma, n_\delta} = \sqrt{n_\alpha n_\beta (n_\gamma + 1)(n_\delta + 1)}
\end{equation}
$$

如果是费米子, 就更简单了, 只能是$$1$$.
这个简单的例子告诉我们一些重要的性质:

1. 双粒子算符会出现两项, 第一项就是 $$\mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\alpha, 2=u_\beta}$$.
2. 因为是黑盒, 理所应当的, 还有一个交换项 $$\eta \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\alpha, 2=u_\beta}$$, 其中$$\eta$$是粒子的交换相位.
3. 产生湮灭算符的作用, 会带来布居数的因子, 玻色子是平方根形式, 有一个增强, 费米子是 $$1$$, 有一个Pauli阻塞现象.

---
## 一个真正的讨论: 多粒子体系
