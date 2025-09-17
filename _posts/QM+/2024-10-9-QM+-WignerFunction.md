---
title: "QM+ Wigner functions入门"
date: 2024-10-09T08:06:00-05:00
categories:
  - QM+
---
在这篇文章里, 我们来讨论 **Wigner 函数** 和 **Weyl 变换**.

> 我们希望能有一个函数, 可以同时在 $$x$$ 和 $$p$$ 变量上展示概率分布.这就是 Wigner 函数要做的事.

> 另外, 把量子态放到相空间来表示, 还有助于研究量子力学和经典力学之间的联系.

最初, Wigner 是想找到一个对 **Boltzmann 分布** 的量子修正, 这个分布同时包含位置和动量, 但受到 **海森堡不确定性原理** 的限制.所以我们可以预期:在某些极限下, 它表现出量子特性；在另一些极限下, 它又能覆盖经典特性.

一些总体性的评论:
1. Wigner 函数并不是一个普通的概率分布.
2. 它和算符的 Weyl 变换紧密相关.
3. Weyl 变换会把一个算符转成 $$x$$ 和 $$p$$ 的函数.

---

### Weyl 变换

我们从算符 $$\hat{O}$$ 的 Weyl 变换开始:

$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(-\frac{i}{\hbar}py) \mel**{x+\frac{y}{2}}{\hat{O}}{x-\frac{y}{2}} \dd{y}
\end{equation}
$$

我们会在算符上加个波浪号, 表示这是 Weyl 变换过的.上面的式子也可以写成:

$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{equation}
$$

Weyl 变换的一个好处是:

$$
\begin{equation}
  \Tr(\hat{A} \hat{B})=\frac{1}{2\pi\hbar} \int_-^+ \tilde{A}(x, p) \widetilde{B}(x, p) \dd{x}\dd{p}
\end{equation}
$$

这里出现了迹运算, 自然让我们想到 **密度矩阵** $$\rho=\ketbra{\psi}{\psi}$$.如果要求期望值, 可以写成:

$$
\begin{equation}
  \Tr[\hat{\rho} \hat{O}]=\operatorname{Tr}[|\psi\rangle\langle\psi| \hat{O}]=\langle\psi| \hat{O}|\psi\rangle=\langle O\rangle
\end{equation}
$$

而 Weyl 变换的性质告诉我们:

$$
\begin{equation}
  \langle O\rangle=\operatorname{Tr}[\hat{\rho} \hat{O}]=\frac{1}{2\pi\hbar} \int \tilde{\rho} \tilde{O} \dd{x}\dd{p}
\end{equation}
$$

---

### Wigner 函数

于是我们马上得到 **Wigner 函数**:

$$
\begin{equation}
\begin{aligned}
  W(x,p) =& \frac{\tilde{\rho}}{2\pi\hbar} \\
  =& \frac{1}{2\pi\hbar} \int \exp(-\frac{i}{\hbar}py) \psi(x+y/2)\psi^*(x-y/2) \dd{y}
\end{aligned}
\end{equation}
$$

然后, 算符 $$\hat{O}$$ 的期望值就是:

$$
\begin{equation}
  \langle O\rangle=\int W(x, p) \tilde{O}(x, p) \dd{x}\dd{p}
\end{equation}
$$

这样一来, 期望值就变成了:Weyl 形式在 Wigner 分布 $$W(x,p)$$ 上的加权平均.

看一下 $$W$$, 我们注意到:

$$
\begin{equation}
\begin{aligned}
  \int W(x, p) \dd{p}&=\psi^*(x) \psi(x) \\
  \int W(x, p) \dd{x}&=\varphi^*(p) \varphi(p)
\end{aligned}
\end{equation}
$$

这就对了!

---

### 一些重要性质

Wigner 函数和 Weyl 变换有一些关键性质:
1. 动量表象下的 Wigner 函数.
2. 两个算符的迹, 可以写成 Weyl 变换形式.
3. Wigner 函数 $$W$$ 是实数.
4. 单位算符的 Weyl 变换还是 $$\mathbb{1}$$.
5. $$W$$ 在整个 $$x,p$$ 上积分等于 1.
6. 可以从 Wigner 函数恢复波函数.

---

### 证明思路

比如我们再看 Weyl 变换的另一种写法:

$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{equation}
$$

我们有:

$$
\begin{equation}
\begin{aligned}
  &\int_-^+ \exp(-\frac{i}{\hbar}py) \mel**{x+\frac{y}{2}}{\hat{O}}{x-\frac{y}{2}} \dd{y} \\
  =& \int_-^+ \exp(-\frac{i}{\hbar}py) \braket{x+\frac{y}{2}}{p'}\mel**{p'}{\hat{O}}{p}\braket{p}{x-\frac{y}{2}} \dd{y}\dd{p}\dd{p'}\\
  =& \text{把所有平面波积分掉} \\
  =& \int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{aligned}
\end{equation}
$$

再比如, 两个算符的迹:

$$
\begin{equation}
  \Tr(\hat{A}\hat{B}) = \frac{1}{2\pi\hbar} \int \tilde{A} \tilde{B} \dd{x}\dd{p}
\end{equation}
$$












































