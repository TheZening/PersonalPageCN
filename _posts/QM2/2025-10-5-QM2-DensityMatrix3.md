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