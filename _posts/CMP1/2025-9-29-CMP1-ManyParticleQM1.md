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