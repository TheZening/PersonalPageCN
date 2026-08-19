---
title: 量子对称性 08 - 复合系统, 直积群与对角子群
date: 2026-08-18
weight: 8
---


前面讨论的群都直接作用在一个 Hilbert 空间上.
现在考虑由两个量子子系统组成的复合系统.


两个子系统可以分别具有自己的有限群对称性.
在没有把它们联系起来以前, 两边的对称变换可以独立进行, 因而产生直积群.
加入相互作用以后, 独立变换可能不再保持 Hamilton 算符, 但两个子系统同时进行同一个变换仍然可能是对称性.


这时对称群从 $G\times G$ 降低到对角子群 $\Delta_G$.
在表示论上, 直积群的外张量积表示限制到对角子群以后, 正好变成同一个群上的普通张量积表示.


> **阅读重点:** $G\times G$ 描述两个独立的群元素分别作用在两个子系统上.
> $\Delta_G$ 描述同一个群元素同时作用在两个子系统上.
> Clebsch-Gordan 分解进入复合系统, 正是因为要把外张量积限制到对角子群.
> 最直观的区别是: 在 $G\times G$ 中两边可以分别选择群元素, 在 $\Delta_G$ 中两边的选择被锁定为同一个群元素.

---
## 复合系统的 Hilbert 空间


设两个子系统的 Hilbert 空间分别为 $\mathcal{H}_A$ 和 $\mathcal{H}_B$.
复合系统的 Hilbert 空间是张量积 $\mathcal{H}_{A B}=\mathcal{H}_A\otimes\mathcal{H}_B$.
纯张量 $\ket{\psi_A}\otimes\ket{\psi_B}$ 描述分别指定两个子系统状态的向量.
一般复合态是这类纯张量的线性组合.


作用在第一个子系统上的算符 $X_A$ 在复合空间中写成 $X_A\otimes\mathbb{1}_B$.
作用在第二个子系统上的算符 $X_B$ 写成 $\mathbb{1}_A\otimes X_B$.
这里 $\mathbb{1}_A$ 和 $\mathbb{1}_B$ 分别是两个子系统上的单位算符.


> **术语提示:** 张量积 Hilbert 空间不是两个空间的普通直和.
> 直和表示互相排斥的扇区, 张量积表示两个自由度同时存在.

---
## 两个独立有限群怎样组成直积群


设有限群 $G_A$ 通过幺正表示 $U_A$ 作用在 $\mathcal{H}_A$ 上.
设有限群 $G_B$ 通过幺正表示 $U_B$ 作用在 $\mathcal{H}_B$ 上.


两个子系统的独立对称变换由有序对 $(g,h)$ 标记, 其中 $g\in G_A$, $h\in G_B$.
这些有序对组成直积群 $G_A\times G_B$, 乘法定义为 $(g_1,h_1)(g_2,h_2)=(g_1g_2,h_1h_2)$.
它在复合 Hilbert 空间上的表示为 $U_{A B}(g,h)=U_A(g)\otimes U_B(h)$.


第一群因子只作用在 $\mathcal{H}_A$ 上.
第二群因子只作用在 $\mathcal{H}_B$ 上.
两个作用彼此独立.

---
## 外张量积表示


设 $V_i$ 是 $G_A$ 的不可约表示, $W_j$ 是 $G_B$ 的不可约表示.
底层向量空间 $V_i\otimes W_j$ 上可以定义 $G_A\times G_B$ 的作用 $(g,h)\mapsto D_i(g)\otimes E_j(h)$.
这个直积群表示记作 $V_i\boxtimes W_j$, 称为外张量积表示.


若 $V_i$ 和 $W_j$ 分别不可约, 那么 $V_i\boxtimes W_j$ 是 $G_A\times G_B$ 的不可约表示.
有限群直积的全部不可约复表示都由这种方式得到.


> **记号提示:** $\boxtimes$ 强调两个不同群分别作用.
> $\otimes$ 强调同一个群同时作用在两个因子上.
> 两者的底层向量空间都是普通张量积, 区别在群作用.

---
## 复合 Hilbert 空间在直积群下的分解


设两个子系统的表示分解为:
$$
\mathcal{H}_A\cong\bigoplus_i(V_i\otimes M_{A,i}),\quad \mathcal{H}_B\cong\bigoplus_j(W_j\otimes M_{B,j}).
$$
这里 $M_{A,i}$ 和 $M_{B,j}$ 是两个子系统各自的重数空间.


复合空间在 $G_A\times G_B$ 下分解为:
$$
\mathcal{H}_{A B}\cong\bigoplus_{i,j}[(V_i\boxtimes W_j)\otimes(M_{A,i}\otimes M_{B,j})].
$$
所以直积群的不可约类型由一对标签 $(i,j)$ 标记.
相应重数空间是两个子系统重数空间的张量积.


若 Hamilton 算符保持完整的 $G_A\times G_B$ 对称性, 它不能混合不同的不可约对 $(i,j)$.
它只能在对应的重数空间 $M_{A,i}\otimes M_{B,j}$ 中保留非平凡作用.

---
## 没有相互作用时的独立 Hamilton 算符


设两个子系统的 Hamilton 算符分别为 $H_A$ 和 $H_B$.
不含相互作用的复合 Hamilton 算符写成:
$$
H_0=H_A\otimes\mathbb{1}_B+\mathbb{1}_A\otimes H_B.
$$
若 $H_A$ 保持 $G_A$, $H_B$ 保持 $G_B$, 那么:
$$
[H_0,U_A(g)\otimes U_B(h)]=0,\quad \forall(g,h)\in G_A\times G_B.
$$
因此 $H_0$ 具有完整的直积群对称性.


这里的 "独立" 表示两边的群元素可以分别选择.
对子系统 $A$ 做变换时不必同时对子系统 $B$ 做相同变换.

---
## 两个子系统具有同一个抽象群时


现在设 $G_A$ 和 $G_B$ 是同一个有限群 $G$ 的两个副本.
独立对称群仍然是 $G\times G$.


其中有一个特殊子群 $\Delta_G=\{(g,g)\mid g\in G\}$.
它称为对角子群.
映射 $g\mapsto(g,g)$ 给出 $G$ 与 $\Delta_G$ 之间的群同构.


对角子群的元素不允许两边独立选择.
同一个 $g$ 必须同时作用在两个子系统上.
相应表示为 $U_\Delta(g)=U_A(g)\otimes U_B(g)$.


> **理解提示:** 对角子群不是把两个 Hilbert 空间认成同一个空间.
> 它只要求两个空间上的群变换使用同一个群元素.

---
## 限制到对角子群得到普通张量积


取 $G\times G$ 的外张量积表示 $V_i\boxtimes V_j$.
把它限制到对角子群, 对 $(g,g)$ 的作用为 $D_i(g)\otimes D_j(g)$.
这正是同一个群 $G$ 在 $V_i\otimes V_j$ 上的张量积表示.
因此:
$$
(V_i\boxtimes V_j)|_{\Delta_G}\cong V_i\otimes V_j.
$$


右侧一般不再不可约.
它按照有限群的 Clebsch-Gordan 规则分解:
$$
V_i\otimes V_j\cong\bigoplus_k(V_k\otimes K_{ij,k}).
$$
$K_{ij,k}$ 是耦合重数空间, $\dim K_{ij,k}=N_{ij,k}$.


所以张量积耦合可以理解为一个限制问题.
直积群下不可约的表示限制到对角子群以后, 分支成同一个群的若干不可约表示.

---
## 乘积基与耦合基


在 $V_i$ 和 $V_j$ 中选择基 $e_{i,a}$ 和 $e_{j,b}$.
它们给出乘积基 $e_{i,a}\otimes e_{j,b}$.


对每个出现在 $V_i\otimes V_j$ 中的 $V_k$, 选择耦合映射 $C_{k,\mu}:V_i\otimes V_j\to V_k$.
其 CG 系数定义为:
$$
C_{k,\mu}(e_{i,a}\otimes e_{j,b})=\sum_c C_{i a,j b;k c,\mu}e_{k,c}.
$$
相应的耦合基向量为:
$$
e_{i j;k,c,\mu}=\sum_{a,b}\bar{C_{i a,j b;k c,\mu}}(e_{i,a}\otimes e_{j,b}).
$$


乘积基保留两个子系统各自的分量标签.
耦合基改用对角群的总不可约类型 $k$, 类型内部标签 $c$ 和耦合重数标签 $\mu$.


> **理解提示:** 这里的 "总类型"只表示对角群 $G$ 的不可约表示标签.
> 它不是把两个原标签做普通数值相加.

---
## 对角群下的完整重数空间


把两个子系统的不可约分解与 CG 分解合在一起, 复合 Hilbert 空间在对角群下写成:
$$
\mathcal{H}_{A B}|_{\Delta_G}\cong\bigoplus_k(V_k\otimes\mathcal{M}_k).
$$
其中:
$$
\mathcal{M}_k=\bigoplus_{i,j}(K_{ij,k}\otimes M_{A,i}\otimes M_{B,j}).
$$


$\mathcal{M}_k$ 同时收集三类信息.
它记录哪些子系统不可约类型对 $(i,j)$ 能够耦合到 $k$, 每种耦合有多少条通道, 以及两个子系统各自的态重数.


对角群只识别 $V_k$.
它不能区分 $\mathcal{M}_k$ 中不同的来源与耦合通道.

---
## 相互作用怎样降低对称性


现在加入作用在两个子系统上的相互作用 $V$, 得到 $H=H_0+V$.
若 $V$ 保持完整直积群, 则:
$$
[V,U_A(g_1)\otimes U_B(g_2)]=0,\quad \forall(g_1,g_2)\in G\times G.
$$
这是两个子系统仍可独立变换的条件.


若 $V$ 只满足:
$$
[V,U_A(g)\otimes U_B(g)]=0,\quad \forall g\in G
$$
那么它只保持对角子群.
完整 Hamilton 算符的对称性便从 $G\times G$ 降低到 $\Delta_G$.


这正是上一篇讨论的表示限制.
母群现在是 $G\times G$, 剩余群是 $\Delta_G$.

---
## 对角不变 Hamilton 算符的块结构


若 $H$ 保持对角群, 利用分解 $\mathcal{H}_{A B}\cong\bigoplus_k(V_k\otimes\mathcal{M}_k)$ 可得:
$$
H=\bigoplus_k(\mathbb{1}_{V_k}\otimes H_k).
$$
$H_k$ 是 $\mathcal{M}_k$ 上的自伴算符.


因此不同的对角群不可约类型 $k$ 不能混合.
具有相同 $k$ 的不同子系统标签对 $(i,j)$, 不同耦合通道 $\mu$ 和不同态重数可以通过 $H_k$ 混合.


对角群下每个能级仍至少具有 $\dim V_k$ 重简并.
原来分别由 $i$ 和 $j$ 标记的直积群量子数一般不再单独保持.


> **理解提示:** 相互作用不是简单删除原标签.
> 它把所有能够产生同一个对角群类型 $k$ 的方向放入同一个重数空间, 然后在这个空间中决定真正的本征态.

---
## 完整直积对称性与对角对称性的区别


所有保持完整 $G\times G$ 的算符当然也保持 $\Delta_G$.
因此:
$$
\operatorname{End}_{G\times G}(\mathcal{H}_{A B})\subseteq\operatorname{End}_{\Delta_G}(\mathcal{H}_{A B}).
$$
对角不变算符空间通常更大.


新增的算符方向允许不同的直积群不可约类型对发生混合, 只要它们限制到对角群以后含有相同的 $V_k$.
这就是相互作用能够降低独立对称性但继续保持共同对称性的表示论原因.


不过保持完整直积群并不在逻辑上等于完全没有相互作用.
它只表示相互作用在两个群因子的独立变换下仍然不变.

---
## 怎样构造对角不变相互作用


给定任意候选相互作用 $V_0$, 可以对对角群做平均:
$$
\Pi_\Delta(V_0)=\frac{1}{|G|}\sum_{g\in G}[U_A(g)\otimes U_B(g)]V_0[U_A^\dagger(g)\otimes U_B^\dagger(g)].
$$
结果 $\Pi_\Delta(V_0)$ 与全部对角群作用对易.


若 $V_0$ 自伴, 群平均后的相互作用仍然自伴.
对一组候选相互作用分别平均并删除线性相关方向, 就得到对角不变相互作用的一组基.


这个构造与上一篇的不变 Hamilton 算符构造完全相同.
区别只在于这里使用的群表示是 $U_A(g)\otimes U_B(g)$.

---
## 两个算符多重态怎样耦合成不变量


设第一子系统上有类型 $V_\lambda$ 的算符多重态 $T_{\lambda,a}$.
设第二子系统上有类型 $V_\mu$ 的算符多重态 $S_{\mu,b}$.


在对角群作用下, 乘积算符 $T_{\lambda,a}\otimes S_{\mu,b}$ 按照张量积表示 $V_\lambda\otimes V_\mu$ 变换.
能够由这些乘积算符构造多少个对角不变量, 等于平凡表示在这个张量积中的重数:
$$
n_{\lambda\mu,\text{inv}}=\dim(V_\lambda\otimes V_\mu)_{\text{inv}}.
$$
特征标公式给出:
$$
n_{\lambda\mu,\text{inv}}=\frac{1}{|G|}\sum_{g\in G}\chi_\lambda(g)\chi_\mu(g).
$$


若 $V_\lambda$ 与 $V_\mu$ 都不可约, 这个数非零当且仅当 $V_\mu$ 与 $(V_\lambda)_{\text{dual}}$ 等价.
在这种情况下平凡表示出现一次.


> **理解提示:** 对角不变相互作用要求两个算符类型共同耦合到平凡表示.
> 这比要求每个局部算符分别不变更一般.

---
## 局部算符对复合态的选择定则


设 $T_{\lambda,a}$ 只作用在第一个子系统上.
它在复合空间中写成 $T_{\lambda,a}\otimes\mathbb{1}_B$.


在对角群作用下, 单位算符属于平凡类型, 所以这个复合算符仍属于类型 $V_\lambda$.
若初态和末态的对角群类型分别为 $V_k$ 和 $V_f$, 非零矩阵元要求 $V_f$ 出现在 $V_\lambda\otimes V_k$ 中.


所以一旦使用耦合基, 复合系统的选择定则与前面的有限群选择定则具有完全相同的形式.
区别只是态标签现在来自两个子系统耦合后的对角群不可约类型.

---
## 几个必须避免的混淆


Hilbert 空间张量积不自动决定使用 $G\times G$ 还是对角群 $G$.
真正的群作用必须单独指定.


外张量积 $V_i\boxtimes V_j$ 是 $G\times G$ 的表示.
普通张量积 $V_i\otimes V_j$ 是对角群 $G$ 的表示.


直积群不可约标签 $(i,j)$ 与对角群不可约标签 $k$ 属于不同分类.
它们通过 CG 分解联系, 不能彼此直接替换.


相互作用保持对角群不等于它保持完整直积群.
前者只要求两个子系统同时变换时不变, 后者要求两边独立变换时都不变.


耦合基不是新的 Hilbert 空间.
它只是同一个复合 Hilbert 空间中更适合对角群作用的基.

---
## 逻辑总结


两个子系统的 Hilbert 空间组成张量积 $\mathcal{H}_{A B}=\mathcal{H}_A\otimes\mathcal{H}_B$.
若两边的有限群变换可以独立进行, 对称群是直积群 $G_A\times G_B$, 表示为 $U_A(g)\otimes U_B(h)$.


当两个子系统具有同一个有限群 $G$ 时, 同时变换由对角子群 $\Delta_G=\{(g,g)\mid g\in G\}$ 描述.
外张量积限制到 $\Delta_G$ 后变成普通张量积, 并按照 $V_i\otimes V_j\cong\bigoplus_k(V_k\otimes K_{ij,k})$ 分解.


只保持对角群的相互作用把独立对称性从 $G\times G$ 降低到 $\Delta_G$.
复合 Hilbert 空间于是按照 $\mathcal{H}_{A B}\cong\bigoplus_k(V_k\otimes\mathcal{M}_k)$ 重新组织.


对角不变 Hamilton 算符具有形式 $H=\bigoplus_k(\mathbb{1}_{V_k}\otimes H_k)$.
它保持总不可约类型 $k$, 但可以在相应重数空间中混合不同子系统来源与耦合通道.


下一篇将研究有限置换群在量子系统中的作用.
重点是交换算符, 对称与反对称扇区, 以及多个相同自由度怎样由置换表示组织.
