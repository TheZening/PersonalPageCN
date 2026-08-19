---
title: "光子场量子化（一）：四偏振展开与模对易关系"
date: 2026-08-18
weight: 32
---

麦克斯韦作用量的正则结构含有约束，不能直接对四个势分量施加普通正则对易关系。
为了保持洛伦兹协变性，本篇选择另一条道路：先加入费曼规范固定项，使四维势的二次动能算符可逆，再在扩大后的状态空间中量子化全部四个分量。

这样得到的四偏振模展开非常适合相对论性计算，但代价也会立刻出现。
偏振空间带有闵可夫斯基度规，时间型模的对易关系因而具有反常负号；这个负号正是下一篇不定内积结构的来源。


---
## 规范固定后的自由场与偏振标架


从费曼规范下的拉格朗日密度开始：

$$
\mathcal{L}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}-\frac{1}{2}(\partial_\mu A^\mu)^2
$$

它与下面的简化形式只相差总散度：

$$
\mathcal{L}\simeq-\frac{1}{2}\partial_\mu A_\nu\partial^\mu A^\nu
$$

上一组已经证明，总散度在边界条件适当时不改变局域运动方程。
使用简化形式作变分可得：

$$
\delta\mathcal{L}=-\partial_\mu\delta A_\nu\partial^\mu A^\nu
$$

对导数作分部积分：

$$
\delta\mathcal{L}=\delta A_\nu\Box A^\nu-\partial_\mu(\delta A_\nu\partial^\mu A^\nu)
$$

因此自由场方程为：

$$
\Box A^\mu=0
$$

这里的四个分量都满足无质量波动方程，但不能据此认为它们都是物理光子自由度。
加入规范固定项的目的正是暂时扩大变量空间；物理态条件要在量子化以后再施加。

对每个非零三维动量 $\bm{k}$，选择四个偏振向量。
时间型偏振取为：

$$
\varepsilon_0^\mu(\bm{k})=(1,0,0,0)
$$

纵向偏振取为：

$$
\varepsilon_3^\mu(\bm{k})=(0,\widehat{\bm{k}})
$$

另外选择两个互相正交并垂直于 $\widehat{\bm{k}}$ 的单位三维向量 $\bm{e}_1,\bm{e}_2$，定义横向偏振：

$$
\varepsilon_1^\mu(\bm{k})=(0,\bm{e}_1)
$$

以及：

$$
\varepsilon_2^\mu(\bm{k})=(0,\bm{e}_2)
$$

这里：

$$
\bm{e}_a\cdot\bm{e}_b=\delta_{ab}
$$

并且：

$$
\bm{e}_a\cdot\widehat{\bm{k}}=0
$$

下标 $\lambda=0,1,2,3$ 给不同偏振向量编号，洛伦兹指标 $\mu=0,1,2,3$ 给同一个四维向量的分量编号。
这两个指标属于不同的线性空间，不能因为数值范围相同就混为一谈。

定义偏振空间的号差矩阵：

$$
\eta_{\lambda\lambda'}=\operatorname{diag}(1,-1,-1,-1)_{\lambda\lambda'}
$$

四个偏振向量满足伪正交关系：

$$
\varepsilon_\lambda\cdot\varepsilon_{\lambda'}^*=\eta_{\lambda\lambda'}
$$

“伪正交”表示正交关系使用的不是正定欧几里得内积，而是闵可夫斯基双线性型。
时间型基向量的平方为 $+1$，三个空间型基向量的平方为 $-1$。

它们还满足完备关系：

$$
\sum_{\lambda=0}^3\eta_{\lambda\lambda}\varepsilon_\lambda^\mu(\bm{k})\varepsilon_\lambda^{\nu*}(\bm{k})=\eta^{\mu\nu}
$$

可以在 $\bm{k}$ 沿 $x^3$ 轴的标架中直接验证。
此时四个偏振向量就是四个坐标轴单位向量，左边依次给出 $1,-1,-1,-1$，正好组成 $\eta^{\mu\nu}$。
因为等式两边都是二阶张量，这个关系在洛伦兹变换后的任意标架中仍成立。

这里要区分“关系协变”和“基底写法不变”。
$\varepsilon_0=(1,0,0,0)$ 与 $\varepsilon_3=(0,\widehat{\bm{k}})$ 是某个观察者标架中的方便选择；作洛伦兹变换后，四个基向量的具体分量通常改变，但伪正交关系和完备关系保持成立。
因此时间型、纵向与横向的逐项分类依赖所选标架，而由完整偏振和组成的四维张量不依赖这套中间坐标。

对每个动量 $\bm{k}$，四个 $\varepsilon_\lambda(\bm{k})$ 可以看成辅助四维偏振纤维中的一组伪正交标架。
偏振标签 $\lambda$ 选择这组标架中的第几根基向量，洛伦兹指标 $\mu$ 则给所选向量在时空矢量纤维中的分量。
协变量子化暂时使用整个四维辅助纤维以保持公式协变，而真正的二维物理偏振纤维要等弱条件和零范数商空间完成后才得到。
所以“四偏振完备关系”是扩大纤维中的恒等分解，不是四种物理光子的计数公式。


---
## 厄米四维势的正频率与负频率展开


电磁势在量子理论中成为算符值分布，并满足厄米条件：

$$
A^{\mu\dagger}(x)=A^\mu(x)
$$

这表示电磁场是中性实场，光子与反光子不是两种不同粒子。
因此正频率部分中的湮灭算符与负频率部分中的产生算符互为厄米共轭，不需要像复标量场那样再引入一套独立的反粒子算符。

把场拆成两部分：

$$
A^\mu(x)=A^{\mu(+)}(x)+A^{\mu(-)}(x)
$$

正频率部分定义为：

$$
A^{\mu(+)}(x)=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^\mu(\bm{k})\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

负频率部分为：

$$
A^{\mu(-)}(x)=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^{\mu*}(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})\mathrm{e}^{+\mathrm{i}k\cdot x}
$$

其中四维动量满足：

$$
k^\mu=(\omega_{\bm{k}},\bm{k})
$$

以及：

$$
\omega_{\bm{k}}=|\bm{k}|
$$

每个平面波都满足 $k^2=0$，所以自动满足 $\Box A^\mu=0$。
但是这里没有要求每个偏振都满足 $k\cdot\varepsilon_\lambda=0$。
横向偏振满足这一条件，时间型和纵向偏振则作为扩大状态空间中的辅助模保留下来。

场的厄米条件可以逐项验证。
正频率部分的厄米共轭为：

$$
[A^{\mu(+)}(x)]^\dagger=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^{\mu*}(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})\mathrm{e}^{+\mathrm{i}k\cdot x}
$$

所以：

$$
[A^{\mu(+)}(x)]^\dagger=A^{\mu(-)}(x)
$$

这里的上标 $(+)$ 和 $(-)$ 指频率符号，不是电荷正负，也不是产生与湮灭算符的符号。
按照当前约定，正频率部分含湮灭算符，负频率部分含产生算符。

四维势是算符值分布，意味着 $A^\mu(x)$ 严格说不能在一个孤立点上当作普通有界算符使用。
真正良好定义的对象是把它与光滑测试函数积分得到的涂抹场。
平面波展开和等时对易关系都应理解为分布意义下的等式。


---
## 从正则场对易关系推出模代数


把 $A_\nu$ 作为正则坐标，其共轭动量为：

$$
\Pi^\nu=\frac{\partial\mathcal{L}}{\partial(\partial_0A_\nu)}
$$

由简化拉格朗日密度得到：

$$
\Pi^\nu=-\partial^0A^\nu=-\dot A^\nu
$$

与未经规范固定的麦克斯韦理论不同，现在 $\Pi^0=-\dot A^0$ 不再恒为零。
规范固定项补上了时间分量的二次速度项，使勒让德变换暂时变得非退化。

施加等时正则对易关系：

$$
[A_\mu(t,\bm{x}),\Pi^\nu(t,\bm{y})]=\mathrm{i}\delta_\mu^\nu\delta^{(3)}(\bm{x}-\bm{y})
$$

其余两类等时对易关系为：

$$
[A_\mu(t,\bm{x}),A_\nu(t,\bm{y})]=0
$$

以及：

$$
[\Pi^\mu(t,\bm{x}),\Pi^\nu(t,\bm{y})]=0
$$

升高第一个场指标后：

$$
[A^\mu(t,\bm{x}),\Pi^\nu(t,\bm{y})]=\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{x}-\bm{y})
$$

再代入 $\Pi^\nu=-\dot A^\nu$：

$$
[A^\mu(t,\bm{x}),\dot A^\nu(t,\bm{y})]=-\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{x}-\bm{y})
$$

现在从模展开求能够实现这条关系的模算符代数。
先定义偏振号差：

$$
s_\lambda=-\eta_{\lambda\lambda}
$$

因此：

$$
s_0=-1
$$

而三个空间型偏振满足：

$$
s_1=s_2=s_3=1
$$

模对易关系取为：

$$
[\hat{a}_\lambda(\bm{k}),\hat{a}_{\lambda'}^\dagger(\bm{q})]=s_\lambda(2\pi)^3\delta_{\lambda\lambda'}\delta^{(3)}(\bm{k}-\bm{q})
$$

所有两个湮灭算符或两个产生算符之间的对易子为零：

$$
[\hat{a}_\lambda(\bm{k}),\hat{a}_{\lambda'}(\bm{q})]=0
$$

以及：

$$
[\hat{a}_\lambda^\dagger(\bm{k}),\hat{a}_{\lambda'}^\dagger(\bm{q})]=0
$$

下面把第一条模对易关系代回场展开验证其号差。
等时条件下，只有正负频率交叉项留下：

$$
[A^\mu(t,\bm{x}),\dot A^\nu(t,\bm{y})]=I_1^{\mu\nu}+I_2^{\mu\nu}
$$

第一项来自 $[\hat{a},\hat{a}^\dagger]$：

$$
I_1^{\mu\nu}=\frac{\mathrm{i}}{2}\sum_\lambda s_\lambda\int\frac{\mathrm{d}^3k}{(2\pi)^3}\varepsilon_\lambda^\mu(\bm{k})\varepsilon_\lambda^{\nu*}(\bm{k})\mathrm{e}^{+\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}
$$

第二项来自 $[\hat{a}^\dagger,\hat{a}]$：

$$
I_2^{\mu\nu}=\frac{\mathrm{i}}{2}\sum_\lambda s_\lambda\int\frac{\mathrm{d}^3k}{(2\pi)^3}\varepsilon_\lambda^{\mu*}(\bm{k})\varepsilon_\lambda^\nu(\bm{k})\mathrm{e}^{-\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}
$$

偏振完备关系及其复共轭分别给出：

$$
\sum_\lambda s_\lambda\varepsilon_\lambda^\mu\varepsilon_\lambda^{\nu*}=-\eta^{\mu\nu}
$$

以及：

$$
\sum_\lambda s_\lambda\varepsilon_\lambda^{\mu*}\varepsilon_\lambda^\nu=-\eta^{\mu\nu}
$$

所以两个积分分别给出同一个狄拉克分布的一半。
再使用傅里叶表示：

$$
\delta^{(3)}(\bm{x}-\bm{y})=\int\frac{\mathrm{d}^3k}{(2\pi)^3}\mathrm{e}^{+\mathrm{i}\bm{k}\cdot(\bm{x}-\bm{y})}
$$

最终得到：

$$
[A^\mu(t,\bm{x}),\dot A^\nu(t,\bm{y})]=-\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{x}-\bm{y})
$$

这与正则关系完全一致。
因此时间型模的负号不是人为插入的修补，而是四维势的正则对易关系与闵可夫斯基偏振完备性共同强制得到的。
