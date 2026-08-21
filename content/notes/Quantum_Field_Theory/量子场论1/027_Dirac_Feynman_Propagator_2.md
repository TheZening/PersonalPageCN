---
title: "Dirac 场二点函数（三）：动量空间传播子与极点处方"
date: 2026-08-18
weight: 27
---

位置空间传播子已经被确定为 Dirac 算符带 Feynman 边界条件的矩阵值格林核；按上一篇的约定，它与严格逆核相差整体 $\mathrm{i}$。
实际微扰计算通常在动量空间进行，因为微分算符会变成矩阵多项式，传播子也会变成一个简单的有理函数。


本篇先由标量传播子的四维傅里叶表示得到费米传播子，再分别计算正能与负能极点的围道贡献。
最后解释分子 $\slashed{p}+m$ 为什么同时是 Dirac 算符的代数逆因子和物理自旋求和。

---
## 从标量四维积分得到费米传播子


016 中得到的标量 Feynman 传播子为：
$$
D_F(z)=\int\frac{\mathrm{i}\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$
上一篇证明了：
$$
S_F(z)=(\mathrm{i}\slashed{\partial}_z+m)D_F(z)
$$
导数作用在傅里叶指数上时：
$$
\mathrm{i}\partial_{z^\mu}\mathrm{e}^{-\mathrm{i}p\cdot z}=p_\mu\mathrm{e}^{-\mathrm{i}p\cdot z}
$$
因此：
$$
S_F(z)=\int\frac{\mathrm{i}(\slashed{p}+m)\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$
定义动量空间传播子：
$$
S_F(z)=\int\frac{\widetilde{S}_F(p)\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4}\dd[4]{p}
$$
于是：
$$
\widetilde{S}_F(p)=\frac{\mathrm{i}(\slashed{p}+m)}{p^2-m^2+\mathrm{i}\epsilon}
$$
这个表达式可以直接由矩阵求逆理解。
利用克利福德代数：
$$
(\slashed{p}-m)(\slashed{p}+m)=p^2-m^2
$$
所以在 $p^2\neq m^2$ 时：
$$
(\slashed{p}-m)^{-1}=\frac{\slashed{p}+m}{p^2-m^2}
$$
传播子就是这个矩阵逆乘以 $\mathrm{i}$，并为分母指定 Feynman 极点处方。


有时会把它非正式地写成 $\mathrm{i}/(\slashed{p}-m)$。
这种写法只能作为矩阵逆的简写，不能把标量分式的普通除法规则直接套在 $\gamma$ 矩阵上。
特别地：
$$
\frac{\mathrm{i}}{\slashed{p}-m+\mathrm{i}\epsilon}\neq\frac{\mathrm{i}(\slashed{p}+m)}{p^2-m^2+\mathrm{i}\epsilon}
$$
左边若按矩阵逆认真有理化，会产生不同的 $\epsilon$ 依赖。
正确处方是把 $+\mathrm{i}\epsilon$ 放在标量分母 $p^2-m^2$ 上。


现在检验格林函数方程。
把 $\mathrm{i}\slashed{\partial}-m$ 作用在傅里叶积分上：
$$
(\mathrm{i}\slashed{\partial}-m)S_F(z)=\int\frac{\mathrm{i}(\slashed{p}-m)(\slashed{p}+m)\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$
使用因式分解后：
$$
(\mathrm{i}\slashed{\partial}-m)S_F(z)=\int\frac{\mathrm{i}(p^2-m^2)\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4(p^2-m^2+\mathrm{i}\epsilon)}\dd[4]{p}
$$
在分布极限 $\epsilon\to0^+$ 中，分式趋于 $1$，所以：
$$
(\mathrm{i}\slashed{\partial}-m)S_F(z)=\mathrm{i}\int\frac{\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^4}\dd[4]{p}=\mathrm{i}\delta^{(4)}(z)
$$
这再次验证了位置空间推导。

---
## 两个能量极点怎样恢复时间序分支


把四动量分成 $p^0$ 与 $\bm{p}$，分母为：
$$
p^2-m^2+\mathrm{i}\epsilon=(p^0)^2-E_{\bm{p}}^2+\mathrm{i}\epsilon
$$
未加处方时，两个极点位于：
$$
p^0=+E_{\bm{p}}
$$
以及：
$$
p^0=-E_{\bm{p}}
$$
$+\mathrm{i}\epsilon$ 把正能极点略微移到实轴下方，把负能极点略微移到实轴上方：
$$
p^0=+E_{\bm{p}}-\mathrm{i}0^+
$$
以及：
$$
p^0=-E_{\bm{p}}+\mathrm{i}0^+
$$
这里的 $0^+$ 表示最后从正方向趋于零的无穷小量。
更精确的一阶位移是 $\epsilon/(2E_{\bm{p}})$，但极点位于实轴哪一侧才是围道积分真正需要的信息。


为了缩短公式，先定义分子矩阵：
$$
N(p)=\gamma^0p^0-\bm{\gamma}\cdot\bm{p}+m
$$
传播子写成先做 $p^0$ 积分的形式：
$$
S_F(z)=\int\int\frac{\mathrm{i}N(p)\mathrm{e}^{-\mathrm{i}p^0z^0+\mathrm{i}\bm{p}\cdot\bm{z}}}{(2\pi)^4[(p^0)^2-E_{\bm{p}}^2+\mathrm{i}\epsilon]}\dd{p^0}\dd[3]{p}
$$
当 $z^0>0$ 时，因子 $\mathrm{e}^{-\mathrm{i}p^0z^0}$ 要求在复 $p^0$ 平面的下半平面闭合围道，才能使大圆弧上的指数衰减。
下半平面只包围正能极点 $p^0=E_{\bm{p}}-\mathrm{i}0^+$。


在这个极点处，分母对 $p^0$ 的导数为 $2E_{\bm{p}}$，分子取值为 $\slashed{p}+m$，其中 $p^0=E_{\bm{p}}$。
留数计算给出：
$$
S_F(z)=\int\frac{(\slashed{p}+m)\mathrm{e}^{-\mathrm{i}p\cdot z}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
这正是 $S_+(z)$。


当 $z^0<0$ 时，必须在上半平面闭合围道。
此时只包围负能极点 $p^0=-E_{\bm{p}}+\mathrm{i}0^+$。
该极点的分母导数为 $-2E_{\bm{p}}$，负号与变量换元共同产生费米时间序的反粒子分支：
$$
S_F(z)=-\int\frac{(\slashed{p}-m)\mathrm{e}^{+\mathrm{i}p\cdot z}}{(2\pi)^3 2E_{\bm{p}}}\dd[3]{p}
$$
这就是 $-S_-(z)$。


因此，单一四维积分自动包含两个时间方向：
$$
S_F(z)=\theta(z^0)S_+(z)-\theta(-z^0)S_-(z)
$$
正能极点控制 $x^0>y^0$ 的粒子分支，负能极点控制 $x^0<y^0$ 的反粒子分支。
所谓“反粒子向后传播的粒子”是一种重画时间方向的图像；算符语言中更准确的说法是，时间序的另一个分支由反粒子产生和湮灭算符贡献。

---
## 分子、自旋求和与离壳动量


传播子的分母决定质量壳和极点位置，分子则保存自旋结构。
狄拉克微分算符的动量空间符号是旋量纤维上的矩阵 $\slashed{p}-m$。
它在一般离壳动量处可逆，在质量壳上则出现二维核；去掉本文传播子约定中的整体 $\mathrm{i}$ 后，矩阵 $(\slashed{p}+m)/(p^2-m^2+\mathrm{i}\epsilon)$ 正是这个符号的分布逆。
因此分母标出矩阵失去可逆性的动量子流形，分子则把源旋量投向相应的解空间方向。
在正能质量壳上：
$$
\slashed{p}+m=\sum_su_s(p)\bar{u}_s(p)
$$
因此正能极点的留数就是对两个物理粒子自旋态求和。


在负能极点处作空间动量换元以后，反粒子分支使用：
$$
\slashed{p}-m=\sum_sv_s(p)\bar{v}_s(p)
$$
所以负能极点的留数编码两个物理反粒子自旋态。
这解释了为什么传播子分子不是单位矩阵：内部费米线必须把一个顶点的旋量指标传递到另一个顶点，并自动求和中间自旋自由度。


还可以在质量壳上定义能量投影结构：
$$
\Lambda_+(p)=\frac{\slashed{p}+m}{2m}
$$
以及：
$$
\Lambda_-(p)=\frac{-\slashed{p}+m}{2m}
$$
它们分别投影到正频率和负频率解空间。
这里仍假设 $m>0$；无质量情形不能直接使用含 $1/(2m)$ 的表达式，而应改用能量、螺旋度或手征投影。
传播子极点附近的分子因而可以看作相应解空间的完备核。


但是四维积分中的一般 $p^\mu$ 并不满足 $p^2=m^2$。
这种动量称为离壳动量。
离开质量壳后，$\slashed{p}+m$ 不再等于物理外部粒子态的自旋求和，$\Lambda_\pm$ 也不再满足真正的投影幂等关系。


这正是内部传播子与外部真实粒子的区别。
外部自由粒子满足质量壳条件并由 $u_s$ 或 $v_s$ 描述；内部线的四动量要被积分，可以暂时取任意离壳值。
“虚粒子”是对这种内部积分结构的图像化称呼，不表示实验中存在一个违反能量动量关系、可以被单独探测的粒子。


最后比较不同传播子。
改变极点处方而保留同一个分母微分算符，可以得到推迟、超前或其他边界条件的 Dirac 格林函数。
Feynman 处方的特殊之处是正能极点在下、负能极点在上，恰好实现真空时间序。


到这里，Dirac 场从经典方程、正则量子化、反粒子结构到 Feynman 传播子的自由理论链条已经完整闭合。
下一章若继续按照主教材推进，就应进入自旋为 $1$ 的矢量场，并从经典电磁场、规范冗余和 Maxwell 方程开始。
