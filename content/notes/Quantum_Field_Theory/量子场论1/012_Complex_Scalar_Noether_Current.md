---
title: "复标量场的诺特流（一）：从相位对称性到守恒荷"
date: 2026-08-18
weight: 12
---

复标量场的正则量子化引入了两套独立的模算符，但仅凭这一点还不能说明它们为什么代表粒子与反粒子。
真正区分两类激发的不是能量，因为它们具有相同的正能量，而是复标量场的整体 $U(1)$ 对称性及其诺特荷。
本篇从复场的几何含义开始，逐步推导诺特流、局域连续性方程和守恒荷，再证明这个荷在经典相空间中确实生成相位旋转。
下一篇将把它提升为量子算符，并从模展开直接读出粒子与反粒子的相反电荷。

---
## 从复标量场的相位旋转到诺特流


复标量场 $\phi(x)$ 可以拆成两个实标量场：
$$
\phi(x)=\frac{1}{\sqrt{2}}[\phi_1(x)+\mathrm{i}\phi_2(x)] \quad \phi^*(x)=\frac{1}{\sqrt{2}}[\phi_1(x)-\mathrm{i}\phi_2(x)]
$$
因此复数记号并没有凭空增加神秘的新对象。
在每个时空点 $x$ 上，场值等价于内部二维实平面中的向量 $(\phi_1,\phi_2)$。
这里的“内部”表示这个平面不是物理空间中的方向，相位旋转不会把场从一个空间位置搬到另一个位置。


自由复标量场的拉格朗日密度为：
$$
\mathcal{L}=\partial_\mu\phi^*\partial^\mu\phi-m^2\phi^*\phi
$$
本文使用度规 $\eta_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$ 和自然单位制。
把复场拆成实部和虚部以后，拉格朗日密度变成：
$$
\mathcal{L}=\frac{1}{2}\partial_\mu\phi_1\partial^\mu\phi_1-\frac{1}{2}m^2\phi_1^2+\frac{1}{2}\partial_\mu\phi_2\partial^\mu\phi_2-\frac{1}{2}m^2\phi_2^2
$$
这说明自由复场等价于两个质量相同的自由实场。
两个分量具有完全相同的系数，所以在内部二维平面内同时旋转它们不会改变拉格朗日密度。


用复数语言表示这个旋转最简洁：
$$
\phi'(x)=\mathrm{e}^{-\mathrm{i}\alpha}\phi(x) \quad \phi'^*(x)=\mathrm{e}^{\mathrm{i}\alpha}\phi^*(x)
$$
$\alpha$ 是与时空位置无关的实常数。
所有模长为 $1$ 的复数相位在乘法下组成 $U(1)$ 群，因而这称为整体 $U(1)$ 变换。
“整体”意味着所有时空点采用同一个 $\alpha$，而不是允许每个点独立选择相位。


用丛语言说，$\phi$ 是复线丛的截面，$U(1)$ 在每根复数纤维上作相位旋转。
整体对称性要求所有纤维同时使用同一个群元素，所以群轨道连接的是不同但物理上可区分的场构型，守恒荷正是这条轨道的生成元。
这时还没有把相位基准局域化，因而 $\partial_\mu$ 仍是普通导数；只有允许每点独立选择相位并引入联络以后，才进入规范理论。


先直接检查拉格朗日密度的有限变换。
因为 $\alpha$ 为常数，导数不会作用到相位因子上：
$$
\partial_\mu\phi'=\mathrm{e}^{-\mathrm{i}\alpha}\partial_\mu\phi \quad \partial_\mu\phi'^*=\mathrm{e}^{\mathrm{i}\alpha}\partial_\mu\phi^*
$$
动能项因此满足：
$$
\partial_\mu\phi'^*\partial^\mu\phi'=\mathrm{e}^{\mathrm{i}\alpha}\mathrm{e}^{-\mathrm{i}\alpha}\partial_\mu\phi^*\partial^\mu\phi=\partial_\mu\phi^*\partial^\mu\phi
$$
质量项同样满足：
$$
\phi'^*\phi'=\mathrm{e}^{\mathrm{i}\alpha}\mathrm{e}^{-\mathrm{i}\alpha}\phi^*\phi=\phi^*\phi
$$
所以 $\mathcal{L}'=\mathcal{L}$，这确实是理论本身的连续对称性，而不只是某一条特殊解的性质。


为了使用诺特定理，把有限变换展开到 $\alpha$ 的一阶：
$$
\mathrm{e}^{-\mathrm{i}\alpha}=1-\mathrm{i}\alpha+O(\alpha^2) \quad \mathrm{e}^{\mathrm{i}\alpha}=1+\mathrm{i}\alpha+O(\alpha^2)
$$
无穷小场变分为：
$$
\delta\phi=-\mathrm{i}\alpha\phi \quad \delta\phi^*=\mathrm{i}\alpha\phi^*
$$
计算变分时把 $\phi$ 与 $\phi^*$ 当作独立坐标。
这等价于独立改变 $\phi_1$ 与 $\phi_2$，并不否认二者最后互为复共轭。


对不改变时空坐标且使拉格朗日密度严格不变的内部变换，诺特流为：
$$
j^\mu=\pdv{\mathcal{L}}{(\partial_\mu\phi)}\frac{\delta\phi}{\alpha}+\pdv{\mathcal{L}}{(\partial_\mu\phi^*)}\frac{\delta\phi^*}{\alpha}
$$
两个多动量分别为：
$$
\pdv{\mathcal{L}}{(\partial_\mu\phi)}=\partial^\mu\phi^* \quad \pdv{\mathcal{L}}{(\partial_\mu\phi^*)}=\partial^\mu\phi
$$
代入两个无穷小生成方向：
$$
j^\mu=(\partial^\mu\phi^*)(-\mathrm{i}\phi)+(\partial^\mu\phi)(\mathrm{i}\phi^*)
$$
把普通经典场的乘法次序整理后得到：
$$
j^\mu=\mathrm{i}[\phi^*\partial^\mu\phi-(\partial^\mu\phi^*)\phi]
$$
方括号中两项互为复共轭，所以前面的 $\mathrm{i}$ 使 $j^\mu$ 为实四维向量。
流的整体符号取决于最初选择 $\phi\mapsto\mathrm{e}^{-\mathrm{i}\alpha}\phi$ 还是 $\phi\mapsto\mathrm{e}^{\mathrm{i}\alpha}\phi$。
一旦选定约定，后面的荷、生成元和粒子电荷必须全部使用同一个符号。


用两个实分量还可以看见这个流的几何意义。
前面的相位变换给出无穷小实分量变化：
$$
\delta\phi_1=\alpha\phi_2 \quad \delta\phi_2=-\alpha\phi_1
$$
把复场表达式代入诺特流并展开：
$$
j^\mu=\phi_2\partial^\mu\phi_1-\phi_1\partial^\mu\phi_2
$$
它的结构与二维平面内的角动量 $L=xp_y-yp_x$ 相同，只是这里的“坐标”是两个场分量，“动量”由场的时空导数提供。
因此 $U(1)$ 诺特荷可以形象地理解为场在内部二维平面中的广义角动量。
它测量的是内部取向的旋转，不是场在物理空间中绕某一点转动的轨道角动量。


这个表达式也通过量纲检查。
在四维时空和自然单位制中，标量场的质量量纲为 $[\phi]=1$，导数的质量量纲为 $[\partial_\mu]=1$。
因此：
$$
[j^\mu]=[\phi]+[\partial_\mu]+[\phi]=3
$$
而三维体积元的质量量纲为 $[\dd[3]{x}]=-3$，所以积分 $Q=\int j^0\dd[3]{x}$ 是无量纲的。
这与 $Q$ 作为相位旋转生成元相符，因为指数 $\mathrm{e}^{\mathrm{i}\alpha Q}$ 必须无量纲。


还可以把相位参数暂时改成任意函数 $\alpha(x)$，从拉格朗日密度的响应中直接读出流。
此时场的导数变化为：
$$
\delta(\partial_\mu\phi)=-\mathrm{i}(\partial_\mu\alpha)\phi-\mathrm{i}\alpha\partial_\mu\phi
$$
以及：
$$
\delta(\partial_\mu\phi^*)=\mathrm{i}(\partial_\mu\alpha)\phi^*+\mathrm{i}\alpha\partial_\mu\phi^*
$$
质量项仍然不变，动能项中与 $\alpha$ 本身成正比的部分也相消，最后只剩：
$$
\delta\mathcal{L}=j^\mu\partial_\mu\alpha
$$
这一步不是把整体对称性偷换成局域规范对称性。
任意 $\alpha(x)$ 只是一个数学探针：相邻时空点采用略微不同的相位旋转时，参数梯度的系数恰好测量理论对这种局域不匹配的一阶响应。
真正的局域 $U(1)$ 对称性还需要引入联络和协变导数，这里并没有作出这一额外假设。

---
## 连续性方程为什么给出守恒荷


诺特定理保证在满足运动方程的场构型上有 $\pdv*{j^\mu}{x^\mu}=0$。
为了看清每一步，直接对刚才的流求散度：
$$
\partial_\mu j^\mu=\mathrm{i}\partial_\mu(\phi^*\partial^\mu\phi)-\mathrm{i}\partial_\mu[(\partial^\mu\phi^*)\phi]
$$
分别使用乘积求导法则：
$$
\partial_\mu j^\mu=\mathrm{i}(\partial_\mu\phi^*)(\partial^\mu\phi)+\mathrm{i}\phi^*\Box\phi-\mathrm{i}(\Box\phi^*)\phi-\mathrm{i}(\partial^\mu\phi^*)(\partial_\mu\phi)
$$
第一项与最后一项完全相消，所以：
$$
\partial_\mu j^\mu=\mathrm{i}[\phi^*\Box\phi-(\Box\phi^*)\phi]
$$
复场及其复共轭分别满足 Klein–Gordon 方程：
$$
(\Box+m^2)\phi=0 \quad (\Box+m^2)\phi^*=0
$$
也就是 $\Box\phi=-m^2\phi$ 和 $\Box\phi^*=-m^2\phi^*$。
代入散度得到：
$$
\partial_\mu j^\mu=\mathrm{i}[-m^2\phi^*\phi+m^2\phi^*\phi]=0
$$
这里明确使用了运动方程，所以这是在壳守恒律。
如果场没有满足欧拉–拉格朗日方程，对称性仍然存在，但这个具体场构型的流不必满足零散度条件。


把四维方程分成时间与空间分量：
$$
\partial_t j^0+\bm{\nabla}\cdot\bm{j}=0
$$
荷密度和空间流分别为：
$$
j^0=\mathrm{i}(\phi^*\dot{\phi}-\dot{\phi}^*\phi)
$$
以及：
$$
\bm{j}=-\mathrm{i}[\phi^*\bm{\nabla}\phi-(\bm{\nabla}\phi^*)\phi]
$$
空间流的负号来自 $\pdv*{}{x_i}=-\pdv*{}{x^i}$。
这个连续性方程表示某一区域内诺特荷的变化只能通过边界通量发生，不会在区域内部凭空产生或消失。


取固定空间区域 $V$ 并定义其中的荷：
$$
Q_V(t)=\int_V j^0(t,\bm{x})\dd[3]{x}
$$
对时间求导并使用连续性方程：
$$
\dv{Q_V}{t}=-\int_V\bm{\nabla}\cdot\bm{j}\dd[3]{x}
$$
再用散度定理把体积分变成边界积分：
$$
\dv{Q_V}{t}=-\oint_{\partial V}\bm{j}\cdot\dd{\bm{S}}
$$
因此有限区域内的荷不一定保持不变，因为荷流可以穿过边界。
若取整个空间，并要求场在无穷远衰减得足够快，或者在周期盒中让相对边界的通量彼此抵消，就有：
$$
\dv{Q}{t}=0 \quad Q=\int j^0(t,\bm{x})\dd[3]{x}
$$
所以从局域流得到守恒总荷还需要合适的空间边界条件。
“散度为零”是局域陈述，“总荷不随时间变化”则是局域陈述加边界条件后的整体结论。


这个 $Q$ 首先是与内部相位旋转对应的无量纲诺特荷。
若场量子具有物理电荷单位 $q$，可以定义电荷流和电荷为：
$$
J^\mu=qj^\mu \quad Q_{\text{el}}=qQ
$$
把 $q$ 放在流中还是最后乘到荷上只是归一化约定。
为了避免把对称性生成元与具体单位混为一谈，本文先保留无量纲 $Q$，下一篇再显式写出 $Q_{\text{el}}$。

---
## 守恒荷为什么就是相位旋转的生成元


诺特定理告诉我们有一个守恒量，但还需要证明这个量确实沿着 $U(1)$ 群轨道推动场。
为此转到正则相空间语言。
复场的两个正则动量为：
$$
\pi=\pdv{\mathcal{L}}{\dot{\phi}}=\dot{\phi}^* \quad \pi^*=\pdv{\mathcal{L}}{\dot{\phi}^*}=\dot{\phi}
$$
这里 $\pi$ 与 $\phi$ 配对，$\pi^*$ 与 $\phi^*$ 配对。
注意 $\phi$ 的正则动量是 $\pdv*{\phi^*}{t}$，不是 $\pdv*{\phi}{t}$。


用正则变量改写荷密度：
$$
j^0=\mathrm{i}(\phi^*\pi^*-\pi\phi)
$$
所以总荷为：
$$
Q=\mathrm{i}\int[\phi^*(\bm{x})\pi^*(\bm{x})-\pi(\bm{x})\phi(\bm{x})]\dd[3]{x}
$$
经典场是普通数值函数，所以这里可以自由交换乘法次序。
量子化以后同一点的场算符不能任意换序，这将成为下一篇必须认真处理的问题。


等时基本泊松括号为：
$$
\{\phi(\bm{x}),\pi(\bm{y})\}=\delta^{(3)}(\bm{x}-\bm{y}) \quad \{\phi^*(\bm{x}),\pi^*(\bm{y})\}=\delta^{(3)}(\bm{x}-\bm{y})
$$
所有不配对的基本括号都为零。
先计算 $Q$ 对 $\phi$ 的作用：
$$
\{\phi(\bm{x}),Q\}=\mathrm{i}\int\{\phi(\bm{x}),-\pi(\bm{y})\phi(\bm{y})\}\dd[3]{y}
$$
使用泊松括号的乘积法则：
$$
\{\phi(\bm{x}),\pi(\bm{y})\phi(\bm{y})\}=\delta^{(3)}(\bm{x}-\bm{y})\phi(\bm{y})
$$
三维德尔塔函数完成积分后得到：
$$
\{\phi(\bm{x}),Q\}=-\mathrm{i}\phi(\bm{x})
$$
同样计算共轭场：
$$
\{\phi^*(\bm{x}),Q\}=\mathrm{i}\phi^*(\bm{x})
$$
于是无穷小正则变换 $\delta F=\alpha\{F,Q\}$ 给出：
$$
\delta\phi=-\mathrm{i}\alpha\phi \quad \delta\phi^*=\mathrm{i}\alpha\phi^*
$$
这正好重现最初的无穷小相位旋转。
所以 $Q$ 不只是碰巧守恒的积分，它就是内部 $U(1)$ 变换在经典相空间上的生成元。


若哈密顿量不显含时间，任意相空间函数的演化为 $\dv*{F}{t}=\{F,H\}+\pdv*{F}{t}$。
由于 $Q$ 没有显式时间依赖且守恒：
$$
0=\dv{Q}{t}=\{Q,H\}
$$
这个等式把三个看似不同的陈述连成同一件事：拉格朗日量具有整体 $U(1)$ 对称性，诺特荷随时间守恒，对应生成元与哈密顿量泊松对易。


量子化以后，泊松括号被对易子取代，$Q$ 也成为作用在福克空间上的算符。
但量子场是算符值分布，$j^\mu(x)$ 又含有同一点两个场算符的乘积，因而必须规定复合算符的定义和排序。
下一篇将先在有限周期盒中完成无歧义的模展开计算，再取连续极限，从而得到电荷算符并严格识别两类激发的电荷。
