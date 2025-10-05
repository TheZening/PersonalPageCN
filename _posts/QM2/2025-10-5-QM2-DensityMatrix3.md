---
title: "QM2 密度矩阵3"
date: 2025-10-05
categories:
  - QM2
---

现在我们回顾一下上一个帖子中的一个困惑.

1. 已知每次测量, 考虑一个结果$$i$$, 测量算子是投影:

$$
\begin{equation}
M_i = \ketbra{i}{i}
\end{equation}
$$

2. 从而得到结果$$i$$的概率是:

$$
\begin{equation}
p(i) = \Tr(M_i \rho M_i^\dagger) = \bra{i}\rho\ket{i}
\end{equation}
$$

3. 如果知道结果是$$i$$, 那么测量后系统的状态是:

$$
\begin{equation}
\rho_i = \frac{M_i \rho M_i^\dagger}{\Tr(M_i \rho M_i^\dagger)} = \ketbra{i}{i}
\end{equation}
$$

4. 如果不知道结果(但是仍然测量了), 那么测量后系统的状态是:

$$
\begin{equation}
\tilde{\rho} = \sum_i p(i) \rho_i = \sum_i \bra{i}\rho\ket{i} \ketbra{i}{i}
\end{equation}
$$

成为了经典混合.

我们这个帖子就对于这个问题做出一些讨论和理解.


---
## 双粒子系统

我们还是考虑Alice和Bob的双粒子系统.
Alice现在准备沿着一个基向量$$\ket{i}_A$$测量她的粒子, 他的测量算符写为:

$$
\begin{equation}
M_i^A = \ketbra{i}{i}_A \otimes I_B
\end{equation}
$$

我们从最一般的密度矩阵$$\rho_{AB}$$开始, 假设我们不知道Alice的测量结果, 那么测量后系统的状态是:

$$
\begin{equation}
\tilde{\rho}_{AB} = \sum_i (M_i^A\otimes \mathbb{1}_B) \rho_{AB} (M_i^A\otimes \mathbb{1}_B) 
\end{equation}
$$

我们现在来计算Bob的约化密度矩阵, 目的是看看Bob能否判断Alice是否测量了她的粒子.

$$
\begin{equation}
\tilde{\rho}_B = \tr_A(\tilde{\rho}_{AB}) =  \tr \sum_i (M_i^A\otimes \mathbb{1}_B) \rho_{AB} (M_i^A\otimes \mathbb{1}_B)
\end{equation}
$$

此时我们注意到, 密度矩阵$$\rho_{AB}$$可以写成:

$$
\begin{equation}
\rho_{AB} = \sum_{k} \mathcal{O}_k^A \otimes \mathcal{O}_k^B
\end{equation}
$$

其中$$\mathcal{O}_k^A$$和$$\mathcal{O}_k^B$$分别是Alice和Bob粒子的算符, 这个最一般的标识来源于最粗暴的张量积展开.
把这个分解带入$$\tilde{\rho}_{AB}$$中, 我们得到:

$$
\begin{equation}
\tilde{\rho}_{AB} = \sum_i \sum_k (M_i^A \mathcal{O}_k^A M_i^A) \otimes \mathcal{O}_k^B
\end{equation}
$$

如果我们对他取Alice的迹, 我们得到:

$$
\begin{equation}
\tilde{\rho}_B = \sum_i \sum_k \tr(M_i^A \mathcal{O}_k^A M_i^A) \mathcal{O}_k^B
\end{equation}
$$

计算这个迹, 我们得到:

$$
\begin{align}
\tr_A(M_i^A \mathcal{O}_k^A M_i^A) = \tr_A(M_i^A \mathcal{O}_k^A)
\end{align}
$$

我们把$$i$$的求和做掉:

$$
\begin{equation}
\sum_i \tr_A(M_i^A \mathcal{O}_k^A) = \tr_A(\mathcal{O}_k^A)
\end{equation}
$$

从而我们得到:

$$
\begin{equation}
\tilde{\rho}_B = \sum_k \tr_A(\mathcal{O}_k^A) \mathcal{O}_k^B = \tr_A(\rho_{AB}) = \rho_B
\end{equation}
$$

> 也就是说, Alice测量了她的粒子, 但是Alice没有看结果.
> 而Bob的约化密度矩阵没有变化, 他无法判断Alice是否测量了她的粒子.
> 这就是无信号定理, 纠缠不能被用来即时通信.
> 此时Alice手里的粒子, 是一个经典混合态.
> 但是Bob手里的粒子, 仍然是原来的量子态.
> 只有Alice测量, 并且把结果告诉Bob了, Bob才能知道Alice测量了她的粒子.


---
## 退相干的基础理论

我们现在考虑一个孤立的量子系统, 他叫做$$AE$$, 其中$$A$$是我们感兴趣的系统, $$E$$是环境.
一般来说, 比起$$A$$, $$E$$的自由度要大得多.
对于$$A$$来说, 他自然是一个开放系统 (Open Quantum System), 他自己的演化受到$$E$$的影响, 或者说他与$$E$$纠缠, 耦合了.

我们假设$$AE$$系统的密度矩阵是$$\rho_{AE}$$, 我们对$$E$$取迹, 得到$$A$$的约化密度矩阵:

$$
\begin{equation}
\rho_A = \tr_E(\rho_{AE})
\end{equation}
$$

我们的核心问题是:
> $$\rho_A$$是如何时间演化的?

我们现在明确知道的是, $$AE$$是一个孤立系统, 他满足Unitary演化, 但是$$A$$本身不是孤立系统, 他不满足Unitary演化, 也就是说:

> $$A$$可能一开始是一个纯态, 但是随着时间演化, 他可能变成一个混合态.
> 这个过程, 我们称之为退相干 (Decoherence).

如果我们现在考虑如下的映射:

$$
\begin{equation}
\tr_E: \rho_{AE} \to \rho_A
\end{equation}
$$

那么我们就至少有一个思路了: 找到$$\rho_{AE}$$的时间演化, 然后通过对$$E$$取迹, 得到$$\rho_A$$的时间演化.
首先我们假设$$AE$$的Hamiltonian是已知的, 从而我们可以写出$$\rho_{AE}$$的时间演化:

$$
\begin{equation}
\rho_{AE}(t) = U(t) \rho_{AE}(0) U^\dagger(t), \quad U(t) = \mathrm{e}^{-\mathrm{i}\, H_{AE}t/\hbar}
\end{equation}
$$

一旦我们能搞出来这个, 我们就能求:

$$
\begin{equation}
\rho_A(t) = \tr_E(\rho_{AE}(t))
\end{equation}
$$

此时我们要注意, 这个时候的trace不再是有限维度的trace, 而是无限维度的trace, 不可以再使用Cyclic Property.
但是我们现在可以做一个基础性检查:

$$
\begin{equation}
\tr_A(\rho_A(t)) = \tr_A(\tr_E(\rho_{AE}(t))) = \tr(\rho_{AE}(0)) = 1
\end{equation}
$$

我们现在再偷懒, 假设在$$t=0$$时, 环境是纯态, 记作$$\ket{\psi_E}$$.
从而在$$t=0$$时, $$AE$$的密度矩阵是:

$$
\begin{equation}
\rho_{AE}(0) = \rho_A(0) \otimes \ketbra{\psi_E}{\psi_E}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\rho_A(t) = \tr_E(U(t) (\rho_A(0) \otimes \ketbra{\psi_E}{\psi_E}) U^\dagger(t))
\end{equation}
$$


---
## 举个人工例子: 比特的退相干问题.
假设$$A$$是一个比特, 他在一个任意的纯态上:

$$
\begin{equation}
\ket{\psi_A} = \alpha \ket{0} + \beta \ket{1}, \quad |\alpha|^2 + |\beta|^2 = 1
\end{equation}
$$

假设$$E$$是一个大环境, 他在一个纯态$$\ket{0_E}$$上:

$$
\begin{equation}
\ket{\psi_{AE}} = (\alpha \ket{0} + \beta \ket{1}) \otimes \ket{0_E}
\end{equation}
$$

从而我们的密度矩阵是:

$$
\begin{equation}
\rho_{A}(0) = \mqty[
|\alpha|^2 & \alpha \beta^* \\
\alpha^* \beta & |\beta|^2
]
\end{equation}
$$

我们人为的添加一点耦合, 让环境和在比特为$$\ket{\downarrow}$$的时候发生跃迁:

$$
\begin{equation}
\ket{\psi_{AE}(t)} = \alpha \ket{0} \otimes \ket{0_E} + \beta \ket{\downarrow} \otimes \ket{0_E}
\end{equation}
$$

变成了:

$$
\begin{equation}
\ket{\psi'_{AE}} = \alpha \ket{0} \otimes \ket{0_E} + \beta \ket{\downarrow} \otimes \ket{1_E}
\end{equation}
$$

此时$$A$$的密度矩阵是:

$$
\begin{equation}
\rho_A' = \tr_E(\ketbra{\psi'_{AE}}{\psi'_{AE}}) = \mqty[
|\alpha|^2 & 0 \\
0 & |\beta|^2
]
\end{equation}
$$

如果我们计算纯度:

$$
\begin{equation}
\tr(\rho_A'^2) = |\alpha|^4 + |\beta|^4 < 1
\end{equation}
$$

---
## 举个人工例子2: 两个耦合的自旋为1/2的粒子

我们现在考虑两个耦合的自旋为1/2的粒子, 他们的Hamiltonian是:

$$
\begin{equation}
H = -\hbar \omega \sigma_z^{(1)} \sigma_z^{(2)}
\end{equation}
$$

这是一类Ising模型, 当两个自旋平行的时候, 能量是最低的.
我们主要关心第一个粒子, 第二个粒子作为环境.
假设在$$t=0$$时, 两个粒子是一个纯态:

$$
\begin{equation}
\ket{\psi(0)} = \frac{1}{2} (a_+ \ket{\uparrow \uparrow} + a_- \ket{\uparrow \downarrow} + b_+ \ket{\downarrow \uparrow} + b_- \ket{\downarrow \downarrow})
\end{equation}
$$

他们的归一化条件是:

$$
\begin{equation}
|a_+|^2 + |a_-|^2 + |b_+|^2 + |b_-|^2 = 4
\end{equation}
$$

从而我们可以写出密度矩阵:

$$
\begin{equation}
\rho(0) = \frac{1}{4} \mqty[
|a_+|^2 & a_+ a_-^* & a_+ b_+^* & a_+ b_-^* \\
a_- a_+^* & |a_-|^2 & a_- b_+^* & a_- b_-^* \\
b_+ a_+^* & b_+ a_-^* & |b_+|^2 & b_+ b_-^* \\
b_- a_+^* & b_- a_-^* & b_- b_+^* & |b_-|^2
]
\end{equation}
$$

时间演化算符是:

$$
\begin{equation}
U(t) = \mathrm{e}^{-\mathrm{i} H t/\hbar} = \mathrm{e}^{\mathrm{i} \omega t \sigma_z^{(1)} \sigma_z^{(2)}}
\end{equation}
$$

考虑密度矩阵的时间演化, (太长不写了), 我们可以得到$$\rho_1(t)$$, 也就是第一个粒子的约化密度矩阵:

$$
\begin{equation}
\rho_1(t) = \tr_2(\rho(t)) = \mqty[
\frac{|a_+|^2 + |a_-|^2}{4} & \frac{a_+ b_+^* \mathrm{e}^{2 \mathrm{i} \omega t} + a_- b_-^* \mathrm{e}^{-2 \mathrm{i} \omega t}}{4} \\
\frac{b_+ a_+^* \mathrm{e}^{-2 \mathrm{i} \omega t} + b_- a_-^* \mathrm{e}^{2 \mathrm{i} \omega t}}{4} & \frac{|b_+|^2 + |b_-|^2}{4}
]
\end{equation}
$$

如果我们规定一开始的系数是:

$$
\begin{equation}
a_+ = a_- = b_+ = 1, \quad b_- = 0
\end{equation}
$$

我们的初始状态就是:

$$
\begin{equation}
\ket{\psi(0)} = \frac{1}{\sqrt{2}} (\ket{\uparrow} + \ket{\downarrow}) \otimes \frac{1}{\sqrt{2}} (\ket{\uparrow} + \ket{\downarrow})
\end{equation}
$$

两个粒子本来是没有纠缠的.
但是带入上面的公式, 我们得到:

$$
\begin{equation}
\rho_1(t) = \mqty[
\frac{1}{2} & \frac{\mathrm{e}^{2 \mathrm{i} \omega t}}{4} \\
\frac{\mathrm{e}^{-2 \mathrm{i} \omega t}}{4} & \frac{1}{2}
] 
\end{equation}
$$

随时时间的变化, 态开始纠缠起来了, 而且我们可以计算纯度:

$$
\begin{equation}
\tr(\rho_1(t)^2) = 1 - \frac{1}{2} \sin^2(2 \omega t) \leq 1
\end{equation}
$$

---
## 热力学问题

对于一个Microcanonical Ensemble, 我们考虑系统$$A$$在总能量$$E$$上所有的状态.
这些态形成了$$A$$的一个子空间, 记作$$U_E$$, 他的维度是$$\Omega(E)$$.
实际上, $$\Omega(E)$$是一个巨大的数, 记录了系统$$A$$在能量$$E$$上所有可能的量子态(简并度).
我们考虑投影算符:

$$
\begin{equation}
\Pi(E) = \sum_{n=1}^{\Omega(E)} \ketbra{E_n}{E_n}
\end{equation}
$$

就是把一个任意的态投影到$$U_E$$子空间上.
他满足:

$$
\begin{equation}
\tr \Pi(E) = \Omega(E)
\end{equation}
$$

考虑Microcanonical Ensemble, 他的核心在于, 在没有更多的信息下, 我们假设系统$$A$$在$$U_E$$子空间内的每一个态出现的概率是相等的.
从而我们可以写出Microcanonical Ensemble的密度矩阵:

$$
\begin{equation}
\rho(E) = \frac{1}{\Omega(E)} \Pi(E) 
\end{equation}
$$

换句话说就是, 系统$$A$$在$$U_E$$子空间内的每一个态出现的概率是$$1/\Omega(E)$$.
现在我们来看正则系综: 系统可以和一个大热库交换能量, 但是不能交换粒子, 热库的温度是$$T$$, 但是总体的能量是守恒的.
我们记$$\Omega^R(E)$$是热库在能量$$E$$上得微观态数目(简并度).
此时熵定义为:

$$
\begin{equation}
S^R(E) = k_B \ln \Omega^R(E)
\end{equation}
$$

考虑温度:

$$
\begin{equation}
\frac{1}{T} = \pdv{S^R(E)}{E} = k_B \pdv{\ln \Omega^R(E)}{E}
\end{equation}
$$

我们做积分得到:

$$
\begin{equation}
\Omega^R(E-E_n) = \Omega^R(E) \mathrm{e}^{-\frac{E_n}{k_B T}}
\end{equation}
$$

当系统取到能量$$E_n$$时, 热库的能量变成了$$E-E_n$$, 他的微观态数目变成了$$\Omega^R(E-E_n)$$, 比起原来的$$\Omega^R(E)$$, 少了一个指数因子.
但是整个体系的能量是守恒的, 也是孤立的, 所以我们的投影算子是:

$$
\begin{equation}
\Pi^{AR}(E) = \sum_{n=1}^{\Omega(E)} \sum_{\gamma=1}^{\Omega^R(E-E_n)} \ketbra{E_n} \otimes \ketbra{E^R_\gamma}{E^R_\gamma}
\end{equation}
$$

整体的密度矩阵是:

$$
\begin{equation}
\rho^{AR}(E) = \frac{1}{\Omega^{AR}(E)} \Pi^{AR}(E)
\end{equation}
$$

对$$R$$取迹, 我们得到:

$$
\begin{align}
\rho^A &= \tr_R(\rho^{AR}(E)) \\
&= \frac{1}{\Omega^{AR}(E)} \sum_{n=1}^{\Omega(E)} \sum_{\gamma=1}^{\Omega^R(E-E_n)} \ketbra{E_n} \tr(\ketbra{E^R_\gamma}{E^R_\gamma}) \\
&= \frac{1}{\Omega^{AR}(E)} \sum_{n=1}^{\Omega(E)} \Omega^R(E-E_n) \ketbra{E_n} \\
&= \frac{\Omega^R(E)}{\Omega^{AR}(E)} \sum_{n=1}^{\Omega(E)} \mathrm{e}^{-\frac{E_n}{k_B T}} \ketbra{E_n} \\
&= \frac{1}{Z} \sum_{n=1}^{\Omega(E)} \mathrm{e}^{-\frac{E_n}{k_B T}} \ketbra{E_n}
\end{align}
$$

从而可以写出正则系综的密度矩阵:

$$
\begin{equation}
\rho^A = \frac{1}{Z} \mathrm{e}^{-\frac{H_A}{k_B T}}, \quad Z = \sum_{n=1}^{\Omega(E)} \mathrm{e}^{-\frac{E_n}{k_B T}}
\end{equation}
$$