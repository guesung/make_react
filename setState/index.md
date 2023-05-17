# useState

이 프로젝트는 HTML, CSS, JavaScript를 사용하여 웹 페이지에 아이템을 동적으로 추가하는 기능을 제공합니다. 사용자는 "추가" 버튼을 클릭하여 목록에 새 아이템을 추가할 수 있습니다.

## 코드 설명

### HTML

HTML에서는 페이지 레이아웃을 설정하고, 아이템이 추가될 위치를 지정하는 `div` 요소를 준비합니다.

```html
<div id="app"></div>
```

### JavaScript

JavaScript에서는 페이지에 동적인 기능을 추가합니다.

#### 상태(state) 설정

`state`라는 객체를 사용하여 웹 페이지의 상태를 관리합니다. 초기 상태에서는 'item1', 'item2', 'item3', 'item4'의 네 개의 아이템이 있습니다.

```javascript
let state = {
  items: ["item1", "item2", "item3", "item4"],
};
```

#### 렌더링 함수(render)

`render` 함수는 상태를 기반으로 웹 페이지를 렌더링합니다. 이 함수는 상태의 'items' 배열을 순회하면서 각 아이템을 `<li>` 태그로 감싸고, 이를 `<ul>` 태그로 감싸서 'app' `div`에 추가합니다. 또한, "추가" 버튼도 만듭니다.

```javascript
const render = () => {
  const { items } = state;
  $app.innerHTML = `
  <ul>
    ${items.map(item => `<li>${item}</li>`).join('')}
  </ul>
  <button id="append">추가</button>
`;
```

#### 상태 변경 함수(setState)

`setState` 함수는 상태를 변경하고, 변경된 상태로 페이지를 다시 렌더링합니다. "추가" 버튼이 클릭되면 이 함수가 호출되어 'items' 배열에 새 아이템을 추가합니다.

```javascript
const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};
```

#### "추가" 버튼의 클릭 이벤트 리스너

"추가" 버튼에 클릭 이벤트 리스너를 추가하여, 버튼이 클릭될 때마다 'items' 배열에 새 아이템을 추가하도록 합니다.

```javascript
document.querySelector("#append").addEventListener("click", () => {
  setState({ items: [...items, `item${items.length + 1}`] });
});
```

마지막으로, 페이지가 로드될 때 `render` 함수를 호출하여 초기 상태를 렌더링합니다.

```javascript
render();
```

이 코드를 실행하면 웹 페이지에 아이템 목록과 "추가" 버튼이 표시되고, "추가" 버튼을 클릭할 때마다 새 아이템이 목록에 추가됩니다.
