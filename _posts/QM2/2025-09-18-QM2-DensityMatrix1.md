---
title: "QM2 密度矩阵1"
date: 2025-09-18
categories:
  - QM2
---

> 量子力学的随机性:
> 演化过程是完全严格的, 但是测量结果是随机的, 没有什么随机性来自于我们对知识掌握的不足.
> 你准备10个一模一样的瓶子, 粒子一开始都在瓶子中心, 完全按照Schrödinger方程演化, 然后观察粒子的位置, 你会发现10次实验的结果还是一个分布.

> 经典概率的随机性:
> 经典随机性来自于复杂性和信息的不完全性, 原则上你扔一个骰子是完全可预测的, 但是由于你无法掌握所有的初始条件, 只能用概率来描述结果.

在这个背景下, 针对系综(一模一样的系统的综合)的问题, 我们就考虑使用密度矩阵, density matrix来容纳这种经典的随机性.
另外, 密度矩阵还能解决一类问题: 当一个子系统与整个系统的其余部分纠缠时, 对该子系统的描述中必然包含随机性, 这种随机性就由密度矩阵描述.

> 纯态:
> 完整地包含了关于该量子系统的所有可知信息, 可以用态矢量 $$\ket{\psi}$$ 来描述.

> 混合态:
> 我们对系统没有完全的信息, 或者系统与外界发生了纠缠, 只能用密度矩阵 $$\rho$$ 来描述.

---
## 经典随机性

回到我们的经典的Stern-Gerlach实验, 我们的炉子有50%的概率发射自旋向上电子, 50%的概率发射自旋向下电子.
经典的随机性来自于我们对炉子发射电子的状态没有完全的信息, 只能说有50%的概率是向上, 50%的概率是向下.
从而我们可以用一个系综描述这个系统:


$$
\begin{equation}
E_{\text{z}} = \left\{ \left( \frac{1}{2}, \ket{\uparrow} \right), \left( \frac{1}{2}, \ket{\downarrow} \right) \right\}
\end{equation}
$$

目前看来, 我们通过列举法描述了这个系综.
如果系综更大, 我们也可以都列出来:

$$
\begin{equation}
E = \left\{ \left( p_1, \ket{\psi_1} \right), \left( p_2, \ket{\psi_2} \right), \ldots, \left( p_n, \ket{\psi_n} \right) \right\}
\end{equation}
$$

自然是要满足:

$$
\begin{equation}
\sum_{i=1}^{n} p_i = 1 \quad \braket{\psi_i}{\psi_i} = 1
\end{equation}
$$

但是我们不要求 $$\braket{\psi_i}{\psi_j} = 0 \quad (i \neq j)$$.
这是自然的, 系综只负责把大家聚在一起, 随便从大街上挑一个人不一定和你姓氏相同的.

自然而然的, 我们要求一个算符的平均值, 不仅要考虑量子力学的平均, 还要考虑经典的平均:
我们首先在一个系统内计算量子力学的平均值, 然后对系综内的所有系统进行经典的加权平均:

$$
\begin{equation}
\langle A \rangle = \sum_{i} p_i \mel{\psi_i}{A}{\psi_i}
\end{equation}
$$


---
## 什么是对系统没有完全的信息?

我们来考虑一个纠缠态的问题, Alice和Bob每个人都拿着一个自己的比特, 他们的总态是

$$
\begin{equation}
\ket{\psi_{AB}} = \frac{1}{\sqrt{2}} \left( \ket{\uparrow_A \downarrow_B} - \ket{\downarrow_A \uparrow_B} \right)
\end{equation}
$$

Alice开始测量她的比特, 如果她测量到 $$\ket{\uparrow_A}$$, 她就知道Bob的比特是 $$\ket{\downarrow_B}$$;
如果她测量到 $$\ket{\downarrow_A}$$, 她就知道Bob的比特是 $$\ket{\uparrow_B}$$.
但是在Alice测量之前, 她对Bob的比特一无所知, 她只能说Bob的比特有50%的概率是 $$\ket{\uparrow_B}$$, 50%的概率是 $$\ket{\downarrow_B}$$.
所以Alice对Bob的比特没有完全的信息, 她只能用一个系综来描述Bob的比特:

$$
\begin{equation}
E_B = \left\{ \left( \frac{1}{2}, \ket{\uparrow} \right), \left( \frac{1}{2}, \ket{\downarrow} \right) \right\}
\end{equation}
$$

我们现在要提出一个问题:


> 存不存在一个态 $$\ket{\phi_A}$$ (Alice的粒子) 使得我们能完全掌握这个粒子的信息?


如果这种态存在, 那么我们必有:

$$
\begin{equation}
\mel{\psi_A}{Q}{\psi_A} = \mel{\psi_{AB}}{Q \otimes I_B}{\psi_{AB}}
\end{equation}
$$


> 我们现在要证明, 不存在这样的纯态 $$\ket{\phi_A}$$!


我们考虑$$\sigma_x, \sigma_y, \sigma_z$$的期望值:

$$
\begin{align}
\sigma_x \otimes \mathbb{1} \ket{\psi_{AB}} &= \frac{1}{\sqrt{2}} \left( \ket{\downarrow_A \downarrow_B} - \ket{\uparrow_A \uparrow_B} \right) \\
\sigma_y \otimes \mathbb{1} \ket{\psi_{AB}} &= \frac{i}{\sqrt{2}} \left( \ket{\downarrow_A \downarrow_B} + \ket{\uparrow_A \uparrow_B} \right) \\
\sigma_z \otimes \mathbb{1} \ket{\psi_{AB}} &= \frac{1}{\sqrt{2}} \left( \ket{\uparrow_A \downarrow_B} + \ket{\downarrow_A \uparrow_B} \right)
\end{align}
$$

我们立刻可以发现:

$$
\begin{equation}
\mel{\psi_{AB}}{\sigma_x \otimes \mathbb{1}}{\psi_{AB}} = \mel{\psi_{AB}}{\sigma_y \otimes \mathbb{1}}{\psi_{AB}} = \mel{\psi_{AB}}{\sigma_z \otimes \mathbb{1}}{\psi_{AB}} = 0
\end{equation}
$$

那如果我们用信息等价的纯态 $$\ket{\phi_A}$$ 来计算呢?
我们必然期望的到:

$$
\begin{equation}
\mel{\phi_A}{\sigma_x}{\phi_A} = \mel{\phi_A}{\sigma_y}{\phi_A} = \mel{\phi_A}{\sigma_z}{\phi_A} = 0
\end{equation}
$$

这很明显是不可能的, 因为我们知道, 这就相当于一个态没有自旋偏振, 这是不可能的!
自旋必须得有一个指向.

所以我们证明了, 不存在一个纯态 $$\ket{\phi_A}$$ 能够完全描述Alice的粒子.
这就是一种对系统没有完全的信息描述的情况.


可是应该怎么描述呢?

---
## 密度矩阵

我们现在对于混合态有两个起点:
1. 系综的描述 $$E = \left\{ \left( p_i, \ket{\psi_i} \right) \right\}$$
2. 期望值的计算 $$\langle A \rangle = \sum_{i} p_i \mel{\psi_i}{A}{\psi_i}$$

我们从算符的期望值出发:

$$
\begin{align}
\langle A \rangle &= \sum_{i} p_i \mel{\psi_i}{A}{\psi_i} \\
&= \sum_{i} p_i \tr \left(  A \ket{\psi_i} \bra{\psi_i}\right) \\
&= \tr \left(  A \sum_{i} p_i \ket{\psi_i} \bra{\psi_i}\right) \\
&= \tr \left(  A \rho \right)
\end{align}
$$

从而我们有:

$$
\begin{equation}
\rho = \sum_{i} p_i \ket{\psi_i} \bra{\psi_i}
\end{equation}
$$

也就是说, 我们可以把系综 $$E = \left\{ \left( p_i, \ket{\psi_i} \right) \right\}$$ 用一个算符 $$\rho$$ 来描述.
这个算符 $$\rho$$ 就叫做密度矩阵, density matrix.
举个最简单的例子, 我们的经典Stern-Gerlach实验的系综可以用密度矩阵:

$$
\begin{equation}
\rho = \frac{1}{2} \ket{\uparrow} \bra{\uparrow} + \frac{1}{2} \ket{\downarrow} \bra{\downarrow} = \frac{1}{2} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
\end{equation}
$$

来描述.

---
## 密度矩阵的性质

1. $$\rho$$ 是Hermitian的.
2. $$\rho$$ 的本征值非负, 是半正定的.
3. $$\tr(\rho) = 1$$.
4. $$\rho$$ 不收到态的相位影响.
5. $$\tr{\rho^2} \leq 1$$, 当且仅当 $$\rho$$ 是纯态时取等号.


我们来一个一个的说明, 考虑密度矩阵:

$$
\begin{equation}
\rho = \sum_{i} p_i \ket{\psi_i} \bra{\psi_i} \Rightarrow \rho^\dagger = \sum_{i} p_i \ket{\psi_i} \bra{\psi_i} = \rho
\end{equation}
$$

这个确实是很直白的, 没什么好说的.

我们来证明第二个性质, $$\rho$$ 的本征值非负, 是半正定的.

$$
\begin{equation}
\mel{\psi}{\rho}{\psi} = \sum_{i} p_i \braket{\psi}{\psi_i} \braket{\psi_i}{\psi} = \sum_{i} p_i |\braket{\psi}{\psi_i}|^2 \geq 0
\end{equation}
$$

自然而然的, 本征值是非负的.
我们来证明第三个性质, $$\tr(\rho) = 1$$.

$$
\begin{align}
\tr(\rho) &= \sum_{i} p_i \tr(\ket{\psi_i} \bra{\psi_i}) \\
&= \sum_{i} p_i \braket{\psi_i}{\psi_i} \\
&= \sum_{i} p_i \cdot 1 \\
&= 1
\end{align}
$$

毕竟对于每个系统态是归一化的, 而且经典概率层面上也要求概率和为1.
我们来证明第四个性质, $$\rho$$ 不受到态的相位影响.

$$
\begin{equation}
\rho = \sum_{i} p_i \ket{\psi_i} \bra{\psi_i} = \sum_{i} p_i e^{i\phi_i} \ket{\psi_i} e^{-i\phi_i} \bra{\psi_i} = \rho
\end{equation}
$$

一个是ket, 一个是bra, 自然是相消的, 所以密度矩阵不受相位影响.
我们来证明第五个性质, $$\tr{\rho^2} \leq 1$$, 当且仅当 $$\rho$$ 是纯态时取等号.

$$
\begin{align}
\tr{\rho^2} &= \tr{\left( \sum_{i} p_i \ket{\psi_i} \bra{\psi_i} \right)^2} \\
&= \tr{\sum_{i,j} p_i p_j \ket{\psi_i} \bra{\psi_i} \ket{\psi_j} \bra{\psi_j}} \\
&= \sum_{i,j} p_i p_j \tr{\ket{\psi_i} \bra{\psi_i} \ket{\psi_j} \bra{\psi_j}} \\
&= \sum_{i,j} p_i p_j \braket{\psi_i}{\psi_j} \braket{\psi_j}{\psi_i} \\
&= \sum_{i,j} p_i p_j |\braket{\psi_i}{\psi_j}|^2
\end{align}
$$

如果 $$\rho$$ 是纯态, 那么 $$\rho = \ket{\psi} \bra{\psi}$$, 这时候:

$$\begin{align}
\tr{\rho^2} &= \tr{\ket{\psi} \bra{\psi} \ket{\psi} \bra{\psi}} \\
&= \tr{\ket{\psi} \bra{\psi}} \\
&= \braket{\psi}{\psi} \\
&= 1
\end{align}$$


---
## 纯度

一旦我们注意到 $$\tr{\rho^2}$$ 的性质, 我们就可以定义一个量来衡量混合态的纯度:

$$
\begin{equation}
P = \tr{\rho^2}
\end{equation}
$$

纯度的范围是 $$0 \leq P \leq 1$$, 当且仅当 $$P = 1$$ 时, $$\rho$$ 是纯态.
纯度越接近1, 混合态越接近纯态; 纯度越接近0, 混合态越接近完全混合态.
我们现在尝试来说明这件事.
如果密度矩阵是对角的, 我们有:

$$
\begin{equation}
\rho = \operatorname{diag}(p_1, p_2, \ldots, p_n) \Rightarrow \tr{\rho^2} = \sum_{i} p_i^2
\end{equation}
$$

我们想知道什么时候系统最接近混合态, 自然就是问什么时候 $$\sum_{i} p_i^2$$ 最小.
我们用拉格朗日乘数法来求解这个问题, 我们要求:

$$
\begin{equation}
\delta \left( \sum_{i} p_i^2 - \lambda \left( \sum_{i} p_i - 1 \right) \right) = 0
\end{equation}
$$

我们对 $$p_j$$ 求导:

$$
\begin{equation}
\frac{\partial}{\partial p_j} \left( \sum_{i} p_i^2 - \lambda \left( \sum_{i} p_i - 1 \right) \right) = 2 p_j - \lambda = 0
\end{equation}
$$

所以我们有 $$p_j = \frac{\lambda}{2}$$, 也就是说所有的 $$p_j$$ 都相等.
结合 $$\sum_{i} p_i = 1$$, 我们有 $$p_j = \frac{1}{n}$$.
所以我们有:

$$
\begin{equation}
\tr{\rho^2} = \sum_{i} p_i^2 = n \left( \frac{1}{n} \right)^2 = \frac{1}{n}
\end{equation}
$$

这就是完全混合态的纯度.
他的物理意义是, 系统在所有可能的态上均匀分布, 我们对系统一无所知.
自然而然就是最混合的!


---
## 系综与密度矩阵

我们现在提出一个定理:

> 定理:
> 如果一个矩阵是Hermitian的, 半正定的, 且迹为1, 那么它可以表示为一个系综的密度矩阵.

我们来证明这个定理.
我们考虑一个矩阵 $$\rho$$, 它是Hermitian的, 半正定的, 且迹为1.
由于 $$\rho$$ 是Hermitian的, 它可以对角化:

$$
\begin{equation}
\rho = \sum_{i} \lambda_i \ket{i} \bra{i} \quad \lambda_i \geq 0 \quad \sum_{i} \lambda_i = 1
\end{equation}
$$

考虑一个系综:

$$
\begin{equation}
E = \left\{ \left( \lambda_i, \ket{i} \right) \right\}
\end{equation}
$$

我们立刻注意到:

1. $$\lambda_i$$ 是非负的, $$\sum_{i} \lambda_i = 1$$, 所以它们可以作为概率.
2. $$\ket{i}$$ 是归一化的, $$\braket{i}{i} = 1$$.
3. $$\rho$$ 可以表示为这个系综的密度矩阵:

$$
\begin{equation}
\rho = \sum_{i} \lambda_i \ket{i} \bra{i}
\end{equation}
$$