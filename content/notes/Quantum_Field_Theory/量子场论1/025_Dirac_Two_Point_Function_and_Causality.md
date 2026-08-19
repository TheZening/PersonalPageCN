---
title: "Dirac 场二点函数（一）：真空反对易函数与微观因果性"
date: 2026-08-18
weight: 25
---

正则量子化只直接规定同一时刻的场反对易关系。
传播子却关联两个任意时空事件，所以必须先把等时正则结构按照自由 Dirac 方程演化到不同时刻。

标量场的因果结构由场对易函数控制，费米场则由场反对易函数控制。
本篇从模展开计算两种真空二点函数，再证明 Dirac 反对易函数可以由标量泡利–若尔当分布经过一阶微分得到。


---
## 两种场次序给出的旋量二点函数


记两个事件之差为：

$$
z=x-y
$$

自由 Dirac 场为：

$$
\psi(x)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\left[\hat b_s(\bm{p})u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}+\hat d_s^\dagger(\bm{p})v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}\right]
$$

Dirac 共轭场为：

$$
\bar\psi(y)=\sum_s\int\frac{\mathrm{d}^3q}{(2\pi)^3\sqrt{2E_{\bm{q}}}}\left[\hat b_s^\dagger(\bm{q})\bar u_s(q)\mathrm{e}^{+\mathrm{i}q\cdot y}+\hat d_s(\bm{q})\bar v_s(q)\mathrm{e}^{-\mathrm{i}q\cdot y}\right]
$$

第一种真空二点函数定义为：

$$
S^+_{\alpha\beta}(z)=\langle0|\psi_\alpha(x)\bar\psi_\beta(y)|0\rangle
$$

右边的 $\bar\psi(y)$ 先作用在真空上。
其中 $\hat d$ 湮灭真空，只有 $\hat b^\dagger$ 能够产生一个粒子。
左边的 $\psi(x)$ 随后必须用 $\hat b$ 湮灭同一个粒子，才能重新得到真空。

因此只有如下模算符矩阵元非零：

$$
\langle0|\hat b_s(\bm{p})\hat b_r^\dagger(\bm{q})|0\rangle=(2\pi)^3\delta_{sr}\delta^{(3)}(\bm{p}-\bm{q})
$$

完成 $\bm{q}$ 积分后：

$$
S^+_{\alpha\beta}(z)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}[u_s(p)\bar u_s(p)]_{\alpha\beta}\mathrm{e}^{-\mathrm{i}p\cdot z}
$$

使用正频率旋量的完备关系：

$$
\sum_su_s(p)\bar u_s(p)=\slashed p+m
$$

得到：

$$
S^+_{\alpha\beta}(z)=\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}(\slashed p+m)_{\alpha\beta}\mathrm{e}^{-\mathrm{i}p\cdot z}
$$

第二种真空二点函数交换两个场的次序：

$$
S^-_{\alpha\beta}(z)=\langle0|\bar\psi_\beta(y)\psi_\alpha(x)|0\rangle
$$

这次右边的 $\psi(x)$ 必须通过 $\hat d^\dagger$ 产生一个反粒子，左边的 $\bar\psi(y)$ 再通过 $\hat d$ 将它湮灭。
所以：

$$
S^-_{\alpha\beta}(z)=\sum_s\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}[v_s(p)\bar v_s(p)]_{\alpha\beta}\mathrm{e}^{+\mathrm{i}p\cdot z}
$$

负频率旋量的完备关系为：

$$
\sum_sv_s(p)\bar v_s(p)=\slashed p-m
$$

因此：

$$
S^-_{\alpha\beta}(z)=\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}(\slashed p-m)_{\alpha\beta}\mathrm{e}^{+\mathrm{i}p\cdot z}
$$

$S^+$ 与 $S^-$ 都是 $4\times4$ 矩阵值分布。
第一个旋量指标来自 $\psi_\alpha(x)$，第二个旋量指标来自 $\bar\psi_\beta(y)$。
它们不是洛伦兹标量；在洛伦兹变换下，矩阵的左侧和右侧分别按照旋量表示与其逆表示变换。

具体地说，若 $z'=\Lambda z$，那么：

$$
S^\pm(z')=S(\Lambda)S^\pm(z)S^{-1}(\Lambda)
$$

这种左右同时变换的对象可以理解为从一个旋量空间映射到另一个旋量空间的线性算符核。


---
## Dirac 反对易函数怎样由标量分布生成


先引入与 014–016 完全相同的两个标量质量壳积分：

$$
D^+(z)=\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}\mathrm{e}^{-\mathrm{i}p\cdot z}
$$

以及：

$$
D^-(z)=\int\frac{\mathrm{d}^3p}{(2\pi)^3 2E_{\bm{p}}}\mathrm{e}^{+\mathrm{i}p\cdot z}
$$

把 $\mathrm{i}\slashed\partial_z+m$ 作用在第一种标量二点函数上。
由于：

$$
\mathrm{i}\partial_{z^\mu}\mathrm{e}^{-\mathrm{i}p\cdot z}=p_\mu\mathrm{e}^{-\mathrm{i}p\cdot z}
$$

所以：

$$
S^+(z)=(\mathrm{i}\slashed\partial_z+m)D^+(z)
$$

对正指数则有：

$$
\mathrm{i}\partial_{z^\mu}\mathrm{e}^{+\mathrm{i}p\cdot z}=-p_\mu\mathrm{e}^{+\mathrm{i}p\cdot z}
$$

因此：

$$
(\mathrm{i}\slashed\partial_z+m)D^-(z)=-S^-(z)
$$

也就是：

$$
S^-(z)=-(\mathrm{i}\slashed\partial_z+m)D^-(z)
$$

现在计算任意两个时空点上的场反对易函数：

$$
C_{\alpha\beta}(z)=\{\psi_\alpha(x),\bar\psi_\beta(y)\}_+
$$

把场展开代入后，粒子模给出 $S^+$，反粒子模因为使用反对易子而以同号加入 $S^-$：

$$
C(z)=S^+(z)+S^-(z)
$$

利用刚才的微分表示：

$$
C(z)=(\mathrm{i}\slashed\partial_z+m)[D^+(z)-D^-(z)]
$$

标量场对易函数在 014 中定义为：

$$
D^+(z)-D^-(z)=\mathrm{i}\Delta(z)
$$

其中 $\Delta(z)$ 是泡利–若尔当分布。
于是 Dirac 场反对易函数具有紧凑形式：

$$
\{\psi_\alpha(x),\bar\psi_\beta(y)\}_+=[(\mathrm{i}\slashed\partial_z+m)\mathrm{i}\Delta(z)]_{\alpha\beta}
$$

这个关系非常重要。
它说明自旋为 $\frac{1}{2}$ 的因果传播结构并不是一套与标量场无关的新结构，而是在相同质量壳分布上作用一阶 Dirac 算符得到的矩阵值结构。

另外两种场反对易子在任意时空点都为零：

$$
\{\psi_\alpha(x),\psi_\beta(y)\}_+=0
$$

以及：

$$
\{\bar\psi_\alpha(x),\bar\psi_\beta(y)\}_+=0
$$

这是因为两个 $\psi$ 的模展开只能产生 $\{\hat b,\hat b\}_+$、$\{\hat d^\dagger,\hat d^\dagger\}_+$ 或粒子—反粒子交叉反对易子，而它们全部为零。

现在检查等时极限。
在 $z^0=0$ 时，标量场对易函数满足：

$$
D^+(0,\bm{z})-D^-(0,\bm{z})=0
$$

所以质量项和空间导数项都消失。
时间导数的跳跃为：

$$
\partial_{z^0}[D^+(z)-D^-(z)]_{z^0=0}=-\mathrm{i}\delta^{(3)}(\bm{z})
$$

因此：

$$
C(0,\bm{z})=\gamma^0\delta^{(3)}(\bm{z})
$$

恢复旋量指标后：

$$
\{\psi_\alpha(t,\bm{x}),\bar\psi_\beta(t,\bm{y})\}_+=(\gamma^0)_{\alpha\beta}\delta^{(3)}(\bm{x}-\bm{y})
$$

这正是 021 中的基本等时反对易关系。
所以任意时空点的反对易函数是等时正则数据经过自由 Dirac 方程演化后的唯一结果。


---
## 类空间隔、局域可观测量与费米微观因果性


若 $z^2=(x-y)^2<0$，两个事件具有类空间隔。
标量泡利–若尔当分布在整个类空区域 $z^2<0$ 内为零：

$$
\Delta(z)=0
$$

类空条件 $z^2<0$ 定义的是一个开区域。
一个分布在这个开区域中为零时，它在该区域中的所有分布导数也为零。
因此在 $z^2<0$ 时：

$$
(\mathrm{i}\slashed\partial_z+m)\Delta(z)=0
$$

于是当 $(x-y)^2<0$ 时，得到费米场的微观因果条件：

$$
\{\psi_\alpha(x),\bar\psi_\beta(y)\}_+=0
$$

这里使用的是反对易子而不是对易子。
这并不表示两个类空分离的可观测量反对易；基本费米场本身是格拉斯曼奇对象，不直接作为普通玻色型测量仪器的读数。

局域物理可观测量由偶数个费米场组成，例如电流：

$$
j^\mu(x)=\bar\psi(x)\gamma^\mu\psi(x)
$$

再例如标量密度：

$$
\rho_s(x)=\bar\psi(x)\psi(x)
$$

设 $A(x)$ 与 $B(y)$ 都是由两个费米场构成的局域双线性量。
当 $x-y$ 为类空间隔时，把 $A(x)$ 的两个奇场依次移动到 $B(y)$ 的两个奇场右侧，总共需要四次交换。
每次交换产生一个负号，四个负号的乘积为正，所以：

$$
A(x)B(y)=B(y)A(x)
$$

也就是在 $(x-y)^2<0$ 时：

$$
[A(x),B(y)]=0
$$

因此真正的局域可观测量仍然在类空间隔下对易。
这保证对类空分离的两个实验操作，改变它们的执行次序不会改变可观测预测，也就不能利用量子场发送超光速信号。

反对易函数的支集位于光锥内部及光锥表面。
“支集”是分布可能不为零的区域；说支集受限于光锥，就是说类空区域完全不包含这个分布的物理响应。

与标量场一样，单个怀特曼函数 $S^+(z)$ 或 $S^-(z)$ 在类空间隔下一般不为零。
因果性来自两种频率分支在反对易函数中的特定组合，而不是来自每一种真空关联分别消失。
下一篇的 Feynman 传播子在类空间隔下也一般不为零，但这同样不违反微观因果性。

下一篇将用费米时间序把 $S^+$ 与 $S^-$ 拼接起来，并直接证明时间序传播子是 Dirac 微分算符的格林函数。
