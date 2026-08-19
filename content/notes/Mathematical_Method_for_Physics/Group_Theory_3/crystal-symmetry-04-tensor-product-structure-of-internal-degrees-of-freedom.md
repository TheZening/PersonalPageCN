---
title: 晶体对称性 04 - 内部自由度的张量积结构
date: 2026-08-19
weight: 4
---


Bloch Hamiltonian 是有限维 Hermitian 矩阵.
若只把它写成一个没有结构的矩阵, 很难看出每个矩阵元对应哪种内部自由度, 也很难系统施加对称性.


更清楚的做法是把内部 Hilbert 空间分解成若干因子的张量积.
子格, 轨道和自旋是最常见的因子.
对称矩阵与 Hamiltonian 矩阵都可以在相应的张量积矩阵基底中展开.


> **阅读重点:** Hilbert 空间的张量积描述多个独立标签同时存在, 算符空间也随之成为各因子算符空间的张量积.
> 对称性通过共轭作用变换矩阵基底, Hamiltonian 的动量函数必须与矩阵部分组合成群的不变量.

---
## 为什么多个标签对应张量积


设每个 Bloch 态同时带有子格标签 $\alpha$, 轨道标签 $\mu$ 和自旋标签 $s$.
若这些标签可以独立选取, 基底态可写成:
$$
\ket{\alpha,\mu,s}=\ket{\alpha}_{\mathrm{sub}}\otimes\ket{\mu}_{\mathrm{orb}}\otimes\ket{s}_{\mathrm{spin}}.
$$


相应的内部 Hilbert 空间为:
$$
\mathcal{H}_{\mathrm{int}}=\mathcal{H}_{\mathrm{sub}}\otimes\mathcal{H}_{\mathrm{orb}}\otimes\mathcal{H}_{\mathrm{spin}}.
$$


张量积不是把三个空间简单并排放置.
它允许每个标签的所有组合, 所以总维数相乘:
$$
\dim\mathcal{H}_{\mathrm{int}}=(\dim\mathcal{H}_{\mathrm{sub}})(\dim\mathcal{H}_{\mathrm{orb}})(\dim\mathcal{H}_{\mathrm{spin}}).
$$


> **术语提示:** 直和描述互相替代的扇区, 张量积描述同时存在的自由度.
> 若一个态要同时说明它位于哪个子格, 占据哪个轨道并具有哪个自旋分量, 对应的是张量积.

---
## 什么时候张量积分解需要修正


张量积分解依赖模型基底确实具有独立的笛卡尔积标签.
有些格点只放置某些轨道, 或不同位置具有不同维数的局域空间.
此时整体空间更自然地写成各格点局域空间的直和, 而不是一个统一的子格空间与轨道空间的完整张量积.


即使 Hilbert 空间可以写成张量积, 一个对称变换也不一定分解成三个互不相关矩阵的单个 Kronecker product.
原因是轨道变换可能依赖起点格点, 格点置换也可能同时改变局域坐标系.


因此 $D_g=D_g^{\mathrm{sub}}\otimes D_g^{\mathrm{orb}}\otimes D_g^{\mathrm{spin}}$ 是需要验证的特殊形式, 不是自动成立的定义.
一般情况下, $D_g$ 仍然可以在张量积矩阵基底中展开, 但可能包含多个张量积项之和.

---
## 算符空间也具有张量积结构


若 $\mathcal{H}=V_1\otimes V_2$, 线性算符空间满足自然同构:
$$
\operatorname{End}(\mathcal{H})\cong\operatorname{End}(V_1)\otimes\operatorname{End}(V_2).
$$


因此若 $\{A_i\}$ 是 $\operatorname{End}(V_1)$ 的基底, $\{B_j\}$ 是 $\operatorname{End}(V_2)$ 的基底, 那么 $\{A_i\otimes B_j\}$ 是总算符空间的基底.


对三个内部因子, 任意 Hamiltonian 都可以展开成:
$$
H(\bm{k})=\sum_{abc}h_{abc}(\bm{k})M_a^{\mathrm{sub}}\otimes M_b^{\mathrm{orb}}\otimes M_c^{\mathrm{spin}}.
$$


$M_a^{\mathrm{sub}}$, $M_b^{\mathrm{orb}}$ 和 $M_c^{\mathrm{spin}}$ 分别是各因子上的矩阵基底.
全部物理信息被分成动量依赖系数 $h_{abc}(\bm{k})$ 与固定矩阵结构两部分.

---
## Hermitian 矩阵基底


Hamiltonian 必须满足 $H^\dagger(\bm{k})=H(\bm{k})$.
为了自动保持 Hermiticity, 可以在每个因子上选择 Hermitian 矩阵基底, 并要求展开系数为实函数.


二维因子最常使用 $\{\mathbb{1},\sigma_x,\sigma_y,\sigma_z\}$.
它们都是 Hermitian 矩阵, 并且关于 Hilbert-Schmidt 内积正交:
$$
\operatorname{tr}(\sigma_i\sigma_j)=2\delta_{ij},\quad\operatorname{tr}(\mathbb{1}\sigma_i)=0.
$$


若体系中存在多个不同的二维因子, 应使用不同符号区分它们.
例如可以用 $\tau_i$ 表示子格空间, $\lambda_i$ 表示轨道空间, $s_i$ 表示自旋空间.
符号本身没有物理意义, 其意义由基底标签的定义决定.


对 $d$ 维因子, 可以选择 $d^2$ 个 Hermitian 矩阵作为实向量空间基底.
一个基底元素与恒等矩阵成比例, 其余 $d^2-1$ 个可以选择为 traceless Hermitian 矩阵.


> **术语提示:** Traceless 表示矩阵迹为零.
> 将恒等矩阵方向分离出来以后, 其余方向描述不同内部态之间的能量差和混合.

---
## 展开系数怎样从 Hamiltonian 取出


若 Hermitian 基底 $\{M_A\}$ 满足 $\operatorname{tr}(M_AM_B)=c_A\delta_{AB}$, 任意 Hermitian Hamiltonian 可以唯一写成 $H(\bm{k})=\sum_Ah_A(\bm{k})M_A$.


系数由投影得到:
$$
h_A(\bm{k})=\frac{1}{c_A}\operatorname{tr}[M_AH(\bm{k})].
$$


因为 $M_A$ 与 $H$ 都是 Hermitian 的, $\operatorname{tr}(M_AH)$ 是实数.
所以 Hermitian 基底把 Hermiticity 条件转化成系数函数为实函数这一简单要求.


张量积基底的正交性来自各因子正交性的乘积:
$$
\operatorname{tr}[(A_i\otimes B_j)(A_{i'}\otimes B_{j'})]=\operatorname{tr}(A_iA_{i'})\operatorname{tr}(B_jB_{j'}).
$$


因此系数也可以通过一次总空间迹运算直接提取.

---
## 对称性怎样作用在矩阵空间


态空间中的对称矩阵为 $D_g(\bm{k})$.
矩阵算符通过共轭作用变换:
$$
M\mapsto D_g(\bm{k})MD_g^{-1}(\bm{k}).
$$


如果 $g$ 属于固定 $\bm{k}$ 的 little group, 这是同一个矩阵空间上的线性表示.
记这个算符空间表示为 $\mathcal{R}_M(g)$, 即 $\mathcal{R}_M(g)M=D_gMD_g^{-1}$.


共轭作用保持矩阵乘法, Hermiticity 和 Hilbert-Schmidt 内积.
因此它把 Hermitian 矩阵实向量空间映回自身, 并可以在所选矩阵基底中写成实正交矩阵.


若 $D_g$ 能分解为因子表示, 共轭作用也按因子分解:
$$
(D_g^{(1)}\otimes D_g^{(2)})(A\otimes B)(D_g^{(1)}\otimes D_g^{(2)})^{-1}=(D_g^{(1)}A D_g^{(1)-1})\otimes(D_g^{(2)}B D_g^{(2)-1}).
$$


这使得大矩阵空间的变换性质可以从小矩阵空间逐层组合得到.

---
## 矩阵基底本身形成群表示


对一组矩阵基底 $\{M_A\}$, 共轭后仍可在同一基底中展开:
$$
D_gM_AD_g^{-1}=\sum_B[\mathcal{R}_M(g)]_{BA}M_B.
$$


矩阵 $\mathcal{R}_M(g)$ 描述的不是量子态怎样变换, 而是 Hamiltonian 中不同矩阵结构怎样互相混合.
它由态表示 $D_g$ 诱导而来.


若某个 $M_A$ 对全部群元素都满足 $D_gM_AD_g^{-1}=M_A$, 它属于算符空间中的平凡表示.
常数系数乘这个矩阵就自动给出对称允许项.


若若干矩阵在共轭作用下互相混合, 它们共同张成一个非平凡表示子空间.
它们不能各自随意乘常数加入 Hamiltonian, 但可以与具有互补变换规律的动量函数组合成总不变量.

---
## 动量函数也形成群表示


选取一组动量函数 $\{f_a(\bm{k})\}$.
点群通过变量替换作用在函数上:
$$
[\mathcal{R}_F(g)f](\bm{k})=f(g^{-1}\bm{k}).
$$


逆元保证这是左群作用, 即 $\mathcal{R}_F(g_1)\mathcal{R}_F(g_2)=\mathcal{R}_F(g_1g_2)$.
若函数空间在群作用下封闭, 它就是一个有限维表示空间.


在 $\bm{k}_0$ 附近的 $\bm{k}\cdot\bm{p}$ 展开中, 通常写 $\bm{k}=\bm{k}_0+\bm{q}$.
little group 作用在小偏移量 $\bm{q}$ 上, 并把给定总次数以内的多项式空间映回自身.


常数函数属于平凡表示.
线性, 二次和更高次函数分别组成可约表示, 可以继续分解成有限群不可约表示.

---
## Hamiltonian 项为什么是两个表示的配对


一般展开项写成 $f_a(\bm{k})M_A$.
在对称变换下, 函数部分改变自变量, 矩阵部分被共轭.
因此所有候选项位于张量积表示空间 $F\otimes\mathcal{M}$ 中.


对称允许的 Hamiltonian 项正是这个张量积空间中的不变向量:
$$
(F\otimes\mathcal{M})^G=\{X\in F\otimes\mathcal{M}\mid\mathcal{R}_{F\otimes M}(g)X=X\text{ for all }g\in G\}.
$$


从不可约表示语言看, 函数表示与矩阵表示必须能够耦合出平凡表示.
这与群论 2 中张量算符和选择定则使用的是同一个数学结构.


这里不需要把每个矩阵项凭直觉逐个猜出来.
只要确定函数空间和矩阵空间的群表示, 就能用投影算符系统提取全部不变量.

---
## 基底顺序是计算的一部分


Kronecker product 的具体矩阵取决于基底排列顺序.
若采用 $\ket{\alpha}\otimes\ket{\mu}\otimes\ket{s}$, 最右侧因子的指标通常变化最快.
改变排列顺序等价于用一个置换矩阵共轭全部算符.


因此写出 $\tau_i\otimes\lambda_j\otimes s_k$ 时, 必须先声明每个符号作用在哪个因子上, 并固定总基底顺序.
否则两个形式相同的张量积表达式可能对应不同的数值矩阵.


这类差别仍然是基底差别, 不改变物理.
但在检查对称矩阵与 Hamiltonian 的协变关系时, 所有矩阵必须使用同一个顺序.

---
## 本篇结论


内部 Hilbert 空间常可组织为子格, 轨道和自旋空间的张量积.
相应的 Hamiltonian 可以在 Hermitian 张量积矩阵基底中展开, $H(\bm{k})=\sum_Ah_A(\bm{k})M_A$.


态表示 $D_g$ 通过共轭作用诱导矩阵空间表示, 动量变量替换则给出函数空间表示.
Hamiltonian 的对称允许项是函数空间与矩阵空间张量积中的不变向量.


下一篇将补齐含自旋体系所需的双群和 spinor 表示, 说明为什么普通点群矩阵不足以描述半整数自旋.
