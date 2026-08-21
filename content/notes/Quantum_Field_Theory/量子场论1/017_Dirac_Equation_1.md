---
title: "Dirac 方程（一）：Clifford（克利福德）代数与相对论一阶方程"
date: 2026-08-18
weight: 17
---

自由标量场满足二阶 Klein–Gordon 方程，但自旋 $1/2$ 粒子需要不同的洛伦兹表示和不同的场方程。
Dirac 的出发点是寻找一个对时间和空间都只含一阶导数的相对论方程，同时要求它自动蕴含 $E^2=\bm{p}^2+m^2$。
这个要求迫使方程的系数不再是普通数，而是生成克利福德代数的矩阵。
本篇逐步完成这个因式分解，证明最小矩阵维数为什么是 $4$，再建立标准表示中的 $\gamma$ 矩阵和协变 Dirac 方程。

---
## 从相对论色散关系到矩阵反对易条件


先澄清主教材中的一个问题。
泡利不相容原理是量子多粒子态的性质，它并不禁止经典旋量场。
完全可以先定义取值于旋量空间的经典场 $\psi(x)$，写出经典 Dirac 作用量和运动方程，再讨论量子化。
在算符量子化中，费米场必须满足反对易关系。
在路径积分语言中，通常用格拉斯曼值经典场提前编码这种费米性质。
这两件事都不能推出“经典旋量场不存在”。


现在回到相对论自由粒子的能量关系：
$$
E^2=\bm{p}^2+m^2
$$
若直接取正平方根，哈密顿量为 $H=\sqrt{\bm{p}^2+m^2}$。
这个表达式在动量空间没有问题，但把 $\bm{p}$ 换成 $-\mathrm{i}\bm{\nabla}$ 后会得到空间导数的非多项式函数，不适合作为局域一阶场方程的起点。
Dirac 因此尝试把哈密顿量写成动量与质量的一次式：
$$
H=\alpha^i p_i+\beta m
$$
这里暂时不知道 $\alpha^i$ 和 $\beta$ 是什么对象。
若 $\psi$ 满足一阶时间演化方程：
$$
\mathrm{i}\partial_t\psi=H\psi
$$
那么再次作用 $\mathrm{i}\partial_t$，对自由且不显含时间的 $H$ 得到：
$$
-\partial_t^2\psi=H^2\psi
$$
为了让每个分量同时满足相对论色散关系，必须要求：
$$
H^2=\bm{p}^2+m^2
$$
把一次式完整平方：
$$
H^2=(\alpha^i p_i+\beta m)(\alpha^j p_j+\beta m)
$$
展开为：
$$
H^2=\alpha^i\alpha^j p_ip_j+m(\alpha^i\beta+\beta\alpha^i)p_i+\beta^2m^2
$$
动量分量彼此对易，所以 $p_ip_j$ 关于 $i,j$ 对称。
因此 $\alpha^i\alpha^j$ 中只有对称部分有贡献：
$$
\alpha^i\alpha^j p_ip_j=\frac{1}{2}(\alpha^i\alpha^j+\alpha^j\alpha^i)p_ip_j
$$
定义反对易子：
$$
\{A,B\}=AB+BA
$$
于是：
$$
H^2=\frac{1}{2}\{\alpha^i,\alpha^j\}p_ip_j+m\{\alpha^i,\beta\}p_i+\beta^2m^2
$$
要让它对任意 $\bm{p}$ 都等于 $\delta^{ij}p_ip_j+m^2$，不同动量多项式的系数必须分别相等：
$$
\{\alpha^i,\alpha^j\}=2\delta^{ij}\mathbb{1}
$$
以及：
$$
\{\alpha^i,\beta\}=0
$$
最后：
$$
\beta^2=\mathbb{1}
$$
令 $i=j$ 还得到 $(\alpha^i)^2=\mathbb{1}$。
所以 $\alpha^1,\alpha^2,\alpha^3,\beta$ 是四个平方为单位矩阵且两两反对易的对象。


它们不可能是普通数。
若非零复数 $a$ 与 $b$ 反对易，就有 $ab+ba=2ab=0$，这与 $a^2=b^2=1$ 矛盾。
因此这些系数必须是不交换的线性算符，选定基底后就是矩阵。
$\psi$ 也必须是这些矩阵能够作用的多分量列向量。


Zee 强调的关键直觉是：这里并不是把标量平方根符号换一种写法，而是在内部旋量空间中对质量壳关系作矩阵因式分解。
一阶局域方程、自旋自由度以及稍后不可避免的正负频率两支，都是同一个矩阵平方根结构的后果。


若还要求时间演化保持正定内积，哈密顿量必须厄米：
$$
H^\dagger=H
$$
由于 $p_i$ 和 $m$ 为厄米或实数，可以选择 $(\alpha^i)^\dagger=\alpha^i$ 与 $\beta^\dagger=\beta$。


由 $(\alpha^i)^2=\beta^2=\mathbb{1}$ 可知它们的本征值只能是 $+1$ 或 $-1$。


反对易关系还迫使这些矩阵无迹。
以 $\alpha^1$ 为例，利用 $\beta^{-1}=\beta$ 和迹的循环性：
$$
\operatorname{tr}(\alpha^1)=\operatorname{tr}(\beta\alpha^1\beta)
$$
因为 $\beta\alpha^1=-\alpha^1\beta$：
$$
\operatorname{tr}(\alpha^1)=\operatorname{tr}(-\alpha^1\beta^2)=-\operatorname{tr}(\alpha^1)
$$
所以 $\operatorname{tr}(\alpha^1)=0$。
同样方法适用于其余三个矩阵。
因此 $+1$ 与 $-1$ 本征值数目相同，矩阵维数必须为偶数。


二维矩阵仍然不够。
任意二维厄米矩阵都可以写成：
$$
A=a_0\mathbb{1}+a_i\sigma^i
$$
无迹条件迫使 $a_0=0$，所以无迹厄米二维矩阵只有三个泡利矩阵方向。
两个这样的矩阵反对易等价于对应三维系数向量正交：
$$
\{a_i\sigma^i,b_j\sigma^j\}=2(\bm{a}\cdot\bm{b})\mathbb{1}
$$
三维空间最多只能容纳三个彼此正交的非零向量，但这里需要四个两两反对易的矩阵。
因此二维表示不可能，最小维数至少为 $4$。

---
## 泡利矩阵怎样构造四维克利福德代数


三个泡利矩阵为：
$$
\sigma^1=\mqty[0&1\\1&0],\sigma^2=\mqty[0&-\mathrm{i}\\\mathrm{i}&0],\sigma^3=\mqty[1&0\\0&-1]
$$
它们满足乘法恒等式：
$$
\sigma^i\sigma^j=\delta^{ij}\mathbb{1}+\mathrm{i}\epsilon^{ijk}\sigma^k
$$
交换 $i$ 与 $j$ 后相加，反对称的列维–奇维塔项相消：
$$
\{\sigma^i,\sigma^j\}=2\delta^{ij}\mathbb{1}
$$
这正是构造更高维反对易代数所需的基本材料。


在 Dirac 标准表示中定义四乘四分块矩阵：
$$
\beta=\mqty[\mathbb{1}&0\\0&-\mathbb{1}]
$$
以及：
$$
\alpha^i=\mqty[0&\sigma^i\\\sigma^i&0]
$$
这里每个分块都是二乘二矩阵。
先计算 $\beta^2$：
$$
\beta^2=\mqty[\mathbb{1}&0\\0&\mathbb{1}]=\mathbb{1}_4
$$
再计算两个 $\alpha$ 矩阵的乘积：
$$
\alpha^i\alpha^j=\mqty[\sigma^i\sigma^j&0\\0&\sigma^i\sigma^j]
$$
因此：
$$
\{\alpha^i,\alpha^j\}=\mqty[\{\sigma^i,\sigma^j\}&0\\0&\{\sigma^i,\sigma^j\}]=2\delta^{ij}\mathbb{1}_4
$$
最后，两个乘积分别为：
$$
\alpha^i\beta=\mqty[0&-\sigma^i\\\sigma^i&0]
$$
以及：
$$
\beta\alpha^i=\mqty[0&\sigma^i\\-\sigma^i&0]
$$
两式相加为零，所以 $\{\alpha^i,\beta\}=0$。
这组矩阵确实满足前一节的全部要求。


为了显式写出洛伦兹协变结构，定义 $\gamma^0=\beta$ 与 $\gamma^i=\beta\alpha^i$。


在标准表示中：
$$
\gamma^0=\mqty[\mathbb{1}&0\\0&-\mathbb{1}]
$$
以及：
$$
\gamma^i=\mqty[0&\sigma^i\\-\sigma^i&0]
$$
因为 $(\gamma^0)^2=\mathbb{1}_4$，而 $(\gamma^i)^2=-\mathbb{1}_4$，时间与空间方向自动具有不同符号。
全部关系可以统一写成：
$$
\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}\mathbb{1}_4
$$
这就是号差 $(+,-,-,-)$ 下的克利福德代数。


这里必须区分三类指标。
$\mu,\nu$ 是闵可夫斯基时空指标，标记四个不同的 $\gamma$ 矩阵。
每个 $\gamma^\mu$ 自身还有两个通常省略的旋量矩阵指标：
$$
(\gamma^\mu)_a{}^b
$$
$a,b=1,2,3,4$ 标记旋量空间中的行与列。
所以 $\gamma^1$ 的上标 $1$ 不是矩阵的第一行，也不是普通幂次。


克利福德代数不依赖某一组具体矩阵。
若 $U$ 是可逆矩阵，定义：
$$
\gamma'^\mu=U\gamma^\mu U^{-1}
$$
则：
$$
\{\gamma'^\mu,\gamma'^\nu\}=U\{\gamma^\mu,\gamma^\nu\}U^{-1}=2\eta^{\mu\nu}\mathbb{1}_4
$$
因此 Dirac 表示、外尔表示和其他表示只是旋量空间基底的不同选择。
物理结果不能依赖选用哪一种具体矩阵表示。


用丛语言说，$\psi(x)$ 是旋量丛 $S$ 的截面，而每个 $\gamma^\mu$ 是克利福德乘法在局部标架中的矩阵。
克利福德乘法接收一个余切向量并产生旋量纤维上的线性算符，所以可以写成从 $T_x^*M$ 到 $\operatorname{End}(S_x)$ 的映射。
因此时空指标 $\mu$ 告诉我们输入的是哪一个余切方向，旋量指标 $a,b$ 则告诉我们这个方向怎样在线性空间 $S_x$ 内作用；两类指标来自不同纤维，不能相互替代。
换一组伽马矩阵表示就是更换旋量纤维基底，克利福德乘法这个几何映射本身没有改变。


在标准表示中，厄米共轭性质为 $(\gamma^0)^\dagger=\gamma^0$ 与 $(\gamma^i)^\dagger=-\gamma^i$。


可以统一写成：
$$
(\gamma^\mu)^\dagger=\gamma^0\gamma^\mu\gamma^0
$$
对 $\mu=0$，右边等于 $\gamma^0$。
对空间指标，$\gamma^0$ 与 $\gamma^i$ 反对易，右边等于 $-\gamma^i$。
这个恒等式将在推导 Dirac 伴随方程时反复使用。

---
## 协变 Dirac 方程及其平方


把三维动量算符写成 $\bm{p}=-\mathrm{i}\bm{\nabla}$，Dirac 的哈密顿形式为：
$$
\mathrm{i}\partial_t\psi=(-\mathrm{i}\alpha^i\partial_i+\beta m)\psi
$$
把所有项移到左边：
$$
(\mathrm{i}\partial_t+\mathrm{i}\alpha^i\partial_i-\beta m)\psi=0
$$
左乘 $\beta=\gamma^0$，并使用 $\gamma^i=\beta\alpha^i$：
$$
(\mathrm{i}\gamma^0\partial_0+\mathrm{i}\gamma^i\partial_i-m)\psi=0
$$
于是得到协变形式：
$$
(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi(x)=0
$$
这就是自由 Dirac 方程。


常用斜线记号定义为：
$$
\slashed{A}=\gamma^\mu A_\mu
$$
特别地：
$$
\slashed{\partial}=\gamma^\mu\partial_\mu
$$
Dirac 方程因而可以简写为：
$$
(\mathrm{i}\slashed{\partial}-m)\psi=0
$$
斜线不是除法符号，而是“用 $\gamma$ 矩阵与四维对象缩并”的记号。


若把旋量矩阵指标全部写出，方程为：
$$
[\mathrm{i}(\gamma^\mu)_a{}^b\partial_\mu-m\delta_a{}^b]\psi_b(x)=0
$$
自由指标 $a$ 取四个值，所以紧凑的 Dirac 方程实际代表四条彼此耦合的一阶偏微分方程。
四个旋量分量不是四个时空方向上的分量，而是旋量表示空间中的四个坐标。


现在证明每个 Dirac 解都满足 Klein–Gordon 方程。
在方程左边再作用共轭的一阶算符：
$$
(\mathrm{i}\slashed{\partial}+m)(\mathrm{i}\slashed{\partial}-m)\psi=0
$$
质量与导数交换，所以两个交叉项相消：
$$
[-\gamma^\mu\gamma^\nu\partial_\mu\partial_\nu-m^2]\psi=0
$$
普通偏导数彼此交换，$\partial_\mu\partial_\nu$ 关于 $\mu,\nu$ 对称。
因此 $\gamma^\mu\gamma^\nu$ 只有反对易部分有贡献：
$$
\gamma^\mu\gamma^\nu\partial_\mu\partial_\nu=\frac{1}{2}\{\gamma^\mu,\gamma^\nu\}\partial_\mu\partial_\nu
$$
使用克利福德代数：
$$
\gamma^\mu\gamma^\nu\partial_\mu\partial_\nu=\eta^{\mu\nu}\partial_\mu\partial_\nu=\Box
$$
所以：
$$
(\Box+m^2)\psi=0
$$
这里表示 $\psi$ 的每一个旋量分量都满足 Klein–Gordon 方程。


反过来却不成立。
Klein–Gordon 方程只施加二阶质量壳条件，Dirac 方程还施加旋量分量之间的一阶线性约束。
任意四个彼此独立的 Klein–Gordon 解组成的列向量一般不会满足 Dirac 方程。
所以“Dirac 方程的平方是 Klein–Gordon 方程”是单向蕴含，不是两个方程完全等价。


Dirac 方程仍然具有正频率和负频率两类平面波解。
一阶时间导数并没有消除负频率分支，因为相对论质量壳本身具有 $p^0=\pm E_{\bm{p}}$ 两支。
后面会看到，正频率旋量记为 $u_s(\bm{p})$，负频率旋量记为 $v_s(\bm{p})$。
只有进入量子场论以后，$v$ 分支才会获得完整的反粒子解释。


最后检查经典场论结构。
自由 Dirac 拉格朗日密度为：
$$
\mathcal{L}=\bar{\psi}(\mathrm{i}\gamma^\mu\partial_\mu-m)\psi
$$
其中 $\bar{\psi}$ 不是普通复共轭，而是下一篇将推导的 Dirac 伴随。
在四维时空中 $[\mathcal{L}]=4$，导数和质量的质量量纲均为 $1$。
因此：
$$
2[\psi]+1=4
$$
得到 Dirac 场的质量量纲：
$$
[\psi]=\frac{3}{2}
$$
这与标量场的 $[\phi]=1$ 不同，差别来自 Dirac 动能项只含一个导数。


下一篇将不再把 $\psi$ 只当作抽象四分量列向量，而是建立洛伦兹变换在旋量空间中的作用 $S(\Lambda)$。
这将解释旋量为什么在转动 $2\pi$ 后变号，Dirac 伴随为什么必须含 $\gamma^0$，以及哪些旋量双线性组合能够成为洛伦兹标量、向量和张量。
