---
title: 自由标量场的正则量子化（一）：等时对易关系与模算符
date: 2026-08-17
weight: 9
---
前面几篇一直在研究经典 Klein–Gordon 场.
经典场的一个解是一整个时空上的函数, 其平面波系数是普通复数.
正则量子化要做的根本改变, 是把每个时刻的场和其共轭动量提升为作用在量子态空间上的算符.
量子化以后, 平面波系数也不再是普通数, 而会变成湮灭和产生模激发的算符.
本篇从经典泛函泊松括号出发, 完整推出等时对易关系与模算符代数, 并说清狄拉克 $\delta$ 分布在其中的数学作用.

---
## 从经典相空间到等时对易关系


实标量场的拉格朗日密度为:
$$
\mathcal{L}=\frac{1}{2}\partial_\mu\phi\partial^\mu\phi-\frac{1}{2}m^2\phi^2
$$
共轭动量场为:
$$
\pi(t,\bm{x})=\pdv{\mathcal{L}}{(\partial_t\phi)}=\partial_t\phi(t,\bm{x})
$$
在普通力学中, 某个时刻的相空点由有限个数 $(q_i,p_i)$ 给出.
在场论中, 每个空间点都有一对正则变量 $[\phi(\bm{x}),\pi(\bm{x})]$.
因此一个场论相空点不是有限维向量, 而是一对定义在整个空间上的函数 $(\phi,\pi)$.


场的可观测量一般是函数的函数, 数学上称为泛函.
例如哈密顿量:
$$
H[\phi,\pi]=\int\frac{1}{2}[\pi^2+(\nabla\phi)^2+m^2\phi^2]\dd[3]{x}
$$
方括号强调 $H$ 的输入是整个函数 $\phi$ 和 $\pi$, 而不是某一点的两个数.


泛函导数是普通偏导数的连续指标版本.
它由一阶变分定义:
$$
\delta F=\int\left[\frac{\delta F}{\delta\phi(\bm{x})}\delta\phi(\bm{x})+\frac{\delta F}{\delta\pi(\bm{x})}\delta\pi(\bm{x})\right]\dd[3]{x}
$$
这里 $\frac{\delta F}{\delta\phi(\bm{x})}$ 表示只在 $\bm{x}$ 附近改变场时, 泛函 $F$ 的一阶响应密度.
例如取 $F[\phi]=\phi(\bm{y})$, 定义要求:
$$
\delta F=\delta\phi(\bm{y})=\int\delta^{(3)}(\bm{x}-\bm{y})\delta\phi(\bm{x})\dd[3]{x}
$$
所以:
$$
\frac{\delta\phi(\bm{y})}{\delta\phi(\bm{x})}=\delta^{(3)}(\bm{x}-\bm{y})
$$
狄拉克 $\delta$ 分布在连续指标空间中扮演单位矩阵.
离散指标的单位矩阵满足 $\sum_j\delta_{ij}v_j=v_i$, 连续指标的单位核则满足:
$$
\int\delta^{(3)}(\bm{x}-\bm{y})f(\bm{y})\dd[3]{y}=f(\bm{x})
$$
因此可以把 $\delta^{(3)}(\bm{x}-\bm{y})$ 直观地理解成连续空间中的 $\delta_{ij}$.


两个泛函 $F[\phi,\pi]$ 和 $G[\phi,\pi]$ 的等时泊松括号定义为:
$$
\{F,G\}_{\text{P}}=\int\left(\frac{\delta F}{\delta\phi(\bm{x})}\frac{\delta G}{\delta\pi(\bm{x})}-\frac{\delta F}{\delta\pi(\bm{x})}\frac{\delta G}{\delta\phi(\bm{x})}\right)\dd[3]{x}
$$
将 $F=\phi(t,\bm{x})$ 和 $G=\pi(t,\bm{y})$ 代入定义得到:
$$
\{\phi(t,\bm{x}),\pi(t,\bm{y})\}_{\text{P}}=\delta^{(3)}(\bm{x}-\bm{y})
$$
同理:
$$
\{\phi(t,\bm{x}),\phi(t,\bm{y})\}_{\text{P}}=0 \quad \{\pi(t,\bm{x}),\pi(t,\bm{y})\}_{\text{P}}=0
$$
这三式是经典场论的正则结构.
它们在一张固定时间切片上定义, 因此称为等时泊松括号.


正则量子化把泊松括号替换为对易子:
$$
\{F,G\}_{\text{P}}\longrightarrow\frac{1}{\mathrm{i}}[F,G]
$$
在自然单位制 $\hbar=1$ 下, 实标量场的基本等时对易关系为:
$$
[\phi(t,\bm{x}),\pi(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
另外两个为:
$$
[\phi(t,\bm{x}),\phi(t,\bm{y})]=0 \quad [\pi(t,\bm{x}),\pi(t,\bm{y})]=0
$$
这不是从 Klein–Gordon 方程推导出来的结论, 而是将该经典理论量子化时加入的基本规则.
它的物理意义与单粒子量子力学中 $[q_i,p_j]=\mathrm{i}\delta_{ij}$ 完全平行.


更严格地说, $\phi(t,\bm{x})$ 与 $\pi(t,\bm{x})$ 是算符值分布, 而不是每一点都良定的普通算符.
这与 $\delta^{(3)}(\bm{x}-\bm{y})$ 本身是分布而不是普通函数相呼应.
选择光滑且足够快衰减的测试函数 $f$ 与 $g$, 定义涂抹后的算符:
$$
\phi(f)=\int f(\bm{x})\phi(t,\bm{x})\dd[3]{x} \quad \pi(g)=\int g(\bm{x})\pi(t,\bm{x})\dd[3]{x}
$$
对易关系变成普通算符之间的关系:
$$
[\phi(f),\pi(g)]=\mathrm{i}\int f(\bm{x})g(\bm{x})\dd[3]{x}
$$
这个式子说明, 一个有限区域内的场平均与动量平均才是可以直接当作算符处理的对象.

---
## 从场对易关系推出模算符代数


为了先避开连续谱中的狄拉克 $\delta$ 分布, 先把系统放入体积 $V=L^3$ 的周期边界盒中.
允许动量为 $\bm{k}=\frac{2\pi\bm{n}}{L}$, 其中 $\bm{n}\in\mathbb{Z}^3$, 并定义:
$$
\omega_{\bm{k}}=\sqrt{\bm{k}^2+m^2} \quad kx=\omega_{\bm{k}}t-\bm{k}\cdot\bm{x}
$$
实标量场的模展开写为:
$$
\phi(x)=\sum_{\bm{k}}\frac{1}{\sqrt{2\omega_{\bm{k}}V}}[\hat{a}_{\bm{k}}\mathrm{e}^{-\mathrm{i}kx}+\hat{a}_{\bm{k}}^{\dagger}\mathrm{e}^{\mathrm{i}kx}]
$$
由于 $\phi^{\dagger}=\phi$, 正频率项和负频率项的系数必须互为厄米共轭.
因此实场只需要一套独立模算符 $\hat{a}_{\bm{k}}$ 和 $\hat{a}_{\bm{k}}^{\dagger}$.


对场做时间导数得到共轭动量场:
$$
\pi(x)=-\mathrm{i}\sum_{\bm{k}}\sqrt{\frac{\omega_{\bm{k}}}{2V}}[\hat{a}_{\bm{k}}\mathrm{e}^{-\mathrm{i}kx}-\hat{a}_{\bm{k}}^{\dagger}\mathrm{e}^{\mathrm{i}kx}]
$$
为了证明场对易关系等价于什么模算符代数, 先反演这两个展开.
计算 $\omega_{\bm{k}}\phi+\mathrm{i}\pi$ 时, 含 $\hat{a}_{\bm{k}}^{\dagger}$ 的项相消, 含 $\hat{a}_{\bm{k}}$ 的项相加.
再用盒归一平面波的正交性:
$$
\int_V\mathrm{e}^{\mathrm{i}(\bm{p}-\bm{k})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{k}\bm{p}}
$$
得到反演公式:
$$
\hat{a}_{\bm{k}}=\frac{1}{\sqrt{2\omega_{\bm{k}}V}}\int_V\mathrm{e}^{\mathrm{i}kx}[\omega_{\bm{k}}\phi(x)+\mathrm{i}\pi(x)]\dd[3]{x}
$$
取厄米共轭得到:
$$
\hat{a}_{\bm{k}}^{\dagger}=\frac{1}{\sqrt{2\omega_{\bm{k}}V}}\int_V\mathrm{e}^{-\mathrm{i}kx}[\omega_{\bm{k}}\phi(x)-\mathrm{i}\pi(x)]\dd[3]{x}
$$
两个公式都在同一时刻 $t$ 上做空间积分.
尽管被积函数显含 $t$, Klein–Gordon 方程保证积分结果与 $t$ 无关.
它们也可以紧凑地写成上一篇定义的 Klein–Gordon 型:
$$
\hat{a}_{\bm{k}}=(u_{\bm{k}},\phi)_{\text{KG}} \quad \hat{a}_{\bm{k}}^{\dagger}=-(u_{\bm{k}}^*,\phi)_{\text{KG}}
$$
其中 $u_{\bm{k}}=\frac{\mathrm{e}^{-\mathrm{i}kx}}{\sqrt{2\omega_{\bm{k}}V}}$.


现在直接计算 $[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]$.
把反演公式代入对易子, 由于 $[\phi,\phi]=[\pi,\pi]=0$, 只剩两个交叉项:
$$
[\omega_{\bm{k}}\phi(\bm{x})+\mathrm{i}\pi(\bm{x}),\omega_{\bm{p}}\phi(\bm{y})-\mathrm{i}\pi(\bm{y})]=(\omega_{\bm{k}}+\omega_{\bm{p}})\delta^{(3)}(\bm{x}-\bm{y})
$$
右边第一个 $\omega$ 来自 $-\mathrm{i}\omega_{\bm{k}}[\phi(\bm{x}),\pi(\bm{y})]$, 第二个来自 $\mathrm{i}\omega_{\bm{p}}[\pi(\bm{x}),\phi(\bm{y})]$.
两项都为正号, 是因为反转对易子次序会再产生一个负号.


先用狄拉克 $\delta$ 分布完成 $\bm{y}$ 积分, 使被积函数在 $\bm{y}=\bm{x}$ 上取值.
剩下的空间积分给出 $V\delta_{\bm{k}\bm{p}}$.
克罗内克符号迫使 $\bm{k}=\bm{p}$, 因而 $\omega_{\bm{k}}=\omega_{\bm{p}}$.
所有归一化因子化简为:
$$
[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\frac{\omega_{\bm{k}}+\omega_{\bm{p}}}{2\sqrt{\omega_{\bm{k}}\omega_{\bm{p}}}}\delta_{\bm{k}\bm{p}}=\delta_{\bm{k}\bm{p}}
$$
同样计算两个湮灭算符的对易子时, 系数正比于 $\omega_{\bm{p}}-\omega_{\bm{k}}$.
对应的被积对易子可以明确写成:
$$
[\omega_{\bm{k}}\phi(\bm{x})+\mathrm{i}\pi(\bm{x}),\omega_{\bm{p}}\phi(\bm{y})+\mathrm{i}\pi(\bm{y})]=(\omega_{\bm{p}}-\omega_{\bm{k}})\delta^{(3)}(\bm{x}-\bm{y})
$$
空间积分只在 $\bm{p}=-\bm{k}$ 时不为零, 而这时 $\omega_{-\bm{k}}=\omega_{\bm{k}}$, 所以系数为零.
两个产生算符的对易子是这个结果的厄米共轭, 也为零.
因此完整的模算符代数为:
$$
[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}} \quad [\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}]=0 \quad [\hat{a}_{\bm{k}}^{\dagger},\hat{a}_{\bm{p}}^{\dagger}]=0
$$


这个推导也可以反过来检验.
假定模算符满足上述代数, 将模展开代入场的等时对易子得到:
$$
[\phi(t,\bm{x}),\pi(t,\bm{y})]=\frac{\mathrm{i}}{2V}\sum_{\bm{k}}[\mathrm{e}^{\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}+\mathrm{e}^{-\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}]
$$
对第二项作换元 $\bm{k}\to-\bm{k}$, 它就与第一项相同.
周期盒上的周期性狄拉克 $\delta$ 分布为:
$$
\delta_V^{(3)}(\bm{x}-\bm{y})=\frac{1}{V}\sum_{\bm{k}}\mathrm{e}^{\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}
$$
所以确实恢复 $[\phi(t,\bm{x}),\pi(t,\bm{y})]=\mathrm{i}\delta_V^{(3)}(\bm{x}-\bm{y})$.
因此场的等时对易关系与模算符代数不是两套独立假设, 而是同一正则结构在位置表象与动量表象中的两种写法.


取无穷体积极限时使用替换:
$$
\frac{1}{V}\sum_{\bm{k}}\longrightarrow\int\frac{\dd[3]{k}}{(2\pi)^3} \quad V\delta_{\bm{k}\bm{p}}\longrightarrow(2\pi)^3\delta^{(3)}(\bm{k}-\bm{p})
$$
为了保持模展开整体不变, 离散与连续模算符的对应为:
$$
\hat{a}(\bm{k})=\sqrt{\frac{V}{(2\pi)^3}}\hat{a}_{\bm{k}}
$$
把它和 $\delta_{\bm{k}\bm{p}}\to\frac{(2\pi)^3}{V}\delta^{(3)}(\bm{k}-\bm{p})$ 一起代入, 就得到连续谱的狄拉克 $\delta$ 分布对易关系.
本系列选择把 $\sqrt{(2\pi)^3}$ 吸收到连续模展开的归一化因子中:
$$
\phi(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}[\hat{a}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}+\hat{a}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}]
$$
在这个约定下:
$$
[\hat{a}(\bm{k}),\hat{a}^{\dagger}(\bm{p})]=\delta^{(3)}(\bm{k}-\bm{p})
$$
其他两类对易子为零.
另一种常见约定把 $\frac{1}{(2\pi)^3 2\omega}$ 作为积分测度, 那时对易子右边会变成 $(2\pi)^3 2\omega_{\bm{k}}\delta^{(3)}(\bm{k}-\bm{p})$.
两种约定只是对模算符的重标定, 任意一种都可以使用, 但同一次计算中必须保持一致.

---
## 复标量场为什么需要两套模算符


复标量场的拉格朗日密度为:
$$
\mathcal{L}=\partial_\mu\phi^*\partial^\mu\phi-m^2\phi^*\phi
$$
做变分时把 $\phi$ 和 $\phi^*$ 当作两个独立坐标.
这只是说对场的实部和虚部可以独立变分, 并不是说量子化以后 $\phi$ 与 $\phi^{\dagger}$ 没有厄米共轭关系.
它们的共轭动量分别为:
$$
\pi_\phi=\pdv{\mathcal{L}}{(\partial_t\phi)}=\partial_t\phi^{\dagger} \quad \pi_{\phi^{\dagger}}=\pdv{\mathcal{L}}{(\partial_t\phi^{\dagger})}=\partial_t\phi
$$
基本等时对易关系为:
$$
[\phi(t,\bm{x}),\pi_\phi(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y}) \quad [\phi^{\dagger}(t,\bm{x}),\pi_{\phi^{\dagger}}(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
所有不配对的等时对易子都为零.
注意 $\phi$ 的正则动量是 $\partial_t\phi^{\dagger}$, 而不是 $\partial_t\phi$.
如果这一对关系写错, 后面的粒子与反粒子对易关系也会跟着出错.


复场的模展开为:
$$
\phi(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}[\hat{a}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}+\hat{b}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}]
$$
厄米共轭场为:
$$
\phi^{\dagger}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}[\hat{a}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}+\hat{b}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}]
$$
与实场不同, $\phi^{\dagger}\neq\phi$, 所以 $\phi$ 的负频率系数不必是 $\hat{a}^{\dagger}$.
它可以是另一套独立算符 $\hat{b}^{\dagger}$.


使用两对正则等时对易关系重复前面的反演计算, 得到:
$$
[\hat{a}(\bm{k}),\hat{a}^{\dagger}(\bm{p})]=\delta^{(3)}(\bm{k}-\bm{p}) \quad [\hat{b}(\bm{k}),\hat{b}^{\dagger}(\bm{p})]=\delta^{(3)}(\bm{k}-\bm{p})
$$
两套算符之间的交叉对易子全部为零:
$$
[\hat{a},\hat{b}]=[\hat{a},\hat{b}^{\dagger}]=[\hat{a}^{\dagger},\hat{b}]=[\hat{a}^{\dagger},\hat{b}^{\dagger}]=0
$$
这些式子说明复标量场包含两类相互独立的模激发.
后面从哈密顿量会看到它们具有相同的能量, 从 $U(1)$ 诺特荷会看到它们携带相反的荷.
因而 $\hat{a}^{\dagger}$ 与 $\hat{b}^{\dagger}$ 分别产生粒子和反粒子.
对实标量场, 厄米性迫使两套算符合并为一套, 物理上表示这种中性粒子就是它自己的反粒子.


正频率和负频率在这里也获得了正确解释.
展开中始终只取正能量 $\omega_{\bm{k}}>0$.
$\mathrm{e}^{-\mathrm{i}kx}$ 的系数湮灭一个正能量激发, $\mathrm{e}^{\mathrm{i}kx}$ 的系数产生另一个正能量激发.
因此量子场论并没有把负频率模解释成可以无限降低能量的负能粒子.
它把完整的经典解空间保留下来, 同时通过产生与湮灭算符重新解释两种频率部分.
