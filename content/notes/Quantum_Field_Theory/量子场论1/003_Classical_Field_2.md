---
title: 经典场（二）：作用量与欧拉–拉格朗日方程
date: 2026-08-17
weight: 3
---
上一篇建立了场, 丛, 截面和构型空间.
本文在这个无穷维构型空间上定义局域作用量与场变分, 从方向导数, 分部积分, 边界条件和变分法基本引理开始完整推导欧拉–拉格朗日方程.
随后把结果用于实标量场与复标量场, 并建立共轭动量与哈密顿量描述.

---
## 局域作用量与变分究竟在做什么


普通函数把若干数映射成一个数, 例如 $f:\mathbb{R}^N\to\mathbb{R}$.
泛函则把一个函数或截面映射成一个数.
作用量写成 $S[\phi]$, 方括号提醒我们它的输入是整个场构型 $\phi$, 而不是某一个点的场值 $\phi(x)$.


有限维类比可以把泛函的概念再说得更具体.
设一条离散链有 $N$ 个变量, 定义函数:
$$
S_N(q_1,\ldots,q_N)=\sum_{i=1}^N aF\left(q_i,\frac{q_{i+1}-q_i}{a}\right)
$$
它的输入是整个数组 $(q_1,\ldots,q_N)$.
当格点间距趋于零时, 求和趋向积分, 数组趋向函数:
$$
\sum_{i=1}^N aF(q_i,\Delta q_i/a)\longrightarrow\int F(\phi(x),\partial_x\phi(x))\dd{x}
$$
离散函数 $S_N$ 因而趋向泛函 $S[\phi]$, 它是自由度数目连续化后的自然极限.


在离散系统中, 一阶变化为:
$$
\delta S_N=\sum_{i=1}^N\pdv{S_N}{q_i}\delta q_i
$$
在连续极限中, 离散指标求和变成空间积分, 普通导数变成泛函导数:
$$
\delta S=\int\frac{\delta S}{\delta\phi(x)}\delta\phi(x)\dd{x}
$$
狄拉克德尔塔分布也可以看成克罗内克符号在连续标签下的对应物.
这种离散类比能解释许多场论公式为何与多变量微积分几乎同形.


一阶局域场论的作用量取为:
$$
S[\phi]=\int_\Omega\mathcal{L}(\phi_a(x),\partial_\mu\phi_a(x),x)\dd[4]{x}
$$
$\Omega$ 是四维时空区域, $\partial\Omega$ 是它的三维边界.
$\mathcal{L}$ 是拉格朗日密度.
在自然单位制中, $S$ 无量纲而 $\dd[4]{x}$ 的质量维数为 $-4$, 所以四维时空中的 $\mathcal{L}$ 具有质量维数 $4$.


在不依赖坐标的语言中, 真正被积分的是四维时空上的最高次微分形式 $\mathcal{L}\dd[4]{x}$.
坐标变换会同时改变 $\mathcal{L}$ 的分量表达和体积元, 但这个最高次形式及其积分不变.
所以拉格朗日密度既是由场截面及其导数构造的局域对象, 又必须与体积形式配对以后才能成为可积的作用量密度.


这条映射的物理输入和输出必须分清.
输入 $\phi$ 是整个区域 $\Omega$ 上的一份候选场历史, 输出 $S[\phi]$ 是一个数.
作用量不是某个时空点上可以直接读取的局域场, 也不是随位置变化的函数.
拉格朗日密度才是逐点定义的量, 积分把所有点的局域贡献汇总成作用量.
驻定原理比较的是相同边界准备下的整份候选历史, 不是在同一个历史内部比较两个时刻的作用量大小.


因此 $S$ 是定义在截面构型空间上的函数, 变分 $\eta$ 是这个无穷维空间在 $\phi$ 处的切向量, 而 $\delta S$ 是作用在这些切向量上的对偶向量.
欧拉–拉格朗日表达式就是这个对偶向量在局部坐标中的密度核；运动方程要求它对所有允许的构型空间方向都给出零.


下标 $a$ 统一编号不同场及其内部线性分量.
它不是时空指标, 不由闵可夫斯基度规升降.
如果理论只有一个实标量场, 可以省略 $a$.
如果有多个实场, 或把复场拆成实部和虚部, $a$ 就用于区分它们.


所谓局域, 是指 $x$ 点的 $\mathcal{L}$ 只依赖同一点的场值和有限阶导数, 不直接依赖远处 $y$ 点的场值.
本文只处理一阶局域理论, 所以允许的局域数据是 $x$, $\phi_a(x)$ 和 $\partial_\mu\phi_a(x)$.
这并不意味着不同点彼此没有作用.
导数把相邻点的场值联系起来, 并由运动方程使扰动传播.


数学上可以用一阶喷射描述这些局域数据.
在同一点 $x$ 处, 如果两个场构型具有相同场值和相同一阶导数, 就说它们在 $x$ 处具有相同的一阶喷射.


更准确地说, 一阶喷射不是任意写出的三元组, 而是一类场的等价类.
固定 $x$ 后, 若 $\phi$ 与 $\widetilde{\phi}$ 满足 $\phi(x)=\widetilde{\phi}(x)$ 且 $\partial_\mu\phi(x)=\partial_\mu\widetilde{\phi}(x)$, 就把它们归入同一类.
它们在远离 $x$ 的地方可以完全不同, 但对只读取一阶局域信息的拉格朗日密度来说无法区分.
记号 $j_x^1\phi$ 表示 $\phi$ 所属的这一等价类.


一阶喷射可以简写为:
$$
j_x^1\phi=(x,\phi_a(x),\partial_\mu\phi_a(x))
$$
它不记录场在整个时空的样子, 只记录场在 $x$ 点的一阶泰勒数据.
拉格朗日密度可以看成一阶喷射空间上的函数.
这个说法的物理意义很朴素.
要计算 $x$ 点的 $\mathcal{L}$, 我们不需要先知道宇宙另一端的场值.
知道 $x$ 附近的场值及其一阶变化已经足够.
喷射丛只是把“函数在一点的有限阶局域信息”组织成一个几何对象, 本文不需要进一步使用其抽象理论.


对应到物理上, $\phi_a(x)$ 是局域场值, $\partial_0\phi_a(x)$ 描述它在该事件附近的时间变化率, $\partial_i\phi_a(x)$ 描述空间方向上的局域梯度.
一阶局域探针只需要这些数据就能计算该点的拉格朗日密度.
喷射并不是一种新粒子或新场, 它只是把一个局域理论实际会读取的数据打包起来.


相对论场论要求作用量不依赖任意惯性坐标系的选择.
在正规洛伦兹变换下 $\dd[4]{x}$ 不变, 因而通常把 $\mathcal{L}$ 构造成洛伦兹标量.
经典作用量还应为实数.
对复场来说, 这通常要求场与其复共轭以适当组合出现.


建立一个经典场论时, 这些要求可以分成形式原则与动力学健康性两层.
形式原则告诉我们作用量应怎样在坐标和对称变换下组织.
动力学健康性则检查由它得到的偏微分方程是否能描述稳定且可预测的演化.
只满足洛伦兹协变性并不足以保证理论物理上可接受.


第一条形式原则是作用量应为实数.
若对实经典场取复作用量, 驻定条件会同时包含实部和虚部的独立要求, 通常不再是原本想要的经典变分问题.
复场可以出现在作用量中, 但不同项必须组合成实拉格朗日密度, 或至少使总作用量为实数.


第二条形式原则是时空对称性.
在相对论理论中, 拉格朗日密度与体积元的组合必须使作用量成为洛伦兹标量.
这并不要求每个中间分量都不变.
向量和旋量分量会混合, 但所有自由时空指标必须最终被合法收缩, 使整个积分不依赖惯性标架.


第三条是局域性.
局域性使运动方程可由有限阶微分关系表达, 并使某一区域的变化首先通过边界与邻域联系到外部.
相对论因果性还要求方程的传播结构与光锥相容.
仅仅看到 $\mathcal{L}$ 是局域函数并不能自动证明因果性, 还要检查最高阶导数决定的特征面.


第四条是对称性与允许项.
如果理论指定全局内部对称性, 每个拉格朗日量项都必须在该群作用下组成不变组合, 或只改变允许的总散度.
这会排除许多代数上可以写出但破坏对称性的耦合.
诺特定理随后把连续对称性转化为守恒结构.


第五条是导数阶数.
若 $\mathcal{L}$ 只含一阶导数且依赖形式普通, 欧拉–拉格朗日方程通常含至多二阶导数.
若作用量含更高阶导数, 变分时必须反复分部积分, 同时固定更多边界数据, 运动方程也通常具有更高阶.
本文限制在一阶拉格朗日量, 是为了使基本结构清楚, 不是因为所有场论都只能含一阶导数.


第六条是初值问题的适定性.
一个理想的经典理论应当在给定允许初值后存在解, 解在适当意义下唯一, 并且对初值的小变化连续响应.
这三点通常分别称为存在性, 唯一性与对初值的连续依赖.
如果微小测量误差会立刻造成任意大的解差异, 理论就缺乏普通意义下的预测能力.


第七条是能量性质.
如果哈密顿量没有下界, 系统可以通过产生正负能量激发而无限降低总能量, 经典真空往往不稳定.
动能项的符号和勒让德变换的正则性因此十分重要.
但能量是否有下界不能只看拉格朗日量中某项的表面正负号, 必须完成哈密顿量或能动量分析.


这些原则并不唯一决定 $\mathcal{L}$.
它们更像一组筛选条件: 先列出由场内容与对称性允许的局域项, 再检查实数性, 量纲一致性, 初值结构和稳定性.
不同允许项的系数仍需由实验, 更深层理论或有效理论的适用尺度决定.


拉格朗日密度的量纲也提供直接检查.
在四维自然单位制中 $[\mathcal{L}]=4$.
每一项必须具有相同质量维数, 否则不能相加.
这个要求不会判断某项是否真的存在, 但能迅速发现遗漏的质量尺度或错误的导数次数.


最后, “物理场”不只是任意数学截面.
场的纤维类型决定它在时空与内部对称性下怎样变换, 作用量决定它怎样演化, 边界条件决定允许的全局构型, 可观测量则说明哪些组合能够被测量.
只给出分量函数而不说明这些结构, 还没有完整定义一个场论.


作用量原理说, 真实运动使作用量对所有允许的小变分一阶驻定.
驻定不等于最小.
一阶变化为零的构型可能是最小值, 最大值或鞍点.
所以更准确的名称是驻定作用量原理.


取一个允许的测试截面 $\eta_a(x)$, 构造穿过 $\phi_a$ 的一参数场族:
$$
\phi_{a,\epsilon}(x)=\phi_a(x)+\epsilon\eta_a(x)
$$
$\epsilon$ 是普通实参数.
当 $\epsilon=0$ 时回到原场构型.
$\eta_a$ 指定我们在构型空间中沿哪个方向离开 $\phi_a$.


作用量沿这个方向的一阶变化定义为方向导数:
$$
\delta S[\phi;\eta]=\left.\dv{S[\phi+\epsilon\eta]}{\epsilon}\right|_{\epsilon=0}
$$
这个定义也称伽托变分.
它与有限维微积分中的方向导数完全平行.
若 $f(q)$ 是普通函数, 沿方向 $v$ 的方向导数是 $\left.\dv*{f(q+\epsilon v)}{\epsilon}\right|_{\epsilon=0}$.
场论只是把有限维向量 $q$ 换成了函数 $\phi$.


记号 $\delta\phi_a=\eta_a$ 表示这条一参数曲线在 $\epsilon=0$ 处的切向量.
由于时空坐标在这里保持固定, 变分与普通偏导数可交换.
从定义直接计算:
$$
\delta(\partial_\mu\phi_a)=\left.\dv{}{\epsilon}\partial_\mu(\phi_a+\epsilon\eta_a)\right|_{\epsilon=0}=\partial_\mu\eta_a=\partial_\mu(\delta\phi_a)
$$
这个等式依赖于场族对 $x$ 和 $\epsilon$ 足够光滑.
它不是凭记号猜出的规则, 而是两个导数次序可以交换的结果.


在固定坐标下, 拉格朗日密度的一阶变化由多元链式法则给出:
$$
\delta\mathcal{L}=\pdv{\mathcal{L}}{\phi_a}\delta\phi_a+\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}\delta(\partial_\mu\phi_a)
$$
这里对重复的 $a$ 和 $\mu$ 求和.
$\pdv*{\mathcal{L}}{\phi_a}$ 表示把 $\phi_b$ 与 $\partial_\mu\phi_b$ 暂时当成喷射空间中的独立坐标后所作的偏导数.
它并不是说真实场值和其导数在所有意义上彼此独立.


把上一条交换关系代入, 得到:
$$
\delta\mathcal{L}=\pdv{\mathcal{L}}{\phi_a}\delta\phi_a+\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}\partial_\mu(\delta\phi_a)
$$
定义协变正则动量, 也称多动量:
$$
\pi_a^\mu=\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}
$$
这是对四个时空方向统一定义的量.
稍后用于哈密顿量的等时共轭动量只是它的时间分量 $\pi_a^0$.


利用乘积求导法则:
$$
\partial_\mu(\pi_a^\mu\delta\phi_a)=(\partial_\mu\pi_a^\mu)\delta\phi_a+\pi_a^\mu\partial_\mu(\delta\phi_a)
$$
因此含变分导数的项可以改写为:
$$
\pi_a^\mu\partial_\mu(\delta\phi_a)=\partial_\mu(\pi_a^\mu\delta\phi_a)-(\partial_\mu\pi_a^\mu)\delta\phi_a
$$
代回 $\delta\mathcal{L}$ 后得到局域变分恒等式:
$$
\delta\mathcal{L}=\left(\pdv{\mathcal{L}}{\phi_a}-\partial_\mu\pi_a^\mu\right)\delta\phi_a+\partial_\mu(\pi_a^\mu\delta\phi_a)
$$
这个等式尚未使用运动方程, 对任意光滑场和任意变分都成立.
它是以后推导欧拉–拉格朗日方程和诺特定理的共同核心.


定义欧拉–拉格朗日表达式:
$$
\mathcal{E}_a=\pdv{\mathcal{L}}{\phi_a}-\partial_\mu\left[\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}\right]
$$
于是局域恒等式可以紧凑地写成:
$$
\delta\mathcal{L}=\mathcal{E}_a\delta\phi_a+\partial_\mu(\pi_a^\mu\delta\phi_a)
$$
$\mathcal{E}_a$ 是由场及其导数组成的局域函数.
此时还不能把它设为零.
只有在驻定作用量原理与允许变分的任意性一起使用后, 才会得到 $\mathcal{E}_a=0$.


它的物理角色可以类比粒子力学中的“运动方程残差”.
把任意候选场代入 $\mathcal{E}_a$, 一般会得到非零函数, 它指出这个候选场在每个点和每个分量上偏离真实动力学多少.
只有在壳场构型才使所有 $\mathcal{E}_a(x)$ 同时为零.
因此 $\mathcal{E}_a$ 不是额外引入的新场, 而是由作用量对原场计算出的局域响应.


对作用量变分并把变分移入积分号:
$$
\delta S=\int_\Omega\delta\mathcal{L}\dd[4]{x}=\int_\Omega\mathcal{E}_a\delta\phi_a\dd[4]{x}+\int_\Omega\partial_\mu(\pi_a^\mu\delta\phi_a)\dd[4]{x}
$$
四维斯托克斯定理把最后一个体积分变成边界积分:
$$
\int_\Omega\partial_\mu V^\mu\dd[4]{x}=\int_{\partial\Omega}V^\mu\dd{\Sigma_\mu}
$$
其中 $\dd{\Sigma_\mu}=n_\mu\dd[3]{\Sigma}$, $n_\mu$ 是边界的外法向协向量, $\dd[3]{\Sigma}$ 是边界上的三维体积元.
于是:
$$
\delta S=\int_\Omega\mathcal{E}_a\delta\phi_a\dd[4]{x}+\int_{\partial\Omega}\pi_a^\mu\delta\phi_a\dd{\Sigma_\mu}
$$


如果边界上的场值被固定, 允许变分满足 $\delta\phi_a|_{\partial\Omega}=0$.
如果使用紧支集变分, 它也会在边界附近消失.
两种做法都会使边界项为零, 因而驻定条件化为:
$$
0=\delta S=\int_\Omega\mathcal{E}_a\delta\phi_a\dd[4]{x}
$$


现在需要使用变分法基本引理.
它说, 如果连续函数 $f(x)$ 对所有紧支集光滑测试函数 $\eta(x)$ 都满足 $\int_\Omega f(x)\eta(x)\dd[4]{x}=0$, 那么 $f(x)$ 在 $\Omega$ 内处处为零.
这个结论表达了测试函数足够丰富, 能够探测每一个局域区域.


其直观证明可以这样理解.
假设某点 $x_0$ 有 $f(x_0)>0$.
由连续性, $x_0$ 附近存在一个小邻域, 其中 $f$ 仍然为正.
在这个邻域内部选择一个非负, 不恒为零并在邻域边缘光滑降到零的隆起函数 $\eta$.
那么 $f\eta$ 在该邻域内非负且某处严格为正, 所以积分必定大于零, 与假设矛盾.
$f(x_0)<0$ 的情况同理.
因此只能有 $f=0$.


不同分量 $\delta\phi_a$ 可以彼此独立地选择.
对每一个 $a$ 使用基本引理, 最终得到场的欧拉–拉格朗日方程:
$$
\pdv{\mathcal{L}}{\phi_a}-\partial_\mu\left[\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}\right]=0
$$
这是一组偏微分方程.
它与粒子力学中的 $\pdv*{L}{q_a}-\dv*{(\pdv*{L}{\dot q_a})}{t}=0$ 结构完全相同, 只是单一时间导数被四维散度取代.


泛函导数由关系 $\delta S=\int(\delta S/\delta\phi_a(x))\delta\phi_a(x)\dd[4]{x}$ 定义.
在边界项已经消失时比较系数, 可得:
$$
\frac{\delta S}{\delta\phi_a(x)}=\mathcal{E}_a(x)
$$
这里的 $\delta S/\delta\phi_a(x)$ 不是普通偏导数.
它表示只在 $x$ 附近改变场时, 整个泛函 $S$ 的一阶响应密度.
运动方程也可以写成 $\delta S/\delta\phi_a(x)=0$.


边界条件不是可以在最后随意丢掉的技术细节.
变分原理是否良定, 取决于边界上固定哪些数据, 以及作用量是否包含适当边界项.
本文采用狄利克雷型变分条件, 即固定边界场值.


这里的边界包含两类物理数据.
若 $\Omega$ 夹在两个时刻之间, 初始与末端时间切片属于时间边界, 固定它们是在比较端点相同的候选历史.
若系统位于有限空间区域, 容器壁或区域外缘属于空间边界, 固定场值是在规定外界如何约束系统.
两类边界在四维斯托克斯公式中统一出现, 但它们的实验解释不同.


允许变分必须保持已经固定的实验准备.
如果比较过程中连端点或容器壁条件也一起改变, 作用量的差异就混入了外部准备的变化, 不能只归因于体内运动.
所以令 $\delta\phi_a|_{\partial\Omega}=0$ 不是为了方便而凭空添加, 而是在陈述我们比较的是同一个边值问题中的不同候选场.
若要固定法向导数或允许自由边界变化, 必须重新检查并可能修改边界作用量.


拉格朗日密度也不是唯一的.
若加入一个总散度 $\partial_\mu K^\mu$, 新作用量与旧作用量相差边界项:
$$
S'[\phi]-S[\phi]=\int_\Omega\partial_\mu K^\mu\dd[4]{x}=\int_{\partial\Omega}K^\mu\dd{\Sigma_\mu}
$$
在边界条件使其变分消失时, $\mathcal{L}$ 与 $\mathcal{L}+\partial_\mu K^\mu$ 给出相同的体内欧拉–拉格朗日方程.
但它们的边界结构和正则流可能不同, 所以“相差总导数等价”总要附带边界条件.

---
## 实标量场与复标量场的逐步计算


先考虑一个实标量场 $\phi(x)$.
最常见的一阶拉格朗日密度为:
$$
\mathcal{L}=\frac{1}{2}\partial_\mu\phi\partial^\mu\phi-V(\phi)
$$
第一项是动能项, 第二项是势能项.
利用号差 $(+,-,-,-)$ 展开动能项:
$$
\frac{1}{2}\partial_\mu\phi\partial^\mu\phi=\frac{1}{2}(\partial_t\phi)^2-\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi
$$
时间导数项与空间梯度项符号相反, 这是闵可夫斯基度规的结果.
它不表示梯度能量为负, 因为能量要由哈密顿量或能动量张量计算, 不能直接把 $\mathcal{L}$ 当成能量密度.


先计算 $\pdv*{\mathcal{L}}{\phi}$.
动能项只依赖 $\partial_\mu\phi$, 对喷射坐标 $\phi$ 的偏导数为零.
势能项给出:
$$
\pdv{\mathcal{L}}{\phi}=-\dv{V}{\phi}
$$
再计算 $\pdv*{\mathcal{L}}{(\partial_\lambda\phi)}$.
把动能项完整写成带度规的形式:
$$
\mathcal{L}_{\mathrm{kin}}=\frac{1}{2}\eta^{\mu\nu}(\partial_\mu\phi)(\partial_\nu\phi)
$$
喷射坐标之间满足:
$$
\pdv{(\partial_\mu\phi)}{(\partial_\lambda\phi)}=\delta_\mu^\lambda
$$
使用乘积求导法则:
$$
\pdv{\mathcal{L}_{\mathrm{kin}}}{(\partial_\lambda\phi)}=\frac{1}{2}\eta^{\mu\nu}\left[\delta_\mu^\lambda\partial_\nu\phi+\partial_\mu\phi\delta_\nu^\lambda\right]
$$
第一项收缩 $\mu$ 指标, 第二项收缩 $\nu$ 指标:
$$
\pdv{\mathcal{L}_{\mathrm{kin}}}{(\partial_\lambda\phi)}=\frac{1}{2}\eta^{\lambda\nu}\partial_\nu\phi+\frac{1}{2}\eta^{\mu\lambda}\partial_\mu\phi
$$
度规对称, 两项相等, 所以:
$$
\pdv{\mathcal{L}}{(\partial_\lambda\phi)}=\eta^{\lambda\nu}\partial_\nu\phi=\partial^\lambda\phi
$$
这一步常被直接写成答案, 但它本质上只是对一个对称二次型求导.
在线性代数中, 对 $f(v)=v^{\mathsf{T}}Mv/2$ 求梯度会得到 $Mv$, 前提是 $M$ 对称.
这里 $v$ 对应四个分量 $\partial_\mu\phi$, $M$ 对应闵可夫斯基度规.


把两项代入欧拉–拉格朗日方程:
$$
-\dv{V}{\phi}-\partial_\mu\partial^\mu\phi=0
$$
定义达朗贝尔算符 $\Box=\partial_\mu\partial^\mu=\partial_t^2-\bm{\nabla}^2$, 可写成:
$$
\Box\phi+\dv{V}{\phi}=0
$$
若 $V(\phi)=m^2\phi^2/2$, 则 $\dv*{V}{\phi}=m^2\phi$, 因而得到克莱因–戈尔登方程:
$$
(\Box+m^2)\phi=0
$$


这个运动方程对时间是二阶的.
因此在一个初始时刻 $t_0$, 一般需要同时给定 $\phi(t_0,\bm{x})$ 与 $\partial_t\phi(t_0,\bm{x})$ 才能确定后续演化.
前者是初始构型, 后者是初始速度.
它们还必须满足适当的空间边界条件和正则性要求.


也可以不借助已经推导的通式, 直接检查整个变分.
取 $\phi_\epsilon=\phi+\epsilon\eta$, 则:
$$
S[\phi_\epsilon]=\int_\Omega\left[\frac{1}{2}\partial_\mu(\phi+\epsilon\eta)\partial^\mu(\phi+\epsilon\eta)-V(\phi+\epsilon\eta)\right]\dd[4]{x}
$$
把动能项展开到 $\epsilon$ 的一阶:
$$
\frac{1}{2}\partial_\mu(\phi+\epsilon\eta)\partial^\mu(\phi+\epsilon\eta)=\frac{1}{2}\partial_\mu\phi\partial^\mu\phi+\epsilon\partial_\mu\phi\partial^\mu\eta+O(\epsilon^2)
$$
势能项的泰勒展开为:
$$
V(\phi+\epsilon\eta)=V(\phi)+\epsilon\dv{V}{\phi}\eta+O(\epsilon^2)
$$
因此作用量的一阶变化是:
$$
\delta S=\int_\Omega\left[\partial_\mu\phi\partial^\mu\eta-\dv{V}{\phi}\eta\right]\dd[4]{x}
$$
对第一项分部积分:
$$
\partial_\mu\phi\partial^\mu\eta=\partial_\mu(\partial^\mu\phi\eta)-(\partial_\mu\partial^\mu\phi)\eta
$$
边界项消失后:
$$
\delta S=-\int_\Omega\left(\Box\phi+\dv{V}{\phi}\right)\eta\dd[4]{x}
$$
因为 $\eta$ 在体内任意, 再次得到 $\Box\phi+\dv*{V}{\phi}=0$.
这条直接计算展示了每一步, 也验证了通用公式的符号.


下面考虑复标量场 $\phi$.
复场不是一个额外神秘的自由度, 它可以拆成两个实场:
$$
\phi=\frac{1}{\sqrt{2}}(\phi_1+\mathrm{i}\phi_2),\quad\phi^*=\frac{1}{\sqrt{2}}(\phi_1-\mathrm{i}\phi_2)
$$
反过来:
$$
\phi_1=\frac{1}{\sqrt{2}}(\phi+\phi^*),\quad\phi_2=\frac{1}{\sqrt{2}\mathrm{i}}(\phi-\phi^*)
$$
所以给定 $(\phi_1,\phi_2)$ 与给定 $(\phi,\phi^*)$ 包含完全相同的信息.


变分时可以把 $\delta\phi_1$ 和 $\delta\phi_2$ 独立选择.
上述线性变换可逆, 因而等价地可以把 $\delta\phi$ 和 $\delta\phi^*$ 当作独立的变分方向.
这里的“独立”是变分计算中的坐标独立, 不是说在真实构型上 $\phi^*$ 不再是 $\phi$ 的复共轭.
我们只是用一组更方便的坐标描述同一个二维实场空间.


自由复标量场的拉格朗日密度为:
$$
\mathcal{L}=\partial_\mu\phi^*\partial^\mu\phi-m^2\phi^*\phi
$$
交换两因子的次序并取复共轭可见 $\mathcal{L}^*=\mathcal{L}$, 所以作用量为实数.
把复场拆成两个实场后:
$$
\mathcal{L}=\frac{1}{2}\partial_\mu\phi_1\partial^\mu\phi_1-\frac{1}{2}m^2\phi_1^2+\frac{1}{2}\partial_\mu\phi_2\partial^\mu\phi_2-\frac{1}{2}m^2\phi_2^2
$$
因此自由复标量场等价于两个质量相同的自由实标量场.


把 $\phi$ 与 $\phi^*$ 当成变分坐标, 先对 $\phi^*$ 写欧拉–拉格朗日方程.
不含导数的偏导数是:
$$
\pdv{\mathcal{L}}{\phi^*}=-m^2\phi
$$
对 $\partial_\mu\phi^*$ 的偏导数是:
$$
\pdv{\mathcal{L}}{(\partial_\mu\phi^*)}=\partial^\mu\phi
$$
因此:
$$
-m^2\phi-\partial_\mu\partial^\mu\phi=0
$$
即:
$$
(\Box+m^2)\phi=0
$$


再对 $\phi$ 变分.
对应的两个偏导数为 $\pdv*{\mathcal{L}}{\phi}=-m^2\phi^*$ 与 $\pdv*{\mathcal{L}}{(\partial_\mu\phi)}=\partial^\mu\phi^*$.
所以得到共轭方程:
$$
(\Box+m^2)\phi^*=0
$$
两条复方程实际上等价于 $\phi_1$ 与 $\phi_2$ 各自满足克莱因–戈尔登方程.


也可直接展开复场作用量的变分:
$$
\delta\mathcal{L}=\partial_\mu(\delta\phi^*)\partial^\mu\phi+\partial_\mu\phi^*\partial^\mu(\delta\phi)-m^2\delta\phi^*\phi-m^2\phi^*\delta\phi
$$
分别对前两项分部积分:
$$
\partial_\mu(\delta\phi^*)\partial^\mu\phi=\partial_\mu(\delta\phi^*\partial^\mu\phi)-\delta\phi^*\Box\phi
$$
以及:
$$
\partial_\mu\phi^*\partial^\mu(\delta\phi)=\partial_\mu(\partial^\mu\phi^*\delta\phi)-(\Box\phi^*)\delta\phi
$$
边界项消失后:
$$
\delta S=-\int_\Omega\left[\delta\phi^*(\Box+m^2)\phi+(\Box+m^2)\phi^*\delta\phi\right]\dd[4]{x}
$$
因为 $\delta\phi$ 与 $\delta\phi^*$ 可独立选择, 两个括号都必须为零.


这也展示了多分量场的普遍逻辑.
每一个独立实分量对应一条欧拉–拉格朗日方程.
改变到复坐标或其他线性组合不会改变方程数目, 只会改变它们的组织方式.

---
## 共轭动量, 哈密顿量与初值数据


场论的总拉格朗日量是每个固定时刻的空间积分:
$$
L(t)=\int_{\mathbb{R}^3}\mathcal{L}(\phi_a,\partial_t\phi_a,\partial_i\phi_a,x)\dd[3]{x}
$$
从等时观点看, $\phi_a(t,\bm{x})$ 类似于以连续标签 $\bm{x}$ 编号的广义坐标.
因此与 $\phi_a$ 共轭的正则共轭动量密度定义为:
$$
\pi_a(t,\bm{x})=\pdv{\mathcal{L}}{(\partial_t\phi_a)}
$$
在前面的协变记号中, 它正是 $\pi_a^0$.


“共轭”在这里表示它通过勒让德变换与场速度配对.
它不自动等于粒子力学中的物理线动量.
物理能量和线动量来自时空平移的诺特荷, 将在下一篇由能动量张量推导.
把正则共轭动量密度与物理动量密度区分开, 可以避免许多概念混乱.


更具体地说, 固定时刻后每个空间点的场值 $\phi_a(\bm{x})$ 都像一个广义坐标, 场速度 $\partial_t\phi_a(\bm{x})$ 是这个坐标的速度.
共轭动量 $\pi_a(\bm{x})$ 是拉格朗日密度对该速度的偏导数, 因而属于速度方向的对偶空间.
它回答的是“稍微改变这个场速度会怎样改变拉格朗日量”, 而不是“系统沿第几个空间方向运动”.


物理线动量则回答场构型在空间平移下怎样变化.
它有空间方向指标 $i$, 由能动量张量的 $T^{0i}$ 给出.
一个标量场只有一个共轭动量函数 $\pi(\bm{x})$, 却有三个物理动量密度分量 $T^{01}$, $T^{02}$ 和 $T^{03}$.
仅凭分量数目就能看出二者不是同一个数学对象.


哈密顿密度定义为:
$$
\mathcal{H}=\pi_a\partial_t\phi_a-\mathcal{L}
$$
总哈密顿量是 $H=\int\mathcal{H}\dd[3]{x}$.
这个勒让德变换要求能够用 $\phi_a$ 和 $\pi_a$ 解出速度 $\partial_t\phi_a$.
判断局部可逆性的对象是速度黑塞矩阵:
$$
W_{ab}=\frac{\partial^2\mathcal{L}}{\partial(\partial_t\phi_a)\partial(\partial_t\phi_b)}
$$
如果 $\det W\neq0$, 速度到动量的映射在局部可逆, 理论称为正则.
如果 $\det W=0$, 某些动量不能独立决定速度, 理论称为退化, 并会出现约束.


黑塞矩阵 $W_{ab}$ 的物理意义是速度到共轭动量映射的局部斜率.
若它可逆, 不同的微小速度变化会造成可区分的动量变化, 因而能从动量恢复速度.
若它有零方向, 沿某些速度组合改变并不改变相应动量, 说明拉格朗日描述中存在冗余或约束.
规范理论中的约束结构正是从这种退化开始出现.


这与线性代数中的关系 $p=Mv$ 完全相似.
若矩阵 $M$ 可逆, 给定 $p$ 就能唯一解出 $v=M^{-1}p$.
若 $M$ 有零方向, 不同的 $v$ 可能给出同一个 $p$, 或 $p$ 必须满足某些关系.
规范场论的哈密顿量结构正是后一种情形, 需要约束分析, 但本文暂不展开.


对实标量场:
$$
\mathcal{L}=\frac{1}{2}(\partial_t\phi)^2-\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi-V(\phi)
$$
共轭动量为:
$$
\pi=\pdv{\mathcal{L}}{(\partial_t\phi)}=\partial_t\phi
$$
速度黑塞矩阵等于 $1$, 因而勒让德变换可逆, 并有 $\partial_t\phi=\pi$.


逐步计算哈密顿密度:
$$
\mathcal{H}=\pi\partial_t\phi-\left[\frac{1}{2}(\partial_t\phi)^2-\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi-V(\phi)\right]
$$
先用 $\pi=\partial_t\phi$ 合并时间导数项:
$$
\mathcal{H}=\frac{1}{2}(\partial_t\phi)^2+\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi+V(\phi)
$$
再用 $\partial_t\phi=\pi$ 消去速度:
$$
\mathcal{H}=\frac{1}{2}\pi^2+\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi+V(\phi)
$$
只要势能具有合适下界, 三项都给出可控的能量.
这也解释了为什么拉格朗日量中带负号的空间梯度项在能量中变成正号.


等时相空间的一个点由一对函数 $(\phi(\bm{x}),\pi(\bm{x}))$ 构成.
它是粒子力学相空间坐标 $(q_i,p_i)$ 的连续无穷维版本.
对二阶场方程, 给定 $(\phi,\pi)$ 等价于给定场和一阶时间导数, 正好对应初值问题所需的数据.


哈密顿方程的场论形式为:
$$
\partial_t\phi_a(\bm{x})=\frac{\delta H}{\delta\pi_a(\bm{x})},\quad\partial_t\pi_a(\bm{x})=-\frac{\delta H}{\delta\phi_a(\bm{x})}
$$
右边使用泛函导数, 因为 $H$ 的输入是整对空间函数.
对实标量场, 第一条给出 $\partial_t\phi=\pi$.


第二条需要对梯度项作空间分部积分.
变分哈密顿量:
$$
\delta H=\int\left[\pi\delta\pi+\partial_i\phi\partial_i(\delta\phi)+\dv{V}{\phi}\delta\phi\right]\dd[3]{x}
$$
对中间项分部积分并令空间边界项消失:
$$
\delta H=\int\left[\pi\delta\pi+\left(-\bm{\nabla}^2\phi+\dv{V}{\phi}\right)\delta\phi\right]\dd[3]{x}
$$
因此:
$$
\frac{\delta H}{\delta\pi}=\pi,\quad\frac{\delta H}{\delta\phi}=-\bm{\nabla}^2\phi+\dv{V}{\phi}
$$
哈密顿方程给出:
$$
\partial_t\phi=\pi,\quad\partial_t\pi=\bm{\nabla}^2\phi-\dv{V}{\phi}
$$
对第一条再求一次时间导数并代入第二条:
$$
\partial_t^2\phi-\bm{\nabla}^2\phi+\dv{V}{\phi}=0
$$
这正是 $\Box\phi+\dv*{V}{\phi}=0$.
拉格朗日量与哈密顿量描述给出同一动力学, 前者使洛伦兹协变性更明显, 后者则把初值与正则结构表达得更直接.


到这里, 经典场论的基本对象已经完整连起来.
底空间 $M$ 给出事件的位置, 纤维 $E_x$ 给出每一点允许的局域场值, 截面 $\phi$ 给出一个完整场构型, 截面空间给出构型空间, 作用量泛函把完整构型映射成数, 其任意局域方向导数为零则产生欧拉–拉格朗日方程.
接下来两篇将在同一局域变分恒等式上加入连续对称性, 依次推导诺特流, 能动量张量和局域对称性对应的微分恒等式.
