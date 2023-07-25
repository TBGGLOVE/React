import ColorComponent from './ColorComponent';
import ColorModel from './ColorModel';

function AppReducer() {
  
  const model = ColorModel();
  console.log(model);
  return (
      <div >
          <ColorComponent state={model.state} actions={model.actions}/>
      </div>
  );
  
 
}

export default AppReducer;
