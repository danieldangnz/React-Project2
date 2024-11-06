import AutoSlideshow from './AutoSlideshow';
import ManualSlideshow from './ManualSlideshow';

function Demo1() {
  //
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <AutoSlideshow />
        </div>
        <div className='col-12 col-md-6'>
          <ManualSlideshow />
        </div>
      </div>
    </div>    
  );
}

//------------------------------------------------------------------
//Export this Component
export default Demo1;
