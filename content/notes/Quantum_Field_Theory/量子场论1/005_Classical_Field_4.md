---
title: 经典场（四）：强诺特定理与局域对称性
date: 2026-08-17
weight: 5
---
上一篇在固定时空坐标下推导了全局内部对称性的诺特流.
本文允许时空坐标和场同时变化, 从定点变分, 输运变分和雅可比开始推导诺特定理的强版本.
随后把它用于时空平移与洛伦兹变换, 最后说明局域参数为什么导向诺特第二定理的微分恒等式.

---
## 诺特定理的强版本


弱版本保持 $x$ 不动, 因而不能直接处理时空平移和洛伦兹变换.
强版本允许坐标与场同时改变.
设一参数无穷小变换为:
$$
x'^\mu=x^\mu+\epsilon\xi^\mu(x)
$$
同时规定场在相互对应的点上满足:
$$
\phi'_a(x')=\phi_a(x)+\epsilon\Delta_a(x)
$$
$\xi^\mu$ 描述时空点怎样移动, $\Delta_a$ 描述把原点 $x$ 搬到新点 $x'$ 后场值还额外怎样改变.
这个 $\Delta_a$ 是沿变换参数计算的总变分率, 也可称为输运变分率.


可以把这条定义想成比较两个被配对的事件.
原构型在 $x$ 点取值 $\phi_a(x)$, 新构型在被搬运后的 $x'$ 点取值 $\phi'_a(x')$.
$\Delta_a$ 记录这两个相互对应点上的场值除了位置搬运以外还发生了什么内部变化.
因此它适合描述几何变换, 却还不是普通变分公式需要的同点差值.


但作用量变分中的链式法则比较的是同一个坐标标签 $x$ 上的 $\phi'_a(x)$ 与 $\phi_a(x)$.
因此还需要定点变分:
$$
\delta_0\phi_a(x)=\phi'_a(x)-\phi_a(x)
$$
下标 $0$ 提醒我们比较时坐标点固定.
总变分与定点变分不是同一个量.


为了找到两者关系, 把 $\phi'_a(x')$ 在 $x$ 附近作一阶泰勒展开:
$$
\phi'_a(x')=\phi'_a(x)+\epsilon\xi^\nu\partial_\nu\phi'_a(x)+O(\epsilon^2)
$$
由于导数项已经乘以 $\epsilon$, 在其中可把 $\phi'_a$ 替换为零阶的 $\phi_a$:
$$
\phi'_a(x')=\phi'_a(x)+\epsilon\xi^\nu\partial_\nu\phi_a(x)+O(\epsilon^2)
$$
另一方面, 变换定义给出 $\phi'_a(x')=\phi_a(x)+\epsilon\Delta_a(x)$.
比较两式:
$$
\phi'_a(x)-\phi_a(x)=\epsilon\left(\Delta_a-\xi^\nu\partial_\nu\phi_a\right)+O(\epsilon^2)
$$


定义特征量:
$$
Q_a=\Delta_a-\xi^\nu\partial_\nu\phi_a
$$
于是定点变分为:
$$
\delta_0\phi_a=\epsilon Q_a
$$
$Q_a$ 把场的内禀变化 $\Delta_a$ 与仅由移动取样点造成的变化 $\xi^\nu\partial_\nu\phi_a$ 区分开.
诺特恒等式中真正乘在欧拉–拉格朗日表达式前面的正是 $Q_a$.


三种量的物理问题各不相同.
$\xi^\mu$ 回答时空点被搬到哪里, $\Delta_a$ 回答跟着该点移动时纤维中的场值怎样改变, $Q_a$ 回答固定在原坐标 $x$ 观察时场分量怎样改变.
变分恒等式是在固定积分变量下推导的, 所以真正进入欧拉–拉格朗日项的是 $Q_a$, 不是 $\Delta_a$.


在线性代数类比中, $\xi^\mu\partial_\mu\phi_a$ 是因为改变取样位置而产生的差, $\Delta_a$ 是向量本身在搬运中的额外旋转, 二者相减才得到同一基准点上的净分量变化.
这个类比也说明为什么标量场可有 $\Delta=0$ 而仍有非零 $Q$: 标量没有内部旋转, 但固定观察点读到的函数值仍会因图样被平移而变化.


对标量场, 如果变换只是把场值随时空点一起搬运, 没有额外内部变化, 则 $\Delta=0$.
这时 $Q=-\xi^\nu\partial_\nu\phi$.
它可以理解为标量场沿向量场 $\xi$ 的负李导数.
李导数衡量沿一个无穷小时空流移动后, 几何对象在固定点表示中的改变.


对向量场或旋量场, $\Delta_a$ 一般不为零.
因为移动或旋转坐标标架时, 场的内部线性分量也会按相应表示混合.
因此强版本把“点被搬到哪里”与“纤维中的分量怎样变换”同时编码.


这里应把四类看起来都像矩阵乘法的变换分开.
坐标变换只是更换底流形上的数字标签, 时空微分同胚会实际搬动底空间点, 局部标架变换在固定点更换切空间或旋量空间的基底, 内部规范变换则沿内部主丛的纤维改变标架.
同一个洛伦兹变换既可以在底空间上表现为 $x\mapsto x'$, 也可以通过某个表示在向量或旋量纤维上混合分量；规范变换通常不移动 $x$, 只改变内部纤维的描述.
只有先说明变换作用在哪个空间, 才能判断它是在改变物理构型还是只在改变同一构型的代表元.


先推导场导数的总变分.
由链式法则, 新坐标导数满足:
$$
\partial'_\mu=\pdv{x^\nu}{x'^\mu}\partial_\nu
$$
坐标雅可比为:
$$
\pdv{x'^\rho}{x^\nu}=\delta^\rho_\nu+\epsilon\partial_\nu\xi^\rho
$$
其逆矩阵到一阶是:
$$
\pdv{x^\nu}{x'^\mu}=\delta^\nu_\mu-\epsilon\partial_\mu\xi^\nu+O(\epsilon^2)
$$
因为 $(\mathbb{1}+\epsilon A)(\mathbb{1}-\epsilon A)=\mathbb{1}+O(\epsilon^2)$.


对变换后的场求导:
$$
\partial'_\mu\phi'_a(x')=\left(\delta^\nu_\mu-\epsilon\partial_\mu\xi^\nu\right)\partial_\nu\left[\phi_a(x)+\epsilon\Delta_a(x)\right]+O(\epsilon^2)
$$
展开并保留一阶:
$$
\partial'_\mu\phi'_a(x')=\partial_\mu\phi_a+\epsilon\partial_\mu\Delta_a-\epsilon(\partial_\mu\xi^\nu)\partial_\nu\phi_a+O(\epsilon^2)
$$
因此场导数沿参数的总变分率为:
$$
\Delta(\partial_\mu\phi_a)=\partial_\mu\Delta_a-(\partial_\mu\xi^\nu)\partial_\nu\phi_a
$$
第二项来自导数基底本身随坐标变化, 它在时空对称性中不能省略.


如果改用定点变分, 坐标保持不动, 因而又有简单关系:
$$
\delta_0(\partial_\mu\phi_a)=\partial_\mu(\delta_0\phi_a)=\epsilon\partial_\mu Q_a
$$
两种写法相容, 只是分别在移动点与固定点比较场.


接着处理积分体积元.
坐标变换给出:
$$
\dd[4]{x'}=\det\left(\pdv{x'}{x}\right)\dd[4]{x}
$$
雅可比矩阵是 $J=\mathbb{1}+\epsilon A$, 其中 $A^\mu{}_\nu=\partial_\nu\xi^\mu$.
需要证明其行列式的一阶展开为 $1+\epsilon\operatorname{tr}A$.


行列式是矩阵各列的多线性反对称函数.
把 $J$ 的每一列看成单位矩阵对应列加上 $\epsilon A$ 的对应列.
零阶项是 $1$.
一阶项每次只能从一列选择 $A$ 的列, 其余列仍取单位矩阵的列.
只有 $A$ 在该列对应对角位置的分量能够留下, 对所有列相加得到 $\sum_\mu A^\mu{}_\mu=\operatorname{tr}A$.
因此:
$$
\det(\mathbb{1}+\epsilon A)=1+\epsilon\operatorname{tr}A+O(\epsilon^2)
$$
代入 $A^\mu{}_\nu=\partial_\nu\xi^\mu$:
$$
\dd[4]{x'}=\left(1+\epsilon\partial_\mu\xi^\mu\right)\dd[4]{x}+O(\epsilon^2)
$$
这就是移动坐标后体积元的一阶变化.


现在从变换后的作用量开始, 不跳过积分区域的变化:
$$
S'[\phi']=\int_{\Omega'}\mathcal{L}(\phi'_a(x'),\partial'_\mu\phi'_a(x'),x')\dd[4]{x'}
$$
用 $x'=x+\epsilon\xi$ 把积分拉回原区域 $\Omega$:
$$
S'[\phi']=\int_\Omega\mathcal{L}(\phi'_a(x'),\partial'_\mu\phi'_a(x'),x')\det\left(\pdv{x'}{x}\right)\dd[4]{x}
$$
把拉格朗日密度的总变分定义为:
$$
\Delta\mathcal{L}=\left.\dv{}{\epsilon}\mathcal{L}(\phi'_a(x'),\partial'_\mu\phi'_a(x'),x')\right|_{\epsilon=0}
$$
于是作用量的一阶变化为:
$$
\delta S=\epsilon\int_\Omega\left(\Delta\mathcal{L}+\mathcal{L}\partial_\mu\xi^\mu\right)\dd[4]{x}
$$


也可以完全改写成固定点变化.
对任意标量函数 $F$, 总变分与定点变分满足 $\Delta F=\delta_0F/\epsilon+\xi^\mu\partial_\mu F$.
因此:
$$
\Delta\mathcal{L}+\mathcal{L}\partial_\mu\xi^\mu=\frac{1}{\epsilon}\delta_0\mathcal{L}+\xi^\mu\partial_\mu\mathcal{L}+\mathcal{L}\partial_\mu\xi^\mu
$$
最后两项由乘积法则合并:
$$
\xi^\mu\partial_\mu\mathcal{L}+\mathcal{L}\partial_\mu\xi^\mu=\partial_\mu(\mathcal{L}\xi^\mu)
$$
所以:
$$
\delta S=\int_\Omega\left[\delta_0\mathcal{L}+\epsilon\partial_\mu(\mathcal{L}\xi^\mu)\right]\dd[4]{x}
$$


固定点变分可以直接使用上一篇的局域恒等式:
$$
\delta_0\mathcal{L}=\mathcal{E}_a\delta_0\phi_a+\partial_\mu(\pi_a^\mu\delta_0\phi_a)
$$
代入 $\delta_0\phi_a=\epsilon Q_a$:
$$
\delta_0\mathcal{L}=\epsilon\mathcal{E}_aQ_a+\epsilon\partial_\mu(\pi_a^\mu Q_a)
$$
再代回作用量变化:
$$
\delta S=\epsilon\int_\Omega\left[\mathcal{E}_aQ_a+\partial_\mu(\pi_a^\mu Q_a+\mathcal{L}\xi^\mu)\right]\dd[4]{x}
$$
这就是允许坐标变化时的基本变分公式.
它的三个来源现在都很清楚: $\mathcal{E}_aQ_a$ 来自体内运动方程, $\pi_a^\mu Q_a$ 来自场导数的分部积分, $\mathcal{L}\xi^\mu$ 来自积分体积元和区域的移动.


假设变换使作用量只改变一个边界项:
$$
\delta S=\epsilon\int_\Omega\partial_\mu B^\mu\dd[4]{x}
$$
$B^\mu$ 是每单位参数的边界流.
与一般变分公式比较:
$$
\mathcal{E}_aQ_a+\partial_\mu(\pi_a^\mu Q_a+\mathcal{L}\xi^\mu-B^\mu)=0
$$
定义强版本的诺特流:
$$
J^\mu=\pi_a^\mu Q_a+\mathcal{L}\xi^\mu-B^\mu
$$
得到非在壳诺特恒等式:
$$
\partial_\mu J^\mu=-\mathcal{E}_aQ_a
$$
当 $\mathcal{E}_a=0$ 时:
$$
\partial_\mu J^\mu=0
$$


这就是诺特第一定理在一阶局域场论中的强形式.
它包含内部变换, 时空变换和准不变的边界项.
弱版本由 $\xi^\mu=0$ 与 $B^\mu=0$ 得到, 此时 $Q_a=\Delta_a=R_a$.


流一般不唯一.
若加入一个反对称的超势 $K^{[\nu\mu]}=-K^{[\mu\nu]}$, 定义:
$$
J'^\mu=J^\mu+\partial_\nu K^{[\nu\mu]}
$$
则其散度变化为:
$$
\partial_\mu J'^\mu-\partial_\mu J^\mu=\partial_\mu\partial_\nu K^{[\nu\mu]}
$$
两个偏导数的组合对 $\mu,\nu$ 对称, $K^{[\nu\mu]}$ 对这两个指标反对称, 所以收缩恒为零:
$$
\partial_\mu\partial_\nu K^{[\nu\mu]}=0
$$
因此改进项不改变局域守恒方程.
在边界衰减适当时, 它也不改变总荷, 但会改变流密度在局部的具体表达.


流还可加上与运动方程成正比的项, 这些项在壳消失.
所以诺特定理通常给出一个流的等价类, 而不是脱离所有约定后唯一的局域公式.
真正稳固的是对称性, 非在壳恒等式与在合适边界条件下定义的守恒荷之间的关系.


强版本中的荷不必只在 $t=\text{常数}$ 平面上定义.
给定一个空间型超曲面 $\Sigma$, 其有向面元记为 $\dd{\Sigma_\mu}=n_\mu\dd[3]{\Sigma}$.
与流对应的荷是:
$$
Q_\Sigma=\int_\Sigma J^\mu\dd{\Sigma_\mu}
$$
在普通等时平面上 $n_\mu=(1,0,0,0)$, 因而恢复 $Q=\int J^0\dd[3]{x}$.
协变写法表明荷是流穿过整个空间型超曲面的通量.


空间型超曲面可以理解为一张覆盖全空间的瞬时切片, 但它不必是某个特定惯性系中的 $t=\text{常数}$ 平面.
每条物理世界线若只穿过它一次, 这张切片就能对某个时刻的全系统作一次完整记账.
$J^\mu\dd{\Sigma_\mu}$ 取出垂直穿过该切片的流, 对整张切片积分便得到该次记账中的总荷.


取两个空间型超曲面 $\Sigma_1$ 与 $\Sigma_2$, 再用无穷远处的侧边界 $\mathcal{B}$ 把它们围成四维区域 $\Omega$.
四维斯托克斯定理给出:
$$
\int_\Omega\partial_\mu J^\mu\dd[4]{x}=\int_{\Sigma_2}J^\mu\dd{\Sigma_\mu}-\int_{\Sigma_1}J^\mu\dd{\Sigma_\mu}+\int_\mathcal{B}J^\mu\dd{\Sigma_\mu}
$$
第二个超曲面带未来方向法向, 第一个作为区域的下边界带相反定向, 所以两项符号相反.


若在壳有 $\partial_\mu J^\mu=0$, 且侧边界通量消失, 则:
$$
Q_{\Sigma_2}=Q_{\Sigma_1}
$$
因此守恒的协变含义是, 荷不依赖选择哪一个横截演化的空间型超曲面.
普通的 $\dv*{Q}{t}=0$ 只是选择一族等时超曲面后的表达.


如果侧边界通量不为零, 两个超曲面上的荷可以不同.
差值精确等于从侧边界流出的总通量.
这不是守恒律失败, 而是被研究的子系统与外界交换了相应的量.
只有把边界自由度或外部区域一并包括, 才能讨论完整闭合系统的总荷.


对时空变换, $Q_\Sigma$ 还带有变换参数.
通常先把任意常数参数提出, 把与每个独立参数相乘的积分定义为相应生成元.
例如平移流为 $J^\mu=-b^\nu T^\mu{}_\nu$, 所以四个平移生成元就是四动量分量.
洛伦兹流与反对称参数 $\omega_{\rho\sigma}$ 配对, 所以六个独立参数给出六个角动量或洛伦兹推动生成元.


这也说明流与荷的指标数目为何可能不同.
$T^\mu{}_\nu$ 的第一个指标 $\mu$ 是流指标, 表示流过哪个方向.
第二个指标 $\nu$ 标记是哪一个平移生成元.
$M^{\mu\rho\sigma}$ 的 $\mu$ 仍是流指标, 而反对称的一对 $\rho,\sigma$ 标记洛伦兹生成元.
把这些角色分开, 就不会把所有指标都误认为同一种向量分量.


强诺特恒等式还可以反向用作计算检查.
先由候选变换求出 $\xi^\mu$, $\Delta_a$ 和 $Q_a$.
再计算候选 $J^\mu=\pi_a^\mu Q_a+\mathcal{L}\xi^\mu-B^\mu$ 的散度.
若代数正确, 非在壳应精确得到 $-\mathcal{E}_aQ_a$.
若只在使用运动方程后才能勉强相消, 就可能漏掉了雅可比项, 边界项或内禀场变分.


在计算中最常见的错误之一是把 $\Delta_a$ 直接当成定点变分.
对标量平移, $\Delta=0$, 但定点变分明明不为零, 而是 $-\epsilon b^\nu\partial_\nu\phi$.
若错误地取 $Q=0$, 会得出平移没有流的荒谬结论.
特征量 $Q=\Delta-\xi^\nu\partial_\nu\phi$ 正是为避免这个混淆而定义.


另一个常见错误是只变 $\mathcal{L}$ 而不变 $\dd[4]{x}$.
当 $\partial_\mu\xi^\mu\neq0$ 时, 雅可比贡献为 $\mathcal{L}\partial_\mu\xi^\mu$.
它与 $\xi^\mu\partial_\mu\mathcal{L}$ 合并成 $\partial_\mu(\mathcal{L}\xi^\mu)$, 最终产生流中的 $\mathcal{L}\xi^\mu$.
漏掉它会直接导致能动量张量缺少 $-\delta^\mu_\nu\mathcal{L}$ 一项.


第三个常见错误是把准不变误写成严格不变.
若作用量变化为边界项, $B^\mu$ 必须保留到流中.
边界项在体内方程中可能消失, 却会改变正则流的代表元.
因此推导时应先写一般 $B^\mu$, 最后在确实为零时再删去.

---
## 时空平移, 能动量张量与洛伦兹变换


考虑常数无穷小时空平移:
$$
x'^\mu=x^\mu+\epsilon b^\mu
$$
$b^\mu$ 是固定四维向量, 所以 $\xi^\mu=b^\mu$ 且 $\partial_\nu\xi^\mu=0$.
使用 $b^\mu$ 而不用 $a^\mu$, 是为了避免与场分量标签 $a$ 混淆.


对标量场, 随点输运的场值不发生内部变化:
$$
\phi'_a(x')=\phi_a(x)
$$
所以 $\Delta_a=0$.
特征量为:
$$
Q_a=-b^\nu\partial_\nu\phi_a
$$
这表示在固定坐标点 $x$ 比较时, 新场值来自原场在反方向移动的一点.


若 $\mathcal{L}$ 不显含 $x$, 平移后它作为标量密度保持不变, 可取 $B^\mu=0$.
强诺特流为:
$$
J^\mu=\pi_a^\mu(-b^\nu\partial_\nu\phi_a)+\mathcal{L}b^\mu
$$
把常数 $b^\nu$ 提出并用 $b^\mu=\delta^\mu_\nu b^\nu$:
$$
J^\mu=-b^\nu\left(\pi_a^\mu\partial_\nu\phi_a-\delta^\mu_\nu\mathcal{L}\right)
$$


定义正则能动量张量:
$$
T^\mu{}_\nu=\pi_a^\mu\partial_\nu\phi_a-\delta^\mu_\nu\mathcal{L}
$$
于是 $J^\mu=-b^\nu T^\mu{}_\nu$.
由于四个常数 $b^\nu$ 可以独立选择, 四个平移方向分别对应 $T^\mu{}_\nu$ 的四列.
时间平移对应能量, 三个空间平移对应三分量线动量.


两个指标承担不同职责.
第二个指标 $\nu$ 标记我们讨论哪一种平移荷: $\nu=0$ 对应能量, $\nu=i$ 对应第 $i$ 个线动量.
第一个指标 $\mu$ 是流指标: $\mu=0$ 给出该荷的空间密度, $\mu=i$ 给出该荷沿第 $i$ 个空间方向的通量.
所以能动量张量不是把能量和动量随意排成矩阵, 而是把四种平移荷各自的密度与通量统一组织起来.


从强诺特恒等式直接推导其非在壳散度:
$$
\partial_\mu J^\mu=-\mathcal{E}_aQ_a=\mathcal{E}_ab^\nu\partial_\nu\phi_a
$$
另一方面 $J^\mu=-b^\nu T^\mu{}_\nu$, 且 $b^\nu$ 为常数, 因而:
$$
-b^\nu\partial_\mu T^\mu{}_\nu=b^\nu\mathcal{E}_a\partial_\nu\phi_a
$$
对任意 $b^\nu$ 比较系数:
$$
\partial_\mu T^\mu{}_\nu=-\mathcal{E}_a\partial_\nu\phi_a
$$
在壳得到:
$$
\partial_\mu T^\mu{}_\nu=0
$$


也可以从定义直接验证非在壳恒等式.
对 $T^\mu{}_\nu$ 求散度:
$$
\partial_\mu T^\mu{}_\nu=\partial_\mu(\pi_a^\mu\partial_\nu\phi_a)-\partial_\nu\mathcal{L}
$$
展开第一项:
$$
\partial_\mu T^\mu{}_\nu=(\partial_\mu\pi_a^\mu)\partial_\nu\phi_a+\pi_a^\mu\partial_\mu\partial_\nu\phi_a-\partial_\nu\mathcal{L}
$$
若 $\mathcal{L}$ 不显含 $x$, 链式法则给出:
$$
\partial_\nu\mathcal{L}=\pdv{\mathcal{L}}{\phi_a}\partial_\nu\phi_a+\pdv{\mathcal{L}}{(\partial_\mu\phi_a)}\partial_\nu\partial_\mu\phi_a
$$
用 $\pi_a^\mu=\pdv*{\mathcal{L}}{(\partial_\mu\phi_a)}$ 并交换普通偏导数次序, 含二阶导数的两项相消:
$$
\partial_\mu T^\mu{}_\nu=\left(\partial_\mu\pi_a^\mu-\pdv{\mathcal{L}}{\phi_a}\right)\partial_\nu\phi_a
$$
括号正是 $-\mathcal{E}_a$, 所以再次得到:
$$
\partial_\mu T^\mu{}_\nu=-\mathcal{E}_a\partial_\nu\phi_a
$$


若 $\mathcal{L}$ 显含坐标, 链式法则中还会有显式偏导数 $\pdv*{\mathcal{L}}{x^\nu}$.
此时结果变为:
$$
\partial_\mu T^\mu{}_\nu=-\mathcal{E}_a\partial_\nu\phi_a-\pdv{\mathcal{L}}{x^\nu}
$$
即使在壳, 显含 $x^\nu$ 也会成为能量动量不守恒的源.
这正对应外部背景破坏了相应方向的平移对称性.


升高第二个指标定义 $T^{\mu\nu}=T^\mu{}_\rho\eta^{\rho\nu}$.
对实标量场 $\pi^\mu=\partial^\mu\phi$, 因而:
$$
T^{\mu\nu}=\partial^\mu\phi\partial^\nu\phi-\eta^{\mu\nu}\mathcal{L}
$$
这个张量已经对称, 即 $T^{\mu\nu}=T^{\nu\mu}$.


用全上指标表示时, 各分量的物理含义可以逐项读出.
$T^{00}$ 是能量密度, $T^{i0}$ 是能量沿第 $i$ 个方向的通量, $T^{0j}$ 是第 $j$ 个动量的密度, $T^{ij}$ 是第 $j$ 个动量穿过法向为第 $i$ 个方向的单位面积的通量.
空间块 $T^{ij}$ 也就是应力的场论表达.
若张量对称, $T^{i0}=T^{0i}$ 把能流与动量密度联系起来, 这是洛伦兹对称性的结果之一.


能量密度是 $T^{00}$.
由于 $\partial^0\phi=\partial_t\phi$ 且 $\eta^{00}=1$:
$$
T^{00}=(\partial_t\phi)^2-\mathcal{L}
$$
代入 $\mathcal{L}=(\partial_t\phi)^2/2-\bm{\nabla}\phi\cdot\bm{\nabla}\phi/2-V$:
$$
T^{00}=\frac{1}{2}(\partial_t\phi)^2+\frac{1}{2}\bm{\nabla}\phi\cdot\bm{\nabla}\phi+V(\phi)
$$
它正好等于上一篇得到的哈密顿密度.
所以能量 $P^0=\int T^{00}\dd[3]{x}$ 与哈密顿量相同.


物理线动量密度由 $T^{0i}$ 给出:
$$
T^{0i}=\partial^0\phi\partial^i\phi
$$
在号差 $(+,-,-,-)$ 下, $\partial^i=-\partial_i$, 所以:
$$
T^{0i}=-(\partial_t\phi)(\partial_i\phi)
$$
这与共轭动量 $\pi=\partial_t\phi$ 不是同一种对象.
$\pi$ 是相对于场坐标的正则共轭动量密度, 而 $T^{0i}$ 是空间平移产生的第 $i$ 个物理动量密度.


四动量定义为固定时间超曲面上的积分:
$$
P^\nu=\int_\Sigma T^{0\nu}\dd[3]{x}
$$
由 $\partial_\mu T^{\mu\nu}=0$:
$$
\dv{P^\nu}{t}=-\int_{\partial\Sigma}T^{i\nu}n_i\dd[2]{\Sigma}
$$
右边是能量或动量穿过空间边界的通量.
在无穷远衰减或无通量边界条件下, 四个 $P^\nu$ 都守恒.


正则能动量张量对一般具有自旋的场未必对称, 甚至未必具有最适合耦合引力的形式.
可以加入前面讨论的超势改进项, 得到具有同一守恒四动量的改进张量.
贝尔芬特改进项会把自旋流的贡献重新组织进一个对称张量.
本文不展开其一般公式, 但必须知道“不对称正则张量”不意味着洛伦兹对称性失效.


下面考虑无穷小洛伦兹变换:
$$
x'^\mu=x^\mu+\epsilon\omega^\mu{}_\nu x^\nu
$$
因此 $\xi^\mu=\omega^\mu{}_\nu x^\nu$.
洛伦兹变换保持 $x_\mu x^\mu$ 不变.
对这一条件作一阶变分:
$$
0=\delta(x_\mu x^\mu)=2\epsilon x_\mu\omega^\mu{}_\nu x^\nu
$$
因为 $x^\mu x^\nu$ 对两指标对称, 要使其对任意 $x$ 都为零, 降低第一个指标后的参数必须反对称:
$$
\omega_{\mu\nu}=-\omega_{\nu\mu}
$$
四维反对称矩阵有 $4\times3/2=6$ 个独立分量, 对应三个空间转动与三个洛伦兹推动.


对标量场, 输运变分 $\Delta=0$, 所以:
$$
Q=-\omega^\rho{}_\sigma x^\sigma\partial_\rho\phi
$$
洛伦兹不变理论的诺特流可由能动量张量组织成角动量流:
$$
M^{\mu\rho\sigma}=x^\rho T^{\mu\sigma}-x^\sigma T^{\mu\rho}
$$
它对 $\rho,\sigma$ 反对称, 因而正好与六个 $\omega_{\rho\sigma}$ 配对.


直接计算其散度:
$$
\partial_\mu M^{\mu\rho\sigma}=\partial_\mu(x^\rho T^{\mu\sigma})-\partial_\mu(x^\sigma T^{\mu\rho})
$$
用 $\partial_\mu x^\rho=\delta_\mu^\rho$ 展开:
$$
\partial_\mu M^{\mu\rho\sigma}=T^{\rho\sigma}+x^\rho\partial_\mu T^{\mu\sigma}-T^{\sigma\rho}-x^\sigma\partial_\mu T^{\mu\rho}
$$
若能动量守恒, 中间两个含散度的项为零:
$$
\partial_\mu M^{\mu\rho\sigma}=T^{\rho\sigma}-T^{\sigma\rho}
$$
如果 $T^{\rho\sigma}$ 对称, 就得到:
$$
\partial_\mu M^{\mu\rho\sigma}=0
$$
实标量场的正则张量已经对称, 所以这个轨道流就是完整洛伦兹流.


对向量场或旋量场, 洛伦兹变换不仅移动时空点, 还会在纤维内部旋转分量.
这使 $\Delta_a$ 出现与表示生成元有关的项.
对应流除了轨道部分 $x^\rho T^{\mu\sigma}-x^\sigma T^{\mu\rho}$, 还含自旋流 $S^{\mu\rho\sigma}$:
$$
J^{\mu\rho\sigma}=x^\rho T^{\mu\sigma}-x^\sigma T^{\mu\rho}+S^{\mu\rho\sigma}
$$
这里的自旋流不是额外假设, 它直接来自场在纤维中按洛伦兹表示发生的内禀变分.


轨道部分与自旋部分分别对应两种几何变化.
轨道部分来自场分布在时空中的位置被转动或推动, 所以显式含有坐标 $x^\rho$.
自旋部分来自每个点的纤维分量自身按洛伦兹表示旋转, 所以即使把坐标原点选在该点也仍可存在.
二者相加才是洛伦兹变换的完整生成流.


若正则张量不对称, 轨道流的散度不会单独为零.
总洛伦兹流的守恒要求自旋流的散度补偿反对称部分:
$$
\partial_\mu S^{\mu\rho\sigma}=T^{\sigma\rho}-T^{\rho\sigma}
$$
贝尔芬特方法正是利用 $S^{\mu\rho\sigma}$ 构造改进项, 把轨道与自旋的局部分配重新组合成对称能动量张量.
守恒的总角动量不因这种重新分配而改变.

---
## 局域参数与诺特第二定理


诺特第一定理处理有限个常数参数的连续对称性.
如果参数本身是任意时空函数, 每个时空点都可独立选择参数值, 对称性就包含连续无穷多个方向.
这类局域对称性导致的核心结论通常不是一个新的独立守恒荷, 而是欧拉–拉格朗日方程之间的微分恒等式.
这就是诺特第二定理的内容.


先看为什么不能把全局参数机械地换成函数.
对自由复标量场作局域相位变化:
$$
\delta\phi=-\mathrm{i}\alpha(x)\phi,\quad\delta\phi^*=\mathrm{i}\alpha(x)\phi^*
$$
由于 $\alpha$ 依赖时空, 场导数的变化为:
$$
\delta(\partial_\mu\phi)=\partial_\mu(\delta\phi)=-\mathrm{i}(\partial_\mu\alpha)\phi-\mathrm{i}\alpha\partial_\mu\phi
$$
以及:
$$
\delta(\partial_\mu\phi^*)=\mathrm{i}(\partial_\mu\alpha)\phi^*+\mathrm{i}\alpha\partial_\mu\phi^*
$$


质量项的变化仍为零:
$$
\delta(\phi^*\phi)=(\delta\phi^*)\phi+\phi^*\delta\phi=\mathrm{i}\alpha\phi^*\phi-\mathrm{i}\alpha\phi^*\phi=0
$$
动能项的变化是:
$$
\delta(\partial_\mu\phi^*\partial^\mu\phi)=\delta(\partial_\mu\phi^*)\partial^\mu\phi+\partial_\mu\phi^*\delta(\partial^\mu\phi)
$$
代入导数变化:
$$
\delta\mathcal{L}=\left[\mathrm{i}(\partial_\mu\alpha)\phi^*+\mathrm{i}\alpha\partial_\mu\phi^*\right]\partial^\mu\phi+\partial_\mu\phi^*\left[-\mathrm{i}(\partial^\mu\alpha)\phi-\mathrm{i}\alpha\partial^\mu\phi\right]
$$
两个与常数参数 $\alpha$ 成正比的项相消, 剩下:
$$
\delta\mathcal{L}=\mathrm{i}(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)\partial_\mu\alpha
$$
括号恰好是弱版本得到的流:
$$
\delta\mathcal{L}=j^\mu\partial_\mu\alpha
$$


当 $\alpha$ 是常数时, $\partial_\mu\alpha=0$, 所以恢复全局 $U(1)$ 不变性.
当 $\alpha(x)$ 任意时, 额外项一般不为零.
因此自由复标量作用量只有全局 $U(1)$ 对称性, 没有相同形式的局域 $U(1)$ 对称性.
若要建立局域相位对称性, 必须引入具有适当变换律的联络, 并把普通导数替换为协变导数.
这一步属于规范场论, 本文只指出它为什么在数学上必需.


物理上, 不同位置各自选择相位基准以后, 普通差分会把场真的变化与相位尺本身转动混在一起.
联络记录相邻位置的相位基准怎样对准, 协变导数再减去基准变化造成的假变化.
这正是第一篇中“不同纤维不能直接相减”的局域对称性版本.


这个“把常数参数暂时局域化”的计算还有一个用途.
$\partial_\mu\alpha$ 的系数直接读出全局对称性的诺特流.
因为常数部分由于全局对称性相消, 参数梯度精确记录不同邻点采用不同群变换时产生的不匹配.
流可以理解为系统对这种局域不匹配的一阶响应.


现在推导诺特第二定理的一个常用一阶形式.
设作用量在以下定点局域变换下不变:
$$
\delta_0\phi_a=R_{aI}\epsilon^I(x)+R_{aI}^\mu\partial_\mu\epsilon^I(x)
$$
$I$ 给不同局域对称方向编号.
参数函数 $\epsilon^I(x)$ 任意, 并可取为紧支集函数, 从而所有边界项都消失.
$R_{aI}$ 与 $R_{aI}^\mu$ 可依赖场及其局域导数.


任意场变分的一般作用量公式是:
$$
\delta S=\int_\Omega\mathcal{E}_a\delta_0\phi_a\dd[4]{x}+\int_{\partial\Omega}\pi_a^\mu\delta_0\phi_a\dd{\Sigma_\mu}
$$
由于参数具有紧支集, 边界项为零.
局域对称性要求对任意 $\epsilon^I(x)$ 都有 $\delta S=0$, 所以:
$$
0=\int_\Omega\mathcal{E}_a\left(R_{aI}\epsilon^I+R_{aI}^\mu\partial_\mu\epsilon^I\right)\dd[4]{x}
$$


第二项含参数的导数, 对它分部积分:
$$
\mathcal{E}_aR_{aI}^\mu\partial_\mu\epsilon^I=\partial_\mu(\mathcal{E}_aR_{aI}^\mu\epsilon^I)-\partial_\mu(\mathcal{E}_aR_{aI}^\mu)\epsilon^I
$$
第一项积分后是边界项, 因紧支集而消失.
于是:
$$
0=\int_\Omega\left[\mathcal{E}_aR_{aI}-\partial_\mu(\mathcal{E}_aR_{aI}^\mu)\right]\epsilon^I\dd[4]{x}
$$
参数函数 $\epsilon^I(x)$ 在体内任意.
由变分法基本引理, 每个 $I$ 都满足非在壳恒等式:
$$
\mathcal{E}_aR_{aI}-\partial_\mu(\mathcal{E}_aR_{aI}^\mu)=0
$$


注意这里没有使用 $\mathcal{E}_a=0$.
这个关系在任意场构型上成立, 它说明不同欧拉–拉格朗日表达式之间存在微分依赖.
因此局域对称性意味着运动方程并非全部独立.
这正是诺特第二定理与第一定理最重要的区别.


可以用有限维线性代数理解方程不独立.
若若干方程的左边组成向量 $F_A(q)$, 存在非零系数 $c^A$ 使 $c^AF_A(q)=0$ 对任意 $q$ 都成立, 那么这些方程之间有恒等关系, 不能提供同样多份独立限制.
诺特第二定理把常数系数推广成微分算符, 例如 $R_{aI}$ 与 $\partial_\mu R_{aI}^\mu$ 的组合.


在物理上, 每个任意函数参数都给出一个沿规范轨道的方向.
沿这个方向改变描述不会改变物理状态, 所以作用量不可能用一条独立运动方程去固定这个方向.
缺失的独立方程在哈密顿量语言中表现为约束, 在拉格朗日量语言中表现为欧拉–拉格朗日表达式之间的微分恒等式.


若变换还含参数的二阶或更高阶导数:
$$
\delta_0\phi_a=R_{aI}\epsilon^I+R_{aI}^\mu\partial_\mu\epsilon^I+R_{aI}^{\mu\nu}\partial_\mu\partial_\nu\epsilon^I+\cdots
$$
就对每一项反复分部积分, 把所有导数从 $\epsilon^I$ 移到 $\mathcal{E}_aR$ 上.
每分部积分一次会产生一个负号.
最终仍因任意 $\epsilon^I$ 得到欧拉–拉格朗日表达式及其导数之间的恒等关系.


局域对称性通常表示描述中存在冗余.
同一个物理状态可由一整条局域群轨道上的不同场构型表示.
因此沿纯规范方向改变场不产生新的物理状态.
运动方程之间的诺特恒等式正是这种冗余在拉格朗日量语言中的反映.


冗余并不意味着局域对称性“没有内容”.
它限制允许的耦合形式, 使某些运动方程相互依赖, 并在哈密顿量形式中产生约束.
但不能把每个任意函数参数都简单解释成一个独立的普通守恒荷.
第一定理的全局荷与第二定理的微分恒等式是不同层次的结论.


全局子群仍可能具有物理守恒荷.
例如一个局域规范变换族通常包含参数为常数的子族.
不过总荷是否非零, 是否由边界数据决定, 以及哪些变换应视为纯规范, 取决于允许参数在边界的行为.
在无穷远不消失的变换可能作用于物理边界数据, 不能自动与紧支集的纯规范变换等同.


这再次说明边界条件是诺特理论的一部分.
分部积分时被丢掉的项, 在有边界, 拓扑非平凡或无穷远衰减不足的问题中可能携带真实物理信息.
“总散度不重要”只在已说明积分区域与边界行为以后才成立.


现在可以把两版诺特定理的逻辑作最后归纳.
对有限个常数参数, 无穷小对称方向 $Q_a$ 给出非在壳恒等式 $\partial_\mu J^\mu=-\mathcal{E}_aQ_a$, 在壳后成为守恒流.
对任意函数参数, 参数及其各阶导数可以在每一点独立变化, 分部积分后迫使欧拉–拉格朗日表达式之间满足非在壳微分恒等式.
前者主要产生守恒量, 后者主要揭示描述冗余和运动方程的依赖关系.


弱版本适合固定坐标下的全局内部对称性.
强版本把坐标移动, 场的纤维变换, 雅可比和边界准不变统一起来, 因而能够处理平移与洛伦兹对称性.
诺特第二定理进一步把常数参数提升为任意函数, 解释局域对称性为何改变方程本身的独立性结构.
这三层并不是三个互不相关的公式, 而是同一个局域变分恒等式在不同类型对称参数下的结果.
