---
title: "QM2 Lindbladian量子动力学系统"
date: 2024-10-12T08:06:00-05:00
categories:
  - QM2
---
在这篇文章里, 我们来讨论开放量子系统的一些特性.
系统包含系统部分 $$H_S$$、环境(热浴)部分 $$H_B$$, 以及相互作用项 $$H_{SB}$$:
$$
\begin{equation}
  H(t) = H_S + H_B + \alpha H_{SB}
\end{equation}
$$

整体(系统 + 环境)的动力学由密度矩阵 $$\rho_{SB}$$ 描述, 满足:
$$
\begin{equation}
  \dv{}{t} \rho_{SB} = -\frac{i}{\hbar} \left[H_S + H_B + \alpha H_{SB}, \rho_{SB}\right]
\end{equation}
$$

在相互作用绘景里, Hamiltonian 的演化是:
$$
\begin{equation}
  H(t) = \exp\left(\frac{i}{\hbar}(H_S + H_B)t\right) H_{SB} \exp\left(-\frac{i}{\hbar}(H_S + H_B)t\right)
\end{equation}
$$

密度矩阵也相应变换为:
$$
\begin{equation}
  \rho(t) = \exp\left(\frac{i}{\hbar}(H_S + H_B)t\right) \rho_{SB}(t) \exp\left(-\frac{i}{\hbar}(H_S + H_B)t\right)
\end{equation}
$$

于是得到新的方程:
$$
\begin{equation}
  \dv{}{t} \rho = -\frac{i}{\hbar} \alpha \left[H(t), \rho(t)\right]
\end{equation}
$$

因为我们只关心系统的演化, 所以对环境做偏迹:$$\rho_S = \Tr_B(\rho_{SB})$$.
第一步, 回到相互作用绘景下 $$\rho_{SB}$$ 的表达(它是上式中 $$\rho$$ 的逆变换):
$$
\begin{equation}
  \rho_{SB} = \exp\left(-\frac{i}{\hbar}(H_S+H_B)t\right) \rho_{SB}(t) \exp\left(\frac{i}{\hbar}(H_S+H_B)t\right)
\end{equation}
$$

我们的套路是:
1. 在相互作用绘景下解方程；
2. 求出 $$\rho_{SB}$$；
3. 做偏迹得到系统态.

为了解动力学方程, 我们用迭代(积分)形式:
$$
\begin{equation}
  \dv{\rho}{t} = \rho(0) - \frac{i}{\hbar} \alpha \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}
\end{equation}
$$

于是原方程变成:
$$
\begin{equation}
\begin{aligned}
  \dv{\rho}{t} =& -\frac{i}{\hbar} \alpha \left[H(t), \rho(0)\right] \\
  & - \frac{1}{\hbar^2} \alpha^2 \left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{aligned}
\end{equation}
$$

接着, 我们对环境做偏迹:
$$
\begin{equation}
\begin{aligned}
  \dv{\rho_S}{t} =& -\frac{i}{\hbar} \alpha \Tr_B\left[H(t), \rho(0)\right] \\
  &- \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{aligned}
\end{equation}
$$

> $$H_{SB}$$ 可以直接想办法给他定义成使得右边第一项为 0的那种形式.

于是得到:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{equation}
$$

现在做时间积分:
$$
\begin{equation}
  \rho_S(t) - \rho_S(t') = -\frac{1}{\hbar^2} \alpha^2 \int_t^{t'} \Tr_B\left[H(t'), \int_0^{t'} \left[H(t''), \rho(t'')\right] \dd{t''}\right] \dd{t'}
\end{equation}
$$

> 这意味着 $$\rho(t'')$$ 与 $$\rho(t)$$ 非常接近, 于是可以用 $$\rho(t)$$ 来近似 $$\rho(t')$$.

因此有:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t)\right] \dd{t'}\right]
\end{equation}
$$

令 $$\alpha = 1$$, 方程化简为:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t)\right] \dd{t'}\right]
\end{equation}
$$

> 接下来, 假设 $$\rho(t) = \rho_S(t) \otimes \rho_B(t)$$.

方程变为:
$$
\begin{equation}
  \dv{\rho_S}{t} = -\frac{1}{\hbar^2} \Tr_B\left[H(t), \int_0^\infty \left[H(t'), \rho_S(t)\rho_B(t)\right] \dd{t'}\right]
\end{equation}
$$

> 这就是著名的 Born-Markov 方程.

现在考虑一个具体的系统-热浴相互作用模型:
$$
\begin{equation}
  H_{SB} = \hbar\left(SB^\dagger + S^\dagger B\right)
\end{equation}
$$
其中 $$S$$ 作用在系统上, $$B$$ 作用在环境上.
> 假设 $$S$$ 与时间无关:

$$
\begin{equation}
  \left[S, H_S\right] = 0
\end{equation}
$$

环境取为Boson heat bath, 现在Hamiltonian写为:
$$
\begin{equation}
  H_B = \hbar \sum_{k} \omega_{k} \hat{a}_{k}^\dagger \hat{a}_{k}
\end{equation}
$$

定义:
$$
\begin{equation}
  B = \sum_{k} g_{k}^* \hat{a}_{k}
\end{equation}
$$

其中 $$g_{k}^*$$ 是耦合常数.
在相互作用绘景中, $$B(t)$$ 的演化为:
$$
\begin{equation}
\begin{aligned}
  B(t) &= \exp\left(\frac{i}{\hbar} H_B t\right) B \exp\left(-\frac{i}{\hbar} H_B t\right) \\
  &= \sum_{k} g_{k}^* \hat{a}_{k} \exp\left(-i \omega_{k} t\right)
\end{aligned}
\end{equation}
$$

要得到最后一步需要做一些运算, 这是理解时间演化的不错练习.

接下来要计算一串对易子.**在这个模型里, 我们假设 $$S$$ 与时间无关**:
$$
\begin{equation}
  [H(t), [H(t'), \rho_B(t) \rho_S(t)]] = \hbar [S B^\dagger + S^\dagger B, [H(t'), \rho_B(t) \rho_S(t)]]
\end{equation}
$$

跳过冗长的代数, 得到:
$$
\begin{equation}
\begin{aligned}
  & [S B^\dagger(t), [H(t'), \rho_B(t) \rho_S(t)]] \\
  =& + \hbar S S \rho_S(t) B^\dagger(t) B^\dagger(t') \rho_B + \hbar S S^\dagger \rho_S(t) B^\dagger(t) B(t') \rho_B \\
  & - \hbar S \rho_S(t) S B^\dagger(t) \rho_B B^\dagger - \hbar S \rho_S(t) S^\dagger B^\dagger(t) \rho_B B(t') \\
  & - \hbar S \rho_S(t) S B^\dagger(t') \rho_B B^\dagger(t) - \hbar S^\dagger \rho_S(t) S B(t') \rho_B B^\dagger(t) \\
