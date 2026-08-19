---
title: Klein–Gordon 方程（三）：守恒流与单粒子诠释的边界
date: 2026-08-17
weight: 8
---
上一篇得到 Klein–Gordon 方程的正负频率模, 并建立了离散与连续动量归一化.
现在检验能否像非相对论量子力学那样把 $\phi(x)$ 解释成单粒子波函数.
关键不只是能否写出守恒流, 而是守恒密度能否在每一点非负, 守恒积分能否成为希尔伯特空间上的正定内积.
本篇先完整比较薛定谔流与 Klein–Gordon 流, 再说明负频率和不定范数怎样改变物理解释.

---
## 从连续性方程到 Klein–Gordon 内积


连续性方程的一般形式为:
$$
\partial_t\rho+\nabla\cdot\bm{j}=0
$$
在固定空间区域 $V$ 中定义总量 $Q_V(t)=\int_V\rho(t,\bm{x})\dd[3]{x}$.
对时间求导并使用连续性方程:
$$
\dv{Q_V}{t}=-\int_V\nabla\cdot\bm{j}\dd[3]{x}
$$
高斯定理把体积分变成边界通量:
$$
\dv{Q_V}{t}=-\oint_{\partial V}\bm{j}\cdot\dd{\bm{S}}
$$
如果 $V$ 是全部空间并且场在无穷远足够快地衰减, 或者边界条件使净通量为零, 就有 $\dv*{Q_V}{t}=0$.
所以连续性方程保证一个积分量守恒.
但它本身没有保证这个守恒量是概率, 电荷还是别的物理量, 更没有保证密度 $\rho$ 非负.


先回顾非相对论薛定谔方程为何确实产生概率流.
在实势能 $V(\bm{x})$ 下:
$$
\mathrm{i}\partial_t\psi=\left(-\frac{\nabla^2}{2M}+V\right)\psi
$$
复共轭方程为:
$$
-\mathrm{i}\partial_t\psi^*=\left(-\frac{\nabla^2}{2M}+V\right)\psi^*
$$
第一式乘以 $\psi^*$, 第二式乘以 $\psi$, 再利用乘积法则整理时间导数:
$$
\partial_t(\psi^*\psi)=\frac{\mathrm{i}}{2M}(\psi^*\nabla^2\psi-\psi\nabla^2\psi^*)
$$
这里使用的空间恒等式是:
$$
\psi^*\nabla^2\psi-\psi\nabla^2\psi^*=\nabla\cdot(\psi^*\nabla\psi-\psi\nabla\psi^*)
$$
它可以直接由乘积法则证明.
右边展开为:
$$
\nabla\psi^*\cdot\nabla\psi+\psi^*\nabla^2\psi-\nabla\psi\cdot\nabla\psi^*-\psi\nabla^2\psi^*
$$
前后两个梯度内积相等并相消, 剩下的正是左边.


因此薛定谔方程给出:
$$
\partial_t\rho_{\text{S}}+\nabla\cdot\bm{j}_{\text{S}}=0
$$
其中 $\rho_{\text{S}}=\psi^*\psi=|\psi|^2$, 而空间流为:
$$
\bm{j}_{\text{S}}=\frac{1}{2M\mathrm{i}}(\psi^*\nabla\psi-\psi\nabla\psi^*)
$$
$\rho_{\text{S}}$ 在每一点都非负.
归一化条件 $\int|\psi|^2\dd[3]{x}=1$ 因而可以解释为在全部空间找到粒子的总概率为 $1$.
薛定谔内积 $\langle\psi_1,\psi_2\rangle=\int\psi_1^*\psi_2\dd[3]{x}$ 也是正定的: 只要 $\psi\neq0$, 就有 $\langle\psi,\psi\rangle>0$.


现在对复 Klein–Gordon 解重复同样的工作.
方程及其复共轭分别为:
$$
(\Box+m^2)\phi=0
$$
以及:
$$
(\Box+m^2)\phi^*=0
$$
第一式乘以 $\phi^*$, 第二式乘以 $\phi$, 然后相减:
$$
\phi^*\Box\phi-\phi\Box\phi^*=0
$$
质量项相消, 因为经典复数场满足 $\phi^*\phi=\phi\phi^*$.


四维乘积法则给出关键恒等式:
$$
\partial_\mu(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)=\phi^*\Box\phi-\phi\Box\phi^*
$$
完整展开右边的来源:
$$
\partial_\mu\phi^*\partial^\mu\phi+\phi^*\Box\phi-\partial_\mu\phi\partial^\mu\phi^*-\phi\Box\phi^*
$$
前后两个导数缩并都是普通复数乘积, 因而相等并相消.
剩余两项就是所需恒等式.


定义 Klein–Gordon 流:
$$
j^\mu=\mathrm{i}(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)
$$
方程立即变成四维连续性方程 $\partial_\mu j^\mu=0$.
时间分量和空间分量分别为:
$$
j^0=\mathrm{i}(\phi^*\partial_t\phi-\phi\partial_t\phi^*)
$$
以及:
$$
\bm{j}=-\mathrm{i}(\phi^*\nabla\phi-\phi\nabla\phi^*)
$$
空间流前的负号来自 $\partial^i=-\partial_i$, 不是额外选择的符号.


这个流也可以直接从前面学过的诺特定理得到.
复标量场拉格朗日密度为:
$$
\mathcal{L}=\partial_\mu\phi^*\partial^\mu\phi-m^2\phi^*\phi
$$
它在全局相位变换 $\phi\to\mathrm{e}^{-\mathrm{i}\alpha}\phi$ 下不变.
无穷小场变分为:
$$
\delta\phi=-\mathrm{i}\alpha\phi \quad \delta\phi^*=\mathrm{i}\alpha\phi^*
$$
所需的两个共轭动量密度为:
$$
\pdv{\mathcal{L}}{(\partial_\mu\phi)}=\partial^\mu\phi^* \quad \pdv{\mathcal{L}}{(\partial_\mu\phi^*)}=\partial^\mu\phi
$$
去掉共同常数参数 $\alpha$, 诺特流为:
$$
J^\mu=(\partial^\mu\phi^*)(-\mathrm{i}\phi)+(\partial^\mu\phi)(\mathrm{i}\phi^*)
$$
整理以后得到 $J^\mu=\mathrm{i}(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)=j^\mu$.
所以从波动方程相减得到的流, 正是复场全局 $U(1)$ 相位对称性的诺特流.
这已经提示它更自然地应解释为荷流, 而不是单粒子概率流.


对两个相同质量的复 Klein–Gordon 解 $\phi_1$ 与 $\phi_2$, 定义混合流:
$$
j^\mu(\phi_1,\phi_2)=\mathrm{i}[\phi_1^*\partial^\mu\phi_2-(\partial^\mu\phi_1^*)\phi_2]
$$
重复刚才的乘积法则证明可得 $\partial_\mu j^\mu(\phi_1,\phi_2)=0$.
在固定时间切片 $\Sigma_t$ 上定义 Klein–Gordon 半双线性型:
$$
(\phi_1,\phi_2)_{\text{KG}}=\mathrm{i}\int[\phi_1^*\partial_t\phi_2-(\partial_t\phi_1^*)\phi_2]\dd[3]{x}
$$
半双线性表示它对第一个输入反线性, 对第二个输入线性.
直接取复共轭还可以验证共轭对称性 $(\phi_1,\phi_2)_{\text{KG}}^*=(\phi_2,\phi_1)_{\text{KG}}$.


这个量的守恒需要边界条件.
对时间求导并使用混合流的连续性方程:
$$
\dv{}{t}(\phi_1,\phi_2)_{\text{KG}}=-\oint_{\partial\Sigma_t}\bm{j}(\phi_1,\phi_2)\cdot\dd{\bm{S}}
$$
若无穷远通量消失, 内积与所选时间无关.
更协变地, 对任意类空间柯西超曲面 $\Sigma$ 可以写成:
$$
(\phi_1,\phi_2)_{\text{KG}}=\int_\Sigma j^\mu(\phi_1,\phi_2)\dd{\Sigma_\mu}
$$
$\dd{\Sigma_\mu}$ 是带未来指向法向量的超曲面元.
四维高斯定理和 $\partial_\mu j^\mu=0$ 说明, 只要两张柯西面之间的无穷远边界没有通量, 这个积分不依赖选择哪一张柯西面.
这才是守恒量具有洛伦兹协变意义的准确表述.


这个半双线性型定义在“满足 Klein–Gordon 方程的全部截面”组成的解空间上, 不是定义在单个时空点的复数纤维上.
单点纤维中的普通复数内积当然是正定的, 但把解的时间导数和超曲面积分纳入以后, 正频率与负频率子空间获得相反符号.
因此纤维度规、构型空间上的配对和量子态空间内积是三个不同层次；它们都叫内积或双线性型时尤其不能混淆.


现在检验上一篇的归一化因子.
在周期盒中取:
$$
u_{\bm{k}}(x)=\frac{1}{\sqrt{2\omega_{\bm{k}}V}}\mathrm{e}^{-\mathrm{i}kx} \quad v_{\bm{k}}(x)=\frac{1}{\sqrt{2\omega_{\bm{k}}V}}\mathrm{e}^{+\mathrm{i}kx}
$$
对正频率模有 $\partial_tu_{\bm{k}}=-\mathrm{i}\omega_{\bm{k}}u_{\bm{k}}$.
代入 Klein–Gordon 型:
$$
(u_{\bm{k}},u_{\bm{k}'})_{\text{KG}}=\frac{\omega_{\bm{k}}+\omega_{\bm{k}'}}{2\sqrt{\omega_{\bm{k}}\omega_{\bm{k}'}}V}\mathrm{e}^{\mathrm{i}(\omega_{\bm{k}}-\omega_{\bm{k}'})t}\int_V\mathrm{e}^{\mathrm{i}(\bm{k}'-\bm{k})\cdot\bm{x}}\dd[3]{x}
$$
空间积分给出 $V\delta_{\bm{k}\bm{k}'}$.
克罗内克符号又迫使 $\omega_{\bm{k}}=\omega_{\bm{k}'}$, 所以前面的系数化为 $1$:
$$
(u_{\bm{k}},u_{\bm{k}'})_{\text{KG}}=\delta_{\bm{k}\bm{k}'}
$$
这正是 $1/\sqrt{2\omega_{\bm{k}}V}$ 中能量因子的来源.


对负频率模, 时间导数的符号反转, 同样的计算给出:
$$
(v_{\bm{k}},v_{\bm{k}'})_{\text{KG}}=-\delta_{\bm{k}\bm{k}'}
$$
正频率模与负频率模相互正交:
$$
(u_{\bm{k}},v_{\bm{k}'})_{\text{KG}}=0
$$
最后一个等式可以直接计算.
空间积分只有在相应动量匹配时可能非零, 而时间导数产生的两项此时系数相反, 所以它们相消.


一般盒中解写成:
$$
\phi(x)=\sum_{\bm{k}}[A_{\bm{k}}u_{\bm{k}}(x)+B_{\bm{k}}v_{\bm{k}}(x)]
$$
利用刚才三条正交关系:
$$
(\phi,\phi)_{\text{KG}}=\sum_{\bm{k}}(|A_{\bm{k}}|^2-|B_{\bm{k}}|^2)
$$
它是守恒的, 却不是正定的.
只含正频率模时得到正数, 只含负频率模时得到负数, 非零解还可能具有零范数.
因此完整 Klein–Gordon 解空间上的这个半双线性型是不定厄米型, 不是希尔伯特空间所需的正定内积.

---
## 负频率究竟暴露了什么


负范数与负能量来自同一个频率符号.
让时间平移生成元 $\mathrm{i}\partial_t$ 作用在两个模上:
$$
\mathrm{i}\partial_tu_{\bm{k}}=+\omega_{\bm{k}}u_{\bm{k}} \quad \mathrm{i}\partial_tv_{\bm{k}}=-\omega_{\bm{k}}v_{\bm{k}}
$$
所以若把每个模直接当作单粒子能量本征态, 负频率模具有能量 $-\omega_{\bm{k}}$.
这是从 $E^2=\bm{p}^2+m^2$ 出发时不可避免的第二个根.


主教材先限制到只有 $A_{\bm{k}}$ 的正频率部分, 再利用 $1/\sqrt{2\omega_{\bm{k}}V}$ 得到:
$$
(\phi,\phi)_{\text{KG}}=\sum_{\bm{k}}|A_{\bm{k}}|^2
$$
如果把这个和规范成 $1$, 可以暂时把 $|A_{\bm{k}}|^2$ 当作测得相应正频率模的权重.
但一旦允许方程的完整解空间, 结果就变成正频率权重减去负频率权重.
这不能作为所有解上的总概率.


困难还不只在积分后的符号.
Klein–Gordon 密度:
$$
j^0=\mathrm{i}(\phi^*\partial_t\phi-\phi\partial_t\phi^*)
$$
含有时间导数, 不是绝对值平方.
即使某个解的总 Klein–Gordon 范数为正, 局域密度也不必在每个空间点非负.
概率密度却必须逐点非负, 因为任何小区域中的测量概率都不能是负数.


这个局域负值可以用两个正频率模直接证明.
在某个空间点吸收平面波归一化常数和空间相位以后, 取:
$$
\phi(t)=A\mathrm{e}^{-\mathrm{i}\omega_1t}+B\mathrm{e}^{-\mathrm{i}\omega_2t} \quad \omega_1>0 \quad \omega_2>0
$$
代入 $j^0$ 并展开:
$$
j^0=2[\omega_1|A|^2+\omega_2|B|^2+(\omega_1+\omega_2)\operatorname{Re}(A^*B\mathrm{e}^{\mathrm{i}(\omega_1-\omega_2)t})]
$$
设 $\omega_2>\omega_1$, 定义 $r=\sqrt{\omega_2/\omega_1}>1$, 并在 $t=0$ 取 $A=1$ 和 $B=-1/r$.
这时:
$$
\frac{j^0}{2}=\omega_1[2-(r+r^{-1})]<0
$$
最后一个不等号来自 $r+r^{-1}>2$, 它又可由恒等式 $(\sqrt{r}-1/\sqrt{r})^2>0$ 证明.
所以即使只叠加正频率模, 总 Klein–Gordon 范数保持为正, 局域 $j^0$ 仍可能因干涉而成为负数.


不能仅凭“某个积分守恒”就宣布其密度是概率.
连续性方程只表达局域收支平衡.
电荷密度可以有正有负, 其空间积分仍然是完全正常的守恒荷.
Klein–Gordon 流来自复场的 $U(1)$ 相位对称性, 所以它在量子场论中正应被解释为带符号的荷流.


实标量场使这一点更加明显.
若 $\phi^*=\phi$, 上述流恒等于零 $j^\mu=\mathrm{i}(\phi\partial^\mu\phi-\phi\partial^\mu\phi)=0$.
但实标量场当然仍然可以有能量, 动量和量子激发.
消失的只是复相位旋转所对应的守恒荷, 不是粒子存在的可能性.


可以尝试只保留正频率解, 这样 Klein–Gordon 型在这个子空间上为正.
对自由场和正规正时洛伦兹变换, 正能量质量壳确实保持为正能量质量壳.
所以这个限制在自由单粒子层面能维持一段距离.
但它没有解决局域密度不正定的问题, 也不能容纳实局域场所必需的正负频率组合.
一旦允许相互作用产生和湮灭粒子, 固定单粒子数的描述更会失去封闭性.


归一化的洛伦兹不变性也需要准确表述.
不变量是超曲面积分 $(\phi_1,\phi_2)_{\text{KG}}$, 或等价的质量壳测度 $\dd[3]{p}/(2E_{\bm{p}})$ 所定义的配对.
洛伦兹推动会改变动量标签并相应地重新组织展开系数.
因此不能笼统地说每一个动量系数在所有参考系中数值都不变.
真正不依赖惯性系的是整个协变内积及由它构造的物理量.


问题的根源不是 Klein–Gordon 方程错误, 而是把它的解解释成固定粒子数的单粒子波函数.
同一个方程在经典场论中完全健康: $\phi(x)$ 是时空上一个标量场构型, 正负频率共同编码它的两份初值.
把这个经典场量子化以后, 方程继续成立, 但场和态不再是同一种数学对象.


量子场 $\phi(x)$ 是作用在态空间上的算符值分布, 量子态则写成 $\ket{\Psi}$.
场算符作用于 $\ket{\Psi}$ 后得到新态 $\phi(x)\ket{\Psi}$, 而 $\phi(x)$ 自身仍是算符.
二者属于不同种类的数学对象, 不能把场算符本身当成一个态矢.


量子化以后, 经典模展开中的数值系数会被算符替代.
复标量场的结构预先写成:
$$
\phi(x)=\int[\hat{a}(\bm{k})\mathrm{e}^{-\mathrm{i}kx}+\hat{b}^\dagger(\bm{k})\mathrm{e}^{+\mathrm{i}kx}]\frac{\dd[3]{k}}{\sqrt{2(2\pi)^3\omega_{\bm{k}}}}
$$
这里 $\hat{a}(\bm{k})$ 将成为粒子湮灭算符, $\hat{b}^\dagger(\bm{k})$ 将成为反粒子产生算符.
负频率指数不再表示一个可以让系统能量无限下降的负能粒子态.
它与产生算符结合, 创建能量为 $+\omega_{\bm{k}}$ 的反粒子.
对实标量场, 粒子与反粒子不再是独立种类, 相应地只有一套产生和湮灭算符.


主教材还给出第三条一致性路线: 从海森堡方程重新推出 Klein–Gordon 方程.
这里先对自由实标量场完整验证一次.
严格说, 量子场是算符值分布, 所以同一点的 $\phi^2$ 和 $\pi^2$ 需要通过涂抹, 正规序或其他正规化方式定义.
下面的计算可以理解为先用测试函数涂抹所有场再计算对易子, 最后在分布意义下去掉测试函数.
真空能的常数减法不影响与场的对易子, 因而不影响这里的运动方程.
假设等时正则对易关系为:
$$
[\phi(t,\bm{x}),\pi(t,\bm{y})]=\mathrm{i}\delta^{(3)}(\bm{x}-\bm{y})
$$
并且:
$$
[\phi(t,\bm{x}),\phi(t,\bm{y})]=[\pi(t,\bm{x}),\pi(t,\bm{y})]=0
$$
哈密顿量为:
$$
H=\frac{1}{2}\int[\pi^2+(\nabla\phi)^2+m^2\phi^2]\dd[3]{y}
$$
海森堡方程写成 $\partial_tO=\mathrm{i}[H,O]$.


先计算 $\phi$ 的时间导数.
使用乘积对易恒等式 $[AB,C]=A[B,C]+[A,C]B$, 只有 $\pi^2$ 项有贡献:
$$
\partial_t\phi(t,\bm{x})=\frac{\mathrm{i}}{2}\int[\pi^2(t,\bm{y}),\phi(t,\bm{x})]\dd[3]{y}
$$
展开平方的对易子:
$$
[\pi^2(\bm{y}),\phi(\bm{x})]=\pi(\bm{y})[\pi(\bm{y}),\phi(\bm{x})]+[\pi(\bm{y}),\phi(\bm{x})]\pi(\bm{y})
$$
由 $[\pi(\bm{y}),\phi(\bm{x})]=-\mathrm{i}\delta^{(3)}(\bm{y}-\bm{x})$ 得到:
$$
[\pi^2(\bm{y}),\phi(\bm{x})]=-2\mathrm{i}\delta^{(3)}(\bm{y}-\bm{x})\pi(\bm{y})
$$
完成 $\bm{y}$ 积分:
$$
\partial_t\phi(t,\bm{x})=\pi(t,\bm{x})
$$


再计算 $\pi$ 的时间导数.
动能项 $\pi^2$ 与 $\pi$ 对易, 空间梯度项和质量项给出:
$$
\partial_t\pi(t,\bm{x})=\frac{\mathrm{i}}{2}\int[(\nabla_{\bm{y}}\phi)^2+m^2\phi^2,\pi(t,\bm{x})]\dd[3]{y}
$$
质量项中的对易子为:
$$
[\phi^2(\bm{y}),\pi(\bm{x})]=\phi(\bm{y})[\phi(\bm{y}),\pi(\bm{x})]+[\phi(\bm{y}),\pi(\bm{x})]\phi(\bm{y})
$$
代入正则对易关系:
$$
[\phi^2(\bm{y}),\pi(\bm{x})]=2\mathrm{i}\delta^{(3)}(\bm{y}-\bm{x})\phi(\bm{y})
$$
因此质量项为:
$$
\frac{\mathrm{i}m^2}{2}\int[\phi^2(\bm{y}),\pi(\bm{x})]\dd[3]{y}=-m^2\phi(\bm{x})
$$
梯度项需要狄拉克 $\delta$ 导数的分布恒等式:
$$
\int f(\bm{y})\partial_{y^i}\delta^{(3)}(\bm{y}-\bm{x})\dd[3]{y}=-\partial_{x^i}f(\bm{x})
$$
它来自分部积分: 边界项消失以后, 导数从 $\delta$ 移到测试函数 $f$ 上并产生一个负号.
又因为:
$$
[\partial_{y^i}\phi(\bm{y}),\pi(\bm{x})]=\mathrm{i}\partial_{y^i}\delta^{(3)}(\bm{y}-\bm{x})
$$
乘积对易恒等式给出:
$$
[(\nabla_{\bm{y}}\phi)^2,\pi(\bm{x})]=2\mathrm{i}\nabla_{\bm{y}}\phi(\bm{y})\cdot\nabla_{\bm{y}}\delta^{(3)}(\bm{y}-\bm{x})
$$
所以梯度项为:
$$
\frac{\mathrm{i}}{2}\int[(\nabla_{\bm{y}}\phi)^2,\pi(\bm{x})]\dd[3]{y}=-\int\nabla_{\bm{y}}\phi(\bm{y})\cdot\nabla_{\bm{y}}\delta^{(3)}(\bm{y}-\bm{x})\dd[3]{y}=\nabla^2\phi(\bm{x})
$$
这里最后一个等号正是上面的分布导数恒等式.
所以:
$$
\partial_t\pi=\nabla^2\phi-m^2\phi
$$
结合 $\partial_t\phi=\pi$:
$$
\partial_t^2\phi=\nabla^2\phi-m^2\phi
$$
也就是 $(\Box+m^2)\phi=0$.
这证明作用量的欧拉–拉格朗日方程, 相对论质量壳关系和量子场的海森堡方程确实给出同一条自由场运动方程.
本段暂时把等时对易关系作为输入, 下一课题会说明它为何是经典场泊松括号的量子版本, 并由它系统推导模算符代数.


前面关于正能粒子与反粒子的解释目前还是结论预告, 不是证明.
要证明它, 必须把经典等时泊松括号提升为场算符的等时对易关系, 再完整计算哈密顿量, 动量和守恒荷.
只有看到这些算符的本征值, 才能严格确认所有物理激发都具有正能量, 并确定哪一套算符产生粒子或反粒子.


现在可以清楚地区分通向量子场论的两条路线.
历史路线先把 Klein–Gordon 方程当成相对论单粒子波动方程, 然后由负频率, 负范数和非正定局域密度发现这种诠释的边界.
现代路线直接从经典标量场作用量出发, 把 $\phi$ 当作场而不是态, 随后量子化这个场.
两条路线使用相同的微分方程和模函数, 但第二条路线从一开始就把场与态的数学类型分开.


至此, 主教材在相对论量子力学部分讨论的 Klein–Gordon 方程, 平面波解, 归一化, 守恒流, 负能量与所谓负概率都已经得到完整而经过校验的版本.
下一课题应当进入自由标量场的正则量子化: 先建立等时对易关系, 再从中推导模算符的代数, 福克空间和正能哈密顿量.
