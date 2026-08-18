---
title: 有限群论 06 - 特征标的定义与基本性质
date: 2026-08-16
weight: 6
---


群表示把每个群元素变成一个可逆矩阵.
这种做法把群论问题带入线性代数, 但也带来新的困难: 一个 $d$ 维表示要同时记录许多个 $d\times d$ 矩阵, 而且换一组基以后, 所有矩阵的具体形式都会改变.
如果只想判断两个表示是否相同, 或者研究一个表示怎样分解, 直接比较全部矩阵通常过于繁琐.


矩阵的迹提供了一种压缩信息的方法.
它把每个表示矩阵压缩成一个复数, 在换基与共轭群元素下保持不变, 同时又与表示的直和相容.
由这些迹组成的函数称为特征标.


本文只讨论特征标的定义与基本性质.
我们将从迹为什么不依赖基开始, 证明特征标是共轭类上的常数, 再研究单位元, 逆元, 直和与表示核在特征标中的表现.
最后通过 $C_3$ 与 $S_3$ 的具体表示说明怎样计算特征标.
特征标内积, 正交关系与不可约表示的重数将在后面的文章中单独讨论.

---
## 为什么选择矩阵的迹


设 $V$ 是 $d$ 维复向量空间, $A:V\to V$ 是线性变换.
选定一组基以后, $A$ 由矩阵 $(a_{ij})$ 表示, 它的迹定义为 $\operatorname{tr}(A)=\sum_{i=1}^{d}a_{ii}$.
迹看起来是用矩阵的对角元定义的, 但它实际不依赖基的选择.
证明这一点只需使用恒等式 $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.
若 $A=(a_{ij})$ 与 $B=(b_{ij})$ 都是 $d\times d$ 矩阵, 则:
$$
\begin{aligned}
\operatorname{tr}(AB)
&=\sum_{i=1}^{d}(AB)_{ii}\\
&=\sum_{i=1}^{d}\sum_{j=1}^{d}a_{ij}b_{ji}\\
&=\sum_{j=1}^{d}\sum_{i=1}^{d}b_{ji}a_{ij}\\
&=\operatorname{tr}(BA).
\end{aligned}
$$
因此, 若 $S$ 可逆 $\operatorname{tr}(S^{-1}AS) =\operatorname{tr}(SS^{-1}A) =\operatorname{tr}(A)$.
换基只会把 $A$ 变成相似矩阵 $S^{-1}AS$, 所以迹是线性变换本身的数据, 而不是某组坐标的数据.
迹还满足线性性质 $\operatorname{tr}(aA+bB) =a\operatorname{tr}(A)+b\operatorname{tr}(B)$, 以及分块对角性质:
$$
\operatorname{tr}\mqty[
A&0\\
0&B
]=\operatorname{tr}(A)+\operatorname{tr}(B).
$$
前一条使迹适合线性代数计算, 后一条则使迹能够反映表示的直和分解.

---
## 特征标的定义


设 $\rho:G\to\mathrm{GL}(V)$ 是有限维复表示.
表示 $\rho$ 的**特征标**是函数 $\chi_{\rho}:G\to\mathbb{C}, \quad \chi_{\rho}(g)=\operatorname{tr}(\rho(g))$.
若上下文中已经明确表示 $\rho$, 通常简写为 $\chi(g)$.
特征标的定义域仍然是群 $G$, 但它不再给每个群元素分配矩阵, 而只分配一个复数.
因此特征标丢弃了许多矩阵条目.
它保留的是对换基不敏感, 并且特别适合研究直和分解的信息.
需要注意, 特征标一般不是群同态.
虽然 $\rho(gh)=\rho(g)\rho(h)$, 但通常 $\operatorname{tr}(\rho(g)\rho(h)) \neq \operatorname{tr}(\rho(g))\operatorname{tr}(\rho(h))$.
例如一个二维表示满足 $\chi(e)=2$.
如果 $\chi$ 是从 $G$ 到复数乘法群的同态, 单位元必须被映到 $1$, 这已经与 $\chi(e)=2$ 矛盾.
只有一维表示的特征标才与表示本身相同, 因而是到 $\mathbb{C}\setminus\{0\}$ 的群同态.


表示把群单位元映到恒等变换 $\rho(e)=\mathbb{1}_V$.
恒等矩阵的所有对角元都是 $1$, 所以 $\chi_{\rho}(e) =\operatorname{tr}(\mathbb{1}_V) =\dim V$.
因此只看特征标在单位元处的取值, 就能读出表示的维数.
这条性质也给出最基本的检查方法.
如果某个声称来自 $d$ 维表示的函数在单位元处不等于 $d$, 它就不可能是该表示的特征标.

---
## 等价表示具有相同的特征标


设 $\rho:G\to\mathrm{GL}(V)$ 与 $\sigma:G\to\mathrm{GL}(W)$ 等价.
存在向量空间同构 $T:V\to W$ 使 $\sigma(g)=T\rho(g)T^{-1}, \quad \forall g\in G$.
利用迹在相似变换下不变, 得到:
$$
\begin{aligned}
\chi_{\sigma}(g)
&=\operatorname{tr}(\sigma(g))\\
&=\operatorname{tr}(T\rho(g)T^{-1})\\
&=\operatorname{tr}(\rho(g))\\
&=\chi_{\rho}(g).
\end{aligned}
$$
所以, $\rho\cong\sigma \quad\Rightarrow\quad \chi_{\rho}=\chi_{\sigma}$.
这正是引入特征标的第一个理由.
表示矩阵会随基改变, 特征标却不会.
因此比较特征标比逐个比较表示矩阵更接近表示的内在结构.
反方向是否成立需要更加深入的结果.
对有限群的有限维复表示, 相同的特征标确实能够推出两个表示等价.
但这个结论要等到建立不可约特征标的正交关系与重数公式以后才能证明, 本文暂时不使用它.

---
## 特征标在共轭类上保持不变


设 $g,h\in G$.
$g$ 的共轭元素 $hgh^{-1}$ 在表示下变成 $\rho(hgh^{-1}) =\rho(h)\rho(g)\rho(h)^{-1}$.
这说明 $\rho(hgh^{-1})$ 与 $\rho(g)$ 是相似矩阵.
因此:
$$
\begin{aligned}
\chi_{\rho}(hgh^{-1})
&=\operatorname{tr}(\rho(h)\rho(g)\rho(h)^{-1})\\
&=\operatorname{tr}(\rho(g))\\
&=\chi_{\rho}(g).
\end{aligned}
$$
所以特征标在同一个共轭类中的所有元素上取值相同.
满足 $f(hgh^{-1})=f(g), \quad \forall g,h\in G$ 的函数 $f:G\to\mathbb{C}$ 称为 $G$ 上的**类函数**.
每个特征标都是类函数.
但一般的类函数未必是某个表示的特征标.
这个结论显著减少了计算量.
要确定一个特征标, 不需要对每个群元素分别计算迹, 只需从每个共轭类中选一个代表元进行计算.
若 $G$ 有 $k$ 个共轭类, 一个类函数只需要记录 $k$ 个复数.


两个类函数的和仍是类函数, 类函数的数量倍数也仍是类函数.
因此所有复值类函数组成向量空间, 记为 $\operatorname{Cl}(G) =\{f:G\to\mathbb{C}\mid f(hgh^{-1})=f(g), \forall g,h\in G\}$.
若 $G$ 有 $k$ 个共轭类, 指定一个类函数只需给每个共轭类指定一个复数.
所以, $\dim\operatorname{Cl}(G)=k =G\text{ 的共轭类个数}$.
特征标位于这个类函数空间中.
后面引入类函数内积以后, 不可约特征标将在这个空间中扮演一组特殊正交基的角色.
这里暂时只需要记住: 特征标表以共轭类而不是单个群元素作为列, 正是因为特征标是类函数.


> **术语提示:** $\operatorname{Cl}(G)$ 只是全部类函数的空间; 其中大多数函数并不是表示的特征标.

---
## 直和的特征标相加


设 $\rho:G\to\mathrm{GL}(V)$ 与 $\sigma:G\to\mathrm{GL}(W)$ 是两个表示.
在适合直和 $V\oplus W$ 的基下:
$$
(\rho\oplus\sigma)(g)
=\mqty[
\rho(g)&0\\
0&\sigma(g)
].
$$
因此:
$$
\begin{aligned}
\chi_{\rho\oplus\sigma}(g)
&=\operatorname{tr}\mqty[
\rho(g)&0\\
0&\sigma(g)
]\\
&=\operatorname{tr}(\rho(g))+\operatorname{tr}(\sigma(g))\\
&=\chi_{\rho}(g)+\chi_{\sigma}(g).
\end{aligned}
$$
所以, $\chi_{\rho\oplus\sigma} =\chi_{\rho}+\chi_{\sigma}$.
更一般地, 若 $V\cong m_1V_1\oplus m_2V_2\oplus\cdots\oplus m_rV_r$, 其中 $m_iV_i$ 表示 $m_i$ 个 $V_i$ 的直和, 则 $\chi_V =m_1\chi_{V_1}+m_2\chi_{V_2}+\cdots+m_r\chi_{V_r}$.
这说明表示的直和分解会变成特征标的线性分解.
后面研究特征标内积的主要目的, 就是从 $\chi_V$ 中反推出这些整数 $m_i$.

---
## 有限群元素的表示矩阵有什么特征值


设 $G$ 是有限群, $g\in G$ 的阶为 $m$.
因为 $g^m=e$, 所以 $\rho(g)^m=\rho(g^m)=\rho(e)=\mathbb{1}_V$.
若 $\lambda$ 是 $\rho(g)$ 的特征值, 并且 $v\neq0$ 满足 $\rho(g)v=\lambda v$, 则 $v=\rho(g)^mv=\lambda^mv$.
因此, $\lambda^m=1$.
所以 $\rho(g)$ 的每个特征值都是 $m$ 次单位根, 特别有 $|\lambda|=1, \quad \lambda^{-1}=\bar{\lambda}$.
此外, $\rho(g)$ 在 $\mathbb{C}$ 上一定可以对角化.
原因是它满足 $\rho(g)^m=\mathbb{1}_V$, 而多项式 $x^m-1$ 在复数域上没有重根.


> **线性代数提示:** 一个矩阵若满足某个没有重根的多项式, 就可以对角化; 如果暂时不熟悉最小多项式, 先记住"有限阶复矩阵可以对角化"这个结论即可.


需要区分两件事.
每个单独的有限阶矩阵都可以对角化, 但一个非交换群的全部表示矩阵一般不能同时对角化.
若它们能够同时对角化, 每个共同特征向量张成的一维空间都会在整个群作用下保持不变, 表示也就分解成一维表示的直和.

---
## 逆元处的特征标


设 $\rho(g)$ 的特征值为 $\lambda_1,\ldots,\lambda_d$.
那么 $\rho(g^{-1})=\rho(g)^{-1}$ 的特征值为 $\lambda_1^{-1},\ldots,\lambda_d^{-1}$.
由于这些特征值都是单位根, $\lambda_i^{-1}=\bar{\lambda_i}$.
因此:
$$
\begin{aligned}
\chi_{\rho}(g^{-1})
&=\sum_{i=1}^{d}\lambda_i^{-1}\\
&=\sum_{i=1}^{d}\bar{\lambda_i}\\
&=\bar{\sum_{i=1}^{d}\lambda_i}\\
&=\bar{\chi_{\rho}(g)}.
\end{aligned}
$$
所以有限群的复表示满足 $\chi_{\rho}(g^{-1}) =\bar{\chi_{\rho}(g)}$.
若 $g$ 与 $g^{-1}$ 共轭, 类函数性质又给出 $\chi_{\rho}(g^{-1})=\chi_{\rho}(g)$.
两式结合可知 $\chi_{\rho}(g)$ 是实数.
因此在每个元素都与其逆元共轭的群中, 所有复表示的特征标值都是实数.

---
## 特征标的大小与表示的核


仍设 $\dim V=d$, 并令 $\lambda_1,\ldots,\lambda_d$ 为 $\rho(g)$ 的特征值.
因为 $|\lambda_i|=1$, 三角不等式给出:
$$
|\chi_{\rho}(g)| =\left|\sum_{i=1}^{d}\lambda_i\right| \leq\sum_{i=1}^{d}|\lambda_i| =d.
$$
所以, $|\chi_{\rho}(g)|\leq\chi_{\rho}(e)$.
特征标还能识别哪些群元素位于表示的核中.
若 $g\in\ker\rho$, 则 $\rho(g)=\mathbb{1}_V$, 因而 $\chi_{\rho}(g)=d=\chi_{\rho}(e)$.
反过来, 若 $\chi_{\rho}(g)=d$, 则 $\lambda_1+\cdots+\lambda_d=d$.
每个 $\lambda_i$ 都位于复平面的单位圆上.
它们的和达到三角不等式的最大可能值 $d$, 而且方向是正实轴, 这迫使 $\lambda_1=\lambda_2=\cdots=\lambda_d=1$.
前面已经证明 $\rho(g)$ 可对角化, 所以全部特征值为 $1$ 进一步推出 $\rho(g)=\mathbb{1}_V$.
因此, $\ker\rho =\{g\in G\mid\chi_{\rho}(g)=\chi_{\rho}(e)\}$.
于是有限群的复表示 $\rho$ 忠实当且仅当 $\chi_{\rho}(g)\neq\chi_{\rho}(e), \quad \forall g\neq e$.
这说明特征标虽然只记录迹, 仍然能够恢复表示的核.

---
## 一维表示的特征标


一维表示 $\rho:G\to\mathbb{C}\setminus\{0\}$ 的表示矩阵只是 $1\times1$ 矩阵 $(\rho(g))$.
所以, $\chi_{\rho}(g)=\rho(g)$.
因此一维表示与它的特征标没有区别.
平凡表示 $\bm{1}$ 的特征标为 $\chi_{\bm{1}}(g)=1, \quad \forall g\in G$.
$S_n$ 的符号表示满足:
$$
\chi_{\mathrm{sgn}}(g)
=\operatorname{sgn}(g)
=
\begin{cases}
1,&g\text{ 是偶置换},\\
-1,&g\text{ 是奇置换}.
\end{cases}
$$
这两个例子也说明一维特征标的值必为单位根.
因为有限群中每个元素都有有限阶, 它在一维表示下的像也必须有有限阶.

---
## $C_3$ 二维表示的特征标


令 $C_3=\langle r\mid r^3=e\rangle, \quad \omega=\mathrm{e}^{2\pi\mathrm{i}/3}$.
考虑前两篇已经使用过的二维表示:
$$
\rho(r)=\mqty[
\omega&0\\
0&\omega^{-1}
].
$$
因为 $C_3$ 是交换群, 每个共轭类都只含有一个元素.
直接计算得到:
$$
\begin{aligned}
\chi_{\rho}(e)&=2,\\
\chi_{\rho}(r)&=\omega+\omega^{-1},\\
\chi_{\rho}(r^2)&=\omega^2+\omega^{-2}.
\end{aligned}
$$
利用 $1+\omega+\omega^2=0$ 与 $\omega^{-1}=\omega^2$, 可得 $\chi_{\rho}(e)=2, \quad \chi_{\rho}(r)=-1, \quad \chi_{\rho}(r^2)=-1$.
这个表示实际是两个一维表示的直和.
令 $\rho_1(r)=\omega$ 与 $\rho_2(r)=\omega^{-1}$, 则 $\rho=\rho_1\oplus\rho_2$, 相应地, $\chi_{\rho} =\chi_{\rho_1}+\chi_{\rho_2}$.
矩阵的分块分解在特征标中变成了两个复值函数的相加.

---
## 置换表示的特征标等于不动点数


设有限群 $G$ 作用在有限集合 $X$ 上, 并考虑置换表示 $\rho:G\to\mathrm{GL}(\mathbb{C}[X]), \quad \rho(g)e_x=e_{g\cdot x}$.
在基 $\{e_x\mid x\in X\}$ 下, $\rho(g)$ 是置换矩阵.
它在与 $e_x$ 对应的对角位置上取值 $1$, 当且仅当 $g\cdot x=x$.
其他对角位置取值为 $0$.
因此矩阵的迹正好等于被 $g$ 固定的点数 $\chi_{\mathbb{C}[X]}(g) =|\operatorname{Fix}_X(g)|$, 其中 $\operatorname{Fix}_X(g) =\{x\in X\mid g\cdot x=x\}$.
这个公式把线性代数中的迹变成了群作用中的计数问题.
计算置换特征标时不必真正写出置换矩阵, 只需数出每个群元素保留了多少个点.
