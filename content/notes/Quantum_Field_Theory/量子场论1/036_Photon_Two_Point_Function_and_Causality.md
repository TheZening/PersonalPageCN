---
title: "光子传播子（一）：真空二点函数、场对易子与微观因果性"
date: 2026-08-19
weight: 36
---

协变量子化已经给出四维势的模展开和带号差的模代数。
现在可以像标量场一样计算任意两个时空点之间的真空关联，但偏振完备关系会在标量二点函数外面留下一个洛伦兹张量。

本篇先推导两种四维势怀特曼函数，再由它们构造场对易子并验证等时正则结构。
最后把结果转换成场强张量的对易子，从而区分依赖规范代表元的势关联和真正规范不变的局域因果关系。


---
## 四偏振求和怎样化成闵可夫斯基度规


记两个事件之差为：

$$
z=x-y
$$

自由四维势的正频率部分为：

$$
A^{\mu(+)}(x)=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^\mu(\bm{k})\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

负频率部分为：

$$
A^{\mu(-)}(x)=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^{\mu*}(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})\mathrm{e}^{+\mathrm{i}k\cdot x}
$$

其中：

$$
\omega_{\bm{k}}=|\bm{k}|
$$

模对易关系为：

$$
[\hat{a}_\lambda(\bm{k}),\hat{a}_{\lambda'}^\dagger(\bm{q})]=s_\lambda(2\pi)^3\delta_{\lambda\lambda'}\delta^{(3)}(\bm{k}-\bm{q})
$$

号差满足：

$$
s_\lambda=-\eta_{\lambda\lambda}
$$

偏振完备关系因此可以写成：

$$
\sum_{\lambda=0}^3s_\lambda\varepsilon_\lambda^\mu(\bm{k})\varepsilon_\lambda^{\nu*}(\bm{k})=-\eta^{\mu\nu}
$$

定义第一种四维势真空二点函数：

$$
D^{+\mu\nu}(z)=\langle0|A^\mu(x)A^\nu(y)|0\rangle
$$

右边的 $A^\nu(y)$ 必须用负频率部分产生一个辅助一光子向量，左边的 $A^\mu(x)$ 再用正频率部分把它湮灭。
所以：

$$
D^{+\mu\nu}(z)=\langle0|A^{\mu(+)}(x)A^{\nu(-)}(y)|0\rangle
$$

把两个模展开代入：

$$
\begin{aligned}
D^{+\mu\nu}(z)
&=\sum_{\lambda,\lambda'}\int\frac{\mathrm{d}^3k\mathrm{d}^3q}{(2\pi)^6\sqrt{4\omega_{\bm{k}}\omega_{\bm{q}}}} \\
&\phantom{=}\times\varepsilon_\lambda^\mu(\bm{k})\varepsilon_{\lambda'}^{\nu*}(\bm{q})\mathrm{e}^{-\mathrm{i}k\cdot x+\mathrm{i}q\cdot y} \\
&\phantom{=}\times\langle0|\hat{a}_\lambda(\bm{k})\hat{a}_{\lambda'}^\dagger(\bm{q})|0\rangle
\end{aligned}
$$

真空矩阵元等于模对易子：

$$
\langle0|\hat{a}_\lambda(\bm{k})\hat{a}_{\lambda'}^\dagger(\bm{q})|0\rangle=s_\lambda(2\pi)^3\delta_{\lambda\lambda'}\delta^{(3)}(\bm{k}-\bm{q})
$$

完成 $\bm{q}$ 积分：

$$
D^{+\mu\nu}(z)=\sum_{\lambda=0}^3s_\lambda\int\frac{\mathrm{d}^3k}{(2\pi)^3 2\omega_{\bm{k}}}\varepsilon_\lambda^\mu(\bm{k})\varepsilon_\lambda^{\nu*}(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

使用偏振完备关系：

$$
D^{+\mu\nu}(z)=-\eta^{\mu\nu}D_0^+(z)
$$

这里定义无质量标量怀特曼函数：

$$
D_0^+(z)=\int\frac{\mathrm{d}^3k}{(2\pi)^3 2\omega_{\bm{k}}}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

第二种场次序定义为：

$$
D^{-\mu\nu}(z)=\langle0|A^\nu(y)A^\mu(x)|0\rangle
$$

同样的计算给出：

$$
D^{-\mu\nu}(z)=-\eta^{\mu\nu}D_0^-(z)
$$

其中：

$$
D_0^-(z)=\int\frac{\mathrm{d}^3k}{(2\pi)^3 2\omega_{\bm{k}}}\mathrm{e}^{+\mathrm{i}k\cdot z}
$$

所以四维势二点函数的动力学部分与无质量标量场相同，张量结构来自四偏振求和。
负号不是额外约定，而是时间型模对易关系与闵可夫斯基完备关系共同产生的。

四维势二点函数本身依赖规范选择。
它不是正定概率核，时间分量甚至会继承不定内积的符号。
它的用途是组织算符关联和内部收缩，而不是给某个光子定义位置概率密度。

从纤维角度看，降低指标后的势二点函数属于 $T_x^*M\otimes T_y^*M$ 上的双分布：一个指标留在 $x$ 点余切纤维，另一个留在 $y$ 点余切纤维。
闵可夫斯基度规在平直时空中把这两根纤维统一比较，因而结果可以简写成 $-\eta_{\mu\nu}D_0^+(x-y)$。
这也解释了为什么标量二点函数只剩一个数值核，而光子二点函数还必须保留两个纤维指标。


---
## 场对易函数怎样恢复正则初始数据


四维势对易子为：

$$
C^{\mu\nu}(z)=[A^\mu(x),A^\nu(y)]
$$

由于模对易子已经是数值分布乘以单位算符，完整场对易子也是数值分布。
由两种怀特曼函数立即得到：

$$
C^{\mu\nu}(z)=D^{+\mu\nu}(z)-D^{-\mu\nu}(z)
$$

定义无质量泡利–若尔当分布：

$$
D_0^+(z)-D_0^-(z)=\mathrm{i}\Delta_0(z)
$$

于是：

$$
[A^\mu(x),A^\nu(y)]=-\mathrm{i}\eta^{\mu\nu}\Delta_0(x-y)
$$

这个式子保存了全部等时正则信息。
先取 $x^0=y^0=t$。
无质量标量泡利–若尔当分布在等时面上满足：

$$
\Delta_0(0,\bm{x}-\bm{y})=0
$$

所以：

$$
[A^\mu(t,\bm{x}),A^\nu(t,\bm{y})]=0
$$

再对 $x^0$ 求导：

$$
[\dot A^\mu(x),A^\nu(y)]=-\mathrm{i}\eta^{\mu\nu}\partial_{x^0}\Delta_0(x-y)
$$

标量分布的等时导数为：

$$
\left.\partial_{x^0}\Delta_0(x-y)\right|_{x^0=y^0}=-\delta^{(3)}(\bm{x}-\bm{y})
$$

因此：

$$
[\dot A^\mu(t,\bm{x}),A^\nu(t,\bm{y})]=\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{x}-\bm{y})
$$

反转算符次序：

$$
[A^\mu(t,\bm{x}),\dot A^\nu(t,\bm{y})]=-\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{x}-\bm{y})
$$

这正是 032 从规范固定拉格朗日密度得到的等时正则对易关系。
所以不同时刻的场对易子并未增加新的量子化假设，它只是等时初始数据按照波动方程的唯一演化。

每个平面波都满足 $k^2=0$，所以泡利–若尔当分布满足：

$$
\Box\Delta_0(z)=0
$$

从而：

$$
\Box_xC^{\mu\nu}(x-y)=0
$$

这是一条齐次方程。
对易子没有四维德尔塔源；传播子的接触项只会在下一篇对时间序阶跃函数求导时出现。

在四维时空中，无质量泡利–若尔当分布还能显式写成：

$$
\Delta_0(z)=-\frac{1}{2\pi}\operatorname{sgn}(z^0)\delta(z^2)
$$

$\delta(z^2)$ 把分布限制在光锥 $z^2=0$ 上，而 $\operatorname{sgn}(z^0)$ 区分未来光锥与过去光锥。
这说明三维空间中的无质量自由场扰动只沿光锥传播，没有留在光锥内部的“尾迹”；这个更强的结论依赖四维无质量波动方程。

当 $z^2<0$ 时，总能找到一个正规正时洛伦兹变换把 $z$ 变成等时向量。
由于 $\Delta_0$ 是洛伦兹标量分布并在等时空间隔上为零：

$$
z^2<0\Longrightarrow\Delta_0(z)=0
$$

因此：

$$
(x-y)^2<0\Longrightarrow[A^\mu(x),A^\nu(y)]=0
$$

在当前自由费曼规范中，势的各分量也满足类空间隔对易。
不过微观因果性的物理陈述最终应落在规范不变局域可观测量上，因为裸势分量不是独立可观测量。


---
## 场强关联把规范依赖消去


场强由势的反对称导数组合给出：

几何上，$A$ 是一形式而 $F$ 是二形式，所以 $F(x)$ 属于外幂纤维 $\Lambda^2T_x^*M$。
场强二点函数相应属于 $\Lambda^2T_x^*M\otimes\Lambda^2T_y^*M$ 上的双分布。
下面的反对称导数组合正是在两个端点分别把一形式纤维映射到二形式纤维，因而会自动消去纯梯度方向。

$$
F_{\mu\nu}(x)=\partial_\mu A_\nu(x)-\partial_\nu A_\mu(x)
$$

场强二点函数可以直接对势二点函数求导。
定义：

$$
G_{\mu\nu,\rho\sigma}^+(z)=\langle0|F_{\mu\nu}(x)F_{\rho\sigma}(y)|0\rangle
$$

展开两个场强：

$$
G_{\mu\nu,\rho\sigma}^+=\partial_\mu^x\partial_\rho^yD_{\nu\sigma}^+-\partial_\mu^x\partial_\sigma^yD_{\nu\rho}^+-\partial_\nu^x\partial_\rho^yD_{\mu\sigma}^++\partial_\nu^x\partial_\sigma^yD_{\mu\rho}^+
$$

其中：

$$
D_{\alpha\beta}^+(z)=-\eta_{\alpha\beta}D_0^+(z)
$$

又因为 $z=x-y$：

$$
\partial_\mu^x=\partial_\mu^z
$$

以及：

$$
\partial_\rho^y=-\partial_\rho^z
$$

所以：

$$
G_{\mu\nu,\rho\sigma}^+(z)=[\eta_{\nu\sigma}\partial_\mu\partial_\rho-\eta_{\nu\rho}\partial_\mu\partial_\sigma-\eta_{\mu\sigma}\partial_\nu\partial_\rho+\eta_{\mu\rho}\partial_\nu\partial_\sigma]D_0^+(z)
$$

这里所有导数都对 $z$ 作用。
这个结构分别对 $\mu\leftrightarrow\nu$ 和 $\rho\leftrightarrow\sigma$ 反对称，正好继承场强张量的指标对称性。

更一般地，若势传播结构改变一个纯纵向项：

$$
D_{\mu\nu}^+(z)\mapsto D_{\mu\nu}^+(z)+\partial_\mu\partial_\nu f(z)
$$

把它代入场强关联时，每一侧都有反对称导数组合。
例如第一侧产生：

$$
\partial_\mu\partial_\nu\partial_\rho f-\partial_\nu\partial_\mu\partial_\rho f=0
$$

所以场强二点函数不受这种纯规范项影响。
这就是“势关联依赖规范而场强关联不依赖规范”的微分形式证明。

同样可计算场强对易子。
从：

$$
[A_\alpha(x),A_\beta(y)]=-\mathrm{i}\eta_{\alpha\beta}\Delta_0(z)
$$

得到：

$$
[F_{\mu\nu}(x),F_{\rho\sigma}(y)]=\mathrm{i}\mathcal{D}_{\mu\nu,\rho\sigma}\Delta_0(z)
$$

其中二阶微分算符为：

$$
\mathcal{D}_{\mu\nu,\rho\sigma}=\eta_{\nu\sigma}\partial_\mu\partial_\rho-\eta_{\nu\rho}\partial_\mu\partial_\sigma-\eta_{\mu\sigma}\partial_\nu\partial_\rho+\eta_{\mu\rho}\partial_\nu\partial_\sigma
$$

在类空间隔构成的开区域内，$\Delta_0(z)$ 恒为零，它的所有普通导数也为零。
因此：

$$
z^2<0\Longrightarrow[F_{\mu\nu}(x),F_{\rho\sigma}(y)]=0
$$

电场与磁场都是 $F_{\mu\nu}$ 的分量，所以任意两个类空间隔的局域电磁场可观测量对易。
这才是电磁理论微观因果性的规范不变内容。

真空二点函数在类空间隔一般不为零，但其反对称组合对易子为零。
因此真空可以有跨空间区域的量子关联，却不能借此让局域操作产生超光速可控信号。
