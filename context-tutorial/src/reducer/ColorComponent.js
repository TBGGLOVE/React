import React from 'react';
import SelectColors from './SelectColor';
import ColorBox from '../ColorBox';

const ColorComponent = ({state, actions}) => {
    return (
        <div>
          <SelectColors actions={actions} />
          <ColorBox state={state}/>
        </div>
    );
};

export default ColorComponent;