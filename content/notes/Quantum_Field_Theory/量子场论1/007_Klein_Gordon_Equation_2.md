---
title: Klein–Gordon 方程（二）：平面波、质量壳与模展开
date: 2026-08-17
weight: 7
---
上一篇从相对论色散关系和经典场作用量两条路线得到 $(\Box+m^2)\phi=0$.
本篇求出它的一般平面波模, 说明二阶时间方程为什么必然包含两个频率分支, 并把有限体积中的离散求和过渡到连续动量积分.
推导中会区分三件容易混在一起的事: 空间傅里叶基底的正交性, Klein–Gordon 解空间的归一化, 以及量子理论中的态归一化.
本篇只处理前两者所需的数学准备, 暂不把经典展开系数解释成产生或湮灭算符.

---
## 质量壳上的正频率与负频率模


先直接寻找四维平面波解 $u_p(x)=N_p\mathrm{e}^{-\mathrm{i}px}$.
其中 $px=p_\mu x^\mu=p^0t-\bm{p}\cdot\bm{x}$, $N_p$ 是暂时未定的归一化常数.
对平面波求一次导数:
$$
\partial_\mu u_p=-\mathrm{i}p_\mu u_p
$$
再求一次并缩并指标:
$$
\Box u_p=\partial_\mu\partial^\mu u_p=-p_\mu p^\mu u_p=-p^2u_p
$$
代入 Klein–Gordon 方程:
$$
(\Box+m^2)u_p=(-p^2+m^2)u_p=0
$$
非零平面波因此必须满足 $p^2=m^2$.
这正是自由相对论粒子的质量壳条件.
微分方程没有额外制造一条色散关系, 它把经典相对论质量壳编码进了允许的波矢集合.


把四动量写成 $p^\mu=(p^0,\bm{p})$, 质量壳条件展开为:
$$
(p^0)^2-\bm{p}^2=m^2
$$
定义始终取正数的频率 $E_{\bm{p}}=\omega_{\bm{p}}=\sqrt{\bm{p}^2+m^2}>0$.
同一个三动量对应两个能量根 $p^0=+E_{\bm{p}}$ 和 $p^0=-E_{\bm{p}}$.
它们是质量双曲面的上支和下支.
上支在正规且保持时间方向的洛伦兹变换下映到上支, 下支映到下支.
因此正负能量支的区分不是某个特殊惯性系中的偶然选择.


从偏微分方程本身也能看到两支解.
对空间坐标作傅里叶展开:
$$
\phi(t,\bm{x})=\int\widetilde{\phi}(t,\bm{k})\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}\frac{\dd[3]{k}}{(2\pi)^3}
$$
空间拉普拉斯算符作用在每个傅里叶模上给出:
$$
\nabla^2\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}=-\bm{k}^2\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}
$$
把展开代入 $\partial_t^2\phi-\nabla^2\phi+m^2\phi=0$.
由于不同傅里叶模线性独立, 每个 $\bm{k}$ 的系数必须分别满足:
$$
\partial_t^2\widetilde{\phi}(t,\bm{k})+\omega_{\bm{k}}^2\widetilde{\phi}(t,\bm{k})=0
$$
其中 $\omega_{\bm{k}}=\sqrt{\bm{k}^2+m^2}$.
这就是频率为 $\omega_{\bm{k}}$ 的简谐振子方程.
它的两个线性独立复解为 $\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}t}$ 和 $\mathrm{e}^{+\mathrm{i}\omega_{\bm{k}}t}$.
所以一般傅里叶系数为:
$$
\widetilde{\phi}(t,\bm{k})=A(\bm{k})\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}t}+B(\bm{k})\mathrm{e}^{+\mathrm{i}\omega_{\bm{k}}t}
$$
完整解为:
$$
\phi(t,\bm{x})=\int[A(\bm{k})\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}t}+B(\bm{k})\mathrm{e}^{+\mathrm{i}\omega_{\bm{k}}t}]\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}\frac{\dd[3]{k}}{(2\pi)^3}
$$


这两个系数恰好承载上一篇所说的两份初值.
设初始场及其时间导数的傅里叶变换为:
$$
\widetilde{\phi}(0,\bm{k})=\widetilde{f}(\bm{k}) \quad \partial_t\widetilde{\phi}(0,\bm{k})=\widetilde{g}(\bm{k})
$$
令 $t=0$ 得到:
$$
A(\bm{k})+B(\bm{k})=\widetilde{f}(\bm{k})
$$
对时间求导后令 $t=0$ 得到:
$$
-\mathrm{i}\omega_{\bm{k}}A(\bm{k})+\mathrm{i}\omega_{\bm{k}}B(\bm{k})=\widetilde{g}(\bm{k})
$$
解这个二元一次方程组:
$$
A(\bm{k})=\frac{1}{2}[\widetilde{f}(\bm{k})+\frac{\mathrm{i}}{\omega_{\bm{k}}}\widetilde{g}(\bm{k})]
$$
以及:
$$
B(\bm{k})=\frac{1}{2}[\widetilde{f}(\bm{k})-\frac{\mathrm{i}}{\omega_{\bm{k}}}\widetilde{g}(\bm{k})]
$$
因此保留正负两个频率分支不是重复计算.
只有两个分支共同存在, 才能表示任意允许的场初值与共轭动量初值.


为了改写成四维内积形式, 第一项直接写成 $\mathrm{e}^{-\mathrm{i}kx}$, 其中 $k^0=\omega_{\bm{k}}$.
对第二项把积分变量从 $\bm{k}$ 改名为 $-\bm{k}$.
因为 $\omega_{-\bm{k}}=\omega_{\bm{k}}$ 且积分测度在这个变量反射下不变, 可以把一般解写成:
$$
\phi(x)=\int[C(\bm{k})\mathrm{e}^{-\mathrm{i}kx}+D(\bm{k})\mathrm{e}^{+\mathrm{i}kx}]\frac{\dd[3]{k}}{(2\pi)^3}
$$
这里两个指数中的 $k^0$ 都约定为正数 $\omega_{\bm{k}}$.
$\mathrm{e}^{-\mathrm{i}kx}$ 称为正频率模, 因为它的时间因子是 $\mathrm{e}^{-\mathrm{i}\omega t}$.
$\mathrm{e}^{+\mathrm{i}kx}$ 称为负频率模, 因为它的时间因子是 $\mathrm{e}^{+\mathrm{i}\omega t}$.


有时会看到 $\mathrm{e}^{\pm\mathrm{i}(\omega t+\bm{k}\cdot\bm{x})}$, 并误以为这是另外两组新解.
实际上动量积分已经遍历全部 $\bm{k}\in\mathbb{R}^3$.
把 $\bm{k}$ 换成 $-\bm{k}$ 就会在 $\omega t-\bm{k}\cdot\bm{x}$ 与 $\omega t+\bm{k}\cdot\bm{x}$ 之间转换.
只要积分域包含全部动量空间, 后者只是前者的哑变量重标记, 不能再作为独立模重复加入.


若 $\phi$ 是实场, 条件 $\phi^* =\phi$ 会联系两个频率分支.
在最初使用共同空间因子 $\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}$ 的展开中, 比较 $\phi$ 与 $\phi^*$ 得到 $B(\bm{k})=A^*(-\bm{k})$.
所以实场的负频率系数不是新的独立复函数.
若 $\phi$ 是复场, 两个分支的系数可以独立指定, 对应的实自由度数目是实场的两倍.


平面波并不是 Klein–Gordon 方程唯一可能出现的函数形状.
在球坐标或有边界的区域中, 也可以使用球谐函数, 贝塞尔函数或其他与几何相适配的完备模.
自由平直时空优先使用平面波, 是因为时空平移算符在这个基底中对角化, 每个模具有确定四动量.


色散关系还给出波包的群速度:
$$
\bm{v}_{\text{g}}=\nabla_{\bm{k}}\omega_{\bm{k}}=\frac{\bm{k}}{\sqrt{\bm{k}^2+m^2}}
$$
对 $m>0$, 其大小小于 $1$.
相速度 $\omega_{\bm{k}}/|\bm{k}|$ 可以大于 $1$, 但相速度描述单个无限平面波的等相位面, 不是信息或局域扰动的传播速度.
因果传播由波包和方程的双曲结构决定.

---
## 从盒归一化到洛伦兹不变测度


主教材先把场限制在有限体积 $V$ 中, 使连续动量暂时变成离散标签.
设盒子三个方向的长度分别为 $L_1,L_2,L_3$, 并采用周期边界条件 $\phi(x^i+L_i)=\phi(x^i)$.
对空间平面波 $\mathrm{e}^{\mathrm{i}k_ix^i}$, 周期条件要求 $\mathrm{e}^{\mathrm{i}k_iL_i}=1$.
因此每个方向的允许波数为 $k_i=2\pi n_i/L_i$, 其中 $n_i\in\mathbb{Z}$.
连续动量空间由此变成整数三元组 $(n_1,n_2,n_3)$ 标记的离散集合.


在固定时刻的空间切片上定义普通数学内积:
$$
\langle f,g\rangle_{L^2}=\int_V f^*(\bm{x})g(\bm{x})\dd[3]{x}
$$
空间 $L^2(V)$ 由所有平方可积函数组成, 即满足 $\int_V|f|^2\dd[3]{x}<\infty$ 的函数.
严格说, 只在零测集上不同的两个函数代表 $L^2(V)$ 中同一个元素, 因为它们与所有平方可积函数的内积都相同.
有限盒中的平面波属于 $L^2(V)$, 而无限空间中的单个平面波不平方可积, 只能采用狄拉克 $\delta$ 意义下的广义归一化.
取归一化空间模:
$$
\chi_{\bm{k}}(\bm{x})=\frac{1}{\sqrt{V}}\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{x}}
$$
它们的内积为:
$$
\langle\chi_{\bm{k}},\chi_{\bm{k}' }\rangle_{L^2}=\frac{1}{V}\int_V\mathrm{e}^{\mathrm{i}(\bm{k}'-\bm{k})\cdot\bm{x}}\dd[3]{x}
$$
三维积分是三个一维积分的乘积.
对任一方向, 当 $n_i'\neq n_i$ 时:
$$
\int_0^{L_i}\mathrm{e}^{\mathrm{i}(k_i'-k_i)x^i}\dd{x^i}=\frac{\mathrm{e}^{2\pi\mathrm{i}(n_i'-n_i)}-1}{\mathrm{i}(k_i'-k_i)}=0
$$
当 $n_i'=n_i$ 时, 被积函数为 $1$, 积分等于 $L_i$.
三个方向相乘后得到:
$$
\int_V\mathrm{e}^{\mathrm{i}(\bm{k}'-\bm{k})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{k}\bm{k}'}
$$
因此 $\langle\chi_{\bm{k}},\chi_{\bm{k}' }\rangle_{L^2}=\delta_{\bm{k}\bm{k}'}$.
这里的 $\delta_{\bm{k}\bm{k}'}$ 是离散标签上的克罗内克符号.


这个计算只证明空间傅里叶基底在 $L^2(V)$ 中正交归一.
它还没有证明 $|\phi|^2$ 是 Klein–Gordon 粒子的概率密度.
后者是一个涉及时间导数和整个解空间的不同问题.
把“空间基函数具有单位 $L^2$ 范数”和“相对论波函数具有正定概率”混为一谈, 正是许多困惑的来源.


让三个盒长趋于无穷大, 相邻波数间隔为 $\Delta k_i=2\pi/L_i$.
离散求和趋于积分:
$$
\sum_{\bm{k}}F(\bm{k})\to V\int F(\bm{k})\frac{\dd[3]{k}}{(2\pi)^3}
$$
对应的连续平面波恒等式为:
$$
\int\mathrm{e}^{\mathrm{i}(\bm{k}'-\bm{k})\cdot\bm{x}}\dd[3]{x}=(2\pi)^3\delta^{(3)}(\bm{k}'-\bm{k})
$$
狄拉克 $\delta$ 不是在原点取无穷大的普通函数, 而是一个分布.
它由对测试函数的作用定义:
$$
\int\delta^{(3)}(\bm{k}-\bm{q})F(\bm{k})\dd[3]{k}=F(\bm{q})
$$
这与离散情况下 $\sum_{\bm{k}}\delta_{\bm{k}\bm{q}}F(\bm{k})=F(\bm{q})$ 完全对应.
克罗内克符号与狄拉克 $\delta$ 的关系因此为:
$$
\delta_{\bm{k}\bm{k}'}\to\frac{(2\pi)^3}{V}\delta^{(3)}(\bm{k}-\bm{k}')
$$


普通测度 $\dd[3]{p}$ 本身不是洛伦兹不变量, 因为洛伦兹推动会改变固定时间切片和动量空间体积元.
质量壳上自然出现的不变测度是 $\dd[3]{p}/(2E_{\bm{p}})$.
这个结论可以从四维不变积分严格推出.
考虑:
$$
I[F]=\int F(p)\delta(p^2-m^2)\theta(p^0)\dd[4]{p}
$$
$\dd[4]{p}$, $p^2-m^2$ 和保持时间方向的 $\theta(p^0)$ 在正规正时洛伦兹变换下都不变, 所以 $I[F]$ 是协变构造.


为了完成 $p^0$ 积分, 使用一维分布恒等式:
$$
\delta(f(x))=\sum_i\frac{\delta(x-x_i)}{|f'(x_i)|}
$$
其中 $x_i$ 是 $f$ 的互异简单零点.
这个恒等式来自在每个零点附近用 $y=f(x)$ 换元, 雅可比因子给出 $\dd{x}=\dd{y}/|f'(x_i)|$.


现在取 $f(p^0)=(p^0)^2-E_{\bm{p}}^2$.
它的两个零点是 $p^0=\pm E_{\bm{p}}$, 且 $|f'(\pm E_{\bm{p}})|=2E_{\bm{p}}$.
因此:
$$
\delta[(p^0)^2-E_{\bm{p}}^2]=\frac{1}{2E_{\bm{p}}}[\delta(p^0-E_{\bm{p}})+\delta(p^0+E_{\bm{p}})]
$$
$\theta(p^0)$ 只保留正能量根, 所以:
$$
I[F]=\int F(E_{\bm{p}},\bm{p})\frac{\dd[3]{p}}{2E_{\bm{p}}}
$$
这证明 $\dd[3]{p}/(2E_{\bm{p}})$ 是正能量质量壳上的洛伦兹不变测度.


有限盒中常用的完整时空模为:
$$
u_{\bm{k}}(x)=\frac{1}{\sqrt{2\omega_{\bm{k}}V}}\mathrm{e}^{-\mathrm{i}kx}
$$
连续动量版本为:
$$
u_{\bm{k}}(x)=\frac{1}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\mathrm{e}^{-\mathrm{i}kx}
$$
$1/\sqrt{V}$ 来自离散空间傅里叶模的归一化, $1/\sqrt{2\omega_{\bm{k}}}$ 则与质量壳不变测度和 Klein–Gordon 解空间的内积相配.
下一篇会直接计算并证明这个因子的作用, 而不是把它作为需要记忆的神秘常数.


在完成量子化以前, 展开系数 $A(\bm{k})$, $B(\bm{k})$, $C(\bm{k})$ 和 $D(\bm{k})$ 都只是复数函数.
它们彼此可交换, 也没有产生或湮灭粒子的作用.
只有把场提升为算符并施加正则对易关系以后, 相应系数才会变成产生和湮灭算符.
因此在当前经典或单粒子波动方程阶段, 不应提前给某个系数加上 $\dagger$ 并把这个符号解释成粒子产生.


本篇建立了 Klein–Gordon 解的完整模结构.
但仅仅拥有一组解还不能把 $\phi$ 解释成单粒子波函数.
下一篇将从连续性方程构造 Klein–Gordon 守恒流, 证明它在完整解空间上的内积不是正定的, 并说明这为什么迫使我们从单粒子相对论量子力学转向量子场论.
