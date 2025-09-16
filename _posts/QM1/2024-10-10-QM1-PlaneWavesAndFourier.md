---
title: "QM1 平面波和Fourier变换 "
date: 2024-10-10T08:06:00-05:00
categories:
  - QM1
---
在这篇文章里, 我们来讨论 **平面波** 和 **Fourier 变换的约定**.
为了简化, 我们一直用 1D 的例子.
这里我们不会去深入讨论 Fourier 变换的性质.

---

### 平面波

从平面波出发:

$$
\begin{equation}
  \braket{x}{p} = \frac{1}{\sqrt{2\pi\hbar}} \exp(\frac{i}{\hbar}xp)
\end{equation}
$$

你也可以用 $$k$$ 作为变量:

$$
\begin{equation}
  \braket{x}{k} = \frac{1}{\sqrt{2\pi}} \exp(\frac{i}{\hbar}xk)
\end{equation}
$$

---

### Fourier 变换

Fourier 变换定义为:

$$
\begin{equation}
  \tilde{f}(k) = \frac{1}{\sqrt{2\pi}} \int_-^+ f(x) \exp(-ikx) \dd{x}
\end{equation}
$$

反 Fourier 变换是:

$$
\begin{equation}
  f(x) = \frac{1}{\sqrt{2\pi}} \int_-^+ \tilde{f}(k) \exp(ikx) \dd{k}
\end{equation}
$$

如果我们用 $$p$$ 作为变量, 则写法是:

$$
\begin{equation}
  \tilde{f}(p) = \frac{1}{\sqrt{2\pi\hbar}} \int_-^+ f(x) \exp(-\frac{i}{\hbar}px) \dd{x}
\end{equation}
$$

$$
\begin{equation}
  f(x) = \frac{1}{\sqrt{2\pi\hbar}} \int_-^+ f(p) \exp(\frac{i}{\hbar}px) \dd{p}
\end{equation}
$$

---

> 这里的 $$\hbar$$ 因子其实是由 **归一化条件** 决定的, 可以总结为下面 3 个方程:

$$
\begin{equation}
\begin{aligned}
  \braket{x}{x'} =& \delta(x-x') \\
  \braket{p}{p'} =& \delta(p-p') \\
  \braket{k}{k'} =& \delta(k-k')
\end{aligned}
\end{equation}
$$

以及以下恒等式:

$$
\begin{equation}
\begin{aligned}
  \int_-^+ \exp(i(k-k')x) \dd{x} =& 2\pi\delta(k-k') \\
  \int_-^+ \exp(\frac{i}{\hbar}(p-p')x) \dd{x} =& 2\pi\hbar\delta(p-p')
\end{aligned}
\end{equation}
$$

---

### $$p$$ 和 $$k$$ 的关系

二者的关系是:

$$
\begin{equation}
  \delta(p-p') = \frac{1}{\hbar} \delta(k-k')
\end{equation}
$$
