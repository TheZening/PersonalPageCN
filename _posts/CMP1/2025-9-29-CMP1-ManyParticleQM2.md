---
title: "CMP1 全同粒子的再表述2"
date: 2025-09-12
categories:
  - CMP1
---

之前我们明确了两个个描述多粒子系统(粒子数可以变化的系统)的基本观点:

1. Fock空间:

$$
\begin{equation}
\mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}^A_N \quad \text{或} \quad \mathcal{F} = \bigoplus_{N=0}^{\infty} \mathcal{H}^S_N
\end{equation}
$$

2. 对称基和布居数转换:
对于玻色子系统，任意态可以表示为布居数基的线性组合:

$$
\begin{equation}
\ket{n_1, n_2, \ldots, n_i, \ldots } = \frac{1}{\sqrt{N! \prod_i n_i!}} \sum_P \ket{k_{P_1}, k_{P_2}, \ldots, k_{P_N} }
\end{equation}
$$

对于费米子系统，任意态可以表示为反对称基的线性组合:
$$
\begin{equation}
\ket{n_1, n_2, \ldots, n_i, \ldots } = \frac{1}{\sqrt{N!}} \sum_P \text{sgn}(P) \ket{k_{P_1}, k_{P_2}, \ldots, k_{P_N} }
\end{equation}
$$

其中:

$$
\begin{equation}
N = \sum_i n_i
\end{equation}
$$

$$n_i$$ 是第 $$i$$ 个单粒子态的粒子数, 每一个单粒子态, 又被称为一个“模式(mode)”.
在这里, 我们将继续深入探讨这些观点, 并引入创建和湮灭算符的概念, 以便更方便地描述和操作多粒子系统.

---
## Boson系统

现在我们的Fock空间很大了, 可以随便放粒子进去, 也可以随便拿粒子出来.
我们先来定义一个操作, 它可以在某个模式 $$i$$ 上增加一个粒子:

> (Bosonic creation operator): $$\hat{a}_i^\dagger$$ 的作用是将模式 $$i$$ 上的粒子数增加1:
> $$
> \begin{equation}
> \hat{a}_i^\dagger \ket{n_1, n_2, \ldots, n_i, \ldots } = \sqrt{n_i + 1} \ket{n_1, n_2, \ldots, n_i + 1, \ldots }
> \end{equation}
> $$

这里的 $$\sqrt{n_i + 1}$$ 是一个归一化因子, 确保新态仍然是归一化的.
实际上, 我们可以把算符理解为一个线性映射:

$$
\begin{equation}
\hat{a}_i^\dagger: \mathcal{H}^S_N \to \mathcal{H}^S_{N+1}
\end{equation}
$$

通过这套语言, 我们发现:

$$
\begin{equation}
\ket{n_1, n_2, \ldots, n_i, \ldots } = \frac{1}{\sqrt{n_1! n_2! \ldots n_i! \ldots}} (\hat{a}_1^\dagger)^{n_1} (\hat{a}_2^\dagger)^{n_2} \ldots (\hat{a}_i^\dagger)^{n_i} \ldots \ket{0,0,0,\ldots}
\end{equation}
$$

其中 $$\ket{0,0,0,\ldots}$$ 是真空态, 即没有粒子的态.
因此, 通过反复作用创建算符在真空态上, 我们可以构造出任意的玻色子多粒子态.
我们当然也可以计算内积:

$$
\begin{equation}
\mel{n_1, n_2, \ldots, n_i+1, \ldots}{\hat{a}_i^\dagger}{n_1, n_2, \ldots, n_i, \ldots} = \sqrt{n_i + 1}
\end{equation}
$$

接下来, 我们定义另一个操作, 它可以在某个模式 $$i$$ 上减少一个粒子:

> (Bosonic annihilation operator): $$\hat{a}_i$$ 的作用是将模式 $$i$$ 上的粒子数减少1:
> $$
> \begin{equation}
> \hat{a}_i \ket{n_1, n_2, \ldots, n_i, \ldots } = \sqrt{n_i} \ket{n_1, n_2, \ldots, n_i - 1, \ldots }
> \end{equation}
> $$

同样地, $$\sqrt{n_i}$$ 是一个归一化因子.
这个算符也是一个线性映射:

$$
\begin{equation}
\hat{a}_i: \mathcal{H}^S_N \to \mathcal{H}^S_{N-1}
\end{equation}
$$

现在我们要注意到, 如果模式 $$i$$ 上的粒子数 $$n_i = 0$$, 那么湮灭算符的作用结果是零态:

$$
\begin{equation}
\hat{a}_i \ket{n_1, n_2, \ldots, 0, \ldots } = 0
\end{equation}
$$

从而我们可以进行如下的计算:

$$
\begin{equation}
\hat{a}_i \hat{a}_i^\dagger \ket{n_1, n_2, \ldots, n_i, \ldots } = (n_i + 1) \ket{n_1, n_2, \ldots, n_i, \ldots }
\end{equation}
$$

$$
\begin{equation}
\hat{a}_i^\dagger \hat{a}_i \ket{n_1, n_2, \ldots, n_i, \ldots } = n_i \ket{n_1, n_2, \ldots, n_i, \ldots }
\end{equation}
$$

从而我们有:

$$
\begin{equation}
[\hat{a}_i, \hat{a}_i^\dagger] = \hat{a}_i \hat{a}_i^\dagger - \hat{a}_i^\dagger \hat{a}_i = 1
\end{equation}
$$

如果 $$i \neq j$$, 那么创建和湮灭算符是对易的, 因为它们作用在不同的模式上, 不会相互影响:

$$
\begin{equation}
[\hat{a}_i, \hat{a}_j^\dagger] = 0 \quad \text{for } i \neq j
\end{equation}
$$

同样的, 我们可以把算符叠起来, 计算:

$$
\begin{equation}
\mel{n_1, n_2, \ldots, n_i-1, \ldots}{\hat{a}^\dagger_i \hat{a}_i}{n_1, n_2, \ldots, n_i, \ldots} = n_i
\end{equation}
$$

这样就是我们在模式 $$i$$ 上的粒子数算符, 从而我们可以定义计数算符:

> (Number operator): 模式 $$i$$ 上的粒子数算符定义为:
> $$
> \begin{equation}
> \hat{N}_i = \hat{a}_i^\dagger \hat{a}_i
> \end{equation}
> $$

这个算符的本征值就是模式 $$i$$ 上的粒子数 $$n_i$$.
从而我们可以计算如下的对易关系:

$$
\begin{equation}
[\hat{N}_i, \hat{a}_i^\dagger] = \hat{a}_i^\dagger \hat{a}_i \hat{a}_i^\dagger - \hat{a}_i^\dagger \hat{N}_i = \hat{a}_i^\dagger
\end{equation}
$$
$$
\begin{equation}
[\hat{N}_i, \hat{a}_i] = \hat{a}_i^\dagger \hat{a}_i \hat{a}_i - \hat{a}_i \hat{N}_i = -\hat{a}_i
\end{equation}
$$

把这些对易关系总结在一起:

1. $$[\hat{a}_i, \hat{a}_j^\dagger] = \delta_{ij}$$
2. $$[\hat{a}_i, \hat{a}_j] = 0$$
3. $$[\hat{a}_i^\dagger, \hat{a}_j^\dagger] = 0$$
4. $$[\hat{N}_i, \hat{a}_j^\dagger] = -\delta_{ij} \hat{a}_j^\dagger$$
5. $$[\hat{N}_i, \hat{a}_j] = \delta_{ij} \hat{a}_j$$

这就是Canonical commutation relations, (CCR)代数规则, 或者叫$$C^*-algebra$$.

---
## Fermion系统

对于费米子系统, 我们也可以定义类似的创建和湮灭算符, 但由于泡利不相容原理的存在, 这些算符满足不同的代数关系.
而且我们要注意到一个问题, 由于费米子每个模式上最多只能有一个粒子, 因此布居数 $$n_i$$ 只能取值0或1.
而且还有一个最重要的区别, 费米子的态交换会引入负号, 所以我们的创建和湮灭算符必须遵守一定的顺序规则, 否则会导致符号错误.

我们稍微退一步, 从对称基开开始.
如果我们考虑两个粒子三能级系统, 那么反对称基有:

$$
\begin{equation}
\ket{AB} = \frac{1}{\sqrt{2}} (\ket{A}\ket{B} - \ket{B}\ket{A}) = \ket{1,1,0}
\end{equation}
$$
$$
\begin{equation}
\ket{AC} = \frac{1}{\sqrt{2}} (\ket{A}\ket{C} - \ket{C}\ket{A}) = \ket{1,0,1}
\end{equation}
$$
$$
\begin{equation}
\ket{BC} = \frac{1}{\sqrt{2}} (\ket{B}\ket{C} - \ket{C}\ket{B}) = \ket{0,1,1}
\end{equation}
$$

从而这个两粒子体系的Fock空间的基是:

$$
\begin{equation}
\{ \ket{0,0,0}, \ket{1,0,0}, \ket{0,1,0}, \ket{0,0,1}, \ket{1,1,0}, \ket{1,0,1}, \ket{0,1,1} \}
\end{equation}
$$

现在我们从真空上一点一点把粒子加进去.

1. 在模式 $$A$$ 上加一个粒子 $$ \hat{c}_A^\dagger \ket{0,0,0} = \ket{1,0,0} $$.
2. 在模式 $$B$$ 上加一个粒子 $$ \hat{c}_B^\dagger \ket{0,0,0} = \ket{0,1,0} $$.
3. 在模式 $$C$$ 上加一个粒子 $$ \hat{c}_C^\dagger \ket{0,0,0} = \ket{0,0,1} $$.

现在所有的单粒子态都构造出来了.
接下来我们要构造两粒子态.
我们可以先在模式 $$A$$ 上加一个粒子, 然后在模式 $$B$$ 上加一个粒子:

$$
\begin{equation}
\hat{c}_B^\dagger \hat{c}_A^\dagger \ket{0,0,0} = \hat{c}_B^\dagger \ket{1,0,0}
\end{equation}
$$

退一步, 我们对单粒子态 $$\ket{A}$$ 上创建一个新的粒子在 $$\ket{B}$$ 态上, 就是$$\ket{BA}$$, 但是由于反对称性, 我们有:

$$
\begin{equation}
\ket{BA} = -\ket{AB}
\end{equation}
$$

所以, 如果我们要创建一个$$j>i$$的态, 我们有:

$$
\begin{equation}
\hat{c}_j^\dagger \hat{c}_i^\dagger \ket{0,0,0} = \hat{c}_j^\dagger \ket{1,0,0} = -\ket{1,1,0}
\end{equation}
$$

同理, 如果我们先在模式 $$j$$ 上加一个粒子, 然后在模式 $$i$$ 上加一个粒子, 我们有:

$$
\begin{equation}
\hat{c}_i^\dagger \hat{c}_j^\dagger \ket{0,0,0} = \hat{c}_i^\dagger \ket{0,1,0} = \ket{1,1,0}
\end{equation}
$$

这一套规则总结为如下:

> (费米子规则): 献给所有模式排一个固定顺序, 以后一切以这个为准.
> 一般的布居数态可以表示为:
> $$
> \begin{equation}
> \ket{n_1, n_2, \ldots, n_i, \ldots } = (\hat{c}_1^\dagger)^{n_1} (\hat{c}_2^\dagger)^{n_2} \ldots (\hat{c}_i^\dagger)^{n_i} \ldots \ket{0,0,0,\ldots}
> \end{equation}
> $$
> 从最右到最左依次作用创建算符, 并且如果交换两个创建算符的位置, 会引入一个负号.
> 例如:
> $$
> \begin{equation}
> \hat{c}_j^\dagger \ket{n_1, n_2, \ldots, n_i, \ldots } = (1- n_j)(-1)^{\sum_{i<j} n_i} \ket{n_1, n_2, \ldots, n_j + 1, \ldots }
> \end{equation}
> $$
> 这里的 $$(-1)^{\sum_{i<j} n_i}$$ 是为了计算在模式 $$j$$ 之前有多少个粒子, 从而确定交换顺序时引入的负号.
> $$
> \begin{equation}
> \hat{c}_j \ket{n_1, n_2, \ldots, n_i, \ldots } = n_j (-1)^{\sum_{i<j} n_i} \ket{n_1, n_2, \ldots, n_j - 1, \ldots }
> \end{equation}
> $$

根据这些规则, 我们可以推导出费米子创建和湮灭算符的反对易关系:

$$
\begin{equation}
\{ \hat{c}_i, \hat{c}_j^\dagger \} = \hat{c}_i \hat{c}_j^\dagger + \hat{c}_j^\dagger \hat{c}_i = \delta_{ij}
\end{equation}
$$
$$
\begin{equation}
\{ \hat{c}_i, \hat{c}_j \} = 0
\end{equation}
$$
$$
\begin{equation}
\{ \hat{c}_i^\dagger, \hat{c}_j^\dagger \} = 0
\end{equation}
$$

同样地, 我们可以定义费米子的计数算符:

$$
\begin{equation}
\hat{N}_i = \hat{c}_i^\dagger \hat{c}_i
\end{equation}
$$

这个算符的本征值也是模式 $$i$$ 上的粒子数 $$n_i$$, 但由于费米子的特殊性, $$n_i$$ 只能是0或1.
我们也可以计算如下的反对易关系:

$$
\begin{equation}
\{ \hat{N}_i, \hat{c}_j^\dagger \} = \hat{N}_i \hat{c}_j^\dagger + \hat{c}_j^\dagger \hat{N}_i = \delta_{ij} \hat{c}_j^\dagger
\end{equation}
$$
$$
\begin{equation}
\{ \hat{N}_i, \hat{c}_j \} = \hat{N}_i \hat{c}_j + \hat{c}_j \hat{N}_i = -\delta_{ij} \hat{c}_j
\end{equation}
$$

有了这些工具, 我们就可以方便地描述和操作多费米子系统了.