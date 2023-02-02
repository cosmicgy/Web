# 브라우저 이벤트 소개
## 자주 사용되는 유용한 DOM 이벤트

- 마우스 이벤트 : click, contextmenu, mouseover,mouseout, mousedown, mouseup, mousemove
- 폼 요소 이벤트 : submit, focus
- 키보드 이벤트 : keydown, keyup
- 문서 이벤트 : DOMContentLoaded
- css이벤트 : transitioned

<br>

## 이벤트 핸들러

이벤트에 반응하려면 이벤트가 발생했을 때 실행되는 함수인 핸들러(handler) 를 할당해야한다.

1. HTML 속성

HTML안의 `on<event>` 속성에 핸들러를 할당할 수 있다. `input`태그의 `onclick`속성에 `click`핸들러를 할당하는 것

```html
<input value="클릭해 주세요." onclick="alert('클릭!')" type="button">
```

`onclick="alert("클릭!")"`과 같이 속성값 내부에 또 큰따옴표를 쓰면 코드가 작동하지 않는다. 만약 코드가 길다면, 함수를 만들어서 이를 호출하는 방법이 좋다.

```js
<script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert(`토끼 ${i}마리`);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="토끼를 세봅시다!">
```

HTML 속성은 대·소문자를 구분하지 않기 때문에, `ONCLICK`은 `onClick`이나 `onCLICK`과 동일하게 작동한다. 하지만 속성값은 대개 `onclick` 같이 소문자로 작성한다.

<br>

2. DOM 프로퍼티

DOM프로퍼티 `on<event>`를 사용해도 핸들러를 할당할 수 있다.

```html
<input id="elem" type="button" value="클릭해 주세요.">
<script>
  elem.onclick = function() {
    alert('감사합니다.');
  };
</script>
```

`onclick` 프로퍼티는 단 하나밖에 없기 때문에, 복수의 이벤트 핸들러를 할당할 수 없다. 아래 예시와 같이 핸들러를 하나 더 추가하면, 기존 핸들러는 덮어씌워진다.

```js
<input type="button" id="elem" onclick="alert('이전')" value="클릭해 주세요.">
<script>
  elem.onclick = function() { // 기존에 작성된 핸들러를 덮어씀
    alert('이후'); // 이 경고창만 보임
  };
</script>
```

핸들러를 제거하고 싶다면 `elem.onclick = null` 같이 null을 할당하면 된다.

<br>

3. this로 요소에 접근하기

핸들러 내부에 쓰인 `this`의 값은 핸들러가 할당된 요소이다. 아래 예시의 `this.innerHTML`에서 `this`는 `button`이므로 버튼을 클릭하면 버튼 안의 콘텐츠가 얼럿창에 출력된다.

```html
<button onclick="alert(this.innerHTML)">클릭해 주세요.</button>
```

<br>

### 자주하는 실수

1. 이미 존재하는 함수를 직접 핸들러에 할당하는 예시이다

```js
function sayThanks() {
  alert('감사합니다!');
}

elem.onclick = sayThanks;
```

이때 함수는 `sayThanks`처럼 할당해야 한다. `sayThanks()`를 할당하면 동작하지 않는다. `sayThanks()`를 프로퍼티에 할당하면 함수 호출의 결과(result)값이 할당된다. `sayThanks`가 아무것도 반환하지 않는다면 `onclick` 프로퍼티엔 `undefined`이 할당되므로 이벤트가 원하는 대로 동작하지 않는다.

```js
// 올바른 방법
button.onclick = sayThanks;

// 틀린 방법
button.onclick = sayThanks();
```

하지만 html속성 값에는 괄호가 있어야 한다.

```html
<input type="button" id="button" onclick="sayThanks()">
```

브라우저는 속성값을 읽고, 속성값을 함수 본문으로 하는 핸들러 함수를 만들기 때문에 이런 차이가 발생한다. 브라우저는 `onclick` 프로퍼티에 새로운 함수를 할당한다.

```js
button.onclick = function() {
  sayThanks(); // 속성값
};
```

<br>

2. `setAttribute`로 핸들러를 할당하지 말 것

아래 코드는 동작하지 않는다

```js
// <body>를 클릭하면 에러가 발생합니다.
// 속성은 항상 문자열이기 때문에, 함수가 문자열이 되어버리기 때문입니다.
document.body.setAttribute('onclick', function() { alert(1) });
```

<br>

3. DOM 프로퍼티는 대·소문자를 구분한다.

핸들러 할당 시 `elem.onclick`은 괜찮지만, `elem.ONCLICK`은 안된다

<br>

## addEventListener

HTML 속성과 DOM 프로퍼티를 이용한 이벤트 핸들러 할당 방식엔 근본적인 문제가 있다. 하나의 이벤트에 복수의 핸들러를 할당할 수 없다는 것. 버튼을 클릭하면 버튼을 강조하면서 메시지를 보여주고 싶다고 해 보자. 두 개의 이벤트 핸들러가 필요하다. 하지만 기존 방법으로는 프로퍼티가 덮어씌워 진다는 문제가 있다.

```js
input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // 이전 핸들러를 덮어씀
```

`addEventListener` 와 `removeEventListener` 라는 특별한 메서드를 이용해 핸들러를 관리하면 핸들러를 여러개 할당할 수 있다.

1. 문법

```js
element.addEventListener(event, handler, [options]);
```

- event : 이벤트 이름(예: "click")
- handler : 핸들러 함수
- options : 아래 프로퍼티를 갖는 객체