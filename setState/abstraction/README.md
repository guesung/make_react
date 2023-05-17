# useState - 추상화

## 추상화란?

- 추상화(Abstraction) : 사물이나 표상을 어떤 성질, 공통성, 본질에 착안하여 그것을 추출하여 파악하는 것
- 즉, 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것을 의미
- 보통 class를 만들 때 사용

## 코드 분석

```html
<script>
  class Component {
    $target;
    state;
    constructor($target) {
      this.$target = $target;
      this.setup();
      this.render();
    }
    setup() {}
    template() {
      return "";
    }
    render() {
      this.$target.innerHTML = this.template();
      this.setEvent();
    }
    setEvent() {}
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.render();
    }
  }

  class App extends Component {
    setup() {
      this.state = { items: ["item1", "item2"] };
    }
    template() {
      const { items } = this.state;
      return `
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button>추가</button>
    `;
    }

    setEvent() {
      this.$target.querySelector("button").addEventListener("click", () => {
        const { items } = this.state;
        this.setState({ items: [...items, `item${items.length + 1}`] });
      });
    }
  }

  new App(document.querySelector("#app"));
</script>
```

1. Component라는 클래스를 만듦
2. Component를 상속받는 App클래스를 만듦
3. App클래스의 인스턴스를 만들 때, `document.querySelector("#app")`을 인자로 넣음
4. App클래스의 `constructor`가 실행됨
   - Component클래스의 constructor를 실행
     - setup()과 render()를 실행함
       - setup()은 state를 초기화함
       - render()는 template()와 setEvent()를 실행
         - template()은 state를 받아서 html을 반환함
         - setEvent()는 버튼에 이벤트 리스너를 추가함

### 위 코드의 한계

1. 모듈화(컴포넌트별 묶기)가 되어 있지 않음
   - 추후에 다른 컴포넌트를 추가하게 되면, App클래스의 코드를 수정해야 함
   - 즉, App클래스는 다른 컴포넌트에 의존적임

### Reference

[객체 지향 프로그래밍의 4가지 특징ㅣ추상화, 상속, 다형성, 캡슐화](https://www.codestates.com/blog/content/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%ED%8A%B9%EC%A7%95)
