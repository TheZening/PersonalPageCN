---
title: 有限群论 08 - 不可约分解与特征标重数公式
date: 2026-08-17
weight: 8
---


Maschke 定理说明有限群的有限维复表示可以分解成不可约表示的直和.
但是仅仅知道分解存在还不够.
给定一个表示以后, 我们还需要确定每个不可约表示出现多少次, 判断这种分解是否唯一, 并寻找不必直接构造不变子空间的不可约性判据.


上一篇建立了特征标内积与交织映射空间之间的关系, 并由 Schur 引理推出不可约特征标的正交性.
本文将把这个正交性应用于一般表示.
核心结论是: 一个不可约表示在给定表示中的重数, 正好等于相应不可约特征标与给定表示特征标的内积.


从这个公式出发, 可以证明不可约分解在等价意义下唯一, 推出特征标的自内积判据, 并证明有限群的有限维复表示完全由其特征标决定.
本文不讨论不可约特征标的完备性, 共轭类数量定理与列正交关系.

---
## 不可约表示的完整代表系


设 $G$ 是有限群.
本文中的表示都是有限维复表示.
在等价意义下, 选取 $G$ 的全部不可约表示的一组代表:
$$
V_1,V_2,\ldots,V_r.
$$
它们两两不等价:
$$
V_i\cong V_j\quad\Leftrightarrow\quad i=j.
$$
记 $V_i$ 的特征标为:
$$
\chi_i=\chi_{V_i}.
$$
上一篇已经证明这些不可约特征标满足正交关系:
$$
\langle\chi_i,\chi_j\rangle_G=\delta_{ij}.
$$
这里的代表系只保留每个等价类中的一个表示.
如果另一个不可约表示 $U$ 与某个 $V_i$ 等价, 就不再把 $U$ 作为新的代表加入列表.
因此下标 $i$ 区分的是不可约表示的等价类, 而不是同一个等价类中的不同矩阵实现.

---
## Maschke 定理保证分解存在


设 $V$ 是 $G$ 的任意有限维复表示.
Maschke 定理说明, 若 $W\subseteq V$ 是 $G$-不变子空间, 就存在另一个 $G$-不变子空间 $W'$ 使:
$$
V=W\oplus W'.
$$
如果 $W$ 与 $W'$ 中还有非平凡不变子空间, 可以继续进行同样的分解.
因为 $V$ 的维数有限, 每次非平凡分解都会把当前空间换成维数更小的子空间, 所以这个过程不能无限继续.
最终得到有限个不可约表示的直和.


把其中等价的不可约成分归在一起, 可以写成:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i.
$$
这里 $m_i$ 是非负整数, $m_iV_i$ 表示 $m_i$ 个 $V_i$ 的直和.
若 $m_i=0$, 就表示 $V_i$ 不在这个分解中出现.
因此 $m_i$ 称为不可约表示 $V_i$ 在 $V$ 中的**重数**.


Maschke 定理目前只保证至少存在一组这样的整数 $m_1,\ldots,m_r$.
它本身还没有说明另一种分解是否会给出不同的重数.
为了研究重数, 需要把直和分解转化成特征标的线性关系.

---
## 直和分解变成特征标分解


若 $U$ 与 $W$ 是两个表示, 它们的直和表示在分块基下写成:
$$
\rho_{U\oplus W}(g)=\mqty[
\rho_U(g)&0\\
0&\rho_W(g)
].
$$
分块对角矩阵的迹等于各个对角块的迹之和, 所以:
$$
\chi_{U\oplus W}(g)=\chi_U(g)+\chi_W(g).
$$
也就是说:
$$
\chi_{U\oplus W}=\chi_U+\chi_W.
$$
反复使用这个性质, $m_i$ 个 $V_i$ 的直和具有特征标:
$$
\chi_{m_iV_i}=m_i\chi_i.
$$
因此表示分解:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i
$$
对应特征标分解:
$$
\chi_V=\sum_{i=1}^{r}m_i\chi_i.
$$
表示的直和分解发生在向量空间与群作用的层面.
特征标分解则发生在类函数空间中.
它把寻找不变子空间的问题转化成了求一组正交向量的展开系数.

---
## 从正交关系中提取重数


固定一个不可约表示 $V_j$.
对特征标分解的两侧与 $\chi_j$ 取内积:
$$
\left\langle\chi_j,\chi_V\right\rangle_G=\left\langle\chi_j,\sum_{i=1}^{r}m_i\chi_i\right\rangle_G.
$$
类函数内积对第二个变量线性, 所以:
$$
\left\langle\chi_j,\chi_V\right\rangle_G=\sum_{i=1}^{r}m_i\langle\chi_j,\chi_i\rangle_G.
$$
利用不可约特征标的正交关系:
$$
\langle\chi_j,\chi_i\rangle_G=\delta_{ji},
$$
得到:
$$
\begin{aligned}
\left\langle\chi_j,\chi_V\right\rangle_G
&=\sum_{i=1}^{r}m_i\delta_{ji}\\
&=m_j.
\end{aligned}
$$
因此不可约表示 $V_j$ 在 $V$ 中的重数为:
$$
\boxed{m_j=\langle\chi_j,\chi_V\rangle_G}.
$$
把类函数内积的定义代入, 还可以把它写成群上的求和公式:
$$
m_j=\frac{1}{|G|}\sum_{g\in G}\bar{\chi_j(g)}\chi_V(g).
$$
若 $C_1,\ldots,C_k$ 是 $G$ 的共轭类, $c_a\in C_a$ 是代表元, 则也可以按共轭类写成:
$$
m_j=\frac{1}{|G|}\sum_{a=1}^{k}|C_a|\bar{\chi_j(c_a)}\chi_V(c_a).
$$
重数原本来自表示的直和分解, 所以它必定是非负整数.
重数公式说明, 对一个确实来自表示的特征标 $\chi_V$, 每个数 $\langle\chi_j,\chi_V\rangle_G$ 都必须是非负整数.
这给出了特征标数据必须满足的一项必要条件.

---
## 重数也等于交织映射空间的维数


上一篇证明了任意两个有限维复表示满足:
$$
\langle\chi_U,\chi_W\rangle_G=\dim\operatorname{Hom}_G(U,W).
$$
令 $U=V_j$ 与 $W=V$, 得到:
$$
\langle\chi_j,\chi_V\rangle_G=\dim\operatorname{Hom}_G(V_j,V).
$$
结合重数公式可得:
$$
\boxed{m_j=\dim\operatorname{Hom}_G(V_j,V)}.
$$
这个等式说明重数可以从两个彼此等价的方向理解.
在类函数空间中, $m_j$ 是 $\chi_V$ 沿正交向量 $\chi_j$ 的展开系数.
在表示之间, $m_j$ 是从不可约表示 $V_j$ 到 $V$ 的交织映射空间的维数.
Schur 引理保证不同不可约类型之间没有非零交织映射, 而每个与 $V_j$ 等价的直和成分都贡献一个独立方向.

---
## 不可约分解的唯一性


现在可以证明不可约分解的唯一性.
假设同一个表示 $V$ 有两种不可约分解:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i,
$$
以及:
$$
V\cong\bigoplus_{i=1}^{r}n_iV_i.
$$
第一种分解给出:
$$
m_j=\langle\chi_j,\chi_V\rangle_G.
$$
第二种分解同样给出:
$$
n_j=\langle\chi_j,\chi_V\rangle_G.
$$
因此对每个 $j$ 都有:
$$
m_j=n_j.
$$
所以两个分解中每一种不可约表示出现的次数完全相同.


这里的唯一性不是说分解所对应的具体不变子空间必须唯一.
同一个表示内部可能存在不同的不变子空间选择.
唯一的是每个不可约等价类的重数, 因而是不可约成分的等价类型与出现次数.

---
## 两个一般表示的特征标内积


设两个表示分别分解为:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i,\quad W\cong\bigoplus_{i=1}^{r}n_iV_i.
$$
它们的特征标为:
$$
\chi_V=\sum_{i=1}^{r}m_i\chi_i,\quad \chi_W=\sum_{i=1}^{r}n_i\chi_i.
$$
利用内积的共轭线性, 线性以及不可约特征标的正交性, 得到:
$$
\begin{aligned}
\langle\chi_V,\chi_W\rangle_G
&=\left\langle\sum_{i=1}^{r}m_i\chi_i,\sum_{j=1}^{r}n_j\chi_j\right\rangle_G\\
&=\sum_{i=1}^{r}\sum_{j=1}^{r}m_in_j\langle\chi_i,\chi_j\rangle_G\\
&=\sum_{i=1}^{r}m_in_i.
\end{aligned}
$$
这里没有在 $m_i$ 上保留复共轭, 因为重数是非负整数.
因此:
$$
\boxed{\langle\chi_V,\chi_W\rangle_G=\sum_{i=1}^{r}m_in_i}.
$$
这个公式只计算两个表示中共同出现的不可约类型.
某个 $V_i$ 若只在其中一个表示中出现, 相应乘积 $m_in_i$ 就等于零.

---
## 特征标自内积的结构含义


令 $W=V$, 则 $n_i=m_i$.
上一节的公式变成:
$$
\boxed{\langle\chi_V,\chi_V\rangle_G=\sum_{i=1}^{r}m_i^2}.
$$
这个数是非负整数.
它不是表示维数, 而是全部不可约重数平方的总和.


另一方面, 上一篇的交织映射公式给出:
$$
\langle\chi_V,\chi_V\rangle_G=\dim\operatorname{End}_G(V).
$$
因此:
$$
\dim\operatorname{End}_G(V)=\sum_{i=1}^{r}m_i^2.
$$
左侧衡量与整个群作用交换的线性变换有多少个独立方向.
右侧说明每个不可约类型若出现 $m_i$ 次, 它在自交织代数的维数中贡献 $m_i^2$.

---
## 不可约性的特征标判据


若 $V$ 不可约, 它的分解中恰好有一个重数等于 $1$, 其余重数全部等于 $0$.
因此:
$$
\langle\chi_V,\chi_V\rangle_G=1.
$$
反过来, 假设非零表示 $V$ 满足:
$$
\langle\chi_V,\chi_V\rangle_G=1.
$$
由自内积公式可得:
$$
\sum_{i=1}^{r}m_i^2=1.
$$
每个 $m_i$ 都是非负整数.
若两个不同的重数非零, 平方和至少为 $2$.
若某个重数至少为 $2$, 它的平方至少为 $4$.
因此平方和等于 $1$ 只可能发生在恰好一个 $m_i=1$, 其余重数全部为零的情形.
于是 $V$ 等价于某个不可约表示 $V_i$, 因而 $V$ 不可约.


所以得到不可约性判据:
$$
\boxed{V\text{ 不可约}\quad\Leftrightarrow\quad\langle\chi_V,\chi_V\rangle_G=1}.
$$
这个判据不要求直接寻找不变子空间.
只要知道特征标在各个共轭类上的值, 就可以通过内积判断表示是否不可约.

---
## 特征标完全决定表示


设 $V$ 与 $W$ 是有限群 $G$ 的两个有限维复表示, 并假设:
$$
\chi_V=\chi_W.
$$
对任意不可约特征标 $\chi_j$, 两边与 $\chi_j$ 取内积得到:
$$
\langle\chi_j,\chi_V\rangle_G=\langle\chi_j,\chi_W\rangle_G.
$$
根据重数公式, 左侧是 $V_j$ 在 $V$ 中的重数 $m_j$, 右侧是 $V_j$ 在 $W$ 中的重数 $n_j$.
因此:
$$
m_j=n_j,
$$
而且这个等式对每个 $j$ 都成立.
所以 $V$ 与 $W$ 具有相同的不可约分解:
$$
V\cong\bigoplus_{j=1}^{r}m_jV_j,\quad W\cong\bigoplus_{j=1}^{r}m_jV_j.
$$
从而:
$$
V\cong W.
$$
反方向在特征标的基本性质中已经证明.
等价表示的表示矩阵彼此相似, 所以具有相同的迹与相同的特征标.
因此对有限群的有限维复表示有:
$$
\boxed{V\cong W\quad\Leftrightarrow\quad\chi_V=\chi_W}.
$$
这说明特征标虽然只记录表示矩阵的迹, 却没有丢失表示的等价类型.
它不能恢复某一组基下的具体矩阵, 但能够恢复表示中每一种不可约成分及其重数.

---
## 逻辑总结


Maschke 定理首先保证一般表示存在不可约分解:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i.
$$
特征标对直和的可加性把它变成:
$$
\chi_V=\sum_{i=1}^{r}m_i\chi_i.
$$
不可约特征标的正交性随后提取出每个展开系数:
$$
m_j=\langle\chi_j,\chi_V\rangle_G.
$$
因为右侧只由 $\chi_V$ 决定, 不可约分解的重数也只由 $\chi_V$ 决定, 从而得到分解唯一性.


进一步令两个表示的重数分别为 $m_i$ 与 $n_i$, 可以得到:
$$
\langle\chi_V,\chi_W\rangle_G=\sum_{i=1}^{r}m_in_i.
$$
令 $W=V$, 则:
$$
\langle\chi_V,\chi_V\rangle_G=\sum_{i=1}^{r}m_i^2.
$$
平方和等于 $1$ 当且仅当 $V$ 只有一个重数为 $1$ 的不可约成分, 这给出不可约性判据.
最后, 两个表示具有相同特征标当且仅当它们的全部不可约重数相同, 因而当且仅当它们等价.
