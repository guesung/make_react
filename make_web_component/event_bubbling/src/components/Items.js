import Component from "../core/Component.js";

export default class Items extends Component {
  // 여기서 this는 Items 클래스를 가리킨다. -> $app (document.querySelector('#app'))
  setup() {
    this.state = { items: ['item1', 'item2'] };
  }
  template() {
    const { items } = this.state;
    return `
      <ul>
        ${items.map((item, key) => `<li>${item}
        <button class='deleteBtn' data-index="${key}">삭제</button>
        </li > `).join('')}
      </ul>
      <button class='addBtn'>추가</button>
    `
  }

  setEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      const items = [...this.state.items]
      if (this.classList.contains('addBtn')) {
        this.setState({ items: [...items, `item${items.length + 1} `] });
      }
      if (this.classList.contains('deleteBtn')) {
        items.splice(target.dataset.index, 1)
        this.setState({ items })
      }
    })

    this.$target.querySelector('.addBtn').addEventListener('click', () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1} `] });
    });
    this.$target.querySelectorAll('.deleteBtn').forEach(deleteBtn => {
      deleteBtn.addEventListener('click', ({ target }) => {
        const items = [...this.state.items]
        items.splice(target.dataset.index, 1)
        this.setState({ items })
      })
    })
  }

}