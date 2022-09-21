- symbol은 유일한 식별자를 만들 때 사용한다.
- 유일성 보장

```
const a = Symbol();

const id = Symbol("id");

const user = {
  name: "mike",
  age: 30,
  [id]: "myid",
};

console.log(user); //{ name: 'mike', age: 30, [Symbol(id)]: 'myid' }
// Object 함수, for in 문구에서는 Symbol을 건너 뜀
```

- 사용하는 곳 -> 원본 데이터 건드리지 않고 특정 위치에 특성 추가하기
- 내가 추가한 데이터가 어디서 어떻게 사용 될지 모르니 주의

---

- 전역 심볼(하나의 심볼을 여러군데 사용 할때)
  - 하나의 심볼만 보장 받을 수 있음
  - Symbol 함수는 매번 다른 Symbol 값 생성함
  - Symbol.for 함수로 같은 Symbol 공유

```js
const id1 = Symbol.for("id");
const id2 = Symbol.for("id");

id1 === id2; // true;

Symbol.keyFor(id1); // id
```

- `keyFor`메소드로 전역 심볼 설정한 심볼의 이름을 알수 있음

BUT! <br>

- 전역심볼이 아닌 경우는 `description`을 사용한다.

```js
const id = Symbol("id입니다");

id.description; // id입니다
```

---
