import { useWeather } from '../lib/services/weather.services'

function App() {
  console.log(useWeather())

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
