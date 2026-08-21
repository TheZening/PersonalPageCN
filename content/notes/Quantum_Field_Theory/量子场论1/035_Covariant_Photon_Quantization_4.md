---
title: "光子场量子化（四）：零范数态、物理商空间与螺旋度"
date: 2026-08-18
weight: 35
---

弱洛伦茨条件选出的物理子空间不再含负范数物理向量，但它仍含非零的零范数向量。
这些向量与所有物理态正交，对应不改变场强的纯规范方向。


因此协变量子化的最后一步不是简单地“保留满足条件的态”，而是把相差零范数纯规范态的向量视为同一个物理态。
完成这个商空间以后，一光子空间只剩两个正范数横向偏振，它们最自然的基底就是螺旋度 $+1$ 与 $-1$。

---
## 一光子物理态中的零范数方向


为避免连续归一化中的 $\delta^{(3)}(0)$ 干扰结构，以下先采用有限体积中的离散动量；恢复连续动量只需把模换成波包涂抹算符。
固定一个动量 $\bm{k}$，一般的一光子向量为：
$$
\ket{\psi}=\sum_{\lambda=0}^3c_\lambda\hat{a}_\lambda^\dagger(\bm{k})\ket{0}
$$
弱洛伦茨条件要求：
$$
[\hat{a}_0(\bm{k})-\hat{a}_3(\bm{k})]\ket{\psi}=0
$$
把一般态代入：
$$
[\hat{a}_0-\hat{a}_3]\ket{\psi}=\sum_\lambda c_\lambda[\hat{a}_0-\hat{a}_3,\hat{a}_\lambda^\dagger]\ket{0}
$$
横向模与 $\hat{a}_0-\hat{a}_3$ 对易，所以只剩 $\lambda=0,3$。
利用：
$$
[\hat{a}_0,\hat{a}_0^\dagger]=-\mathbb{1}
$$
以及：
$$
[\hat{a}_3,\hat{a}_3^\dagger]=\mathbb{1}
$$
得到：
$$
[\hat{a}_0-\hat{a}_3]\ket{\psi}=-(c_0+c_3)\ket{0}
$$
因此物理态条件为：
$$
c_3=-c_0
$$
一般的一光子物理向量可以写成：
$$
\ket{\psi_{\text{phys}}}=c_1\hat{a}_1^\dagger\ket{0}+c_2\hat{a}_2^\dagger\ket{0}+c_0(\hat{a}_0^\dagger-\hat{a}_3^\dagger)\ket{0}
$$
它的范数为：
$$
\braket{\psi_{\text{phys}}}{\psi_{\text{phys}}}=-|c_0|^2+|c_1|^2+|c_2|^2+|c_3|^2
$$
使用 $c_3=-c_0$：
$$
\braket{\psi_{\text{phys}}}{\psi_{\text{phys}}}=|c_1|^2+|c_2|^2
$$
负范数时间型贡献被纵向贡献抵消，所以物理子空间上的内积不会为负。
但若 $c_1=c_2=0$ 且 $c_0\neq0$，向量本身非零而范数为零。


定义这个辅助组合：
$$
\ket{n}=(\hat{a}_0^\dagger-\hat{a}_3^\dagger)\ket{0}
$$
其范数为：
$$
\braket{n}{n}=\expval{(\hat{a}_0-\hat{a}_3)(\hat{a}_0^\dagger-\hat{a}_3^\dagger)}_0
$$
使用模对易关系：
$$
\braket{n}{n}=-1+1=0
$$
它不但范数为零，而且与任意一光子物理态正交：
$$
\braket{n}{\psi_{\text{phys}}}=\mel*{0}{\hat{a}_0-\hat{a}_3}{\psi_{\text{phys}}}=0
$$
这种向量叫零向量或零范数向量。
它与普通欧几里得空间中的零向量不同：它的分量不全为零，只是按照不定内积计算的长度平方为零。
闵可夫斯基空间中的非零光状四维向量也有同样性质，所以这个现象并不神秘。

---
## 从半正定子空间到物理希尔伯特空间


记满足弱洛伦茨条件的状态集合为：
$$
\mathcal{P}=\left\{\ket{\Psi}\middle|\partial_\mu A_{(+)}^\mu(x)\ket{\Psi}=0\quad\forall x\right\}
$$
物理子空间中内积的根空间定义为：
$$
\mathcal{N}=\left\{\ket{N}\in\mathcal{P}\middle|\braket{\Phi}{N}=0\quad\forall\ket{\Phi}\in\mathcal{P}\right\}
$$
取 $\ket{\Phi}=\ket{N}$ 就知道 $\mathcal{N}$ 中的每个向量都具有零范数。
反过来，单凭一个向量范数为零并不足以保证它能被商掉；关键是它必须与整个 $\mathcal{P}$ 正交。


下面把一光子结论推广到完整的有限粒子福克空间。
对每个动量定义：
$$
\hat{b}(\bm{k})=\hat{a}_0(\bm{k})-\hat{a}_3(\bm{k})
$$
以及：
$$
\hat{b}^\dagger(\bm{k})=\hat{a}_0^\dagger(\bm{k})-\hat{a}_3^\dagger(\bm{k})
$$
时间型与纵向模的号差给出：
$$
[\hat{b}(\bm{k}),\hat{b}^\dagger(\bm{q})]=[-1+1]\delta_{\bm{k}\bm{q}}=0
$$
若 $\ket{\chi}\in\mathcal{P}$，则对任意 $\bm{q}$ 有：
$$
\hat{b}(\bm{q})\hat{b}^\dagger(\bm{k})\ket{\chi}=\hat{b}^\dagger(\bm{k})\hat{b}(\bm{q})\ket{\chi}+[\hat{b}(\bm{q}),\hat{b}^\dagger(\bm{k})]\ket{\chi}=0
$$
所以 $\hat{b}^\dagger(\bm{k})\ket{\chi}$ 仍属于 $\mathcal{P}$。
另一方面，对任意 $\ket{\Phi}\in\mathcal{P}$，左矢弱条件给出：
$$
\mel*{\Phi}{\hat{b}^\dagger(\bm{k})}{\chi}=0
$$
因此 $\hat{b}^\dagger(\bm{k})\ket{\chi}\in\mathcal{N}$，而任意多个 $\hat{b}^\dagger$ 产生的向量也都属于 $\mathcal{N}$。


还需要证明这已经找全了多光子物理态中的零方向。
在固定动量的有限粒子子空间中，任意向量都可以写成：
$$
\ket{\Psi}=F(\hat{a}_0^\dagger,\hat{a}_3^\dagger,\hat{a}_1^\dagger,\hat{a}_2^\dagger)\ket{0}
$$
因为产生算符彼此对易，$\hat{b}$ 在这个多项式上的作用等于形式微分：
$$
\hat{b}\ket{\Psi}=-\left[\pdv{F}{\hat{a}_0^\dagger}+\pdv{F}{\hat{a}_3^\dagger}\right]\ket{0}
$$
弱条件要求方括号为零，所以 $F$ 对时间型和纵向变量的依赖只能通过差 $\hat{a}_0^\dagger-\hat{a}_3^\dagger=\hat{b}^\dagger$ 出现。
对每个动量重复这一论证可知，任意有限粒子物理向量都能唯一分成纯横向部分，以及至少含一个 $\hat{b}^\dagger(\bm{k})$ 的部分。
若纯横向部分非零，就可选取同一个横向向量与它配对并得到严格正的内积，因此这样的向量不属于根空间。
后一部分正是 $\mathcal{N}$，故：
$$
\mathcal{P}/\mathcal{N}\cong\mathcal{F}_\perp
$$
右边是所有动量上的两个横向模生成的玻色福克空间。
取完备化以后，这个结论延伸到一般物理波包态。


如果两个物理向量只相差一个根空间向量：
$$
\ket{\Psi'}=\ket{\Psi}+\ket{N}
$$
其中 $\ket{N}\in\mathcal{N}$，那么任何定义良好的物理可观测量都不能区分它们。
因此定义 $\ket{\Psi'}\sim\ket{\Psi}$，当且仅当：
$$
\ket{\Psi'}-\ket{\Psi}\in\mathcal{N}
$$
真正的物理状态空间是商空间：
$$
\mathcal{H}_{\text{phys}}=\mathcal{P}/\mathcal{N}
$$
“商掉”不是把某个向量随意删除，而是把整个陪集视为一个物理向量。
一个陪集的不同代表元可以含不同比例的时间型与纵向分量，但它们给出相同的规范不变物理信息。


在一光子层次：
$$
\ket{\psi_{\text{phys}}}\sim c_1\hat{a}_1^\dagger\ket{0}+c_2\hat{a}_2^\dagger\ket{0}
$$
因为二者之差正是 $c_0\ket{n}$。
商空间中的范数因此为：
$$
\left\|[\psi_{\text{phys}}]\right\|^2=|c_1|^2+|c_2|^2
$$
只要等价类非零，这个范数就严格为正。
所以 $\mathcal{H}_{\text{phys}}$ 完成后成为正定希尔伯特空间。


这里的内积能够下降到商空间，是因为零范数子空间 $\mathcal{N}$ 与所有物理向量正交。
若更换同一陪集中的代表元，内积不会改变，因而它确实只依赖物理等价类。
这与经典规范势从构型空间取商完全平行：经典层面商掉纯规范构型方向，量子层面商掉由这些方向产生的零范数态。


零范数态与纯规范偏振的关系可以直接从场矩阵元看见。
考虑：
$$
\mel*{0}{A^\mu(x)}{n}
$$
只有场的正频率部分能够把一光子态湮灭到真空。
使用时间型与纵向模的对易关系：
$$
\mel*{0}{A^\mu(x)}{n}\propto-\varepsilon_0^\mu(\bm{k})-\varepsilon_3^\mu(\bm{k})
$$
而：
$$
\varepsilon_0^\mu+\varepsilon_3^\mu=(1,\widehat{\bm{k}})=\frac{k^\mu}{\omega_{\bm{k}}}
$$
所以：
$$
\mel*{0}{A^\mu(x)}{n}\propto k^\mu\mathrm{e}^{-\mathrm{i}k\cdot x}
$$
这正是平面波规范变换产生的势方向。
相应场强矩阵元为：
$$
\mel*{0}{F^{\mu\nu}(x)}{n}\propto(k^\mu k^\nu-k^\nu k^\mu)\mathrm{e}^{-\mathrm{i}k\cdot x}=0
$$
因此零范数方向确实不携带电磁场强。
商空间构造是经典规范等价类 $A^\mu\sim A^\mu+\partial^\mu\chi$ 在量子状态空间中的对应物。


一个算符若要成为物理可观测量，必须把 $\mathcal{P}$ 映回 $\mathcal{P}$，并把 $\mathcal{N}$ 映回 $\mathcal{N}$。
这样它对等价类的作用才与代表元选择无关。
由 $F_{\mu\nu}$ 构造的局域量满足这一要求，而裸的 $A^\mu$ 分量一般依赖规范代表元。

---
## 横向圆偏振、螺旋度与物理光子数


商空间的一光子态只需要两个横向基向量。
线偏振基底由 $\varepsilon_1^\mu,\varepsilon_2^\mu$ 给出，圆偏振基底为：
$$
\varepsilon_+^\mu=\frac{1}{\sqrt{2}}(\varepsilon_1^\mu+\mathrm{i}\varepsilon_2^\mu)
$$
以及：
$$
\varepsilon_-^\mu=\frac{1}{\sqrt{2}}(\varepsilon_1^\mu-\mathrm{i}\varepsilon_2^\mu)
$$
为了使场展开保持不变，定义圆偏振湮灭算符：
$$
\hat{a}_+(\bm{k})=\frac{1}{\sqrt{2}}[\hat{a}_1(\bm{k})-\mathrm{i}\hat{a}_2(\bm{k})]
$$
以及：
$$
\hat{a}_-(\bm{k})=\frac{1}{\sqrt{2}}[\hat{a}_1(\bm{k})+\mathrm{i}\hat{a}_2(\bm{k})]
$$
它们的厄米共轭为：
$$
\hat{a}_+^\dagger(\bm{k})=\frac{1}{\sqrt{2}}[\hat{a}_1^\dagger(\bm{k})+\mathrm{i}\hat{a}_2^\dagger(\bm{k})]
$$
以及：
$$
\hat{a}_-^\dagger(\bm{k})=\frac{1}{\sqrt{2}}[\hat{a}_1^\dagger(\bm{k})-\mathrm{i}\hat{a}_2^\dagger(\bm{k})]
$$
由横向模代数得到：
$$
[\hat{a}_h(\bm{k}),\hat{a}_{h'}^\dagger(\bm{q})]=(2\pi)^3\delta_{hh'}\delta^{(3)}(\bm{k}-\bm{q})
$$
其中 $h,h'=+,-$。
相应一光子态为：
$$
\ket{\bm{k},h}=\hat{a}_h^\dagger(\bm{k})\ket{0}
$$
在绕 $\widehat{\bm{k}}$ 旋转角度 $\theta$ 时，它们分别获得相位 $\mathrm{e}^{-\mathrm{i}h\theta}$，所以螺旋度本征值为 $h=+1$ 与 $h=-1$。
无质量粒子没有静止系，螺旋度是比“某个固定轴上的三分量自旋”更自然的标签；它在正规正时洛伦兹变换下不变，而宇称变换会把 $h$ 翻转为 $-h$。


物理光子数算符可以定义为：
$$
\hat{N}_{\text{phys}}=\sum_{h=\pm}\int\frac{\hat{a}_h^\dagger(\bm{k})\hat{a}_h(\bm{k})}{(2\pi)^3}\dd[3]{k}
$$
自由理论的总螺旋度算符为：
$$
\Lambda=\int\frac{\hat{a}_+^\dagger(\bm{k})\hat{a}_+(\bm{k})-\hat{a}_-^\dagger(\bm{k})\hat{a}_-(\bm{k})}{(2\pi)^3}\dd[3]{k}
$$
它对一光子态的作用为：
$$
\Lambda\ket{\bm{k},\pm}=\pm\ket{\bm{k},\pm}
$$
必须区分物理光子数、电荷与螺旋度。
光子数在自由理论中因哈密顿量对角化而守恒，但在相互作用理论中可以改变；光子电荷恒为零；螺旋度则标记单个无质量自旋为 $1$ 的物理偏振表示。


把光子角动量拆成独立“自旋部分”和“轨道部分”通常依赖规范与边界选择，不能像有质量粒子的静止系自旋那样简单处理。
真正稳固的单光子内禀标签是螺旋度 $h=\pm1$。


一般洛伦兹变换还揭示了商空间为什么不可省略。
横向偏振变换到新动量后，除了新的横向代表元，还可能多出一个与新四动量成正比的项：
$$
\Lambda^\mu{}_\nu\varepsilon_h^\nu(k)=\mathrm{e}^{-\mathrm{i}h\theta}\varepsilon_h^\mu(\Lambda k)+\alpha_h(k,\Lambda)(\Lambda k)^\mu
$$
最后一项对应纯规范改变，不影响场强；在物理商空间中它代表零向量。
因此洛伦兹变换在代表元层面可能伴随规范补偿，但在等价类上只留下螺旋度相位。
这也是无质量自旋为 $1$ 的洛伦兹表示与规范冗余紧密相连的原因。


把所有动量一起考虑时，每个正能光锥动量上方的商空间都给出二维物理一光子纤维。
圆偏振把这根二维复纤维分解成螺旋度 $+1$ 与 $-1$ 的两个一维子空间，洛伦兹群在这些纤维之间传递状态并可能附带纯规范代表元变化。
所以螺旋度不是给某个固定四维势分量贴标签，而是物理偏振丛上的洛伦兹表示标签。


库仑规范量子化从一开始只保留两个横向模，协变量子化则先使用四个分量，再经过弱条件和商空间得到同一个两偏振物理希尔伯特空间。
两条道路的物理内容相同，只是中间变量不同。


以后计算协变光子传播子时，时间型和纵向张量分量仍会出现在中间表达式中。
这不应解释为实验中存在可观测的时间型或纵向“虚光子态”；内部线只是格林函数的组成部分，不是物理希尔伯特空间中的渐近粒子。
守恒流与规范不变性最终保证可观测振幅只依赖物理内容。
