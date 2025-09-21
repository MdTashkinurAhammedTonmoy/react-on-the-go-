
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/Components/Countrys'

const countryPromish = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json()) 

function App() {
  
  

  return (
    <>
      
      <Suspense fallback={<p>nadirvai loding....</p>}>
         <Countries countryPromish = {countryPromish}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
