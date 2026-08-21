---
title: "相互作用理论（三）：正规序、收缩与自由传播子"
date: 2026-08-20
weight: 3
---
戴森级数把相互作用问题化成了自由场的时间序乘积.
但是产生算符和湮灭算符交错在这些乘积中, 直接逐项作用在福克态上会使计算量迅速膨胀.
正规序把模算符整理为固定次序, 收缩则精确记录整理过程中不能丢掉的对易子或反对易子贡献.


本篇先复习四类自由场的正负频率分解.
随后给出统一的收缩定义, 并从模展开逐步证明收缩正是量子场论 1 已经得到的费曼传播子.

---
## 正频率与负频率部分


自由场的正负频率分解来自时间平移的两类平面波.
正频率平面波含有 $\mathrm{e}^{-\mathrm{i}Et}$, 负频率平面波含有 $\mathrm{e}^{\mathrm{i}Et}$, 其中 $E>0$.
下标 $+$ 和 $-$ 标记频率符号, 不是电荷符号, 也不是哈密顿量存在负能本征值.


先考虑自由实标量场.
采用连续动量归一化, 模展开为:
$$
\phi(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}[\hat{a}(\bm{p})\mathrm{e}^{-\mathrm{i}px}+\hat{a}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}]\dd[3]{p}
$$
其中 $E_{\bm{p}}=\sqrt{\bm{p}^2+m^2}$.
这里 $p^\mu=(E_{\bm{p}},\bm{p})$ 是在壳四动量, 而 $px=E_{\bm{p}}x^0-\bm{p}\cdot\bm{x}$.
定义正频率部分:
$$
\phi_+(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{a}(\bm{p})\mathrm{e}^{-\mathrm{i}px}\dd[3]{p}
$$
定义负频率部分:
$$
\phi_-(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{a}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}\dd[3]{p}
$$
所以 $\phi(x)=\phi_+(x)+\phi_-(x)$.
$\phi_+$ 含湮灭算符, $\phi_-$ 含产生算符.
实场满足 $\phi^\dagger=\phi$, 所以两部分互为厄米共轭.


模算符满足:
$$
[\hat{a}(\bm{p}),\hat{a}^\dagger(\bm{q})]=(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})
$$
真空定义为所有湮灭算符的共同零向量, 即 $\hat{a}(\bm{p})\ket{0}=0$.
因此正频率场湮灭真空, $\phi_+(x)\ket{0}=0$.
负频率场则把真空映到一粒子子空间.


自由复标量场需要两套独立模算符:
$$
\phi(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}[\hat{a}(\bm{p})\mathrm{e}^{-\mathrm{i}px}+\hat{b}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}]\dd[3]{p}
$$
所以:
$$
\phi_+(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{a}(\bm{p})\mathrm{e}^{-\mathrm{i}px}\dd[3]{p}
$$
以及:
$$
\phi_-(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{b}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}\dd[3]{p}
$$
厄米共轭场为:
$$
\phi^\dagger(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}[\hat{a}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}+\hat{b}(\bm{p})\mathrm{e}^{-\mathrm{i}px}]\dd[3]{p}
$$
按照指数中的频率符号分组:
$$
\phi^\dagger_+(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{b}(\bm{p})\mathrm{e}^{-\mathrm{i}px}\dd[3]{p}
$$
以及:
$$
\phi^\dagger_-(x)=\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{a}^\dagger(\bm{p})\mathrm{e}^{\mathrm{i}px}\dd[3]{p}
$$
$\phi_+$ 湮灭粒子, $\phi_-$ 产生反粒子.
$\phi^\dagger_+$ 湮灭反粒子, $\phi^\dagger_-$ 产生粒子.
两套独立模算符满足:
$$
[\hat{a}(\bm{p}),\hat{a}^\dagger(\bm{q})]=[\hat{b}(\bm{p}),\hat{b}^\dagger(\bm{q})]=(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})
$$
所有混合 $\hat{a}$ 与 $\hat{b}$ 的基本对易子都为零.
所以“正频率”不能机械地等同于“湮灭某一种固定粒子”, 还必须同时判断所用的场是否经过厄米共轭.


自由狄拉克场的分解为 $\psi(x)=\psi_+(x)+\psi_-(x)$.
正频率部分为:
$$
\psi_+(x)=\sum_s\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{b}_s(\bm{p})u_s(\bm{p})\mathrm{e}^{-\mathrm{i}px}\dd[3]{p}
$$
负频率部分为:
$$
\psi_-(x)=\sum_s\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{d}_s^\dagger(\bm{p})v_s(\bm{p})\mathrm{e}^{\mathrm{i}px}\dd[3]{p}
$$
$\hat{b}_s$ 湮灭粒子, $\hat{d}_s^\dagger$ 产生反粒子.
狄拉克共轭场为 $\bar{\psi}(x)=\bar{\psi}_+(x)+\bar{\psi}_-(x)$.
其中正频率部分为:
$$
\bar{\psi}_+(x)=\sum_s\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{d}_s(\bm{p})\bar{v}_s(\bm{p})\mathrm{e}^{-\mathrm{i}px}\dd[3]{p}
$$
负频率部分为:
$$
\bar{\psi}_-(x)=\sum_s\int\frac{1}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\hat{b}_s^\dagger(\bm{p})\bar{u}_s(\bm{p})\mathrm{e}^{\mathrm{i}px}\dd[3]{p}
$$
这里 $\bar{\psi}_+$ 湮灭反粒子, $\bar{\psi}_-$ 产生粒子.
费米模算符满足反对易关系:
$$
\{\hat{b}_r(\bm{p}),\hat{b}_s^\dagger(\bm{q})\}=(2\pi)^3\delta_{rs}\delta^{(3)}(\bm{p}-\bm{q})
$$
以及:
$$
\{\hat{d}_r(\bm{p}),\hat{d}_s^\dagger(\bm{q})\}=(2\pi)^3\delta_{rs}\delta^{(3)}(\bm{p}-\bm{q})
$$
其余基本反对易子为零.


在费曼规范中, 自由四维电磁势也可以分解为 $A^\mu(x)=A^\mu_+(x)+A^\mu_-(x)$.
光子在质量壳上满足 $\omega_{\bm{k}}=|\bm{k}|$.
相应的在壳四动量为 $k^\mu=(\omega_{\bm{k}},\bm{k})$, 而 $kx=\omega_{\bm{k}}x^0-\bm{k}\cdot\bm{x}$.
正频率部分含光子湮灭算符:
$$
A^\mu_+(x)=\sum_{\lambda=0}^{3}\int\frac{1}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon^\mu_\lambda(\bm{k})\hat{a}_\lambda(\bm{k})\mathrm{e}^{-\mathrm{i}kx}\dd[3]{k}
$$
负频率部分含光子产生算符:
$$
A^\mu_-(x)=\sum_{\lambda=0}^{3}\int\frac{1}{(2\pi)^3\sqrt{2\omega_{\bm{k}}}}\varepsilon^{\mu*}_\lambda(\bm{k})\hat{a}_\lambda^\dagger(\bm{k})\mathrm{e}^{\mathrm{i}kx}\dd[3]{k}
$$
本系列采用闵可夫斯基度规约, 并取 $\eta^{\mu\nu}=\operatorname{diag}(1,-1,-1,-1)$.
在一组协变偏振基中, 偏振标签空间的号差矩阵定义为 $\eta_{\lambda\lambda'}=\operatorname{diag}(1,-1,-1,-1)_{\lambda\lambda'}$.
与量子场论 1 的协变量子化约定一致, 模算符对易关系为:
$$
[\hat{a}_\lambda(\bm{k}),\hat{a}_{\lambda'}^\dagger(\bm{q})]=-(2\pi)^3\eta_{\lambda\lambda'}\delta^{(3)}(\bm{k}-\bm{q})
$$
偏振基的完备性则写成:
$$
\sum_{\lambda=0}^{3}\sum_{\lambda'=0}^{3}\varepsilon^\mu_\lambda(\bm{k})\eta_{\lambda\lambda'}\varepsilon^{\nu*}_{\lambda'}(\bm{k})=\eta^{\mu\nu}
$$
因此模对易关系的负号与偏振完备关系结合后, 正好给出光子二点函数中的 $-\eta^{\mu\nu}$.
$\eta_{\lambda\lambda'}$ 记录协变偏振空间中的不定度规, 而不是普通欧氏内积.
协变量子化中需要扩大偏振空间, 并在最后取物理子空间或物理商空间.
内部收缩保留协变的四维指标结构, 外部可观测光子则只取物理横向偏振.

---
## 正规序不是假设算符彼此对易


相对于自由真空的正规序记为冒号 $:\cdots:$.
它的定义是把所有产生算符移到所有湮灭算符左边.
每交换两个费米算符时还要乘以一个负号.


对玻色模算符, 正规序定义给出 $:\hat{a}(\bm{p})\hat{a}^\dagger(\bm{q}):=\hat{a}^\dagger(\bm{q})\hat{a}(\bm{p})$.
这不是说原来的两个算符可以直接交换.
利用实际的对易关系, 原乘积为:
$$
\hat{a}(\bm{p})\hat{a}^\dagger(\bm{q})=\hat{a}^\dagger(\bm{q})\hat{a}(\bm{p})+[\hat{a}(\bm{p}),\hat{a}^\dagger(\bm{q})]
$$
所以也可以写成:
$$
\hat{a}(\bm{p})\hat{a}^\dagger(\bm{q})=:\hat{a}(\bm{p})\hat{a}^\dagger(\bm{q}):+(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})
$$
正规序乘积与原乘积相差的正是非零对易子.
正规序从未假设这个对易子消失.


对费米模算符, 正规序定义为 $:\hat{b}_r(\bm{p})\hat{b}_s^\dagger(\bm{q}):=-\hat{b}_s^\dagger(\bm{q})\hat{b}_r(\bm{p})$.
反对易关系给出:
$$
\hat{b}_r(\bm{p})\hat{b}_s^\dagger(\bm{q})=-\hat{b}_s^\dagger(\bm{q})\hat{b}_r(\bm{p})+\{\hat{b}_r(\bm{p}),\hat{b}_s^\dagger(\bm{q})\}
$$
因此:
$$
\hat{b}_r(\bm{p})\hat{b}_s^\dagger(\bm{q})=:\hat{b}_r(\bm{p})\hat{b}_s^\dagger(\bm{q}):+(2\pi)^3\delta_{rs}\delta^{(3)}(\bm{p}-\bm{q})
$$
费米负号来自交换两个费米奇算符, 反对易子项则补偿交换两个算符所产生的差异.


任何含至少一个自由场算符的正规序单项式都满足:
$$
\bra{0}:\mathcal{O}_1\cdots\mathcal{O}_n:\ket{0}=0
$$
原因可以从真空左矢和右矢两端看出.
若正规序单项式中含湮灭算符, 它们全部位于产生算符右边, 因而最右端的湮灭算符直接湮灭 $\ket{0}$.
若它只含产生算符, 则 $\bra{0}\hat{a}^\dagger=0$ 以及相应的费米场关系使左端直接为零.


正规序依赖所选择的产生湮灭分解, 因而也依赖参考真空.
在自由闵可夫斯基真空中自然的正规序, 不一定是在弯曲时空, 有限温度或另一组准粒子真空中自然的正规序.
它是处理自由场复合算符的一种有用处方, 但不是解决所有紫外发散的普遍重整化方法.

---
## 统一收缩定义与标量传播子


对两个自由场算符 $A(x)$ 和 $B(y)$, 按照所写次序定义收缩 $\wick{A(x)B(y)}\equiv T\{A(x)B(y)\}-:A(x)B(y):$.
这个定义同时适用于玻色场和费米场.
区别只在于时间序和正规序交换费米奇算符时都必须带上相应负号.


收缩不是把两个场从公式中随意删除.
它精确表示时间序乘积与正规序乘积之间的差.
对自由场, 这个差由基本对易子或反对易子完全决定, 因而已经不含福克空间上的算符.
对不同类型的场, 它分别是复数值分布, 旋量矩阵值分布或洛伦兹张量值分布.


先对实标量场逐步计算.
设 $x^0>y^0$, 时间序不改变原次序, 因而 $T\{\phi(x)\phi(y)\}=\phi(x)\phi(y)$.
将两个场都拆成正负频率部分:
$$
\begin{aligned}
\phi(x)\phi(y)&=\phi_+(x)\phi_+(y)+\phi_+(x)\phi_-(y)\\
&+\phi_-(x)\phi_+(y)+\phi_-(x)\phi_-(y)
\end{aligned}
$$
对应的正规序为:
$$
\begin{aligned}
:\phi(x)\phi(y):&=\phi_+(x)\phi_+(y)+\phi_-(y)\phi_+(x)\\
&+\phi_-(x)\phi_+(y)+\phi_-(x)\phi_-(y)
\end{aligned}
$$
两式只有第二项的次序不同.
所以当 $x^0>y^0$ 时, $\wick{\phi(x)\phi(y)}=[\phi_+(x),\phi_-(y)]$.
若 $y^0>x^0$, 时间序先交换两个玻色场, 同样计算得到 $\wick{\phi(x)\phi(y)}=[\phi_+(y),\phi_-(x)]$.
把两个时间区域合并:
$$
\wick{\phi(x)\phi(y)}=\theta(x^0-y^0)[\phi_+(x),\phi_-(y)]+\theta(y^0-x^0)[\phi_+(y),\phi_-(x)]
$$


把模展开代入第一个对易子:
$$
[\phi_+(x),\phi_-(y)]=\int\frac{[\hat{a}(\bm{p}),\hat{a}^\dagger(\bm{q})]\mathrm{e}^{-\mathrm{i}px+\mathrm{i}qy}}{(2\pi)^6\sqrt{4E_{\bm{p}}E_{\bm{q}}}}\dd[3]{p}\dd[3]{q}
$$
使用模对易关系完成 $\bm{q}$ 积分:
$$
[\phi_+(x),\phi_-(y)]=\int\frac{\mathrm{e}^{-\mathrm{i}p(x-y)}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
另一个时间区域同理.
因此完整结果恰好是自由实标量场的费曼传播子, 即 $\wick{\phi(x)\phi(y)}=D_F(x-y)$.
本文沿用量子场论 1 的约定, $D_F$ 表示完整时间序真空二点函数, 已经包含动量空间分子上的 $\mathrm{i}$:
$$
D_F(x-y)=\int\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}p(x-y)}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$


这个结论也能直接从真空期望值看出.
由收缩定义:
$$
\bra{0}\wick{\phi(x)\phi(y)}\ket{0}=\bra{0}T\{\phi(x)\phi(y)\}\ket{0}-\bra{0}:\phi(x)\phi(y):\ket{0}
$$
正规序项的真空期望值为零, 收缩本身又已经是复数值分布, 所以:
$$
\wick{\phi(x)\phi(y)}=\bra{0}T\{\phi(x)\phi(y)\}\ket{0}=D_F(x-y)
$$
这里的等式依赖自由场对易子是复数值分布这一事实.
对一般相互作用场, 时间序乘积与正规序乘积之差未必还能化成如此简单的自由传播子.


对复标量场, 带相反电荷的场之间有非零收缩.
若 $x^0>y^0$, 只有 $\phi_+(x)$ 中的 $\hat{a}$ 与 $\phi^\dagger_-(y)$ 中的 $\hat{a}^\dagger$ 能留下非零对易子:
$$
\wick{\phi(x)\phi^\dagger(y)}=[\phi_+(x),\phi^\dagger_-(y)]=\int\frac{\mathrm{e}^{-\mathrm{i}p(x-y)}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
若 $y^0>x^0$, 时间序先把较晚的 $\phi^\dagger(y)$ 放在左边, 并留下 $\hat{b}$ 与 $\hat{b}^\dagger$ 的对易子:
$$
\wick{\phi(x)\phi^\dagger(y)}=[\phi^\dagger_+(y),\phi_-(x)]=\int\frac{\mathrm{e}^{\mathrm{i}p(x-y)}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
两个时间分支合并后得到 $\wick{\phi(x)\phi^\dagger(y)}=\bra{0}T\{\phi(x)\phi^\dagger(y)\}\ket{0}=D_F(x-y)$.
反向排列相当于交换 $x$ 与 $y$, 即 $\wick{\phi^\dagger(x)\phi(y)}=\bra{0}T\{\phi^\dagger(x)\phi(y)\}\ket{0}=D_F(y-x)$.
自由标量传播子满足 $D_F(x-y)=D_F(y-x)$, 但保留参数次序更便于辨认传播子的两个场端点.
带同号电荷的场之间没有能够连接真空的模算符配对, 因而 $\wick{\phi(x)\phi(y)}=0$ 且 $\wick{\phi^\dagger(x)\phi^\dagger(y)}=0$.
这个零不是因为所有场都彼此对易, 而是因为两套独立粒子与反粒子模算符之间没有相应的非零基本对易子.

---
## 狄拉克场和光子场的收缩


对两个费米奇算符, 时间序定义必须包含交换负号:
$$
T\{\psi_\alpha(x)\bar{\psi}_\beta(y)\}=\theta(x^0-y^0)\psi_\alpha(x)\bar{\psi}_\beta(y)-\theta(y^0-x^0)\bar{\psi}_\beta(y)\psi_\alpha(x)
$$
统一收缩定义仍然是 $\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=T\{\psi_\alpha(x)\bar{\psi}_\beta(y)\}-:\psi_\alpha(x)\bar{\psi}_\beta(y):$.


先设 $x^0>y^0$.
与标量场计算平行, 时间序乘积和正规序乘积之差只留下正频率湮灭部分与负频率产生部分的反对易子 $\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=\{\psi_{+,\alpha}(x),\bar{\psi}_{-,\beta}(y)\}$.
取真空矩阵元时, 右边的 $\bar{\psi}_-(y)$ 用 $\hat{b}^\dagger$ 产生一个粒子, 左边的 $\psi_+(x)$ 再用 $\hat{b}$ 将它湮灭.
利用正频率旋量完备关系 $\sum_s u_s(\bm{p})\bar{u}_s(\bm{p})=\slashed{p}+m$.
得到粒子时间分支:
$$
\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=\int\frac{(\slashed{p}+m)_{\alpha\beta}\mathrm{e}^{-\mathrm{i}p(x-y)}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$


再设 $y^0>x^0$.
时间序先交换 $\psi$ 与 $\bar{\psi}$, 因而产生一个负号.
右边的 $\psi_-(x)$ 用 $\hat{d}^\dagger$ 产生反粒子, 左边的 $\bar{\psi}_+(y)$ 用 $\hat{d}$ 将它湮灭.
此时时间序乘积与正规序乘积之差为 $\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=-\{\bar{\psi}_{+,\beta}(y),\psi_{-,\alpha}(x)\}$.
利用负频率旋量完备关系 $\sum_s v_s(\bm{p})\bar{v}_s(\bm{p})=\slashed{p}-m$.
得到反粒子时间分支:
$$
\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=-\int\frac{(\slashed{p}-m)_{\alpha\beta}\mathrm{e}^{\mathrm{i}p(x-y)}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
两个分支合并为狄拉克场费曼传播子 $\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=S_F{}_{\alpha\beta}(x-y)$.
本文的 $S_F$ 同样表示完整时间序真空期望值并包含分子上的 $\mathrm{i}$:
$$
S_F(x-y)=\int\frac{\mathrm{i}(\slashed{p}+m)\mathrm{e}^{-\mathrm{i}p(x-y)}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$


反转两个费米场在原乘积中的次序会引入负号, 即 $\wick{\bar{\psi}_\beta(y)\psi_\alpha(x)}=-S_F{}_{\alpha\beta}(x-y)$.
这个负号不能等到画出收缩线后再凭记忆补上.
它来自把原始费米场排列变成标准排列所需置换的奇偶性.
后面的费米威克定理会把这种判断推广到任意多个费米场.


由于粒子数与电荷结构不允许相应真空配对, 狄拉克场还满足 $\wick{\psi_\alpha(x)\psi_\beta(y)}=0$ 和 $\wick{\bar{\psi}_\alpha(x)\bar{\psi}_\beta(y)}=0$.
$S_F{}_{\alpha\beta}(x-y)$ 保留两个旋量纤维指标.
更准确地说, 它是带费曼边界条件的狄拉克格林算符的分布积分核: 第二个指标与 $y$ 点的旋量源缩并, 第一个指标给出 $x$ 点的输出旋量.
因此它将 $y$ 点的旋量数据映到 $x$ 点, 而不是一个没有内部结构的普通复数.


对光子场, 时间序没有费米负号.
收缩定义为 $\wick{A^\mu(x)A^\nu(y)}=T\{A^\mu(x)A^\nu(y)\}-:A^\mu(x)A^\nu(y):$.
先设 $x^0>y^0$.
与实标量场相同, 时间序与正规序之差仅留下湮灭部分与产生部分的对易子 $\wick{A^\mu(x)A^\nu(y)}=[A^\mu_+(x),A^\nu_-(y)]$.
在费曼规范的协变量子化中, 模算符代数和完整偏振求和共同给出 $-\eta^{\mu\nu}$.
因此在 $x^0>y^0$ 的分支中:
$$
[A^\mu_+(x),A^\nu_-(y)]=-\eta^{\mu\nu}\int\frac{\mathrm{e}^{-\mathrm{i}k(x-y)}}{(2\pi)^3 2\omega_{\bm{k}}}\dd[3]{k}
$$
若 $y^0>x^0$, 时间序交换两个玻色场, 但不引入费米负号.
在 $y^0>x^0$ 的分支中:
$$
[A^\nu_+(y),A^\mu_-(x)]=-\eta^{\mu\nu}\int\frac{\mathrm{e}^{\mathrm{i}k(x-y)}}{(2\pi)^3 2\omega_{\bm{k}}}\dd[3]{k}
$$
将两个分支按时间序合并:
$$
\begin{aligned}
\wick{A^\mu(x)A^\nu(y)}&=-\eta^{\mu\nu}[\theta(x^0-y^0)\int\frac{\mathrm{e}^{-\mathrm{i}k(x-y)}}{(2\pi)^3 2\omega_{\bm{k}}}\dd[3]{k}\\
&+\theta(y^0-x^0)\int\frac{\mathrm{e}^{\mathrm{i}k(x-y)}}{(2\pi)^3 2\omega_{\bm{k}}}\dd[3]{k}]
\end{aligned}
$$
这正是光子的时间序真空二点函数:
$$
\wick{A^\mu(x)A^\nu(y)}=\bra{0}T\{A^\mu(x)A^\nu(y)\}\ket{0}=D_F^{\mu\nu}(x-y)
$$
在费曼规范中它的四维表示为:
$$
D_F^{\mu\nu}(x-y)=\int\frac{-\mathrm{i}\eta^{\mu\nu}\mathrm{e}^{-\mathrm{i}k(x-y)}}{(2\pi)^4(k^2+\mathrm{i}\epsilon)}\dd[4]{k}
$$
两个洛伦兹指标分别属于两个场插入点的四维矢量纤维.
它们在平直时空的全局标架下由 $\eta^{\mu\nu}$ 配对.
在一般协变规范中, 动量空间分子还会出现依赖规范参数的 $k^\mu k^\nu$ 项, 但收缩仍然等于所选规范下的自由时间序二点函数.

---
## 同点收缩、接触项与分布边界


量子场不是每个时空点上都能独立取有限算符值的普通函数.
它是算符值分布, 只有先与光滑测试函数积分, 也就是先进行涂抹, 才能得到良好定义的算符.
传播子和收缩也因此是分布.


例如标量场同点收缩形式上为:
$$
\wick{\phi(x)\phi(x)}=D_F(0)=\int\frac{\mathrm{i}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$
这个高动量积分发散.
所以同点收缩一般不是零, 而是需要正则化和复合算符重整化的奇异对象.
在 $\phi^4$ 理论中, 同一个顶点内的两个场发生收缩会产生蝌蚪项, 不能仅仅因为两个场具有相同时间就把它删除.


时间序在相等时刻还需要约定.
对两个玻色场通常取 $\theta(0)=1/2$.
对不含导数的普通时间积分, 单独的时间对角线通常是测度零集合.
但是对时间序乘积求导时会产生 $\delta(t)$ 接触项, 导数耦合和复合算符也可能对重合点敏感.
因此“等时收缩一律不存在”不是正确的一般定理.


如果事先把每个相互作用顶点定义成正规序单项式, 例如 $:\phi^4(x):$, 那么对多个正规序顶点使用威克定理时只允许不同正规序块之间的收缩.
这时没有顶点内部收缩, 是因为我们改变了复合算符的定义, 不是因为等时场自动对易或反对易.
在某些自由理论计算中这种处方很方便, 但在一般相互作用理论中仍需说明它与所选重整化方案的关系.


最后总结四类非零基本收缩.
实标量场满足 $\wick{\phi(x)\phi(y)}=D_F(x-y)$.
复标量场满足 $\wick{\phi(x)\phi^\dagger(y)}=D_F(x-y)$.
狄拉克场满足 $\wick{\psi_\alpha(x)\bar{\psi}_\beta(y)}=S_F{}_{\alpha\beta}(x-y)$.
光子场在费曼规范中满足 $\wick{A^\mu(x)A^\nu(y)}=D_F^{\mu\nu}(x-y)$.
这些等式的共同原因是自由真空是高斯态, 自由场代数又由二次作用量和基本对易关系完全控制.
它们把戴森展开中的每一次内部配对转化成一个自由传播子.
下一篇将证明任意多个玻色场的时间序乘积都能写成所有可能收缩的和, 这就是威克定理.
