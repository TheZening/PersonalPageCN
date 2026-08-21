---
title: "相互作用理论（二）：戴森级数、时间序与散射算符"
date: 2026-08-20
weight: 2
---
相互作用绘景把态的演化方程化为一个形式上类似薛定谔方程的关系.
困难在于不同时刻的相互作用哈密顿量通常彼此不对易, 所以不能把解直接写成普通指数.
本篇从积分方程和皮卡迭代开始, 逐步推出戴森级数.
时间序, 积分区域中的单纯形以及 $1/n!$ 都会从这个推导中自然出现.

---
## 从微分方程到皮卡迭代


为了简化记号, 本篇把相互作用绘景的 $H_{\text{int},\mathrm{I}}(t)$ 简记为 $H_{\mathrm{I}}(t)$.
相互作用绘景态满足:
$$
\mathrm{i}\dv{\ket{\Psi(t)}_{\mathrm{I}}}{t}=H_{\mathrm{I}}(t)\ket{\Psi(t)}_{\mathrm{I}}
$$
通过 $\ket{\Psi(t)}_{\mathrm{I}}=U_{\mathrm{I}}(t,t_0)\ket{\Psi(t_0)}_{\mathrm{I}}$ 定义相互作用绘景演化算符 $U_{\mathrm{I}}(t,t_0)$.
从参考时刻 $t_0$ 到它自身的演化为恒等变换, 所以初始条件为 $U_{\mathrm{I}}(t_0,t_0)=\mathbb{1}$.
把态的表示代入运动方程:
$$
\mathrm{i}\pdv{U_{\mathrm{I}}(t,t_0)}{t}\ket{\Psi(t_0)}_{\mathrm{I}}=H_{\mathrm{I}}(t)U_{\mathrm{I}}(t,t_0)\ket{\Psi(t_0)}_{\mathrm{I}}
$$
这个关系对任意初态都成立, 因而演化算符本身满足:
$$
\mathrm{i}\pdv{U_{\mathrm{I}}(t,t_0)}{t}=H_{\mathrm{I}}(t)U_{\mathrm{I}}(t,t_0)
$$


对等式从 $t_0$ 积分到 $t$:
$$
U_{\mathrm{I}}(t,t_0)-\mathbb{1}=-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t_1)U_{\mathrm{I}}(t_1,t_0)\dd{t_1}
$$
因此得到积分方程:
$$
U_{\mathrm{I}}(t,t_0)=\mathbb{1}-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t_1)U_{\mathrm{I}}(t_1,t_0)\dd{t_1}
$$
这个方程与微分方程等价.
对它求导会回到演化方程, 令 $t=t_0$ 则回到初始条件.


积分方程右边仍然含有未知的 $U_{\mathrm{I}}$, 但可以用逐次代入法求解.
先取零阶近似 $U_{\mathrm{I},[0]}(t,t_0)=\mathbb{1}$.
把它代入积分方程右边, 得到第一次皮卡迭代:
$$
U_{\mathrm{I},[1]}(t,t_0)=\mathbb{1}-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t_1)\dd{t_1}
$$
再把 $U_{\mathrm{I},[1]}(t_1,t_0)$ 代回积分方程:
$$
\begin{aligned}
U_{\mathrm{I},[2]}(t,t_0)&=\mathbb{1}-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t_1)\dd{t_1}\\
&+(-\mathrm{i})^2\int_{t_0}^{t}\int_{t_0}^{t_1}H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\dd{t_2}\dd{t_1}
\end{aligned}
$$
第二个积分的上限是 $t_1$, 所以其中始终有 $t_2\leq t_1$.
较晚时刻的算符 $H_{\mathrm{I}}(t_1)$ 位于左边, 会在较早时刻的算符之后作用于初态.


再迭代一次得到三阶项:
$$
(-\mathrm{i})^3\int_{t_0}^{t}\int_{t_0}^{t_1}\int_{t_0}^{t_2}H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)H_{\mathrm{I}}(t_3)\dd{t_3}\dd{t_2}\dd{t_1}
$$
它的积分区域满足 $t_0\leq t_3\leq t_2\leq t_1\leq t$.
一般的第 $n$ 阶项为:
$$
U_{\mathrm{I},n}(t,t_0)=(-\mathrm{i})^n\int_{t_0}^{t}\int_{t_0}^{t_1}\cdots\int_{t_0}^{t_{n-1}}H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\cdots H_{\mathrm{I}}(t_n)\dd{t_n}\cdots\dd{t_2}\dd{t_1}
$$
因此精确形式级数为 $U_{\mathrm{I}}(t,t_0)=\mathbb{1}+\sum_{n=1}^{\infty}U_{\mathrm{I},n}(t,t_0)$.
这就是戴森级数的有序积分形式.
可以通过求导检查每一阶的算符次序.
下面约定 $U_{\mathrm{I},0}(t,t_0)=\mathbb{1}$.
对 $n\geq1$ 的最外层积分上限求导, 会把 $t_1$ 固定为最晚时刻 $t$, 因而:
$$
\mathrm{i}\pdv{U_{\mathrm{I},n}(t,t_0)}{t}=H_{\mathrm{I}}(t)U_{\mathrm{I},n-1}(t,t_0)
$$
对 $n$ 求和后恢复方程 $\mathrm{i}\pdv*{U_{\mathrm{I}}(t,t_0)}{t}=H_{\mathrm{I}}(t)U_{\mathrm{I}}(t,t_0)$.
而所有 $n\geq1$ 的积分在 $t=t_0$ 时都为零, 所以初始条件也正确.


在有限维空间或适当有界的 $H_{\mathrm{I}}(t)$ 下, 皮卡迭代可以在严格的收敛意义下给出演化算符.
但量子场论的场算符是无界算符值分布, 无穷阶微扰级数通常不保证收敛.
因此这里的“精确”是说每个展开系数都由原积分方程确定, 而“形式级数”是提醒我们不能自动把无穷求和当成收敛函数.
实际计算通常把它理解成耦合常数的渐近展开, 并只保留所需阶数.
不能仅凭耦合常数很小, 就断言相邻两阶之比是某个固定小量.

---
## 单纯形、时间序与因子 $1/n!$


先看二阶项的积分区域.
两个变量都位于区间 $[t_0,t]$ 时, 整个正方形可以分成两个三角形:
$$
\mathcal{R}_{12}=\{(t_1,t_2)\mid t_0\leq t_2\leq t_1\leq t\}
$$
以及:
$$
\mathcal{R}_{21}=\{(t_1,t_2)\mid t_0\leq t_1\leq t_2\leq t\}
$$
戴森二阶项只在区域 $\mathcal{R}_{12}$ 上积分:
$$
U_{\mathrm{I},2}=(-\mathrm{i})^2\int_{\mathcal{R}_{12}}H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\dd{t_1}\dd{t_2}
$$


定义两个相互作用哈密顿量的时间序乘积:
$$
T\{H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\}=\theta(t_1-t_2)H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)+\theta(t_2-t_1)H_{\mathrm{I}}(t_2)H_{\mathrm{I}}(t_1)
$$
$H_{\mathrm{I}}$ 是玻色偶算符, 所以交换两个完整的 $H_{\mathrm{I}}$ 时不会引入费米负号.
它内部可以含费米场, 但物理哈密顿密度必须具有偶费米宇称.


在区域 $\mathcal{R}_{12}$ 中, 时间序乘积等于 $H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)$.
在区域 $\mathcal{R}_{21}$ 中, 它等于 $H_{\mathrm{I}}(t_2)H_{\mathrm{I}}(t_1)$.
对第二个区域交换哑变量 $t_1\leftrightarrow t_2$, 它就变成与第一个区域完全相同的积分.
因此整个正方形上的时间序积分等于有序三角形积分的两倍:
$$
\int_{t_0}^{t}\int_{t_0}^{t}T\{H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\}\dd{t_2}\dd{t_1}=2\int_{t_0}^{t}\int_{t_0}^{t_1}H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\dd{t_2}\dd{t_1}
$$
所以二阶项也可以写成:
$$
U_{\mathrm{I},2}=\frac{(-\mathrm{i})^2}{2!}\int_{t_0}^{t}\int_{t_0}^{t}T\{H_{\mathrm{I}}(t_1)H_{\mathrm{I}}(t_2)\}\dd{t_2}\dd{t_1}
$$


对 $n$ 个时间变量, 区间的直积是一个 $n$ 维超立方体 $[t_0,t]^n$.
除去时间相等的边界后, 它被 $n!$ 种严格时间排列分成 $n!$ 个全等单纯形.
其中一个单纯形正是 $t_0\leq t_n\leq\cdots\leq t_2\leq t_1\leq t$.
时间序算符在每个单纯形中把最晚的哈密顿量放在最左边.
交换积分哑变量以后, $n!$ 个单纯形给出相同的有序积分.
因此:
$$
U_{\mathrm{I},n}(t,t_0)=\frac{(-\mathrm{i})^n}{n!}\int_{t_0}^{t}\cdots\int_{t_0}^{t}T\{H_{\mathrm{I}}(t_1)\cdots H_{\mathrm{I}}(t_n)\}\dd{t_1}\cdots\dd{t_n}
$$
$1/n!$ 不是凭空引入的组合系数.
它正是把一个有序单纯形换成整个超立方体时, 对 $n!$ 个时间排列重复计数所需的补偿.


将所有阶数合并, 得到戴森公式:
$$
U_{\mathrm{I}}(t,t_0)=\sum_{n=0}^{\infty}\frac{(-\mathrm{i})^n}{n!}\int_{t_0}^{t}\cdots\int_{t_0}^{t}T\{H_{\mathrm{I}}(t_1)\cdots H_{\mathrm{I}}(t_n)\}\dd{t_1}\cdots\dd{t_n}
$$
时间序指数定义为这个级数的简写:
$$
U_{\mathrm{I}}(t,t_0)=T\exp\left[-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t')\dd{t'}\right]
$$
这里的 $T\exp$ 不是先计算普通指数再对最终结果排序.
它的定义就是逐阶展开指数, 然后对每一阶的算符乘积施加时间序.


若任意两个时刻都满足 $[H_{\mathrm{I}}(t_1),H_{\mathrm{I}}(t_2)]=0$, 时间序才可以省略.
此时演化算符退化成普通指数:
$$
U_{\mathrm{I}}(t,t_0)=\exp\left[-\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t')\dd{t'}\right]
$$
一般相互作用理论不满足这个条件.
因此不能先省略 $T$, 再把普通指数口头解释为“应当有序”.
普通指数和时间序指数的高阶算符乘积确实不同.

---
## 组合律、逆算符与幺正性


演化算符必须能够把连续时间区间首尾相接.
对 $t_2\geq t_1\geq t_0$, 组合律为 $U_{\mathrm{I}}(t_2,t_1)U_{\mathrm{I}}(t_1,t_0)=U_{\mathrm{I}}(t_2,t_0)$.
左边先把态从 $t_0$ 演化到 $t_1$, 再从 $t_1$ 演化到 $t_2$.
右边直接完成同一段演化.


这个关系可以由微分方程严格验证.
把 $t_0$ 与 $t_1$ 固定, 将左边视为 $t_2$ 的函数.
它满足:
$$
\mathrm{i}\pdv{}{t_2}[U_{\mathrm{I}}(t_2,t_1)U_{\mathrm{I}}(t_1,t_0)]=H_{\mathrm{I}}(t_2)U_{\mathrm{I}}(t_2,t_1)U_{\mathrm{I}}(t_1,t_0)
$$
当 $t_2=t_1$ 时, 左边等于 $U_{\mathrm{I}}(t_1,t_0)$.
$U_{\mathrm{I}}(t_2,t_0)$ 满足同一微分方程和同一初始条件, 解的唯一性因此给出组合律.


现在证明幺正性.
若 $H_{\mathrm{I}}(t)$ 是厄米算符, 对演化方程取厄米共轭得到:
$$
-\mathrm{i}\pdv{U^\dagger_{\mathrm{I}}(t,t_0)}{t}=U^\dagger_{\mathrm{I}}(t,t_0)H_{\mathrm{I}}(t)
$$
对 $U^\dagger_{\mathrm{I}}U_{\mathrm{I}}$ 求导:
$$
\begin{aligned}
\pdv{}{t}[U^\dagger_{\mathrm{I}}U_{\mathrm{I}}]&=\pdv{U^\dagger_{\mathrm{I}}}{t}U_{\mathrm{I}}+U^\dagger_{\mathrm{I}}\pdv{U_{\mathrm{I}}}{t}\\
&=\mathrm{i}U^\dagger_{\mathrm{I}}H_{\mathrm{I}}U_{\mathrm{I}}-\mathrm{i}U^\dagger_{\mathrm{I}}H_{\mathrm{I}}U_{\mathrm{I}}=0
\end{aligned}
$$
所以 $U^\dagger_{\mathrm{I}}U_{\mathrm{I}}$ 与时间无关.
利用初始条件可得 $U^\dagger_{\mathrm{I}}(t,t_0)U_{\mathrm{I}}(t,t_0)=\mathbb{1}$.
这先证明了 $U^\dagger_{\mathrm{I}}$ 是 $U_{\mathrm{I}}$ 的左逆.
再对 $U_{\mathrm{I}}U^\dagger_{\mathrm{I}}$ 求导:
$$
\pdv{}{t}[U_{\mathrm{I}}U^\dagger_{\mathrm{I}}]=-\mathrm{i}H_{\mathrm{I}}U_{\mathrm{I}}U^\dagger_{\mathrm{I}}+\mathrm{i}U_{\mathrm{I}}U^\dagger_{\mathrm{I}}H_{\mathrm{I}}
$$
恒等算符 $\mathbb{1}$ 满足这个方程及初始条件, 解的唯一性因而给出 $U_{\mathrm{I}}U^\dagger_{\mathrm{I}}=\mathbb{1}$.
所以 $U^\dagger_{\mathrm{I}}$ 也是右逆.
逆向演化因此为 $U_{\mathrm{I}}(t_0,t)=U^{-1}_{\mathrm{I}}(t,t_0)=U^\dagger_{\mathrm{I}}(t,t_0)$.


对时间序指数取厄米共轭时, 算符乘积的次序会反转.
因此可以引入反时间序算符 $\bar{T}$, 将较早时刻放在左边:
$$
U^\dagger_{\mathrm{I}}(t,t_0)=\bar{T}\exp\left[\mathrm{i}\int_{t_0}^{t}H_{\mathrm{I}}(t')\dd{t'}\right]
$$
幺正性并不是因为形式上看到了一个“纯虚指数”.
当指数中的算符不对易时, 正确证明必须使用演化方程或逐阶时间序展开.


幺正性还会在微扰的不同阶之间建立关系.
写成 $U_{\mathrm{I}}=\mathbb{1}+U_{\mathrm{I},1}+U_{\mathrm{I},2}+\cdots$.
由 $U^\dagger_{\mathrm{I}}U_{\mathrm{I}}=\mathbb{1}$, 一阶必须满足 $U^\dagger_{\mathrm{I},1}+U_{\mathrm{I},1}=0$.
二阶必须满足 $U^\dagger_{\mathrm{I},2}+U_{\mathrm{I},2}+U^\dagger_{\mathrm{I},1}U_{\mathrm{I},1}=0$.
所以不能要求每一个非零阶单独幺正.
概率守恒是不同微扰阶共同满足的条件.

---
## 从有限时间演化到散射算符


散射理论比较在渐近过去制备的入态与在渐近未来测量的出态.
若理论具有定义良好的渐近粒子, 当各粒子束团在这两个渐近区域相互远离时, 可以用自由多粒子态的量子数标记它们.
散射算符 $S$ 定义为相互作用绘景演化算符的渐近极限 $S=U_{\mathrm{I}}(+\infty,-\infty)$.
所以:
$$
S=T\exp\left[-\mathrm{i}\int_{-\infty}^{+\infty}H_{\mathrm{I}}(t)\dd{t}\right]
$$
若相互作用哈密顿量来自局域密度, 则 $H_{\mathrm{I}}(t)=\int\mathcal{H}_{\mathrm{I}}(t,\bm{x})\dd[3]{x}$.
则可以合并成四维形式:
$$
S=T\exp\left[-\mathrm{i}\int\mathcal{H}_{\mathrm{I}}(x)\dd[4]{x}\right]
$$
其戴森展开为:
$$
S=\sum_{n=0}^{\infty}\frac{(-\mathrm{i})^n}{n!}\int\cdots\int T\{\mathcal{H}_{\mathrm{I}}(x_1)\cdots\mathcal{H}_{\mathrm{I}}(x_n)\}\dd[4]{x_1}\cdots\dd[4]{x_n}
$$
每一个 $x_j$ 都是一个待积分的顶点时空坐标.
局域性意味着同一个 $\mathcal{H}_{\mathrm{I}}(x_j)$ 中的场位于同一个时空点, 但这个点的位置并未预先指定.


极限 $t\to\pm\infty$ 不是说系统等待无限久后进入某种“末态概率平衡”.
它的作用是把入态和出态置于相互作用可以忽略的渐近区域, 从而能够用自由粒子标记这些态.
为了让这个思想在公式中更明确, 常作绝热替换 $H_{\mathrm{I}}(t)\to H_{\mathrm{I},\epsilon}(t)=\mathrm{e}^{-\epsilon|t|}H_{\mathrm{I}}(t)$.
其中调节参数满足 $\epsilon>0$.
相应的正则化散射算符为:
$$
S_\epsilon=T\exp\left[-\mathrm{i}\int_{-\infty}^{+\infty}\mathrm{e}^{-\epsilon|t|}H_{\mathrm{I}}(t)\dd{t}\right]
$$
先在 $\epsilon>0$ 时进行计算, 最后再讨论 $\epsilon$ 从正数方向趋于零的极限.
这个处方既帮助定义渐近极限, 也与后面相互作用真空的投影和 $\mathrm{i}\epsilon$ 结构相联系.
绝热因子是定义极限的辅助处方, 不是宣称真实实验中存在一个按照 $\mathrm{e}^{-\epsilon|t|}$ 开关的装置.


给定自由渐近基底中的入态 $\ket{i}$ 和出态 $\ket{f}$, $S$ 矩阵元定为 $S_{fi}=\mel*{f}{S}{i}$.
在离散且归一化的基底中, 幺正性表现为 $\sum_f(S^\dagger)_{if}S_{fj}=\delta_{ij}$.
其中 $(S^\dagger)_{if}$ 是 $S_{fi}$ 的复共轭.
若 $\ket{i}$ 和 $\ket{f}$ 是归一化波包, 则相应排他测量结果的概率可以由归一化振幅的模平方得到.
平面波动量本征态却只有狄拉克分布归一化, 不是希尔伯特空间中的归一化向量.
在常用约定下, 把恒等演化拆出后可写成:
$$
S_{fi}=\braket{f}{i}+\mathrm{i}(2\pi)^4\delta^{(4)}(P_f-P_i)\mathcal{M}_{fi}
$$
因此平面波的 $S_{fi}$ 是分布, 直接写 $|S_{fi}|^2$ 会遇到狄拉克分布平方, 不能把它当成普通概率.
用归一化波包计算, 或先在有限时间和有限体积中正则化, 可以正确处理这个分布平方.
再除以观测时间并结合末态相空间, 得到跃迁率; 对散射过程还要除以入射通量, 才得到散射截面.


在有质量且渐近粒子定义良好的理论中, 上述构造给出标准微扰散射框架.
量子电动力学（QED）还具有无质量光子带来的红外细节, 严格的带电渐近态需要比裸自由电子态更谨慎的处理.
这些问题不改变本篇的戴森推导, 但提醒我们 $S=U_{\mathrm{I}}(+\infty,-\infty)$ 是带有物理条件的渐近极限, 不是一个无需说明就自动存在的普通矩阵.


下一篇将处理戴森展开中的时间序场乘积.
正规序和收缩会把这些算符乘积拆成自由传播子与剩余场算符, 从而为威克定理和费曼图奠定基础.
