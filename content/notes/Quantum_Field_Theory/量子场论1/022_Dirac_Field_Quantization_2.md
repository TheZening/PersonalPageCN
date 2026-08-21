---
title: "Dirac 场的正则量子化（二）：模展开与模算符反对易代数"
date: 2026-08-18
weight: 22
---

上一节在位置空间建立了 Dirac 场的等时反对易关系。
这一节把它转换到动量空间，确定平面波系数必须满足的代数。


位置空间与动量空间的关系不是两套独立假设。
场反对易关系能够推出模算符反对易关系，后者结合旋量完备关系又能反向恢复前者。

---
## 算符值 Dirac 场的平面波展开


平面波展开是在自由狄拉克解空间中选择连续基底。
$u_s(p)$ 和 $v_s(p)$ 给质量壳各点上的旋量纤维基底，指数函数记录底空间平移，而模算符则是量子场沿这些基底方向的算符值坐标。
用旋量内积和空间积分“投影场”就是使用对偶基底从完整截面中取回某一个坐标，这与有限维线性代数中用内积提取展开系数是同一件事。
继续使用前面固定的旋量归一化：
$$
u_r^\dagger(p)u_s(p)=2E_{\bm{p}}\delta_{rs}
$$
以及：
$$
v_r^\dagger(p)v_s(p)=2E_{\bm{p}}\delta_{rs}
$$
相应的 Dirac 内积为 $\bar{u}_ru_s=2m\delta_{rs}$ 与 $\bar{v}_rv_s=-2m\delta_{rs}$。
自旋求和关系为：
$$
\sum_su_s(p)\bar{u}_s(p)=\slashed{p}+m
$$
以及：
$$
\sum_sv_s(p)\bar{v}_s(p)=\slashed{p}-m
$$
量子 Dirac 场展开为：
$$
\psi(x)=\sum_s\int\frac{[\hat{b}_s(\bm{p})u_s(p)\mathrm{e}^{-\mathrm{i}p\cdot x}+\hat{d}_s^\dagger(\bm{p})v_s(p)\mathrm{e}^{+\mathrm{i}p\cdot x}]}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\dd[3]{p}
$$
$\hat{b}_s(\bm{p})$ 将被证明是粒子湮灭算符，$\hat{d}_s^\dagger(\bm{p})$ 将被证明是反粒子产生算符。
现在先把它们看成有待确定代数关系的模算符。
把场展开中的两项分别记为 $\psi_{(+)}$ 与 $\psi_{(-)}$。


对正频率部分取厄米共轭，必须同时反转算符乘积的次序：
$$
(\psi_{(+)})^\dagger=\sum_s\int\frac{\hat{b}_s^\dagger(\bm{p})u_s^\dagger(p)\mathrm{e}^{+\mathrm{i}p\cdot x}}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\dd[3]{p}
$$
负频率部分则给出：
$$
(\psi_{(-)})^\dagger=\sum_s\int\frac{\hat{d}_s(\bm{p})v_s^\dagger(p)\mathrm{e}^{-\mathrm{i}p\cdot x}}{(2\pi)^3\sqrt{2E_{\bm{p}}}}\dd[3]{p}
$$
因此 $\psi^\dagger=(\psi_{(+)})^\dagger+(\psi_{(-)})^\dagger$。
从右侧乘以 $\gamma^0$ 后，共轭会反转频率标签：
$$
\bar{\psi}_{(-)}=(\psi_{(+)})^\dagger\gamma^0,\bar{\psi}_{(+)}=(\psi_{(-)})^\dagger\gamma^0
$$
因此 $\bar{\psi}_{(-)}$ 含 $\hat{b}_s^\dagger\bar{u}_s\mathrm{e}^{+\mathrm{i}p\cdot x}$，而 $\bar{\psi}_{(+)}$ 含 $\hat{d}_s\bar{v}_s\mathrm{e}^{-\mathrm{i}p\cdot x}$。


这里出现两套独立模算符是相对论复场结构的必然结果。
$u_s\mathrm{e}^{-\mathrm{i}p\cdot x}$ 与 $v_s\mathrm{e}^{+\mathrm{i}p\cdot x}$ 张成两套不同的解空间，Dirac 场也不是厄米场，所以负频率部分没有理由由 $\hat{b}^\dagger$ 控制。


为了从场中取回每个模算符，需要先证明一个交叉正交关系。
在标准 Dirac 表示中：
$$
u_s(p)=\sqrt{E+m}\mqty[\xi_s\\\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\xi_s]
$$
定义只反转空间动量而保持正能量的四矢量 $\widetilde{p}^\mu=(E_{\bm{p}},-\bm{p})$。
相应的负频率旋量为：
$$
v_r(\widetilde{p})=\sqrt{E+m}\mqty[-\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_r\\\eta_r]
$$
因此：
$$
u_s^\dagger(p)v_r(\widetilde{p})=(E+m)\left[-\xi_s^\dagger\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_r+\xi_s^\dagger\frac{\bm{\sigma}\cdot\bm{p}}{E+m}\eta_r\right]=0
$$
同理可得 $v_s^\dagger(p)u_r(\widetilde{p})=0$。


在固定时间切片上，用 $u_s^\dagger(p)\mathrm{e}^{+\mathrm{i}p\cdot x}$ 投影场，并对空间积分。
空间平面波的正交性为：
$$
\int\mathrm{e}^{\mathrm{i}(\bm{q}-\bm{p})\cdot\bm{x}}\dd[3]{x}=(2\pi)^3\delta^{(3)}(\bm{q}-\bm{p})
$$
正频率项由 $u_s^\dagger u_r=2E\delta_{sr}$ 保留下来，负频率项则由刚才的交叉正交关系消失。
于是得到反演公式：
$$
\hat{b}_s(\bm{p})=\frac{1}{\sqrt{2E_{\bm{p}}}}\int u_s^\dagger(p)\psi(x)\mathrm{e}^{+\mathrm{i}p\cdot x}\dd[3]{x}
$$
类似地，用 $v_s^\dagger(p)\mathrm{e}^{-\mathrm{i}p\cdot x}$ 投影，得到：
$$
\hat{d}_s^\dagger(\bm{p})=\frac{1}{\sqrt{2E_{\bm{p}}}}\int v_s^\dagger(p)\psi(x)\mathrm{e}^{-\mathrm{i}p\cdot x}\dd[3]{x}
$$
两个积分都在同一个时间 $t$ 上进行。
指数中的时间相位保证反演结果在自由场演化下保持为同一个模算符。

---
## 从场反对易关系推出模算符代数


基本等时关系为：
$$
\{\psi_\alpha(t,\bm{x}),\psi_\beta^\dagger(t,\bm{y})\}=\delta_{\alpha\beta}\delta^{(3)}(\bm{x}-\bm{y})
$$
对 $\hat{b}_s(\bm{p})$ 的反演公式取厄米共轭：
$$
\hat{b}_r^\dagger(\bm{q})=\frac{1}{\sqrt{2E_{\bm{q}}}}\int\psi^\dagger(y)u_r(q)\mathrm{e}^{-\mathrm{i}q\cdot y}\dd[3]{y}
$$
将两个反演公式代入反对易子，并把双重积分部分记为 $J_{sr}(\bm{p},\bm{q})$：
$$
\{\hat{b}_s(\bm{p}),\hat{b}_r^\dagger(\bm{q})\}=\frac{J_{sr}(\bm{p},\bm{q})}{2\sqrt{E_{\bm{p}}E_{\bm{q}}}}
$$
其中：
$$
J_{sr}=\int\mathrm{e}^{+\mathrm{i}p\cdot x-\mathrm{i}q\cdot y}u_s^\dagger(p)\{\psi(x),\psi^\dagger(y)\}u_r(q)\dd[3]{x}\dd[3]{y}
$$
等时场反对易关系先完成 $\bm{y}$ 积分，使 $\bm{y}=\bm{x}$。
时间相位也在狄拉克 $\delta$ 分布最终要求 $\bm{p}=\bm{q}$ 时相消，剩余空间积分为：
$$
\int\mathrm{e}^{\mathrm{i}(\bm{q}-\bm{p})\cdot\bm{x}}\dd[3]{x}=(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})
$$
狄拉克 $\delta$ 分布令 $E_{\bm{p}}=E_{\bm{q}}$，旋量内积变成 $u_s^\dagger(p)u_r(p)=2E_{\bm{p}}\delta_{sr}$。
归一化因子全部抵消，得到：
$$
\{\hat{b}_s(\bm{p}),\hat{b}_r^\dagger(\bm{q})\}=(2\pi)^3\delta_{sr}\delta^{(3)}(\bm{p}-\bm{q})
$$
对 $\hat{d}$ 与 $\hat{d}^\dagger$ 重复完全相同的计算：
$$
\{\hat{d}_s(\bm{p}),\hat{d}_r^\dagger(\bm{q})\}=(2\pi)^3\delta_{sr}\delta^{(3)}(\bm{p}-\bm{q})
$$
由 $\{\psi,\psi\}=0$ 和 $\{\psi^\dagger,\psi^\dagger\}=0$ 可得同类湮灭算符或同类产生算符之间的反对易子为零：
$$
\{\hat{b}_s(\bm{p}),\hat{b}_r(\bm{q})\}=0
$$
以及：
$$
\{\hat{b}_s^\dagger(\bm{p}),\hat{b}_r^\dagger(\bm{q})\}=0
$$
$\hat{d}$ 算符满足相同的两类关系。


粒子模与反粒子模之间的所有交叉反对易子也为零。
例如：
$$
\{\hat{b}_s(\bm{p}),\hat{d}_r^\dagger(\bm{q})\}=0
$$
以及：
$$
\{\hat{b}_s(\bm{p}),\hat{d}_r(\bm{q})\}=0
$$
这些关系合称正则反对易关系，是费米子版本的模代数。


若先在有限体积周期盒中工作，连续动量变成离散动量，右侧的 $(2\pi)^3\delta^{(3)}(\bm{p}-\bm{q})$ 被克罗内克符号 $\delta_{\bm{p}\bm{q}}$ 取代。
连续谱中的产生算符作用在真空上得到的是狄拉克 $\delta$ 归一化态，不是有限范数态；真正有限范数的单粒子态需要用平方可积波包涂抹。

---
## 从模代数反向恢复等时场关系


现在反过来假定模算符满足上述正则反对易关系，并计算位置空间的场反对易子。
把 $\psi_\alpha(t,\bm{x})$ 与 $\psi_\beta^\dagger(t,\bm{y})$ 的展开代入，只有 $\hat{b}$ 与 $\hat{b}^\dagger$、$\hat{d}$ 与 $\hat{d}^\dagger$ 两组配对不为零：
$$
\{\psi_\alpha(t,\bm{x}),\psi_\beta^\dagger(t,\bm{y})\}=I_{u,\alpha\beta}+I_{v,\alpha\beta}
$$
正频率部分为：
$$
I_{u,\alpha\beta}=\sum_s\int\frac{[u_s(p)u_s^\dagger(p)]_{\alpha\beta}\mathrm{e}^{+\mathrm{i}\bm{p}\cdot(\bm{x}-\bm{y})}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
负频率部分为：
$$
I_{v,\alpha\beta}=\sum_s\int\frac{[v_s(p)v_s^\dagger(p)]_{\alpha\beta}\mathrm{e}^{-\mathrm{i}\bm{p}\cdot(\bm{x}-\bm{y})}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
在第二个积分中作变量替换 $\bm{p}\mapsto-\bm{p}$：
$$
I_{v,\alpha\beta}=\sum_s\int\frac{[v_s(\widetilde{p})v_s^\dagger(\widetilde{p})]_{\alpha\beta}\mathrm{e}^{+\mathrm{i}\bm{p}\cdot(\bm{x}-\bm{y})}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
因此关键变成证明等时完备恒等式：
$$
\sum_s[u_s(p)u_s^\dagger(p)+v_s(\widetilde{p})v_s^\dagger(\widetilde{p})]=2E_{\bm{p}}\mathbb{1}_4
$$
由 $\bar{u}=u^\dagger\gamma^0$ 可知 $u^\dagger=\bar{u}\gamma^0$，所以正频率自旋求和给出：
$$
\sum_su_s(p)u_s^\dagger(p)=(\slashed{p}+m)\gamma^0
$$
负频率求和为：
$$
\sum_sv_s(\widetilde{p})v_s^\dagger(\widetilde{p})=(\slashed{\widetilde{p}}-m)\gamma^0
$$
把两式相加，质量项抵消，而空间动量项也因方向相反而抵消：
$$
(\slashed{p}+m)\gamma^0+(\slashed{\widetilde{p}}-m)\gamma^0=2E_{\bm{p}}\gamma^0\gamma^0=2E_{\bm{p}}\mathbb{1}_4
$$
把这个恒等式代回两个积分之和，$2E_{\bm{p}}$ 与分母抵消：
$$
\{\psi_\alpha(t,\bm{x}),\psi_\beta^\dagger(t,\bm{y})\}=\delta_{\alpha\beta}\int\frac{\mathrm{e}^{+\mathrm{i}\bm{p}\cdot(\bm{x}-\bm{y})}}{(2\pi)^3}\dd[3]{p}
$$
傅里叶表示的狄拉克 $\delta$ 分布为：
$$
\delta^{(3)}(\bm{x}-\bm{y})=\int\frac{\mathrm{e}^{+\mathrm{i}\bm{p}\cdot(\bm{x}-\bm{y})}}{(2\pi)^3}\dd[3]{p}
$$
所以最终恢复：
$$
\{\psi_\alpha(t,\bm{x}),\psi_\beta^\dagger(t,\bm{y})\}=\delta_{\alpha\beta}\delta^{(3)}(\bm{x}-\bm{y})
$$
其余两类场反对易子因为所有同类和交叉模反对易子为零而自动消失。


这完成了双向证明：位置空间的等时正则结构与动量空间的模算符代数完全等价。
下一篇将把同一模展开代入哈密顿量，说明为什么反粒子项在重新排序后获得正能量，以及真空常数应该怎样理解和处理。
