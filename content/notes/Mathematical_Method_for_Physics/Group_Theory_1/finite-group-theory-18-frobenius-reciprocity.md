---
title: 有限群论 18 - Frobenius 互反律
date: 2026-08-18
weight: 18
---


限制把 $G$-表示变成子群 $H$ 的表示, 诱导则把 $H$-表示变成 $G$ 的表示.
这两个过程方向相反, 但并不是互逆运算.
它们真正的关系是: 从诱导表示出发的 $G$-交织映射, 等价于从原表示出发, 指向限制表示的 $H$-交织映射.


这就是 Frobenius 互反律.
它把诱导表示的不可约分解直接化成第 16 篇的分支问题, 因而不必真的写出庞大的诱导表示矩阵再进行分解.


> **阅读提示:** 互反律比较的是两个交织映射空间, 不是说限制与诱导会互相抵消.
> 最实用的结论是: $W_a$ 在 $V_i|_H$ 中出现几次, $V_i$ 就在 $\operatorname{Ind}_{H\to G}(W_a)$ 中出现几次.

---
## 定理的设置


设 $H\leq G$, $W$ 是 $H$ 的有限维复表示, $V$ 是 $G$ 的有限维复表示.
群作用分别记为 $\sigma:H\to\mathrm{GL}(W),\quad \rho:G\to\mathrm{GL}(V)$.
相应的诱导表示与限制表示为 $\operatorname{Ind}_{H\to G}(W),\quad V|_H$.
Frobenius 互反律断言存在自然的线性同构 $\operatorname{Hom}_G(\operatorname{Ind}_{H\to G}(W),V)\cong\operatorname{Hom}_H(W,V|_H)$.


左侧的映射必须与整个 $G$ 的作用相容, 右侧的映射只需要与 $H$ 的作用相容.
看似左侧条件更强, 但诱导空间本来就是从 $W$ 的各个陪集副本生成的; 一个 $G$-交织映射在单位陪集副本上的取值已经决定了它在全部副本上的取值.

---
## 从单位陪集取出原表示


使用上一篇的等变函数模型 $\operatorname{Ind}_{H\to G}(W)=\{f:G\to W\mid f(gh)=\sigma(h^{-1})f(g)\}$.
对 $w\in W$, 定义只支撑在单位陪集 $H$ 上的函数:
$$
(\iota(w))(g)=
\begin{cases}
\sigma(g^{-1})w,&g\in H,\\
0,&g\notin H.
\end{cases}
$$
它满足诱导空间的等变条件, 并且 $\iota(w)(e)=w$, 所以 $\iota$ 把 $W$ 嵌入诱导空间中.
对 $h\in H$, 这个嵌入满足 $\rho_{\mathrm{ind}}(h)\iota(w)=\iota(\sigma(h)w)$.
因此单位陪集对应的副本在 $H$ 的作用下正是原表示 $W$.

---
## 一个方向: 限制群交织映射


取一个 $G$-交织映射 $T:\operatorname{Ind}_{H\to G}(W)\to V$.
只看它在单位陪集副本上的作用, 定义 $\Phi(T)=T\circ\iota:W\to V$.
因为 $T$ 与 $G$ 的作用交换, 它当然也与 $H$ 的作用交换; 再结合 $\iota$ 的相容性可得 $\Phi(T)(\sigma(h)w)=\rho(h)\Phi(T)(w)$.
所以, $\Phi(T)\in\operatorname{Hom}_H(W,V|_H)$.
这一步的意思很简单: 一个定义在整个诱导空间上的 $G$-相容映射, 限制到原来的那份 $W$ 上以后, 必定给出 $H$-相容映射.

---
## 反方向: 从一个副本扩展到全部陪集


反过来, 给定 $A\in\operatorname{Hom}_H(W,V|_H)$.
选择一组左陪集代表 $t_1,\ldots,t_n$, 其中 $n=[G:H]$.
对诱导空间中的函数 $f$, 定义 $T_A(f)=\sum_{a=1}^{n}\rho(t_a)A(f(t_a))$.
这个公式先用 $A$ 处理每个陪集副本中的向量, 再用 $\rho(t_a)$ 把单位陪集的数据搬到相应位置.


这个定义不依赖陪集代表的选择.
若把 $t_a$ 换成 $t_ah$, 则等变条件与 $A$ 的交织性质给出 $\rho(t_ah)A(f(t_ah))=\rho(t_a)A(f(t_a))$.
而 $G$ 的左乘只会重新排列这些陪集代表, 所以同一个求和还满足 $T_A\rho_{\mathrm{ind}}(x)=\rho(x)T_A$.
因此 $T_A$ 是 $G$-交织映射.


> **理解提示:** 这里选择陪集代表只是为了写坐标公式.
> 等变条件保证更换代表不会改变结果, 所以最后得到的映射不依赖这项人为选择.

---
## 两个构造为何互为逆


若从 $A$ 构造 $T_A$, 再限制回单位陪集, 由于 $\iota(w)$ 在单位元处取值为 $w$, 立即得到 $T_A(\iota(w))=A(w)$.
反过来, 任意诱导空间函数都由各个陪集上的取值生成 $f=\sum_{a=1}^{n}\rho_{\mathrm{ind}}(t_a)\iota(f(t_a))$.
所以一个 $G$-交织映射 $T$ 完全由 $T\circ\iota$ 决定.
这说明两个方向的构造互为逆, 从而得到 $\operatorname{Hom}_G(\operatorname{Ind}_{H\to G}(W),V)\cong\operatorname{Hom}_H(W,V|_H)$.

---
## 特征标内积形式


记 $W$ 与 $V$ 的特征标分别为 $\psi$ 与 $\chi$.
有限群复表示完全可约, 因而两个表示的特征标内积等于它们之间交织映射空间的维数.
对互反律两侧取维数得到 $\langle\operatorname{Ind}_{H\to G}(\psi),\chi\rangle_G=\langle\psi,\chi|_H\rangle_H$.


> **符号提示:** $\operatorname{Ind}_{H\to G}(\psi)$ 表示诱导表示的特征标, $\chi|_H$ 表示把 $G$ 上的特征标限制到 $H$.
> 这个公式把一个 $G$ 上的内积换成了一个通常更容易计算的 $H$ 上内积.

---
## 不可约重数形式


设 $W_a$ 是 $H$ 的不可约表示, $V_i$ 是 $G$ 的不可约表示.
互反律给出 $[\operatorname{Ind}_{H\to G}(W_a):V_i]_G=[V_i|_H:W_a]_H$.
方括号左边表示 $V_i$ 在诱导表示中的重数, 右边表示 $W_a$ 在限制表示中的重数.


若分支规则写成 $V_i|_H\cong\bigoplus_{a=1}^{s}b_{i,a}W_a$, 那么同一批整数也给出诱导分解 $\operatorname{Ind}_{H\to G}(W_a)\cong\bigoplus_{i=1}^{r}b_{i,a}V_i$.
因此分支矩阵的第 $i$ 行描述 $V_i$ 怎样限制到 $H$, 第 $a$ 列描述 $W_a$ 怎样诱导到 $G$.

---
## 平凡表示给出的不变向量


取 $W_a=\mathbb{1}_H$.
它诱导出的表示是 $G$ 在陪集集合 $G/H$ 上的置换表示.
互反律说明 $[\operatorname{Ind}_{H\to G}(\mathbb{1}_H):V_i]_G=\dim(V_i)_{\mathrm{inv},H}$.
也就是说, $V_i$ 在陪集置换表示中出现多少次, 取决于 $V_i$ 中有多少个方向在整个子群 $H$ 下保持不变.

---
## 诱导沿子群链传递


若有子群链 $K\leq H\leq G$, 并且 $U$ 是 $K$-表示, 那么先诱导到 $H$ 再诱导到 $G$, 与直接诱导到 $G$ 得到同构表示 $\operatorname{Ind}_{H\to G}(\operatorname{Ind}_{K\to H}(U))\cong\operatorname{Ind}_{K\to G}(U)$.
连续两次应用互反律可知, 两侧每个不可约 $G$-表示的重数都相同; 完全可约性于是保证两侧同构.

---
## 为什么限制与诱导不是逆运算


限制不改变向量空间维数, 而诱导满足 $\dim\operatorname{Ind}_{H\to G}(W)=[G:H]\dim W$.
只要 $H$ 是真子群, 诱导通常就会增加维数, 所以它不可能简单撤销限制.
互反律说的是交织映射问题的对应, 而不是两个表示空间彼此还原.

---
## 逻辑总结


Frobenius 互反律的表示形式是 $\operatorname{Hom}_G(\operatorname{Ind}_{H\to G}(W),V)\cong\operatorname{Hom}_H(W,V|_H)$.
单位陪集副本说明一个 $G$-交织映射怎样产生 $H$-交织映射; 对所有陪集求和则把一个 $H$-交织映射扩展成 $G$-交织映射.
取维数以后得到特征标形式 $\langle\operatorname{Ind}_{H\to G}(\psi),\chi\rangle_G=\langle\psi,\chi|_H\rangle_H$.
对不可约表示而言, 它说明诱导重数正好等于限制分支重数.
因此限制与诱导虽然不是逆运算, 却由同一张分支矩阵控制.
