# useState - 이벤트 버블링

- 이벤트 버블링 : 이벤트가 발생한 요소에서 시작해 부모 요소로 전달되는 특성

## 코드 분석

```js
this.$target.addEventListener("click", ({ target }) => {
  const items = [...this.state.items];
  if (this.classList.contains("addBtn")) {
    this.setState({ items: [...items, `item${items.length + 1} `] });
  }
  if (this.classList.contains("deleteBtn")) {
    items.splice(target.dataset.index, 1);
    this.setState({ items });
  }
});
```

- 이벤트 버블링을 이용하여 이벤트를 처리한다.
- 이벤트가 발생한 요소의 클래스를 확인하여 이벤트를 처리한다.

### Reference

[이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임까지](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81---event-bubbling)
