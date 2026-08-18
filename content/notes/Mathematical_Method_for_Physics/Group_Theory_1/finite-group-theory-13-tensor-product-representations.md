---
title: 有限群论 13 - 张量积表示与不可约分解
date: 2026-08-18
weight: 13
---


直和把两个表示并列放在一起, 张量积则把两个表示的作用组合成一个新的作用.
这两种运算反映了不同的结构.
直和对应特征标相加, 张量积对应特征标逐点相乘.


张量积表示通常不再不可约.
因此, 两个不可约表示的张量积怎样分解, 会产生一组新的整数.
这些整数不仅记录不可约表示之间的乘法规律, 还受到交换律、结合律、单位元与维数的共同约束.


本文先从张量积空间的线性映射出发构造张量积表示, 再证明特征标乘法公式.
随后用特征标内积计算不可约分解中的重数, 最后整理这些重数必须满足的代数关系.


> **阅读提示:** 本文真正需要记住的是两条公式: $\chi_{V\otimes W}=\chi_V\chi_W$, 以及 $N_{ij,l}=\langle\chi_l,\chi_i\chi_j\rangle_G$.
> 前者把张量积变成函数乘法, 后者再从乘积中读出每种不可约类型出现多少次.

---
## 张量积空间上的线性映射


设 $V$ 与 $W$ 是有限维复向量空间.
对线性映射:
$$
A\in\operatorname{End}_{\mathbb{C}}(V),\quad B\in\operatorname{End}_{\mathbb{C}}(W),
$$
定义线性映射 $A\otimes B\in\operatorname{End}_{\mathbb{C}}(V\otimes W)$, 使它在纯张量上的作用为:
$$
(A\otimes B)(v\otimes w)=Av\otimes Bw.
$$
纯张量张成 $V\otimes W$, 所以这个条件唯一确定了 $A\otimes B$.


> **线性代数提示:** $v\otimes w$ 称为纯张量.
> 一般张量是若干纯张量的线性组合, 未必能写成单独一个 $v\otimes w$; 但只要先规定线性映射怎样作用于纯张量, 再按线性延拓, 就已经确定了它在整个张量积空间上的作用.


若还有 $C\in\operatorname{End}_{\mathbb{C}}(V)$ 与 $D\in\operatorname{End}_{\mathbb{C}}(W)$, 那么把两边作用在 $v\otimes w$ 上便可得到:
$$
\boxed{(A\otimes B)(C\otimes D)=AC\otimes BD}.
$$
特别地:
$$
(A\otimes B)^{-1}=A^{-1}\otimes B^{-1}
$$
在 $A$ 与 $B$ 都可逆时成立.

---
## 张量积表示的定义


设:
$$
\rho:G\to\mathrm{GL}(V),\quad \sigma:G\to\mathrm{GL}(W)
$$
是有限群 $G$ 的两个复表示.
在 $V\otimes W$ 上定义:
$$
(\rho\otimes\sigma)(g)=\rho(g)\otimes\sigma(g).
$$
这里同一个群元素 $g$ 同时作用在两个张量因子上.
对纯张量, 这个作用写成:
$$
(\rho\otimes\sigma)(g)(v\otimes w)=\rho(g)v\otimes\sigma(g)w.
$$


张量积线性映射的乘法关系给出:
$$
(\rho\otimes\sigma)(g)(\rho\otimes\sigma)(h)
=(\rho\otimes\sigma)(gh),
$$
而群单位元满足:
$$
(\rho\otimes\sigma)(e)=\mathbb{1}_V\otimes\mathbb{1}_W=\mathbb{1}_{V\otimes W}.
$$
所以 $\rho\otimes\sigma$ 是 $G$ 在 $V\otimes W$ 上的表示, 称为 $\rho$ 与 $\sigma$ 的**张量积表示**.


若 $\dim V=m$ 且 $\dim W=n$, 那么:
$$
\dim(V\otimes W)=mn.
$$
因此张量积表示的维数等于两个原表示维数的乘积.

---
## 张量积线性映射的迹


特征标由迹定义, 所以需要先计算 $A\otimes B$ 的迹.
取 $V$ 的一组基 $v_1,\ldots,v_m$ 与 $W$ 的一组基 $w_1,\ldots,w_n$.
则:
$$
\{v_a\otimes w_b\mid 1\leq a\leq m,\quad 1\leq b\leq n\}
$$
是 $V\otimes W$ 的一组基.


在这组乘积基中, $A\otimes B$ 对应于 $v_a\otimes w_b$ 的对角矩阵元是 $A_{aa}B_{bb}$.
因此它的迹是所有这些对角元之和:
$$
\begin{aligned}
\operatorname{tr}(A\otimes B)
&=\sum_{a=1}^{m}\sum_{b=1}^{n}A_{aa}B_{bb}\\
&=\left(\sum_{a=1}^{m}A_{aa}\right)\left(\sum_{b=1}^{n}B_{bb}\right)\\
&=\operatorname{tr}(A)\operatorname{tr}(B).
\end{aligned}
$$
所以:
$$
\boxed{\operatorname{tr}(A\otimes B)=\operatorname{tr}(A)\operatorname{tr}(B)}.
$$

---
## 张量积特征标是逐点乘积


记 $V$ 与 $W$ 的特征标分别为 $\chi_V$ 与 $\chi_W$.
张量积表示的特征标满足:
$$
\begin{aligned}
\chi_{V\otimes W}(g)
&=\operatorname{tr}((\rho\otimes\sigma)(g))\\
&=\operatorname{tr}(\rho(g)\otimes\sigma(g))\\
&=\operatorname{tr}(\rho(g))\operatorname{tr}(\sigma(g))\\
&=\chi_V(g)\chi_W(g).
\end{aligned}
$$
因此:
$$
\boxed{\chi_{V\otimes W}=\chi_V\chi_W}.
$$
右侧是两个类函数的逐点乘积.
由于类函数的逐点乘积仍是类函数, 张量积表示的特征标自然仍属于类函数空间.


令 $e$ 为群单位元.
把公式作用在 $e$ 上得到:
$$
\chi_{V\otimes W}(e)=\chi_V(e)\chi_W(e)=\dim V\dim W.
$$
这与张量积空间的维数公式完全一致.

---
## 张量积与直和的相容性


设 $V_1,V_2,W$ 都是 $G$-表示.
向量空间之间存在自然同构:
$$
(V_1\oplus V_2)\otimes W\cong(V_1\otimes W)\oplus(V_2\otimes W).
$$
它在纯张量上的作用为:
$$
(v_1,v_2)\otimes w\mapsto(v_1\otimes w,v_2\otimes w).
$$
这个映射与 $G$ 的作用交换, 所以它也是表示同构.
类似地:
$$
V\otimes(W_1\oplus W_2)\cong(V\otimes W_1)\oplus(V\otimes W_2).
$$


在特征标层面, 这些同构变成分配律:
$$
(\chi_{V_1}+\chi_{V_2})\chi_W=\chi_{V_1}\chi_W+\chi_{V_2}\chi_W,
$$
以及:
$$
\chi_V(\chi_{W_1}+\chi_{W_2})=\chi_V\chi_{W_1}+\chi_V\chi_{W_2}.
$$
因此直和与张量积分别对应特征标的加法与乘法.

---
## 交换律与结合律来自自然同构


定义交换两个张量因子的线性映射:
$$
\tau:V\otimes W\to W\otimes V,\quad \tau(v\otimes w)=w\otimes v.
$$
这个映射只是交换两个因子, 因而与 $G$ 的同时作用相容. 所以 $\tau$ 是表示同构, 从而:
$$
V\otimes W\cong W\otimes V.
$$


张量积还存在自然的结合映射:
$$
(U\otimes V)\otimes W\to U\otimes(V\otimes W),\quad (u\otimes v)\otimes w\mapsto u\otimes(v\otimes w).
$$
它同样与 $G$ 的作用交换, 因而:
$$
(U\otimes V)\otimes W\cong U\otimes(V\otimes W).
$$
这些同构说明张量积在表示的同构类上满足交换律与结合律.

---
## 不可约张量积的分解系数


设 $V_1,\ldots,V_k$ 是全部不可约复表示的一组代表, 特征标为 $\chi_1,\ldots,\chi_k$.
即使 $V_i$ 与 $V_j$ 都不可约, $V_i\otimes V_j$ 也不一定不可约.
由 Maschke 定理, 它能够唯一分解为不可约表示的直和:
$$
V_i\otimes V_j\cong\bigoplus_{l=1}^{k}N_{ij,l}V_l.
$$
其中 $N_{ij,l}$ 是非负整数, 表示 $V_l$ 在 $V_i\otimes V_j$ 中出现的重数.
这些整数称为张量积分解系数.


> **术语提示:** 物理文献常把这种分解称为 Clebsch–Gordan 分解.
> $N_{ij,l}$ 只回答“第 $l$ 种不可约类型出现几次”, 它不是选定基以后写出的 Clebsch–Gordan 系数.


对上式取特征标, 利用直和对应加法、张量积对应乘法, 得到:
$$
\chi_i\chi_j=\sum_{l=1}^{k}N_{ij,l}\chi_l.
$$
不可约特征标构成类函数空间的一组正交归一基.
两侧与 $\chi_l$ 取内积, 得到重数公式:
$$
\boxed{N_{ij,l}=\langle\chi_l,\chi_i\chi_j\rangle_G}.
$$
把类函数内积展开, 可以写成:
$$
\boxed{N_{ij,l}=\frac{1}{|G|}\sum_{g\in G}\chi_i(g)\chi_j(g)\bar{\chi_l(g)}}.
$$
利用 $\bar{\chi_l(g)}=\chi_l(g^{-1})$, 也可以写成:
$$
N_{ij,l}=\frac{1}{|G|}\sum_{g\in G}\chi_i(g)\chi_j(g)\chi_l(g^{-1}).
$$


右侧从形式上只是一个复数求和, 但表示论证明它必定是非负整数.
原因是它并非任意内积, 而是不可约表示 $V_l$ 在完全可约表示 $V_i\otimes V_j$ 中的重数.

---
## 分解系数的交换对称性


张量积交换同构给出:
$$
V_i\otimes V_j\cong V_j\otimes V_i.
$$
不可约分解的唯一性因此推出:
$$
\boxed{N_{ij,l}=N_{ji,l}}.
$$
这个结论也可以直接从特征标乘法看出, 因为类函数的逐点乘法满足:
$$
\chi_i\chi_j=\chi_j\chi_i.
$$

---
## 结合律给出的约束


考虑三个不可约表示的张量积.
先分解前两个因子得到:
$$
\begin{aligned}
(V_i\otimes V_j)\otimes V_m
&\cong\left(\bigoplus_{l=1}^{k}N_{ij,l}V_l\right)\otimes V_m\\
&\cong\bigoplus_{l=1}^{k}N_{ij,l}(V_l\otimes V_m).
\end{aligned}
$$
继续分解每个 $V_l\otimes V_m$, 表示 $V_n$ 的总重数为:
$$
\sum_{l=1}^{k}N_{ij,l}N_{lm,n}.
$$


若先分解后两个因子, 同理得到 $V_n$ 的总重数:
$$
\sum_{l=1}^{k}N_{jm,l}N_{il,n}.
$$
由于张量积满足结合律, 两种分解来自同一个表示.
不可约分解的唯一性给出:
$$
\boxed{\sum_{l=1}^{k}N_{ij,l}N_{lm,n}=\sum_{l=1}^{k}N_{jm,l}N_{il,n}}.
$$
这正是张量积分解系数所满足的结合律约束.

---
## 平凡表示给出乘法单位元


设 $V_1$ 是平凡表示, 其特征标恒等于 $1$:
$$
\chi_1(g)=1,\quad \forall g\in G.
$$
对任意表示 $V_i$, 存在自然表示同构:
$$
V_1\otimes V_i\cong V_i.
$$
在特征标层面:
$$
\chi_1\chi_i=\chi_i.
$$
因此分解系数满足:
$$
\boxed{N_{1i,l}=N_{i1,l}=\delta_{il}}.
$$
所以平凡表示在张量积运算下充当单位元.

---
## 维数对分解系数的约束


对不可约张量积分解:
$$
V_i\otimes V_j\cong\bigoplus_{l=1}^{k}N_{ij,l}V_l
$$
比较两侧维数.
左侧维数为 $d_id_j$, 右侧维数为各不可约分量维数之和, 因而:
$$
\boxed{d_id_j=\sum_{l=1}^{k}N_{ij,l}d_l}.
$$
这个关系也可以从特征标恒等式:
$$
\chi_i\chi_j=\sum_{l=1}^{k}N_{ij,l}\chi_l
$$
在群单位元 $e$ 处取值得到, 因为 $\chi_i(e)=d_i$.


所以不可约表示的维数给出了张量积分解系数的一组正整数解.
交换律、结合律、单位元与维数关系共同限制了这些系数的可能取值.

---
## 逻辑总结


两个表示 $\rho$ 与 $\sigma$ 的张量积作用定义为:
$$
(\rho\otimes\sigma)(g)=\rho(g)\otimes\sigma(g).
$$
线性映射张量积的迹满足:
$$
\operatorname{tr}(A\otimes B)=\operatorname{tr}(A)\operatorname{tr}(B),
$$
所以张量积表示的特征标是逐点乘积:
$$
\boxed{\chi_{V\otimes W}=\chi_V\chi_W}.
$$
两个不可约表示的张量积具有唯一分解:
$$
V_i\otimes V_j\cong\bigoplus_{l=1}^{k}N_{ij,l}V_l,
$$
其中分解系数由特征标内积确定:
$$
\boxed{N_{ij,l}=\langle\chi_l,\chi_i\chi_j\rangle_G}.
$$
这些系数是非负整数.
交换律约束为:
$$
N_{ij,l}=N_{ji,l},
$$
结合律约束为:
$$
\sum_{l=1}^{k}N_{ij,l}N_{lm,n}=\sum_{l=1}^{k}N_{jm,l}N_{il,n},
$$
单位元约束为:
$$
N_{1i,l}=N_{i1,l}=\delta_{il},
$$
维数约束为:
$$
d_id_j=\sum_{l=1}^{k}N_{ij,l}d_l.
$$
因此, 特征标的逐点乘法完整编码了不可约表示之间的张量积规律.
