import { ColorConsumer } from "./ColorContext";

const colors = ["red", 'orange', 'yellow', 'green', 'blue', 'indigo' ,'violet'];

const SelectColors = () => {
    return (
    <div>
        <h2>색상을 선택하세요</h2>
        <ColorConsumer>
            {value => (
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
                        onClick={() => value.actions.setColor(color)}
                        onContextMenu={e => {e.preventDefault();value.actions.setSubject(color);return false;}}
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