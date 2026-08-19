---
title: 晶体对称性 05 - 双群与含自旋表示
date: 2026-08-19
weight: 5
---


不考虑自旋时, 晶体的方向变换可以直接用正交矩阵作用在空间坐标和轨道上.
加入半整数自旋以后, 同一个几何旋转还必须作用在 spinor 上.
这时普通点群只记录空间中的旋转, 却不能完整记录 spinor 在连续旋转下积累的符号.


解决方法是使用双群.
双群不是给晶体增加新的几何对称操作, 而是把每个几何旋转的两个 spinor 提升区分开, 从而把投影表示改写成普通线性表示.


> **阅读重点:** 空间中的旋转属于 $\mathrm{SO}(3)$, 二分量 spinor 由 $\mathrm{SU}(2)$ 作用.
> 映射 $\mathrm{SU}(2)\to\mathrm{SO}(3)$ 是二对一的, 所以 $2\pi$ 旋转在空间中是恒等变换, 在 spinor 空间中却表示为 $-\mathbb{1}$.

---
## 向量表示与 spinor 表示不是同一个表示


三维实空间中的 proper rotation 由 $R\in\mathrm{SO}(3)$ 表示.
它作用在普通向量 $\bm{v}$ 上, $\bm{v}\mapsto R\bm{v}$.


自旋 $1/2$ 态属于二维复向量空间.
绕单位轴 $\bm{n}$ 旋转角度 $\theta$ 时, spinor 由矩阵作用:
$$
U_{\bm{n}}(\theta)=\exp[-\mathrm{i}\theta\bm{n}\cdot\bm{s}/2].
$$
这里 $\bm{s}=(s_x,s_y,s_z)$ 是 Pauli 矩阵.


利用 $(\bm{n}\cdot\bm{s})^2=\mathbb{1}$, 可以写成:
$$
U_{\bm{n}}(\theta)=\cos(\theta/2)\mathbb{1}-\mathrm{i}\sin(\theta/2)\bm{n}\cdot\bm{s}.
$$


同一个旋转对三维向量和二分量 spinor 的矩阵维数不同, 周期性也不同.
所以不能把三维正交矩阵 $R$ 直接放进自旋空间.

---
## 为什么 $2\pi$ 旋转得到负号


令 $\theta=2\pi$, spinor 旋转矩阵为:
$$
U_{\bm{n}}(2\pi)=\cos(\pi)\mathbb{1}-\mathrm{i}\sin(\pi)\bm{n}\cdot\bm{s}=-\mathbb{1}.
$$
而 $4\pi$ 旋转满足 $U_{\bm{n}}(4\pi)=\mathbb{1}$.


对普通空间向量, $2\pi$ 旋转已经是恒等操作.
因此一个 $\mathrm{SO}(3)$ 元素不能唯一决定 spinor 矩阵.
对应同一个空间旋转 $R$ 的两个 spinor 矩阵是 $U$ 与 $-U$.


整体负号不改变单个纯态射线, 所以在射线空间中没有矛盾.
但在建立群表示和比较不同对称操作的复合关系时, 这个负号不能随意忽略.
它正是普通点群在半整数自旋空间中只得到投影表示的原因.

---
## $\mathrm{SU}(2)$ 是 $\mathrm{SO}(3)$ 的双覆盖


对每个 $U\in\mathrm{SU}(2)$, 可以通过它对 Pauli 向量的共轭作用定义一个三维旋转:
$$
U(\bm{v}\cdot\bm{s})U^{-1}=(R_U\bm{v})\cdot\bm{s}.
$$


映射 $p:U\mapsto R_U$ 是群同态 $\mathrm{SU}(2)\to\mathrm{SO}(3)$.
它是满射, 并且核为 $\{\mathbb{1},-\mathbb{1}\}$.


因此 $U$ 与 $-U$ 映到同一个空间旋转.
数学上说, $\mathrm{SU}(2)$ 是 $\mathrm{SO}(3)$ 的二重覆盖群.


这里的覆盖不是把空间旋转复制两份后随意编号.
两个提升之间的乘法由 $\mathrm{SU}(2)$ 群结构固定, 这正好记录连续旋转路径对 spinor 符号的影响.

---
## 从点群得到双群


先考虑只含 proper rotation 的有限点群 $P\subset\mathrm{SO}(3)$.
取它在覆盖映射下的原像:
$$
\widetilde{P}=p^{-1}(P)\subset\mathrm{SU}(2).
$$


对 $P$ 中每个旋转, $\widetilde{P}$ 包含两个提升.
因此 $|\widetilde{P}|=2|P|$.
$\widetilde{P}$ 就是相应的双群.


双群中有一个额外中心元素, 通常记为 $\bar{E}$.
它投影到空间中的恒等旋转, 但在 spinor 表示中满足 $D(\bar{E})=-\mathbb{1}$.
它还满足 $\bar{E}^2=E$ 并与全部群元素对易.


每个普通点群元素 $g$ 在双群中有两个提升 $\tilde{g}$ 与 $\bar{E}\tilde{g}$.
它们在实空间中的几何作用相同, 在半整数自旋空间中的矩阵相差负号.

---
## Single-valued 与 double-valued 表示


双群的不可约表示分成两类.


若 $D(\bar{E})=\mathbb{1}$, 表示不能区分 $E$ 与 $\bar{E}$, 因而下降为普通点群的表示.
这类表示称为 single-valued representation.


若 $D(\bar{E})=-\mathbb{1}$, 表示保留 $2\pi$ 旋转对 spinor 的负号.
这类表示称为 double-valued representation 或 spinor representation.


整数角动量轨道属于 single-valued 类型, 半整数角动量态属于 double-valued 类型.
当轨道与自旋耦合后, 总态应按照双群不可约表示分类.


> **术语提示:** Double-valued 不是说一个群元素同时对应两个任意矩阵值.
> 它是历史名称.
> 在双群上, 这些表示是完全普通的单值线性表示.

---
## 与投影表示的关系


若坚持只使用普通点群 $P$, 给每个旋转选择一个 spinor 矩阵 $U(R)$, 复合时可能出现:
$$
U(R_1)U(R_2)=\omega(R_1,R_2)U(R_1R_2),\quad\omega(R_1,R_2)\in\{1,-1\}.
$$


这就是 $P$ 的投影表示.
因子 $\omega$ 记录选择提升时无法同时消去的符号.


双群把这个符号吸收到群元素本身.
在 $\widetilde{P}$ 上, 矩阵满足严格乘法关系 $D(\tilde{g}_1)D(\tilde{g}_2)=D(\tilde{g}_1\tilde{g}_2)$.


因此投影表示和双群表示是同一物理结构的两种组织方式.
对有限群表示分解和特征标计算, 使用双群通常更直接.

---
## Improper transformation 怎样处理


完整晶体点群还可能包含反演和反射等 determinant 为 $-1$ 的正交变换.
它们不属于 $\mathrm{SO}(3)$, 所以不能仅由 $\mathrm{SU}(2)\to\mathrm{SO}(3)$ 覆盖直接处理.


一种常用组织方式是把 improper transformation 写成反演 $I$ 与 proper rotation 的乘积.
反演对极向量满足 $\bm{r}\mapsto-\bm{r}$, 但自旋是轴矢量, 在空间反演下方向不变.


因此反演在纯自旋空间中通常不产生 Pauli 矩阵旋转, 但它可以在轨道和子格空间中有非平凡作用.
局域轨道还可能带有自身的 parity 符号.


反射可以写成反演与绕法向轴的 $\pi$ proper rotation 的乘积.
它在 spinor 空间中的矩阵因而可以由相应 $\pi$ 旋转矩阵与反演表示组合得到.


具体矩阵仍然允许整体相位约定.
重要的是所有生成元必须满足同一个双空间群的乘法关系, 并与轨道和子格部分共同检查.

---
## 为什么 spin-orbit coupling 要求使用双群


没有 spin-orbit coupling 时, 空间变换与自旋旋转常常可以作为两个相对独立的对称结构处理.
Hamiltonian 可能具有额外的连续自旋旋转对称性.


存在 spin-orbit coupling 时, 晶格方向变换与自旋变换被锁定.
一个晶体旋转必须同时旋转轨道空间和 spinor 空间, 不能只作用其中一部分.


此时 Bloch 态在高对称动量处的标签是 little double group 的不可约表示, 不是无自旋 little co-group 表示再随意附加一个二分量标签.


轨道表示与 spinor 表示先做张量积, 再按照双群不可约表示分解.
这一步决定哪些态可以混合, 哪些简并由晶体对称性要求, 以及 Hamiltonian 中哪些自旋相关矩阵项允许出现.

---
## 固定动量处使用 little double group


对给定 $\bm{k}$, 先找出保持 $\bm{k}$ 模倒格矢的 little co-group $P_{\bm{k}}$.
含半整数自旋时, 应使用它在 spinor 覆盖中的提升 $\widetilde{P}_{\bm{k}}$.


Bloch 表示还包含空间群平移相位.
若空间群是 nonsymmorphic 的, little co-group 的分数平移因子与 spinor 的双覆盖符号会同时进入乘法关系.


因此实际表示应从完整空间群元素在局域 Bloch 基底中的作用推导, 再识别其对应的 little double group 或投影表示.
不能只查一张普通点群特征标表后忽略平移与自旋.

---
## 怎样构造生成元的 spinor 矩阵


对每个 proper rotation 生成元, 确定旋转轴 $\bm{n}$ 和主动旋转角 $\theta$, 然后使用 $U_{\bm{n}}(\theta)=\exp[-\mathrm{i}\theta\bm{n}\cdot\bm{s}/2]$.


接着固定空间群乘法顺序和坐标约定.
由生成元矩阵相乘得到其他群元素的 spinor 矩阵, 不要为每个元素独立选择符号.


最后检查群关系.
若空间群生成元满足某个乘积等于恒等空间变换, 双群中的对应矩阵乘积可能等于 $\mathbb{1}$ 或 $-\mathbb{1}$, 取决于该乘积在双群中是 $E$ 还是 $\bar{E}$.


再把 spinor 矩阵与格点置换, Bloch 相位和轨道矩阵组合, 得到完整 $D_g(\bm{k})$.

---
## 双群本身不自动给出 Kramers 简并


双群处理的是半整数自旋对空间变换的幺正表示.
Kramers 定理则依赖反幺正 time reversal 算符满足 $\Theta^2=-\mathbb{1}$.


二者经常同时出现, 但逻辑上不同.
某个双群不可约表示的维数可以要求空间对称性简并, time reversal 还可能把一个表示与其共轭表示配对.


因此不能只看到 spinor 或双群就断言所有动量处都有 Kramers 简并.
必须另外检查 time reversal 是否是体系对称性, 它把 $\bm{k}$ 送到哪里, 以及该动量是否与 $-\bm{k}$ 等价.

---
## 本篇结论


半整数自旋由 $\mathrm{SU}(2)$ 的 spinor 表示描述, 同一个 $\mathrm{SO}(3)$ 旋转对应 $\pm U$ 两个提升.
$2\pi$ 旋转在实空间中是恒等操作, 在 spinor 空间中却是 $-\mathbb{1}$.


点群的双群把这两个提升作为不同群元素保存, 使半整数自旋的投影表示变成普通线性表示.
存在 spin-orbit coupling 时, Bloch 态应按照 little double group 的不可约表示分类.


下一篇将把前五篇的对象组装成一个可执行流程, 系统构造所有满足指定有限群对称性的 Bloch Hamiltonian 项.
