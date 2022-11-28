import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])


  const handelGetInformation = async () => {
    const options = {
      method: 'GET',
      url: 'https://tiktok-api6.p.rapidapi.com/user/videos',
      params: { username: 'mrbeast' },
      headers: {
        'X-RapidAPI-Key': '03bbb1fc45msh68e8ff1426d6e84p15faffjsn9831d20690b8',
        'X-RapidAPI-Host': 'tiktok-api6.p.rapidapi.com'
      }
    };

    axios.request(options).then(async function (response) {
      setData(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }



  let like = 0
  let view = 0
  let share = 0
  let minute = 0
  let name = ''

  if (data.length === undefined) {
    name = data.username
    data.videos.map((v, i) => (like = like + v.statistics.number_of_hearts))
    data.videos.map((v, i) => (view = view + v.statistics.number_of_plays))
    data.videos.map((v, i) => (share = share + v.statistics.number_of_reposts))
    data.videos.map((v, i) => (minute = minute+ v.duration))
    console.log('ok')
  }



  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>Total Likes: {like} </h1>
      <h1>Total Views: {view} </h1>
      <h1>Total Reposts: {share} </h1>
      <h1>Total Minutes of Videos Posted : {minute / 60} </h1>
      <button onClick={() => handelGetInformation()}>Get</button>
    </div>
  )
}

export default App
