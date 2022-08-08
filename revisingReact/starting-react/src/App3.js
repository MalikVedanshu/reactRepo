import React from "react";
import style from './App.css'

let arr = new Array(10);
let index = 0;
for(let i = 0; i < 10; i++){
    arr[i] = [];
    for(let j = 0; j < 10; j++){
        arr[i][j] = index+=1;
    }
}
// console.log(arr);

function App () {
    return (
        <>
        <center>
            <h1>Grid</h1>
        <table>
        <tbody>
        
            {
                arr.map((ele,idx) => (
                    <tr key={idx}>
                    {
                        ele.map((elem,indx) => (
                            <td key={indx}>{elem}</td>
                        ))
                    }
                    </tr>
                ))
            }

            
        </tbody>
        </table>
        </center>
        </>
    )
}
export default App;