# useState

## useState

- state : 컴포넌트가 가질 수 있는 상태
- 렌더링이 일어나는 조건 중 하나

  1.  `state가 변경되었을 때`
  2.  props가 변경되었을 때
  3.  부모 컴포넌트가 렌더링되었을 때
  4.  forceUpdate()가 실행되었을 때

- 예시 코드

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const buttonClick = (e) => {
    setNames((prevState) => {
      console.log("등록하기 전의 names값", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={input} onChange={inputChange} />
        <button onClick={buttonClick}>update</button>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </header>
    </div>
  );
}

export default App;
```

## 코드 분석

```html
<div id="app"></div>
```

- html태그는 \<div id='app'>만 존재

```html
<script>
  const $app = document.querySelector("#app");

  let state = {
    items: ["item1", "item2", "item3", "item4"],
  };

  const render = () => {
    const { items } = state;
    $app.innerHTML = `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button id="append">추가</button>
    `;
    document.querySelector("#append").addEventListener("click", () => {
      setState({ items: [...items, `item${items.length + 1}`] });
    });
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    render();
  };

  render();
</script>
```

1. document.querySelector를 이용하여 $app에 넣음 => DOM을 조작하기 위함
2. render함수

- state를 items로 복사함 (비구조화 할당, 불변성을 위함)
- $app의 innerHTML을 변경 : items의 각 요소를 li태그로 감싸서 ul태그에 넣음
- append버튼을 추가하고, 클릭시 setState함수를 실행
- 처음에는 \<div id='app'> 요소 하나였지만, 그 안에 \<ul>과 \<button>이 추가됨

3. setState함수 : state를 새로운 state로 변경하고, render함수를 실행

### 위 코드의 한계

1. render()이 처음에 실행됨 -> ul,li, button이 추가됨 -> 각 버튼에 이벤트 리스너를 추가함
   - 추가할 때마다 모든 버튼에 다시 이벤트 리스너를 추가함
2. 추상화(함수별 묶기)가 되어 있지 않음
3. 모듈화(컴포넌트별 묶기)가 되어 있지 않음

### Reference

[useState 사용법 및 예제](https://itprogramming119.tistory.com/entry/React-useState-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C)
