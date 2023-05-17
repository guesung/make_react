# useState (class 추상화)

- 추상화 : 객체지향의 특징 중 하나로, 객체의 `공통적인 특징`을 뽑아내어 `하나의 클래스`로 만드는 것"을 의미합니다.

이 프로젝트는 HTML, CSS, JavaScript를 사용하여 웹 페이지에 아이템을 동적으로 추가하는 기능을 제공합니다. 이전의 함수형 프로그래밍 방식에서 한 단계 발전하여, 객체 지향 프로그래밍(OOP)을 도입하여 보다 체계적인 코드 구조를 가지고 있습니다. 사용자는 "추가" 버튼을 클릭하여 목록에 새 아이템을 추가할 수 있습니다.

## 코드 설명

### HTML

HTML에서는 페이지 레이아웃을 설정하고, 아이템이 추가될 위치를 지정하는 `div` 요소를 준비합니다.

```html
<div id="app"></div>
```

### JavaScript

JavaScript에서는 페이지에 동적인 기능을 추가합니다.

#### Component 클래스

`Component`라는 기본 클래스를 만들어, 이를 상속받아 새로운 컴포넌트를 만들 수 있도록 합니다. 이 클래스는 렌더링, 이벤트 설정, 상태 관리 등의 기본적인 기능을 제공합니다.

```javascript
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
```

#### App 클래스

`App` 클래스는 `Component` 클래스를 상속받아, 실제로 웹 페이지에 동적인 기능을 추가하는 역할을 합니다.

##### setup 메서드

`setup` 메서드에서는 초기 상태를 설정합니다. 초기 상태에서는 'item1'과 'item2'의 두 개의 아이템이 있습니다.

```javascript
setup() {
  this.state = { items: ['item1', 'item2'] };
}
```

##### template 메서드

`template` 메서드는 상태를 기반으로 HTML 코드를 생성합니다. 이 메서드는 상태의 'items' 배열을 순회하면서 각 아이템을 `<li>` 태그로 감싸고, 이를 `<ul>` 태그로 감싸서 반환합니다. 또한, "추가" 버튼도 함께 반환합니다.

```javascript
template() {
  const { items } = this.state;
  return `
  <ul>
    ${items.map(item => `<li>${item}</li>`).join('')}
  </ul>
  <button>추가</button>
`
}
```

##### setEvent 메서드

`setEvent` 메서드는 "추가" 버튼에 클릭 이벤트 리스너를 추가합니다. 버튼이 클릭될 때마다 'items' 배열에 새 아이템을 추가하도록 합니다.
