---
title: "Dirac 方程（三）：平面波旋量、归一化与完备关系"
date: 2026-08-18
weight: 19
---

Dirac 方程是一阶偏微分方程，但自由场的平面波解可以化成有限维线性代数问题。
这一节将分别求出正频率与负频率两族旋量解，并固定一套以后量子化时可以直接使用的相对论性归一化约定。

我们采用度规 $\eta^{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$，并记 $p^\mu=(E_{\bm{p}},\bm{p})$ 与 $E_{\bm{p}}=\sqrt{\bm{p}^2+m^2}$。

只要不引起混淆，下面把 $E_{\bm{p}}$ 简写为 $E$。


---
## 从 Dirac 方程到两个旋量代数方程


自由 Dirac 方程为：

$$
(\mathrm{i}\slashed\partial-m)\psi(x)=0
$$

先考虑正频率平面波：

$$
\psi(x)=u(p)\mathrm{e}^{-\mathrm{i}p\cdot x}
$$

由于 $\partial_\mu\mathrm{e}^{-\mathrm{i}p\cdot x}=-\mathrm{i}p_\mu\mathrm{e}^{-\mathrm{i}p\cdot x}$，代入方程后得到：

$$
(\slashed p-m)u(p)=0
$$

再考虑负频率平面波：

$$
\psi(x)=v(p)\mathrm{e}^{+\mathrm{i}p\cdot x}
$$

这时 $\partial_\mu\mathrm{e}^{+\mathrm{i}p\cdot x}=+\mathrm{i}p_\mu\mathrm{e}^{+\mathrm{i}p\cdot x}$，所以：

$$
(\slashed p+m)v(p)=0
$$

这里两类解都使用正数 $E=\sqrt{\bm{p}^2+m^2}$。
$v(p)\mathrm{e}^{+\mathrm{i}p\cdot x}$ 的指数对应四维波矢 $-p^\mu$，因此它是负频率分支，而不是把参数 $p^0$ 本身定义成负数。
这种记法能使以后粒子和反粒子的动量标签都取 $p^0=E>0$。

两式只有在质量壳条件成立时才有非零解。
例如，从左侧用 $\slashed p+m$ 乘正频率方程：

$$
(\slashed p+m)(\slashed p-m)u=(\slashed p\slashed p-m^2)u=0
$$

利用克利福德代数：

$$
\slashed p\slashed p=\gamma^\mu\gamma^\nu p_\mu p_\nu=\frac{1}{2}\{\gamma^\mu,\gamma^\nu\}p_\mu p_\nu=p^2
$$

因此：

$$
(p^2-m^2)u(p)=0
$$

非零 $u$ 要求 $p^2=m^2$，即 $E^2=\bm{p}^2+m^2$。
对 $v$ 方程做同样计算也得到完全相同的质量壳条件。

反过来，质量壳条件并不能唯一确定旋量。
在给定的 $p$ 上，$(\slashed p-m)$ 与 $(\slashed p+m)$ 各自只有二维零空间，额外的两个自由度正是自旋自由度。


---
## 逐分量求出 $u$ 旋量与 $v$ 旋量


采用标准 Dirac 表示时，时间方向的矩阵为：

$$
\gamma^0=\mqty(1&0\\0&-1)
$$

空间方向的矩阵为：

$$
\gamma^i=\mqty(0&\sigma^i\\-\sigma^i&0)
$$

这里每个数字都代表一个 $2\times2$ 分块。
由 $p_\mu=(E,-\bm{p})$，可得：

$$
\slashed p=\gamma^\mu p_\mu=\mqty(E&-\bm{\sigma}\cdot\bm{p}\\\bm{\sigma}\cdot\bm{p}&-E)
$$

把四分量旋量写成两个二分量旋量：

$$
u(p)=\mqty(\phi\\\chi)
$$

方程 $(\slashed p-m)u=0$ 变成：

$$
\mqty(E-m&-\bm{\sigma}\cdot\bm{p}\\\bm{\sigma}\cdot\bm{p}&-E-m)\mqty(\phi\\\chi)=0
$$

因此有两个二分量方程：

$$
(E-m)\phi-(\bm{\sigma}\cdot\bm{p})\chi=0
$$

$$
(\bm{\sigma}\cdot\bm{p})\phi-(E+m)\chi=0
$$

第二式可以直接解出下分量：

$$
\chi=\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\phi
$$

把它代回第一式，得到：

$$
\left[E-m-\frac{(\bm{\sigma}\cdot\bm{p})^2}{E+m}\right]\phi=0
$$

泡利矩阵恒等式为：

$$
(\bm{\sigma}\cdot\bm{a})(\bm{\sigma}\cdot\bm{b})=\bm{a}\cdot\bm{b}+\mathrm{i}\bm{\sigma}\cdot(\bm{a}\times\bm{b})
$$

令 $\bm{a}=\bm{b}=\bm{p}$，叉积项为零，所以：

$$
(\bm{\sigma}\cdot\bm{p})^2=\bm{p}^2
$$

于是代回后的方程左侧为：

$$
E-m-\frac{\bm{p}^2}{E+m}=\frac{E^2-m^2-\bm{p}^2}{E+m}=0
$$

这说明两个二分量方程在质量壳上彼此相容，而 $\phi$ 可以在二维复向量空间中任意选择。

取一组正交归一的二分量基底 $\xi_s$，其中 $s=1,2$，满足：

$$
\xi_r^\dagger\xi_s=\delta_{rs},\sum_{s=1}^{2}\xi_s\xi_s^\dagger=1_{2\times2}
$$

选择相对论性归一化后，正频率旋量为：

$$
u_s(p)=\sqrt{E+m}\mqty(\xi_s\\\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\xi_s)
$$

在静止系 $\bm{p}=0$、$E=m$ 中：

$$
u_s(0)=\sqrt{2m}\mqty(\xi_s\\0)
$$

这说明正频率静止解只有上面的两个分量独立。

现在求负频率旋量。
写成：

$$
v(p)=\mqty(\varphi\\\eta)
$$

方程 $(\slashed p+m)v=0$ 给出：

$$
(E+m)\varphi-(\bm{\sigma}\cdot\bm{p})\eta=0
$$

$$
(\bm{\sigma}\cdot\bm{p})\varphi-(E-m)\eta=0
$$

第一式给出：

$$
\varphi=\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta
$$

代回第二式后仍由 $E^2=\bm{p}^2+m^2$ 自动满足。
取另一组正交归一的二分量基底 $\eta_s$：

$$
\eta_r^\dagger\eta_s=\delta_{rs},\sum_{s=1}^{2}\eta_s\eta_s^\dagger=1_{2\times2}
$$

负频率旋量可以选为：

$$
v_s(p)=\sqrt{E+m}\mqty(\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_s\\\eta_s)
$$

静止时：

$$
v_s(0)=\sqrt{2m}\mqty(0\\\eta_s)
$$

因此负频率静止解只有下面两个分量独立。
这里的“上分量”和“下分量”依赖于所选的 $\gamma$ 矩阵表示，而正、负频率解空间各为二维这一事实不依赖表示。

有些教材在 $v_s$ 的二分量基底中加入与 $\xi_s$ 有关的相位或自旋翻转。
这是为了让粒子与反粒子的自旋标签采用特定对应方式，不会改变 Dirac 方程、归一化关系与完备关系。


---
## 归一化、正交性与完备关系


先计算 $u$ 旋量的普通内积。
利用 $(\bm{\sigma}\cdot\bm{p})^\dagger=\bm{\sigma}\cdot\bm{p}$：

$$
u_r^\dagger(p)u_s(p)=(E+m)\xi_r^\dagger\left[1+\frac{(\bm{\sigma}\cdot\bm{p})^2}{(E+m)^2}\right]\xi_s
$$

使用 $(\bm{\sigma}\cdot\bm{p})^2=\bm{p}^2$ 和 $\bm{p}^2=E^2-m^2$：

$$
1+\frac{\bm{p}^2}{(E+m)^2}=1+\frac{(E-m)(E+m)}{(E+m)^2}=\frac{2E}{E+m}
$$

所以：

$$
u_r^\dagger(p)u_s(p)=2E\delta_{rs}
$$

对 $v$ 做相同计算得到：

$$
v_r^\dagger(p)v_s(p)=2E\delta_{rs}
$$

Dirac 共轭在标准表示中会改变下方二分量的符号：

$$
\bar u_s(p)=\sqrt{E+m}\mqty(\xi_s^\dagger&-\xi_s^\dagger\frac{\bm{\sigma}\cdot\bm{p}}{E+m})
$$

因此：

$$
\bar u_r(p)u_s(p)=(E+m)\xi_r^\dagger\left[1-\frac{\bm{p}^2}{(E+m)^2}\right]\xi_s
$$

括号中的因子为：

$$
1-\frac{\bm{p}^2}{(E+m)^2}=1-\frac{E-m}{E+m}=\frac{2m}{E+m}
$$

于是：

$$
\bar u_r(p)u_s(p)=2m\delta_{rs}
$$

对于 $v$ 旋量，上方分量取正号而下方分量取负号，所以：

$$
\bar v_r(p)v_s(p)=-2m\delta_{rs}
$$

负号并不表示 $v_s^\dagger v_s$ 是负数。
它只来自洛伦兹标量 $\bar v v$ 中的 $\gamma^0$，而正定密度仍然是 $v_s^\dagger v_s=2E$。

在相同动量下，正频率与负频率旋量还满足 Dirac 正交关系。
直接代入可得：

$$
\bar u_r(p)v_s(p)=(E+m)\left[\xi_r^\dagger\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_s-\xi_r^\dagger\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_s\right]=0
$$

同理：

$$
\bar v_r(p)u_s(p)=0
$$

接下来推导自旋求和公式。
对 $u$ 旋量求和，并使用 $\sum_s\xi_s\xi_s^\dagger=1$：

$$
\sum_su_s(p)\bar u_s(p)=(E+m)\mqty(1&-\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\\\frac{\bm{\sigma}\cdot\bm{p}}{E+m}&-\frac{\bm{p}^2}{(E+m)^2})
$$

右下分块可以利用 $\bm{p}^2=(E-m)(E+m)$ 化简为 $-(E-m)$，所以：

$$
\sum_su_s(p)\bar u_s(p)=\mqty(E+m&-\bm{\sigma}\cdot\bm{p}\\\bm{\sigma}\cdot\bm{p}&-E+m)=\slashed p+m
$$

同样地，对 $v$ 旋量求和：

$$
\sum_sv_s(p)\bar v_s(p)=(E+m)\mqty(\frac{\bm{p}^2}{(E+m)^2}&-\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\\\frac{\bm{\sigma}\cdot\bm{p}}{E+m}&-1)
$$

左上分块为 $E-m$，因此：

$$
\sum_sv_s(p)\bar v_s(p)=\mqty(E-m&-\bm{\sigma}\cdot\bm{p}\\\bm{\sigma}\cdot\bm{p}&-E-m)=\slashed p-m
$$

最终，正频率解的完备关系为：

$$
\sum_su_s(p)\bar u_s(p)=\slashed p+m
$$

负频率解的完备关系为：

$$
\sum_sv_s(p)\bar v_s(p)=\slashed p-m
$$

它们之所以称为完备关系，是因为对固定的质量壳动量，两组自旋态分别张成正频率和负频率解空间。
当 $p$ 在正能质量壳上变化时，每个 $p$ 上满足 $(\slashed p-m)u=0$ 的二维核可以看成一根自旋纤维；这些二维核随动量变化，组成质量壳上的正能解空间丛。
负频率解同样形成另一族二维纤维。
$u_s(p)$ 与 $v_s(p)$ 是各根纤维中选择的局部基底，自旋求和则是不依赖这套基底的完备算符。
正频率解空间的投影算符为：

$$
\Lambda_+(p)=\frac{\slashed p+m}{2m}
$$

负频率解空间的投影算符为：

$$
\Lambda_-(p)=\frac{-\slashed p+m}{2m}
$$

例如，若 $u$ 满足 $(\slashed p-m)u=0$，那么：

$$
\Lambda_+(p)u=\frac{\slashed p+m}{2m}u=u
$$

利用 $p^2=m^2$ 还可以直接验证 $\Lambda_+^2=\Lambda_+$。
对负频率解可以使用 $\Lambda_-$ 做同样检验。

不同教材常采用不同的旋量归一化。
若把本文的旋量整体除以 $\sqrt{2m}$，就得到主教材常用的普通内积约定：

$$
u_r^\dagger u_s=v_r^\dagger v_s=\frac{E}{m}\delta_{rs}
$$

相应的 Dirac 内积约定为：

$$
\bar u_ru_s=\delta_{rs},\bar v_rv_s=-\delta_{rs}
$$

两套约定描述同一物理，只要旋量、积分测度和展开系数中的归一化因子始终配套即可。
本文采用 $\bar u u=2m$ 的约定，因为它使自旋求和直接等于 $\slashed p\pm m$，后续传播子和散射计算更简洁。

自由经典 Dirac 场的一般复平面波展开可以写成：

$$
\psi(x)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\left[b_s(\bm{p})u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}+d_s^*(\bm{p})v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}\right]
$$

在经典理论中，$b_s$ 与 $d_s^*$ 只是两族解的复系数。
在量子场论中，它们将被提升为粒子湮灭算符和反粒子产生算符，但这一步还需要费米场的反对易量子化，不能只凭平面波形式宣布完成。

下一节先继续留在单粒子方程与经典场层面，推导守恒流、自旋和螺旋度，再由非相对论极限解释四分量旋量的上下分量。
