---
title: 有限群论 05 - 交织映射与 Schur 引理
date: 2026-08-16
weight: 5
---


上一篇用不变子空间区分可约表示与不可约表示.
不可约表示没有可以继续分离出来的非平凡部分, 因而是复表示分解中的基本成分.
但是只知道定义还不够.
如果给定两个不可约表示, 它们之间能够存在线性映射吗?
如果一个线性变换与某个不可约表示中的全部群作用都交换, 这个线性变换又能有多复杂?


回答这两个问题的关键是 Schur 引理.
它的证明并不长, 但集中体现了表示论的一条基本思路: 把线性映射的核与像变成不变子空间, 再利用不可约性排除中间情形.
本文先定义一般的交织映射, 证明它的核与像具有不变性, 然后逐步证明 Schur 引理的两个部分.
最后通过可约与不可约表示的具体矩阵计算, 解释这个引理究竟限制了什么.
---
## 一般的交织映射


设 $\rho:G\to\mathrm{GL}(V)$ 与 $\sigma:G\to\mathrm{GL}(W)$ 是域 $\mathbb{F}$ 上的两个表示.
线性映射 $T:V\to W$ 若满足:
$$
T\rho(g)=\sigma(g)T,\quad \forall g\in G,
$$
就称为从 $\rho$ 到 $\sigma$ 的**交织映射**, 或 $G$-同态.


这个等式表示先让 $g$ 作用在 $V$ 上, 再施加 $T$, 与先施加 $T$, 再让同一个 $g$ 作用在 $W$ 上, 得到的结果完全相同.
也就是说, 下图中的两条路径作用在任意 $v\in V$ 上都有相同结果:
$$
\begin{array}{ccc}
V&\xrightarrow{\rho(g)}&V\\
\downarrow T&&\downarrow T\\
W&\xrightarrow{\sigma(g)}&W.
\end{array}
$$
交织映射保持的不是普通向量空间结构而已, 它还保持群作用.


上一篇讨论等价表示时, 要求交织映射 $T$ 是向量空间同构.
现在不再预先要求 $T$ 可逆.
零映射总是交织映射, 非零交织映射也可能有非零的核, 或者不能覆盖整个 $W$.
Schur 引理要说明: 当 $V$ 与 $W$ 都不可约时, 这些中间情形全部消失.


从 $\rho$ 到 $\sigma$ 的所有交织映射组成向量空间:
$$
\operatorname{Hom}_G(V,W) =\{T\in\operatorname{Hom}_{\mathbb{F}}(V,W)\mid T\rho(g)=\sigma(g)T, \forall g\in G\}.
$$
这里的下标 $G$ 表示这些线性映射还必须与 $G$ 的作用相容.
若 $T_1,T_2\in\operatorname{Hom}_G(V,W)$ 且 $a,b\in\mathbb{F}$, 则:
$$
(aT_1+bT_2)\rho(g) =a\sigma(g)T_1+b\sigma(g)T_2 =\sigma(g)(aT_1+bT_2),
$$
所以 $aT_1+bT_2$ 仍是交织映射.
---
## 交织映射的核是不变子空间


取 $T\in\operatorname{Hom}_G(V,W)$.
首先证明 $\ker T$ 是 $V$ 的 $G$-不变子空间.
任取 $v\in\ker T$, 则 $Tv=0$.
对任意 $g\in G$, 交织关系给出:
$$
T(\rho(g)v) =\sigma(g)Tv =\sigma(g)0 =0.
$$
因此 $\rho(g)v\in\ker T$.
这对每个 $v\in\ker T$ 和每个 $g\in G$ 都成立, 所以:
$$
\rho(g)(\ker T)\subseteq\ker T, \quad \forall g\in G.
$$
也就是说, $\ker T$ 是 $V$ 的不变子空间.
这个结论的含义很直接.
若一个向量被 $T$ 送到零, 那么先让群作用在这个向量上, 再施加 $T$, 仍然会得到零.
交织关系保证群作用无法把核中的向量带到核外.
---
## 交织映射的像是不变子空间


接着证明 $\operatorname{im}T$ 是 $W$ 的 $G$-不变子空间.
任取 $w\in\operatorname{im}T$, 按照像的定义, 存在 $v\in V$ 使 $w=Tv$.
对任意 $g\in G$, 有:
$$
\sigma(g)w =\sigma(g)Tv =T\rho(g)v.
$$
由于 $\rho(g)v\in V$, 最右边的向量属于 $\operatorname{im}T$.
所以:
$$
\sigma(g)(\operatorname{im}T) \subseteq\operatorname{im}T, \quad \forall g\in G.
$$
因此 $\operatorname{im}T$ 是 $W$ 的不变子空间.


核位于定义域 $V$ 中, 它记录 $T$ 丢失了哪些向量.
像位于目标空间 $W$ 中, 它记录 $T$ 实际到达了哪些向量.
交织关系使这两个普通线性代数对象同时成为表示的子结构.
这正是 Schur 引理能够使用不可约性的原因.
---
## Schur 引理的第一部分


设 $V$ 与 $W$ 分别承载不可约表示 $\rho$ 与 $\sigma$, 并且 $T\in\operatorname{Hom}_G(V,W)$.
由于 $V$ 不可约, 它的不变子空间只有 $\{0\}$ 与 $V$.
而 $\ker T$ 是 $V$ 的不变子空间, 所以只有两种可能:
$$
\ker T=\{0\} \quad\text{或}\quad \ker T=V.
$$
若 $T\neq0$, 就不可能有 $\ker T=V$, 因为这将意味着 $T$ 是零映射.
因此非零交织映射必满足 $\ker T=\{0\}$, 从而 $T$ 是单射.


另一方面, $\operatorname{im}T$ 是 $W$ 的不变子空间.
由于 $W$ 不可约:
$$
\operatorname{im}T=\{0\} \quad\text{或}\quad \operatorname{im}T=W.
$$
当 $T\neq0$ 时, $\operatorname{im}T\neq\{0\}$, 所以只能有 $\operatorname{im}T=W$.
因此 $T$ 是满射.


把两个结论合在一起, 得到 Schur 引理的第一部分:
**设 $V$ 与 $W$ 是不可约表示.**
**任意交织映射 $T:V\to W$ 或者是零映射, 或者是表示同构.**
这里的逻辑不是先假设 $V$ 与 $W$ 等价, 再寻找可逆映射.
不可约性本身迫使任意非零交织映射自动成为可逆映射.
因此, 若 $V$ 与 $W$ 是两个不等价的不可约表示, 就不可能存在非零交织映射:
$$
V\not\cong W \quad\Rightarrow\quad \operatorname{Hom}_G(V,W)=\{0\}.
$$
还可以立刻得到一个维数限制.
若两个有限维不可约表示之间存在非零交织映射, 这个映射是向量空间同构, 因而:
$$
\dim V=\dim W.
$$
所以维数不同的不可约表示一定不等价, 它们之间也一定没有非零交织映射.
---
## 自交织映射与对易代数


令 $W=V$ 且 $\sigma=\rho$.
此时交织条件变为:
$$
T\rho(g)=\rho(g)T, \quad \forall g\in G.
$$
这样的 $T$ 称为表示 $V$ 的**自交织映射**.
所有自交织映射组成:
$$
\operatorname{End}_G(V) =\{T\in\operatorname{End}_{\mathbb{F}}(V)\mid T\rho(g)=\rho(g)T, \forall g\in G\}.
$$
这个集合不仅可以相加和作数乘, 还可以复合, 因而是一个代数.
它也称为表示 $\rho(G)$ 的**对易代数**.
若 $V$ 不可约, Schur 引理第一部分说明 $\operatorname{End}_G(V)$ 中每个非零元素都可逆.
换句话说, $\operatorname{End}_G(V)$ 是一个除代数.
但这还没有说明其中只有数量变换 $\lambda \mathbb{1}_V$.
要得到更强的结论, 必须使用底域的性质.
---
## 复数域上的 Schur 引理


现在设 $V$ 是有限维复向量空间, $\rho:G\to\mathrm{GL}(V)$ 是不可约表示, 并取 $T\in\operatorname{End}_G(V)$.
因为 $V$ 是非零有限维复向量空间, $T$ 的特征多项式在 $\mathbb{C}$ 中至少有一个根.
因此 $T$ 至少有一个特征值 $\lambda\in\mathbb{C}$, 并存在非零向量 $v\in V$ 使:
$$
Tv=\lambda v.
$$
于是 $(T-\lambda \mathbb{1}_V)v=0$, 所以 $T-\lambda \mathbb{1}_V$ 不是单射, 从而不可能是可逆映射.


另一方面, $T-\lambda \mathbb{1}_V$ 仍是自交织映射.
因为对任意 $g\in G$:
$$
\begin{aligned}
(T-\lambda \mathbb{1}_V)\rho(g)
&=T\rho(g)-\lambda\rho(g)\\
&=\rho(g)T-\lambda\rho(g)\\
&=\rho(g)(T-\lambda \mathbb{1}_V).
\end{aligned}
$$
Schur 引理第一部分说明, 不可约表示的自交织映射若非零就一定可逆.
但 $T-\lambda \mathbb{1}_V$ 已经被证明不可逆, 所以它只能是零映射:
$$
T-\lambda \mathbb{1}_V=0.
$$
因此:
$$
T=\lambda \mathbb{1}_V.
$$
这就是复数域上 Schur 引理的第二部分:
**有限维不可约复表示的每个自交织映射都是恒等映射的数量倍数.**
等价地:
$$
\operatorname{End}_G(V)=\mathbb{C}\mathbb{1}_V.
$$
这里并不是说与某一个表示矩阵对易的矩阵都必须是数量矩阵.
条件要求 $T$ 与每一个 $\rho(g)$ 同时对易.
不可约性意味着这些群作用共同留下的不变结构已经足够少, 最终只允许数量变换与全部作用相容.
---
## 证明中各个条件用在何处


Schur 引理经常出现在有限群复表示的语境中, 但证明的不同部分实际使用了不同条件.


第一部分只使用交织映射的核与像具有不变性, 再使用 $V$ 与 $W$ 的不可约性.
它不要求群 $G$ 有限, 也不要求底域是 $\mathbb{C}$.
对任意群和任意域, 两个不可约表示之间的非零交织映射都是同构.


第二部分还要从自交织映射 $T$ 中选出一个特征值 $\lambda$.
有限维保证可以使用特征多项式, 复数域的代数封闭性保证特征多项式存在根.
同一个证明对任意代数闭域上的有限维不可约表示都成立.


有限群条件并没有直接进入 Schur 引理的证明.
它在上一篇的 Maschke 定理中发挥作用, 保证有限群的复表示能够分解成不可约表示的直和.
Maschke 定理负责保证不可约表示足够多并且能够作为分解成分, Schur 引理则负责控制这些成分之间的交织映射.
---
## 为什么不能随意去掉复数域条件


在实数域上, 不可约表示的自交织映射不一定都是实数量矩阵.
考虑循环群 $C_3=\langle r\mid r^3=e\rangle$ 在 $\mathbb{R}^2$ 上的表示:
$$
\rho(r)=\mqty[
-\frac{1}{2}&-\frac{\sqrt{3}}{2}\\
\frac{\sqrt{3}}{2}&-\frac{1}{2}
].
$$
这个矩阵表示平面上旋转 $120$ 度.
实平面中没有一条直线在 $120$ 度旋转下保持不变, 所以这个二维实表示不可约.
再取旋转 $90$ 度的矩阵:
$$
J=\mqty[
0&-1\\
1&0
].
$$
平面旋转彼此交换, 因此 $J\rho(r)=\rho(r)J$.
由于 $C_3$ 由 $r$ 生成, $J$ 与每个 $\rho(g)$ 都交换, 所以 $J\in\operatorname{End}_{C_3}(\mathbb{R}^2)$.
但是 $J$ 不是实数量矩阵.
这并不违反 Schur 引理第一部分.
$J$ 非零而且确实可逆.
失败的是第二部分中“自交织映射必为数量矩阵”的复数版本.
$J$ 的特征多项式是 $x^2+1$, 它在 $\mathbb{R}$ 上没有根, 所以前面的特征值论证无法进行.


回到上一篇的二维复表示.
令 $C_3=\langle r\mid r^3=e\rangle$, $\omega=\mathrm{e}^{2\pi\mathrm{i}/3}$, 并取:
$$
D(r)=\mqty[
\omega&0\\
0&\omega^{-1}
].
$$
设:
$$
X=\mqty[
a&b\\
c&d
].
$$
因为 $r$ 生成 $C_3$, $X$ 是自交织映射当且仅当 $XD(r)=D(r)X$.
直接相乘得到:
$$
XD(r)=\mqty[
a\omega&b\omega^{-1}\\
c\omega&d\omega^{-1}
],
\quad
D(r)X=\mqty[
\omega a&\omega b\\
\omega^{-1}c&\omega^{-1}d
].
$$
由于 $\omega\neq\omega^{-1}$, 对角线外的等式迫使 $b=c=0$.
但 $a$ 与 $d$ 可以独立选择, 所以:
$$
\operatorname{End}_{C_3}(\mathbb{C}^2)
=\left\{
\mqty[
a&0\\
0&d
]
\mid a,d\in\mathbb{C}
\right\}.
$$
这里存在许多不是数量矩阵的自交织映射.
例如 $\operatorname{diag}(1,0)$ 与 $\operatorname{diag}(0,1)$ 都与 $D(r)$ 对易.
它们分别投影到两个坐标轴, 而两个坐标轴正是这个表示的非平凡不变子空间.
因此这个表示可约, 实际上是两个一维表示的直和.


这个例子也说明不可约性为什么不可缺少.
当表示可以分块时, 在不同不可约分量上乘以不同常数仍然会与群作用交换.
只有在单个不可约分量内部, Schur 引理才迫使自交织映射成为同一个数量乘法.
---
## 用对易代数判断不可约性


Schur 引理给出:
$$
V\text{ 不可约} \quad\Rightarrow\quad \operatorname{End}_G(V)=\mathbb{C}\mathbb{1}_V.
$$
对于有限群的有限维复表示, 反方向也成立.
原因是 Maschke 定理保证每个可约表示都有不变补空间.
具体地说, 若 $V$ 可约, 就存在非零真不变子空间 $W\subsetneq V$.
Maschke 定理给出另一个不变子空间 $U$, 使:
$$
V=W\oplus U.
$$
定义沿 $U$ 投影到 $W$ 的线性映射:
$$
P(w+u)=w, \quad w\in W,\quad u\in U.
$$
由于 $W$ 与 $U$ 都在群作用下保持不变, 对任意 $g\in G$ 有:
$$
\begin{aligned}
P\rho(g)(w+u)
&=P(\rho(g)w+\rho(g)u)\\
&=\rho(g)w\\
&=\rho(g)P(w+u).
\end{aligned}
$$
所以 $P\in\operatorname{End}_G(V)$.
但 $P$ 在 $W$ 上等于 $\mathbb{1}_W$, 在 $U$ 上等于零, 因而不可能是 $\mathbb{1}_V$ 的数量倍数.
因此:
$$
\operatorname{End}_G(V)=\mathbb{C}\mathbb{1}_V \quad\Rightarrow\quad V\text{ 不可约}.
$$
最终得到有限群复表示的判据:
$$
V\text{ 不可约} \quad\Leftrightarrow\quad \operatorname{End}_G(V)=\mathbb{C}\mathbb{1}_V.
$$
反方向使用了 Maschke 定理, 所以不能脱离完全可约的条件随意推广.
