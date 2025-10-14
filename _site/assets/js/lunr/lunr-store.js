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
        "title": "QM2 Lindblad量子动力学方程",
        "excerpt":"Lindblad方程是描述开放量子系统动力学的一个重要工具, 它扩展了闭合量子系统的薛定谔方程, 允许我们考虑系统与环境之间的相互作用. 这种相互作用通常会导致系统的非单位演化, 包括耗散, 跃迁, 退相干现象. Markov过程: 未来的状态只依赖于当前状态, 与过去的状态无关. 所以没有什么时间核, 记忆积分啥的. 耗散: 能量从系统流失到环境中. 退相干: 系统的量子相干性由于与环境的相互作用而减弱. 我们引入如下记号: \\(S\\): 系统, 我们感兴趣的量子系统. \\(E\\): 环境, 系统所处的外部环境. 系统和环境构成封闭系统, 它们的联合状态由密度矩阵 \\(\\rho_{SE}\\) 描述. 总体的Hamiltonian是: \\[\\begin{equation} H = H_S \\otimes I_E + I_S \\otimes H_E + \\alpha H_{\\text{SB}} \\end{equation}\\] 其中\\(\\alpha\\)描述了系统与环境之间的相互作用强度. 1. 闭合系统的动力学 大的密度矩阵自然是由von Neumann方程描述的: \\[\\begin{equation} \\dv{\\rho_{SE}}{t} =...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-LindbladianEquation/",
        "teaser": null
      },{
        "title": "FGT: 1. 群的基础理论",
        "excerpt":"群就是一个集合, 配备了一个满足特定性质的二元运算. 群的定义 对于一个非空集合 \\(G\\), 如果在 \\(G\\) 上定义了一个二元运算 \\(*\\). \\(\\forall a, b \\in G, a * b \\in G\\) (封闭性) \\(\\forall a, b, c \\in G, (a * b) * c = a * (b * c)\\) (结合性) \\(\\exists e \\in G, \\forall a \\in G, e * a =...","categories": ["FGT"],
        "tags": [],
        "url": "/PersonalPageCN/fgt/FGT-FiniteGroup1-copy/",
        "teaser": null
      },{
        "title": "FGT: 2. 群的拆分",
        "excerpt":"群太大了, 我们需要把它拆分成更小的部分来研究. 怎么拆? 子群 大群 \\(G\\) 拆一些元素出来, 如果这些元素本身也构成一个群 \\(H\\), 那么这个小群就叫做子群, 记作 \\(H \\subseteq G\\). 检查 \\(H\\) 是否是 \\(G\\) 的子群, 可以使用如下的定理: \\[H \\subseteq G \\Leftrightarrow \\forall a, b \\in H, a * b^{-1} \\in H\\] 当然, 很多情况下都能一眼看出来某些元素的逆根本不在 \\(H\\) 里, 那么就直接否定了 \\(H\\) 是 \\(G\\) 的子群. 举个例子, 我们考虑大群 \\((\\mathbb{Z}_5, +)\\), 以及它的子集 \\(H =...","categories": ["FGT"],
        "tags": [],
        "url": "/PersonalPageCN/fgt/FGT-FiniteGroup2/",
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
        "title": "QM+ Berry Phase和几何相位2",
        "excerpt":"关于态有可能跟不上Hamiltonian变化这件事, 我们已经在 绝热定理和Berry phase中讨论过了 在绝热定理中, 我们说当系统的 Hamiltonian 缓慢变化时, 若某个本征值 \\(E_n(t)\\) 与其他本征值 \\(E_m(t)\\) 之间有能隙, 且系统初始时刻处于本征态 \\(\\ket{n;t=0}\\) , 那么在任意时刻系统仍然会在瞬时本征态 \\(\\ket{n;t}\\) 上, 只是会获得相位因子. 在这个基础之上, 如果我们的Hamiltonian依赖一组参数 \\(\\boldsymbol{R}=(R_1,R_2,\\cdots)\\) , 那么当这些参数沿着某条闭合路径 \\(\\mathcal{C}\\) 变化一圈后, 系统的态会获得一个额外的相位因子, 这个相位因子就是 Berry phase: \\[\\begin{equation} \\gamma_n(\\mathcal{C}) = \\mathrm{i}\\,\\oint_{\\mathcal{C}} \\mel{n;\\boldsymbol{R}}{\\nabla_{\\boldsymbol{R}}}{n;\\boldsymbol{R}} \\cdot \\mathrm{d}\\boldsymbol{R} \\end{equation}\\] 此处做两个之前没有提到过的评价: 我们为什么强调闭合路径? 这是因为初态和末态落在同一个参数点, 此时Hamiltonian一样, 这时态函数的物理可比性才成立, 于是额外的 Berry 相位才是一个真正物理可观测量 (当然, 是通过干涉实验等间接手段观测到的). 还有一个原因,...","categories": ["QM+"],
        "tags": [],
        "url": "/PersonalPageCN/qm+/QM+-BerryPhase2/",
        "teaser": null
      },{
        "title": "QM2 密度矩阵1",
        "excerpt":"量子力学的随机性: 演化过程是完全严格的, 但是测量结果是随机的, 没有什么随机性来自于我们对知识掌握的不足. 你准备10个一模一样的瓶子, 粒子一开始都在瓶子中心, 完全按照Schrödinger方程演化, 然后观察粒子的位置, 你会发现10次实验的结果还是一个分布. 经典概率的随机性: 经典随机性来自于复杂性和信息的不完全性, 原则上你扔一个骰子是完全可预测的, 但是由于你无法掌握所有的初始条件, 只能用概率来描述结果. 在这个背景下, 针对系综(一模一样的系统的综合)的问题, 我们就考虑使用密度矩阵, density matrix来容纳这种经典的随机性. 另外, 密度矩阵还能解决一类问题: 当一个子系统与整个系统的其余部分纠缠时, 对该子系统的描述中必然包含随机性, 这种随机性就由密度矩阵描述. 纯态: 完整地包含了关于该量子系统的所有可知信息, 可以用态矢量 \\(\\ket{\\psi}\\) 来描述. 混合态: 我们对系统没有完全的信息, 或者系统与外界发生了纠缠, 只能用密度矩阵 \\(\\rho\\) 来描述. 经典随机性 回到我们的经典的Stern-Gerlach实验, 我们的炉子有50%的概率发射自旋向上电子, 50%的概率发射自旋向下电子. 经典的随机性来自于我们对炉子发射电子的状态没有完全的信息, 只能说有50%的概率是向上, 50%的概率是向下. 从而我们可以用一个系综描述这个系统: \\[\\begin{equation} E_{\\text{z}} = \\left\\{ \\left( \\frac{1}{2}, \\ket{\\uparrow}...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-DensityMatrix1/",
        "teaser": null
      },{
        "title": "QM2 密度矩阵2",
        "excerpt":"关于本征态的测量 我们考虑一个纯态 $\\ket{\\psi}$, 我们自然是可以用一组本征态( $\\ket{i}$ )来测量他, 从而得到: \\[\\begin{equation} P(\\text{态在}i\\text{上}) = |\\braket{i|\\psi}|^2 \\end{equation}\\] 测量之后, 系统会坍缩到 $\\ket{i}$ 上. 我们现在可以把这一套语言完全的搬到密度矩阵上. 此时, 我们发现系统在 $\\ket{i}$ 上的概率会有一个经典的统计权重: \\[\\begin{equation} P(\\text{态在}i\\text{上}) = \\sum_{\\alpha=1}^N p_\\alpha |\\braket{i|\\psi_\\alpha}|^2 = \\mel{i}{\\rho}{i} \\end{equation}\\] 这说明, 概率分布由密度矩阵本身给出, 而不是某个具体的系综表示. 我们这么说, 是因为不同的系综分解可能会给出同样的密度矩阵. 一旦我们完成了测量, 系统会坍缩到 $\\ket{i}$ 上. 此时, 系统的密度矩阵会变成: \\[\\begin{equation} \\rho \\to \\frac{\\ket{i}\\bra{i} \\rho \\ket{i}\\bra{i}}{\\mel{i}{\\rho}{i}} = \\ketbra{i}{i} \\end{equation}\\]...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-DensityMatrix2/",
        "teaser": null
      },{
        "title": "三角函数查询表格",
        "excerpt":"基本定义 基础的三角函数定义一定是在直角三角形上的, 记住对边, 邻边, 斜边的概念. 这是最重要的, 不要忘掉… \\[\\begin{align} \\sin \\theta &amp;= \\frac{\\text{opposite}}{\\text{hypotenuse}}\\\\ \\cos \\theta &amp;= \\frac{\\text{adjacent}}{\\text{hypotenuse}}\\\\ \\tan \\theta &amp;= \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta} \\end{align}\\] 还有三个倒数函数 \\[\\begin{align} \\csc \\theta &amp;= \\frac{1}{\\sin \\theta} = \\frac{\\text{hypotenuse}}{\\text{opposite}}\\\\ \\sec \\theta &amp;= \\frac{1}{\\cos \\theta} = \\frac{\\text{hypotenuse}}{\\text{adjacent}}\\\\ \\cot \\theta &amp;= \\frac{1}{\\tan \\theta} = \\frac{\\text{adjacent}}{\\text{opposite}} = \\frac{\\cos...","categories": ["Math"],
        "tags": ["Trigs Table"],
        "url": "/PersonalPageCN/math/TrigsTable/",
        "teaser": null
      },{
        "title": "Linear Algebra 0",
        "excerpt":"我们复习一下关于线性方程和矩阵运算的基本知识: 线性方程组 线性方程组 (system of linear equations) 是由多个线性方程组成的集合. 一个线性方程是形如: \\[\\begin{equation} a_1 x_1 + a_2 x_2 + \\ldots + a_n x_n = b \\end{equation}\\] 其中 \\(a_1, a_2, \\ldots, a_n\\) 是已知系数, \\(x_1, x_2, \\ldots, x_n\\) 是未知变量, \\(b\\) 是常数项. 一个线性方程组是由多个这样的方程组成, 例如: \\[\\begin{equation} \\begin{cases} a_{11} x_1 + a_{12} x_2 + \\ldots + a_{1n} x_n...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/LA0/",
        "teaser": null
      },{
        "title": "Linear Algebra 1",
        "excerpt":"我们现在复习一下线性代数的基础知识, 我们主要关注有限维线性代数问题. 线性代数是研究向量空间及其线性映射的数学分支. 向量空间 向量空间 (vector space) 是由向量 (vector) 组成的集合. 正确的说法是在一个域 (field, 记作 \\(\\mathbb{F}\\), 例如实数域 \\(\\mathbb{R}\\) 或复数域 \\(\\mathbb{C}\\)) 上定义的一个集合 \\(V\\), 该集合配备了两个运算: 向量加法 (vector addition) 和标量乘法 (scalar multiplication), 并满足以下公理: 封闭 (closure): \\(\\forall u, v \\in V, u + v \\in V\\) 交换律 (commutativity): \\(\\forall u, v \\in V, u + v...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/LA1/",
        "teaser": null
      },{
        "title": "Linear Algebra 2",
        "excerpt":"现在我们把两个向量空间的概念联系起来, 也就是线性映射. 线性映射 线性映射 (linear map) 是保持向量加法和标量乘法的函数. 设 \\(V\\) 和 \\(W\\) 是定义在同一域 \\(\\mathbb{F}\\) 上的向量空间. 一个函数 \\(T: V \\to W\\) 称为线性映射, 如果满足 \\(\\forall u, v \\in V\\) 和 \\(\\forall a, b \\in \\mathbb{F}\\), 有: \\[\\begin{equation} T(au + bv) = aT(u) + bT(v) \\end{equation}\\] 其中 \\(u\\) 和 \\(v\\) 是 \\(V\\) 中的向量, \\(a\\)...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/LA2/",
        "teaser": null
      },{
        "title": "Linear Algebra 例题",
        "excerpt":"求解方程组 例题 1: 有解的方程组 求解以下线性三元方程组: \\[\\begin{equation} \\begin{cases} 2x + 3y + z = 1 \\\\ 4x + y - z = 2 \\\\ -2x + 5y + 2z = 3 \\end{cases} \\end{equation}\\] 写出增广矩阵: \\[\\begin{equation} \\left[\\begin{array}{ccc|c} 2 &amp; 3 &amp; 1 &amp; 1 \\\\ 4 &amp; 1 &amp; -1 &amp; 2...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/LAExample/",
        "teaser": null
      },{
        "title": "Mathematical Induction Method",
        "excerpt":"基本定义 数学归纳法是一种证明数学命题对所有自然数成立的有效方法, 针对关于数列, 极限, 组合等问题非常有效. 它的基本思想是通过两个步骤来证明一个命题对所有自然数成立: 基础步骤 (Base Case): 验证命题对第一个自然数 (通常是1) 成立. 归纳步骤 (Inductive Step): 假设命题对某个自然数 \\(k\\) 成立 (归纳假设), 然后证明命题对 \\(k+1\\) 也成立. 如果这两个步骤都成功完成, 那么根据数学归纳法, 命题对所有自然数 \\(n \\geq 1\\) 成立. 下结论: 通过基础步骤和归纳步骤, 我们可以得出结论, 命题对所有自然数成立. 实际上有两类数学归纳法: 普通数学归纳法: 适用于证明命题对所有自然数成立. 强归纳法 (Strong Induction): 适用于证明命题对所有自然数成立, 但在归纳步骤中, 假设命题对所有小于等于 \\(k\\) 的自然数成立, 然后证明对 \\(k+1\\) 也成立. 大多数情况下我们关心第一类的. 上纲上线 数学归纳法是一类基于严格逻辑推理的证明方法,...","categories": ["Math0"],
        "tags": [],
        "url": "/PersonalPageCN/math0/MIM/",
        "teaser": null
      },{
        "title": "QM1 角动量与中心势",
        "excerpt":"量子力学自然是应该有经典力学推广来的角动量的. 在经典力学中, 角动量定义为: \\[\\begin{equation} \\boldsymbol{L} = \\boldsymbol{r} \\times \\boldsymbol{p} \\end{equation}\\] 他的分量形式为: \\[\\begin{align} L_x = y p_z - z p_y \\\\ L_y = z p_x - x p_z \\\\ L_z = x p_y - y p_x \\end{align}\\] 每一个位置算符算符都没有和动量算符产生对易的问题, 所以, 直接把上面的式子量子化就可以了, 我们不特意加箭头区分了. 在量子力学里, 角动量肯定要继承经典力学的性质, 经典力学中, 角动量算符是体系旋转不变下的守恒量. 翻译到量子力学里, 角动量算符如何和哈密顿量对易, 也就是: \\[\\begin{equation} [L_i, H]...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-AngularMomentum1/",
        "teaser": null
      },{
        "title": "QM1 角动量与中心势2",
        "excerpt":"经过繁复的计算，我们终于得到了角动量算符在球坐标系下的表达式: \\[\\begin{equation} \\hat{L}^2 = -\\hbar^2 \\left[ \\frac{1}{\\sin \\theta} \\pdv{}{\\theta} \\left( \\sin \\theta \\pdv{}{\\theta} \\right) + \\frac{1}{\\sin^2 \\theta} \\pdv[2]{}{\\phi} \\right] \\end{equation}\\] 现在问题来了, 我们挑哪两个算符来标记波函数呢? 我们已经知道, 角动量的三个分量 $\\hat{L}_x, \\hat{L}_y, \\hat{L}_z$ 之间不对易, 也就是说, 它们不能同时有一组共同的本征函数. 经过之前的计算, 我们发现, 考虑 $\\hat{L}^2$ 和 $\\hat{L}_z$ 这两个算符, 它们是对易的, 即 $[\\hat{L}^2, \\hat{L}_z] = 0$, 而且形式简单: \\[\\begin{equation} \\hat{L}_z = -i \\hbar \\frac{\\partial}{\\partial...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-AngularMomentum2/",
        "teaser": null
      },{
        "title": "QM1 角动量与中心势3",
        "excerpt":"我们之前已经讨论了角动量算符在球坐标系下的表达式, 以及它们的本征值问题. 我们的到了如下结果: \\[\\begin{align} \\hat{L}_z Y_{l,m}(\\theta, \\phi) &amp;= \\hbar m Y_{l,m}(\\theta, \\phi) \\\\ \\hat{L}^2 Y_{l,m}(\\theta, \\phi) &amp;= \\hbar^2 l(l+1) Y_{l,m}(\\theta, \\phi) \\end{align}\\] 其中\\(l\\)和\\(m\\)是量子数, 它们的取值范围是: \\[\\begin{equation} l = 0, 1, 2, \\ldots; \\quad m = -l, -l+1, \\ldots, l-1, l \\end{equation}\\] 我们还知道, \\(Y_{l,m}(\\theta, \\phi)\\)是球谐函数, 它们是角动量算符的本征函数. 我们可以把\\(Y_{l,m}(\\theta, \\phi)\\)写成如下形式: \\[\\begin{align} Y_{l,m}(\\theta, \\phi) &amp;=...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-AngularMomentum3/",
        "teaser": null
      },{
        "title": "QM2 角动量与中心势",
        "excerpt":"之前我们学习过角动量的量子化, 并且知道角动量的本征值是量子化的: \\[\\begin{equation} L^2 \\ket{l,m} = \\hbar^2 l(l+1) \\ket{l,m}, \\quad L_z \\ket{l,m} = \\hbar m \\ket{l,m} \\end{equation}\\] 其中量子数 $l$ 和 $m$ 满足: \\[\\begin{equation} l = 0, 1, 2, \\ldots; \\quad m = -l, -l+1, \\ldots, l-1, l \\end{equation}\\] 代数计算 对于每一个 \\(l\\), 有 \\(2l + 1\\) 个可能的 \\(m\\) 值, 因此每个 \\(l\\)...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-AngularMomentum1/",
        "teaser": null
      },{
        "title": "QM2 角动量与中心势2",
        "excerpt":"我们现在从单个粒子的角动量算符出发, 讨论多粒子系统的角动量耦合. 设有两个粒子, 其角动量算符分别为\\(\\boldsymbol{J}_1, \\boldsymbol{J}_2\\), 那么我们怎么怎么定义总角动量算符呢? 以及有没有什么捷径可以直接写出总角动量的本征值和本征态呢? 不管是什么耦合, 角动量算符都必须满足如下的对易关系: \\(\\begin{equation} [J_i, J_j] = i \\hbar \\epsilon_{ijk} J_k \\end{equation}\\) 总角动量也不能违反这个对易关系. 如果我们按照之前扩张算符的做法, 考虑Hilbert空间\\(\\mathcal{H} = \\mathcal{H}_1 \\otimes \\mathcal{H}_2\\), 那么我们可以定义: \\(\\begin{equation} \\boldsymbol{J} = \\boldsymbol{J}_1 \\otimes \\mathbb{I} + \\mathbb{I} \\otimes \\boldsymbol{J}_2 \\end{equation}\\) 其中\\(\\mathbb{I}\\)是单位算符. 这个定义是合理的, 因为\\(\\boldsymbol{J}_1\\)和\\(\\boldsymbol{J}_2\\)作用在不同的Hilbert空间上, 它们之间对易. 并且这个定义也满足角动量的对易关系. 我们可以验证: \\[\\begin{align} [J_i, J_j] &amp;= [J_{1i} \\otimes \\mathbb{I}...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-AngularMomentum2/",
        "teaser": null
      },{
        "title": "QM2 密度矩阵3",
        "excerpt":"现在我们回顾一下上一个帖子中的一个困惑. 已知每次测量, 考虑一个结果\\(i\\), 测量算子是投影: \\[\\begin{equation} M_i = \\ketbra{i}{i} \\end{equation}\\] 从而得到结果\\(i\\)的概率是: \\[\\begin{equation} p(i) = \\Tr(M_i \\rho M_i^\\dagger) = \\bra{i}\\rho\\ket{i} \\end{equation}\\] 如果知道结果是\\(i\\), 那么测量后系统的状态是: \\[\\begin{equation} \\rho_i = \\frac{M_i \\rho M_i^\\dagger}{\\Tr(M_i \\rho M_i^\\dagger)} = \\ketbra{i}{i} \\end{equation}\\] 如果不知道结果(但是仍然测量了), 那么测量后系统的状态是: \\[\\begin{equation} \\tilde{\\rho} = \\sum_i p(i) \\rho_i = \\sum_i \\bra{i}\\rho\\ket{i} \\ketbra{i}{i} \\end{equation}\\] 成为了经典混合. 我们这个帖子就对于这个问题做出一些讨论和理解. 双粒子系统 我们还是考虑Alice和Bob的双粒子系统. Alice现在准备沿着一个基向量\\(\\ket{i}_A\\)测量她的粒子,...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-DensityMatrix3/",
        "teaser": null
      },{
        "title": "QM2 密度矩阵4",
        "excerpt":"在过往的学习中, 我们不加以怀疑的接受了如下概念: 每一次测量, 都得到了力学算符的一个数值, 力学算符本身由一个Hemritian算符表示. 测量后系统的状态坍缩到力学算符的一个本征态上, 测量结果就是这个本征态对应的本征值. 测量力学量的时候吗量子态会瞬间坍缩到本征态上. 但是, 我们对于理解测量仪器本身的工作原理, 以及测量过程中的量子力学描述, 仍然是模糊的. 这些问题仍然是开放性的, 没有一个准确的回答. 在Copenhagen诠释中, 测量过程是经典的, 经典测量仪器与量子系统相互作用, 使得量子系统坍缩到某个本征态上. 这就是说, 测量仪器本身是经典的, 历史上称之为Heisenberg cut. 但是, 量子力学应该是普适的, 是可以在所有尺度上都能应用的, 因此这种切口是不应该存在的. 我们应该很确信的就是, 经典物理是量子物理的极限情况, 经典物理是量子物理在大尺度下的近似. 在Copenhagen诠释中, 测量实际上是对于信号的方法, 以及不可逆的记录. 一开始, 量子态本身可以是分布在空间上的波函数, 而一旦测量了, 这个波函数就坍缩到某个位置上, 并且被不可逆的记录下来. 也就是说, 坍缩是在探测器读出结果时候发生的. 在探测之前, 系统还是处于叠加态, 满足Unitary evolution. 预测量问题 我们现在考虑量子力学是适用于一切迟钝的理论. 那么测量过程就是一个量子系统\\(S\\)与测量仪器\\(A\\)的相互作用. 为了表示一个完全量子化的测量过程, 我们考虑仪器具有指针态(pointer state)\\(\\ket{a_i}\\), 这些指针态是正交归一的....","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-DensityMatrix4/",
        "teaser": null
      },{
        "title": "QM2 角动量与中心势3",
        "excerpt":"现在我们来聊聊我们上一个内容里发现的神秘的数学结构. 仿佛是有一套方法, 能避免我们愚蠢的计算张量积下的矩阵元. 我们先站的远一点, 回想一些线性代数的知识. 线性空间与张量积 我们专注于一个有限维的线性空间\\(V_1\\), 其维数为\\(n_1\\). 他有一个基底\\(\\{\\ket{a_i}\\}, i=1,2,\\cdots,n_1\\). 我们可以把\\(V_1\\)中的任意向量\\(\\ket{v}\\)表示为 \\[\\begin{equation} \\ket{v} = \\sum_{i=1}^{n_1} v_i \\ket{a_i} \\end{equation}\\] 现在我们再考虑另一个有限维线性空间\\(V_2\\), 其维数为\\(n_2\\). 他有一个基底\\(\\{\\ket{b_j}\\}, j=1,2,\\cdots,n_2\\). 我们可以把\\(V_2\\)中的任意向量\\(\\ket{w}\\)表示为 \\[\\begin{equation} \\ket{w} = \\sum_{j=1}^{n_2} w_j \\ket{b_j} \\end{equation}\\] 我们现在想构造一个新的线性空间\\(V_3\\), 我们QM1研究过, 张量积是更恰当的构造方法, 维度相乘扩展, 而不是相加. \\[\\begin{equation} \\dim(V_3) = \\dim(V_1) \\times \\dim(V_2) = n_1 n_2 \\end{equation}\\] 这样可以容纳\\(V_1\\)和\\(V_2\\)的所有信息. \\(V_3\\)的基底可以写成\\(\\{\\ket{a_i}\\otimes\\ket{b_j}\\}, i=1,2,\\cdots,n_1, j=1,2,\\cdots,n_2\\). 我们可以把\\(V_3\\)中的任意向量\\(\\ket{u}\\)表示为...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-AngularMomentum3/",
        "teaser": null
      },{
        "title": "QM2 角动量与中心势4",
        "excerpt":"我们现在已经有了一个含糊的概念上的认知: 我们知道一个向量空间可以被直和分解为若干个不可约表示的直和. 如果可能的话, 被分解成若干个\\(T\\)的不变子空间的直和就更好了. 因为这样在每个子空间上, \\(T\\)的矩阵会变成分块对角矩阵, 计算会简单很多. (*) 在复数域上, 任何算子都可以按照特征值划分的不变子空间来直和分解, 这就是Jordan标准型. 现在我们想把这些数学概念, 联系到我们的物理问题上来. 这个过程还需要一些详细说明. 角动量与SU(2). 我们之前说过, 如果我们想旋转一个量子态, 我们可以用角动量算符来生成这个旋转: \\[\\begin{equation} U(\\alpha; \\hat{\\mathrm{n}}) = \\exp\\left(-\\frac{\\mathrm{i}}{\\hbar} \\alpha \\boldsymbol{J}\\cdot \\hat{\\mathrm{n}}\\right) \\end{equation}\\] 这个时候我们得做几个区分: 我们研究的物理空间是三维的, 就是说物理上旋转有三个独立的轴, 所以旋转的无穷小生成元又三个, 就是\\(J_x, J_y, J_z\\). 如果我们研究二维体系, 比如电子只在二维平面内运动, 那么旋转就只有一个轴, 也就是垂直于这个平面的轴, 旋转的无穷小生成元也只有一个, 就是\\(J_z\\). 现在我们看看自旋空间, 这就不是位置空间了, 但是他也是物理上的, 是量子系统自带的内部自由度, 他只是承载角动量代数怎么具体体现在内部空间的. 对于自旋量子数\\(s\\), 他的自旋空间维数是\\(2s+1\\), 这个和物理空间的三维二维没有直接关系. 此时我们需要引入一个重要的代数结构, 叫Lie...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM2-AngularMomentum4/",
        "teaser": null
      }]
