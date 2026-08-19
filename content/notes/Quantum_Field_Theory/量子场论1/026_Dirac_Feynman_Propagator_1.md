---
title: "Dirac 场二点函数（二）：费米时间序传播子与格林函数"
date: 2026-08-18
weight: 26
---

上一篇的 $S^+(x-y)$ 与 $S^-(x-y)$ 分别固定了两种场次序。
相互作用微扰论需要一个能够按照两个事件的时间先后自动选择次序的统一对象，这就是 Dirac 场的 Feynman 传播子。

费米传播子与标量传播子的第一个本质差别，是交换两个费米场时必须产生负号。
第二个差别是传播子带两个旋量指标，所以它不是标量格林函数，而是 Dirac 微分算符的矩阵值逆核。


---
## 费米时间序为什么必须带负号


仍记：

$$
z=x-y
$$

对于两个费米奇算符，时间序定义为：

$$
T\{\psi_\alpha(x)\bar\psi_\beta(y)\}=\theta(z^0)\psi_\alpha(x)\bar\psi_\beta(y)-\theta(-z^0)\bar\psi_\beta(y)\psi_\alpha(x)
$$

当 $x^0>y^0$ 时，较晚的 $\psi(x)$ 已经在左边，不需要交换。
当 $x^0<y^0$ 时，必须把较晚的 $\bar\psi(y)$ 移到左边；交换两个费米奇算符产生一个负号。

这个负号不是为了让最后公式好看而任意选择的。
它来自费米算符的分级排列规则，并保证时间序乘积与反对易代数、Wick 展开以及洛伦兹协变的散射振幅相容。

本文把完整的时间序真空二点函数定义为：

$$
S_F{}_{\alpha\beta}(z)=\langle0|T\{\psi_\alpha(x)\bar\psi_\beta(y)\}|0\rangle
$$

主教材把同一个完整真空期望值记作 $\mathrm{i}S_F$。
本文的 $S_F$ 已经包含动量空间分子上的 $\mathrm{i}$；阅读其他教材时必须先确认它们是否把这个 $\mathrm{i}$ 包含在传播子定义中。

把时间序定义代入：

$$
S_F(z)=\theta(z^0)\langle0|\psi(x)\bar\psi(y)|0\rangle-\theta(-z^0)\langle0|\bar\psi(y)\psi(x)|0\rangle
$$

使用上一篇定义的两个怀特曼函数：

$$
S_F(z)=\theta(z^0)S^+(z)-\theta(-z^0)S^-(z)
$$

较晚的 $x$ 对应粒子分支：

$$
S_F^{>}(z)=\theta(z^0)\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}(\slashed p+m)\mathrm{e}^{-\mathrm{i}p\cdot z}
$$

较晚的 $y$ 对应反粒子分支：

$$
S_F^{<}(z)=-\theta(-z^0)\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}(\slashed p-m)\mathrm{e}^{+\mathrm{i}p\cdot z}
$$

两者相加就是完整传播子。

可以直接从真空和模算符作用再次检验这两个分支。
当 $z^0>0$ 时，右边的 $\bar\psi(y)$ 只能通过 $\hat b^\dagger$ 产生粒子，左边的 $\psi(x)$ 再通过 $\hat b$ 将其湮灭。
因此：

$$
S_F(z)=\langle0|\psi^{(+)}(x)\bar\psi^{(-)}(y)|0\rangle=S^+(z)
$$

当 $z^0<0$ 时，右边的 $\psi(x)$ 通过 $\hat d^\dagger$ 产生反粒子，左边的 $\bar\psi(y)$ 通过 $\hat d$ 将其湮灭。
时间序交换两个费米场还要保留负号，所以：

$$
S_F(z)=-\langle0|\bar\psi^{(+)}(y)\psi^{(-)}(x)|0\rangle=-S^-(z)
$$

这里的正负频率上标只标记场展开的频率部分。
不同教材对 $\bar\psi^{(+)}$ 与 $\bar\psi^{(-)}$ 的命名偶尔相反，因此最可靠的方法始终是查看该部分含产生算符还是湮灭算符。

$S_F{}_{\alpha\beta}$ 是一个矩阵值分布。
它可以作用在外部旋量、源或另一个 Dirac 算符上，但不能把单独一个矩阵分量的模平方解释成可观测概率密度。


---
## 阶跃函数怎样产生四维接触项


传播子的两个时间分支在 $z^0\neq0$ 时都满足齐次 Dirac 方程。
非齐次源来自 $z^0=0$ 处阶跃函数的导数。

从：

$$
S_F(z)=\theta(z^0)S^+(z)-\theta(-z^0)S^-(z)
$$

出发，使用 $\partial_{z^0}\theta(z^0)=\delta(z^0)$ 与 $\partial_{z^0}\theta(-z^0)=-\delta(z^0)$。
对传播子作用 $\mathrm{i}\slashed\partial-m$：

$$
(\mathrm{i}\slashed\partial-m)S_F=\mathrm{i}\gamma^0\delta(z^0)[S^+(z)+S^-(z)]+R(z)
$$

$R(z)$ 收集阶跃函数乘以齐次运动方程的部分：

$$
R(z)=\theta(z^0)(\mathrm{i}\slashed\partial-m)S^+(z)-\theta(-z^0)(\mathrm{i}\slashed\partial-m)S^-(z)
$$

每个旋量平面波都满足自由 Dirac 方程，所以：

$$
R(z)=0
$$

剩余的接触项包含两个场次序之和。
上一篇已经证明：

$$
S^+(z)+S^-(z)=\{\psi(x),\bar\psi(y)\}_+
$$

取等时极限：

$$
[S^+(z)+S^-(z)]_{z^0=0}=\gamma^0\delta^{(3)}(\bm{z})
$$

因此：

$$
(\mathrm{i}\slashed\partial_z-m)S_F(z)=\mathrm{i}\gamma^0\gamma^0\delta(z^0)\delta^{(3)}(\bm{z})
$$

利用 $(\gamma^0)^2=1$，最终得到：

$$
(\mathrm{i}\slashed\partial_x-m)S_F(x-y)=\mathrm{i}\delta^{(4)}(x-y)\mathbb{1}_4
$$

单位矩阵 $\mathbb{1}_4$ 经常被省略。
把旋量指标写全时：

$$
(\mathrm{i}\gamma^\mu\partial_{x^\mu}-m)_\alpha{}^\gamma S_F{}_{\gamma\beta}(x-y)=\mathrm{i}\delta_\alpha{}^\beta\delta^{(4)}(x-y)
$$

这个式子说明 $S_F$ 是 Dirac 算符的 Feynman 格林函数。
“逆核”不是普通有限维矩阵的逆，而是同时对时空位置积分并对旋量指标求和以后得到单位分布的积分核。

在丛语言中，狄拉克算符把旋量丛截面送到旋量丛截面，$S_F(x,y)$ 则是它带费曼边界条件的格林算符核。
右边的 $\mathbb{1}_4$ 是旋量纤维上的恒等映射，$\delta^{(4)}(x-y)$ 是底空间上的单位分布；两者缺一不可。
因此给定旋量源 $\eta(y)$ 时，传播子先在 $y$ 点旋量纤维中与源缩并，再把结果送到 $x$ 点旋量纤维。

若外源方程为：

$$
(\mathrm{i}\slashed\partial-m)\psi(x)=\eta(x)
$$

那么一个满足 Feynman 边界条件的形式解为：

$$
\psi(x)=\frac{1}{\mathrm{i}}\int S_F(x-y)\eta(y)\mathrm{d}^4y
$$

将 Dirac 算符作用在这个表达式上：

$$
(\mathrm{i}\slashed\partial_x-m)\psi(x)=\int\delta^{(4)}(x-y)\eta(y)\mathrm{d}^4y=\eta(x)
$$

传播子方程中的 $\mathrm{i}$ 完全由本文把完整真空期望值定义为 $S_F$ 的约定决定。
若把真空期望值记作 $\mathrm{i}S_F^{\mathrm{book}}$，那么不含前置 $\mathrm{i}$ 的 $S_F^{\mathrm{book}}$ 满足右侧为 $\delta^{(4)}$ 的逆核方程。


---
## 与标量传播子的关系及其物理边界


015 中的标量 Feynman 传播子定义为：

$$
D_F(z)=\theta(z^0)D^+(z)+\theta(-z^0)D^-(z)
$$

上一篇已经得到：

$$
S^+(z)=(\mathrm{i}\slashed\partial+m)D^+(z)
$$

以及：

$$
S^-(z)=-(\mathrm{i}\slashed\partial+m)D^-(z)
$$

把 $\mathrm{i}\slashed\partial+m$ 作用在 $D_F$ 上。
导数作用到阶跃函数时产生的项正比于：

$$
\delta(z^0)[D^+(0,\bm{z})-D^-(0,\bm{z})]
$$

标量场对易函数在等时为零，所以这个接触项消失。
剩余两部分恰好给出：

$$
S_F(z)=(\mathrm{i}\slashed\partial_z+m)D_F(z)
$$

这个恒等式把费米传播子化成标量传播子的“一阶微分提升”。
它也立即给出格林函数方程。

利用算符因式分解：

$$
(\mathrm{i}\slashed\partial-m)(\mathrm{i}\slashed\partial+m)=-(\Box+m^2)
$$

以及标量传播子方程：

$$
(\Box+m^2)D_F(z)=-\mathrm{i}\delta^{(4)}(z)
$$

可得：

$$
(\mathrm{i}\slashed\partial-m)S_F(z)=\mathrm{i}\delta^{(4)}(z)
$$

这与上一节从阶跃函数接触项直接得到的结果一致。
两种证明分别突出正则反对易关系和 Dirac–Klein–Gordon 因式分解，因而互相检验了全部符号。

主教材常把传播子描述成虚粒子从 $y$ 传播到 $x$ 的振幅。
这种图像有助于记忆：$z^0>0$ 选择粒子分支，$z^0<0$ 选择反粒子分支。
但严格定义仍然是自由真空中的时间序二点函数，而不是一条已经被观测的粒子轨迹。

不能把 $|S_F{}_{\alpha\beta}(x-y)|^2$ 单独解释成实验概率。
真实散射或衰变概率来自完整跃迁振幅，其中还包括外态、相互作用顶点、旋量缩并、相空间积分和所有不可区分过程之间的干涉。

传播子在类空间隔下一般不为零，这也不表示超光速传播。
微观因果性由上一篇的场反对易函数以及局域可观测量的对易子控制；Feynman 传播子是按坐标时间排序的计算工具，不是推迟响应函数。

下一篇将把 $D_F$ 的四维动量表示代入 $S_F=(\mathrm{i}\slashed\partial+m)D_F$，得到最常用的动量空间费米传播子，并逐个解释两个能量极点的位置。
