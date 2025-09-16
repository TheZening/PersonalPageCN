---
title: "QM1+ Adiabatic theorem and Berry phase"
date: 2024-10-11T08:06:00-05:00
categories:
  - QM1+
---
In 1984, Berry pointed out a feature in quantum mechanics that has been studied in the past 60 years. We will discuss this features in the post.


The first topic is called the adiabatic approximation, we consider a Hamiltonian depend on a vector parameter $$\boldsymbol{\zeta}(t)$$ which trace a closed llop in the parameter space. The Hamiltonian will read:
$$
\begin{equation}
  \imath \hbar \dv{}{t}|\psi;t\rangle=\hat{H}[\boldsymbol{\zeta}(t)]|\psi;t\rangle
\end{equation}
$$
The eigenvalue equation of the Hamiltonian is:
$$
\begin{equation}
  \hat{H}[\boldsymbol{\zeta}(t)]|n[\boldsymbol{\zeta}(t)]\rangle=E_n[\boldsymbol{\zeta}(t)]|n[\boldsymbol{\zeta}(t)]\rangle
\end{equation}
$$
where $$\ket{n[\boldsymbol{\zeta}(t)]}$$ is an instantaneous eigenstate of the Hamiltonian. Now, consider we have a general state at $$t=0$$:
$$
\begin{equation}
  \ket{\psi;0} = \sum_n c_n(0) \ket{n[\boldsymbol{\zeta}(0)]}
\end{equation}
$$
Now, we consider the time evolution of this state:
$$
\begin{equation}
  \ket{\psi;t} = \sum_{n} \psi_n(t) \exp(\frac{i}{\hbar}\phi_n^{(d)}(t)) \ket{n[\boldsymbol{\zeta}(t)]}
\end{equation}
$$
where
$$
\begin{equation}
  \phi_n^{(d)}(t) = \int_0^t E_n[\boldsymbol{\zeta}(t')] \dd{t'}
\end{equation}
$$
is the dynamical phase for a time-dependent system. The equation can be expressed as:
$$
\begin{equation}
  \dv{}{t} \phi_n^{(d)}(t) = E_n[\boldsymbol{\zeta}(t')]
\end{equation}
$$
Now we can take the derivative of the general state $$\ket{\psi;t}$$:

$$
\begin{equation}
\begin{aligned}
  &i\hbar\dv{}{t} \ket{\psi;t} \\
  =& i\hbar \sum_{n} e^{-i\phi_n^{(d)}} \bqty{\dv{c_n}{t} \ket{n} + c_n \dv{\ket{n}}{t} }+ \sum_n E_n c_n \exp(-i\phi_n^{(d)})
\end{aligned}
\end{equation}
$$
From the definitions of the states, we can derive:
$$
\begin{equation}
  H[\boldsymbol{\zeta}(t)] \ket{\psi;t} = \sum_n E_n \psi_n \exp(-i\phi_n^{(d)})\ket{n}
\end{equation}
$$
Combined with the previous results:
$$
\begin{equation}
  \sum_{n} e^{-i\phi_n^{(d)}} \bqty{\dv{c_n}{t} \ket{n} + c_n \dv{\ket{n}}{t} } = 0
\end{equation}
$$
Project another state $$\ket{m}$$ onto it:
$$
\begin{equation}
  \dv{c_m}{t} = -\mel**{m}{\dv{}{t}}{m} - \sum_{n\neq m} \exp(i(\phi_n^{(d)}-\phi_m^{(d)})) \mel**{m}{\dv{}{t}}{n} c_n
\end{equation}
$$
*Note that we just igonore the $$t$$ dependence for space!* Even the system begins in an initial state given by a single energy eigenstate, all the other energy eigenstates come into play!


Now we place the $$\boldsymbol{\zeta}(t)$$ dependence on, and write down the full expression:
$$
\begin{equation}
\begin{aligned}
  M_{m,n} =& \mel**{m[\boldsymbol{\zeta}(t)]}{\dv{}{t}}{n[\boldsymbol{\zeta}(t)]} \\
  =& \mel**{m[\boldsymbol{\zeta}(t)]}{\nabla_{\boldsymbol{\zeta}}}{n[\boldsymbol{\zeta}(t)]} \dv{\boldsymbol{\zeta(t)}}{t}
\end{aligned}
\end{equation}
$$
If the parameter do not strongly depende on the time, then $$c_n(t)$$ will also change marginally, which means that if the system is initially in the energy eigenstate $$\ket{j[\boldsymbol{\zeta}(t_0)]}$$, then the system will reamins in the same intantneous energy eigenstate. 


In the mean time, the phase factor will make the second term smaller, and we throw it out under **adiabatic approximation**. Now we have:
$$
\begin{equation}
  \dv{c_m(t)}{t} = -\mel**{m[\boldsymbol{\zeta(t)}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta(t)}]} \dv{\boldsymbol{\zeta(t)}}{t} c_m(t)
\end{equation}
$$
In this case, Berry told us that after a **cycle** in the parameter space, the system will gain a geometric phase factor, which is different from the dynamical phase!
> Geometric phase = The geometry of the parameter space!

The starting point is to realize that:
$$
\begin{equation}
  \overline{\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}} + \mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]} = 0
\end{equation}
$$
Remember that $$c+\overline{c}$$=real part, we conclude that:
$$
\begin{equation}
  2\Re\Bqty{\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}} = 0 
\end{equation}
$$
$$\mel**{m[\boldsymbol{\zeta}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta}]}$$ is purely imagniary! Then we can integrate the equation:
$$
\begin{equation}
  \dv{c_m(t)}{t} = -\mel**{m[\boldsymbol{\zeta(t)}]}{\nabla_{\boldsymbol{\zeta}}}{m[\boldsymbol{\zeta(t)}]} \dv{\boldsymbol{\zeta(t)}}{t} c_m(t)
\end{equation}
$$
which is:
$$
\begin{equation}
  c_m(t) = \exp(\frac{i}{\hbar}\phi_m^{(g)}) c_m(0)
\end{equation}
$$
where:
$$
\begin{equation}
  \phi_m^{(g)}(t) = -\int_{\boldsymbol{\zeta}(0)}^{\boldsymbol{\zeta}(t)} \Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}} \dd{\boldsymbol{\zeta}'}
\end{equation}
$$
is just the geometric phase. For a closed loop, we have
$$
\begin{equation}
  \phi_m^{(g)}(t) = -\oint_{\text{C}} \Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}} \dd{\boldsymbol{\zeta}'}
\end{equation}
$$
The Berry connection is defined as:
$$
\begin{equation}
  \mathcal{A}_m[\boldsymbol{\zeta}] = i \mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']} = -\Im\Bqty{\mel**{m[\boldsymbol{\zeta}']}{\nabla_{\boldsymbol{\zeta}'}}{m[\boldsymbol{\zeta}']}}
\end{equation}
$$
The Berry curvature is defined as:
$$
\begin{equation}
  \Omega_{m; \mu,\nu}[\boldsymbol{\zeta}] = \pdv{}{\zeta^\mu} \mathcal{A}_{m; \nu}[\boldsymbol{\zeta}] - \pdv{}{\zeta^\nu} \mathcal{A}_{m; \mu}[\boldsymbol{\zeta}]
\end{equation}
$$
If the parameter is 3D, we have:
$$
\begin{equation}
  \boldsymbol{\Omega}_{m}[\boldsymbol{\zeta}]=\nabla_{\boldsymbol{\zeta}}\times \mathcal{A}_m[\boldsymbol{\zeta}]
\end{equation}
$$
For a detailed exmple, readers are recommended to have a look at [Prof. David Tong's note on QHE](https://arxiv.org/pdf/1606.06687). We will discuss its energy spectrum version and its usefullness in solid state series, where the parameter space can be the reciprocal space, a nature parameter space for Bloch electrons.
















