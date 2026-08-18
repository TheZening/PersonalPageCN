---
title: 有限群论 15 - 直积群及其不可约表示
date: 2026-08-18
weight: 15
---


两个群可以组合成一个直积群.
直积群中的两个因子彼此独立地进行群运算, 因而两个因子的表示也可以通过张量积组合成直积群的表示.


这里需要区分两种不同的构造.
同一个群的两个表示做张量积以后, 通常还需要继续分解为不可约表示.
两个不同群的不可约表示组成直积群表示以后, 得到的表示则直接不可约.


本文先定义直积群及其外张量积表示, 再计算相应的维数与特征标.
随后利用特征标正交关系证明外张量积的不可约性, 并用不可约表示维数平方和证明这种构造已经给出直积群的全部不可约复表示.


> **阅读提示:** 直积群描述两套彼此独立的对称操作.
> $G$ 只作用在第一个张量因子上, $H$ 只作用在第二个张量因子上; 因而 $G\times H$ 的不可约表示由两个因子的不可约表示分别选一个再组合而成.

---
## 直积群的定义


设 $G$ 与 $H$ 是两个有限群.
它们的笛卡尔积为 $G\times H=\{(g,h)\mid g\in G,\quad h\in H\}$.
在这个集合上逐分量定义乘法 $(g_1,h_1)(g_2,h_2)=(g_1g_2,h_1h_2)$.


结合律由两个因子的结合律逐分量得到.
单位元为 $(e_G,e_H)$, 逆元为 $(g,h)^{-1}=(g^{-1},h^{-1})$.
所以 $G\times H$ 是群, 称为 $G$ 与 $H$ 的**直积群**.
它的阶为 $|G\times H|=|G||H|$.

---
## 两个因子怎样嵌入直积群


定义子集 $G_0=G\times\{e_H\},\quad H_0=\{e_G\}\times H$.
映射 $g\mapsto(g,e_H)$ 与 $h\mapsto(e_G,h)$ 分别给出 $G_0\cong G$, 以及 $H_0\cong H$.


这两个子群中的元素彼此交换 $(g,e_H)(e_G,h)=(g,h)=(e_G,h)(g,e_H)$.
而且任意直积群元素都唯一分解为 $(g,h)=(g,e_H)(e_G,h)$.
对直积群中的元素作共轭仍不会把 $G_0$ 与 $H_0$ 混合, 所以它们都是正规子群.
因此直积群可以看作两套彼此交换且交集只有单位元的群操作并排组成的整体.

---
## 外张量积表示


设 $\rho:G\to\mathrm{GL}(V),\quad \sigma:H\to\mathrm{GL}(W)$.
分别是 $G$ 与 $H$ 的有限维复表示.
在张量积空间 $V\otimes W$ 上定义 $(\rho\boxtimes\sigma)(g,h)=\rho(g)\otimes\sigma(h)$.
符号 $\boxtimes$ 用来强调两个张量因子来自两个不同的群.
相应的表示空间记为 $V\boxtimes W$.


张量积线性映射的乘法公式保证这个定义保持群乘法.
单位元满足 $(\rho\boxtimes\sigma)(e_G,e_H)=\mathbb{1}_V\otimes\mathbb{1}_W=\mathbb{1}_{V\otimes W}$.
所以 $\rho\boxtimes\sigma$ 是 $G\times H$ 的表示, 称为 $\rho$ 与 $\sigma$ 的**外张量积表示**.

---
## 外张量积的维数与特征标


外张量积的底层向量空间是 $V\otimes W$, 所以 $\dim(V\boxtimes W)=(\dim V)(\dim W)$.
记 $V$ 与 $W$ 的特征标分别为 $\chi_V$ 与 $\chi_W$.
利用张量积线性映射的迹公式, 得到:
$$
\begin{aligned}
\chi_{V\boxtimes W}(g,h)
&=\operatorname{tr}(\rho(g)\otimes\sigma(h))\\
&=\operatorname{tr}(\rho(g))\operatorname{tr}(\sigma(h))\\
&=\chi_V(g)\chi_W(h).
\end{aligned}
$$
因此, $\chi_{V\boxtimes W}(g,h)=\chi_V(g)\chi_W(h)$.
外张量积特征标是两个因子特征标在不同变量上的乘积.

---
## 直积群上的类函数内积


设 $f_1,f_2$ 是 $G$ 上的类函数, $q_1,q_2$ 是 $H$ 上的类函数.
在 $G\times H$ 上定义乘积类函数 $(f\boxtimes q)(g,h)=f(g)q(h)$.
双重求和可以先分别对 $g$ 与 $h$ 求和, 所以乘积类函数的内积会分解为两个因子上的内积乘积 $\langle f_1\boxtimes q_1,f_2\boxtimes q_2\rangle_{G\times H}=\langle f_1,f_2\rangle_G\langle q_1,q_2\rangle_H$.

---
## 不可约表示的外张量积仍不可约


设 $V_i$ 是 $G$ 的不可约复表示, 特征标为 $\chi_i$.
设 $W_j$ 是 $H$ 的不可约复表示, 特征标为 $\psi_j$.
外张量积 $V_i\boxtimes W_j$ 的特征标为 $\chi_i\boxtimes\psi_j$.
计算它的自内积:
$$
\begin{aligned}
\langle\chi_i\boxtimes\psi_j,\chi_i\boxtimes\psi_j\rangle_{G\times H}
&=\langle\chi_i,\chi_i\rangle_G\langle\psi_j,\psi_j\rangle_H\\
&=1.
\end{aligned}
$$
一个表示不可约当且仅当它的特征标自内积等于 $1$.
因此, $V_i\boxtimes W_j\text{ 是 }G\times H\text{ 的不可约表示}$.

---
## 不同外张量积彼此不等价


再取 $G$ 的不可约表示 $V_l$ 与 $H$ 的不可约表示 $W_m$.
对应特征标的内积为:
$$
\begin{aligned}
\langle\chi_i\boxtimes\psi_j,\chi_l\boxtimes\psi_m\rangle_{G\times H}
&=\langle\chi_i,\chi_l\rangle_G\langle\psi_j,\psi_m\rangle_H\\
&=\delta_{il}\delta_{jm}.
\end{aligned}
$$
所以, $V_i\boxtimes W_j\cong V_l\boxtimes W_m$.
当且仅当 $i=l,\quad j=m$.
因此不同的不可约表示对 $(V_i,W_j)$ 给出彼此不等价的直积群不可约表示.

---
## 维数平方和证明完备性


设 $G$ 的全部不可约复表示为 $V_1,\ldots,V_r$, 并记 $d_i=\dim V_i$.
设 $H$ 的全部不可约复表示为 $W_1,\ldots,W_s$, 并记 $e_j=\dim W_j$.
前面已经构造出 $rs$ 个彼此不等价的 $G\times H$ 不可约表示 $V_i\boxtimes W_j$, 其维数为 $\dim(V_i\boxtimes W_j)=d_ie_j$.


计算这些表示维数的平方和:
$$
\begin{aligned}
\sum_{i=1}^{r}\sum_{j=1}^{s}(d_ie_j)^2
&=\left(\sum_{i=1}^{r}d_i^2\right)\left(\sum_{j=1}^{s}e_j^2\right)\\
&=|G||H|\\
&=|G\times H|.
\end{aligned}
$$
有限群全部不可约复表示的维数平方和等于群阶.
当前已经得到的一族不可约表示的维数平方和已经达到 $|G\times H|$.
如果还存在其他不等价不可约表示, 把它们的正维数平方加入以后就会超过群阶, 产生矛盾.
所以不存在遗漏的不可约表示.


因此得到直积群不可约表示分类定理 $G\times H\text{ 的每个不可约复表示都唯一同构于某个 }V_i\boxtimes W_j$.

---
## 共轭类也按直积分解


直积群中的共轭作用逐分量进行 $(x,y)(g,h)(x,y)^{-1}=(xgx^{-1},yhy^{-1})$.
因此 $(g_1,h_1)$ 与 $(g_2,h_2)$ 在 $G\times H$ 中共轭, 当且仅当 $g_1$ 与 $g_2$ 在 $G$ 中共轭, 并且 $h_1$ 与 $h_2$ 在 $H$ 中共轭.


若 $C_a$ 是 $G$ 的共轭类, $D_b$ 是 $H$ 的共轭类, 那么 $C_a\times D_b$ 是 $G\times H$ 的共轭类.
全部直积群共轭类都唯一具有这种形式.


所以若 $G$ 有 $r$ 个共轭类, $H$ 有 $s$ 个共轭类, 则 $G\times H$ 有 $rs$.
个共轭类.
这与不可约表示分类得到的 $rs$ 个不可约复表示完全一致.

---
## 直积群的特征标表


分别选择 $G$ 与 $H$ 的共轭类代表元 $c_1,\ldots,c_r$, 以及 $u_1,\ldots,u_s$.
那么 $G\times H$ 的共轭类代表元可以选为 $(c_a,u_b),\quad 1\leq a\leq r,\quad 1\leq b\leq s$.


$G\times H$ 的不可约特征标由指标对 $(i,j)$ 标记, 并满足 $(\chi_i\boxtimes\psi_j)(c_a,u_b)=\chi_i(c_a)\psi_j(u_b)$.
所以直积群特征标表的每个矩阵元都是两个因子特征标表相应矩阵元的乘积.


若把 $G$ 与 $H$ 的特征标表分别记为 $X_G$ 与 $X_H$, 在配对指标的排列方式确定以后, 直积群的特征标表为 $X_{G\times H}=X_G\otimes X_H$.
右侧是两个矩阵的 Kronecker 积.
因此不需要重新求解直积群的特征标正交关系, 两个因子的特征标表已经完整确定了直积群的特征标表.


> **线性代数提示:** 矩阵的 Kronecker 积就是矩阵形式的张量积.
> 它把 $X_G$ 的每个矩阵元替换成这个数乘以整个矩阵 $X_H$.

---
## 与同一个群上的张量积的区别


设 $V$ 与 $W$ 都是同一个群 $G$ 的表示.
它们的张量积表示定义为 $(\rho\otimes\sigma)(g)=\rho(g)\otimes\sigma(g)$.
这里同一个元素 $g$ 同时作用在两个张量因子上.


外张量积则首先是 $G\times G$ 的表示 $(\rho\boxtimes\sigma)(g_1,g_2)=\rho(g_1)\otimes\sigma(g_2)$.
定义对角子群 $\Delta_G=\{(g,g)\mid g\in G\}\subseteq G\times G$.
把外张量积的作用限制到对角子群, 就得到 $(\rho\boxtimes\sigma)(g,g)=\rho(g)\otimes\sigma(g)$.
因此同一个群上的张量积表示可以理解为外张量积表示在对角子群上的限制.


外张量积 $V_i\boxtimes V_j$ 作为 $G\times G$ 的表示不可约, 但限制到对角子群以后可能分解.
这正是同一个群的两个不可约表示做张量积后通常不再不可约的结构原因.

---
## 多个群的直积


直积构造可以反复进行.
从每个有限群 $G_a$ 中选择一个不可约复表示 $V_{i_a}$, 它们的外张量积 $V_{i_1}\boxtimes\cdots\boxtimes V_{i_n}$ 是直积群 $G_1\times\cdots\times G_n$ 的不可约复表示.
反复使用两个群的分类定理可知, 直积群的每个不可约复表示都唯一由这种外张量积给出.


相应的维数与特征标分别满足:
$$
\dim(V_{i_1}\boxtimes\cdots\boxtimes V_{i_n})=\prod_{a=1}^{n}\dim V_{i_a},
$$
以及 $\chi_{i_1,\ldots,i_n}(g_1,\ldots,g_n)=\prod_{a=1}^{n}\chi_{i_a}(g_a)$.

---
## 逻辑总结


直积群 $G\times H$ 的乘法逐分量定义 $(g_1,h_1)(g_2,h_2)=(g_1g_2,h_1h_2)$.
给定 $G$ 的表示 $V$ 与 $H$ 的表示 $W$, 外张量积表示定义为 $(\rho\boxtimes\sigma)(g,h)=\rho(g)\otimes\sigma(h)$.
它的维数与特征标满足 $\dim(V\boxtimes W)=(\dim V)(\dim W)$, 以及 $\chi_{V\boxtimes W}(g,h)=\chi_V(g)\chi_W(h)$.
乘积类函数的内积可以分离为两个因子的内积乘积 $\langle f_1\boxtimes q_1,f_2\boxtimes q_2\rangle_{G\times H}=\langle f_1,f_2\rangle_G\langle q_1,q_2\rangle_H$.
因此不可约表示的外张量积仍然不可约, 而且不同表示对给出彼此不等价的表示.
维数平方和进一步证明这些表示已经穷尽全部可能 $\{V_i\boxtimes W_j\mid 1\leq i\leq r,\quad 1\leq j\leq s\}$.
这组表示是 $G\times H$ 的全部不可约复表示的一组代表.
直积群的共轭类同样是两个因子共轭类的直积, 特征标表则是两个因子特征标表的 Kronecker 积.
同一个群上的张量积可以看作外张量积限制到对角子群的结果, 因而它与直积群上的外张量积具有不同的不可约性行为.
