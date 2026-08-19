---
title: 晶体对称性 06 - 用不变量方法构造 Bloch Hamiltonian
date: 2026-08-19
weight: 6
---


前五篇已经给出构造所需的全部对象.
现在要把它们组织成一个算法: 给定 Bloch 基底, 有限 little group 的表示矩阵和希望保留的动量展开阶数, 系统找出所有对称允许的 Hamiltonian 项.


这个方法称为 method of invariants.
它的核心不是猜测矩阵形式, 而是把候选 Hamiltonian 看成函数空间与 Hermitian 矩阵空间的张量积, 再提取其中的平凡表示.


> **阅读重点:** 写成 $H(\bm{q})=\sum_{aA}c_{aA}f_a(\bm{q})M_A$ 后, $f_a$ 与 $M_A$ 各自形成有限群表示.
> 对称允许项就是 $F\otimes\mathcal{M}$ 中被全部群元素保持不变的向量.

---
## 先明确构造的局部问题


选择一个参考动量 $\bm{k}_0$, 并写 $\bm{k}=\bm{k}_0+\bm{q}$.
若 $\bm{k}_0$ 是高对称动量, 令 $G$ 表示保持 $\bm{k}_0$ 模倒格矢的有限 little co-group, 或含自旋时的 little double group.


对 $g\in G$, 小偏移量按照 $\bm{q}\mapsto R_g\bm{q}$ 变换.
在选定 Bloch 基底中, 对称性由矩阵 $D_g$ 表示.


若只构造 $\bm{k}_0$ 附近有限阶 $\bm{k}\cdot\bm{p}$ Hamiltonian, 常把 $D_g(\bm{k})$ 在参考点的矩阵和基底约定固定下来.
若表示矩阵本身有不可忽略的 $\bm{q}$ 依赖, 则必须在相同阶数展开这个依赖, 不能直接把它当常数.


本篇先说明最常用的有限维局部问题:
$$
D_gH(\bm{q})D_g^{-1}=H(R_g\bm{q}),\quad g\in G.
$$

---
## 第一步: 固定 Hilbert 空间和基底顺序


先列出模型保留的子格, 轨道和自旋自由度, 并固定总基底顺序.
这一步确定 Hamiltonian 的矩阵维数.


基底必须在目标对称群作用下封闭.
若某个群元素把保留态送到模型空间之外, 就不能在这个截断空间中构造该群的精确表示.


对每个群生成元, 从格点位置, 轨道和自旋作用推导 $D_g$.
再检查幺正性和生成元关系.


只要生成元矩阵正确, 其余群元素可以通过乘法得到.
这比逐个输入全部群元素更可靠.

---
## 第二步: 选择 Hermitian 矩阵空间


设内部空间维数为 $d$.
全部 Hermitian $d\times d$ 矩阵组成一个 $d^2$ 维实向量空间 $\mathcal{M}$.


选择正交 Hermitian 基底 $\{M_A\}_{A=1}^{d^2}$.
若内部空间具有张量积结构, 可以使用各因子 Hermitian 基底的 Kronecker product.


态表示在矩阵空间上诱导共轭表示:
$$
\mathcal{R}_M(g)M=D_gMD_g^{-1}.
$$
在矩阵基底中写成:
$$
D_gM_AD_g^{-1}=\sum_B[R_M(g)]_{BA}M_B.
$$


因为共轭作用保持 Hermiticity 和 Hilbert-Schmidt 内积, $R_M(g)$ 可以视为 Hermitian 矩阵实向量空间上的正交表示.

---
## 第三步: 选择动量函数空间


决定保留到 $\bm{q}$ 的哪一阶.
将该阶数以内的独立实函数选成基底 $\{f_a(\bm{q})\}$, 它们张成函数空间 $F$.


若使用多项式展开, 应按总次数分层.
常数, 一次, 二次和更高次多项式在正交线性变换下分别保持次数, 因而每一层都形成有限维不变子空间.


定义群在函数上的作用:
$$
[\mathcal{R}_F(g)f](\bm{q})=f(R_g^{-1}\bm{q}).
$$
在函数基底中写成:
$$
f_a(R_g^{-1}\bm{q})=\sum_b[R_F(g)]_{ba}f_b(\bm{q}).
$$


使用逆元是为了让 $\mathcal{R}_F(g_1)\mathcal{R}_F(g_2)=\mathcal{R}_F(g_1g_2)$.
如果采用另一种自变量约定, 后续张量表示也要同步改变.

---
## 第四步: 把候选 Hamiltonian 写成张量


最一般的 Hermitian 候选式为:
$$
H(\bm{q})=\sum_{a,A}c_{aA}f_a(\bm{q})M_A.
$$
若 $f_a$ 和 $M_A$ 都选择为实函数与 Hermitian 矩阵, Hermiticity 要求 $c_{aA}\in\mathbb{R}$.


系数数组 $c_{aA}$ 可以看成 $F\otimes\mathcal{M}$ 中一个向量的坐标.
群在这个张量积空间中的表示为:
$$
R_{F\otimes M}(g)=R_F(g)\otimes R_M(g).
$$


把协变条件改写成 $D_gH(R_g^{-1}\bm{q})D_g^{-1}=H(\bm{q})$, 就能直接看出允许系数必须满足:
$$
[R_F(g)\otimes R_M(g)]\bm{c}=\bm{c},\quad g\in G.
$$


所以问题已经变成纯有限群线性代数: 求张量积表示的公共不动子空间.

---
## 第五步: 用群平均投影到不变量


对有限群 $G$, 不变量投影算符为:
$$
\Pi_{\mathrm{inv}}=\frac{1}{|G|}\sum_{g\in G}R_F(g)\otimes R_M(g).
$$


它满足 $\Pi_{\mathrm{inv}}^2=\Pi_{\mathrm{inv}}$.
其像空间正是 $(F\otimes\mathcal{M})^G$.


证明只使用有限群平均.
对任意 $h\in G$, 左乘表示矩阵得到:
$$
[R_F(h)\otimes R_M(h)]\Pi_{\mathrm{inv}}=\frac{1}{|G|}\sum_{g\in G}R_F(hg)\otimes R_M(hg)=\Pi_{\mathrm{inv}}.
$$
因为 $g\mapsto hg$ 只是群元素的重新排列, 求和不变.


因此对任意候选张量 $X$, $\Pi_{\mathrm{inv}}X$ 都是对称不变量.
把投影矩阵的像空间求一组基底, 就得到全部线性独立的对称允许 Hamiltonian 结构.

---
## 不变量数量怎样预先计算


投影算符的秩等于其迹, 因为它是幂等算符.
因此不变量空间维数为:
$$
n_{\mathrm{inv}}=\operatorname{tr}\Pi_{\mathrm{inv}}=\frac{1}{|G|}\sum_{g\in G}\chi_F(g)\chi_M(g).
$$


$\chi_F$ 与 $\chi_M$ 分别是函数表示和矩阵共轭表示的特征标.
这个数给出当前动量阶数和矩阵空间中独立允许参数的数量.


若采用复表示及其对偶空间组织系数, 特征标公式中可能以复共轭形式出现.
这取决于把系数放在 $F\otimes\mathcal{M}$ 还是相应 dual space 中.
最稳妥的判据始终是从明确的协变方程构造表示矩阵并计算群平均投影.


参数计数可以用来检查结果.
若显式求得的不变量数目与 $n_{\mathrm{inv}}$ 不同, 通常说明函数基底不封闭, 群矩阵不完整或线性相关项尚未消去.

---
## 也可以只解生成元约束


若有限群由生成元 $s_1,\ldots,s_r$ 生成, 一个张量被全部生成元保持就会被整个群保持.
因此可以解线性方程:
$$
[R_F(s_i)\otimes R_M(s_i)-\mathbb{1}]\bm{c}=0,quad i=1,\ldots,r.
$$


所有方程公共零空间就是不变量空间.
这种方法不需要显式列出全部群元素, 对较大群常更方便.


群平均法结构更清楚, 生成元零空间法计算更直接.
二者应给出相同结果.

---
## 不可约表示配对的理解


把函数空间和矩阵空间分别分解成不可约表示:
$$
F\cong\bigoplus_\alpha m_\alpha V_\alpha,\quad\mathcal{M}\cong\bigoplus_\beta n_\beta W_\beta.
$$


一个 Hamiltonian 项允许出现, 当且仅当某个 $V_\alpha\otimes W_\beta$ 含有平凡表示.
等价地, 矩阵部分必须能够补偿动量函数在群作用下的变化.


若一个矩阵本身属于平凡表示, 它可以乘不变标量函数.
若一组矩阵属于非平凡表示, 它们必须与相容的函数多重态按照固定系数组合, 不能逐项独立加入.


这就是 method of invariants 的直观含义: Hamiltonian 总体不变, 不要求函数因子和矩阵因子分别不变.

---
## Hermiticity 必须独立检查


群不变量条件与 Hermiticity 是不同约束.
群平均只保证对称性, 不会自动把任意复矩阵变成 Hermitian 矩阵.


使用 Hermitian 矩阵基底和实函数基底时, 取实系数即可保持 Hermiticity.
若使用非 Hermitian 矩阵基底, 必须把每一项与其 Hermitian conjugate 配对.


在完整 Brillouin zone 的 tight-binding 表达中, Fourier 系数之间还会因为实空间 hopping 的 Hermiticity 发生关系.
这些关系应在对称投影之前或之后一致施加.

---
## Nonsymmorphic 对称性需要保留动量相位


若 $D_g(\bm{k})$ 含有分数平移产生的动量相位, 对称矩阵可能随 $\bm{k}$ 变化.
此时不能只把普通点群的常数矩阵放入算法.


对完整 Brillouin zone 构造, 应直接使用:
$$
D_g(\bm{k})H(\bm{k})D_g^{-1}(\bm{k})=H(R_g\bm{k}).
$$
可以把允许的 Fourier harmonics 作为函数空间, 并让空间群作用同时改变 harmonics 与内部矩阵.


对局部 $\bm{k}\cdot\bm{p}$ 构造, 则把 $D_g(\bm{k}_0+\bm{q})$ 和 $H(\bm{q})$ 按同一阶数展开.
忽略表示矩阵中的低阶 $\bm{q}$ 依赖会漏掉约束或产生伪允许项.

---
## 幺正空间对称性与反幺正约束要分开实现


本篇的群平均公式针对有限幺正群表示.
Parity 若作为空间群中的幺正反演, 可以直接包含在 $G$ 中.


Time reversal 是反幺正算符, 对 Hamiltonian 的作用含有复共轭:
$$
U_\Theta H^*(-\bm{q})U_\Theta^{-1}=H(\bm{q}).
$$
它不是普通复线性共轭表示, 不能不加说明地塞进同一个复表示群平均.


实用顺序是先求全部幺正空间群不变量, 再在这个有限维候选空间中施加 time reversal 的实线性约束.
其他反幺正或谱反演约束也应按照各自定义单独加入.

---
## 一套完整的构造流程


第一, 选择参考动量 $\bm{k}_0$, 找出相应 little group 或 little double group.


第二, 固定 Bloch 基底及其顺序, 从格点, 轨道和自旋推导生成元矩阵 $D_g$.


第三, 选择 Hermitian 矩阵基底 $\{M_A\}$, 计算共轭表示 $R_M(g)$.


第四, 选择希望保留的动量函数或 Fourier harmonics $\{f_a\}$, 计算函数表示 $R_F(g)$.


第五, 构造 $R_F(g)\otimes R_M(g)$, 用群平均投影或生成元公共零空间求全部不变量.


第六, 将不变量向量重新翻译成 $\sum_{aA}c_{aA}f_aM_A$, 为每个线性独立结构赋予独立实参数.


第七, 施加 Hermiticity, time reversal 和其他未包含在幺正空间群中的约束.


第八, 把最终 Hamiltonian 代回每个生成元的原始协变方程, 进行符号或数值检查.

---
## 最后的检查不是可选步骤


构造完成后, 对每个生成元直接计算:
$$
\Delta_g(\bm{q})=D_gH(\bm{q})D_g^{-1}-H(R_g\bm{q}).
$$
正确结果必须在保留阶数内满足 $\Delta_g(\bm{q})=0$.


还要检查 $H^\dagger(\bm{q})=H(\bm{q})$, 参数数量与特征标计数一致, 以及改变 Bloch gauge 后能谱保持不变.


若只在若干随机数值动量点验证, 只能发现明显错误.
对于多项式模型, 最好比较每个独立单项式的系数.


通过这些检查以后, 所得 Hamiltonian 才是指定基底, 指定阶数和指定对称群下的最一般形式.

---
## 本篇结论


对称构造 Bloch Hamiltonian 的问题可以转化为有限群不变量问题.
动量函数组成表示空间 $F$, Hermitian 矩阵组成共轭表示空间 $\mathcal{M}$, 全部允许项构成 $(F\otimes\mathcal{M})^G$.


有限群平均 $\Pi_{\mathrm{inv}}=|G|^{-1}\sum_gR_F(g)\otimes R_M(g)$ 投影到全部允许项, 其迹给出独立参数数量.
生成元公共零空间提供等价的计算方法.


至此, 晶体几何, Bloch 动量, little group, 内部表示, 双群和 Hamiltonian 矩阵约束已经连成一条完整逻辑链.
后续可以在这套结构上继续加入完整空间群的 Fourier 构造, 反幺正约束和具体固体物理中的对称性分析.
