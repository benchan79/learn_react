import React from 'react';
import { Runner } from './Runner';

export class RunnerMain extends React.Component {
  render() {
    return (
      <div>
        <Runner 
          message='My Running History'
          style={{color: 'lightBlue'}}
          isMetric={false}
          miles={30}
          milesToKM={(mile) => mile * 1.60934}
          races={['Boston Marathon, Tokyo Marathon, Berlin Marathon']}
        />
      </div>
    )
  }
}