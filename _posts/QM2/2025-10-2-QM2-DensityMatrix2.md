---
title: "QM2 密度矩阵2"
date: 2025-10-02
categories:
  - QM2
---

## 关于本征态的测量

我们考虑一个纯态 $\ket{\psi}$, 我们自然是可以用一组本征态( $\ket{i}$ )来测量他, 从而得到:

$$
\begin{equation}
P(\text{态在}i\text{上}) = |\braket{i|\psi}|^2
\end{equation}
$$

测量之后, 系统会坍缩到 $\ket{i}$ 上.
我们现在可以把这一套语言完全的搬到密度矩阵上.
此时, 我们发现系统在 $\ket{i}$ 上的概率会有一个经典的统计权重:

$$
\begin{equation}
P(\text{态在}i\text{上}) = \sum_{\alpha=1}^N p_\alpha |\braket{i|\psi_\alpha}|^2 = \mel{i}{\rho}{i}
\end{equation}
$$

这说明, 概率分布由密度矩阵本身给出, 而不是某个具体的系综表示.
我们这么说, 是因为不同的系综分解可能会给出同样的密度矩阵.

一旦我们完成了测量, 系统会坍缩到 $\ket{i}$ 上.
此时, 系统的密度矩阵会变成:

$$
\begin{equation}
\rho \to \frac{\ket{i}\bra{i} \rho \ket{i}\bra{i}}{\mel{i}{\rho}{i}} = \ketbra{i}{i}
\end{equation}
$$

也就是说, 测量之后, 系统会变成一个纯态, 这个纯态就是测量的本征态.
此时此刻我们可以定义projective measurement的测量算符, 是因为量子测量不仅给你一个随机结果, 还会改变系统的状态!

$$
\begin{equation}
M_i = \ketbra{i}{i}
\end{equation}
$$

1. 自伴随, $$M_i^\dagger = M_i$$
2. 幂等, $$M_i^2 = M_i$$
3. 完备, $$\sum_i M_i = I$$

这正是我们在QM1中学到的投影测量.
集合所有的测量算符, 我们发现:

1. 两两正交, $$M_i M_j = \delta_{ij} M_i$$
2. 覆盖所有可能的测量结果, $$\sum_i M_i = I$$

他们组成一套完备的正交归一化投影测量 (complete set of orthogonal projectors).

> 想象一个袋子里有黑球和白球. 比例不一定是 50-50.
> 你没摸之前, 这是个混合分布, 概率性描述.
> 你伸手摸出一个球, 并且看见它是白球, 现在你对结果有了确定知识, 所以状态是白球, 纯态.
> 但如果你摸完又把结果藏起来不给任何人看, 外部观察者只能说嗯, 它还是按一定概率是黑球/白球, 这就回到混合分布.

举个例子, 我们考虑一个混合态:

$$
\begin{equation}
\rho = \frac{1}{2} \ketbra{0}{0} + \frac{1}{2} \ketbra{+}{+}
\end{equation}
$$

$$
\begin{equation}
\ket{+} = \frac{1}{\sqrt{2}} (\ket{0} + \ket{1})
\end{equation}
$$

也就是说, 系统有一半概率在 $\ket{0}$ 上, 另一半概率在 $\ket{+}$ 上.
我们把 $\rho$ 写成矩阵形式:

$$
\begin{equation}
\rho = \frac{1}{2} \mqty[ 1 & 0 \\ 0 & 0 ] + \frac{1}{2} \mqty[ 1/2 & 1/2 \\ 1/2 & 1/2 ] = \mqty[ 3/4 & 1/4 \\ 1/4 & 1/4 ]  
\end{equation}
$$

我们在 $\{ \ket{0}, \ket{1} \}$ 基底上测量, 也就是测量算符:

$$
\begin{equation}
M_0 = \ketbra{0}{0}, \quad M_1 = \ketbra{1}{1}
\end{equation}
$$


$$
\begin{equation}
P(0) = \mel{0}{\rho}{0} = 3/4, \quad P(1) = \mel{1}{\rho}{1} = 1/4
\end{equation}
$$

如果测到了 $$0$$, 系统坍缩到 $$\ket{0}$$ 上, 密度矩阵变成 $$\rho \to \ketbra{0}{0}$$.
如果测到了 $$1$$, 系统坍缩到 $$\ket{1}$$ 上, 密度矩阵变成 $$\rho \to \ketbra{1}{1}$$.
此时我们要注意到:

> 看了结果 $$\Leftrightarrow$$ 系统变成纯态.

如果我们没看结果呢?
我们只能说系统有 $3/4$ 概率在 $\ket{0}$ 上, $1/4$ 概率在 $\ket{1}$ 上.
也就是说, 系统的密度矩阵变成:

$$
\begin{equation}
\rho \to \frac{3}{4} \ketbra{0}{0} + \frac{1}{4} \ketbra{1}{1} = \mqty[ 3/4 & 0 \\ 0 & 1/4 ]
\end{equation}
$$

也就是说虽然我们测量了, 换句话说, 系统和我们的测量装置发生了相互作用, 但是我们只关心了系统, 没去看那个测量装置的结果.
我们如何系统性的取描述这件事呢?
我们一步一步的来.


---
## 密度矩阵的演化

我们从Schrödinger方程出发, 讨论密度矩阵的演化.
Schrödinger方程告诉我们, 如果系统在时间 $t=0$ 时刻处于纯态 $\ket{\psi(0)}$, 那么在时间 $t$ 时刻, 系统会演化到:

$$
\begin{equation}
\ket{\psi(t)} = U(t) \ket{\psi(0)}, \quad U(t) = \mathrm{e}^{-\mathrm{i}Ht/\hbar}
\end{equation}
$$

等价的说就是Schrödinger方程:

$$
\begin{equation}
\pdv{}{t} \ket{\psi(t)} = -\frac{\mathrm{i}}{\hbar} H \ket{\psi(t)}
\end{equation}
$$

从而我们可以计算:

$$
\begin{equation}
\pdv{}{t} \ketbra{\psi}{\psi} = -\frac{\mathrm{i}}{\hbar} H \ketbra{\psi}{\psi} + \ketbra{\psi}{\psi} \frac{\mathrm{i}}{\hbar} H = -\frac{\mathrm{i}}{\hbar} [H, \ketbra{\psi}{\psi}]
\end{equation}
$$

立刻升级到密度矩阵版本:

$$
\begin{equation}
\pdv{\rho}{t} = -\frac{\mathrm{i}}{\hbar} [H, \rho]
\end{equation}
$$

这就是密度矩阵的Liouville-von Neumann方程.
我们立刻可以注意到一个小细节: 左侧是Hermitian的, 右侧$$[H, \rho]$$是anti-Hermitian的, 乘以$$-\mathrm{i}$$之后是Hermitian的, 所以方程是自洽的.
现在看看密度矩阵的时间演化:

$$
\begin{equation}
\rho(t) = U(t) \rho(0) U^\dagger(t)
\end{equation}
$$

我们也可以检查, unitary演化不会改变密度矩阵的纯度:

$$
\begin{align}
\dv{}{t} \tr(\rho^2) &= \tr\left( \pdv{\rho}{t} \rho + \rho \pdv{\rho}{t} \right) \\
&= \frac{2}{\mathrm{i}\,\hbar} \tr( \rho [H, \rho] ) \\
&= \frac{2}{\mathrm{i}\,\hbar} \left( \tr(\rho H \rho) - \tr(H \rho^2) \right) \\
&= 0
\end{align}
$$

光有演化还不够, 我们还得考虑子系统的问题: 之前的讨论中, 研究的系统和仪器很明显是一个整体, 属于一个大系统的一部分.

---
## 子系统的密度矩阵

我们考虑一个大系统, 他的Hilbert空间是 $$\mathcal{H} = \mathcal{H}_A \otimes \mathcal{H}_B$$.
我们之前在Alice和Bob的论证中已经见过这种情况, 我们当时说, 必须得考虑密度矩阵才能完全的描述整体.
现在规定: 系统 $$A$$ 的维度是 $$d_A$$, 系统 $$B$$ 的维度是 $$d_B$$.
他们的正交归一基如下:

$$
\begin{align}
\dim \mathcal{H}_A &= d_A, \quad \{ e_1^A, e_2^A, \cdots, e_{d_A}^A \} \\
\dim \mathcal{H}_B &= d_B, \quad \{ e_1^B, e_2^B, \cdots, e_{d_B}^B \}
\end{align}
$$

整体的密度矩阵必然是 $$d_A d_B \times d_A d_B$$ 的矩阵, $$\rho_{AB}$$.
我们现在问个问题: 如果我们只关心 $$A$$ 系统, 那么 $$A$$ 系统的密度矩阵 $$\rho_A$$ 是什么?
这就是约化密度矩阵 (reduced density matrix) 的概念:

$$
\begin{equation}
\rho_A = \tr_B(\rho_{AB}) = \sum_{k=1}^{d_B} \mel{e_k^B}{\rho_{AB}}{e_k^B}
\end{equation}
$$

也就是说, 我们把 $$B$$ 系统的自由度给tr掉, 只留下 $$A$$ 系统的密度矩阵.
我们可以验证, $$\rho_A$$ 仍然是一个合法的密度矩阵:

$$
\begin{equation}
\tr_A(\rho_A) = \tr_A(\rho_A) = \tr_A(\tr_B(\rho_{AB})) = \tr(\rho_{AB}) = 1
\end{equation}
$$

他是半正定的, Hermitian的.
但最一锤定音还是如下的检查:

$$
\begin{equation}
\tr_A(\rho_A \mathcal{O}) = \tr(\rho_{AB} (\mathcal{O} \otimes I_B))
\end{equation}
$$

考虑到:

$$
\begin{equation}
\rho_{AB} = \sum_{i,j,k,l} \rho_{ij,kl} \ketbra{e_i^A e_j^A}{e_k^B e_l^B}
\end{equation}
$$

从而我们得到:

$$
\begin{equation}
\rho_A = \sum_{i,j,k,l} \rho_{ij,kl} \ketbra{e_i^A}{e_j^A} \braket{e_l^B}{e_k^B} = \sum_{i,j,k} \rho_{ij,kk} \ketbra{e_i^A}{e_j^A}
\end{equation}
$$

我们可以验证:

$$
\begin{align}
\tr_A(\rho_A \mathcal{O}) = & \sum_{i,j,k} \rho_{ij,kk} \mel{e_j^A}{\mathcal{O}}{e_i^A} \\
=& \sum_{i,j,k,l,m} \rho_{ij,kl} \mel{e_j^A e_l^B}{\mathcal{O} \otimes I_B}{e_i^A e_k^B} \\
=& \tr(\rho_{AB} (\mathcal{O} \otimes I_B))
\end{align}
$$

自始至终我们都没用到任何关于$$\rho_B$$的信息, 这说明 $$\rho_A$$ 的定义是完备的, 只要知道 $$\rho_{AB}$$ 就能算出来.
换句话说, 想找到描述 $$A$$ 系统的密度矩阵是行的, 但是一个态描述 $$A$$ 系统的态是不行的.


还是看原来的例子, Alice和Bob共享一个纠缠态:

$$
\begin{equation}
\ket{\psi_{AB}} = \frac{1}{\sqrt{2}} (\ket{+_A -_B} - \ket{-_A +_B})
\end{equation}
$$


我们立刻可以写出大系统的密度矩阵:

$$
\begin{align}
\rho_{AB} &= \ketbra{\psi_{AB}}{\psi_{AB}} \\
&= \frac{1}{2} \ketbra{+_A}{+_A} \otimes \ketbra{-_B}{-_B} \\
& - \frac{1}{2} \ketbra{+_A}{-_A} \otimes \ketbra{-_B}{+_B} \\
& - \frac{1}{2} \ketbra{-_A}{+_A} \otimes \ketbra{+_B}{-_B} \\
& + \frac{1}{2} \ketbra{-_A}{-_A} \otimes \ketbra{+_B}{+_B}
\end{align}
$$

我们现在计算 $$A$$ 系统的约化密度矩阵:

$$
\begin{align}
\rho_A &= \tr_B(\rho_{AB}) \\
&= \frac{1}{2} \ketbra{+_A}{+_A} \tr(\ketbra{-_B}{-_B}) \\
& - \frac{1}{2} \ketbra{+_A}{-_A} \tr(\ketbra{-_B}{+_B}) \\
& - \frac{1}{2} \ketbra{-_A}{+_A} \tr(\ketbra{+_B}{-_B}) \\
& + \frac{1}{2} \ketbra{-_A}{-_A} \tr(\ketbra{+_B}{+_B}) \\
&= \frac{1}{2} \ketbra{+_A}{+_A} + \frac{1}{2} \ketbra{-_A}{-_A}
\end{align}
$$

我们也可以计算 $$B$$ 系统的约化密度矩阵:

$$
\begin{align}
\rho_B &= \tr_A(\rho_{AB}) \\
&= \frac{1}{2} \ketbra{-_B}{-_B} \tr(\ketbra{+_A}{+_A}) \\
& - \frac{1}{2} \ketbra{-_B}{+_B} \tr(\ketbra{+_A}{-_A}) \\
& - \frac{1}{2} \ketbra{+_B}{-_B} \tr(\ketbra{-_A}{+_A}) \\
& + \frac{1}{2} \ketbra{+_B}{+_B} \tr(\ketbra{-_A}{-_A}) \\
&= \frac{1}{2} \ketbra{-_B}{-_B} + \frac{1}{2} \ketbra{+_B}{+_B}
\end{align}
$$
也就是说, Alice和Bob各自的系统都是一个完全混合态.
这就是纠缠态的魔力: 整体是纯态, 局部是混合态.
就是说原来的综合起来的纯态, 是非常纠缠的.

---
## Schmidt分解

我们发现, 我们刚才把一个纠缠态的整体密度矩阵约化到局部, 我们可以拓宽一下这个过程.

> 如果我们有一个复合系统, 由A,B两个子系统组成, 那么任何一个纯态, 我们总能找到一对正交归一基, 使得这个纯态可以写成如下形式:
> $$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{r} \lambda_i \ket{u_i^A} \otimes \ket{v_i^B}
\end{equation}
$$
> 其中 $$\{ \ket{u_i^A} \}$$ 和 $$\{ \ket{v_i^B} \}$$ 分别是 $$\mathcal{H}_A$$ 和 $$\mathcal{H}_B$$ 的正交归一基, $$\lambda_i > 0$$, $$r \leq \min(d_A, d_B)$$.
> 这个分解叫做Schmidt分解, $$\lambda_i$$ 叫做Schmidt系数, $$r$$ 叫做Schmidt秩.
> 如果只有一个非零的Schmidt系数, 那么这个态是可分的, 否则是纠缠的.


我们还是从最基础的出发:

$$
\begin{equation}
\rho_{AB} = \ketbra{\psi_{AB}}{\psi_{AB}}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\rho_A = \tr_B(\rho_{AB})
\end{equation}
$$

我们还是在 $$\mathcal{H}_A$$ 上找一组正交归一基 $$\{ \ket{u_i^A} \}$$, $$i=1,2,\cdots,d_A$$, 把 $$\rho_A$$ 对角化, 从而我们得到eigen-system:

$$
\begin{equation}
\{ p_k, \ket{u_k^A} \}, \quad k=1,2,\cdots,d_A
\end{equation}
$$

也就是说:

$$
\begin{equation}
\rho_A = \sum_{k=1}^{d_A} p_k \ketbra{u_k^A}{u_k^A}, \quad p_k \geq 0, \quad \sum_{k=1}^{d_A} p_k = 1
\end{equation}
$$

如果$$\rho_A$$是纯态, 这个分解可能一项就结束了, 所以我们会发现能求和的项数一般小于$$d_A$$.
我们把$$p_k$$非零的项数叫做$$r$$, 也就是Schmidt秩.
我们于是重新排序一下, 让没有投影在本征态上的部分放在后面:

$$
\begin{equation}
\rho_A = \sum_{k=1}^{r} p_k \ketbra{u_k^A}{u_k^A}, r \leq d_A
\end{equation}
$$

其中, $$p_{k>r} = 0$$.
我们回头看原来大系统的纯态, $$\ket{u_i^A}$$ 是 $$\mathcal{H}_A$$ 的一组完备基, 所以我们可以把 $$\ket{\psi_{AB}}$$ 展开成:

$$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{d_A} \ket{u_i^A} \otimes \ket{\phi_i^B}
\end{equation}
$$

注意啊, 这时候有趣的来了:

> $$\ket{\phi_i^B}$$ 不一定是归一化的, 也不一定是正交的, 我们不太清楚他到底是个啥.
> 但是, 对于每一个$$\ket{u_i^A}$$, $$\ket{\phi_i^B}$$是唯一确定的.
> 由于$$\ket{u_i^A}$$只有$$d_A$$个, 所以我们只需要考虑$$\ket{\phi_i^B}$$, $$i=1,2,\cdots,d_A$$就够了.
> 这就是Schmidt分解的关键点, 此时我们展开式只有$$d_A$$项, 而不是$$d_A d_B$$项.

补充一下, 如果我们暴力张量积分解的话:

$$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{d_A} \sum_{j=1}^{d_B} c_{ij} \ket{e_i^A} \otimes \ket{e_j^B}
\end{equation}
$$

很明显, 这个展开式有 $$d_A d_B$$ 项, 远远大于 $$d_A$$.
现在我们再写出来密度矩阵:

$$
\begin{equation}
\rho_{AB} = \sum_{i,j=1}^{d_A} \ket{u_i^A} \otimes \ket{\phi_i^B} \bra{u_j^A} \otimes \bra{\phi_j^B}
\end{equation}
$$

对$$B$$ 系统做trace:

$$
\begin{equation}
\rho_A = \tr_B(\rho_{AB}) = \sum_{i,j=1}^{d_A} \ketbra{u_i^A}{u_j^A} \braket{\phi_j^B}{\phi_i^B}
\end{equation}
$$

我们怎么把他联系到之前对角化基写下的那个$$\rho_A$$上呢?
我们现在要复习一个rank的概念:
> 对于一个 $$m \times n$$ 的矩阵 $$M$$, 一个rank就是他的列向量中线性无关的个数.
> 也就是说你的矩阵能照顾到的向量的一种描述.
> 物理背景下就是, 目前的系统到底混合了多少个纯态.

我们注意到$$A$$的系数部分, 构成了一个矩阵, 叫做Gram矩阵:

$$
\begin{equation}
G_{ij} = \braket{\phi_j^B}{\phi_i^B}
\end{equation}
$$

就是内积的各种组合的排列, 这个维度是$$d_A \times d_A$$的矩阵.
如果我们计算$$\rho_A$$的矩阵元:

$$
\begin{equation}
\mel{u_k^A}{\rho_A}{u_l^A} = \sum_{i,j=1}^{d_A} \braket{u_k^A}{u_i^A} \braket{\phi_j^B}{\phi_i^B} \braket{u_j^A}{u_l^A} = G_{kl}
\end{equation}
$$

所以这就是说, $$G$$和$$\rho_A$$是相似矩阵, 他们有一样的rank.
所以$$\ket{\phi_i^B}$$的线性无关个数, 也就是$$G$$的rank, 也就是$$\rho_A$$的rank, 也就是Schmidt秩$$r$$.
这个rank必须满足如下的不等式:

$$
\begin{equation}
r \leq \min(d_A, d_B)
\end{equation}
$$

小于等于$$d_A$$是显然的, 小于等于$$d_B$$是因为, $$\ket{\phi_i^B}$$的线性无关个数不会超过$$d_B$$.

于是我们可以缩小求和范围, 因为$$\rho_A$$只有$$r$$个非零的本征值:

$$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{r} \ket{u_i^A} \otimes \ket{\phi_i^B}
\end{equation}
$$

从而我们的$$\rho_{AB}$$变成:

$$
\begin{equation}
\rho_{AB} = \sum_{i,j=1}^{r} \ket{u_i^A} \otimes \ket{\phi_i^B} \bra{u_j^A} \otimes \bra{\phi_j^B}
\end{equation}
$$

再做约化密度矩阵:

$$
\begin{equation}
\rho_A = \tr_B(\rho_{AB}) = \sum_{i,j=1}^{r} \ketbra{u_i^A}{u_j^A} \braket{\phi_j^B}{\phi_i^B}
\end{equation}
$$

再和$$\rho_A$$的本征分解对比, 我们发现:

$$
\begin{equation}
\braket{\phi_j^B}{\phi_i^B} = p_i \delta_{ij}
\end{equation}
$$

换句话说, $$\{ \ket{\phi_i^B} \}$$是正交的, 并且$$\braket{\phi_i^B}{\phi_i^B} = p_i$$.
从而, 我们可以定义归一化的$$\ket{v_i^B}$$:

$$
\begin{equation}
\ket{v_i^B} = \frac{1}{\sqrt{p_i}} \ket{\phi_i^B}
\end{equation}
$$

从而我们证明了:

$$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{r} \sqrt{p_i} \ket{u_i^A} \otimes \ket{v_i^B}
\end{equation}
$$

其中 $$\{ \ket{u_i^A} \}$$ 和 $$\{ \ket{v_i^B} \}$$ 分别是 $$\mathcal{H}_A$$ 和 $$\mathcal{H}_B$$ 的正交归一基, $$p_i > 0$$, $$r \leq \min(d_A, d_B)$$.
这就是Schmidt分解.
但我们要注意, $$\{ \ket{v_i^B} \}$$ 和 $$\{ \ket{u_i^A} \}$$ 没什么直接关系, 他们甚至来自于不同空间.
从而我们总能写为:

$$
\begin{equation}
\rho_A = \sum_{i=1}^{r} p_i \ketbra{u_i^A}{u_i^A}, \quad \rho_B = \sum_{i=1}^{r} p_i \ketbra{v_i^B}{v_i^B}
\end{equation}
$$

总结一下Schimit分解的步骤:

1. 给出一个复合系统的纯态 $$\ket{\psi_{AB}}$$.
2. 写成
$$
\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{d_A} \ket{u_i^A} \otimes \ket{\phi_i^B}
\end{equation}
$$
2. 对$$B$$系统做约化密度矩阵$$\rho_A = \tr_B(\ketbra{\psi_{AB}}{\psi_{AB}})$$.
3. 对$$\rho_A$$做本征分解, 得到$$\{ p_i, \ket{u_i^A} \}$$:
$$
\begin{equation}
\rho_A = \sum_{i=1}^{r} p_i \ketbra{u_i^A}{u_i^A}
\end{equation}
$$
4. 定义$$\ket{v_i^B} = \frac{1}{\sqrt{p_i}} \braket{u_i^A}{\psi_{AB}}$$, 得到Schmidt分解:
$$\begin{equation}
\ket{\psi_{AB}} = \sum_{i=1}^{r} \sqrt{p_i} \ket{u_i^A} \otimes \ket{v_i^B}
\end{equation}$$

> 如果此时计算纠缠熵:
> $$\begin{equation}
S(\rho_A) = - \tr(\rho_A \log \rho_A) = - \sum_{i=1}^{r} p_i \log p_i
\end{equation}$$
> 这就是$$A$$系统的纠缠熵, 也是$$B$$系统的纠缠熵.
> 纠缠熵是衡量两个子系统纠缠程度的一个重要指标.
> 如果$$r=1$$, 也就是只有一个非零的Schmidt系数, 那么$$S(\rho_A) = 0$$, 说明$$A$$和$$B$$没有纠缠.


我们考虑一个例子:

$$
\begin{equation}
\ket{\psi_{AB}} = \frac{1}{\sqrt{2}} \ket{+_A +_B} + \frac{1}{2} \ket{-_A +_B} + \frac{1}{2} \ket{-_A -_B}
\end{equation}
$$

首先检查一下归一化:

$$
\begin{equation}
\braket{\psi_{AB}}{\psi_{AB}} = \frac{1}{2} + \frac{1}{4} + \frac{1}{4} = 1
\end{equation}
$$

接着, 我们按照如下的基底来检查系数矩阵:

$$
\begin{equation}
\ket{+_A +_B}, \ket{+_A -_B}, \ket{-_A +_B}, \ket{-_A -_B}
\end{equation}
$$

我们发现系数矩阵是:

$$
\begin{equation}
C = \mqty[ 1/\sqrt{2} & 0 \\ 1/2 & 1/2 ]
\end{equation}
$$

实际上这就是$$\ket{\psi_{AB}} = \sum_{i,j} C_{ij} \ket{i_A j_B}$$的系数矩阵.

接下来我们计算$$\rho_A$$:

$$
\begin{align}
\rho_A &= \tr_B(\ketbra{\psi_{AB}}{\psi_{AB}}) \\
&= \mqty[ 1/2 & 1/(2\sqrt{2}) \\ 1/(2\sqrt{2}) & 1/2 ]
\end{align}
$$

我们对$$\rho_A$$做本征分解, 计算特征值:

$$
\begin{equation}
p_1 = \frac{2+\sqrt{2}}{4}, \quad p_2 = \frac{2-\sqrt{2}}{4}
\end{equation}
$$

本征值为:

$$
\begin{equation}
\ket{u_1^A} = (\ket{+}+\ket{-})/\sqrt{2}, \quad \ket{u_2^A} = (\ket{+}-\ket{-})/\sqrt{2}
\end{equation}
$$

我们现在构造$$B$$系统的向量:

$$
\begin{equation}
\ket{v_i^B} = \frac{1}{\sqrt{p_i}} \braket{u_i^A}{\psi_{AB}}
\end{equation}
$$

考虑$$i=1$$:

$$
\begin{align}
\ket{v_1^B} &= \frac{1}{\sqrt{p_1}} \braket{u_1^A}{\psi_{AB}} \\
&= \sqrt{\frac{1}{2} + \frac{1}{2\sqrt{2}}} \ket{+_B} - \sqrt{\frac{1}{2} - \frac{1}{2\sqrt{2}}} \ket{-_B}
\end{align}
$$

考虑$$i=2$$:

$$
\begin{equation}
\ket{v_2^B} = \sqrt{\frac{1}{2} - \frac{1}{2\sqrt{2}}} \ket{+_B} + \sqrt{\frac{1}{2} + \frac{1}{2\sqrt{2}}} \ket{-_B}
\end{equation}
$$

从而我们得到了Schmidt分解:

$$
\begin{equation}
\ket{\psi_{AB}} = \sqrt{\frac{1}{2} + \frac{1}{2\sqrt{2}}} \ket{u_1^A} \otimes \ket{v_1^B} + \sqrt{\frac{1}{2} - \frac{1}{2\sqrt{2}}} \ket{u_2^A} \otimes \ket{v_2^B}
\end{equation}
$$

其中:

$$
\begin{equation}
\ket{u_1^A} = \frac{1}{\sqrt{2}} (\ket{+}+\ket{-}), \quad \ket{u_2^A} = \frac{1}{\sqrt{2}} (\ket{+}-\ket{-})
\end{equation}
$$

$$
\begin{equation}
\ket{v_1^B} = \sqrt{\frac{1}{2} + \frac{1}{2\sqrt{2}}} \ket{+_B} - \sqrt{\frac{1}{2} - \frac{1}{2\sqrt{2}}} \ket{-_B}
\end{equation}
$$
$$
\begin{equation}
\ket{v_2^B} = \sqrt{\frac{1}{2} - \frac{1}{2\sqrt{2}}} \ket{+_B} + \sqrt{\frac{1}{2} + \frac{1}{2\sqrt{2}}} \ket{-_B}
\end{equation}
$$