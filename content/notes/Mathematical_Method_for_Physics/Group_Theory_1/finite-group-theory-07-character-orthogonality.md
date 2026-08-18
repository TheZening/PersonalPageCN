---
title: 有限群论 07 - 类函数内积与不可约特征标的正交性
date: 2026-08-17
weight: 7
---


上一篇定义了表示的特征标, 并证明每个特征标都是类函数.
现在要进一步比较两个特征标.
仅仅逐点比较它们的函数值还不够, 因为我们希望得到一个能够直接反映表示之间关系的数量.


为此, 本文先在类函数空间上定义内积.
随后让群作用在线性映射空间 $\operatorname{Hom}(V,W)$ 上, 并对这一作用取平均.
这个平均算子恰好投影到交织映射空间 $\operatorname{Hom}_G(V,W)$.
计算这个投影的迹, 就能把特征标内积与交织映射空间的维数联系起来.
最后结合 Schur 引理, 即可得到不可约特征标的正交关系.


本文只建立这一条逻辑链.
一般表示的重数公式, 不可约特征标的完备性以及特征标表的列正交关系将在后面讨论.

---
## 类函数空间上的内积


设 $G$ 是有限群.
所有复值类函数组成复向量空间 $\operatorname{Cl}(G)=\{f:G\to\mathbb{C}\mid f(xgx^{-1})=f(g),\quad \forall x,g\in G\}$.
对任意 $f,h\in\operatorname{Cl}(G)$, 定义:
$$
\langle f,h\rangle_G=\frac{1}{|G|}\sum_{g\in G}\bar{f(g)}h(g).
$$
下标 $G$ 用来强调求和是在群 $G$ 上进行的.
如果群已经明确, 也可以把它简写为 $\langle f,h\rangle$.


这个公式可以理解为把函数值逐项相乘以后, 再对整个群取平均.
第一个函数带复共轭, 与复向量空间中通常的内积约定一致.
它对第二个变量线性, 对第一个变量共轭线性, 并满足 $\langle f,h\rangle_G=\bar{\langle h,f\rangle_G},\quad \langle f,f\rangle_G\geq0$.
因此它确实是 $\operatorname{Cl}(G)$ 上的内积.


> **理解提示:** 这里的内积不是表示空间中两个向量的内积; 它比较的是两个定义在群上的函数.

---
## 按共轭类改写内积


设 $G$ 的全部共轭类为 $C_1,C_2,\ldots,C_k$, 并在每个共轭类中选取代表元 $c_i\in C_i$.
由于类函数在同一个共轭类上保持常数, 对任意 $g\in C_i$ 都有 $f(g)=f(c_i),\quad h(g)=h(c_i)$.
因此群上的求和可以按共轭类分组:
$$
\begin{aligned}
\langle f,h\rangle_G
&=\frac{1}{|G|}\sum_{i=1}^{k}\sum_{g\in C_i}\bar{f(g)}h(g)\\
&=\frac{1}{|G|}\sum_{i=1}^{k}|C_i|\bar{f(c_i)}h(c_i).
\end{aligned}
$$
所以类函数内积也可以写成:
$$
\langle f,h\rangle_G=\frac{1}{|G|}\sum_{i=1}^{k}|C_i|\bar{f(c_i)}h(c_i).
$$
权重 $|C_i|$ 不能省略.
内积原本对群中每个元素求和, 一个共轭类的函数值虽然只需记录一次, 但仍然必须按照这个共轭类所含元素的数量计数.

---
## 线性映射空间上的群作用


设 $\rho:G\to\mathrm{GL}(V),\quad \sigma:G\to\mathrm{GL}(W)$ 是有限维复表示.
考虑从 $V$ 到 $W$ 的全部线性映射组成的向量空间 $\operatorname{Hom}_{\mathbb{C}}(V,W)$.
为了把这个空间与交织映射联系起来, 对每个 $g\in G$ 定义线性变换 $\Pi(g):\operatorname{Hom}_{\mathbb{C}}(V,W)\to\operatorname{Hom}_{\mathbb{C}}(V,W)$, 以及 $\Pi(g)(A)=\sigma(g)A\rho(g)^{-1}$.
这里 $A:V\to W$, 所以复合映射的次序确实是先作用 $\rho(g)^{-1}$, 再作用 $A$, 最后作用 $\sigma(g)$.


群乘法得到保持, 因为:
$$
\begin{aligned}
\Pi(g)\Pi(h)(A)
&=\sigma(g)\left(\sigma(h)A\rho(h)^{-1}\right)\rho(g)^{-1}\\
&=\sigma(gh)A\rho(gh)^{-1}=\Pi(gh)(A).
\end{aligned}
$$
所以 $\Pi$ 是 $G$ 在 $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 上的表示.

---
## 不变向量就是交织映射


表示 $\Pi$ 的不变子空间定义为 $\operatorname{Fix}_G(\operatorname{Hom}_{\mathbb{C}}(V,W))=\{A\in\operatorname{Hom}_{\mathbb{C}}(V,W)\mid\Pi(g)(A)=A,\quad \forall g\in G\}$.
不变条件可以直接改写为 $\Pi(g)(A)=A\quad\leftrightarrow\quad\sigma(g)A\rho(g)^{-1}=A\quad\leftrightarrow\quad\sigma(g)A=A\rho(g)$.
最右边正是交织关系, 所以 $\operatorname{Fix}_G(\operatorname{Hom}_{\mathbb{C}}(V,W))=\operatorname{Hom}_G(V,W)$.
这个等式把交织映射问题转化成了寻找表示 $\Pi$ 的不变向量.

---
## 群平均算子


对 $\Pi$ 的全部表示算子取平均, 定义:
$$
P=\frac{1}{|G|}\sum_{g\in G}\Pi(g).
$$
它作用在任意 $A\in\operatorname{Hom}_{\mathbb{C}}(V,W)$ 上的具体形式为:
$$
P(A)=\frac{1}{|G|}\sum_{g\in G}\sigma(g)A\rho(g)^{-1}.
$$
这个算子把任意线性映射平均成一个交织映射.
为了证明这一点, 任取 $h\in G$, 则:
$$
\begin{aligned}
\Pi(h)P(A)
&=\frac{1}{|G|}\sum_{g\in G}\Pi(h)\Pi(g)(A)\\
&=\frac{1}{|G|}\sum_{g\in G}\Pi(hg)(A).
\end{aligned}
$$
当 $g$ 遍历 $G$ 时, $hg$ 也恰好遍历 $G$.
把求和变量 $hg$ 重新记为 $k$, 得到:
$$
\Pi(h)P(A)=\frac{1}{|G|}\sum_{k\in G}\Pi(k)(A)=P(A).
$$
因此 $P(A)$ 在 $\Pi$ 的作用下不变, 从而 $P(A)\in\operatorname{Hom}_G(V,W)$.
另一方面, 若 $A\in\operatorname{Hom}_G(V,W)$, 则 $\Pi(g)(A)=A$ 对每个 $g\in G$ 都成立.
因此:
$$
P(A)=\frac{1}{|G|}\sum_{g\in G}A=A.
$$
这说明 $P$ 在交织映射空间上等于恒等变换.
结合前面的结论可得 $\operatorname{im}P=\operatorname{Hom}_G(V,W)$.
而且对任意 $A$ 都有 $P(A)\in\operatorname{Hom}_G(V,W)$, 所以再次施加 $P$ 不会改变结果 $P^2(A)=P(A)$.
故, $P^2=P$.
这表明 $P$ 是从 $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 到 $\operatorname{Hom}_G(V,W)$ 的投影算子.


> **理解提示:** 平均化不是为了求一个普通平均数; 它把不符合群对称性的部分相互抵消, 只留下与全部群作用相容的部分.

---
## 投影的迹等于像空间的维数


设 $P$ 是有限维复向量空间上的线性算子, 并满足 $P^2=P$.
投影在像空间上等于恒等算符, 在核空间上等于零.
所以它的特征值只可能是 $1$ 或 $0$, 而特征值 $1$ 出现的次数正是像空间维数.
所以, $\operatorname{tr}(P)=\dim(\operatorname{im}P)$.
对前面构造的群平均算子使用这一结论, 得到 $\operatorname{tr}(P)=\dim\operatorname{Hom}_G(V,W)$.

---
## 计算线性映射空间上群作用的迹


现在计算 $\Pi(g)$ 在 $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 上的迹.
线性代数中的标准迹公式是 $\operatorname{tr}(A\mapsto BAC)=\operatorname{tr}(B)\operatorname{tr}(C)$.
左边取的是"把矩阵 $A$ 送到 $BAC$"这一线性变换的迹, 不是矩阵 $A$ 自己的迹.
它可以在矩阵单位基上直接验证, 这里使用其结论即可.
取 $B=\sigma(g)$ 与 $C=\rho(g)^{-1}$, 得到:
$$
\begin{aligned}
\operatorname{tr}(\Pi(g))
&=\operatorname{tr}(\sigma(g))\operatorname{tr}(\rho(g)^{-1})\\
&=\chi_W(g)\chi_V(g^{-1})\\
&=\bar{\chi_V(g)}\chi_W(g).
\end{aligned}
$$
这个等式解释了类函数内积中复共轭所在的位置.
它不是人为加入的修饰, 而是来自 $\operatorname{Hom}(V,W)$ 上群作用中的逆矩阵 $\rho(g)^{-1}$.

---
## 特征标内积等于交织映射空间的维数


群平均算子为:
$$
P=\frac{1}{|G|}\sum_{g\in G}\Pi(g).
$$
利用迹的线性性, 有:
$$
\operatorname{tr}(P)=\frac{1}{|G|}\sum_{g\in G}\operatorname{tr}(\Pi(g)).
$$
代入上一节得到的公式:
$$
\operatorname{tr}(P)=\frac{1}{|G|}\sum_{g\in G}\bar{\chi_V(g)}\chi_W(g)=\langle\chi_V,\chi_W\rangle_G.
$$
另一方面, $P$ 是投影到 $\operatorname{Hom}_G(V,W)$ 的投影算子, 所以 $\operatorname{tr}(P)=\dim\operatorname{Hom}_G(V,W)$.
比较这两个等式, 得到本文的核心公式 $\langle\chi_V,\chi_W\rangle_G=\dim\operatorname{Hom}_G(V,W)$.
等式左侧只涉及两个特征标的函数值, 等式右侧则描述两个表示之间交织映射的数量.
这里的数量不是集合中元素的个数, 而是复向量空间 $\operatorname{Hom}_G(V,W)$ 的维数.
因此特征标内积必定是非负整数.

---
## 不可约特征标的正交关系


现在假设 $V$ 与 $W$ 都是有限维不可约复表示.
Schur 引理给出:
$$
\dim\operatorname{Hom}_G(V,W)=
\begin{cases}
1,&V\cong W,\\
0,&V\not\cong W.
\end{cases}
$$
把它代入核心公式, 得到:
$$

\langle\chi_V,\chi_W\rangle_G=
\begin{cases}
1,&V\cong W,\\
0,&V\not\cong W.
\end{cases}

$$
这就是不可约特征标的正交关系.


若 $V_1,\ldots,V_r$ 是两两不等价的不可约复表示, 并记它们的特征标为 $\chi_1,\ldots,\chi_r$, 则 $\langle\chi_i,\chi_j\rangle_G=\delta_{ij}$.
所以两两不等价的不可约表示对应两两正交的单位特征标.
特别地, 每个不可约特征标都满足 $\langle\chi_i,\chi_i\rangle_G=1$.
而两个不可约表示若具有相同的特征标, 它们的特征标内积就等于 $1$, 因而 Schur 引理迫使这两个表示等价.

---
## 正交关系的直接后果


不可约特征标的正交性首先说明它们线性无关.
假设存在关系 $a_1\chi_1+\cdots+a_r\chi_r=0$.
对等式两侧与 $\chi_j$ 取内积, 得到:
$$
\begin{aligned}
0
&=\left\langle\chi_j,\sum_{i=1}^{r}a_i\chi_i\right\rangle_G\\
&=\sum_{i=1}^{r}a_i\langle\chi_j,\chi_i\rangle_G\\
&=a_j.
\end{aligned}
$$
由于这个结论对每个 $j$ 都成立, 所有系数都必须为零.
因此 $\chi_1,\ldots,\chi_r$ 是 $\operatorname{Cl}(G)$ 中的线性无关向量.


如果 $G$ 有 $k$ 个共轭类, 则 $\dim\operatorname{Cl}(G)=k$.
线性无关向量的数量不能超过空间维数, 所以两两不等价的不可约复表示的数量 $r$ 满足 $r\leq k$.
要把这个不等式加强为 $r=k$, 还需要证明不可约特征标张成整个类函数空间.
这一步并不只由行正交关系自动得到, 因此留到后面的文章中处理.

---
## 逻辑总结


本文的推导可以压缩为一条连续的逻辑链.
首先, 两个表示 $V$ 与 $W$ 诱导出 $G$ 在 $\operatorname{Hom}_{\mathbb{C}}(V,W)$ 上的表示 $\Pi(g)(A)=\sigma(g)A\rho(g)^{-1}$.
这个表示的不变向量恰好是交织映射 $\operatorname{Fix}_G(\operatorname{Hom}_{\mathbb{C}}(V,W))=\operatorname{Hom}_G(V,W)$.
群平均算子:
$$
P=\frac{1}{|G|}\sum_{g\in G}\Pi(g)
$$
是投影到这个不变子空间的投影算子, 因而 $\operatorname{tr}(P)=\dim\operatorname{Hom}_G(V,W)$.
另一方面, 逐项计算平均算子的迹得到:
$$
\operatorname{tr}(P)=\frac{1}{|G|}\sum_{g\in G}\bar{\chi_V(g)}\chi_W(g)=\langle\chi_V,\chi_W\rangle_G.
$$
所以, $\langle\chi_V,\chi_W\rangle_G=\dim\operatorname{Hom}_G(V,W)$.
当 $V$ 与 $W$ 不可约时, Schur 引理把右侧限制为 $0$ 或 $1$, 最终得到不可约特征标的正交关系.
