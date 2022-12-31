/*
1. 초창기에는 웹페이지의 보조적인 기능을 수행하기 위한 한정적인 용도로 사용 -> 비동기적으로 서버와 브라우저가 데이터를 교환하는 통신 기능 Ajax 가 등장
    Ajax : 웹 페이지의 변경이 필요 없는 부분은 다시 랜더링 하지 않고 필요한 데이터만을 전송받아 변경이 필요한 부분만을 한정적으로 랜더링 하는 방식 
    -> 웹 브라우저에서도 데스크톱 애플리케이션과 유사한 빠른 퍼포먼스와 부드러운 화면 전환 가능 
2. 발자가 별도의 컴파일 작업을 수행하지 않는 인터프리터 언어(Interpreter language)/  명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어
3. 개발자도구 : F12 / CTRL+SHIFT+I : 항상 콘솔을 열어둔 상태에서 개발을 진행하는 것이 좋음/ onsole.log(…)는 소괄호 안에 있는 코드의 실행 결과를 콘솔에 출력하는 함수 
4. body 요소의 가장 아래에 자바스크립트를 위치시키는 이유
    - HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.
    - DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작한다면 에러가 발생한다.
5. 자바스크립트의 기본문법
    - 변수 : 메모리 상의 주소/  var 키워드를 사용, 할당 연산자 =는 변수에 값을 할당하기 위해 사용
    - 데이터 타입 : 프로그래밍 언어에서 사용할 수 있는 값의 종류
    - 리터럴 : 소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위

6. 7가지 데이터 타입
    - 원시타입 : number/ string/ boolean/ null/ undifined/ symbol
    - 객체타입 : ojbect
    -> c나 java 와 다르게 변수를 선언할 때 데이터 타입을 미리 지정하지 않음  = 동적 타이핑 , 다른언어와 구별되는 특징 중 하나임 

7. 연산자 : 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만드는 것/ 연산의 대상은 피연산자라고 한다 
    - 피연산자의 타입은 반드시 일치할 필요는 없다. 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행한다.
8. 키워드 : 수행할 동작을 규정한 것. ex) var 키워드는 새로운 변수를 생성할 것을 지시한다 
9. 문 : 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝나야 함/ 코드 블록(code block, {…})으로 그룹화할 수 있다/ 흐름제어/ 함수 호출로 변경할 수 있음 
10. 표현식 : 하나의 값으로 평가(Evaluation)됨/ 값(리터럴), 변수, 객체의 프로퍼티, 배열의 요소, 함수 호출, 메소드 호출, 피연산자와 연산자의 조합은 모두 표현식이다. 
    - 문과 표현식의 비교 : 자연어에서 문(Statement)이 마침표로 끝나는 하나의 완전한 문장(Sentence)이라고 한다면 표현식은 문을 구성하는 요소/ 표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없음 
      문은 var, function과 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 함
      표현식을 통해 평가한 값을 통해 실제로 컴퓨터에게 명령을 하여 무언가를 하는 것은 문! 이다! 
11. 함수 : 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록
    - 호출에 의해 실행/ 여러번 호출 가능 
12. 객체 : 키(이름)와 값으로 구성된 프로퍼티의 집합/ 자바스크립트의 함수는 일급 객체이므로 값으로 취급 가능/ 프로퍼티 값으로 함수를 사용할 수 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분 하기 위해 메소드라 부름 
    - 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합 
    - 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 "프로토타입" 이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있음 *타언어와 구별되는 중요한 개념 
13. 배열 : 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용 / 유용한 내장 메소드를 포함

14. 프로그래밍은 변수를 통해 값을 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 흐름제어로 데이터의 흐름을 제어하고 함수로 재사용이 가능한 구문의 집합을 만들며 객체, 배열 등으로 자료를 구조화하는 것
    - 변수 : 값의 위치(주소)를 기억하는 저장소/ 값의 위치란 값이 위치하고 있는 메모리 상의 주소 = 값이 위치하고 있는 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자 
15. 데이터 타입(Data Type) : 프로그래밍 언어에서 사용할 수 있는 데이터(숫자, 문자열, 불리언 등)의 종류
    15-1) 원시타입 : 변경 불가능한 값/ pass-by-value (값에 의한 전달)
        -number 숫자 타입 (3가지 특별한 값도 표현 가능 Infinity 양의 무한대/ -Infinity 음의 무한대/ NaN 산술 연산 불가 not a number)
        -string 텍스트 데이터/ 작은따옴표 사용/ 문자열은 배열처럼 인덱스를 통해 접근할 수 있다 -> 유사배열/ 한번 생성된 문자열은 READ ONLY로 변경할 수 없음 ' 변경 불가능', 새로운 문자열을 재할당 하는 것은 가능 
        -boolean: 논리적 참 거짓, ture false 
        -undefined: 값은 undefined가 유일/ 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환/ 개발자가 의도적으로 할당한 값이 아니라 자바스크립트 엔진에 의해 초기화된 값
         변수가 선언 이후 값이 할당된 적인 없는 변수라는 것을 개발자는 간파할 수 있다. / 변수 값이 없다는 것을 명시하고 싶을 때에는 null 할당
        -null : 자바스크립트는 대소문자를 구별(case-sensitive)하므로 null은 Null, NULL등과 다름/ null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용/ 자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 대해 가비지 콜렉션을 수행
         함수가 호출되었으나 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 함
         타입을 나타내는 문자열을 반환하는 typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나옴 -> 오류 -> null 타입을 확인할 때 typeof 연산자를 사용하면 안되고 일치 연산자(===)를 사용
        -symbol : 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용/ Symbol 함수를 호출해 생성
    15-2) 객체타입 : 객체는 데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재/ 이름과 값을 가지는 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할 수 있는 독립적 주체
          자바스크립트는 객체기반의 스크립트 언어로서 자바스크립트를 이루고 있는 거의 모든것이 객체이다. 원시타입을 제외한 나머지 값들은 모두 객체/ pass-by-reference(참조에의한 전달) 방식으로 전달됨 
16. 변수 : 데이터에 고유의 이름인 식별자(identifier)를 명시한 것/ 변수에 명시한 고유한 식별자를 변수명이라하고 변수로 참조할 수 있는 데이터를 변수값이라한다. 
        - 식별자에는 변수명, 함수명, 프로퍼티명, 클래스명 등이 있다.
        - 변수는 var, let, const 키워드를 사용하여 선언하고 할당 연산자를 사용해 값을 할당한다. / 식별자인 변수명을 사용해 변수에 저장된 값을 참조
        - 변수는 애플리케이션에서 한번 쓰고 버리는 값이 아닌 값이 아닌 일정 기간 유지할 필요가 있는 값에 사용함 / 변수명은 식별자(identifier)로 불리기도 하며 명명 규칙이 존재한다 
            - 반드시 영문자(특수문자 제외), underscore (_), 또는 달러 기호($)로 시작하여야 한다. 이어지는 문자에는 숫자(0-9)도 사용할 수 있다 
            - 자바스크립트는 대, 소문자를 구별하므로 사용할 수 있는 문자는 a~z 대,소문자 이다. 
        - 변수를 선언할 때는 var 키워드를 사용
    16-1) 변수의 중복 선언 : var 키워드로 선언한 변수는 중복 선언이 가능하다. 변수명이 같은 변수를 중복해 선언해도 에러가 발생하지 않는다. 
    16-2) 동적 타이핑 : 변수의 타입 지정없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정됨
    16-3) 변수 호이스팅 hoisting : var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성 = 자바스크립트는 모든 선언문(var, let, const, function, function*, class)이 선언되기 이전에 참조 가능
        - 변수의 3단계 생성단계 : 선언단계(변수 객체에 변수 등록)/ 초기화단계(변수 객체에 등록된 변수를 메모리에 할당)/ 할당단계(undefined 로 초기화된 변수에 실제값을 할당)
    16-4) var 키워드로 선언된 변수의 특징:
        - 함수 레벨 스코프 (전역 변수의 남발)
        - var 키워드 생략 허용 (의도하지 않은 변수의 전역화)
        - 중복 선언 허용(의도하지 않은 변수값 변경)
        - 변수 호이스팅 (변수를 선언하기 전에 참조가 가능) 
    -> 여러 단점을 보완하기 위해 let과 const 키워드 도입 

17. 표현식 : 리터럴, 식별자, 연산자, 함수 호출 등의 조합/ 표현식은 하나의 값으로 평가될 수 있는 문
    - 문과 표현식 : 문은 자바스크립트 엔진에게 내리는 명령/ 문은 리터럴, 연산자, 표현식, 키워드 등으로 구성되며 세미콜론( ; )으로 끝나야 한다. 
    표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없으나
    문은 var, let, const, function, class와 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 한다.
    표현식의 역할은 값을 생성하는 것/ 문의 역할은 표현식으로 생성한 값을 사용해 컴퓨터에게 명령을 내리는 것
18. 연산자 
    18-1) 산술연산자 : 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다. 산술 연산을 할 수 없는 경우에는 NaN을 반환한다
        - 이항 산술 연산자  : 2개의 피연산자를 대상으로 연산하여 숫자 타입의 값을 만든다. %나머지
        - 단항 산술 연산자: 1개의 피연산자를 대상/ ++증가 --감소 + - / 피연산자의 값을 변경하는 부수 효과가 있다.
            - 전위 증가/감소 연산자 : 피연산자 앞/ 피연산자의 값을 증가 혹은 감소시킨 후 다른 연산을 수행
            - 후위 증가/감소 연산자 : 피연산자 뒤/ 먼저 다른 연산을 수행한 후, 피연산자의 값을 증가 혹은 감소
            - + 피연산자에 어떠한 효과도 없음/ 음수를 양수로 반전하지 않음/ 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환 
            - - 피연산자의 부호를 반전한 값을 반환/ 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환 / 부호를 반전한 값을 생성해서 반환 
        - 문자열 연결 연산자  : + 
    18-2) 할당연산자 : 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다 
    18-3) 비교연산자 : 좌항과 우항의 피연산자를 비교하여 불리언 값을 반환함 / if 문이나 for 문과 같은 제어문의 조건식에서 주로 사용
        - 동등 / 일치 비교 연산자 :== (동등비교/ x와 y의 값이 같음) ===(일치비교/ x와 y의 값과 타입이 같음) !=(부등비교/ x와 y의 값이 다름)  !== (불일치비교/ x와 y의 값과 타입이 다름)
    18-4) 대소 관계 비교 연산자 : 피연산자의 크기를 비교하여 불리언 값을 반환 > < >= <=
    18-5) 삼항 조건 연산자 : 조건식의 평가 결과에 따라 반환할 값을 결정/ 
        조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값
    18-6) 논리연산자 : 우항과 좌항의 피연산자(부정 논리 연산자의 경우, 우항의 피연산자)를 논리 연산/ 논리 부정(!) 연산자는 언제나 불리언 값을 반환 
    하지만 논리합(||) 연산자와 논리곱(&&) 연산자는 일반적으로 불리언 값을 반환하지만 반드시 불리언 값을 반환해야 하는 것은 아니다.
        - ||    논리합(OR)
          &&	논리곱(AND)
          !  	부정(NOT)
    피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다. 
    18-7) 쉼표 연산자 : 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환
    18-8) 그룹연산자 :  그룹 내의 표현식을 최우선으로 평가 / 괄호로 묶는 것  10 * (2 + 3) // 50
    18-9) typeof 연산자 : 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환/ “string”, “number”, “boolean”, “undefined”, “symbol”, “object”, “function” 

19. 제어문
    19-1) 블록문

*/

//   <!DOCTYPE html>
//     <html>
//         <head>
//             <meta charset="UTF-8">
//                 <title>Counter</title>
//         </head>
//         <body>
//             <div id="counter">0</div>
//             <button id="increase">+</button>
//             <button id="decrease">-</button>
//             <script>
//       // 에러
//                 const $counter = document.getElementById('counter-x');
//                 const $increase = document.getElementById('increase');
//                 const $decrease = document.getElementById('decrease');

//                 let num = 0;
//                 const render = function () {$counter.innerHTML = num; };

//                 $increase.onclick = function () {
//                     num++;
//                 console.log('increase 버튼 클릭', num);
//                 render();
//       };

//                 $decrease.onclick = function () {
//                     num--;
//                 console.log('decrease 버튼 클릭', num);
//                 render();
//       };
//             </script>
//         </body>
//     </html>

var x; // 변수의 선언
x = 6; // 정수값의 할당

var str = 'Hello World';
// str이라는 이름의 변수를 선언하고 문자열 리터럴 ‘Hello World’를 값으로 할당

//숫자리터럴, number
var num1 = 10.50;
var num2 = 1001;

// 문자열 리터럴, string
var string1 = 'hello';
var string2 = "world";

//불리언 리터럴, boolean
var bool = true;
var bool = false;

//null 리터럴, null
var foo = null;

//undifined 리터럴/ undifined
undifined
var bar;

//객체 리터럴, object
var obj = { name: 'Lee', gender: 'male' };

//배열 리터럴, array
var array = [1, 2, 3];

//정규 표현식 리터럴
/ab+c/

//함수 리터럴, function
var foo = function () { };

//산술 연산자
var area = 5 * 4; // 20 

//문자열 연결 연산자 
var str = 'My name is ' + 'Lee'; /// "My name is Lee"

//할당 연산자 
var color = 'red'; // "red"

//비교연산자 
var foo = 3 > 5; //false

//논리 연산자 
var bar = (5 > 3) && (2 < 4); //ture

//타입 연산자 
// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
var type = typeof 'Hi'; //"string"

//인스턴스 생성 연산자 
var tody = new Date(); // 

var foo = 1 + '10'; // '110'
var bar = 1 * '10'; 10

//변수의 선언
var x = 5 + 6;

//함수의 선언
function foo(arg) {
    //함수의 종료 및 값의 반환
    return ++arg;
}

var i = 0;
//반복문
while (1) {
    if (i > 5) {
        //반복문 탈출
        break;
    }

    console.log(i);
    i++;
}

var x = 5;
var y = 6;
var z = x + y;

console.log(z);

//함수
function myFunction(x, y) {
    return x + y;
}

//if 문
if (x > 0) {
    //do something
}

//for문
for (var i = 0; i < 10; i++) {
    //do something 
}

var time = 10;
var greeitng;

if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good day';
} else {
    greeting = 'Good evening';
}
console.log(greeting);

//표현식
5                       //5
5 * 10                    // 50
5 * 10 > 10                //true
    (5 * 10 > 10) && (5 * 10 < 100) //ture

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}

//함수의 호출 
square(2); //4

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object 
console.log(person); // { name: 'Lee', gender:'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee

var arr = [1, 2, 3, 4, 5];
console.log(arr[1]); // 2

var str = 'string';
//문자열은 유사배열이다. 
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//문자열은 변경할 수 없다. 
str[0] = 'S';
console.log(str); // string 

var str = 'string';
console.log(str); // string

str= 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str= str.substring(0, 3);
console.log(str); //Str

str = str.toUpperCase();
console.log(str); // STR

var foo = 'Lee';
foo = null;  // 참조 정보가 제거됨

var foo = null;
console.log(typeof foo); // object

var foo = null;
console.log(typeof foo === null); //false
console.log(foo === null); // true

//심볼key 는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키 
var key = Symbol('key');
console.log(typeof key); //symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); //value

var score; //변수의 선언
score = 80; //값의 할당
score = 90; //값의 재할당
score;  //변수의 참조 

//변수의 선언과 할당
var average = (50+100)/2;

var x = 3;        // NG 변수의 존재 목적을 쉽게 이해할 수 있도록 의미있는 변수명을 지정
var score = 100;  // OK

var name;     // 선언
name = 'Lee'; // 할당

var age = 30; // 선언과 할당

var x;
console.log(x); // undefined 선언만 되어 있는 변수
console.log(y); // ReferenceError 선언하지 않은 변수에 접근

var x = 1;
console.log(x); // 1

// 변수의 중복 선언
var x = 100;
console.log(x); // 100

var x = 5, result;

// 선대입 후증가 
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 
result = --x;
console.log(result, x); // 5 5

// 산술 연산자
1 + 2          // 3
1 + true       // 2 (true -> 1)
1 + false      // 1 (false -> 0)
true + false    // 1 (true -> 1 / false -> 0)
1 + null       // 1 (null -> 0)
1 + undefined // NaN (undefined -> NaN)

var x;

x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee

var x = 2;

//x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다. 
//2 % 2 는 0이고 0은 false로 암묵적 타입으로 변환된다. 
var result = x % 2 ? '홀수' : '짝수';

//위아래 동일한 내용
if (x % 2) result = '홀수';
else       result = '짝수';

console.log(result); //짝수 

typeof null  // "object"
