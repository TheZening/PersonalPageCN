---
title: "QM+ Berry Phase和几何相位2"
date: 2025-09-18
categories:
  - QM+
---

> 关于态有可能跟不上Hamiltonian变化这件事, 我们已经在 [绝热定理和Berry phase中讨论过了](https://thezening.github.io/PersonalPageCN/qm1/QM1-AdiabaticTheoremAndBerryPhase/)

在绝热定理中, 我们说当系统的 Hamiltonian 缓慢变化时, 若某个本征值 $$E_n(t)$$ 与其他本征值 $$E_m(t)$$ 之间有能隙, 且系统初始时刻处于本征态 $$\ket{n;t=0}$$ , 那么在任意时刻系统仍然会在瞬时本征态 $$\ket{n;t}$$ 上, 只是会获得相位因子.

在这个基础之上, 如果我们的Hamiltonian依赖一组参数 $$\boldsymbol{R}=(R_1,R_2,\cdots)$$ , 那么当这些参数沿着某条闭合路径 $$\mathcal{C}$$ 变化一圈后, 系统的态会获得一个额外的相位因子, 这个相位因子就是 Berry phase:

$$
\begin{equation}
\gamma_n(\mathcal{C}) = \mathrm{i}\,\oint_{\mathcal{C}} \mel{n;\boldsymbol{R}}{\nabla_{\boldsymbol{R}}}{n;\boldsymbol{R}} \cdot \mathrm{d}\boldsymbol{R}
\end{equation}
$$

此处做两个之前没有提到过的评价:

1. 我们为什么强调闭合路径? 这是因为初态和末态落在同一个参数点, 此时Hamiltonian一样, 这时态函数的物理可比性才成立, 于是额外的 Berry 相位才是一个真正物理可观测量 (当然, 是通过干涉实验等间接手段观测到的).
2. 还有一个原因, 波函数本身是有规范自由度的, 乘一个位置依赖的相位都没什么问题. 对于开路径, Berry 相位依赖于这个规范选择. 但对于闭合路径, 这个相位是规范不变的 (当然, 差个$$2\pi$$是没问题的)
3. 开放的路径也有办法定义, 叫做 Pancharatnam phase.

几何几何, 难道在参数空间走一圈就是几何了? 到底几何在哪里呢? 我们来仔细考虑考虑这个事情.


---
## Green公式, Gauss定理, Stokes定理

我们先退几步, 看看最简单的向量分析.
我们考虑一个$$\mathbb{R}^3$$空间, 里面有一个向量场 $$\boldsymbol{A}(\boldsymbol{R})$$ , 其中 $$\boldsymbol{R}=(x,y,z)$$ 就是三个坐标, 不一定非得是物理位置空间, 就是抽象的空间.

1. 对于$$\mathbb{R}^3$$中选定的一个闭合曲线 $$\mathcal{C}$$ , 规定逆时针为正方向.
2. 对于 $$\mathcal{C}$$ 所围成的一个曲面 $$\mathcal{S}$$ , 规定法向 $$\hat{\boldsymbol{n}}$$ 用右手定则确定, 就是, 如果你用右手的四指沿着 $$\mathcal{C}$$ 的方向弯曲, 那么大拇指指向的方向就是 $$\hat{\boldsymbol{n}}$$ 的方向.
3. 规定 $$\mathrm{d}\boldsymbol{R}$$ 是沿着 $$\mathcal{C}$$ 的切向微元, 规定 $$\mathrm{d}\boldsymbol{S} = \hat{\boldsymbol{n}}\,\mathrm{d}S$$ 是曲面的面积元.

如果从二维空间开始, 我们会发现一个非常有趣的公式, 叫做 Green 公式:

$$
\begin{equation}
\oint_{\partial S} P\,\dd{x} + Q\,\dd{y} = \iint_{S} \left(\pdv{Q}{x} - \pdv{P}{y}\right)\,\dd{x}\dd{y}
\end{equation}
$$

> 这实际上告诉我们, 边界上的流动 = 区域内的旋转总量.
> 如果区域里面的水流整体在打旋, 那么边界上就会有流动.
> 区域内的旋度多少, 就决定了边界上流动的多少.
>
> 你站在水边看, 发现池塘边上的树叶在迅速流动, 你要小心了, 不要下水, 说明池塘里面的水流在打旋, 你下去就危险了.

我们学的第二个公式, 叫做 Gauss 定理 (散度定理):

$$
\begin{equation}
\iint_{\partial V} \boldsymbol{A} \cdot \dd{\boldsymbol{S}} = \iiint_{V} (\nabla_{\boldsymbol{R}} \cdot \boldsymbol{A})\,\dd{V}
\end{equation}
$$

> 这个公式告诉我们, 一个闭合曲面上的通量 = 曲面所围成的体积内的散度总量.
> 如果一个区域内的水在外流, 那么这个区域的边界上就会有流出.
> 区域内的散度多少, 就决定了边界上流出的多少.

我们学的第三个公式, 叫做 Stokes 定理:

$$
\begin{equation}
\oint_{\mathcal{C}} \boldsymbol{A} \cdot \mathrm{d}\boldsymbol{R} = \iint_{\mathcal{S}} (\nabla_{\boldsymbol{R}} \times \boldsymbol{A}) \cdot \mathrm{d}\boldsymbol{S}
\end{equation}
$$

> 这个公式告诉我们, 一个闭合曲线上的环流 = 曲线所围成的曲面内的旋度总量.
> 这实际上是 Green 公式的三维推广, 甚至用 Stokes 定理推广到 Green 公式更合理, 更有说服力.


我们在真正做这个线积分的时候, 首先要选定一个参数化的路径 $$\boldsymbol{R}(t)$$ , 然后计算 $$\mathrm{d}\boldsymbol{R} = \dot{\boldsymbol{R}}(t)\,\mathrm{d}t$$ , 然后参数化向量场 $$\boldsymbol{A}(\boldsymbol{R})$$ 成 $$\boldsymbol{A}(\boldsymbol{R}(t))$$ , 最后计算积分.

> 这一类的积分定理, 其实告诉了我们一件事: 一个系统的内部活动必然在边界上留下痕迹.

如果就在这个层面对着 Berry 相位的定义式子看一眼, 你会发现, 它其实就是 Stokes 定理的左边:

$$
\begin{equation}
\gamma_n(\mathcal{C}) = \mathrm{i}\,\oint_{\mathcal{C}} \mel{n;\boldsymbol{R}}{\nabla_{\boldsymbol{R}}}{n;\boldsymbol{R}} \cdot \dd{\boldsymbol{S}}
\end{equation}
$$

也就是 $$\boldsymbol{A}(\boldsymbol{R}) = \mathrm{i}\,\mel{n;\boldsymbol{R}}{\nabla_{\boldsymbol{R}}}{n;\boldsymbol{R}}$$ 这个向量场沿着边界走了一圈.
利用 Stokes 定理, 我们可以把它写成曲面积分:

$$
\begin{equation}
\gamma_n(\mathcal{C}) = \mathrm{i}\,\iint_{\mathcal{S}} \left[\nabla_{\boldsymbol{R}} \times \mel{n;\boldsymbol{R}}{\nabla_{\boldsymbol{R}}}{n;\boldsymbol{R}}\right] \cdot \dd{\boldsymbol{S}}
\end{equation}
$$

可是这到底是什么意思呢? 这到底是个什么向量场呢? 这个向量场的旋度又是什么意思呢?

---
## 微分形式







