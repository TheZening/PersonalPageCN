---
title: 量子对称性 14 - Time reversal 与 Kramers 简并
date: 2026-08-19
weight: 14
---


Parity 由幺正算符实现, 因而属于普通复线性表示的范围.
Time reversal 不同.


时间反演要把正向时间演化变成反向时间演化.
为了正确改变复相位随时间的演化方向, 它必须由反幺正算符实现.


反幺正性带来普通有限群表示中没有的结构.
其中最重要的结果是: 当 time reversal 算符的平方等于 $-\mathbb{1}$ 时, 每个能量本征态都必须有一个与它正交的同能量伙伴.


> **阅读重点:** Time reversal 的抽象变换可以满足二阶关系, 但它在 Hilbert 空间上不是普通线性算符.
> $\Theta^2=+\mathbb{1}$ 与 $\Theta^2=-\mathbb{1}$ 是两种本质不同的量子实现.

---
## 反幺正算符的定义


设 $\Theta$ 是 Hilbert 空间 $\mathcal{H}$ 上的反幺正算符.
它首先是反线性的:
$$
\Theta(a\ket{\psi}+b\ket{\phi})=\bar{a}\Theta\ket{\psi}+\bar{b}\Theta\ket{\phi}.
$$
它还满足内积关系:
$$
\braket{\Theta\phi}{\Theta\psi}=\bar{\braket{\phi}{\psi}}=\braket{\psi}{\phi}.
$$
因此反幺正算符保持向量长度, 正交关系和跃迁概率.


反线性意味着复数标量通过 $\Theta$ 时要取复共轭.
特别地, $\Theta\mathrm{i}\Theta^{-1}=-\mathrm{i}$.
这条关系是 time reversal 能够反转量子动力学方向的关键.

---
## 反幺正不等于自伴


幺正, 自伴和反幺正是不同概念.
自伴算符是复线性算符, 满足 $A^\dagger=A$.
反幺正算符则是反线性的, 不能把它当作普通 Hermitian 矩阵直接处理.


反幺正算符仍然有逆算符并保持范数.
但是包含它的代数关系必须记住复数会被共轭.
因此不能像处理普通线性 Hermitian 算符那样, 直接用一组实本征值理解反幺正算符.


因此像 $[H,\Theta]=0$ 这样的简写虽然常见, 更明确的 time reversal 对称条件应写成 $\Theta H\Theta^{-1}=H$.

---
## 反幺正算符的矩阵写法


选定一组正交归一基底以后, 定义复共轭算符 $K$.
$K$ 把向量的每个坐标取复共轭.


任意反幺正算符都可以写成 $\Theta=VK$, 其中 $V$ 是幺正算符.


这个分解依赖所选基底, 因为 $K$ 的定义依赖基底.
反幺正性本身不依赖基底.


连续作用两次得到 $\Theta^2=V\bar{V}$.
所以 $\Theta^2$ 是复线性的幺正算符.

---
## 为什么 time reversal 必须反幺正


不显含时间的 Hamilton 算符产生时间演化 $U(t)=\mathrm{e}^{-\mathrm{i}Ht}$.
Time reversal 应当把从 $0$ 到 $t$ 的演化变成从 $0$ 到 $-t$ 的演化.


若 $\Theta H\Theta^{-1}=H$, 利用反幺正性得到:
$$
\Theta\mathrm{e}^{-\mathrm{i}Ht}\Theta^{-1}=\mathrm{e}^{+\mathrm{i}Ht}=U(-t).
$$
这里指数中 $\mathrm{i}$ 的符号改变, 正是因为 $\Theta$ 会复共轭复数.


若用普通幺正算符并保持 $H$ 不变, $\mathrm{i}$ 不会变号, 因而不能完成这个时间方向反转.

---
## Time reversal 对称性的定义


Hamilton 算符具有 time reversal 对称性, 意味着存在反幺正算符 $\Theta$ 满足 $\Theta H\Theta^{-1}=H$.
若 $H\ket{\psi}=E\ket{\psi}$, 由于 $E$ 为实数, 有:
$$
H\Theta\ket{\psi}=\Theta H\ket{\psi}=E\Theta\ket{\psi}.
$$
所以 $\Theta\ket{\psi}$ 也是能量为 $E$ 的本征态.


这一步只能说明两个态具有相同能量.
它们是否是线性独立的, 取决于 $\Theta^2$.

---
## Time reversal 平方的两种基本情形


在一个不能被其他对称结构继续分解的量子扇区中, time reversal 两次作用常表现为整体相位.
若射线层面的抽象关系是 $t^2=e$, 反幺正投影乘法的一致性把这个相位限制为两个基本可能:
$$
\Theta^2=+\mathbb{1}\quad\text{或}\quad\Theta^2=-\mathbb{1}.
$$
在物理射线上, 两者都对应连续做两次 time reversal 回到同一个纯态.
但是在 Hilbert 空间向量上, 它们并不等价.
给 $\Theta$ 重新乘任意整体相位都不会改变 $\Theta^2$, 因为反线性会把第二个相位复共轭.
所以这个正负号不能通过重新选择 $\Theta$ 的相位消除.


$\Theta^2=+\mathbb{1}$ 时, 可以选择一组由 $\Theta$ 保持的基底, 某些态也可以满足 $\Theta\ket{\psi}=\ket{\psi}$.
因此 time reversal 本身不强迫每个能级简并.


$\Theta^2=-\mathbb{1}$ 时, 不可能存在满足 $\Theta\ket{\psi}=c\ket{\psi}$ 的非零态.
否则再次作用 $\Theta$ 会与 $\Theta^2=-\mathbb{1}$ 矛盾.

---
## Kramers 正交关系


设 $\Theta^2=-\mathbb{1}$.
反幺正内积关系给出:
$$
\braket{\Theta\psi}{\Theta^2\psi}=\braket{\Theta\psi}{\psi}.
$$
左边利用 $\Theta^2\ket{\psi}=-\ket{\psi}$ 变为 $-\braket{\Theta\psi}{\psi}$.
因此 $\braket{\Theta\psi}{\psi}=0$.
等价地, $\braket{\psi}{\Theta\psi}=0$.


所以每个非零态都与它的 time reversal 伙伴正交.
这不是基底选择造成的, 而是 $\Theta^2=-\mathbb{1}$ 的直接代数结果.

---
## Kramers 简并定理


设 Hamilton 算符满足 $\Theta H\Theta^{-1}=H$, 并且 $\Theta^2=-\mathbb{1}$.
若 $\ket{\psi}$ 是能量为 $E$ 的本征态, 那么 $\Theta\ket{\psi}$ 具有同一能量.


Kramers 正交关系又说明 $\ket{\psi}$ 与 $\Theta\ket{\psi}$ 线性独立.
因此每个能级至少二重简并.


这称为 Kramers 简并定理.
两个正交同能量态组成一个 Kramers pair.


> **理解提示:** 简并不是由一个二维普通不可约表示直接推出的.
> 它来自反幺正作用及其平方为 $-\mathbb{1}$, 所以普通复表示的 Schur 引理不能独自替代这段推理.

---
## 为什么奇数维空间不允许这种结构


若有限维 Hilbert 空间上存在 $\Theta^2=-\mathbb{1}$, 任意态都与其 time reversal 伙伴组成线性独立的二元组.
整个空间因而必须具有偶数维数.


等价地, 在写法 $\Theta=VK$ 中, 条件 $\Theta^2=-\mathbb{1}$ 要求 $V\bar{V}=-\mathbb{1}$.
这赋予 Hilbert 空间一种成对结构.


所以 Kramers pair 不是某个特定 Hamilton 算符偶然产生的配对.
它先由反幺正对称结构规定, Hamilton 算符只要保持这个结构就必须尊重配对.

---
## Time reversal 对可观测量的作用


设自伴算符 $A$ 满足 $\Theta A\Theta^{-1}=\eta_A A$.
其中 $\eta_A=+1$ 或 $\eta_A=-1$.
$\eta_A=+1$ 时称 $A$ 为 time-reversal-even.
$\eta_A=-1$ 时称 $A$ 为 time-reversal-odd.


位置在 time reversal 下保持不变, 而动量改变符号:
$$
\Theta\bm{x}\Theta^{-1}=\bm{x},\quad\Theta\bm{p}\Theta^{-1}=-\bm{p}.
$$
角动量和自旋也改变符号, 因为它们描述运动或内部角动量的方向.


这些符号不是由算符是否含有 $\mathrm{i}$ 直接判断的.
应从 time reversal 的物理定义和完整反幺正作用推导.

---
## 非简并态中的 time-reversal-odd 期望值


若一个能量本征态非简并并且 Hamilton 算符保持 time reversal, 那么 $\Theta\ket{\psi}$ 必须与 $\ket{\psi}$ 表示同一个态射线.
适当选择相位以后, 在 $\Theta^2=+\mathbb{1}$ 情形可取 $\Theta\ket{\psi}=\ket{\psi}$.


对 time-reversal-odd 自伴算符 $A$, 其期望值必须满足自身等于自身的负值.
因此 $\expval{A}=0$.
在 $\Theta^2=-\mathbb{1}$ 情形, 能级不能非简并, 所以不能把这一结论直接套到单个 Kramers partner 上.
两个伙伴的 time-reversal-odd 期望值彼此相反, 但每个伙伴可以单独具有非零值.

---
## 矩阵形式的 Hamilton 约束


在选定基底中写 $\Theta=VK$.
对任意线性算符 $A$, 反幺正共轭作用为 $\Theta A\Theta^{-1}=V\bar{A}V^\dagger$.
因此 time reversal 对称 Hamilton 矩阵满足 $V\bar{H}V^\dagger=H$.
这个条件与普通幺正对称约束 $UHU^\dagger=H$ 的关键区别是矩阵 $H$ 被复共轭.


以后根据对称性构造 Hamiltonian 时, 必须先判断一个对称操作是幺正还是反幺正.
漏掉复共轭会得到错误的允许项.

---
## Time reversal 保持扰动


设 $H_0$ 具有 time reversal 对称性, 并加入自伴扰动 $V$.
若 $\Theta V\Theta^{-1}=V$, 则 $H_0+V$ 仍保持 time reversal.


当 $\Theta^2=-\mathbb{1}$ 时, 任何这种扰动都不能把一个孤立 Kramers pair 分裂成两个非简并能级.
它可以整体移动这对能级, 也可以在存在多个 Kramers pair 时重新混合不同配对方向.


若扰动满足 $\Theta V\Theta^{-1}\neq V$, time reversal 被破坏, Kramers 简并不再受到该定理保护.

---
## Time reversal 与普通有限群表示的边界


若把抽象 time reversal 元素记为 $t$, 射线层面可以有 $t^2=e$.
但是它在 Hilbert 空间上的实现 $\Theta$ 是反幺正的, 并且可能满足 $\Theta^2=-\mathbb{1}$.


因此不能把 $\Theta$ 直接当作 $\mathbb{Z}_2$ 的普通复线性表示矩阵.
普通特征标和普通不可约表示分解只适用于幺正子群.


同时包含幺正和反幺正元素的对称结构需要 Wigner 共表示理论.
共表示的作用是把幺正元素的线性作用与反幺正元素的反线性作用放进同一套乘法规则.
下一篇将给出这种统一结构, 并说明 parity, time reversal 与其他 Hamiltonian 约束之间的区别.

---
## 本篇的逻辑总结


Time reversal 由反幺正算符 $\Theta$ 实现.
反线性使 $\mathrm{i}$ 变为 $-\mathrm{i}$, 从而把正向时间演化变成反向时间演化.


Hamilton 算符保持 time reversal 的条件是 $\Theta H\Theta^{-1}=H$.
在矩阵形式中, 若 $\Theta=VK$, 这个条件写成 $V\bar{H}V^\dagger=H$.


$\Theta^2=+\mathbb{1}$ 不自动强制简并.
$\Theta^2=-\mathbb{1}$ 则使每个态与它的 time reversal 伙伴正交, 从而产生 Kramers 简并.
