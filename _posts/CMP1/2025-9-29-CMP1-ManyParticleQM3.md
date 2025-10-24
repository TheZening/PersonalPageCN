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

这个结果非常重要, 它告诉我们, 任何单粒子算符在多粒子空间中的表示都可以通过产生湮灭算符来实现.
而且他还有一个特别简单的例子, 如果我们注意到, 我们现在单粒子算符基底$$\{\ket{u_i}\}$$是$$\hat{f}$$的本征态, 也就是说:

$$
\begin{equation}
\mel{u_k}{\hat{f}}{u_l} = f_k \delta_{kl}
\end{equation}
$$

这样我们就能获得:

$$
\begin{equation}
\hat{F} = \sum_{k} f_k \hat{a}_k^\dagger \hat{a}_k = \sum_k f_k \hat{n}_k
\end{equation}
$$

他的物理意义非常明确, 每个在$$k$$状态上的粒子都贡献一份$$f_k$$的量, 然后我们把所有粒子的贡献加起来就行了.

举个例子, 计数算符很明显就是这种算符:

$$
\begin{equation}
\hat{N} = \sum_k 1 \cdot \hat{a}_k^\dagger \hat{a}_k = \sum_k \hat{n}_k
\end{equation}
$$

系统的粒子数量就是所有单粒子态上粒子数的总和.
而且这个粒子数量不随着基底变换而变换, 这是显然的事儿, 我们联系一下数学推导:

$$
\begin{equation}
\sum_i \hat{a}_{u_i}^\dagger \hat{a}_{u_i} = \sum_{i} \left( \sum_{j} \braket{u_i}{v_j} \hat{a}_{v_j}^\dagger \right) \left( \sum_{k} \braket{v_k}{u_i} \hat{a}_{v_k} \right)
\end{equation}
$$

组合一下后面的东西:

$$
\begin{equation}
\sum_{j,k} \left( \sum_i \braket{u_i}{v_j} \braket{v_k}{u_i} \right) \hat{a}_{v_j}^\dagger \hat{a}_{v_k} = \sum_{j,k} \braket{v_k}{v_j} \hat{a}_{v_j}^\dagger \hat{a}_{v_k} = \sum_j \hat{a}_{v_j}^\dagger \hat{a}_{v_j}
\end{equation}
$$

没问题.
接下来我们还可以考虑Particle local density算符, 他的单粒子算符就是考虑在空间位置$$\ket{\boldsymbol{x}_0}$$处的投影算符:

$$
\begin{equation}
\hat{f} = \ketbra{\boldsymbol{x}_0}{\boldsymbol{x}_0}
\end{equation}
$$

从而他在多粒子空间中的对应的密度算符就是:

$$
\begin{equation}
\hat{D} = \sum_{k,l} \braket{u_k}{\boldsymbol{x}_0}\braket{\boldsymbol{x}_0}{u_l} \hat{a}_k^\dagger \hat{a}_l = \sum_{k,l} u_k^*(\boldsymbol{x}_0) u_l(\boldsymbol{x}_0) \hat{a}_k^\dagger \hat{a}_l
\end{equation}
$$

还可以考虑动量算符, 如果就是用动量态, 我们有:

$$
\begin{equation}
\hat{\boldsymbol{P}} = \sum_{\boldsymbol{k}_i} \hbar \boldsymbol{k}_i \hat{a}_{\boldsymbol{k}_i}^\dagger \hat{a}_{\boldsymbol{k}_i} = \sum_{\boldsymbol{k}_i} \hbar \boldsymbol{k}_i \hat{n}_{\boldsymbol{k}_i}
\end{equation}
$$

从而我们写出一般的自由Hamiltonian:

$$
\begin{equation}
\hat{H}_0 = \sum_{\boldsymbol{k}_i} \frac{\hbar^2 \boldsymbol{k}_i^2}{2m} \hat{a}_{\boldsymbol{k}_i}^\dagger \hat{a}_{\boldsymbol{k}_i} = \sum_{\boldsymbol{k}_i} \frac{\hbar^2 \boldsymbol{k}_i^2}{2m} \hat{n}_{\boldsymbol{k}_i}
\end{equation}
$$

---
## 双粒子算符

> (双粒子算符) 我们现在考虑双粒子算符$$\hat{g}$$, 它最小的作用空间是$$\mathcal{H} \otimes \mathcal{H}$$.
> 他就是作用在两个粒子上的算符, 记作$$\hat{g}(q, q')$$, 其中$$q$$和$$q'$$表示两个粒子, $$q \neq q'$$.

如果我们想把他提升到$$N$$粒子空间$$\mathcal{H}_N^{(A/S)}$$中, 我们可以定义:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{q, q' = 1, q \neq q'}^N \hat{g}(q, q')
\end{equation}
$$

换句话说, 我们让这个双粒子算符作用在每一对粒子上, 然后把结果加起来, 最后除以2以避免重复计算.
同样地, 由于全同粒子的对称性或者反对称性, 这个定义是良定的, 不依赖于粒子标号的选择.
接下来我们可以把这个算符用产生湮灭算符来表示.

我们首先需要讨论可拆开成单粒子算符乘积的双粒子算符, 也就是说:

$$
\begin{equation}
\hat{g}(q, q') = \hat{f}(q) \hat{h}(q')
\end{equation}
$$

那么我们的大算符就是:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{q, q' = 1, q \neq q'}^N \hat{f}(q) \hat{h}(q') = \frac{1}{2} \left( \sum_{q, q' = 1}^N \hat{f}(q) \hat{h}(q') - \sum_{q=1}^N \hat{f}(q) \hat{h}(q) \right)
\end{equation}
$$

我们已经知道了单粒子算符的表示:

$$
\begin{equation}
\sum_{q=1}^N \hat{f}(q) = \sum_{i,j} \mel{u_i}{\hat{f}}{u_j} \hat{a}_i^\dagger \hat{a}_j
\end{equation}
$$
$$
\begin{equation}
\sum_{q'=1}^N \hat{h}(q') = \sum_{j, l} \mel{u_j}{\hat{h}}{u_l} \hat{a}_j^\dagger \hat{a}_l
\end{equation}
$$

后面的那个算符就是单体算符, 不做用在$$q'$$上:

$$
\begin{equation}
\sum_{q=1}^N \hat{f}(q) \hat{h}(q) = \sum_{i, l} \mel{u_i}{\hat{f} \hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_l
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \left( \sum_{i, j, k, l} \mel{u_i}{\hat{f}}{u_k} \mel{u_j}{\hat{h}}{u_l} (\hat{a}_i^\dagger \hat{a}_k) (\hat{a}_j^\dagger \hat{a}_l) - \sum_{i, l} \mel{u_i}{\hat{f} \hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_l \right)
\end{equation}
$$

我们稍微调整一下顺序:

$$
\begin{equation}
(\hat{a}_i^\dagger \hat{a}_k) (\hat{a}_j^\dagger \hat{a}_l) = \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k + \delta_{j k} \hat{a}_i^\dagger \hat{a}_l
\end{equation}
$$

最后一个项为:

$$
\begin{equation}
\sum_{i,j,k,l} \mel{u_i}{\hat{f}}{u_k} \mel{u_j}{\hat{h}}{u_l} \delta_{j k} \hat{a}_i^\dagger \hat{a}_l = \sum_{i,l} \mel{u_i}{\hat{f} \hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_l
\end{equation}
$$

非常好! 我们就有了可以消除最后一个项的方法, 所以我们有:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{i, j, k, l} \mel{u_i}{\hat{f}}{u_k} \mel{u_j}{\hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

这个结果非常重要, 它告诉我们, 任何可拆开的双粒子算符在多粒子空间中的表示都可以通过产生湮灭算符来实现.
但是真实世界是残酷的, 很多双粒子算符是不可拆开的, 例如Coulomb相互作用:

$$
\begin{equation}
\hat{g}(q, q') = \frac{e^2}{4 \pi \epsilon_0} \frac{1}{|\hat{\boldsymbol{x}}_q - \hat{\boldsymbol{x}}_{q'}|}
\end{equation}
$$

这是完全不可拆的, 我们只能尝试如下的展开:

$$
\begin{equation}
\hat{g}(q, q') = \sum_{\alpha, \beta} \hat{f}_\alpha(q) \hat{h}_\beta(q')
\end{equation}
$$

然后我们就能得到多粒子空间中的提升:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{\alpha, \beta} \sum_{q=1, q' = 1, q \neq q'}^N c_{\alpha, \beta} \hat{f}_\alpha(q) \hat{h}_\beta(q')
\end{equation}
$$

我们现在可以把$$\hat{f}_\alpha$$和$$\hat{h}_\beta$$分别用产生湮灭算符来表示, 然后把结果加起来就行了:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{\alpha, \beta} c_{\alpha, \beta} \sum_{i, j, k, l} \mel{u_i}{\hat{f}_\alpha}{u_k} \mel{u_j}{\hat{h}_\beta}{u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

这个结果虽然不如前一个结果简洁, 但是他是通用的, 适用于任何双粒子算符, 而且我们可以进行记号上的化简, 仔细看:

$$
\begin{equation}
\sum_{\alpha, \beta} c_{\alpha, \beta} \mel{u_i}{\hat{f}_\alpha}{u_k} \mel{u_j}{\hat{h}_\beta}{u_l}
\end{equation}
$$

这就是$$\mel{u_i, u_j}{\hat{g}}{u_k, u_l}$$, 回想起来:

$$
\begin{equation}
\hat{g}(q, q') = \sum_{\alpha, \beta} c_{\alpha, \beta} \hat{f}_\alpha(q) \hat{h}_\beta(q')
\end{equation}
$$

我们可以有:

$$
\begin{equation}
g_{i,j,k,l} = \braket{1=u_i, 2=u_j}{\hat{g}(1,2)}{1=u_k, 2=u_l} = \sum_{\alpha, \beta} c_{\alpha, \beta} \mel{u_i}{\hat{f}_\alpha}{u_k} \mel{u_j}{\hat{h}_\beta}{u_l}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{i, j, k, l} g_{i,j,k,l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$