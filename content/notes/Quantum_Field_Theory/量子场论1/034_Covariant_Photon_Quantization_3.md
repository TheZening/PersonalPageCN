---
title: "光子场量子化（三）：弱洛伦茨条件与物理矩阵元"
date: 2026-08-18
weight: 34
---

费曼规范使四维势的正则量子化保持显然协变，却把时间型和纵向辅助模带入了扩大状态空间。
经典理论中的洛伦茨条件 $\partial_\mu A^\mu=0$ 看起来正好可以去掉这些多余分量，但在量子理论中不能把它原封不动地提升为算符恒等式。

本篇先用一个等时对易子展示强条件与正则量子化的直接矛盾，再推导古普塔–布洛伊勒弱条件。
最后证明时间型与纵向贡献怎样在任意两个物理态之间的能量、动量矩阵元中精确相消。


---
## 强算符条件为什么与正则对易关系冲突


费曼规范下的共轭动量为：

$$
\Pi^\mu=-\dot A^\mu
$$

洛伦茨散度写成时间与空间部分为：

$$
\partial_\mu A^\mu=\dot A^0+\partial_iA^i
$$

由于 $A^0=A_0$ 且 $\Pi^0=-\dot A^0$：

$$
\partial_\mu A^\mu=-\Pi^0+\partial_iA^i
$$

正则对易关系给出：

$$
[A^0(t,\bm{y}),\Pi^0(t,\bm{x})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$

交换两个算符的次序：

$$
[\Pi^0(t,\bm{x}),A^0(t,\bm{y})]=-\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$

空间分量 $A^i$ 与 $A^0$ 等时对易，所以：

$$
[\partial_iA^i(t,\bm{x}),A^0(t,\bm{y})]=0
$$

因此洛伦茨散度与时间分量的等时对易子为：

$$
[\partial_\mu A^\mu(t,\bm{x}),A^0(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$

如果强行把 $\partial_\mu A^\mu=0$ 当作整个扩大空间上的算符恒等式，左边必须是零算符与 $A^0$ 的对易子，因而应当为零。
正则量子化却要求它等于非零狄拉克分布。
两者不能同时成立。

这个矛盾不是某种特殊偏振基底造成的。
它直接来自费曼规范下 $A^0$ 与 $\Pi^0$ 是一对正则变量，所以在任何基底中都存在。

也不能通过先把 $\partial_\mu A^\mu$ 设为零、再保留四分量正则对易关系来解决。
一个算符约束若被作为强恒等式施加，就必须先使用约束量子化重新计算约化后的括号；继续使用未约化四分量的正则对易关系会重复计算同一自由度。

库仑规范量子化正是先解约束再量子化横向变量，所以它的基本对易子是横向分布而不是 $\delta^{ij}\delta^{(3)}$。
协变量子化选择另一种安排：保留扩大空间中的四分量对易关系，但只在状态空间上施加较弱条件。


---
## 正频率条件怎样约束时间型与纵向模


把洛伦茨散度拆成正频率和负频率部分：

$$
\partial_\mu A^\mu=\partial_\mu A^{\mu(+)}+\partial_\mu A^{\mu(-)}
$$

正频率部分含湮灭算符：

$$
A^{\mu(+)}(x)=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon_\lambda^\mu(\bm{k})\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

对它取散度：

$$
\partial_\mu A^{\mu(+)}(x)=-\mathrm{i}\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}[k\cdot\varepsilon_\lambda(\bm{k})]\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

采用上一篇的偏振标架。
两个横向偏振满足：

$$
k\cdot\varepsilon_1=k\cdot\varepsilon_2=0
$$

时间型偏振满足：

$$
k\cdot\varepsilon_0=\omega_{\bm{k}}
$$

纵向偏振 $\varepsilon_3^\mu=(0,\widehat{\bm{k}})$ 满足：

$$
k\cdot\varepsilon_3=-|\bm{k}|=-\omega_{\bm{k}}
$$

因此：

$$
\partial_\mu A^{\mu(+)}(x)=-\mathrm{i}\int\frac{\mathrm{d}^3k}{(2\pi)^3}\sqrt{\frac{\omega_{\bm{k}}}{2}}[\hat{a}_0(\bm{k})-\hat{a}_3(\bm{k})]\mathrm{e}^{-\mathrm{i}k\cdot x}
$$

古普塔–布洛伊勒条件要求正频率散度湮灭物理态：

$$
\partial_\mu A^{\mu(+)}(x)|\Psi_{\mathrm{phys}}\rangle=0
$$

由于不同 $\bm{k}$ 的平面波在傅里叶意义下独立，这等价于对每个动量要求：

$$
[\hat{a}_0(\bm{k})-\hat{a}_3(\bm{k})]|\Psi_{\mathrm{phys}}\rangle=0
$$

这个结果也可以写成不依赖当前偏振编号的形式。
定义带洛伦兹指标的模系数：

$$
\hat{a}^\mu(\bm{k})=\sum_{\lambda=0}^3\varepsilon_\lambda^\mu(\bm{k})\hat{a}_\lambda(\bm{k})
$$

那么弱条件就是：

$$
k_\mu\hat{a}^\mu(\bm{k})|\Psi_{\mathrm{phys}}\rangle=0
$$

在本篇采用的偏振标架中，$k\cdot\varepsilon_0=\omega_{\bm{k}}$ 且 $k\cdot\varepsilon_3=-\omega_{\bm{k}}$，所以这个协变写法恰好还原为 $\hat{a}_0-\hat{a}_3$。
这说明物理内容是“沿四动量的正频率分量不能产生可区分的物理激发”，而不是编号 $0$ 与 $3$ 本身具有绝对意义。

也可以写成：

$$
\hat{a}_0(\bm{k})|\Psi_{\mathrm{phys}}\rangle=\hat{a}_3(\bm{k})|\Psi_{\mathrm{phys}}\rangle
$$

它不要求 $\hat{a}_0$ 和 $\hat{a}_3$ 分别湮灭物理态，而只约束二者的一个线性组合。
横向算符 $\hat{a}_1,\hat{a}_2$ 完全不受这一条件限制。

对弱条件取厄米共轭，可得物理左矢满足：

$$
\langle\Phi_{\mathrm{phys}}|\partial_\mu A^{\mu(-)}(x)=0
$$

逐动量写成：

$$
\langle\Phi_{\mathrm{phys}}|[\hat{a}_0^\dagger(\bm{k})-\hat{a}_3^\dagger(\bm{k})]=0
$$

所以：

$$
\langle\Phi_{\mathrm{phys}}|\hat{a}_0^\dagger(\bm{k})=\langle\Phi_{\mathrm{phys}}|\hat{a}_3^\dagger(\bm{k})
$$

现在取任意两个物理态。
完整散度的矩阵元为：

$$
\langle\Phi_{\mathrm{phys}}|\partial_\mu A^\mu(x)|\Psi_{\mathrm{phys}}\rangle
$$

把它拆成两部分：

$$
\langle\Phi_{\mathrm{phys}}|\partial_\mu A^{\mu(+)}(x)|\Psi_{\mathrm{phys}}\rangle+\langle\Phi_{\mathrm{phys}}|\partial_\mu A^{\mu(-)}(x)|\Psi_{\mathrm{phys}}\rangle
$$

第一项由右矢条件为零，第二项由左矢条件为零，因此：

$$
\langle\Phi_{\mathrm{phys}}|\partial_\mu A^\mu(x)|\Psi_{\mathrm{phys}}\rangle=0
$$

弱条件不是只保证同一个态中的期望值为零，而是保证任意两个物理态之间的洛伦茨散度矩阵元都为零。
这足以使所有物理跃迁振幅和经典极限满足洛伦茨条件，同时又不把 $\partial_\mu A^\mu$ 错误地设成整个扩大空间上的零算符。


---
## 辅助偏振怎样从物理能量和动量中消失


正规序自由哈密顿量为：

$$
:\hat{H}:=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3}\omega_{\bm{k}}\hat{N}_\lambda(\bm{k})
$$

把四个偏振展开：

$$
:\hat{H}:=\int\frac{\mathrm{d}^3k}{(2\pi)^3}\omega_{\bm{k}}[-\hat{a}_0^\dagger\hat{a}_0+\hat{a}_1^\dagger\hat{a}_1+\hat{a}_2^\dagger\hat{a}_2+\hat{a}_3^\dagger\hat{a}_3]
$$

这里同一行中的模算符都取动量 $\bm{k}$。
取任意两个物理态之间的矩阵元，时间型与纵向部分为：

$$
\mathcal{M}_{03}=-\langle\Phi_{\mathrm{phys}}|\hat{a}_0^\dagger\hat{a}_0|\Psi_{\mathrm{phys}}\rangle+\langle\Phi_{\mathrm{phys}}|\hat{a}_3^\dagger\hat{a}_3|\Psi_{\mathrm{phys}}\rangle
$$

对右矢使用 $\hat{a}_0|\Psi_{\mathrm{phys}}\rangle=\hat{a}_3|\Psi_{\mathrm{phys}}\rangle$：

$$
\mathcal{M}_{03}=-\langle\Phi_{\mathrm{phys}}|\hat{a}_0^\dagger\hat{a}_3|\Psi_{\mathrm{phys}}\rangle+\langle\Phi_{\mathrm{phys}}|\hat{a}_3^\dagger\hat{a}_3|\Psi_{\mathrm{phys}}\rangle
$$

再对左矢使用 $\langle\Phi_{\mathrm{phys}}|\hat{a}_0^\dagger=\langle\Phi_{\mathrm{phys}}|\hat{a}_3^\dagger$：

$$
\mathcal{M}_{03}=0
$$

因此哈密顿量在物理态之间的矩阵元只含横向模：

$$
\begin{aligned}
\langle\Phi_{\mathrm{phys}}|:\hat{H}:|\Psi_{\mathrm{phys}}\rangle
&=\sum_{\lambda=1}^2\int\frac{\mathrm{d}^3k}{(2\pi)^3}\omega_{\bm{k}} \\
&\phantom{=}\times\langle\Phi_{\mathrm{phys}}|\hat{a}_\lambda^\dagger(\bm{k})\hat{a}_\lambda(\bm{k})|\Psi_{\mathrm{phys}}\rangle
\end{aligned}
$$

特别地，物理态的能量期望值为非负数：

$$
\langle\Psi_{\mathrm{phys}}|:\hat{H}:|\Psi_{\mathrm{phys}}\rangle=\sum_{\lambda=1}^2\int\frac{\mathrm{d}^3k}{(2\pi)^3}\omega_{\bm{k}}\|\hat{a}_\lambda(\bm{k})|\Psi_{\mathrm{phys}}\rangle\|^2
$$

右边的范数只涉及两个正范数横向模。
所以时间型负范数不会导致物理能量无下界。

正规序三维动量为：

$$
:\widehat{\bm{P}}:=\sum_{\lambda=0}^3\int\frac{\mathrm{d}^3k}{(2\pi)^3}\bm{k}\hat{N}_\lambda(\bm{k})
$$

它含有与哈密顿量完全相同的偏振组合。
因此：

$$
\begin{aligned}
\langle\Phi_{\mathrm{phys}}|:\widehat{\bm{P}}:|\Psi_{\mathrm{phys}}\rangle
&=\sum_{\lambda=1}^2\int\frac{\mathrm{d}^3k}{(2\pi)^3}\bm{k} \\
&\phantom{=}\times\langle\Phi_{\mathrm{phys}}|\hat{a}_\lambda^\dagger(\bm{k})\hat{a}_\lambda(\bm{k})|\Psi_{\mathrm{phys}}\rangle
\end{aligned}
$$

相消并不表示扩大空间中的 $\hat{a}_0$ 与 $\hat{a}_3$ 算符被设成零。
它只表示它们在物理态之间对规范不变可观测量没有独立贡献。

物理子空间还必须在时间演化下保持。
记：

$$
\hat{b}(\bm{k})=\hat{a}_0(\bm{k})-\hat{a}_3(\bm{k})
$$

由自由哈密顿量的模代数得到：

$$
[:\hat{H}:,\hat{b}(\bm{k})]=-\omega_{\bm{k}}\hat{b}(\bm{k})
$$

若初态满足 $\hat{b}|\Psi\rangle=0$，则：

$$
\hat{b}\mathrm{e}^{-\mathrm{i}\hat{H}t}|\Psi\rangle=\mathrm{e}^{-\mathrm{i}\hat{H}t}\mathrm{e}^{-\mathrm{i}\omega_{\bm{k}}t}\hat{b}|\Psi\rangle=0
$$

所以自由时间演化不会把物理态带出弱条件定义的子空间。
下一篇还要完成最后一步：这个子空间的内积只是半正定的，必须再把其中的零范数纯规范向量商掉，才能得到真正的物理希尔伯特空间。
