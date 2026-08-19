---
title: "电磁场（四）：正则约束与量子化入口"
date: 2026-08-18
weight: 31
---

前一篇在单个平面波上用“一个条件加一次规范识别”得到两个物理偏振。
本篇从拉格朗日密度的勒让德变换重新得到同一结论，并说明为什么麦克斯韦场不能照搬四个标量场的正则量子化。

核心障碍是 $A_0$ 没有时间导数，它的共轭动量恒为零。
这使理论成为受约束系统：高斯定律由约束保持产生，规范变换由第一类约束生成，量子化必须先决定怎样处理冗余自由度。


---
## 退化勒让德变换与高斯约束


先考虑自由麦克斯韦拉格朗日密度：

$$
\mathcal{L}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}=\frac{1}{2}(\bm{E}^2-\bm{B}^2)
$$

为了避免空间指标升降造成的号差混乱，把协变分量 $A_\mu$ 当作正则坐标。
电场可写成：

$$
E^i=F_{0i}=\partial_0A_i-\partial_iA_0
$$

对每个 $A_\mu$ 定义正则共轭动量：

$$
\Pi^\mu=\frac{\partial\mathcal{L}}{\partial(\partial_0A_\mu)}
$$

也可以直接从协变形式求导。
利用上一章变分时得到的系数：

$$
\Pi^\mu=-F^{0\mu}
$$

当 $\mu=i$ 时，$F^{0i}=-E^i$，所以：

$$
\Pi^i=E^i
$$

当 $\mu=0$ 时，由反对称性 $F^{00}=0$，于是：

$$
\Pi^0=0
$$

这不是某个解满足的方程，而是共轭动量定义本身给出的恒等关系。
它称为主约束，因为在使用运动方程以前就已经出现。

主约束的来源也可从三维拉格朗日密度直接看出。
$\bm{E}$ 含 $\partial_0A_i$，但不含 $\partial_0A_0$，所以 $\mathcal{L}$ 对 $A_0$ 的速度完全没有依赖。
速度赫塞矩阵就是拉格朗日密度对各速度变量的二阶导数矩阵，其分量定义为：

$$
W^{\mu\nu}=\frac{\partial^2\mathcal{L}}{\partial(\partial_0A_\mu)\partial(\partial_0A_\nu)}
$$

它的第零行和第零列都为零，所以行列式为：

$$
\det W=0
$$

普通勒让德变换要求由全部动量唯一反解全部速度。
这里 $\Pi^0=0$ 无法反解 $\partial_0A_0$，因此勒让德变换是退化的。

空间速度仍可由 $\Pi^i=E^i$ 反解：

$$
\partial_0A_i=\Pi^i+\partial_iA_0
$$

正则哈密顿密度定义为：

$$
\mathcal{H}_{\mathrm{C}}=\Pi^\mu\partial_0A_\mu-\mathcal{L}
$$

由于 $\Pi^0=0$，代入空间速度得到：

$$
\mathcal{H}_{\mathrm{C}}=\bm{E}^2+\bm{E}\cdot\bm{\nabla} A_0-\frac{1}{2}(\bm{E}^2-\bm{B}^2)
$$

整理为：

$$
\mathcal{H}_{\mathrm{C}}=\frac{1}{2}(\bm{E}^2+\bm{B}^2)+\bm{E}\cdot\bm{\nabla} A_0
$$

使用乘积法则：

$$
\bm{E}\cdot\bm{\nabla} A_0=\bm{\nabla}\cdot(A_0\bm{E})-A_0\bm{\nabla}\cdot\bm{E}
$$

在适当边界条件下丢掉总散度，得到等价的正则哈密顿密度：

$$
\mathcal{H}_{\mathrm{C}}=\frac{1}{2}(\bm{E}^2+\bm{B}^2)-A_0\bm{\nabla}\cdot\bm{E}
$$

$A_0$ 没有自己的动能项，而是乘在一个约束前面。
这种不带时间导数、只负责施加约束的变量叫作拉格朗日乘子。

若加入外源，哈密顿密度中的相关项组合为：

$$
-A_0(\bm{\nabla}\cdot\bm{E}-\rho)
$$

对 $A_0$ 变分就得到高斯约束：

$$
\bm{\nabla}\cdot\bm{E}-\rho=0
$$

在狄拉克约束算法中，同一个方程来自要求主约束随时间保持。
总哈密顿量还要加入任意乘子 $u$：

$$
H_{\mathrm{T}}=H_{\mathrm{C}}+\int\mathrm{d}^3x u(\bm{x})\Pi^0(\bm{x})
$$

主约束的时间导数为：

$$
\partial_t\Pi^0(\bm{x})=\{\Pi^0(\bm{x}),H_{\mathrm{T}}\}
$$

利用 $\{A_0(\bm{x}),\Pi^0(\bm{y})\}=\delta^{(3)}(\bm{x}-\bm{y})$ 可得：

$$
\partial_t\Pi^0=\bm{\nabla}\cdot\bm{E}-\rho
$$

为了使 $\Pi^0=0$ 在以后仍成立，必须再要求：

$$
\bm{\nabla}\cdot\bm{E}-\rho=0
$$

它称为次约束，因为它由主约束的时间相容性产生。
继续对高斯约束求时间导数时，只会得到电流连续性方程，不再产生新的独立约束。


---
## 第一类约束生成规范变换


暂时取自由理论 $\rho=0$。
两条约束为：

$$
\Pi^0(\bm{x})=0
$$

以及：

$$
\mathcal{G}(\bm{x})=\partial_i\Pi^i(\bm{x})=0
$$

它们彼此的泊松括号都为零：

$$
\{\Pi^0(\bm{x}),\Pi^0(\bm{y})\}=0
$$

并且：

$$
\{\Pi^0(\bm{x}),\mathcal{G}(\bm{y})\}=0
$$

以及：

$$
\{\mathcal{G}(\bm{x}),\mathcal{G}(\bm{y})\}=0
$$

泊松括号在约束面上与所有约束都为零的约束叫第一类约束。
它不只是限制允许初始数据，还生成描述同一物理状态的规范方向。

给定任意函数 $\chi(t,\bm{x})$，定义等时生成元：

$$
G[\chi]=\int\mathrm{d}^3x[\partial_t\chi\Pi^0-\chi\partial_i\Pi^i]
$$

正则变量的无穷小变化由泊松括号给出：

$$
\delta_\chi A_\mu(\bm{x})=\{A_\mu(\bm{x}),G[\chi]\}
$$

对时间分量：

$$
\delta_\chi A_0(\bm{x})=\partial_t\chi(\bm{x})
$$

对空间分量，先使用：

$$
\{A_i(\bm{x}),\Pi^j(\bm{y})\}=\delta_i^j\delta^{(3)}(\bm{x}-\bm{y})
$$

于是：

$$
\delta_\chi A_i(\bm{x})=-\int\mathrm{d}^3y\chi(\bm{y})\partial_{y^i}\delta^{(3)}(\bm{x}-\bm{y})
$$

对分布导数分部积分：

$$
\delta_\chi A_i(\bm{x})=\partial_i\chi(\bm{x})
$$

合在一起正是：

$$
\delta_\chi A_\mu=\partial_\mu\chi
$$

所以规范变换不是额外猜出的函数替换规则。
在正则语言中，它由主约束和高斯约束的特定组合生成。
生成元中出现 $\partial_t\chi$ 是因为一次规范变换必须同时正确改变 $A_0$ 与 $A_i$。

现在严格计算局域自由度数。
每个空间点有四个正则坐标 $A_\mu$ 和四个共轭动量 $\Pi^\mu$，所以未约化相空间维数为：

$$
4+4=8
$$

每个第一类约束会做两件事：约束方程本身把相空间维数减一，它生成的规范轨道又要求把彼此等价的一维方向商掉。
这里有两条第一类约束，所以物理相空间维数为：

$$
8-2\times2=4
$$

一个构型自由度在相空间中对应一个坐标和一个动量，因此物理构型自由度数为：

$$
\frac{4}{2}=2
$$

这与前一篇得到的两个横向偏振完全一致。
平面波计算是在每个 $\bm{k}$ 上做线性代数约化，约束分析则是在整个无限维场相空间上做约化；二者是同一规范结构的两种语言。

这个过程称为辛约化。
第一步由约束方程在原相空间中切出约束面，第二步再把约束面上由第一类约束生成的规范轨道商掉，得到物理相空间。
原相空间中的辛结构沿纯规范方向会退化，商掉这些零方向以后才在物理相空间上留下非退化正则结构。
库仑规范等规范条件可以看作试图从每条轨道中选择一个代表元，也就是在这个轨道丛上选择局部截面。

还可以用横向与纵向分解看见高斯约束的作用。
任意足够规则的三维向量场可分解为：

$$
\bm{A}=\bm{A}_{\mathrm{T}}+\bm{A}_{\mathrm{L}}
$$

其中：

$$
\bm{\nabla}\cdot\bm{A}_{\mathrm{T}}=0
$$

并且：

$$
\bm{A}_{\mathrm{L}}=\bm{\nabla}\sigma
$$

这叫亥姆霍兹分解。
它是函数空间版本的“向量分成平行与垂直两部分”，只不过这里相对于的是梯度子空间，而不是一个固定有限维向量。

规范变换只改变纵向部分：

$$
\bm{A}\mapsto\bm{A}-\bm{\nabla}\chi
$$

所以 $\bm{A}_{\mathrm{L}}$ 可以由规范选择去掉，而 $\bm{A}_{\mathrm{T}}$ 保持不变。
无源高斯约束 $\bm{\nabla}\cdot\bm{E}=0$ 又说明电场只剩横向部分。
最终成对留下的正则变量正是 $(\bm{A}_{\mathrm{T}},\bm{E}_{\mathrm{T}})$。


---
## 两条量子化道路及其各自代价


若把 $A_\mu$ 当作四个普通场分量，最直接的等时正则对易关系似乎应为：

$$
[A_\mu(t,\bm{x}),\Pi^\nu(t,\bm{y})]=\mathrm{i}\delta_\mu^\nu\delta^{(3)}(\bm{x}-\bm{y})
$$

但取 $\mu=\nu=0$ 后，左边因 $\Pi^0=0$ 恒为零，右边却不为零：

$$
[A_0(t,\bm{x}),\Pi^0(t,\bm{y})]=0\neq\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$

这就是不能把麦克斯韦场机械地当作四个无质量标量场量子化的最直接证据。
必须先约化到物理变量，或者修改拉格朗日密度并在更大的状态空间中量子化。

第一条道路是先选择库仑规范：

$$
\bm{\nabla}\cdot\bm{A}=0
$$

再解高斯约束并只保留横向场。
横向投影算符为：

$$
P_{\mathrm{T}}^{ij}=\delta^{ij}-\frac{\partial^i\partial^j}{\nabla^2}
$$

$1/\nabla^2$ 表示在给定边界条件下求解泊松方程的逆算符，所以这个投影在位置空间中是非局域的。
在动量空间中，它成为普通的 $3\times3$ 矩阵：

$$
P_{\mathrm{T}}^{ij}(\bm{k})=\delta^{ij}-\frac{k^ik^j}{|\bm{k}|^2}
$$

它确实消去沿动量的分量：

$$
k_iP_{\mathrm{T}}^{ij}(\bm{k})=0
$$

并且连续投影两次与投影一次相同：

$$
P_{\mathrm{T}}^{ik}(\bm{k})P_{\mathrm{T}}^{kj}(\bm{k})=P_{\mathrm{T}}^{ij}(\bm{k})
$$

第一条性质说明投影后的向量满足横向条件，第二条性质说明已经横向的向量不会再次改变；这正是“投影算符”这个名称的线性代数含义。
横向场定义为：

$$
A_{\mathrm{T}}^i=P_{\mathrm{T}}^{ij}A^j
$$

相应的横向狄拉克分布为：

$$
\delta_{\mathrm{T}}^{ij}(\bm{x}-\bm{y})=\left(\delta^{ij}-\frac{\partial^i\partial^j}{\nabla^2}\right)\delta^{(3)}(\bm{x}-\bm{y})
$$

它对第一个空间变量取散度为零：

$$
\partial_i\delta_{\mathrm{T}}^{ij}(\bm{x}-\bm{y})=0
$$

因此下面的对易关系与算符约束 $\bm{\nabla}\cdot\bm{A}_{\mathrm{T}}=0$ 相容；对左边取散度时，两边都会得到零。

约化后的量子对易关系为：

$$
[A_{\mathrm{T}}^i(t,\bm{x}),E_{\mathrm{T}}^j(t,\bm{y})]=\mathrm{i}\delta_{\mathrm{T}}^{ij}(\bm{x}-\bm{y})
$$

它只量子化两个物理偏振，因此希尔伯特空间具有正定内积，物理意义透明。
代价是横向投影含 $1/\nabla^2$，洛伦兹协变性不再显然，处理相对论性微扰计算不够方便。

把自由横向场分成正频率部分与负频率部分：

$$
\bm{A}_{\mathrm{T}}(x)=\bm{A}_{\mathrm{T}}^{(+)}(x)+\bm{A}_{\mathrm{T}}^{(-)}(x)
$$

正频率部分可预先写成：

$$
\bm{A}_{\mathrm{T}}^{(+)}(x)=\sum_{\lambda=1}^2\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\bm{\varepsilon}_\lambda(\bm{k})\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

实场的负频率部分是它的厄米共轭：

$$
\bm{A}_{\mathrm{T}}^{(-)}(x)=\sum_{\lambda=1}^2\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\bm{\varepsilon}_\lambda^*(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})\mathrm{e}^{+\mathrm{i}k\cdot x}
$$

其中：

$$
\bm{k}\cdot\bm{\varepsilon}_\lambda(\bm{k})=0
$$

模算符将满足：

$$
[\hat{a}_\lambda(\bm{k}),\hat{a}_{\lambda'}^\dagger(\bm{q})]=(2\pi)^3\delta_{\lambda\lambda'}\delta^{(3)}(\bm{k}-\bm{q})
$$

这会在后续文章中由场对易关系完整推出，而不是现在直接当作定义结束。

第二条道路是加入协变规范固定项：

$$
\mathcal{L}_\xi=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}-\frac{1}{2\xi}(\partial_\mu A^\mu)^2
$$

它给出的运动方程为：

$$
\Box A^\nu-\left(1-\frac{1}{\xi}\right)\partial^\nu(\partial_\mu A^\mu)=0
$$

当 $\xi=1$ 时得到费曼规范：

$$
\Box A^\nu=0
$$

把原拉格朗日密度展开：

$$
-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}=-\frac{1}{2}\partial_\mu A_\nu\partial^\mu A^\nu+\frac{1}{2}\partial_\mu A_\nu\partial^\nu A^\mu
$$

在 $\xi=1$ 时加上 $-(\partial\cdot A)^2/2$，后两项之差是总散度。
忽略边界项后：

$$
\mathcal{L}_{\xi=1}\simeq-\frac{1}{2}\partial_\mu A_\nu\partial^\mu A^\nu
$$

符号 $\simeq$ 表示两边只相差一个不影响局域运动方程的总散度。
这就是主教材直接使用的简化形式，但它已经包含费曼规范固定，不能当作未经说明的规范不变麦克斯韦拉格朗日密度。

协变规范让四个分量都具有可逆的二次动能算符，传播子也能保持显然协变。
代价是时间型和纵向模进入一个带不定内积的扩大状态空间，不能把其中每个态都解释成物理光子。

古普塔–布洛伊勒方法不会把 $\partial_\mu A^\mu=0$ 作为严格算符恒等式，而只要求其正频率部分湮灭物理态：

$$
(\partial_\mu A^\mu)^{(+)}|\mathrm{phys}\rangle=0
$$

这样既保留协变场对易关系，又把非物理偏振从最终物理态空间中排除。
为什么不能施加强算符条件、负范数怎样出现、时间型与纵向贡献怎样相消，都必须在真正建立光子场的模代数后逐步验证。

因此下一阶段的量子化不能只复制标量场公式再添一个指标。
我们需要分别跟踪四维偏振基底、带号差的模对易关系、弱洛伦茨条件、物理子空间以及最终只含两个横向模的哈密顿量。
