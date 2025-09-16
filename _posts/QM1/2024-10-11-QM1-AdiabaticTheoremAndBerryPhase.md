---
title: "QM1 绝热定理与Berry相位"
date: 2024-10-11T08:06:00-05:00
categories:
  - QM1
---
在 1984 年, Berry指出量子力学中关于波函数的一个重要几何特征.
本文就来讨论这个特征.

---

### 绝热近似 (Adiabatic Approximation)

我们考虑一个依赖于向量参数 $$\boldsymbol{\zeta}(t)$$ 的 Hamiltonian, 参数在参数空间里走一条闭合回路.
Hamiltonian 写作:

$$
\begin{equation}
  \imath \hbar \dv{}{t}|\psi;t\rangle=\hat{H}[\boldsymbol{\zeta}(t)]|\psi;t\rangle
\end{equation}
$$

Hamiltonian 的本征方程是:

$$
\begin{equation}
  \hat{H}[\boldsymbol{\zeta}(t)]|n[\boldsymbol{\zeta}(t)]\rangle=E_n[\boldsymbol{\zeta}(t)]|n[\boldsymbol{\zeta}(t)]\rangle
\end{equation}
$$

其中 $$\ket{n[\boldsymbol{\zeta}(t)]}$$ 是瞬时本征态.
假设 $$t=0$$ 时系统的一般态是:

$$
\begin{equation}
  \ket{\psi;0} = \sum_n c_n(0) \ket{n[\boldsymbol{\zeta}(0)]}
\end{equation}
$$

时间演化写成:

$$
\begin{equation}
  \ket{\psi;t} = \sum_{n} \psi_n(t) \exp(\frac{i}{\hbar}\phi_n^{(d)}(t)) \ket{n[\boldsymbol{\zeta}(t)]}
\end{equation}
$$

其中

$$
\begin{equation}
  \phi_n^{(d)}(t) = \int_0^t E_n[\boldsymbol{\zeta}(t')] \dd{t'}
\end{equation}
$$

是随时间演化的 **动力学相位**.它的导数是:

$$
\begin{equation}
  \dv{}{t} \phi_n^{(d)}(t) = E_n[\boldsymbol{\zeta}(t')]
\end{equation}
$$

---

### 推导过程

把一般态对时间求导:

$$
\begin{equation}
\begin{aligned}
  &i\hbar\dv{}{t} \ket{\psi;t} \\
  =& i\hbar \sum_{n} e^{-i\phi_n^{(d)}} \bqty{\dv{c_n}{t} \ket{n} + c_n \dv{\ket{n}}{t} }+ \sum_n E_n c_n \exp(-i\phi_n^{(d)})
\end{aligned}
\end{equation}
$$

同时, 根据本征态定义:

$$
\begin{equation}
  H[\boldsymbol{\zeta}(t)] \ket{\psi;t} = \sum_n E_n \psi_n \exp(-i\phi_n^{(d)})\ket{n}
\end{equation}
$$

结合两式:

$$
\begin{equation}
  \sum_{n} e^{-i\phi_n^{(d)}} \bqty{\dv{c_n}{t} \ket{n} + c_n \dv{\ket{n}}{t} } = 0
\end{equation}
$$

再投影到另一态 $$\ket{m}$$ 上:

$$
\begin{equation}
  \dv{c_m}{t} = -\mel**{m}{\dv{}{t}}{m} - \sum_{n\neq m} \exp(i(\phi_n^{(d)}-\phi_m^{(d)})) \mel**{m}{\dv{}{t}}{n} c_n
\end{equation}
$$

也就是说, 即使系统最初只在一个能量本征态里, 别的能量本征态也会逐渐出现.

---

### 参数依赖与绝热近似

把参数依赖写全:

$$
\begin{equation}
\begin{aligned}
  M_{m,n} =& \mel**{m[\boldsymbol{\zeta}(t)]}{\dv{}{t}}{n[\boldsymbol{\zeta}(t)]} \\
  =& \mel**{m[\boldsymbol{\zeta}(t)]}{\nabla_{\boldsymbol{\zeta}}}{n[\boldsymbol{\zeta}(t)]} \dv{\boldsymbol{\zeta(t)}}{t}
\end{aligned}
\end{equation}
$$

如果参数随时间变化得不剧烈, 那么 $$c_n(t)$$ 变化也很小.
于是如果系统最初在态 $$\ket{j[\boldsymbol{\zeta}(t_0)]}$$, 它会保持在对应的瞬时本征态中.


这就是 **绝热近似**.在这个条件下, 第二项可以忽略, 得到:

$$
\begin{equation}
  \dv{c_m(t)}{t} = -\mel**{m[\boldsymbol{\zeta(t)}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta(t)}]} \dv{\boldsymbol{\zeta(t)}}{t} c_m(t)
\end{equation}
$$

---

### Berry 相位 (Geometric Phase)

Berry 告诉我们: 在参数空间走一圈闭合路径后, 系统会获得一个新的 **几何相位**, 它不同于动力学相位.

> Geometric phase = 参数空间的几何特征！

先注意到:

$$
\begin{equation}
  \overline{\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}} + \mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]} = 0
\end{equation}
$$

于是有:

$$
\begin{equation}
  2\Re\Bqty{\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}} = 0 
\end{equation}
$$

所以 $$\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}$$ 是纯虚数.积分得到:

$$
\begin{equation}
  c_m(t) = \exp(\frac{i}{\hbar}\phi_m^{(g)}) c_m(0)
\end{equation}
$$

其中:

$$
\begin{equation}
  \phi_m^{(g)}(t) = -\int_{\boldsymbol{\zeta}(0)}^{\boldsymbol{\zeta}(t)} \Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}} \dd{\boldsymbol{\zeta}'}
\end{equation}
$$

对于闭合回路:

$$
\begin{equation}
  \phi_m^{(g)}(t) = -\oint_{\text{C}} \Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}} \dd{\boldsymbol{\zeta}'}
\end{equation}
$$

---

### Berry 规范场

- **Berry 联络 (Berry connection)** 定义为:

$$
\begin{equation}
  \mathcal{A}_m[\boldsymbol{\zeta}] = i \mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']} = -\Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}}
\end{equation}
$$

- **Berry 曲率 (Berry curvature)** 定义为:

$$
\begin{equation}
  \Omega_{m; \mu,\nu}[\boldsymbol{\zeta}] = \pdv{}{\zeta^\mu} \mathcal{A}_{m; \nu}[\boldsymbol{\zeta}] - \pdv{}{\zeta^\nu} \mathcal{A}_{m; \mu}[\boldsymbol{\zeta}]
\end{equation}
$$

如果参数空间是 3D:

$$
\begin{equation}
  \boldsymbol{\Omega}_{m}[\boldsymbol{\zeta}]=\nabla_{\boldsymbol{\zeta}}\times \mathcal{A}_m[\boldsymbol{\zeta}]
\end{equation}
$$

---

更多细节可以参考 [David Tong 教授的 QHE 笔记](https://arxiv.org/pdf/1606.06687).在固体物理中, 这些思想非常有用, 因为参数空间可以选成倒空间 (reciprocal space), 这是 Bloch 电子的天然参数空间.
