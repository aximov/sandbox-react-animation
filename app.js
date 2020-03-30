'use strict';
import styled from 'styled-components'

const click = event => {
  render(); // 再描画
};

const Block = styled.div`
  width: 100pt;
  height: 100pt;
  margin: 20pt;
  background-color: chocolate;
`

// コンポーネント定義
const AnimationBlock = props => (
  <div>
    <Block>
      ブロック
    </Block>
    <button id="scaling-button" onClick={click}>
      拡大縮小
    </button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <AnimationBlock />,
    document.getElementById("container")
  );
};

render();
