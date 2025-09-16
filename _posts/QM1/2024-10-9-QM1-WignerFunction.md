---
title: "QM+ Wigner functions入门"
date: 2024-10-09T08:06:00-05:00
categories:
  - QM+
---
In this post, we discuss Wigner functions and Weyl transforms.


> It would be desirable to have a function that displays the probability distribution simultaneously in the $$x$$ and $$p$$ variables. This is what Wigner functions do.

> Another reason for a representation of a quantum state in phase space is to examine the connection between quantum and classical mechanics.

Originally, Wigner try to find a quantum correction to the Boltzmann distribution, which includes both position and momentum, retricted by the Heisenberg uncertainty principle. Therefore, we expect it can cover the quantum part in some limits, and cover the classical part in another limit.

Some general comments:
1. Wigner function is not a simple probability distribution.
2. Closely associated Weyl transforms of the operators.
3. The Weyl transform converts an operator into a function of $$x$$ and $$p$$.


We begin our discuss from Weyl transformation of an operator $$\hat{O}$$:
$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(-\frac{i}{\hbar}py) \mel**{x+\frac{y}{2}}{\hat{O}}{x-\frac{y}{2}} \dd{y}
\end{equation}
$$
We will put a tilde on top of the operators to indicate it is a Weyl transformed. The above equation can also be referred to as:
$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{equation}
$$
All the details is presented in the very end of the post. A good feature of the Weyl transformations is:
$$
\begin{equation}
  \Tr(\hat{A} \hat{B})=\frac{1}{2\pi\hbar} \int_-^+ \tilde{A}(x, p) \widetilde{B}(x, p) \dd{x}\dd{p}
\end{equation}
$$
The appearance of the trace encourage us to use density matrix $$\rho=\ketbra{\psi}{\psi}$$, if we need to evaluate the expectation, we can use
$$
\begin{equation}
  \Tr[\hat{\rho} \hat{O}]=\operatorname{Tr}[|\psi\rangle\langle\psi| \hat{O}]=\langle\psi| \hat{O}|\psi\rangle=\langle O\rangle
\end{equation}
$$
But remember the property of the Weyl transforamtion:
$$
\begin{equation}
  \langle O\rangle=\operatorname{Tr}[\hat{\rho} \hat{O}]=\frac{1}{2\pi\hbar} \int \tilde{\rho} \tilde{O} \dd{x}\dd{p}
\end{equation}
$$
We immediately have the *Wigner function*:
$$
\begin{equation}
\begin{aligned}
  W(x,p) =& \frac{\tilde{\rho}}{2\pi\hbar} \\
  =& \frac{1}{2\pi\hbar} \int \exp(-\frac{i}{\hbar}py) \psi(x+y/2)\psi^*(x-y/2) \dd{y}
\end{aligned}
\end{equation}
$$
Then the expectation value of $$\hat{O}$$ is given by:
$$
\begin{equation}
  \langle O\rangle=\int W(x, p) \tilde{O}(x, p) \dd{x}\dd{p}
\end{equation}
$$
Now the expectation appears to be the Weyl form averaged over the distribution $$W(x,p)$$. Looking at $$W$$, we notice the following:
$$
\begin{equation}
\begin{aligned}
  \int W(x, p) \dd{p}&=\psi^*(x) \psi(x) \\
  \int W(x, p) \dd{x}&=\varphi^*(p) \varphi(p)
\end{aligned}
\end{equation}
$$
Good! Next, we demonstrate some important properties:
1. The momentum basis Wigner funtion.
2. Trace of two operators in Weyl transforamtion.
3. Wigner function $$W$$ is real.
4. Weyl transformation of $$\mathbb{1}$$ is stiall $$\mathbb{1}$$.
5. Intergration of $$W$$ over $$x$$ and $$p$$ is 1.
6. We can recover the wavefunction from the Wigner function.

Now let us prove all the results one by one:
$$
\begin{equation}
  \tilde{O}(x, p)=\int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{equation}
$$
We have:
$$
\begin{equation}
\begin{aligned}
  &\int_-^+ \exp(-\frac{i}{\hbar}py) \mel**{x+\frac{y}{2}}{\hat{O}}{x-\frac{y}{2}} \dd{y} \\
  =& \int_-^+ \exp(-\frac{i}{\hbar}py) \braket{x+\frac{y}{2}}{p'}\mel**{p'}{\hat{O}}{p}\braket{p}{x-\frac{y}{2}} \dd{y}\dd{p}\dd{p'}\\
  =& \text{Integrate out all the plane waves} \\
  =& \int_-^+ \exp(\frac{i}{\hbar}xu) \mel**{p+\frac{u}{2}}{\hat{O}}{p-\frac{u}{2}} \dd{u}
\end{aligned}
\end{equation}
$$
Next we prove:
$$
\begin{equation}
  \Tr(\hat{A}\hat{B}) = \frac{1}{2\pi\hbar} \int \tilde{A} \tilde{B} \dd{x}\dd{p}
\end{equation}
$$











































