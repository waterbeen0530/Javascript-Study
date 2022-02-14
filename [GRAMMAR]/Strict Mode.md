# Strict Mode

```js
function foo() {
  x = 10;
}
foo();
 
console.log(x);
```

위 코드는 ReferenceError를 발생시킬 것 같지만 자바스크립트 엔지은 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다. 이때 전역 객체의 x 프로퍼티는 마치 전역 변수처럼 사용할 수 있다. 이러한 현상을 암묵적 전역implicit global이라 한다.

개발자 의도와는 상관없이 발생한 암묵적 전역은 당연히 오류를 발생시킬 가능성이 크다. 실수는 언제나 발생하기 때문에 근본적으로 오류를 발생시키기 어려운 개발 환경이 필요하다.

이를 지원하기 위해 ES5부터 strict mode가 추가되었다. strict mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용시켜 문제를 일으킬 수 있는 코드에 명시적인 에러를 발생시킨다.

이제 strict mode를 적용시키고, 어떤 오류가 있는지 확인해보자.

strict mode를 적용하려면 **전역의 선두 또는 함수 몸체의 선두**에 ‘use strict’;를 추가한다. 전역의 선두에 추가하면 **스크립트 전체**에 strict mode가 적용된다.

strict mode가 발생시키는 에러는 다음과 같다.

**1. 암묵적 전역**

선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

**2. 변수, 함수, 매개변수의 삭제**

delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

**3. 매개변수 이름의 중복**

중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.

**4. with문의 사용**

with 문을 사용하면 SyntaxError가 발생한다.

strict mode를 적용하면 함수를 일반함수로 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.

```js
(function () {
  "use strict";
 
  function foo() {
    console.log(this);
  }
  foo();
 
  function Foo() {
    console.log(this);
  }
  new Foo();
})();
```

strict mode에서는 매개변수에 전다로딘 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.

```js
(function (a) {
  "use strict";
  a = 2;
  console.log(arguments);
})(10);
 
(function (a) {
  a = 2;
  console.log(arguments);
})(10);
```

