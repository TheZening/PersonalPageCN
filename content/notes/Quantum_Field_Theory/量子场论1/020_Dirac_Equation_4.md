---
title: "Dirac 方程（四）：守恒流、自旋、螺旋度与非相对论极限"
date: 2026-08-18
weight: 20
---

前面三节已经建立 Dirac 方程的代数结构、洛伦兹变换和完整平面波解。
这一节集中讨论这些公式所表达的物理内容：Dirac 方程保存什么内积，四分量旋量怎样携带自旋，螺旋度何时是好量子数，以及低能极限为什么回到二分量的非相对论量子力学。


---
## 守恒流、正定密度与内积


Dirac 方程及其共轭方程分别为：

$$
\mathrm{i}\gamma^\mu\partial_\mu\psi=m\psi
$$

$$
\mathrm{i}(\partial_\mu\bar\psi)\gamma^\mu=-m\bar\psi
$$

定义四维流：

$$
j^\mu=\bar\psi\gamma^\mu\psi
$$

对它取散度时，导数必须分别作用在 $\bar\psi$ 与 $\psi$ 上：

$$
\partial_\mu j^\mu=(\partial_\mu\bar\psi)\gamma^\mu\psi+\bar\psi\gamma^\mu\partial_\mu\psi
$$

由共轭方程得到：

$$
(\partial_\mu\bar\psi)\gamma^\mu=\mathrm{i}m\bar\psi
$$

由原方程得到：

$$
\bar\psi\gamma^\mu\partial_\mu\psi=-\mathrm{i}m\bar\psi\psi
$$

把两项代回散度，质量项恰好抵消：

$$
\partial_\mu j^\mu=\mathrm{i}m\bar\psi\psi-\mathrm{i}m\bar\psi\psi=0
$$

这就是连续性方程。
把时间和空间分量分开，它等价于：

$$
\frac{\partial j^0}{\partial t}+\bm{\nabla}\cdot\bm{j}=0
$$

时间分量为：

$$
j^0=\bar\psi\gamma^0\psi=\psi^\dagger\gamma^0\gamma^0\psi=\psi^\dagger\psi\geq0
$$

空间分量为：

$$
j^i=\bar\psi\gamma^i\psi=\psi^\dagger\alpha^i\psi
$$

这与 Klein–Gordon 流有一个关键差别：Dirac 流的时间分量对任意非零旋量都是正的。
因此，在单粒子 Dirac 理论中可以把 $j^0$ 解释为概率密度，把 $\bm{j}$ 解释为概率流密度。

若场在空间无穷远处足够快地衰减，对连续性方程做空间积分：

$$
\frac{\mathrm{d}}{\mathrm{d}t}\int j^0\mathrm{d}^3x=-\int\bm{\nabla}\cdot\bm{j}\mathrm{d}^3x=-\oint_{S_\infty}\bm{j}\cdot\mathrm{d}\bm{S}=0
$$

所以总概率：

$$
\int\psi^\dagger\psi\mathrm{d}^3x
$$

不随时间变化。

对于两个 Dirac 方程的解 $\psi_1$ 与 $\psi_2$，可以定义等时内积：

$$
(\psi_1,\psi_2)=\int\psi_1^\dagger(t,\bm{x})\psi_2(t,\bm{x})\mathrm{d}^3x
$$

对交叉流 $j_{12}^\mu=\bar\psi_1\gamma^\mu\psi_2$ 重复刚才的推导，可得 $\partial_\mu j_{12}^\mu=0$，所以这个内积也与时间无关。
更协变地，可以在任意类空超曲面 $\Sigma$ 上写成：

$$
(\psi_1,\psi_2)_\Sigma=\int_\Sigma\bar\psi_1\gamma^\mu\psi_2\mathrm{d}\Sigma_\mu
$$

类空超曲面可以形象地理解为“一整张空间切片”：沿切片的任意无穷小切向位移都是类空的。
若进一步选取类空的 Cauchy（柯西）曲面，它还要求每条完整的类时因果轨迹都与这张切片相交一次，因此这张切片能够承载一套完整的初始数据。
$\mathrm{d}\Sigma_\mu$ 是这张切片的有向三维面积元，它的方向沿切片的类时法线。
在 $t$ 为常数的切片上，$\mathrm{d}\Sigma_\mu=(\mathrm{d}^3x,0,0,0)$，上式就回到普通等时内积。

自由 Dirac 哈密顿量为：

$$
H=\bm{\alpha}\cdot\bm{p}+\beta m
$$

由于 $\alpha^i$、$\beta$ 和 $p^i=-\mathrm{i}\partial_i$ 都是厄米的，适当边界条件下 $H$ 也是厄米的。
这从算符角度再次说明时间演化保持内积。

进入量子场论后，$\psi$ 不再是固定粒子数的单粒子波函数，而是能够产生和湮灭粒子的场算符。
此时 $j^\mu$ 更基本的解释是某个整体相位对称性对应的守恒流，空间积分给出守恒荷。
它的时间分量作为算符并不等同于“某一个粒子出现在这里的概率密度”。


---
## 自旋、总角动量与螺旋度


在标准 Dirac 表示中定义 $\Sigma^i=\mqty(\sigma^i&0\\0&\sigma^i)$ 与 $S^i=\frac{1}{2}\Sigma^i$。

泡利矩阵的对易关系 $[\sigma^i,\sigma^j]=2\mathrm{i}\epsilon^{ijk}\sigma^k$ 立即给出：

$$
[S^i,S^j]=\mathrm{i}\epsilon^{ijk}S^k
$$

这正是角动量代数。
又因为每个分块中都有 $\sum_i(\sigma^i)^2=3$：

$$
\bm{S}^2=\frac{1}{4}\sum_i(\Sigma^i)^2=\frac{3}{4}
$$

与角动量本征值 $s(s+1)$ 比较可得 $s=\frac{1}{2}$。
因此，四分量并不表示自旋为 $\frac{3}{2}$；正能量和负能量分支各自都携带两个自旋为 $\frac{1}{2}$ 的态。

对运动粒子，单独的自旋算符一般不与自由哈密顿量对易。
由分块矩阵可以验证：

$$
[\Sigma^i,\alpha^j]=2\mathrm{i}\epsilon^{ijk}\alpha^k
$$

而 $[\Sigma^i,\beta]=0$。
所以：

$$
[H,S^i]=[\alpha^jp^j,S^i]=\mathrm{i}(\bm{\alpha}\times\bm{p})^i
$$

定义轨道角动量：

$$
\bm{L}=\bm{x}\times\bm{p}
$$

利用 $[p^j,x^k]=-\mathrm{i}\delta^{jk}$，得到：

$$
[H,L^i]=-\mathrm{i}(\bm{\alpha}\times\bm{p})^i
$$

定义总角动量 $\bm{J}=\bm{L}+\bm{S}$，两式相加后恰好抵消：

$$
[H,J^i]=0
$$

因此，在自由旋转对称体系中真正守恒的是总角动量，而不是任意固定方向上的轨道角动量或自旋分别守恒。
这也解释了 Dirac 方程为什么必须同时包含轨道运动与内禀自旋结构。

对于动量确定的自由粒子，特别有用的量是螺旋度，即自旋沿运动方向的投影：

$$
h=\frac{\bm{S}\cdot\bm{p}}{|\bm{p}|}=\frac{\bm{\Sigma}\cdot\bm{p}}{2|\bm{p}|}
$$

由于 $\beta$ 与 $\Sigma^i$ 对易，只需检查动量项：

$$
[\bm{\alpha}\cdot\bm{p},\bm{\Sigma}\cdot\bm{p}]=[\alpha^i,\Sigma^j]p^ip^j
$$

$[\alpha^i,\Sigma^j]$ 对 $i,j$ 是反对称的，而 $p^ip^j$ 是对称的，所以缩并为零：

$$
[H,h]=0
$$

因此自由粒子可以同时取能量、动量与螺旋度的本征态。
若二分量旋量满足：

$$
(\bm{\sigma}\cdot\widehat{\bm{p}})\xi_\lambda=2\lambda\xi_\lambda
$$

其中 $\widehat{\bm{p}}=\bm{p}/|\bm{p}|$，那么 $\lambda=\pm\frac{1}{2}$。
把这样的 $\xi_\lambda$ 代入上一节的 $u$ 旋量，就得到确定螺旋度的正频率解。

螺旋度与手征性不是同一个概念。
螺旋度比较自旋方向与三维动量方向，依赖观察者所处的惯性系；手征性则是 $\gamma^5$ 的本征性质，来自洛伦兹群表示的分解。
对于有质量粒子，观察者可以通过推动超过粒子，使动量反向而自旋方向不反向，因此螺旋度会改变。
对于严格无质量粒子，没有惯性观察者能够超过它，所以螺旋度在恰当洛伦兹变换下保持不变。
对无质量的正能量自由解，螺旋度与手征性可以建立直接对应；有质量时两者不能混用。


---
## 非相对论极限与负频率分支


非相对论极限要求动量远小于质量，即 $|\bm{p}|\ll m$。
正频率解的总能量接近静止能量：

$$
E=m+\frac{\bm{p}^2}{2m}+O\left(\frac{|\bm{p}|^4}{m^3}\right)
$$

为了把快速振荡的静止能量相位分离出来，写成：

$$
\psi(t,\bm{x})=\mathrm{e}^{-\mathrm{i}mt}\mqty(\phi(t,\bm{x})\\\chi(t,\bm{x}))
$$

在标准 Dirac 表示中，哈密顿形式的方程是：

$$
\mathrm{i}\frac{\partial\psi}{\partial t}=\mqty(m&\bm{\sigma}\cdot\bm{p}\\\bm{\sigma}\cdot\bm{p}&-m)\psi
$$

时间导数作用在静止能量相位和缓慢变化的旋量上：

$$
\mathrm{i}\frac{\partial\psi}{\partial t}=\mathrm{e}^{-\mathrm{i}mt}\left[m\mqty(\phi\\\chi)+\mathrm{i}\mqty(\partial_t\phi\\\partial_t\chi)\right]
$$

比较上下两个二分量，得到耦合方程：

$$
\mathrm{i}\partial_t\phi=(\bm{\sigma}\cdot\bm{p})\chi
$$

以及：

$$
\mathrm{i}\partial_t\chi=(\bm{\sigma}\cdot\bm{p})\phi-2m\chi
$$

第二式可以改写为：

$$
(2m+\mathrm{i}\partial_t)\chi=(\bm{\sigma}\cdot\bm{p})\phi
$$

在非相对论区间，去掉静止能量后剩余的时间变化率约为 $\bm{p}^2/(2m)$，远小于 $2m$。
因此最低阶近似为：

$$
\chi\simeq\frac{\bm{\sigma}\cdot\bm{p}}{2m}\phi
$$

这说明下方二分量比上方二分量小一个 $|\bm{p}|/m$ 的量级，所以常把 $\phi$ 称为大分量，把 $\chi$ 称为小分量。
这里的大小判断只适用于标准 Dirac 表示中的正频率、低动量解，不是任意表示下都成立的绝对说法。

把近似结果代回第一式：

$$
\mathrm{i}\partial_t\phi\simeq\frac{(\bm{\sigma}\cdot\bm{p})^2}{2m}\phi
$$

利用 $(\bm{\sigma}\cdot\bm{p})^2=\bm{p}^2$：

$$
\mathrm{i}\partial_t\phi\simeq\frac{\bm{p}^2}{2m}\phi=-\frac{\nabla^2}{2m}\phi
$$

这正是自由 Schrödinger（薛定谔）方程，但波函数 $\phi$ 仍有两个分量，用来描述自旋向上和自旋向下。
因此，非相对论极限不是把自旋删掉，而是把四分量 Dirac 结构约化为二分量的泡利旋量结构。

若进一步加入电磁场的最小耦合，下一阶展开会产生磁矩与自旋磁场耦合。
这里暂不展开这一部分，因为当前目标是理解自由 Dirac 方程本身。

最后必须回到负频率解。
哈密顿量的本征值满足：

$$
H^2=\bm{p}^2+m^2
$$

所以既有 $+E$ 本征值，也有 $-E$ 本征值。
Dirac 流的正定性解决了 Klein–Gordon 单粒子概率密度不定号的问题，却没有消除负能谱。
如果把 Dirac 方程只解释为单粒子波函数方程，一个粒子似乎能够不断跃迁到更低的负能态，能量便没有下界。

正确的解决方法不是删去负频率解。
删去它们会破坏场的局域性和完备性，也无法描述相对论过程中粒子数的改变。
在量子场论中，负频率部分被重新解释为反粒子的产生部分，费米场使用反对易关系量子化，最终哈密顿量可以写成粒子与反粒子正能量数算符之和，再加上可处理的真空常数。

这一重新解释属于 Dirac 场的正则量子化，而不是经典 Dirac 方程单独能够完成的工作。
到这里，我们已经具备进入下一阶段所需的全部材料：旋量完备关系、守恒荷、两族平面波解，以及正负频率的物理问题。
