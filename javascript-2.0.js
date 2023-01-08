/*
1. 자바스크립트 객체지향 프로그래밍
    각 객체는 메시지를 받을 수도 있고, 데이터를 처리할 수도 있으며, 또다른 객체에게 메시지를 전달할 수도 있다. 각 객체는 별도의 역할이나 책임을 갖는 작은 독립적인 기계 또는 부품으로 볼 수 있다.
    1-1) 클래스 기반vs 프로토타입 기반
        - 클래스 기반 언어 : 클래스란 같은 종류의 집단에 속하는 속성(attribute)과 행위(behavior)를 정의한 것으로 객체지향 프로그램의 기본적인 사용자 정의 데이터형(user define data type)이다. new 연산자를 통한 인스턴스화 과정이 필요
        - 프로토타입 기반 언어 : 자바스크립트는 멀티-패러다임 언어로 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 언어이다. 
          자바스크립트는 클래스 개념이 없고 별도의 객체 생성 방법이 존재한다.(객체 리터럴/ Object()생성자 함수/ 생성자 함수)
          자바스크립트는 이미 생성된 인스턴스의 자료구조와 기능을 동적으로 변경할 수 있다는 특징이 있다. 객체 지향의 상속, 캡슐화(정보 은닉) 등의 개념은 프로토타입 체인과 클로저 등으로 구현할 수 있다.
    1-2) 생성자 함수와 인스턴스의 생성 
         자바스크립트는 생성자 함수와 new 연산자를 통해 인스턴스를 생성할 수 있다. 생성자 함수는 클래스이자 생성자 역할을 한다 
         -> 각 인스턴스가 내용이 동일한 메소드를 각자 소유하는 문제 발생 -> 프로토타입 해결 
    1-3) 프로토타입 체인과 메소드의 정의 
         모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있다. 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인이라 한다.
         프로토타입을 이용하여 생성자 함수 내부의 메소드를 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시키면 생성자 함수에 의해 생성된 모든 인스턴스는 프로토타입 체인을 통해 프로토타입 객체의 메소드를 참조할 수 있다.
    1-4) 상속 : 클래스 기반 언어의 상속 방식을 흉내 내는 것(의사 클래스 패턴 상속) 과 프로토타입으로 상속을 구현하는 것(프로토타입 패턴 상속) 이 있다 
        - 의사 클래스 패턴 상속 (Pseudo-classical Inheritance) :  자식 생성자 함수의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체하여 상속을 구현하는 방법, 부모와 자식 모두 생성자 함수를 정의해야함 
          문제점 : new 연산자를 통해 인스턴스를 생성한다/ 생성자 링크의 파괴/ 객체 리터럴 패턴으로 생성한 객체의 상속에 적합하지 않음
        - 프로토타입 패턴 상속 :  Object.create 함수를 사용하여 객체에서 다른 객체로 직접 상속을 구현하는 방식
          Object.create 함수는 매개변수에 프로토타입으로 설정할 객체 또는 인스턴스를 전달하고 이를 상속하는 새로운 객체를 생성한다.
    1-5) 캡슐화와 모듈 패턴 : public으로 선언된 메소드 또는 데이터는 외부에서 사용이 가능하며, private으로 선언된 경우는 외부에서 참조할 수 없고 내부에서만 사용된다 -> 자바스크립트는 public, private 키워드 제공하지 않음 
        - 모듈패턴 주의사항 
          :private 멤버가 객체나 배열일 경우, 반환된 해당 멤버의 변경이 가능하다.
           모듈 패턴은 생성자 함수가 아니며 단순히 메소드를 담은 객체를 반환한다. -> 반환된 객체는 객체 리터럴 방식으로 프로토타입 접근 불가 -> 함수를 반환해야함 

2. 빌트인 객체 
  2-1) 네이티브 객체 : ECMAScript 명세에 정의된 객체를 말하며 애플리케이션 전역의 공통 기능을 제공한다. 애플리케이션의 환경과 관계없이 언제나 사용할 수 있다. Global Objects 라고 부르기도 하지만 전역객체와는 다른 의미로 사용되니 혼동에 주의해야한다. 
  - 전역객체 : 모든 객체의 최상위 객체를 의미하며 일반적으로 browser-side 에서는 window, server-side에서는 global객체를 의미함 
    - object : Object()생성자 함수는 객체를 생성한다. 생성자 인수값이 null 이거나 undefined 이면 빈객체를 반환한다. 그 외의 경우 생성자 함수의 인수값에 따라 강제 형변환된 객체가 반환된다. 
    - function : 자바스크립트의 모든 함수는 Fucntion 객체이다. 다른 모든 객체들처럼 NEW 연산자를 사용해 생성할 수 있다. 
    - Boolean : 원시타입 boolean을 위한 래퍼 객체. Boolean 생성자 함수로 생성 가능. boolean 객체와 원시타입 boolean을 혼동하기 쉽다. Boolean 객체는 ture/false를 포함하고 있는 객체이다. 
    - Number, Math, Date, String, RegExp, Array ....
    - Error : Error 생성자는 error 객체를 생성한다. error 객체의 인스턴스는 런타임 에러가 발생했을 때 throw 된다 
    - Symbol : ECMAScript 6 에서 추가된 유일하고 변경 불가능한(immutable) 원시 타입으로 Symbol 객체는 원시 타입 Symbol 값을 생성한다.
    - 원시타입과 래퍼객체 (Wrapper Object) : 네이티브 객체는 각자의 프로퍼티와 메소드를 가진다. 정적 프로퍼티, 메소드는 해당 인스턴스를 생성하지 않아도 사용할 수 있고 prototype 에 속해있는 메소드는 해당 prototype 을 상속받은 인스턴스가 있어야만 사용할 수 있다. 
    하지만 원시타입값에 대해 표준 빌트인 객체의 메소드를 호출하면 정상적으로 작동한다 -> 원시 타입 값에 대해 표준 빌트인 객체의 메소드를 호출할 때 원시 타입 값은 연관된 객체(Wrapper 객체)로 일시 변환되기 때문에 가능! 
    (Wrapper 객체에는 String, Number, Boolean 이 있다. )
  2-2) 호스트 객체 : 브라우저 환경에서 제공하는 window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체를 말한다. 브라우저에서 동작하는 환경과 브라우저 외부에서 동작하는 환경의 자바스크립트(Node.js)는 다른 호스트 객체를 사용할 수 있다.
  브라우저에서 동작하는 환경의 호스트 객체는 전역 객체인 window, BOM(Browser Object Model)과 DOM(Document Object Model) 및 XMLHttpRequest 객체 등을 제공한다.
  - BOM(Browser Object Model) : 브라우저 탭 또는 브라우저 창의 모델을 생성한다. 최상위 객체는 window 객체이다. 이 객체의 자식 객체들은 브라우저의 다른 기능들을 표현한다. Standard Built-in Objects 가 구성된 후에 구성된다. 
    - 자식객체 : document(현재 로드된 웹페이지), history(브라우저 히스트리에 기록된 웹페이지들), location(현재 페이지 URL), navigator(브라우저 관련 정보), screen(장치의 디스플레이 정보)
  - DOM(Document Object Model) : 문서 객체 모델은 현재 웹페이지의 모델을 생성한다. 이 객체의 자식 객체들은 문서의 다른 요소들을 표현한다. 이 객체들은 Standard Built-in Objects가 구성된 후에 구성된다.
    - 자식객체 : html, head, title, body, div, attribute, p, text 
  
3. 전역 객체 
  - 전역객체는 실행 컨텍스트에 컨트롤이 들어가기 이전에 생성되며 constructor 가 없기 때문에 new 연산자를 이용해 새롭게 생성할 수 없다. 개발자가 전역 객체를 생성하는 것은 불가능. 
  - 전역 객체는 전역 스코프를 갖게 된다. 
  - 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있다. documnet 객체는 전역 객체 window 자식 객체로서 window.document와 같이 기술할 수 있으나 일반적으로 전역 객체의 기술은 생략한다 
  -> 사용자가 정의한 변수와 전역 객체의 자식 객체 이름이 충돌하는 경우 명확히 전역 객체를 기술하여 혼동을 방지할 수 있다. 
  - 전역 객체는 전역변수를 프로퍼티로 가지게 된다. 전역 변수는 전역 객체의 프로퍼티이다.  글로벌 영역에 선언한 함수도 전역 객체의 프로퍼티로 접근할 수 있다. 전역 함수는 전역 객체의 메소드이다. 
  - Standard Built-in Objects(표준 빌트인 객체)도 역시 전역 객체의 자식 객체이다. 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있으므로 표준 빌트인 객체도 전역 객체의 기술을 생략할 수 있다.
  3-1) 전역 프로퍼티 : 전역 객체의 프로퍼티 / 애플리케이션 전역에서 사용하는 값들을 나타내기 위해 사용/ 간단한 값이 대부분이며 다른 프로퍼티나 메소드를 가지고 있지 않다. 
    - Infinity : Infinity 프로퍼티는 양, 음의 무한대를 나타내는 숫자값 Infinity를 갖는다. 
    - NaN : NaN 프로퍼티는 숫자가 아님(Not-a-Number)을 나타내는 숫자값 NaN을 갖는다. Number.NaN 프로퍼티와 같다. 
    - undefined : 원시 타입 undefined를 값으로 갖는다.
  3-2) 전역함수 : 애플리케이션 전역에서 호출할 수 있는 함수, 전역 객체의 메소드이다. 
    - eval() : 매개변수에 전달될 문자열 구문 또는 표현식을 평가 , 실행한다. 사용자로부터 입력받은 콘텐츠를 eval()로 실행하는 것은 보안에 매우 취약. 가급적으로 사용 금지됨. 
    - isFinite() : 매개변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 Boolean 으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우 숫자로 변환한 후 검사를 수행한다. 
    - isNaN() : 매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 Boolean으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 변환한 후 검사를 수행한다.
    - parseFloat() : 매개변수에 전달된 문자열을 부동소수점 숫자(floating point number)로 변환하여 반환한다.
    - parseInt() : 매개변수에 전달된 문자열을 정수형 숫자(Integer)로 해석(parsing)하여 반환한다. 반환값은 언제나 10진수이다. 첫번째 매개변수에 전달된 값이 문자열이 아니면 문자열로 변환한 후 숫자로 해석하여 반환한다. 2번째 매개변수에는 진법을 나타내는 기수를 지정할 수 있다. 기수를 생략하면 첫번째 매개변수에 전달된 문자열을 10진수로 해석하여 반환한다. 
    두번째 매개변수에 진법을 나타내는 기수를 지정하면 첫번재 매개변수에 전달된 문자열을 해당 기수의 숫자로 해석하여 반환한다. 이때 반환값은 언제나 10진수이다. 
    기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메소드를 사용한다.
    parseInt는 첫번째 매개변수에 전달된 문자열의 첫번째 문자가 해당 지수의 숫자로 변환될 수 없다면 NaN을 반환한다.
    - encodeURI()/ decodeURI() : encodeURI()은 매개변수로 전달된 URI를 인코딩한다. 여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.
      - 이스케이프 처리 : 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 ASCII Character-set로 변환하는 것
        이유 : URL은 ASCII Character-set으로만 구성되어야 하며 한글을 포함한 대부분의 외국어나 ASCII에 정의되지 않은 특수문자의 경우 URL에 포함될 수 없기 때문이다. 
        단, 알파벳, 0~9의 숫자, - _ . ! ~ * ‘ ( ) 의 문자는 이스케이프 처리에서 제외된다. 
      decodeURI()은 매개변수로 전달된 URI을 디코딩한다.
    - encodeURIComponent() / decodeURIComponent() : encodeURIComponent()은 매개변수로 전달된 URI component(구성 요소)를 인코딩한다. decodeURIComponent()은 매개변수로 전달된 URI component(구성 요소)를 디코딩한다.
      encodeURIComponent()는 인수를 쿼리스트링의 일부라고 간주한다. 따라서 =, ?, &를 인코딩한다. 반면 encodeURI()는 인수를 URI 전체라고 간주하며 파라미터 구분자인 =, ?, &를 인코딩하지 않는다.

4. Number 래퍼 객체 : Number객체는 원시타입 nubmer 를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 래퍼 객체이다. 변수 또는 객체의 프로퍼티가 숫자를 값으로 가지고 있다면 Number 객체의 별도 생성없이 Number객체의 프로퍼티와 메소드를 사용할 수 있다. 
원시타입으로 프로퍼티나 메소드를 호출 할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 떄문이다. 
  4-1) Number Constructor : Number() 생성자 함수를 통해 생성할 수 있다. 인자가 숫자로 변환될 수 없다면 NaN을 반환한다. Number() 생성자 함수를 new 연산자를 붙이지 않아 생성자로 사용하지 않으면 Number 객체를 반환하지 않고 원시 타입 숫자를 반환한다. 이때 형 변환이 발생할 수 있다.
  4-2) Nubmer Property : 정적 프로퍼티로 Number 객체를 생성할 필요 없이 Number.propertyName의 형태로 사용한다.
    - Number.EPSILON : 자바스크립트에서 표현할 수 있는 가장 작은 수. 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성해야한다. 
    - Number.MAX_VALUE : 자바스크립트에서 사용 가능한 가장 큰 숫자를 반환한다. MAX_VALUE보다 큰 숫자는 Infinity이다.
    - Number.MIN_VALUE : 가장 작은 숫자를 반환한다. 0에 가까운 양수 값. MIN_VALUE보다 작은 숫자는 0으로 변환된다.
    - Number.POSITIVE_INFINITY : 양의 무한대 Infinity 를 반환한다. 
    - Number.NEGATIVE_INFINITY : 음의 무한대 -Infinity 를 반환
    - Number.NaN  : 숫자가 아님을 나타내는 숫자 값. Number.NaN 프로퍼티는 window.NaN 프로퍼티와 같다.
  4-3) Number Method
    - Number.isFinite(testValue: number): boolean 매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.
    Number.isFinite()는 전역 함수 isFinite()와 차이가 있다. 전역 함수 isFinite()는 인수를 숫자로 변환하여 검사를 수행하지만 Number.isFinite()는 인수를 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.
    - Number.isInteger(testValue: number): boolean 매개변수에 전달된 값이 정수(Integer)인지 검사하여 그 결과를 Boolean으로 반환한다. 검사전에 인수를 숫자로 변환하지 않는다.
    - Number.isNaN(testValue: number): boolean 매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다. Number.isNaN()는 전역 함수 isNaN()와 차이가 있다. 전역 함수 isNaN()는 인수를 숫자로 변환하여 검사를 수행하지만 Number.isNaN()는 인수를 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.
    - Number.isSafeInteger(testValue: number): boolean 매개변수에 전달된 값이 안전한(safe) 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 안전한 정수값은 -(253 - 1)와 253 - 1 사이의 정수값이다. 검사전에 인수를 숫자로 변환하지 않는다.
    - Number.prototype.toExponential(fractionDigits?: number): string 대상을 지수 표기법으로 변환하여 문자열로 반환한다. 지수 표기법이란 매우 큰 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다.
    - Number.prototype.toFixed(fractionDigits?: number): string 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.
    - Number.prototype.toPrecision(precision?: number) : string 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다. 
    - Number.prototype.toString(radix?: number) : string 숫자를 문자열로 변환하여 반환한다.
    - Number.prototype.valueOf() : Number 객체의 원시 타입 값을 반환한다.
  
5. 수학 상수와 함수를 위한 Math 객체 : Math 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다. Math객체는 생성자 함수가 아니다. 정적 프로퍼티와 메소드만 제공한다. 
  5-1) Math Property
    - Math.PI : PI 값(3.141592653589793)을 반환한다.
  5-2) Math Method
    - Math.abs(x: number): number 인수의 절댓값(absolute value)을 반환한다. 절댓값은 반드시 0 또는 양수이어야 한다.
    - Math.round(x: number): number 인수의 소수점 이하를 반올림한 정수를 반환한다.
    - Math.ceil(x: number): number 인수의 소수점 이하를 올림한 정수를 반환한다. 
    - Math.floor(x: number): number 인수의 소수점 이하를 내림한 정수를 반환한다. Math.ceil의 반대개념이다. (양수인 경우 소수점 이하를 떼어 버린 다음 정수를 반환, 음수인 경우 소수점 이하를 떼어 버린 다음 -1 을 한 정수를 반환한다. )
    - Math.sqrt(x: number): number 인수의 제곱근을 반환한다. 
    - Math.random(): number 임의의 부동 소수점을 반환한다. 0부터 1미만 (0포함, 1포함x)
    - Math.pow(x: number, y: number): number 첫번재 인수를 밑, 두번째 인수를 지수로 하여 거듭제곱을 반환한다. 
    - Math.max(…values: number[]): number 인수 중에서 가장 큰 수를 반환
    - Math.min(…values: number[]): number 인 수 중에서 가장 작은 수를 반환 

6. 날짜와 시간을 위한 Date 객체 : 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초(천분의 1초(millisecond, ms)))을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다.
  Date 생성자 함수르 생성한 Date 객체는 내부적으로 숫자값을 갖는다. 현재의 날짜와 시간은 자바스크립트 코드가 동작한 시스템의 시계에 의해 결정된다. 시스템 시계의 설정(timezone, 시간)에 따라 서로 다른 값을 가질 수 있다.
  6-1) Date Constructor : Date 객체는 생성자 함수이다. Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다. 생성된 인스턴스는 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다. 현재 날짜와 시간이 아닌 다른 날짜와 시간을 다루고 싶은 경우, Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정한다. 
    - new Date() 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 반환한다.
    - new Date(milliseconds) : 인수로 숫자 타입의 밀리초를 전달하면 1970년 1월 1일 00:00(UTC)을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 인스턴스를 반환한다.
    - new Date(dateString) : 인수로 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 인수로 전달한 문자열은 Date.parse 메소드에 의해 해석 가능한 형식이어야 한다.
    - new Date(year, month[, day, hour, minute, second, millisecond]) : 인수로 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 년, 월은 반드시 지정하여야 한다. 지정하지 않은 옵션 정보는 0 또는 1으로 초기화된다. 년, 월을 지정하지 않은 경우 1970년 1월 1일 00:00(UTC)을 가지는 인스턴스를 반환한다.
      month	월을 나타내는 0 ~ 11까지의 정수 (주의: 0부터 시작, 0 = 1월)
    - Date 생성자 함수를 new 연산자없이 호출하면 인스턴스를 반환하지 않고 결과값을 문자열로 반환한다.
  6-2) Date 메소드
    - Date.now : 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.
    - Date.parse : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
    - Date.UTC : 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다. Date.UTC 메소드는 new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용해야 한다. Date.UTC 메소드의 인수는 local time(KST)가 아닌 UTC로 인식된다. month는 월을 의미하는 0~11까지의 정수이다. 0부터 시작하므로 주의가 필요하다.
    - Date.prototype.getFullYear : 년도를 나타내는 4자리 숫자를 반환한다./ Date.prototype.setFullYear : 년도를 나타내는 4자리 숫자를 설정한다. 년도 이외 월, 일도 설정할 수 있다. 
    - Date.prototype.getMonth : 월을 나타내는 0~11의 정수를 반환한다. 1월은 0, 12월은 11임/ Date.prototype.setMonth : 월을 나타내는 0 ~ 11의 정수를 설정한다.
    - Date.prototype.getDate : 날짜(1 ~ 31)를 나타내는 정수를 반환한다./ Date.prototype.setDate : 날짜(1 ~ 31)를 나타내는 정수를 설정한다.
    - Date.prototype.getDay : 요일(0 ~ 6)를 나타내는 정수를 반환한다. 일요일 0, 토요일 6
    - Date.prototype.getHours : 시간(0 ~ 23)를 나타내는 정수를 반환한다./  Date.prototype.setHours : 시간(0 ~ 23)를 나타내는 정수를 설정한다. 시간 이외 분, 초, 밀리초도 설정할 수 있다.
    - Date.prototype.getMinutes : 분(0 ~ 59)를 나타내는 정수를 반환한다./ Date.prototype.setMinutes : 분(0 ~ 59)를 나타내는 정수를 설정한다. 분 이외 초, 밀리초도 설정할 수 있다.
    - Date.prototype.getSeconds : 초(0 ~ 59)를 나타내는 정수를 반환한다./ Date.prototype.setSeconds : 초(0 ~ 59)를 나타내는 정수를 설정한다. 초 이외 밀리초도 설정할 수 있다.
    - Date.prototype.getMilliseconds : 밀리초(0 ~ 999)를 나타내는 정수를 반환한다./ Date.prototype.setMilliseconds : 밀리초(0 ~ 999)를 나타내는 정수를 설정한다.
    - Date.prototype.getTime : 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다./ Date.prototype.setTime : 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 설정한다.
    - Date.prototype.getTimezoneOffset : UTC와 지정 로케일(Locale) 시간과의 차이를 분단위로 반환한다. UTC = KST - 9h이다.
    - Date.prototype.toDateString : 사람이 읽을 수 있는 형식의 문자열로 날짜를 반환한다.
    - Date.prototype.toTimeString : 사람이 읽을 수 있는 형식의 문자열로 시간을 반환한다.

7. 정규표현식 : 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용한다. 반복문과 조건문을 사용한 복잡한 코드도 정규표현식을 이용하면 간단히 표현 가능. 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다. 
정규표현식은 리터럴 표기법으로 생성할 수 있다. 
  /regexr/i 
  - / 시작 기호, /종료기호
  - regexr 패턴
  - i 플래그 
정규 표현식을 사용하는 자바스크립트 메소드는 RegExp.prototype.exec, RegExp.prototype.test, String.prototype.match, String.prototype.replace, String.prototype.search, String.prototype.split 등이 있다.
  7-1) 플래그 : 플래그를 사용하지 않은 경우 문자열 내 검색 매칭 대상이 1개 이상이더라도 첫번째 매칭한 대상만을 검색하고 종료한다. 
    - i : ignore case : 대소문자를 구별하지 않고 검색한다. 
    - g : global : 문자열 내 모든 패턴을 검색한다 
    - m : multi line : 문자열의 행이 바뀌더라도 검색을 계속한다. 
  7-2) 패턴 : 검색하고 싶은 문자열을 지정한다. 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지도 검색한다. 메타문자 또는 기호로 표현할 수 있다. 
    - . : 임의의 문자 한개를 의미/ 문자의 내용은 무엇이든 상관 없음 ... 3개를 연속하여 패턴을 생성하였으므로 3자리 문자를 추출한다. 
    - + : 앞선 패턴을 최소 한번 반복하려면 앞선 패턴 뒤에 +를 붙인다. A+ 는 A AA AAA ... 를 의미 
    - | : or의 의미를 가지게 된다. 
    - [] : []내의 문자는 or로 동작한다. 그 뒤에 +를 사용하여 앞선 패턴을 한번 이상 반복하게 한다.
    - - : 범위를 지정하려면 []내에 -를 사용한다.
    - \d :  \d는 숫자를 의미한다. \D는 \d와 반대로 동작한다.
    - \w : \w 는 알파벳과 숫자를 의미한다. \W는 \w 와 반대로 동작한다. 
JavaScript Regular Expression 
  7-3) RegExp Constructor : 자바스크립트은 정규표현식을 위해 RegExp 객체를 지원한다. RegExp 객체를 생성하기 위해서는 리터럴 방식과 RegExp 생성자 함수를 사용할 수 있다. 일반적인 방법은 리터럴 방식이다.
  new RegExp(pattern[, flags])
  7-4) RegExp Method
    - RegExp.prototype.exec(target: string): RegExpExecArray | null 
      문자열을 검색하여 매칭 결과를 반환한다. 반환값은 배열 또는 null이다. exec 메소드는 g 플래그를 지정하여도 첫번째 메칭 결과만을 반환한다.
    - RegExp.prototype.test(target: string): boolean 
      문자열을 검색하여 매칭 결과를 반환한다. 반환값은 true 또는 false이다.

8. String 레퍼 객체 : String 객체는 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼(wrapper) 객체이다. 변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면 String 객체의 별도 생성없이 String 객체의 프로퍼티와 메소드를 사용할 수 있다.
  8-1) String Constructor : String 객체는 String 생성자 함수를 통해 생성할 수 있다. 이때 전달된 인자는 모두 문자열로 변환된다.
  new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 객체가 아닌 문자열 리터럴을 반환한다. 이때 형 변환이 발생할 수 있다. 일반적으로 문자열을 사용할 때는 원시 타입 문자열을 사용한다.
  8-2) String Property 
    - String.length : 문자열 내의 문자 갯수를 반환한다. String 객체는 length 프로퍼티를 소유하고 있으므로 유사 배열 객체이다. 
  8-3) String Method : String 객체의 모든 메소드는 언제나 새로운 문자열을 반환한다. 문자열은 변경불가능한 원시 값이기 때문 
    - String.prototype.charAt(pos:number):string 
    인수로 전달한 index를 사용하여 index에 해당하는 위치의 문자를 반환한다. index는 0 ~ (문자열 길이 - 1) 사이의 정수이다. 지정한 index가 문자열의 범위(0 ~ (문자열 길이 - 1))를 벗어난 경우 빈문자열을 반환한다.
    - String.prototype.concat(...strings:string[]):string
    인수로 전달한 1개 이상의 문자열과 연결하여 새로운 문자열을 반환한다. concat 메소드를 사용하는 것보다는 +, += 할당 연산자를 사용하는 것이 성능상 유리하다.
    - String.prototype.indexOf(searchString: string, fromIndex=0): number 
    인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환한다. 발견하지 못한 경우 -1을 반환한다.
    - String.prototype.lastIndexOf(searchString: string, fromIndex=this.length-1): number
    인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 마지막으로 발견된 곳의 index를 반환한다. 발견하지 못한 경우 -1을 반환한다. 2번째 인수(fromIndex)가 전달되면 검색 시작 위치를 fromIndex으로 이동하여 역방향으로 검색을 시작한다. 이때 검색 범위는 0 ~ fromIndex이며 반환값은 indexOf 메소드와 동일하게 발견된 곳의 index이다.
    - String.prototype.replace(searchValue: string | RegExp, replaceValue: string | replacer: (substring: string, …args: any[]) => string): string): string
    첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다. 원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열을 반환한다. 검색된 문자열이 여럿 존재할 경우 첫번째로 검색된 문자열만 대체된다.
    - String.prototype.split(separator: string | RegExp, limit?: number): string[] 
    첫번째 인수로 전달한 문자열 또는 정규 표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 
    - String.prototype.substring(start: number, end=this.length): string
    첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 두번째 인자에 전달된 end 인덱스에 해당하는 문자의 바로 이전 문자까지를 모두 반환한다. 첫번째 인수 < 두번째 인수의 관계가 성립된다. 
    - String.prototype.slice(start?: number, end?: number): string
    String.prototype.substring과 동일하다. 단, String.prototype.slice는 음수의 인수를 전달할 수 있다.
    - String.prototype.toLowerCase(): string 대상 문자열의 모든 문자를 소문자로 변경한다.
    - String.prototype.toUpperCase(): string 대상 문자열의 모든 문자를 대문자로 변경한다.
    - String.prototype.trim(): string 대상 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.
    - String.prototype.repeat(count: number): string 인수로 전달한 숫자만큼 반복해 연결한 새로운 문자열을 반환한다. count가 0이면 빈 문자열을 반환하고 음수이면 RangeError를 발생시킨다.
    - String​.prototype​.includes(searchString: string, position?: number): boolean 인수로 전달한 문자열이 포함되어 있는지를 검사하고 결과를 불리언 값으로 반환한다. 두번째 인수는 옵션으로 검색할 위치를 나타내는 정수이다.
  
9. 배열 : 배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 객체, 유용한 내장 메소드를 포함하고 있다. Array 생성자로 생성된 Array 타입의 객체이며 프로토타입 객체는 Array.prototype 이다. 
  9-1) 배열의 생성
    - 배열 리터럴 : 0개 이상의 값을 쉼표로 구분하여 대괄호 [] 로 묶는다. 첫번째 값은 인덱스 '0'으로 읽는다. 존재하지 않는 요소에 접근하면 undifined 를 반환한다. 
    배열 리터럴은 객체 리터럴과 달리 프로퍼티명이 없고 각 요소의 값만 존재한다. 객체는 프로퍼티 값에 접근하기 위해 대괄호 표기법 또는 마침표 표기법을 사용해 프로퍼티명을 키로 사용한다. 배열은 요소에 접근하기 위해 대괄호 표기법만을 사용, 대괄호 내에 접근하고자 하는 요소의 인덱스를 넣어준다. 인덱스는 0부터 시작한다. 
    배열 리터럴 arr 의 프로토타입 객체는 Array.prototype 이지만 객체 리터럴 obj 의 프로토타입 객체는 Object.prototype 이다. 
    대부분의 프로그래밍 언어에서 배열의 요소들은 모두 같은 데이터 타입이어야 하지만, 자바스크립트 배열은 어떤 데이터 타입의 조합이라도 포함할 수 있다.
    - Array() 생성자 함수 : 배열은 일반적으로 배열 리터럴 방식으로 생성하지만 배열 리터럴 방식도 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화 시킨 것이다. Array() 생성자 함수는 Array.prototype.constructor 프로퍼티로 접근할 수 있다. Array() 생성자 함수는 매개변수의 갯수에 따라 다르게 동작한다.
  9-2) 배열 요소의 추가와 삭제
    - 배열 요소의 추가 : 객체가 동적으로 프로퍼티를 추가할 수 있는 것처럼 배열도 동적으로 요소를 추가할 수 있다. 인덱스를 사용하여 필요한 위치에 값을 할당한다. 배열의 길이는 마지막 인덱스를 기준으로 산정된다. 
    값이 할당되지 않은 인덱스 위치의 요소는 생성되지 않는다는 것에 주의하자. 단, 존재하지 않는 요소를 참조하면 undefined가 반환된다.
    - 배열 요소의 삭제 : 배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다. 이때 length에는 변함이 없다. 해당 요소를 완전히 삭제하여 length에도 반영되게 하기 위해서는 Array.prototype.splice 메소드를 사용한다.
  9-3) 배열의 순회 : 배열의 순회에는 forEach 메소드, for 문, for…of 문을 사용하는 것이 좋다.
  9-4) Array Property
    - Array.length : length 프로퍼티는 요소의 개수(배열의 길이)를 나타낸다. 배열 인덱스는 32bit 양의 정수로 처리된다. 주의할 것은 배열 요소의 개수와 length 프로퍼티의 값이 반드시 일치하지는 않는다는 것. (희소배열)
    현재 length 프로퍼티 값보다 더 큰 인덱스로 요소를 추가하면 새로운 요소를 추가할 수 있도록 자동으로 length 프로퍼티의 값이 늘어난다. length 프로퍼티의 값은 가장 큰 인덱스에 1을 더한 것과 같다.
  9-5) Array Method
    - Array.isArray(arg: any): boolean 정적 메소드 Array.isArray는 주어진 인수가 배열이면 true, 배열이 아니면 false를 반환한다.
    - Array.from 유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 변환하여 새로운 배열을 생성한다.
    - Array.of 전달된 인수를 요소로 갖는 배열을 생성한다. Array.of는 Array 생성자 함수와 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
    - Array.prototype.indexOf(searchElement: T, fromIndex?: number): number 
    원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다. 중복되는 요소가 있는 경우, 첫번째 인덱스를 반환한다. 해당하는 요소가 없는 경우 -1을 반환한다. 배열에 요소가 존재하는지 여부를 확인할 때 유용하다. 
    - Array.prototype.concat(…items: Array<T[] | T>): T[] 
    인수로 전달된 값들(배열 또는 값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다. 원본 배열은 변경되지 않는다.
    - Array.prototype.join(separator?: string): string 
    원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값, 즉 구분자로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 , 이다. 
    - Array.prototype.push(…items: T[]): number
    인수로 전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된 length 값을 반환한다. push 메소드는 원본 배열을 직접 변경한다. 
    push 메소드는 원본 배열을 직접 변경하지만 concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다. 인수로 전달받은 값이 배열인 경우, push 메소드는 배열을 그대로 원본 배열의 마지막 요소로 추가하지만 concat 메소드는 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다. 
    - Array.prototype.pop(): T | undefined  원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. pop 메소드는 원본 배열을 직접 변경한다.
    pop 메소드와 push 메소드를 사용하면 스택을 쉽게 구현할 수 있다.
    스택(stack)은 데이터를 마지막에 밀어 넣고, 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출(LIFO - Last In First Out) 방식의 자료 구조이다. 스택은 언제나 가장 마지막에 밀어 넣은 최신 데이터를 취득한다. 스택에 데이터를 밀어 넣는 것을 푸시(push)라 하고 스택에서 데이터를 꺼내는 것을 팝(pop)이라고 한다.
    - Array.prototype.reverse(): this 배열 요소의 순서를 반대로 변경한다. 원본 배열이 변경된다. 반환값은 변경된 배열이다. 
    - Array.prototype.shift(): T | undefined  배열에서 첫요소를 제거하고 제거한 요소를 반환한다. 만약 빈 배열일 경우 undefined를 반환한다. shift 메소드는 대상 배열 자체를 변경한다. shift는 push와 함께 배열을 큐(FIFO: First In First Out)처럼 동작하게 한다.
    - Array.prototype.slice(start=0, end=this.length): T[] 
    인자로 지정된 배열의 부분을 복사하여 반환한다. 원본 배열은 변경되지 않는다. 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사된다.
      - start : 복사를 시작할 인덱스. 음수인 경우 배열의 끝에서의 인덱스를 나타낸다. slice(-2) 는 배열의 마지막 2개의 요소를 반환한다. 
      - end : 옵션이며 기본값은 length 이다. 
    slice 메소드에 인자를 전달하지 않으면 원본 배열의 복사본을 생성하여 반환한다. 원본 배열의 각 요소를 얕은 복사함. 유사배열 객체를 배열로 변환할 수 있다. 
    - Array.prototype.splice(start: number, deleteCount=this.length-start, …items: T[]): T[]  기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용된다. 반환값 삭제한 요소들을 가진 배열이다. 
      - start : 배열에서의 시작 위치이다. start 만을 지정하면 배열의 start부터 모든 요소를 제거한다.
      - deleteCount : 시작 위치부터 제거할 요소의 수이다. deleteCount 가 0인경우 아무런 요소도 제거되지 않는다. 
      - items : 삭제한 위치에 추가될 요소들이다. 아무런 요소도 지정하지 않을 경우 삭제만 한다. 
    slice는 배열의 일부분을 복사해서 반환하며 원본을 훼손하지 않는다. splice는 배열에서 요소를 제거하고 제거한 위치에 다른 요소를 추가하며 원본을 훼손한다.

10. 자바스크립트 배열은 배열이 아니다. 
일반적으로 배열이라는 자료 구조의 개념은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료 구조를 말한다. 즉, 배열의 요소는 하나의 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열을 밀집 배열(dense array)이라 한다.
인덱스를 통해 단 한번의 연산으로 임의의 요소에 접근(임의 접근(random access), 시간 복잡도 O(1))할 수 있다. 이는 매우 효율적이며 고속으로 동작한다.-> 인덱스를 통해 효율적으로 요소에 접근할 수 있다는 장점이 있다. 
하지만 정렬되지 않은 배열에서 특정한 값을 탐색하는 경우, 모든 배열 요소를 처음부터 값을 발견할 때까지 차례대로 탐색(선형 탐색(linear search), 시간 복잡도 O(n))해야 한다. 또한 배열에 요소를 삽입하거나 삭제하는 경우, 배열 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점도 있다.
  - 자바스크립트의 배열은 희소배열 이다. : 배열의 요소가 연속적으로 이어져 있지 않는 배열 
  자바스크립트 배열은 인덱스를 프로퍼티 키로 갖으며 length 프로퍼티를 갖는 특수한 객체이다. 자바스크립트 배열의 요소는 사실 프로퍼티 값이다. 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다.

11. 배열 고차 함수 : 고차 함수(Higher order function)는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 다시 말해, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.
고차함수는 외부상태변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다. 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다. 
함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제하여 프로그램의 안전성을 높이려는 노력의 한 방법이다. Array 객체는 매우 유용한 고차 함수를 제공한다. 
  11-1) Array.prototype.sort(compareFn?: (a: T, b: T) => number): this 배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다. 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후, 정렬한다.
  11-2) Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void
    - for문 대신 사용할 수 있다. 
    - 배열을 순회하며 배열의 각 요소에 대해  인자로 주어진 콜백함수를 실행한다. 반환값은 undefined 이다. 
    - 콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열, this를 전달받을 수 있다. 
    - 원본배열을 변경하지 않는다. 하지만 콜백 함수는 원본배열을 변경할 수 있다. 
    - for 문과는 달리 break문을 사용할 수 없다. 배열의 모든 요소를 순회하며 중간에 순회 중단 불가능
    - for문에 비해 성능이 좋지 않다. 하지만 가독성이 좋아 적극 사용 권장. 
  11-3) Array.prototype.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
    배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수의 반환값으로 새로운 배열을 생성하여 반환한다. 원본 배열 변경되지 않음
    forEach 메소드는 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수이며 map 메소드는 배열을 순회하며 요소 값을 다른 값으로 맵핑하기 위한 함수이다. 
    콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, this를 전달받을 수 있다. 
  11-4) rray.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[] 
    - if문 대체
    - 콜백 함수의 실행 결과가 true 인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 
    - 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용한다. 이때 원본 배열은 변경되지 않는다.
    - 콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, filter 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.
  11-5) Array.prototype.reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U Array.prototype.reduce의 두번째 인수로 초기값을 전달할 수 있다. 
  11-6) Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean
  배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다. 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.
  11-7) Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다.
  11-8) Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined
  배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다. 콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 undefined를 반환한다.
   filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다. 따라서 filter의 반환값은 언제나 배열이다. 하지만 find는 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값이다.
  11-9) Array.prototype.findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number
  배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환한다. 콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 -1을 반환한다.

12. 문서 객체 모델(Document Object Model)
  12-1) DOM (Document Object Model) : 텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면 웹 문서를 브라우저가 이해할 수 있는 구조로 메모리에 올려야 한다. 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다.
  모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성한 것
  DOM은 자바스크립트를 통해 동적으로 변경할 수 있으며 변경된 DOM은 렌더링에 반영된다. -> 브라우저는 웹문서 html, xml, svg 를 로드한 후 파싱하여 DOM을 생성한다. 
  DOM API = 웹문서의 동적 변경을 위해 DOM은 프로그래밍 언어가 자신에 접근하고 수정할 수 있는 방법을 제공하는데 일반적으로 프로퍼티와 메소드를 갖는 자바스크립트 객체로 제공되는 것 
  -> 정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경하기 위한 유일한 방법은 메모리 상에 존재하는 DOM을 변경하는 것이고 이때 필요한 것이 DOM 에 접근하고 변경하는 프로퍼티와 메소드의 집합인 DOM API이다. 
  플랫폼/프로그래밍 언어 중립적이다. 
    - 기능 :
      - HTML 문서에 대한 모델 구성: 브라우저는 HTML 문서를 로드한 후 해당 문서에 대한 모델을 메모리에 생성한다. 이때 모델은 객체의 트리로 구성되는데 이것을 DOM tree라 한다.
      - HTML 문서 내의 각 요소에 접근 / 수정 : DOM은 모델 내의 각 객체에 접근하고 수정할 수 있는 프로퍼티와 메소드를 제공한다. DOM이 수정되면 브라우저를 통해 사용자가 보게 될 내용 또한 변경된다.
  12-2) DOM tree : DOM tree는 브라우저가 HTML 문서를 로드한 후 파싱하여 생성하는 모델을 의미한다. 
  DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식이다. DOM tree는 네 종류의 노드로 구성된다.
    - 문서 노드 : 트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. 즉, DOM tree에 접근하기 위한 시작점
    - 요소 노드 : 요소 노드는 HTML 요소를 표현한다. HTML 요소는 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 서술한다고 말 할 수 있다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다. 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성된다
    - 어트리뷰트 노드 : 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현한다. 어트리뷰트 노드는 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다. 따라서 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.
    - 텍스트 노드 : 텍스트 노드는 HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉, 텍스트 노드는 DOM tree의 최종단이다.
  DOM 트리를 크롬 브라우저에서 확인하려면 개발자도구의 Elements 를 선택한 후 오른쪽의 properties을 선택한다.
  12-3)  DOM Query / Traversing (요소에의 접근)
    - 하나의 요소 노드 선택(DOM Query)
      - document.getElementById(id) : id 어트리뷰트 값으로 요소 노드를 한개 선택한다. 복수개가 선택된 경우 첫번재 요소만을 반환한다./ return : HTML.Element를 상속받은 객체/ 모든 브라우저에 동작한다 
      - document.querySelector(cssSelector) : css셀렉터를 사용하여 요소 노드를한 개 선택한다. 복수개가 선택된 경우 첫번재 요소만 반환한다/ Return: HTMLElement를 상속받은 객체/ ie8이상의 브라우저에서 동작 
    - 여러 개의 요소 노드 선택
      - document.getElementsByClassName(class) : class 어트리뷰트값으로 요소 노드를 모두 선택한다. 공백으로 구분하여 여러 개의 class를 지정할 수 있다/ / Return: HTMLCollection (live)/ ie9 이상의 브라우저에서 동작 
        getElementsByClassName 메소드의 반환값은 HTMLCollection이다. 이것은 반환값이 복수인 경우, HTMLElement의 리스트를 담아 반환하기 위한 객체로 배열과 비슷한 사용법을 가지고 있지만 배열은 아닌 유사배열이다. 또한 HTMLCollection은 실시간으로 Node의 상태 변경을 반영한다. (live HTMLCollection)
      - document.getElementsByTagName(tagName) : 태그명으로 요소 노드를 모두 선택한다/ Return: HTMLCollection(live)/모든 브라우저에서 동작
      - document.querySelectorAll(selector) : 지정된 css 선택자를 사용하여 요소 노드를 모두 선택한다/ Return:NodeList(non-live)/ ie8 이상
  12-4) DOM Traversing(탐색)
    - parentNode : 부모 노드를 탐색한다/ Return: HTMLElement를 상속받은 객체/ 모든 브라우저에서 동작
    - firstChild, lastChild : 자식노드를 탐색한다/ Return: HTMLElement를 상속받은 객체/ ie9 이상의 브라우저에서 동작 
    - hasChildNodes() : 자식 노드가 있는지 확인하고 Boolean 값을 반환한다./ Return: Boolean 값 /모든 브라우저에서 동작
    - childNodes : 자식 노드의 컬렉션을 반환한다. 텍스트 요소를 포함한 모든 자식 요소를 반환한다./ Return: NodeList (non-live)/ 모든 브라우저에서 동작
    - children : 자식 노드의 컬렉션을 반환한다. 자식 요소 중에서 Element type 요소만을 반환한다./ Return: HTMLCollection (live)/ ie9 이상의 브라우저에서 동작
    - previousSibling, nextSibling : 형제 노드를 탐색한다. text node를 포함한 모든 형제 노드를 탐색한다./ Return: HTMLElement를 상속받은 객체/ 모든 브라우저에서 동작
    - previousElementSibling, nextElementSibling : 형제 노드를 탐색한다. 형제 노드 중에서 Element type 요소만을 탐색한다/ Return: HTMLElement를 상속받은 객체/ ie9 이상의 브라우저에서 동작
  12-5) DOM Manipulation(조작)
    - 텍스트 노드에의 접근/ 수정 : 요소의 텍스트는 텍스트 노드에 저장되어 있다. 
      - 텍스트 노드에 접근하기위한 순서 : 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다/ firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다./ 텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다/ nodeValue를 이용하여 텍스트를 수정한다 
      nodeValue : 노드의 값을 반환한다/ Return : 텍스트 노드의 경우는 문자열, 요소 노드의 경우 null 반환/ ie6이상의 브라우저에서 동작한다 
      nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
    - 어트리뷰트 노드에의 접근/ 수정 : 아래의 프로퍼티 또는 메소드를 사용한다 
      - className : class 어트리뷰트의 값을 취득 또는 변경한다. className 프로퍼티에 값을 할당하는 경우, class 어트리뷰트가 존재하지 않으면 class 어트리뷰트를 생성하고 지정된 값을 설정한다. class 어트리뷰트의 값이 여러 개일 경우, 공백으로 구분된 문자열이 반환되므로 String 메소드 split(' ')를 사용하여 배열로 변경하여 사용한다./ 모든 브라우저에서 동작한다.
      - classList: add, remove, item, toggle, contains, replace 메소드를 제공한다./ ie10 이상의 브라우저에서 동작한다.
      - id : id 어트리뷰트의 값을 취득 또는 변경한다. id 프로퍼티에 값을 할당하는 경우, id 어트리뷰트가 존재하지 않으면 id 어트리뷰트를 생성하고 지정된 값을 설정한다./ 모든 브라우저에서 동작한다.
      - hasAttribute(attribute) : 지정한 어트리뷰트를 가지고 있는지 검사한다/ Return : Boolean/ ie8 이상의 브라우저에서 동작한다.
  12-6) HTML 콘텐츠 조작 : 마크업이 포함된 콘텐츠를 추가하는 행위는 크로스 스크립팅 공격(XSS: Cross-Site Scripting Attacks)에 취약하므로 주의가 필요하다.
    - textContent : 요소의 텍스트 콘텐츠를 취득 또는 변경한다. 이때 마크업은 무시된다. textContent를 통해 요소에 새로운 텍스트를 할당하면 텍스트를 변경할 수 있다. 이때 순수한 텍스트만 지정해야 하며 마크업을 포함시키면 문자열로 인식되어 그대로 출력된다./ ie9 이상의 브라우저에서 동작한다.
    - innerHTML : 해당 요소의 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다. 이 문자열은 마크업을 포함한다/ innerHTML 프로퍼티를 사용하여 마크업이 포함된 새로운 콘텐츠를 지정하면 새로운 요소를 DOM에 추가할 수 있다
    마크업이 포함된 콘텐츠를 추가하는 것은 크로스 스크립팅 공격에 취약하다.
  12-7) DOM 조작방식 : innerHTML 프로퍼티를 사용하지 않고 새로운 콘텐츠를 추가할 수 있는 방법은 DOM을 직접 조작하는 것이다. 한 개의 요소를 추가하는 경우 사용한다.
    - 방법
      1) 요소 노드 생성 createElement() 메소드를 사용하여 새로운 요소 노드를 생성한다. createElement() 메소드의 인자로 태그 이름을 전달한다.
      2) 텍스트 노드 생성 createTextNode() 메소드를 사용하여 새로운 텍스트 노드를 생성한다. 경우에 따라 생략될 수 있지만 생략하는 경우, 콘텐츠가 비어 있는 요소가 된다.
      3) 생성된 요소를 DOM에 추가 appendChild() 메소드를 사용하여 생성된 노드를 DOM tree에 추가한다. 또는 removeChild() 메소드를 사용하여 DOM tree에서 노드를 삭제할 수도 있다.
  12-8) insertAdjacentHTML()
    - insertAdjacentHTML(position, string) : 인자로 전달한 텍스트를 HTML로 파싱하고 그 결과로 생성된 노드를 DOM 트리의 지정된 위치에 삽입한다. 첫번째 인자는 삽입 위치, 두번째 인자는 삽입할 요소를 표현한 문자열이다. 첫번째 인자로 올 수 있는 값 = ‘beforebegin’, ‘afterbegin’, ‘beforeend’, ‘afterend’
  12-9) innerHTML vs DOM 조작 방식 vs insertAdjacentHTML() 
    - innerHTML 
      장점 : DOM 조작 방식에 비해 빠르고 간편하다/ 간편하게 문자열로 정의한 여러 요소를 DOM에 추가할 수 있다/ 콘텐츠를 취득할 수 있다
      단점 : XSS 공격에 취약점이 있기 때문에 사용자로부터 입력받은 콘텐츠를 추가할 때 주의해야함/ 해당 요소의 내용을 덮어 쓴다. 즉 HTML을 다시 파싱한다. 비효율적임
    - DOM 조작방식
      장점 : 특정 노드 한개를 DOM에 추가할 때 적합하다/ innerHTML보다 느리고 더 많은 코드가 필요하다 
    - insertAdjacentHTML()
      장점 : 간편하게 문자열로 정의된 여러 요소를 DOM에 추가할 수 있다/ 삽입되는 위치를 선정할 수 있다. 
      단점 : XSS 공격에 취약점이 있기 때문에 사용자로부터 입력받은 콘텐츠를 추가할 때 주의해야 한다. 
    ->  텍스트를 추가 또는 변경시에는 textContent, 새로운 요소의 추가 또는 삭제시에는 DOM 조작 방식을 사용하도록 한다.

  12-10) style : style 프로퍼티를 사용하면 inline 스타일 선언을 생성한다. 특정 요소에 inline 스타일을 지정하는 경우 사용한다.
  style 프로퍼티의 값을 취득하려면 window.getComputedStyle을 사용한다. window.getComputedStyle 메소드는 인자로 주어진 요소의 모든 CSS 프로퍼티 값을 반환한다.

13. 동기식 처리 모델 vs 비동기식 처리 모델 
  동기식 처리 모델은 직렬적으로 태스크를 수행한다. 태스크는 순차적으로 실행되며 어떤 작업이 수행 중이면 다음 작업은 대기하게 된다. 
    ex) 서버에서 데이터를 가져와서 화면에 표시하는 작업을 수행할 때 서버에 데이터를 요청하고 데이터가 응답될 때 까지 이후 태스크들은 블로킹(blocking, 작업 중단) 된다. 
  비동기식 처리 모델은 병렬적으로 태스크를 수행한다. 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다. 
    ex) 서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행할 때 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때 까지 대기하지 않고 즉시 다음 태스크를 수행한다. 이후 서버로부터 데이터가 응담되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속 수행한다. 
  -> 자바스크립트의 대부분 DOM 이벤트 핸들러와 Timer함수, Ajax 요청은 비동기식 처리 모델로 동작한다 

14. 이벤트 :브라우저에서의 이벤트란 예를 들어 사용자가 버튼을 클릭했을 때, 웹페이지가 로드되었을 때와 같은 것인데 DOM 요소와 관련이 있다.
이벤트가 발생하면 누군가 이를 감지할 수 있어야 하며 그에 대응하는 처리를 호출해 주어야 한다.
브라우저는 이벤트를 감지할 수 있으며 이벤트 발생 시에는 통지해 준다. 이 과정을 통해 사용자와 웹페이지는 상호작용이 가능하게 된다.
이벤트는 일반적으로 함수에 연결되며 그 함수는 이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되면 실행된다. 이 함수를 이벤트 핸들러라 하며 이벤트에 대응하는 처리를 기술한다.
  14-1) 이벤트 루프와 동시성 
  브라우저는 단일 쓰레드에서 이벤트 드리븐 방식으로 동작한다. 단일 쓰레드는 쓰레드가 하나뿐이라는 의미이며 이말은 곧 하나의 작업만을 처리할 수 있다는 것을 의미한다. 실제로 동작하는 웹 애플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴진다. 
  -> 자바스크립트의 동시성을 지원하는 것이 이벤트 루프이다. 
  자바스크립트의 엔진은 크게 2개의 영역으로 나뉜다. 
    - Call Stack(호출 스택) : 작업이 요청되면(함수가 호출되면) 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고 순차적으로 실행된다. 자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 task가 종료하기 전까지는 다른 어떤 task도 수행될 수 없다.
    - Heap : 동적으로 생성된 객체 인스턴스가 할당되는 영역
  자바스크립트 엔진은 단순히 작업이 요청되면 Call Stack을 사용하여 요청된 작업을 순차적으로 실행할 뿐이다. 앞에서 언급한 동시성(Concurrency)을 지원하기 위해 필요한 비동기 요청(이벤트를 포함) 처리는 자바스크립트 엔진을 구동하는 환경 즉 브라우저(또는 Node.js)가 담당한다.
    - Event Queue(Task Queue): 비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 콜백 함수가 보관되는 영역으로 이벤트 루프(Event Loop)에 의해 특정 시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행된다.
    - Event Loop(이벤트 루프) : Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인한다. 만약 Call Stack이 비어있다면 Event Queue 내의 task가 Call Stack으로 이동하고 실행된다.
  14-2) 이벤트의 종류 
    - UI Event : load/ unload/ error/ resize/ scroll/ select
    - Keyboard Event : keydown/ keyup/ keypress
    - Mouse Event : click/ dbclick/ mousedown/ mouseup/ mousemove/ mouseover/ mouseout
    - Focus Event : focus, focusin/ blur, focusout
    - Form Event : input/ change/ submit/ resesst
    - Clipboard Event : cut/ copy/ paste
  14-3) 이벤트 핸들러 등록 : 이벤트가 발생했을 때 동작할 이벤트 핸들러를 이벤트에 등록하는 방법
    - 인라인 이벤트 핸들러 방식 : HTML 요소의 이벤트 핸들러 어트리뷰트에 이벤트 핸들러를 등록하는 방법이다. 하지만 더이상 사용하지 않음 
    DOM 요소의 이벤트 핸들러 프로퍼티에 함수 호출이 아닌 함수를 전달한다.
    - 이벤트 핸들러 프로퍼티 방식
    인라인 이벤트 핸들러 방식처럼 HTML과 Javascript가 뒤섞이는 문제는 해결할 수 있는 방식이다. 하지만 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만을 바인딩할 수 있다는 단점이 있다.
    - addEventListener 메소드 방식 : addEventListener 메소드를 이용하여 대상 DOM 요소에 이벤트를 바인딩하고 해당 이벤트가 발생했을 때 실행될 콜백 함수(이벤트 핸들러)를 지정한다.
      장점 : 하나의 이벤트에 대해 하나 이상의 이벤트 핸들러를 추가할 수 있다/ 캡처링과 버블링을 지원한다.
      HTML 요소뿐만아니라 모든 DOM 요소에 대해 동작한다. 브라우저는 웹 문서를 로드한 후, 파싱하여 DOM을 생성한다.
  14-4) 이벤트 핸들러 함수 내부의 this
    - 인라인 이벤트 핸들러 방식 : 인라인 이벤트 핸들러 방식의 경우, 이벤트 핸들러는 일반 함수로서 호출되므로 이벤트 핸들러 내부의 this는 전역 객체 window를 가리킨다.
    - 이벤트 핸들러 프로퍼티 방식 : 이벤트 핸들러는 메소드이므로 이벤트 핸들러 내부의 this는 이벤트에 바인딩된 요소를 가리킨다
    - addEventListener 메소드 방식 : addEventListener 메소드에서 지정한 이벤트 핸들러는 콜백 함수이지만 이벤트 핸들러 내부의 this는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다.
  14-5) 이벤트의 흐름 : 계층적 구조에 포함되어 있는 HTML 요소에 이벤트가 발생할 경우 연쇄적 반응이 일어난다. 즉, 이벤트가 전파(Event Propagation)되는데 전파 방향에 따라 버블링(Event Bubbling)과 캡처링(Event Capturing)으로 구분할 수 있다
  자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것을 버블링이라 하고, 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것을 캡처링이라 한다.
  -> 버블링과 캡처링은 둘 중에 하나만 발생하는 것이 아니라 캡처링부터 시작하여 버블링으로 종료한다는 것이다. 즉, 이벤트가 발생했을 때 캡처링과 버블링은 순차적으로 발생한다.
  14-6) Event 객체 :event 객체는 이벤트를 발생시킨 요소와 발생한 이벤트에 대한 유용한 정보를 제공한다. 이벤트가 발생하면 event 객체는 동적으로 생성되며 이벤트를 처리할 수 있는 이벤트 핸들러에 인자로 전달된다.
  14-7) Event Property
    - Event.target : 실제로 이벤트를 발생시킨 요소를 가리킨다.
    - Event.currentTarget : 이벤트에 바인딩된 DOM 요소를 가리킨다. 즉, addEventListener 앞에 기술된 객체를 가리킨다.
    addEventListener 메소드에서 지정한 이벤트 핸들러 내부의 this는 이벤트에 바인딩된 DOM 요소를 가리키며 이것은 이벤트 객체의 currentTarget 프로퍼티와 같다. 따라서 이벤트 핸들러 함수 내에서 currentTarget과 this는 언제나 일치한다.
    - Event.type : 발생한 이벤트의 종류를 나타내는 문자열을 반환한다.
    - Event.cancelable : 요소의 기본 동작을 취소시킬 수 있는지 여부(true/false)를 나타낸다.
    - Event.eventPhase : 이벤트 흐름(event flow) 상에서 어느 단계(event phase)에 있는지를 반환한다.
      - 0 : 의미없음/ 1:캡쳐링 단계/ 2: 타깃/ 3: 버블링 단계
  14-8) Event Delegation (이벤트 위임) : 이벤트 위임(Event Delegation)은 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하는 방법이다. 
  이는 이벤트가 이벤트 흐름에 의해 이벤트를 발생시킨 요소의 부모 요소에도 영향(버블링)을 미치기 때문에 가능한 것이다.
  14-9) 기본 동작의 변경 : 이벤트 객체는 요소의 기본 동작과 요소의 부모 요소들이 이벤트에 대응하는 방법을 변경하기 위한 메소드는 가지고 있다.
    - Event.preventDefault(): 폼을 submit하거나 링크를 클릭하면 다른 페이지로 이동하게 된다. 이와 같이 요소가 가지고 있는 기본 동작을 중단시키기 위한 메소드가 preventDefault()이다.
    - Event.stopPropagation() : 어느 한 요소를 이용하여 이벤트를 처리한 후 이벤트가 부모 요소로 이벤트가 전파되는 것을 중단시키기 위한 메소드이다. 부모 요소에 동일한 이벤트에 대한 다른 핸들러가 지정되어 있을 경우 사용된다.
    - preventDefault & stopPropagation : 기본 동작의 중단과 이벤트 흐름의 중단 모두 적용되므로 이 두가지 중 하나만 중단하기 원할 때 개별적으로 사용 
  
15. 디바이스의 방향 정보를 다루는 자바스크립트 이벤트 
Device Orientation는 HTML5가 제공하는 매우 유용한 기능으로 중력과의 관계에서 디바이스의 물리적 방향의 변화를 감지할 수 있다. 이것을 이용하면 모바일 디바이스를 회전시켰을 때 이벤트를 감지하여 적절히 화면을 변화 시킬 수 있다.
  - DeviceOrientationEvent 가속도계(accelerometer)가 기기의 방향의 변화를 감지했을 때 발생한다.
  - DeviceMotionEvent 가속도에 변화가 일어났을 때 발생한다
브라우저 별 지원 정보는 caniuse를 참조한다. 
15-1) DeviceOrientationEvent : 디바이스의 방향 변화는 3개의 각도( alpha, beta, gamma )를 사용하여 측정된다. deviceorientation 이벤트에 리스너를 등록하면 리스너 함수가 주기적으로 호출되어 업데이트된 방향 데이터를 제공한다. 
  DeviceOrientationEvent.absolute
  DeviceOrientationEvent.alpha
  DeviceOrientationEvent.beta
  DeviceOrientationEvent.gamma

  - absolute : 지구좌표계(Earth coordinate system)을 사용하는 지에 대한 boolean 값이다. 일반적인 경우 사용하지 않는다.
  - alpha : 0도부터 360도까지 범위의 z축을 중심으로 디바이스의 움직임을 나타낸다.
  - beta : 디바이스의 앞뒤 움직임을 나타낸다.
  - gamma : 디바이스의 좌우 움직임을 나타낸다.




    */

// 객체 리터럴
var obj1 = {};
obj1.name = 'Lee';

// Object() 생성자 함수
var obj2 = new Object();
obj2.name = 'Lee';

// 생성자 함수
function F() { }
var obj3 = new F();
obj3.name = 'Lee';

// 생성자 함수(Constructor)
function Person(name) {
  // 프로퍼티
  this.name = name;

  // 메소드
  this.setName = function (name) {
    this.name = name;
  };

  // 메소드
  this.getName = function () {
    return this.name;
  };
}

// 인스턴스의 생성
var me = new Person('Lee');
console.log(me.getName()); // Lee

// 메소드 호출
me.setName('Kim');
console.log(me.getName()); // Kim

// person 생성자 함수로 여러개의 인스턴스를 생성해보면 getName과 setName이 중복되어 생성됨. 각 인스턴스가 내용이 동일한 메소드를 각자 소유하게 됨 
var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(me);  // Person { name: 'Lee', setName: [Function], getName: [Function] }
console.log(you); // Person { name: 'Kim', setName: [Function], getName: [Function] }
console.log(him); // Person { name: 'Choi', setName: [Function], getName: [Function] }

function Person(name) {
  this.name = name;
}

// 프로토타입 객체에 메소드 정의
Person.prototype.setName = function (name) {
  this.name = name;
};

// 프로토타입 객체에 메소드 정의
Person.prototype.getName = function () {
  return this.name;
};

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);
// Person { setName: [Function], getName: [Function] }

console.log(me);  // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }
// Person 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시킨 setName. getName 메소드는 프로토타입 체인에 의해 모든 인스턴스가 참조할 수 있다. 
//프로토타입 객체는 상속할 것들이 저장되는 장소이다.

// Function.prototype
/**
* 모든 생성자 함수의 프로토타입은 Function.prototype이다. 따라서 모든 생성자 함수는 Function.prototype.method()에 접근할 수 있다.
* @method Function.prototype.method
* @param ({string}) (name) - (메소드 이름)
* @param ({function}) (func) - (추가할 메소드 본체)
*/
Function.prototype.method = function (name, func) {
  // 생성자함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자함수의 프로토타입에 메소드를 추가
  // this: 생성자함수
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

//생성자 함수
function Person(name) {
  this.name = name;
}

//생성자함수 Person의 프로토타입에 메소드 setName을 추가
Person.method('setName', function (name) {
  this.name = name;
});

// 생성자함수 Person의 프로토타입에 메소드 getName을 추가
Person.method('getName', function () {
  return this.name;
});

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);
// Person { setName: [Function], getName: [Function] }

console.log(me);  // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }

// 부모 생성자 함수
var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log('Hi! ' + this.name);
  };

  // return constructor
  return Parent;
}());

// 자식 생성자 함수
var Child = (function () {
  // Constructor
  function Child(name) {
    this.name = name;
  }

  // 자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체.
  Child.prototype = new Parent(); // 1. Child 생성자 함수가 생성한 인스턴스 child의 프로토타입 객체는 Parent 생성자 함수가 생성한 인스턴스(2) 이다. 

  // 메소드 오버라이드
  Child.prototype.sayHi = function () {
    console.log('안녕하세요! ' + this.name);
  };

  // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
  Child.prototype.sayBye = function () {
    console.log('안녕히가세요! ' + this.name);
  };

  // return constructor
  return Child;
}());

var child = new Child('child'); // 2. Parent 생성자 함수가 생성한 인스턴스
console.log(child);  // Parent { name: 'child' }

console.log(Child.prototype); // Parent { name: undefined, sayHi: [Function], sayBye: [Function] }

child.sayHi();  // 안녕하세요! child
child.sayBye(); // 안녕히가세요! child

console.log(child instanceof Parent); // true
console.log(child instanceof Child);  // true

// 부모 생성자 함수
var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log('Hi! ' + this.name);
  };

  // return constructor
  return Parent;
}());

// create 함수의 인수는 프로토타입이다
var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi();  // Hi! child

console.log(child instanceof Parent); // true

//객체 리터럴 패턴으로 생성한 객체의 프로토타입 패턴 상속 사용
var parent = {
  name: 'parent',
  sayHi: function () {
    console.log('Hi! ' + this.name);
  }
};

// create 함수의 인자는 객체이다
var child = Object.create(parent);
child.name = 'child';

// var child = Object.create(parent, {name: {value: 'child'}});

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child

console.log(parent.isPrototypeOf(child)); // true

// Object.create 함수의 폴리필
// 폴리필(Polyfill: 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인) 
if (!Object.create) {
  Object.create = function (o) {
    function F() { }  // 1. 비어있는 생성자 함수 F를 생성한다.
    F.prototype = o; // 2. 생성자 함수 F의 prototype 프로퍼티에 매개변수로 전달받은 객체를 할당한다.
    return new F();  // 3. 생성자 함수 F를 생성자로 하여 새로운 객채를 생성하고 반환한다
  };
}
// 프로토타입 패턴 상속의 핵심 

//정보은닉
var Person = function (arg) {
  var name = arg ? arg : ''; // 1. name 변수는 private 변수, function-level scope를 제공하므로 함수 내의 변수는 외부에서 참조할 수 없다.
  //var 때신 this를 사용하면 public 멤버가 된다. 
  this.getName = function () {
    return name;
  };

  this.setName = function (arg) {
    name = arg;
  };
}
// getName, setName은 클로저로서 private 변수(자유 변수)에 접근할 수 있다. 

var me = new Person('Lee');

var name = me.getName();

console.log(name); //*질문* @deprecated 'name'은(는) 사용되지 않습니다. /

me.setName('Kim');
name = me.getName();

console.log(name);

// String 객체를 반환한다
// var obj = new String('String');과 동치이다
var obj = new Object('String');
console.log(typeof obj + ': ', obj);
console.dir(obj);

var strObj = new String('String');
console.log(typeof strObj + ': ', strObj);

// Number 객체를 반환한다
// var obj = new Number(123);과 동치이다
var obj = new Object(123);
console.log(typeof obj + ': ', obj);

var numObj = new Number(123);
console.log(typeof numObj + ': ', numObj);

// Boolean 객체를 반환한다.
// var obj = new Boolean(true);과 동치이다
var obj = new Object(true);
console.log(typeof obj + ': ', obj);

var boolObj = new Boolean(123);
console.log(typeof boolObj + ': ', boolObj);

// 객체리터럴을 사용하는 것이 바람직
var o = {};

try {
  // foo();
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

// in browser console
this === window // true

// in Terminal
node
this === global // true

document.getElementById('foo').style.display = 'none';
// window.document.getElementById('foo').style.display = 'none';

var ga = 'Global variable';
console.log(ga);
console.log(window.ga);

function foo() {
  console.log('invoked!');
}
window.foo();

// window.alert('Hello world!');
alert('Hello world!');

console.log(window.Infinity); // Infinity
console.log(3 / 0);  // Infinity
console.log(-3 / 0); // -Infinity
console.log(Number.MAX_VALUE * 2); // 1.7976931348623157e+308 * 2
console.log(typeof Infinity); // number

console.log(window.NaN); // NaN
console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number

console.log(window.undefined); // undefined
var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

isFinite(testValue) // testValue: 검사 대상 값
isNaN(testValue) // testValue: 검사 대상 값
parseFloat(string) // string: 변환 대상 문자열
parseInt(string, radix); // string: 파싱 대상 문자열, radix: 진법을 나타내는 기수(2 ~ 36, 기본값 10)

parseInt('A0');   // NaN
parseInt('20', 2); // NaN

encodeURI(URI)
// URI: 완전한 URI
decodeURI(encodedURI)
// encodedURI: 인코딩된 완전한 URI

var uri = 'http://example.com?name=이웅모&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher

var uriComp = '이웅모&job=programmer&teacher';

// encodeURI / decodeURI
var enc = encodeURI(uriComp);
var dec = decodeURI(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURIComponent / decodeURIComponent
enc = encodeURIComponent(uriComp);
dec = decodeURIComponent(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher
console.log(dec);
// 이웅모&job=programmer&teacher

var num = 1.5;
console.log(num.toFixed()); // 2

var x = new Number(123);
var y = new Number('123');
var z = new Number('str');

console.log(x); // 123
console.log(y); // 123
console.log(z); // NaN

var x = Number('123');
console.log(typeof x, x); // number 123

console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!

function isEqual(a, b) {
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

console.log(Number('xyz')); // NaN
console.log(1 * 'string');  // NaN
console.log(typeof NaN);    // number

Number.isFinite(Infinity)  // false
Number.isFinite(NaN)       // false
Number.isFinite('Hello')   // false
Number.isFinite('2005/12/12')   // false
Number.isFinite(0)         // true
Number.isFinite(2e64)      // true
Number.isFinite(null)      // false. isFinite(null) => true

var numObj = 77.1234;
console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(77.toExponential());      // SyntaxError: Invalid or unexpected token

// 정수 리터럴과 함께 메소드를 사용할 경우 
77.toString(); // SyntaxError: Invalid or unexpected token
//자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 일부로 해석한다. 그러나 77.toString()은 숫자로 해석할 수 없으므로 에러(SyntaxError: Invalid or unexpected token)가 발생한다.

1.23.toString(); // '1.23'
// 숫자 뒤의 첫 번째 . 뒤에는 숫자가 이어지므로 .은 명백하게 부동 소수점 숫자의 일부이다. 숫자에 소수점은 하나만 존재하므로 두 번째 .은 마침표 표기법(Dot notation)으로 해석된다.

(77).toString(); // '77'

77 .toString(); // '77'
//자바스크립트 숫자는 정수 부분과 소수 부분 사이에 공백을 포함할 수 없다. 따라서 숫자 뒤의 . 뒤에 공백이 오면 .을 마침표 표기법(Dot notation)으로 해석한다.

var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number

Math.pow(2, 8);  // 256
Math.pow(2, -1); // 0.5
Math.pow(2);     // NaN

// ES7(ECMAScript 2016) Exponentiation operator(거듭 제곱 연산자)
2 ** 8; // 256

const date = new Date();
console.log(date); // 2023-01-06T03:58:36.453Z

// KST(Korea Standard Time)는 GMT(그리니치 평균시: Greenwich Mean Time)에 9시간을 더한 시간이다.
let date = new Date(0);
console.log(date); // 1970-01-01T00:00:00.000Z

date = new Date(86400000);
console.log(date); // 1970-01-02T00:00:00.000Z

let date = new Date('May 16, 2019 17:22:10');
console.log(date); // 2019-05-16T08:22:10.000Z

date = new Date('2019/05/16/17:22:10');
console.log(date); // 2019-05-16T08:22:10.000Z

// 월을 나타내는 4는 5월을 의미한다.
// 2019/5/1/00:00:00:00
let date = new Date(2019, 4);
console.log(date);
// Wed May 01 2019 00:00:00 GMT+0900 (한국 표준시)

// month 는 0이 1월, 월을 나타내는 4는 5월을 의미한다.
// 2019/5/16/17:24:30:00
date = new Date(2019, 4, 16, 17, 24, 30, 0);
console.log(date);
// *질문* server 출력창 결과 2019-05-16T08:24:30.000Z 
// browser 실행 결과 Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시) 시간이 다름 

// 가독성이 훨씬 좋다.
date = new Date('2019/5/16/17:24:30:10');
console.log(date);
// *질문* server 출력창 결과 2019-05-16T08:24:30.010Z
// browser 실행 결과 Thu May 16 2019 17:24:30 GMT+0900 (한국 표준시) 시간이 다름 

const today = new Date();
const year = today.getFullYear();

console.log(today); // Fri Jan 06 2023 13:04:18 GMT+0900 (한국 표준시)
console.log(year);  // 2023

//*질문* date 객체 실행이 browser와 server console에서의 결과 표기 방법이 다른 이유? 

const today = new Date();

// 년도 지정
today.setFullYear(2000);

let year = today.getFullYear();
console.log(today); // Mon Jan 01 1900 13:15:13 GMT+0827 (한국 표준시)
console.log(year);  // 2000

// 년도 지정
today.setFullYear(1900, 0, 1);

year = today.getFullYear();
console.log(today); // Mon Jan 01 1900 13:15:13 GMT+0827 (한국 표준시)
console.log(year);  // 1900

const d = new Date('2019/5/16/18:30');

console.log(d.toString());     // Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
console.log(d.toDateString()); // Thu May 16 2019

//현재 날짜와 시간을 초단위로 반복 출력하는 예제
(function printNow() {
  const today = new Date();

  const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // 0 => 12

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(now);
  setTimeout(printNow, 1000);
}());

//정규 표현식 : 회원가입 화면에서 사용자로 부터 입력 받는 전화번호가 유효한지 체크할 필요가 있다. 이때 정규표현식을 사용하면 간단히 처리할 수 있다.
const tel = '0101234567팔';

// 정규 표현식 리터럴
const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel)); // false

const targetStr = 'This is a pen.';
const regexr = /is/ig;

// RegExp 객체의 메소드
console.log(regexr.exec(targetStr)); // [ 'is', index: 2, input: 'This is a pen.' ]
console.log(regexr.test(targetStr)); // true

// String 객체의 메소드
console.log(targetStr.match(regexr)); // [ 'is', 'is' ]
console.log(targetStr.replace(regexr, 'IS')); // ThIS IS a pen.
// String.prototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
console.log(targetStr.search(regexr)); // 2 ← index
console.log(targetStr.split(regexr));  // [ 'Th', ' ', ' a pen.' ]

const targetStr = 'Is this all there is?';

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regexr = /is/;

console.log(targetStr.match(regexr)); // [ 'is', index: 5, input: 'Is this all there is?' ]

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
regexr = /is/ig;

console.log(targetStr.match(regexr)); // [ 'Is', 'is', 'is' ]
console.log(targetStr.match(regexr).length); // 3

const targetStr = 'AA BB Aa Bb';

// 'A'를 대소문자 구분없이 반복 검색
const regexr = /A/ig;

console.log(targetStr.match(regexr)); // [ 'A', 'A', 'A', 'a' ]

const targetStr = 'AA AAA BB Aa Bb';

// 'A' 또는 'B'가 한번 이상 반복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regexr = /A+|B+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]

const targetStr = 'AA BB ZZ Aa Bb';

// 'A' ~ 'Z'가 한번 이상 반복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...

const regexr = /[A-Z]+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'ZZ', 'A', 'B' ]

//대소문자를 구별하지 않고 알파벳을 추출하기
const targetStr = 'AA BB Aa Bb';

// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[A-Za-z]+/g;
// 아래와 동일하다.
// const regexr = /[A-Z]+/gi;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'Aa', 'Bb' ]

// 숫자를 추출하는 방법
const targetStr = 'AA BB Aa Bb 24,000';

// '0' ~ '9'가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[0-9]+/g;

console.log(targetStr.match(regexr)); // [ '24', '000' ]

//컴마 때문에 결과가 분리되므로 패턴에 포함시킨다.
const targetStr = 'AA BB Aa Bb 24,000';

// '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[0-9,]+/g;

console.log(targetStr.match(regexr)); // [ '24,000' ]

const targetStr = 'AA BB Aa Bb 24,000';

// 알파벳과 숫자 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
let regexr = /[\w,]+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'Aa', 'Bb', '24,000' ]

// 알파벳과 숫자가 아닌 문자 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
regexr = /[\W,]+/g;

console.log(targetStr.match(regexr)); // [ ' ', ' ', ' ', ' ', ',' ]

// 자주 사용하는 정규식
// 1. 특정 단어로 시작하는지 검사하기 
const url = 'http://example.com';

// 'http'로 시작하는지 검사
// ^ : 문자열의 처음을 의미한다.
const regexr = /^http/;

console.log(regexr.test(url)); // true

//2. 특정 단어로 끝나는지 검사하기 
const fileName = 'index.html';

// 'html'로 끝나는지 검사
// $ : 문자열의 끝을 의미한다.
const regexr = /html$/;

console.log(regexr.test(fileName)); // true

//3. 숫자인지 검사하기 
const targetStr = '12345';

// 모두 숫자인지 검사
// [^]: 부정(not)을 의미한다. 얘를 들어 [^a-z]는 알파벳 소문자로 시작하지 않는 모든 문자를 의미한다.
// [] 바깥의 ^는 문자열의 처음을 의미한다.
const regexr = /^\d+$/;

console.log(regexr.test(targetStr)); // true

// 4. 하나 이상의 공백으로 시작하는지 검사하기 
const targetStr = ' Hi!';

// 1개 이상의 공백으로 시작하는지 검사
// \s : 여러 가지 공백 문자 (스페이스, 탭 등) => [\t\r\n\v\f]
const regexr = /^[\s]+/;

console.log(regexr.test(targetStr)); // true

// 5. 아이디로 사용 가능한지 검사한다. (영문자, 숫자만 허용, 4~10자리)
const id = 'abc123';

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
// {4,10}: 4 ~ 10자리
const regexr = /^[A-Za-z0-9]{4,10}$/;

console.log(regexr.test(id)); // true

// 6. 메일 주소 형식에 맞는지 검사한다. 
const email = 'ungmo2@gmail.com';

const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

console.log(regexr.test(email)); // true

// 7. 핸드폰 번호 형식에 맞는지 검사한다. 
const cellphone = '010-1234-7899';

const regexr = \^ /d{3}-\d{3,4}-\d{4}$/;

console.log(regexr.test(cellphone)); // true

// 8. 특수문자 포함 여부를 검사한다 
const targetStr = 'abc#123';

// A-Za-z0-9 이외의 문자가 있는지 검사
let regexr = /[^A-Za-z0-9]/gi;

console.log(regexr.test(targetStr)); // true

// 아래 방식도 동작한다. 이 방식의 장점은 특수 문자를 선택적으로 검사할 수 있다.
regexr = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

console.log(regexr.test(targetStr)); // true

// 특수 문자 제거
console.log(targetStr.replace(regexr, '')); // abc123

new String(value);

const str = 'Lee';
const strObj = new String('Lee');

console.log(str == strObj);  // true
console.log(str === strObj); // false

console.log(typeof str);    // string
console.log(typeof strObj); // object

const str = 'Hello';

console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
// 지정한 index가 범위(0 ~ str.length-1)를 벗어난 경우 빈문자열을 반환한다.
console.log(str.charAt(5)); // ''

// 문자열 순회. 문자열은 length 프로퍼티를 갖는다.
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// String 객체는 유사 배열 객체이므로 배열과 유사하게 접근할 수 있다.
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // str['0']
}

console.log('Hello '.concat('Lee')); // Hello Lee

const str = 'Hello World';

console.log(str.indexOf('l'));  // 2
console.log(str.indexOf('or')); // 7
console.log(str.indexOf('or', 8)); // -1

if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}

// ES6: String.prototype.includes
if (str.includes('Hello')) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}

const str = 'Hello world';

// 첫번째로 검색된 문자열만 대체하여 새로운 문자열을 반환한다.
console.log(str.replace('world', 'Lee')); // Hello Lee

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
console.log(str.replace('world', '<strong>$&</strong>')); // Hello <strong>world</strong>

/* 정규표현식
g(Global): 문자열 내의 모든 패턴을 검색한다.
i(Ignore case): 대소문자를 구별하지 않고 검색한다.
*/
console.log(str.replace(/hello/gi, 'Lee')); // Lee Lee

// 두번째 인수로 치환 함수를 전달할 수 있다.
// camelCase => snake_case
const camelCase = 'helloWorld';

// /.[A-Z]/g => 1문자와 대문자의 조합을 문자열 전체에서 검색한다.
console.log(camelCase.replace(/.[A-Z]/g, function (match) {
  // match : oW => match[0] : o, match[1] : W
  return match[0] + '_' + match[1].toLowerCase();
})); // hello_world

// /(.)([A-Z])/g => 1문자와 대문자의 조합
// $1 => (.)
// $2 => ([A-Z])
console.log(camelCase.replace(/(.)([A-Z])/g, '$1_$2').toLowerCase()); // hello_world

// snake_case => camelCase
const snakeCase = 'hello_world';

// /_./g => _와 1문자의 조합을 문자열 전체에서 검색한다.
console.log(snakeCase.replace(/_./g, function (match) {
  // match : _w => match[1] : w
  return match[1].toUpperCase();
})); // helloWorld

/**
 * @param {number} start - 0 ~ 해당문자열 길이 -1 까지의 정수
 * @param {number} [end=this.length] - 0 ~ 해당문자열 길이까지의 정수
 * @return {string}
 */
str.substring(start[, end])

const str = 'Hello World'; // str.length == 11

console.log(str.substring(1, 4)); // ell

// 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
console.log(str.substring(4, 1)); // ell

// 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
console.log(str.substring(4)); // o World

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
console.log(str.substring(-2)); // Hello World

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
console.log(str.substring(1, 12)); // ello World
console.log(str.substring(11)); // ''
console.log(str.substring(20)); // ''
console.log(str.substring(0, str.indexOf(' '))); // 'Hello'
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // 'World'

console.log('Hello World!'.toLowerCase()); // hello world!

const str = '   foo   ';

console.log(str.trim()); // 'foo'

// String.prototype.replace
console.log(str.replace(/\s/g, ''));   // 'foo'
console.log(str.replace(/^\s+/g, '')); // 'foo   '
console.log(str.replace(/\s+$/g, '')); // '   foo'

// String.prototype.{trimStart,trimEnd} : Proposal stage 3
console.log(str.trimStart()); // 'foo   '
console.log(str.trimEnd());   // '   foo'

const emptyArr = [];

console.log(emptyArr[1]); // undefined
console.log(emptyArr.length); // 0

const arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(arr[1]);      // 'one'
console.log(arr.length);  // 10
console.log(typeof arr);  // object

//리터럴로 유사하게 표현하기 
const obj = {
  '0': 'zero', '1': 'one', '2': 'two',
  '3': 'three', '4': 'four', '5': 'five',
  '6': 'six', '7': 'seven', '8': 'eight',
  '9': 'nine'
};

const arr = [];
console.log(arr[0]); // undefined

arr[1] = 1;
arr[3] = 3;

console.log(arr); // (4) [empty, 1, empty, 3]
console.log(arr.lenth); // 4

const numbersArr = ['zero', 'one', 'two', 'three'];

// 요소의 값만 삭제된다
delete numbersArr[2]; // (4) ["zero", "one", empty, "three"]
console.log(numbersArr);

// 요소 값만이 아니라 요소를 완전히 삭제한다
// splice(시작 인덱스, 삭제할 요소수)
numbersArr.splice(2, 1); // (3) ["zero", "one", "three"]
console.log(numbersArr);

const arr = [0, 1, 2, 3];
arr.foo = 10;

for (const key in arr) {
  console.log('key: ' + key, 'value: ' + arr[key]);
}
// key: 0 value: 0
// key: 1 value: 1
// key: 2 value: 2
// key: 3 value: 3
// key: foo value: 10 => 불필요한 프로퍼티까지 출력

arr.forEach((item, index) => console.log(index, item));

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

for (const item of arr) {
  console.log(item);
}

const arr = [1, 2, 3, 4, 5];

// 배열 길이의 명시적 변경
arr.length = 3;
console.log(arr); // (3) [1, 2, 3]

const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫번째 인덱스를 반환
arr.indexOf(2);    // -> 1
// 배열 arr에서 요소 4가 없으므로 -1을 반환
arr.indexOf(4);    // -1
// 두번째 인수는 검색을 시작할 인덱스이다. 두번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // 2

const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열을 반환
let result = arr.join();
console.log(result); // '1,2,3,4';

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열을 반환
result = arr.join('');
console.log(result); // '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열을 반환
result = arr.join(':');
console.log(result); // '1:2:3:4'

const arr1 = [1, 2];
// push 메소드는 원본 배열을 직접 변경한다.
arr1.push(3, 4);
console.log(arr1); // [1, 2, 3, 4]

const arr2 = [1, 2];
// concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
const result = arr2.concat(3, 4);
console.log(result); // [1, 2, 3, 4]

const arr1 = [1, 2];
// 인수로 전달받은 배열을 그대로 원본 배열의 마지막 요소로 추가한다
arr1.push([3, 4]);
console.log(arr1); // [1, 2, [3, 4]]

const arr2 = [1, 2];
// 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다
const result = arr2.concat([3, 4]);
console.log(result); // [1, 2, 3, 4]

const arr = [1, 2];

// arr.push(3)와 동일한 처리를 한다. 이 방법이 push 메소드보다 빠르다.
arr[arr.length] = 3;

console.log(arr); // [1, 2, 3]

// 스택 자료 구조를 구현하기 위한 배열
const stack = [];

// 스택의 가장 마지막에 데이터를 밀어 넣는다.
stack.push(1);
console.log(stack); // [1]

// 스택의 가장 마지막에 데이터를 밀어 넣는다.
stack.push(2);
console.log(stack); // [1, 2]

// 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
let value = stack.pop();
console.log(value, stack); // 2 [1]

// 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
value = stack.pop();
console.log(value, stack); // 1 []

const arr = [];

arr.push(1); // [1]
arr.push(2); // [1, 2]
arr.push(3); // [1, 2, 3]

arr.shift(); // [2, 3]
arr.shift(); // [3]
arr.shift(); // []

const items = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
const res = items.splice(1, 2, 20, 30);

// 원본 배열이 변경된다.
console.log(items); // [ 1, 20, 30, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 2, 3 ]

const items = [1, 2, 3, 4];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
const res = items.splice(1, 0, 100);

// 원본 배열이 변경된다.
console.log(items); // [ 1, 100, 2, 3, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ ]

const arr = [];

console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd('Array Performance Test');
// Array Performance Test: 431.707ms

const obj = {};

console.time('Object Performance Test');

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd('Object Performance Test');
// Object Performance Test: 484.495ms

const fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort(function (a, b) { return a - b; });
// ES6 화살표 함수
// points.sort((a, b) => a - b);
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
// ES6 화살표 함수
// points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100

const numbers = [1, 2, 3];
let pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows); // [ 1, 4, 9 ]

pows = [];

// forEach 메소드로 순회
numbers.forEach(function (item) {
  pows.push(item ** 2);
});

// ES6 화살표 함수
// numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [ 1, 4, 9 ]

const four = document.getElementById('four');

// inline 스타일 선언을 생성
four.style.color = 'blue';

// font-size와 같이 '-'으로 구분되는 프로퍼티는 카멜케이스로 변환하여 사용한다.
four.style.fontSize = '2em';

//동기식 처리 모델 , 순차적으로 실행 
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  console.log('func2');
  func3();
}

function func3() {
  console.log('func3');
}

func1();

//비동기식 처리 모델, 순차적으로 실행되지 않는다 
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  setTimeout(function () {
    console.log('func2');
  }, 0);

  func3();
}

function func3() {
  console.log('func3');
}

func1();
// 함수 func1이 호출되면 함수 func1은 Call Stack에 쌓인다. 
//그리고 함수 func1은 함수 func2을 호출하므로 함수 func2가 Call Stack에 쌓이고 setTimeout가 호출된다. 
//setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 “tick” 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.

//dom 이벤트 핸들러 동작
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  // <button class="foo">foo</button>
  const elem = document.querySelector('.foo');

  elem.addEventListener('click', function () {
    this.style.backgroundColor = 'indigo';
    console.log('func2');
  });

  func3();
}

function func3() {
  console.log('func3');
}

func1();
//함수 func1이 호출되면 함수 func1은 Call Stack에 쌓인다. 
//그리고 함수 func1은 함수 func2을 호출하므로 함수 func2가 Call Stack에 쌓이고 addEventListener가 호출된다. 
//addEventListener의 콜백함수는 foo 버튼이 클릭되어 click 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.

if (window.DeviceOrientationEvent) {
  // Our browser supports DeviceOrientation
} else {
  console.log('Sorry your browser does not support Device Orientation');
}

window.addEventListener('deviceorientation', handleOrientation, false);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  // Do stuff with the new orientation data
}
