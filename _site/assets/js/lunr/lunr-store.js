var store = [{
        "title": "积分表 - 三角函数积分",
        "excerpt":"Here we summarize some useful intergation results in assignments. \\[\\int \\sin ^2 ax \\dd{x}=\\frac{x}{2}-\\frac{1}{4 a} \\sin 2 a x+C\\] \\[\\int \\cos ^2 ax \\dd{x}=\\frac{x}{2}+\\frac{1}{4 a} \\sin 2 a x+C\\] \\[\\int \\sin ^3 a x \\dd{x}=\\frac{\\cos 3 a x}{12 a}-\\frac{3 \\cos a x}{4 a}+C\\] \\[\\int x \\sin a x \\dd{x}=\\frac{\\sin a...","categories": ["Math"],
        "tags": ["Integral Table"],
        "url": "/PersonalPageCN/math/Important-Integrals/",
        "teaser": null
      },{
        "title": "积分表 - Gauss积分",
        "excerpt":"有一些常见的积分结果, 知道总比不知道要好, 一方面省得去网上搜了, 另一方面也不用打开Mathematica了… \\[\\int_{-\\infty}^{\\infty} \\mathrm{-x^2} \\dd{x} = \\sqrt{\\pi}\\] \\[\\int_{-\\infty}^{\\infty} \\mathrm{e}^{-a(x+b)^2} \\dd{x} = \\sqrt{\\frac{\\pi}{a}}\\] \\[\\int_{-\\infty}^{\\infty} \\mathrm{e}^{-\\left(a x^2+b x+c\\right)} \\dd{x} = \\sqrt{\\frac{\\pi}{a}} \\mathrm{e}^{\\frac{b^2}{4 a}-c}\\] \\[\\int_{-\\infty}^{\\infty} \\mathrm{e}^{\\frac{1}{2} i t^2} \\dd{t} = \\mathrm{e}^{i \\pi / 4} \\sqrt{2 \\pi}\\] \\[\\int_0^{\\infty} \\mathrm{e}^{-x^2} \\dd{x} = \\frac{\\sqrt{\\pi}}{2}\\] \\[\\int_{-\\infty}^{\\infty} x^{2 n} \\mathrm{e}^{-\\alpha x^2} \\dd{x} = \\sqrt{\\frac{\\pi}{\\alpha}} \\frac{(2 n-1)!!}{(2...","categories": ["Math"],
        "tags": ["Integral Table"],
        "url": "/PersonalPageCN/math/Important-Integrals-2-copy/",
        "teaser": null
      },{
        "title": "QM1 常见对易关系的推导和结果",
        "excerpt":"这里我们将讨论一些在作业中有用的基本对易关系, 我们从基础开始: \\[\\bqty{\\hat{x}_\\alpha,\\,\\hat{x}_\\beta}=0 \\quad \\bqty{\\hat{p}_\\alpha,\\,\\hat{p}_\\beta}=0\\] 最重要的对易关系是位置和动量的对易关系: \\[\\bqty{\\hat{x}_\\alpha,\\,\\hat{p}_\\beta}=\\mathrm{i}\\hbar\\delta_{\\alpha\\beta}\\] 简单介绍一下Levi-Civita符号: \\[\\epsilon_{\\alpha \\beta \\gamma}\\] 正着来就是+1, 反着来就是-1: \\[\\epsilon_{123}=\\epsilon_{231}=\\epsilon_{312}= 1 \\quad \\epsilon_{132}=\\epsilon_{213}=\\epsilon_{321}= -1\\] 一旦有指标重复了, 结果就是0. 接下来, 我们讨论角动量算符: \\[\\left[\\hat{L}_\\alpha,\\,\\hat{x}_\\beta\\right]=\\mathrm{i}\\hbar\\epsilon_{\\alpha\\beta\\gamma}\\hat{x}_\\gamma\\] \\[\\left[\\hat{L}_\\alpha,\\,\\hat{p}_\\beta\\right]=\\mathrm{i}\\hbar\\epsilon_{\\alpha\\beta\\gamma}\\hat{p}_\\gamma\\] \\[\\left[\\hat{L}_\\alpha,\\,\\hat{L}_\\beta\\right]=\\mathrm{i}\\hbar\\epsilon_{\\alpha\\beta\\gamma}\\hat{L}_\\gamma\\] 为了证明这些关系, 我们还需要以下两个公式: \\[\\epsilon_{\\alpha\\beta\\gamma}\\epsilon_{\\rho\\tau\\gamma}=\\delta_{\\alpha\\rho}\\delta_{\\beta\\tau} - \\delta_{\\alpha\\tau}\\delta_{\\beta\\rho}\\] \\[\\left[\\hat{A}\\hat{B},\\,\\hat{C}\\right]=\\hat{A}\\left[\\hat{B},\\hat{C}\\right] + \\left[\\hat{A},\\hat{C}\\right]\\hat{B}\\] \\[\\left[\\hat{A},\\,\\hat{B}\\hat{C}\\right]=\\left[\\hat{A},\\,\\hat{B}\\right]\\hat{C} + \\hat{B}\\left[\\hat{A},\\,\\hat{C}\\right]\\] 先证明第一个: \\[\\begin{aligned} \\bqty{\\hat{L}_\\alpha,\\,\\hat{x}_\\beta} =&amp; \\bqty{\\epsilon_{\\alpha\\mu\\nu}\\hat{x}_\\mu\\hat{p}_\\nu,\\,\\hat{x}_\\beta} = \\epsilon_{\\alpha\\mu\\nu}\\bqty{\\hat{x}_\\mu\\hat{p}_\\nu,\\,\\hat{x}_\\beta} \\\\ =&amp; \\epsilon_{\\alpha\\mu\\nu}\\hat{x}_\\mu\\bqty{\\hat{p}_\\nu,\\,\\hat{x}_\\beta}+\\epsilon_{\\alpha\\mu\\nu}\\bqty{\\hat{x}_\\mu,\\,\\hat{x}_\\beta}\\hat{p}_\\nu \\\\ =&amp; \\epsilon_{\\alpha\\mu\\nu}\\hat{x}_\\mu\\bqty{\\hat{p}_\\nu,\\,\\hat{x}_\\beta}+0\\\\ =&amp;...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-Commutation-Relations/",
        "teaser": null
      },{
        "title": "QM1 Larmour问题",
        "excerpt":"在这篇文章中, 我们讨论Larmour问题. 我们首先介绍轨道和自旋电子磁矩. 先定义Bohr磁子: \\begin{equation} \\mu_{\\text{B}}=\\frac{e \\hbar}{2 m_{e}} \\end{equation} 轨道磁矩 指的是电子在原子中围绕原子核运动所产生的磁矩. \\begin{equation} \\boldsymbol{\\mu}=-g_e\\frac{e}{2 m_e} \\boldsymbol{L} = -g_e \\mu_{\\text{B}} \\frac{\\boldsymbol{L}}{\\hbar} \\end{equation} !!\\(e=1.602 \\times 10^{-19}\\) C, 一个正数!! 自旋磁矩 是电子内禀角动量产生的磁矩 \\begin{equation} \\boldsymbol{\\mu}=-g_s \\mu_{\\text{B}} \\frac{\\boldsymbol{S}}{\\hbar} \\end{equation} 我们只考虑自旋磁矩, 假设在一个外加的垂直磁场中有一个自旋, 从现在起我们将 \\(g_s\\) 简写为 \\(g\\): \\begin{equation} H = -\\frac{1}{2} g \\mu_{\\text{B}} \\boldsymbol{\\sigma}\\cdot\\boldsymbol{B} = \\begin{bmatrix}-g \\mu_{\\text{B}} B_z/2 &amp;...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-LarmourProblem/",
        "teaser": null
      },{
        "title": "QM+ Wigner functions入门",
        "excerpt":"在这篇文章里, 我们来讨论 Wigner 函数 和 Weyl 变换. 我们希望能有一个函数, 可以同时在 \\(x\\) 和 \\(p\\) 变量上展示概率分布.这就是 Wigner 函数要做的事. 另外, 把量子态放到相空间来表示, 还有助于研究量子力学和经典力学之间的联系. 最初, Wigner 是想找到一个对 Boltzmann 分布 的量子修正, 这个分布同时包含位置和动量, 但受到 海森堡不确定性原理 的限制.所以我们可以预期:在某些极限下, 它表现出量子特性；在另一些极限下, 它又能覆盖经典特性. 一些总体性的评论: Wigner 函数并不是一个普通的概率分布. 它和算符的 Weyl 变换紧密相关. Weyl 变换会把一个算符转成 \\(x\\) 和 \\(p\\) 的函数. Weyl 变换 我们从算符 \\(\\hat{O}\\) 的 Weyl 变换开始: \\[\\begin{equation}...","categories": ["QM+"],
        "tags": [],
        "url": "/PersonalPageCN/qm+/QM+-WignerFunction/",
        "teaser": null
      },{
        "title": "QM1 Rabi问题",
        "excerpt":"在这篇文章里, 我们要讨论 Rabi 振荡, 先从一个最简单的二能级系统开始, 这个系统的 Hamiltonian 是这样的: \\[\\begin{equation} H = \\mqty[E_1 &amp; W_{1,2} \\\\ W_{2,1} &amp; E_2] \\end{equation}\\] 第一能级的能量是 \\(E_1\\), 第二能级的能量是 \\(E_2\\).中间的耦合项 \\(W_{1,2}\\) 会让两个能级混合, 所以我们叫它 coupling. 注意, 这个 \\(H\\) 是在 \\((1,0)\\) 和 \\((0,1)\\) 这组基下写的, 我们把它们叫做 \\(\\ket{+}\\) 和 \\(\\ket{-}\\). 接下来我们先算一下这个二能级系统的本征值, 很简单: \\(\\begin{align} E_\\pm = \\frac{\\Tr(H) \\pm \\sqrt{(\\Tr(H))^2-4 \\det(H)}}{2} \\end{align}\\) 算出来就是...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-RabiProblem/",
        "teaser": null
      },{
        "title": "QM1 平面波和Fourier变换 ",
        "excerpt":"在这篇文章里, 我们来讨论 平面波 和 Fourier 变换的约定. 为了简化, 我们一直用 1D 的例子. 这里我们不会去深入讨论 Fourier 变换的性质. 平面波 从平面波出发: \\[\\begin{equation} \\braket{x}{p} = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\exp(\\frac{i}{\\hbar}xp) \\end{equation}\\] 你也可以用 \\(k\\) 作为变量: \\[\\begin{equation} \\braket{x}{k} = \\frac{1}{\\sqrt{2\\pi}} \\exp(\\frac{i}{\\hbar}xk) \\end{equation}\\] Fourier 变换 Fourier 变换定义为: \\[\\begin{equation} \\tilde{f}(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_-^+ f(x) \\exp(-ikx) \\dd{x} \\end{equation}\\] 反 Fourier 变换是: \\[\\begin{equation} f(x) = \\frac{1}{\\sqrt{2\\pi}}...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-PlaneWavesAndFourier/",
        "teaser": null
      },{
        "title": "QM1 绝热定理与Berry相位",
        "excerpt":"在1984年, Michael Berry介绍了一个关于波函数的一个新现象, 即除了常见的dynamical phase外, 根据Hamiltonian对于参数的依赖, 波函数会获得一个几何相位, 即Berry相位. Berry相位因子与系统的动力学演化无关, 仅取决于参数空间中的路径, 提现的是参数空间的特性. 这一发现在凝聚态物理, 光学和量子计算等领域产生了深远影响. 绝热定理 首先要对于绝热这个词做出说明, 我们这里考虑的绝热过程不是热力学中系统与外界没有热量交换的意思. 虽然都是Adiabatic这个词, 但是我们这里强调的是: (经典力学说法) 当外界参数变化非常缓慢时, 系统慢到来不及激发出额外效应”, 存在绝热不变量保持不变. (量子力学说法, 非简并) 当系统的 Hamiltonian 缓慢变化时, 若某个本征值 \\(E_n(t)\\) 与其他本征值 \\(E_m(t)\\) 之间有能隙, 且系统初始时刻处于本征态\\(\\ket{n(0)}\\), 那么在任意时刻\\(t\\)系统仍然会在瞬时本征态\\(\\ket{n(t)}\\)上, 只是会获得相位因子: 动力学相位 + Berry 相位. (量子力学说法, 简并版本) 当系统的 Hamiltonian 缓慢变化时, 若某个简并子空间\\(D_n(t)\\)与其他简并子空间\\(D_m(t)\\)之间有能隙, 且系统初始时刻在\\(D_n(0)\\), 那么在任意时刻\\(t\\)系统仍然会在瞬时简并子空间\\(D_n(t)\\)中, 只是会获得一个Unitary矩阵的变换, 而不能保证保持在某个固定的本征态上. 这对应于非阿贝尔Berry相位(Wilczek–Zee...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-AdiabaticTheoremAndBerryPhase/",
        "teaser": null
      },{
        "title": "QM2 Lindbladian量子动力学方程",
        "excerpt":"在这篇文章里, 我们来讨论开放量子系统的一些特性. 系统包含系统部分 \\(H_S\\)、环境(热浴)部分 \\(H_B\\), 以及相互作用项 \\(H_{SB}\\): \\(\\begin{equation} H(t) = H_S + H_B + \\alpha H_{SB} \\end{equation}\\) 整体(系统 + 环境)的动力学由密度矩阵 \\(\\rho_{SB}\\) 描述, 满足: \\(\\begin{equation} \\dv{}{t} \\rho_{SB} = -\\frac{i}{\\hbar} \\left[H_S + H_B + \\alpha H_{SB}, \\rho_{SB}\\right] \\end{equation}\\) 在相互作用绘景里, Hamiltonian 的演化是: \\(\\begin{equation} H(t) = \\exp\\left(\\frac{i}{\\hbar}(H_S + H_B)t\\right) H_{SB} \\exp\\left(-\\frac{i}{\\hbar}(H_S + H_B)t\\right) \\end{equation}\\)...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-LindbladianEquation/",
        "teaser": null
      },{
        "title": "CMP2 BCS超导理论1",
        "excerpt":"在这篇文章里, 我们来讨论BCS超导理论的基本内容. BCS理论于Bardeen, Cooper, Schrieffer在1957年提出. 我们首先要明确BCS理论的适用范围, 他描述的是传统的低温超导现象, 不能描述高温铜氧化物超导, 不能描述铁基超导, 和转角系统也没关系. 他主要关注 低温超导, \\(T_c &lt; 30\\)K, 就是说超导现象超过这个温度就消失了. 低温金属, 主要是简单金属, 比如铝, 铅, 汞等. 某些合金, 比如NbTi, Nb3Sn等. 超导不仅仅是要满足电阻为0, 还要满足如下条件, 否则无法区分超导这种新的物质状态, 和完美的一根导线: 完全抗磁性(迈斯纳效应): 进入超导态后, 会把体内的磁场完全排斥出去(除表面一层渗透深度). 但是存在一个临界磁场, 能完全破坏超导态的最小磁场强度\\(H_c\\). 存在一个能维持超导态的最大电流(临界电流\\(I_c\\)), 超过这个电流超导态就会被破坏. 我们经常会在文献上看到I型超导, II型超导的说法, 这是超导体宏观电磁性质的分类, 和什么理论没关系. I型超导是指那些在临界磁场\\(H_c\\)以下完全抗磁的超导体, 典型的I型超导体是铝,铅等. II型超导是指那些在临界磁场\\(H_{c1}\\)以下完全抗磁, 在\\(H_{c1} &lt; H &lt; H_{c2}\\)之间部分抗磁 (磁场以量子化磁通涡旋的形式进入), 在\\(H &gt;...","categories": ["CMP2"],
        "tags": [],
        "url": "/PersonalPageCN/cmp2/CMP2-BCS1/",
        "teaser": null
      },{
        "title": "QM1 双能级系统",
        "excerpt":"在量子力学中, 双能级系统是指只有两个量子态的系统. 这种系统在量子计算, 核磁共振(NMR), 量子光学等领域有广泛应用. 双能级系统的哈密顿量通常可以表示为2x2矩阵, 其形式为: \\[\\begin{equation} H = \\mqty[ E_1 &amp; V \\\\ V^* &amp; E_2 ] \\end{equation}\\] 其中, $E_1$和$E_2$是两个能级的能量, $V$是两个能级之间的耦合强度. 迅速熟悉双能级系统可以为很多计算提供便利. 首先我们能一下子就写出来他的能级: \\[\\begin{align} E_+ = \\frac{E_1 + E_2}{2} + \\sqrt{\\left(\\frac{E_1 - E_2}{2}\\right)^2 + |V|^2} \\\\ E_- = \\frac{E_1 + E_2}{2} - \\sqrt{\\left(\\frac{E_1 - E_2}{2}\\right)^2 + |V|^2} \\end{align}\\]...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-TwoLevelSystem/",
        "teaser": null
      },{
        "title": "QM+ Floquet system入门",
        "excerpt":"关于态有可能跟不上Hamiltonian变化这件事, 我们已经在 绝热定理和Berry phase中讨论过了 什么是Floquet system? 我们知道一个态 \\(\\ket{\\psi(t)}\\) 的时间演化是由Schrödinger方程决定的: \\[\\begin{equation} \\mathrm{i}\\,\\hbar \\pdv{}{t} \\ket{\\psi; t} = H(t) \\ket{\\psi; t} \\end{equation}\\] 或者说我们想知道态的演化也可以考虑时间演化算符: \\[\\begin{equation} \\ket{\\psi; t} = U(t, t_0) \\ket{\\psi; t_0} \\end{equation}\\] 但是这两种方法都绕不过去一个抽象的事儿, 那就是时间演化算符能写但是基本没有办法算: \\[\\begin{align} U(t, t_0) =&amp; \\mathcal{T} \\exp\\left[-\\frac{\\mathrm{i}}{\\hbar} \\int_{t_0}^{t} H(t') \\dd{t'}\\right] \\\\ =&amp; \\mathbb{1} + \\left(-\\frac{\\mathrm{i}}{\\hbar}\\right) \\int_{t_0}^{t} H(t_1) \\dd{t_1} + \\\\...","categories": ["QM+"],
        "tags": [],
        "url": "/PersonalPageCN/qm+/QM+-FloquetSystem/",
        "teaser": null
      },{
        "title": "QM2 密度矩阵",
        "excerpt":"量子力学的随机性: 演化过程是完全严格的, 但是测量结果是随机的, 没有什么随机性来自于我们对知识掌握的不足. 你准备10个一模一样的瓶子, 粒子一开始都在瓶子中心, 完全按照Schrödinger方程演化, 然后观察粒子的位置, 你会发现10次实验的结果还是一个分布. 经典概率的随机性: 经典随机性来自于复杂性和信息的不完全性, 原则上你扔一个骰子是完全可预测的, 但是由于你无法掌握所有的初始条件, 只能用概率来描述结果. 在这个背景下, 针对系综(一模一样的系统的综合)的问题, 我们就考虑使用密度矩阵, density matrix来容纳这种经典的随机性. 另外, 密度矩阵还能解决一类问题: 当一个子系统与整个系统的其余部分纠缠时, 对该子系统的描述中必然包含随机性, 这种随机性就由密度矩阵描述. 纯态: 完整地包含了关于该量子系统的所有可知信息, 可以用态矢量 \\(\\ket{\\psi}\\) 来描述. 混合态: 我们对系统没有完全的信息, 或者系统与外界发生了纠缠, 只能用密度矩阵 \\(\\rho\\) 来描述. 经典随机性 回到我们的经典的Stern-Gerlach实验, 我们的炉子有50%的概率发射自旋向上电子, 50%的概率发射自旋向下电子. 经典的随机性来自于我们对炉子发射电子的状态没有完全的信息, 只能说有50%的概率是向上, 50%的概率是向下. 从而我们可以用一个系综描述这个系统: \\[\\begin{equation} E_{\\text{z}} = \\left\\{ \\left( \\frac{1}{2}, \\ket{\\uparrow}...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-DensityMatrix/",
        "teaser": null
      },{
        "title": "三角函数查询表格",
        "excerpt":"基本定义 基础的三角函数定义一定是在直角三角形上的, 记住对边, 邻边, 斜边的概念. 这是最重要的, 不要忘掉… \\[\\begin{align} \\sin \\theta &amp;= \\frac{\\text{opposite}}{\\text{hypotenuse}}\\\\ \\cos \\theta &amp;= \\frac{\\text{adjacent}}{\\text{hypotenuse}}\\\\ \\tan \\theta &amp;= \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta} \\end{align}\\] 还有三个倒数函数 \\[\\begin{align} \\csc \\theta &amp;= \\frac{1}{\\sin \\theta} = \\frac{\\text{hypotenuse}}{\\text{opposite}}\\\\ \\sec \\theta &amp;= \\frac{1}{\\cos \\theta} = \\frac{\\text{hypotenuse}}{\\text{adjacent}}\\\\ \\cot \\theta &amp;= \\frac{1}{\\tan \\theta} = \\frac{\\text{adjacent}}{\\text{opposite}} = \\frac{\\cos...","categories": ["Math"],
        "tags": ["Trigs Table"],
        "url": "/PersonalPageCN/math/TrigsTable/",
        "teaser": null
      },{
        "title": "Mathematical Induction Method",
        "excerpt":"基本定义 数学归纳法是一种证明数学命题对所有自然数成立的有效方法, 针对关于数列, 极限, 组合等问题非常有效. 它的基本思想是通过两个步骤来证明一个命题对所有自然数成立: 基础步骤 (Base Case): 验证命题对第一个自然数 (通常是1) 成立. 归纳步骤 (Inductive Step): 假设命题对某个自然数 \\(k\\) 成立 (归纳假设), 然后证明命题对 \\(k+1\\) 也成立. 如果这两个步骤都成功完成, 那么根据数学归纳法, 命题对所有自然数 \\(n \\geq 1\\) 成立. 下结论: 通过基础步骤和归纳步骤, 我们可以得出结论, 命题对所有自然数成立. 实际上有两类数学归纳法: 普通数学归纳法: 适用于证明命题对所有自然数成立. 强归纳法 (Strong Induction): 适用于证明命题对所有自然数成立, 但在归纳步骤中, 假设命题对所有小于等于 \\(k\\) 的自然数成立, 然后证明对 \\(k+1\\) 也成立. 大多数情况下我们关心第一类的. 上纲上线 数学归纳法是一类基于严格逻辑推理的证明方法,...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/MIM/",
        "teaser": null
      },{
        "title": "新闻",
        "excerpt":"这篇帖子会公布一些关于我们网站的重要更新, 还会提到接下来的工作计划, 包括假期和预定的拜访安排. 2020-Aug-25: 感谢才华横溢, 洞察力非凡的实验学者们的努力, 我们关于Dirac semimetal中二维Helical edge state的实验研究, 现在发表在 Nano Letter 上了. Helical Edge Transport in Millimeter-Scale Thin Films of Na3Bi 2021-March-15: 我们在应变Ge量子点中关于空穴自旋量子比特的理论研究, 现在发表在 Physics Review B上了. Theory of hole-spin qubits in strained germanium quantum dots 2021-Apr-01: 我们关于二维Ge空穴系统的理论研究, 现在发表在 Nature 合作期刊 npj Quantum Information上了. Optimal operation points for...","categories": ["Updates"],
        "tags": [],
        "url": "/PersonalPageCN/updates/RecentUpdate/",
        "teaser": null
      }]
