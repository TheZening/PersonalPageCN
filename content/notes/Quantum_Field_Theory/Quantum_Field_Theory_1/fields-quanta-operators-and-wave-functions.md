---
title: "场, 量子, 算符, 和波函数"
date: 2026-08-15
weight: 1
---
如果只记一句话, 可以先记住这一句.
量子场论不是把粒子想象成许多漂浮在空间中的小球, 而是用分布在空间中的量子自由度描述自然, 并把粒子理解为这些自由度的某些可辨认激发.
但是, 这句话中的"场", "量子", "自由度"和"激发"分别是什么意思, 仍然需要逐层拆开.


本节的目标不是立刻进行计算, 而是先把几个以后绝不能混用的对象分清楚.


---
## 先把四个对象分开

量子场论中最容易出现的概念错误, 是把下面四个对象都叫作"波"或"场".


| 对象 | 典型记号 | 它回答的问题 |
| --- | --- | --- |
| 经典场构型 | $\phi(x)$ | 每个时空点上的场值是什么 |
| 量子场算符 | $\hat{\phi}(x)$ | 在时空点 $x$ 对量子态进行什么操作 |
| 量子态 | $\ket{\Psi}$ | 整个系统被制备成了什么状态 |
| 波函数或波泛函 | $\psi(x)$ 或 $\Psi[\varphi]$ | 同一个量子态在某组基底下有哪些分量 |


这四者相互联系, 但不是同一个东西.
最重要的区别是, 场算符 $\hat{\phi}(x)$ 是算符, 而态 $\ket{\Psi}$ 是算符作用的对象.
波函数则是态在选定表象中的坐标, 正如三维向量不等于它在某组坐标轴下写出的三个分量.


因此, 问"量子场论的对象到底是什么"时, 不能只回答"场"或"粒子".
一个量子场论至少要给出态空间, 局域场算符, 它们的代数关系, 以及决定时间演化的 Hamiltonian 或作用量.
态描述系统, 算符联系制备与测量, 而粒子是某些态所呈现出来的结构.


---
## 什么是场

先完全忘掉量子力学.
经典场最简单的定义, 是一个把每个时空点映射到某个数学对象的映射.


$$
\phi: x \mapsto \phi(x).
$$


若 $\phi(x) \in \mathbb{R}$, 它是标量场.
若 $\vb{E}(x) \in \mathbb{R}^{3}$, 它是向量场.
更一般地, 场值还可以是复数, spinor, tensor, 或带有内部指标的对象.


例如, 房间中每一点都有温度 $T(t, \vb{x})$.
一根弦的每一点都有横向位移 $y(t, x)$.
空间中每一点都有电场 $\vb{E}(t, \vb{x})$ 和磁场 $\vb{B}(t, \vb{x})$.
这里的共同点不是它们都像某种液体, 而是描述系统需要在每个位置给出一个自由度.


一个粒子的经典位置只需要有限个坐标, 例如 $q^{i}(t)$.
一个场在每个 $\vb{x}$ 都有一个变量 $\phi(t, \vb{x})$, 因而具有连续无穷多个自由度.
这就是"场"首先体现的方向: 它是关于空间分布和局域变化的概念.


场不是一种必须依附在机械介质上的物质.
弦的位移场确实依附于弦, 但是电磁场并不需要以太.
说某个基本场"存在于整个空间", 更准确的意思是理论在每个时空区域都配置了相应的局域自由度, 而不是空间中灌满了一种看不见的流体.


在严格的量子场论中, $\hat{\phi}(x)$ 通常还是一种 operator-valued distribution.
真正定义良好的对象往往是用光滑函数 $f(x)$ 对它进行涂抹后得到的算符.


$$
\hat{\phi}(f) = \int \dd[4]{x}\, f(x) \hat{\phi}(x).
$$


因此, "一个点上的场算符"是非常有用的记号, 但有限区域中的局域操作才更接近严格数学和实际测量.


---
## 为什么普通量子力学还不够

常见说法是, 普通量子力学只能描述一个粒子, 而量子场论可以创造和湮灭粒子.
这句话抓住了部分现象, 但并不准确.
非相对论量子力学当然可以描述多个粒子, 甚至可以使用 Fock space 处理可变粒子数.


真正的压力来自量子理论, 局域性和狭义相对论需要同时成立.
当可用能量达到 $E \geq 2mc^{2}$ 时, 原来用于加速一个粒子的能量可以转化成新的粒子和反粒子.
这时"系统永远由固定数量的粒子组成"不再是可以坚持的前提.


同时, 相互作用应当是局域的.
在 $\vb{x}$ 处发生的事情应由该处的自由度决定, 而 spacelike separated 的操作不能用来超光速传递信息.
更准确地说, spacelike separated 的局域可观测量必须对易, bosonic fields 对易, 而 fermionic fields 反对易.
场恰好提供了按时空位置组织自由度的语言, 而这些 microcausality relations 编码了相对论性因果结构.


所以, 量子场论并不只是"更强的多粒子量子力学".
它改变了基本描述的出发点: 粒子数成为态的性质, 而不再是理论预先固定的背景条件.
相互作用可以把一个粒子数确定的态演化成不同粒子数的叠加态.


量子场论也不一定是相对论性的.
凝聚态物理和多体物理中经常使用非相对论量子场.
这说明场论语言本身处理的是分布式量子自由度, 而相对论性量子场论则进一步要求 Lorentz symmetry 和 relativistic causality.


---
## 量子到底体现在哪里

把变量戴上一顶帽子还不算完成量子化.
量子性的核心之一, 是原本的经典变量成为作用在 Hilbert space 上的非对易算符.


对一个经典实标量场, 先定义共轭动量场.


$$
\pi(t, \vb{x}) = \pdv{\mathcal{L}}{\dot{\phi}(t, \vb{x})}.
$$


正则量子化把 $\phi$ 和 $\pi$ 提升为算符, 并在等时刻要求.


$$
\comm{\hat{\phi}(t, \vb{x})}{\hat{\pi}(t, \vb{y})}
= i\hbar \delta^{(3)}\qty(\vb{x} - \vb{y}).
$$


同时有.


$$
\comm{\hat{\phi}(t, \vb{x})}{\hat{\phi}(t, \vb{y})}
= \comm{\hat{\pi}(t, \vb{x})}{\hat{\pi}(t, \vb{y})}
= 0.
$$


非对易意味着 $\hat{\phi}$ 和 $\hat{\pi}$ 不能被理解为同时具有任意精确经典数值的两个普通函数.
系统由量子态 $\ket{\Psi}$ 描述, 而测量结果及其统计分布由 $\ket{\Psi}$ 和相应算符共同决定.


量子性还体现在叠加, 纠缠和量子涨落中.
某个态可以同时包含不同粒子数的振幅, 也可以让相距很远的区域具有不能分解为独立概率的关联.
因此, "量子"不只是能量离散, 能量离散只是自由场模态中最直观的结果之一.


历史上把量子力学称为 first quantization, 把场的量子化称为 second quantization.
这个术语容易让人误以为量子场论是把某个已经量子化的波函数再量子化一次.
更清楚的说法是, 我们量子化的是经典场的自由度, 并由此得到能够容纳不同粒子数的量子理论.


---
## 为什么自由场会变成无穷多个振子

考虑最简单的自由实标量场, 并取自然单位 $\hbar = c = 1$.
它的 Lagrangian density 可以写成.


$$
\mathcal{L}
= \frac{1}{2} \partial_{\mu}\phi \partial^{\mu}\phi
{} - \frac{1}{2} m^{2}\phi^{2}.
$$


对应的方程是 Klein-Gordon equation.


$$
\qty(\partial_{\mu}\partial^{\mu} + m^{2}) \phi(x) = 0.
$$


把空间依赖作 Fourier decomposition.


$$
\phi(t, \vb{x})
= \int \frac{\dd[3]{k}}{(2\pi)^{3}}\,
q_{\vb{k}}(t) e^{i\vb{k}\cdot\vb{x}}.
$$


每个 momentum mode 都满足.


$$
\ddot{q}_{\vb{k}}(t)
{} + \omega_{\vb{k}}^{2} q_{\vb{k}}(t)
= 0,
\qquad
\omega_{\vb{k}} = \sqrt{\vb{k}^{2} + m^{2}}.
$$


这正是简谐振子的方程.
所以, "自由场等价于无穷多个简谐振子"不是因为我们在每个空间点偷偷放了一根小弹簧, 而是因为 Fourier transformation 把相互耦合的空间自由度分解成了彼此独立的 normal modes.
每个 $\vb{k}$ 标记一种整片空间共同参与的振动图样.


一根弦给出了最直观的类比.
弦上各点通过张力耦合, 但是改用 standing-wave modes 后, 每个 mode 的振幅都像一个独立振子.
量子化弦时, 被量子化的是每个 normal mode 的振幅, 而不是把弦切成许多互不相关的小粒子.


这个结论首先属于自由场.
有相互作用时, 不同 modes 会耦合, 简谐振子的图像只是在选取自由理论作为出发点后仍然有用.
对 fermionic field, modes 还服从 anticommutation relations, 每个单粒子 mode 的 occupation number 只能是 $0$ 或 $1$, 因而不能直接把它说成普通 bosonic harmonic oscillator.


---
## 什么是振动

在经典场论中, 振动是场构型随时间的周期变化.
对 Fourier mode 而言, 就是 $q_{\vb{k}}(t)$ 在其构型空间中按频率 $\omega_{\vb{k}}$ 演化.
弦的位移真的会上下变化, 电磁场的 $\vb{E}$ 和 $\vb{B}$ 会周期变化, 标量场的数值也可以周期变化.


量子化以后, 不能再默认每个 mode 都沿着一条确定的经典轨迹振动.
它有一个量子态, 以及一组随时间演化的 observables 和 correlation functions.
只有在某些态中, 特别是 coherent state 中, 场的 expectation value 才近似遵循清晰的经典波形.


因此, "粒子是场的振动"是一幅有用但必须加限定的图像.
它不是说一个粒子内部有某个小球在机械地来回摆动.
它说的是该场的某个 normal mode 处于量子激发态, 或者多个 modes 被组合成了一个可传播的量子态.


---
## 什么是一个量子

一个 quantum 是某个 mode 可以增加或减少的一个基本激发单位.
对频率为 $\omega_{\vb{k}}$ 的 bosonic mode, 相邻 number states 的能量差是.


$$
E_{n_{\vb{k}} + 1} - E_{n_{\vb{k}}}
= \hbar \omega_{\vb{k}}.
$$


产生和湮灭算符把这个结构写得最清楚.


$$
\hat{a}_{\vb{k}}^{\dagger}\ket{n_{\vb{k}}}
= \sqrt{n_{\vb{k}} + 1}\ket{n_{\vb{k}} + 1},
\qquad
\hat{a}_{\vb{k}}\ket{n_{\vb{k}}}
= \sqrt{n_{\vb{k}}}\ket{n_{\vb{k}} - 1}.
$$


它们满足.


$$
\comm{\hat{a}_{\vb{k}}}{\hat{a}_{\vb{q}}^{\dagger}}
= (2\pi)^{3}\delta^{(3)}\qty(\vb{k} - \vb{q}).
$$


这里的"一个"指 occupation number 增加 $1$, 不是指空间里出现了一个具有预设半径的小球.
量子的能量和 momentum 由 mode label 决定, 而位置分布则要通过多个 momentum modes 的叠加来形成.


真空 $\ket{0}$ 定义为 $\forall \vb{k}$ 都有 $\hat{a}_{\vb{k}}\ket{0} = 0$.
真空是最低能量态, 不是经典意义上的绝对空无.
真空具有 correlation 和 fluctuation, 但是把它描述成粒子不断"凭空冒出又消失"通常会制造多于解释的误解.


---
## 什么是一个粒子

对自由场, 答案非常直接.
在真空上用某个 mode 的产生算符作用一次, 得到一个单粒子 momentum eigenstate.


$$
\ket{\vb{k}}
= \hat{a}_{\vb{k}}^{\dagger}\ket{0},
\qquad
\hat{H}\ket{\vb{k}}
= \hbar\omega_{\vb{k}}\ket{\vb{k}}.
$$


由于 $\omega_{\vb{k}}^{2} = \vb{k}^{2}c^{2} + m^{2}c^{4}/\hbar^{2}$, 这个激发具有质量为 $m$ 的相对论粒子的能量动量关系.
它也按照场的 transformation law 携带确定的 spin 和其他 quantum numbers.
这就是我们把这种激发称为粒子的理由.


精确 momentum eigenstate 遍布整个空间, 并不局域.
更接近实验中一个局域粒子的态是 wave packet.


$$
\ket{1_{f}}
= \hat{a}^{\dagger}(f)\ket{0}
= \int \frac{\dd[3]{k}}{(2\pi)^{3}}\,
f(\vb{k})\hat{a}_{\vb{k}}^{\dagger}\ket{0}.
$$


所以, 粒子的空间形状不是某个单独 field mode 的形状, 而是由 mode amplitudes $f(\vb{k})$ 决定的波包.
探测器与场发生局域相互作用并吸收能量和 quantum numbers 时, 宏观装置留下一个局域记录, 于是我们看到一个"粒子事件".


在 interacting theory 中, 粒子的概念比自由场中微妙.
稳定粒子可以由能量动量谱和 correlation function 中的单粒子结构识别, scattering experiment 中的入射和出射态也可以在相互作用足够弱的遥远区域近似为自由粒子.
但是在强相互作用区域内部, 未必能在每个时刻无歧义地数出有多少粒子.


因此, 基本场和粒子不是两套互相竞争的实体清单.
场给出局域动力学和算符结构, 粒子则是这种结构允许的某些稳定或近似稳定量子态.
在 condensed matter 中, phonon 和 magnon 也以同样方式成为 collective fields 的 quanta, 但它们不是新的基本物质小球.


---
## 算符场是什么意思

自由实标量场的 mode expansion 是.


$$
\hat{\phi}(x)
= \int \frac{\dd[3]{k}}{(2\pi)^{3}\sqrt{2\omega_{\vb{k}}}}
\qty(
\hat{a}_{\vb{k}} e^{-ik\cdot x}
{} + \hat{a}_{\vb{k}}^{\dagger} e^{ik\cdot x}
).
$$


这个式子直接说明了"operator field"的两个部分.
它依赖时空位置 $x$, 所以它是 field.
它的 coefficients 是 $\hat{a}_{\vb{k}}$ 和 $\hat{a}_{\vb{k}}^{\dagger}$, 会改变 ket, 所以它是 operator.


场算符不是一个粒子态.
$\hat{\phi}(x)$ 作用在一般态上, 会把它变成粒子数相差 $1$ 的态的叠加.
作用在真空上时, 湮灭部分给出 $0$, 而产生部分给出各种 momenta 的单粒子叠加.


$$
\hat{\phi}(x)\ket{0}
= \int \frac{\dd[3]{k}}{(2\pi)^{3}\sqrt{2\omega_{\vb{k}}}}\,
e^{ik\cdot x}\ket{\vb{k}}.
$$


一个点上的理想化操作会包含任意大的 momentum.
实际中应使用有限区域和有限 resolution 的 smearing function, 从而得到物理上可制备的 wave packet.


还要注意, 并非每个 field operator 本身都是 observable.
Hermitian scalar field 可以与 observable 紧密联系, 但 charged field 或 fermionic field 通常不是直接可测的 Hermitian operator.
可观测量常由 fields 组成, 例如 charge density, current, energy density 和 correlation functions.


---
## 场的量子与量子力学波函数怎样联系

在普通单粒子量子力学中, 抽象态是 $\ket{\Psi(t)}$, position-space wave function 是它在 position basis 下的分量.


$$
\psi(t, \vb{x})
= \braket{\vb{x}|\Psi(t)}.
$$


$\psi(t, \vb{x})$ 不是额外的一种物质, 也不是 position operator.
它只是同一个态 $\ket{\Psi}$ 在特定基底中的表示.


在 QFT 的 one-particle sector 中, 可以从 field operator 和单粒子态恢复类似波函数的振幅.
对适当归一化的 annihilation field, 可以写成.


$$
\psi_{1}(x)
= \mel{0}{\hat{\psi}(x)}{\Psi_{1}}.
$$


在 relativistic QFT 中, 这个量不自动具有 ordinary position wave function 的全部概率解释, 但它准确展示了 field operator 如何从态中抽取 one-particle amplitude.


在 non-relativistic field theory 中, 或在能够使用 Fock decomposition 的适当极限下, 相同 bosons 的等时 $N$ 体波函数可以写成.


$$
\psi_{N}(t, \vb{x}_{1}, \ldots, \vb{x}_{N})
= \frac{1}{\sqrt{N!}}
\mel{0}{
\hat{\psi}(t, \vb{x}_{1}) \cdots \hat{\psi}(t, \vb{x}_{N})
}{\Psi_{N}}.
$$


这说明 ordinary wave mechanics 没有被 QFT 抛弃.
在粒子概念和 Fock decomposition 适用时, 它作为固定粒子数 sector 的一种表示包含在 QFT 中.
field operator 负责在不同 particle-number sectors 之间建立联系, 而波函数描述给定 sector 中的 probability amplitudes.


QFT 还有另一种更接近普通 Schrödinger wave function 的表示.
取所有 classical field configurations $\varphi(\vb{x})$ 作为基底, 并令.


$$
\hat{\phi}(\vb{x})\ket{\varphi}
= \varphi(\vb{x})\ket{\varphi}.
$$


同一个量子态可以表示成 wave functional.


$$
\Psi[\varphi, t]
= \braket{\varphi|\Psi(t)}.
$$


普通波函数 $\psi(\vb{x})$ 给每个可能位置一个 complex amplitude.
波泛函 $\Psi[\varphi]$ 则给每个可能的整幅 field configuration 一个 complex amplitude.
因为它的输入本身是一个函数, 所以它被称为 functional.


在这个表象中, 共轭动量场的作用类似 ordinary quantum mechanics 中的 $\hat{p} = -i\hbar \dv*{x}$.


$$
\hat{\pi}(\vb{x})
= -i\hbar \frac{\delta}{\delta\varphi(\vb{x})}.
$$


因此, 量子场不是波泛函.
前者是作用在态上的 operator, 后者是态在 field-configuration basis 中的坐标表示.


---
## 一个粒子并不等于一小块经典场

最容易误导初学者的一句话是, "一个粒子就是场上的一个小波包".
若这句话指 one-particle state 由许多 momentum modes 叠加而成, 它是有用的.
若它暗示每个粒子都对应一团具有确定非零 classical field value 的物质, 它就是错的.


对自由实标量场的 number state, $\hat{\phi}$ 会把粒子数改变 $1$.
因此常有.


$$
\mel{1_{f}}{\hat{\phi}(x)}{1_{f}} = 0.
$$


也就是说, 一个确定的 one-particle state 完全可以存在, 同时场的一点期望值处处为 $0$.
粒子信息仍然存在于能量, number operator 和 two-point correlations 等量中.


反过来, coherent state $\ket{\alpha}$ 满足 $\hat{a}\ket{\alpha} = \alpha\ket{\alpha}$.
它通常含有许多不同 particle-number states 的叠加, 而 $\expval{\hat{\phi}(x)}_{\alpha}$ 可以近似一幅 classical wave.
所以, 经典场波更像许多 quanta 以相干相位组织起来的状态, 而不是一个 quantum 的放大照片.


这也解释了 wave-particle duality 在 QFT 中为什么不需要被说成"粒子有时变成波".
态始终按量子规律演化, field correlations 可以展示 interference, 而探测器产生离散的能量交换记录.
波动图样和粒子计数是同一量子态在不同操作与测量中的表现.


---
## 三个具体例子

对电磁场, classical wave 是随时空变化的 $\vb{E}$ 和 $\vb{B}$.
量子化以后, 每个 momentum 和 polarization mode 都有产生与湮灭算符.
一个 photon 是电磁场的 one-quantum excitation, 而一束接近 classical electromagnetic wave 的激光通常是许多 photons 组成的 coherent state.


对固体中的晶格位移场, normal modes 是 lattice vibrations.
量子化以后, 一个 mode 增加一个单位得到一个 phonon.
phonon 可以携带能量和 crystal momentum 并被实验探测, 但它显然不是晶体中新增的一颗基本小球.


对 electron field, one-electron state 是 fermionic field 的一个激发.
它携带由该 field 和 symmetry representation 决定的质量, 电荷和 spin $1/2$.
由于 anticommutation relations, 同一个单粒子 state 的 occupation number 满足 $n \in \qty{0, 1}$, 这就是 Pauli exclusion principle 的场论表达.


这些例子的共同逻辑是.


$$
\text{local field degrees of freedom}
\longrightarrow
\text{normal modes}
\longrightarrow
\text{quantized excitations}
\longrightarrow
\text{particle interpretation}.
$$


最后一个箭头在 free theory 中最清楚, 在 interacting theory 中则需要根据稳定性, asymptotic states 和实际实验条件谨慎解释.


---
## 最后压缩成一张概念图

经典场 $\phi(x)$ 是每个时空位置上的 classical degree of freedom.


量子化把它变成满足 commutation relations 或 anticommutation relations 的 field operator $\hat{\phi}(x)$.


量子态 $\ket{\Psi}$ 告诉我们这些自由度处于怎样的叠加与纠缠中.


自由场的 normal modes 像彼此独立的 oscillators, 每个 mode 的 excitation number 按整数单位变化.


一个 quantum 是某个 mode 的一个基本激发单位.


一个 particle 是具有确定能量动量关系和 quantum numbers 的 one-quantum state, 或由多个 modes 叠加成的 wave-packet state.


普通 wave function 是固定粒子数 sector 中的 state representation, 而 wave functional 是整个 QFT state 在 field-configuration basis 中的表示.


因此, 最不容易误导人的一句总结是.


> 场给出局域自由度, 量子规则决定这些自由度的状态与算符代数, 而粒子是这种量子结构中能够被制备, 传播和探测的特定激发.


---
## 参考与延伸阅读

本文的 canonical quantization 主线参考了 Robert D Klauber 的 *Student Friendly Quantum Field Theory*, 特别是其中关于 field commutators, creation and destruction operators, Fock space 和 harmonic oscillators 的讨论.
文中没有沿用该书把 state, particle 和 wave function 近似等同的表述, 因为在一般 QFT 中这三者需要严格区分.


- David Tong, [Quantum Field Theory](https://www.damtp.cam.ac.uk/user/tong/qft.html), 尤其是 Classical Field Theory 和 Free Fields 两章.
- MIT OpenCourseWare, [Relativistic Quantum Field Theory I](https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/), 尤其是 Why Quantum Field Theory 和 Canonical Quantization of a Free Scalar Field Theory 两讲.
- CERN, [What is so special about the Higgs boson](https://home.cern/science/physics/higgs-boson/what/), 提供 field excitation 与 particle interpretation 的直观说明.
- Stanford Encyclopedia of Philosophy, [Quantum Field Theory](https://plato.stanford.edu/archives/fall2020/entries/quantum-field-theory/), 讨论 locality, particle interpretation 和 operator-valued distributions 的概念边界.
