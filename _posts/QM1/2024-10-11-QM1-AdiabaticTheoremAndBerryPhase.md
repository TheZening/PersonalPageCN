---
title: "QM1 绝热定理与Berry相位"
date: 2024-10-11T08:06:00-05:00
categories:
  - QM1
---
在1984年, Michael Berry介绍了一个关于波函数的一个新现象, 即除了常见的dynamical phase外, 根据Hamiltonian对于参数的依赖, 波函数会获得一个几何相位, 即Berry相位.
Berry相位因子与系统的动力学演化无关, 仅取决于参数空间中的路径, 提现的是参数空间的特性.
这一发现在凝聚态物理, 光学和量子计算等领域产生了深远影响.

---

## 绝热定理

首先要对于绝热这个词做出说明, 我们这里考虑的绝热过程不是热力学中系统与外界没有热量交换的意思.
虽然都是Adiabatic这个词, 但是我们这里强调的是:

> **(经典力学说法)**  
> 当外界参数变化非常缓慢时, 系统慢到来不及激发出额外效应", 存在绝热不变量保持不变.


> **(量子力学说法, 非简并)**  
> 当系统的 Hamiltonian 缓慢变化时, 若某个本征值 $$E_n(t)$$ 与其他本征值 $$E_m(t)$$ 之间有能隙, 且系统初始时刻处于本征态$$\ket{n(0)}$$, 那么在任意时刻$$t$$系统仍然会在瞬时本征态$$\ket{n(t)}$$上, 只是会获得相位因子: 动力学相位 + Berry 相位.


> **(量子力学说法, 简并版本)**  
> 当系统的 Hamiltonian 缓慢变化时, 若某个简并子空间$$D_n(t)$$与其他简并子空间$$D_m(t)$$之间有能隙, 且系统初始时刻在$$D_n(0)$$, 那么在任意时刻$$t$$系统仍然会在瞬时简并子空间$$D_n(t)$$中, 只是会获得一个Unitary矩阵的变换, 而不能保证保持在某个固定的本征态上.
这对应于非阿贝尔Berry相位(Wilczek–Zee phase).


举一个生活中的例子, 你坐在汽车上, 汽车缓慢加速, 你会感觉不到任何变化, 你仍然感觉自己静止在汽车上.
但是如果汽车突然加速, 你会有推背感.

再举一个例子, 你测量单摆的周期, 如果你考虑的是一个麻绳, 那么麻绳可能一年才会自动拉伸一点点, 你间隔1min测单摆周期是不会变化的.
但是如果你的摆巨长无比, 一次振动就需要两年, 那么你每次测量的周期都会变化.


换句话说, 但对于系统内部时间(你关心的时间尺度)$$\tau$$, 如果一个参数$$\lambda$$的变化速率满足:
$$
\begin{equation}
\tau \dv{\lambda}{t} \ll \lambda
\end{equation}
$$
那就是这个参数变化非常缓慢, 系统可以被认为是绝热的.
我们现在看看怎么在量子力学里说明白这个事情.

---

## 量子绝热定理的直观感受

我们先看看如果一个势能$$V(x)$$是快速变化的, 我们的波函数会怎么反应.
![Quick Change](https://raw.githubusercontent.com/TheZening/PersonalPageCN/main/assets/quickchange.gif)
可以说是乱七八糟, 毫无规律.
不过这也正常, 就想你突然被人推了一把, 你会乱跑.

但是如果势能$$V(x)$$是缓慢变化的, 我们的波函数会怎么反应.
![Slow Change](https://raw.githubusercontent.com/TheZening/PersonalPageCN/main/assets/slowchange.gif)
可以看到波函数始终保持在它的瞬时本征态中, 只是随着势能的变化, 波函数也缓慢变化.
这就像你坐在一辆缓慢加速的汽车上, 你感觉不到任何变化.

---

## 量子绝热定理的数学证明

我们先考虑一个非简并的Hamiltonian$$H(\lambda)$$, 其中$$\lambda$$是一个外界参数, 例如磁场强度, 势阱深度等, 而且$$\lambda$$是时间的函数$$\lambda(t)$$.
假设在任意时刻$$t$$, $$H(\lambda(t))$$的本征值和本征态分别为$$E_n(t)$$和$$\ket{n(t)}$$, 满足:

$$
\begin{equation}
H(\lambda(t))\ket{n(t)} = E_n(t)\ket{n(t)}
\end{equation}
$$

注意, 这只是在$$t$$时刻的瞬时本征值和本征态, 它们都是时间的函数.
$$\ket{n(t)}$$并不是系统的真实态, 也不是Schrödinger方程的解, 他就是照相机在$$t$$时刻拍下的系统的本征态.
而且不同时刻的$$\ket{n(t)}$$之间没有任何关系, 你只能在一张照片内谈论正交:

$$
\begin{equation}
  \braket{n(t)}{m(t)} = \delta_{nm}, \quad \braket{n(t)}{n(t')} \neq 1, \quad t \neq t'
\end{equation}
$$

并且假设$$E_n(t)$$与其他本征值$$E_m(t)$$之间有能隙, 即$$E_n(t) \neq E_m(t)$$, $$\forall m \neq n$$, $$\forall t$$.
系统的状态$$\ket{\psi(t)}$$满足薛定谔方程:

$$
\begin{equation}
\mathrm{i}\,\hbar \pdv{}{t}\ket{\psi(t)} = H(\lambda(t))\ket{\psi(t)}
\end{equation}
$$ 

推导上的一个技巧来了, 我们对于满足Schrödinger方程的$$\ket{\psi(t)}$$, 在任意时刻$$t$$都可以将其展开在瞬时本征态$$\ket{n(t)}$$上:

$$
\begin{equation}
\ket{\psi(t)} = \sum_n c_n(t) \mathrm{e}^{-\frac{\mathrm{i}}{\hbar}\int_0^t E_n(t')\,\dd{t'}} \ket{n(t)}
\end{equation}
$$

这里额外加了一个相位:

$$
\begin{equation}
\theta_n(t) = -\frac{1}{\hbar}\int_0^t E_n(t')\,\dd{t'} \Rightarrow \mathrm{i}\,\dot{\theta_m}(t) = -\frac{\mathrm{i}}{\hbar}E_m(t)
\end{equation}
$$

我们当然可以把那个相位因子并到$$c_n(t)$$里, 但是这样会出现一个非常简单的化简, 等下就能看到.
将上式代入Schrödinger方程, 左边:

$$
\begin{align}
\sum_n \quad & \mathrm{i}\,\hbar \dot{c}_n(t) \mathrm{e}^{\mathrm{i}\,\theta_n(t)} \ket{n(t)} + c_n(t) E_n(t) \mathrm{e}^{\mathrm{i}\,\theta_n(t)} \ket{n(t)} + \\
& \mathrm{i}\,\hbar c_n(t) \mathrm{e}^{\mathrm{i}\,\theta_n(t)} \pdv{}{t}\ket{n(t)} 
\end{align}
$$


右边:
$$
\begin{equation}
\sum_n c_n(t) E_n(t) \mathrm{e}^{\mathrm{i}\,\theta_n(t)} \ket{n(t)}
\end{equation}
$$

左右能消掉(因为我们之前定义的$$\theta_n(t)$$就是为了消掉这个项), 得到:

$$
\begin{equation}
\sum_n \left( \mathrm{i}\,\hbar \dot{c}_n(t) \ket{n(t)} + \mathrm{i}\,\hbar c_n(t) \pdv{}{t}\ket{n(t)} \right) \mathrm{e}^{\mathrm{i}\,\theta_n(t)} = 0
\end{equation}
$$

我们左乘$$\bra{m(t)}$$, 得到:

$$
\begin{equation}
\sum_n \dot{c}_n(t) \braket{m(t)}{n(t)} \mathrm{e}^{\mathrm{i}\,\theta_n(t)} + c_n(t) \bra{m(t)}\pdv{}{t}\ket{n(t)} \mathrm{e}^{\mathrm{i}\,\theta_n(t)} = 0
\end{equation}
$$

瞬时本征态确实是正交的, 所以我们左边有$$\braket{m(t)}{n(t)} = \delta_{mn}$$, 得到:

$$
\begin{equation}
\dot{c}_m(t) \mathrm{e}^{\mathrm{i}\,\theta_m(t)} + \sum_n c_n(t) \bra{m(t)}\pdv{}{t}\ket{n(t)} \mathrm{e}^{\mathrm{i}\,\theta_n(t)} = 0
\end{equation}
$$

获得了一个关于$$c_n(t)$$的耦合微分方程组.

$$
\begin{equation}
\dot{c}_m(t) = -\sum_n c_n(t) \bra{m(t)}\pdv{}{t}\ket{n(t)} \mathrm{e}^{\mathrm{i}(\theta_n(t)-\theta_m(t))}
\end{equation}
$$

关于时间求导的那个部分要展开一下, 从瞬时本征态方程出发: $$ H(t)\ket{n(t)} = E_n(t)\ket{n(t)} $$, 对时间求导:

$$
\begin{equation}
\dot{H}(t)\ket{n(t)} + H(t)\pdv{}{t}\ket{n(t)} = \dot{E}_n(t)\ket{n(t)} + E_n(t)\pdv{}{t}\ket{n(t)}
\end{equation}
$$

左乘$$\bra{m(t)}$$, 得到:

$$
\begin{equation}
\bra{m(t)}\dot{H}(t)\ket{n(t)} + E_m(t)\bra{m(t)}\pdv{}{t}\ket{n(t)} = \dot{E}_n(t)\braket{m(t)}{n(t)} + E_n(t)\bra{m(t)}\pdv{}{t}\ket{n(t)}
\end{equation}
$$

注意$$\braket{m(t)}{n(t)} = \delta_{mn}$$, 所以当$$m \neq n$$时, 上式化简为:

$$
\begin{equation}
\bra{m(t)}\pdv{}{t}\ket{n(t)} = \frac{\bra{m(t)}\dot{H}(t)\ket{n(t)}}{E_n(t) - E_m(t)}, \quad m \neq n
\end{equation}
$$

带回原来的式子:

$$
\begin{equation}
\dot{c}_m(t) = - c_m(t) \bra{m(t)}\pdv{}{t}\ket{m(t)} - \sum_{n \neq m} c_n(t) \frac{\bra{m(t)}\dot{H}(t)\ket{n(t)}}{E_n(t) - E_m(t)} \mathrm{e}^{\mathrm{i}(\theta_n(t)-\theta_m(t))}
\end{equation}
$$

这时候一个重要的物理意义就来了:

$$
\begin{equation}
\pdv{H}{t} = \pdv{H}{\lambda} \dv{\lambda}{t}
\end{equation}
$$

如果是绝热, 那么参数不怎么变化, 从而我们可以直接忽略掉$$\pdv{H}{t}$$, 也就是忽略掉上式的第二项!

$$
\begin{equation}
\dot{c}_m(t) = - c_m(t) \bra{m(t)}\pdv{}{t}\ket{m(t)}
\end{equation}
$$

现在我们可以很好的求解这个微分方程:

$$
\begin{equation}
c_m(t) = c_m(0) \exp\left(-\int_0^t \bra{m(t')}\pdv{}{t'}\ket{m(t')}\,\dd{t'}\right)
\end{equation}
$$

也就是说哈, 如果我们一开始就在$$\ket{n(0)}$$上, 那么$$c_n(0) = 1$$, $$c_{m \neq n}(0) = 0$$, 那么在任意时刻$$t$$, 我们都有:

$$
\begin{equation}
\ket{\psi(t)} = \exp\left(-\frac{\mathrm{i}}{\hbar}\int_0^t E_n(t')\,\dd{t'}\right) \exp\left(-\int_0^t \bra{n(t')}\pdv{}{t'}\ket{n(t')}\,\dd{t'}\right) \ket{n(t)}
\end{equation}
$$

就是说, 系统始终保持在瞬时本征态$$\ket{n(t)}$$上, 只是获得了两个相位因子: 动力学相位 + Berry 相位

$$
\begin{equation}
\gamma_n(t) = \mathrm{i}\,\int_0^t \bra{n(t')}\pdv{}{t'}\ket{n(t')}\,\dd{t'} \quad \theta_n(t) = -\frac{1}{\hbar}\int_0^t E_n(t')\,\dd{t'}
\end{equation}
$$

现在我们来看看这个几何相位, 如果是相位, 要确保$$\gamma_n(t)$$是实数:

$$
\begin{equation}
\dv{}{t} \braket{n(t)}{n(t)} = 0 \Rightarrow \braket{n(t)}{\pdv{}{t}}{n(t)} + \bra{\pdv{}{t}n(t)}{n(t)} = 0
\end{equation}
$$

自己加自己的共轭是0, 说明$$\bra{n(t)}\pdv{}{t}\ket{n(t)}$$是纯虚数, 然后整体前面有个$$i$$, 所以$$\gamma_n(t)$$是实数.
没问题, 接下来我们稍微变个形式, 把参数空间的特性体现出来.

$$
\begin{equation}
\mel{n(t)}{\pdv{}{t}}{n(t)} = \mel{n(t)}{\pdv{}{\lambda}}{n(t)} \dv{\lambda}{t}
\end{equation}
$$

所以原来的式子可以写成:

$$
\begin{align}
\gamma_n(t) &= \mathrm{i}\,\int_0^t \bra{n(t')}\pdv{}{\lambda}\ket{n(t')} \dv{\lambda}{t'}\,\dd{t'} \\
&= \mathrm{i}\,\int_{\lambda(0)}^{\lambda(t)} \mel{n(\lambda)}{\pdv{}{\lambda}}{n(\lambda)}\,\dd{\lambda}
\end{align}
$$

开放路径一般很难做比较, 而且在参数空间走一圈才是回到了原点, 这时候我们就有闭合路径了, 这时候Berry相位就变成了:

$$
\begin{equation}
\gamma_n = \mathrm{i}\,\oint \mel{n(\lambda)}{\pdv{}{\lambda}}{n(\lambda)}\,\dd{\lambda}
\end{equation}
$$

实际上, 我们可以定义如下的Berry connection:

$$
\begin{equation}
\mathcal{A}_n(\lambda) = \mathrm{i}\,\mel{n(\lambda)}{\pdv{}{\lambda}}{n(\lambda)}
\end{equation}
$$

从而把我们的积分写为:

$$
\begin{equation}
\gamma_n = \oint \mathcal{A}_n(\lambda)\,\dd{\lambda}
\end{equation}
$$

如果推广到多维参数空间 (我们参数使用了$$R$$, 因为加粗字体的$$\lambda$$基本看不出来)那么我们有:

$$
\begin{equation}
\gamma_n = \oint \mathcal{A}_n(\boldsymbol{R}) \cdot \dd{\boldsymbol{R}}, \quad \mathcal{A}_n(\boldsymbol{R}) = \mathrm{i}\,\mel{n(\boldsymbol{R})}{\nabla_{\boldsymbol{R}}}{n(\boldsymbol{R})}
\end{equation}
$$

同时, 我们可以定义Berry curvature:

$$
\begin{equation}
\Omega_{n,\mu\nu} = \pdv{}{R^\mu} \mathcal{A}_{n}^\nu - \pdv{}{R^\nu} \mathcal{A}_{n}^\mu
\end{equation}
$$

如果恰好是三维的, 我们还有:

$$
\begin{equation}
\boldsymbol{\Omega}_n = \nabla_{\boldsymbol{R}} \times \mathcal{\boldsymbol{A}}_n
\end{equation}
$$

---

## 多慢算绝热?

我们之前扔掉的那个项是:

$$
\begin{equation}
\sum_{n \neq m} c_n(t) \frac{\bra{m(t)}\dot{H}(t)\ket{n(t)}}{E_n(t) - E_m(t)} \mathrm{e}^{\mathrm{i}(\theta_n(t)-\theta_m(t))}
\end{equation}
$$

我们能注意到如下的量含有时间的单位, 若$$n$$不等于$$m$$, 那这个量告诉了我们有多少的部分变化到了除了$$m$$以外的其他态上:

$$
\begin{equation}
\frac{\bra{m(t)}\dot{H}(t)\ket{n(t)}}{E_n(t) - E_m(t)}
\end{equation}
$$

他应该小于系统内部时间, 由能级差给出:

$$
\begin{equation}
\tau_{mn} = \frac{\hbar}{|E_n(t) - E_m(t)|}
\end{equation}
$$

从而我们得到:

$$
\begin{equation}
\left| \frac{\bra{m(t)}\dot{H}(t)\ket{n(t)}}{(E_n(t) - E_m(t))^2} \right| \ll 1, \quad \forall m \neq n, \quad \forall t
\end{equation}
$$

---

## 规范不变性问题

我们注意到, 我们的瞬时本征态$$\ket{n(t)}$$可以做如下的规范变换:

$$
\begin{equation}
\ket{n(t)} \to \mathrm{e}^{\mathrm{i}\,\chi(\boldsymbol{R})} \ket{n(t)}
\end{equation}
$$

我们先来检查Berry phase如何变化的:

$$
\begin{align}
\gamma_n &= \mathrm{i}\,\oint \mel{n(\boldsymbol{R})}{\nabla_{\boldsymbol{R}}}{n(\boldsymbol{R})} \cdot \dd{\boldsymbol{R}} \\
&\to \mathrm{i}\,\oint \mel{n(\boldsymbol{R})}{\nabla_{\boldsymbol{R}}}{n(\boldsymbol{R})} \cdot \dd{\boldsymbol{R}} + \oint \nabla_{\boldsymbol{R}} \chi(\boldsymbol{R}) \cdot \dd{\boldsymbol{R}} \\
&= \gamma_n + 2\pi m, \quad m \in \mathbb{Z}
\end{align}
$$

也就是说, Berry phase会变化一个$$2\pi$$的整数倍, 这并不影响物理, 因为相位本来就是模$$2\pi$$的!
但是Berry connection会变化:

$$
\begin{align}
\mathcal{A}_n(\boldsymbol{R}) &\to \mathrm{i}\,\mel{n(\boldsymbol{R})}{\nabla_{\boldsymbol{R}}}{n(\boldsymbol{R})} + \nabla_{\boldsymbol{R}} \chi(\boldsymbol{R}) \\
&= \mathcal{A}_n(\boldsymbol{R}) + \nabla_{\boldsymbol{R}} \chi(\boldsymbol{R})
\end{align}
$$

所以他也不能是一个物理量, 就是说你实验上想测是不太行的.
最后我们来看看Berry curvature:


$$
\begin{align}
\Omega_{n,\mu\nu} &\to \pdv{}{R^\mu} \left( \mathcal{A}_{n}^\nu + \pdv{}{R^\nu} \chi(\boldsymbol{R}) \right) - \pdv{}{R^\nu} \left( \mathcal{A}_{n}^\mu + \pdv{}{R^\mu} \chi(\boldsymbol{R}) \right) \\
&= \pdv{}{R^\mu} \mathcal{A}_{n}^\nu - \pdv{}{R^\nu} \mathcal{A}_{n}^\mu \\
&= \Omega_{n,\mu\nu}
\end{align}
$$

嗯, 虽然他是不变的, 可是曲率曲率, 他到底是描述什么几何的弯曲的呢?

---

## 例子: 自旋在磁场中

我们考虑一个最经典的例子, 一个自旋$$1/2$$的粒子在一个磁场$$\boldsymbol{B}$$中, 一个平面磁场绕着z轴旋转:

$$
\begin{equation}
\boldsymbol{B}(t) = B(\cos\omega t, \sin\omega t, 0)
\end{equation}
$$

此时我们的Hamiltonian是:

$$
\begin{equation}
H(t) = g \mu_{B} \boldsymbol{B}(t) \cdot \boldsymbol{\sigma} = \mqty[0 & g \mu_{B} B \mathrm{e}^{-\mathrm{i}\,\omega t} \\ g \mu_{B} B \mathrm{e}^{\mathrm{i}\,\omega t} & 0]
\end{equation}
$$

我们不负责任的要求这个磁场旋转的非常非常慢, 也就是$$\omega$$非常非常小, 从而我们可以使用绝热定理.
这个Hamiltonian的本征值和本征态分别为:

$$
\begin{align}
E_+ =& g \mu_{B} B, \quad &\ket{+} = \frac{1}{\sqrt{2}} [\mathrm{e}^{-\mathrm{i}\,\omega t}, 1]^\mathrm{T} \\
E_- =& -g \mu_{B} B, \quad &\ket{-} = \frac{1}{\sqrt{2}} [-\mathrm{e}^{-\mathrm{i}\,\omega t}, 1]^\mathrm{T}
\end{align}
$$

用关于时间的积分来算:

$$
\begin{equation}
\gamma_+ = \mathrm{i}\,\int_0^T \mel{+}{\pdv{}{t}}{+}\,\dd{t} = \mathrm{i}\,\int_0^T \frac{1}{2}(-\mathrm{i}\,\omega)\,\dd{t} = \frac{\omega T}{2} = \pi
\end{equation}
$$

看起来好像是和几何有点关系?

---

## Aharonov-Bohm效应

![AB 效应示意图](https://raw.githubusercontent.com/TheZening/PersonalPageCN/main/assets/ABeffect.png "Aharonov-Bohm 效应图示")


如上图所示, 我们有一个无限长的细线圈, 线圈内有一个均匀的磁场$$B$$, 线圈外部磁场为零.
外面没有磁场, 但是可能有向量势能$$\boldsymbol{A}$$. 
对于一个电子来说, 走上面和下面的路径, 经历的磁场是一样的, 但是由于有向量势能$$\boldsymbol{A}$$, 电子会获得一个额外的相位差.

我们之前那说过, 如果有一个向量势能$$\boldsymbol{A}$$, 那么动量算符要替换为$$\boldsymbol{p} - q \boldsymbol{A}$$, 从而波函数会获得一个额外的相位因子:

$$
\begin{equation}
\psi(\boldsymbol{x}) = \psi_0(\boldsymbol{x}) \exp\left(\frac{\mathrm{i}\,q}{\hbar} \chi(\boldsymbol{x}) \right)
\end{equation}
$$

其中$$\psi_0(\boldsymbol{x})$$是没有向量势能时的波函数, $$\chi(\boldsymbol{x})$$满足:

$$
\begin{equation}
\nabla \chi(\boldsymbol{x}) = \boldsymbol{A}(\boldsymbol{x}) \Rightarrow \chi(\boldsymbol{x}) = \int_{\boldsymbol{x}_0}^{\boldsymbol{x}} \boldsymbol{A}(\boldsymbol{x}') \cdot \dd[3]{x'}
\end{equation}
$$

此时, 我们的平移算符(把粒子挪动一点点)变成了:

$$
\begin{equation}
T(\dd{\boldsymbol{x}}) = \exp\left(-\frac{\mathrm{i}}{\hbar} \dd{\boldsymbol{x}} \cdot (\boldsymbol{p} - q \boldsymbol{A}) \right)
\end{equation}
$$

我们沿着某个路径, 每次挪一点点, 挪着挪着就到中点了, 求和变积分, 所以会累计出来一个几何相位:

$$
\begin{equation}
\psi(\boldsymbol{x}) = \exp\left(\frac{\mathrm{i}q}{\hbar} \int_{\boldsymbol{x}_0}^{\boldsymbol{x}} \boldsymbol{A}(\boldsymbol{x}') \cdot \dd[3]{x'} \right) \psi_0(\boldsymbol{x})
\end{equation}
$$

上面走一条, 下面走一条, 这样就出现相位差了:

$$
\begin{equation}
\Delta \phi = \frac{q}{\hbar} \oint \boldsymbol{A}(\boldsymbol{x}') \cdot \dd[3]{x'} = \frac{q}{\hbar} \int \boldsymbol{B} \cdot \dd{\boldsymbol{S}} = \frac{q}{\hbar} \Phi_B
\end{equation}
$$