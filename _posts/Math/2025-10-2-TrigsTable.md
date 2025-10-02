---
title: "三角函数查询表格"
date: 2025-10-2
categories:
  - Math
tags:
  - Trigs Table
---
## 基本定义


基础的三角函数定义一定是在直角三角形上的, 记住对边, 邻边, 斜边的概念.
这是最重要的, 不要忘掉...

$$
\begin{align}
\sin \theta &= \frac{\text{opposite}}{\text{hypotenuse}}\\
\cos \theta &= \frac{\text{adjacent}}{\text{hypotenuse}}\\
\tan \theta &= \frac{\text{opposite}}{\text{adjacent}} = \frac{\sin \theta}{\cos \theta}
\end{align}
$$

还有三个倒数函数

$$
\begin{align}
\csc \theta &= \frac{1}{\sin \theta} = \frac{\text{hypotenuse}}{\text{opposite}}\\
\sec \theta &= \frac{1}{\cos \theta} = \frac{\text{hypotenuse}}{\text{adjacent}}\\
\cot \theta &= \frac{1}{\tan \theta} = \frac{\text{adjacent}}{\text{opposite}} = \frac{\cos \theta}{\sin \theta}
\end{align}
$$

---
## 一般情况下怎么用边求值?

如果不是直角三角形, 也可以用正弦定理和余弦定理来求值.

角$$A, B, C$$ 对应的边分别是 $$a, b, c$$, 就是对边.
$$R$$是外接圆半径.

从而我们有正弦定理:

$$
\begin{equation}
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R
\end{equation}
$$

三角形面积公式:

$$
\begin{equation}
\text{Area} = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ca\sin B = \frac{abc}{4R}
\end{equation}
$$

当然还有余弦定理:

$$
\begin{align}
\cos A &= \frac{b^2 + c^2 - a^2}{2bc}\\
\cos B &= \frac{a^2 + c^2 - b^2}{2ac}\\
\cos C &= \frac{a^2 + b^2 - c^2}{2ab}
\end{align}
$$

当角是钝角时, 余弦为负数, 可以用余弦定理判断三角形的形状!

---
## 求值问题
一些常见的三角函数值, 知道总比不知道要好, 一方面省得去网上搜了, 另一方面也不用打开Mathematica了...

| 角度 (°) | 0   | 30       | 45         | 60         | 90  | 120       | 135        | 150       | 180 | 210       | 225        | 240       | 270  | 300       | 315        | 330       | 360 |
|---------:|:---:|:--------:|:----------:|:----------:|:--:|:---------:|:----------:|:---------:|:---:|:---------:|:----------:|:---------:|:---:|:---------:|:----------:|:---------:|:---:|
| 弧度 (π) | $$0$$ | $$\tfrac{\pi}{6}$$ | $$\tfrac{\pi}{4}$$ | $$\tfrac{\pi}{3}$$ | $$\tfrac{\pi}{2}$$ | $$\tfrac{2\pi}{3}$$ | $$\tfrac{3\pi}{4}$$ | $$\tfrac{5\pi}{6}$$ | $$\pi$$ | $$\tfrac{7\pi}{6}$$ | $$\tfrac{5\pi}{4}$$ | $$\tfrac{4\pi}{3}$$ | $$\tfrac{3\pi}{2}$$ | $$\tfrac{5\pi}{3}$$ | $$\tfrac{7\pi}{4}$$ | $$\tfrac{11\pi}{6}$$ | $$2\pi$$ |
| $$\sin x$$ | $$0$$ | $$\tfrac{1}{2}$$   | $$\tfrac{\sqrt{2}}{2}$$ | $$\tfrac{\sqrt{3}}{2}$$ | $$1$$ | $$\tfrac{\sqrt{3}}{2}$$ | $$\tfrac{\sqrt{2}}{2}$$ | $$\tfrac{1}{2}$$ | $$0$$ | $$-\tfrac{1}{2}$$ | $$-\tfrac{\sqrt{2}}{2}$$ | $$-\tfrac{\sqrt{3}}{2}$$ | $$-1$$ | $$-\tfrac{\sqrt{3}}{2}$$ | $$-\tfrac{\sqrt{2}}{2}$$ | $$-\tfrac{1}{2}$$ | $$0$$ |
| $$\cos x$$ | $$1$$ | $$\tfrac{\sqrt{3}}{2}$$ | $$\tfrac{\sqrt{2}}{2}$$ | $$\tfrac{1}{2}$$ | $$0$$ | $$-\tfrac{1}{2}$$ | $$-\tfrac{\sqrt{2}}{2}$$ | $$-\tfrac{\sqrt{3}}{2}$$ | $$-1$$ | $$-\tfrac{\sqrt{3}}{2}$$ | $$-\tfrac{\sqrt{2}}{2}$$ | $$-\tfrac{1}{2}$$ | $$0$$ | $$\tfrac{1}{2}$$ | $$\tfrac{\sqrt{2}}{2}$$ | $$\tfrac{\sqrt{3}}{2}$$ | $$1$$ |
| $$\tan x$$ | $$0$$ | $$\tfrac{\sqrt{3}}{3}$$ | $$1$$ | $$\sqrt{3}$$ | 不定义 | $$-\sqrt{3}$$ | $$-1$$ | $$-\tfrac{\sqrt{3}}{3}$$ | $$0$$ | $$\tfrac{\sqrt{3}}{3}$$ | $$1$$ | $$\sqrt{3}$$ | 不定义 | $$-\sqrt{3}$$ | $$-1$$ | $$-\tfrac{\sqrt{3}}{3}$$ | $$0$$ |


因为周期性是$$2\pi$$, 所以这种加减乘除是最简单的, 如果是$$k$$为整数, 则有:

$$
\begin{align}
\sin(\theta + 2k\pi) &= \sin \theta\\
\cos(\theta + 2k\pi) &= \cos \theta\\
\tan(\theta + 2k\pi) &= \tan \theta
\end{align}
$$

平移$$\pi$$, 也不太复杂:

$$
\begin{align}
\sin(\theta + k\pi) &= (-1)^k \sin \theta\\
\cos(\theta + k\pi) &= (-1)^k \cos \theta\\
\tan(\theta + k\pi) &= \tan \theta
\end{align}
$$

⚠️唯一需要小心的就是平移$$\pi/2$$, 这个时候需要注意正负号:

$$
\begin{align}
\sin(\theta \pm \pi/2) &= \cos \theta\\
\cos(\theta \pm \pi/2) &= \pm\sin \theta\\
\tan(\theta \pm \pi/2) &= \pm\cot \theta\\
\end{align}
$$

也能统一起来:

$$
\begin{equation}
\sin(\theta + k\pi/2) =
\begin{cases}
\sin \theta & k \equiv 0 \pmod{4}\\
\cos \theta & k \equiv 1 \pmod{4}\\
-\sin \theta & k \equiv 2 \pmod{4}\\
-\cos \theta & k \equiv 3 \pmod{4}
\end{cases}
\end{equation}
$$

$$
\begin{equation}
\cos(\theta + k\pi/2) =
\begin{cases}
\cos \theta & k \equiv 0 \pmod{4}\\
-\sin \theta & k \equiv 1 \pmod{4}\\
-\cos \theta & k \equiv 2 \pmod{4}\\
\sin \theta & k \equiv 3 \pmod{4}
\end{cases}
\end{equation}
$$

$$
\begin{equation}
\tan(\theta + k\pi/2) =
\begin{cases}
\tan \theta & k \equiv 0 \pmod{4}\\
\cot \theta & k \equiv 1 \pmod{4}\\
\tan \theta & k \equiv 2 \pmod{4}\\
\cot \theta & k \equiv 3 \pmod{4}
\end{cases}
\end{equation}
$$

---
## 角度加减法公式

角度的加减法是最一般的关系.

$$
\begin{align}
\sin(\alpha \pm \beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta\\
\cos(\alpha \pm \beta) &= \cos\alpha\cos\beta \mp \sin\alpha\sin\beta\\
\tan(\alpha \pm \beta) &= \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}
\end{align}
$$

---
## 倍角公式

就是怎么把$$2$$倍, $$4$$倍, 偶数倍这些东西变的简单一点.
⚠️对于奇数倍的角, 实际上是De Moivre公式的应用.

$$
\begin{align}
\sin(2\theta) &= 2\sin\theta\cos\theta\\
\cos(2\theta) &= \cos^2\theta - \sin^2\theta \\
&= 2\cos^2\theta - 1 = 1 - 2\sin^2\theta\\
\tan(2\theta) &= \frac{2\tan\theta}{1 - \tan^2\theta}
\end{align}
$$

也许万一能用得上:

$$
\begin{align}
\sin(3\theta) &= 3\sin\theta - 4\sin^3\theta\\
\cos(3\theta) &= 4\cos^3\theta - 3\cos\theta\\
\tan(3\theta) &= \frac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}
\end{align}
$$

---
## 半角公式

有一倍就有半倍, 也就是$$\theta/2$$

$$
\begin{align}
\sin(\theta/2) &= \pm\sqrt{\frac{1 - \cos\theta}{2}}\\
\cos(\theta/2) &= \pm\sqrt{\frac{1 + \cos\theta}{2}}\\
\tan(\theta/2) &= \frac{\sin\theta}{1 + \cos\theta} = \frac{1 - \cos\theta}{\sin\theta}
\end{align}
$$

这里为什么有$$\pm$$号呢? 因为$$\theta/2$$的范围不确定, 需要根据具体情况来定.

---
## 积化和差公式

这就是一些代数计算.

$$
\begin{align}
\sin\alpha\sin\beta &= \frac{1}{2}[\cos(\alpha - \beta) - \cos(\alpha + \beta)]\\
\cos\alpha\cos\beta &= \frac{1}{2}[\cos(\alpha - \beta) + \cos(\alpha + \beta)]\\
\sin\alpha\cos\beta &= \frac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)]\\
\cos\alpha\sin\beta &= \frac{1}{2}[\sin(\alpha + \beta) - \sin(\alpha - \beta)]
\end{align}
$$

---
## 和差化积公式

反过来算呗.

$$
\begin{align}
\sin\alpha \pm \sin\beta &= 2\sin\frac{\alpha \pm \beta}{2}\cos\frac{\alpha \mp \beta}{2}\\
\cos\alpha \pm \cos\beta &= 2\cos\frac{\alpha \pm \beta}{2}\cos\frac{\alpha \mp \beta}{2}\\
\end{align}
$$

---
## 降幂公式 - 微积分方法常用

有的时候我们会遇到换元方法, 他的起点就是:

$$
\begin{equation}
\sin^2 \theta + \cos^2 \theta = 1
\end{equation}
$$

这是最基本的, 其他的都是从这里推出来的.

$$
\begin{equation}
\tan^2 \theta + 1 = \sec^2 \theta, \quad 1 + \cot^2 \theta = \csc^2 \theta
\end{equation}
$$

配合二倍角, 半角公式, 也能得到:

$$
\begin{equation}
\sin^2 \theta = \frac{1 - \cos(2\theta)}{2}, \quad \cos^2 \theta = \frac{1 + \cos(2\theta)}{2}
\end{equation}
$$

这样就能把平方降成一次了, 这样积分简单很多.
还可以联系到$$\tan(\theta/2)$$, 这样就能把三角函数都变成有理函数了.

$$
\begin{align}
\sin \theta &= \frac{2\tan(\theta/2)}{1 + \tan^2(\theta/2)}\\
\cos \theta &= \frac{1 - \tan^2(\theta/2)}{1 + \tan^2(\theta/2)}\\
\tan \theta &= \frac{2\tan(\theta/2)}{1 - \tan^2(\theta/2)}
\end{align}
$$
