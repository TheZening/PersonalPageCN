---
title: "QM1+ Plane waves and Fourier "
date: 2024-10-10T08:06:00-05:00
categories:
  - QM1+
---
In this post, we discuss the plane waves and the convention of Fourier transformations, we use 1D as the example all the time. We will not discuss the properties of the Forrier transformations.


The starting point is to consider the plane wave:
$$
\begin{equation}
  \braket{x}{p} = \frac{1}{\sqrt{2\pi\hbar}} \exp(\frac{i}{\hbar}xp)
\end{equation}
$$
You can use $$k$$ as the variable as well:
$$
\begin{equation}
  \braket{x}{k} = \frac{1}{\sqrt{2\pi}} \exp(\frac{i}{\hbar}xk)
\end{equation}
$$
The Fourier transformation is defined as:
$$
\begin{equation}
  \tilde{f}(k) = \frac{1}{\sqrt{2\pi}} \int_-^+ f(x) \exp(-ikx) \dd{x}
\end{equation}
$$
The inverse Fourier transforamtion is:
$$
\begin{equation}
  f(x) = \frac{1}{\sqrt{2\pi}} \int_-^+ \tilde{f}(k) \exp(ikx) \dd{k}
\end{equation}
$$
or we can use $$p$$ as the variable:
$$
\begin{equation}
  \tilde{f}(p) = \frac{1}{\sqrt{2\pi\hbar}} \int_-^+ f(x) \exp(-\frac{i}{\hbar}px) \dd{x}
\end{equation}
$$
$$
\begin{equation}
  f(x) = \frac{1}{\sqrt{2\pi\hbar}} \int_-^+ f(p) \exp(\frac{i}{\hbar}px) \dd{p}
\end{equation}
$$

> The $$\hbar$$ factor is actually determined by the normalization condition, which can be summarized into the following 3 equations:

$$
\begin{equation}
\begin{aligned}
  \braket{x}{x'} =& \delta(x-x') \\
  \braket{p}{p'} =& \delta(p-p') \\
  \braket{k}{k'} =& \delta(k-k')
\end{aligned}
\end{equation}
$$
And the following identity:
$$
\begin{equation}
\begin{aligned}
  \int_-^+ \exp(i(k-k')x) \dd{x} =& 2\pi\delta(k-k') \\
  \int_-^+ \exp(\frac{i}{\hbar}(p-p')x) \dd{x} =& 2\pi\hbar\delta(p-p')
\end{aligned}
\end{equation}
$$
The connection between $$p$$ and $$k$$ is:
$$
\begin{equation}
  \delta(p-p') = \frac{1}{\hbar} \delta(k-k')
\end{equation}
$$









































