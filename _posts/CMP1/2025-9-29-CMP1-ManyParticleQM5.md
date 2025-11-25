---
title: "CMP1 全同粒子的再表述5"
date: 2025-09-12
categories:
  - CMP1
---

我们上一小节讨论了场粒子的再表述, 我们考虑了一组普通的本征态:

$$
\begin{equation}
\{ \ket{u_1}, \ket{u_2}, \ket{u_3}, \cdots \}
\end{equation}
$$

然后考虑了使用位置空间的完备表象:

$$
\begin{equation}
\hat{\Psi}(\boldsymbol{x}) = \sum_i \braket{\boldsymbol{x}}{u_j} \hat{a}_j = \sum_i u_j(\boldsymbol{x}) \hat{a}_j
\end{equation}
$$
$$
\begin{equation}
\hat{\Psi}^\dagger(\boldsymbol{x}) = \sum_i \braket{u_j}{\boldsymbol{x}} \hat{a}_j^\dagger = \sum_i u_j^*(\boldsymbol{x}) \hat{a}_j^\dagger
\end{equation}
$$

如果我们带上自旋指标$$\nu$$, 那么上面的式子变成:

$$
\begin{equation}
\hat{\Psi}_\nu(\boldsymbol{x}) = \sum_j \braket{\boldsymbol{x}, \nu}{u_j} \hat{a}_j = \sum_j u_{j,\nu}(\boldsymbol{x}) \hat{a}_j
\end{equation}
$$
$$
\begin{equation}
\hat{\Psi}_\nu^\dagger(\boldsymbol{x}) = \sum_j \braket{u_j}{\boldsymbol{x}, \nu} \hat{a}_j^\dagger = \sum_j u_{j,\nu}^*(\boldsymbol{x}) \hat{a}_j^\dagger
\end{equation}
$$

反过来也行:

$$
\begin{equation}
\hat{a}_i^\dagger = \sum_\nu \int \braket{\boldsymbol{x}, \nu}{u_i} \hat{\Psi}_\nu^\dagger(\boldsymbol{x}) \dd[3]x = \sum_\nu \int u_{i,\nu}(\boldsymbol{x}) \hat{\Psi}_\nu^\dagger(\boldsymbol{x}) \dd[3]x
\end{equation}
$$
$$
\begin{equation}
\hat{a}_i = \sum_\nu \int \braket{u_i}{\boldsymbol{x}, \nu} \hat{\Psi}_\nu(\boldsymbol{x}) \dd[3]x = \sum_\nu \int u^*_{i,\nu}(\boldsymbol{x}) \hat{\Psi}_\nu(\boldsymbol{x}) \dd[3]x
\end{equation}
$$

现在我们在算符层面讨论这个问题.

---
## 算符的场算符表示

我们之前到, 作用在第$$q$$个粒子上的, 单粒子算符$$\hat{f}$$, 在多粒子空间中的升级为:

$$
\begin{equation}
\hat{F} = \sum_{i,j} f_{ij} \hat{a}_i^\dagger \hat{a}_j
\end{equation}
$$

代入$$\hat{a}_i^\dagger$$和$$\hat{a}_j$$的场算符表示, 我们得到:

$$
\begin{align}
\hat{F} &= \sum_{i,j} f_{ij} \int u_i(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{x}) \dd[3]x \int u_j^*(\boldsymbol{y}) \hat{\Psi}(\boldsymbol{y}) \dd[3]y \\
&= \sum_{i,j} \int \ketbra{u_i} \mel{\boldsymbol{x}}{\hat{f}}{\boldsymbol{y}} \ketbra{u_j} \hat{\Psi}^\dagger(\boldsymbol{x}) \hat{\Psi}(\boldsymbol{y}) \dd[3]x \dd[3]y \\
&= \int \mel{x}{\hat{f}}{y} \hat{\Psi}^\dagger(\boldsymbol{x}) \hat{\Psi}(\boldsymbol{y}) \dd[3]x \dd[3]y 
\end{align}
$$

然后我们考虑双粒子算符$$\hat{g}$$, 它作用在第$$q$$和第$$q'$$个粒子上, 它在多粒子空间中的升级为:

$$
\begin{equation}
\hat{G} = \frac{1}{2} \sum_{i,j,k,l} g_{ijkl} \hat{a}_i^\dagger \hat{a}_j^\dagger \hat{a}_l \hat{a}_k
\end{equation}
$$

其中:

$$
\begin{equation}
g_{ijkl} = \mel{1=u_i, 2=u_j}{\hat{g}}{1=u_k, 2=u_l}
\end{equation}
$$

代入$$\hat{a}_i^\dagger$$, $$\hat{a}_j^\dagger$$, $$\hat{a}_l$$和$$\hat{a}_k$$的场算符表示, 我们得到:

$$
\begin{align}
\hat{G} &= \frac{1}{2} \sum_{i,j,k,l} g_{ijkl} \int u_i(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{x}) \dd[3]x \int u_j(\boldsymbol{y}) \hat{\Psi}^\dagger(\boldsymbol{y}) \dd[3]y \int u_k^*(\boldsymbol{x}') \hat{\Psi}(\boldsymbol{x}') \dd[3]x' \int u_l^*(\boldsymbol{y}') \hat{\Psi}(\boldsymbol{y}') \dd[3]y' \\
&= \frac{1}{2} \int \mel{1=\boldsymbol{x}, 2=\boldsymbol{y}}{\hat{g}}{1=\boldsymbol{x}', 2=\boldsymbol{y}'} \hat{\Psi}^\dagger(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{y}) \hat{\Psi}(\boldsymbol{y}') \hat{\Psi}(\boldsymbol{x}') \dd[3]x \dd[3]y \dd[3]x' \dd[3]y' \\
&= \frac{1}{2} \int \mel{\boldsymbol{x}, \boldsymbol{y}}{\hat{g}}{\boldsymbol{x}', \boldsymbol{y}'} \hat{\Psi}^\dagger(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{y}) \hat{\Psi}(\boldsymbol{y}') \hat{\Psi}(\boldsymbol{x}') \dd[3]x \dd[3]y \dd[3]x' \dd[3]y'
\end{align}
$$

我们先不加自旋指标了.
现在我们可以考虑写出Hamiltonian的场算符形式了:

$$
\begin{align}
\hat{H} =& \int \frac{\hbar^2}{2m} \nabla \hat{\Psi}^\dagger(\boldsymbol{x}) \cdot \nabla \hat{\Psi}(\boldsymbol{x}) \dd[3]x + \int V(\boldsymbol{x}) \hat{\Psi}^\dagger(\boldsymbol{x}) \hat{\Psi}(\boldsymbol{x}) \dd[3]x \\
& + \frac{1}{2} \int W_2(\boldsymbol{x}'-\boldsymbol{x}'') \hat{\Psi}^\dagger(\boldsymbol{x}') \hat{\Psi}^\dagger(\boldsymbol{x}'') \hat{\Psi}(\boldsymbol{x}'') \hat{\Psi}(\boldsymbol{x}') \dd[3]x' \dd[3]x''
\end{align}
$$
