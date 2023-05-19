import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector('#app');
    new Items($app); // Items 컴포넌트를 생성하면서 $app을 전달 -> this로 사용
  }
}

new App();