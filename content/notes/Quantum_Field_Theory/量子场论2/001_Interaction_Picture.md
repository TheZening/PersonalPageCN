---
title: "相互作用理论（一）：三种绘景与相互作用绘景"
date: 2026-08-20
weight: 1
---
自由场理论能够精确给出粒子的质量壳, 福克空间和传播子, 但它不能描述散射, 衰变或粒子数改变.
加入相互作用以后, 完整运动方程通常成为非线性的算符方程, 已经不能像自由场那样逐个傅里叶模精确求解.
相互作用绘景的作用, 是把我们已经会处理的自由演化保留在场算符中, 把真正困难的相互作用演化集中到态中.


这种分工不是近似.
它首先是一种精确的幺正变换.
微扰近似是在完成这一步以后, 对相互作用绘景中的演化算符作级数展开时才引入的.

---
## 从薛定谔绘景到海森堡绘景


设完整哈密顿量可以分成自由部分和相互作用部分, 即 $H=H_0+H_{\text{int}}$.
$H_0$ 是已经能够对角化的自由哈密顿量, $H_{\text{int}}$ 包含场之间的耦合.
本篇先假定 $H$ 和 $H_0$ 不显含时间.
若它们显含时间, 普通指数需要换成后文介绍的时间序指数, 但绘景变换的基本逻辑不变.


在薛定谔绘景中, 态承担完整的时间演化:
$$
\mathrm{i}\dv{\ket{\Psi(t)}_{\mathrm{S}}}{t}=H\ket{\Psi(t)}_{\mathrm{S}}
$$
选定参考时刻 $t_0$, 并规定此时三个绘景使用同一个态.
薛定谔绘景演化算符为 $U(t,t_0)=\mathrm{e}^{-\mathrm{i}H(t-t_0)}$.
因此 $\ket{\Psi(t)}_{\mathrm{S}}=U(t,t_0)\ket{\Psi(t_0)}_{\mathrm{S}}$.
薛定谔绘景算符只保留它本身的显含时间性, 即 $\dv*{\mathcal{O}_{\mathrm{S}}}{t}=\left(\pdv*{\mathcal{O}}{t}\right)_{\mathrm{S}}$.
若 $H$ 是厄米算符, 则 $U(t,t_0)$ 是幺正算符, 并满足 $U^\dagger(t,t_0)U(t,t_0)=\mathbb{1}$.


海森堡绘景把这段完整演化从态移到算符.
海森堡态定义为 $\ket{\Psi}_{\mathrm{H}}=U^\dagger(t,t_0)\ket{\Psi(t)}_{\mathrm{S}}$.
代入薛定谔绘景的态演化以后得到:
$$
\ket{\Psi}_{\mathrm{H}}=U^\dagger(t,t_0)U(t,t_0)\ket{\Psi(t_0)}_{\mathrm{S}}=\ket{\Psi(t_0)}_{\mathrm{S}}
$$
所以海森堡态不随时间改变, 即 $\dv*{\ket{\Psi}_{\mathrm{H}}}{t}=0$.


相应的海森堡算符定义为 $\mathcal{O}_{\mathrm{H}}(t)=U^\dagger(t,t_0)\mathcal{O}_{\mathrm{S}}(t)U(t,t_0)$.
这里保留了 $\mathcal{O}_{\mathrm{S}}(t)$ 可能具有的显含时间性.
利用 $\mathrm{i}\dv*{U}{t}=HU$ 和 $-\mathrm{i}\dv*{U^\dagger}{t}=U^\dagger H$, 对这个定义逐项求导:
$$
\begin{aligned}
\dv{\mathcal{O}_{\mathrm{H}}}{t}&=\dv{U^\dagger}{t}\mathcal{O}_{\mathrm{S}}U+U^\dagger\pdv{\mathcal{O}_{\mathrm{S}}}{t}U+U^\dagger\mathcal{O}_{\mathrm{S}}\dv{U}{t}\\
&=\mathrm{i}U^\dagger H\mathcal{O}_{\mathrm{S}}U+U^\dagger\pdv{\mathcal{O}_{\mathrm{S}}}{t}U-\mathrm{i}U^\dagger\mathcal{O}_{\mathrm{S}}HU\\
&=\mathrm{i}U^\dagger[H,\mathcal{O}_{\mathrm{S}}]U+U^\dagger\pdv{\mathcal{O}_{\mathrm{S}}}{t}U
\end{aligned}
$$
对不显含时间的 $H$, 有 $U^\dagger HU=H$, 所以结果可以写成海森堡方程:
$$
\dv{\mathcal{O}_{\mathrm{H}}}{t}=\mathrm{i}[H,\mathcal{O}_{\mathrm{H}}]+\left(\pdv{\mathcal{O}}{t}\right)_{\mathrm{H}}
$$
若薛定谔算符不显含时间, 最后一项为零.
自由场量子化中使用的场方程, 正是相应海森堡方程的场论形式.


从线性代数角度看, 绘景变换不是把一个物理态换成另一个物理态.
它是在同一个希尔伯特空间中, 用一个随时间变化的幺正映射重新分配态矢量和算符所携带的时间依赖.
可观测的矩阵元不依赖这种描述选择.

---
## 相互作用绘景的定义与两条运动方程


海森堡绘景把完整的 $H$ 都放入算符演化, 薛定谔绘景则把完整的 $H$ 都放入态演化.
相互作用绘景只用自由哈密顿量进行绘景变换.
定义自由演化算符 $U_0(t,t_0)=\mathrm{e}^{-\mathrm{i}H_0(t-t_0)}$.
它满足:
$$
\begin{aligned}
\mathrm{i}\pdv{U_0(t,t_0)}{t}&=H_0U_0(t,t_0)\\
U_0(t_0,t_0)&=\mathbb{1}
\end{aligned}
$$
因为 $H_0$ 是厄米算符, 所以 $U_0^\dagger(t,t_0)=\mathrm{e}^{\mathrm{i}H_0(t-t_0)}$.


相互作用绘景中的态定义为 $\ket{\Psi(t)}_{\mathrm{I}}=U_0^\dagger(t,t_0)\ket{\Psi(t)}_{\mathrm{S}}$.
相互作用绘景中的算符定义为 $\mathcal{O}_{\mathrm{I}}(t)=U_0^\dagger(t,t_0)\mathcal{O}_{\mathrm{S}}(t)U_0(t,t_0)$.
这两个定义必须成对使用.
只变换态而不变换算符, 或只变换算符而不变换态, 都会改变矩阵元, 因而不再是单纯的绘景变换.


三种绘景之间的直接联系可以用一个精确的相互作用绘景演化算符表示.
定义 $U_{\mathrm{I}}(t,t_0)=U_0^\dagger(t,t_0)U(t,t_0)$, 则完整演化分解为 $U(t,t_0)=U_0(t,t_0)U_{\mathrm{I}}(t,t_0)$.
由于海森堡态就是参考时刻的态, 相互作用绘景态与它的关系为 $\ket{\Psi(t)}_{\mathrm{I}}=U_{\mathrm{I}}(t,t_0)\ket{\Psi}_{\mathrm{H}}$.
对算符则有 $\mathcal{O}_{\mathrm{H}}(t)=U_{\mathrm{I}}^\dagger(t,t_0)\mathcal{O}_{\mathrm{I}}(t)U_{\mathrm{I}}(t,t_0)$.
这些关系说明, 相互作用绘景没有丢掉完整演化, 只是把它分成了自由算符演化和相互作用态演化两部分.


先完整推导态的运动方程.
对态定义求导:
$$
\mathrm{i}\dv{\ket{\Psi(t)}_{\mathrm{I}}}{t}=\mathrm{i}\dv{U_0^\dagger(t,t_0)}{t}\ket{\Psi(t)}_{\mathrm{S}}+\mathrm{i}U_0^\dagger(t,t_0)\dv{\ket{\Psi(t)}_{\mathrm{S}}}{t}
$$
自由演化算符的厄米共轭满足 $\mathrm{i}\pdv*{U_0^\dagger(t,t_0)}{t}=-U_0^\dagger(t,t_0)H_0$.
薛定谔方程给出 $\mathrm{i}\dv*{\ket{\Psi(t)}_{\mathrm{S}}}{t}=(H_0+H_{\text{int}})\ket{\Psi(t)}_{\mathrm{S}}$.
把这两个结果代回态导数:
$$
\begin{aligned}
\mathrm{i}\dv{\ket{\Psi(t)}_{\mathrm{I}}}{t}&=-U_0^\dagger H_0\ket{\Psi(t)}_{\mathrm{S}}+U_0^\dagger(H_0+H_{\text{int}})\ket{\Psi(t)}_{\mathrm{S}}\\
&=U_0^\dagger H_{\text{int}}\ket{\Psi(t)}_{\mathrm{S}}
\end{aligned}
$$
两个自由项因而逐项相消.
再用 $\ket{\Psi(t)}_{\mathrm{S}}=U_0(t,t_0)\ket{\Psi(t)}_{\mathrm{I}}$, 得到:
$$
\mathrm{i}\dv{\ket{\Psi(t)}_{\mathrm{I}}}{t}=H_{\text{int},\mathrm{I}}(t)\ket{\Psi(t)}_{\mathrm{I}}
$$
其中相互作用绘景的相互作用哈密顿量定义为 $H_{\text{int},\mathrm{I}}(t)=U_0^\dagger(t,t_0)H_{\text{int}}U_0(t,t_0)$.
即使薛定谔绘景中的 $H_{\text{int}}$ 不显含时间, $H_{\text{int},\mathrm{I}}(t)$ 一般仍然随时间改变.
这个时间依赖来自 $H_{\text{int}}$ 与 $H_0$ 通常不对易.
还可以直接对 $U_{\mathrm{I}}=U_0^\dagger U$ 求导, 检查演化算符本身的方程:
$$
\begin{aligned}
\mathrm{i}\pdv{U_{\mathrm{I}}(t,t_0)}{t}&=-U_0^\dagger H_0U+U_0^\dagger HU\\
&=U_0^\dagger H_{\text{int}}U_0U_{\mathrm{I}}\\
&=H_{\text{int},\mathrm{I}}(t)U_{\mathrm{I}}(t,t_0)
\end{aligned}
$$
在第二行使用了 $H=H_0+H_{\text{int}}$ 和 $U=U_0U_{\mathrm{I}}$.
又因为 $U(t_0,t_0)=U_0(t_0,t_0)=\mathbb{1}$, 它的初始条件是 $U_{\mathrm{I}}(t_0,t_0)=\mathbb{1}$.
这正是下一篇构造戴森级数的起点.


现在推导算符的运动方程.
对 $\mathcal{O}_{\mathrm{I}}=U_0^\dagger\mathcal{O}_{\mathrm{S}}U_0$ 求导:
$$
\begin{aligned}
\dv{\mathcal{O}_{\mathrm{I}}}{t}&=\mathrm{i}U_0^\dagger H_0\mathcal{O}_{\mathrm{S}}U_0+U_0^\dagger\pdv{\mathcal{O}_{\mathrm{S}}}{t}U_0\\
&-\mathrm{i}U_0^\dagger\mathcal{O}_{\mathrm{S}}H_0U_0\\
&=\mathrm{i}[H_0,\mathcal{O}_{\mathrm{I}}]+\left(\pdv{\mathcal{O}}{t}\right)_{\mathrm{I}}
\end{aligned}
$$
因此相互作用绘景的第一条核心方程是 $\mathrm{i}\dv*{\ket{\Psi(t)}_{\mathrm{I}}}{t}=H_{\text{int},\mathrm{I}}(t)\ket{\Psi(t)}_{\mathrm{I}}$.
第二条是 $\dv*{\mathcal{O}_{\mathrm{I}}}{t}=\mathrm{i}[H_0,\mathcal{O}_{\mathrm{I}}]+\left(\pdv*{\mathcal{O}}{t}\right)_{\mathrm{I}}$.
第一式说明态只由相互作用部分演化.
第二式说明算符只由自由部分演化.


这正是相互作用绘景在量子场论中的价值.
相互作用绘景场 $\phi_{\mathrm{I}}$, $\psi_{\mathrm{I}}$ 和 $A^\mu_{\mathrm{I}}$ 满足自由场方程, 所以可以继续使用量子场论 1 已经建立的模展开, 产生湮灭代数和自由传播子.
但是这些场被代入 $H_{\text{int},\mathrm{I}}(t)$ 后会耦合不同的自由福克态, 所以理论并没有变回自由理论.
精确的海森堡场仍然满足相互作用运动方程.

---
## 矩阵元为什么与绘景无关


取任意两个态 $\ket{\Phi(t)}$ 和 $\ket{\Psi(t)}$.
相互作用绘景中的矩阵元为 ${}_{\mathrm{I}}\mel*{\Phi(t)}{\mathcal{O}_{\mathrm{I}}(t)}{\Psi(t)}_{\mathrm{I}}$.
把态和算符的定义全部代入:
$$
\begin{aligned}
{}_{\mathrm{I}}\mel*{\Phi(t)}{\mathcal{O}_{\mathrm{I}}(t)}{\Psi(t)}_{\mathrm{I}}&={}_{\mathrm{S}}\bra{\Phi(t)}U_0U_0^\dagger\mathcal{O}_{\mathrm{S}}U_0U_0^\dagger\ket{\Psi(t)}_{\mathrm{S}}\\
&={}_{\mathrm{S}}\mel*{\Phi(t)}{\mathcal{O}_{\mathrm{S}}(t)}{\Psi(t)}_{\mathrm{S}}
\end{aligned}
$$
这里两次使用了 $U_0U_0^\dagger=\mathbb{1}$.
令两个态相同, 就得到期望值不变:
$$
{}_{\mathrm{I}}\mel*{\Psi(t)}{\mathcal{O}_{\mathrm{I}}(t)}{\Psi(t)}_{\mathrm{I}}={}_{\mathrm{S}}\mel*{\Psi(t)}{\mathcal{O}_{\mathrm{S}}(t)}{\Psi(t)}_{\mathrm{S}}
$$
同样的方法可以证明海森堡绘景给出相同结果:
$$
\begin{aligned}
{}_{\mathrm{H}}\mel*{\Phi}{\mathcal{O}_{\mathrm{H}}(t)}{\Psi}_{\mathrm{H}}&={}_{\mathrm{I}}\mel*{\Phi(t)}{\mathcal{O}_{\mathrm{I}}(t)}{\Psi(t)}_{\mathrm{I}}\\
&={}_{\mathrm{S}}\mel*{\Phi(t)}{\mathcal{O}_{\mathrm{S}}(t)}{\Psi(t)}_{\mathrm{S}}
\end{aligned}
$$


幺正变换保持内积, 即 ${}_{\mathrm{I}}\braket{\Phi(t)}{\Psi(t)}_{\mathrm{I}}={}_{\mathrm{S}}\braket{\Phi(t)}{\Psi(t)}_{\mathrm{S}}$.
所以归一化, 正交关系和总概率都不因绘景改变.
若采用几何语言, 可以把时间轴上的每个时刻都附着一份同构的希尔伯特空间, 它们组成一个平凡希尔伯特丛.
三种绘景对应三种随时间变化的标架选择.
态的坐标和算符的矩阵表示会变, 但它们配对得到的矩阵元不变.


这里还必须区分两种不同的“本征态”.
由产生算符作用在自由真空上得到的多粒子动量态是 $H_0$ 的本征态, 也是后面微扰展开使用的自由福克基底.
它们一般不是完整 $H$ 的本征态, 因为 $H_{\text{int}}$ 会混合不同自由态, 甚至改变粒子数.
因此不能把“定动量多粒子态”不加限定地称为相互作用理论的能量本征态.

---
## 量子电动力学（QED）相互作用与哈密顿量的符号


令 $e>0$ 表示元电荷的大小, 电子电荷为 $-e$.
采用协变导数 $D_\mu=\partial_\mu+\mathrm{i}eA_\mu$.
QED 的规范不变拉格朗日密度为:
$$
\mathcal{L}_{\text{QED}}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}+\bar{\psi}(\mathrm{i}\gamma^\mu D_\mu-m)\psi
$$
其中 $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$.
把协变导数展开后, $\mathcal{L}_{\text{QED}}=\mathcal{L}_0+\mathcal{L}_{\text{int}}$.
自由部分为:
$$
\mathcal{L}_0=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}+\bar{\psi}(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi
$$
相互作用部分为 $\mathcal{L}_{\text{int}}=-e\bar{\psi}\gamma^\mu A_\mu\psi$.
如果改用相反号的协变导数, $\mathcal{L}_{\text{int}}$ 和后续顶点因子的整体符号也会同时改变.
符号约定本身可以不同, 但一套推导内部必须保持一致.


现在说明常用关系 $\mathcal{H}_{\text{int}}=-\mathcal{L}_{\text{int}}$ 的适用范围.
先考虑不带约束的正则玻色场, 并把所有场分量记为 $\varphi_a$.
共轭动量密度定义为 $\pi_a=\pdv*{\mathcal{L}}{\dot{\varphi}_a}$.
“正则”表示这些关系能够反解出每个速度 $\dot{\varphi}_a$ 关于 $\varphi_a$ 和 $\pi_a$ 的表示.
哈密顿密度由勒让德变换给出, 即 $\mathcal{H}=\sum_a\pi_a\dot{\varphi}_a-\mathcal{L}$.
若 $\mathcal{L}=\mathcal{L}_0+\mathcal{L}_{\text{int}}$ 且 $\mathcal{L}_{\text{int}}$ 不含任何场速度, 则 $\pi_a=\pdv*{\mathcal{L}_0}{\dot{\varphi}_a}$.
因此把速度改写成 $\varphi_a$ 和 $\pi_a$ 的函数时, 所用的关系与自由理论相同.
将它代入勒让德变换:
$$
\begin{aligned}
\mathcal{H}&=\sum_a\pi_a\dot{\varphi}_a-\mathcal{L}_0-\mathcal{L}_{\text{int}}\\
&=\mathcal{H}_0-\mathcal{L}_{\text{int}}
\end{aligned}
$$
所以对正则且无导数相互作用的理论, $\mathcal{H}_{\text{int}}=-\mathcal{L}_{\text{int}}$.
对密度在空间上积分以后, 同一条件给出 $H_{\text{int}}(t)=-L_{\text{int}}(t)$.


但是这个正则性假设对狄拉克场和规范场并不成立.
狄拉克拉格朗日密度对时间导数只是一阶的, 例如一种常用写法给出 $\pi_\psi=\mathrm{i}\psi^\dagger$ 和 $\pi_{\psi^\dagger}=0$.
这两个共轭动量不能被独立反解为 $\dot{\psi}$ 和 $\dot{\psi}^\dagger$, 而是构成主约束.
格拉斯曼变量还要固定使用左导数或右导数, 不同约定会改变中间符号, 但不改变约束结构.
对电磁场则有 $\pi^0=0$, 因为未固定规范的麦克斯韦拉格朗日密度中不含 $\dot{A}_0$.
因此必须用带约束的勒让德变换, 或者先选定一致的规范固定, 不能把上面的正则玻色场证明原样照搬.


QED 的 $\mathcal{L}_{\text{int}}=-e\bar{\psi}\gamma^\mu A_\mu\psi$ 不含场的时间导数, 因而不改变自由理论的动能结构和主约束.
带电物质会进入次约束高斯定律.
在未消去 $A_0$ 的约束哈密顿形式中, 或在协变规范固定后的微扰理论中, 戴森展开所用的局域三点相互作用部分仍为 $-\mathcal{L}_{\text{int}}$.
如果进一步解出高斯约束并消去非独立自由度, 约化后的哈密顿量还会显出瞬时库仑项.
这是同一物理在不同规范与变量中的重组, 不能用来把 $\mathcal{H}_{\text{int}}=-\mathcal{L}_{\text{int}}$ 扩张成无条件的通则.
于是本文约定下的 QED 相互作用哈密顿密度为 $\mathcal{H}_{\text{int}}=e\bar{\psi}\gamma^\mu A_\mu\psi$.
总相互作用哈密顿量为 $H_{\text{int}}(t)=\int\mathcal{H}_{\text{int}}(t,\bm{x})\dd[3]{x}$.
在相互作用绘景中, 右边的 $\psi$, $\bar{\psi}$ 和 $A_\mu$ 都是自由场算符, 但它们的乘积会把不同自由福克态连接起来.


若相互作用含时间导数, 共轭动量本身会改变, $\mathcal{H}_{\text{int}}=-\mathcal{L}_{\text{int}}$ 一般失效.
此时必须从完整拉格朗日密度重新作勒让德变换.
若理论还带有约束, 则必须同时追踪主约束, 次约束和相应的拉格朗日乘子.


最后纠正两个容易混淆的说法.
第一, 算符恒等式 $H=H_0+H_{\text{int}}$ 始终成立, 但一般不能把某个完整能量本征值拆成 $E=E_0+E_{\text{int}}$.
$H_0$ 与 $H_{\text{int}}$ 通常不对易, 同一个态通常不是二者的共同本征态, 因而 $E_0$ 和 $E_{\text{int}}$ 往往根本不能同时定义为该态上的本征值.
相互作用绘景的正确建立依靠幺正算符, 不依靠拆分平面波相位.
第二, 量子场的期望值并不总是零.
固定粒子数态中的某些单场期望值会因选择定则为零, 但相干态和某些相互作用真空完全可以具有非零场期望值.


至此, 相互作用造成的全部未知时间演化已经集中到 $H_{\text{int},\mathrm{I}}(t)$.
下一篇将从它的微分方程出发, 不跳步地构造戴森级数和时间序指数.
