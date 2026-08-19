---
title: "电磁场（三）：平面波、偏振与两个物理自由度"
date: 2026-08-18
weight: 30
---

四维势 $A^\mu$ 有四个分量，但实光子只有两个独立偏振。
这不是在四个偏振中任意丢掉两个，而是场方程先施加一个条件，剩余规范自由度再识别一个不改变物理场强的方向。

本篇从协变平面波逐步完成这次自由度约化，并说明线偏振、圆偏振和螺旋度之间的关系。
最后推导物理偏振求和，解释它为什么不能在不引入额外参考方向的情况下写成显然洛伦兹协变的形式。


---
## 平面波怎样满足麦克斯韦方程


自由势的协变方程为：

$$
\Box A^\nu-\partial^\nu(\partial_\mu A^\mu)=0
$$

先用复指数寻找一个确定四维波矢的模：

$$
A^\mu(x)=\varepsilon^\mu(k)\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

$\varepsilon^\mu(k)$ 是偏振四维向量，它记录这个模在四维势的各分量中怎样分布。
复指数只是计算工具；经典实电磁场最后应把该模与其复共轭相加。

导数作用在平面波上给出：

$$
\partial_\mu A^\nu=-\mathrm{i}k_\mu\varepsilon^\nu\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

再作用一次得到：

$$
\Box A^\nu=-k^2\varepsilon^\nu\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

而第二项为：

$$
\partial^\nu(\partial_\mu A^\mu)=-k^\nu(k\cdot\varepsilon)\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

代回场方程并约去非零指数因子：

$$
k^2\varepsilon^\nu-k^\nu(k\cdot\varepsilon)=0
$$

这条代数方程是在未选规范时得到的。
它已经显示一个特殊方向：若 $\varepsilon^\mu$ 与 $k^\mu$ 成正比，两项恒相消，对任意 $k^2$ 都成立。
但这种解给出的场强为零，因为：

$$
F_{\mu\nu}=-\mathrm{i}(k_\mu\varepsilon_\nu-k_\nu\varepsilon_\mu)\mathrm{e}^{-\mathrm{i}k\cdot x}=0
$$

所以 $\varepsilon^\mu\propto k^\mu$ 是纯规范模，不是传播的电磁波。

现在选择洛伦茨条件：

$$
\partial_\mu A^\mu=0
$$

对平面波它化为：

$$
k_\mu\varepsilon^\mu=0
$$

于是场方程变成：

$$
k^2\varepsilon^\nu=0
$$

对非零偏振向量，必须有：

$$
k^2=0
$$

写成能量与三维动量就是：

$$
(k^0)^2-\bm{k}^2=0
$$

取正能支后：

$$
k^0=\omega_{\bm{k}}=|\bm{k}|
$$

这正是无质量粒子的色散关系。
所以自由电磁波的量子具有零静质量，而不是因为先假设“光子无质量”才得到波动方程。

还可以直接检验场的横向几何。
由 $A^\mu=(\Phi,\bm{A})$ 得到复振幅：

$$
\bm{E}=\mathrm{i}(\omega\bm{A}-\bm{k}\Phi)
$$

以及：

$$
\bm{B}=\mathrm{i}\bm{k}\times\bm{A}
$$

洛伦茨条件为：

$$
\omega\Phi-\bm{k}\cdot\bm{A}=0
$$

因此电场与波矢的内积为：

$$
\bm{k}\cdot\bm{E}=\mathrm{i}(\omega\bm{k}\cdot\bm{A}-\bm{k}^2\Phi)=0
$$

这里使用了 $\bm{k}^2=\omega^2$ 与 $\bm{k}\cdot\bm{A}=\omega\Phi$。
磁场由叉积定义，所以自动满足：

$$
\bm{k}\cdot\bm{B}=0
$$

再利用向量三重积：

$$
\bm{k}\times\bm{E}=\mathrm{i}[\omega\bm{k}\times\bm{A}-\bm{k}\times(\bm{k}\Phi)]=\omega\bm{B}
$$

所以：

$$
\bm{B}=\widehat{\bm{k}}\times\bm{E}
$$

其中 $\widehat{\bm{k}}=\bm{k}/|\bm{k}|$。
电场、磁场和传播方向两两垂直，并且在自然单位制下 $|\bm{E}|=|\bm{B}|$。


---
## 一个条件和一次规范识别留下两个偏振


选取传播方向为正 $x^3$ 轴：

$$
k^\mu=(\omega,0,0,\omega)
$$

一般偏振向量写成：

$$
\varepsilon^\mu=(\varepsilon^0,\varepsilon^1,\varepsilon^2,\varepsilon^3)
$$

洛伦茨条件给出：

$$
k\cdot\varepsilon=\omega(\varepsilon^0-\varepsilon^3)=0
$$

所以：

$$
\varepsilon^0=\varepsilon^3
$$

这只是一条线性条件，暂时把四个分量减到三个。
不能仅凭洛伦茨条件就宣布只剩两个偏振。

原因是洛伦茨条件没有完全固定规范。
取满足 $\Box\chi=0$ 的平面波规范参数：

$$
\chi(x)=\alpha\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

在 $A^\mu\mapsto A^\mu+\partial^\mu\chi$ 下，偏振向量变为：

$$
\varepsilon^\mu\mapsto\varepsilon'^\mu=\varepsilon^\mu+c k^\mu
$$

这里把常数 $-\mathrm{i}\alpha$ 重新记为 $c$。
因为 $k^2=0$：

$$
k\cdot\varepsilon'=k\cdot\varepsilon+c k^2=0
$$

所以该变换保持洛伦茨条件。
对当前沿 $x^3$ 方向传播的波，它同时改变：

$$
\varepsilon'^0=\varepsilon^0+c\omega
$$

以及：

$$
\varepsilon'^3=\varepsilon^3+c\omega
$$

因为原来 $\varepsilon^0=\varepsilon^3$，选择 $c=-\varepsilon^0/\omega$ 后可以同时令：

$$
\varepsilon'^0=\varepsilon'^3=0
$$

因此每个物理等价类都可选取纯横向代表元：

$$
\varepsilon^\mu=(0,\varepsilon^1,\varepsilon^2,0)
$$

两个方便的实基向量为：

$$
\varepsilon_1^\mu=(0,1,0,0)
$$

以及：

$$
\varepsilon_2^\mu=(0,0,1,0)
$$

它们满足：

$$
k\cdot\varepsilon_\lambda=0
$$

归一化为：

$$
\varepsilon_\lambda\cdot\varepsilon_{\lambda'}^*=-\delta_{\lambda\lambda'}
$$

负号来自横向偏振是空间型四维向量，不表示负概率或负能量。

自由度计数现在完整了。
$A^\mu$ 起初有四个实函数分量，洛伦茨条件去掉一个组合，剩余规范变换再把相差 $k^\mu$ 的偏振识别为同一物理态，所以：

$$
4-1-1=2
$$

这个减法只是在单个平面波上的直观计数。
下一篇会用哈密顿约束给出适用于整个场构型空间的严格计数。

横向基底的选择并不唯一。
任意二维正交旋转都会给出另一组线偏振基底，但它们张成同一个物理偏振平面。
例如与 $x^1$ 轴成角 $\theta$ 的线偏振可写成：

$$
\varepsilon^\mu(\theta)=\cos\theta\varepsilon_1^\mu+\sin\theta\varepsilon_2^\mu
$$

复系数则允许描述圆偏振。
定义：

$$
\varepsilon_+^\mu=\frac{1}{\sqrt{2}}(\varepsilon_1^\mu+\mathrm{i}\varepsilon_2^\mu)
$$

以及：

$$
\varepsilon_-^\mu=\frac{1}{\sqrt{2}}(\varepsilon_1^\mu-\mathrm{i}\varepsilon_2^\mu)
$$

在绕传播轴主动旋转角度 $\theta$ 后，它们分别获得相位：

$$
R_{\widehat{\bm{k}}}(\theta)\varepsilon_+^\mu=\mathrm{e}^{-\mathrm{i}\theta}\varepsilon_+^\mu
$$

以及：

$$
R_{\widehat{\bm{k}}}(\theta)\varepsilon_-^\mu=\mathrm{e}^{+\mathrm{i}\theta}\varepsilon_-^\mu
$$

按照态在轴向旋转下获得 $\mathrm{e}^{-\mathrm{i}h\theta}$ 的约定，它们的螺旋度分别为 $h=+1$ 与 $h=-1$。

有质量粒子存在静止系，可以在静止系中定义三个方向的自旋分量。
无质量粒子没有静止系；对给定动量，最自然且洛伦兹不变的标签是自旋在动量方向上的投影，也就是螺旋度。
因此“光子是自旋为 $1$ 的粒子”并不意味着它有 $-1,0,+1$ 三个物理偏振，纵向的 $h=0$ 模在无质量规范理论中不是独立物理态。

这可以与有质量自旋为 $1$ 的场作结构性比较。
质量项会破坏 $A^\mu\sim A^\mu+\partial^\mu\chi$ 的规范识别；场方程虽然仍导出一个散度条件，但不再有剩余规范自由度继续消去纵向模。
因此有质量矢量粒子有三个物理偏振，而无质量光子只有两个。
纵向偏振的消失不是“把一个方向忘掉了”，而是无质量规范理论把沿 $k^\mu$ 的势差认作同一个物理场强。


---
## 物理偏振求和为什么需要参考方向


后面的量子计算会反复遇到偏振求和：

$$
P^{\mu\nu}(k)=\sum_{\lambda=1}^2\varepsilon_\lambda^\mu(k)\varepsilon_\lambda^{\nu*}(k)
$$

在 $\bm{k}$ 沿 $x^3$ 轴的横向规范中，它就是：

$$
P^{\mu\nu}=\operatorname{diag}(0,1,1,0)
$$

这个矩阵明显依赖所选参考系和横向基底的定义。
不能简单写成 $-\eta^{\mu\nu}$，因为后者还包含时间方向和纵向方向。

为了协变地指定“横向”，除了零模波矢 $k^\mu$ 以外还需要选择一个不与它正交的参考向量 $n^\mu$，并要求物理偏振满足：

$$
k\cdot\varepsilon_\lambda=0
$$

以及：

$$
n\cdot\varepsilon_\lambda=0
$$

$n^\mu$ 可以代表观察者的时间方向，也可以代表某种规范选择。
在与 $k$ 和 $n$ 都正交的二维子空间上，偏振求和应当充当负的度规。

满足这些条件的协变表达式为：

$$
P^{\mu\nu}(k,n)=-\eta^{\mu\nu}+\frac{k^\mu n^\nu+n^\mu k^\nu}{k\cdot n}-\frac{n^2k^\mu k^\nu}{(k\cdot n)^2}
$$

先检验它与 $k_\nu$ 的收缩：

$$
P^{\mu\nu}k_\nu=-k^\mu+\frac{k^\mu(k\cdot n)+n^\mu k^2}{k\cdot n}-\frac{n^2k^\mu k^2}{(k\cdot n)^2}=0
$$

这里使用了 $k^2=0$。
再与 $n_\nu$ 收缩：

$$
P^{\mu\nu}n_\nu=-n^\mu+\frac{k^\mu n^2+n^\mu(k\cdot n)}{k\cdot n}-\frac{n^2k^\mu(k\cdot n)}{(k\cdot n)^2}=0
$$

它确实只投影到横向二维子空间。
严格说，$P^{\mu\nu}$ 带两个上指标；把一个指标降下后，$-P^\mu{}_\nu$ 才具有通常投影算符的本征值约定。

参考向量的出现反映一个真实事实：仅凭一个零向量 $k^\mu$，不能协变地从与它正交的三维子空间中再商掉与 $k^\mu$ 本身平行的零方向。
因为零向量与自身正交：

$$
k\cdot k=0
$$

所以“与 $k$ 正交”仍然包含纯规范方向 $k$ 本身。
选择 $n^\mu$ 就是在这个商空间中选择一组具体代表元。

物理散射振幅中，光子常与守恒流 $J^\mu$ 耦合，并满足：

$$
k_\mu J^\mu=0
$$

若把偏振向量改变为 $\varepsilon^\mu+c k^\mu$，振幅变化为：

$$
\delta(J\cdot\varepsilon)=cJ\cdot k=0
$$

同样，在偏振求和中所有显含 $k^\mu$ 或 $k^\nu$ 的规范依赖项与守恒流收缩后都会消失。
因此中间表达式可以依赖 $n^\mu$ 或规范选择，而最终可观测结果不能依赖它们。
这正是规范不变性在实际计算中的操作性检验。
