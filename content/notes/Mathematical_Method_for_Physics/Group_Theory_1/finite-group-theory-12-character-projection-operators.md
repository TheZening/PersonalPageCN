---
title: 有限群论 12 - 特征标投影算符与等型分量
date: 2026-08-18
weight: 12
---


Maschke 定理保证有限群的复表示可以分解为不可约表示的直和.
特征标重数公式还能确定每种不可约表示出现多少次.
但是这些结论只说明分解存在以及各个重数是多少, 还没有直接给出怎样从表示空间中取出指定的不可约类型.


不可约特征标能够构造完成这个任务的投影算符.
给定一种不可约表示, 对全部群作用按照相应特征标加权求和, 就得到投影到该不可约类型全部副本之和的算符.
这个构造只依赖于群作用与不可约特征标, 不需要预先寻找任何不变子空间或选择具体的不可约分解.


本文先定义表示的等型分量, 再构造特征标投影算符.
随后证明这些算符在不同不可约分量上的作用, 推出它们的幂等性, 正交性与完备性, 最后说明它们怎样直接给出等型分解和不可约重数.


> **阅读提示:** 可以先把 $P_i$ 理解为一种筛子.
> 一个向量可能含有多种不可约类型的成分, $P_i$ 保留第 $i$ 种类型, 把其余类型全部消去.

---
## 等型分量


设 $V_1,\ldots,V_k$ 是有限群 $G$ 的全部不可约复表示的一组代表, 并记 $d_i=\dim V_i$, 以及 $\chi_i=\chi_{V_i}$.
任意有限维复表示 $V$ 都具有不可约分解 $V\cong\bigoplus_{i=1}^{k}m_iV_i$.


把其中所有与 $V_i$ 同构的不可约直和分量合在一起, 得到 $V_i$ 的**等型分量**, 记为 $V_{[i]}$.
作为表示, 它满足 $V_{[i]}\cong m_iV_i$.
整个表示于是可以写成等型分解 $V=\bigoplus_{i=1}^{k}V_{[i]}$.


> **术语提示:** "等型"就是"同一种同构类型".
> 当 $V_i$ 出现多次时, 单独指出其中某一个副本通常依赖基和分解的选择; 把所有同类型副本合在一起得到的 $V_{[i]}$ 却是唯一的.


单个不可约副本在重数 $m_i>1$ 时通常没有唯一的选择.
但是全部 $V_i$ 副本之和 $V_{[i]}$ 不依赖于不可约分解的具体选择.
接下来构造的投影算符将直接证明这个等型分量是由表示本身唯一确定的子空间.

---
## 特征标投影算符的定义


设群作用为 $\rho:G\to\mathrm{GL}(V)$.
对每个不可约特征标 $\chi_i$, 定义 $V$ 上的线性算符:
$$
P_i=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\rho(g).
$$
有限群的复特征标满足 $\chi_i(g^{-1})=\bar{\chi_i(g)}$, 所以也可以写成:
$$
P_i=\frac{d_i}{|G|}\sum_{g\in G}\bar{\chi_i(g)}\rho(g).
$$


这个公式没有使用 $V$ 的任何不可约分解.
只要知道表示矩阵 $\rho(g)$ 与不可约特征标 $\chi_i$, 就可以直接计算 $P_i$.
下面需要证明它确实投影到 $V_i$ 的等型分量.

---
## 投影算符与群作用交换


任取 $x\in G$.
对 $P_i$ 作共轭变换得到:
$$
\rho(x)P_i\rho(x^{-1})
=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\rho(xgx^{-1})=P_i.
$$
最后一个等号只用了两件事: 共轭变换 $g\mapsto xgx^{-1}$ 重新排列群元素, 而特征标在同一共轭类上取值不变.
因此, $\rho(x)P_i=P_i\rho(x),\quad \forall x\in G$.
所以 $P_i$ 是 $V$ 上的自交织映射.


> **术语提示:** 自交织映射就是从表示空间到自身, 并且与全部群作用交换的线性映射.
> 正因为 $P_i$ 不破坏群作用, 才能用 Schur 引理判断它在每种不可约类型上的作用.

---
## 在不可约表示上使用 Schur 引理


先令 $V=V_j$ 是不可约表示, 群作用记为 $\rho_j$.
由于 $P_i$ 与全部 $\rho_j(x)$ 交换, Schur 引理给出 $P_i=\lambda_{ij}\mathbb{1}_{V_j}$.
对某个 $\lambda_{ij}\in\mathbb{C}$ 成立.
为了确定这个标量, 计算 $P_i$ 的迹:
$$
\begin{aligned}
\operatorname{tr}(P_i)
&=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\operatorname{tr}(\rho_j(g))\\
&=\frac{d_i}{|G|}\sum_{g\in G}\bar{\chi_i(g)}\chi_j(g)\\
&=d_i\langle\chi_i,\chi_j\rangle_G\\
&=d_i\delta_{ij}.
\end{aligned}
$$
另一方面 $\operatorname{tr}(\lambda_{ij}\mathbb{1}_{V_j})=\lambda_{ij}d_j$.
所以, $\lambda_{ij}d_j=d_i\delta_{ij}$.
若 $i\neq j$, 则 $\lambda_{ij}=0$.
若 $i=j$, 则 $d_i=d_j$, 因而 $\lambda_{ii}=1$.
因此 $P_i$ 在不可约表示 $V_j$ 上的作用为 $P_i|_{V_j}=\delta_{ij}\mathbb{1}_{V_j}$.

---
## 在一般表示上的作用


现在令 $V$ 是任意有限维复表示, 并选择一个不可约分解 $V\cong\bigoplus_{j=1}^{k}m_jV_j$.
算符 $P_i$ 在每个与 $V_i$ 同构的不可约分量上作用为恒等变换, 在其他不可约分量上作用为零.
所以它在等型分解下具有分块形式 $P_i=0\oplus\cdots\oplus\mathbb{1}_{V_{[i]}}\oplus\cdots\oplus0$.
因此, $\operatorname{im}P_i=V_{[i]}$.
同时 $\ker P_i=\bigoplus_{j\neq i}V_{[j]}$.


这证明 $V_{[i]}$ 可以定义为 $P_i$ 的像空间.
由于 $P_i$ 只由表示 $\rho$ 与不可约特征标 $\chi_i$ 决定, 等型分量也不依赖于任何不可约分解的选择.

---
## 幂等性与相互正交性


在每个不可约分量 $V_l$ 上, 有 $P_iP_j|_{V_l}=\delta_{il}\delta_{jl}\mathbb{1}_{V_l}$.
对任意指标 $i,j,l$, 标量满足 $\delta_{il}\delta_{jl}=\delta_{ij}\delta_{il}$.
所以 $P_iP_j$ 与 $\delta_{ij}P_i$ 在每个不可约直和分量上的作用相同.
因此它们在整个 $V$ 上相等 $P_iP_j=\delta_{ij}P_i$.
当 $i=j$ 时得到 $P_i^2=P_i$.
所以每个 $P_i$ 都是投影算符.
当 $i\neq j$ 时得到 $P_iP_j=0$.
所以不同不可约类型对应的投影算符彼此相消.
这里的"正交"首先指 $P_iP_j=0$.
等到选定不变内积以后, 它也会变成通常几何意义下的正交.

---
## 投影算符的完备性


令 $P=\sum_{i=1}^{k}P_i$.
在任意不可约分量 $V_j$ 上, 有 $P|_{V_j}=\sum_{i=1}^{k}\delta_{ij}\mathbb{1}_{V_j}=\mathbb{1}_{V_j}$.
所以 $P$ 在 $V$ 的每个不可约直和分量上都作用为恒等变换.
因此, $\sum_{i=1}^{k}P_i=\mathbb{1}_V$.


对任意 $v\in V$, 定义 $v_i=P_iv$.
由完备性得到 $v=\sum_{i=1}^{k}v_i$, 而且 $v_i\in V_{[i]}$.
所以特征标投影算符直接给出每个向量的等型分解.


这个分解是唯一的.
若 $v=\sum_iw_i$ 且 $w_i\in V_{[i]}$, 对两侧作用 $P_j$ 得到 $P_jv=w_j$.
所以必有 $w_j=P_jv=v_j$.

---
## 从投影算符的迹读取重数


由于 $P_i$ 在 $V_{[i]}$ 上为恒等变换, 在其余等型分量上为零, 所以 $\operatorname{tr}(P_i)=\dim V_{[i]}=m_id_i$.
因此不可约重数也可以由投影算符的迹得到:
$$
m_i=\frac{1}{d_i}\operatorname{tr}(P_i).
$$


把 $P_i$ 的定义代入迹, 得到:
$$
\begin{aligned}
\operatorname{tr}(P_i)
&=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\chi_V(g)\\
&=d_i\langle\chi_i,\chi_V\rangle_G.
\end{aligned}
$$
因此, $m_i=\langle\chi_i,\chi_V\rangle_G$.
这正是此前得到的不可约重数公式.
所以重数公式与投影算符公式不是两个独立结论, 而是同一个等型分解分别在维数与算符层面的表达.

---
## 在不变内积下成为正交投影


有限群的任意有限维复表示都可以选择一个 $G$-不变 Hermitian 内积.
从任意 Hermitian 内积 $\langle\cdot,\cdot\rangle_0$ 出发, 定义平均内积:
$$
\langle v,w\rangle_G=\frac{1}{|G|}\sum_{g\in G}\langle\rho(g)v,\rho(g)w\rangle_0.
$$
这个内积满足 $\langle\rho(x)v,\rho(x)w\rangle_G=\langle v,w\rangle_G$, 所以每个 $\rho(g)$ 都是酉算符, 即 $\rho^\dagger(g)=\rho(g^{-1})$.


> **线性代数提示:** Hermitian 内积是复向量空间的标准内积, 交换两个输入时数值会取复共轭.
> 符号 $A^\dagger$ 表示算符 $A$ 的伴随; 在标准正交基中, 它对应矩阵的共轭转置.


在这个内积下计算 $P_i$ 的伴随:
$$
\begin{aligned}
P_i^\dagger
&=\frac{d_i}{|G|}\sum_{g\in G}\bar{\chi_i(g^{-1})}\rho^\dagger(g)\\
&=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g)\rho(g^{-1}).
\end{aligned}
$$
令 $h=g^{-1}$, 得到:
$$
P_i^\dagger=\frac{d_i}{|G|}\sum_{h\in G}\chi_i(h^{-1})\rho(h)=P_i.
$$
因此, $P_i^\dagger=P_i$.
结合 $P_i^2=P_i$ 可知, $P_i$ 是关于 $G$-不变内积的正交投影.
不同等型分量因此彼此正交.

---
## 投影算符与交织映射相容


设 $V$ 与 $W$ 是两个 $G$-表示, 群作用分别为 $\rho_V$ 与 $\rho_W$.
令 $T\in\operatorname{Hom}_G(V,W)$ 是交织映射.
分别用 $P_{i,V}$ 与 $P_{i,W}$ 表示两个空间上的第 $i$ 个特征标投影算符.
把交织关系 $T\rho_V(g)=\rho_W(g)T$ 逐项代入 $P_{i,V}$ 的加权和, 直接得到 $TP_{i,V}=P_{i,W}T$.
所以, $T(V_{[i]})\subseteq W_{[i]}$.
也就是说, 交织映射把 $V$ 的第 $i$ 个等型分量映入 $W$ 的第 $i$ 个等型分量.
不同不可约类型不会被交织映射彼此混合.

---
## 逻辑总结


对任意有限维复表示 $\rho:G\to\mathrm{GL}(V)$ 与不可约特征标 $\chi_i$, 定义:
$$
P_i=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\rho(g).
$$
类函数性质保证 $P_i$ 与全部群作用交换.
Schur 引理与特征标正交关系进一步给出它在不可约表示 $V_j$ 上的作用 $P_i|_{V_j}=\delta_{ij}\mathbb{1}_{V_j}$.
因此在一般表示中 $\operatorname{im}P_i=V_{[i]}$.
这些投影算符满足 $P_iP_j=\delta_{ij}P_i$, 以及 $\sum_{i=1}^{k}P_i=\mathbb{1}_V$.
所以任意向量都具有唯一等型分解 $v=\sum_{i=1}^{k}P_iv$.
投影算符的迹重新给出不可约重数:
$$
m_i=\frac{1}{d_i}\operatorname{tr}(P_i)=\langle\chi_i,\chi_V\rangle_G.
$$
在 $G$-不变 Hermitian 内积下还有 $P_i^\dagger=P_i$.
因此特征标不仅能够计算不可约表示出现的次数, 还能够直接构造表示空间中由指定不可约类型组成的正交等型分量.
