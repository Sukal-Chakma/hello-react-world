
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
 

  return (
      <div>
     <Suspense fallback={<h3>Nadir on the go....</h3>}>
       <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense>
      </div>
  )
}

export default App
