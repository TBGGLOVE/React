import { Component, useContext } from "react";
import ColorContext from "./ColorContext";

const colors = ["red", 'orange', 'yellow', 'green', 'blue', 'indigo' ,'violet'];

/*value 매개 변수를 사용하여 상태값을 변경하는 함수(actions)를의 접근하는데 이를 쉽게 하기 위해 actions를 연관 배열로 매개 변수 변경했다*/
class  SelectColors extends Component {
    /*
    아래와 같이 정적 변수 contextType에 ColorContext을 설정하면 멤버 메소드 내부에서 this.context로 
    ColorContext 컴포넌트를 접근할 수 있도록 클래스형 컴포넌트가 구현되어 있음 
    */
    static contextType = ColorContext;

    render() {
        return (
        <div>
            <h2>색상을 선택하세요</h2>
            <div style={{display:'flex'}}>
            {colors.map(color => (
                <div
                    key={color}
                    style={{
                        background:color,
                        width:'24px',
                        height:'24px',
                        cursor:'pointer'
                    }}
                    onClick={() => this.context.actions.setColor(color)}
                    onContextMenu={e => {e.preventDefault();this.context.actions.setSubject(color);return false;}}
                    />
                )
            )}
            </div>
            <hr/>
        </div>
        )
    }
}

export default SelectColors;