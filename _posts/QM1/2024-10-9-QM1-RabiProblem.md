---
title: "QM1 Rabi问题"
date: 2024-10-09T08:06:00-05:00
categories:
  - QM1
---
在这篇文章里, 我们要讨论 **Rabi 振荡**, 先从一个最简单的二能级系统开始, 这个系统的 Hamiltonian 是这样的: 

$$
\begin{equation}
  H = \mqty[E_1 & W_{1,2} \\ W_{2,1} & E_2]
\end{equation}
$$

> 第一能级的能量是 $$E_1$$, 第二能级的能量是 $$E_2$$.中间的耦合项 $$W_{1,2}$$ 会让两个能级混合, 所以我们叫它 **coupling**.

> 注意, 这个 $$H$$ 是在 $$(1,0)$$ 和 $$(0,1)$$ 这组基下写的, 我们把它们叫做 $$\ket{+}$$ 和 $$\ket{-}$$.

接下来我们先算一下这个二能级系统的本征值, 很简单: 

$$
\begin{align}
  E_\pm = \frac{\Tr(H) \pm \sqrt{(\Tr(H))^2-4 \det(H)}}{2}
\end{align}
$$
算出来就是

$$
\begin{equation}
  E_{ \pm}=\frac{1}{2}\left[E_1+E_2 \pm \sqrt{\left(E_1-E_2\right)^2+4\norm{W_{12}}^2}\right]
\end{equation}
$$

接着我们定义几个量: 

$$
\begin{equation}
  \tan \theta=\frac{2\norm{W_{12}}}{E_1-E_2} \quad e^{i \phi}=\frac{W_{21}}{2\norm{W_{12}}}
\end{equation}
$$

那么本征态可以写成: 

$$
\begin{align}
  & E_+ \, \text{and} \,  \boldsymbol{v}_+ = (\cos\theta/2, e^{i\phi}\sin\theta/2)^T \\
  & E_- \, \text{and} \, \boldsymbol{v}_- = (\sin\theta/2, -e^{i\phi}\cos\theta/2)^T
\end{align}
$$

原来的基矢也可以用这两个本征态表示成: 

$$
\begin{align}
  \ket{+} =& \cos \frac{\theta}{2}\left|v_{+}\right\rangle+\sin \frac{\theta}{2}\left|v_{-}\right\rangle \\
  \ket{-} =& \left(\sin \frac{\theta}{2}\left|v_{+}\right\rangle-\cos \frac{\theta}{2}\left|v_{-}\right\rangle\right) e^{-i \phi} \\
\end{align}
$$

先放这, 暂时不用.我们现在考虑一个一般的态, 用 $$\boldsymbol{v}$$ 基写出来: 

$$
\begin{equation}
  |\psi;t\rangle=c_{+} e^{-i E_{+} t / \hbar}\left|v_{+}\right\rangle+c_{-} e^{-i E_{-} t / \hbar}\left|v_{-}\right\rangle
\end{equation}
$$

假设系统一开始在 $$\ket{-}$$: 

$$
\begin{equation}
  |\psi;0\rangle=\left(\sin \frac{\theta}{2}\left|v_{+}\right\rangle-\cos \frac{\theta}{2}\left|v_{-}\right\rangle\right) e^{-i \phi}
\end{equation}
$$

因为在这个基下 $$H$$ 已经对角化, 所以时间演化很方便: 

$$
\begin{equation}
  |\psi(t)\rangle=\left(\sin \frac{\theta}{2} e^{-i E_{+} t / \hbar}\left|v_{+}\right\rangle-\cos \frac{\theta}{2} e^{-i E_{-} t / \hbar}\left|v_{-}\right\rangle\right) e^{-i \phi}
\end{equation}
$$

那我们来问: 系统在 $$\ket{-}$$ 态时, 出现在 $$\ket{+}$$ 的概率振幅是多少?

$$
\begin{equation}
  \braket{+}{\psi;t}=\sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{-i \phi}\left(e^{-i E_{+} t / \hbar}-e^{-i E_{-} t / \hbar}\right)
\end{equation}
$$

> 所以, 如果一开始在 $$\ket{-}$$, 系统出现在 $$\ket{+}$$ 的概率就是下面这个: 

$$
\begin{equation}
  P(\ket{-} \to \ket{+})=\sin ^2 \theta \sin ^2\left(\frac{E_{+}-E_{-}}{2 \hbar} t\right)
\end{equation}
$$

把它用原始矩阵元写出来: 

$$
\begin{equation}
  \frac{4\norm{W_{1,2}}^2}{4\norm{W_{1,2}}^2+\left(E_1-E_2\right)^2} \sin ^2\left(\frac{t}{2 \hbar} \sqrt{\left(E_1-E_2\right)^2+4\norm{W_{1,2}}^2}\right)
\end{equation}
$$

---

现在我们把它用在一个磁场问题上: 考虑一个 **自旋-1/2 粒子** 在磁场中.磁场分成静态的部分 $$\boldsymbol{B}$$ 和一个随时间变化的部分 $$\boldsymbol{B_1}(t)$$.Hamiltonian 写成: 

$$
\begin{equation}
  H=-\gamma \boldsymbol{S} \cdot\left(\boldsymbol{B}_0+\boldsymbol{B}_1(t)\right)
\end{equation}
$$

静态场取成: 

$$
\begin{equation}
  \boldsymbol{B}_0 = -\frac{\omega_0}{\gamma} \hat{z}
\end{equation}
$$

而随时间变化的场是: 

$$
\begin{equation}
  \boldsymbol{B}_1(t)=-\left(\omega_1 / \gamma\right)(\cos (\omega t) \hat{x}+\sin (\omega t) \hat{y})
\end{equation}
$$

那么矩阵形式就是: 

$$
\begin{equation}
  H = \frac{\hbar}{2} \mqty[ \omega_0 & \omega_1 e^{-i\omega t} \\ \omega_1 e^{i\omega t} & - \omega_0]
\end{equation}
$$

随便取一个初态: 

$$
\begin{equation}
  |\psi(t)\rangle=c_{+}(t)|+\rangle+c_{-}(t)|-\rangle
\end{equation}
$$

它的演化满足 Schrödinger 方程: 

$$
\begin{equation}
  i\hbar \dv{}{t} \mqty[ c_+ \\ c_-] = \frac{\hbar}{2} \mqty[ \omega_0 & \omega_1 e^{-i\omega t} \\ \omega_1 e^{i\omega t} & - \omega_0] \mqty[c_+ \\ c_-]
\end{equation}
$$

看上去不太好解.
我们可以做个变换: 

$$
\begin{equation}
  c_{+}(t)=e^{-i \omega t / 2} \alpha_{+}(t) \quad c_{-}(t)=e^{i \omega t / 2} \alpha_{-}(t)
\end{equation}
$$

代进去以后变成: 

$$
\begin{equation}
  i\hbar \dv{}{t} \mqty[\alpha_+ \\ \alpha_-] = \frac{\hbar}{2} \mqty[\omega_0 - \omega & \omega_1 \\ \omega_1 & -(\omega_0-\omega)] \mqty[\alpha_+ \\ \alpha_-]
\end{equation}
$$

相当于一个新的 Hamiltonian: 

$$
\begin{equation}
  \tilde{H} = \frac{\hbar}{2} \mqty[\omega_0 - \omega & \omega_1 \\ \omega_1 & -(\omega_0-\omega)]
\end{equation}
$$

那我们暂时不管原问题了, 就直接看这个新矩阵和 $$\alpha$$ 的动力学.其实它正好对应前面我们推过的二能级系统: 

$$
\begin{align}
  & E_1 \to \frac{\hbar}{2}\left(\omega_0-\omega\right) \\
  & E_2 \rightarrow-\frac{\hbar}{2}\left(\omega_0-\omega\right) \\
  & W_{21} \rightarrow \frac{\hbar}{2} \omega_1
\end{align}
$$

好, 用这个小 trick, 我们要找的是: 一开始在 $$\ket{-}$$ 态, 经过时间 $$t$$ 之后在 $$\ket{+}$$ 态的概率.因为相位在算概率的时候会消掉, 所以只要解有效的 $$\tilde{H}$$ 就行了: 

$$
\begin{equation}
  \norm{\braket{+}{\psi;t}}^2 = \norm{c_+}^2 = \norm{\alpha_+}^2
\end{equation}
$$

最后得到的概率是: 

$$
\begin{equation}
  \frac{\omega_1^2}{\left(\omega-\omega_0\right)^2+\omega_1^2} \sin ^2\left(\frac{t}{2} \sqrt{\left(\omega-\omega_0\right)^2+\omega_1^2}\right)
\end{equation}
$$

这就是 Rabi 振荡公式!
