function App(){

  let friends = ['Priyanka','Gaurav','Shamshad','Anjali','Vedanshu'];
  return (
    <>
    <h1> Hello Dosto {friends}</h1>
    {
      friends.map(dost => (
        <>

        <h2> Hello raj{dost === 'Gaurav' || dost === 'Shamshad' || dost === 'Vedanshu' ? 'kumar '+ dost : 'kumari ' + dost} </h2>
        </>
        ))
    }
    </>
  )
}

export default App;