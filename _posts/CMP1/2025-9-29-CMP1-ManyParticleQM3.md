---
title: "CMP1 全同粒子的再表述3"
date: 2025-09-12
categories:
  - CMP1
---

我们现在有了丰富的工具来处理全同粒子系统中的量子力学问题.
我们知道真实对于$$N$$个全同粒子的系统, 他么的空间是所有可能的单粒子空间的直和:

$$
\begin{equation}
\mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}^{(A/S)}_N
\end{equation}
$$

其中$$\mathcal{H}^{(A/S)}_N$$表示$$N$$个反对称/对称的单粒子空间的张量积空间.
然后我们强调了, 用对称基或者反对称基不如用布居数表象来得方便, 在Bosonic空间中:

$$
\begin{equation}
\ket{n_1, n_2, \cdots} = \frac{1}{\sqrt{N! \prod_i n_i!}} \sum_{P} \ket{i_1, i_2, \cdots, i_N}
\end{equation}
$$

在Fermionic空间中:

$$
\begin{equation}
\ket{n_1, n_2, \cdots} = \frac{1}{\sqrt{n_1! n_2! \cdots}} \sum_{P} \text{sgn}(P) \ket{i_1, i_2, \cdots, i_N}
\end{equation}
$$

布居数$$n_i$$表示第$$i$$个单粒子态被占据的粒子数, 对于Fermion来说只能是0或者1.
接下来我们引入了产生湮灭算符, 对于Bosonic系统:

$$
\begin{equation}
\hat{a}_i^\dagger \ket{n_1, n_2, \cdots} = \sqrt{n_i + 1} \ket{n_1, n_2, \cdots, n_i + 1, \cdots}
\end{equation}
$$
$$
\begin{equation}
\hat{a}_i \ket{n_1, n_2, \cdots} = \sqrt{n_i} \ket{n_1, n_2, \cdots, n_i - 1, \cdots}
\end{equation}
$$

对于Fermionic系统:

$$
\begin{equation}
\hat{c}_j^\dagger \ket{n_1, n_2, \cdots} = (-1)^{\sum_{k<j} n_k} \sqrt{1 - n_j} \ket{n_1, n_2, \cdots, n_j + 1, \cdots}
\end{equation}
$$
$$
\begin{equation}
\hat{c}_j \ket{n_1, n_2, \cdots} = (-1)^{\sum_{k<j} n_k} \sqrt{n_j} \ket{n_1, n_2, \cdots, n_j - 1, \cdots}
\end{equation}
$$

其中:

$$
\begin{equation}
\sum_{k<j} n_k = n_1 + n_2 + \cdots + n_{j-1}
\end{equation}
$$

Canonical commutation relations (CCR) 规则为:

1. $$[\hat{a}_i, \hat{a}_j] = [\hat{a}_i^\dagger, \hat{a}_j^\dagger] = 0$$
2. $$[\hat{a}_i, \hat{a}_j^\dagger] = \delta_{ij}$$
3. $$[\hat{n}_j, \hat{a}_j] = -\hat{a}_j$$
4. $$[\hat{n}_j, \hat{a}_j^\dagger] = \hat{a}_j^\dagger$$
5. $$[\hat{N}, \hat{a}_j] = -\hat{a}_j$$
6. $$[\hat{N}, \hat{a}_j^\dagger] = \hat{a}_j^\dagger$$

Canonical anticommutation relations (CAR) 规则为:

1. $$\{\hat{c}_i, \hat{c}_j\} = \{\hat{c}_i^\dagger, \hat{c}_j^\dagger\} = 0$$
2. $$\{\hat{c}_i, \hat{c}_j^\dagger\} = \delta_{ij}$$
3. $$[\hat{n}_j, \hat{c}_j] = -\hat{c}_j$$
4. $$[\hat{n}_j, \hat{c}_j^\dagger] = \hat{c}_j^\dagger$$
5. $$[\hat{N}, \hat{c}_j] = -\hat{c}_j$$
6. $$[\hat{N}, \hat{c}_j^\dagger] = \hat{c}_j^\dagger$$

现在我们来讨论一下基底变换的问题.

---
## 基底变换

假设我们有一组单粒子正交归一基$$\{\ket{u_i}\}$$, 以及另一组单粒子正交归一基$$\{\ket{v_i}\}$$.
这两组基底之间的关系可以通过一个酉矩阵$$U$$来表示:

$$
\begin{equation}
\ket{v_i} = \sum_j U_{ji} \ket{u_j}
\end{equation}
$$

其中:

$$
\begin{equation}
U_{ji} = \braket{u_j}{v_i}
\end{equation}
$$

我们现在先不说这些复杂的多粒子态, 我们就从单粒子态出发, 就是我们在量子力学1中学到的内容:

$$
\begin{equation}
\hat{a}_{v_i}^\dagger \ket{0} = \ket{v_i}
\end{equation}
$$

然后我们注意到:

$$
\begin{equation}
\ket{v_i} = \sum_j U_{ji} \ket{u_j} = \sum_j U_{ji} \hat{a}_{u_j}^\dagger \ket{0}
\end{equation}
$$

因此我们可以得到:

$$
\begin{equation}
\hat{a}_{v_i}^\dagger = \sum_j \braket{u_j}{v_i} \hat{a}_{u_j}^\dagger
\end{equation}
$$
$$
\begin{equation}
\hat{a}_{v_i} = \sum_j \braket{v_i}{u_j} \hat{a}_{u_j}
\end{equation}
$$

我们可以检查一下这些新的产生湮灭算符是否满足CCR:

$$
\begin{equation}
[\hat{a}_{v_i}, \hat{a}_{v_j}^\dagger] = \sum_{k,l} \braket{v_i}{u_k} \braket{u_l}{v_j} [\hat{a}_{u_k}, \hat{a}_{u_l}^\dagger]
\end{equation}
$$

计算这个对易子, 我们得到:

$$
\begin{equation}
\sum_{k,l} \braket{v_i}{u_k} \braket{u_l}{v_j} \delta_{kl} = \sum_k \braket{v_i}{u_k} \braket{u_k}{v_j} = \braket{v_i}{v_j} = \delta_{ij}
\end{equation}
$$

所有的这种基底变换, 无论是Bosonic还是Fermionic系统, 都可以通过类似的方法来处理.
如果想不明白, 也可以退回到多粒子态的定义, 然后一步步地展开验证.

---
## 单粒子算符

我们现在考虑单粒子算符$$\hat{f}$$, 它在单粒子空间$$\mathcal{H}$$中作用.
如果我们要考虑它在多粒子空间$$\mathcal{H}_N^{(A/S)}$$中的升级作用, 我们可以定义:

$$
\begin{equation}
\hat{F}^{(N)} = \sum_{i=1}^N \hat{f}_i
\end{equation}
$$

其中$$\hat{f}_i$$表示$$\hat{f}$$作用在第$$i$$个粒子上, 而对其他粒子起恒等作用.
他的核心思想很简单, 一个人要让单粒子算符作用在多粒子态上, 就让它作用在每一个粒子上, 然后把结果加起来.
但是我们要注意, 由于全同粒子的对称性或者反对称性, 这个定义是良定的, 也就是说, 它不会依赖于我们选择的粒子标号.

接下来我们可以把这个算符用产生湮灭算符来表示.
我们可以考虑单粒子算符$$\hat{f}$$在单粒子基$$\{\ket{u_i}\}$$中的矩阵元:

$$
\begin{equation}
f_{ij} = \mel{u_i}{\hat{f}}{u_j}
\end{equation}
$$

我们可以使用如下技巧, 然后我们专注在作用在 $$q$$ 上的算符$$\hat{f}_q$$:

$$
\begin{equation}
\hat{f}_q = \sum_{k,l} f_{kl} \ketbra{q=u_k}{q=u_l}
\end{equation}
$$

所以现在的大算符就是把 $$q$$ 加起来就行:

$$
\begin{equation}
\hat{F} = \sum_{k, l} f_{kl} \sum_{q=1}^N \ketbra{q=u_k}{q=u_l}
\end{equation}
$$

我们现在必须要注意一个问题: 这个算符作用在布居数上一眼看不出来, 但是作用在对称基态或者反对称基态上是很清楚的:

$$
\begin{equation}
\sum_{q=1}^N \ketbra{q=u_k}{q=u_l} \ket{1=u_i, 2=u_j, \cdots, q=u_m, \cdots, } = \sum_{q=1}^N \ket{1=u_i, 2=u_j, \cdots, q=u_k, \cdots, } \delta_{l m}
\end{equation}
$$

这就是说, 这个算符会把所有占据$$\ket{u_l}$$的粒子都变成占据$$\ket{u_k}$$的粒子.
所以我们可以用产生湮灭算符来表示这个过程:

$$
\begin{equation}
\sum_{q=1}^N \ketbra{q=u_k}{q=u_l} = \hat{a}_k^\dagger \hat{a}_l
\end{equation}
$$

对于Bosonic系统, 这个完全没问题, 对于Fermionic系统, 这个也没问题, 因为$$\hat{a}_l$$只能把占据$$\ket{u_l}$$的粒子给消灭掉, 然后$$\hat{a}_k^\dagger$$再把一个粒子放到$$\ket{u_k}$$上去.
因此我们最终得到单粒子算符在多粒子空间中对应的大算符的表示为:

$$
\begin{equation}
\hat{F} = \sum_{k,l} f_{kl} \hat{a}_k^\dagger \hat{a}_l = \sum_{k,l} \mel{u_k}{\hat{f}}{u_l} \hat{a}_k^\dagger \hat{a}_l
\end{equation}
$$