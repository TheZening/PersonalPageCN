---
title: "Integral Table - Gaussian"
date: 2024-10-07T08:06:00
categories:
  - Math
tags:
  - Integral Table
---

有一些常见的积分结果, 知道总比不知道要好...

$$
\int_{-\infty}^{\infty} e^{-x^2} \dd{x}=\sqrt{\pi}
$$

$$
\int_{-\infty}^{\infty} e^{-a(x+b)^2} d x=\sqrt{\frac{\pi}{a}}
$$

$$
\int_{-\infty}^{\infty} e^{-\left(a x^2+b x+c\right)} d x=\sqrt{\frac{\pi}{a}} e^{\frac{b^2}{4 a}-c}
$$

$$
\int_{-\infty}^{\infty} e^{\frac{1}{2} i t^2} d t=e^{i \pi / 4} \sqrt{2 \pi}
$$

$$
\int_0^{\infty} e^{-x^2} d x=\frac{\sqrt{\pi}}{2}
$$

Some general identities:

$$
\int_{-\infty}^{\infty} x^{2 n} e^{-\alpha x^2} d x=\sqrt{\frac{\pi}{\alpha}} \frac{(2 n-1)!!}{(2 \alpha)^n}
$$

$$
\int_0^{\infty} x^n e^{-a x^b} d x=\frac{\Gamma((n+1) / b)}{b a^{(n+1) / b}}
$$

The double factorial can be understood as:

$$
(2n-1)!!=(2n-1)(2n-3)(2n-5)...
$$

The Gamma function is defined as:

$$
\Gamma\left(\frac{1}{2}+n\right)=\frac{(2 n)!}{4^n n!} \sqrt{\pi} \quad \Gamma\left(\frac{1}{2}-n\right)=\frac{(-4)^n n!}{(2 n)!} \sqrt{\pi}
$$

If these identities do not answer you questions, you can further refer to [Wiki Pages](https://en.wikipedia.org/wiki/Gaussian_integral)

