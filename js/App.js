import React from 'react';

import TurRetur from './TurRetur';
import Form from './Form';
import BookTickets from './BookTickets';

function App(){
    return(
        <div className="wrapper">

            <h1 className="wrapper-title">ÅKA TÅG</h1>
            <TurRetur från="STOCKHOLM" till="GÖTEBORG"/>
            <Form />
            <BookTickets />
        
        </div>
    )
}

{/* <Form firstName ="Mandus" lastName ="Lindström" /> */}
// class App extends Component(){
//     constructor(){
//         super(props);
//         console.log('this.props är: ', this.props);
//     }
//     render(){
        
//         return(
//             <div>'nej'</div>
//         )
//     }

// };
// skrivenpropshär?!= propsnamn+value

export default App;