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

19. 제어문 :코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용/ 제어문은 코드의 실행 순서를 인위적으로 제어할 수 있다
    19-1) 블록문 : 0개 이상의 문들을 중괄호로 묶은 것/ 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수 선언문 등에서 사용한다/ 블록문은 세미콜론을 붙이지 않음 
    19-2) 조건문 : 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정함/ 조건식은 불리언 값으로 평가될 수 있는 표현식임 / 자바스크립트는 2가지 조건문 if...else문과 switch 문을 제공함 
        - if... else 문 : 논리적 참, 거짓에 따라 실행할 코드 블록을 결정/ 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별함 
          if문과 else문은 2번이상 사용할 수 없지만 else if문은 여러번 사용할 수 있음 
          코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있음 
          대부분의 if…else 문은 연산자에서 살펴본 삼항 조건 연산자로 바꿔쓸 수 있다. 
        - switch 문 
          switch 문은 switch 문의 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동시킨다.
          case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.
          switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동한다. default 옵션으로 사용할 수도 있고 사용하지 않을 수도 있다.
          if…else 문의 조건식은 반드시 불리언 값으로 평가되지만 switch 문의 표현식은 불리언 값보다는 문자열, 숫자 값인 경우가 많다.
          switch 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용
          break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 순서는 다음 case 문으로 연이어 이동
          default 문에는 break 문을 생략하는 것이 일반적/ 여러 개의 case 문을 중복해 사용할 수도 있다.
    19-3) 반복문 : 반복문은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행/ 그 후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행, 조건식이 거짓일 때까지 반복
        - for문 : 조건식이 거짓으로 판별될 때까지 코드 블록을 반복 실행, for 문 내에 for 문을 중첩해 사용할 수 있다.
        - while 문 : 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행, 조건문의 평가 결과가 거짓이 되면 실행을 종료한다. 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별한다.
        - do...while문 : 코드 블록을 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한번 이상 실행된다.
        - break문 : 레이블 문, 반복문 또는 switch 문의 코드 블록을 탈출한다. 레이블 문, 반복문, switch 문의 코드 블록 이외에 break 문을 사용하면 SyntaxError(문법 에러)가 발생한다.
          레이블 문이란 식별자가 붙은 문
        - continue 문 : 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다. break 문처럼 반복문을 탈출하지는 않는다.

20. 타입 변환과 단축 평가         
    타입변환이란? 자바스크립트의 모든 값은 타입이 있다 값의 타입은 다른 타입으로 개발자에 의해 의도적으로 변환할 수 있다 혹은 자바스크립트 엔진에 의해 암묵적으로 자동 변환되기도 함
    개발자에 의해 의도적으로 값의 타입을 변환하는 것을 명시적 타입변환, 타입 캐스팅이라고 한다. 
    동적 타입 언어인 자바스크립트는 개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 타입이 자동 변환되기도 함. 이를 압묵적 타입변환, 타입 강제 변환이라고 함 
    20-1) 압묵적 타입 변환 : 자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 컨텍스트에 고려하여 암묵적 타입 변환을 실행한다. 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다. 
        - 문자열 타입으로 변환 
        - 숫자 타입으로 변환 : 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다. 
          + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.
          빈 문자열(‘’), 빈 배열([]), null, false는 0으로, true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다는 것에 주의하자.
        - 불리언 타입으로 변환 
          불리언 값으로 평가되어야할 컨텍스트에서 false로 평가되는 falsy 값 : false, undefined, null, 0, -0, NaN, ''(빈문자열)
          Falsy 값 이외의 값은 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 컨텍스트에서 모두 true로 평가되는 Truthy 값이다.
    20-2) 명시적 타입 변환 :  원래는 래퍼 객체를 생성하기 위해 사용하는 래퍼 객체 생성자 함수를 new 연산자 없이 호출하는 방법과 자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법이 있다 
        - 문자열 타입으로 변환 
        - 숫자 타입으로 변환 
    20-3) 단축평가 
        - 논리곱 연산자 &&는 두개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 
        - 논리합 연산자 ||는 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 
        객체는 키(key)과 값(value)으로 구성된 프로퍼티들의 집합이다. 만약 객체가 null인 경우, 객체의 프로퍼티를 참조하면 타입 에러가 발생한다. 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.
    
21. 객체 : 자바스크립트는 객체 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 모든 것이 객체이다. 원시 타입을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다./ 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합
    프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
    자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 프로토타입(prototype)이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다. 
    21-1) 프로퍼티 : 프로퍼티키(이름)와 프로퍼티 값으로 구성/ 프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있다. = 프로퍼티 키는 프로퍼티를 식별하기 위한 식별자(identifier)다. 
    - 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 symbol 값 
    - 프로퍼티 값 : 모든 값 
    프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 객체는 프로퍼티를 열거할 때 순서를 보장하지 않는다 
    21-2) 메소드 : 프로퍼티 값이 함수일 경우/ 객체에 제한되어 있는 함수를 의미 

    21-3) 객체 생성 방법
        -객체 리터럴 : {} 사용  
        -object 생성자 함수 : new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다. 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법
         생성자(constructor) 함수란 new 키워드와 함께 객체를 생성하고 초기화하는 함수 -> 생성자 함수를 통해 생성된 객체를 인스턴스(instance)라 한다. 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Array, Date, RegExp 등의 빌트인 생성자 함수를 제공한다. 
         일반 함수와 생성자 함수를 구분하기 위해 생성자 함수의 이름은 파스칼 케이스(PascalCase)를 사용하는 것이 일반적이다.
        - 생성자 함수 : 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
    21-4) 객체 프로퍼티 접근 
        - 프로퍼티 키 : 프로퍼티 키는 일반적으로 문자열(빈 문자열 포함)을 지정, 프로퍼티 키는 문자열이므로 따옴표('' 또는 "")를 사용한다. 
        - 프로퍼티 값 읽기 : 객체의 프로퍼티 값에 접근하는 방법은 마침표 표기법과 대괄호 표기법이 있다 
        프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 읽어야 한다. 대괄호([]) 표기법을 사용하는 경우 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.
        - 프로퍼티 값 갱신 : 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
        - 프로퍼티 동적 생성 : 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가한다.
        - 프로퍼티 삭제 : delete 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다.
        - for-in문: 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다 / for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법/for–of 문은 배열의 요소를 순회하기 위해 사용한다.
    21-5) Pass-by-reference
        객체 타입은 동적으로 변화할 수 있으므로 런타임에 메모리 공간을 확보하고 메모리의 힙영역에 저장된다. 이에 반해 원시 타입은 값으로 전달된다. 복사되어 전달 = Pass-by-reference
    21-6) pass-by-value : 원시 타입은 값(value)으로 전달된다. 즉, 값이 복사되어 전달된다. / 원시 타입은 값이 한번 정해지면 변경할 수 없다./ 스택영역에 고정된 메모리 영역을 점유하고 저장 
    21-7) 객체의 분류: Built-in Object(내장 객체) = Standard Built-in Objects(표준 빌트인 객체) + Native Object (Browser Object Model + Document Object Model)
                      Host Object(사용자 정의 객체)

22. 객체와 변경불가성 : 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미/ 불변 객체를 사용하면 복제나 비교를 위한 조작을 단순화 할 수 있고 성능 개선에도 도움이 된다
    22-1) 1. immutable value vs. mutable value 
    - Javascript의 원시 타입은 변경 불가능한 값(immutable value)이다.(boolean, null, undefined, number, string, symbol) = primitive values
    - 원시 타입 이외의 모든 값은 객체(Object) 타입이며 객체 타입은 변경 가능한 값(mutable value)이다. 
    22-2) 불변 데이터 패턴 : 객체를 불변객체로 만들어 프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다.
    - Object.assign : 타킷 객체로 소스 객체의 프로퍼티를 복사 -> 추천되지않음
    - Object.freeze -> 추천되지않음
    - Immutable.js : List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조를 제공
    $ npm install immutable  Immutable.js를 설치


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

str = 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
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
var average = (50 + 100) / 2;

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
else result = '짝수';

console.log(result); //짝수 

typeof null  // "object"

//블록문
{
    var foo = 10;
    console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
    x++;
}
console.log(x); //10

// 함수 선언문
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2)); //3

if (조건식) {
    //조건식이 참이면 이 코드 블록 실행
} else {
    //조건식이 거짓이면 이 코드 블록이 실행 
    // 조건식을 추가하고 싶으면 else if문을 사용한다 
}

if (조건식1) {
    //조건식 1이 참이면 이 코드 블록 실행
} else if (조건식2) {
    //조건식 2가 참이면 이 코드블록 실행
} else {
    // 조건식 1과 조건식 2가 모두 거짓이면 이 코드 블록 실행
}

var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

// 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능 
var num = 2;
var kind;

if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind); // 양수

//대부분의 if…else 문은 연산자에서 살펴본 삼항 조건 연산자로 바꿔쓸 수 있음 

// x가 짝수이면 ‘짝수'를 홀수이면 ‘홀수'를 반환한다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이고 0은 false로 취급된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수

// 위 예제는 아래와 같은 삼항 조건 연산자로 바꿔쓸 수 있다 
// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 세가지 경우의 수의 경우는 아래와 같이 바꿔쓸 수 있다 
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); // 양수
//num > 0 ? '양수' : '음수'는 표현식이므로 다른 표현식의 일부가 될 수 있다.

switch (표현식1) {
    case 표현식1:
        //        switch 문의 표현식과 표현식1이 일치하면 실행될 문; 문제 발생으로 주석처리함
        break;
    case 표현식2:
        //    switch 문의 표현식과 표현식2가 일치하면 실행될 문; 문제 발생으로 주석처리함
        break;
    default:
    //    switch문의 표현식과 일치하는 표현식을 갖는 case문이 없을 때 실행될 문; 문제 발생으로 주석처리함   
}

// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
    case 1:
        monthName = 'January';
    case 2:
        monthName = 'February';
    case 3:
        monthName = 'March';
    case 4:
        monthName = 'April';
    case 5:
        monthName = 'May';
    case 6:
        monthName = 'June';
    case 7:
        monthName = 'July';
    case 8:
        monthName = 'August';
    case 9:
        monthName = 'September';
    case 10:
        monthName = 'October';
    case 11:
        monthName = 'November';
    case 12:
        monthName = 'December';
    default:
        monthName = 'Invalid month';
}

console.log(monthName); // Invalid month
// -> switch 문의 표현식의 평가 결과와 일치하는 case 문으로 실행 순서가 이동하여 문을 실행한 것은 맞지만, 문을 실행한 후 switch 문을 탈출하지 않고 switch 문이 끝날 때까지 모든 case 문과 default 문을 실행했기 때문 = 폴스루(fall through)
// 올바른 표현은 아래와 같다 

var month = 11;
var monthName;

switch (month) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'May';
        break;
    case 6:
        monthName = 'June';
        break;
    case 7:
        monthName = 'July';
        break;
    case 8:
        monthName = 'August';
        break;
    case 9:
        monthName = 'September';
        break;
    case 10:
        monthName = 'October';
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        monthName = 'December';
        break;
    default:
        monthName = 'Invalid month'; // default 문에는 break 문을 생략하는 것이 일반적
}

console.log(monthName); // November

var year = 2000; // 2000년은 윤년으로 2월이 29일이다
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        //윤년 계산 알고리즘
        // 1. 년도가 4로 나누어 떨어지는 해는 윤년 
        // 2. 그 중에서 년도가 100으로 나누어 떨어지는 해는 평년 
        // 3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년 
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days); // 29

for (초기화식; 조건식; 증감식) {
    //    조건식이 참인 경우 반복 실행될 문; 문제발생으로 주석처리함
}

for (var i = 0; i < 2; i++) {
    console.log(i);
}
// 변수 i가 0으로 초기화된 상태에서 시작하여 i가 2보다 작을 때까지 코드 블록을 2번 반복 실행한다 
// 1. for 문을 실행하면 가장 먼저 초기화식 var i = 0이 실행된다. 초기화식은 단 한번만 실행된다.
// 2. 초기화식의 실행이 종료되면 조건식으로 실행 순서가 이동, 현재 변수 i는 0 이므로 조건식의 평과 결과는 true이다. 
// 3. 조건식의 평가 결과가 true이므로 실행 순서가 코드 블록으로 이동하여 실행된다. 증감문으로 실행 순서가 이동하는 것이 아니라 코드 블록으로 실행 순서가 이동하는 것에 주의
// 4. 코드 블록의 실행이 종료하면 증감식으로 실행 순서가 이동한다. 증감식 i++가 실행되어 i는 1이 된다.
// 5. 증감식 실행이 종료되면 다시 조건식으로 실행 순서가 이동, 현재 변수 i는 1이므로 조건식의 평가 결과는 true다.
// 6. 조건식의 평가 결과가 true이므로 실행 순서가 코드 블록으로 이동하여 실행
// 7. 코드 블록의 실행이 종료하면 증감식으로 실행 순서가 이동한다. 증감식 i++가 실행되어 i는 2가 된다.
// 8. 증감식 실행이 종료되면 다시 조건식으로 실행 순서가 이동한다. 현재 변수 i는 2이므로 조건식의 평가 결과는 false다. 조건식의 평가 결과가 false이므로 for 문의 실행이 종료

for (; ;) { }// 무한루프 , for 문의 초기화식, 조건식, 증감식은 모두 옵션이므로 반드시 사용할 필요는 없다. 

// 두 개의 주사위를 던졌을 때, 두 눈의 합이 6이 되는 모든 경우의 수를 출력하는 예제
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
    console.log(count);
    count++;
} // 0 1 2

// 무한루프 -> 조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
while (true) { }

//무한루프를 탈출하기 위해서는 코드 블럭 탈출 조건을 if 문에 부여하고 break 문으로 코드 블럭을 탈출한다.
var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
    console.log(count);
    count++;
} while (count < 3); // 0 1 2

if (true) {
    break; // Uncaught SyntaxError: Illegal break statement 'break' 문은 이 문을 둘러싼 반복문 또는 switch 문 내에서만 사용할 수 있습니다.
}

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// switch 문의 case 문과 default 문도 레이블 문이다. foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j === 3이면 외부 for 문을 탈출한다.
        if (i + j === 3) break outer;
    }
}

console.log('Done!');

//특정 문자의 인덱스 (위치)를 검색하는 예제
var string = 'Hello World.';
var index;

// 문자열은 유사배열이므로 for문으로 순회할 수 있다 
for (var i = 0; i < string.length; i++) {
    //문자열의 개별 문자가 'l'이면
    if (string[i] === 'l') {
        index = i;
        break; //반복문 탈출 
    }
}

console.log(index); // 2

//참고로 String.prototype.indexOf 메소드를 사용해도 같은 동작을 한다 
console.log(string.indexOf('l')); //2

//문자열에서 특정 문자의 개수를 카운트하는 예제 
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== 'l') continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3 *질문*g는 무엇?

//위와 아래는 동일하게 동작함 
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === 'l') count++;
}

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === 'l') {
        count++;
        // code
        // code
        // code
    }
}

// continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if (string[i] !== 'l') continue;

    count++;
    // code
    // code
    // code
}

var x = 10;

//명시적 타입 변환
var str = x.toString(); //숫자를 문자열로 타입 캐스팅한다 
console.log(typeof str); //string 

var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10

// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2               // '102'
    `1 * 10 = ${1 * 10}` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0 // true
if (1) { }

// 숫자 타입
0 + ''              // "0"
    - 0 + ''             // "0"
1 + ''              // "1"
    - 1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
    - Infinity + ''      // "-Infinity"

// 불리언 타입
true + ''           // "true"
false + ''          // "false"

// null 타입
null + ''           // "null"

// undefined 타입
undefined + ''      // "undefined"

    // 심볼 타입
    (Symbol()) + ''

        // 객체 타입
        ({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // "" *질문* 에러문구 요소 액세스 식은 인수를 사용해야 합니다...?
    [10, 20] + ''       // "10,20"
        (function () { }) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"

//모두 산술 연산자, 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다. 
1 - '1'    // 0
1 * '10'   // 10
1 / 'one'  // NaN

// 비교 연산자의 역할은 불리언 값을 만드는 것이다. > 비교 연산자는 피연산자의 크기를 비교하므로 피연산자는 컨텍스트 상 숫자 타입이여야 한다.
'1' > 0   // true
    //+ 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.
    // 문자열 타입
    + ''             // 0
    + '0'            // 0
    + '1'            // 1
    + 'string'       // NaN

    // 불리언 타입
    + true           // 1
    + false          // 0

    // null 타입
    + null           // 0

    // undefined 타입
    + undefined      // NaN

    // 심볼 타입
    + Symbol()

    // 객체 타입
    + {}             // NaN
    + []             // 0
    + [10, 20]       // NaN
    + (function () { }) // NaN

// 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다
function isFalsy(v) {
    return !v;
}

// 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다
function isTruthy(v) {
    return !!v;
}

// 모두 true를 반환
console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));
console.log(isTruthy(true));

// 빈 문자열이 아닌 문자열은 Truthy 값
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));

// 명시적 타입 변환 - 문자열 타입으로 변환하는 방법 예시 
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 -> 문자열 타입
console.log(String(1));     // "1"
console.log(String(NaN));       // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 -> 문자열 타입
console.log(String(true));      // "true"
console.log(String(false));     // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 -> 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 -> 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());        // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 -> 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 -> 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');        // "false"

// 숫자 타입으로 변환 
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 -> 숫자 타입
console.log(Number('0'));       // 0
console.log(Number('-1'));      // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 -> 숫자 타입
console.log(Number(true));      // 1
console.log(Number(false));     // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 -> 숫자 타입
console.log(parseInt('0'));     // 0
console.log(parseInt('-1'));        // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 -> 숫자 타입
console.log(+'0');      // 0
console.log(+'-1');     // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 -> 숫자 타입
console.log(+true);     // 1
console.log(+false);        // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 -> 숫자 타입
console.log('0' * 1);       // 0
console.log('-1' * 1);      // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 -> 숫자 타입
console.log(true * 1);      // 1
console.log(false * 1);     // 0

//불리언 타입으로 변환 
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 -> 불리언 타입
console.log(Boolean('x'));      // true
console.log(Boolean(''));       // false
console.log(Boolean('false'));  // true
// 숫자 타입 -> 불리언 타입
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(NaN));      // false
console.log(Boolean(Infinity)); // true
// null 타입 -> 불리언 타입
console.log(Boolean(null));     // false
// undefined 타입 -> 불리언 타 입
console.log(Boolean(undefined));    // false
// 객체 타입 -> 불리언 타입
console.log(Boolean({}));       // true
console.log(Boolean([]));       // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 -> 불리언 타입
console.log(!!'x');     // true
console.log(!!'');      // false
console.log(!!'false'); // true
// 숫자 타입 -> 불리언 타입
console.log(!!0);       // false
console.log(!!1);       // true
console.log(!!NaN);     // false
console.log(!!Infinity);    // true
// null 타입 -> 불리언 타입
console.log(!!null);        // false
// undefined 타입 -> 불리언 타입
console.log(!!undefined);   // false
// 객체 타입 -> 불리언 타입
console.log(!!{});      // true
console.log(!![]);      // true

//단축평가 
//객체가 null인지 확인하고 프로퍼티를 참조할 때 
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null

//함수의 인수를 초기화 할때 
// 단축 평가를 사용한 매개변수의 기본값 설정
// 함수를 호출할 때 인수를 전달하지 않으면 매개변수는 undefined 를 갖는다. 이때 단축평가를 사용하여 매개변수의 기본값을 설정하면  undefined로 인해 발생할 수 있는 에러를 방지할 수 있다 
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

//객체 리터럴
var emptyObject = {}; // 아무것도 없으면 빈객체 생성
console.log(typeof emptyObject); // object

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee

// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee

// 생성자 함수
function Person(name, gender) {
    // 생성자 함수 이름은 일반적으로 대문자로 시작
    this.name = name;
    // this = 생성자 함수가 생성할 인스턴스를 가르킨다 this에 연결되어있는 프로퍼티와 메소드는 public하다 (외부에서 참조 가능)
    this.gender = gender;
    this.sayHello = function () {
        console.log('Hi! My name is ' + this.name);
    };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();

function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function () { // public
        //this에 연결되어있는 프로퍼티와 메소드는 public하다 (외부에서 참조 가능)
        //생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다.
        console.log('Hi! My name is ' + this.name);
    };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender);  // 'male'
console.log(person.married); // undefined

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person);

var person = {
    first- name: 'Ung-mo', // SyntaxError: Unexpected token -
    //프로퍼티 키 first-name에는 반드시 따옴표를 사용해야 하지만 first_name에는 생략 가능. 
    //first-name은 자바스크립트에서 사용 가능한 유효한 이름이 아니라 ‘-‘ 연산자가 있는 표현식이기 때문
  };

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
};

console.log(person);

console.log(person.first - name);    // NaN: undefined-undefined
console.log(person[first - name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
console.log(person.1);    // SyntaxError

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

console.log(person.age); // 객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name']); // 'Kim'

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

person.age = 20;
console.log(person.age); // 20

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
    console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/

//pass-by-reference
var foo = {
    val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar); //true

bar.val = 20;
console.log(foo.val, bar.val); //20 20
console.log(foo === bar); //true

var foo = { bal: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar); // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar); //true

var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true

// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false

//변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐
var str = 'Hello';
str = 'world';

var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1

//slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있다. 문자열은 변경할 수 없는 immutable value이기 때문
var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'

//문자열의 메소드 slice()와는 달리 배열(객체)의 메소드 push()는 직접 대상 배열을 변경한다. 배열은 객체이고 객체는 immutable value가 아닌 변경 가능한 값이기 때문이다.
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1

var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim

//user2의 name 프로퍼티에 새로운 값을 할당하면 객체는 변경 불가능한 값이 아니므로 객체 user2는 변경된다. 그런데 변경하지도 않은 객체 user1도 동시에 변경된다. 
//이는 user1과 user2가 같은 어드레스를 참조하고 있기 때문!
var user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim

Object.assign(target, ...sources) // target에 source를 복사한다!
// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }

const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan.

const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, { name: 'Kim' });

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시됨

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true.

//하지만 객체 내부의 객체는 변경가능하다 
const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

Object.freeze(user);

user.address.city = 'Busan'; // 변경
console.log(user); // { name: 'Lee', address: { city: 'Busan' } }

//내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 해야함
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name) => {
        const prop = obj[name];
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}

const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

deepFreeze(user);

user.name = 'Kim';           // 무시
user.address.city = 'Busan'; // 무시

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }

import { Map } from 'immutable'; // const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
//map1.set(‘b’, 50)의 실행에도 불구하고 map1은 불변하였다. map1.set()은 결과를 반영한 새로운 객체를 반환