---
title: "QM1 角动量与中心势3"
date: 2025-10-5

categories:
  - QM1
---

我们之前已经讨论了角动量算符在球坐标系下的表达式, 以及它们的本征值问题.
我们的到了如下结果:

$$
\begin{align}
\hat{L}_z Y_{l,m}(\theta, \phi) &= \hbar m Y_{l,m}(\theta, \phi) \\
\hat{L}^2 Y_{l,m}(\theta, \phi) &= \hbar^2 l(l+1) Y_{l,m}(\theta, \phi)
\end{align}
$$

其中$$l$$和$$m$$是量子数, 它们的取值范围是:

$$
\begin{equation}
l = 0, 1, 2, \ldots; \quad m = -l, -l+1, \ldots, l-1, l
\end{equation}
$$

我们还知道, $$Y_{l,m}(\theta, \phi)$$是球谐函数, 它们是角动量算符的本征函数.
我们可以把$$Y_{l,m}(\theta, \phi)$$写成如下形式:

$$
\begin{align}
Y_{l,m}(\theta, \phi) &= p_{l,m}(\theta) \mathrm{e}^{\mathrm{i} m \phi} \\
\end{align}
$$

---
## 径向方程

我们现在回过头来看Schrödinger方程在球坐标系下的形式:

$$
\begin{equation}
-\frac{\hbar^2}{2m} \frac{1}{r} \pdv[2]{}{r} (r \psi) + \frac{\hat{L}^2}{2mr^2} \psi + V(r) \psi = E \psi
\end{equation}
$$

我们把波函数$$\psi$$写成径向和角向的乘积形式:

$$
\begin{equation}
\psi(r, \theta, \phi) = R(r) Y_{l,m}(\theta, \phi)
\end{equation}
$$

代入Schrödinger方程, 并利用$$Y_{l,m}(\theta, \phi)$$的本征值方程, 我们得到径向方程:

$$
\begin{equation}
-\frac{\hbar^2}{2m} \pdv[2]{}{r} (r R(r)) + \frac{\hbar^2 l(l+1)}{2mr^2} rR(r) + V(r) rR(r) = E rR(r)
\end{equation}
$$

我们再次把$$u(r) = r R(r)$$, 得到:

$$
\begin{equation}
-\frac{\hbar^2}{2m} \pdv[2]{u(r)}{r} + \left[ V(r) + \frac{\hbar^2 l(l+1)}{2mr^2} \right] u(r) = E u(r)
\end{equation}
$$

这就是径向方程, 它描述了粒子在有效势:

$$
\begin{equation}
V_{\text{eff}}(r) = V(r) + \frac{\hbar^2 l(l+1)}{2mr^2}
\end{equation}
$$

中的运动. 这里的第二项是角动量势垒, 它在$$r \to 0$$时趋于无穷大, 防止粒子落入势阱中心.
我们也可以注意到, 我们的解$$u(r)$$依赖于$$E$$和$$l$$, 但不依赖于$$m$$, 这反映了能级的简并性.

$$
\begin{equation}
u(r) = u_{n,l}(r) \Rightarrow R_{n,l}(r) = \frac{u_{n,l}(r)}{r}
\end{equation}
$$

所以整体的波函数是:

$$
\begin{equation}
\psi_{n,l,m}(r, \theta, \phi) = R_{n,l}(r) Y_{l,m}(\theta, \phi) = \frac{u_{n,l}(r)}{r} Y_{l,m}(\theta, \phi)
\end{equation}
$$

一般的策略还是先求方程的形式, 然后再根据具体的表达式归一化:

$$
\begin{equation}
\int_0^\infty |R_{n,l}(r)|^2 Y_{l,m}^*(\theta, \phi) Y_{l,m}(\theta, \phi) r^2 \sin \theta \, \dd{r} \, \dd{\theta} \, \dd{\phi} = 1
\end{equation}
$$

从而要求:

$$
\begin{equation}
\int_0^\infty |R_{n,l}(r)|^2 r^2 \, \dd{r} = 1, \quad \int_0^\infty |u_{n,l}(r)|^2 \, \dd{r} = 1
\end{equation}
$$

当然我们得有个边界条件:

$$
\begin{equation}
u_{n,l}(0) = 0, \quad u_{n,l}(\infty) = 0
\end{equation}
$$

第二个条件是波函数在无穷远处消失, 没什么好说的, 第一个条件比较复杂.
我们知道$$R_{n,l}(r)$$是径向波函数, 它描述了粒子在距离原点$$r$$处的概率幅度.
如果$$R_{n,l}(r)$$在$$r=0$$处是有限的, 那么$$u_{n,l}(r) = r R_{n,l}(r)$$在$$r=0$$处必须为零, 因为$$u_{n,l}(r)$$包含了一个额外的因子$$r$$.
这确保了波函数在原点处是正则的, 即没有奇异性.