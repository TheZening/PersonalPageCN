---
title: 有限群论 14 - 对偶表示、交织映射与不变量
date: 2026-08-18
weight: 14
---


给定群在向量空间 $V$ 上的表示, 群作用也会自然诱导到线性函数空间上.
但是线性函数的变换方向与向量相反.
为了使得到的作用仍然满足群乘法, 定义中必须引入群元素的逆元.


这个构造称为对偶表示.
它在特征标层面对应复共轭, 在张量积层面则把不变向量与交织映射联系起来.
因此, 对偶表示同时连接了线性代数中的对偶空间、特征标内积与不可约表示之间的张量积分解.


本文先构造对偶表示并验证群作用, 再计算它的矩阵与特征标.
随后证明不可约性在取对偶时保持不变, 最后建立对偶张量积与交织映射空间之间的自然同构.


> **阅读提示:** 对偶表示的核心不是“又造出一个新空间”, 而是让线性函数的取值与原来的群作用相容.
> 向量向前变换时, 作用在向量上的线性函数必须向相反方向变换, 这就是逆元出现的原因.

---
## 对偶空间


设 $V$ 是有限维复向量空间.
它的对偶空间定义为:
$$
V_{\mathrm{dual}}=\operatorname{Hom}_{\mathbb{C}}(V,\mathbb{C}).
$$
$V_{\mathrm{dual}}$ 的元素是从 $V$ 到 $\mathbb{C}$ 的线性函数.
若 $\varphi\in V_{\mathrm{dual}}$ 且 $v\in V$, 就把 $\varphi$ 在 $v$ 上的取值记为 $\varphi(v)$.


> **符号提示:** $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 表示从 $V$ 到 $W$ 的全部复线性映射组成的向量空间.
> 因而 $\operatorname{Hom}_{\mathbb{C}}(V,\mathbb{C})$ 正是 $V$ 上全部复线性函数的空间.


若 $v_1,\ldots,v_d$ 是 $V$ 的一组基, 则存在唯一的一组对偶基 $\varphi_1,\ldots,\varphi_d$, 满足:
$$
\varphi_a(v_b)=\delta_{ab}.
$$
因此:
$$
\dim V_{\mathrm{dual}}=\dim V.
$$

---
## 为什么对偶作用需要逆元


设:
$$
\rho:G\to\mathrm{GL}(V)
$$
是有限群 $G$ 的复表示.
要让群作用在线性函数上, 必须把变换后的线性函数仍然定义为 $V$ 上的函数.
对 $g\in G$ 与 $\varphi\in V_{\mathrm{dual}}$, 定义:
$$
\rho_{\mathrm{dual}}(g)\varphi=\varphi\circ\rho(g^{-1}).
$$
也就是说, 对每个 $v\in V$ 都有:
$$
(\rho_{\mathrm{dual}}(g)\varphi)(v)=\varphi(\rho(g^{-1})v).
$$


现在验证群乘法.
对任意 $g,h\in G$, 有:
$$
\begin{aligned}
\rho_{\mathrm{dual}}(g)\rho_{\mathrm{dual}}(h)\varphi
&=(\varphi\circ\rho(h^{-1}))\circ\rho(g^{-1})\\
&=\varphi\circ\rho(h^{-1}g^{-1})\\
&=\varphi\circ\rho((gh)^{-1})\\
&=\rho_{\mathrm{dual}}(gh)\varphi.
\end{aligned}
$$
同时:
$$
\rho_{\mathrm{dual}}(e)\varphi=\varphi\circ\rho(e)=\varphi.
$$
因此 $\rho_{\mathrm{dual}}$ 是 $G$ 在 $V_{\mathrm{dual}}$ 上的表示.


逆元在这里是必要的.
如果直接使用 $\varphi\circ\rho(g)$, 那么连续作用 $g$ 与 $h$ 会得到 $\varphi\circ\rho(hg)$, 群元素的次序与表示同态要求的 $gh$ 相反.
逆元把次序反转第二次, 从而恢复正确的群乘法次序.

---
## 对偶表示的矩阵


在 $V$ 中选定基 $v_1,\ldots,v_d$, 并在 $V_{\mathrm{dual}}$ 中使用对偶基 $\varphi_1,\ldots,\varphi_d$.
设 $\rho(g)$ 在原基下的矩阵为 $M(g)$.
按照矩阵元的定义:
$$
\rho(g)v_b=\sum_{a=1}^{d}M_{ab}(g)v_a.
$$


把对偶作用的定义作用在基向量上, 可以直接读出对偶矩阵是逆矩阵的转置:
$$
M_{\mathrm{dual}}(g)=M(g^{-1})^{\mathsf{T}}.
$$
又因为 $M(g^{-1})=M(g)^{-1}$, 因此:
$$
\boxed{M_{\mathrm{dual}}(g)=(M(g)^{-1})^{\mathsf{T}}}.
$$
这就是对偶表示也称为逆转置表示的原因.

---
## 对偶特征标


记 $V$ 的特征标为 $\chi_V$, 对偶表示的特征标为 $\chi_{V_{\mathrm{dual}}}$.
利用迹在转置下不变, 得到:
$$
\begin{aligned}
\chi_{V_{\mathrm{dual}}}(g)
&=\operatorname{tr}(M_{\mathrm{dual}}(g))\\
&=\operatorname{tr}(M(g^{-1})^{\mathsf{T}})\\
&=\operatorname{tr}(M(g^{-1}))\\
&=\chi_V(g^{-1}).
\end{aligned}
$$
有限群的复表示满足:
$$
\chi_V(g^{-1})=\bar{\chi_V(g)}.
$$
所以:
$$
\boxed{\chi_{V_{\mathrm{dual}}}(g)=\chi_V(g^{-1})=\bar{\chi_V(g)}}.
$$
取对偶在特征标空间上对应逐点复共轭.

---
## 双重对偶回到原表示


有限维向量空间存在自然映射:
$$
\iota_V:V\to(V_{\mathrm{dual}})_{\mathrm{dual}},
$$
其定义为:
$$
(\iota_V(v))(\varphi)=\varphi(v).
$$
这个映射是线性同构.
把对偶作用的定义使用两次, 可得 $\iota_V(\rho(g)v)=(\rho_{\mathrm{dual}})_{\mathrm{dual}}(g)\iota_V(v)$.
因此 $\iota_V$ 不仅是向量空间同构, 也是表示同构, 从而:
$$
\boxed{(V_{\mathrm{dual}})_{\mathrm{dual}}\cong V}.
$$

---
## 对偶保持不可约性


先设 $V$ 是不可约表示.
令 $U\subseteq V_{\mathrm{dual}}$ 是一个不变子空间, 并定义它在 $V$ 中的零化子:
$$
U_0=\{v\in V\mid \varphi(v)=0,\quad \forall\varphi\in U\}.
$$
因为 $U$ 在对偶作用下不变, 等式 $\varphi(\rho(g)v)=(\rho_{\mathrm{dual}}(g^{-1})\varphi)(v)$ 说明 $U_0$ 也在原作用下不变.


有限维线性代数给出:
$$
\dim U_0=\dim V-\dim U.
$$
若 $U$ 是 $V_{\mathrm{dual}}$ 的非零真子空间, 那么 $U_0$ 也是 $V$ 的非零真子空间, 这与 $V$ 不可约矛盾.
所以 $V_{\mathrm{dual}}$ 不可约.


反过来, 若 $V_{\mathrm{dual}}$ 不可约, 则它的对偶也不可约.
结合双重对偶同构可知 $V$ 不可约.
因此:
$$
\boxed{V\text{ 不可约}\quad\leftrightarrow\quad V_{\mathrm{dual}}\text{ 不可约}}.
$$

---
## 不可约表示上的对偶配对


设 $V_1,\ldots,V_k$ 是全部不可约复表示的一组代表.
由于对偶保持不可约性, 对每个 $i$ 都存在唯一指标 $i_{\mathrm{dual}}$, 使得:
$$
(V_i)_{\mathrm{dual}}\cong V_{i_{\mathrm{dual}}}.
$$
双重对偶同构给出:
$$
(i_{\mathrm{dual}})_{\mathrm{dual}}=i.
$$
所以取对偶在不可约表示的同构类集合上给出一个对合.


> **术语提示:** 对合是做两次就回到原处的操作.
> 这里有些不可约表示与自身对偶, 其余不可约表示则两两配成对偶的一对.


对应的不可约特征标满足:
$$
\chi_{i_{\mathrm{dual}}}(g)=\chi_i(g^{-1})=\bar{\chi_i(g)}.
$$
特别地, $V_i$ 与自身对偶同构当且仅当:
$$
\chi_i(g)=\bar{\chi_i(g)},\quad \forall g\in G.
$$
也就是说:
$$
\boxed{V_i\cong(V_i)_{\mathrm{dual}}\quad\leftrightarrow\quad \chi_i\text{ 是实值类函数}}.
$$
这里的实值条件只判断表示是否与自身对偶同构, 本身还没有区分这种同构所携带的双线性形式类型.

---
## 从对偶张量积到线性映射空间


设 $V$ 与 $W$ 是有限维复向量空间.
定义线性映射:
$$
\Theta:V_{\mathrm{dual}}\otimes W\to\operatorname{Hom}_{\mathbb{C}}(V,W),
$$
使它在纯张量上的作用为:
$$
(\Theta(\varphi\otimes w))(v)=\varphi(v)w.
$$


在一组基及其对偶基下, $\Theta(\varphi_a\otimes w_b)$ 正是把第 $a$ 个基向量送到第 $b$ 个基向量的基本线性映射.
这些映射构成线性映射空间的一组基, 因此 $\Theta$ 是线性同构:
$$
\boxed{V_{\mathrm{dual}}\otimes W\cong\operatorname{Hom}_{\mathbb{C}}(V,W)}.
$$

---
## 这个同构与群作用相容


现在设 $V$ 与 $W$ 都是 $G$-表示, 群作用分别记为 $\rho$ 与 $\sigma$.
在 $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 上定义群作用:
$$
(g\cdot T)=\sigma(g)T\rho(g^{-1}).
$$
上一篇对张量积表示的定义给出:
$$
g\cdot(\varphi\otimes w)=\rho_{\mathrm{dual}}(g)\varphi\otimes\sigma(g)w.
$$


把两边作用在纯张量 $\varphi\otimes w$ 和向量 $v$ 上, 都得到 $\varphi(\rho(g^{-1})v)\sigma(g)w$.
所以 $\Theta$ 与群作用交换.
因此它是表示同构:
$$
\boxed{V_{\mathrm{dual}}\otimes W\cong\operatorname{Hom}_{\mathbb{C}}(V,W)}.
$$

---
## 不变向量就是交织映射


对任意 $G$-表示 $X$, 定义它的不变向量空间为:
$$
X_{\mathrm{inv}}=\{x\in X\mid g\cdot x=x,\quad \forall g\in G\}.
$$
在线性映射空间上, $T$ 是不变向量当且仅当:
$$
\sigma(g)T\rho(g^{-1})=T,
$$
即当且仅当:
$$
\sigma(g)T=T\rho(g).
$$
这正是 $T$ 为交织映射的条件.
所以:
$$
(\operatorname{Hom}_{\mathbb{C}}(V,W))_{\mathrm{inv}}=\operatorname{Hom}_G(V,W).
$$
结合 $\Theta$ 的表示同构得到:
$$
\boxed{(V_{\mathrm{dual}}\otimes W)_{\mathrm{inv}}\cong\operatorname{Hom}_G(V,W)}.
$$


任意表示中平凡表示的重数等于其不变向量空间的维数.
原因很直接: 每个平凡直和分量贡献一个不变方向; 非平凡不可约分量若含有非零不变向量, 这个向量张成的直线就会成为平凡子表示, 与不可约性矛盾.
因此, $V_{\mathrm{dual}}\otimes W$ 中平凡表示的重数为:
$$
\boxed{\dim\operatorname{Hom}_G(V,W)}.
$$
这个关系把张量积分解问题直接转化为交织映射空间的维数问题.

---
## 不可约情形与正交关系


取 $V=V_i$ 与 $W=V_j$ 为不可约表示.
Schur 引理给出:
$$
\dim\operatorname{Hom}_G(V_i,V_j)=\delta_{ij}.
$$
所以 $(V_i)_{\mathrm{dual}}\otimes V_j$ 中平凡表示的重数为:
$$
\delta_{ij}.
$$


若把平凡表示记为 $V_1$, 并沿用上一篇的张量积分解系数, 这个结论写成:
$$
\boxed{N_{i_{\mathrm{dual}}j,1}=\delta_{ij}}.
$$
特征标重数公式也给出同一结果:
$$
\begin{aligned}
N_{i_{\mathrm{dual}}j,1}
&=\langle\chi_{i_{\mathrm{dual}}}\chi_j,\chi_1\rangle_G\\
&=\frac{1}{|G|}\sum_{g\in G}\chi_i(g^{-1})\chi_j(g)\\
&=\langle\chi_i,\chi_j\rangle_G\\
&=\delta_{ij}.
\end{aligned}
$$
因此不可约特征标的正交关系也可以理解为对偶张量积中平凡表示的重数公式.

---
## 逻辑总结


对偶表示定义在 $V_{\mathrm{dual}}=\operatorname{Hom}_{\mathbb{C}}(V,\mathbb{C})$ 上, 其群作用为:
$$
(\rho_{\mathrm{dual}}(g)\varphi)(v)=\varphi(\rho(g^{-1})v).
$$
逆元保证这个作用保持群乘法的正确次序.
在对偶基下, 表示矩阵满足:
$$
M_{\mathrm{dual}}(g)=(M(g)^{-1})^{\mathsf{T}},
$$
因而对偶特征标为:
$$
\boxed{\chi_{V_{\mathrm{dual}}}(g)=\chi_V(g^{-1})=\bar{\chi_V(g)}}.
$$
双重对偶自然同构于原表示, 并且取对偶保持不可约性:
$$
(V_{\mathrm{dual}})_{\mathrm{dual}}\cong V.
$$
对偶张量积与线性映射空间之间存在自然表示同构:
$$
V_{\mathrm{dual}}\otimes W\cong\operatorname{Hom}_{\mathbb{C}}(V,W).
$$
取不变向量后得到:
$$
\boxed{(V_{\mathrm{dual}}\otimes W)_{\mathrm{inv}}\cong\operatorname{Hom}_G(V,W)}.
$$
在不可约情形下, Schur 引理进一步给出:
$$
\boxed{N_{i_{\mathrm{dual}}j,1}=\delta_{ij}}.
$$
所以对偶、复共轭、交织映射与不可约特征标正交关系是同一个结构的不同表达.
