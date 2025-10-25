---
title: "CMP1 全同粒子的再表述4"
date: 2025-09-12
categories:
  - CMP1
---

上一小节我们讨论了单粒子算符在多粒子系统的中的对应, 如果我们考虑任意的一组基:

$$
\begin{equation}
\{ \ket{u_1}, \ket{u_2}, \ket{u_3}, \cdots \}
\end{equation}
$$

我们可以将单粒子算符 $\hat{f}$ 在该基下展开:

$$
\begin{equation}
\hat{F} = \sum_{i,j} \mel{u_i}{\hat{f}}{u_j} \hat{a}_i^\dagger \hat{a}_j
\end{equation}
$$

对应的, 我们也可以考虑二粒子算符在多粒子系统中的对应:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{i,j,k,l} \mel{1=u_i, 2=u_j}{\hat{g}}{1=u_k, 2=u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

如果恰好单粒子算符层面上是可以拆的 $$\hat{g}(q,q') = \hat{f}{q} \hat{h}{q'}$$, 那么二粒子算符在多粒子系统中的对应就可以写成单粒子算符的形式:

$$
\begin{equation}
\hat{G} = \sum_{i,j,k,l} \mel{u_i}{\hat{f}}{u_k} \mel{u_j}{\hat{h}}{u_l} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

我们现在主要讨论一下这些算符的性质, 当然, 主要是双粒子算符的性质.

---
## 最小的例子: 两个粒子

我们现在考虑两个粒子的体系, 最简单的体系.
我们想描述如下的实验过程抽象:

> 我们扔进去两个粒子, 态分别是 $$\ket{u_\alpha}$$ 和 $$\ket{u_\beta}$$, 然后经过一段时间的黑盒演化.
> 然后我们观测到最后的态是 $$\ket{u_\gamma}$$ 和 $$\ket{u_\delta}$$.
> 我们如何用一个算符抽象的描述这个过程呢?

首先我们知道, 我们的初态编号是任意的:

$$
\begin{equation}
\ket{1=u_\alpha, 2=u_\beta} \quad \text{或者} \quad \ket{1=u_\beta, 2=u_\alpha}
\end{equation}
$$

我们的末态编号也是任意的:

$$
\begin{equation}
\ket{1=u_\gamma, 2=u_\delta} \quad \text{或者} \quad \ket{1=u_\delta, 2=u_\gamma}
\end{equation}
$$

所以我们有四种可能:

$$
\begin{equation}
\frac{1}{2} \mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\alpha, 2=u_\beta} \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\beta, 2=u_\alpha} \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\beta, 2=u_\alpha} \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta}
\end{equation}
$$
$$
\begin{equation}
\frac{1}{2} \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\alpha, 2=u_\beta} \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

在这四个式子里面, 我们注意到, 前两个式子实际上是一样的, 后两个式子实际上也是一样的, 就是标号不一样的.
然后我们对产生-湮灭算符进行置换:

$$
\begin{equation}
\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha} = \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$
$$
\begin{equation}
\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\alpha} \hat{a}_{\beta} = \hat{a}_{\delta}^\dagger \hat{a}_{\gamma}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha} = \eta \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

其中$$\eta$$是粒子的交换相位, 玻色子 $$\eta = +1$$, 费米子 $$\eta = -1$$.
现在我们把可能的过程都加起来:

$$
\begin{equation}
\left( \mel{u_\gamma, u_\delta}{\hat{g}}{u_\alpha, u_\beta} + \eta \mel{u_\delta, u_\gamma}{\hat{g}}{u_\alpha, u_\beta} \right) \hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}
\end{equation}
$$

如果我们用布居数态求那些生成湮灭算符, 如果是玻色子:

$$
\begin{equation}
\mel{n_\alpha, n_\beta, n_\gamma, n_\delta}{\hat{a}_{\gamma}^\dagger \hat{a}_{\delta}^\dagger \hat{a}_{\beta} \hat{a}_{\alpha}}{n_\alpha, n_\beta, n_\gamma, n_\delta} = \sqrt{n_\alpha n_\beta (n_\gamma + 1)(n_\delta + 1)}
\end{equation}
$$

如果是费米子, 就更简单了, 只能是$$1$$.
这个简单的例子告诉我们一些重要的性质:

1. 双粒子算符会出现两项, 第一项就是 $$\mel{1=u_\gamma, 2=u_\delta}{\hat{g}}{1=u_\alpha, 2=u_\beta}$$.
2. 因为是黑盒, 理所应当的, 还有一个交换项 $$\eta \mel{1=u_\delta, 2=u_\gamma}{\hat{g}}{1=u_\alpha, 2=u_\beta}$$, 其中$$\eta$$是粒子的交换相位.
3. 产生湮灭算符的作用, 会带来布居数的因子, 玻色子是平方根形式, 有一个增强, 费米子是 $$1$$, 有一个Pauli阻塞现象.

---
## 例子二: 位置表象下的相互作用

我们现在考虑$$N$$个粒子的体系, 粒子之间有相互作用, 相互作用是通过位置表象下的势能 $$W(\boldsymbol{x}_q, \boldsymbol{x}_{q'})$$ 来描述的.
所以整体的势能是:

$$
\begin{equation}
W_{\text{int}} = \sum_{q < q'} W_2(\boldsymbol{x}_q, \boldsymbol{x}_{q'})
\end{equation}
$$

从而我们可以求单粒子算符 $$\hat{W}$$ 在位置表象下的矩阵元:

$$
\begin{equation}
\mel{1=u_i, 2=u_j}{\hat{W}_2}{1=u_k, 2=u_l} = \iint W_2(\boldsymbol{x}_1, \boldsymbol{x}_2) u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_k(\boldsymbol{x}_1) u_l(\boldsymbol{x}_2) \dd{\boldsymbol{x}_1} \dd{\boldsymbol{x}_2}
\end{equation}
$$

从而我们有:

$$
\begin{equation}
\hat{W} = \frac{1}{2} \sum_{i,j,k,l} \int W_2(\boldsymbol{x}_1, \boldsymbol{x}_2) u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_k(\boldsymbol{x}_1) u_l(\boldsymbol{x}_2) \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k \dd{\boldsymbol{x}_1} \dd{\boldsymbol{x}_2}
\end{equation}
$$

如果对于一个布居数态求这个算符的平均, 我们有:

$$
\begin{equation}
\mel{n_1, n_2, \cdots}{\hat{W}}{n_1, n_2, \cdots} = \frac{1}{2} \int W_2(\boldsymbol{x}_1, \boldsymbol{x}_2) G_2(\boldsymbol{x}_1, \boldsymbol{x}_2) \dd{\boldsymbol{x}_1} \dd{\boldsymbol{x}_2}
\end{equation}
$$

其中:

$$
\begin{equation}
G_2(\boldsymbol{x}_1, \boldsymbol{x}_2) = \sum_{i,j,k,l} u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_k(\boldsymbol{x}_1) u_l(\boldsymbol{x}_2) \mel{n_1, n_2, \cdots}{\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k}{n_1, n_2, \cdots}
\end{equation}
$$

从而计算这个期望值就变成了计算 $$G_2(\boldsymbol{x}_1, \boldsymbol{x}_2)$$的问题.
如果要想让 $$G_2(\boldsymbol{x}_1, \boldsymbol{x}_2)$$ 有意义, 我们只能有两种情况:

第一种情况: $$i=k, j=l$$, 这对应与湮灭 $$i$$ 和 $$j$$ 态的粒子, 然后再产生 $$i$$ 和 $$j$$ 态的粒子:

$$
\begin{equation}
\sum_{i,j} \|u_i(\boldsymbol{x}_1)\|^2 \|u_j(\boldsymbol{x}_2)\|^2 \mel{n_1, n_2, \cdots}{\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_j \hat{a}_i}{n_1, n_2, \cdots}
\end{equation}
$$

对于Boson:

$$
\begin{equation}
\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_j \hat{a}_i = \hat{a}_i^\dagger \hat{a}_i \hat{a}_j^\dagger \hat{a}_j = \hat{n}_i \hat{n}_j
\end{equation}
$$

对于Fermion, 换两次, 负号抵消了:

$$
\begin{equation}
\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_j \hat{a}_i = \hat{a}_i^\dagger \hat{a}_i \hat{a}_j^\dagger \hat{a}_j = \hat{n}_i \hat{n}_j
\end{equation}
$$

所以我们的结果是:

$$
\begin{equation}
\sum_{i,j} \|u_i(\boldsymbol{x}_1)\|^2 \|u_j(\boldsymbol{x}_2)\|^2 n_i n_j
\end{equation}
$$

这一项叫做Direct term, 直接项.
我们还有一种特殊情况没有考虑, 那就是 $$i=j=k=l$$, 也就是湮灭和产生的是同一个态的粒子:

$$
\begin{equation}
\sum_{i} \|u_i(\boldsymbol{x}_1)\|^2 \|u_i(\boldsymbol{x}_2)\|^2 \mel{n_1, n_2, \cdots}{\hat{a}_i^\dagger \hat{a}_i^\dagger \hat{a}_i \hat{a}_i}{n_1, n_2, \cdots}
\end{equation}
$$

结果是:

$$
\begin{equation}
\sum_{i} \|u_i(\boldsymbol{x}_1)\|^2 \|u_i(\boldsymbol{x}_2)\|^2 n_i (n_i - 1)
\end{equation}
$$

从而整体结果是:

$$
\begin{equation}
G_2(\boldsymbol{x}_1, \boldsymbol{x}_2) = \sum_{i,j} \|u_i(\boldsymbol{x}_1)\|^2 \|u_j(\boldsymbol{x}_2)\|^2 n_i n_j + \eta \sum_{i} \|u_i(\boldsymbol{x}_1)\|^2 \|u_i(\boldsymbol{x}_2)\|^2 n_i (n_i - 1)
\end{equation}
$$

第二种情况: $$i=l, j=k$$, 这对应与湮灭 $$i$$ 粒子, 产生了 $$j$$ 态的粒子, 然后湮灭 $$j$$ 态的粒子, 产生了 $$i$$ 态的粒子.
很明显, 这是一种交换.

$$
\begin{equation}
\sum_{i,j} u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_i(\boldsymbol{x}_2) u_j(\boldsymbol{x}_1) \mel{n_1, n_2, \cdots}{\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_i \hat{a}_j}{n_1, n_2, \cdots}
\end{equation}
$$

波函数部分是基本上没什么办法了, 但是产生湮灭算符部分我们可以进行变换:

$$
\begin{equation}
\hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_i \hat{a}_j = \eta \hat{a}_i^\dagger \hat{a}_i \hat{a}_j^\dagger \hat{a}_j = \eta \hat{n}_i \hat{n}_j
\end{equation}
$$

因为交换一次了, 所以Boson和Fermion要区别对待, 对于Fermion的情况, 我们的$$\eta=-1$$.
所以我们的结果是:

$$
\begin{equation}
\eta \sum_{i,j} u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_i(\boldsymbol{x}_2) u_j(\boldsymbol{x}_1) n_i n_j
\end{equation}
$$

结合这两种情况, 最一般的 $$G_2(\boldsymbol{x}_1, \boldsymbol{x}_2)$$ 写成:

$$
\begin{equation}
G_2(\boldsymbol{x}_1, \boldsymbol{x}_2) = \sum_{i,j} \left[ \|u_i(\boldsymbol{x}_1)\|^2 \|u_j(\boldsymbol{x}_2)\|^2 + \eta u_i^*(\boldsymbol{x}_1) u_j^*(\boldsymbol{x}_2) u_i(\boldsymbol{x}_2) u_j(\boldsymbol{x}_1) \right] n_i n_j + \eta \sum_{i} \|u_i(\boldsymbol{x}_1)\|^2 \|u_i(\boldsymbol{x}_2)\|^2 n_i (n_i - 1) 
\end{equation}
$$

就是直接项+交换项的写法.

---
## 场算符

我们之前说, 只要找到一组完备正交的本征基就可以用来展开算符.
如果我们选择位置表象下的完备正交基 $$\{ \ket{\boldsymbol{x}} \}$$, 那么我们就可以定义场算符.
在这种情况下, 一个任意态的波函数可以写成:

$$
\begin{equation}
u_i(\boldsymbol{x}) = \braket{\boldsymbol{x}}{u_i}
\end{equation}
$$

考虑我们之前换基公式:

$$
\begin{equation}
\hat{a}_{v_j} = \sum_i \braket{v_j}{u_i} \hat{a}_{u_i}
\end{equation}
$$

我们先不考虑自旋算符, 那么我们可以把 $$\ket{v_j}$$ 取成位置表象下的态 $$\ket{\boldsymbol{x}}$$, 那么我们有:

$$
\begin{equation}
\hat{\Psi}(\boldsymbol{x}) = \sum_i \braket{\boldsymbol{x}}{u_i} \hat{a}_{u_i} = \sum_i u_i(\boldsymbol{x}) \hat{a}_{u_i}
\end{equation}
$$

这个场算符的意义就是在$$\boldsymbol{x}$$位置湮灭一个粒子.
我们可以立刻检查这个场算符不依赖于基的选择:

$$
\begin{equation}
\hat{\Psi}(\boldsymbol{x}) = \sum_i \sum_j \braket{\boldsymbol{x}}{v_j} \braket{v_j}{u_i} \hat{a}_{u_i} = \sum_j \braket{\boldsymbol{x}}{v_j} \hat{a}_{v_j}
\end{equation}
$$

这就是:

$$
\begin{equation}
\hat{\Psi}(\boldsymbol{x}) = \sum_j v_j(\boldsymbol{x}) \hat{a}_{v_j}
\end{equation}
$$

没什么差别.
类似的, 我们也可以定义产生场算符:

$$
\begin{equation}
\hat{\Psi}^\dagger(\boldsymbol{x}) = \sum_i u_i^*(\boldsymbol{x}) \hat{a}_{u_i}^\dagger
\end{equation}
$$

我们可以试试:

$$
\begin{equation}
\hat{\Psi}^\dagger(\boldsymbol{x}) \ket{0} = \sum_i u_i^*(\boldsymbol{x}) \hat{a}_{u_i}^\dagger \ket{0} = \sum_i u_i^*(\boldsymbol{x}) \ket{u_i}
\end{equation}
$$

还得再变一下形:

$$
\begin{equation}
\hat{\Psi}^\dagger(\boldsymbol{x}) \ket{0} = \sum_i \braket{u_i}{\boldsymbol{x}} \ket{u_i} = \ket{\boldsymbol{x}}
\end{equation}
$$

反着来也可以!

$$
\begin{equation}
\int u_i^*(\boldsymbol{x}) \hat{\Psi}(\boldsymbol{x}) \dd[3]x = \sum_j \int u_i^*(\boldsymbol{x}) u_j(\boldsymbol{x}) \hat{a}_{u_j} \dd[3]x = \sum_j \delta_{ij} \hat{a}_{u_j} = \hat{a}_{u_i}
\end{equation}
$$

$$
\begin{equation}
\int u_i(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{x}) \dd[3]x = \sum_j \int u_i(\boldsymbol{x}) u_j^*(\boldsymbol{x}) \hat{a}_{u_j} \dd[3]x = \sum_j \delta_{ij} \hat{a}_{u_j} = \hat{a}_{u_i}^\dagger
\end{equation}
$$

现在我们可以带上spin了, 没有什么特别复杂的, 最多就是带上自旋指标, 所以基就是:

$$
\begin{equation}
\ket{\boldsymbol{x}, \nu}
\end{equation}
$$

如果$$\nu$$表示自旋分量, 那么$$$\nu = -s, -s+1, \cdots, s$$, 一共有 $$2s+1$$ 个取值, 所以我们求和就得多带一个自旋指标:

$$
\begin{equation}
\ket{u_i} = \sum_{\nu=-S}^{S} \int u_i(\boldsymbol{x}, \nu) \ket{\boldsymbol{x}, \nu} \dd[3]x
\end{equation}
$$

其中:

$$
\begin{equation}
u_i(\boldsymbol{x}, \nu) = \braket{\boldsymbol{x}, \nu}{u_i}
\end{equation}
$$

在波函数表示上, 我们的自旋指标就是波函数的一个离散指标:

$$
\begin{equation}
u_{i,\nu}(\boldsymbol{x}) = \braket{\boldsymbol{x}, \nu}{u_i}
\end{equation}
$$

所以我们的场算符要改一下:

$$
\begin{equation}
\hat{\Psi}_{\nu}(\boldsymbol{x}) = \sum_i u_{i,\nu}(\boldsymbol{x}) \hat{a}_{u_i}
\end{equation}
$$
$$
\begin{equation}
\hat{\Psi}_{\nu}^\dagger(\boldsymbol{x}) = \sum_i u_{i,\nu}^*(\boldsymbol{x}) \hat{a}_{u_i}^\dagger
\end{equation}
$$

试一下:

$$
\begin{equation}
\hat{\Psi}_{\nu}^\dagger(\boldsymbol{x}) \ket{0} = \sum_i \braket{u_i}{\boldsymbol{x}, \nu} \ket{u_i} = \ket{\boldsymbol{x}, \nu}
\end{equation}
$$

没问题!
这个还是可以反过来:

$$
\begin{equation}
\hat{a}_{u_i}^\dagger = \sum_{\nu=-S}^{S} \int u_{i,\nu}(\boldsymbol{x}) \hat{\Psi}_{\nu}^\dagger(\boldsymbol{x}) \dd[3]x
\end{equation}
$$

---
## 对易关系:

我们现在来计算场算符的对易关系, 肯定还是要满足玻色子和费米子的对易关系的.
但是我们要主要到, 我们现在是对两点的位置进行对易了:

$$
\begin{equation}
\hat{\Psi}(\boldsymbol{x}) = \sum_i u_i(\boldsymbol{x}) \hat{a}_{u_i} \quad
\hat{\Psi}^\dagger(\boldsymbol{x}') = \sum_j u_j^*(\boldsymbol{x}') \hat{a}_{u_j}^\dagger
\end{equation}
$$

所以我们有:

$$
\begin{equation}
\left[ \hat{\Psi}(\boldsymbol{x}), \hat{\Psi}^\dagger(\boldsymbol{x}') \right]_{\pm} = \sum_{i,j} u_i(\boldsymbol{x}) u_j^*(\boldsymbol{x}') \left[ \hat{a}_{u_i}, \hat{a}_{u_j}^\dagger \right]_{\pm}
\end{equation}
$$

根据产生湮灭算符的对易关系, 我们有:

$$
\begin{equation}
\left[ \hat{a}_{u_i}, \hat{a}_{u_j}^\dagger \right]_{\pm} = 0
\end{equation}
$$

所以我们有:

$$
\begin{equation}
\left[ \hat{\Psi}(\boldsymbol{x}), \hat{\Psi}^\dagger(\boldsymbol{x}') \right]_{\pm} = 0
\end{equation}
$$

我们可以计算:

$$
\begin{equation}
\left[ \hat{\Psi}(\boldsymbol{x}), \hat{\Psi}(\boldsymbol{x}') \right]_{\pm} = \sum_{i,j} u_i(\boldsymbol{x}) u_j(\boldsymbol{x}') \left[ \hat{a}_{u_i}, \hat{a}_{u_j} \right]_{\pm} = 0
\end{equation}
$$

现在试试:

$$
\begin{equation}
\left[ \hat{\Psi}^\dagger(\boldsymbol{x}), \hat{\Psi}^\dagger(\boldsymbol{x}') \right]_{\pm} = \sum_{i,j} u_i^*(\boldsymbol{x}) u_j^*(\boldsymbol{x}') \left[ \hat{a}_{u_i}^\dagger, \hat{a}_{u_j}^\dagger \right]_{\pm}
\end{equation}
$$

我们有:

$$
\begin{equation}
\left[ \hat{a}_{u_i}^\dagger, \hat{a}_{u_j}^\dagger \right]_{\pm} = \delta_{i,j}
\end{equation}
$$

从而:

$$
\begin{equation}
\left[ \hat{\Psi}^\dagger(\boldsymbol{x}), \hat{\Psi}^\dagger(\boldsymbol{x}') \right]_{\pm} = \sum_{i} u_i(\boldsymbol{x}) u_i^*(\boldsymbol{x}') = \delta(\boldsymbol{x} - \boldsymbol{x}')
\end{equation}
$$

符合我们的直觉!
我们当然也可以带上自旋指标:

$$
\begin{equation}
\left[ \hat{\Psi}_{\nu}(\boldsymbol{x}), \hat{\Psi}_{\nu'}^\dagger(\boldsymbol{x}') \right]_{\pm} = \delta(\boldsymbol{x} - \boldsymbol{x}') \delta_{\nu, \nu'}
\end{equation}
$$

$$
\begin{equation}
\left[ \hat{\Psi}_{\nu}(\boldsymbol{x}), \hat{\Psi}_{\nu'}(\boldsymbol{x}') \right]_{\pm} = 0
\end{equation}
$$