---
title: "QM2 密度矩阵4"
date: 2025-10-05 
categories:
  - QM2
---

在过往的学习中, 我们不加以怀疑的接受了如下概念:

1. 每一次测量, 都得到了力学算符的一个数值, 力学算符本身由一个Hemritian算符表示.
2. 测量后系统的状态坍缩到力学算符的一个本征态上, 测量结果就是这个本征态对应的本征值.
3. 测量力学量的时候吗量子态会瞬间坍缩到本征态上.

但是, 我们对于理解测量仪器本身的工作原理, 以及测量过程中的量子力学描述, 仍然是模糊的.
这些问题仍然是开放性的, 没有一个准确的回答.

在Copenhagen诠释中, 测量过程是经典的, 经典测量仪器与量子系统相互作用, 使得量子系统坍缩到某个本征态上.
这就是说, 测量仪器本身是经典的, 历史上称之为Heisenberg cut.
但是, 量子力学应该是普适的, 是可以在所有尺度上都能应用的, 因此这种切口是不应该存在的.
我们应该很确信的就是, 经典物理是量子物理的极限情况, 经典物理是量子物理在大尺度下的近似.

在Copenhagen诠释中, 测量实际上是对于信号的方法, 以及不可逆的记录.
一开始, 量子态本身可以是分布在空间上的波函数, 而一旦测量了, 这个波函数就坍缩到某个位置上, 并且被不可逆的记录下来.
也就是说, 坍缩是在探测器读出结果时候发生的.
在探测之前, 系统还是处于叠加态, 满足Unitary evolution.

---
## 预测量问题

我们现在考虑量子力学是适用于一切迟钝的理论.
那么测量过程就是一个量子系统$$S$$与测量仪器$$A$$的相互作用.
为了表示一个完全量子化的测量过程, 我们考虑仪器具有指针态(pointer state)$$\ket{a_i}$$, 这些指针态是正交归一的.

假设系统$$S$$有一个待测算符$$\mathcal{O}_S$$, 其本征态为$$\ket{s_i}$$, 本征值为$$s_i$$:

$$
\begin{equation}
\mathcal{O}_S \ket{s_i} = s_i \ket{s_i}
\end{equation}
$$

测量装置$$A$$也有一个待测算符$$\mathcal{O}_A$$, 其本征态为$$\ket{a_j}$$, 本征值为$$a_j$$:

$$
\begin{equation}
\mathcal{O}_A \ket{a_j} = a_j \ket{a_j}
\end{equation}
$$

这些$$\ket{a_j}$$是测量仪器的指针态, 我们希望建立一个对应关系:

$$
\begin{equation}
\ket{s_i} \leftrightarrow \ket{a_i}
\end{equation}
$$

也就是说, 如果系统$$S$$处于本征态$$\ket{s_i}$$, 那么测量仪器$$A$$的指针态应该是$$\ket{a_i}$$.
所以装置$$A$$的指针态$$\ket{a_i}$$要至少比系统$$S$$的本征态$$\ket{s_i}$$多.

假设在$$t=0$$时刻, 系统$$S$$处于叠加态:

$$
\begin{equation}
\ket{\psi;0}_S = \sum_i c_i \ket{s_i}
\end{equation}
$$

装置处于一个确定的初始状态$$\ket{\varphi;0}_A$$, 那么整个系统的初始态是:

$$
\begin{equation}
\ket{\Psi;0}_{SA} = \ket{\psi;0}_S \otimes \ket{\varphi;0}_A = \sum_i c_i \ket{s_i} \otimes \ket{\varphi;0}_A
\end{equation}
$$

我们此时把指针想象成一个抽象的位移(不是真实位置上的移动), 所以提取指针的位置就是一个抽象的位置算符$$Q$$, 自然而然的, 你想生成平移, 就得考虑一个平移$$Q$$的共轭动量$$P$$:

$$
\begin{equation}
[Q,P] = \mathrm{i}\hbar \quad
\mathrm{e}^{-\mathrm{i} \alpha P/\hbar} \ket{a_0} = \ket{a_0 + \alpha}
\end{equation}
$$

从我们的系统-装置耦合Hamiltonian可以写成:

$$
\begin{equation}
H_{int} = g(t) \mathcal{O}_S \otimes P_A
\end{equation}
$$


其中$$g(t)$$是一个在测量时间$$\tau$$内非零的函数, 满足:

$$
\begin{equation}
\int_0^\tau g(t) \, \mathrm{d}t = \kappa
\end{equation}
$$

从而我们可以写出时间演化算符:

$$
\begin{equation}
U(\tau) = \exp\left(-\frac{\mathrm{i}}{\hbar} \int_0^\tau H_{int}(t) \, \mathrm{d}t\right) = \exp\left(-\frac{\mathrm{i}}{\hbar} \kappa \mathcal{O}_S \otimes P_A\right)
\end{equation}
$$

如果系统处于本征态$$\ket{s_i}$$, 那么经过时间$$\tau$$的演化, 我们有:

$$
\begin{equation}
U(\tau) \ket{s_i} \otimes \ket{a_0} = \ket{s_i} \otimes \mathrm{e}^{-\mathrm{i} \kappa s_i P_A/\hbar} \ket{a_0} = \ket{s_i} \otimes \ket{a_0 + \kappa s_i}
\end{equation}
$$

也就是说, 本征值$$s_i$$决定了指针态的平移距离$$\kappa s_i$$.

我们定义:

$$
\begin{equation}
\exp\left(-\frac{\mathrm{i}}{\hbar} \kappa s_i P_A\right) \ket{a_0} = \mathrm{e}^{-\mathrm{i} \phi_i} \ket{a_i}
\end{equation}
$$

系统的状态现在是:

$$
\begin{equation}
\ket{\Psi;\tau}_{SA} = \sum_i c_i \mathrm{e}^{-\mathrm{i} \phi_i} \ket{s_i} \otimes \ket{a_i}
\end{equation}
$$

系统和装置就建立了所需的纠缠: 每个系统本征态对应一个装置的指针态.
但是, 这个时候我们并没有得到一个测量结果, 因为系统和装置仍然是纠缠态.
这就是早期von Neumann测量理论:

1. 测量装置本身就是一个量子系统.
2. 测量过程是系统与测量装置的相互作用, 使得系统与装置建立纠缠.
3. 测量结果是装置的指针态.

但是, 总态仍是一个量子叠加态, 并没有解释为什么会塌缩到某个确定结果.
我们可以理解预测量的机制, 却依然没有解决塌缩之谜.

例子: 假设系统$$S$$是一个自旋1/2粒子, 测量$$\sigma_z$$.
测量装置也是双能级态, 耦合Hamiltonian是:

$$
\begin{equation}
H_{SA} = \frac{1}{2} \hbar \omega (1 + \sigma_z^S) \otimes \sigma_x^A
\end{equation}
$$

假设系统的初始状态为:

$$
\begin{equation}
c_+ \ket{+}_S \otimes \ket{-}_A + c_- \ket{-}_S \otimes \ket{-}_A
\end{equation}
$$

我们做一点点代数变形:

$$
\begin{equation}
\frac{c_+}{\sqrt{2}} \ket{+}_S \otimes (\ket{x;+}_A - \ket{x;-}_A) + c_- \ket{-}_S \otimes \ket{-}_A
\end{equation}
$$

我们的时间演化算符是:

$$
\begin{equation}
U(t) = \exp\left(-\frac{\mathrm{i}}{\hbar} H_{SA} t\right) = \exp\left(-\frac{\mathrm{i}}{2} \omega t (1 + \sigma_z^S) \otimes \sigma_x^A\right)
\end{equation}
$$

注意到:

$$
\begin{equation}
U(t) \ket{-}_S \otimes \ket{-}_A = \ket{-}_S \otimes \ket{-}_A
\end{equation}
$$

以及:

$$
\begin{equation}
U(t) \ket{+}_S \otimes \ket{x;\pm}_A = \mathrm{e}^{\mp \mathrm{i} \omega t} \ket{+}_S \otimes \ket{x;\pm}_A
\end{equation}
$$

从而我们可以计算出:

$$
\begin{equation}
\ket{\Psi(t)} = \frac{c_+}{\sqrt{2}} \ket{+}_S \otimes (\mathrm{e}^{-\mathrm{i} \omega t} \ket{x;+}_A - \mathrm{e}^{\mathrm{i} \omega t} \ket{x;-}_A) + c_- \ket{-}_S \otimes \ket{-}_A
\end{equation}
$$

如果我们规定$$\omega t = \pi/2$$, 那么我们有:

$$
\begin{equation}
\ket{\Psi(\pi/2\omega)} = -\mathrm{i}\,c_+ \ket{+}_S \otimes \ket{+}_A + c_- \ket{-}_S \otimes \ket{-}_A
\end{equation}
$$

系统和装置的观测量正确地关联在一起了!


---
## 退相干

如果严格坚持量子力学的幺正演化, 态向量永远是叠加态, 不可能自己坍缩.
但是实验上我们只看到确定结果, 没有实验上测量到的半死不活的猫.
退相干的理论提出: 坍缩不是基本假设, 而是由于系统与环境的相互作用, 使得系统的相干性丧失, 从而表现出经典行为.

我们之前得到了预测量态:

$$
\begin{equation}
\sum_i c_i \ket{s_i} \otimes \ket{a_i}
\end{equation}
$$

但是在现实中, 测量装置不可能是孤立的, 它总是与环境相互作用!
所以我们应该把环境$$E$$也考虑进来, 于是总态是:

$$
\begin{equation}
\ket{\Psi}_{SAE} = \sum_i c_i \ket{s_i} \otimes \ket{a_i} \otimes \ket{\mathcal{E}_i}
\end{equation}
$$

我们要想扔掉环境, 就得计算系统-装置的约化密度矩阵:

$$
\begin{equation}
\rho_{SA} = \tr_E \ketbra{\Psi}{\Psi}_{SAE} = \sum_{ij} c_i c_j^* \ketbra{s_i}{s_j} \otimes \ketbra{a_i}{a_j} \braket{\mathcal{E}_j | \mathcal{E}_i}
\end{equation}
$$

如果环境状态对不同结果几乎正交(但是这个真的能行吗? 也不好说):

$$
\begin{equation}
\braket{\mathcal{E}_j}{\mathcal{E}_i} \approx \delta_{ij}
\end{equation}
$$

那么交叉项, 非对角元就会消失, 剩下的就是一个经典混合:

$$
\begin{equation}
\rho_{SA} \approx \sum_i |c_i|^2 \ketbra{s_i}{s_i} \otimes \ketbra{a_i}{a_i}
\end{equation}
$$

比如Schrodinger猫的例子, 理想的情况下, 确实是:

$$
\begin{equation}
\ket{\psi} = \frac{1}{\sqrt{2}} (\ket{\mathrm{alive}} + \ket{\mathrm{dead}})
\end{equation}
$$

但是猫必然和环境纠缠, 活的猫在呼吸, 死的猫在散射:

$$
\begin{equation}
\ket{\Psi} = \frac{1}{\sqrt{2}} (\ket{\mathrm{alive}} \otimes \ket{\mathcal{E}_{\mathrm{alive}}} + \ket{\mathrm{dead}} \otimes \ket{\mathcal{E}_{\mathrm{dead}}}) 
\end{equation}
$$

对环境取偏迹:

$$
\begin{equation}
\rho = \frac{1}{2} (\ketbra{\mathrm{alive}}{\mathrm{alive}} + \ketbra{\mathrm{dead}}{\mathrm{dead}})
\end{equation}
$$

退相干解释了为什么我们看不到大尺度量子叠加态.
但是它没有从根本上推出单次实验为什么会得到某个确定结果, 测量问题并没有被完全解决, 就是被打太极了.
虽然这并不完全解决塌缩问题, 但给出了为什么我们从不看到猫既死又活的机制.

---
## 多世界说法

如果我们干脆直接放弃坍缩这个概念呢?
我们就得到了多世界诠释(Many-World Interpretation, MWI).
在MWI中, 测量过程仍然是幺正的, 只是我们把测量结果看作是不同的分支.
每一个分支对应一个测量结果, 我们所处的世界只是其中的一个分支.
MWI认为所有的分支都是同等真实存在的, 只是我们只能感知到其中的一个.
MWI避免了坍缩的悖论, 但是引入了无数的平行宇宙, 这些宇宙之间没有相互作用, 也无法观测到彼此.

假设Alice有一个自旋1/2粒子, 处于叠加态:

$$
\begin{equation}
\ket{\psi} = c_+ \ket{+} + c_- \ket{-} \quad
|c_+|^2 + |c_-|^2 = 1
\end{equation}
$$

Alice现在沿着$$z$$方向测量自旋, 按照传统的Copenhagen诠释, 态会坍缩到$$\ket{+}$$或者$$\ket{-}$$, 概率分别是$$|c_+|^2$$和$$|c_-|^2$$.
那在多世界诠释中, 我们必须要把Alice也量子化, 纳入到波函数之中:

$$
\begin{equation}
\ket{\Psi} = (c_+ \ket{+} + c_- \ket{-}) \otimes \ket{\mathrm{Alice;ready}}
\end{equation}
$$

测量之后, 我们没有什么坍缩, 而是得到了一个纠缠态:

$$
\begin{equation}
\ket{\Psi} = c_+ \ket{+} \otimes \ket{\mathrm{Alice;up}} + c_- \ket{-} \otimes \ket{\mathrm{Alice;down}}
\end{equation}
$$

这正是我们在测量分析里见到的那种纠缠, 只是此处 Alice 的状态扮演了仪器的角色.
在这个宇宙里, 包括Alice在内的所有东西都处于叠加态, 分成了两个分支(或者世界).

在其中一个分支里, Alice 看到自旋向上, 她会说: "我看到自旋向上了!"
在另一个分支里, Alice 看到自旋向下, 她会说: "我看到自旋向下了!"
这两个分支互不干扰, 同样真实, 但是无法交流.
随着每个Alice不断做测量, 宇宙会不断分裂成更多的分支, 产生越来越多的Alice.
因为经历不同, 这些Alice会有不同的记忆, 但每个Alice都觉得自己是唯一的, 这是MWI的核心思想.

但是这个问题又来了, 在多世界诠释中, 概率是啥意思呢?
既然每种可能都在某个世界实现了, 那么概率到底是什么?
分支到底有多真实? 是否本体过多?谁是真实的世界?

有待考察...