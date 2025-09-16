---
title: "QM2 Lindbladian量子动力学系统"
date: 2024-10-12T08:06:00-05:00
categories:
  - QM2
---
In this post, we discuss some features of an open quantum system, which consists of the system $$H_S$$, the environment $$H_B$$, and the interaction part $$H_{SB}$$:
$$
\begin{equation}
  H(t) = H_S + H_B + \alpha H_{SB}
\end{equation}
$$
The dynamics of the whole system (system + environment), described by the density matrix $$\rho_{SB}$$, are given by:
$$
\begin{equation}
  \dv{}{t} \rho_{SB} = -\frac{i}{\hbar} \left[H_S + H_B + \alpha H_{SB}, \rho_{SB}\right]
\end{equation}
$$
In the interaction picture, the Hamiltonian evolves as:
$$
\begin{equation}
  H(t) = \exp\left(\frac{i}{\hbar}(H_S + H_B)t\right) H_{SB} \exp\left(-\frac{i}{\hbar}(H_S + H_B)t\right)
\end{equation}
$$
And the density matrix transforms accordingly:
$$
\begin{equation}
  \rho(t) = \exp\left(\frac{i}{\hbar}(H_S + H_B)t\right) \rho_{SB}(t) \exp\left(-\frac{i}{\hbar}(H_S + H_B)t\right)
\end{equation}
$$
This leads to a new equation:
$$
\begin{equation}
  \dv{}{t} \rho = -\frac{i}{\hbar} \alpha \left[H(t), \rho(t)\right]
\end{equation}
$$
Since we are only interested in the evolution of the system, we take the partial trace over the environment: $$\rho_S = \Tr_B(\rho_{SB})$$. The first step is to consider $$\rho_{SB}$$, which is the inverse of $$\rho$$ in the interaction picture:
$$
\begin{equation}
  \rho_{SB} = \exp\left(-\frac{i}{\hbar}(H_S+H_B)t\right) \rho_{SB}(t) \exp\left(\frac{i}{\hbar}(H_S+H_B)t\right)
\end{equation}
$$
Our approach is as follows:
1. Solve the equations in the interaction picture.
2. Find $$\rho_{SB}$$.
3. Take the partial trace.

Now, to solve the kinetic equation, we use an iterative approach:
$$
\begin{equation}
  \dv{\rho}{t} = \rho(0) - \frac{i}{\hbar} \alpha \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}
\end{equation}
$$
Then, the original equation becomes:
$$
\begin{equation}
\begin{aligned}
  \dv{\rho}{t} =& -\frac{i}{\hbar} \alpha \left[H(t), \rho(0)\right] \\
  & - \frac{1}{\hbar^2} \alpha^2 \left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{aligned}
\end{equation}
$$
Next, we take the partial trace to remove the environment:
$$
\begin{equation}
\begin{aligned}
  \dv{\rho_S}{t} =& -\frac{i}{\hbar} \alpha \Tr_B\left[H(t), \rho(0)\right] \\
  &- \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{aligned}
\end{equation}
$$
> $$H_{SB}$$ can often be defined in such a way that the first term on the right vanishes.

Thus, we arrive at:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t')\right] \dd{t'}\right]
\end{equation}
$$
Now, let's perform the integrations:
$$
\begin{equation}
  \rho_S(t) - \rho_S(t') = -\frac{1}{\hbar^2} \alpha^2 \int_t^{t'} \Tr_B\left[H(t'), \int_0^{t'} \left[H(t''), \rho(t'')\right] \dd{t''}\right] \dd{t'}
\end{equation}
$$
> This implies that $$\rho(t'')$$ is very close to $$\rho(t)$$, allowing us to approximate $$\rho(t')$$ by $$\rho(t)$$.

Thus, we have:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \alpha^2 \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t)\right] \dd{t'}\right]
\end{equation}
$$
Setting $$\alpha = 1$$, the equation simplifies to:
$$
\begin{equation}
  \dv{\rho_S}{t} = \frac{1}{\hbar^2} \Tr_B\left[H(t), \int_0^t \left[H(t'), \rho(t)\right] \dd{t'}\right]
\end{equation}
$$
> Next, we assume $$\rho(t) = \rho_S(t) \otimes \rho_B(t)$$.

The equation becomes:
$$
\begin{equation}
  \dv{\rho_S}{t} = -\frac{1}{\hbar^2} \Tr_B\left[H(t), \int_0^\infty \left[H(t'), \rho_S(t)\rho_B(t)\right] \dd{t'}\right]
\end{equation}
$$
> This is known as the Born-Markov master equation.

Now, we consider a specific model for the system-bath interaction:
$$
\begin{equation}
  H_{SB} = \hbar\left(SB^\dagger + S^\dagger B\right)
\end{equation}
$$
where $$S$$ is a general operator acting on the system, and $$B$$ is an operator acting on the environment.
> We assume $$S$$ is time-independent:

$$
\begin{equation}
  \left[S, H_S\right] = 0
\end{equation}
$$

We consider a bosonic bath for the environment, with the Hamiltonian:

$$
\begin{equation}
  H_B = \hbar \sum_{k} \omega_{k} \hat{a}_{k}^\dagger \hat{a}_{k}
\end{equation}
$$

The $$B$$ operator is defined as:

$$
\begin{equation}
  B = \sum_{k} g_{k}^* \hat{a}_{k}
\end{equation}
$$

where $$g_{k}^*$$ is the coupling constant. In the interaction picture, $$B(t)$$ evolves as:

$$
\begin{equation}
\begin{aligned}
  B(t) &= \exp\left(\frac{i}{\hbar} H_B t\right) B \exp\left(-\frac{i}{\hbar} H_B t\right) \\
  &= \sum_{k} g_{k}^* \hat{a}_{k} \exp\left(-i \omega_{k} t\right)
\end{aligned}
\end{equation}
$$

To reach the last step, some calculations are necessary—it's a good exercise for understanding the time evolution.

Next, we need to compute a series of commutators, and it's important to remember that **in this model, we assume $$S$$ is time-independent**:

$$
\begin{equation}
  [H(t), [H(t'), \rho_B(t) \rho_S(t)]] = \hbar [S B^\dagger + S^\dagger B, [H(t'), \rho_B(t) \rho_S(t)]]
\end{equation}
$$

Skipping some tedious calculations, we arrive at:

$$
\begin{equation}
\begin{aligned}
  & [S B^\dagger(t), [H(t'), \rho_B(t) \rho_S(t)]] \\
  =& + \hbar S S \rho_S(t) B^\dagger(t) B^\dagger(t') \rho_B + \hbar S S^\dagger \rho_S(t) B^\dagger(t) B(t') \rho_B \\
  & - \hbar S \rho_S(t) S B^\dagger(t) \rho_B B^\dagger - \hbar S \rho_S(t) S^\dagger B^\dagger(t) \rho_B B(t') \\
  & - \hbar S \rho_S(t) S B^\dagger(t') \rho_B B^\dagger(t) - \hbar S^\dagger \rho_S(t) S B(t') \rho_B B^\dagger(t) \\
  & + \hbar \rho_S(t) S S \rho_B B^\dagger(t') B^\dagger(t) + \hbar \rho_S(t) S^\dagger S \rho_B B(t') B^\dagger(t)
\end{aligned}
\end{equation}
$$

Next, we trace over all the bath terms:

$$
\begin{equation}
  \Tr_B\left[B(t), B(t') \rho_B\right] = \Tr_B\left[B^\dagger(t) B^\dagger(t') \rho_B\right] = 0
\end{equation}
$$

Using this property, we trace out the bath terms and obtain:
$$
\begin{equation}
\begin{aligned}
  &\Tr_B\Bqty{[H(t),[H(t'),\rho_B(t)\rho_S(t)]} \\
  =& + \hbar^2\left[{S} {S}^{\dagger} {\rho}_S(t)-{S}^{\dagger} {\rho}_S(t) {S}\right] \Tr_B\left\{B^{\dagger}(t) B\left(t^{\prime}\right) {\rho}_B\right\} \\
  & + \hbar^2[\rho_S(t)S^\dagger S - S \rho_S(t) S^\dagger] \Tr_B\Bqty{B(t')B^\dagger(t)\rho_B} \\
  & + \hbar^2[S^\dagger S \rho_S(t)- S \rho_S(t) S^\dagger] \Tr_B\Bqty{B(t) B^\dagger(t')\rho_B} \\
  & + \hbar^2[\rho_S(t) S^\dagger S - S^\dagger \rho_S(t) S] \Tr_B\Bqty{B^\dagger(t')B(t)\rho_B}
\end{aligned}
\end{equation}
$$
To summarize the operators we introduced, we have:

$$
\begin{equation}
  F(t) = \int_0^t \Tr_B\left[B(t) B^\dagger(t') \rho_B\right] \dd{t'}
\end{equation}
$$

$$
\begin{equation}
  G(t) = \int_0^t \Tr_B\left[B^\dagger(t') B(t) \rho_B\right] \dd{t'}
\end{equation}
$$

$$
\begin{equation}
  F^*(t) = \int_0^t \Tr_B\left[B(t') B^\dagger(t) \rho_B\right] \dd{t'}
\end{equation}
$$

$$
\begin{equation}
  G^*(t) = \int_0^t \Tr_B\left[B^\dagger(t) B(t') \rho_B\right] \dd{t'}
\end{equation}
$$

Now that we have cleared the algebra, the evolution of $$\rho_S(t)$$ becomes:

$$
\begin{equation}
\begin{aligned}
  \frac{d \rho_S}{d t} &= - \left[S S^\dagger \rho_S(t) - S^\dagger \rho_S(t) S\right] G^*(t) \\
  &- \left[\rho_S(t) S^\dagger S - S \rho_S(t) S^\dagger\right] F^*(t) \\
  &- \left[S^\dagger S \rho_S(t) - S \rho_S(t) S^\dagger\right] F(t) \\
  &- \left[\rho_S(t) S S^\dagger - S^\dagger \rho_S(t) S\right] G(t)
\end{aligned}
\end{equation}
$$

> Consider the environment's initial state as a vacuum:

$$
\begin{equation}
  \rho_B = \ket{0}\bra{0} \otimes \ket{0}\bra{0} \dots
\end{equation}
$$

Recalling that:

$$
\begin{equation}
  B^\dagger(t) = \sum_{k} g_k \hat{a}_k^\dagger \exp(i \omega_k t)
\end{equation}
$$

The partial trace over $$F(t)$$ and $$G(t)$$ is then evaluated as:

$$
\begin{equation}
  \Tr_B\left[B(t) B^\dagger(t') \rho_B\right] = \Tr_B\left[B(t) B^\dagger(t') \ket{0}\bra{0}\right]
\end{equation}
$$

Expanding the trace:

$$
\begin{equation}
\begin{aligned}
  \Tr_B\left[B(t) B^\dagger(t') \rho_B\right] &= \sum_{k, k'} g_k^* g_{k'} \exp\left(-i (\omega_k t - \omega_{k'} t')\right) \langle 0 | \hat{a}_k \hat{a}_{k'}^\dagger | 0 \rangle \\
  &= \sum_{k} |g_k|^2 \exp\left(-i \omega_k (t - t')\right)
\end{aligned}
\end{equation}
$$

Therefore:

$$
\begin{equation}
  F(t) = \sum_k |g_k|^2 \int_0^t \exp(-i \omega_k (t - t')) \dd{t'}
\end{equation}
$$

While:

$$
\begin{equation}
  G(t) = 0
\end{equation}
$$

To integrate $$F(t)$$, we use the general definition for the density of states:

$$
\begin{equation}
  J(\omega) = \sum_l |g_l|^2 \delta(\omega - \omega_l)
\end{equation}
$$

Thus:

$$
\begin{equation}
  F(t) = \int_0^\infty \int_0^t J(\omega) \exp(-i \omega (t - t')) \dd{t'} \dd{\omega}
\end{equation}
$$

A small substitution simplifies this:

$$
\begin{equation}
  \tau = t - t' \quad \dd{\tau} = -\dd{t'}
\end{equation}
$$

Thus:

$$
\begin{equation}
  \int_0^t \dd{t'} = \int_0^t \dd{\tau}
\end{equation}
$$

The integral becomes:

$$
\begin{equation}
  F(t) = \int_0^\infty \int_0^t J(\omega) \exp(-i \omega \tau) \dd{\tau} \dd{\omega}
\end{equation}
$$

Using the identity:

$$
\begin{equation}
  \int_0^\infty \exp(-i \omega \tau) \dd{\tau} = \pi \delta(\omega) - i \, \text{P.V.} \frac{1}{\omega}
\end{equation}
$$

We find:

$$
\begin{equation}
  F(t) = \pi \int_0^\infty J(\omega) \delta(\omega) \dd{\omega} - i \, \text{P.V.} \int_0^\infty \frac{J(\omega)}{\omega} \dd{\omega}
\end{equation}
$$

Finally, we can express $$F$$ as:

$$
\begin{equation}
  F = \frac{1}{2} \gamma + \frac{i}{2} \epsilon
\end{equation}
$$

Thus, the equation for $$\rho_S(t)$$ becomes:

$$
\begin{equation}
\begin{aligned}
  \frac{d \rho_S(t)}{d t} &= - \frac{\gamma}{2} \left[\rho_S(t) S^\dagger S - S \rho_S(t) S^\dagger + S^\dagger S \rho_S(t) - S \rho_S(t) S^\dagger\right] \\
  &\quad + i \frac{\epsilon}{2} \left[\rho_S(t) S^\dagger S - S \rho_S(t) S^\dagger - S^\dagger S \rho_S(t) + S \rho_S(t) S^\dagger\right]
\end{aligned}
\end{equation}
$$

> If we assume the density of states leads to $$\epsilon = 0$$, the final result becomes:

$$
\begin{equation}
  \frac{d \rho_S(t)}{d t} = \gamma \left[S \rho_S(t) S^\dagger - \frac{1}{2} \left\{S^\dagger S, \rho_S(t)\right\}\right]
\end{equation}
$$

Returning to the original picture (omitting the steps for brevity), we get the renowned Lindblad quantum kinetic equation.

$$
\begin{equation}
  \frac{d \rho_S}{d t} = -\frac{i}{\hbar} \left[H_S, \rho_S\right] + \gamma \left[S \rho_S S^\dagger - \frac{1}{2} \left\{S^\dagger S, \rho_S\right\}\right]
\end{equation}
$$
























































