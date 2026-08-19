---
title: "光子传播子（三）：一般协变规范、算符求逆与守恒流"
date: 2026-08-19
weight: 38
---

费曼规范把自由光子传播子化成 $-\mathrm{i}\eta^{\mu\nu}/(k^2+\mathrm{i}\epsilon)$，但这不是唯一可能的规范选择。
要理解哪些部分是物理内容、哪些部分只是计算坐标，需要从未固定规范的麦克斯韦动能算符开始，先看它为什么不可逆，再加入一般协变规范固定项求逆。

本篇还会证明规范参数只乘在纵向投影上。
当传播子连接守恒流时，纵向部分自动消失；这既解释不同规范为何给出相同可观测结果，也解释为什么协变分子 $-\eta^{\mu\nu}$ 可以替代显式的两偏振求和。


---
## 未固定规范的动能算符为什么没有逆


自由麦克斯韦拉格朗日密度为：

$$
\mathcal{L}_0=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}
$$

展开场强：

$$
F_{\mu\nu}F^{\mu\nu}=2[\partial_\mu A_\nu\partial^\mu A^\nu-\partial_\mu A_\nu\partial^\nu A^\mu]
$$

所以：

$$
\mathcal{L}_0=-\frac{1}{2}\partial_\mu A_\nu\partial^\mu A^\nu+\frac{1}{2}\partial_\mu A_\nu\partial^\nu A^\mu
$$

对作用量分部积分并丢掉边界项：

$$
S_0\simeq\frac{1}{2}\int\mathrm{d}^4x A_\mu[\eta^{\mu\nu}\Box-\partial^\mu\partial^\nu]A_\nu
$$

因此未固定规范的二次动能算符为：

$$
K_0^{\mu\nu}=\eta^{\mu\nu}\Box-\partial^\mu\partial^\nu
$$

在动量空间中，$\partial^\mu\mapsto-\mathrm{i}k^\mu$，所以：

$$
K_0^{\mu\nu}(k)=-k^2\eta^{\mu\nu}+k^\mu k^\nu
$$

让它作用在 $k_\nu$ 上：

$$
K_0^{\mu\nu}(k)k_\nu=-k^2k^\mu+k^\mu k^2=0
$$

所以 $k^\mu$ 是这个 $4\times4$ 矩阵的零本征向量。
只要矩阵存在非零零本征向量，它的行列式就为零，因而不存在普通矩阵逆。

这个零方向正是纯规范方向。
动量空间规范变换为：

$$
\widetilde A^\mu(k)\mapsto\widetilde A^\mu(k)+c(k)k^\mu
$$

沿 $k^\mu$ 改变势不改变场强，所以作用量在这一方向没有二次代价。
从高斯积分角度看，沿每条规范轨道重复积分会得到无限的规范体积；从线性代数角度看，同一事实表现为动能矩阵奇异。

在位置空间中，规范方向是外微分映射的像，即所有形如 $\mathrm{d}\chi$ 的一形式；未固定规范的动能算符会把这些方向全部送到零。
因此可以把核心关系概括为“规范像空间包含在动能算符的核中”。
规范固定的作用就是为这些轨道方向选择互补描述，使算符在扩大后的全部一形式截面空间上能够定义格林逆。

可以用投影算符把这个结构写得更清楚。
在暂时取 $k^2\neq0$ 的代数区域，定义纵向投影：

$$
P_{\mathrm L}^{\mu\nu}(k)=\frac{k^\mu k^\nu}{k^2}
$$

定义横向投影：

$$
P_{\mathrm T}^{\mu\nu}(k)=\eta^{\mu\nu}-\frac{k^\mu k^\nu}{k^2}
$$

它们满足：

$$
P_{\mathrm T}^2=P_{\mathrm T}
$$

以及：

$$
P_{\mathrm L}^2=P_{\mathrm L}
$$

并且：

$$
P_{\mathrm T}P_{\mathrm L}=P_{\mathrm L}P_{\mathrm T}=0
$$

最后还有完备分解：

$$
P_{\mathrm T}+P_{\mathrm L}=\mathbb{1}
$$

投影算符是线性映射，把任意四维向量分别分解到与 $k^\mu$ 正交的部分和沿 $k^\mu$ 的部分。
在这个记号下：

$$
K_0(k)=-k^2P_{\mathrm T}(k)
$$

它在横向子空间的本征值为 $-k^2$，在纵向子空间的本征值为零。
没有纵向本征值，就不可能对整个四维分量空间求逆。


---
## 一般协变规范中的传播子


加入规范固定项：

$$
\mathcal{L}_{\mathrm{gf}}=-\frac{1}{2\xi}(\partial_\mu A^\mu)^2
$$

这里 $\xi$ 是规范参数。
总自由拉格朗日密度为：

$$
\mathcal{L}_\xi=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}-\frac{1}{2\xi}(\partial_\mu A^\mu)^2
$$

分部积分后，二次作用量为：

$$
S_\xi\simeq\frac{1}{2}\int\mathrm{d}^4x A_\mu\left[\eta^{\mu\nu}\Box-\left(1-\frac{1}{\xi}\right)\partial^\mu\partial^\nu\right]A_\nu
$$

所以动量空间动能算符为：

$$
K_\xi^{\mu\nu}(k)=-k^2\eta^{\mu\nu}+\left(1-\frac{1}{\xi}\right)k^\mu k^\nu
$$

用横向与纵向投影分解：

$$
K_\xi(k)=-k^2P_{\mathrm T}(k)-\frac{k^2}{\xi}P_{\mathrm L}(k)
$$

现在两个正交子空间上都有非零本征值。
因为投影算符彼此正交，求逆只需分别把两个本征值取倒数：

$$
K_\xi^{-1}(k)=-\frac{1}{k^2}P_{\mathrm T}(k)-\frac{\xi}{k^2}P_{\mathrm L}(k)
$$

直接相乘可以验证：

$$
K_\xi K_\xi^{-1}=P_{\mathrm T}+P_{\mathrm L}=\mathbb{1}
$$

量子场论的费曼传播子是 $\mathrm{i}K_\xi^{-1}$ 并带费曼极点处方。
先写成投影形式：

$$
\widetilde D_{F,\xi}^{\mu\nu}(k)=\frac{-\mathrm{i}}{k^2+\mathrm{i}\epsilon}[P_{\mathrm T}^{\mu\nu}(k)+\xi P_{\mathrm L}^{\mu\nu}(k)]
$$

再把投影展开：

$$
\widetilde D_{F,\xi}^{\mu\nu}(k)=\frac{-\mathrm{i}}{k^2+\mathrm{i}\epsilon}\left[\eta^{\mu\nu}-(1-\xi)\frac{k^\mu k^\nu}{k^2}\right]
$$

这里的投影分解先在 $k^2\neq0$ 处作代数求逆，再由 $\mathrm{i}\epsilon$ 规定极点处的分布延拓。
纵向部分含有额外的 $1/k^2$，在极点上必须与所选分布处方一同理解，不能把普通代数式在 $k^2=0$ 处逐项解释。

从路径积分看，规范固定还承担消除无限规范轨道体积的任务。
对条件 $\partial_\mu A^\mu=0$ 作规范变换，它相对于规范参数 $\chi$ 的变化算符是 $\Box$，与电磁势 $A^\mu$ 本身无关。
因此阿贝尔理论中的费德耶夫–波波夫行列式只是一个与场无关的因子，可以并入归一化；若把它写成反对易辅助场，这些辅助场也不与光子相互作用。
这项简化是阿贝尔规范理论的特殊性质，不能未经证明照搬到非阿贝尔规范场。

路径积分原本会对由局部规范变换连接的同一物理联络重复积分；在主丛上，这些变换就是保持底空间点不动、只沿内部纤维改变局部标架的自同构。
一条规范轨道收集同一物理联络的全部局部表示，规范条件则试图从每条轨道中选择一个代表。
费德耶夫–波波夫算符测量规范条件沿轨道方向怎样变化；在阿贝尔电磁场中它不依赖联络本身，所以相应行列式不携带新的场依赖动力学。

两种常用选择为费曼规范：

$$
\xi=1
$$

此时：

$$
\widetilde D_{F,1}^{\mu\nu}(k)=\frac{-\mathrm{i}\eta^{\mu\nu}}{k^2+\mathrm{i}\epsilon}
$$

另一种是朗道规范，它由极限给出：

$$
\xi\to0
$$

此时传播子在动量空间横向：

$$
k_\mu\widetilde D_{F,0}^{\mu\nu}(k)=0
$$

不同 $\xi$ 改变的是纵向部分，不改变自由传播子的物理极点 $k^2=0$。
因此规范参数改变描述方式，却不改变光子无质量这一物理事实。


---
## 守恒流为什么看不见规范参数


设光子传播子连接两个动量空间电流 $J_\mu(k)$ 与 $J'_\nu(-k)$。
守恒条件表示电流属于纯规范方向的零化子：它与所有沿 $k^\mu$ 的纵向向量配对都为零。
换句话说，传播子虽然在完整四维辅助纤维上求逆，物理源却只探测商去规范方向后的部分。
这正是“守恒流看不见规范参数”的线性代数本质。
对应的传播核为：

$$
\mathcal{A}_\xi(k)=J_\mu(k)\widetilde D_{F,\xi}^{\mu\nu}(k)J'_\nu(-k)
$$

若两个电流守恒：

$$
k_\mu J^\mu(k)=0
$$

以及：

$$
k_\nu J'^\nu(-k)=0
$$

代入一般协变传播子：

$$
\mathcal{A}_\xi(k)=\frac{-\mathrm{i}}{k^2+\mathrm{i}\epsilon}\left[J\cdot J'-(1-\xi)\frac{(J\cdot k)(k\cdot J')}{k^2}\right]
$$

纵向项立即为零：

$$
\mathcal{A}_\xi(k)=\frac{-\mathrm{i}J\cdot J'}{k^2+\mathrm{i}\epsilon}
$$

因此连接守恒流的树级交换振幅与 $\xi$ 无关。
在完整量子电动力学中，这个结论推广为沃德–高桥恒等式；它保证规范参数不能进入在壳物理散射振幅。

同一逻辑解释了为什么实际计算常用 $-\eta^{\mu\nu}$ 代替显式两偏振求和。
物理横向偏振的完备和为：

$$
\sum_{\lambda=1}^2\varepsilon_\lambda^\mu(k)\varepsilon_\lambda^{\nu*}(k)=-\eta^{\mu\nu}+\frac{k^\mu n^\nu+n^\mu k^\nu}{k\cdot n}-\frac{n^2k^\mu k^\nu}{(k\cdot n)^2}
$$

$n^\mu$ 是用来选择横向代表元的参考向量。
右边与 $-\eta^{\mu\nu}$ 的差中，每一项都至少含一个 $k^\mu$ 或 $k^\nu$。

若振幅的光子指标部分记为 $\mathcal{M}_\mu$，规范不变性要求：

$$
k^\mu\mathcal{M}_\mu=0
$$

于是：

$$
\sum_{\lambda=1}^2|\varepsilon_\lambda^{\mu*}\mathcal{M}_\mu|^2=-\eta^{\mu\nu}\mathcal{M}_\mu\mathcal{M}_\nu^*
$$

参考向量 $n^\mu$ 和所有纯规范项都消失。
左边只求和两个真实外部光子的横向偏振，右边却可以用显然协变的 $-\eta^{\mu\nu}$ 计算；二者相等的前提正是 $k\cdot\mathcal{M}=0$。

必须区分外部偏振和内部传播子。
外部实光子属于物理希尔伯特空间，只能取螺旋度 $\pm1$；内部光子线是动能算符的格林函数，包含依赖规范的纵向张量结构，但不是一个必须落在质量壳上的物理中间态。

也不能把“规范依赖项相消”理解成每张费曼图都必然单独与 $\xi$ 无关。
在更复杂的相互作用计算中，规范依赖可能在若干图、接触项和外腿贡献之间相消。
可靠判据是完整物理振幅满足相应的沃德恒等式，而不是把某个内部线逐字解释成可观测粒子。

至此，自旋为 $1$ 的自由电磁场章节形成完整链条。
麦克斯韦作用量产生规范冗余，约束分析给出两个自由度，协变量子化引入扩大状态空间，弱洛伦茨条件与零范数商空间恢复两个物理螺旋度，而传播子的规范参数最终在守恒流和物理振幅中消失。
