Welcome to MkDocs
=================

What is Interpolation?
----------------------

Given the set of $n$ points:

$$P = \{(x_0, y_0), (x_1, y_1), (x_2, y_2), ..., (x_{n - 1}, y_{n - 1})\}$$

We want to find a function $f: \mathbb{R} \to \mathbb{R}$, such that $f(x) = y$ for all $(x, y) \in P$.

With such a function, we can no interpolate the **values in-between** the $x$'s.

For example, what if we were given the points $(1, 2)$, $(3, 4)$, and $(5, 6)$?

The equation $y = x + 1$ passes through all these points. We can test manually:

$$\begin{align*}
    2 &= 1 + 1 \\
    4 &= 3 + 1 \\
    6 &= 5 + 1
\end{align*}$$

What's even more powerful, though, is that we can now get the values in-between.
