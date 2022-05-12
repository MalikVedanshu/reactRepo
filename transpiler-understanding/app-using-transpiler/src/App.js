function App() {
  let randomArr = [];
for(let k = 0; k < 100; k++){
  randomArr[k] = k+1;
}
randomArr.sort((a,b) => 0.5 - Math.random());

let arr = [];
  for(let i = 0; i < 10; i++){
    arr.push(randomArr.splice(0,10));
  }

  return (
    <>
      <table>
        {
          arr.map(rows => <tr> {rows.map(tdata => (<td>{tdata}</td>))}</tr>)
        }
      </table>
    </>
  )
}

export default App;