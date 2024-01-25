## **Hooks를 사용하는 이유?**

함수 컴포넌트에 상태(State)를 추가하려면 어떻게 해야 할까요? 즉, 데이터 변경에 따라 앱이 응답하도록 하려면 어떻게 해야 할까요?

[https://codesandbox.io/embed/usestate-f44lmq?fontsize=14&hidenavigation=1&theme=dark ](https://codesandbox.io/embed/usestate-f44lmq?fontsize=14&hidenavigation=1&theme=dark)

### Hook이란?

함수형 컴포넌트에서 상태와 생명주기 기능을 "걸어놓을" 수 있게 하는 API. 이를 통해 함수형 컴포넌트에서도 상태를 가질 수 있게 되었습니다. `useState`, `useEffect` 등이 React Hooks의 예입니다.

Hook은 마치 우리가 옷을 걸어두는 실제 훅(Hook)과 같습니다.

옷을 걸어둘 때, 우리는 훅을 사용하여 원하는 위치에 원하는 옷을 걸어둘 수 있습니다. 이 훅이 없다면 옷을 제 위치에 걸어둘 방법이 없을 것입니다. 이런 의미에서 프로그래밍의 Hook은 우리가 코드를 "걸어둘" 수 있는 특정 위치를 제공합니다. 이러한 위치에 코드를 걸어둠으로써, 우리는 시스템이나 애플리케이션의 동작에 개입하거나 그 동작을 변경할 수 있게 됩니다.

React의 Hook을 더욱 구체적으로 비유하자면, 마치 각기 다른 목적에 맞는 여러 종류의 훅이 있는 벽에 비유할 수 있습니다. 어떤 훅은 옷을 걸기 위한 것이고, 어떤 훅은 그림을 걸기 위한 것이며, 또 어떤 훅은 열쇠를 걸기 위한 것일 수 있습니다. 이와 같이 React의 각 Hook은 각기 다른 목적과 기능을 가지고 있습니다. 예를 들어 `useState`는 상태 관리를 위한 훅이고, `useEffect`는 사이드 이펙트를 처리하기 위한 훅입니다. 이들 훅을 사용함으로써 우리는 함수형 컴포넌트에서도 원하는 기능을 구현할 수 있게 됩니다.

## React에서 상태(State)란 무엇인가요?

리액트 컴포넌트에는 내장된 `state` 객체가 있습니다. `state` 객체는 컴포넌트에 속하는 속성 값을 저장하는 곳입니다. `state` 객체가 변경되면 컴포넌트가 다시 렌더링됩니다.

### `setState`는 무엇을 하나요?

`setState()`는 컴포넌트의 `state` 객체에 대한 업데이트를 예약합니다. 상태가 변경되면 컴포넌트가 다시 렌더링하여 응답합니다.

### `state`와 `props`의 차이점은 무엇인가요?

[props](https://legacy.reactjs.org/docs/components-and-props.html)(속성에 대한 약어)과 [state](https://legacy.reactjs.org/docs/state-and-lifecycle.html)는 모두 일반 JavaScript 객체입니다. 둘 다 렌더링 결과에 영향을 미치는 정보를 보유하지만, 하나의 중요한 차이점이 있습니다. 즉 `props`는 컴포넌트에 전달되는 반면(함수 매개변수와 유사), `state`는 컴포넌트 내에서 “관리”됩니다(함수 내에서 선언된 변수와 유사).

`props` 대신 `state`를 사용해야 할 때에 대한 자세한 내용은 다음을 참조하십시오:

- [Props vs State ](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
- [ReactJS: Props vs. State ](https://lucybain.com/blog/2016/react-state-vs-pros/)

### Changing *props* and *state*

|                                              | 속성(props) | 상태(state) |
| -------------------------------------------- | ----------- | ----------- |
| 부모 컴포넌트에서 초기값을 가져올 수 있나요? | 예          | 예          |
| 부모 컴포넌트에서 변경할 수 있나요?          | 예          | 아니요      |
| 컴포넌트 내에서 기본값을 설정할 수 있나요?\* | 예          | 예          |
| 내부에서 변경할 수 있나요?                   | 아니요      | 예          |
| 자식 컴포넌트에 초기값을 설정할 수 있나요?   | 예          | 예          |
| 자식 컴포넌트에서 변경할 수 있나요?          | 예          | 아니요      |

서버에서 누군가가 웹사이트 접속을 요청한다.

프론트엔드 개발자가 하는 일: 웹사이트를 브라우저에 보여줘야 하는 파일들을 만든다.

사용자한테 파일들이 도착함.

사용자가 클릭, 마우스를 움직인다, 이벤트를 우리가 만든 파일 위에 한다.

사용자가 클릭, 클릭, 클릭 —> 우리가 만든 파일에 기록이 됨. 클릭한 횟수 데이터 (개발자가 알 수 있는 방법이 없다. )

만일, 클릭한 횟수를 서버에 보내고, 우리가 그것을 다시 파일로 만들어서 보여줄 수도 있다.

클릭을 할 때마다 파일에 그 데이터를 저장하고 있는다.

맨 처음에 우리가 보냈을 때에는 “클릭 횟수” 데이터에 0만 저장이 되어 있었음.

사용자가 클릭을 하고 나서는 “클릭 횟수” 데이터가 점차 바뀌기 시작했다.

상태라는 말은 그 데이터가 초기값과 달라지고 있는 상황. ⇒ 상태가 변한 상황

컴포넌트가 관리하고 있는 데이터가 변하는 것.

“H2O”

0 ~ 100 → 물

100 ~ → 수증기

~ 0 → 얼음

온도라는 상황변화가 상태변화를 만든다.

이번 수업에서는 *React Hooks*에 대해 배우고 함수 컴포넌트를 강력하게 다루는 방법을 알아보겠습니다.

React Hooks는 단순히 함수로서 구성 요소의 내부 상태를 관리하고 후 처리 부작용을 함수 컴포넌트에서 직접 처리할 수 있게 해주는 함수입니다. Hooks를 사용하면 상태에 따라 사용자에게 어떤 것을 보여줄지 결정할 수 있습니다.

React는 다양한 내장 Hooks를 제공합니다. 이 중 몇 가지는 `useState()`, `useEffect()`, `useContext()`, `useReducer()`, `useRef()` 등이 있습니다. React 문서에서 [전체 목록 ](https://react.dev/reference/react)을 확인할 수 있습니다.

이 레슨에서는 다음과 같은 내용을 배우게 됩니다.

- "상태" 기반 함수 컴포넌트 구축
- State Hook 사용
- 상태 초기화 및 상태 설정
- 이벤트 핸들러 정의
- 상태 설정 콜백 함수 사용
- 배열 및 객체와 함께 상태 사용
-

## 함수형 컴포넌트의 상태 업데이트

React 컴포넌트를 구축하는 데 가장 일반적으로 사용되는 Hook인 State Hook으로 시작해 보겠습니다. State Hook은 React 라이브러리의 named export이므로 다음과 같이 [object destructuring ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용하여 가져옵니다:

```jsx
import React, { useState } from "react"; //
// React -> export default function React_blah()
// { useState } -> named export
```

우리가 `useState()` 함수를 호출하면 두 개의 값이 담긴 배열이 반환됩니다:

- _현재 상태(current state)_: 이 상태의 현재 값입니다.
- _상태 변경 함수(state setter)_: 이 상태의 값을 업데이트하는 데 사용할 수 있는 함수입니다.

이 두 값을 사용하여 데이터 값 또는 속성의 현재 상태를 추적하고 필요할 때 변경할 수 있습니다. 배열에서 두 값을 추출하려면 array destructing를 사용하여 지역 변수에 할당할 수 있습니다. 예를 들어:

```jsx
const [currentState, setCurrentState] = useState(); //배열을 리턴한다.
// 첫번째 값 ==> state 객체, 객체
// 두번째 값 ==> state를 업데이트 해주는 함수
// 컴포넌트가 관리하는 변수 하나 --> currentState
// 컴포넌트가 관리하는 변수를 변경하는 함수 --> setCurrentState()
```

State Hook를 사용하는 함수 컴포넌트의 다른 예시를 살펴보겠습니다:

```jsx
import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle("On")}>On</button>
            <button onClick={() => setToggle("Off")}>Off</button>
          
    </div>
  );
}
```

상태 설정 함수인 `setToggle()`가 `onClick` 이벤트 리스너에 의해 호출되는 방식을 주목해보세요. `toggle` 값을 업데이트하고 새로운 값으로 이 컴포넌트를 다시 렌더링하기 위해서는, 다음 상태 값을 인자로하는 `setToggle()` 함수를 호출하기만 하면 됩니다.

State Hook을 사용하면 상태를 업데이트하는 것이 상태 설정 함수를 호출하는 것만큼 간단합니다. **상태 설정 함수를 호출하면 React에게 이 컴포넌트가 다시 렌더링되어야 한다는 신호가 전달됩니다.** 이에 따라 컴포넌트 함수가 다시 호출됩니다. `useState()`의 마법은 React가 상태의 현재 값을 한 렌더링에서 다음 렌더링까지 추적할 수 있다는 것입니다!

## **State 초기화하기**

State Hook를 사용하여 문자열 값을 가진 변수를 관리하는 것처럼, 우리는 State Hook을 사용하여 기본 데이터 타입 및 배열 및 객체와 같은 데이터 컬렉션의 값을 관리할 수 있습니다!

다음 함수 컴포넌트를 살펴보십시오. 이 상태 변수가 어떤 데이터 타입을 보유하고 있습니까?

```jsx
import React, { useState } from "react";

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
            <p>The data is {isLoading ? "Loading" : "Not Loading"}</p>
            <button onClick={() => setIsLoading(true)}>
                Turn Loading On       
      </button>
            
      <button onClick={() => setIsLoading(false)}>
                Turn Loading Off       
      </button>
          
    </div>
  );
}
```

위의 `ToggleLoading()` 함수 컴포넌트는 가장 간단한 데이터 타입 중 하나인 불리언을 사용합니다. 불리언은 React 애플리케이션에서 데이터가 로드되었는지 여부를 나타내는 데 자주 사용됩니다. 위의 예에서는 `true` 및 `false` 값이 상태 설정자 `setIsLoading()`에 전달되는 것을 볼 수 있습니다.

이 코드는 그대로 작동하지만, 컴포넌트를 `isLoading`가 `true`로 설정하여 시작하려면 어떻게해야 할까요?

원하는 초기 값을 상태와 함께 초기화하려면 `useState()` 함수 호출에 초기 값으로 인수를 전달하면 됩니다.

```jsx
const [isLoading, setIsLoading] = useState(true);
```

이 코드가 컴포넌트에 영향을 미치는 방법은 세 가지가 있습니다.

1. 첫 번째 렌더링 중에 *초기 상태 인수*가 사용됩니다.
2. 상태 설정자가 호출될 때, React는 초기 상태 인수를 무시하고 새 값을 사용합니다.
3. 컴포넌트가 다른 이유로 다시 렌더링 될 때, React는 이전 렌더링에서 사용한 동일한 값을 계속 사용합니다.

`useState()`를 호출할 때 초기 값을 전달하지 않으면, 첫 번째 렌더링 중 상태의 현재 값은 `undefined`가 됩니다. 이는 일반적으로 코드를 실행하는 컴퓨터에게는 충분히 괜찮지만, 코드를 읽는 인간에게는 명확하지 않을 수 있습니다. 따라서 우리는 상태를 명시적으로 초기화하는 것을 선호합니다. 첫 번째 렌더링 중 필요한 값이 없는 경우, 값을 수동으로 `undefined`로 두지 않고 명시적으로 `null`을 전달할 수 있습니다.

## **JSX 외부에서 state setter 사용**

사용자가 텍스트 입력 필드에 입력할 때 문자열의 변경 값 관리 예제를 살펴 보겠습니다.

```jsx
import React, { useState } from "react";

export default function EmailTextInput() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  };

  return <input value={email} onChange={handleChange} />;
}

// 검색창, 이메일 텍스트박스 같은 곳에서 텍스트를 입력하고 있는 상황
// input 태그 안에 텍스트를 입력했을 때, value의 값이 변하게 딥니다.
```

위 코드의 동작 방식을 살펴 보면 다음과 같습니다.

- 우리는 [object destructuring ](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)를 사용하여 로컬 상태 변수 `email`과 로컬 setter 함수 `setEmail(>)`를 만듭니다.
- 로컬 변수 `email`은 `useState()`에서 반환된 배열의 인덱스 `0`에서 현재 상태 값을 할당합니다.
- 로컬 변수 `setEmail()`은 `useState()`에서 반환된 배열의 인덱스 `1`에서 상태 설정자 함수에 대한 참조를 할당합니다.
- 이 예제에서 상태 설정 변수를 현재 상태 변수(이 경우 `email`)와 함께 "set"을 앞에 붙여 이름을 지정하는 것이 관례입니다.

JSX `input` 태그는 `onChange`라는 이벤트 리스너를 가지고 있습니다. 이 이벤트 리스너는 사용자가 이 요소에 입력할 때마다 *이벤트 핸들러*를 호출합니다. 위 예제에서 이벤트 핸들러는 함수 컴포넌트의 정의 내에 있지만 JSX 외부에 정의됩니다. 이전에는 이벤트 핸들러를 JSX 내부에 직접 작성했습니다. 이 인라인 이벤트 핸들러는 완벽하게 작동하지만, 정적 값을 사용하여 상태 설정자를 호출하는 것 이상의 작업을 수행하려면 이러한 로직을 JSX에서 분리하는 것이 좋은 관행입니다. 이러한 역할 분담은 코드를 읽기 쉽고 테스트하고 수정하기 쉬운 코드로 만듭니다.

React 코드에서 이것을 단순화하는 것이 일반적입니다.

```jsx
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
};
```

이렇게

```jsx
const handleChange = (event) => setEmail(event.target.value);
```

또는 object destructor를 사용하여 이렇게

```jsx
const handleChange = ({ target }) => setEmail(target.value);
```

위 세 가지 코드 스 닙펫 모두 같은 방식으로 동작하므로 이러한 다른 코드 스니펫 사이에 옳고 그름은 없습니다. 가장 간결한 마지막 버전을 계속 사용하겠습니다.

## **이전 state에서 설정**

이전 연습에서는 다음과 같이 새 값을 전달하여 상태를 업데이트하는 방법을 학습했습니다.

```jsx
setState(newStateValue);
```

그러나 React 상태 업데이트는 *비동기적*입니다. 이는 일부 코드가 상태가 완전히 업데이트되기 전에 실행될 수 있다는 것을 의미합니다.

비동기적(asynchronous) vs 동기(synchronous)

프로그래밍에서 어떤 함수를 실행해서 값을 계산하는데(자식함수가 함), 이 때, 계산하는 동안 함수가 놀고 있지 않고 또 다른 함수를 처리함. 그 동안 자식함수가 일을 하고 결과를 리턴해줌. 그러면 메인함수가 그 결과를 다시 받아옴.

synchronous: 일이 끝날 때까지 기다리는 것.

컴포넌트 안에서 상태 업데이트가 일어나는데, setState 함수들이 여러개 있을 수 있음. 이 때, 이 함수들끼리 일이 끝나는 시점이 서로 다를 수 있습니다.

이것은 좋은 일이기도 하고 나쁜 일입니다. 상태 업데이트를 함께 그룹화하면 애플리케이션의 성능을 향상시킬 수 있지만 오래된 상태 값이 나올 수 있습니다. 결과적으로 콜백 함수를 사용하여 상태를 업데이트하는 것이 최선의 방법입니다.

다음 코드를 살펴보면 이것이 어떻게 수행되는지 확인할 수 있습니다.

```jsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
            <p>와우, 당신은 버튼을 {count}번 클릭했습니다.</p>
            <button onClick={increment}>여기를 클릭하세요!</button>
          
    </div>
  );
}
```

버튼이 눌리면 `increment()` 라는 이벤트 핸들러가 호출됩니다. 이 함수 안에는 우리는 콜백 함수와 함께 `setCount()` state setter 함수를 사용합니다.

다음 `count` 값은 이전 `count` 값에 따라 다릅니다. 따라서, 우리는 콜백 함수를 `setCount()` 인수로 전달하여 사용합니다.

```jsx
setCount((prevCount) => prevCount + 1);
```

state setter 함수가 콜백 함수를 호출할 때, 이 state setter 함수는 이전 `count`를 인수로 취합니다. 이 상태 셋터 콜백 함수에서 반환된 값은 다음 `count` 값으로 사용됩니다. (이 경우, `prevCount + 1`)

## **상태에서의 배열**

자바스크립트 배열은 JSX 목록을 관리하고 렌더링하는 데 가장 좋은 데이터 모델입니다. 피자 레스토랑 웹사이트의 코드를 살펴보겠습니다.

```jsx
import React, { useState } from "react";

//Static array of pizza options offered.
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({ target }) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter((t) => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev]; // rest parameter, spread operator
      }
    });
  };

  return (
    <div>
            
      {options.map((option) => (
        <button value={option} onClick={toggleTopping} key={option}>
                    {option}
          {selected.includes(option) ? "제거 " : "추가 "}
                  
        </button>
      ))}
            <p>{selected.join(", ")} 피자를 주문하세요.</p>
          
    </div>
  );
}
```

위의 예제에서 두 개의 배열을 사용합니다.

- `options` 배열은 제공되는 모든 피자 토핑의 이름을 포함합니다.
- `selected` 배열은 우리 개인용 피자에 선택한 토핑을 나타냅니다.

`options` 배열은 *정적 데이터*를 포함하므로 변경되지 않습니다. 정적 데이터 모델은 컴포넌트가 다시 렌더링될 때마다 다시 만들 필요가 없으므로 함수 컴포넌트 외부에 정의하는 것이 좋습니다. JSX에서는 JavaScript `.map()` 메서드를 사용하여 `options` 배열의 각 토핑에 대한 버튼을 렌더링합니다.

`selected` 배열은 *동적 데이터*를 포함하므로 일반적으로 사용자의 작업에 따라 변경됩니다. 우리는 빈 배열로 `selected`를 초기화합니다. 버튼이 클릭되면 `toggleTopping()` 이벤트 핸들러가 호출됩니다. 이 이벤트 핸들러는 이벤트 개체에서 정보를 사용하여 어떤 토핑이 클릭되었는지 결정합니다.

상태에서 배열을 업데이트할 때, 이전 배열에 새 데이터를 추가하는 것이 아니라 새로운 배열로 이전 배열을 교체합니다. 이전 배열에서 저장하려는 모든 정보를 새 배열로 명시적으로 복사해야 합니다. 이것이 `...prev`가 하는 일입니다.

우리는 배열의 `.includes()`, `.filter()`, `.map()` 메서드를 사용합니다. 이것들이 처음이거나 복습이 필요하면, 배열 메서드를 검토하는 시간을 가져보세요. React 개발자가 되기 위해서는 전문 JavaScript 그루가 되어야 할 필요는 없지만, JavaScript 기술을 강화하는 데 시간을 투자하는 것이 항상 더 빠르고 재미있게 더 많은 일을 할 수 있는데 도움이 됩니다.

---

`onClick={() => increaseCount()}` -> 이벤트 핸들러로 함수를 할당합니다. 함수의 몸체에는 `increaseCount()`가 포함되어 있습니다. 따라서 함수가 실행될 때 `increaseCount`가 실행됩니다.

`onClick={increaseCount()}` -> 이 코드가 만나자마자 React가 `increaseCount`를 실행합니다. `increaseCount`는 상태를 변경하고 다시 렌더링을 발생시키며, 다음 렌더링 주기에서도 같은 일이 발생하여 무한한 렌더링이 발생합니다.

`onClick={() => increaseCount}` -> 첫 번째 방법과 비슷하지만 여기서 함수 몸체 안에 `increaseCount` 뒤에 `()`가 빠져 있습니다. 이렇게 하면 이벤트가 발생할 때 함수 `increaseCount`가 실행되지 않습니다. 괄호 없이 함수 이름만 있는 간단한 문장은 아무것도 하지 않습니다.

## **State 내의 객체**

우리는 객체와 함께 State를 사용할 수 있습니다. 관련 변수 집합과 함께 작업할 때, 그룹화하여 객체로 묶는 것이 매우 유용합니다. 이것을 실제로 적용한 예시를 살펴보겠습니다.

```jsx
export default function Login() {
  const [formState, setFormState] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
            
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
            
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
          
    </form>
  );
}
```

주목해야 할 몇 가지 사항:

- 우리는 이전 값에 따라 상태를 업데이트하는 State Setter 콜백 함수를 사용합니다.
- 배열과 마찬가지로 전개 구문이 객체에 대해서도 동일합니다. `{...oldObject, newKey: newValue}`.
- 입력 태그의 `name` 속성을 사용하여 여러 입력에서 이벤트 처리기를 재사용합니다.

함수 컴포넌트 내에서 `setFormState()`로 상태를 업데이트할 때, 이전 객체를 수정하지 않습니다. 상태의 다음 값을 설정할 때 이전 객체의 값을 복사해야 합니다. 다행히 전개 구문을 사용하면 이 작업이 매우 쉬워집니다!

입력 중 하나의 값을 업데이트할 때마다 `handleChange()` 함수가 호출됩니다. 이 이벤트 핸들러 안에서, 우리는 `target` 속성을 언팩하여 그 안에서 `name`과 `value` 속성을 다시 언팩합니다.

우리의 상태 설정기 콜백 함수 안에서, 우리는 이전 상태에서 해당 필드를 채우기 위해 `...` 전개 연산자를 사용합니다. 마지막으로, 우리는 적절한 키를 업데이트된 값으로 덮어씁니다.

`name` 주변의 대괄호를 봤나요? 이 Computed Property Name을 사용하여 `name` 변수에 저장된 문자열 값을 속성 키로 사용할 수 있습니다.

\*Computed Property Name: 객체의 key값을 표현식(변수, 함수 등)을 통해 지정하는 문법

## **각각의 상태에 대한 별도의 Hooks**

데이터 컬렉션 (배열이나 객체와 같은)에 관련된 데이터를 저장하는 것이 도움이되는 경우가 있지만, 변경되는 데이터에 대해 별도의 상태 변수를 생성하는 것이 도움이 될 수도 있습니다. 데이터 모델을 가능한 한 단순하게 유지하면 동적 데이터를 관리하기가 훨씬 쉬워집니다.

예를 들어, 학교에서 공부하는 과목에 대한 상태를 보유한 단일 객체가 있다면 다음과 같을 수 있습니다.

```jsx
function Subject() { // Subject 라는 이름을 가진 컴포넌트, state라는 상태를 관리하는 중
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma', 'Jennie'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
  });
```

이것도 작동하지만, 이 큰 상태 객체에서 무언가를 업데이트해야 할 때 다른 모든 값들을 복사해야하는 어려움이 있습니다. 예를 들어, 시험의 성적을 업데이트하려면 다음과 같은 이벤트 핸들러가 필요합니다.

```jsx
setState((prev) => ({
  ...prev,
  exams: prev.exams.map((exam) => {
    if (exam.unit === updatedExam.unit) {
      return {
        ...exam,
        score: updatedExam.score,
      };
    } else {
      return exam;
    }
  }),
}));
```

이러한 복잡한 코드는 버그를 유발할 가능성이 높습니다. 값이 함께 변경되는 대상을 기준으로 여러 상태 변수를 만드는 것이 가장 좋습니다.

이전 예제를 다음과 같이 다시 작성할 수 있습니다.

```jsx
function Subject() {
  const [currentGrade, setGrade] = useState("B");
  const [classmates, setClassmates] = useState(["Hasan", "Sam", "Emma"]);
  const [classDetails, setClassDetails] = useState({
    topic: "Math",
    teacher: "Ms. Barry",
    room: 201,
  });
  const [exams, setExams] = useState([
    { unit: 1, score: 91 },
    { unit: 2, score: 88 },
  ]); // ...
}
```

별도의 상태 변수를 사용하여 동적 데이터를 관리하면 코드를 더 간단하게 작성, 읽기 쉽게 만들며, 컴포넌트 간에 재사용과 테스트가 가능해집니다.

컴포넌트 간에 전달할 데이터를 패키징하고 구성 한 다음 데이터의 서로 다른 부분이 별도로 변경되는 컴포넌트 내에서 데이터를 분리하는 경우가 종종 있습니다. Hooks를 사용하면 데이터를 가장 적합하게 구성할 수 있는 자유도가 있습니다!

## **Review**

이제 우리는 `useState` React Hook을 사용하여 상태 기반 함수 컴포넌트를 구축할 수 있습니다!

이 수업에서 배운 내용을 다시 확인해 보겠습니다.

- React에서는 정적 및 동적 데이터 모델을 JSX에 제공하여 화면에 보여줍니다.
- Hook은 함수 컴포넌트에서 동적 데이터를 관리하기 위해 내부 컴포넌트 상태에 "hook into"하는 데 사용됩니다.
- 우리는 아래 코드를 사용하여 상태 Hook을 적용합니다. `currentState`은 현재 상태 값을 참조하고 `initialState`은 컴포넌트의 첫 번째 렌더링에 대한 상태 값을 초기화합니다.

```jsx
const [currentState, stateSetter] = useState(initialState);
```

- 이벤트 핸들러에서 상태 설정자를 호출할 수 있습니다.
- 우리는 JSX 내부에서 간단한 이벤트 핸들러를 정의하고 JSX 외부에서 복잡한 이벤트 핸들러를 정의할 수 있습니다.
- 다음 값이 이전 값에 의존하는 경우 상태 설정자 콜백 함수를 사용합니다.
- 우리는 관련 데이터를 구성하고 관리하기 위해 배열과 객체를 사용합니다.
- 동적 데이터의 컬렉션에 대해 전개 구문을 사용하여 이전 상태를 다음 상태로 복사합니다. `setArrayState((prev) => [...prev])` 및 `setObjectState((prev) => ({...prev}))`.
- 복잡한 상태 객체 대신 여러 개의 간단한 상태를 가지는 것이 좋은 관행입니다.
