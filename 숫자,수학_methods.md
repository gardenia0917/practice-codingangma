# 숫자 수학 메소드

## toString()

- 10진수 -> 2/16진수

```js
let num = 10;

num.toString(); // "10"
num.toString(2); // "1010" -> 2진수 변환

let num2 = 255;

num2.toString(16); // "ff" -> 16진수 변환
```

## Math

### 올림 Math.ceil()

```js
let num1 = 5.1;
let num2 = 7.8;

Math.ceil(num1); // 6
Math.ceil(num2); // 8
```

### 내림 Math.floor()

```js
let num1 = 5.1;
let num2 = 7.8;

Math.floor(num1); // 5
Math.floor(num2); // 7
```

### 반올림 Math.round()

```js
let num1 = 5.1;
let num2 = 7.8;

Math.round(num1); // 5
Math.round(num2); // 8
```

#### 소숫점 둘째자리까지 표현해주세요!

##### 1

```js
let userNum = 28.94552;

Math.round(userNum * 100) / 100; // 28.90
// 100을 곱한뒤 반올림 후 100을 나눠준다!
```

##### 2

```js
let userNum = 28.94552;

userNum.toFixed(2);
//"28.94"
```

- `toFixed`는 문자열을 반환하므로 숫자가 필요하면 변환 필

### NaN 체크 isNaN

- `isNaN` 만이 NaN인지 아닌지 판단 가능함

```js
x == NaN; //false
x === NaN; //false
NaN == NaN; //false

isNaN(x);
```

### 문자열 -> 숫자 parseInt()

- 숫자로 시작해야 함

```js
let a = "14cm";

parseInt(a); // 14
Number(a); // NaN

let b = "fa";

parseInt(b); // NaN
```

### parseInt + 부동 소숫점 parseFloat()

- parseInt와 동일하지만 부동 소숫점 반환함

```js
let a = "19.4%";

parseInt(a); // 19
parseFloat(a); // 19.4
```

### 랜덤 숫자 생성 Math.random()

- 0~1 사이의 랜덤 숫자 생성

```js
Math.random(); //0.259310081606821

Math.random(); //0.9044982894558149

Math.random(); //0.8903427450036656

Math.random(); //0.14129985882854545

Math.random(); //0.7389426803756707
```

- 1~100 사이 랜덤 숫자를 뽑고 싶다면?

```js
Math.floor(Math.ramdom() * 100) + 1;
// 1~100이기 때문에 마지막에 1을 더해준다.
// 랜덤 숫자가 0.000~ 일수 있으므로
```

### 최대값 최소값 Math.max() Math.min()

- 괄호 안의 숫자 중 최대값과 최소값을 구한다.

```js
Math.max(1, 2, 3, 4, 5, 6); // 6
Math.min(-1, 2, 3, 4, -4); // -4
```

### 절대값 Math.abs()

```js
Math.abs(-10); // 10
```

### 거듭제곱 Math.pow(n,m)

- n의 m 승 값 구하기

```js
Math.pow(3, 2); // 3의 2승 -> 9
```

### 제곱근 Math.sqrt()

- 루트

```js
Math.sqrt(25); // 5
```
