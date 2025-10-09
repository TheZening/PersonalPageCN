---
title: "QM2 角动量与中心势2"
date: 2025-10-5

categories:
  - QM2
---

我们现在从单个粒子的角动量算符出发, 讨论多粒子系统的角动量耦合.
设有两个粒子, 其角动量算符分别为$$\boldsymbol{J}_1, \boldsymbol{J}_2$$, 那么我们怎么怎么定义总角动量算符呢?
以及有没有什么捷径可以直接写出总角动量的本征值和本征态呢?

不管是什么耦合, 角动量算符都必须满足如下的对易关系:
$$
\begin{equation}
[J_i, J_j] = i \hbar \epsilon_{ijk} J_k
\end{equation}
$$
总角动量也不能违反这个对易关系.

如果我们按照之前扩张算符的做法, 考虑Hilbert空间$$\mathcal{H} = \mathcal{H}_1 \otimes \mathcal{H}_2$$, 那么我们可以定义:
$$
\begin{equation}
\boldsymbol{J} = \boldsymbol{J}_1 \otimes \mathbb{I} + \mathbb{I} \otimes \boldsymbol{J}_2
\end{equation}
$$
其中$$\mathbb{I}$$是单位算符.
这个定义是合理的, 因为$$\boldsymbol{J}_1$$和$$\boldsymbol{J}_2$$作用在不同的Hilbert空间上, 它们之间对易.
并且这个定义也满足角动量的对易关系.
我们可以验证:

$$
\begin{align}
[J_i, J_j] &= [J_{1i} \otimes \mathbb{I} + \mathbb{I} \otimes J_{2i}, J_{1j} \otimes \mathbb{I} + \mathbb{I} \otimes J_{2j}] \\
&= [J_{1i}, J_{1j}] \otimes \mathbb{I} + \mathbb{I} \otimes [J_{2i}, J_{2j}] \\
&= i \hbar \epsilon_{ijk} (J_{1k} \otimes \mathbb{I} + \mathbb{I} \otimes J_{2k}) \\
&= i \hbar \epsilon_{ijk} J_k
\end{align}
$$

我们可以看到, 这个定义满足角动量的对易关系!
再进行下一步讨论之前, 我们先回顾一下单个粒子的角动量算符.

$$
\begin{align}
J^2 \ket{j,m} &= \hbar^2 j(j+1) \ket{j,m} \\
J_z \ket{j,m} &= \hbar m \ket{j,m} \\
J_{\pm} \ket{j,m} &= \hbar \sqrt{j(j+1) - m(m \pm 1)} \ket{j, m \pm 1}
\end{align}
$$

其中$$j = 0, 1/2, 1, 3/2, \ldots$$, $$m = -j, -j+1, \ldots, j-1, j$$.
我们可以看到, $$j$$决定了角动量的大小, $$m$$决定了角动量在$$z$$方向的分量.
$$J_+$$和$$J_-$$分别是升降算符, 它们可以改变$$m$$的值.

我们从最简单的例子一点一点的看.

---
## 两个自旋1/2粒子的耦合

设有两个自旋1/2的粒子, 它们的角动量算符分别为$$\boldsymbol{S}_1$$和$$\boldsymbol{S}_2$$.
单个自旋1/2粒子的本征态可以表示为$$\ket{\uparrow}$$和$$\ket{\downarrow}$$, 分别对应$$m = 1/2$$和$$m = -1/2$$.
因此, 两个自旋1/2粒子的总Hilbert空间是$$\mathcal{H} = \mathcal{H}_1 \otimes \mathcal{H}_2$$, 维数为4.
我们可以选择如下的直积获得的基:

$$
\begin{equation}
\ket{\uparrow_1\, \uparrow_2}, \ket{\uparrow_1\, \downarrow_2}, \ket{\downarrow_2\, \uparrow_1}, \ket{\downarrow_2\, \downarrow_2}
\end{equation}
$$

其中$$\ket{\uparrow_1\, \uparrow_2} = \ket{\uparrow_1} \otimes \ket{\uparrow_2}$$, 其他类似.
标号$$1, 2$$表示粒子1和粒子2.
但这里有个问题: 我们这样构造的基不是总角动量算符$$\boldsymbol{S} = \boldsymbol{S}_1 + \boldsymbol{S}_2$$的本征态, 没什么一眼能看出来的证据.
在这个基下, 我们可以计算总角动量算符$$\boldsymbol{S} = \boldsymbol{S}_1 + \boldsymbol{S}_2$$的矩阵表示:

$$
\begin{equation}
S_z = S_{1z} + S_{2z} = \frac{\hbar}{2} \mqty[
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1
]
\end{equation}
$$

是对角的, 没啥毛病啊.
接下来我们可以看看$$S^2 = (\boldsymbol{S}_1 + \boldsymbol{S}_2)^2 = S_1^2 + S_2^2 + 2 \boldsymbol{S}_1 \cdot \boldsymbol{S}_2$$这个算符的矩阵表示.
前两项$$S_1^2$$和$$S_2^2$$都是常数, 它们的矩阵表示分别为$$\frac{3}{4} \hbar^2 \mathbb{I}$$.
关键是第三项$$2 \boldsymbol{S}_1 \cdot \boldsymbol{S}_2$$.
我们可以写成$$2 (S_{1x} S_{2x} + S_{1y} S_{2y} + S_{1z} S_{2z})$$.
从而可以开始根据单粒子态的来计算所有的矩阵表示:

$$
\begin{equation}
S_{1x} S_{2x} = \frac{\hbar^2}{4} \mqty[
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
1 & 0 & 0 & 0
]
\end{equation}
$$
$$
\begin{equation}
S_{1y} S_{2y} = \frac{\hbar^2}{4} \mqty[
0 & 0 & 0 & -1 \\
0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
-1 & 0 & 0 & 0
]
\end{equation}
$$
$$
\begin{equation}
S_{1z} S_{2z} = \frac{\hbar^2}{4} \mqty[
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & 1
]
\end{equation}
$$

这样我们就能得到$$2 \boldsymbol{S}_1 \cdot \boldsymbol{S}_2$$的矩阵表示:

$$
\begin{equation}
2 \boldsymbol{S}_1 \cdot \boldsymbol{S}_2 = \frac{\hbar^2}{2} \mqty[
-1 & 0 & 0 & 2 \\
0 & 1 & 2 & 0 \\
0 & 2 & 1 & 0 \\
2 & 0 & 0 & -1
]
\end{equation}
$$

因此, 总角动量算符$$S^2$$的矩阵表示为:

$$
\begin{equation}
S^2 = S_1^2 + S_2^2 + 2 \boldsymbol{S}_1 \cdot \boldsymbol{S}_2 = \hbar^2 \mqty[
1 & 0 & 0 & 1 \\
0 & 1 & 1 & 0 \\
0 & 1 & 1 & 0 \\
1 & 0 & 0 & 1
]
\end{equation}
$$

哎! 问题发现了, 这个矩阵不是对角的!
这说明我们选择的基不是$$S^2$$的本征态.
我们需要找到$$S^2$$的本征值和本征态.
对角化这个思维矩阵, 我们可以得到它的本征值和本征态.
计算结果如下:

$$
\begin{align}
\lambda_1 = 0, &\quad \ket{S} = \frac{1}{\sqrt{2}} (\ket{\uparrow_1\, \downarrow_2} - \ket{\downarrow_1\, \uparrow_2}) \\
\lambda_2 = 2 \hbar^2, &\quad \ket{T_+} = \ket{\uparrow_1\, \uparrow_2} \\
\lambda_3 = 2 \hbar^2, &\quad \ket{T_0} = \frac{1}{\sqrt{2}} (\ket{\uparrow_1\, \downarrow_2} + \ket{\downarrow_1\, \uparrow_2}) \\
\lambda_4 = 2 \hbar^2, &\quad \ket{T_-} = \ket{\downarrow_1\, \downarrow_2}
\end{align}
$$

但是现在还得回过头去看, 这些本征态是不是$$S_z$$的本征态.
这很简单, 因为这些态是$$S_z$$的本征态的线性组合, 所以我们只需要计算一下:

$$
\begin{align}
S_z \ket{S} &= 0 \\
S_z \ket{T_+} &= \hbar \ket{T_+} \\
S_z \ket{T_0} &= 0 \\
S_z \ket{T_-} &= -\hbar \ket{T_-}
\end{align}
$$

这样的话, 我们就得到了$$S^2$$和$$S_z$$的共同本征态.

$$
\begin{align}
S^2 \ket{S} &= 0 \ket{S}, & S_z \ket{S} &= 0 \ket{S} \\
S^2 \ket{T_+} &= 2 \hbar^2 \ket{T_+}, & S_z \ket{T_+} &= \hbar \ket{T_+} \\
S^2 \ket{T_0} &= 2 \hbar^2 \ket{T_0}, & S_z \ket{T_0} &= 0 \ket{T_0} \\
S^2 \ket{T_-} &= 2 \hbar^2 \ket{T_-}, & S_z \ket{T_-} &= -\hbar \ket{T_-}
\end{align}
$$

现在我们知道了一点, 张量积空间的维数是4, 但是总角动量的本征值只有两个: $$0$$和$$2 \hbar^2$$.
这说明我们可以把4维空间分成两个子空间, 一个是1维的, 另一个是3维的.
1维的子空间由$$\ket{S}$$张成, 3维的子空间由$$\ket{T_+}, \ket{T_0}, \ket{T_-}$$张成.
这两个子空间分别对应总角动量$$s = 0$$和$$s = 1$$.
我们可以把这些态重新命名为$$\ket{s, m}$$的形式:

$$
\begin{equation}
\ket{0, 0} = \ket{S}, \quad \ket{1, 1} = \ket{T_+}, \quad \ket{1, 0} = \ket{T_0}, \quad \ket{1, -1} = \ket{T_-}
\end{equation}
$$

我们先把数学内容交代一下在这里, 等下回来再看看有什么玄机.
目前来说, 至少我们知道张量积不一定好用, 找到本征态可能更方便沟通, 当然本征态需要花点时间去算.

---
## 轨道角动量-自旋耦合.

> 一个粒子也会遇到这个问题吗?

设有一个粒子, 它有轨道角动量$$\boldsymbol{L}$$和自旋角动量$$\boldsymbol{S}$$.
他的轨道角动量算符$$\boldsymbol{L}$$自然是来自于空间坐标的, 是三维空间的.
自旋角动量$$\boldsymbol{S}$$是内禀的, 自然和空间坐标无关.
所以我们这个时候, 虽然只有一个粒子, 但是它的Hilbert空间也是张量积的形式$$\mathcal{H} = \mathcal{H}_{\text{orb}} \otimes \mathcal{H}_{\text{spin}}$$.
轨道角动量$$\boldsymbol{L}$$作用在$$\mathcal{H}_{\text{orb}}$$上, 自旋角动量$$\boldsymbol{S}$$作用在$$\mathcal{H}_{\text{spin}}$$上.
总角动量算符可以定义为:

$$
\begin{equation}
\boldsymbol{J} = \boldsymbol{L} \otimes \mathbb{I} + \mathbb{I} \otimes \boldsymbol{S}
\end{equation}
$$

我们现在来看看这个算符的本征值和本征态.
设轨道角动量$$\boldsymbol{L}$$的量子数为$$l=1$$, 否则太难算了.
那么$$\mathcal{H}_{\text{orb}}$$的维数是$$2l+1=3$$, 本征态为$$\ket{l,m_l}$$, 其中$$m_l = -1, 0, 1$$.
自旋角动量$$\boldsymbol{S}$$的量子数为$$s=1/2$$, 维数为2, 本征态为$$\ket{s,m_s}$$, 其中$$m_s = -1/2, 1/2$$.
因此, 总Hilbert空间$$\mathcal{H}$$的维数是$$3 \times 2 = 6$$.
我们可以选择如下的直积基:

$$
\begin{align}
\ket{1,1} \otimes \ket{1/2,1/2}, &\quad \ket{1,1} \otimes \ket{1/2,-1/2}, \\
\ket{1,0} \otimes \ket{1/2,1/2}, &\quad \ket{1,0} \otimes \ket{1/2,-1/2}, \\
\ket{1,-1} \otimes \ket{1/2,1/2}, &\quad \ket{1,-1} \otimes \ket{1/2,-1/2}
\end{align}
$$

开始计算总角动量算符$$\boldsymbol{J} = \boldsymbol{L} + \boldsymbol{S}$$的矩阵表示.
首先计算$$J_z = L_z + S_z$$的矩阵表示:

$$
\begin{equation}
J_z = L_z + S_z = \hbar \mqty[
\frac{3}{2} & 0 & 0 & 0 & 0 & 0 \\
0 & \frac{1}{2} & 0 & 0 & 0 & 0 \\
0 & 0 & \frac{1}{2} & 0 & 0 & 0 \\
0 & 0 & 0 & -\frac{1}{2} & 0 & 0 \\
0 & 0 & 0 & 0 & -\frac{1}{2} & 0 \\
0 & 0 & 0 & 0 & 0 & -\frac{3}{2}
]
\end{equation}
$$

这个好算, 毕竟还是对角的.
接下来计算$$J^2 = (L + S)^2 = L^2 + S^2 + 2 \boldsymbol{L} \cdot \boldsymbol{S}$$的矩阵表示.
前两项$$L^2$$和$$S^2$$都是常数, 它们的矩阵表示分别为$$2 \hbar^2 \mathbb{I}_3$$和$$\frac{3}{4} \hbar^2 \mathbb{I}_2$$.
关键是第三项$$2 \boldsymbol{L} \cdot \boldsymbol{S}$$.
我们可以写成$$2 (L_x S_x + L_y S_y + L_z S_z)$$.
从而可以开始根据单粒子态的来计算所有的矩阵表示:

$$
\begin{align}
L_x S_x &= \frac{\hbar^2}{2} \mqty[
0 & \frac{1}{\sqrt{2}} & 0 & 0 & 0 & 0 \\
\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} & 0 & 0 & 0 \\
0 & \frac{1}{\sqrt{2}} & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 0 & \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\
0 & 0 & 0 & 0 & \frac{1}{\sqrt{2}} & 0
] \\
L_y S_y &= \frac{\hbar^2}{2} \mqty[
0 & -\frac{1}{\sqrt{2}} & 0 & 0 & 0 & 0 \\
-\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} & 0 & 0 & 0 \\
0 & \frac{1}{\sqrt{2}} & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -\frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 0 & -\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\
0 & 0 & 0 & 0 & \frac{1}{\sqrt{2}} & 0
] \\
L_z S_z &= \frac{\hbar^2}{2} \mqty[
\frac{1}{2} & 0 & 0 & 0 & 0 & 0 \\
0 & -\frac{1}{2} & 0 & 0 & 0 & 0 \\
0 & 0 & \frac{1}{2} & 0 & 0 & 0 \\
0 & 0 & 0 & -\frac{1}{2} & 0 & 0 \\
0 & 0 & 0 & 0 & -\frac{1}{2} & 0 \\
0 & 0 & 0 & 0 & 0 & \frac{1}{2}
]
\end{align}
$$

加到一起, 进行化简:

$$
\begin{equation}
2 \boldsymbol{L} \cdot \boldsymbol{S} = \hbar^2 \mqty[
1 & 0 & 1 & 0 & 0 & 0 \\
0 & -1 & 0 & 1 & 0 & 0 \\
1 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -1 & 0 \\
0 & 0 & 0 & 1 & 0 & 1
]
\end{equation}
$$

所以我们的总角动量算符$$J^2$$的矩阵表示为:

$$
\begin{equation}
J^2 = L^2 + S^2 + 2 \boldsymbol{L} \cdot \boldsymbol{S} = \hbar^2 \mqty[
\frac{7}{4} & 0 & 1 & 0 & 0 & 0 \\
0 & \frac{7}{4} & 0 & 1 & 0 & 0 \\
1 & 0 & \frac{7}{4} & 0 & 1 & 0 \\
0 & 1 & 0 & \frac{7}{4} & 0 & 1 \\
0 & 0 & 1 & 0 & \frac{7}{4} & 0 \\
0 & 0 & 0 & 1 & 0 & \frac{7}{4}
]
\end{equation}
$$

目前看来啊, 这个矩阵也不是对角的.
我们需要对角化这个矩阵, 找到它的本征值和本征态.
这对于算力超群的天才来说, 不太难, 但是我们已经注意到一个问题了, 这矩阵随着$$l$$和$$s$$的增大, 维数会迅速增大, 计算量也会迅速增大.
所以我们需要找点捷径, 不能每次都这么算下去.
我们先把结果写出来, 然后再讨论.
对角化这个矩阵, 我们可以得到它的本征值和本征态.
计算结果如下:

$$
\begin{align}
\lambda_1 = \frac{15}{4} \hbar^2, &\quad \ket{3/2, 3/2} = \ket{1,1} \otimes \ket{1/2,1/2} \\
\lambda_2 = \frac{15}{4} \hbar^2, &\quad \ket{3/2, 1/2} = \sqrt{\frac{2}{3}} \ket{1,0} \otimes \ket{1/2,1/2} + \sqrt{\frac{1}{3}} \ket{1,1} \otimes \ket{1/2,-1/2} \\
\lambda_3 = \frac{15}{4} \hbar^2, &\quad \ket{3/2, -1/2} = \sqrt{\frac{1}{3}} \ket{1,-1} \otimes \ket{1/2,1/2} + \sqrt{\frac{2}{3}} \ket{1,0} \otimes \ket{1/2,-1/2} \\
\lambda_4 = \frac{15}{4} \hbar^2, &\quad \ket{3/2, -3/2} = \ket{1,-1} \otimes \ket{1/2,-1/2} \\
\lambda_5 = \frac{3}{4} \hbar^2, &\quad \ket{1/2, 1/2} = -\sqrt{\frac{1}{3}} \ket{1,0} \otimes \ket{1/2,1/2} + \sqrt{\frac{2}{3}} \ket{1,1} \otimes \ket{1/2,-1/2} \\
\lambda_6 = \frac{3}{4} \hbar^2, &\quad \ket{1/2, -1/2} = \sqrt{\frac{2}{3}} \ket{1,-1} \otimes \ket{1/2,1/2} - \sqrt{\frac{1}{3}} \ket{1,0} \otimes \ket{1/2,-1/2}
\end{align}
$$

哎, 我们现在又发现了, 这个矩阵的本征值只有两个: $$\frac{15}{4} \hbar^2$$和$$\frac{3}{4} \hbar^2$$.
这说明我们可以把6维空间分成两个子空间, 一个是4维的, 另一个是2维的.
4维的子空间由$$\ket{3/2, 3/2}, \ket{3/2, 1/2}, \ket{3/2, -1/2}, \ket{3/2, -3/2}$$张成, 2维的子空间由$$\ket{1/2, 1/2}, \ket{1/2, -1/2}$$张成.
这两个子空间分别对应总角动量$$j = 3/2$$和$$j = 1/2$$.
我们可以把这些态重新命名为$$\ket{j, m_j}$$的形式:

$$
\begin{align}
\ket{3/2, 3/2} &= \ket{1,1} \otimes \ket{1/2,1/2}, \\
\ket{3/2, 1/2} &= \sqrt{\frac{2}{3}} \ket{1,0} \otimes \ket{1/2,1/2} + \sqrt{\frac{1}{3}} \ket{1,1} \otimes \ket{1/2,-1/2}, \\
\ket{3/2, -1/2} &= \sqrt{\frac{1}{3}} \ket{1,-1} \otimes \ket{1/2,1/2} + \sqrt{\frac{2}{3}} \ket{1,0} \otimes \ket{1/2,-1/2}, \\
\ket{3/2, -3/2} &= \ket{1,-1} \otimes \ket{1/2,-1/2}, \\
\ket{1/2, 1/2} &= -\sqrt{\frac{1}{3}} \ket{1,0} \otimes \ket{1/2,1/2} + \sqrt{\frac{2}{3}} \ket{1,1} \otimes \ket{1/2,-1/2}, \\
\ket{1/2, -1/2} &= \sqrt{\frac{2}{3}} \ket{1,-1} \otimes \ket{1/2,1/2} - \sqrt{\frac{1}{3}} \ket{1,0} \otimes \ket{1/2,-1/2}
\end{align}
$$

仿佛是四个$$j=3/2$$态和两个$$j=1/2$$态?
我们先把数学内容交代一下在这里, 等下回来再看看有什么玄机.

---
## 价带模型

在半导体物理中, 价带模型是一个重要的概念.
价带的一个重要特性是, 他的顶点态是由轨道角动量$$l=1$$和自旋$$s=1/2$$耦合形成的.
为什么轨道角动量是$$l=1$$呢?
这是因为价带顶点态主要由原子的$$p$$轨道组成, $$p$$轨道对应的轨道角动量量子数就是$$l=1$$.
自旋$$s=1/2$$是因为电子的自旋就是$$1/2$$.
因此, 价带顶点态的总角动量是由轨道角动量$$l=1$$和自旋$$s=1/2$$耦合形成的.
我们已经计算过, 这种耦合会产生两个总角动量态: $$j=3/2$$和$$j=1/2$$.
价带顶点态的能级结构就是由这两个总角动量态决定的.

价带顶点态的能级结构衍生了一类巨大的基础问题, 就是自旋轨道耦合.
自旋轨道耦合是指电子的自旋和轨道运动之间的相互作用, 当然不仅仅是价带, 很多体系都存在这种相互作用.
这种相互作用会导致能级的分裂, 形成不同的能级.
对于价带顶点态, 自旋轨道耦合会导致$$j=3/2$$态和$$j=1/2$$态的能级分裂.
通常情况下, $$j=3/2$$态的能级会高于$$j=1/2$$态的能级.
这种能级分裂对于理解半导体的光学和电子性质是非常重要的.

因为我们知道, $$j=3/2$$态有4个简并态, $$j=1/2$$态有2个简并态.
所以价带顶点的四个态通常被称为重空穴态和轻空穴态, 分别对应$$j=3/2$$的不同$$m_j$$值.
重空穴态对应$$m_j = \pm 3/2$$, 轻空穴态对应$$m_j = \pm 1/2$$.
而$$j=1/2$$态则对应于分裂的自旋轨道态.
这种能级结构对于理解半导体的光学吸收和发射过程是非常重要的.