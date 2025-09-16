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
        "url": "/PersonalPageCN/math/Important-Integrals-2/",
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
        "title": "QM1 Rabi问题",
        "excerpt":"在这篇文章里, 我们要讨论 Rabi 振荡, 先从一个最简单的二能级系统开始, 这个系统的 Hamiltonian 是这样的: \\[\\begin{equation} H = \\mqty[E_1 &amp; W_{1,2} \\\\ W_{2,1} &amp; E_2] \\end{equation}\\] 第一能级的能量是 \\(E_1\\), 第二能级的能量是 \\(E_2\\).中间的耦合项 \\(W_{1,2}\\) 会让两个能级混合, 所以我们叫它 coupling. 注意, 这个 \\(H\\) 是在 \\((1,0)\\) 和 \\((0,1)\\) 这组基下写的, 我们把它们叫做 \\(\\ket{+}\\) 和 \\(\\ket{-}\\). 接下来我们先算一下这个二能级系统的本征值, 很简单: \\(\\begin{align} E_\\pm = \\frac{\\Tr(H) \\pm \\sqrt{(\\Tr(H))^2-4 \\det(H)}}{2} \\end{align}\\) 算出来就是...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-RabiProblem/",
        "teaser": null
      },{
        "title": "QM+ Wigner functions入门",
        "excerpt":"在这篇文章里, 我们来讨论 Wigner 函数 和 Weyl 变换. 我们希望能有一个函数, 可以同时在 \\(x\\) 和 \\(p\\) 变量上展示概率分布.这就是 Wigner 函数要做的事. 另外, 把量子态放到相空间来表示, 还有助于研究量子力学和经典力学之间的联系. 最初, Wigner 是想找到一个对 Boltzmann 分布 的量子修正, 这个分布同时包含位置和动量, 但受到 海森堡不确定性原理 的限制.所以我们可以预期:在某些极限下, 它表现出量子特性；在另一些极限下, 它又能覆盖经典特性. 一些总体性的评论: Wigner 函数并不是一个普通的概率分布. 它和算符的 Weyl 变换紧密相关. Weyl 变换会把一个算符转成 \\(x\\) 和 \\(p\\) 的函数. Weyl 变换 我们从算符 \\(\\hat{O}\\) 的 Weyl 变换开始: \\[\\begin{equation}...","categories": ["QM+"],
        "tags": [],
        "url": "/PersonalPageCN/qm+/QM1-WignerFunction/",
        "teaser": null
      },{
        "title": "QM1 平面波和Fourier变换 ",
        "excerpt":"在这篇文章里, 我们来讨论 平面波 和 Fourier 变换的约定. 为了简化, 我们一直用 1D 的例子. 这里我们不会去深入讨论 Fourier 变换的性质. 平面波 从平面波出发: \\[\\begin{equation} \\braket{x}{p} = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\exp(\\frac{i}{\\hbar}xp) \\end{equation}\\] 你也可以用 \\(k\\) 作为变量: \\[\\begin{equation} \\braket{x}{k} = \\frac{1}{\\sqrt{2\\pi}} \\exp(\\frac{i}{\\hbar}xk) \\end{equation}\\] Fourier 变换 Fourier 变换定义为: \\[\\begin{equation} \\tilde{f}(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_-^+ f(x) \\exp(-ikx) \\dd{x} \\end{equation}\\] 反 Fourier 变换是: \\[\\begin{equation} f(x) = \\frac{1}{\\sqrt{2\\pi}}...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-PlaneWavesAndFourier/",
        "teaser": null
      },{
        "title": "QM1 绝热定理与Berry相位",
        "excerpt":"在 1984 年, Berry指出量子力学中关于波函数的一个重要几何特征. 本文就来讨论这个特征. 绝热近似 (Adiabatic Approximation) 我们考虑一个依赖于向量参数 \\(\\boldsymbol{\\zeta}(t)\\) 的 Hamiltonian, 参数在参数空间里走一条闭合回路. Hamiltonian 写作: \\[\\begin{equation} \\imath \\hbar \\dv{}{t}|\\psi;t\\rangle=\\hat{H}[\\boldsymbol{\\zeta}(t)]|\\psi;t\\rangle \\end{equation}\\] Hamiltonian 的本征方程是: \\[\\begin{equation} \\hat{H}[\\boldsymbol{\\zeta}(t)]|n[\\boldsymbol{\\zeta}(t)]\\rangle=E_n[\\boldsymbol{\\zeta}(t)]|n[\\boldsymbol{\\zeta}(t)]\\rangle \\end{equation}\\] 其中 \\(\\ket{n[\\boldsymbol{\\zeta}(t)]}\\) 是瞬时本征态. 假设 \\(t=0\\) 时系统的一般态是: \\[\\begin{equation} \\ket{\\psi;0} = \\sum_n c_n(0) \\ket{n[\\boldsymbol{\\zeta}(0)]} \\end{equation}\\] 时间演化写成: \\[\\begin{equation} \\ket{\\psi;t} = \\sum_{n} \\psi_n(t) \\exp(\\frac{i}{\\hbar}\\phi_n^{(d)}(t)) \\ket{n[\\boldsymbol{\\zeta}(t)]} \\end{equation}\\] 其中 \\[\\begin{equation} \\phi_n^{(d)}(t)...","categories": ["QM1"],
        "tags": [],
        "url": "/PersonalPageCN/qm1/QM1-AdiabaticTheoremAndBerryPhase/",
        "teaser": null
      },{
        "title": "QM2 Lindbladian量子动力学方程",
        "excerpt":"在这篇文章里, 我们来讨论开放量子系统的一些特性. 系统包含系统部分 \\(H_S\\)、环境(热浴)部分 \\(H_B\\), 以及相互作用项 \\(H_{SB}\\): \\(\\begin{equation} H(t) = H_S + H_B + \\alpha H_{SB} \\end{equation}\\) 整体(系统 + 环境)的动力学由密度矩阵 \\(\\rho_{SB}\\) 描述, 满足: \\(\\begin{equation} \\dv{}{t} \\rho_{SB} = -\\frac{i}{\\hbar} \\left[H_S + H_B + \\alpha H_{SB}, \\rho_{SB}\\right] \\end{equation}\\) 在相互作用绘景里, Hamiltonian 的演化是: \\(\\begin{equation} H(t) = \\exp\\left(\\frac{i}{\\hbar}(H_S + H_B)t\\right) H_{SB} \\exp\\left(-\\frac{i}{\\hbar}(H_S + H_B)t\\right) \\end{equation}\\)...","categories": ["QM2"],
        "tags": [],
        "url": "/PersonalPageCN/qm2/QM1-LindbladianEquation/",
        "teaser": null
      },{
        "title": "新闻",
        "excerpt":"这篇帖子会公布一些关于我们网站的重要更新, 还会提到接下来的工作计划, 包括假期和预定的拜访安排. 2020-Aug-25: 感谢才华横溢, 洞察力非凡的实验学者们的努力, 我们关于Dirac semimetal中二维Helical edge state的实验研究, 现在发表在 Nano Letter 上了. Helical Edge Transport in Millimeter-Scale Thin Films of Na3Bi 2021-March-15: 我们在应变Ge量子点中关于空穴自旋量子比特的理论研究, 现在发表在 Physics Review B上了. Theory of hole-spin qubits in strained germanium quantum dots 2021-Apr-01: 我们关于二维Ge空穴系统的理论研究, 现在发表在 Nature 合作期刊 npj Quantum Information上了. Optimal operation points for...","categories": ["Updates"],
        "tags": [],
        "url": "/PersonalPageCN/updates/RecentUpdate/",
        "teaser": null
      }]
