---
title: "Dirac 方程（二）：洛伦兹旋量、生成元与双线性量"
date: 2026-08-18
weight: 18
---

上一节从相对论色散关系出发，得到克利福德代数与 Dirac 方程。
现在要回答一个更根本的问题：四分量波函数为什么能够描述相对论粒子，而又不必是一个四维时空矢量？

答案是：时空坐标按照洛伦兹群的矢量表示变换，Dirac 旋量则按照同一个群的旋量表示变换。
两种表示作用在不同的空间上，但它们通过 $\gamma^\mu$ 矩阵彼此配合，使 Dirac 方程保持协变。


---
## 洛伦兹变换为什么需要旋量表示


设两个惯性系中的坐标满足：

$$
x'^\mu=\Lambda^\mu{}_{\nu}x^\nu
$$

其中洛伦兹矩阵满足：

$$
\Lambda^\mu{}_{\rho}\Lambda^\nu{}_{\sigma}\eta_{\mu\nu}=\eta_{\rho\sigma}
$$

这一条件保证时空间隔 $x^2=\eta_{\mu\nu}x^\mu x^\nu$ 不变。

旋量场的变换写成：

$$
\psi'(x')=S(\Lambda)\psi(x)
$$

$\Lambda$ 作用在时空指标上，而 $S(\Lambda)$ 作用在旋量分量上。
因此，$S(\Lambda)$ 一般不是 $\Lambda$ 本身，也不应当把 $\psi$ 的四个分量解释成一个四维矢量的四个分量。

原来的自由 Dirac 方程为：

$$
(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi(x)=0
$$

由 $x'^\mu=\Lambda^\mu{}_{\nu}x^\nu$ 可得导数的变换规律：

$$
\partial'_\mu=(\Lambda^{-1})^\nu{}_{\mu}\partial_\nu
$$

要求新坐标系中的场仍满足同一形式的方程：

$$
(\mathrm{i}\gamma^\mu\partial'_\mu-m)\psi'(x')=0
$$

代入 $\psi'(x')=S\psi(x)$，并注意对于整体洛伦兹变换，$S$ 与时空位置无关：

$$
(\mathrm{i}\gamma^\mu(\Lambda^{-1})^\nu{}_{\mu}\partial_\nu-m)S\psi=0
$$

从左侧乘以 $S^{-1}$，得到：

$$
\left[\mathrm{i}S^{-1}\gamma^\mu S(\Lambda^{-1})^\nu{}_{\mu}\partial_\nu-m\right]\psi=0
$$

它要与原方程完全相同，必须满足旋量表示的核心条件：

$$
S^{-1}(\Lambda)\gamma^\mu S(\Lambda)=\Lambda^\mu{}_{\nu}\gamma^\nu
$$

这个等式的含义很清楚：$S$ 虽然不把旋量变成四维矢量，但它通过共轭作用，使四个 $\gamma^\mu$ 像四维矢量的四个分量一样变换。
正是这一点保证了 $\gamma^\mu\partial_\mu$ 的协变性。

更准确地说，旋量表示来自 $\mathrm{Spin}^+(1,3)$，它双覆盖与恒等变换连通的洛伦兹群 $\mathrm{SO}^+(1,3)$。
$\mathrm{SO}^+(1,3)$ 描述保持时空取向与时间方向的正规洛伦兹变换，而 $\mathrm{Spin}^+(1,3)$ 可以理解为在这些变换之上额外保留旋量符号的一层群结构。
“双覆盖”是指两个旋量变换 $S$ 与 $-S$ 对应同一个洛伦兹变换 $\Lambda$。
因此，旋量转动 $2\pi$ 后可以变号，而转动 $4\pi$ 才回到自身。
这个符号差不会改变由一个旋量构成的可观测双线性量，却是半整数自旋表示的基本特征。

把它放回丛语言中，时空每一点上所有允许的局部自旋标架组成自旋主丛的一根纤维。
$\mathrm{Spin}^+(1,3)$ 在这些标架上作用，再通过狄拉克表示构造出旋量丛；$S(\Lambda)$ 描述的正是局部自旋标架变化时旋量纤维分量怎样改变。
所以洛伦兹变换同时有两个相关但不同的层面：它在底空间或切标架上由 $\Lambda$ 表示，在旋量伴丛的纤维上则由覆盖它的 $S(\Lambda)$ 表示。


---
## 无穷小生成元、转动与推动


连续变换可以从无穷小变换建立起来。
把接近恒等变换的洛伦兹矩阵写成：

$$
\Lambda^\mu{}_{\nu}=\delta^\mu{}_{\nu}+\omega^\mu{}_{\nu}+O(\omega^2)
$$

将它代入洛伦兹条件并只保留一阶项，可得：

$$
\omega_{\mu\nu}=-\omega_{\nu\mu}
$$

反对称张量 $\omega_{\mu\nu}$ 有六个独立分量，其中三个描述空间转动，另外三个描述洛伦兹推动。

在旋量空间中定义生成元：

$$
\sigma^{\mu\nu}=\frac{\mathrm{i}}{2}[\gamma^\mu,\gamma^\nu]
$$

这里的 $\sigma^{\mu\nu}$ 不应与二分量泡利矩阵 $\sigma^i$ 混淆。
前者带两个时空指标，是作用在四分量 Dirac 旋量上的六个矩阵；后者只有三个，是作用在二分量旋量上的泡利矩阵。

无穷小旋量变换为：

$$
S(\Lambda)=1-\frac{\mathrm{i}}{4}\omega_{\mu\nu}\sigma^{\mu\nu}+O(\omega^2)
$$

为了检验它确实产生正确的洛伦兹变换，需要证明：

$$
[\sigma^{\mu\nu},\gamma^\rho]=2\mathrm{i}(\eta^{\nu\rho}\gamma^\mu-\eta^{\mu\rho}\gamma^\nu)
$$

从定义直接展开左侧：

$$
[\sigma^{\mu\nu},\gamma^\rho]=\frac{\mathrm{i}}{2}(\gamma^\mu\gamma^\nu\gamma^\rho-\gamma^\nu\gamma^\mu\gamma^\rho-\gamma^\rho\gamma^\mu\gamma^\nu+\gamma^\rho\gamma^\nu\gamma^\mu)
$$

利用克利福德关系 $\gamma^\alpha\gamma^\beta=2\eta^{\alpha\beta}-\gamma^\beta\gamma^\alpha$，第一项可以整理为：

$$
\gamma^\mu\gamma^\nu\gamma^\rho=2\eta^{\nu\rho}\gamma^\mu-\gamma^\mu\gamma^\rho\gamma^\nu
$$

第二项同理为：

$$
\gamma^\nu\gamma^\mu\gamma^\rho=2\eta^{\mu\rho}\gamma^\nu-\gamma^\nu\gamma^\rho\gamma^\mu
$$

把这两个结果代回去，剩余的三个 $\gamma$ 矩阵乘积两两抵消，于是得到所需恒等式。
再把无穷小 $S$ 代入 $S^{-1}\gamma^\rho S$，便能逐阶恢复洛伦兹矢量的变换规律。

有限变换由指数映射给出：

$$
S(\Lambda)=\exp\left(-\frac{\mathrm{i}}{4}\omega_{\mu\nu}\sigma^{\mu\nu}\right)
$$

先看空间转动。
定义四分量自旋矩阵：

$$
\Sigma^i=\mqty(\sigma^i&0\\0&\sigma^i)
$$

绕单位矢量 $\bm{n}$ 转动角度 $\theta$ 时：

$$
S_R(\theta)=\exp\left(-\frac{\mathrm{i}\theta}{2}\bm{n}\cdot\bm{\Sigma}\right)
$$

由于 $(\bm{n}\cdot\bm{\Sigma})^2=1$，指数可以直接求出：

$$
S_R(\theta)=\cos\frac{\theta}{2}-\mathrm{i}\bm{n}\cdot\bm{\Sigma}\sin\frac{\theta}{2}
$$

因此 $S_R(2\pi)=-1$，而 $S_R(4\pi)=1$。

这里并不是说物理空间在转动 $2\pi$ 后没有复原，而是说旋量表示比普通矢量表示多记录了一层符号信息。

再看沿 $\bm{n}$ 方向的推动。
用快度 $\zeta$ 表示速度，它满足 $E=m\cosh\zeta$、$|\bm{p}|=m\sinh\zeta$ 与 $\tanh\zeta=|\bm{v}|$。

在本文采用的主动变换约定下，把静止旋量推动到动量 $\bm{p}$ 的变换为：

$$
S_B(\zeta)=\exp\left(\frac{\zeta}{2}\bm{n}\cdot\bm{\alpha}\right)
$$

因为 $(\bm{n}\cdot\bm{\alpha})^2=1$，所以：

$$
S_B(\zeta)=\cosh\frac{\zeta}{2}+\bm{n}\cdot\bm{\alpha}\sinh\frac{\zeta}{2}
$$

转动生成元是反厄米指数中的厄米矩阵，因此转动的 $S_R$ 是幺正的。
推动的指数却是厄米的实倍数，因此 $S_B$ 一般不是幺正矩阵。
这正是 $\psi^\dagger\psi$ 不能作为洛伦兹标量的直接原因。

若采用被动坐标变换，或者把快度方向定义为相反方向，推动指数会出现相反符号。
只要坐标、动量和场的变换约定始终一致，物理结论不会改变。


---
## Dirac 共轭与洛伦兹协变双线性量


为了构造洛伦兹协变量，需要先研究 $\gamma^\mu$ 的厄米共轭。
在度规号差 $(+,-,-,-)$ 下，可以选取 $(\gamma^0)^\dagger=\gamma^0$ 与 $(\gamma^i)^\dagger=-\gamma^i$。

这两式可以统一写成：

$$
(\gamma^\mu)^\dagger=\gamma^0\gamma^\mu\gamma^0
$$

对 Dirac 方程取厄米共轭：

$$
\left[(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi\right]^\dagger=0
$$

导数作用方向反转后得到：

$$
-\mathrm{i}(\partial_\mu\psi^\dagger)(\gamma^\mu)^\dagger-m\psi^\dagger=0
$$

从右侧乘以 $\gamma^0$，并使用 $(\gamma^\mu)^\dagger\gamma^0=\gamma^0\gamma^\mu$：

$$
-\mathrm{i}(\partial_\mu\psi^\dagger)\gamma^0\gamma^\mu-m\psi^\dagger\gamma^0=0
$$

定义 Dirac 共轭旋量，它也常称为 Dirac 伴随旋量：

$$
\bar\psi=\psi^\dagger\gamma^0
$$

于是共轭方程可以写成：

$$
\mathrm{i}(\partial_\mu\bar\psi)\gamma^\mu+m\bar\psi=0
$$

也常用左作用导数把它记为：

$$
\bar\psi(\mathrm{i}\overleftarrow{\slashed\partial}+m)=0
$$

Dirac 共轭不仅是为了把方程写得简洁，更重要的是它具有正确的洛伦兹变换性质。
由生成元的性质可以证明：

$$
S^\dagger\gamma^0=\gamma^0S^{-1}
$$

因此：

$$
\bar\psi'(x')=\psi^\dagger(x)S^\dagger\gamma^0=\bar\psi(x)S^{-1}
$$

于是 $\bar\psi\psi$ 的变换为：

$$
\bar\psi'(x')\psi'(x')=\bar\psi(x)S^{-1}S\psi(x)=\bar\psi(x)\psi(x)
$$

所以 $\bar\psi\psi$ 是洛伦兹标量。
相反，$\psi^\dagger\psi$ 在推动下并不保持不变，因为推动对应的 $S$ 不是幺正矩阵。

同理，$\bar\psi\gamma^\mu\psi$ 按四维矢量变换：

$$
\bar\psi'\gamma^\mu\psi'=\bar\psi S^{-1}\gamma^\mu S\psi=\Lambda^\mu{}_{\nu}\bar\psi\gamma^\nu\psi
$$

旋量本身不是普通时空张量，但两个旋量可以组合成具有明确张量性质的双线性量。
常用的五类双线性量分别是标量 $\bar\psi\psi$、矢量 $\bar\psi\gamma^\mu\psi$、反对称二阶张量 $\bar\psi\sigma^{\mu\nu}\psi$、赝标量 $\bar\psi\gamma^5\psi$ 和轴矢量 $\bar\psi\gamma^\mu\gamma^5\psi$。
这里“赝”表示它在包含空间反演的变换下比普通标量或矢量多出一个符号，而不是表示它不是真实的物理量。

这些双线性量可以理解为保持群作用的纤维映射。
例如 $\bar\psi\psi$ 把对偶旋量纤维与旋量纤维配对成标量，$\bar\psi\gamma^\mu\psi$ 则借助克利福德乘法把同一对旋量送到切向量纤维。
它们之所以具有确定的张量类型，不是因为分量碰巧排成某种形状，而是这些配对与自旋群和洛伦兹群的表示相容。

定义手征矩阵：

$$
\gamma^5=\mathrm{i}\gamma^0\gamma^1\gamma^2\gamma^3
$$

由克利福德代数可以推出 $(\gamma^5)^\dagger=\gamma^5$、$(\gamma^5)^2=1$ 与 $\{\gamma^5,\gamma^\mu\}=0$。

例如，把 $\gamma^\mu$ 从 $\gamma^5$ 的四个 $\gamma$ 矩阵中逐次移到另一侧时，总会产生奇数次反交换，所以得到负号。
$\gamma^5$ 的本征值为 $\pm1$，相应投影算符为 $P_R=\frac{1+\gamma^5}{2}$ 与 $P_L=\frac{1-\gamma^5}{2}$。

它们满足 $P_R^2=P_R$、$P_L^2=P_L$、$P_RP_L=0$ 与 $P_R+P_L=1$，因而把 Dirac 旋量分成右手征与左手征两部分。
有质量时，质量项会把两种手征联系起来；无质量极限中，两种手征可以分别演化。

自由 Dirac 场的拉格朗日密度为：

$$
\mathcal{L}=\bar\psi(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi
$$

把 $\psi$ 与 $\bar\psi$ 暂时视为独立场，对 $\bar\psi$ 使用欧拉–拉格朗日方程，直接得到：

$$
(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi=0
$$

对 $\psi$ 变分时，两个偏导数分别为：

$$
\frac{\partial\mathcal{L}}{\partial\psi}=-m\bar\psi
$$

以及：

$$
\frac{\partial\mathcal{L}}{\partial(\partial_\mu\psi)}=\mathrm{i}\bar\psi\gamma^\mu
$$

因此欧拉–拉格朗日方程给出：

$$
-m\bar\psi-\partial_\mu(\mathrm{i}\bar\psi\gamma^\mu)=0
$$

也就是刚才得到的共轭 Dirac 方程。
由于 $\bar\psi\psi$ 是标量，而 $\bar\psi\gamma^\mu\partial_\mu\psi$ 是矢量与协矢量的缩并，整个拉格朗日密度是洛伦兹标量。

至此，旋量的变换规则、Dirac 共轭以及协变双线性量已经建立起来。
下一节将把这些工具用于平面波解，并逐步推导 $u$ 旋量、$v$ 旋量、归一化关系和完备关系。
