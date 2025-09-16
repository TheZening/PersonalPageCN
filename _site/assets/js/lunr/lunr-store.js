var store = [{
        "title": "积分表 - 三角函数积分",
        "excerpt":"Here we summarize some useful intergation results in assignments. \\[\\int \\sin ^2 ax \\dd{x}=\\frac{x}{2}-\\frac{1}{4 a} \\sin 2 a x+C\\] \\[\\int \\cos ^2 ax \\dd{x}=\\frac{x}{2}+\\frac{1}{4 a} \\sin 2 a x+C\\] \\[\\int \\sin ^3 a x \\dd{x}=\\frac{\\cos 3 a x}{12 a}-\\frac{3 \\cos a x}{4 a}+C\\] \\[\\int x \\sin a x \\dd{x}=\\frac{\\sin a...","categories": ["Math"],
        "tags": ["Integral Table"],
        "url": "/PersonalPageCN/math/Important-Integrals/",
        "teaser": null
      },{
        "title": "Recent Updates",
        "excerpt":"This post will announce some important updates regarding our sites, along with upcoming work plans, including holidays and scheduled visits. 2020-Aug-25: Thanks to the efforts made by brilliant and insightful experimentallists, our work on 2D helical edge states in Dirac semi-metals is publishedon on Nano Letter now. Helical Edge Transport...","categories": ["Updates"],
        "tags": [],
        "url": "/PersonalPageCN/updates/RecentUpdate/",
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
        "title": "QM1+ Larmour问题",
        "excerpt":"在这篇文章中, 我们讨论Larmour问题. 我们首先介绍轨道和自旋电子磁矩. 先定义Bohr磁子: \\begin{equation} \\mu_{\\text{B}}=\\frac{e \\hbar}{2 m_{e}} \\end{equation} 轨道磁矩 指的是电子在原子中围绕原子核运动所产生的磁矩. \\begin{equation} \\boldsymbol{\\mu}=-g_e\\frac{e}{2 m_e} \\boldsymbol{L} = -g_e \\mu_{\\text{B}} \\frac{\\boldsymbol{L}}{\\hbar} \\end{equation} !!\\(e=1.602 \\times 10^{-19}\\) C, 一个正数!! 自旋磁矩 是电子内禀角动量产生的磁矩 \\begin{equation} \\boldsymbol{\\mu}=-g_s \\mu_{\\text{B}} \\frac{\\boldsymbol{S}}{\\hbar} \\end{equation} 我们只考虑自旋磁矩, 假设在一个外加的垂直磁场中有一个自旋, 从现在起我们将 \\(g_s\\) 简写为 \\(g\\): \\begin{equation} H = -\\frac{1}{2} g \\mu_{\\text{B}} \\boldsymbol{\\sigma}\\cdot\\boldsymbol{B} = \\begin{bmatrix}-g \\mu_{\\text{B}} B_z/2 &amp;...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-LarmourProblem/",
        "teaser": null
      },{
        "title": "QM1+ Rabi problem",
        "excerpt":"In this post, we discuss the Rabi oscillations by considering a minimal 2-level system, which is described by the following Hamiltonian: \\[\\begin{equation} H = \\mqty[E_1 &amp; W_{1,2} \\\\ W_{2,1} &amp; E_2] \\end{equation}\\] The first level has energy \\(E_1\\) while the second level has energy \\(E_2\\), the coupling term \\(W_{1,2}\\) means...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-RabiProblem/",
        "teaser": null
      },{
        "title": "QM1+ Wigner functions",
        "excerpt":"In this post, we discuss Wigner functions and Weyl transforms. It would be desirable to have a function that displays the probability distribution simultaneously in the \\(x\\) and \\(p\\) variables. This is what Wigner functions do. Another reason for a representation of a quantum state in phase space is to...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-WignerFunction/",
        "teaser": null
      },{
        "title": "QM1+ Plane waves and Fourier ",
        "excerpt":"In this post, we discuss the plane waves and the convention of Fourier transformations, we use 1D as the example all the time. We will not discuss the properties of the Forrier transformations. The starting point is to consider the plane wave: \\(\\begin{equation} \\braket{x}{p} = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\exp(\\frac{i}{\\hbar}xp) \\end{equation}\\) You can...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-PlaneWavesAndFourier/",
        "teaser": null
      },{
        "title": "QM1+ Adiabatic theorem and Berry phase",
        "excerpt":"In 1984, Berry pointed out a feature in quantum mechanics that has been studied in the past 60 years. We will discuss this features in the post. The first topic is called the adiabatic approximation, we consider a Hamiltonian depend on a vector parameter \\(\\boldsymbol{\\zeta}(t)\\) which trace a closed llop...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-AdiabaticTheoremAndBerryPhase/",
        "teaser": null
      },{
        "title": "QM1+ Lindbladian quantum kinetic equations",
        "excerpt":"In this post, we discuss some features of an open quantum system, which consists of the system \\(H_S\\), the environment \\(H_B\\), and the interaction part \\(H_{SB}\\): \\(\\begin{equation} H(t) = H_S + H_B + \\alpha H_{SB} \\end{equation}\\) The dynamics of the whole system (system + environment), described by the density matrix...","categories": ["QM1+"],
        "tags": [],
        "url": "/PersonalPageCN/qm1+/QM1-LindbladianEquation/",
        "teaser": null
      }]
