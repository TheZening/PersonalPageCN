---
title: "Linear Algebra 例题"
date: 2025-10-2 00:05
categories:
  - Math0
---

---
## 求解方程组

### 例题 1: 有解的方程组

求解以下线性三元方程组:

$$
\begin{equation}
\begin{cases}
2x + 3y + z = 1 \\
4x + y - z = 2 \\
-2x + 5y + 2z = 3
\end{cases}
\end{equation}
$$

写出增广矩阵:

$$
\begin{equation}
\left[\begin{array}{ccc|c}
2 & 3 & 1 & 1 \\
4 & 1 & -1 & 2 \\
-2 & 5 & 2 & 3
\end{array}\right]
\end{equation}
$$

使用初等行变换将增广矩阵化为行阶梯形矩阵:

$$
\begin{equation}
\left[\begin{array}{ccc|c}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & -1
\end{array}\right]
\end{equation}
$$

检查行列式:

$$
\begin{equation}
\text{det} = 2 \cdot (1 \cdot 2 - (-1) \cdot 5) - 3 \cdot (4 \cdot 2 - (-1) \cdot (-2)) + 1 \cdot (4 \cdot 5 - 1 \cdot (-2)) = 2 \cdot (2 + 5) - 3 \cdot (8 - 2) + 1 \cdot (20 + 2) = 14 - 18 + 22 = 18 \neq 0
\end{equation}
$$

因此, 方程组有唯一解.
从行阶梯形矩阵中读出解:

$$
\begin{equation}
\begin{cases}
x = 1 \\
y = 0 \\
z = -1
\end{cases}
\end{equation}
$$