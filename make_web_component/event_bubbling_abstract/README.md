# useState - 이벤트 버블링 추상화

이벤트 버블링을 통한 등록 과정을 메소드로 만들기

```js
// src/core/Component.js
  addEvent (eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ];
    this.$target.addEventListener(eventType, event => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    })
  }
```

- `addEventListener(eventType, callback)`을 이용해 이벤트를 등록한다.
  - 인자로 받은 eventType과 callback을 addEventListener의 매개변수로 넘겨준다.

```js
// src/components/Items.js
setEvent() { // render()에서 실행
    this.addEvent('click', '.addBtn', ({ target }) => {
      const { items } = this.state;
      this.setState({ items: [...items, `items${items.length + 1}`] })
    });
    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const { items } = [...this.state.items];
      items.splice(target.dataset.index, 1); // target.dataset.index요소 제거
      this.setState({ item })
    })
  }
```

- src/core/Component.js에서 만든 추상화 함수 addEvent를 사용한다.
- eventType으로 click, selector로 `.addBtn` 혹은 `.deleteBtn`, callback함수로 이벤트가 발생했을 때 실행할 함수를 넘겨준다. 이 때, `this.setState(state)`를 실행하여 상태를 변경하여 render한다.
