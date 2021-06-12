import React from 'react';
import GetMem from './GetMem';
import { NodeCheck } from './NodeCheck';
import { SayService } from './SayService';

const App = () => {
    return <div>
        <h1>Memroy Infomation</h1>
        <GetMem />

        <h1>Node Check Satus</h1>
        <NodeCheck />

        <h1>Say Service</h1>
        <SayService />
    </div>
}

export default App;