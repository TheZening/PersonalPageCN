---
title: "Dirac 场的正则量子化（三）：哈密顿量、真空能与正能谱"
date: 2026-08-18
weight: 23
---

经典 Dirac 方程包含正频率与负频率两族解。
如果坚持单粒子解释，负频率分支对应没有下界的负能谱。

量子场论并不删除这一族解，而是把它的系数解释为反粒子产生算符。
本篇通过完整的哈密顿量计算说明：反频率不等于反粒子具有负能量，反对易代数恰好把所有真实粒子和反粒子激发的能量变成正数。


---
## 把自由场哈密顿量逐项对角化


自由 Dirac 场的哈密顿密度为：

$$
\mathcal{H}=\psi^\dagger h_D\psi
$$

其中：

$$
h_D=-\mathrm{i}\bm{\alpha}\cdot\bm{\nabla}+\beta m
$$

总哈密顿量为：

$$
H=\int\psi^\dagger(x)h_D\psi(x)\mathrm{d}^3x
$$

为了看清每一项，先把场展开简记为正频率部分与负频率部分：

$$
\psi=\psi^{(+)}+\psi^{(-)}
$$

其中：

$$
\psi^{(+)}(x)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{b}_s(\bm{p})u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}
$$

以及：

$$
\psi^{(-)}(x)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{d}_s^\dagger(\bm{p})v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}
$$

注意上标 $(+)$ 表示正频率，而不是电荷为正；上标 $(-)$ 表示负频率，而不是能量算符的本征值必为负。

由于自由场满足哈密顿形式的 Dirac 方程：

$$
\mathrm{i}\partial_t\psi=h_D\psi
$$

对正频率平面波有：

$$
h_D\left[u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}\right]=E_{\bm{p}}u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}
$$

对负频率平面波则有：

$$
h_D\left[v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}\right]=-E_{\bm{p}}v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}
$$

把 $\psi^\dagger h_D\psi$ 展开，会出现四类模算符乘积：$\hat b^\dagger\hat b$、$\hat b^\dagger\hat d^\dagger$、$\hat d\hat b$ 和 $\hat d\hat d^\dagger$。

$\hat b^\dagger\hat b$ 项中的空间积分产生：

$$
(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})
$$

它令两个动量相同，再使用 $u_r^\dagger(p)u_s(p)=2E_{\bm{p}}\delta_{rs}$，得到：

$$
H_{bb}=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3}E_{\bm{p}}\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})
$$

$\hat d\hat d^\dagger$ 项也由空间积分令动量相同。
但是 $h_D$ 作用在负频率模上给出 $-E_{\bm{p}}$，所以：

$$
H_{dd}=-\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3}E_{\bm{p}}\hat{d}_s(\bm{p})\hat{d}_s^\dagger(\bm{p})
$$

现在检查交叉项。
$\hat b^\dagger\hat d^\dagger$ 项的空间相位要求 $\bm{q}=-\bm{p}$，剩下的旋量因子正比于：

$$
u_r^\dagger(p)v_s(-p)
$$

上一节已经逐分量证明这个内积为零，所以整个 $\hat b^\dagger\hat d^\dagger$ 项消失。
另一个交叉项含 $v_r^\dagger(p)u_s(-p)=0$，因此 $\hat d\hat b$ 项也消失。

所以自由场哈密顿量已经在动量和自旋标签上对角化：

$$
H=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3}E_{\bm{p}}\left[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})-\hat{d}_s(\bm{p})\hat{d}_s^\dagger(\bm{p})\right]
$$

这里第二项暂时看起来仍然带负号。
关键的下一步不是删掉它，而是使用反对易关系把产生算符移到湮灭算符左边。


---
## 反对易重排、真空常数与正规序


连续谱的反对易关系为：

$$
\{\hat{d}_s(\bm{p}),\hat{d}_r^\dagger(\bm{q})\}_+=(2\pi)^3\delta_{sr}\delta^{(3)}(\bm{p}-\bm{q})
$$

在同一标签处形式上写成：

$$
\hat{d}_s(\bm{p})\hat{d}_s^\dagger(\bm{p})=(2\pi)^3\delta^{(3)}(0)-\hat{d}_s^\dagger(\bm{p})\hat{d}_s(\bm{p})
$$

$\delta^{(3)}(0)$ 表示无限空间体积带来的发散，不应把它当作普通函数在零点的数值。
为了更清楚地处理它，可以先把系统放在体积 $V$ 的周期盒中。
此时动量离散，归一化后的模算符满足：

$$
\{\hat{d}_{s\bm{p}},\hat{d}_{r\bm{q}}^\dagger\}_+=\delta_{sr}\delta_{\bm{p}\bm{q}}
$$

同一模上便有：

$$
\hat{d}_{s\bm{p}}\hat{d}_{s\bm{p}}^\dagger=1-\hat{d}_{s\bm{p}}^\dagger\hat{d}_{s\bm{p}}
$$

将它代入盒中的哈密顿量：

$$
H=\sum_{s,\bm{p}}E_{\bm{p}}\left(\hat{b}_{s\bm{p}}^\dagger\hat{b}_{s\bm{p}}+\hat{d}_{s\bm{p}}^\dagger\hat{d}_{s\bm{p}}-1\right)
$$

定义粒子和反粒子的计数算符：

$$
\hat{N}^{(b)}_{s\bm{p}}=\hat{b}_{s\bm{p}}^\dagger\hat{b}_{s\bm{p}}
$$

以及：

$$
\hat{N}^{(d)}_{s\bm{p}}=\hat{d}_{s\bm{p}}^\dagger\hat{d}_{s\bm{p}}
$$

于是：

$$
H=\sum_{s,\bm{p}}E_{\bm{p}}\left(\hat{N}^{(b)}_{s\bm{p}}+\hat{N}^{(d)}_{s\bm{p}}-1\right)
$$

为了与主教材的写法对应，也可以把每个模的 $-1$ 平分成粒子部分的 $-\frac{1}{2}$ 与反粒子部分的 $-\frac{1}{2}$。
这种拆分不改变总真空常数；真正由算符代数固定的是两部分合计为 $-1$。

定义真空 $|0\rangle$ 被所有湮灭算符消灭：

$$
\hat{b}_{s\bm{p}}|0\rangle=0
$$

以及：

$$
\hat{d}_{s\bm{p}}|0\rangle=0
$$

所以未正规排序的真空能为：

$$
E_0=\langle0|H|0\rangle=-\sum_{s,\bm{p}}E_{\bm{p}}
$$

每个动量有两个自旋态，因此连续极限中的真空能密度形式上为：

$$
\frac{E_0}{V}=-2\int\frac{\mathrm{d}^3p}{(2\pi)^3}E_{\bm{p}}
$$

这个积分在大动量处发散。
它说明自由场哈密顿量的绝对零点尚未确定，不表示存在可以单独观测的无限负能粒子海。

在不含引力的平直时空量子场论中，实验通常只测量相对于真空的能量差。
可以通过正规序把所有产生算符放到湮灭算符左边，并在交换两个费米算符时保留负号。
例如：

$$
:\hat{d}\hat{d}^\dagger:=-\hat{d}^\dagger\hat{d}
$$

正规排序后的哈密顿量为：

$$
:H:=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3}E_{\bm{p}}\left[\hat{b}_s^\dagger(\bm{p})\hat{b}_s(\bm{p})+\hat{d}_s^\dagger(\bm{p})\hat{d}_s(\bm{p})\right]
$$

它满足 $\langle0|:H:|0\rangle=0$。
正规序在这里等价于选择真空能为能量零点，但它不是处理所有真空效应的万能方法。
一旦考虑引力、曲时空、边界或不同真空之间的比较，真空能的绝对或相对贡献需要更系统的正则化与重整化。

费米场的负真空常数与玻色场的正真空常数符号相反。
在具有玻色—费米配对的特殊理论中，两者可能抵消，但普通量子场论并不自动具有这种配对。


---
## 粒子和反粒子为什么都具有正能量


从现在开始把正规排序后的哈密顿量记为物理自由哈密顿量。
先在一个离散模上证明产生算符确实增加正能量。

由反对易关系：

$$
\hat{b}\hat{b}^\dagger=1-\hat{b}^\dagger\hat{b}
$$

以及 $(\hat{b}^\dagger)^2=0$，可以计算：

$$
[\hat{b}^\dagger\hat{b},\hat{b}^\dagger]=\hat{b}^\dagger\hat{b}\hat{b}^\dagger-\hat{b}^\dagger\hat{b}^\dagger\hat{b}
$$

第一项为 $\hat{b}^\dagger(1-\hat{b}^\dagger\hat{b})=\hat{b}^\dagger$，第二项为零，因此：

$$
[\hat{N}^{(b)},\hat{b}^\dagger]=\hat{b}^\dagger
$$

同理：

$$
[\hat{N}^{(d)},\hat{d}^\dagger]=\hat{d}^\dagger
$$

所以完整哈密顿量满足：

$$
[:H:,\hat{b}_s^\dagger(\bm{p})]=E_{\bm{p}}\hat{b}_s^\dagger(\bm{p})
$$

以及：

$$
[:H:,\hat{d}_s^\dagger(\bm{p})]=E_{\bm{p}}\hat{d}_s^\dagger(\bm{p})
$$

定义单粒子态与单反粒子态：

$$
|\bm{p},s\rangle_b=\hat{b}_s^\dagger(\bm{p})|0\rangle
$$

以及：

$$
|\bm{p},s\rangle_d=\hat{d}_s^\dagger(\bm{p})|0\rangle
$$

利用 $:H:|0\rangle=0$，得到：

$$
:H:|\bm{p},s\rangle_b=E_{\bm{p}}|\bm{p},s\rangle_b
$$

以及：

$$
:H:|\bm{p},s\rangle_d=E_{\bm{p}}|\bm{p},s\rangle_d
$$

所以两类真实激发的能量都是 $+E_{\bm{p}}$。
$v_s(p)\mathrm{e}^{+\mathrm{i}px}$ 的负频率表示它在场展开中伴随反粒子产生算符，不表示产生出的反粒子具有负能量。

哈密顿量在量子态空间上生成时间平移的一参数酉群，能量就是这个群生成元的谱值。
正频率与负频率原本是经典解空间对时间平移的两类本征方向，量子化和重新排序以后，它们分别成为粒子湮灭与反粒子产生部分，而物理福克态仍落在哈密顿量的非负谱中。
所以“频率分支属于经典解空间”与“能量本征值属于量子态空间”不能只凭公式中的正负号相互替换。

现在也能看出为什么不能给 Dirac 场使用玻色对易关系。
若错误地假设 $[\hat d,\hat d^\dagger]=1$，那么：

$$
-\hat d\hat d^\dagger=-\hat d^\dagger\hat d-1
$$

每增加一个 $d$ 模占据数都会使能量降低 $E$，哈密顿量便没有下界。
正确的反对易关系给出：

$$
-\hat d\hat d^\dagger=+\hat d^\dagger\hat d-1
$$

同一个代数负号既修复了反粒子能量，又将在下一篇推出单模占据数只能是 $0$ 或 $1$。
这不是两个偶然结果，而是自旋为 $\frac{1}{2}$ 的相对论场采用费米统计的统一体现。

最后检查哈密顿量确实生成场的时间演化。
对于三个奇算符 $A$、$B$、$C$，有恒等式：

$$
[A,BC]=\{A,B\}_+C-B\{A,C\}_+
$$

用它计算 $[\psi_\alpha(\bm{x}),H]$，第一项由 $\{\psi,\psi^\dagger\}_+$ 给出狄拉克 $\delta$ 分布，第二项由 $\{\psi,\psi\}_+=0$ 消失。
结果为：

$$
[\psi_\alpha(t,\bm{x}),H]=(h_D\psi)_\alpha(t,\bm{x})
$$

海森堡方程 $\mathrm{i}\partial_t\psi=[\psi,H]$ 因而恢复：

$$
\mathrm{i}\partial_t\psi=h_D\psi
$$

这说明正则反对易关系、哈密顿量和 Dirac 场方程彼此相容。
下一篇将构造费米子福克空间，严格推导泡利不相容原理，再从诺特流得到粒子与反粒子符号相反的守恒荷。
