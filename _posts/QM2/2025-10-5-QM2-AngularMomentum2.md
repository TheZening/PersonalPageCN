---
title: "QM2 角动量与中心势2"
date: 2025-10-5

categories:
  - QM2
---

我们现在考虑一个三维各项同性的谐振子:

$$
\begin{equation}
H = \frac{p_x^2 + p_y^2 + p_z^2}{2m} + \frac{1}{2} m \omega^2 (x^2 + y^2 + z^2)
\end{equation}
$$

这自然而然的可以拆成:

$$
\begin{equation}
H = H_x + H_y + H_z
\end{equation}
$$

其中:

$$
\begin{equation}
H_i = \frac{p_i^2}{2m} + \frac{1}{2} m \omega^2 x_i^2, \quad i = x, y, z
\end{equation}
$$

现在大的Hilbert空间是 $$\mathcal{H} = \mathcal{H}_x \otimes \mathcal{H}_y \otimes \mathcal{H}_z$$, 每个 $$\mathcal{H}_i$$ 都是一个一维谐振子的Hilbert空间.
因此我们可以用一维谐振子的本征态来构造三维谐振子的本征态.
他的基态是:

$$
\begin{equation}
\ket{0,0,0} = \ket{0}_x \otimes \ket{0}_y \otimes \ket{0}_z
\end{equation}
$$

从而最一般的态就是:

$$
\begin{equation}
\ket{n_x, n_y, n_z} = (a_x^\dagger)^{n_x} (a_y^\dagger)^{n_y} (a_z^\dagger)^{n_z} \ket{0,0,0}
\end{equation}
$$

这些态(对于不同的 $$n_x, n_y, n_z$$)可以张成整个Hilbert空间.
他的能量本征值是:

$$
\begin{equation}
E_{n_x, n_y, n_z} = \hbar \omega (n_x + n_y + n_z + \frac{3}{2})
\end{equation}
$$

---
## 谐振子也有Multiplet

