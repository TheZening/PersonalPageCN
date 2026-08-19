---
title: 标量场二点函数（一）：真空关联与微观因果性
date: 2026-08-18
weight: 14
---
前面的正则量子化告诉我们怎样在一个时刻给场和共轭动量规定对易关系.
传播子却比较两个不同时空点上的场, 因而需要把等时正则关系演化到任意时间.
我们还要弄清真空怎样关联两个事件, 以及相对论因果性要求哪些算符在类空间隔下对易.
本篇先从模展开严格计算两种真空二点函数.
随后构造场对易函数并证明微观因果性.
这些对象是下一篇定义时间序传播子的直接材料.

---
## 从正负频率部分得到两种真空二点函数


采用连续动量归一化, 自由复标量场写成:
$$
\phi(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}[\hat{a}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}+\hat{b}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}]
$$
其中:
$$
\omega_{\bm{k}}=\sqrt{\bm{k}^2+m^2} \quad kx=\omega_{\bm{k}}x^0-\bm{k}\cdot\bm{x}
$$
厄米共轭场为:
$$
\phi^{\dagger}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}[\hat{a}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}+\hat{b}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}]
$$
两套模算符满足:
$$
[\hat{a}(\bm{k}),\hat{a}^{\dagger}(\bm{p})]=\delta^{(3)}(\bm{k}-\bm{p}) \quad [\hat{b}(\bm{k}),\hat{b}^{\dagger}(\bm{p})]=\delta^{(3)}(\bm{k}-\bm{p})
$$
所有交叉对易子都为零, 真空被所有湮灭算符消去:
$$
\hat{a}(\bm{k})|0\rangle=0 \quad \hat{b}(\bm{k})|0\rangle=0
$$


为了区分场中作用不同的部分, 定义正频率部分和负频率部分:
$$
\phi^{(+)}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\hat{a}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}
$$
以及:
$$
\phi^{(-)}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\hat{b}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}
$$
所以 $\phi=\phi^{(+)}+\phi^{(-)}$.
上标 $(+)$ 和 $(-)$ 标记指数中的频率符号, 不是电荷正负号.
$\phi^{(+)}$ 含粒子湮灭算符, $\phi^{(-)}$ 含反粒子产生算符.


对厄米共轭场定义:
$$
\phi^{\dagger(+)}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\hat{b}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}
$$
以及:
$$
\phi^{\dagger(-)}(x)=\int\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}\hat{a}^{\dagger}(\bm{k})\mathrm{e}^{\mathrm{i}kx}
$$
$\phi^{\dagger(+)}$ 湮灭反粒子, $\phi^{\dagger(-)}$ 产生粒子.
把“正频率”机械理解成“产生粒子”会造成错误, 必须同时看场的共轭性质和模算符类型.


现在定义第一种真空二点函数:
$$
D^+(x-y)=\langle0|\phi(x)\phi^{\dagger}(y)|0\rangle
$$
右边的 $\phi^{\dagger}(y)$ 先作用在真空上.
其中 $\phi^{\dagger(+)}$ 含湮灭算符, 立即给出零, 只有 $\phi^{\dagger(-)}$ 产生的一粒子态能够留下.
随后左边的 $\phi(x)$ 必须用 $\phi^{(+)}$ 把这个粒子湮灭, 才能与真空左矢产生非零内积.
所以:
$$
D^+(x-y)=\langle0|\phi^{(+)}(x)\phi^{\dagger(-)}(y)|0\rangle
$$


把两个模展开完整代入:
$$
D^+(x-y)=\int\frac{\dd[3]{k}\dd[3]{p}}{2(2\pi)^3\sqrt{\omega_{\bm{k}}\omega_{\bm{p}}}}\mathrm{e}^{-\mathrm{i}kx}\mathrm{e}^{\mathrm{i}py}\langle0|\hat{a}(\bm{k})\hat{a}^{\dagger}(\bm{p})|0\rangle
$$
利用 $\hat{a}(\bm{k})|0\rangle=0$, 真空矩阵元可以改写为对易子:
$$
\langle0|\hat{a}(\bm{k})\hat{a}^{\dagger}(\bm{p})|0\rangle=\langle0|[\hat{a}(\bm{k}),\hat{a}^{\dagger}(\bm{p})]|0\rangle
$$
因此:
$$
\langle0|\hat{a}(\bm{k})\hat{a}^{\dagger}(\bm{p})|0\rangle=\delta^{(3)}(\bm{k}-\bm{p})
$$
先完成 $\bm{p}$ 积分, 得到:
$$
D^+(x-y)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{-\mathrm{i}k(x-y)}
$$
这里的四动量已经在正能质量壳上, 即 $k^0=\omega_{\bm{k}}>0$ 和 $k^2=m^2$.
由于 $\phi^{(+)}(x)|0\rangle=0$, 在真空期望值中加入反序乘积不会改变结果:
$$
D^+(x-y)=\langle0|[\phi^{(+)}(x),\phi^{\dagger(-)}(y)]|0\rangle
$$
这个对易子本身已经是数值分布乘以单位算符, 所以还可以直接写成:
$$
D^+(x-y)=[\phi^{(+)}(x),\phi^{\dagger(-)}(y)]
$$


第二种真空二点函数取相反的场次序:
$$
D^-(x-y)=\langle0|\phi^{\dagger}(y)\phi(x)|0\rangle
$$
这次右边的 $\phi(x)$ 必须用 $\phi^{(-)}$ 产生一个反粒子, 左边的 $\phi^{\dagger}(y)$ 再用 $\phi^{\dagger(+)}$ 将它湮灭.
所以:
$$
D^-(x-y)=\langle0|\phi^{\dagger(+)}(y)\phi^{(-)}(x)|0\rangle
$$
代入模展开得到:
$$
D^-(x-y)=\int\frac{\dd[3]{k}\dd[3]{p}}{2(2\pi)^3\sqrt{\omega_{\bm{k}}\omega_{\bm{p}}}}\mathrm{e}^{-\mathrm{i}ky}\mathrm{e}^{\mathrm{i}px}\langle0|\hat{b}(\bm{k})\hat{b}^{\dagger}(\bm{p})|0\rangle
$$
使用 $b$ 类模算符的对易关系并完成一个积分:
$$
D^-(x-y)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}\mathrm{e}^{\mathrm{i}k(x-y)}
$$
同样因为 $\phi^{\dagger(+)}(y)$ 湮灭真空:
$$
D^-(x-y)=\langle0|[\phi^{\dagger(+)}(y),\phi^{(-)}(x)]|0\rangle
$$
对应的对易子也是数值分布, 因而:
$$
D^-(x-y)=[\phi^{\dagger(+)}(y),\phi^{(-)}(x)]
$$
因此 $D^+$ 只包含正能质量壳上的 $\mathrm{e}^{-\mathrm{i}k(x-y)}$, $D^-$ 则包含与之共轭的频率方向.


这两个量称为怀特曼二点函数.
“二点”表示它们依赖两个时空事件, “真空关联”表示它们测量真空中两个场算符按指定次序相乘的期望值.
它们已经是普通复数值分布, 不再是作用在福克空间上的算符.
这是因为真空矩阵元已经把所有模算符收缩成狄拉克分布并完成积分.


更准确地说, 二点函数是定义在乘积流形 $M\times M$ 上的双分布: 第一个变量标记第一处场插入, 第二个变量标记第二处场插入.
对标量场, 两端纤维都是一维复数空间, 所以取真空矩阵元后只剩复数值核；对旋量场或矢量场, 两端还会保留相应的纤维指标.
把两个变量分别与测试函数涂抹, 才得到真正有限的双线性配对, 这就是“分布核”在物理计算中的实际含义.


平移不变性解释了它们为什么只依赖 $x-y$.
若同时平移两个事件 $x\mapsto x+a$ 和 $y\mapsto y+a$, 指数中的差不变:
$$
k(x+a)-k(y+a)=k(x-y)
$$
真空也具有平移不变性, 所以二点函数不可能依赖绝对坐标原点.


积分测度的洛伦兹不变性可以从四维形式直接证明.
先使用恒等式:
$$
\delta[(k^0)^2-\omega_{\bm{k}}^2]=\frac{\delta(k^0-\omega_{\bm{k}})+\delta(k^0+\omega_{\bm{k}})}{2\omega_{\bm{k}}}
$$
再用 $\theta(k^0)$ 只保留正能根:
$$
\int\dd{k^0}\delta(k^2-m^2)\theta(k^0)F(k)=\frac{F(\omega_{\bm{k}},\bm{k})}{2\omega_{\bm{k}}}
$$
因此:
$$
\int\frac{\dd[3]{k}}{2\omega_{\bm{k}}}F(k)=\int\dd[4]{k}\delta(k^2-m^2)\theta(k^0)F(k)
$$
右边由洛伦兹标量 $k^2$, 四维体积元和正能条件组成, 在正规正时洛伦兹变换下不变.
所以 $D^+(x-y)$ 是洛伦兹标量分布, $D^-(x-y)$ 也同样如此.


把二点函数称为“分布”而不是处处有限的普通函数非常重要.
在 $x=y$ 时, 高动量积分会发散.
真正良好定义的对象是它与光滑测试函数积分后的结果, 或经过适当正则化的复合表达式.
这一点与前面“量子场本身是算符值分布”的结论完全一致.

---
## 场对易函数怎样保存全部正则信息


考虑任意两个时空点上的场对易子:
$$
C(x-y)=[\phi(x),\phi^{\dagger}(y)]
$$
把完整模展开代入.
$a$ 类部分给出正频率指数, $b$ 类部分因为对易子次序相反而给出负号:
$$
C(x-y)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}[\mathrm{e}^{-\mathrm{i}k(x-y)}-\mathrm{e}^{\mathrm{i}k(x-y)}]
$$
这个结果不含任何剩余模算符, 所以 $C(x-y)$ 是乘以单位算符的数值分布.
也可以直接从两种怀特曼函数看出:
$$
C(x-y)=D^+(x-y)-D^-(x-y)
$$


通常把实的泡利–若尔当分布 $\Delta$ 定义为:
$$
[\phi(x),\phi^{\dagger}(y)]=\mathrm{i}\Delta(x-y)
$$
于是:
$$
\Delta(x-y)=\frac{1}{\mathrm{i}}\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}[\mathrm{e}^{-\mathrm{i}k(x-y)}-\mathrm{e}^{\mathrm{i}k(x-y)}]
$$
交换两个事件会改变对易子的符号, 所以:
$$
\Delta(y-x)=-\Delta(x-y)
$$
这个反对称性将在等时极限中发挥关键作用.


令 $x^0=y^0=t$, 并记 $\bm{r}=\bm{x}-\bm{y}$.
等时场对易子为:
$$
C(0,\bm{r})=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}[\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{r}}-\mathrm{e}^{-\mathrm{i}\bm{k}\cdot\bm{r}}]
$$
对第二项作换元 $\bm{k}\mapsto-\bm{k}$.
因为 $\omega_{-\bm{k}}=\omega_{\bm{k}}$ 且积分区域关于原点对称, 两项完全相消:
$$
[\phi(t,\bm{x}),\phi^{\dagger}(t,\bm{y})]=0
$$
这恢复了基本等时对易关系中的第一部分.


再对 $x^0$ 求导:
$$
\partial_{x^0}C(x-y)=\int\frac{\dd[3]{k}}{2(2\pi)^3\omega_{\bm{k}}}[-\mathrm{i}\omega_{\bm{k}}\mathrm{e}^{-\mathrm{i}k(x-y)}-\mathrm{i}\omega_{\bm{k}}\mathrm{e}^{\mathrm{i}k(x-y)}]
$$
取等时极限并约去 $\omega_{\bm{k}}$:
$$
\partial_{x^0}C(0,\bm{r})=-\frac{\mathrm{i}}{2}\int\frac{\dd[3]{k}}{(2\pi)^3}[\mathrm{e}^{\mathrm{i}\bm{k}\cdot\bm{r}}+\mathrm{e}^{-\mathrm{i}\bm{k}\cdot\bm{r}}]
$$
两个积分各自都是 $\delta^{(3)}(\bm{r})$, 因而:
$$
[\dot{\phi}(t,\bm{x}),\phi^{\dagger}(t,\bm{y})]=-\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
反转对易子的次序得到:
$$
[\phi^{\dagger}(t,\bm{y}),\dot{\phi}(t,\bm{x})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
由于 $\dot{\phi}$ 正是 $\phi^{\dagger}$ 的正则共轭动量, 这就是基本正则对易关系.
所以不同时刻的场对易函数没有引入新的独立假设.
它是等时正则结构经过 Klein–Gordon 方程演化后的完整结果.


对 $x$ 或 $y$ 使用 Klein–Gordon 算符时, 每个指数都在质量壳上:
$$
(\Box_x+m^2)\mathrm{e}^{\mp\mathrm{i}k(x-y)}=(-k^2+m^2)\mathrm{e}^{\mp\mathrm{i}k(x-y)}=0
$$
因此:
$$
(\Box_x+m^2)C(x-y)=0
$$
对易函数满足齐次方程, 它的初始数据正是刚才得到的等时对易关系.
初始数据和双曲型运动方程共同决定它在整个时空中的传播.

---
## 类空间隔下为什么必须对易


若两个事件满足:
$$
(x-y)^2=(x^0-y^0)^2-|\bm{x}-\bm{y}|^2<0
$$
它们具有类空间隔.
这意味着不存在速度不超过光速的因果信号从一个事件到达另一个事件.
相对论量子场论把这一要求编码为微观因果性:
$$
[\phi(x),\phi^{\dagger}(y)]=0 \quad \text{当 }(x-y)^2<0
$$


这个结论可以利用洛伦兹不变性简洁证明.
对任意类空间隔 $z=x-y$, 总能找到一个惯性系使两个事件同时, 即 $z'^0=0$.
因为 $C(z)$ 是洛伦兹标量分布:
$$
C(z)=C(z')
$$
而前面已经直接证明任意空间距离下都有 $C(0,\bm{z}')=0$.
因此:
$$
C(z)=0 \quad z^2<0
$$
证明只用了正能质量壳测度的洛伦兹不变性和玻色场的正则对易关系.


复场的另外两种场对易子甚至不需要限制为类空间隔.
由于同类模算符彼此对易, 两套粒子与反粒子算符之间也交叉对易:
$$
[\phi(x),\phi(y)]=0 \quad [\phi^{\dagger}(x),\phi^{\dagger}(y)]=0
$$
只有 $[\phi(x),\phi^{\dagger}(y)]$ 包含非平凡的传播信息, 而它在类空间隔同样消失.


微观因果性真正约束的是局域可观测量.
若两个局域操作位于类空间隔, 对应算符对易意味着它们的作用次序不影响任何物理结果.
由于不同惯性系可能对类空间隔事件给出相反的时间顺序, 只有这种次序无关性才能与相对论兼容.


需要特别区分“对易子为零”和“真空关联为零”.
类空间隔下一般仍有:
$$
D^+(x-y)=\langle0|\phi(x)\phi^{\dagger}(y)|0\rangle\neq0
$$
但同时:
$$
D^+(x-y)-D^-(x-y)=0
$$
真空态不是每个空间区域各自独立的乘积态, 所以相隔很远的场可以具有量子关联.
然而能够比较两种操作次序并产生可控响应的是对易子, 它在类空间隔严格消失.
因此非零真空关联本身不能用来进行超光速通信.


这一区别也预告了 Feynman 传播子的性质.
时间序二点函数在类空间隔一般不为零, 但这不表示粒子或信号以超光速从 $y$ 运动到 $x$.
因果信号由响应函数和场对易子控制, 而不是由单独一个时间序关联函数是否非零决定.


到这里已经得到三种不同对象: $D^+$ 记录一种场次序的真空关联, $D^-$ 记录相反次序的真空关联, $C=D^+-D^-$ 记录两种次序之差并控制微观因果性.
下一篇将用阶跃函数按照时间先后把 $D^+$ 与 $D^-$ 重新组合, 得到 Feynman 时间序传播子.
