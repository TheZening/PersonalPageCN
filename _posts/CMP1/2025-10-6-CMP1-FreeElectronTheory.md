---
title: "CMP1 自由电子理论"
date: 2025-10-06T08:06:00
categories:
  - CMP1
---
最简单的处理金属中电子的方法是将它们视为自由粒子.
自然是很粗糙的一种近似, 这种近似的想法诞生于对于原子结构的理解, 即原子核周围有电子云, 这些电子云在金属中是离域的, 可以自由移动.
这种近似的理论被称为 Drude 自由电子理论, 由 Paul Drude 在 1900 年提出.

---
## Drude 自由电子理论

自由电子理论的动机主要是理解金属中电子的行为, 以及解释金属的电学和热学性质.
所以一开始也根本就没想解决太复杂的问题.
他的基本假设如下:

1. 忽略束缚电子.
2. 金属中的价电子表现得像气体.
3. 电子与原子核发生弹性散射.
4. 电子之间没有相互作用.
5. 散射后电子的动量 $$\bm{p}=0$$.
6. 平均自由程(MFP): 两次散射之间电子的自由(直线运动)距离.
7. 驰豫时间(RT): 两次碰撞之间的时间间隔.

很显然这是不合理的, 但是我们还是从最简单的入手, 电子的运动方程为: 

$$
\begin{equation}
\bm{p}(t+\dd{t}) = \pqty{\bm{p}(t)+\bm{F} \dd{t}} \pqty{1-\frac{\dd{t}}{\tau}} + \bm{0} \frac{1}{\tau} \dd{t}
\end{equation}
$$

忽略 $$(\dd{t})^2$$ 项: 

$$
\begin{equation}
  \dv{\bm{p}}{t} = \bm{F}(t) - \frac{\bm{p}}{\tau}
\end{equation}
$$

当 $$\bm{F}=0$$ 时，解为: 

$$
\begin{equation}
  \bm{p}(t)=\bm{p}_{0} \exp(-\frac{t}{\tau})
\end{equation}
$$

电子在散射过程中逐渐失去动量，其特征时间尺度为 $$\tau$$.  

---

### 电磁场中的电子
当电子处于磁场和电场中时: 

$$
\begin{equation}
  \bm{F} = q \bm{v}\times\bm{B} + q \bm{E}
\end{equation}
$$

我们用 $$q$$ 表示一般电荷，用 $$e$$ 专指电子，并规定 $$e=1$$（即电子带电荷 $$e=-1$$）.运动方程为: 

$$
\begin{equation}
  F_x = q(v_y B_z - v_z B_y) + q E_x
\end{equation}
$$

$$
\begin{equation}
  F_y = q(v_z B_x - v_x B_z) + q E_y
\end{equation}
$$

$$
\begin{equation}
  F_z = q(v_x B_y - v_y B_x) + q E_z
\end{equation}
$$

只考虑电场时: 

$$
\begin{equation}
  \dv{\bm{p}}{t}=-e \bm{E}-\frac{\bm{p}}{\tau}
\end{equation}
$$

---

### 电流
稳态解: 

$$
\begin{equation}
  \dv{\bm{p}}{t} = 0 \Rightarrow \bm{v} = - \frac{e}{m} \tau \bm{E}
\end{equation}
$$

漂移速度！可以计算电流密度: 

$$
\begin{equation}
  \bm{J} = -e n \bm{v} = \frac{e^2}{m} \tau n \bm{E}
\end{equation}
$$

其中 $$n$$ 是电荷密度.由 $$\bm{J} = \sigma \bm{E}$$ 得电导率: 

$$
\begin{equation}
  \sigma = \frac{e^2}{m} \tau n
\end{equation}
$$

---

### 稳态
**定义: ** 如果解随时间不再变化，我们称系统处于稳态.  

**注释: **
1. 若无外部驱动力，系统处于平衡态，则为稳态.  
2. 若系统受到恒定外力驱动，系统也可以稳态.  
3. 平衡态是稳态的一个子集.  
