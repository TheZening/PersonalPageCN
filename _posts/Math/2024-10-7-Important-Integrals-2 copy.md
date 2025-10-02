---
title: "积分表 - Gauss积分"
date: 2024-10-07T08:06:00
categories:
  - Math
tags:
  - Integral Table
---

有一些常见的积分结果, 知道总比不知道要好, 一方面省得去网上搜了, 另一方面也不用打开Mathematica了...

$$
\int_{-\infty}^{\infty} \mathrm{-x^2} \dd{x} = \sqrt{\pi}
$$

$$
\int_{-\infty}^{\infty} \mathrm{e}^{-a(x+b)^2} \dd{x} = \sqrt{\frac{\pi}{a}}
$$

$$
\int_{-\infty}^{\infty} \mathrm{e}^{-\left(a x^2+b x+c\right)} \dd{x} = \sqrt{\frac{\pi}{a}} \mathrm{e}^{\frac{b^2}{4 a}-c}
$$

$$
\int_{-\infty}^{\infty} \mathrm{e}^{\frac{1}{2} i t^2} \dd{t} = \mathrm{e}^{i \pi / 4} \sqrt{2 \pi}
$$

$$
\int_0^{\infty} \mathrm{e}^{-x^2} \dd{x} = \frac{\sqrt{\pi}}{2}
$$

$$
\int_{-\infty}^{\infty} x^{2 n} \mathrm{e}^{-\alpha x^2} \dd{x} = \sqrt{\frac{\pi}{\alpha}} \frac{(2 n-1)!!}{(2 \alpha)^n}
$$

$$
\int_0^{\infty} x^n \mathrm{e}^{-a x^b} \dd{x} = \frac{\Gamma((n+1) / b)}{b a^{(n+1) / b}}
$$

双阶乘的定义如下:

$$
(2n-1)!!=(2n-1)(2n-3)(2n-5)...
$$

Gamma函数的定义如下:

$$
\Gamma\left(\frac{1}{2}+n\right)=\frac{(2 n)!}{4^n n!} \sqrt{\pi} \quad \Gamma\left(\frac{1}{2}-n\right)=\frac{(-4)^n n!}{(2 n)!} \sqrt{\pi}
$$

如果这些还是不够用, 可以考虑使用维基百科 [Wiki Pages](https://en.wikipedia.org/wiki/Gaussian_integral)

