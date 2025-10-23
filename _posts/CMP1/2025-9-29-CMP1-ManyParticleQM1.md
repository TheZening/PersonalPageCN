---
title: "CMP1 全同粒子的再表述"
date: 2025-09-12
categories:
  - CMP1
---

之前的讨论里, 我们大部分研究的体系都是单粒子体系.
现在我们来试试讨论多粒子体系.
如果单粒子的 Hilbert space 是$$\mathcal{H}$$, 那么我们第一步的想法就是认为, 多粒子体系的 Hilbert space 就是:

$$
\begin{equation}
\mathcal{H} = \mathcal{H}_1 \otimes \mathcal{H}_2 \otimes \cdots \otimes \mathcal{H}_N
\end{equation}
$$

其中$$\mathcal{H}_i$$是第$$i$$个粒子的 Hilbert space.
但是这样做有一个问题, 那就是如果粒子是全同粒子, 那么我们无法区分第$$i$$个粒子和第$$j$$个粒子.
所以我们需要对上面的 Hilbert space 做一个对称化(玻色子)或者反对称化(费米子).

> 换句话说, 全同粒子系统的真实 Hilbert space 不是简单的张量积空间, 而是对称化或者反对称化之后的子空间.

简单复习一下全同粒子假设:

1. 全同粒子是指所有粒子在内在性质上完全相同, 比如质量, 电荷, 自旋等.
2. 由于全同粒子无法区分, 交换任意两个粒子后, 物理状态不变.
3. 玻色子波函数在交换两个粒子后不变, 费米子波函数在交换两个粒子后变号.
4. 玻色子可以多粒子占据同一单粒子态, 费米子由于泡利不相容原理, 每个单粒子态最多只能被一个粒子占据.

对于最一般的多粒子态, 我们先考虑$$N$$个粒子的情况:

$$
\begin{equation}
\ket{\Psi} = \ket{\psi_1} \otimes \ket{\psi_2} \otimes \cdots \otimes \ket{\psi_N}
\end{equation}
$$

然后如果是玻色子, 我们需要对上面的态进行对称化:

$$
\begin{equation}
\ket{\Psi_{\text{sym}}} = \frac{1}{\sqrt{N!}} \sum_{P} \ket{\psi_{P(1)}} \otimes \ket{\psi_{P(2)}} \otimes \cdots \otimes \ket{\psi_{P(N)}}
\end{equation}
$$

如果是费米子, 我们需要对上面的态进行反对称化:

$$
\begin{equation}
\ket{\Psi_{\text{asym}}} = \frac{1}{\sqrt{N!}} \sum_{P} \text{sgn}(P) \ket{\psi_{P(1)}} \otimes \ket{\psi_{P(2)}} \otimes \cdots \otimes \ket{\psi_{P(N)}}
\end{equation}
$$

其中$$P$$表示对$$N$$个粒子的所有排列, $$\text{sgn}(P)$$表示排列$$P$$的奇偶性.

---
## Fock 空间

我们现在没有什么牌可以打, 又想描述粒子数可以变化的系统.
暂且不谈系统的动力学, 仅仅是描述系统, 就需要仔细思考一番:

1. 目前我们知道, 一旦体系确定了(玻色子/费米子), 我们就立刻把大张量积空间缩小到对称化/反对称化子空间.
2. 即是粒子数可变, $$n$$粒子态空间和$$(n+1)$$粒子态空间也必须是性质相同.
3. 这样的话, 与其讨论大的张量积空间, 不如从粒子数下手.

那么这样的话, 我们的空间应该是不同粒子数的直和.

> (Fock空间) Fock空间是描述可变粒子数体系的Hilbert空间.
> 它是所有可能粒子数的Hilbert空间的直和:
> $$
> \begin{equation}
> \mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}_N
> \end{equation}
> $$
> 其中$$\mathcal{H}_N$$是含有$$N$$个粒子的Hilbert空间.

我们现在要对这个直和做一个新的解读.
不同于之前的线性代数直和, 我们现在考虑的是 Hilbert direct sum:

> (Hilbert direct sum) 考虑一些Hilbert空间 $$\mathcal{H}_i$$, 它们的Hilbert direct sum 定义为:
> $$
> \begin{equation}
> \mathcal{H} = \{ ( \ket{\psi_1}, \ket{\psi_2}, \ldots ) | \ket{\psi_i} \in \mathcal{H}_i, \sum_i \| \ket{\psi_i} \|^2 < \infty \}
> \end{equation}
> $$
> 其中内积定义为:
> $$
> \begin{equation}
> \langle ( \ket{\psi_1}, \ket{\psi_2}, \ldots ) | ( \ket{\phi_1}, \ket{\phi_2}, \ldots ) \rangle = \sum_i \langle \psi_i | \phi_i \rangle
> \end{equation}
> $$

1. Fock空间中的态其实就是把所有的向量都并起来, 然后这些向量的集合就是Fock空间.
2. 但是每一个组成Fock态的分量, 都要满足平方可积.

这样, 我们的范数就可以定义为:

$$
\begin{equation}
\| \ket{\Psi} \|^2 = \sum_{N=0}^{\infty} \| \ket{\psi_N} \|^2
\end{equation}
$$

我们现在举个例子, 考虑三个有限维 Hilbert 空间$$\mathcal{H}_1 = \mathbb{R}, \mathcal{H}_2 = \mathbb{R}^2, \mathcal{H}_3 = \mathbb{R}^3$$.
那么它们的 Hilbert direct sum $$\mathcal{H} = \mathcal{H}_1 \oplus \mathcal{H}_2 \oplus \mathcal{H}_3$$就是所有形如 $$(x, (y_1, y_2), (z_1, z_2, z_3))$$ 的向量的集合, 其中$$x, y_i, z_i \in \mathbb{R}$$.
举个例子:

$$
\begin{equation}
(1, (2, 3), (4, 5, 6)) \in \mathcal{H}
\end{equation}
$$

他的范数是:

$$
\begin{equation}
\| (1, (2, 3), (4, 5, 6)) \|^2 = 1^2 + (2^2 + 3^2) + (4^2 + 5^2 + 6^2) = 1 + 13 + 77 = 91
\end{equation}
$$

再找一个向量:

$$
\begin{equation}
(0, (1, 1), (1, 1, 1)) \in \mathcal{H}
\end{equation}
$$

我们可以计算内积:

$$
\begin{equation}
\braket{(1, (2, 3), (4, 5, 6))}{(0, (1, 1), (1, 1, 1))} = 1*0 + (2*1 + 3*1) + (4*1 + 5*1 + 6*1) = 0 + 5 + 15 = 20
\end{equation}
$$

现在我们来看一个物理体系的例子.
考虑一个可以有0个, 1个, 2个, 3个玻色子的体系, 只有2个能级, 那么他的大Fock空间就是:

$$
\begin{equation}
\mathcal{F} = \mathcal{H}_0 \oplus \mathcal{H}_1 \oplus \mathcal{H}_2 \oplus \mathcal{H}_3
\end{equation}
$$

其中$$\mathcal{H}_0$$是0粒子空间, $$\mathcal{H}_1$$是1粒子空间, $$\mathcal{H}_2$$是2粒子空间, $$\mathcal{H}_3$$是3粒子空间.
我们现在已经知道了, Fock空间比真正的物理空间大太多了.
所以我们一点一点的构造.

当没有粒子时, 我们有唯一的真空态$$\ket{0} \in \mathcal{H}_0$$.
当有1个粒子时, 这就是标准的二能级系统:

$$
\begin{equation}
\mathcal{H}_1 = \text{span}\{1:\phi_1, 1:\phi_2\}
\end{equation}
$$

这个时候最一般的态是:

$$
\begin{equation}
\ket{\Psi} = \alpha \ket{\phi_1} + \beta \ket{\phi_2} \quad \alpha, \beta \in \mathbb{C}
\end{equation}
$$

当有2个粒子时, 最一般的 Hilbert 空间是:

$$
\begin{equation}
\mathcal{H}_2 = \text{span}\{1:\phi_1 \otimes 1:\phi_1, 1:\phi_1 \otimes 1:\phi_2, 1:\phi_2 \otimes 1:\phi_1, 1:\phi_2 \otimes 1:\phi_2\}
\end{equation}
$$

初一看是4维度的, 但是由于粒子是玻色子, 所以我们需要对上面的态进行对称化:

$$
\begin{equation}
\mathcal{H}_2 = \text{span}\{1:\phi_1 \otimes_s 1:\phi_1, 1:\phi_1 \otimes_s 1:\phi_2, 1:\phi_2 \otimes_s 1:\phi_2\}
\end{equation}
$$

其中$$\otimes_s$$表示对称化的张量积: $$ A \otimes_s B = \frac{1}{\sqrt{2}} (A \otimes B + B \otimes A) $$.
所以$$\mathcal{H}_2$$是3维的.
最一般的态是:

$$
\begin{equation}
\ket{\Psi} = \alpha \ket{\phi_1 \otimes_s \phi_1} + \beta \ket{\phi_1 \otimes_s \phi_2} + \gamma \ket{\phi_2 \otimes_s \phi_2} \quad \alpha, \beta, \gamma \in \mathbb{C}
\end{equation}
$$

现在我们来看3个粒子的情况.
最一般的 Hilbert 空间是:

$$
\begin{equation}
\mathcal{H}_3 = \text{span}\{1:\phi_i \otimes 1:\phi_j \otimes 1:\phi_k | i, j, k = 1, 2\}
\end{equation}
$$

全部列出来, 我们固定粒子标记顺序是$$1, 2, 3$$, 态是 $$\ket{A}, \ket{B}$$, 那么我们有8个基矢量:

$$
\begin{equation}
\{ \ket{A,A,A}, \ket{A,A,B}, \ket{A,B,A}, \ket{A,B,B}, \ket{B,A,A}, \ket{B,A,B}, \ket{B,B,A}, \ket{B,B,B} \}
\end{equation}
$$

看起来是8维的, 但是由于粒子是玻色子, 所以我们需要对上面的态进行对称化:

$$
\begin{equation}
\mathcal{H}_3 = \text{span}\{ \ket{A,A,A}, \ket{A,A,B}_s, \ket{A,B,B}_s, \ket{B,B,B} \}
\end{equation}
$$

其中:

$$
\begin{equation}
\ket{A,A,B}_s = \frac{1}{\sqrt{3}} ( \ket{A,A,B} + \ket{A,B,A} + \ket{B,A,A} )
\end{equation}
$$

其余也是这个道理, 所以实际上是4维的!
最一般的态是:

$$
\begin{equation}
\ket{\Psi} = \alpha \ket{A,A,A} + \beta \ket{A,A,B}_s + \gamma \ket{A,B,B}_s + \delta \ket{B,B,B} \quad \alpha, \beta, \gamma, \delta \in \mathbb{C}
\end{equation}
$$

我们发现, 在每一层中, 态都是正交归一化的.
如果每一层都确定好对称基, 我们就可以用组合系数表示一个向量, 这就是单纯向量的表示问题.
所以, 玻色子的Fock空间中一个态可以写为:

$$
\begin{equation}
\ket{\Psi} = (A_0, (B_1, B_2), (C_1, C_2, C_3), (D_1, D_2, D_3, D_4))
\end{equation}
$$

他的解读方法为:

$$
\begin{equation}
\ket{\psi, N=0} = A_0 \ket{0}
\end{equation}
$$
$$
\begin{equation}
\ket{\psi, N=1} = B_1 \ket{\phi_1} + B_2 \ket{\phi_2}
\end{equation}
$$
$$
\begin{equation}
\ket{\psi, N=2} = C_1 \ket{\phi_1 \otimes_s \phi_1} + C_2 \ket{\phi_1 \otimes_s \phi_2} + C_3 \ket{\phi_2 \otimes_s \phi_2}
\end{equation}
$$
$$
\begin{equation}
\ket{\psi, N=3} = D_1 \ket{A,A,A} + D_2 \ket{A,A,B}_s + D_3 \ket{A,B,B}_s + D_4 \ket{B,B,B}
\end{equation}
$$

同时我们也可以计算他的范数:

$$
\begin{equation}
\| \ket{\Psi} \|^2 = |A_0|^2 + (|B_1|^2 + |B_2|^2) + (|C_1|^2 + |C_2|^2 + |C_3|^2) + (|D_1|^2 + |D_2|^2 + |D_3|^2 + |D_4|^2)
\end{equation}
$$

这样, 我们就成功的把玻色子的多粒子态表示成了一个向量.
对于费米子, 我们也是类似的思路, 只是每一层的基矢量要用反对称化的张量积来表示.

> 目前看来, 这个记号系统大不利于我们实际计算, 太复杂了, 我们必须得谋求新出路.

但无论如何, 我们目前确定了物理的Fock空间为:

$$
\begin{equation}
\mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}_S
\end{equation}
$$

或者

$$
\begin{equation}
\mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}_A
\end{equation}
$$
---
## Fock态

经过仔细观察, 对称化/反对称化的多粒子态其实是团结了所有的"单粒子态占据情况"相同的态.
举个例子, 对于玻色子, 我们考虑三个粒子两个态的情况, 比如:

$$
\begin{equation}
\ket{A, A, B}_s = \frac{1}{\sqrt{3}} ( \ket{A, A, B} + \ket{A, B, A} + \ket{B, A, A} )
\end{equation}
$$

也就是说对称化的基团结了$$\ket{A, A, B}, \ket{A, B, A}, \ket{B, A, A}$$这三种占据情况, 而这三种占据情况的共同点是: 有2个粒子在态$$A$$, 1个粒子在态$$B$$.
所以我们可以用"态$$A$$有2个粒子, 态$$B$$有1个粒子"来表示这个态.
这就是所谓的 Fock 态:

> (Fock态) Fock态是指用单粒子态的占据数来表示的多粒子态.
> 对于玻色子, Fock态可以表示为:
> $$
> \begin{equation}
> \ket{n_1, n_2, \ldots, n_k} = \text{$n_i$个粒子在单粒子态$i$上}
> \end{equation}
> $$
> 对于费米子, Fock态可以表示为:
> $$
> \begin{equation}
> \ket{n_1, n_2, \ldots, n_k} = \text{$n_i$为0或1, 表示单粒子态$i$是否被占据}
> \end{equation}
> $$

这样的话, 我们之前的玻色子例子中的态$$\ket{A, A, B}_s$$就可以表示为$$\ket{n_A = 2, n_B = 1}$$.
同理, 费米子的态$$\frac{1}{\sqrt{2}} ( \ket{A, B} - \ket{B, A} )$$可以表示为$$\ket{n_A = 1, n_B = 1}$$.
这样, 我们就成功的把多粒子态表示成了占据数的形式.

但是现在我们必须直面几个问题

1. Fock态, 一定要能与原来的对称基/反对称基通过Unitary变换联系起来.
2. Fock态的正交归一的具体做法要清楚.
3. 把Fock态从$$N$$粒子空间提升到Fock空间的做法要清楚.


我们一个一个来解决, 我们考虑单粒子 Hilbert 空间$$\mathcal{H}_1$$有一组正交归一基$$\{ \ket{\phi_i} \}$$, 那么对于物理空间是 $$H^A_N$$ 的玻色子体系.
先不构造对称基, 我们就随便挑一个态出来:

$$
\begin{equation}
\ket{\phi_1, \phi_1, \phi_2, \ldots, \phi_M}
\end{equation}
$$

这个太复杂了, 我们现在挑其中一个对称好的态出来, 那么我们可以数一数每个单粒子态$$i$$被占据了多少次, 记为$$n_i$$, 必然有:

$$
\begin{equation}
\sum_i n_i = N
\end{equation}
$$

我们就对这一个态进行对称化, 然后归一化:

$$
\begin{equation}
\ket{\Psi} = \frac{1}{\sqrt{N! \prod_i n_i!}} \sum_{\alpha} P_{\alpha} \ket{\phi_1}^{\otimes n_1} \otimes \ket{\phi_2}^{\otimes n_2} \otimes \cdots \otimes \ket{\phi_M}^{\otimes n_M} 
\end{equation}
$$

我们看看这个归一化因子为什么是这样的:

$$
\begin{equation}
\mel{\Psi}{S}{\Psi} = \frac{1}{N! \prod_i n_i!} \sum_{\alpha, \beta} \mel{\phi_1^{\otimes n_1} \otimes \cdots}{P_{\alpha}^\dagger P_{\beta}}{\phi_1^{\otimes n_1} \otimes \cdots}
\end{equation}
$$

我们可以在挑一个态, 重复以上的过程:

$$
\begin{equation}
\ket{\Psi'} = \frac{1}{\sqrt{N! \prod_i m_i!}} \sum_{\alpha} P_{\alpha} \ket{\phi_1}^{\otimes m_1} \otimes \ket{\phi_2}^{\otimes m_2} \otimes \cdots \otimes \ket{\phi_M}^{\otimes m_M}
\end{equation}
$$

我们可以计算内积:

$$
\begin{equation}
\braket{\Psi}{\Psi'} = \frac{1}{\sqrt{N! \prod_i n_i!}} \frac{1}{\sqrt{N! \prod_i m_i!}} \sum_{\alpha, \beta} \mel{\phi_1^{\otimes n_1} \otimes \cdots}{P_{\alpha}^\dagger P_{\beta}}{\phi_1^{\otimes m_1} \otimes \cdots}
\end{equation}
$$

如果是一个态, 那么我们有$$P_{\alpha}^\dagger P_{\beta} = \mathbb{1}$$, 否则的话, 因为占据数不同, 内积为0.
现在我们构造了一组: 完全对称, 正交归一的基, 而且每一个基都可以被对称化的态唯一标记过来.
而且, 每一个态都由如下的数组唯一表示:

$$
\begin{equation}
(n_1, n_2, \ldots, n_M) \quad \text{with } \sum_i n_i = N
\end{equation}
$$

这其实就是 Fock 态.
而且, 在这个过程中, 我们可以验证(需要一点组合数学), 原来的大空间维度是$$M^N$$, 现在对称化之后的空间维度是$$\binom{N+M-1}{N}$$.
同理, 费米子的情况也是类似的, 只是每一个$$n_i$$只能是0或者1.
这样, 我们就成功的把多粒子态表示成了占据数的形式.


举个例子, 我们考虑一个3能级体系, 6个玻色子, 张量积态是, 我们挑选如下的配置进行对称化:

$$
\begin{equation}
\ket{AABBCC}_s = c_0 (\ket{AABBCC} + \ket{AABCCB} + \ket{AACBBC} + \cdots )
\end{equation}
$$

我们看看$$c_0$$为什么是$$\frac{1}{\sqrt{6!/(2!2!2!)}}$$:

1. 总共有$$6!$$种排列.
2. 但是由于$$A$$有2个, 交换这2个$$A$$不变, 有$$2!$$种排列.
3. 同理, $$B$$有$$2!$$种排列不变, $$C$$也有$$2!$$种排列不变.
4. 所以总的不同排列数是$$\frac{6!}{2!2!2!}$$.
5. 所以归一化因子就是$$\frac{1}{\sqrt{6!/(2!2!2!)}}$$.

这个态的记录方法就是$$\ket{n_A = 2, n_B = 2, n_C = 2} = \ket{2, 2, 2}$$.
类似的, 我们考虑如下的态:

$$
\begin{equation}
\ket{AAABBC}_s = c_1 (\ket{AAABBC} + \ket{AAABCB} + \ket{AABABC} + \cdots )
\end{equation}
$$

其中$$c_1 = \frac{1}{\sqrt{6!/(3!2!1!)}}$$.
这个态的记录方法就是$$\ket{n_A = 3, n_B = 2, n_C = 1} = \ket{3, 2, 1}$$.
我们试试他们是不是正交的:

$$
\begin{equation}
(\text{系数}) \left( \braket{AABBCC}{AAABBC} + \braket{AABCCB}{AAABBC} + \cdots \right) = 0
\end{equation}
$$

因为每一项内积要么是0, 要么是1, 但是由于占据数不同, 所以每一项内积都是0.
这样, 我们就成功的把多粒子态表示成了占据数的形式:


$$
\begin{equation}
\ket{n_i, n_2, \ldots, n_M} = \frac{1}{\sqrt{N! \prod_i n_i!}} \sum_{\alpha} P_{\alpha} \ket{\phi_1}^{\otimes n_1} \otimes \ket{\phi_2}^{\otimes n_2} \otimes \cdots \otimes \ket{\phi_M}^{\otimes n_M}
\end{equation}
$$

费米子的情况更简单一些, 因为Pauli不相容原理, 每一个$$n_i$$只能是0或者1.
我们也是考虑5能级系统, 3个费米子, 那么我们挑选如下的配置进行反对称化:

$$
\begin{equation}
\ket{AAC}_a = c_0 (\ket{AAC} - \ket{ACA} + \ket{ACA} - \ket{CAA} + \ket{CAA} - \ket{AAC} ) = 0
\end{equation}
$$

如我们所见, 由于有两个$$A$$, 反对称化之后直接为0.
所以我们在费米子系统不允许有$$n_i > 1$$的情况.
我们在挑选如下的配置进行反对称化:

$$
\begin{equation}
\ket{ABC}_a = c_1 (\ket{ABC} - \ket{ACB} + \ket{BAC} - \ket{BCA} + \ket{CAB} - \ket{CBA} )
\end{equation}
$$

其中$$c_1 = \frac{1}{\sqrt{3!}}$$.
这个态的记录方法就是$$\ket{n_A = 1, n_B = 1, n_C = 1, n_D = 0, n_E = 0} = \ket{1, 1, 1, 0, 0}$$.
他们的正交性更好检查: 我们不能再往任何有1的地方加1了, 但是一旦把别的地方的0改成1, 那么就说明一个态没了, 那内积自然是0.
这样, 我们就成功的把费米子多粒子态表示成了占据数的形式:

$$
\begin{equation}
\ket{n_i, n_2, \ldots, n_M} = \frac{1}{\sqrt{N!}} \sum_{\alpha} \text{sgn}(P_{\alpha}) P_{\alpha} \ket{\phi_1}^{\otimes n_1} \otimes \ket{\phi_2}^{\otimes n_2} \otimes \cdots \otimes \ket{\phi_M}^{\otimes n_M}
\end{equation}
$$

现在我们如何把Fock态提升到Fock空间呢?
我们还是可以像以前一样把各个粒子数的态并起来, 比如我们考虑 $$\mathcal{F} = \mathcal{H}_0 \oplus \cdots \oplus \mathcal{H}_N$$, 我们局限于双能级系统, 那么一个Fock态可以写成:

$$
\begin{equation}
\ket{\Psi} = ( \ket{0,0}, (\ket{n_1, n_2}), (\ket{m_1, m_2}), \ldots )
\end{equation}
$$

从而Fock空间中的任意一个态是:

$$
\begin{equation}
\ket{\Psi} = \alpha_1 \ket{0,0} + \alpha_2 \ket{1,0} + \alpha_3 \ket{0,1} + \beta_1 \ket{n_1, n_2} + \beta_2 \ket{n_3, n_4} + \cdots
\end{equation}
$$

其中$$\alpha, \beta \in \mathbb{C}$$.