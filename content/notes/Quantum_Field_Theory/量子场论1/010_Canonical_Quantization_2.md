---
title: 自由标量场的正则量子化（二）：哈密顿量、真空与正规序
date: 2026-08-17
weight: 10
---
上一篇把场的等时对易关系转换成了模算符代数.
但直到哈密顿量被写成模算符的形式, 我们才能知道这些模激发具有什么能量, 也才能准确定义真空.
本篇不跳过代入计算中最关键的交叉项.
特别要看清 $\hat{a}\hat{a}$ 与 $\hat{a}^{\dagger}\hat{a}^{\dagger}$ 为什么消失, 零点能从哪里出现, 以及正规序究竟做了什么.

---
## 逐项对角化自由场哈密顿量


仍然先在体积 $V$ 的周期盒中工作.
实标量场的哈密顿量为:
$$
H=\frac{1}{2}\int_V[\pi^2+(\nabla\phi)^2+m^2\phi^2]\dd[3]{x}
$$
在对角化它之前, 先做一个根本的一致性检验.
正则量子化后的哈密顿量和等时对易关系应当通过海森堡方程重新产生 Klein–Gordon 方程.
对不显含时间的算符, 海森堡方程为:
$$
\partial_t\mathcal{O}=\mathrm{i}[H,\mathcal{O}]
$$
先取 $\mathcal{O}=\phi(t,\bm{y})$.
在等时对易子中, $\phi^2$ 和 $(\nabla\phi)^2$ 都与 $\phi$ 对易, 只有 $\pi^2$ 有贡献:
$$
[\pi^2(t,\bm{x}),\phi(t,\bm{y})]=\pi(t,\bm{x})[\pi(t,\bm{x}),\phi(t,\bm{y})]+[\pi(t,\bm{x}),\phi(t,\bm{y})]\pi(t,\bm{x})
$$
由于 $[\pi(t,\bm{x}),\phi(t,\bm{y})]=-\mathrm{i}\delta_V^{(3)}(\bm{x}-\bm{y})$, 上式等于:
$$
[\pi^2(t,\bm{x}),\phi(t,\bm{y})]=-2\mathrm{i}\delta_V^{(3)}(\bm{x}-\bm{y})\pi(t,\bm{x})
$$
代回哈密顿量并完成空间积分:
$$
[H,\phi(t,\bm{y})]=-\mathrm{i}\pi(t,\bm{y})
$$
因而:
$$
\partial_t\phi(t,\bm{y})=\pi(t,\bm{y})
$$
这正是共轭动量的定义.


再取 $\mathcal{O}=\pi(t,\bm{y})$.
需要使用的导数对易关系是:
$$
[\partial_i\phi(t,\bm{x}),\pi(t,\bm{y})]=\mathrm{i}\partial_{x^i}\delta_V^{(3)}(\bm{x}-\bm{y})
$$
它只是对基本等时对易关系的两边同时做 $\partial_{x^i}$ 导数.
使用乘积对易子恒等式展开梯度项和质量项, 得到:
$$
[H,\pi(t,\bm{y})]=\mathrm{i}\int_V[\nabla\phi(t,\bm{x})\cdot\nabla_{\bm{x}}\delta_V^{(3)}(\bm{x}-\bm{y})+m^2\phi(t,\bm{x})\delta_V^{(3)}(\bm{x}-\bm{y})]\dd[3]{x}
$$
对第一项分部积分, 并使用周期边界条件消去边界项:
$$
[H,\pi(t,\bm{y})]=-\mathrm{i}\nabla^2\phi(t,\bm{y})+\mathrm{i}m^2\phi(t,\bm{y})
$$
所以第二条海森堡运动方程为:
$$
\partial_t\pi(t,\bm{y})=(\nabla^2-m^2)\phi(t,\bm{y})
$$
再用 $\pi=\partial_t\phi$ 消去共轭动量:
$$
(\partial_t^2-\nabla^2+m^2)\phi=0
$$
这证明量子场算符满足与经典场相同形式的 Klein–Gordon 方程.
它也说明拉格朗日表述、哈密顿表述和正则对易关系在时间演化上相互相容.


下面对角化同一个周期盒哈密顿量.
上一篇的场和共轭动量展开为:
$$
\phi(x)=\sum_{\bm{k}}\frac{1}{\sqrt{2\omega_{\bm{k}}V}}[\hat{a}_{\bm{k}}\mathrm{e}^{-\mathrm{i}kx}+\hat{a}_{\bm{k}}^{\dagger}\mathrm{e}^{\mathrm{i}kx}]
$$
以及:
$$
\pi(x)=-\mathrm{i}\sum_{\bm{k}}\sqrt{\frac{\omega_{\bm{k}}}{2V}}[\hat{a}_{\bm{k}}\mathrm{e}^{-\mathrm{i}kx}-\hat{a}_{\bm{k}}^{\dagger}\mathrm{e}^{\mathrm{i}kx}]
$$
空间梯度只作用在平面波上, 所以:
$$
\nabla\phi(x)=\mathrm{i}\sum_{\bm{k}}\frac{\bm{k}}{\sqrt{2\omega_{\bm{k}}V}}[\hat{a}_{\bm{k}}\mathrm{e}^{-\mathrm{i}kx}-\hat{a}_{\bm{k}}^{\dagger}\mathrm{e}^{\mathrm{i}kx}]
$$
三个二次项都包含双重动量求和.
空间积分只会出现两类:
$$
\int_V\mathrm{e}^{\mathrm{i}(\bm{k}-\bm{p})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{k}\bm{p}} \quad \int_V\mathrm{e}^{\mathrm{i}(\bm{k}+\bm{p})\cdot\bm{x}}\dd[3]{x}=V\delta_{\bm{k},-\bm{p}}
$$
第一类配对一个湮灭算符和一个产生算符.
第二类配对两个湮灭算符或两个产生算符.


先看 $\hat{a}_{\bm{k}}\hat{a}_{\bm{p}}$ 的系数.
动量项、梯度项和质量项分别贡献 $-\omega_{\bm{k}}\omega_{\bm{p}}$, $-\bm{k}\cdot\bm{p}$ 和 $m^2$.
这类项的空间积分又要求 $\bm{p}=-\bm{k}$, 所以总系数为:
$$
-\omega_{\bm{k}}^2-\bm{k}\cdot(-\bm{k})+m^2=-\omega_{\bm{k}}^2+\bm{k}^2+m^2=0
$$
最后一步使用了壳上色散关系 $\omega_{\bm{k}}^2=\bm{k}^2+m^2$.
因此所有 $\hat{a}_{\bm{k}}\hat{a}_{-\bm{k}}\mathrm{e}^{-2\mathrm{i}\omega_{\bm{k}}t}$ 项都消失.
它们的厄米共轭项 $\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{-\bm{k}}^{\dagger}\mathrm{e}^{2\mathrm{i}\omega_{\bm{k}}t}$ 也同样消失.
这一消去不是忽略了某些项, 而是 Klein–Gordon 色散关系造成的严格相消.


再看 $\hat{a}_{\bm{k}}\hat{a}_{\bm{p}}^{\dagger}$ 的系数.
这时三部分分别给出 $+\omega_{\bm{k}}\omega_{\bm{p}}$, $+\bm{k}\cdot\bm{p}$ 和 $+m^2$.
空间积分要求 $\bm{p}=\bm{k}$, 因而:
$$
\omega_{\bm{k}}^2+\bm{k}^2+m^2=2\omega_{\bm{k}}^2
$$
将这个系数与两个模展开的归一化因子结合, 得到:
$$
H=\frac{1}{2}\sum_{\bm{k}}\omega_{\bm{k}}(\hat{a}_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}+\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}})
$$
这里不能在插入对易关系以前随意交换算符顺序.
经典模系数是可交换的复数, 而量子化后的 $\hat{a}_{\bm{k}}$ 和 $\hat{a}_{\bm{k}}^{\dagger}$ 不可交换.


利用 $[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}$, 可以写成:
$$
\hat{a}_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}=\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}+1
$$
定义模占据数算符:
$$
\hat{N}_{\bm{k}}=\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}
$$
哈密顿量最终对角化为:
$$
H=\sum_{\bm{k}}\omega_{\bm{k}}\left(\hat{N}_{\bm{k}}+\frac{1}{2}\right)
$$
这就是无限多个简谐振子哈密顿量的和.
每个动量 $\bm{k}$ 标记一个独立的振子自由度, 其频率是 $\omega_{\bm{k}}$.
这里振荡的是该傅里叶模的场幅在配置空间中的坐标, 不是一颗小球在物理空间中来回振动.


这个结构也可以在量子化前看到.
对经典场做空间傅里叶变换后, Klein–Gordon 方程对每个模都变成:
$$
\ddot{\phi}_{\bm{k}}+\omega_{\bm{k}}^2\phi_{\bm{k}}=0
$$
所以“自由场是无限多振子”首先是经典哈密顿结构的精确结论, 量子化只是把每个振子的能级离散化.

---
## 真空、占据数与正能激发


由模算符代数可以推出:
$$
[\hat{N}_{\bm{k}},\hat{a}_{\bm{p}}]=-\delta_{\bm{k}\bm{p}}\hat{a}_{\bm{p}} \quad [\hat{N}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}\hat{a}_{\bm{p}}^{\dagger}
$$
以第二式为例, 使用 $[A,BC]=[A,B]C+B[A,C]$ 展开:
$$
[\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\hat{a}_{\bm{k}}^{\dagger}[\hat{a}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]+[\hat{a}_{\bm{k}}^{\dagger},\hat{a}_{\bm{p}}^{\dagger}]\hat{a}_{\bm{k}}
$$
第一个对易子等于 $\delta_{\bm{k}\bm{p}}$, 第二个为零, 所以:
$$
[\hat{N}_{\bm{k}},\hat{a}_{\bm{p}}^{\dagger}]=\delta_{\bm{k}\bm{p}}\hat{a}_{\bm{p}}^{\dagger}
$$
因此 $\hat{a}_{\bm{p}}^{\dagger}$ 把 $\bm{p}$ 模的占据数增加 $1$, $\hat{a}_{\bm{p}}$ 则把它减少 $1$.
“产生”与“湮灭”这两个名称不是纯类比用语, 而是上面两个对易关系的直接后果.


定义真空 $|0\rangle$ 为被所有模湮灭算符消去的归一化态:
$$
\hat{a}_{\bm{k}}|0\rangle=0 \quad \langle0|0\rangle=1
$$
因为 $\hat{N}_{\bm{k}}|0\rangle=0$, 未减去常数的哈密顿量作用在真空上得到:
$$
H|0\rangle=E_0|0\rangle \quad E_0=\frac{1}{2}\sum_{\bm{k}}\omega_{\bm{k}}
$$
这是所有场模零点能的和.
它在无穷体积极限中变成:
$$
\frac{E_0}{V}=\frac{1}{2}\int\frac{\dd[3]{k}}{(2\pi)^3}\sqrt{\bm{k}^2+m^2}
$$
积分的高动量部分近似为 $\int k^3\dd{k}$, 因而发散.
如果临时引入紫外截止 $|\bm{k}|<\Lambda$ 并取 $\Lambda\gg m$, 主导项为:
$$
\frac{E_0}{V}\simeq\frac{1}{2}\frac{4\pi}{(2\pi)^3}\int_0^\Lambda k^3\dd{k}=\frac{\Lambda^4}{16\pi^2}
$$
截止不是这个自由理论的最终答案, 它只把“无穷大”改写为对高能标度的明确依赖.


一个模激发态为 $\hat{a}_{\bm{p}}^{\dagger}|0\rangle$.
由于:
$$
[H,\hat{a}_{\bm{p}}^{\dagger}]=\omega_{\bm{p}}\hat{a}_{\bm{p}}^{\dagger}
$$
可以把哈密顿量移过产生算符:
$$
H\hat{a}_{\bm{p}}^{\dagger}|0\rangle=\hat{a}_{\bm{p}}^{\dagger}H|0\rangle+[H,\hat{a}_{\bm{p}}^{\dagger}]|0\rangle=(E_0+\omega_{\bm{p}})\hat{a}_{\bm{p}}^{\dagger}|0\rangle
$$
它相对真空的激发能量是 $\omega_{\bm{p}}=\sqrt{\bm{p}^2+m^2}>0$.
这个能量和动量满足相对论单粒子关系, 因此把模的一个量子激发解释为一个标量粒子.
另一个对易关系为 $[H,\hat{a}_{\bm{p}}]=-\omega_{\bm{p}}\hat{a}_{\bm{p}}$.
如果把时间依赖放在模算符上, 海森堡方程给出:
$$
\partial_t\hat{a}_{\bm{p}}(t)=-\mathrm{i}\omega_{\bm{p}}\hat{a}_{\bm{p}}(t) \quad \partial_t\hat{a}_{\bm{p}}^{\dagger}(t)=\mathrm{i}\omega_{\bm{p}}\hat{a}_{\bm{p}}^{\dagger}(t)
$$
它们的解为:
$$
\hat{a}_{\bm{p}}(t)=\mathrm{e}^{-\mathrm{i}\omega_{\bm{p}}t}\hat{a}_{\bm{p}}(0) \quad \hat{a}_{\bm{p}}^{\dagger}(t)=\mathrm{e}^{\mathrm{i}\omega_{\bm{p}}t}\hat{a}_{\bm{p}}^{\dagger}(0)
$$
本系列的模展开把这些时间相位显式写在平面波中, 因而其中的 $\hat{a}_{\bm{p}}$ 与 $\hat{a}_{\bm{p}}^{\dagger}$ 本身不再显含时间.
这两种写法只是时间依赖的不同分配, 物理内容相同.


期望值的定义与普通量子力学完全相同.
对归一化态 $|\Psi\rangle$ 和可观测量 $\mathcal{O}$:
$$
\langle\mathcal{O}\rangle_{\Psi}=\langle\Psi|\mathcal{O}|\Psi\rangle
$$
如果 $|\Psi\rangle$ 是 $\mathcal{O}$ 的本征态, 每次理想测量都得到同一本征值.
如果它是多个本征态的叠加, 期望值是多次同样制备和测量的统计平均, 而不是单次必然得到的结果.
不确定度由方差给出:
$$
(\Delta\mathcal{O})^2=\langle\Psi|\mathcal{O}^2|\Psi\rangle-\langle\Psi|\mathcal{O}|\Psi\rangle^2
$$
对任意占据数基矢, 正规序哈密顿量的方差为零, 因为该基矢本身就是能量本征态.
真空期望值是特别重要的情形, 通常简写为 $\langle\mathcal{O}\rangle_0=\langle0|\mathcal{O}|0\rangle$.


总三动量算符可从能动量张量得到:
$$
\bm{P}=-\int_V\pi\nabla\phi\dd[3]{x}
$$
代入模展开并做与哈密顿量相同的正交积分, 得到:
$$
\bm{P}=\sum_{\bm{k}}\bm{k}\hat{N}_{\bm{k}}
$$
零点动量在 $\bm{k}$ 与 $-\bm{k}$ 之间相消.
因此 $\hat{a}_{\bm{p}}^{\dagger}|0\rangle$ 也是总动量本征态, 本征值为 $\bm{p}$.
能量和动量两项证据同时确立了粒子解释.


占据数算符是半正定的.
对任意态 $|\Psi\rangle$:
$$
\langle\Psi|\hat{N}_{\bm{k}}|\Psi\rangle=\langle\Psi|\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}|\Psi\rangle=\|\hat{a}_{\bm{k}}|\Psi\rangle\|^2\geq0
$$
所以减去真空常数以后, 自由场哈密顿量不可能通过不断产生激发而无界下降.
这正是量子场论解决经典负频率的核心结果.

---
## 正规序的定义、用途与边界


对自由场的产生和湮灭算符乘积, 正规序表示把所有产生算符移到所有湮灭算符左边.
对玻色算符, 这个重排不附加符号.
例如:
$$
:\hat{a}_{\bm{k}}\hat{a}_{\bm{p}}^{\dagger}:=\hat{a}_{\bm{p}}^{\dagger}\hat{a}_{\bm{k}} \quad :\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{p}}:=\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{p}}
$$
冒号是一个重排处方, 不是可以作用在态上的新算符.
尤其要注意, $:\hat{a}\hat{a}^{\dagger}:$ 与原来的 $\hat{a}\hat{a}^{\dagger}$ 并不相等, 两者相差对易子 $1$.


对哈密顿量做正规序得到:
$$
:H:=\sum_{\bm{k}}\omega_{\bm{k}}\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}}=H-E_0
$$
因而:
$$
\langle0|:H:|0\rangle=0
$$
在不考虑重力的固定时空量子场论中, 给哈密顿量加一个与态无关的常数不会改变任何能量差, 也不会改变海森堡方程.
正规序在这个范围内等价于选择真空能为零的能量原点.


但正规序不是消除所有紫外发散的万能方法.
引入相互作用后, 圈图中仍会出现质量、场强和耦合常数的发散修正, 这些问题需要系统的正则化与重整化.
正规序只是相对于某个选定真空重新排列自由场算符, 并减去相应的真空常数.


如果把重力也纳入理论, 绝对能量密度会成为时空曲率的源, 因而不能再简单声称真空能永远不可观测.
更准确的说法是: 在非重力理论中可以自由选择能量零点, 而在重力理论中这个常数与宇宙学常数属于同一个必须通过观测固定的重整化参数.


复标量场的计算完全平行, 只是有 $\hat{a}$ 和 $\hat{b}$ 两套独立模算符.
未正规序的哈密顿量为:
$$
H=\sum_{\bm{k}}\omega_{\bm{k}}(\hat{N}_{a,\bm{k}}+\hat{N}_{b,\bm{k}}+1)
$$
其中:
$$
\hat{N}_{a,\bm{k}}=\hat{a}_{\bm{k}}^{\dagger}\hat{a}_{\bm{k}} \quad \hat{N}_{b,\bm{k}}=\hat{b}_{\bm{k}}^{\dagger}\hat{b}_{\bm{k}}
$$
常数 $1$ 是两套振子各自的 $\frac{1}{2}$ 之和.
正规序以后:
$$
:H:=\sum_{\bm{k}}\omega_{\bm{k}}(\hat{N}_{a,\bm{k}}+\hat{N}_{b,\bm{k}})
$$
这证明粒子与反粒子激发都具有相同的正能量 $\omega_{\bm{k}}$.
它们的区别不在能量符号, 而在后面由内部 $U(1)$ 对称性定义的相反诺特荷.
因此应当区分两个概念: 总激发数正比于 $\hat{N}_a+\hat{N}_b$, 而粒子数减反粒子数 $\hat{N}_a-\hat{N}_b$ 是带符号的 $U(1)$ 荷.
把后一个差简单称为“总粒子数”会混淆粒子计数与守恒荷, 本系列不采用这种叫法.
