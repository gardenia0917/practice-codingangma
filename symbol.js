// symbol은 유일한 식별자를 만들 때 사용한다.
// 유일성 보장

const a = Symbol();

const id = Symbol("id");

const user = {
  name: "mike",
  age: 30,
  [id]: "myid",
};

//console.log(user); { name: 'mike', age: 30, [Symbol(id)]: 'myid' }

// Object 함수, for in 문구에서는 Symbol을 건너 뜀

// 사용하는 곳 -> 원본 데이터 건드리지 않고 특정 위치에 특성 추가하기
