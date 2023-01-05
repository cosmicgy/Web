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

23. 함수 : 함수란 어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록,  이름과 매개변수를 갖으며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행할 수 있다. 함수는 객체
    - 함수를 정의하는 방식 3가지 : 함수 선언문, 함수 표현식, function 생성자 함수 
    23-1) 함수 선언문 : function 키워드와 이하의 내용으로 구성
        - 함수명 : 함수 선언문의 경우 함수명은 생략할 수 없음. 함수 몸체에서 자신을 재귀적 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자이다 
        - 매개변수 목록 : 0개 이상의 목록으로 괄호로 감싸고 콤마로 분리한다 매개변수 타입을 기술하지 않음, 매개 변수의 타입 체크가 필요할 수 있다 
        - 함수 몸체 : 함수가 호출되었을 때 실행되는 문들의 집합, return문으로 결과값을 반환할 수 있다
    23-2) 함수 표현식 : 무명의 리터럴로 표현 가능/ 변수나 자료구조에 저장할 수 있음/ 함수의 파라미터로 전달할 수 있음/ 반환값으로 사용할 수 있음 
        - 함수 표현식 방식으로 정의한 함수는 함수명을 생략할 수 있다. = 익명함수 
    23-3) function 생성자 함수 : 함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 결국 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)이다. unction.prototype.constructor 프로퍼티로 접근할 수 있다.

    23-4) 함수 호이스팅 : 함수 선언의 위치와는 상관없이 코드 내 어느 곳에서든지 호출이 가능한것, 자바스크립트는 모든 선언문(var, let, const, function, function*, class)이 선언되기 이전에 참조 가능하다 
    함수 표현식으로 함수를 정의할 경우에는 변수 호이스팅이 발생 
    23-5) First-class object (일급 객체) = 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미
        - 무명의 리터럴로 표현이 가능하다
        - 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다 
        - 함수의 매개변수에 전달할 수 있다 
        - 반환값으로 사용할 수 있다
    자바스크립트의 함수는 흡사 변수와 같이 사용할 수 있으며 코드의 어디에서든지 정의할 수 있다. 함수와 다른 객체를 구분짓는 특징은 호출할 수 있다는 것이다.

    23-6) 매개변수(parameter, 인자)
        - 매개변수(parameter, 인자) vs 인수(argument) : 함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화됨 
        - call-by-value : 원시 타입 인수는 call-by-value(값에 의한 호출)로 동작
        - call-by-reference : 객체형(참조형) 인수는 call-by-reference(참조에 의한 호출)로 동작
        어떤 외부 상태도 변경하지 않는 함수를 순수함수, 외부 상태도 변경시켜는 부수 효과가 발생시키는 함수를 비순수 함수라 한다.

    23-7) 반환값 : 함수는 배열 등을 이용해 한번에 여러개의 값을 리턴할 수 있다/ 함수는 반환을 생략할 수 있다, undefined를 반환함/ 자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 함수를 호출한 코드로 되돌아간다. 만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.
    23-8) 함수 객체의 프로퍼티 
        - arguments 프로퍼티 : arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회가능한 유사 배열 객체이다. 함수 내부에서 지역변수처럼 사용됨, 함수 외부에서는 사용할 수 없음 
        arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용된다. arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 실제 배열이 아닌 유사배열객체이다 
        유사배열 객체 = length 프로퍼티를 가진 객체, 배열 메소드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해야함
        - caller 프로퍼티 = 자신을 호출한 함수
        - length 프로퍼티 = 함수 정의 시 작성된 매개변수 갯수
        - name 프로퍼티 : 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.
        - __proto__ 접근자 프로퍼티 : 프로토타입 객체란 프로토타입 기반 객체 지향 프로그래밍의 근간을 이루는 객체로서 객체간의 상속을 구현하기 위해 사용된다, 다른 객체에 공유 프로퍼티를 제공하는 객체 
        - prototype 프로퍼티 : 함수 객체만이 소유하는 프로퍼티이다. 일반 객체에는 prototype 프로퍼티가 없다.
    23-9) 함수의 다양한 형태 
        - 즉시 실행 함수 : 최초 한번만 호출되며 다시 호출할 수 없음, 초기화 처리 등에 사용 
        - 내부 함수 : 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다. 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
        - 재귀함수 : 자기 자신을 호출하는 함수, 재귀 함수는 자신을 무한히 연쇄 호출하므로 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. 
        - 콜백 함수 : 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수

    24. 타입체크 
        - typeof : 피연산자의 데이터 타입을 문자열로 반환한다
        - Object.prototype.toString : 객체를 나타내는 문자열을 반환한다 
        - sum 함수 
        - instanceof : 객체의 상속 관계
        - 유사 배열 객체 : Array.isArray 메소드를 사용, 유사 배열 객체는 length 프로퍼티가 있으므로 순회할 수 있으며 call, apply 함수를 사용하여 배열의 메소드를 사용할 수도 있다.
          유사배열 인지 체크하려면 length 프로퍼티를 갖는지 length 프로퍼티의 값이 정상적인 값인지 체크해야한다. 

    25. 프로토타입 
        자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 프로토타입 객체 또는 줄여서 프로토타입이라한다
        [[Prototype]]의 값은 null 또는 객체이며 상속을 구현하는데 사용된다. [[Prototype]] 객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다. 하지만 set 액세스는 허용되지 않는다. 
         __proto__ accessor property로 접근 -> Object.getPrototypeOf가 호출 -> 반환
        25-1) [[Prototype]] vs prototype 프로퍼티 : 모든 객체는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯을 갖으며 상속을 위해 사용된다.
            - [[Prototype]] : 함수를 포함한 모든 객체가 갖고 있는 인터널 슬롯/ 부모 역할을 하는 프로토타입 객체를 가리키며 function.prototype을 가리킨다
        25-2) prototype 프로퍼티 : 함수 객체만 가지고 있는 프로퍼티
        25-3) constructor 프로퍼티 : 객체의 입장에서 자신을 생성한 객체

        25-4) prototype chain : 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.
            - 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인
            - 생성자 함수로 생성된 객체의 프로토타입 체인 : 어떠한 방식으로 함수 객체를 생성하여도 모든 함수 객체의 prototype 객체는 Function.prototype이다. 
        25-5) 프로토타입 객체의 확장 : 일반 객체와 같이 프로퍼티를 추가/삭제할 수 있다.
        25-6) 원시 타입(primitive data type)의 확장 : String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 원시 타입, 객체 모두 메소드를 사용할 수 있다.
        25-7) 프로토타입 객체의 변경

        25-8) 프로토타입 체인 동작 조건 : 객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작한다.
        
    26. 스코프 = 유효범위 : 참조대상 식별자를 찾아내기 위한 규칙 , 모든 변수는 스코프를 갖는다. 
        26-1) 스코프의 구분 : 전역스코프(global scope), 지역스코프(local scope or function level scope) 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.
        - 변수는 선언 위치(전역 또는 지역)에 의해 스코프를 가지게 된다. 즉, 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수이고, 지역(자바스크립트의 경우 함수 내부)에서 선언된 변수는 지역 스코프를 갖는 지역 변수가 된다.
        - 자바스크립트 스코프의 특징 : 함수 레벨 스코프(function-level scope) :  let keyword를 사용하면 블록 레벨 스코프를 사용할 수도 있음
        26-2) 전역 스코프(Global scope) : var 키워드로 선언한 전역 변수는 전역 객체(Global Object) window의 프로퍼티이다.
            자바스크립트는 다른 C-family language와는 달리 특별한 시작점이 없으며 코드가 나타나는 즉시 해석되고 실행된다.
        26-3) 비 블록 레벨 스코프(Non block-level scope)
            자바스크립트는 블록 레벨 스코프를 사용하지 않으므로 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 모두 전역 스코프을 갖게된다.
        26-4) 함수 레벨 스코프(Function-level scope) : 함수 내에서 선언된 매개변수와 변수는 함수 외부에서는 유효하지 않다. 내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있다. 
        26-5) 렉시컬 스코프 = 정적스코프 : 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정/ 함수를 선언한 시점에 상위 스코프가 결정됨 

        26-6) 암묵적 전역 : 전역 객체의 프로퍼티가 되어 전역 변수처럼 동작하는 것 
        26-7) 최소한의 전역변수 사용: 전역변수 객체 하나를 만들어 사용하는 것
        26-7) 즉시실행함수를 이용한 전역변수 사용 억제
    
    27. 보다 안정적인 자바스크립트 개발 환경을 위한 strict mode
        개발자의 의도와는 상관없이 자바스크립트 엔진이 생성한 암묵적 전역 변수는 오류를 발생시키는 원인이 될 가능성이 크다. 반드시 var, let, const 키워드를 사용하여 변수를 선언한 다음 변수를 사용해야 한다.
        -> ES5부터 strict mode가 추가
        - strcit mode의 적용 : 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 추가 
        * 전역에 strict mode를 적용하는 것은 피하자. -> 전역에 적용하게 되면 스크립트<script></script> 단위로 적용된다 -> 스크립트 단위로 적용되면 다른 스크립트에 영향을 주지 않고 자신의 스크립트에 한정되어 적용된다 
        * 함수 단위로 strict mode를 적용하는 것도 피하자.
        즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용하는 것이 가장 바람직한 사용 방법
            27-1) strict mode가 발생시키는 에러 
            - 암묵적 전역변수 : 선언하지 않은 변수를 참조하면 ReferenceError가 발생
            - 변수, 함수, 매개변수의 삭제 delete
            - 매개변수 이름의 중복 = 중복된 함수 파라미터 이름 사용
            - with 문의 사용 
            - 일반 함수에서의 this 사용 : 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문

    28. 함수 호출 방식에 의해 결정되는 this
        자바스크립트의 함수는 호출될 때 매개변수로 전달되는 인자값 이외에 arguments 객체와 this를 암묵적으로 전달 받는다.
        자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. -> 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
        28-1) 함수 호출 : 전역객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미
              기본적으로 this는 전역객체에 바인딩 (내부함수, 외부함수, 콜백함수의 경우에도 마찬가지로 this는 전역객체에 바인딩된다)
        28-2) 메소드 호출 : 함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩된다 (프로토타입 객체도 마찬가지)
       
        28-3) 생성자 함수 호출 : 자바스크립트의 생성자 함수는 객체를 생성하는 역할, 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다. 일반 함수와의 혼란을 방지하기 위해 일반적으로 생성자 함수명은 첫문자를 대문자로 기술한다.
            - 생성자 함수 동작 방식 
                - 빈 객체 생성 및 this 바인딩 : 생성자 함수의 코드가 실행되기 전 빈 객체가 생성된다. 생성자 함수 내에서 사용되는 this는 이 빈 객체를 가리킨다. 빈 객체는 새성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다. 
                - this 를 통한 프로퍼티 생성: 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있다. this는 새로운 객체를 가리키므로 this를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가된다 
                - 생성된 객체 반환 : 반환문이 없는 경우 -> this에 바인딩된 새로 생성한 객체가 반환/ this를 반환해도 결과는 같다 
                                    반환문이 this가 아닌 다른 객체를 명시적으로 반환하는 경우 -> this가 아닌 해당 객체가 반환, 생성자 함수는 반환문을 명시적으로 사용하지 않는다 
            - 객체 리터럴 방식과 생성자 함수 방식의 차이 :  프로토타입 객체([[Prototype]])에 있다. 
                -객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 Object.prototype 이다 
                -생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 Person.prototype이다 
            - 생성자 함수에 new 연산자를 붙이지 않고 호출할 경우 : 함수 Person 내부의 this는 전역객체를 가리키므로 name은 전역변수(window)에 바인딩된다. 
            new와 함께 생성자 함수를 호출하는 경우에 암묵적으로 반환하던 this도 반환하지 않으며, 반환문이 없으므로 undefined를 반환하게 된다.
            -> new 연산자와 함께 생성자 함수를 호출하는 경우, 생성자 함수 내부의 this는 생성자 함수에 의해 생성된 인스턴스를 가리킨다. 
            - apply/call/bind 호출
            this를 특정 객체에 명시적으로 바인딩하는 방법 = Function.prototype.apply, Function.prototype.call 메소드의 사용 = 모든 함수 객체의 프로토타입 객체인 Function.prototype 객체의 메소드이다. 
            apply() 메소드를 호출하는 주체는 함수이며 apply() 메소드는 this를 특정 객체에 바인딩할 뿐 본질적인 기능은 함수 호출이다.   
            apply() 메소드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우이다. 
    
    29. 클로저 :  “함수가 선언됐을 때의 렉시컬 환경(Lexical environment)”
        자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부 함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저라고 부른다 
        클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수이다. 
        클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수

        - 클로저에 의해 참조되는 외부함수의 변수를 자유변수(Free variable)라고 한다. / 클로저란 자유변수에 엮여있는 함수 
        내부함수가 외부함수에 있는 변수의 복사본이 아니라 실제 변수에 접근한다. 

        29-1) 클로저의 활용 
            - 상태유지 : 현재 상태를 기억하고 변경된 최신 상태를 유지함 
            - 전역변수 사용의 억제 
            - 정보의 은닉 : 프로퍼티 public, 변수 private 키워드 흉내 가능 
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
console.log(string.match(/l/g).length); // 3 *질문*g는 무엇? global

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
[] + ''             // "" *질문* 
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

delete person; //*질문* 
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

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}

// 함수의 호출
square(2); // 4

// 함수 표현식
var square = function (number) {
    return number * number;
};

// 기명 함수 표현식
var foo = function multiply(a, b) {
    return a * b;
};

// 익명 함수 표현식
var bar = function (a, b) {
    return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

//function 생성자 함수
new Function(arg1, arg2, ...argN, functionBody)

var square = new Function('number', 'return number * number');
console.log(square(10)); // 100

//함수호이스팅
var res = square(5);

function square(number) {
    return number * number;
}

var res = square(5); // TypeError: square is not a function

var square = function (number) {
    return number * number;
}

// 1. 무명의 리터럴로 표현이 가능하다
// 2. 변수나 자료 구조에 저장할 수 있다
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
    return --num;
};

var predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    var num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

var foo = function (p1, p2) {
    console.log(p1, p2);
};

foo(1); // 1 undefined

function foo(primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0

//함수의 반환
function calculateArea(width, height) {
    var area = width * height;
    return area; // 단일 값 반환
}
console.log(calculateArea(3, 5)); // 15
console.log(calculateArea(8, 5)); // 40

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume]; // 복수 값 반환
}

console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18

//함수 프로퍼티 
function square(number) {
    return number * number;
}
square.x = 10;
square.y = 20;

console.log(square.x, square.y);

//arguments 프로퍼티 
//매개변수의 갯수보다 인수를 적게 전달했을 때(multiply(), multiply(1)) 인수가 전달되지 않은 매개변수는 undefined으로 초기화된다.
//매개변수의 갯수보다 인수를 더 많이 전달한 경우, 초과된 인수는 무시된다.
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

multiply(); //{}
multiply(1); // { '0': 1 }
multiply(1, 2);// { '0': 1, '1': 2 } 
multiply(1, 2, 3); //{ '0': 1, '1': 2, '2': 3 }

function sum() {
    var res = 0;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6

//caller 프로퍼티 
function foo(func) {
    var res = func();
    return res;
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // -> 결과 확인 재확인 필요 

function foo() { }
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function baz(x, y) {
    return x * y;
}
console.log(baz.length); // 2

// 기명 함수 표현식
var namedFunc = function multiply(a, b) {
    return a * b;
};
// 익명 함수 표현식
var anonymousFunc = function (a, b) {
    return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''

// __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입 객체에 접근할 수 있다.
// 객체 리터럴로 셍성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log({}.__proto__ === Object.prototype); // true

// 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, '__proto__'));
// undefined

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true

// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype'));
// {value: {…}, writable: true, enumerable: false, configurable: false}

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, 'prototype'));
// undefined

// 기명 즉시 실행 함수
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// SyntaxError: Function statements require a function name
// 함수선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가된다.
function () {
    // ...
}; ();

// 따라서 즉시 실행 함수는 소괄호로 감싸준다.
(function () {
    // ...
}());

(function () {
    // ...
})();

function parent(param) {
    var parentVar = param;
    function child() {
        var childVar = 'lee';
        console.log(parentVar + ' ' + childVar); // Hello lee
    }
    child();
    console.log(parentVar + ' ' + childVar);
    // Uncaught ReferenceError: childVar is not defined
}
parent('Hello');

function sayHello(name) {
    var text = 'Hello ' + name;
    var logHello = function () { console.log(text); }
    logHello();
}

sayHello('lee');  // Hello lee
logHello('lee');  // logHello is not defined

setTimeout(function () {
    console.log('1초 후 출력된다.');
}, 1000);

//콜백 함수 
function doSomething() {
    var name = 'Lee';

    setTimeout(function () {
        console.log('My name is ' + name);
    }, 100);
}

doSomething(); // My name is Lee

var obj = new Object();
obj.toString(); // [object Object]

function sum(a, b) {
    // a와 b가 number 타입인지 체크
    if (getType(a) !== 'Number' || getType(b) !== 'Number') {
        throw new TypeError('파라미터에 number 타입이 아닌 값이 할당되었습니다.');
    }
    return a + b;
}

console.log(sum(10, 20));   // 30
console.log(sum('10', 20)); // TypeError

function Person() { }
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

var student = {
    name: 'Lee',
    score: 90
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')); // true

console.dir(student);

function Person(name) {
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.

function Person(name) {
    this.name = name;
}

var foo = new Person('Lee');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);

var str = 'test';
console.log(typeof str);                 // string
console.log(str.constructor === String); // true
console.dir(str);                        // test

var strObj = new String('test');
console.log(typeof strObj);                 // object
console.log(strObj.constructor === String); // true
console.dir(strObj);
// {0: "t", 1: "e", 2: "s", 3: "t", length: 4, __proto__: String, [[PrimitiveValue]]: "test" }

console.log(str.toUpperCase());    // TEST
console.log(strObj.toUpperCase()); // TEST

//원시타입의 확장 
//원시 타입은 객체가 아니므로 프로퍼티나 메소드를 직접 추가할 수 없다.
var str = 'test';

// 에러가 발생하지 않는다.
str.myMethod = function () {
    console.log('str.myMethod');
};

str.myMethod(); // Uncaught TypeError: str.myMethod is not a function

//String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 원시 타입, 객체 모두 메소드를 사용할 수 있다.
var str = 'test';

String.prototype.myMethod = function () {
    return 'myMethod';
};

console.log(str.myMethod());      // myMethod
console.log('string'.myMethod()); // myMethod
console.dir(String.prototype);

function Person(name) {
    this.name = name;
}

Person.prototype.gender = 'male'; // ①

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender); // ① 'male'
console.log(bar.gender); // ① 'male'

// 1. foo 객체에 gender 프로퍼티가 없으면 프로퍼티 동적 추가
// 2. foo 객체에 gender 프로퍼티가 있으면 해당 프로퍼티에 값 할당
foo.gender = 'female';   // ②

console.log(foo.gender); // ② 'female'
console.log(bar.gender); // ① 'male'

var x = 'global';
function foo() {
    var x = 'function scope';
    console.log(x);
}

foo(); // ? function scope
// 변수  x 중복 선언
console.log(x); // ? global

var x = 0;
{
    var x = 1;
    console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
    let y = 1;
    console.log(y); // 1
}
console.log(y);   // 0

var global = 'global';

function foo() {
    var local = 'local';
    console.log(global);
    console.log(local);
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined

//비 블록레벨 스코프로인해 x는 전역변수
if (true) {
    var x = 5;
}
console.log(x);

var a = 10;     // 전역변수

(function () {
    var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined

//전역변수 x와 지역변수 x가 중복 선언
//변수명이 중복된 경우, 지역변수를 우선하여 참조한다.
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();          // local
console.log(x); // global

//중첩스코프는 가장 인접한 지역을 우선하여 참조한다 
var foo = function () {

    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;

        // 이 시점에서 a는 3, b는 7, c는 11

        a += b + c;

        // 이 시점에서 a는 21, b는 7, c는 11

    };

    // 이 시점에서 a는 3, b는 5, c는 not defined

    bar();

    // 이 시점에서 a는 21, b는 5

};

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // ? 1
bar(); // ? 1

var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 식별자
    y = 20;
    // 에러안남 -> 선언하지 않은 식별자에 값을 할당하면 전역 객체의 프로퍼티가 되기 때문, window.y = 20으로 해석
    console.log(x + y);
}

foo(); // 30

// 전역 변수 x는 호이스팅이 발생한다.
console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 프로퍼티인 y는 호이스팅이 발생하지 않는다.
console.log(y); // ReferenceError: y is not defined

var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 변수
    y = 20;
    console.log(x + y);
}

foo(); // 30

var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 변수
    y = 20;
    console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다. 
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined
// window 는 browser-side라서 browser 통해서 열어야 가능, 콘솔창에서는 변수 미정의로 에러 발생 

//전역변수 객체를 만들어 전역 변수 사용을 최소화 한다 
var MYAPP = {};

MYAPP.student = {
    name: 'Lee',
    gender: 'male'
};

console.log(MYAPP.student.name);

// 즉시실행 함수에 strict mode 적용
(function () {
    'use strict';
    // Do something...
}());

function square(number) {

    console.log(arguments);
    console.log(this);

    return number * number;
}

square(2);

var foo = function () {
    console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar

// in browser console
this === window // true

// in Terminal
node
this === global // true

var obj1 = {
    name: 'Lee',
    sayName: function () {
        console.log(this.name);
    }
}

var obj2 = {
    name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();

//생성자 함수 
function Person(name) {
    this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person { name: 'Lee' }

//new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않음 
var you = Person('Kim');
console.log(you); // undefined

function Person(name) {
    // 생성자 함수 코드 실행 전 --- 1
    this.name = name;  // --- 2
    // 생성된 함수 반환 --- 3
}

var me = new Person('Lee');
console.log(me.name);

//객체 리터럴 방식
var foo = {
    name: 'foo',
    gender: 'male'
}

console.dir(foo);

//생성자 함수 방식
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

var me = new Person('Lee', 'male');
console.dir(me);

var you = new Person('Kim', 'female');
console.dir(you);

var Person = function (name) {
    this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }

function convertArgToArray() {
    console.log(arguments);

    // arguments 객체를 배열로 변환 
    // slice: 배열의 특정 부분에 대한 복사본 생성
    var arr = Array.prototype.slice.apply(arguments); // argumets.slice
    //  “Array.prototype.slice() 메소드를 호출하라. 단 this는 arguments 객체로 바인딩하라”
    // var arr = [].slice.apply(arguments);

    console.log(arr);
    return arr;
}

convertArgToArray(1, 2, 3);

// 콜백함수 내부의 this를 콜백함수를 호출하는 함수 내부의 this와 일치시켜주어야 한다 
function Person(name) {
    this.name = name;
}

Person.prototype.doSomething = function (callback) {
    if (typeof callback == 'function') {
        // --- 1 this는 Person의 객체
        callback();
    }
};

function foo() {
    console.log(this.name); // --- 2 this는 전역 객체 window
}

var p = new Person('Lee');
p.doSomething(foo);  // undefined

// 함수 innerFunc가 함수 outerFunc의 내부에 선언된 내부함수이므로 함수 innerFunc는 자신이 속한 렉시컬 스코프(전역, 함수 outerFunc, 자신의 스코프)를 참조할 수 있다. 
function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    innerFunc();
}

outerFunc(); // 10

function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 *  하지만 이미 life-cycle이 종료되어 실행 컨텍스트 스택에서 제거된 함수 outerFunc의 지역변수 x가 동작한다.
 */
var inner = outerFunc();
inner(); // 10

function Counter() {
    // 생성자 함수 Counter는 increase, decrease 메소드를 갖는 인스턴스를 생성한다. -> 클로저 
    // 카운트를 유지하기 위한 자유 변수
    var counter = 0;

    // 클로저
    this.increase = function () {
        return ++counter;
    };

    // 클로저
    this.decrease = function () {
        return --counter;
    };
}

const counter = new Counter();
// 생성자 함수 Counter의 변수 counter는 this에 바인딩된 프로퍼티가 아니라 변수이다. 
//-> counter가 this에 바인딩된 프로퍼티라면 외부에서 접근이 가능한 public 프로퍼티가 되지만 생성자 함수 Counter 내에서 선언된 변수 counter는 생성자 함수 Counter 외부에서 접근할 수 없다. = private 키워드 흉내 가능 

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0

var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = (function (id) { // 2.  i를 인자로 전달받고 매개변수 id에 할당한 후 내부 함수를 반환하고 life-cycle이 종료
        // 이때 매개변수 id는 자유변수가됨!
        return function () {
            return id; // 3. 배열 arr에 할당된 함수는 id를 반환한다. 
        };
    }(i)); // 1. 즉시실행함수에 의해 함수 반환
}

for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]());
}
