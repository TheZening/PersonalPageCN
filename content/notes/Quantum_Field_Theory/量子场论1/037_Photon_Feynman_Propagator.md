---
title: "光子传播子（二）：时间序、格林函数与动量空间"
date: 2026-08-19
weight: 37
---

上一篇得到四维势的两种怀特曼函数，它们都等于无质量标量二点函数乘以 $-\eta^{\mu\nu}$。
时间序传播子把两种场次序拼成一个洛伦兹协变分布，并为规范固定后的波动算符指定费曼边界条件。

本篇从时间序定义完整推导位置空间传播子，再计算阶跃函数产生的接触项。
最后把两个时间分支统一成四维动量积分，并解释传播子张量指标和“虚光子”语言的准确含义。


---
## 时间序怎样拼接两个四维势二点函数


对玻色场，时间序算符定义为：

$$
T\{A^\mu(x)A^\nu(y)\}=\theta(x^0-y^0)A^\mu(x)A^\nu(y)+\theta(y^0-x^0)A^\nu(y)A^\mu(x)
$$

定义费曼规范中的光子传播子：

$$
D_F^{\mu\nu}(x-y)=\langle0|T\{A^\mu(x)A^\nu(y)\}|0\rangle
$$

记 $z=x-y$，代入时间序定义：

$$
D_F^{\mu\nu}(z)=\theta(z^0)D^{+\mu\nu}(z)+\theta(-z^0)D^{-\mu\nu}(z)
$$

上一篇已经得到：

$$
D^{+\mu\nu}(z)=-\eta^{\mu\nu}D_0^+(z)
$$

以及：

$$
D^{-\mu\nu}(z)=-\eta^{\mu\nu}D_0^-(z)
$$

所以：

$$
D_F^{\mu\nu}(z)=-\eta^{\mu\nu}D_F^{(0)}(z)
$$

其中无质量标量费曼传播子为：

$$
D_F^{(0)}(z)=\theta(z^0)D_0^+(z)+\theta(-z^0)D_0^-(z)
$$

为了避免把两个时间分支挤在同一条长公式中，分别记：

$$
D_>(z)=\theta(z^0)\int\frac{\mathrm{d}^3k}{(2\pi)^3 2\omega_{\bm{k}}}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

以及：

$$
D_<(z)=\theta(-z^0)\int\frac{\mathrm{d}^3k}{(2\pi)^3 2\omega_{\bm{k}}}\mathrm{e}^{+\mathrm{i}k\cdot z}
$$

两个分支合起来就是：

$$
D_F^{\mu\nu}(z)=-\eta^{\mu\nu}[D_>(z)+D_<(z)]
$$

这里 $\omega_{\bm{k}}=|\bm{k}|$。
当 $z^0>0$ 时，右边的场先产生一个辅助一光子向量，左边的场再将其湮灭；当 $z^0<0$ 时，时间序交换两个场的次序。

“辅助一光子向量”提醒我们，中间完备和是在扩大状态空间中完成的。
时间型与纵向模参与形成协变张量 $-\eta^{\mu\nu}$，但这不表示它们是可以作为外部态探测到的物理光子。

传播子是复数值张量分布，不是仍在福克空间上作用的算符。
两个洛伦兹指标分别来自两个场插入点，因此它可以看作把 $y$ 点的四维源分量映射到 $x$ 点四维势响应的积分核。


---
## 接触项为什么带有相反于标量张量因子的符号


两种怀特曼函数在 $z\neq0$ 时都满足齐次波动方程：

$$
\Box D^{\pm\mu\nu}(z)=0
$$

但是时间序传播子含阶跃函数，对它求两次时间导数会在 $z^0=0$ 产生狄拉克分布。
先求一次导数：

$$
\partial_0D_F^{\mu\nu}=\delta(z^0)(D^{+\mu\nu}-D^{-\mu\nu})+\theta(z^0)\partial_0D^{+\mu\nu}+\theta(-z^0)\partial_0D^{-\mu\nu}
$$

等时场对易子为零，所以：

$$
D^{+\mu\nu}(0,\bm{z})-D^{-\mu\nu}(0,\bm{z})=0
$$

一次导数中的狄拉克项消失：

$$
\partial_0D_F^{\mu\nu}=\theta(z^0)\partial_0D^{+\mu\nu}+\theta(-z^0)\partial_0D^{-\mu\nu}
$$

再求一次时间导数：

$$
\partial_0^2D_F^{\mu\nu}=\delta(z^0)(\partial_0D^{+\mu\nu}-\partial_0D^{-\mu\nu})+\theta(z^0)\partial_0^2D^{+\mu\nu}+\theta(-z^0)\partial_0^2D^{-\mu\nu}
$$

空间导数不作用在阶跃函数上。
利用两个时间分支的齐次方程，只剩：

$$
\Box D_F^{\mu\nu}(z)=\delta(z^0)[\partial_0D^{+\mu\nu}(0,\bm{z})-\partial_0D^{-\mu\nu}(0,\bm{z})]
$$

势二点函数等于 $-\eta^{\mu\nu}$ 乘无质量标量二点函数，所以导数跳跃为：

$$
\partial_0D^{+\mu\nu}(0,\bm{z})-\partial_0D^{-\mu\nu}(0,\bm{z})=\mathrm{i}\eta^{\mu\nu}\delta^{(3)}(\bm{z})
$$

因此：

$$
\Box D_F^{\mu\nu}(z)=\mathrm{i}\eta^{\mu\nu}\delta^{(4)}(z)
$$

这个号差可以直接与无质量标量传播子比较。
标量传播子满足：

$$
\Box D_F^{(0)}(z)=-\mathrm{i}\delta^{(4)}(z)
$$

再乘 $-\eta^{\mu\nu}$，正好得到光子传播子的接触项。

把规范固定后的二次作用量分部积分：

$$
S_0\simeq\frac{1}{2}\int\mathrm{d}^4x A_\mu\eta^{\mu\nu}\Box A_\nu
$$

相应动能算符为：

$$
K^{\mu\nu}=\eta^{\mu\nu}\Box
$$

传播子的格林函数方程可以写成：

$$
K_{\mu\rho}D_F^{\rho\nu}(x-y)=\mathrm{i}\delta_\mu^\nu\delta^{(4)}(x-y)
$$

所以传播子是动能算符带费曼边界条件的积分核逆，并额外带量子场论约定中的因子 $\mathrm{i}$。
不同教材可能把这一个 $\mathrm{i}$ 从传播子定义中提出去，比较公式时必须同时核对时间序定义和格林函数方程。


---
## 四维动量积分与极点处方


016 已经逐步证明无质量标量时间序函数的四维表示为：

$$
D_F^{(0)}(z)=\int\frac{\mathrm{d}^4k}{(2\pi)^4}\frac{\mathrm{i}}{k^2+\mathrm{i}\epsilon}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

因此费曼规范光子传播子为：

$$
D_F^{\mu\nu}(z)=\int\frac{\mathrm{d}^4k}{(2\pi)^4}\frac{-\mathrm{i}\eta^{\mu\nu}}{k^2+\mathrm{i}\epsilon}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

采用傅里叶变换约定：

$$
D_F^{\mu\nu}(z)=\int\frac{\mathrm{d}^4k}{(2\pi)^4}\widetilde D_F^{\mu\nu}(k)\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

动量空间传播子就是：

$$
\widetilde D_F^{\mu\nu}(k)=\frac{-\mathrm{i}\eta^{\mu\nu}}{k^2+\mathrm{i}\epsilon}
$$

分母的两个能量极点位于：

$$
k^0=|\bm{k}|-\mathrm{i}0^+
$$

以及：

$$
k^0=-|\bm{k}|+\mathrm{i}0^+
$$

当 $z^0>0$ 时在下半平面闭合，只取得正能极点；当 $z^0<0$ 时在上半平面闭合，只取得负能极点。
所以 $\mathrm{i}\epsilon$ 处方编码的仍是与标量场完全相同的费曼时间边界条件。

可以直接用动量表示复核格林函数方程。
由于：

$$
\Box\mathrm{e}^{-\mathrm{i}k\cdot z}=-k^2\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

得到：

$$
\Box D_F^{\mu\nu}(z)=\int\frac{\mathrm{d}^4k}{(2\pi)^4}\frac{\mathrm{i}\eta^{\mu\nu}k^2}{k^2+\mathrm{i}\epsilon}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

取 $\epsilon\to0^+$ 的分布极限：

$$
\Box D_F^{\mu\nu}(z)=\mathrm{i}\eta^{\mu\nu}\int\frac{\mathrm{d}^4k}{(2\pi)^4}\mathrm{e}^{-\mathrm{i}k\cdot z}
$$

于是恢复：

$$
\Box D_F^{\mu\nu}(z)=\mathrm{i}\eta^{\mu\nu}\delta^{(4)}(z)
$$

传播子在类空间隔一般不为零，这不违反微观因果性。
费曼传播子是时间序关联，不是纯推迟响应；真正控制类空间隔操作次序的是上一篇的场对易子。
如果要描述外源开启以后能够影响哪些事件，应使用由阶跃函数与场对易子构造的推迟格林函数；它在源事件的过去和光锥外严格为零。
所以费曼传播子回答“真空时间序关联怎样收缩”，推迟格林函数回答“经典或线性响应怎样因果传播”，两者不能只因分母同为 $k^2$ 就混为一谈。

内部动量积分中的 $k^\mu$ 一般离壳，即 $k^2\neq0$。
这并不表示某个可观测光子暂时违反无质量色散关系，也不表示顶点处能量可以短暂不守恒。
每个相互作用顶点仍严格守恒四动量，内部线只是完整时间序关联函数的傅里叶核，不是被制备和测量的渐近粒子态。

因此“虚光子从 $y$ 飞到 $x$”只能作为图示语言。
严格对象是：

$$
\langle0|T\{A^\mu(x)A^\nu(y)\}|0\rangle
$$

下一篇将离开特殊的费曼规范，直接对一般协变规范中的动能算符求逆。
这样可以看清 $-\eta^{\mu\nu}$ 为什么只是 $\xi=1$ 的特殊结果，以及规范参数怎样在与守恒流收缩后消失。
