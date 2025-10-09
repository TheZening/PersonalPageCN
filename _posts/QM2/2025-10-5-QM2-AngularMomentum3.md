---
title: "QM2 角动量与中心势3"
date: 2025-10-6

categories:
  - QM2
---

现在我们来聊聊我们上一个内容里发现的神秘的数学结构.
仿佛是有一套方法, 能避免我们愚蠢的计算张量积下的矩阵元.
我们先站的远一点, 回想一些线性代数的知识.

---
## 线性空间与张量积

我们专注于一个有限维的线性空间$$V_1$$, 其维数为$$n_1$$.
他有一个基底$$\{\ket{a_i}\}, i=1,2,\cdots,n_1$$.
我们可以把$$V_1$$中的任意向量$$\ket{v}$$表示为

$$
\begin{equation}
\ket{v} = \sum_{i=1}^{n_1} v_i \ket{a_i}
\end{equation}
$$

现在我们再考虑另一个有限维线性空间$$V_2$$, 其维数为$$n_2$$.
他有一个基底$$\{\ket{b_j}\}, j=1,2,\cdots,n_2$$.
我们可以把$$V_2$$中的任意向量$$\ket{w}$$表示为

$$
\begin{equation}
\ket{w} = \sum_{j=1}^{n_2} w_j \ket{b_j}
\end{equation}
$$

我们现在想构造一个新的线性空间$$V_3$$, 我们QM1研究过, 张量积是更恰当的构造方法, 维度相乘扩展, 而不是相加.

$$
\begin{equation}
\dim(V_3) = \dim(V_1) \times \dim(V_2) = n_1 n_2
\end{equation}
$$

这样可以容纳$$V_1$$和$$V_2$$的所有信息.
$$V_3$$的基底可以写成$$\{\ket{a_i}\otimes\ket{b_j}\}, i=1,2,\cdots,n_1, j=1,2,\cdots,n_2$$.
我们可以把$$V_3$$中的任意向量$$\ket{u}$$表示为

$$
\begin{equation}
\ket{u} = \sum_{i=1}^{n_1} \sum_{j=1}^{n_2} u_{ij} \ket{a_i}\otimes\ket{b_j}
\end{equation}
$$

目前看来, 这是最一般的套路, 没什么问题.
这也是我们观察到的: 角动量的耦合空间, 是两个角动量空间的张量积空间.
但是, 我们发现了一个奇怪的现象: 角动量的耦合空间, 似乎有另外一套基底.
这套基底不是$$\{\ket{j_1, m_1}\otimes\ket{j_2, m_2}\}$$, 而是$$\{\ket{J, M}\}$$.
尤其是两个例子中遇到到$$3+1$$和$$4+2$$的情况.
仿佛是维度相加?

---
## 直和分解

我们先复习一下直和这个概念.

> 设$$V$$是一个线性空间, $$W_1$$和$$W_2$$是$$V$$的两个子空间.
> 首先, 如果$$W_1 + W_2 = V$$:
$$
\begin{equation}
\forall \ket{v} \in V, \exists \ket{w_1} \in W_1, \exists \ket{w_2} \in W_2, \ket{v} = \ket{w_1} + \ket{w_2}
\end{equation}
$$
> 那么$$V$$是$$W_1$$和$$W_2$$的和空间, 记为$$V = W_1 + W_2$$.
> 其次, 如果$$W_1 \cap W_2 = \{\ket{0}\}$$:
$$
\begin{equation}
\ket{w} \in W_1, \ket{w} \in W_2 \Rightarrow \ket{w} = \ket{0}
\end{equation}
$$
> 那么$$W_1$$和$$W_2$$只有零向量一个公共元素.
> 如果$$V = W_1 + W_2$$且$$W_1 \cap W_2 = \{\ket{0}\}$$, 那么$$V$$是$$W_1$$和$$W_2$$的直和, 记为$$V = W_1 \oplus W_2$$.

我们首先说明一下, 直和的维数是相加的.

$$
\begin{equation}
\dim(V) = \dim(W_1) + \dim(W_2)
\end{equation}
$$

举个例子, 设$$V = \mathbb{R}^2$$, $$W_1 = \{(x,0)|x\in\mathbb{R}\}$$, $$W_2 = \{(0,y)|y\in\mathbb{R}\}$$.
那么$$V = W_1 \oplus W_2$$, $$\dim(V) = 2$$, $$\dim(W_1) = 1$$, $$\dim(W_2) = 1$$.
我们从几何上也能看到, 此处$$W_1$$和$$W_2$$是$$V$$的两个正交子空间(两条过原点的直线), 任何$$V$$中的向量都能唯一分解为$$W_1$$和$$W_2$$中的向量之和.

但是我们也强调一个问题, 直和的分解并不是唯一的.
比如$$V = \mathbb{R}^2$$, $$W_1 = \{(x,x)|x\in\mathbb{R}\}$$, $$W_2 = \{(y,-y)|y\in\mathbb{R}\}$$.
同样$$V = W_1 \oplus W_2$$, $$\dim(V) = 2$$, $$\dim(W_1) = 1$$, $$\dim(W_2) = 1$$.
但是$$W_1$$和$$W_2$$不是正交的(两条过原点的直线, 夹角45度), 但是任何$$V$$中的向量仍然能唯一分解为$$W_1$$和$$W_2$$中的向量之和.
所以, 直和的分解不是唯一的, 但是维数是唯一的.

> 能拆, 但是不唯一.

与直和分解非常相关的一个概念是商空间.
我们需要先看看陪集的概念, 一个陪集就是商空间中的一个元素.


> 设$$V$$是一个线性空间, $$W$$是$$V$$的一个子空间.
> 考虑$$\forall \ket{v} \in V$$, 我们可以定义$$\ket{v}$$关于$$W$$的陪集:
> $$
> \begin{equation}
> \ket{v} + W = \{\ket{v} + \ket{w} | \ket{w} \in W\}
> \end{equation}
> $$
> 这个陪集是$$V$$的一个子集, 记为$$[\ket{v}]$$.
> 这实际上是一个等价类.

举个例子, 设$$V = \mathbb{R}^2$$, $$W = \{(x,0)|x\in\mathbb{R}\}$$.
此时$$W$$就是x轴.
取$$\ket{v} = (0,1)$$, 那么$$[\ket{v}] = \{(x,1)|x\in\mathbb{R}\}$$.
就是平行于x轴的一条直线, $y=1$.
取$$\ket{u} = (2,1)$$, 那么$$[\ket{u}] = \{(x+2,1)|x\in\mathbb{R}\}$$.
也是平行于x轴的一条直线, $y=1$.
所以$$[\ket{v}] = [\ket{u}]$$.
取$$\ket{v} = (0,3)$$, 那么$$[\ket{v}] = \{(x,3)|x\in\mathbb{R}\}$$.
就是平行于x轴的一条直线, $y=3$.
很明显后面这个陪集和前面两个陪集不相等.
进行推广, 我们发现所有的陪集$$[\ket{v}]$$, $$\ket{v} \in V$$, 就是所有平行于x轴的直线.

现在我们可以定义商空间了.

> 设 $$V$$ 是一个线性空间, $$W$$ 是 $$V$$ 的一个子空间.
> 我们定义 $$V$$ 关于 $$W$$ 的商空间 $$V/W$$ 为
> $$
> \begin{equation}
> V/W = \{[\ket{v}] | \ket{v} \in V\}
> \end{equation}
> $$
> 也就是说, 商空间 $$V/W$$ 的元素是 $$V$$ 中所有向量 $$\ket{v}$$ 关于 $$W$$ 的陪集 $$[\ket{v}]$$.
> 商空间 $$V/W$$ 是一个线性空间, 其加法和数乘定义如下:
> $$
> \begin{equation}
> [\ket{v}] + [\ket{u}] = [\ket{v} + \ket{u}]
> \end{equation}
> $$
> $$
> \begin{equation}
> c[\ket{v}] = [c\ket{v}]
> \end{equation}
> $$

举个例子, 设$$V = \mathbb{R}^2$$, $$W = \{(x,0)|x\in\mathbb{R}\}$$.
此时$$W$$就是x轴.
那么$$V/W$$就是所有平行于x轴的直线的集合.
我们可以把$$V/W$$中的元素$$[\ket{v}]$$表示为$$(0,y) + W$$, 其中$$y$$是一个实数.
所以$$V/W$$中的元素可以用一个实数来表示.
所以$$V/W$$是一个一维线性空间.
我们可以验证$$\dim(V/W) = \dim(V) - \dim(W)$$.
因为$$\dim(V) = 2$$, $$\dim(W) = 1$$, 所以$$\dim(V/W) = 1$$.'

我们看个三维的例子.
设$$V = \mathbb{R}^3$$, $$W = \{(x,y,0)|x,y\in\mathbb{R}\}$$.
此时$$W$$就是xy平面.
那么$$V/W$$就是所有平行于xy平面的平面的集合.
我们可以把$$V/W$$中的元素$$[\ket{v}]$$表示为$$(0,0,z) + W$$, 其中$$z$$是一个实数.
所以$$V/W$$中的元素可以用一个实数来表示.
所以$$V/W$$是一个一维线性空间.
我们可以验证$$\dim(V/W) = \dim(V) - \dim(W)$$.
因为$$\dim(V) = 3$$, $$\dim(W) = 2$$, 所以$$\dim(V/W) = 1$$.

这个其实有一个非常直观的理解.
我们把$$V$$想象成一个三维空间, $$W$$是一个二维平面.
那么$$V/W$$就是所有平行于$$W$$的平面的集合.
每个这样的平面可以用一个实数来表示, 这个实数就是这个平面到$$W$$的距离(带符号).
所以$$V/W$$是一个一维线性空间.
在很多力学问题里, 我们在重力势能的时候, 我们只在意高度, 而不在意水平位置.
这就是一个商空间的例子.
我们虽然是一个三维向量空间, 但是我们的物理定律告诉我们, 我们可以把这个三维空间"压缩"成一个一维空间, 就是商掉那个二维平面.

---
## 张量积拆成直和

我们举个具体例子, 设$$V = \mathbb{R}^2$$, $$W = \mathbb{R}^2$$.
$$V$$有一个标准正交基底$$\{\ket{a_1} = (1,0), \ket{a_2} = (0,1)\}$$.
$$W$$有一个标准正交基底$$\{\ket{b_1} = (1,0), \ket{b_2} = (0,1)\}$$.
那么$$V \otimes W$$有一个标准正交基底:

$$
\begin{equation}
\{\ket{a_1}\otimes\ket{b_1}, \ket{a_1}\otimes\ket{b_2}, \ket{a_2}\otimes\ket{b_1}, \ket{a_2}\otimes\ket{b_2}\}
\end{equation}
$$

自然的, 我们可以把他们写成矩阵的形式:

$$
\begin{equation}
\ket{a_1}\otimes\ket{b_1} = \mqty[1 & 0 \\ 0 & 0], \quad
\ket{a_1}\otimes\ket{b_2} = \mqty[0 & 1 \\ 0 & 0]
\end{equation}
$$
$$
\begin{equation}
\ket{a_2}\otimes\ket{b_1} = \mqty[0 & 0 \\ 1 & 0], \quad
\ket{a_2}\otimes\ket{b_2} = \mqty[0 & 0 \\ 0 & 1]
\end{equation}
$$

所以一个$$V \otimes W$$中的任意向量$$\ket{u}$$可以表示为:

$$
\begin{align}
\ket{u} &= u_{11} \ket{a_1}\otimes\ket{b_1} + u_{12} \ket{a_1}\otimes\ket{b_2} + u_{21} \ket{a_2}\otimes\ket{b_1} + u_{22} \ket{a_2}\otimes\ket{b_2} \\
&= \mqty[u_{11} & u_{12} \\ u_{21} & u_{22}]
\end{align}
$$

这个时候我们可以注意到一个事实, 任何一个矩阵都可以做如下分解:

$$
\begin{equation}
\mqty[a & b \\ c & d] = \mqty[a & (b+c)/2 \\ (b+c)/2 & d] + \mqty[0 & (b-c)/2 \\ (c-b)/2 & 0]
\end{equation}
$$

现在我们就能意识到了, 我们不一定非得用标准基底.
我们可以试试用如下基底:

$$
\begin{equation}
\ket{c_1} = \ket{a_1}\otimes\ket{b_1}, \quad
\ket{c_2} = \ket{a_2}\otimes\ket{b_2}, \quad
\ket{c_3} = \frac{1}{\sqrt{2}}(\ket{a_1}\otimes\ket{b_2} + \ket{a_2}\otimes\ket{b_1})
\end{equation}
$$

这三个对应的矩阵是:

$$
\begin{equation}
\mqty[1 & 0 \\ 0 & 0], \quad
\mqty[0 & 0 \\ 0 & 1], \quad
\mqty[0 & 1 \\ 1 & 0]
\end{equation}
$$

这三个矩阵是线性无关的, 但是不能张成$$V \otimes W$$.
但是确实张成了$$V \otimes W$$的一个三维子空间$$U_1$$.
还有最后一个基底, 我们取:

$$
\begin{equation}
\ket{c_4} = \frac{1}{\sqrt{2}}(\ket{a_1}\otimes\ket{b_2} - \ket{a_2}\otimes\ket{b_1})
\end{equation}
$$

矩阵就是:

$$
\begin{equation}
\mqty[0 & 1 \\ -1 & 0]
\end{equation}
$$

这个自己构成了$$V \otimes W$$的一个一维子空间$$U_2$$.
所以我们发现了一个新的分解:

$$
\begin{equation}
V \otimes W = U_1 \oplus U_2
\end{equation}
$$

> 这仿佛就是我们之前发现的现象: 两个角动量的耦合空间, 可以拆成两个子空间的直和.

但是问题又来了, 这个分解是唯一的吗?
答案是否定的.
我们可以做如下拆分:

$$
\begin{equation}
\mqty[a & b \\ c & d] = \mqty[ a & 0 \\ 0 & d] + \mqty[0 & b \\ c & 0]
\end{equation}
$$

也没毛病.
这个时候我们就能选择如下的拆分:
$$
\begin{equation}
D = \text{span}\{\ket{a_1}\otimes\ket{b_1}, \ket{a_2}\otimes\ket{b_2}\}
\end{equation}
$$
$$
\begin{equation}
O = \text{span}\{\ket{a_1}\otimes\ket{b_2}, \ket{a_2}\otimes\ket{b_1}\}
\end{equation}
$$

从而我们可以做如下的拆分:

$$
\begin{equation}
V \otimes W = D \oplus O
\end{equation}
$$

也没问题!