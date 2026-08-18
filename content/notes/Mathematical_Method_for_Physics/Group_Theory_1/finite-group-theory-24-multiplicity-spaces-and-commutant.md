---
title: 有限群论 24 - 等型分解、重数空间与对易代数
date: 2026-08-18
weight: 24
---


Maschke 定理把有限群的复表示分解为不可约表示的直和.
特征标投影算符进一步从表示空间中唯一取出每个等型分量.
但是当同一个不可约表示出现多次时, 群作用本身不能区分这些等价副本.


这种重复信息由重数空间记录.
把不可约表示空间与重数空间分开以后, 群只作用在前者上, 所有与群作用可交换的算符则只在后者上自由作用.
这一结构把等型分解、Schur 引理、特征标重数与对易代数统一起来.


> **阅读提示:** 可以把 $V_i$ 看成“表示类型本身”, 把 $M_i$ 看成“这个类型出现了哪些副本”.
> 群只识别类型 $V_i$, 不能识别重数标签 $M_i$; 因而与群作用对易的算符可以在 $M_i$ 中混合等价副本.

---
## 从不可约分解到等型分解


设 $V_1,\ldots,V_r$ 是有限群 $G$ 的全部不可约复表示的一组代表.
任意有限维复表示 $V$ 都可以写成:
$$
V\cong\bigoplus_{i=1}^{r}m_iV_i.
$$
其中 $m_i$ 是 $V_i$ 在 $V$ 中出现的重数.


把所有与 $V_i$ 同构的不可约分量合在一起, 得到等型分量 $V_{[i]}$.
因此:
$$
V_{[i]}\cong m_iV_i,
$$
并且:
$$
V=\bigoplus_{i=1}^{r}V_{[i]}.
$$


等型分量 $V_{[i]}$ 由特征标投影算符唯一确定.
但是当 $m_i>1$ 时, 把 $V_{[i]}$ 继续拆成 $m_i$ 个具体不可约副本通常没有唯一方式.

---
## 重数空间的定义


对每个不可约表示 $V_i$, 定义它在 $V$ 中的重数空间为:
$$
\boxed{M_i=\operatorname{Hom}_G(V_i,V)}.
$$
重数公式给出:
$$
\dim M_i=\dim\operatorname{Hom}_G(V_i,V)=m_i.
$$
因此 $M_i$ 不只记录重数这个整数, 而是记录所有从 $V_i$ 到 $V$ 的交织映射组成的向量空间.


群 $G$ 在 $M_i$ 上取平凡作用.
也就是说, 群不改变交织映射在重数空间中的标签.


> **理解提示:** 若 $m_i=3$, 只写数字 $3$ 只能说有三个副本.
> 三维空间 $M_i$ 还记录这三个副本之间所有线性组合, 并提醒我们“哪一个是第一个副本”并没有天然答案.

---
## 典范求值映射


定义求值映射:
$$
\operatorname{Ev}_i:V_i\otimes M_i\to V,
$$
使得:
$$
\operatorname{Ev}_i(v\otimes T)=T(v).
$$
因为每个 $T\in M_i$ 都是交织映射, 求值映射自动与群作用相容.


每个非零 $T\in M_i$ 都把不可约表示 $V_i$ 同构地映到 $V$ 中的一个不可约子表示.
所有这些像空间之和正是等型分量 $V_{[i]}$.
因此 $\operatorname{Ev}_i$ 的像为:
$$
\operatorname{Im}\operatorname{Ev}_i=V_{[i]}.
$$


求值映射定义域的维数为:
$$
\dim(V_i\otimes M_i)=(\dim V_i)m_i=\dim V_{[i]}.
$$
它已经满射到 $V_{[i]}$, 所以维数相同说明它是同构:
$$
\boxed{V_i\otimes M_i\cong V_{[i]}}.
$$

---
## 带有重数空间的等型分解


把所有求值同构合在一起, 得到:
$$
\boxed{V\cong\bigoplus_{i=1}^{r}(V_i\otimes M_i)}.
$$
在第 $i$ 个等型分量上, 群作用为:
$$
\rho(g)|_{V_i\otimes M_i}=\rho_i(g)\otimes\mathbb{1}_{M_i}.
$$


这个公式说明群作用只看见不可约因子 $V_i$.
重数因子 $M_i$ 上的作用是恒等的, 所以群不能区分同一不可约类型的不同副本.

---
## 重数的特征标公式


重数空间的维数仍然由特征标内积计算:
$$
\boxed{\dim M_i=m_i=\langle\chi_i,\chi_V\rangle_G}.
$$
因此等型分解可以写成:
$$
V\cong\bigoplus_{i=1}^{r}(V_i\otimes\mathbb{C}^{m_i}).
$$
这里把 $M_i$ 写成 $\mathbb{C}^{m_i}$ 需要选择一组基.
抽象重数空间 $M_i=\operatorname{Hom}_G(V_i,V)$ 本身不依赖这种基选择.

---
## 对易代数的定义


定义表示 $V$ 的对易代数为:
$$
\operatorname{End}_G(V)=\{A\in\operatorname{End}_{\mathbb{C}}(V)\mid A\rho(g)=\rho(g)A,\quad\forall g\in G\}.
$$
它由所有与群作用可交换的线性算符组成.
这个集合对加法、数乘与算符复合封闭, 因而是一个复结合代数.


> **术语提示:** 对易代数也常称为交换子代数或 commutant.
> 名字表示其中每个算符都与群作用对易, 并不表示这些算符彼此一定对易; 当重数大于一时, 这个代数通常不是交换代数.


Schur 引理处理的是 $V$ 不可约时的特殊情形.
现在要利用重数空间描述一般完全可约表示的整个对易代数.

---
## 对易算符保持等型分量


令 $P_i$ 是投影到 $V_{[i]}$ 的特征标投影算符.
它是群作用的线性组合:
$$
P_i=\frac{d_i}{|G|}\sum_{g\in G}\chi_i(g^{-1})\rho(g),\quad d_i=\dim V_i.
$$
若 $A\in\operatorname{End}_G(V)$, 则 $A$ 与每个 $\rho(g)$ 可交换, 因而:
$$
AP_i=P_iA.
$$
所以 $A$ 保持 $P_i$ 的像空间:
$$
A(V_{[i]})\subseteq V_{[i]}.
$$


因此与群作用对易的算符不会把不同不可约类型的等型分量混合起来.
问题只剩下它在每个 $V_i\otimes M_i$ 上具有怎样的形式.

---
## 单个等型分量上的块结构


固定一个指标 $i$, 并在 $M_i$ 中选择基 $m_1,\ldots,m_{m_i}$.
这样 $V_i\otimes M_i$ 被写成 $m_i$ 个 $V_i$ 副本的直和.


设 $A$ 是这个等型分量上的自交织映射.
相对于上述直和, 把 $A$ 写成块矩阵 $(A_{ab})$, 其中:
$$
A_{ab}:V_i\to V_i.
$$
由于 $A$ 与 $\rho_i(g)\otimes\mathbb{1}_{M_i}$ 可交换, 每个块都满足:
$$
A_{ab}\rho_i(g)=\rho_i(g)A_{ab}.
$$
Schur 引理因此给出标量 $c_{ab}\in\mathbb{C}$, 使得:
$$
A_{ab}=c_{ab}\mathbb{1}_{V_i}.
$$


因此所有块中的非平凡信息只剩标量矩阵 $(c_{ab})$, 它正是 $M_i$ 上的一个线性算符 $A_i$.
所以:
$$
\boxed{A|_{V_i\otimes M_i}=\mathbb{1}_{V_i}\otimes A_i}.
$$


反过来, 任意 $A_i\in\operatorname{End}_{\mathbb{C}}(M_i)$ 都给出与群作用可交换的算符 $\mathbb{1}_{V_i}\otimes A_i$.

---
## 一般对易算符的完整形式


把所有等型分量合在一起, 任意 $A\in\operatorname{End}_G(V)$ 都唯一写成:
$$
\boxed{A=\bigoplus_{m_i>0}(\mathbb{1}_{V_i}\otimes A_i)},
$$
其中:
$$
A_i\in\operatorname{End}_{\mathbb{C}}(M_i).
$$
因此存在代数同构:
$$
\boxed{\operatorname{End}_G(V)\cong\bigoplus_{m_i>0}\operatorname{End}_{\mathbb{C}}(M_i)}.
$$


若选择 $M_i$ 的基, 就有:
$$
\operatorname{End}_{\mathbb{C}}(M_i)\cong\operatorname{Mat}_{m_i}(\mathbb{C}).
$$
所以对易代数也可以写成矩阵代数的直和:
$$
\boxed{\operatorname{End}_G(V)\cong\bigoplus_{m_i>0}\operatorname{Mat}_{m_i}(\mathbb{C})}.
$$

---
## 对易代数的维数


因为 $\dim\operatorname{End}_{\mathbb{C}}(M_i)=m_i^2$, 所以:
$$
\boxed{\dim\operatorname{End}_G(V)=\sum_{i=1}^{r}m_i^2}.
$$
另一方面, 特征标内积已经给出:
$$
\langle\chi_V,\chi_V\rangle_G=\sum_{i=1}^{r}m_i^2.
$$
因此:
$$
\boxed{\dim\operatorname{End}_G(V)=\langle\chi_V,\chi_V\rangle_G}.
$$
重数空间分解解释了这个特征标自内积公式的代数结构来源.

---
## Schur 引理是重数空间公式的特例


若 $V$ 不可约, 只有一个重数空间非零, 并且它是一维的.
此时:
$$
\operatorname{End}_G(V)\cong\operatorname{End}_{\mathbb{C}}(\mathbb{C})\cong\mathbb{C}.
$$
所以每个自交织映射都是恒等算符的标量倍数.
这正是复不可约表示上的 Schur 引理.

---
## 无重数分解与交换性


若每个重数都满足 $m_i\leq1$, 就称 $V$ 的不可约分解是无重数的.
这时每个非零重数空间都是一维的, 所以:
$$
\operatorname{End}_G(V)\cong\bigoplus_{m_i=1}\mathbb{C}.
$$
这个代数是交换的.


反过来, 若某个 $m_i\geq2$, 则对易代数含有矩阵代数 $\operatorname{Mat}_{m_i}(\mathbb{C})$ 作为直和分量.
这个矩阵代数不是交换的.
因此:
$$
\boxed{\operatorname{End}_G(V)\text{ 交换}\quad\leftrightarrow\quad V\text{ 的不可约分解无重数}}.
$$

---
## 特征标投影为什么不能区分等价副本


在重数空间分解下, 特征标投影 $P_i$ 的作用为:
$$
P_i|_{V_j\otimes M_j}=\delta_{ij}(\mathbb{1}_{V_j}\otimes\mathbb{1}_{M_j}).
$$
它在整个 $V_i\otimes M_i$ 上都是恒等算符, 所以只能取出完整的等型分量.


若要继续选出其中某个具体不可约副本, 必须在 $M_i$ 中选择一维子空间 $L\subseteq M_i$.
相应副本为:
$$
V_i\otimes L.
$$
选择不同的直线 $L$ 会得到不同但等价的不可约子表示.
群作用本身没有提供优先选择其中某一条直线的规则.


> **理解提示:** 第 12 篇的 $P_i$ 没有“不够精细”.
> 它已经提取了由群作用唯一确定的全部信息.
> 若还要从等价副本中选一个, 就必须加入额外算符或额外结构来选择重数空间中的方向.

---
## 对易算符的谱分块


设 $A\in\operatorname{End}_G(V)$, 并写成:
$$
A=\bigoplus_{m_i>0}(\mathbb{1}_{V_i}\otimes A_i).
$$
对任意 $\lambda\in\mathbb{C}$, 相应特征空间满足:
$$
\boxed{\ker(A-\lambda\mathbb{1})\cong\bigoplus_{m_i>0}(V_i\otimes\ker(A_i-\lambda\mathbb{1}))}.
$$
因此每个来自 $M_i$ 的特征向量都会连同整个不可约空间 $V_i$ 一起出现.
其贡献的特征空间维数为 $\dim V_i$ 的整数倍.


这就是与群作用可交换的算符所具有的对称性分块结构.

---
## 逻辑总结


重数空间定义为:
$$
M_i=\operatorname{Hom}_G(V_i,V),
$$
并满足:
$$
\dim M_i=m_i=\langle\chi_i,\chi_V\rangle_G.
$$
一般表示具有重数空间形式的等型分解:
$$
V\cong\bigoplus_{i=1}^{r}(V_i\otimes M_i),
$$
其中群作用为:
$$
\rho(g)=\bigoplus_{i=1}^{r}(\rho_i(g)\otimes\mathbb{1}_{M_i}).
$$
所有与群作用可交换的算符都具有形式:
$$
A=\bigoplus_{m_i>0}(\mathbb{1}_{V_i}\otimes A_i).
$$
所以:
$$
\operatorname{End}_G(V)\cong\bigoplus_{m_i>0}\operatorname{End}_{\mathbb{C}}(M_i).
$$


不可约表示上的 Schur 引理、无重数分解的交换性、特征标自内积公式与等型投影的中心性, 都是这个结构的直接结果.
至此, 有限群复表示论中为后续应用所需的主线已经闭合.
