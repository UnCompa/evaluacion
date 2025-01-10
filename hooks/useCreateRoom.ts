import axios from "axios"
import { useState } from "react"

export interface CreateRoom {
  numero: string,
  capacidad: number,
  tipo: string
}
export const useCreateRoom = () => {
  const [data, setData] = useState([])
  const createRoom = async (data: CreateRoom) => {
    const createPath = `http://192.168.100.113:8080/Habitaciones/rest/habitaciones/agregar`
    const resData = await axios.post(createPath, data)
    setData(resData.data)
  }

  return {
    createRoom,
    data
  }
}