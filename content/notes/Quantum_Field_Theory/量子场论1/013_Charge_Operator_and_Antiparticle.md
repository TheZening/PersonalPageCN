---
title: "复标量场的诺特流（二）：电荷算符与反粒子"
date: 2026-08-18
weight: 13
---

上一篇从整体 $U(1)$ 对称性得到经典诺特流和守恒荷，并用泊松括号证明这个荷生成相位旋转。
现在把复标量场量子化，问题变成：同一个守恒荷在福克空间中怎样作用，两套模激发为什么具有相反电荷，以及这件事怎样解决负频率部分的物理解释。
本篇先处理局域流的算符排序，再在有限周期盒中逐项计算电荷算符，最后用对易关系和电荷本征态识别粒子与反粒子。

---
## 从经典流到量子复合算符


经典复标量场的无量纲诺特流为：
$$
j^\mu=\mathrm{i}[\phi^*\partial^\mu\phi-(\partial^\mu\phi^*)\phi]
$$
量子化后作形式替换 $\phi^*\mapsto\phi^{\dagger}$，得到：
$$
j^\mu_{\text{形式}}=\mathrm{i}[\phi^{\dagger}\partial^\mu\phi-(\partial^\mu\phi^{\dagger})\phi]
$$
这个表达式在形式上是厄米的。
对第一项取厄米共轭得到第二项，对第二项取厄米共轭得到第一项，同时复共轭把 $\mathrm{i}$ 变成 $-\mathrm{i}$，所以整体保持不变。


但是 $j^\mu(x)$ 含有同一个时空点上的两个场算符。
量子场严格说是算符值分布，只有用测试函数涂抹后才成为定义良好的算符。
两个算符值分布在同一点的乘积一般会出现短距离奇异性，因而上式还只是需要进一步定义的复合算符。
在自由场中，最直接的规定是相对于自由真空作正规序：
$$
:j^\mu:=\mathrm{i}:[\phi^{\dagger}\partial^\mu\phi-(\partial^\mu\phi^{\dagger})\phi]:
$$
正规序把所有产生算符移到湮灭算符左边，并把交换过程中产生的真空常数删去。
对于电荷算符，这恰好实现物理要求 $Q\ket{0}=0$。
在相互作用理论或更一般背景中，复合算符需要更系统的正则化与重整化，不能把正规序当成适用于一切问题的普遍答案。


自由场的算符运动方程仍为：
$$
(\Box+m^2)\phi=0 \quad (\Box+m^2)\phi^{\dagger}=0
$$
暂时把两个场放在不同点并在最后取重合极限，或者在正规序内部使用乘积法则，可以重复经典计算：
$$
\partial_\mu:j^\mu:=\mathrm{i}:[\phi^{\dagger}\Box\phi-(\Box\phi^{\dagger})\phi]:
$$
代入算符 Klein–Gordon 方程：
$$
\partial_\mu:j^\mu:=\mathrm{i}:[-m^2\phi^{\dagger}\phi+m^2\phi^{\dagger}\phi]:=0
$$
因此自由量子理论中的正规序流仍满足算符连续性方程。
相应的无量纲荷算符定义为：
$$
Q=\int:j^0(t,\bm{x}):\dd[3]{x}
$$
若每个粒子的物理电荷单位为 $q$，则电荷流和物理电荷算符为：
$$
J^\mu=q:j^\mu: \quad Q_{\text{el}}=qQ
$$
下面先计算无量纲 $Q$，最后只需乘上 $q$。


复场的两个正则动量是：
$$
\pi=\dot{\phi}^{\dagger} \quad \pi^{\dagger}=\dot{\phi}
$$
因此荷密度也可以写成：
$$
:j^0:=\mathrm{i}:[\phi^{\dagger}\pi^{\dagger}-\pi\phi]:
$$
基本等时对易关系为：
$$
[\phi(t,\bm{x}),\pi(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
以及：
$$
[\phi^{\dagger}(t,\bm{x}),\pi^{\dagger}(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
所有不配对的基本等时对易子都为零。
这再次说明 $\phi$ 与 $\pi=\pdv*{\phi^{\dagger}}{t}$ 是一对正则变量，$\phi^{\dagger}$ 与 $\pi^{\dagger}=\pdv*{\phi}{t}$ 是另一对。

---
## 把模展开完整代入电荷算符


为了避免在中间步骤反复处理 $\delta^{(3)}(\bm{0})$，先把系统放进体积为 $V=L^3$ 的周期盒中。
允许动量离散为 $\bm{k}=2\pi\bm{n}/L$，其中 $\bm{n}\in\mathbb{Z}^3$。
定义正频率平面波：
$$
u_{\bm{k}}(x)=\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}t+\mathrm{i}\bm{k}\cdot\bm{x}} \quad \omega_{\bm{k}}=\sqrt{\bm{k}^2+m^2}
$$
它的复共轭是 $u_{\bm{k}}^*(x)$。
复标量场及其厄米共轭场展开为：
$$
\phi(x)=\sum_{\bm{k}}\frac{1}{\sqrt{2V\omega_{\bm{k}}}}[\hat{a}_{\bm{k}}u_{\bm{k}}(x)+\hat{b}_{\bm{k}}^{\dagger}u_{\bm{k}}^*(x)]
$$
以及：
$$
\phi^{\dagger}(x)=\sum_{\bm{k}}\frac{1}{\sqrt{2V\omega_{\bm{k}}}}[\hat{a}_{\bm{k}}^{\dagger}u_{\bm{k}}^*(x)+\hat{b}_{\bm{k}}u_{\bm{k}}(x)]
$$
$\hat{a}$ 与 $\hat{b}$ 是彼此独立的两套模算符：
$$
[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}} \quad [\hat{b}_{\bm{k}},\hat{b}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}
$$
所有 $a$ 类与 $b$ 类算符之间的交叉对易子均为零。


平面波的时间导数为：
$$
\dot{u}_{\bm{k}}=-\mathrm{i}\omega_{\bm{k}}u_{\bm{k}} \quad \dot{u}_{\bm{k}}^*=\mathrm{i}\omega_{\bm{k}}u_{\bm{k}}^*
$$
所以：
$$
\dot{\phi}=\sum_{\bm{k}}\sqrt{\frac{\omega_{\bm{k}}}{2V}}[-\mathrm{i}\hat{a}_{\bm{k}}u_{\bm{k}}+\mathrm{i}\hat{b}_{\bm{k}}^{\dagger}u_{\bm{k}}^*]
$$
以及：
$$
\dot{\phi}^{\dagger}=\sum_{\bm{k}}\sqrt{\frac{\omega_{\bm{k}}}{2V}}[\mathrm{i}\hat{a}_{\bm{k}}^{\dagger}u_{\bm{k}}^*-\mathrm{i}\hat{b}_{\bm{k}}u_{\bm{k}}]
$$
为了完整展示算符排序产生的常数，先不加正规序，考察形式荷：
$$
Q_{\text{形式}}=\mathrm{i}\int[\phi^{\dagger}\dot{\phi}-\dot{\phi}^{\dagger}\phi]\dd[3]{x}
$$
记 $f_{\bm{k}}=1/\sqrt{2V\omega_{\bm{k}}}$。
第一个乘积的 $a$ 类对角部分为：
$$
\phi^{\dagger}\dot{\phi}\supset-\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{p}}\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{p}}u_{\bm{k}}^*u_{\bm{p}}
$$
它的 $b$ 类对角部分为：
$$
\phi^{\dagger}\dot{\phi}\supset\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{p}}\hat{b}_{\bm{k}}\hat{b}_{\bm{p}}^{\dagger}u_{\bm{k}}u_{\bm{p}}^*
$$
它的产生算符交叉部分为：
$$
\phi^{\dagger}\dot{\phi}\supset\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{p}}\hat{a}_{\bm{k}}^{\dagger}\hat{b}_{\bm{p}}^{\dagger}u_{\bm{k}}^*u_{\bm{p}}^*
$$
它的湮灭算符交叉部分为：
$$
\phi^{\dagger}\dot{\phi}\supset-\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{p}}\hat{b}_{\bm{k}}\hat{a}_{\bm{p}}u_{\bm{k}}u_{\bm{p}}
$$
第二个乘积的 $a$ 类对角部分为：
$$
\dot{\phi}^{\dagger}\phi\supset\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{p}}u_{\bm{k}}^*u_{\bm{p}}
$$
它的 $b$ 类对角部分为：
$$
\dot{\phi}^{\dagger}\phi\supset-\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{k}}\hat{b}_{\bm{k}}\hat{b}_{\bm{p}}^{\dagger}u_{\bm{k}}u_{\bm{p}}^*
$$
它的产生算符交叉部分为：
$$
\dot{\phi}^{\dagger}\phi\supset\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}\hat{b}_{\bm{p}}^{\dagger}u_{\bm{k}}^*u_{\bm{p}}^*
$$
它的湮灭算符交叉部分为：
$$
\dot{\phi}^{\dagger}\phi\supset-\mathrm{i}\sum_{\bm{k},\bm{p}}f_{\bm{k}}f_{\bm{p}}\omega_{\bm{k}}\hat{b}_{\bm{k}}\hat{a}_{\bm{p}}u_{\bm{k}}u_{\bm{p}}
$$
这四组项就是完整展开，没有省略任何算符组合。


周期盒中的空间正交关系为：
$$
\int_V\mathrm{e}^{\mathrm{i}(\bm{p}-\bm{k})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{k}\bm{p}}
$$
以及：
$$
\int_V\mathrm{e}^{\mathrm{i}(\bm{p}+\bm{k})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{p},-\bm{k}}
$$
对角项由第一条关系选出 $\bm{p}=\bm{k}$。
以 $a$ 类项为例，$Q_{\text{形式}}$ 外面的 $\mathrm{i}$ 与两个乘积之差共同给出系数：
$$
\mathrm{i}[-\mathrm{i}(\omega_{\bm{p}}+\omega_{\bm{k}})]f_{\bm{k}}f_{\bm{p}}V\delta_{\bm{k}\bm{p}}=1
$$
因为在 $\bm{p}=\bm{k}$ 时有 $2\omega_{\bm{k}}f_{\bm{k}}^2V=1$。
所以 $a$ 类对角项给出：
$$
\sum_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}
$$
同样计算 $b$ 类对角项，外部的 $\mathrm{i}$ 给出相反符号：
$$
-\sum_{\bm{k}}\hat{b}_{\bm{k}}\hat{b}_{\bm{k}}^{\dagger}
$$
交叉项由第二条正交关系选出 $\bm{p}=-\bm{k}$。
$\hat{a}^{\dagger}\hat{b}^{\dagger}$ 项在两个乘积相减后的频率系数为：
$$
\omega_{\bm{p}}-\omega_{\bm{k}}
$$
$\hat{b}\hat{a}$ 项的系数只相差一个整体符号，也正比于同一个频率差。
但是相对论色散关系只依赖 $\bm{k}^2$，所以：
$$
\omega_{-\bm{k}}=\omega_{\bm{k}}
$$
在 $\bm{p}=-\bm{k}$ 条件下，两类交叉项的系数都为零。
因此它们不是被随意丢掉的，而是被空间正交关系和偶对称色散关系共同消去的。


把所有剩余项合在一起：
$$
Q_{\text{形式}}=\sum_{\bm{k}}(\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}-\hat{b}_{\bm{k}}\hat{b}_{\bm{k}}^{\dagger})
$$
利用 $[\hat{b}_{\bm{k}},\hat{b}_{\bm{k}}^{\dagger}]=\mathbb{1}$ 改换第二项的次序：
$$
Q_{\text{形式}}=\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}-\hat{N}_{b,\bm{k}}-\mathbb{1})
$$
最后的 $-\mathbb{1}$ 对每个动量模都出现一次，在无限模极限中成为发散的真空常数。
它来自同点复合算符的排序，不影响 $Q$ 与任何场或模算符的对易关系，但会给真空赋予无穷电荷，并破坏粒子与反粒子交换时电荷反号的对称形式。
要求真空为中性并对自由流作正规序，得到物理荷算符：
$$
Q=\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}-\hat{N}_{b,\bm{k}})
$$
也可以在量子化时先把经典乘积作厄米对称化：
$$
Q_{\text{对称}}=\frac{\mathrm{i}}{2}\int[\phi^{\dagger}\dot{\phi}+\dot{\phi}\phi^{\dagger}-\dot{\phi}^{\dagger}\phi-\phi\dot{\phi}^{\dagger}]\dd[3]{x}
$$
前一种排序给每个模贡献 $-\mathbb{1}$，与它相反的排序给每个模贡献 $+\mathbb{1}$，对称平均后两个真空常数相消。
所以对称排序与正规序在这个自由荷算符上得到同一结果。
这也说明真正固定物理内容的是生成元对场的作用和真空中性的选择，而不是未经规定的同点乘积。
物理电荷算符因此为：
$$
Q_{\text{el}}=q\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}-\hat{N}_{b,\bm{k}})
$$
连续极限只需把离散求和及克罗内克符号换成连续归一化：
$$
Q_{\text{el}}=q\int[\hat{a}^{\dagger}(\bm{k})\hat{a}(\bm{k})-\hat{b}^{\dagger}(\bm{k})\hat{b}(\bm{k})]\dd[3]{k}
$$

---
## 电荷本征值怎样识别粒子与反粒子


电荷算符中 $a$ 类占据数带正号，$b$ 类占据数带负号。
先不要只凭公式命名它们，而是直接计算生成一个激发以后电荷怎样改变。
占据数算符的基本对易关系为：
$$
[\hat{N}_{a,\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}\hat{a}_{\bm{p}}^{\dagger}
$$
证明只需展开对易子的乘积法则：
$$
[\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\hat{a}_{\bm{k}}^{\dagger}[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]+[\hat{a}_{\bm{k}}^{\dagger},\hat{a}_{\bm{p}}^{\dagger}]\hat{a}_{\bm{k}}
$$
第二项为零，第一项就是上式。
对 $b$ 类算符有完全平行的结果：
$$
[\hat{N}_{b,\bm{k}},\hat{b}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}\hat{b}_{\bm{p}}^{\dagger}
$$
两套算符之间的交叉对易子为零，因而物理电荷算符满足：
$$
[Q_{\text{el}},\hat{a}_{\bm{p}}^{\dagger}]=q\hat{a}_{\bm{p}}^{\dagger} \quad [Q_{\text{el}},\hat{b}_{\bm{p}}^{\dagger}]=-q\hat{b}_{\bm{p}}^{\dagger}
$$
对湮灭算符则有：
$$
[Q_{\text{el}},\hat{a}_{\bm{p}}]=-q\hat{a}_{\bm{p}} \quad [Q_{\text{el}},\hat{b}_{\bm{p}}]=q\hat{b}_{\bm{p}}
$$
这四个关系给出最直接的物理含义：$\hat{a}^{\dagger}$ 使系统总电荷增加 $q$，$\hat{b}^{\dagger}$ 使系统总电荷减少 $q$。
因此把 $a$ 类激发称为粒子，把 $b$ 类激发称为相应的反粒子。


正规序保证真空满足：
$$
Q_{\text{el}}\ket{0}=0
$$
定义归一化的一粒子态和一反粒子态：
$$
\ket{\bm{p};a}=\hat{a}_{\bm{p}}^{\dagger}\ket{0} \quad \ket{\bm{p};b}=\hat{b}_{\bm{p}}^{\dagger}\ket{0}
$$
把 $Q_{\text{el}}$ 移过产生算符：
$$
Q_{\text{el}}\ket{\bm{p};a}=\hat{a}_{\bm{p}}^{\dagger}Q_{\text{el}}\ket{0}+[Q_{\text{el}},\hat{a}_{\bm{p}}^{\dagger}]\ket{0}=q\ket{\bm{p};a}
$$
同理：
$$
Q_{\text{el}}\ket{\bm{p};b}=-q\ket{\bm{p};b}
$$
所以两种一粒子态都是电荷本征态，本征值大小相同而符号相反。
“反粒子带相反电荷”在这里不是额外假设，而是整体 $U(1)$ 对称性、正则量子化和福克空间代数的共同结论。


在表示语言中，粒子一态空间承载 $U(1)$ 的电荷 $q$ 表示，反粒子一态空间承载它的复共轭表示，也就是电荷 $-q$ 表示。
经典复场的一根复数纤维同时允许复共轭，量子化以后这两个共轭表示分别由 $\hat{a}^\dagger$ 与 $\hat{b}^\dagger$ 产生。
因此反粒子不是在时空另一根神秘纤维中的对象，而是内部对称群在单粒子希尔伯特空间上的共轭表示扇区。


对一般占据数基矢，先定义两套归一化产生算符串：
$$
\hat{\mathcal{A}}^{\dagger}=\prod_{\bm{k}}\frac{(\hat{a}_{\bm{k}}^{\dagger})^{n_{a,\bm{k}}}}{\sqrt{n_{a,\bm{k}}!}}
$$
以及：
$$
\hat{\mathcal{B}}^{\dagger}=\prod_{\bm{k}}\frac{(\hat{b}_{\bm{k}}^{\dagger})^{n_{b,\bm{k}}}}{\sqrt{n_{b,\bm{k}}!}}
$$
相应的占据数基矢为：
$$
\ket{\{n_{a,\bm{k}}\},\{n_{b,\bm{k}}\}}=\hat{\mathcal{A}}^{\dagger}\hat{\mathcal{B}}^{\dagger}\ket{0}
$$
电荷算符的作用为：
$$
Q_{\text{el}}\ket{\{n_a\},\{n_b\}}=q\sum_{\bm{k}}(n_{a,\bm{k}}-n_{b,\bm{k}})\ket{\{n_a\},\{n_b\}}
$$
总激发数则为：
$$
\hat{N}_{\text{exc}}=\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}+\hat{N}_{b,\bm{k}})
$$
电荷取两类占据数之差，总激发数取两类占据数之和，二者不能混为一谈。
在自由理论中二者都守恒。
在保持整体 $U(1)$ 对称性的相互作用理论中，$Q_{\text{el}}$ 仍然守恒，但总激发数一般不必守恒。


这一点也可以从自由哈密顿量直接检查。
去掉真空常数后：
$$
H=\sum_{\bm{k}}\omega_{\bm{k}}(\hat{N}_{a,\bm{k}}+\hat{N}_{b,\bm{k}})
$$
不同模和不同种类的占据数算符彼此对易，所以：
$$
[H,Q_{\text{el}}]=0
$$
海森堡方程于是给出 $\dv*{Q_{\text{el}}}{t}=\mathrm{i}[H,Q_{\text{el}}]=0$。
这是量子算符语言中“对称性生成元与时间演化相容”的精确表达。


现在验证 $Q$ 确实生成有限相位旋转。
由四个模算符对易关系可得：
$$
[Q,\phi(x)]=-\phi(x) \quad [Q,\phi^{\dagger}(x)]=\phi^{\dagger}(x)
$$
第一式可以直接从模展开逐项验证：
$$
[Q,\phi(x)]=\sum_{\bm{k}}\frac{[Q,\hat{a}_{\bm{k}}]u_{\bm{k}}+[Q,\hat{b}_{\bm{k}}^{\dagger}]u_{\bm{k}}^*}{\sqrt{2V\omega_{\bm{k}}}}
$$
由于 $[Q,\hat{a}_{\bm{k}}]=-\hat{a}_{\bm{k}}$ 且 $[Q,\hat{b}_{\bm{k}}^{\dagger}]=-\hat{b}_{\bm{k}}^{\dagger}$，上式变成：
$$
[Q,\phi(x)]=-\sum_{\bm{k}}\frac{\hat{a}_{\bm{k}}u_{\bm{k}}+\hat{b}_{\bm{k}}^{\dagger}u_{\bm{k}}^*}{\sqrt{2V\omega_{\bm{k}}}}=-\phi(x)
$$
对 $\phi^{\dagger}$ 的计算完全平行，其中 $\hat{a}^{\dagger}$ 与 $\hat{b}$ 都给出正号。
这里 $Q=Q_{\text{el}}/q$ 是无量纲生成元。
定义幺正算符：
$$
U(\alpha)=\mathrm{e}^{\mathrm{i}\alpha Q}
$$
使用算符共轭展开公式：
$$
U(\alpha)\phi U(\alpha)^{-1}=\phi+\mathrm{i}\alpha[Q,\phi]+\frac{(\mathrm{i}\alpha)^2}{2!}[Q,[Q,\phi]]+\cdots
$$
因为每次与 $Q$ 对易都再产生一个负号，级数恰好求和为：
$$
U(\alpha)\phi U(\alpha)^{-1}=\mathrm{e}^{-\mathrm{i}\alpha}\phi
$$
同理：
$$
U(\alpha)\phi^{\dagger}U(\alpha)^{-1}=\mathrm{e}^{\mathrm{i}\alpha}\phi^{\dagger}
$$
这与上一篇从拉格朗日量出发规定的整体 $U(1)$ 变换完全一致。
至此，作用量对称性、诺特流、经典泊松生成元、量子电荷算符和福克空间电荷本征值全部闭合成同一条逻辑链。


场与产生算符的电荷符号看起来相反，但没有矛盾。
$\phi$ 的展开含有 $\hat{a}$ 和 $\hat{b}^{\dagger}$。
前者湮灭一个电荷为 $+q$ 的粒子，后者产生一个电荷为 $-q$ 的反粒子，两种作用都会使态的总电荷减少 $q$。
因此 $[Q_{\text{el}},\phi]=-q\phi$。
相反，$\phi^{\dagger}$ 含有 $\hat{a}^{\dagger}$ 和 $\hat{b}$，两种作用都会使总电荷增加 $q$。


电荷流不能重新解释成通常意义下的位置概率流。
首先，$j^0$ 的空间积分在多粒子态上给出带符号的总电荷数，可以是 $2$、$-3$ 或其他本征值，而总概率必须等于 $1$。
其次，即使只考虑正频率 Klein–Gordon 波的叠加，$j^0$ 也不保证逐点非负。
取两个正频率平面波的叠加：
$$
\psi=A u_1+B u_2
$$
它的时间分量为：
$$
j^0=2\omega_1|A|^2+2\omega_2|B|^2+2(\omega_1+\omega_2)\operatorname{Re}(A^*B u_1^*u_2)
$$
在某个时空点可以让干涉项取负号。
若 $\omega_1\neq\omega_2$，这个二次型不是正定的，因为相应矩阵的行列式为：
$$
4\omega_1\omega_2-(\omega_1+\omega_2)^2=-(\omega_1-\omega_2)^2<0
$$
所以 Klein–Gordon 流不具备概率密度必须满足的正定性。
在量子场论中，概率来自福克空间态的正定内积和玻恩规则，$j^0$ 则正确地解释为可以有正负号的局域荷密度算符。


最后考虑实标量场。
若 $\phi=\phi^{\dagger}$，只有相位 $0$ 与 $\pi$ 保持场的实性，因而非平凡的连续 $U(1)$ 旋转已经不存在。
在经典层面或正规序定义下，把同一个实场代入复场流的形式会得到零：
$$
:j^\mu:=\mathrm{i}:[\phi\partial^\mu\phi-(\partial^\mu\phi)\phi]:=0
$$
不能在未规定排序时直接把同点算符乘积当作普通数交换，这里的零是不存在相应连续生成方向的物理结论。
实场的两套模算符合并为一套，不再存在可由 $Q$ 区分的粒子与反粒子部门。
它的量子在这一内部荷下为中性，并且与自己的反粒子相同。
反过来却要谨慎：“电中性”本身不总能推出“是自己的反粒子”，因为一个复场可以令电荷单位 $q=0$，同时仍携带另一种整体内部对称性的守恒荷。
真正决定粒子是否与反粒子相同的是场的共轭表示和全部内部量子数，而不只是电荷表中的某一个数值。


若引入电荷共轭算符 $C$，它交换两类模算符并把复场变为其厄米共轭：
$$
C\hat{a}_{\bm{k}}C^{-1}=\hat{b}_{\bm{k}} \quad C\hat{b}_{\bm{k}}C^{-1}=\hat{a}_{\bm{k}} \quad C\phi(x)C^{-1}=\phi^{\dagger}(x)
$$
因此：
$$
CQ_{\text{el}}C^{-1}=-Q_{\text{el}}
$$
这用算符语言概括了反粒子的核心性质：质量、能量和自旋等时空量子数与相应粒子相同，所有被电荷共轭反转的内部荷则取相反符号。
