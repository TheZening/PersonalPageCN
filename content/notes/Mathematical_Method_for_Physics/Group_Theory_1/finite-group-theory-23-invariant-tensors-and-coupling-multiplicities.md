---
title: 有限群论 23 - 不变张量与耦合重数
date: 2026-08-18
weight: 23
---


二重张量积的不可约分解已经给出了两个表示之间的乘法规则.
当张量因子增加时, 同一个问题可以统一表述为寻找多重张量积中的某个不可约分量.
其中最基本的情形是寻找平凡表示, 也就是寻找不变张量.


不变张量、交织映射与不可约分解重数并不是三个不同的问题.
它们通过对偶表示与平均化投影彼此等价.
这一篇将把这种等价推广到任意有限个张量因子.


> **阅读提示:** 这篇只回答两个问题: 多重张量积中有多少个不变方向, 以及某个目标不可约表示出现多少次.
> 两个答案都由同一种特征标平均给出; 加入目标表示的对偶以后, 第二个问题就变成第一个问题.

---
## 多重张量积表示


设 $V_1,\ldots,V_n$ 是有限群 $G$ 的有限维复表示, 相应作用记为 $\rho_1,\ldots,\rho_n$.
定义多重张量积空间:
$$
W=V_1\otimes\cdots\otimes V_n.
$$
群在 $W$ 上的对角作用为:
$$
R(g)=\rho_1(g)\otimes\cdots\otimes\rho_n(g).
$$
在纯张量上有:
$$
R(g)(v_1\otimes\cdots\otimes v_n)=\rho_1(g)v_1\otimes\cdots\otimes\rho_n(g)v_n.
$$


张量积线性映射的迹等于各因子迹的乘积.
因此多重张量积的特征标为:
$$
\boxed{\chi_W(g)=\prod_{a=1}^{n}\chi_{V_a}(g)}.
$$

---
## 不变张量空间


多重张量积中的不变张量空间定义为:
$$
W_{\text{inv}}=\{w\in W\mid R(g)w=w,\quad\forall g\in G\}.
$$
它是 $W$ 中最大的平凡子表示.
因此 $\dim W_{\text{inv}}$ 等于平凡表示在 $W$ 的不可约分解中出现的重数.


> **术语提示:** “不变张量”不是说它的坐标在任意换基下不变, 而是说给定的群作用施加到所有张量因子以后, 这个张量本身不变.

---
## 平均化投影


定义平均化算符:
$$
P_{\text{inv}}=\frac{1}{|G|}\sum_{g\in G}R(g).
$$
群平均后的向量在任何群元素作用下都不变; 已经不变的向量经过平均则保持原样.
所以:
$$
\boxed{\operatorname{Im}P_{\text{inv}}=W_{\text{inv}}}.
$$


由这个结论立即得到:
$$
P_{\text{inv}}^2=P_{\text{inv}}.
$$
因此 $P_{\text{inv}}$ 正是从多重张量积投影到不变张量空间的投影算符.

---
## 不变张量的维数公式


投影的迹等于它的像空间维数, 所以:
$$
\dim W_{\text{inv}}=\operatorname{tr}P_{\text{inv}}.
$$
代入平均化投影并使用多重张量积的特征标, 得到:
$$
\begin{aligned}
\dim W_{\text{inv}}
&=\frac{1}{|G|}\sum_{g\in G}\operatorname{tr}R(g)\\
&=\frac{1}{|G|}\sum_{g\in G}\prod_{a=1}^{n}\chi_{V_a}(g).
\end{aligned}
$$
因此:
$$
\boxed{\dim(V_1\otimes\cdots\otimes V_n)_{\text{inv}}=\frac{1}{|G|}\sum_{g\in G}\prod_{a=1}^{n}\chi_{V_a}(g)}.
$$


右侧表面上是复数的平均值, 但左侧说明它必定是非负整数.
这个整数为零当且仅当多重张量积中不存在非零不变张量.

---
## 带有目标表示的耦合空间


只寻找平凡表示还不够一般.
设 $U$ 是 $G$ 的不可约复表示, 并仍令:
$$
W=V_1\otimes\cdots\otimes V_n.
$$
定义从 $U$ 到 $W$ 的耦合空间为:
$$
\operatorname{Coup}_G(U;V_1,\ldots,V_n)=\operatorname{Hom}_G(U,W).
$$
这个空间的每个非零元素都是把 $U$ 等变地嵌入多重张量积的交织映射.


由完全可约性, 若 $U$ 在 $W$ 中出现 $m_U$ 次, 则:
$$
\dim\operatorname{Hom}_G(U,W)=m_U.
$$
因此耦合空间的维数就是目标表示 $U$ 的分解重数.


> **术语提示:** “耦合空间”在这里没有添加新的代数结构, 它就是交织映射空间.
> 它的维数为零表示目标类型根本不出现, 维数大于一表示存在多个线性无关的嵌入方式.

---
## 耦合空间就是不变张量空间


对偶张量积与交织映射之间的自然同构给出:
$$
U_{\text{dual}}\otimes W\cong\operatorname{Hom}_{\mathbb{C}}(U,W).
$$
取不变子空间以后得到:
$$
\boxed{(U_{\text{dual}}\otimes V_1\otimes\cdots\otimes V_n)_{\text{inv}}\cong\operatorname{Hom}_G(U,V_1\otimes\cdots\otimes V_n)}.
$$


所以寻找 $U$ 在多重张量积中的副本, 等价于在加入一个 $U_{\text{dual}}$ 因子以后寻找不变张量.
目标表示问题由此统一成平凡表示问题.

---
## 一般耦合重数公式


记 $U$ 在 $V_1\otimes\cdots\otimes V_n$ 中的重数为:
$$
N_{U;V_1,\ldots,V_n}=\dim\operatorname{Coup}_G(U;V_1,\ldots,V_n).
$$
对刚才的不变张量空间使用维数公式, 得到:
$$
N_{U;V_1,\ldots,V_n}=\frac{1}{|G|}\sum_{g\in G}\chi_{U_{\text{dual}}}(g)\prod_{a=1}^{n}\chi_{V_a}(g).
$$
利用对偶特征标关系:
$$
\chi_{U_{\text{dual}}}(g)=\bar{\chi_U(g)},
$$
可以写成:
$$
\boxed{N_{U;V_1,\ldots,V_n}=\frac{1}{|G|}\sum_{g\in G}\bar{\chi_U(g)}\prod_{a=1}^{n}\chi_{V_a}(g)}.
$$
按照栏目采用的类函数内积约定, 这就是:
$$
\boxed{N_{U;V_1,\ldots,V_n}=\langle\chi_U,\chi_{V_1}\cdots\chi_{V_n}\rangle_G}.
$$

---
## 平凡目标就是不变张量


若目标表示取平凡表示 $\mathbb{1}$, 则 $\chi_{\mathbb{1}}(g)=1$.
一般耦合重数公式退化为:
$$
N_{\mathbb{1};V_1,\ldots,V_n}=\frac{1}{|G|}\sum_{g\in G}\prod_{a=1}^{n}\chi_{V_a}(g).
$$
另一方面:
$$
\operatorname{Hom}_G(\mathbb{1},W)\cong W_{\text{inv}}.
$$
所以:
$$
\boxed{N_{\mathbb{1};V_1,\ldots,V_n}=\dim W_{\text{inv}}}.
$$
这说明不变张量正是耦合到平凡表示的耦合映射.

---
## 等变多线性映射


从 $V_1\times\cdots\times V_n$ 到表示 $U$ 的多线性映射, 等价于线性映射:
$$
F:V_1\otimes\cdots\otimes V_n\to U.
$$
这个多线性映射与群作用相容, 当且仅当 $F$ 是交织映射.
因此所有等变多线性映射组成的空间为:
$$
\operatorname{Hom}_G(V_1\otimes\cdots\otimes V_n,U).
$$


若 $U$ 不可约, 完全可约性说明:
$$
\dim\operatorname{Hom}_G(V_1\otimes\cdots\otimes V_n,U)=m_U.
$$
所以把 $U$ 映入张量积与把张量积映到 $U$ 虽然是方向相反的交织映射问题, 它们的维数都等于同一个不可约重数.

---
## 不变多线性形式


取 $U=\mathbb{C}$ 并让 $G$ 平凡地作用在值域上, 就得到复值多线性形式.
所有这类多线性形式组成的空间为:
$$
(V_1)_{\text{dual}}\otimes\cdots\otimes(V_n)_{\text{dual}}.
$$
其中的 $G$-不变向量正是不变多线性形式.
因此:
$$
\boxed{\{G\text{-不变复值多线性形式}\}\cong((V_1)_{\text{dual}}\otimes\cdots\otimes(V_n)_{\text{dual}})_{\text{inv}}}.
$$


这里必须区分不变张量与不变多线性形式.
前者位于 $V_1\otimes\cdots\otimes V_n$, 后者位于各个对偶表示的张量积.
只有在给定表示与对偶表示之间的同构以后, 两种空间才能进一步对应.

---
## 二重耦合系数的不变张量解释


设 $V_i,V_j$ 是不可约表示, 并令 $V_a$ 遍历全部不可约表示的同构类代表.
沿用张量积分解系数, 有:
$$
V_i\otimes V_j\cong\bigoplus_a N_{ij,a}V_a.
$$
对另一个不可约表示 $V_k$, 它的重数可以写成:
$$
N_{ij,k}=\dim\operatorname{Hom}_G(V_k,V_i\otimes V_j).
$$
加入对偶表示以后得到:
$$
\boxed{N_{ij,k}=\dim((V_k)_{\text{dual}}\otimes V_i\otimes V_j)_{\text{inv}}}.
$$


所以二重张量积中的分解系数也可以看成三重张量积中的不变张量维数.
张量因子的交换只改变排列, 不改变不变空间维数.

---
## 耦合映射的数目


耦合重数不仅判断目标表示是否出现, 还计算线性无关耦合映射的数目.
若:
$$
N_{U;V_1,\ldots,V_n}=0,
$$
则不存在从 $U$ 到多重张量积的非零交织映射.
若:
$$
N_{U;V_1,\ldots,V_n}=1,
$$
则非零耦合映射在整体复标量之外是唯一的.
若重数大于 $1$, 则耦合空间中存在多个线性无关方向, 需要选择一组基才能分别标记它们.


因此不可约分解只给出重数, 而具体耦合张量还依赖耦合空间中的基选择.

---
## 逻辑总结


多重张量积的不变投影为:
$$
P_{\text{inv}}=\frac{1}{|G|}\sum_{g\in G}\rho_1(g)\otimes\cdots\otimes\rho_n(g).
$$
它的迹给出不变张量维数:
$$
\dim(V_1\otimes\cdots\otimes V_n)_{\text{inv}}=\frac{1}{|G|}\sum_{g\in G}\prod_{a=1}^{n}\chi_{V_a}(g).
$$
加入目标表示的对偶以后, 耦合空间变成不变张量空间:
$$
\operatorname{Hom}_G(U,V_1\otimes\cdots\otimes V_n)\cong(U_{\text{dual}}\otimes V_1\otimes\cdots\otimes V_n)_{\text{inv}}.
$$
所以一般耦合重数为:
$$
N_{U;V_1,\ldots,V_n}=\langle\chi_U,\chi_{V_1}\cdots\chi_{V_n}\rangle_G.
$$
平凡目标给出不变张量, 一般目标给出相应不可约表示的分解重数.
具体耦合张量需要在相应交织映射空间中选择基, 而特征标公式只决定这个空间的维数.


下一篇将研究表示空间上的对易代数与对称性分块.
