```
let n = "name";
let a = "age";

const user = {
  [n]: "Mike",
  [a]: 30,
  [1 + 4]: 5,
};

console.log(user);  '5': 5, name: 'Mike', age: 30 }
```

---

```
function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj("age", 35);
console.log(obj); { age: 35 } { age: 35 }
```

---

```
const user = {
  name: "Mike",
  age: 30,
};

const user2 = user;
user2.name = "Tome";

console.log(user);
console.log(user2);

{ name: 'Tome', age: 30 }
{ name: 'Tome', age: 30 }
```

---

```
const user = {
  name: "Jane",
  age: 29,
};

// 복사하기
const user2 = Object.assign({}, user);
user2.name = "susan";
console.log(user2);
console.log(user);

// 키값만 뽑아내기
const result = Object.keys(user);
console.log(result); ["name", "age"];

// 밸류만 뽑기
const val = Object.values(user);
console.log(val);  'Jane', 29 ]

// 배열로 변경

const array = Object.entries(user);
console.log(array); [ [ 'name', 'Jane' ], [ 'age', 29 ] ]

// 배열을 객체로 변경

let arr = [
  ["mon", "월"],
  ["tue", "화"],
];

const ob = Object.fromEntries(arr);
console.log(ob);  { mon: '월', tue: '화' }
```
