---
title: "QM2 角动量的理论"
date: 2025-10-06
categories:
  - QM2
---

我们已经非常熟悉自旋和轨道的角动量理论了, 现在我们从更抽象的角度来重新审视一下角动量.
我们知道角动量的本质是旋转对称性, 也就是说如果一个系统在空间中旋转了, 那么它的物理性质不变.
这种对称性对应的守恒量就是角动量.
无论他是自旋的角动量还是轨道的角动量, 他们都遵循同样的角动量代数.
我们把角动量算符记为 $$\boldsymbol{J} = (J_x, J_y, J_z)$$, 他们满足以下对易关系:

$$
\begin{equation}
[J_i, J_j] = i \hbar \epsilon_{ijk} J_k
\end{equation}
$$

这里 $$\epsilon_{ijk}$$ 是完全反对称张量.
这个对易关系告诉我们, 角动量的三个分量不能同时被测量.
根据我们对于自旋和轨道角动量的理解, 我们知道我们可以找到一组共同本征态, 使得 $$J^2$$ 和 $$J_z$$ 有确定的值.
我们定义:

$$
\begin{equation}
J^2 = J_x^2 + J_y^2 + J_z^2
\end{equation}
$$

从而我们有:

$$
\begin{equation}
J^2 \ket{j, m} = \hbar^2 j(j+1) \ket{j, m} \quad J_z \ket{j, m} = \hbar m \ket{j, m}
\end{equation}
$$

经验告诉我们, 角动量大多数是计算对易子的艺术, 所以我们现在把这些准备好.
定义升降算符:

$$
\begin{equation}
J_+ = J_x + i J_y \quad J_- = J_x - i J_y
\end{equation}
$$

他满足:

$$
\begin{equation}
J_\pm \ket{j, m} = \hbar \sqrt{j(j+1) - m(m \pm 1)} \ket{j, m \pm 1}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
[J_z, J_\pm] = \pm \hbar J_\pm \quad [J_+, J_-] = 2 \hbar J_z
\end{equation}
$$

以及:

$$
\begin{equation}
[J^2, J_i] = 0 \quad i = x, y, z
\end{equation}
$$

现在我们考虑两个角动量 $$\boldsymbol{J}_1$$ 和 $$\boldsymbol{J}_2$$, 他们分别作用在两个不同的Hilbert空间 $$\mathcal{H}_1$$ 和 $$\mathcal{H}_2$$ 上.
可以两个都是轨道角动量, 也可以是自旋角动量, 也可以一个是轨道一个是自旋, 这都不重要.
我们定义总角动量为:

$$
\begin{equation}
\boldsymbol{J} = \boldsymbol{J}_1 + \boldsymbol{J}_2
\end{equation}
$$

如果写的严谨一些, 就是:

$$
\begin{equation}
\boldsymbol{J} = \boldsymbol{J}_1 \otimes \mathbb{I}_2 + \mathbb{I}_1 \otimes \boldsymbol{J}_2
\end{equation}
$$

这里 $$\mathbb{I}_1$$ 和 $$\mathbb{I}_2$$ 分别是两个Hilbert空间的单位算符.
自然而然的, $$\boldsymbol{J}$$ 是一个作用在 $$\mathcal{H}_1 \otimes \mathcal{H}_2$$ 上的角动量算符.
我们可以验证 $$\boldsymbol{J}$$ 也满足角动量的对易关系:

$$
\begin{align}
[J_i, J_j] &= [J_{1i} + J_{2i}, J_{1j} + J_{2j}] \\
&= [J_{1i}, J_{1j}] + [J_{2i}, J_{2j}] \\
&= i \hbar \epsilon_{ijk} (J_{1k} + J_{2k}) \\
&= i \hbar \epsilon_{ijk} J_k
\end{align}
$$

因为我们知道 $$\boldsymbol{J}_1$$ 作用在 $$\mathcal{H}_1$$ 上, $$\boldsymbol{J}_2$$ 作用在 $$\mathcal{H}_2$$ 上, 所以 $$[J_{1i}, J_{2j}] = 0$$.

> 能不能是线性组合相加?
> 这个我们可以试试, 如果你构造一个 $$\boldsymbol{J} = a \boldsymbol{J}_1 + b \boldsymbol{J}_2$$, 你会发现:
> $$
> \begin{align}
> [J_i, J_j] &= [a J_{1i} + b J_{2i}, a J_{1j} + b J_{2j}] \\
> &= a^2 [J_{1i}, J_{1j}] + b^2 [J_{2i}, J_{2j}] \\
> &= i \hbar (a^2 \epsilon_{ijk} J_{1k} + b^2 \epsilon_{ijk} J_{2k}) \\
> &\neq i \hbar \epsilon_{ijk} (a J_{1k} + b J_{2k})
> \end{align}
> $$
> 除非 $$a = b = 1$$.
> 所以只能是简单的相加.

由于任意一个角动量算符作用的向量空间都可以分解为角动量的不可约表示的直和, 所以我们可以通过角动量的不可约表示来理解在 $$\mathcal{H}_1 \otimes \mathcal{H}_2$$ 上的Hamiltonian的谱.

---
## 两个自旋1/2的耦合

我们先来看一个简单的例子, 两个自旋1/2的耦合.
每个自旋1/2的Hilbert空间是二维的, 如果用之前的记号, 那这个空间的基就是:

$$
\begin{equation}
\ket{\frac{1}{2}, \frac{1}{2}} \quad \ket{\frac{1}{2}, -\frac{1}{2}}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\boldsymbol{S}^2 \ket{\frac{1}{2}, m} = \hbar^2 \frac{3}{4} \ket{\frac{1}{2}, m} \quad S_z \ket{\frac{1}{2}, m} = \hbar m \ket{\frac{1}{2}, m}
\end{equation}
$$

如果我们开始考虑两个自旋1/2的系统, 那么总的Hilbert空间就是四维的, 基底可以写成直积的形式:

$$
\begin{equation}
\ket{\uparrow_1, \uparrow_2}, \quad \ket{\uparrow_1, \downarrow_2}, \quad \ket{\downarrow_1, \uparrow_2}, \quad \ket{\downarrow_1, \downarrow_2}
\end{equation}
$$

也就是说新的Hilbert空间完全可以被他们张成.
