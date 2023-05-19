# useState - 이벤트 처리

```js
this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", ({ target }) => {
    const items = [...this.state.items];
    items.splice(target.dataset.index, 1);
    this.setState({ items });
  });
});
```

- deleteBtn추가
