---
title: "QM1 角动量与中心势"
date: 2025-10-5

categories:
  - QM1
---

量子力学自然是应该有经典力学推广来的角动量的.
在经典力学中, 角动量定义为:

$$
\begin{equation}
\boldsymbol{L} = \boldsymbol{r} \times \boldsymbol{p}
\end{equation}
$$

他的分量形式为:

$$
\begin{align}
L_x = y p_z - z p_y \\
L_y = z p_x - x p_z \\
L_z = x p_y - y p_x
\end{align}
$$

每一个位置算符算符都没有和动量算符产生对易的问题, 所以, 直接把上面的式子量子化就可以了, 我们不特意加箭头区分了.
在量子力学里, 角动量肯定要继承经典力学的性质, 经典力学中, 角动量算符是体系旋转不变下的守恒量.
翻译到量子力学里, 角动量算符如何和哈密顿量对易, 也就是:

$$
\begin{equation}
[L_i, H] = 0
\end{equation}
$$

我们就知道目前的哈密顿量是旋转不变的.


另外, 就想动量是波函数平移的生成元一样, 角动量是波函数旋转的生成元, 我们就挑选沿着z轴旋转, 那么我们的波函数$$\phi$$应该会增长一个相位:

$$
\begin{equation}
U(\alpha;\mathrm{z}) \psi(\boldsymbol{r}, \theta, \phi) = \psi(\boldsymbol{r}, \theta, \phi + \boldsymbol{\alpha})
\end{equation}
$$


仿照动量的写法, 我们立刻获得:

$$
\begin{equation}
U(\alpha;\mathrm{z}) = \exp\left(-\frac{\mathrm{i}}{\hbar} \alpha L_z\right)
\end{equation}
$$

我们来检查一下他们的对易关系:

$$
\begin{align}
[L_x, L_y] =& [y p_z - z p_y, z p_x - x p_z] \\
=& y p_z z p_x - y p_z x p_z - z p_y z p_x + z p_y x p_z \\
& - z p_x y p_z + x p_z y p_z + z p_x z p_y - x p_z z p_y \\
=& y [p_z, z] p_x - z [p_y, x] p_z \\
=& i \hbar (y p_x - x p_y) \\
=& i \hbar L_z
\end{align}
$$

检查其他的, 结果也类似:

$$
\begin{equation}
[L_y, L_z] = i \hbar L_x, \quad [L_z, L_x] = i \hbar L_y
\end{equation}
$$

从而总结出来:

$$
\begin{equation}
[L_i, L_j] = i \hbar \epsilon_{ijk} L_k
\end{equation}
$$

我们还可以考虑角动量的平方:

$$
\begin{equation}
L^2 = L_x^2 + L_y^2 + L_z^2
\end{equation}
$$

可以试试如下的计算:

$$
\begin{equation}
[L^2, L_i] = 0 
\end{equation}
$$

这有什么深刻含义吗?


---
## 中心势场

我们从定态Schrödinger方程出发:

$$
\begin{equation}
H = -\frac{\hbar^2}{2m} \nabla^2 + V(r)
\end{equation}
$$

由于势能只和距离有关, 所以, 哈密顿量是旋转不变的.
三维的Laplace算符是:

$$
\begin{equation}
\nabla^2 = \frac{1}{r^2} \pdv{}{r}\left(r^2 \pdv{r}\right) + \frac{1}{r^2 \sin\theta} \pdv{}{\theta}\left(\sin\theta \pdv{}{\theta}\right) + \frac{1}{r^2 \sin^2\theta} \pdv[2]{}{\phi}
\end{equation}
$$

从而我们要解决的本征值问题是:

$$
\begin{equation}
\left[-\frac{\hbar^2}{2m} \left( \frac{1}{r^2} \pdv{}{r}\left(r^2 \pdv{r}\right) + \frac{1}{r^2 \sin\theta} \pdv{}{\theta}\left(\sin\theta \pdv{}{\theta}\right) + \frac{1}{r^2 \sin^2\theta} \pdv[2]{}{\phi} \right) + V(r) \right] \psi = E \psi
\end{equation}
$$

我们还是得熟悉一下角动量算符在球坐标下的形式:

$$
\begin{equation}
r = \sqrt{x^2 + y^2 + z^2}, \quad \theta = \arccos\frac{z}{r}, \quad \phi = \arctan\frac{y}{x}
\end{equation}
$$

所以我们有:

$$
\begin{equation}
x = r \sin\theta \cos\phi, \quad y = r \sin\theta \sin\phi, \quad z = r \cos\theta
\end{equation}
$$

然后就是各种求导:

$$
\begin{align}
\pdv{}{x} =& \pdv{r}{x} \pdv{}{r} + \pdv{\theta}{x} \pdv{}{\theta} + \pdv{\phi}{x} \pdv{}{\phi} \\
=& \sin\theta \cos\phi \pdv{}{r} + \frac{\cos\theta \cos\phi}{r} \pdv{}{\theta} - \frac{\sin\phi}{r \sin\theta} \pdv{}{\phi}
\end{align}
$$

$$
\begin{align}
\pdv{}{y} =& \pdv{r}{y} \pdv{}{r} + \pdv{\theta}{y} \pdv{}{\theta} + \pdv{\phi}{y} \pdv{}{\phi} \\
=& \sin\theta \sin\phi \pdv{}{r} + \frac{\cos\theta \sin\phi}{r} \pdv{}{\theta} + \frac{\cos\phi}{r \sin\theta} \pdv{}{\phi}
\end{align}
$$

$$
\begin{align}
\pdv{}{z} =& \pdv{r}{z} \pdv{}{r} + \pdv{\theta}{z} \pdv{}{\theta} + \pdv{\phi}{z} \pdv{}{\phi} \\
=& \cos\theta \pdv{}{r} - \frac{\sin\theta}{r} \pdv{}{\theta}
\end{align}
$$

从而我们可以做如下计算:

$$
\begin{equation}
L_z = \frac{\hbar}{\mathrm{i}} \left( x \pdv{}{y} - y \pdv{}{x} \right)
\end{equation}
$$

从而有:

$$
\begin{align}
x \pdv{}{y} =& r \sin\theta \cos\phi \left( \sin\theta \sin\phi \pdv{}{r} + \frac{\cos\theta \sin\phi}{r} \pdv{}{\theta} + \frac{\cos\phi}{r \sin\theta} \pdv{}{\phi} \right) \\
=& r \sin^2\theta \cos\phi \sin\phi \pdv{}{r} + \sin\theta \cos\phi \cos\theta \sin\phi \pdv{}{\theta} + \cos^2\phi \pdv{}{\phi}
\end{align}
$$

以及:

$$
\begin{align}
y \pdv{}{x} =& r \sin\theta \sin\phi \left( \sin\theta \cos\phi \pdv{}{r} + \frac{\cos\theta \cos\phi}{r} \pdv{}{\theta} - \frac{\sin\phi}{r \sin\theta} \pdv{}{\phi} \right) \\
=& r \sin^2\theta \sin\phi \cos\phi \pdv{}{r} + \sin\theta \sin\phi \cos\theta \cos\phi \pdv{}{\theta} - \sin^2\phi \pdv{}{\phi}
\end{align}
$$

所以我们有:

$$
\begin{equation}
x \pdv{}{y} - y \pdv{}{x} = (\cos^2\phi + \sin^2\phi) \pdv{}{\phi} = \pdv{}{\phi}
\end{equation}
$$

这样就简单了!
从而我们的$$L_z$$有:

$$
\begin{equation}
L_z = \frac{\hbar}{\mathrm{i}} \pdv{}{\phi}
\end{equation}
$$

用类似的方法, 我们有:

$$
\begin{equation}
L_+ = \hbar \mathrm{e}^{\mathrm{i}\phi} \left( \pdv{}{\theta} + \mathrm{i} \cot\theta \pdv{}{\phi} \right)
\end{equation}
$$

$$
\begin{equation}
L_- = -\hbar \mathrm{e}^{-\mathrm{i}\phi} \left( \pdv{}{\theta} - \mathrm{i} \cot\theta \pdv{}{\phi} \right)
\end{equation}
$$

从而我们可以考虑如下的计算:

$$
\begin{equation}
L^2 = L_- L_+ + L_z + L_z^2 = -\hbar^2 \left[ \frac{1}{\sin\theta} \pdv{}{\theta} \left( \sin\theta \pdv{}{\theta} \right) + \frac{1}{\sin^2\theta} \pdv[2]{}{\phi} \right]
\end{equation}
$$

这样我们就能做一个简单验算:

$$
\begin{equation}
U(\alpha; \mathrm{z}) = \exp\left(-\frac{\mathrm{i}}{\hbar} \alpha L_z\right) = \exp\left(-\alpha \pdv{}{\phi}\right)
\end{equation}
$$

我们有:

$$
\begin{equation}
U(\alpha; \mathrm{z}) \psi(r, \theta, \phi) = \psi(r, \theta, \phi - \alpha)
\end{equation}
$$