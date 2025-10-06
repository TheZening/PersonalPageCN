---
title: "QM1 角动量与中心势2"
date: 2025-10-5

categories:
  - QM1
---

经过繁复的计算，我们终于得到了角动量算符在球坐标系下的表达式:

$$
\begin{equation}
\hat{L}^2 = -\hbar^2 \left[ \frac{1}{\sin \theta} \pdv{}{\theta} \left( \sin \theta \pdv{}{\theta} \right) + \frac{1}{\sin^2 \theta} \pdv[2]{}{\phi} \right]
\end{equation}
$$

现在问题来了, 我们挑哪两个算符来标记波函数呢?
我们已经知道, 角动量的三个分量 $\hat{L}_x, \hat{L}_y, \hat{L}_z$ 之间不对易, 也就是说, 它们不能同时有一组共同的本征函数.
经过之前的计算, 我们发现, 考虑 $\hat{L}^2$ 和 $\hat{L}_z$ 这两个算符, 它们是对易的, 即 $[\hat{L}^2, \hat{L}_z] = 0$, 而且形式简单:

$$
\begin{equation}
\hat{L}_z = -i \hbar \frac{\partial}{\partial \phi}
\end{equation}
$$

$$
\begin{equation}
\hat{L}^2 = -\hbar^2 \left[ \frac{1}{\sin \theta} \pdv{}{\theta} \left( \sin \theta \pdv{}{\theta} \right) + \frac{1}{\sin^2 \theta} \pdv[2]{}{\phi} \right]
\end{equation}
$$

我们现在的任务就是找到他们的本征值.

---
## 轨道角动量算符的本征值问题

我们需要解下面的两个本征值方程:

$$
\begin{equation}
\hat{L}^2 \psi_{l,m}(\theta, \phi) = \hbar^2 l(l+1) \psi_{l,m}(\theta, \phi)
\end{equation}
$$

以及:

$$
\begin{equation}
\hat{L}_z \psi_{l,m}(\theta, \phi) = \hbar m \psi_{l,m}(\theta, \phi)
\end{equation}
$$

注意此处的$$l(l+1)$$, 我们只是故意选取成这样, 方便后续的计算, 等下看到你就知道了.
先挑好算的算:

$$
\begin{equation}
\hat{L}_z \psi_{l,m}(\theta, \phi) = -\mathrm{i}\,\hbar \pdv{}{\phi} \psi_{l,m}(\theta, \phi) = \hbar m \psi_{l,m}(\theta, \phi)
\end{equation}
$$

求解这个方程简单一些:

$$
\begin{equation}
\pdv{}{\phi} \psi_{l,m}(\theta, \phi) = \mathrm{i} m \psi_{l,m}(\theta, \phi)
\end{equation}
$$

这个方程的解是:

$$
\begin{equation}
\psi_{l,m}(\theta, \phi) = p_{l,m}(\theta) \mathrm{e}^{\mathrm{i} m \phi}
\end{equation}
$$

函数得是单值得:

$$
\begin{equation}
\psi_{l,m}(\theta, \phi) = \psi_{l,m}(\theta, \phi + 2\pi)
\end{equation}
$$

这自然推出来:

$$
\begin{equation}
\mathrm{e}^{2\pi \mathrm{i}\, m} = 1 \Rightarrow m = 0, \pm 1, \pm 2, \ldots
\end{equation}
$$

所以$$m$$必须是整数, 侧面的说明了$$\hat{L}_z$$的本征值是量子化的, 只能取离散值.
现在我们还是求$$\hat{L}^2$$的本征值.
把$$\psi_{l,m}(\theta, \phi) = p_{l,m}(\theta) \mathrm{e}^{\mathrm{i} m \phi}$$代入$$\hat{L}^2$$的本征值方程:

$$
\begin{equation}
-\hbar^2 \left[ \frac{1}{\sin \theta} \pdv{}{\theta} \left( \sin \theta \pdv{p_{l,m}(\theta)}{\theta} \right) + \frac{1}{\sin^2 \theta} \pdv[2]{\mathrm{e}^{\mathrm{i} m \phi}}{\phi} p_{l,m}(\theta) \right] = \hbar^2 l(l+1) p_{l,m}(\theta) \mathrm{e}^{\mathrm{i} m \phi}
\end{equation}
$$

我们整理一下:

$$
\begin{equation}
\sin\theta \pdv{}{\theta} \left( \sin \theta \pdv{p_{l,m}(\theta)}{\theta} \right) + \left[ l(l+1) \sin^2 \theta - m^2 \right] p_{l,m}(\theta) = 0
\end{equation}
$$

这个方程看起来很复杂, 但是我们可以通过变量替换来简化它.
令$$\lambda = \cos \theta$$, 那么$$\sin \theta = \sqrt{1 - \lambda^2}$$, 并且:

$$
\begin{equation}
\pdv{}{\theta} = \pdv{\lambda}{\theta} \pdv{}{\lambda} = -\sin \theta \pdv{}{\lambda}
\end{equation}
$$

所以第一项:

$$
\begin{equation}
\sin \theta \pdv{}{\theta} = -(1-\lambda^2) \pdv{}{\lambda}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
(1-\lambda^2) \pdv{}{\lambda} \left[ (1-\lambda^2) \pdv{p_{l,m}(\lambda)}{\lambda} \right] + \left[ l(l+1)(1-\lambda^2) - m^2 \right] p_{l,m}(\lambda) = 0
\end{equation}
$$

还是不行:

$$
\begin{equation}
\pdv{}{\lambda} \left[ (1-\lambda^2) \pdv{p_{l,m}(\lambda)}{\lambda} \right] + \left[ l(l+1) - \frac{m^2}{1-\lambda^2} \right] p_{l,m}(\lambda) = 0
\end{equation}
$$

这个就能查表了, 这是著名的**连带勒让德方程**(Associated Legendre Equation), 它的解是**连带勒让德函数**(Associated Legendre Function), 记作$$P_l^m(\lambda)$$.
如果我们考虑$$m=0$$的情况, 那么方程就简化成:

$$
\begin{equation}
\pdv{}{\lambda} \left[ (1-\lambda^2) \pdv{p_{l,0}(\lambda)}{\lambda} \right] + l(l+1) p_{l,0}(\lambda) = 0
\end{equation}
$$

考虑级数解:

$$
\begin{equation}
p_{l,0}(\lambda) = \sum_{n=0}^{\infty} a_n \lambda^n
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\pdv{p_{l,0}(\lambda)}{\lambda} = \sum_{n=1}^{\infty} n a_n \lambda^{n-1}
\end{equation}
$$

以及:

$$
\begin{equation}
\pdv[2]{p_{l,0}(\lambda)}{\lambda} = \sum_{n=2}^{\infty} n(n-1) a_n \lambda^{n-2}
\end{equation}
$$

带进去算, 比对系数:

$$
\begin{equation}
(1-\lambda^2) \sum_{n=2}^{\infty} n(n-1) a_n \lambda^{n-2} - 2\lambda \sum_{n=1}^{\infty} n a_n \lambda^{n-1} + l(l+1) \sum_{n=0}^{\infty} a_n \lambda^n = 0
\end{equation}
$$

我们有:

$$
\begin{equation}
\sum_{n=0}^{\infty} \left[ (n+2)(n+1) a_{n+2} - n(n-1) a_n - 2n a_n + l(l+1) a_n \right] \lambda^n = 0
\end{equation}
$$

我们有:

$$
\begin{equation}
(n+2)(n+1) a_{n+2} - n(n-1) a_n - 2n a_n + l(l+1) a_n = 0
\end{equation}
$$

等价于:

$$
\begin{equation}
\frac{a_{n+2}}{a_n} = \frac{n(n+1) - l(l+1)}{(n+1)(n+2)}
\end{equation}
$$

我们发现, 当$$n=l$$时, 分子为零, 级数终止, 于是我们得到了多项式解.
这些多项式解就是**勒让德多项式**(Legendre Polynomial), 记作$$P_l(\lambda)$$.
前几个勒让德多项式是:

$$
\begin{align}
P_0(\lambda) &= 1 \\
P_1(\lambda) &= \lambda \\
P_2(\lambda) &= \frac{1}{2} (3\lambda^2 - 1) \\
P_3(\lambda) &= \frac{1}{2} (5\lambda^3 - 3\lambda) \\
P_4(\lambda) &= \frac{1}{8} (35\lambda^4 - 30\lambda^2 + 3) \\
P_5(\lambda) &= \frac{1}{8} (63\lambda^5 - 70\lambda^3 + 15\lambda)
\end{align}
$$

有一个生成的方法:

$$
\begin{equation}
P_l(\lambda) = \frac{1}{2^l l!} \frac{\partial^l}{\partial \lambda^l} (\lambda^2 - 1)^l
\end{equation}
$$

以及生成函数:

$$
\begin{equation}
\frac{1}{\sqrt{1 - 2\lambda t + t^2}} = \sum_{l=0}^{\infty} P_l(\lambda) t^l
\end{equation}
$$

此时$$l$$必须是非负整数, 否则级数不收敛.
现在我们需要讨论$$m \neq 0$$的情况:

$$
\begin{equation}
p_{l,m}(\lambda) = (1-\lambda^2)^{|m|/2} \frac{\partial^{|m|}}{\partial \lambda^{|m|}} P_l(\lambda)
\end{equation}
$$

自然而然的, 我们必须有$$|m| \leq l$$, 否则导数会把多项式直接导成零.
所以$$l$$也是非负整数.
总结一下, 轨道角动量的量子数$$l$$是非负整数, $$m$$是整数, 且满足$$|m| \leq l$$
所以我们的波函数是:

$$
\begin{equation}
\psi_{l,m}(\theta, \phi) = p_{l,m}(\cos \theta) \mathrm{e}^{\mathrm{i} m \phi}
\end{equation}
$$

一旦我们确定了$$l$$, 那么$$m$$就有$$2l+1$$个取值:

$$
\begin{equation}
m = -l, -l+1, \ldots, 0, \ldots, l-1, l
\end{equation}
$$

对于一个给定的$$l$$, $$m$$允许的取值个数是$$2l+1$$, 形成了一个$$l$$-multiplet.

$$
\begin{align}
l=0 &\Rightarrow m=0 \quad (1 \text{-plet}) \\
l=1 &\Rightarrow m=-1,0,1 \quad (3 \text{-plet}) \\
l=2 &\Rightarrow m=-2,-1,0,1,2 \quad (5 \text{-plet}) \\
l=3 &\Rightarrow m=-3,-2,-1,0,1,2,3 \quad (7 \text{-plet}) \\
\ldots
\end{align}
$$

现在结合我们之前算出来的角项的结果:

$$
\begin{equation}
Y_{l,m}(\theta, \phi) = \sqrt{\frac{(2l+1)}{4\pi} \frac{(l-m)!}{(l+m)!}} (-1)^{m} P_{l}^{m}(\lambda) \mathrm{e}^{\mathrm{i} m \phi}
\end{equation}
$$

这个叫做**球谐函数**(Spherical Harmonics), 它们是归一化的.
如果我们需要$$m<0$$的情况, 那么我们有关系:

$$
\begin{equation}
Y_{l,-m}(\theta, \phi) = (-1)^m Y_{l,m}^*(\theta, \phi)
\end{equation}
$$

这样我们就搞定了$$\hat{L}^2$$和$$\hat{L}_z$$的本征值问题.

$$
\begin{align}
\hat{L}^2 Y_{l,m}(\theta, \phi) &= \hbar^2 l(l+1) Y_{l,m}(\theta, \phi) \\
\hat{L}_z Y_{l,m}(\theta, \phi) &= \hbar m Y_{l,m}(\theta, \phi)
\end{align}
$$

我们有前几个球谐函数:

$$
\begin{align}
Y_{0,0}(\theta, \phi) &= \sqrt{\frac{1}{4\pi}} \\
Y_{1,0}(\theta, \phi) &= \sqrt{\frac{3}{4\pi}} \cos \theta = \sqrt{\frac{3}{4\pi}} \frac{z}{r} \\
Y_{1,1}(\theta, \phi) &= -\sqrt{\frac{3}{8\pi}} \sin \theta \mathrm{e}^{\mathrm{i} \phi} = -\sqrt{\frac{3}{8\pi}} \frac{x + \mathrm{i} y}{r} \\
Y_{1,-1}(\theta, \phi) &= \sqrt{\frac{3}{8\pi}} \sin \theta \mathrm{e}^{-\mathrm{i} \phi} = \sqrt{\frac{3}{8\pi}} \frac{x - \mathrm{i} y}{r} \\
Y_{2,0}(\theta, \phi) &= \sqrt{\frac{5}{16\pi}} (3\cos^2 \theta - 1) = \sqrt{\frac{5}{16\pi}} \frac{3z^2 - r^2}{r^2} \\
Y_{2,1}(\theta, \phi) &= -\sqrt{\frac{15}{8\pi}} \sin \theta \cos \theta \mathrm{e}^{\mathrm{i} \phi} = -\sqrt{\frac{15}{8\pi}} \frac{(x + \mathrm{i} y) z}{r^2} \\
Y_{2,-1}(\theta, \phi) &= \sqrt{\frac{15}{8\pi}} \sin \theta \cos \theta \mathrm{e}^{-\mathrm{i} \phi} = \sqrt{\frac{15}{8\pi}} \frac{(x - \mathrm{i} y) z}{r^2} \\
Y_{2,2}(\theta, \phi) &= \sqrt{\frac{15}{32\pi}} \sin^2 \theta \mathrm{e}^{2\mathrm{i} \phi} = \sqrt{\frac{15}{32\pi}} \frac{(x + \mathrm{i} y)^2}{r^2} \\
Y_{2,-2}(\theta, \phi) &= \sqrt{\frac{15}{32\pi}} \sin^2 \theta \mathrm{e}^{-2\mathrm{i} \phi} = \sqrt{\frac{15}{32\pi}} \frac{(x - \mathrm{i} y)^2}{r^2}
\end{align}
$$

系数不好搞啊, 一般都是写出来关于$$\theta$$和$$\phi$$的形式, 然后再用归一化条件算系数.

现在我们搞定了角度相关的, 还没有说任何关于径向的解, 这个更加复杂一点.