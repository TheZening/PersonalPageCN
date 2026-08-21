---
title: "光子场量子化（二）：不定内积、数算符与自由哈密顿量"
date: 2026-08-18
weight: 33
---

上一篇得到单个离散归一化时间型模的对易关系 $[\hat{a}_0,\hat{a}_0^\dagger]=-\mathbb{1}$。
如果仍把 $\hat{a}_0^\dagger\ket{0}$ 当作普通希尔伯特空间中的一粒子态，它的范数平方就会是负数。


本篇不回避这个负号，而是建立协变量子化所需的扩大福克空间，并区分三个经常混淆的问题：范数的符号、能量本征值的符号以及物理态是否可观测。
随后从规范固定后的哈密顿密度推导自由场哈密顿量和三维动量。

---
## 时间型产生算符为什么生成负范数向量


定义真空态满足：
$$
\hat{a}_\lambda(\bm{k})\ket{0}=0
$$
对固定的离散动量和偏振，暂时省略这些标签，并记：
$$
[\hat{a},\hat{a}^\dagger]=s\mathbb{1}
$$
其中 $s=+1$ 对应三个空间型偏振，$s=-1$ 对应时间型偏振。
一粒子向量定义为：
$$
\ket{1}=\hat{a}^\dagger\ket{0}
$$
它的范数为：
$$
\braket{1}{1}=\expval{\hat{a}\hat{a}^\dagger}{0}
$$
把产生算符移到左边：
$$
\hat{a}\hat{a}^\dagger=\hat{a}^\dagger\hat{a}+s\mathbb{1}
$$
第一项作用在真空上为零，所以：
$$
\braket{1}{1}=s
$$
横向和纵向一粒子向量的范数为 $+1$，时间型一粒子向量的范数为 $-1$。


对未归一化的 $n$ 粒子向量：
$$
\ket{n}=(\hat{a}^\dagger)^n\ket{0}
$$
反复使用对易关系可得：
$$
\hat{a}(\hat{a}^\dagger)^n=(\hat{a}^\dagger)^n\hat{a}+ns(\hat{a}^\dagger)^{n-1}
$$
因此范数满足递推式：
$$
\braket{n}{n}=ns\braket{n-1}{n-1}
$$
从 $\braket{0}{0}=1$ 出发：
$$
\braket{n}{n}=s^n n!
$$
时间型模的奇数激发具有负范数，偶数激发具有正范数。
所以整个扩大状态空间不是正定希尔伯特空间，而是带不定内积的向量空间。


这种空间常称为克赖因空间。
只需把它理解为：向量之间仍有线性内积和伴随运算，但非零向量的“长度平方”可以为正、为负，也可以为零。
概率解释不能在整个扩大空间上进行，只能在施加物理态条件并除去零范数方向以后进行。


克赖因空间是量子态空间的线性代数结构，不是时空上某个场丛的纤维。
时空度规的号差先进入偏振完备关系，再诱导扩大一光子空间中的不定内积；随后构造的福克空间继承这个号差。
因此“时空中的光状向量”和“状态空间中的零范数态”属于不同空间，它们在这里相关是因为协变量子化用洛伦兹度规组织偏振，但不能把二者直接视为同一个向量。


负范数不等于负能量。
范数来自状态空间的内积，能量来自哈密顿算符的本征值；二者是不同的数学问题。
下一节会看到，即使时间型一粒子向量范数为负，它仍具有正的自由能量本征值。

---
## 带号差的数算符与产生湮灭作用


若直接把 $\hat{a}^\dagger\hat{a}$ 定义为数算符，则时间型模会得到错误的符号。
适合所有偏振的定义是：
$$
\hat{N}=s\hat{a}^\dagger\hat{a}
$$
因为 $s^2=1$，它与产生算符的对易子为：
$$
[\hat{N},\hat{a}^\dagger]=s\hat{a}^\dagger[\hat{a},\hat{a}^\dagger]
$$
所以：
$$
[\hat{N},\hat{a}^\dagger]=\hat{a}^\dagger
$$
同理：
$$
[\hat{N},\hat{a}]=-\hat{a}
$$
真空满足 $\hat{N}\ket{0}=0$。
利用第一条对易关系：
$$
\hat{N}(\hat{a}^\dagger)^n\ket{0}=(\hat{a}^\dagger)^n(\hat{N}+n)\ket{0}
$$
于是：
$$
\hat{N}\ket{n}=n\ket{n}
$$
数算符的本征值仍是非负整数。
时间型模的负号已经被吸收到定义 $\hat{N}_0=-\hat{a}_0^\dagger\hat{a}_0$ 中。


恢复全部标签，对每个偏振定义：
$$
\hat{N}_\lambda(\bm{k})=s_\lambda\hat{a}_\lambda^\dagger(\bm{k})\hat{a}_\lambda(\bm{k})
$$
其中：
$$
s_\lambda=-\eta_{\lambda\lambda}
$$
对空间型偏振：
$$
\hat{N}_r(\bm{k})=\hat{a}_r^\dagger(\bm{k})\hat{a}_r(\bm{k})
$$
这里 $r=1,2,3$。
对时间型偏振：
$$
\hat{N}_0(\bm{k})=-\hat{a}_0^\dagger(\bm{k})\hat{a}_0(\bm{k})
$$
在离散规范化下，可选择带符号归一化的基向量：
$$
\ket{n;s}=\frac{1}{\sqrt{n!}}(\hat{a}^\dagger)^n\ket{0}
$$
其内积为：
$$
\braket{n;s}{n;s}=s^n
$$
产生算符作用为：
$$
\hat{a}^\dagger\ket{n;s}=\sqrt{n+1}\ket{n+1;s}
$$
湮灭算符作用时保留号差：
$$
\hat{a}\ket{n;s}=s\sqrt{n}\ket{n-1;s}
$$
对普通正范数振子 $s=1$，这退化为熟悉的玻色子阶梯关系。
对时间型模 $s=-1$，每次湮灭会多出一个负号；这正是保持模对易关系所必需的。


扩大空间中的“总激发数”可以形式化地写为：
$$
\hat{N}_{\text{aux}}=\sum_{\lambda=0}^3\int\frac{\hat{N}_\lambda(\bm{k})}{(2\pi)^3}\dd[3]{\bm{k}}
$$
但它不是一个物理守恒荷。
电磁势是厄米实场，没有允许 $A^\mu\mapsto\mathrm{e}^{\mathrm{i}\alpha}A^\mu$ 的独立全局相位对称性，所以不存在与之对应的光子电荷。
自由理论中的模占据数只是对角化自由哈密顿量的方便标签；加入与带电物质的相互作用后，光子可以被产生和湮灭，总光子数一般不守恒。

---
## 从哈密顿密度到正能量谱


费曼规范下的简化拉格朗日密度为：
$$
\mathcal{L}=-\frac{1}{2}\partial_\mu A_\nu\partial^\mu A^\nu
$$
分离时间与空间导数：
$$
\mathcal{L}=-\frac{1}{2}\dot A_\nu\dot A^\nu+\frac{1}{2}\partial_iA_\nu\partial_iA^\nu
$$
共轭动量为：
$$
\Pi^\nu=-\dot A^\nu
$$
哈密顿密度为：
$$
\mathcal{H}=\Pi^\nu\dot A_\nu-\mathcal{L}
$$
代入共轭动量：
$$
\mathcal{H}=-\dot A^\nu\dot A_\nu+\frac{1}{2}\dot A_\nu\dot A^\nu-\frac{1}{2}\partial_iA_\nu\partial_iA^\nu
$$
所以：
$$
\mathcal{H}=-\frac{1}{2}\dot A_\nu\dot A^\nu-\frac{1}{2}\partial_iA_\nu\partial_iA^\nu
$$
外面的负号不会使全部能量为负，因为洛伦兹收缩本身对空间分量带负号。
把场按偏振展开后，每个偏振分量的哈密顿量前会出现 $s_\lambda=-\eta_{\lambda\lambda}$。


把模展开代入 $H=\int\mathcal{H}\dd[3]{\bm{x}}$。
空间积分使用：
$$
\int\mathrm{e}^{+\mathrm{i}(\bm{k}-\bm{q})\cdot\bm{x}}\dd[3]{\bm{x}}=(2\pi)^3\delta^{(3)}(\bm{k}-\bm{q})
$$
两个湮灭算符相乘的项带有 $\delta^{(3)}(\bm{k}+\bm{q})$。
令 $\bm{q}=-\bm{k}$ 后，其时间导数部分正比于 $-\omega_{\bm{k}}^2$，空间梯度部分正比于 $+\bm{k}^2$。
由于无质量色散关系：
$$
\omega_{\bm{k}}^2=\bm{k}^2
$$
这两部分相消。
两个产生算符相乘的项以相同方式相消，只剩 $\hat{a}^\dagger\hat{a}$ 与 $\hat{a}\hat{a}^\dagger$。


在有限体积离散规范化下，结果可写成：
$$
H=\frac{1}{2}\sum_{\bm{k},\lambda}\omega_{\bm{k}}s_\lambda[\hat{a}_\lambda^\dagger(\bm{k})\hat{a}_\lambda(\bm{k})+\hat{a}_\lambda(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})]
$$
利用模对易关系：
$$
\hat{a}_\lambda\hat{a}_\lambda^\dagger=\hat{a}_\lambda^\dagger\hat{a}_\lambda+s_\lambda
$$
并使用 $s_\lambda^2=1$：
$$
H=\sum_{\bm{k},\lambda}\omega_{\bm{k}}\left[\hat{N}_\lambda(\bm{k})+\frac{1}{2}\right]
$$
扩大空间表达式中的每个偏振都贡献一个形式上的零点能 $\omega_{\bm{k}}/2$。
这个式子尚未完成物理态约化，因此不能把四个零点项直接解释成四种可观测光子的真空涨落。
在库仑规范中，从一开始就只量子化两个横向振子；在协变方法中，则要等弱条件与零范数商空间完成以后，才得到同一个两偏振物理谱。
所以“中间公式写了四项”与“自然界有四种光子”是两个完全不同的命题。


若采用正规序，连续形式为：
$$
:H:=\sum_{\lambda=0}^3\int\frac{\omega_{\bm{k}}\hat{N}_\lambda(\bm{k})}{(2\pi)^3}\dd[3]{\bm{k}}
$$
正规序只减去自由真空常数，不改变任何产生算符与哈密顿量的对易关系。
由数算符代数可得：
$$
[:H:,\hat{a}_\lambda^\dagger(\bm{k})]=\omega_{\bm{k}}\hat{a}_\lambda^\dagger(\bm{k})
$$
所以：
$$
:H:\hat{a}_\lambda^\dagger(\bm{k})\ket{0}=\omega_{\bm{k}}\hat{a}_\lambda^\dagger(\bm{k})\ket{0}
$$
即使 $\lambda=0$ 的一粒子向量具有负范数，它的能量本征值仍是 $+\omega_{\bm{k}}$。
负范数问题必须通过物理态约束解决，不能误称为负能量问题。


同样的方法得到正规序三维动量：
$$
:\bm{P}:=\sum_{\lambda=0}^3\int\frac{\bm{k}\hat{N}_\lambda(\bm{k})}{(2\pi)^3}\dd[3]{\bm{k}}
$$
它满足：
$$
[:\bm{P}:,\hat{a}_\lambda^\dagger(\bm{k})]=\bm{k}\hat{a}_\lambda^\dagger(\bm{k})
$$
所以四种辅助偏振模都按照相同的无质量四维动量标记。
下一篇施加弱洛伦茨条件后，时间型与纵向贡献会在物理矩阵元中相消，只留下两个横向偏振的正定能量和动量。
