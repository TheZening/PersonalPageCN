---
title: "Dirac 场的正则量子化（四）：费米子福克空间、守恒荷与动量"
date: 2026-08-18
weight: 24
---

反对易关系不仅保证哈密顿量具有下界，还决定了多费米子态空间的几何结构。
同一个单粒子态不能重复占据，不同费米子交换次序时多粒子态变号，粒子与反粒子则由守恒荷的相反本征值区分。


本篇先从单个模的代数推出占据数只能为 $0$ 或 $1$，再说明费米子福克空间为什么是单粒子空间外幂的直和，最后从场的诺特流和空间平移推导守恒荷与总动量。

---
## 从单模反对易代数到费米子福克空间


先在有限体积盒中选择一个确定的动量、自旋和粒子种类，把这一整组标签简记为 $a$。
相应模算符满足：
$$
\{\hat{c}_a,\hat{c}_a^\dagger\}=\mathbb{1}
$$
以及：
$$
\{\hat{c}_a,\hat{c}_a\}=0
$$
第二式展开为：
$$
2\hat{c}_a^2=0
$$
因此：
$$
\hat{c}_a^2=0
$$
对它取厄米共轭还得到：
$$
(\hat{c}_a^\dagger)^2=0
$$
定义这个模的计数算符：
$$
\hat{N}_a=\hat{c}_a^\dagger\hat{c}_a
$$
计算它的平方：
$$
\hat{N}_a^2=\hat{c}_a^\dagger\hat{c}_a\hat{c}_a^\dagger\hat{c}_a
$$
使用 $\hat{c}_a\hat{c}_a^\dagger=\mathbb{1}-\hat{c}_a^\dagger\hat{c}_a$：
$$
\hat{N}_a^2=\hat{c}_a^\dagger(\mathbb{1}-\hat{c}_a^\dagger\hat{c}_a)\hat{c}_a
$$
含 $(\hat{c}_a^\dagger)^2$ 或 $\hat{c}_a^2$ 的部分为零，所以：
$$
\hat{N}_a^2=\hat{c}_a^\dagger\hat{c}_a=\hat{N}_a
$$
满足 $P^2=P$ 的算符称为投影算符。
若 $\ket{n}$ 是 $\hat{N}_a$ 的本征态，满足 $\hat{N}_a\ket{n}=n\ket{n}$，那么：
$$
\hat{N}_a^2\ket{n}=n^2\ket{n}
$$
另一方面，由 $\hat{N}_a^2=\hat{N}_a$ 可得：
$$
\hat{N}_a^2\ket{n}=n\ket{n}
$$
因此本征值必须满足：
$$
n^2=n
$$
它只有 $n=0$ 与 $n=1$ 两个解。
也就是说，一个确定的费米单粒子模只能未占据或占据一次。


定义真空与单粒子态：
$$
\hat{c}_a\ket{0}=0
$$
以及：
$$
\ket{a}=\hat{c}_a^\dagger\ket{0}
$$
产生算符再次作用时：
$$
\hat{c}_a^\dagger\ket{a}=(\hat{c}_a^\dagger)^2\ket{0}=0
$$
这就是泡利不相容原理在算符语言中的直接证明。
它不是另外附加在量子场论上的规则，而是正则反对易代数的代数后果。


对于两个不同模 $a\neq b$，交叉反对易关系为：
$$
\{\hat{c}_a^\dagger,\hat{c}_b^\dagger\}=0
$$
因此：
$$
\hat{c}_a^\dagger\hat{c}_b^\dagger\ket{0}=-\hat{c}_b^\dagger\hat{c}_a^\dagger\ket{0}
$$
交换两个费米子标签会使整个多粒子态变号。
若两个标签趋于完全相同，状态等于自身的负数，只能变成零。


设单粒子希尔伯特空间为 $\mathcal{H}_1$。
两个不可分辨费米子的态不属于普通张量积 $\mathcal{H}_1\otimes\mathcal{H}_1$ 的任意部分，而属于其反对称子空间，记为第二外幂 $\wedge^2\mathcal{H}_1$。
一般的 $n$ 费米子空间为 $\wedge^n\mathcal{H}_1$。


外积满足：
$$
\ket{a}\wedge\ket{b}=-\ket{b}\wedge\ket{a}
$$
特别地：
$$
\ket{a}\wedge\ket{a}=0
$$
费米子福克空间是所有粒子数扇区的直和：
$$
\mathcal{F}_-(\mathcal{H}_1)=\mathbb{C}\ket{0}\oplus\mathcal{H}_1\oplus\wedge^2\mathcal{H}_1\oplus\wedge^3\mathcal{H}_1\oplus\cdots
$$
直和表示一个一般福克态可以同时包含零粒子、一粒子、二粒子等不同粒子数分量，而不同粒子数扇区彼此正交。
下标减号提醒我们使用反对称张量；玻色福克空间则由对称张量幂构成。


外代数把泡利不相容原理直接编码进空间本身：重复楔入同一个一粒子向量自动得到零，交换两个向量自动得到负号。
产生算符就是把一个一粒子向量楔入已有多粒子态，湮灭算符则是与它对偶的收缩运算。
因此费米统计不是在普通张量积空间上额外贴的一条口头限制，而是物理多粒子态空间本身采用了反对称张量结构。


实际书写多费米子态时必须先固定单粒子标签的标准顺序：
$$
\ket{a_1,a_2,\ldots,a_n}=\hat{c}_{a_1}^\dagger\hat{c}_{a_2}^\dagger\cdots\hat{c}_{a_n}^\dagger\ket{0}
$$
改变这个顺序可能改变整体符号。
整体符号本身不改变单个态的物理射线，但在不同量子振幅相加时，相对符号能够产生可观测的费米交换效应。

---
## 从相位对称性得到粒子与反粒子的守恒荷


自由 Dirac 拉格朗日密度在整体相位变换下不变：
$$
\psi(x)\to\mathrm{e}^{-\mathrm{i}\alpha}\psi(x)
$$
同时：
$$
\bar{\psi}(x)\to\bar{\psi}(x)\mathrm{e}^{+\mathrm{i}\alpha}
$$
因为 $\alpha$ 是与时空无关的常数，导数不会产生额外项，$\bar{\psi}\psi$ 和 $\bar{\psi}\gamma^\mu\partial_\mu\psi$ 中的两个相位都互相抵消。


无穷小变换为 $\delta\psi=-\mathrm{i}\alpha\psi$。
由诺特定理得到守恒流：
$$
j^\mu=\bar{\psi}\gamma^\mu\psi
$$
它满足：
$$
\partial_\mu j^\mu=0
$$
相应守恒荷在量子理论中取正规序：
$$
Q=\int:\psi^\dagger(x)\psi(x):\dd[3]{x}
$$
把场展开代入。
$\hat{b}^\dagger\hat{b}$ 项由空间积分令动量相同，并使用 $u_r^\dagger u_s=2E\delta_{rs}$，得到粒子计数项。
$\hat{d}\hat{d}^\dagger$ 项同样给出反粒子部分。


两个交叉项的空间积分要求空间动量相反，但它们分别含 $u_r^\dagger(p)v_s(\widetilde{p})$ 与 $v_r^\dagger(p)u_s(\widetilde{p})$，所以都为零；这里 $\widetilde{p}^\mu=(E_{\bm{p}},-\bm{p})$，只反转空间动量而保持正能量标签。
在正规排序前：
$$
Q_{\text{原}}=\sum_s\int\frac{[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})+\hat{d}_s(\bm{p})\hat{d}_s^\dagger(\bm{p})]}{(2\pi)^3}\dd[3]{p}
$$
对第二项做费米正规排序会产生负号：
$$
:\hat{d}_s\hat{d}_s^\dagger:=-\hat{d}_s^\dagger\hat{d}_s
$$
因此守恒荷为：
$$
Q=\sum_s\int\frac{[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})-\hat{d}_s^\dagger(\bm{p})\hat{d}_s(\bm{p})]}{(2\pi)^3}\dd[3]{p}
$$
定义总粒子计数算符：
$$
\hat{N}_{\text{tot}}=\sum_s\int\frac{[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})+\hat{d}_s^\dagger(\bm{p})\hat{d}_s(\bm{p})]}{(2\pi)^3}\dd[3]{p}
$$
$\hat{N}_{\text{tot}}$ 计算粒子数与反粒子数之和，而 $Q$ 计算两者之差。
在自由理论中两者都守恒；在一般相互作用理论中，粒子—反粒子对可以产生或湮灭，所以总粒子数未必守恒，但由精确整体相位对称性保护的净荷仍然守恒。


利用单模计数算符的对易关系，可以得到：
$$
[Q,\hat{b}_s^\dagger(\bm{p})]=+\hat{b}_s^\dagger(\bm{p})
$$
以及：
$$
[Q,\hat{d}_s^\dagger(\bm{p})]=-\hat{d}_s^\dagger(\bm{p})
$$
所以 $\hat{b}^\dagger$ 产生 $Q$ 本征值增加一的粒子，而 $\hat{d}^\dagger$ 产生 $Q$ 本征值减少一的反粒子。
这就是“反粒子携带相反荷”的算符证明。


荷算符还生成场的相位变换。
由模展开可得：
$$
[Q,\psi(x)]=-\psi(x)
$$
定义幺正变换 $U(\alpha)=\mathrm{e}^{\mathrm{i}\alpha Q}$，在无穷小 $\alpha$ 下：
$$
U(\alpha)\psi U^{-1}(\alpha)=\psi+\mathrm{i}\alpha[Q,\psi]+O(\alpha^2)
$$
代入 $[Q,\psi]=-\psi$：
$$
U(\alpha)\psi U^{-1}(\alpha)=\mathrm{e}^{-\mathrm{i}\alpha}\psi
$$
这与最初的整体相位变换完全一致。


如果 $\psi$ 是电子场，电子的物理电荷记为 $q=-e$，其中 $e>0$。
电荷算符为：
$$
Q_{\text{el}}=-eQ
$$
于是 $\hat{b}^\dagger$ 产生电荷 $-e$ 的电子，$\hat{d}^\dagger$ 产生电荷 $+e$ 的正电子。

---
## 总动量及其对单粒子态的作用


空间平移对称性对应总三动量守恒。
自由 Dirac 场的总动量可以写成：
$$
\bm{P}=\int:\psi^\dagger(x)(-\mathrm{i}\bm{\nabla})\psi(x):\dd[3]{x}
$$
把场展开代入时，正频率平面波的空间部分为 $\mathrm{e}^{+\mathrm{i}\bm{p}\cdot\bm{x}}$，所以 $-\mathrm{i}\bm{\nabla}$ 给出 $+\bm{p}$。
负频率平面波的空间部分为 $\mathrm{e}^{-\mathrm{i}\bm{p}\cdot\bm{x}}$，所以同一个微分算符先给出 $-\bm{p}$。


空间积分和旋量正交性再次消去交叉项。
正规排序前的负频率贡献正比于 $-\bm{p}\hat{d}_s\hat{d}_s^\dagger$，使用反对易关系重排后变成 $+\bm{p}\hat{d}_s^\dagger\hat{d}_s$。
因此：
$$
\bm{P}=\sum_s\int\frac{\bm{p}[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})+\hat{d}_s^\dagger(\bm{p})\hat{d}_s(\bm{p})]}{(2\pi)^3}\dd[3]{p}
$$
粒子与反粒子对总动量的贡献同号，因为它们都是真实的正动量激发。
与电荷不同，反粒子不是“负动量粒子”；场展开中的负频率指数只是让 $\hat{d}^\dagger(\bm{p})$ 产生标签为 $\bm{p}$ 的反粒子。


总动量与产生算符的对易关系为：
$$
[\bm{P},\hat{b}_s^\dagger(\bm{p})]=\bm{p}\hat{b}_s^\dagger(\bm{p})
$$
以及：
$$
[\bm{P},\hat{d}_s^\dagger(\bm{p})]=\bm{p}\hat{d}_s^\dagger(\bm{p})
$$
因此单粒子态满足：
$$
\bm{P}\hat{b}_s^\dagger(\bm{p})\ket{0}=\bm{p}\hat{b}_s^\dagger(\bm{p})\ket{0}
$$
单反粒子态同样满足：
$$
\bm{P}\hat{d}_s^\dagger(\bm{p})\ket{0}=\bm{p}\hat{d}_s^\dagger(\bm{p})\ket{0}
$$
对含多个粒子与反粒子的态，总哈密顿量给出各个 $E_{\bm{p}}$ 之和，总动量给出各个 $\bm{p}$ 之和，守恒荷则给出粒子数减反粒子数。
这三个算符共同完成了模标签的物理识别。


至此，自由 Dirac 场的正则量子化已经闭合：等时反对易关系决定模代数，模代数构造反对称福克空间，哈密顿量给出有下界的正能谱，诺特荷则把负频率分支识别为携带相反荷的反粒子。
下一阶段可以继续研究 Dirac 场在任意时空点的反对易函数、微观因果性以及费米子传播子。
