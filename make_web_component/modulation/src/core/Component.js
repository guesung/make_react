export default class Component {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent(); // event를 각각의 하위 요소가 아니라 component의 target 자체에 등록
  }
  // constructor 즉, Component가 생성될 때 setup, render, setEvent를 실행한다.
  setup() { };
  template() { return ''; }
  setEvent() { }
  render() {
    this.$target.innerHTML = this.template();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  // setEvent에서 사용
}