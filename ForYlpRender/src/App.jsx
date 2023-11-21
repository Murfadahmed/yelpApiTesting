import React,{useEffect} from 'react'

function App() {
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    fetch('http://localhost:5173/api/yelp?location=SanDiego&sort_by=best_match&limit=20', options)
    // fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego', options)
    //     .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}, [])
  return (
    <>
    <div className="container" style={{width:'100%',minHeight:'100vh',backgroundColor:'lightcoral',display:'grid',placeItems:'center'}}>
      <h1>there is the data wil render</h1>
    </div>
    </>
  )
}

export default App