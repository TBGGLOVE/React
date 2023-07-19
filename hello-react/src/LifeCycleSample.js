import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    color: '#000000',
    number: 0,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('생성자 호출');
    /*
    this.setState({color:"#ff0000"});

    setState = (map) => {
      let nextProps = {...this.props};
      let prevState = {...this.state};
      const ret = getDerivedStateFromProps(prevState, nextProps);
      if (ret) {
        for (const key : ret) {
          this.state[key] = ret[key];
        }
      }
    }
*/
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps() ...');
    //조건 설정
    //이전 상태값과 새로 변경된 속성 값이 다른 경우 상태값을 새로 변경된 값으로 변경할 때 처리하는 것
    if (nextProps.color !== prevState.color) {
      const r = nextProps.color.substring(1, 3);
      const g = nextProps.color.substring(3, 5);
      const b = nextProps.color.substring(5);
      return { color: '#' + b + g + r };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()...', nextProps, nextState);
    //잠시후 상황에 따라 render() 함수를 호출 할 수 있게 조건을 추가할 것임
    //return true : render() 함수 호출 됨
    //return false : render() 함수 호출 되지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    //DOM 에서 컴포넌트가 제거 되지 직전 호출됨
    //DOM 에서 컴포넌트가 제거 되지 직전 마무리 작업 필요하면 이부분에서 구현 한다
    console.log('componentWillUnmount()...');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //render() 함수에서 만들어진 결과물을 브라우저에 실제 반영되기 직전에 호출되는 함수
    //업데이트 되기 직전값을 참고할 때 사용함
    console.log('getSnapshotBeforeUpdate()...');
    if (prevProps.color !== this.state.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate()...');
    if (snapshot) {
      console.log('업데이트 되기 직전 색상 ', snapshot);
    }
  }

  handlerIncClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log('render()...');

    const style = {
      color: this.props.color,
    };

    //color : #123456
    //    const r = this.props.color.substring(1, 3);
    //    const g = this.props.color.substring(3, 5);
    //    const b = this.props.color.substring(5);
    //    const newColor = '#' + b + g + r;

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>부모 color : {this.props.color}</p>
        <p>자식 color : {this.state.color}</p>
        <button onClick={this.handlerIncClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
