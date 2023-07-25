import { ColorConsumer } from "./ColorContext";

const colors = ["red", 'orange', 'yellow', 'green', 'blue', 'indigo' ,'violet'];

/*value 매개 변수를 사용하여 상태값을 변경하는 함수(actions)를의 접근하는데 이를 쉽게 하기 위해 actions를 연관 배열로 매개 변수 변경했다*/
const SelectColors = () => {
    return (
    <div>
        <h2>색상을 선택하세요</h2>
        <ColorConsumer>
            {({actions}) => (
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
                        onClick={() => actions.setColor(color)}
                        onContextMenu={e => {e.preventDefault();actions.setSubject(color);return false;}}
                        />
                    )
                )}
                </div>
                )}
        </ColorConsumer>
        <hr/>
    </div>
    )
}

export default SelectColors;