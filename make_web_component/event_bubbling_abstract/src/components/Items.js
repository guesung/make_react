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

}