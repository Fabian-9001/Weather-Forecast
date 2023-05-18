import useSWR from 'swr'
import { fetcher } from '../helpers/fetcher'
import { IWeatherData } from '../interfaces/weather.interfaces'
import { useEffect, useState } from 'react'
import { Coords } from '../interfaces/coord.interfaces'

const useCoords = () => {
  const [currentPosition, setCurrentPosition] = useState<Coords>()

  useEffect(() => {
    const success = (data: any) => {
      const coords = {
        latitude: data?.coords.latitude,
        longitude: data?.coords.longitude,
      }
      setCurrentPosition(coords)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return currentPosition
}

const useWeather = () => {
  const key = import.meta.env.VITE_API_KEY
  const coords = useCoords()
  const { data, mutate } = useSWR<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${key}`,
    fetcher
  )
  return { data, mutate }
}

export { useWeather, useCoords }
