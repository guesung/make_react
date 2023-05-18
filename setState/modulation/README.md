# useState - 모듈화

- 여전히 \<body>에는 \<div id="app">\</div>만 존재
- 브라우저 모듈

  `\<script src="./src/app.js" type="module">` : 스크립트가 모듈이라는 것을 속성을 통해 명시

  - 스크립트 파일이 모듈로서 동작
  - 내보내기(export)와 가져오기(import)를 사용하여 다른 모듈과 상호작용 가능
  - 기본적으로 strict mode(엄격 모드)로 실행되며, 다른 스크립트와 전역 스코프를 공유하지 않음

## 코드 분석

```js
// src/app.js
import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Items($app);
  }
}

new App();
```

- `import Items from "./components/Items.js";` : Items.js 모듈을 가져옴
- `new Items($app);` : Items 클래스의 인스턴스를 생성. 인자로 $app을 전달
- index.html에서 `\<script src="./src/app.js" type="module">`을 통해 모듈로서 동작

```js
// src/components/Items.js
export default class Items {}
```

```js
// src/core/Component.js
export default class Component {}
```

- Component.js와 Item.js : 이전에 만든 Component 클래스를 모듈로 분리

---

### Reference

[브라우저 모듈과 ESM](https://eyabc.github.io/Doc/dev/core-javascript/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%20%EB%AA%A8%EB%93%88.html)
