---
title: 有限群论 22 - 对称平方与反对称平方
date: 2026-08-18
weight: 22
---


张量积 $V\otimes V$ 中的两个因子来自同一个表示空间, 因而可以交换它们的位置.
这个交换操作把张量平方分成对称部分与反对称部分.
由于交换操作与群的对角作用可交换, 两个部分本身都是表示.


这一分解不仅给出两个新表示, 还允许直接从原特征标计算它们的特征标.
Frobenius–Schur 指标也可以解释为这两个表示中平凡表示重数之差.


> **阅读提示:** 两个相同的张量因子交换以后, 张量可能保持不变, 也可能变号.
> 这两类张量分别组成对称平方与反对称平方; 本文的两个特征标公式只是用投影算符分别计算这两部分的迹.

---
## 张量平方上的交换算符


设 $V$ 是有限维复向量空间.
在张量平方 $V\otimes V$ 上定义交换算符 $T:V\otimes V\to V\otimes V$, 使得 $T(v\otimes w)=w\otimes v$.
交换两次以后回到原张量, 所以 $T^2=\mathbb{1}$.
因此 $T$ 的特征值只能是 $1$ 与 $-1$, 并且整个空间分解成相应的两个特征子空间.

---
## 对称与反对称投影


由 $T$ 定义两个算符:
$$
P_{\text{sym}}=\frac{1}{2}(\mathbb{1}+T),\quad P_{\text{alt}}=\frac{1}{2}(\mathbb{1}-T).
$$
利用 $T^2=\mathbb{1}$ 可以直接验证 $P_{\text{sym}}^2=P_{\text{sym}},\quad P_{\text{alt}}^2=P_{\text{alt}}$.
它们还满足 $P_{\text{sym}}P_{\text{alt}}=0$, 以及 $P_{\text{sym}}+P_{\text{alt}}=\mathbb{1}$.


所以两个投影的像空间给出直和分解 $V\otimes V=\operatorname{Im}P_{\text{sym}}\oplus\operatorname{Im}P_{\text{alt}}$.
定义 $V$ 的**对称平方**与**反对称平方**为 $\operatorname{Sym}^2(V)=\operatorname{Im}P_{\text{sym}},\quad \Lambda^2(V)=\operatorname{Im}P_{\text{alt}}$.


> **术语提示:** $\Lambda^2(V)$ 也称为外平方.
> 符号 $\Lambda$ 是外代数的标准记号, 下标 $\mathrm{alt}$ 来自 alternating, 在这里表示交换两个因子时变号.
等价地, $\operatorname{Sym}^2(V)=\{\xi\in V\otimes V\mid T\xi=\xi\}$, 并且 $\Lambda^2(V)=\{\xi\in V\otimes V\mid T\xi=-\xi\}$.

---
## 两个子空间都是表示


现在设 $V$ 是有限群 $G$ 的复表示, 作用为 $\rho$.
张量平方上的对角作用为 $R(g)=\rho(g)\otimes\rho(g)$.
交换因子与在两个因子上同时施加相同的群作用互不干扰, 所以 $TR(g)=R(g)T$.


由此可知 $R(g)$ 与 $P_{\text{sym}}$,$P_{\text{alt}}$ 都可交换.
因此两个投影的像空间都在群作用下保持不变, 从而 $V\otimes V=\operatorname{Sym}^2(V)\oplus\Lambda^2(V)$ 是 $G$-表示的直和分解.

---
## 投影像空间上的迹


设 $P$ 是有限维向量空间上的投影, $A$ 与 $P$ 可交换.
那么 $A$ 保持 $\operatorname{Im}P$ 与 $\ker P$, 并且 $\operatorname{tr}(A|_{\operatorname{Im}P})=\operatorname{tr}(PA)$.
原因是 $P$ 在像空间上等于恒等算符, 在核空间上等于零.


把这个结论应用于 $A=R(g)$ 与两个投影, 就可以计算对称平方和反对称平方的特征标.

---
## 张量平方与交换项的迹


首先, 张量积特征标公式给出 $\operatorname{tr}R(g)=\operatorname{tr}(\rho(g)\otimes\rho(g))=\chi_V(g)^2$.


上一篇已经证明一般迹恒等式 $\operatorname{tr}(T(A\otimes A))=\operatorname{tr}(A^2)$.
令 $A=\rho(g)$, 得到 $\operatorname{tr}(TR(g))=\operatorname{tr}(\rho(g)^2)=\chi_V(g^2)$.


这两个迹分别产生特征标公式中的平方项与平方元素项.

---
## 对称平方的特征标


对称平方上的特征标为:
$$
\begin{aligned}
\chi_{\operatorname{Sym}^2(V)}(g)
&=\operatorname{tr}(P_{\text{sym}}R(g))\\
&=\frac{1}{2}(\operatorname{tr}R(g)+\operatorname{tr}(TR(g)))\\
&=\frac{1}{2}(\chi_V(g)^2+\chi_V(g^2)).
\end{aligned}
$$
因此:
$$
\chi_{\operatorname{Sym}^2(V)}(g)=\frac{1}{2}(\chi_V(g)^2+\chi_V(g^2)).
$$

---
## 反对称平方的特征标


同理, 反对称平方上的特征标为:
$$
\begin{aligned}
\chi_{\Lambda^2(V)}(g)
&=\operatorname{tr}(P_{\text{alt}}R(g))\\
&=\frac{1}{2}(\operatorname{tr}R(g)-\operatorname{tr}(TR(g)))\\
&=\frac{1}{2}(\chi_V(g)^2-\chi_V(g^2)).
\end{aligned}
$$
因此:
$$
\chi_{\Lambda^2(V)}(g)=\frac{1}{2}(\chi_V(g)^2-\chi_V(g^2)).
$$

---
## 两条公式的相加与相减


把两个特征标公式相加, 得到 $\chi_{\operatorname{Sym}^2(V)}(g)+\chi_{\Lambda^2(V)}(g)=\chi_V(g)^2$.
右边正是 $V\otimes V$ 的特征标, 与表示直和分解一致.


把两个公式相减, 得到 $\chi_{\operatorname{Sym}^2(V)}(g)-\chi_{\Lambda^2(V)}(g)=\chi_V(g^2)$.
所以群元素平方上的特征标可以理解为交换算符对对称部分与反对称部分赋予相反符号以后得到的迹.

---
## 维数公式


设 $d=\dim V$.
在单位元 $e$ 上有 $\chi_V(e)=d$, 并且 $e^2=e$.
代入两个特征标公式得到:
$$
\dim\operatorname{Sym}^2(V)=\frac{d(d+1)}{2},
$$
以及:
$$
\dim\Lambda^2(V)=\frac{d(d-1)}{2}.
$$
两者之和为 $d^2$, 即 $\dim(V\otimes V)$.

---
## 不可约分解的重数


设 $U_{\alpha}$ 是 $G$ 的一个不可约复表示, 特征标为 $\chi_{\alpha}$.
它在对称平方中的重数为 $m_{\alpha,\text{sym}}=\langle\chi_{\alpha},\chi_{\operatorname{Sym}^2(V)}\rangle_G$.
它在反对称平方中的重数为 $m_{\alpha,\text{alt}}=\langle\chi_{\alpha},\chi_{\Lambda^2(V)}\rangle_G$.


因此只要知道 $V$ 的特征标以及共轭类在平方映射下的去向, 就可以分别分解 $\operatorname{Sym}^2(V)$ 与 $\Lambda^2(V)$, 不需要先构造表示矩阵.

---
## 不变双线性形式重新出现


双线性形式空间为 $\operatorname{Bil}(V)=V_{\text{dual}}\otimes V_{\text{dual}}$.
它也分解为对称与反对称两部分 $V_{\text{dual}}\otimes V_{\text{dual}}=\operatorname{Sym}^2(V_{\text{dual}})\oplus\Lambda^2(V_{\text{dual}})$.
因此不变对称双线性形式空间满足 $\operatorname{Bil}_{\text{sym}}(V)\cong(\operatorname{Sym}^2(V_{\text{dual}}))_{\text{inv}}$, 而不变反对称双线性形式空间满足 $\operatorname{Bil}_{\text{alt}}(V)\cong(\Lambda^2(V_{\text{dual}}))_{\text{inv}}$.


换句话说, 不变对称或反对称双线性形式是否存在, 等价于相应的平方表示是否含有平凡表示.

---
## Frobenius–Schur 指标的重数解释


记平凡表示在表示 $W$ 中的重数为 $m_{\mathbb{1}}(W)$.
上一篇的维数差公式现在可以写成:
$$

\nu(V)=m_{\mathbb{1}}(\operatorname{Sym}^2(V_{\text{dual}}))-m_{\mathbb{1}}(\Lambda^2(V_{\text{dual}}))
.
$$


对不可约复表示, 两个重数的可能性被 Schur 引理完全限制:
$$
\begin{array}{c|c|c|c}
\text{类型}&m_{\mathbb{1}}(\operatorname{Sym}^2(V_{\text{dual}}))&m_{\mathbb{1}}(\Lambda^2(V_{\text{dual}}))&\nu(V)\\
\hline
\text{实类型}&1&0&1\\
\text{复类型}&0&0&0\\
\text{拟实类型}&0&1&-1
\end{array}
$$
所以 Frobenius–Schur 指标正是在比较平凡表示位于对称平方还是反对称平方.

---
## 逻辑总结


交换算符 $T$ 把张量平方分解为 $V\otimes V=\operatorname{Sym}^2(V)\oplus\Lambda^2(V)$.
两个投影分别是:
$$
P_{\text{sym}}=\frac{1}{2}(\mathbb{1}+T),\quad P_{\text{alt}}=\frac{1}{2}(\mathbb{1}-T).
$$
利用投影像空间上的迹与交换迹恒等式, 得到:
$$
\chi_{\operatorname{Sym}^2(V)}(g)=\frac{1}{2}(\chi_V(g)^2+\chi_V(g^2)),
$$
以及:
$$
\chi_{\Lambda^2(V)}(g)=\frac{1}{2}(\chi_V(g)^2-\chi_V(g^2)).
$$
平凡表示在两个平方中的重数之差就是 Frobenius–Schur 指标.
因此对称平方与反对称平方不仅分解张量平方, 也记录不可约表示的实, 复, 拟实类型.


下一篇将研究多重张量积中的不变张量与耦合重数.
