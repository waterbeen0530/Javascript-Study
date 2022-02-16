# This

동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다. 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야한다.

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable)다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

this는 항상 같은 값을 가리키지 않는다. this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

```js
console.log(this);
 
function square(num) {
  console.log(this);
  return num * num;
}
 
square(2);
 
const person = {
  pName: "Hello",
  getName() {
    console.log(this);
    return this.pName;
  },
};
console.log(person.getName());
 
function Person(name) {
  this.name = name;
  console.log(this);
}
const me = new Person("Hello");
```



this는 코드 어디서든 참조할 수 있다. 전역에서도 함수 내부에서도 참조할 수 있다. 하지만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 **일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다.** 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다. 일반 함수 내부에서 this를 사용할 필요가 없기 때문이다.

this에 바인딩될 값은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.함수는 다음 4가지 방법으로 호출 가능하다.

1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출



먼저 일반 함수로 호출할 경우 this의 값에 대해 알아보자.기본적으로 this에는 전역 객체가 바인딩된다.

```js
function foo() {
  console.log("foo's this: ", this);
  function bar() {
    console.log("bar's this: ", this);
  }
  bar();
}
foo();
```

전역 함수는 물론이고 중첩 함수를 **일반 함수로 호출하면** 함수 내부의 this에는 전역 객체가 바인딩된다. 

```js
const obj = {
  foo() {
    console.log("foo's this: ", this);
    function bar() {
      console.log("bar's this: ", this);
    }
    bar();
  },
};
obj.foo();
```

위 코드에서 bar의 this에는 무엇이 바인딩 되었을까?

메서드에서 foo를 호출하게 되면 foo에서의 this에는 foo를 호출한 obj가 바인딩되지만, foo안에 있는 중첩함수 bar는 일반 함수로 호출되었기 때문에 this에는 전역 객체가 바인딩된다.

이처럼 메서드 내부의 중첩함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위해 다양한 방법이 있고, 이는 뒤에서 더 자세히 알아보도록 하자.

다음은 메서드 호출시 this에 바인딩되는 값에 대해 알아보자.메서드 내부의 this는 메서드를 소유한 객체가 아닌, **메서드를 호출한 객체에 바인딩된다.**

```js
function Person(name) {
  this.name = name;
}
 
Person.prototype.getName = function () {
  return this.name;
};
 
const me = new Person("Jeoung");
console.log(me.getName());
 
Person.prototype.name = "Kim";
console.log(Person.prototype.getName());
```



다음은 생성자 함수로 호출했을 경우 this에 바인딩 되는 값에 대해 알아보자. 생성자 함수로 호출할경우 this는 생성될 인스턴스를 가리키게 된다.

마지막으로 Function.prototype.apply/call/bind의 경우를 알아보자.모든 함수는 위 메서드들을 상속받아 사용할 수 있다.

apply와 call메서드의 본질적인 기능은 함수를 호출하는 것이기 때문에 인수를 전달하는 방법만 다를 뿐 동일하게 동작한다. **둘 모두 호출한 함수의 this에 첫번째 인수로 전달한 특정 객체를 바인딩한다.**

두번째 인수부터는 apply와 call메서드가 달라진다. 함수에 전달되는 인자는 arguments 객체에 저장된다는 것을 기억하는가? 

apply는 호출할 함수의 인수를 배열로 묶어 전달하지만, call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.

```js
function foo() {
  console.log(arguments);
  return this;
}
 
const obj = { a: 1 };
 
console.log(foo.apply(obj, [1, 2, 3]));
console.log(foo.call(obj, 1, 2, 3));
```

bind는 위에서 살펴본 메서드 내부의 중첩 함수나 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 사용된다.

```js
const person = {
  pName: "Hello",
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  },
};
 
person.foo(function () {
  console.log(`hi ${this.pName}!`);
});
```

