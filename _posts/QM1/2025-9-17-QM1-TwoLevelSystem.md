---
title: "QM1 双能级系统"
date: 2025-Sep-17 06:40
categories:
  - QM1
---
在量子力学中, 双能级系统是指只有两个量子态的系统. 这种系统在量子计算, 核磁共振(NMR), 量子光学等领域有广泛应用. 双能级系统的哈密顿量通常可以表示为2x2矩阵, 其形式为:

$$
\begin{equation}
H = \mqty[ E_1 & V \\ V^* & E_2 ]
\end{equation}
$$

其中, $E_1$和$E_2$是两个能级的能量, $V$是两个能级之间的耦合强度.
迅速熟悉双能级系统可以为很多计算提供便利.
首先我们能一下子就写出来他的能级:

$$
\begin{align}
E_+ = \frac{E_1 + E_2}{2} + \sqrt{\left(\frac{E_1 - E_2}{2}\right)^2 + |V|^2} \\
E_- = \frac{E_1 + E_2}{2} - \sqrt{\left(\frac{E_1 - E_2}{2}\right)^2 + |V|^2}
\end{align}
$$

我们做如下的符号约定:

$$
\begin{equation}
  \tilde{E} = \frac{E_1 + E_2}{2}, \quad \delta = \frac{E_1 - E_2}{2}, \quad \Delta = \sqrt{\delta^2 + |V|^2}
\end{equation}
$$

所以:

$$
\begin{equation}
E_+ = \tilde{E} + \Delta, \quad E_- = \tilde{E} - \Delta
\end{equation}
$$

---

## 无效的推导

现在我们来尝试求本征态

$$
\begin{equation}
\mqty[ E_1 - E_+ & V \\ V^* & E_2 - E_+ ] \mqty[ a \\ b ] = 0
\end{equation}
$$

我们解出来$$b$$:

$$
\begin{equation}
b = -\frac{E_1 - E_+}{V} a = \frac{E_+ - E_1}{V} a
\end{equation}
$$

归一化:

$$
\begin{equation}
|a|^2 + |b|^2 = |a|^2 + \left|\frac{E_+ - E_1}{V} a\right|^2 = 1
\end{equation}
$$

能解出来$$a$$:

$$
\begin{equation}
|a| = \frac{1}{\sqrt{1 + \left|\frac{E_+ - E_1}{V}\right|^2}} = \frac{|V|}{\sqrt{|V|^2 + |E_+ - E_1|^2}}
\end{equation}
$$

从而我们有本征态:

$$
\begin{align}
\ket{+} =& \frac{1}{\sqrt{|V|^2 + |E_+ - E_1|^2}} \mqty[ V \\ E_+ - E_1 ] \\
\ket{-} =& \frac{1}{\sqrt{|V|^2 + |E_- - E_1|^2}} \mqty[ V \\ E_- - E_1 ]
\end{align}
$$

这是机会没什么帮助的, 我们用的更多的形式如下.

---

## 有效的推导

我们可以把哈密顿量写成如下形式:

$$
\begin{equation}
H = \mqty[ E_1 & |V| \mathrm{e}^{\mathrm{i}\phi} \\ |V| \mathrm{e}^{-\mathrm{i}\phi} & E_2 ]
\end{equation}
$$

其中$$\phi$$的角度没要求.
我们定义一个混合角, 描述了耦合强度和能级差的关系:

$$
\begin{equation}
\tan 2\theta = \frac{|V|}{E_1 - E_2} = \frac{|V|}{\delta}
\end{equation}
$$

一下子就能看出来:

$$
\begin{equation}
\sin 2\theta = \frac{|V|}{\Delta}, \quad \cos 2\theta = \frac{\delta}{\Delta}
\end{equation}
$$

利用三角恒等式:

$$
\begin{align}
\cos \theta =& \sqrt{\frac{1 + \cos 2\theta}{2}} = \sqrt{\frac{\Delta + \delta}{2\Delta}} \\
\sin \theta =& \sqrt{\frac{1 - \cos 2\theta}{2}} = \sqrt{\frac{\Delta - \delta}{2\Delta}}
\end{align}
$$

现在我们提升一下之前的推导:

$$
\begin{align}
\ket{+} = \frac{1}{\sqrt{|V|^2 + |E_+ - E_1|^2}} \mqty[ V \\ E_+ - E_1 ]
\end{align}
$$

就看上面的那个分量:

$$
\begin{align}
& \frac{|V| \mathrm{e}^{\mathrm{i}\phi}}{\sqrt{|V|^2 + |E_+ - E_1|^2}} = \mathrm{e}^{\mathrm{i}\phi} \frac{1}{\sqrt{1 + \left(\frac{E_+ - E_1}{|V|}\right)^2}}\\
=& \mathrm{e}^{\mathrm{i}\phi} \frac{1}{\sqrt{1 + \left(\frac{\Delta-\delta}{|V|}\right)^2}} = \mathrm{e}^{\mathrm{i}\phi} \frac{1}{\sqrt{1 + \frac{\Delta^2 - 2\Delta\delta + \delta^2}{\Delta^2 - \delta^2}}}\\
=& \mathrm{e}^{\mathrm{i}\phi} \frac{\sqrt{(\Delta+\delta)(\Delta-\delta)}}{\sqrt{2\Delta(\Delta-\delta)}} = \mathrm{e}^{\mathrm{i}\phi} \sqrt{\frac{\Delta+\delta}{2\Delta}}\\
=& \mathrm{e}^{\mathrm{i}\phi} \cos \theta
\end{align}
$$

这样就好记很多了!
类似地, 我们可以得到:

$$
\begin{align}
& E_+ = \tilde{E} + \Delta \quad \ket{+} = \mqty[ \mathrm{e}^{\mathrm{i}\phi} \cos \theta \\ \sin \theta ] \\
& E_- = \tilde{E} - \Delta \quad \ket{-} = \mqty[ -\mathrm{e}^{\mathrm{i}\phi} \sin \theta \\ \cos \theta ]
\end{align}
$$


---

## 例子

我们做一个口算检查, 如果考虑如下的Hamiltonin:

$$
\begin{equation}
H = g \mu_{\text{B}} \boldsymbol{B} \cdot \boldsymbol{\sigma} = g \mu_{\text{B}} (B_x \sigma_x + B_y \sigma_y + B_z \sigma_z)
\end{equation}
$$

写成矩阵形式:

$$
\begin{equation}
H = g \mu_{\text{B}} \mqty[ B_z & B_x - \mathrm{i} B_y \\ B_x + \mathrm{i} B_y & -B_z ]
\end{equation}
$$

立刻写出能级:

$$
\begin{align}
E_+ = + g \mu_{\text{B}} \sqrt{B_x^2 + B_y^2 + B_z^2} \\
E_- = - g \mu_{\text{B}} \sqrt{B_x^2 + B_y^2 + B_z^2}
\end{align}
$$

