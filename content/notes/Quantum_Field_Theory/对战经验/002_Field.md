---
title: 狭义相对论起了起了什么作用?
date: 2026-08-16
weight: 2
---
狭义相对论改变了我们对时间, 空间, 粒子, 因果关系和局域性的理解.
这些改变最后迫使我们放弃固定粒子数的单粒子理论, 转而使用能够产生和湮灭粒子的量子场.
这一篇只回答一个问题: **狭义相对论究竟在量子场论中负责什么**?


---
## 先说结论


狭义相对论对量子场论提出了几条核心要求.
1. 不同惯性系必须给出相同的物理规律.
2. 空间与时间必须被统一成 Minkowski 时空.
3. 任何可传播的影响都不能超出光锥.
4. 能量与动量必须组成 Lorentz 四矢量.
5. 场必须按照 Lorentz 群的表示变换.
6. 相互作用必须由局域的 Lorentz 标量构造.


这些要求带来一连串后果.
1. 自由粒子的能量满足相对论色散关系.
2. 粒子数不再必须保持不变.
3. 反粒子不可避免地出现.
4. 自旋来自时空对称性.
5. 整数自旋与半整数自旋必须服从不同的统计规律.
6. 类空间隔的局域可观测量必须彼此相容, 从而保证因果律.
所以狭义相对论重新规定了一个量子理论可以怎样组织自己的自由度.


---
## 荒谬的相对论单粒子波函数


我们先从非相对论量子力学开始.
一个自由粒子的 Schrödinger 方程为: $\mathrm{i}\hbar\pdv*{\psi}{t}=-\hbar^2/(2m) \nabla^2\psi$.
这个方程对时间是一阶微分, 对空间是二阶微分.
时间与空间在方程中处于完全不同的地位.
这在 Galilei 变换下没有问题.
Galilei 变换假设所有惯性系共享同一个绝对时间.


狭义相对论不允许这样做.
Lorentz 变换会把时间与空间混合起来.
一个参考系中的时间间隔, 在另一个参考系中会同时涉及时间间隔与空间间隔.
所以 Schrödinger 方程不可能直接成为 Lorentz 协变的基本方程.
这个结论可以直接从 Lorentz 变换算出来.
考虑沿 $x$ 方向速度为 $v$ 的 Lorentz 变换: $t'=\gamma(t-vx/c^2), \quad x'=\gamma(x-vt), \quad \gamma=1/\sqrt{1-v^2/c^2}$.
由链式法则:
$$
\partial_t =\gamma\partial_{t'}-\gamma v\partial_{x'}, \quad \partial_x =-\gamma\frac{v}{c^2}\partial_{t'}+\gamma\partial_{x'}
$$
因此空间二阶导数变成:
$$
\partial_x^2 =\gamma^2\frac{v^2}{c^4}\partial_{t'}^2 -2\gamma^2\frac{v}{c^2}\partial_{t'}\partial_{x'} +\gamma^2\partial_{x'}^2
$$
把两个变换式完整代入 Schrödinger 算符:
$$
\mathrm{i}\hbar\partial_t+\frac{\hbar^2}{2m}\partial_x^2=\mathrm{i}\hbar\gamma (\partial_{t'}-v\partial_{x'})+\frac{\hbar^2\gamma^2}{2m} (\frac{v^2}{c^4}\partial_{t'}^2-2\frac{v}{c^2}\partial_{t'}\partial_{x'}+\partial_{x'}^2)
$$
右边的 $\partial_{t'}^2$ 与 $\partial_{t'}\partial_{x'}$ 没有可以与它们抵消的项.
原来的 Schrödinger 算符只有 $\partial_t$ 与 $\partial_x^2$, 但是 Lorentz 变换以后出现了 $\partial_{t'}^2$ 与 $\partial_{t'}\partial_{x'}$.
所以它不可能保持 $\mathrm{i}\hbar\partial_{t'}+\hbar^2\partial_{x'}^2/(2m)$ 的原来形式.


也可以直接看能动关系.
Lorentz 变换下: $E'=\gamma(E-vp_x), \quad p_x'=\gamma(p_x-vE/c^2)$.
两个式子直接给出:
$$
\begin{aligned}
E'^2-c^2p_x'^2 &=\gamma^2[(E-vp_x)^2-c^2(p_x-\frac{vE}{c^2})^2]\\
&=\gamma^2(1-\frac{v^2}{c^2})(E^2-c^2p_x^2)\\
&=E^2-c^2p_x^2
\end{aligned}
$$
如果 $E=p_x^2/(2m)$ 在一个参考系成立, 一般并不能推出 $E'=p_x'^2/(2m)$.
真正被 Lorentz 变换保持的是 $E^2-p^2c^2=m^2c^4$.
最直观的修补方式是从相对论能量关系开始 $E^2=p^2c^2+m^2c^4$.
把 $E\to\mathrm{i}\hbar\partial_t$ 与 $\bm{p}\to-\mathrm{i}\hbar\nabla$ 代入, 可以得到 Klein-Gordon 方程: $(1/c^2 \pdv*[2]{t}-\nabla^2+m^2c^2/\hbar^2)\phi(x)=0$.
这个方程对时间与空间都是二阶微分, 因而能够写成 Lorentz 协变的形式.


但是如果硬把 $\phi(x)$ 当成一个单粒子波函数, 新问题立刻出现.
Schrödinger 波函数的概率密度 $\abs{\psi}^2$ 总是非负.
Klein-Gordon 方程对应的守恒密度却不一定非负.
这个结论也可以直接从方程推出.
先固定记号:
$$
x^\mu=(ct, \bm{x}), \quad \partial_\mu =( \frac{1}{c}\partial_t, \nabla ), \quad \partial^\mu =( \frac{1}{c}\partial_t, -\nabla )
$$
因此: $\Box =\partial_\mu\partial^\mu =1/c^2 \partial_t^2-\nabla^2$.
Klein-Gordon 方程与其复共轭分别为: $(\Box+\mu^2)\phi=0, \quad (\Box+\mu^2)\phi^*=0, \quad \mu=mc/\hbar$.
第一式乘 $\phi^*$, 第二式乘 $\phi$, 然后相减: $\phi^*\Box\phi-\phi\Box\phi^*=0$.
利用乘积法则可以改写成连续性方程:
$$
\begin{aligned}
\phi^*\Box\phi-\phi\Box\phi^* &=\phi^*\partial_\mu\partial^\mu\phi-\phi\partial_\mu\partial^\mu\phi^*\\
&=\partial_\mu(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)
\end{aligned}
$$
因此可以定义:
$$
\partial_\mu j^\mu=0, \quad j^\mu=\frac{\mathrm{i}\hbar}{2m} ( \phi^*\partial^\mu\phi -\phi\partial^\mu\phi^* )
$$
把 $j^\mu=(c\rho, \bm{j})$ 代入 $\partial_\mu j^\mu=0$: $1/c \partial_t(c\rho) +\nabla\cdot\bm{j}=0$, 也就是 $\partial_t\rho+\nabla\cdot\bm{j}=0$.
对平面波: $\phi(x) =N\mathrm{e}^{-\mathrm{i}(Et-\bm{p}\cdot\bm{x})/\hbar}$, 有:
$$
\partial^0\phi =\frac{1}{c}\partial_t\phi =-\frac{\mathrm{i}E}{\hbar c}\phi, \quad \partial^0\phi^* =+\frac{\mathrm{i}E}{\hbar c}\phi^*
$$
所以:
$$
j^0 =\frac{\mathrm{i}\hbar}{2m} ( -\frac{2\mathrm{i}E}{\hbar c} )\abs{N}^2 =\frac{E}{mc}\abs{N}^2, \quad \rho=\frac{j^0}{c} =\frac{E}{mc^2}\abs{N}^2
$$
正频率解给出 $j^0>0$, 负频率解给出 $j^0<0$.
所以 $j^0$ 不能像 $\abs{\psi}^2$ 一样解释为恒正的单粒子概率密度.
在复标量场论里, 它更合适的解释是荷密度.
所以它不能直接解释为普通的单粒子位置概率密度.


Dirac 方程把时间导数重新变成一阶, 也给出了非负的单粒子密度.
但是 Dirac 方程仍然包含负频率解.
自由 Dirac 方程为: $( \mathrm{i}\hbar c\gamma^\mu\partial_\mu -mc^2 )\psi=0$.
其伴随方程为:
$$
\mathrm{i}\hbar c (\partial_\mu\bar{\psi})\gamma^\mu +mc^2\bar{\psi}=0, \quad \bar{\psi}=\psi^\dagger\gamma^0
$$
原方程左乘 $\bar{\psi}$, 伴随方程右乘 $\psi$, 然后相加:
$$
\begin{aligned}
0 &=\mathrm{i}\hbar c[(\partial_\mu\bar{\psi})\gamma^\mu\psi+\bar{\psi}\gamma^\mu\partial_\mu\psi]\\
&=\mathrm{i}\hbar\partial_\mu(c\bar{\psi}\gamma^\mu\psi)
\end{aligned}
$$
因此 Dirac 流: $j^\mu=c\bar{\psi}\gamma^\mu\psi$ 满足 $\partial_\mu j^\mu=0$.
其时间分量为: $j^0 =c\bar{\psi}\gamma^0\psi =c\psi^\dagger\gamma^0\gamma^0\psi =c\psi^\dagger\psi \geq0$, 这里使用了 $(\gamma^0)^2=\mathbb{1}$.
把自由 Dirac 方程写成哈密顿量形式:
$$
\mathrm{i}\hbar\partial_t\psi=H_D\psi, \quad H_D=c\bm{\alpha}\cdot\bm{p}+\beta mc^2, \quad \bm{p}=-\mathrm{i}\hbar\nabla
$$
Dirac 矩阵满足: $\{\alpha_i,\alpha_j\}=2\delta_{ij}\mathbb{1}, \quad \{\alpha_i,\beta\}=0, \quad \beta^2=\mathbb{1}$.
所以:
$$
H_D^2 =c^2\alpha_i\alpha_jp_ip_j +mc^3(\alpha_i\beta+\beta\alpha_i)p_i +m^2c^4\beta^2
$$
对第一项使用:
$$
\alpha_i\alpha_jp_ip_j =\frac{1}{2} \{\alpha_i,\alpha_j\}p_ip_j +\frac{1}{2} [\alpha_i,\alpha_j]p_ip_j
$$
$p_ip_j$ 对 $i, j$ 对称, $[\alpha_i,\alpha_j]$ 对 $i, j$ 反对称, 因此第二项为零.
再使用 $\{\alpha_i,\alpha_j\}=2\delta_{ij}\mathbb{1}$, $\{\alpha_i,\beta\}=0$ 与 $\beta^2=\mathbb{1}$: $H_D^2 =c^2\delta_{ij}p_ip_j+m^2c^4 =c^2\bm{p}^2+m^2c^4$.
如果 $H_Du=Eu$, 那么 $H_D^2u=E^2u$, 从而 $E^2=\bm{p}^2c^2+m^2c^4$, 因而: $E=\pm\sqrt{\bm{p}^2c^2+m^2c^4}$.
把方程改成一阶并没有消除负频率分支.
它只是把相对论色散关系线性化了.
这不是某个方程写坏了.
Klein-Gordon 方程和 Dirac 方程都在提醒我们: 相对论量子理论不能永远被限制在一个固定粒子数的单粒子 Hilbert 空间里.


---
## 把粒子压得太小会发生什么


为什么相对论会破坏固定粒子数的描述?
最直观的理由来自局域化.
位置与动量的 Robertson 不等式为:
$$
\Delta x \Delta p \geq \frac{1}{2} \abs{\expval{[x,p]}} =\frac{\hbar}{2}
$$
其中使用了正则对易关系 $[x,p]=\mathrm{i}\hbar$.
如果想把一个粒子限制在尺度 $\Delta x$ 内, 因此至少需要 $\Delta p\geq\hbar/(2\Delta x)$.
在估算数量级时写成 $\Delta p\sim\hbar/\Delta x$.
当 $\Delta x$ 越来越小时, 所需动量越来越大.
在相对论区域, 高动量对应的能量大约为 $E\sim c\Delta p$.
因此 $E\gtrsim\hbar c/\Delta x$.
当 $\Delta x$ 接近粒子的 Compton 波长 $\lambda_C=\hbar/(mc)$ 时, 局域化所需能量已经达到静质量能量 $mc^2$ 的数量级.
更具体地, 把 $\Delta p\sim\hbar/\Delta x$ 代入相对论能量: $E(\Delta x) \sim\sqrt{ \hbar^2c^2/(\Delta x)^2 +m^2c^4 }$.
局域化需要额外提供的动能大约为: $K(\Delta x) \sim \sqrt{ \hbar^2c^2/(\Delta x)^2 +m^2c^4 } -mc^2$.
使用 $\lambda_C=\hbar/(mc)$ 可以把它改写成: $K(\Delta x) \sim mc^2 [ \sqrt{1+( \lambda_C/\Delta x )^2} -1 ]$.
当 $\Delta x\gg\lambda_C$ 时, 令 $\varepsilon=(\lambda_C/\Delta x)^2\ll1$, 并使用 Taylor 展开: $\sqrt{1+\varepsilon} =1+\varepsilon/2 -\varepsilon^2/8 +O(\varepsilon^3)$.
因此: $K(\Delta x) =\hbar^2/(2m(\Delta x)^2) +O( \hbar^4/(m^3c^2(\Delta x)^4) )$.
当 $\Delta x\gg\lambda_C$ 时, 展开根号得到 $K\sim\hbar^2/[2m(\Delta x)^2]$, 这就是非相对论结果.
当 $\Delta x\lesssim\lambda_C$ 时, 根号中的动量项与质量项同阶, $K$ 已经进入 $mc^2$ 的能标.
产生一对质量为 $m$ 的粒子与反粒子至少需要 $2mc^2$ 的质心系能量.
设入射总四动量为 $P^\mu$, 在质心系中 $P^\mu=(\sqrt{s}/c, \bm{0})$, 其中 $s=P_\mu P^\mu c^2$.
对终态粒子与反粒子: $\sqrt{s} =E_1+E_2 =2\sqrt{\bm{p}^2c^2+m^2c^4} \geq2mc^2$.
等号在阈值点 $\bm{p}=\bm{0}$ 取到.
把这个阈值与局域化能量 $E_{\text{loc}}\sim\hbar c/\Delta x$ 比较:
$$
\frac{\hbar c}{\Delta x} \gtrsim2mc^2 \quad\Rightarrow\quad \Delta x \lesssim\frac{\hbar}{2mc} =\frac{\lambda_C}{2}
$$
这个数值还会受到动量与荷守恒限制, 但是临界长度只能是 $\lambda_C$ 的数量级.
再继续压缩, 实验装置注入的能量就可能足以产生新的粒子与反粒子.
具体产生过程还必须满足电荷, 动量和其他守恒律, 但是固定粒子数的假设已经不再可靠.


这件事非常关键.
非相对论量子力学可以先规定系统中有 $N$ 个粒子, 然后只研究这 $N$ 个粒子的波函数.
相对论量子理论一般不能把某个固定的 $N$ 当成永远不变的前提.
系统的 Hilbert 空间必须允许不同粒子数的状态同时存在.
在自由场以及微扰散射理论的基本构造中, 这种空间写成: $\mathcal{H}=\mathcal{H}_0\oplus\mathcal{H}_1\oplus\mathcal{H}_2\oplus\cdots$.
$\mathcal{H}_0$ 是真空扇区, $\mathcal{H}_1$ 是单粒子扇区, $\mathcal{H}_2$ 是双粒子扇区.
这种包含不同粒子数扇区的空间称为 Fock 空间.
严格的相互作用量子场论未必能够全局地使用自由粒子 Fock 空间, 但 Fock 空间仍然是理解粒子产生, 湮灭与散射态的起点.


能够在这些扇区之间移动的算符, 就是产生与湮灭算符.
所以产生算符和湮灭算符不是为了计算方便才发明的技巧.
它们是相对论允许粒子产生与湮灭以后必须出现的语言.


---
## Minkowski 时空


Newton 力学把空间与时间分开处理.
狭义相对论把它们合并为四维时空.
一个时空事件写成 $x^\mu=(ct, \bm{x})$.
这里 $\mu=0, 1, 2, 3$.
本文采用度规号差 $(+, -, -, -)$.
两个事件之间的不变量为 $\Delta s^2=c^2\Delta t^2-\abs{\Delta\bm{x}}^2$.
Lorentz 变换会改变 $\Delta t$ 与 $\Delta\bm{x}$, 但是保持 $\Delta s^2$ 不变.
仍然只考虑沿 $x$ 方向的 Lorentz 变换.
直接代入 $t'=\gamma(t-vx/c^2)$ 与 $x'=\gamma(x-vt)$: $c^2t'^2-x'^2 =\gamma^2 [ c^2(t-vx/c^2)^2 -(x-vt)^2 ]$.
展开括号: $c^2t'^2-x'^2 =\gamma^2 (1-v^2/c^2) (c^2t^2-x^2)$.
因为 $\gamma^2(1-v^2/c^2)=1$, 最后得到: $c^2t'^2-x'^2=c^2t^2-x^2$.
这就是 Lorentz 变换保持 Minkowski 间隔的直接计算.


由 $\Delta s^2$ 的符号, 时空间隔分成三类.
1. $\Delta s^2>0$ 称为类时间隔.
2. $\Delta s^2=0$ 称为类光间隔.
3. $\Delta s^2<0$ 称为类空间隔.
类时间隔的两个事件可以存在因果联系.
类光间隔对应以光速传播的影响.
类空间隔最特别.
如果两个事件类空分离, 不同惯性系甚至可能对哪个事件先发生给出不同答案.
考虑两个事件之差 $(\Delta t, \Delta x)$.
Lorentz 变换后的时间差为: $\Delta t' =\gamma ( \Delta t-v\Delta x/c^2 )$.
如果两个事件类空分离, 则 $\abs{\Delta x}>c\abs{\Delta t}$.
因此可以选择 $v=c^2\Delta t/\Delta x$, 并且自动满足 $\abs{v}<c$.
在这个参考系中 $\Delta t'=0$.
再把 $v$ 选得稍大或稍小, $\Delta t'$ 就可以取相反符号.
所以类空分离事件的先后顺序不是 Lorentz 不变.
因此, 类空分离的事件不能存在可以控制的因果影响.
否则某个惯性系会看到结果先于原因发生.
这就是量子场论中局域性与微观因果律的时空来源.


---
## Lorentz 协变


Lorentz 协变的含义是: 不同惯性系可以使用不同坐标与不同场分量, 但是它们描述的是同一个物理过程, 并且物理方程在变换后保持相同形式.
Lorentz 变换写成 $x'^\mu=\Lambda^\mu_\nu x^\nu$.
它满足 $\Lambda^{\mathrm{T}}\eta\Lambda=\eta$, 从而保持时空间隔不变.
不同类型的场在 Lorentz 变换下有不同的变换方式.


标量场满足 $\phi'(x')=\phi(x)$.
它没有需要随参考系混合的内部时空分量.
四矢量场满足 $A'^\mu(x')=\Lambda^\mu_\nu A^\nu(x)$.
电磁四势 $A^\mu$ 就是四矢量场.
旋量场满足 $\psi'(x')=S(\Lambda)\psi(x)$.
电子的 Dirac 场就是旋量场.
$S(\Lambda)$ 不是普通四矢量使用的矩阵 $\Lambda$.
这就是为什么自旋 $1/2$ 场不能被当成一个带四个分量的普通四矢量.
所以"场是什么类型"不是随意选择的标签.
它说明场按照 Lorentz 群的哪一种表示变换.
这里的"表示"具有严格的群表示含义.
若场按照矩阵 $D(\Lambda)$ 变换, 连续进行两次 Lorentz 变换必须满足: $D(\Lambda_2\Lambda_1) =D(\Lambda_2)D(\Lambda_1)$.
标量场对应 $D(\Lambda)=\mathbb{1}$.
四矢量场对应 $D(\Lambda)=\Lambda$.
旋量场则对应 Lorentz 群覆盖群上的旋量表示.


Lorentz 协变性还要求导数正确变换.
由 $x'^\mu=\Lambda^\mu_{ \nu}x^\nu$ 与链式法则:
$$
\partial'_\mu =\frac{\partial x^\nu}{\partial x'^\mu}\partial_\nu =(\Lambda^{-1})^\nu_{ \mu}\partial_\nu
$$
对标量场: $\partial'_\mu\phi'(x') =(\Lambda^{-1})^\nu_{ \mu}\partial_\nu\phi(x)$.
因此:
$$
\begin{aligned}
\partial'_\mu\phi'\partial'^\mu\phi' &=\eta^{\mu\nu}(\Lambda^{-1})^\rho_\mu(\Lambda^{-1})^\sigma_\nu\partial_\rho\phi\partial_\sigma\phi\\
&=\eta^{\rho\sigma}\partial_\rho\phi\partial_\sigma\phi\\
&=\partial_\mu\phi\partial^\mu\phi
\end{aligned}
$$
第二个等号使用了由 $\Lambda^{\mathrm{T}}\eta\Lambda=\eta$ 推出的恒等式: $\eta^{\mu\nu} (\Lambda^{-1})^\rho_\mu (\Lambda^{-1})^\sigma_\nu =\eta^{\rho\sigma}$.
所以 $\partial_\mu\phi\partial^\mu\phi$ 的确是 Lorentz 标量, 而不是看起来像四维公式就假装是标量.