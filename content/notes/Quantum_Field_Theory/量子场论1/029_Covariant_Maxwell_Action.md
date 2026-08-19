---
title: "电磁场（二）：协变场强、作用量与守恒结构"
date: 2026-08-18
weight: 29
---

三维形式把标势与矢势、电场与磁场分别书写，因而洛伦兹协变性并不显然。
本篇把这些对象合并为四维势和反对称场强张量，再从作用量完整推出有源麦克斯韦方程。

在这个过程中还会看见两个重要事实：无源方程其实是 $F=\mathrm{d}A$ 的几何恒等式，而有源方程之间的依赖关系正是规范对称性的诺特第二定理。


---
## 四维势、场强张量与二形式


把标势与矢势合成反变四维势：

$$
A^\mu=(\Phi,\bm{A})
$$

在度规 $\eta_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$ 下，协变分量为：

$$
A_\mu=(\Phi,-\bm{A})
$$

定义场强张量：

$$
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu
$$

交换两个指标可得：

$$
F_{\nu\mu}=-F_{\mu\nu}
$$

所以 $F_{\mu\nu}$ 是反对称二阶张量。
四维反对称 $4\times4$ 矩阵的独立分量数不是 $16$，而是：

$$
\frac{4(4-1)}{2}=6
$$

这六个独立分量恰好容纳 $\bm{E}$ 与 $\bm{B}$ 的六个分量。

先计算时间与空间混合分量：

$$
F_{0i}=\partial_0A_i-\partial_iA_0=-\partial_tA^i-\partial_i\Phi=E^i
$$

升高两个指标后：

$$
F^{0i}=-E^i
$$

纯空间分量为：

$$
F_{ij}=\partial_iA_j-\partial_jA_i=-\partial_iA^j+\partial_jA^i
$$

由 $\bm{B}=\bm{\nabla}\times\bm{A}$ 得到：

$$
F_{ij}=-\epsilon_{ijk}B^k
$$

由于升高两个空间指标产生两个负号：

$$
F^{ij}=F_{ij}=-\epsilon^{ijk}B^k
$$

因此 $F^{\mu\nu}$ 的矩阵形式为：

$$
F^{\mu\nu}=\begin{pmatrix}0&-E^1&-E^2&-E^3\\E^1&0&-B^3&B^2\\E^2&B^3&0&-B^1\\E^3&-B^2&B^1&0\end{pmatrix}
$$

这个矩阵不是为了背诵，而是用来固定号差约定。
不同教材若交换 $F_{\mu\nu}$ 定义中两项的次序，所有含 $F$ 的若干符号会一起改变；只要内部一致，物理结论不变。

把四维电流定义为：

$$
j^\mu=(\rho,\bm{J})
$$

前两条麦克斯韦方程可以合成：

$$
\partial_\mu F^{\mu\nu}=j^\nu
$$

当 $\nu=0$ 时：

$$
\partial_\mu F^{\mu0}=\partial_iF^{i0}=\partial_iE^i=\rho
$$

这就是高斯定律。
当 $\nu=i$ 时：

$$
\partial_\mu F^{\mu i}=\partial_tF^{0i}+\partial_jF^{ji}=J^i
$$

代入场强分量后恢复：

$$
\bm{\nabla}\times\bm{B}-\partial_t\bm{E}=\bm{J}
$$

另外两条无源方程可以合成比安基恒等式：

$$
\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0
$$

证明只需代入 $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$：

$$
\partial_\lambda F_{\mu\nu}=\partial_\lambda\partial_\mu A_\nu-\partial_\lambda\partial_\nu A_\mu
$$

循环相加后，每个二阶导数项都与另一个次序相反的项配对。
偏导数交换便给出零，所以该恒等式不需要使用运动方程。

用反对称化记号可以更紧凑地写为：

$$
\partial_{[\lambda}F_{\mu\nu]}=0
$$

方括号表示对其中指标作完全反对称化。
这里省略的归一化系数不影响等式为零。

再定义对偶场强：

$$
\widetilde F^{\mu\nu}=\frac{1}{2}\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}
$$

比安基恒等式等价于：

$$
\partial_\mu\widetilde F^{\mu\nu}=0
$$

在微分形式语言中，四维势是一个一形式：

$$
A=A_\mu\mathrm{d}x^\mu
$$

场强是一个二形式：

$$
F=\mathrm{d}A=\frac{1}{2}F_{\mu\nu}\mathrm{d}x^\mu\wedge\mathrm{d}x^\nu
$$

楔积满足 $\mathrm{d}x^\mu\wedge\mathrm{d}x^\nu=-\mathrm{d}x^\nu\wedge\mathrm{d}x^\mu$，所以它自然只保留反对称部分。
外微分满足 $\mathrm{d}^2=0$，于是：

$$
\mathrm{d}F=\mathrm{d}^2A=0
$$

这就是比安基恒等式的几何版本。
它说明无源麦克斯韦方程不是作用量额外施加的运动方程，而是场强由势产生后自动满足的可积条件。

若把 $A$ 视为 $U(1)$ 主丛联络的局部表示，那么 $F$ 正是联络的曲率二形式。
局部相位标架改变时，$A$ 增加由规范参数产生的恰当一形式 $\mathrm{d}\chi$，但曲率 $F$ 不变；这就是“联络依赖规范、曲率具有规范不变物理意义”的几何版本。
在非阿贝尔理论中曲率还会出现联络自乘项，而电磁 $U(1)$ 群交换，所以这里简化为 $F=\mathrm{d}A$。


---
## 从规范不变作用量推导麦克斯韦方程


电磁场最简单的洛伦兹标量是：

$$
F_{\mu\nu}F^{\mu\nu}
$$

利用前面的分量关系逐项收缩：

$$
F_{\mu\nu}F^{\mu\nu}=2(\bm{B}^2-\bm{E}^2)
$$

系数 $2$ 来自每个反对称指标对在双重求和中出现两次。
因此自由电磁场拉格朗日密度取为：

$$
\mathcal{L}_{\mathrm{EM}}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}
$$

换成三维场就是：

$$
\mathcal{L}_{\mathrm{EM}}=\frac{1}{2}(\bm{E}^2-\bm{B}^2)
$$

微分形式写法还揭示度规在哪里进入理论。
外微分 $F=\mathrm{d}A$ 不需要度规，但要把两个二形式收缩成可积分的四形式，必须使用由闵可夫斯基度规定义的霍奇星算符。
因此自由作用量可以理解为积分 $F\wedge *F$ 的适当倍数：联络给出曲率，度规通过霍奇星给出曲率的动力学二次型。

与外加守恒电流的最小耦合为：

$$
\mathcal{L}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}-j_\mu A^\mu
$$

三维展开给出：

$$
-j_\mu A^\mu=-\rho\Phi+\bm{J}\cdot\bm{A}
$$

现在对 $A_\nu$ 作任意变分。
场强的变分为：

$$
\delta F_{\mu\nu}=\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu
$$

作用量变分为：

$$
\delta S=\int\mathrm{d}^4x\left[-\frac{1}{4}\delta(F_{\mu\nu}F^{\mu\nu})-j^\nu\delta A_\nu\right]
$$

度规不参与变分，所以乘积法则给出：

$$
\delta(F_{\mu\nu}F^{\mu\nu})=2F^{\mu\nu}\delta F_{\mu\nu}
$$

因此电磁动能项的变分为：

$$
-\frac{1}{2}F^{\mu\nu}(\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu)
$$

第二项交换哑指标 $\mu\leftrightarrow\nu$：

$$
\frac{1}{2}F^{\nu\mu}\partial_\mu\delta A_\nu
$$

利用 $F^{\nu\mu}=-F^{\mu\nu}$，两项相同，所以：

$$
\delta S=\int\mathrm{d}^4x\left[-F^{\mu\nu}\partial_\mu\delta A_\nu-j^\nu\delta A_\nu\right]
$$

对第一项使用乘积法则：

$$
-F^{\mu\nu}\partial_\mu\delta A_\nu=\partial_\mu F^{\mu\nu}\delta A_\nu-\partial_\mu(F^{\mu\nu}\delta A_\nu)
$$

于是：

$$
\delta S=\int\mathrm{d}^4x(\partial_\mu F^{\mu\nu}-j^\nu)\delta A_\nu-\int\mathrm{d}^4x\partial_\mu(F^{\mu\nu}\delta A_\nu)
$$

若变分在边界消失，最后一项由散度定理化为零。
体内的 $\delta A_\nu$ 任意，所以欧拉–拉格朗日方程为：

$$
\partial_\mu F^{\mu\nu}=j^\nu
$$

这正是两条有源麦克斯韦方程的协变形式。
另外两条无源方程已经由 $F=\mathrm{d}A$ 自动保证，因此四条方程在作用量语言中本来就不处于完全对称的地位。

把场强写回势，可以得到：

$$
\partial_\mu(\partial^\mu A^\nu-\partial^\nu A^\mu)=j^\nu
$$

即：

$$
\Box A^\nu-\partial^\nu(\partial_\mu A^\mu)=j^\nu
$$

其中：

$$
\Box=\partial_\mu\partial^\mu=\partial_t^2-\nabla^2
$$

若选择洛伦茨规范条件：

$$
\partial_\mu A^\mu=0
$$

势方程简化为：

$$
\Box A^\nu=j^\nu
$$

这个条件以丹麦物理学家路德维格·洛伦茨命名，不是洛伦兹变换中的亨德里克·洛伦兹。
它的价值在于保持四维协变性，并把势的各分量方程化成波动方程；它本身仍是对描述的选择，不是新的可观测规律。


---
## 规范不变性、诺特恒等式与能量动量


采用与上一篇相同的号差约定，四维规范变换为：

$$
A_\mu'=A_\mu+\partial_\mu\chi
$$

其时间与空间分量正好对应：

$$
\Phi'=\Phi+\partial_t\chi
$$

以及：

$$
\bm{A}'=\bm{A}-\bm{\nabla}\chi
$$

场强的变化为：

$$
F_{\mu\nu}'-F_{\mu\nu}=\partial_\mu\partial_\nu\chi-\partial_\nu\partial_\mu\chi=0
$$

所以自由电磁作用量严格规范不变。
含外源时，耦合项的变化为：

$$
\delta_\chi S_{\mathrm{int}}=-\int\mathrm{d}^4xj^\mu\partial_\mu\chi
$$

分部积分得到：

$$
\delta_\chi S_{\mathrm{int}}=\int\mathrm{d}^4x(\partial_\mu j^\mu)\chi-\int\mathrm{d}^4x\partial_\mu(j^\mu\chi)
$$

若边界项消失，要使作用量对任意 $\chi(x)$ 不变，必须有：

$$
\partial_\mu j^\mu=0
$$

这就是电荷连续性方程。
因此源守恒不是与规范理论无关的附加假设，而是外源能够与规范势相容耦合的必要条件。

同一个结论也可直接从运动方程得到。
对 $\partial_\mu F^{\mu\nu}=j^\nu$ 再取 $\partial_\nu$：

$$
\partial_\nu j^\nu=\partial_\nu\partial_\mu F^{\mu\nu}
$$

$\partial_\nu\partial_\mu$ 对指标对称，而 $F^{\mu\nu}$ 反对称，所以：

$$
\partial_\nu\partial_\mu F^{\mu\nu}=0
$$

这不是使用某个特殊解以后才成立的关系，而是对任意 $A_\mu$ 都成立的非在壳恒等式。

可以把它精确地放回 005 的诺特第二定理框架。
自由作用量的欧拉–拉格朗日表达式为：

$$
\mathcal{E}^\nu=\partial_\mu F^{\mu\nu}
$$

局域规范变换为 $\delta A_\nu=\partial_\nu\chi$。
作用量变分的体内部分是：

$$
\delta S=\int\mathrm{d}^4x\mathcal{E}^\nu\partial_\nu\chi
$$

对它分部积分：

$$
\delta S=-\int\mathrm{d}^4x(\partial_\nu\mathcal{E}^\nu)\chi
$$

因为 $\chi(x)$ 任意且作用量规范不变，所以：

$$
\partial_\nu\mathcal{E}^\nu=0
$$

这就是麦克斯韦理论的诺特第二恒等式。
它说明四个势方程之间只有三个微分独立组合，因而不能把 $A^0,A^1,A^2,A^3$ 当成四个互不相关的标量场。

洛伦茨条件在规范变换下变为：

$$
\partial_\mu A'^\mu=\partial_\mu A^\mu+\Box\chi
$$

所以从任意势出发，要达到洛伦茨条件，需要求解：

$$
\Box\chi=-\partial_\mu A^\mu
$$

达到该条件后仍不唯一。
任何满足下式的函数都保持洛伦茨条件：

$$
\Box\chi=0
$$

这叫剩余规范自由度。
下一篇会看到，正是它进一步去掉平面波中时间偏振与纵向偏振的一个组合。

最后讨论电磁场携带的能量和动量。
由平移对称性得到并经过对称化、规范不变化改进后，能量动量张量可以写成：

$$
T^{\mu\nu}=-F^{\mu\rho}F^\nu{}_\rho+\frac{1}{4}\eta^{\mu\nu}F^{\rho\sigma}F_{\rho\sigma}
$$

它只依赖场强，所以显式规范不变。
能量密度为：

$$
T^{00}=\frac{1}{2}(\bm{E}^2+\bm{B}^2)
$$

能流与动量密度为坡印廷向量：

$$
T^{0i}=(\bm{E}\times\bm{B})^i
$$

空间应力分量为：

$$
T^{ij}=-E^iE^j-B^iB^j+\frac{1}{2}\delta^{ij}(\bm{E}^2+\bm{B}^2)
$$

它描述电磁场跨过空间曲面传递第 $i$ 个动量分量的通量。

在四维时空中，这个能量动量张量还是无迹的。
直接收缩两个指标：

$$
T^\mu{}_\mu=-F^{\mu\rho}F_{\mu\rho}+\frac{1}{4}\delta^\mu_\mu F^{\rho\sigma}F_{\rho\sigma}
$$

因为 $\delta^\mu_\mu=4$，所以：

$$
T^\mu{}_\mu=-F^{\mu\rho}F_{\mu\rho}+F^{\rho\sigma}F_{\rho\sigma}=0
$$

这反映自由经典电磁理论没有内禀质量尺度，并与四维中的经典尺度不变性相联系。
这里必须强调“四维”和“经典”：换到其他时空维数时，两个系数不再恰好抵消；加入带质量物质或考虑量子修正后，无迹关系也可能改变。

在无源区域，利用麦克斯韦方程可得：

$$
\partial_\mu T^{\mu\nu}=0
$$

存在外源时则有：

$$
\partial_\mu T^{\mu\nu}=-F^{\nu\lambda}j_\lambda
$$

右边是物质受到的洛伦兹力密度的负值。
这表示电磁场损失的四维动量恰好转移给带电物质；把场与物质的能量动量张量相加后，总能量动量仍然守恒。
