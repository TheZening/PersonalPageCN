---
title: "角动量耦合与表示(一)"
date: 2025-10-05
weight: 1
legacySeries: "QM2"
aliases:
  - "/notes/Quantum_Mechanics/Angular_Momentum/Coupling_and_Representations/part-1/"
  - "/notes/Quantum_Mechanics/Fundamental_Concepts_1/Angular_Momentum/Coupling_and_Representations/part-1/"
  - "/qm2/QM2-AngularMomentum1/"
---
之前我们学习过角动量的量子化, 并且知道角动量的本征值是量子化的:

$$
L^2 \ket{l,m} = \hbar^2 l(l+1) \ket{l,m}, \quad L_z \ket{l,m} = \hbar m \ket{l,m}
$$

其中量子数 $l$ 和 $m$ 满足:

$$
l = 0, 1, 2, \ldots; \quad m = -l, -l+1, \ldots, l-1, l
$$

---
## 代数计算

对于每一个 $l$, 有 $2l + 1$ 个可能的 $m$ 值, 因此每个 $l$ 对应一个包含 $2l + 1$ 个状态的多重态.

比如我们考虑一个自旋-1/2粒子, 它的角动量量子数 $l = 1/2$, 那么它有两个可能的 $m$ 值: $m = -1/2$ 和 $m = 1/2$. 这两个状态形成一个双重态 (doublet):

$$
\boldsymbol{S}^2 = \frac{\hbar^2}{4} (\sigma_x^2 + \sigma_y^2 + \sigma_z^2) = \frac{3\hbar^2}{4} \mathbb{I}
$$

从而我们有:

$$
S^2 \ket{1/2, m} = \frac{3\hbar^2}{4} \ket{1/2, m}, \quad S_z \ket{1/2, m} = \hbar m \ket{1/2, m}
$$

我们现在拓展一下记号, 我们不再拘泥于自旋$S$, 或者$L$, 我们用 $J$ 来表示总角动量, 其量子数为 $j$ 和 $m_j$, 自然而然的, 我们要求他满足角动量的对易关系:

$$
[J_i, J_j] = \mathrm{i}\, \hbar \epsilon_{ijk} J_k
$$

从而我们也可以检查:

$$
[J^2, J_i] = 0
$$

我们现在介绍一套新的描述方法:

$$
J_{\pm} = J_x \pm \mathrm{i}\, J_y \quad J_+^\dagger = J_-
$$

开始进行一些简单计算:

$$
J_+ J_- = J_x^2 + J_y^2 - \mathrm{i}\,[J_x, J_y] = J_x^2 + J_y^2 + \hbar J_z = J^2 - J_z^2 + \hbar J_z
$$

从而我们有:

$$
J_- J_+ = J^2 - J_z^2 - \hbar J_z = J_x^2 + J_y^2 - \hbar J_z
$$

我们还可以计算:

$$
[J_z, J_{\pm}] = \pm \hbar J_{\pm} \quad [J_+, J_-] = 2 \hbar J_z
$$

我们可以反着往回拆:

$$
J_x = \frac{J_+ + J_-}{2}, \quad J_y = \frac{J_+ - J_-}{2\mathrm{i}}
$$

从而我们有:

$$
J_x^2 + J_y^2 = J_+ J_- - \hbar J_z = J_- J_+ + \hbar J_z
$$

还可以表示出来$J^2$:

$$
J^2 = J_x^2 + J_y^2 + J_z^2 = J_+ J_- + J_z^2 - \hbar J_z = J_- J_+ + J_z^2 + \hbar J_z
$$


---
## 角动量的多重态

> 多重态:
> 量子力学中, 多重态(multiplet)指的是具有相同总角动量量子数$j$, 但不同磁量子数$m$的多个量子态的集合.
> 这些态在能量上通常是简并的, 但在空间取向上有所不同.

> 代数上说, 多重态是由一组线性无关的向量构成的特殊集合.
> 这些向量在Hilbert空间中形成一个子空间, 而且这个子空间$V$在角动量算符的作用下是封闭的.
> $$
> J_x: V \to V, \quad J_y: V \to V, \quad J_z: V \to V
> $$
> 此外, 多重态是不可约的, 就是说不存在更小的子空间在角动量算符的作用下仍然是封闭的.
> 这意味着多重态中的每个态都可以通过角动量算符的作用从其他态生成.
> 如果存在一个更大的子空间$W$, 角动量算符在其上作用时, 整个$W$可以拆成多个多重态的直和.
> 这和群表示论里面的思想一致: 任何表示都可以拆成不可约表示的直和.


我们现在考虑 $J^2$ 和 $J_z$ 的共同本征态 $\ket{j, m}$:

$$
\begin{align}
J^2 \ket{j, m} &= \hbar^2 j(j+1) \ket{j, m} \\
J_z \ket{j, m} &= \hbar m \ket{j, m}
\end{align}
$$

其中我们肯定有:

$$
\braket{j, m}{j,m'} = \delta_{m,m'}
$$

就像我们之前说的, $j(j+1)$肯定是非负的:

$$
\begin{align}
hbar^2 j(j+1) =& \mel{j,m}{J^2}{j,m} = \sum_i \mel{j,m}{J_i^2}{j,m} \\
=& \sum_i \norm{J_i \ket{j,m}}^2 \geq 0
\end{align}
$$

从而我们有:

$$
j(j+1) \geq 0 \implies j \geq 0 \quad \text{or} \quad j \leq  -1
$$

我们考虑 $j \geq 0$ 的情况, 另外一种情况我们不考虑.
让我们看看阶梯算符怎么回事:

$$
J^2 (J_{\pm} \ket{j,m}) = J_{\pm} (J^2 \ket{j,m}) = \hbar^2 j(j+1) (J_{\pm} \ket{j,m})
$$

$$
J_z (J_{\pm} \ket{j,m}) = (J_{\pm} J_z + [J_z, J_{\pm}]) \ket{j,m} = \hbar (m \pm 1) (J_{\pm} \ket{j,m})
$$

我们注意到:

$$
J_{\pm} \ket{j,m} = C_{\pm} \ket{j, m \pm 1}
$$

我们不如直接计算:

$$
\mel{j,m}{J_- J_+}{j,m} = C_+^2 \quad \mel{j,m}{J_+ J_-}{j,m} = C_-^2
$$

我们利用:

$$
J_- J_+ = J^2 - J_z^2 - \hbar J_z \quad J_+ J_- = J^2 - J_z^2 + \hbar J_z
$$

我们可以获得:

$$
C_+^2 = \hbar^2 [j(j+1) - m(m+1)], \quad C_-^2 = \hbar^2 [j(j+1) - m(m-1)]
$$

从而我们有:

$$
C_+ = \hbar \sqrt{j(j+1) - m(m+1)}, \quad C_- = \hbar \sqrt{j(j+1) - m(m-1)}
$$

一般的:

$$
J_{\pm} \ket{j,m} = \hbar \sqrt{j(j+1) - m(m \pm 1)} \ket{j, m \pm 1}
$$

我们注意到:

$$
\norm{J_+ \ket{j,m}}^2 = \hbar^2 [j(j+1) - m(m+1)] \geq 0
$$

解这个不等式, 我们有:

$$
-j - 1 \leq m \leq j
$$

同理的, 我们有:

$$
-j \leq m \leq j + 1
$$

取交集, 我们有:

$$
-j \leq m \leq j
$$

所以我们一定有:

$$
J_+ \ket{j,j} = 0 \quad J_- \ket{j, -j} = 0
$$

现在我们看看$j$都能是什么:

$$
2j \in \mathbb{Z} \implies j = 0, \frac{1}{2}, 1, \frac{3}{2}, 2, \ldots
$$

这是个很重要的结论:

> 角动量量子数$j$可以是整数(0, 1, 2, ...)或者半整数(1/2, 3/2, ...).
> 这意味着粒子的角动量可以有两种基本类型: 整数自旋和半整数自旋.
> 例如, 电子具有自旋1/2, 而光子具有自旋1.
> 这种区分在量子力学中非常重要, 因为它决定了粒子的统计性质和行为方式.

从而对于一个给定的$j$, 我们有$2j + 1$个可能的$m$值:

$$
\ket{j, j}, \ket{j, j-1}, \ldots, \ket{j, -j+1}, \ket{j, -j}
$$

1. 如果$j=0$, 那么只有一个状态$\ket{0,0}$, 这个叫singlet, 这个singlet是一维的.
2. 如果$j=1/2$, 那么有两个状态$\ket{1/2, 1/2}$和$\ket{1/2, -1/2}$, 这个叫doublet, 这个doublet是二维的.
3. 如果$j=1$, 那么有三个状态$\ket{1,1}$, $\ket{1,0}$和$\ket{1,-1}$, 这个叫triplet, 这个triplet是三维的.
如果我们专注于轨道角动量, 那么这个就对应的是$p$轨道.
如果我们专注于自旋1的粒子, 那么这三个态就对应的是$m_s = 1, 0, -1$的三个自旋态, 那么自旋矩阵就是$3 \times 3$的矩阵.
4. 如果$j=3/2$, 那么有四个状态$\ket{3/2, 3/2}$, $\ket{3/2, 1/2}$, $\ket{3/2, -1/2}$和$\ket{3/2, -3/2}$, 这个叫quartet, 这个quartet是四维的.

我们仔细看看$j=1$的情况, 我们有:

$$
\ket{1} \equiv \ket{1,1}, \quad \ket{0} \equiv \ket{1,0}, \quad \ket{3} \equiv \ket{1,-1}
$$

先看$J_z$:

$$
J_z \ket{1,1} = \hbar \ket{1,1}, \quad J_z \ket{1,0} = 0, \quad J_z \ket{1,-1} = -\hbar \ket{1,-1}
$$

计算9个矩阵元, 我们自然有:

$$
J_z = \hbar \mqty[1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1]
$$

同样的, 我们计算$J_+$:

$$
J_+ \ket{1,1} = 0, \quad J_+ \ket{1,0} = \hbar \sqrt{2} \ket{1,1}, \quad J_+ \ket{1,-1} = \hbar \sqrt{2} \ket{1,0}
$$

从而我们有:

$$
J_+ = \hbar \sqrt{2} \mqty[0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0] \quad
J_- = \hbar \sqrt{2} \mqty[0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0]
$$

这样我们就能算$J_x$和$J_y$:

$$
J_x = \frac{J_+ + J_-}{2} = \frac{\hbar}{\sqrt{2}} \mqty[0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0]
$$
$$
J_y = \frac{J_+ - J_-}{2\mathrm{i}} = \frac{\hbar}{\sqrt{2}} \mqty[0 & -\mathrm{i} & 0 \\ \mathrm{i} & 0 & -\mathrm{i} \\ 0 & \mathrm{i} & 0]
$$

从而我们有:

$$
J^2 = J_x^2 + J_y^2 + J_z^2 = 2 \hbar^2 \mqty[1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1] = 2 \hbar^2 I
$$

这和球谐函数$Y_{1,m}$的情况有什么关系呢?
我们如果专注于轨道角动量$L$, 那么$l=1$的情况对应的是$p$轨道:

$$
L^2 \ket{l,m} = \hbar^2 l(l+1) \ket{l,m}
$$
$$
L_z \ket{l,m} = \hbar m \ket{l,m}
$$

翻译成球谐函数的形式:

$$
L^2 Y_{l,m}(\theta, \phi) = \hbar^2 l(l+1) Y_{l,m}(\theta, \phi)
$$
$$
L_z Y_{l,m}(\theta, \phi) = \hbar m Y_{l,m}(\theta, \phi)
$$

当然这个时候我们就把抽象的角动量算符$L$表示成微分算符:

$$
L_z = -\mathrm{i}\, \hbar \pdv{}{\phi}
$$
$$
L_{\pm} = \hbar e^{\pm \mathrm{i} \phi} \left( \pm \pdv{}{\theta} + \mathrm{i} \cot \theta \pdv{}{\phi} \right)
$$
$$
L^2 = -\hbar^2 \left[ \frac{1}{\sin \theta} \pdv{\theta} \left( \sin \theta \pdv{}{\theta} \right) + \frac{1}{\sin^2 \theta} \pdv[2]{}{\phi} \right]
$$

我们先给出球坐标下的正交归一化:

$$
\braket{\theta, \phi}{\theta', \phi'} = \frac{1}{\sin \theta} \delta(\theta - \theta') \delta(\phi - \phi')
$$

同时也有投影关系:

$$
\int_0^{2\pi} \int_0^{\pi} \sin \theta \dd{\theta} \dd{\phi} \ket{\theta, \phi} \bra{\theta, \phi} = \mathbb{I}
$$

实际上, 球谐函数$Y_{l,m}(\theta, \phi)$就是$\ket{l,m}$在$\ket{\theta, \phi}$基底下的展开系数:

$$
Y_{l,m}(\theta, \phi) = \braket{\theta, \phi}{l,m}
$$

我们从$\ket{l,l}$开始:

$$
\sum_{l=0}^{\infty} \sum_{m=-l}^{l} \ketbra{l,m}{l,m} = \mathbb{I}
$$
$$
\braket{l',m'}{l,m} = \delta_{l,l'} \delta_{m,m'}
$$

插入完备性关系:

$$
\int_0^{2\pi} \int_0^{\pi} \sin \theta \braket{l',m'}{\theta, \phi} \braket{\theta, \phi}{l,m} \dd{\theta} \dd{\phi} = \delta_{l,l'} \delta_{m,m'}
$$

这就是球谐函数的正交归一化条件:

$$
\int_0^{2\pi} \int_0^{\pi} Y_{l',m'}^*(\theta, \phi) Y_{l,m}(\theta, \phi) \sin \theta \dd{\theta} \dd{\phi} = \delta_{l,l'} \delta_{m,m'}
$$

这就是个来回换基的问题, 没什么特别复杂的.
