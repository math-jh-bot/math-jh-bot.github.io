---

title: "이항관계의 그래프"
excerpt: "이항관계의 그래프와 역, 합성"

lang: ko

categories: [Note / Set Theory]
permalink: /ko/note/set_theory/binary_relation
header:
    overlay_image: /assets/images/Set_theory/Binary_relation.png
    overlay_filter: 0.5
sidebar: 
    nav: "set-ko"

date: 2021-08-14
last_modified_at: 2022-05-12
weight: 3

---
## 그래프와 relation

우리가 처음 순서쌍을 도입한 이유는 순서쌍이 relation을 살펴보는 데에 가장 유용했기 때문이다. 이제 필요한 도구를 만들었으니, 원래 목적대로 binary relation을 살펴볼 수 있다. 앞으로 별 말이 없으면 대문자 $R$은 binary relation을 뜻한다. 예를 들어, $x\mathrel{R}y$라는 표기는 $x$와 $y$가 $R$에 의해 관계되어있다는 뜻이다. $R$ 자리에는 앞서 소개했던 $=$나, $&lt;$ 등등이 들어갈 수 있다. 

우선 다음을 정의하자.

<div class="definition" markdown="1">

<ins id="df1">**정의 1**</ins> 집합 $G$가 *그래프<sub>graph</sub>*라는 것은 $G$의 모든 원소가 순서쌍이라는 것이다.

</div>

Binary relation $R$에 대해, 만일 어떤 그래프 $G$가 존재하여 $(x,y)\in G\iff x\mathrel{R}y$가 성립한다면 relation $R$이 <em_ko>그래프를 갖는다</em_ko>고 한다. 만일 $R$이 그래프를 갖는다면 그 집합은 유일하다는 것을 쉽게 보일 수 있으므로, 이를 $R$의 그래프라 부르기로 한다. 

<div class="example" markdown="1">

<ins id="ex2">**예시 2**</ins> 그러나 모든 relation들이 그래프를 갖는 것은 아니다. 예를 들어, relation $=$을 생각해보자. 즉, $x$와 $y$는 $x=y$일 때 서로 관계되어 있다. 그럼 $=$는 그래프를 갖지 않는다. 만일 그래프가 존재한다면 그건 두 개의 전체집합의 곱이어야 할텐데, 우리는 이미 전체집합이 존재하지 않음을 보았다. 

</div>

다만, 현재로써는 전체집합이 존재하지 않는다고 해서 전체집합 두 개를 곱한 집합이 존재하지 않는다는 것은 알 수 없으므로 위 예시의 논리를 완성하려면 

> $A\times B$가 존재한다면 $A$와 $B$도 각각 존재한다

가 참이어야 한다. 

<div class="proposition" markdown="1">

<ins id="pp3">**명제 3**</ins> $G$가 그래프라 하자. 그럼 유일한 두 개의 집합 $A$, $B$가 존재하여,  

- $x\in A$인 것과 <box>어떤 $y$가 존재하여 $(x,y)\in G$인 것</box>이 동치이고,
- $y\in B$인 것과 <box>어떤 $x$가 존재하여 $(x,y)\in G$인 것</box>이 동치이다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

사실 어딘지 낯이 익은 명제다. ([§순서쌍, 정의 7](/ko/note/set_theory/ordered_pair#df7))

$G$가 그래프라 하고, 집합 $\bigcup(\bigcup G)$를 생각하자. 약간의 계산을 해 보면, 만일 $(x,y)\in G$라면 $x,y\in\bigcup(\bigcup G))$임을 알 수 있다. 따라서 성질 $P$를

> $P(t)$: 어떠한 $s$가 존재하여 $(s,t)\in G$이다.

로 정의하면, 다음의 집합

$$A=\left\{x:\left(x\in\bigcup\left(\bigcup G\right)\right)\wedge P(x)\right\}$$

를 얻는다. 따라서 첫 번째 문장이 성립하며, 이와 유사하게 성질 $Q$를

> $Q(s)$: 어떠한 $t$가 존재하여 $(s,t)\in G$이다.

로 정의하면 집합 $B$를 얻는다.

</details>

이렇게 정의한 집합 $A$와 $B$를 각각 $G$의 *domain*과 *range*라 부른다. [§순서쌍, 정의 7](/ko/note/set_theory/ordered_pair#df7)에서 했듯 이들을 각각 첫 번째와 두 번째 *projection*이라 부르고, $\operatorname{pr}_1G$와 $\operatorname{pr}_2G$로 쓴다.

<div class="definition" markdown="1">

<ins id="df4">**정의 4**</ins> 집합 $A$와 $B$ 사이의 *correspondence*라는 것은 다음의 triple

$$\Gamma=(G, A, B)$$

을 의미한다. 여기서 $G$는 $\operatorname{pr}_1 G\subset A$, $\operatorname{pr}_2 G\subset B$를 만족하는 그래프이다. 이 때, $G$는 $\Gamma$의 그래프, $A$는 *source*, $B$는 *target*이라 불린다. 또,

- 만일 $x\in \operatorname{pr}_1G$라면 $\Gamma$가 $x$에서 정의되었다고 하며, $\operatorname{pr}_1G$는 $\Gamma$의 *domain<sub>정의역</sub>*이라 불린다. 
- 만일 $y\in \operatorname{pr}_2G$라면, $y$는 $\Gamma$가 갖는 값이라 하고, $\operatorname{pr}_2G$는 $\Gamma$의 *range<sub>치역</sub>*라 부른다.
 
</div>

$\Gamma=(G,A,B)$가 correspondence라 하자. 그럼 [§순서쌍, 명제 9](/ko/note/set_theory/ordered_pair#pp9)에 의하여,

$$G\subset \operatorname{pr}_1 G\times\operatorname{pr}_2G\subset A\times B$$

이므로 cartesian product $A\times B$는 $A$를 source로, $B$를 target으로 갖는 그래프 중 가장 큰 것이라 할 수 있다.

<div class="definition" markdown="1">

<ins id="df5">**정의 5**</ins> $G$가 그래프이고, $X$가 집합이라 하자. 그럼 <box>$G$에 의해 $X$의 원소와 관계되는 모든 원소들의 집합</box>을 $G$에 의한 $X$의 *image<sub>상</sub>*라 부르고 , $G(X)$로 표기한다.

</div>

임의의 $X$에 대해 $G(X)\subset\operatorname{pr}_2G$임은 정의에 의해 자명하다. 사실, $G(X)$는 

$$G(X)=\operatorname{pr}_2\{z\in G:\text{$\operatorname{pr}_1z\in X$}\}$$

이고, 따라서 $X=\emptyset$이라면 $G(\emptyset)=\emptyset$이다. 더 일반적으로 만일 $X\cap\operatorname{pr}_1G=\emptyset$이라면 $G(X)=\emptyset$이 성립한다. 

<div class="proposition" markdown="1">

<ins id="pp6">**명제 6**</ins> $G$가 그래프이고 $X$, $Y$가 집합이라 하자. 만일 $X\subset Y$라면 항상 $G(X)\subset G(Y)$가 성립한다.

</div>

<details class="proof" markdown="1">
<summary>증명</summary>

$y\in G(X)$라 하자. 그럼 어떤 $x\in X$가 존재하여 $(x,y)\in G(X)$이다. 이제 $X\subset Y$로부터 $x\in Y$이므로, $y\in G(Y)$이다.

</details>

만일 어떤 $x$에 대해 $X=\\{x\\}$라면 (이러한 $X$를 *singleton*이라 한다), 우리는 $G(X)$를 마치 $x$에서의 $G$의 함숫값처럼 생각할 수 있다. 그러나 앞서 말했듯이 이 값은 유일하지 않으며, 따라서 $G(X)$ 또한 여러 개의 원소를 가질 수 있다.

<div class="definition" markdown="1">

<ins id="df7">**정의 7**</ins> 그래프 $G$에 대하여, 집합 $G(\\{x\\})$를 $x$에서의 $G$의 *section*이라 부른다.

</div>

혼동이 없을 때에는 위에서의 직관적인 의미를 담아, 이 집합을 마치 $x$에서의 $G$의 함숫값처럼 $G(x)$로 적기도 한다.

## Relation들의 역과 합성

우리는 이제 relation의 역, 그리고 이들의 합성 등을 정의한다.

<div class="definition" markdown="1">

<ins id="df8">**정의 8**</ins> $G$가 그래프라 하자. 그럼 $(x,y)\in G$를 만족하는 모든 $(y,x)$들로 이루어진 그래프를 $G$의 *inverse<sub>역</sub>*라 부르고 이를 $G^{-1}$로 표기한다. 또, 집합 $G^{-1}(X)$를 $X$의 *inverse image<sub>역상</sub>* 혹은 *preimage*라 부른다. 만일 $G^{-1}=G$라면 $G$가 *symmetric<sub>대칭적</sub>*이라고 한다.

</div>

명시적으로 쓰자면 $G^{-1}$은 다음의 식

$$(x,y)\in G\iff (y,x)\in G^{-1}$$

이 성립하도록 하는 집합이다. $G$가 주어졌을 때, $G^{-1}$이 존재하고, 유일하다는 것 정도는 어렵지 않게 보일 수 있다. 뿐만 아니라, 다음이 성립한다.

<div class="proposition" markdown="1">

<ins id="pp9">**명제 9**</ins> $G^{-1}$의 inverse는 $G$이다. 또, $\operatorname{pr}_1G^{-1}=\operatorname{pr}_2G$이고 $\operatorname{pr}_2G^{-1}=\operatorname{pr}_1G$이다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

첫 번째는 다음의 식

$$(x,y)\in G\iff (y,x)\in G^{-1}\iff (x,y)\in (G^{-1})^{-1}$$ 

에 의해 자명하다. 한편 $x\in\operatorname{pr}_1G^{-1}$은 어떠한 $y$가 존재하여 $(x,y)\in G^{-1}$라는 것이고, 그럼 이 $y$에 대해 $(y,x)\in G$이므로 $x\in\operatorname{pr}_2G$가 성립하고, 비슷하게 반대방향도 보일 수 있다. $\operatorname{pr}_2G^{-1}=\operatorname{pr}_1G$의 경우 방금 보인 명제의 $G$ 자리에 대신 $G^{-1}$을 넣으면 된다.   

</details>

주어진 집합 $X$와 $Y$에 대하여, $X\times Y$는 $X$를 source로, $Y$를 target으로 갖는 가장 큰 그래프였다. 따라서 두 개의 식

$$\operatorname{pr}_1(X\times Y)^{-1}=\operatorname{pr}_2(X\times Y)=Y,\qquad \operatorname{pr}_2(X\times Y)^{-1}=\operatorname{pr}_1(X\times Y)=X$$

에서, $(X\times Y)^{-1}\subset Y\times X$이다. 반대로, 만일 $(y,x)\in Y\times X$라면 $x\in X$, $y\in Y$이므로 $(x,y)\in X\times Y$이고, 따라서 $(y,x)\in (X\times Y)^{-1}$이므로 $(X\times Y)^{-1}=Y\times X$가 성립한다.

이제 두 그래프의 합성을 정의해 보자.

<div class="definition" markdown="1">

<ins id="df10">**정의 10**</ins> $G$와 $G'$가 그래프라 하자. 이 두 그래프의 *합성<sub>composition</sub>* $G'\circ G$는 <box>적당한 $y$가 존재하여 $(x,y)\in G$이고 $(y,z)\in G'$</box>이도록 할 수 있는 순서쌍들 $(x,z)$의 집합이다.

</div>

이렇게 정의한 그래프의 합성이 위에서 정의한 inverse와 어떠한 관계가 있는지 궁금한 것이 당연하다.

<div class="proposition" markdown="1">

<ins id="pp11">**명제 11**</ins> $G$, $G'$가 그래프라 하자. 그럼 $G'\circ G$의 inverse는 $G'^{-1}\circ G^{-1}$이다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

$(z,x)\in (G'\circ G)^{-1}$인 것은 $(x,z)\in G'\circ G$인 것과, 그리고 이는 다시 <box>어떠한 $y$가 존재하여 $(x,y)\in G$이고 $(y,z)\in G'$인 것</box>과 동치이다. 그런데 이 $y$는 <box>$(y,x)\in G^{-1}$이고 $(z,y)\in G'^{-1}$</box>를 만족한다. 따라서 합성의 정의에 의해 $(z,x)\in G'^{-1}\circ G^{-1}$이 성립한다. 반대방향도 동일하게 보일 수 있다.

</details>

또한, 그래프의 합성은 결합법칙을 만족한다.

<div class="proposition" markdown="1">

<ins id="pp12">**명제 12**</ins> 두 그래프의 합성은 결합법칙을 만족한다. 즉, 두 그래프 $G$, $G'$에 대하여 $(G_3\circ G_2)\circ G_1=G_3\circ(G_2\circ G_1)$이 성립한다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

임의의 $(x,w)$가 $(G\_3\circ G\_2)\circ G\_1$의 원소인 것과 $G\_3\circ(G\_2\circ G\_1)$의 원소임이 동치임을 보이면 충분하다.  

우선 $(x,w)\in (G\_3\circ G\_2)\circ G\_1$은 <box>어떠한 $y$가 존재하여 $(x,y)\in G_1$이고 $(y,w)\in G_3\circ G_2$</box>와 동치이다. 그런데 뒤의 조건은 다시 <box>어떠한 $z$가 존재하여 $(y,z)\in G_2$이고 $(z,w)\in G_3$</box>과 동치이므로, 이 조건은 <box>$(x,z)\in G_2\circ G_1$이고 $(z,w)\in G_3$</box>과 동치이다. 따라서 이는 <box>$(x,w)\in G_3\circ(G_2\circ G_1)$</box>과 동치이다.

</details>

따라서 이 공통의 결과인 $(G\_3\circ G\_2)\circ G\_1=G\_3\circ(G\_2\circ G\_1)$을 괄호 없이 $G\_3\circ G\_2\circ G\_1$로 표현해도 아무런 문제가 없다. 

몇 가지 명제들을 더 살펴보자.

<div class="proposition" markdown="1">

<ins id="pp13">**명제 13**</ins> $G$, $G'$가 그래프이고 $A$가 집합이라 하자. 그럼

$$(G'\circ G)(A)=G'(G(A))$$

가 성립한다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

앞선 명제와 같이 진행한다. 어떠한 $z$에 대하여 $z\in (G'\circ G)(A)$인 것은 <box>어떠한 $x\in A$가 존재하여 $(x,z)\in G'\circ G$인 것</box>과 동치이다. 그런데 이는 다시 <box>어떠한 $y$가 존재하여 $(x,y)\in G$이고 $(y,z)\in G'$인 것</box>과 동치이다. $y\in G(A)$이므로, $z\in G'(G(A))$이다. 이 논리를 거꾸로 뒤집으면 반대방향의 증명이 된다.

</details>

<div class="proposition" markdown="1">

<ins id="pp14">**명제 14**</ins> Correspondence $\Gamma=(G,X,Y)$에 대하여 $A\subset X$, $B\subset Y$라 하자. 그럼 

1. $G^{-1}(G(A))\supset A\cap\operatorname{pr}_1G$  
2. $G(G^{-1}(B))\supset B\cap\operatorname{pr}_2G$  

가 각각 성립한다.

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

본격적으로 증명을 시작하기 전에, 위의 두 식은 <em_ko>모든</em_ko> $G$에 대해 성립해야 하므로, $G$ 자리에 $G^{-1}$을 집어넣어도 성립해야 한다. 따라서, 1만 보이면 2는 [명제 9](#pp9)에 의해 자명하다.  

이제 $x\in A\cap\operatorname{pr}\_1G$라 하자. 그럼 $x\in\operatorname{pr}\_1G$에서, 어떠한 $y$가 존재하여 $(x,y)\in G$이고, $x\in A$이므로 이 $y$는 $y\in G(A)$를 만족한다. 이제 $(y,x)\in G^{-1}$이므로, $x\in G^{-1}(G(A))$이다.

</details>

<div class="proposition" markdown="1">

<ins id="pp15">**명제 15**</ins> $G$, $G'$가 그래프라 하자. 그럼 다음의 두 식이 성립한다.

$$ \operatorname{pr}_1(G'\circ G)=G^{-1}(\operatorname{pr}_1G'),\quad \operatorname{pr}_2(G'\circ G)=G'(\operatorname{pr}_2G).$$

</div>
<details class="proof" markdown="1">
<summary>증명</summary>

다음 implication들의 chain

$$\begin{aligned}
        x\in\operatorname{pr}_1(G'\circ G)&\iff \exists z\big((x,z)\in G'\circ G\big)\\
        &\iff\exists y,z\big(((x,y)\in G)\wedge((y,z)\in G')\big)\\
        &\iff\exists y\big(((x,y)\in G)\wedge(y\in\operatorname{pr}_1G')\big)\\
        &\iff x\in G^{-1}(\operatorname{pr}_1 G').
\end{aligned}$$

에 의해 자명하다. 두 번째 식도 마찬가지로 보일 수 있다.

</details>

마지막으로, 특별한 correspondence 하나를 소개한다. 

<div class="definition" markdown="1">

<ins id="df16">**정의 16**</ins> $A$가 집합이라 하자. 그럼 집합 $\Delta_A$는 $x\in A$를 만족하는 모든 $(x,x)$들의 모임을 뜻한다. 이를 $A\times A$의 *diagonal*이라 부른다.

</div>

정의에 의해 $\operatorname{pr}_1\Delta_A=\operatorname{pr}_2\Delta_A=A$이므로, 다음과 같은 correspondence

$$\operatorname{id}_A=\left(\Delta_A,A,A\right)$$

가 존재한다. 이를 *identity correspondence*이라 부른다. 이 correspondence는 단지 집합론 뿐만 아니라, 많은 곳에서 쓰일 것이다. 

---
**참고문헌**

**[Bou]** N. Bourbaki, <i>Theory of Sets</i>. Elements of mathematics. Springer Berlin-Heidelberg, 2013.

---

