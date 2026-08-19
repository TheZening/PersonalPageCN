---
title: 标量场二点函数（三）：动量空间与极点处方
date: 2026-08-18
weight: 16
---
上一篇已经从时间序定义得到传播子的三维动量表示, 并证明它满足带四维德尔塔源的 Klein–Gordon 方程.
现在要把两个时间分支统一成一个四维动量积分.
完成这一步的关键不是形式上多写一个 $k^0$ 积分, 而是说明积分路径如何绕过 $k^0=\pm\omega_{\bm{k}}$ 两个极点.
本篇逐项计算两个时间方向的围道积分, 推出 $\mathrm{i}\epsilon$ 处方, 再解释离壳动量、其他格林函数和“虚粒子”语言的准确边界.

---
## 从三维积分到四维傅里叶表示


先把上一篇得到的完整时间序传播子拆成两个分支:
$$
D_F(z)=D_F^{>}(z)+D_F^{<}(z)
$$
第一个分支为:
$$
D_F^{>}(z)=\theta(z^0)\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}z^0+\mathrm{i}\bm{k}\cdot\bm{z}}
$$
第二个分支为:
$$
D_F^{<}(z)=\theta(-z^0)\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0-\mathrm{i}\bm{k}\cdot\bm{z}}
$$
目标是证明这两项恰好等于一个四维积分:
$$
D_F(z)=\int\frac{\dd[4]{k}}{(2\pi)^4}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}kz}}{k^2-m^2+\mathrm{i}\epsilon}
$$
这里 $\epsilon>0$, 所有积分完成以后才取 $\epsilon\to0^+$.


按照本文的闵可夫斯基内积约定:
$$
kz=k^0z^0-\bm{k}\cdot\bm{z}
$$
所以指数可以拆成:
$$
\mathrm{e}^{-\mathrm{i}kz}=\mathrm{e}^{-\mathrm{i}k^0z^0}\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{z}}
$$
分母则为:
$$
k^2-m^2+\mathrm{i}\epsilon=(k^0)^2-\omega_{\bm{k}}^2+\mathrm{i}\epsilon
$$
其中 $\omega_{\bm{k}}=\sqrt{\bm{k}^2+m^2}$.
因此问题归结为对每个固定 $\bm{k}$ 计算一维复积分:
$$
I_{\bm{k}}(z^0)=\int_{-\infty}^{+\infty}\frac{\dd{k^0}}{2\pi}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}k^0z^0}}{(k^0)^2-\omega_{\bm{k}}^2+\mathrm{i}\epsilon}
$$
四维传播子就是:
$$
D_F(z)=\int\frac{\dd[3]{k}}{(2\pi)^3}\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{z}}I_{\bm{k}}(z^0)
$$


若暂时令 $\epsilon=0$, 分母可以因式分解为:
$$
(k^0)^2-\omega_{\bm{k}}^2=(k^0-\omega_{\bm{k}})(k^0+\omega_{\bm{k}})
$$
两个极点恰好位于实轴上, 实轴积分会穿过奇点, 因而在没有额外规定时并不完整.
$\mathrm{i}\epsilon$ 的作用就是告诉积分路径从极点的哪一侧经过.


极点由下式决定:
$$
(k^0)^2=\omega_{\bm{k}}^2-\mathrm{i}\epsilon
$$
对小 $\epsilon$ 展开平方根:
$$
\sqrt{\omega_{\bm{k}}^2-\mathrm{i}\epsilon}=\omega_{\bm{k}}-\frac{\mathrm{i}\epsilon}{2\omega_{\bm{k}}}+O(\epsilon^2)
$$
所以正能极点位于实轴略下方:
$$
k^0=+\omega_{\bm{k}}-\mathrm{i}0^+
$$
负能极点位于实轴略上方:
$$
k^0=-\omega_{\bm{k}}+\mathrm{i}0^+
$$
这里的 $0^+$ 表示从正值方向趋近于零, 不是可以在积分前直接删除的普通零.


在只关心极点位置时, 分母常简写为:
$$
k^2-m^2+\mathrm{i}\epsilon\sim(k^0-\omega_{\bm{k}}+\mathrm{i}0^+)(k^0+\omega_{\bm{k}}-\mathrm{i}0^+)
$$
两个无穷小量的精确大小可能相差 $2\omega_{\bm{k}}$, 但它们把正能极点移到下半平面、负能极点移到上半平面的方向完全确定.
围道积分只依赖这个方向.

---
## 两种时间方向的围道积分


先考虑 $z^0>0$.
令 $k^0=R\mathrm{e}^{\mathrm{i}\vartheta}$ 位于半径很大的下半圆上.
指数的大小由虚部控制:
$$
|\mathrm{e}^{-\mathrm{i}k^0z^0}|=\mathrm{e}^{z^0\operatorname{Im}k^0}
$$
下半平面满足 $\operatorname{Im}k^0<0$, 所以指数随半径增大而衰减.
因此 $z^0>0$ 时必须在下半平面闭合围道.


闭合路径沿实轴从左向右, 再沿下半圆返回, 整体方向为顺时针.
留数定理因此给出负号:
$$
\int_{-\infty}^{+\infty}\dd{k^0}f(k^0)=-2\pi\mathrm{i}\sum_{\text{下半平面}}\operatorname{Res}f
$$
下半平面只包含正能极点 $k^0=\omega_{\bm{k}}-\mathrm{i}0^+$.
若函数写成 $g(k^0)/h(k^0)$, 并且 $h(k_*^0)=0$ 但 $h'(k_*^0)\neq0$, 这个简单极点的留数为:
$$
\operatorname{Res}_{k^0=k_*^0}\frac{g(k^0)}{h(k^0)}=\frac{g(k_*^0)}{h'(k_*^0)}
$$
这就是下面两次留数计算使用的公式.
忽略最终会消失的无穷小位移, 被积函数在该点的留数为:
$$
\operatorname{Res}_{k^0=\omega_{\bm{k}}}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}k^0z^0}}{(k^0)^2-\omega_{\bm{k}}^2}=\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}}
$$
别忘了 $I_{\bm{k}}$ 的积分还含有 $\frac{1}{2\pi}$.
所以顺时针围道给出:
$$
I_{\bm{k}}(z^0)=-\mathrm{i}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}}=\frac{\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}} \quad z^0>0
$$
代回三维积分:
$$
D_F(z)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}z^0+\mathrm{i}\bm{k}\cdot\bm{z}} \quad z^0>0
$$
这正是 $\theta(z^0)D^+(z)$ 分支.


再考虑 $z^0<0$.
此时要让 $\mathrm{e}^{z^0\operatorname{Im}k^0}$ 衰减, 必须选择 $\operatorname{Im}k^0>0$, 即在上半平面闭合.
路径方向为逆时针, 所以:
$$
\int_{-\infty}^{+\infty}\dd{k^0}f(k^0)=2\pi\mathrm{i}\sum_{\text{上半平面}}\operatorname{Res}f
$$
上半平面只包含负能极点 $k^0=-\omega_{\bm{k}}+\mathrm{i}0^+$.
分母对 $k^0$ 的导数在这个极点为 $-2\omega_{\bm{k}}$, 所以留数为:
$$
\operatorname{Res}_{k^0=-\omega_{\bm{k}}}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}k^0z^0}}{(k^0)^2-\omega_{\bm{k}}^2}=-\frac{\mathrm{i}\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}}
$$
逆时针围道和 $\frac{1}{2\pi}$ 因子给出:
$$
I_{\bm{k}}(z^0)=\mathrm{i}\left[-\frac{\mathrm{i}\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}}\right]=\frac{\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0}}{2\omega_{\bm{k}}} \quad z^0<0
$$
于是:
$$
D_F(z)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0+\mathrm{i}\bm{k}\cdot\bm{z}} \quad z^0<0
$$
对积分变量作 $\bm{k}\mapsto-\bm{k}$, 因为 $\omega_{-\bm{k}}=\omega_{\bm{k}}$, 得到:
$$
D_F(z)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{\mathrm{i}\omega_{\bm{k}}z^0-\mathrm{i}\bm{k}\cdot\bm{z}} \quad z^0<0
$$
这正是 $\theta(-z^0)D^-(z)$ 分支.


因此一个带 $\mathrm{i}\epsilon$ 的四维积分精确重现了两个时间分支:
$$
D_F(z)=\int\frac{\dd[4]{k}}{(2\pi)^4}\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}kz}}{k^2-m^2+\mathrm{i}\epsilon}
$$
$\mathrm{i}\epsilon$ 不是为了让答案看起来更协变而临时添加的小量.
它完整编码了时间序边界条件: 正频率向未来方向传播, 负频率部分以相反时间分支出现.


还可以直接用四维表示复核格林函数方程.
平面波满足:
$$
(\Box+m^2)\mathrm{e}^{-\mathrm{i}kz}=-(k^2-m^2)\mathrm{e}^{-\mathrm{i}kz}
$$
所以:
$$
(\Box+m^2)D_F(z)=-\int\frac{\dd[4]{k}}{(2\pi)^4}\frac{\mathrm{i}(k^2-m^2)\mathrm{e}^{-\mathrm{i}kz}}{k^2-m^2+\mathrm{i}\epsilon}
$$
取分布极限 $\epsilon\to0^+$ 后, 分式趋于 $1$:
$$
(\Box+m^2)D_F(z)=-\mathrm{i}\int\frac{\dd[4]{k}}{(2\pi)^4}\mathrm{e}^{-\mathrm{i}kz}
$$
使用四维傅里叶表示的德尔塔分布:
$$
\delta^{(4)}(z)=\int\frac{\dd[4]{k}}{(2\pi)^4}\mathrm{e}^{-\mathrm{i}kz}
$$
立即恢复:
$$
(\Box+m^2)D_F(z)=-\mathrm{i}\delta^{(4)}(z)
$$
这与上一篇从阶跃函数导数得到的接触项完全一致.

---
## 动量空间传播子与不同边界条件


采用傅里叶变换约定:
$$
D_F(z)=\int\frac{\dd[4]{k}}{(2\pi)^4}\widetilde{D}_F(k)\mathrm{e}^{-\mathrm{i}kz}
$$
位置空间公式直接给出动量空间传播子:
$$
\widetilde{D}_F(k)=\frac{\mathrm{i}}{k^2-m^2+\mathrm{i}\epsilon}
$$
主教材使用 $D_F=\mathrm{i}\Delta_F$, 所以它把不含分子 $\mathrm{i}$ 的量记为:
$$
\widetilde{\Delta}_F(k)=\frac{1}{k^2-m^2+\mathrm{i}\epsilon}
$$
两种写法必须与各自的位置空间定义配套, 不能从一本教材取左边记号, 再从另一本教材取右边分子.


分母为零的位置 $k^2=m^2$ 是自由粒子的质量壳.
但四维积分中的 $k^0$ 与 $\bm{k}$ 是彼此独立的积分变量, 一般积分点并不满足质量壳关系.
这称为内部四动量离壳.
只有在极点或外部自由粒子态上, $k^0=\pm\omega_{\bm{k}}$ 的质量壳关系才重新出现.


傅里叶变换把平移不变微分算符变成逐动量相乘的代数函数 $-(k^2-m^2)$, 这个函数称为微分算符的动量空间符号.
传播子就是这个符号的分布逆, 而质量壳正是符号失去可逆性的零点集合.
所以极点、质量壳和自由解并不是三件偶然同时出现的事: 自由解存在于算符有核的动量上, 逆算符则必然在同一集合上出现奇性.


离壳不等于违反能量守恒.
在相互作用微扰论中, 每个顶点仍由四维德尔塔分布严格保证总四动量守恒.
内部线的四动量不必满足自由粒子的色散关系, 是因为内部线不是一个被制备和测量的渐近自由粒子态.
用“能量可以在很短时间内暂时不守恒”解释离壳传播既不必要也不准确.


$\mathrm{i}\epsilon$ 还可以用分布恒等式分解.
对实变量 $s$:
$$
\frac{1}{s+\mathrm{i}0^+}=\mathrm{PV}\frac{1}{s}-\mathrm{i}\pi\delta(s)
$$
其中 $\mathrm{PV}$ 表示柯西主值.
它要求从奇点两侧对称地删去一个小区间后再取极限:
$$
\mathrm{PV}\int_{-\infty}^{+\infty}\frac{f(s)}{s}\dd{s}=\lim_{\eta\to0^+}\left[\int_{-\infty}^{-\eta}\frac{f(s)}{s}\dd{s}+\int_{\eta}^{+\infty}\frac{f(s)}{s}\dd{s}\right]
$$
乘上分子 $\mathrm{i}$:
$$
\frac{\mathrm{i}}{s+\mathrm{i}0^+}=\mathrm{i}\mathrm{PV}\frac{1}{s}+\pi\delta(s)
$$
令 $s=k^2-m^2$, 可以看到传播子同时含有主值部分和质量壳德尔塔部分.
这再次说明传播子不是单纯把内部动量限制在质量壳上.


同一个微分算符可以有不同格林函数, 差别完全体现在极点放置上.
Feynman 处方把正能极点放在下半平面, 把负能极点放在上半平面.
推迟格林函数把两个极点都放在下半平面, 因而当 $z^0<0$ 时在上半平面闭合不会包围任何极点, 结果为零.
超前格林函数把两个极点都放在上半平面, 因而当 $z^0>0$ 时在下半平面闭合不会包围任何极点, 结果为零.


用上一篇的场对易函数 $C(z)=[\phi(x),\phi^{\dagger}(y)]$ 可以写成:
$$
D_R(z)=\theta(z^0)C(z)
$$
以及:
$$
D_A(z)=-\theta(-z^0)C(z)
$$
二者满足与 $D_F$ 相同归一化的非齐次方程:
$$
(\Box+m^2)D_R=(\Box+m^2)D_A=-\mathrm{i}\delta^{(4)}(z)
$$
$D_R$ 只在源事件之后响应, $D_A$ 只在源事件之前非零.
Feynman 传播子则按正负频率安排时间边界, 它不是经典意义上的纯推迟响应函数.


怀特曼函数与这些格林函数也不能混为一谈.
$D^+$ 和 $D^-$ 各自满足齐次 Klein–Gordon 方程, 没有四维德尔塔源.
$D_F$、$D_R$ 与 $D_A$ 在重合点具有相同的非齐次源, 彼此之差是齐次解, 但它们的边界条件不同.


时间序定义看起来选定了坐标时间, 但 $D_F$ 仍与相对论相容.
对类时间隔, 所有正规正时洛伦兹变换都保持事件的先后顺序.
对类空间隔, 某些惯性系会交换先后顺序, 但微观因果性保证两个场对易, 所以交换次序不改变时间序乘积.
因此时间序二点函数是洛伦兹标量分布.


到目前为止, 所有推导都发生在自由理论中.
我们没有观测一个粒子在 $y$ 被制造、沿确定路径运动、再在 $x$ 消失.
严格得到的是自由真空中两个场算符的时间序关联以及 Klein–Gordon 算符在特定边界条件下的分布逆.


进入相互作用微扰论以后, 威克展开会把时间序场乘积配对成二点收缩.
每个内部收缩恰好贡献一个 $D_F$, Feynman 图再用内部线表示这个因子.
“虚粒子”是对内部线和离壳传播子因子的方便称呼, 不是额外加入理论的一类可直接探测粒子.


因此下面几种说法需要区分.
可以说传播子是内部线的数学因子, 或者启发式地说它描述某种场激发在两个相互作用顶点之间的传播.
不能说虚粒子具有一条可观测的经典轨迹, 不能把单个内部线从完整振幅中独立测量出来, 也不能把 $|D_F|^2$ 单独当成实验概率.


同一物理振幅还可能在不同变量选择、规范或微扰重组下被分成不同的内部项.
真正可观测的是完整振幅给出的截面、衰变率和其他实验量, 不是某一条内部线本身.
这就是为什么“虚粒子”适合作为计算语言, 却不应被赋予与外部真实粒子完全相同的本体地位.


标量场部分现在形成了一条闭合链条.
正则对易关系决定模算符代数, 模算符代数决定怀特曼函数, 两种怀特曼函数之差保证微观因果性.
时间序组合给出 Feynman 传播子, 而 $\mathrm{i}\epsilon$ 又把时间序边界条件编码进四维动量空间.
下一阶段可以在此基础上进入 Dirac 方程与旋量场, 并比较费米场反对易关系、旋量分子和 Dirac 传播子怎样改变这条结构.
