---
title: "QM1 Rabi问题"
date: 2024-10-09T08:06:00-05:00
categories:
  - QM1
---
In this post, we discuss the Rabi oscillations by considering a minimal 2-level system, which is described by the following Hamiltonian:

$$
\begin{equation}
  H = \mqty[E_1 & W_{1,2} \\ W_{2,1} & E_2]
\end{equation}
$$

> The first level has energy $$E_1$$ while the second level has energy $$E_2$$, the coupling term $$W_{1,2}$$ means this off-diagonal term will mix the two levels, so we call it **coupling**

> Reminder, this $$H$$ is written in the basis of $$(1,0)$$ and $$(0,1)$$, we will call them $$\ket{+}$$ and $$\ket{-}$$.

We first evaluate the eigenvalues of this two level system, which is quite easy:

$$
\begin{align}
  E_\pm = \frac{\Tr(H) \pm \sqrt{(\Tr(H))^2-4 \det(H)}}{2}
\end{align}
$$
We have

$$
\begin{equation}
  E_{ \pm}=\frac{1}{2}\left[E_1+E_2 \pm \sqrt{\left(E_1-E_2\right)^2+4\norm{W_{12}}^2}\right]
\end{equation}
$$
Then we define the following terms:


$$
\begin{equation}
  \tan \theta=\frac{2\norm{W_{12}}}{E_1-E_2} \quad e^{i \phi}=\frac{W_{21}}{2\norm{W_{12}}}
\end{equation}
$$
We can check the following eigen-pairs:

$$
\begin{align}
  & E_+ \, \text{and} \,  \boldsymbol{v}_+ = (\cos\theta/2, e^{i\phi}\sin\theta/2)^T \\
  & E_- \, \text{and} \, \boldsymbol{v}_- = (\sin\theta/2, -e^{i\phi}\cos\theta/2)^T
\end{align}
$$
We can check our original basis can be expressed as

$$
\begin{align}
  \ket{+} =& \cos \frac{\theta}{2}\left|v_{+}\right\rangle+\sin \frac{\theta}{2}\left|v_{-}\right\rangle \\
  \ket{-} =& \left(\sin \frac{\theta}{2}\left|v_{+}\right\rangle-\cos \frac{\theta}{2}\left|v_{-}\right\rangle\right) e^{-i \phi} \\
\end{align}
$$
We put it here and do not use it for now. Instead, we consider a general state in $$\boldsymbol{v}$$ basis:

$$
\begin{equation}
  |\psi;t\rangle=c_{+} e^{-i E_{+} t / \hbar}\left|v_{+}\right\rangle+c_{-} e^{-i E_{-} t / \hbar}\left|v_{-}\right\rangle
\end{equation}
$$
Assuming our system starts from $$\ket{-}$$:

$$
\begin{equation}
  |\psi;0\rangle=\left(\sin \frac{\theta}{2}\left|v_{+}\right\rangle-\cos \frac{\theta}{2}\left|v_{-}\right\rangle\right) e^{-i \phi}
\end{equation}
$$
Now we apply the time-evolution operator on it, which is easy in this basis since $$H$$ is already diagonal!


$$
\begin{equation}
  |\psi(t)\rangle=\left(\sin \frac{\theta}{2} e^{-i E_{+} t / \hbar}\left|v_{+}\right\rangle-\cos \frac{\theta}{2} e^{-i E_{-} t / \hbar}\left|v_{-}\right\rangle\right) e^{-i \phi}
\end{equation}
$$
What is the probability amplitude of being in state $$\ket{-}$$?

$$
\begin{equation}
  \braket{+}{\psi;t}=\sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{-i \phi}\left(e^{-i E_{+} t / \hbar}-e^{-i E_{-} t / \hbar}\right)
\end{equation}
$$
> So, if we start from $$\ket{-}$$, the probability of have $$\ket{+}$$ is the following.

$$
\begin{equation}
  P(\ket{-} \to \ket{+})=\sin ^2 \theta \sin ^2\left(\frac{E_{+}-E_{-}}{2 \hbar} t\right)
\end{equation}
$$
Now express this trigonometry in original matrix elements:

$$
\begin{equation}
  \frac{4\norm{W_{1,2}}^2}{4\norm{W_{1,2}}^2+\left(E_1-E_2\right)^2} \sin ^2\left(\frac{t}{2 \hbar} \sqrt{\left(E_1-E_2\right)^2+4\norm{W_{1,2}}^2}\right)
\end{equation}
$$
Now we look at a problem in magnetic fields, consider a spin-1/2 particle in magnetic fields. The magnetic fields is composed of a stationary part $$\boldsymbol{B}$$ and $$\boldsymbol{B_1}(t)$$. The Hamiltonian will read:

$$
\begin{equation}
  H=-\gamma \boldsymbol{S} \cdot\left(\boldsymbol{B}_0+\boldsymbol{B}_1(t)\right)
\end{equation}
$$
Furthermore, we ask the magnetic fields to have the form:

$$
\begin{equation}
  \boldsymbol{B}_0 = -\frac{\omega_0}{\gamma} \hat{z}
\end{equation}
$$
and

$$
\begin{equation}
  \boldsymbol{B}_1(t)=-\left(\omega_1 / \gamma\right)(\cos (\omega t) \hat{x}+\sin (\omega t) \hat{y})
\end{equation}
$$
Then the matrix form is:

$$
\begin{equation}
  H = \frac{\hbar}{2} \mqty[ \omega_0 & \omega_1 e^{-i\omega t} \\ \omega_1 e^{i\omega t} & - \omega_0]
\end{equation}
$$
Consider an arbitrary initial state:

$$
\begin{equation}
  |\psi(t)\rangle=c_{+}(t)|+\rangle+c_{-}(t)|-\rangle
\end{equation}
$$
Its evoution is governed by Schördinger equation;

$$
\begin{equation}
  i\hbar \dv{}{t} \mqty[ c_+ \\ c_-] = \frac{\hbar}{2} \mqty[ \omega_0 & \omega_1 e^{-i\omega t} \\ \omega_1 e^{i\omega t} & - \omega_0] \mqty[c_+ \\ c_-]
\end{equation}
$$
No good, smart people think we should do this:

$$
\begin{equation}
  c_{+}(t)=e^{-i \omega t / 2} \alpha_{+}(t) \quad c_{-}(t)=e^{i \omega t / 2} \alpha_{-}(t)
\end{equation}
$$
Then we have:


$$
\begin{equation}
  i\hbar \dv{}{t} \mqty[\alpha_+ \\ \alpha_-] = \frac{\hbar}{2} \mqty[\omega_0 - \omega & \omega_1 \\ \omega_1 & -(\omega_0-\omega)] \mqty[\alpha_+ \\ \alpha_-]
\end{equation}
$$
A new Hamiltonian in the new coefficients???

$$
\begin{equation}
  \tilde{H} = \frac{\hbar}{2} \mqty[\omega_0 - \omega & \omega_1 \\ \omega_1 & -(\omega_0-\omega)]
\end{equation}
$$
Ok, let us disregard whatever we are considering now, we just look at this new matrix and the dynamics of $$\alpha$$! We can project this Hamiltonian onto our results for the 2-levels derived earlier.

$$
\begin{align}
  & E_1 \to \frac{\hbar}{2}\left(\omega_0-\omega\right) \\
  & E_2 \rightarrow-\frac{\hbar}{2}\left(\omega_0-\omega\right) \\
  & W_{21} \rightarrow \frac{\hbar}{2} \omega_1
\end{align}
$$
Good, but we do a trick here, if we want to find the probability of a state initial at $$\ket{-}$$ and after $$t$$, it is in $$\ket{+}$$, we have:

$$
\begin{equation}
  \norm{\braket{+}{\psi;t}}^2 = \norm{c_+}^2 = \norm{\alpha_+}^2
\end{equation}
$$
The phase term vanish in evaluating probabilities!!! So by evaluating the effective $$\tilde{H}$$, we solve the original problem! The probability is

$$
\begin{equation}
  \frac{\omega_1^2}{\left(\omega-\omega_0\right)^2+\omega_1^2} \sin ^2\left(\frac{t}{2} \sqrt{\left(\omega-\omega_0\right)^2+\omega_1^2}\right)
\end{equation}
$$
This is again the Rabi oscillation formula!