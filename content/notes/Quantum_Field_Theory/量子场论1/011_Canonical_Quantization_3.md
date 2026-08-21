---
title: "自由标量场的正则量子化（三）：福克空间与多粒子态"
date: 2026-08-17
weight: 11
---

前两篇建立了场的对易关系，并把自由哈密顿量化成无穷多个独立模的占据数之和。
现在要建立这些算符所作用的量子态空间。
这个空间必须能同时容纳零粒子、一粒子、两粒子以及任意粒子数的态，而不是固定粒子数的单粒子希尔伯特空间。
本篇从单个振子的阶梯代数出发，逐步构造占据数基底、玻色福克空间和归一化波包。

---
## 从一个模的阶梯代数到占据数基底


先固定一个动量模，暂时省略下标 $\bm{k}$。
模算符满足：
$$
[\hat{a},\hat{a}^{\dagger}]=\mathbb{1} \quad \hat{N}=\hat{a}^{\dagger}\hat{a}
$$
由上一篇的对易关系：
$$
[\hat{N},\hat{a}^{\dagger}]=\hat{a}^{\dagger} \quad [\hat{N},\hat{a}]=-\hat{a}
$$
假设 $\ket{n}$ 是 $\hat{N}$ 的归一化本征态：
$$
\hat{N}\ket{n}=n\ket{n}
$$
让 $\hat{N}$ 作用在 $\hat{a}^{\dagger}\ket{n}$ 上，并用 $AB=BA+[A,B]$ 移动算符：
$$
\hat{N}\hat{a}^{\dagger}\ket{n}=\hat{a}^{\dagger}\hat{N}\ket{n}+[\hat{N},\hat{a}^{\dagger}]\ket{n}=(n+1)\hat{a}^{\dagger}\ket{n}
$$
所以只要 $\hat{a}^{\dagger}\ket{n}$ 不为零，它就是本征值 $n+1$ 的态。
同理：
$$
\hat{N}\hat{a}\ket{n}=(n-1)\hat{a}\ket{n}
$$
这就证明了产生和湮灭算符把占据数改变 $1$。


占据数不能是负数。
因为：
$$
n=\expval{\hat{N}}_n=\expval{\hat{a}^{\dagger}\hat{a}}_n=\|\hat{a}\ket{n}\|^2\geq0
$$
如果不断作用 $\hat{a}$，本征值每次降低 $1$。
由于它不能无限降到负数，阶梯必须在某个最低态终止。
这一点可以用范数写得更明确：
$$
\|(\hat{a})^r\ket{n}\|^2=n(n-1)(n-2)\cdots(n-r+1)
$$
如果 $n$ 不是整数，总能选到某个 $r$ 使上式第一次出现一个负因子，这会导致范数平方为负数的矛盾。
所以降阶必须在某个非负整数处终止。
设该态的本征值为 $n_0$，则 $\hat{a}\ket{n_0}=0$，所以：
$$
n_0=\|\hat{a}\ket{n_0}\|^2=0
$$
因此所有本征值都是从 $0$ 开始逐次加 $1$ 得到的非负整数。


下一步确定阶梯系数。
先计算产生后态的范数：
$$
\|\hat{a}^{\dagger}\ket{n}\|^2=\expval{\hat{a}\hat{a}^{\dagger}}_n=\expval{\hat{N}+\mathbb{1}}_n=n+1
$$
选择基矢的相位后可以写成：
$$
\hat{a}^{\dagger}\ket{n}=\sqrt{n+1}\ket{n+1}
$$
同理：
$$
\|\hat{a}\ket{n}\|^2=\expval{\hat{a}^{\dagger}\hat{a}}_n=n
$$
所以：
$$
\hat{a}\ket{n}=\sqrt{n}\ket{n-1}
$$
从真空开始反复作用产生算符：
$$
(\hat{a}^{\dagger})^n\ket{0}=\sqrt{n!}\ket{n}
$$
因而归一化占据数态为：
$$
\ket{n}=\frac{(\hat{a}^{\dagger})^n}{\sqrt{n!}}\ket{0}
$$
阶梯系数中的平方根和 $n!$ 都不是额外规定，而是对易关系与态归一化的必然结果。


现在恢复动量标记。
不同模的算符相互对易，因而可以同时对角化所有 $\hat{N}_{\bm{k}}$。
一个基矢由每个模的占据数集合 $\{n_{\bm{k}}\}$ 标记：
$$
\ket{\{n_{\bm{k}}\}}=\prod_{\bm{k}}\frac{(\hat{a}_{\bm{k}}^{\dagger})^{n_{\bm{k}}}}{\sqrt{n_{\bm{k}}!}}\ket{0}
$$
在有限粒子态中，只有有限多个 $n_{\bm{k}}$ 不为零，所以上面的无穷乘积实际上只有有限多个非平凡因子。
这些基矢满足：
$$
\hat{N}_{\bm{p}}\ket{\{n_{\bm{k}}\}}=n_{\bm{p}}\ket{\{n_{\bm{k}}\}}
$$
也是正规序哈密顿量和总动量的共同本征态：
$$
:H:\ket{\{n_{\bm{k}}\}}=\left(\sum_{\bm{k}}\omega_{\bm{k}}n_{\bm{k}}\right)\ket{\{n_{\bm{k}}\}}
$$
以及：
$$
\bm{P}\ket{\{n_{\bm{k}}\}}=\left(\sum_{\bm{k}}\bm{k}n_{\bm{k}}\right)\ket{\{n_{\bm{k}}\}}
$$
这说明自由场的总能量和总动量就是每个量子激发的能量和动量之和。

---
## 福克空间的数学对象与玻色对称性


一粒子希尔伯特空间记为 $\mathcal{H}_1$。
它包含所有归一化的一粒子波包，以及它们按范数极限得到的态。
两个可分辨粒子的态空间是张量积 $\mathcal{H}_1\otimes\mathcal{H}_1$。
直观地说，$\ket{f}\otimes\ket{g}$ 同时记录第一个粒子处于 $\ket{f}$，第二个粒子处于 $\ket{g}$。


全同玻色粒子没有可以观测的“第一颗”和“第二颗”标签。
交换两颗粒子后量子态不变，所以两粒子空间只取张量积中的对称部分：
$$
\ket{f,g}_{\text{s}}=\frac{1}{\sqrt{2}}(\ket{f}\otimes\ket{g}+\ket{g}\otimes\ket{f})
$$
当 $\ket{f}$ 与 $\ket{g}$ 正交时，前面的 $1/\sqrt{2}$ 使该态归一化。
如果两态分别归一化但不正交，正确的归一化因子为 $1/\sqrt{2[1+|\braket{f}{g}|^2]}$。
当两个单粒子态相同时，应直接使用归一化的占据数态，而不能机械套用这个正交态公式。


$n$ 粒子玻色空间记为 $\operatorname{Sym}^n\mathcal{H}_1$，表示 $n$ 重张量积中对任意粒子交换都不变的子空间。
玻色福克空间定义为：
$$
\mathcal{F}_{\text{s}}(\mathcal{H}_1)=\mathbb{C}\ket{0}\oplus\mathcal{H}_1\oplus\operatorname{Sym}^2\mathcal{H}_1\oplus\operatorname{Sym}^3\mathcal{H}_1\oplus\cdots
$$
$\mathbb{C}\ket{0}$ 是一维的零粒子子空间。
$\oplus$ 称为直和，表示一个一般态可以同时有零粒子、一粒子、两粒子等不同粒子数成分。
不同粒子数子空间彼此正交。
对一般福克空间态 $\ket{\Psi}=\ket{\psi_0}\oplus\ket{\psi_1}\oplus\ket{\psi_2}\oplus\cdots$，范数为：
$$
\|\Psi\|^2=\|\psi_0\|^2+\|\psi_1\|^2+\|\psi_2\|^2+\cdots
$$
福克空间要求这个和有限。


第二量子化这个历史名称容易产生误解。
它不是对已有量子理论再量子化一次。
它的实质是从固定粒子数的单粒子描述，转到粒子数可变的福克空间描述。
场算符中的产生和湮灭部分在相邻粒子数子空间之间建立映射。


具体地说，给定一粒子向量 $f\in\mathcal{H}_1$，产生算符把第 $n$ 个对称张量幂送入第 $n+1$ 个对称张量幂，湮灭算符则作反方向的收缩。
这说明量子场不是经典场丛中新添的一根纤维，而是作用在整个福克空间上的算符值分布；经典场值空间与量子态空间属于不同数学层次。


玻色对称性直接来自产生算符相互对易：
$$
\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{p}}^{\dagger}\ket{0}=\hat{a}_{\bm{p}}^{\dagger}\hat{a}_{\bm{k}}^{\dagger}\ket{0}
$$
交换两个动量标签不改变态，这就是玻色统计。
同一模上可以反复作用 $\hat{a}_{\bm{k}}^{\dagger}$，所以一个单粒子态可以被任意多个玻色粒子占据。


不能只根据“标量场的哈密顿量在某种反对易约定下不正常”就宣称证明了完整的自旋统计定理。
完整定理还使用洛伦兹协变性、正能谱、局域性与正定度等基本条件。
在这些条件下，整数自旋场使用对易关系并产生玻色统计，半整数自旋场使用反对易关系并产生费米统计。
本章的计算是自旋为零情形的具体实现，而不是一般定理的全部证明。

---
## 动量本征态、波包与场算符的粒子解释


在周期盒中，一粒子动量本征态定义为：
$$
\ket{\bm{k}}=\hat{a}_{\bm{k}}^{\dagger}\ket{0}
$$
它的内积为：
$$
\braket{\bm{k}}{\bm{p}}=\expval{\hat{a}_{\bm{k}}\hat{a}_{\bm{p}}^{\dagger}}_0=\delta_{\bm{k}\bm{p}}
$$
第二步使用 $\hat{a}_{\bm{k}}\hat{a}_{\bm{p}}^{\dagger}=\delta_{\bm{k}\bm{p}}\mathbb{1}+\hat{a}_{\bm{p}}^{\dagger}\hat{a}_{\bm{k}}$，而第二项作用在真空上为零。


在连续动量空间中，对应态 $\ket{\bm{k}}=\hat{a}^{\dagger}(\bm{k})\ket{0}$ 满足：
$$
\braket{\bm{k}}{\bm{p}}=\delta^{(3)}(\bm{k}-\bm{p})
$$
这是狄拉克 $\delta$ 分布归一化，不是范数为 $1$ 的希尔伯特空间向量。
如果令 $\bm{p}=\bm{k}$，形式上会出现 $\delta^{(3)}(0)$。
它表示精确动量本征态在整个空间完全延展，因而不是可归一化波包。
有些教材为了让洛伦兹协变性更明显，定义重标定态：
$$
\ket{\bm{k};\text{cov}}=\sqrt{2\omega_{\bm{k}}(2\pi)^3}\ket{\bm{k}}
$$
那么内积和一粒子子空间的完备性关系分别为：
$$
\braket{\bm{k};\text{cov}}{\bm{p};\text{cov}}=2\omega_{\bm{k}}(2\pi)^3\delta^{(3)}(\bm{k}-\bm{p})
$$
以及：
$$
\mathbb{1}_1=\int\ketbra{\bm{k};\text{cov}}{\bm{k};\text{cov}}\frac{\dd[3]{k}}{(2\pi)^3 2\omega_{\bm{k}}}
$$
这与前面采用的狄拉克 $\delta$ 分布归一化完全等价。
区别只是把 $2\omega(2\pi)^3$ 放在态的定义中，还是放在积分测度和内积中。


给定平方可积函数 $f(\bm{k})$，定义波包产生算符：
$$
\hat{a}^{\dagger}(f)=\int f(\bm{k})\hat{a}^{\dagger}(\bm{k})\dd[3]{k}
$$
它的厄米共轭算符必须把系数取复共轭：
$$
\hat{a}(f)=\int f^*(\bm{k})\hat{a}(\bm{k})\dd[3]{k}
$$
两个波包算符的对易子为：
$$
[\hat{a}(f),\hat{a}^{\dagger}(g)]=\int f^*(\bm{k})g(\bm{k})\dd[3]{k}=\langle f,g\rangle_{\mathcal{H}_1}
$$
因此波包态 $\ket{f}=\hat{a}^{\dagger}(f)\ket{0}$ 的范数为：
$$
\braket{f}{f}=\int|f(\bm{k})|^2\dd[3]{k}
$$
当右边等于 $1$ 时，$\ket{f}$ 是归一化的一粒子态。


湮灭一个指定波包时必须使用与它匹配的 $\hat{a}(f)$。
如果 $f$ 已归一化：
$$
\hat{a}(f)\ket{f}=\hat{a}(f)\hat{a}^{\dagger}(f)\ket{0}=\ket{0}
$$
这里使用了 $\hat{a}(f)\ket{0}=0$ 和 $[\hat{a}(f),\hat{a}^{\dagger}(f)]=\mathbb{1}$。
不存在一个与波包形状无关的“把任意一粒子态都变成真空”的简单总和 $\sum_{\bm{k}}\hat{a}_{\bm{k}}$。
对一般态 $\ket{f}$，系数的复共轭 $f^*(\bm{k})$ 是投影到该单粒子波包所必需的。


这里也可以澄清一组旧术语。
普通复数或与所有算符对易的标量常被称为 $c$ 数，不对易的量子算符则曾被称为 $q$ 数。
现代语言直接说“数”和“算符”更清楚。
占据数算符 $\hat{N}$ 是算符，但它的本征值 $n$ 仍是普通数，不应把本征值叫作不对易的量。


最后回到局域场算符。
实标量场作用在真空上时，湮灭部分消失：
$$
\phi(x)\ket{0}=\int\frac{\mathrm{e}^{\mathrm{i}kx}\hat{a}^{\dagger}(\bm{k})\ket{0}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\dd[3]{k}
$$
它形式上是一粒子动量本征态的叠加。
但系数的范数包含发散积分 $\int[1/(2\omega_{\bm{k}})]\dd[3]{k}$，所以 $\phi(x)\ket{0}$ 不是福克空间中归一化的普通态。
这再次体现 $\phi(x)$ 是算符值分布。


选择测试函数 $h(\bm{x})$ 并在固定时刻涂抹：
$$
\phi(h)=\int h(\bm{x})\phi(t,\bm{x})\dd[3]{x}
$$
则 $\phi(h)\ket{0}$ 的动量波包由 $h$ 的傅里叶变换给出。
当 $h$ 取 Schwartz 测试函数，即它与任意阶导数都快速衰减时，其傅里叶变换也属于 Schwartz 空间，所以得到有限范数的波包态。
因此“场算符在点 $x$ 产生一个粒子”只是有用的形式简写。
严格的说法是：场的产生部分在真空上生成一粒子成分，而真正的可归一化态需要用空间或时空测试函数对场做涂抹。


对复标量场，结论略有不同。
$a$ 类粒子和 $b$ 类反粒子各自生成一个玻色福克空间，完整态空间是两者的张量积：
$$
\mathcal{F}_{\text{complex}}=\mathcal{F}_{\text{s}}(\mathcal{H}_a)\otimes\mathcal{F}_{\text{s}}(\mathcal{H}_b)
$$
先定义两类归一化的产生算符串：
$$
\hat{\mathcal{A}}^{\dagger}[\{n_a\}]=\prod_{\bm{k}}\frac{(\hat{a}_{\bm{k}}^{\dagger})^{n_{a,\bm{k}}}}{\sqrt{n_{a,\bm{k}}!}}
$$
以及：
$$
\hat{\mathcal{B}}^{\dagger}[\{n_b\}]=\prod_{\bm{k}}\frac{(\hat{b}_{\bm{k}}^{\dagger})^{n_{b,\bm{k}}}}{\sqrt{n_{b,\bm{k}}!}}
$$
复标量场的归一化占据数基矢为：
$$
\ket{\{n_{a,\bm{k}}\},\{n_{b,\bm{k}}\}}=\hat{\mathcal{A}}^{\dagger}[\{n_a\}]\hat{\mathcal{B}}^{\dagger}[\{n_b\}]\ket{0}
$$
总激发数把两类占据数相加，而内部 $U(1)$ 荷在选定符号约定后把两者相减：
$$
\hat{N}_{\text{exc}}=\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}+\hat{N}_{b,\bm{k}}) \quad Q=\sum_{\bm{k}}(\hat{N}_{a,\bm{k}}-\hat{N}_{b,\bm{k}})
$$
在自由理论中，总激发数和 $U(1)$ 荷都守恒。
引入保持 $U(1)$ 对称性的相互作用后，粒子与反粒子对可以产生或湮灭，总激发数一般不再守恒，但带符号的 $U(1)$ 荷仍然守恒。
$\phi$ 含有 $\hat{a}$ 和 $\hat{b}^{\dagger}$，因而它湮灭一个 $a$ 类粒子或产生一个 $b$ 类反粒子。
$\phi^{\dagger}$ 含有 $\hat{a}^{\dagger}$ 和 $\hat{b}$，因而它产生一个 $a$ 类粒子或湮灭一个 $b$ 类反粒子。
这正是涉及反粒子时必须区分场与其厄米共轭场的原因。
