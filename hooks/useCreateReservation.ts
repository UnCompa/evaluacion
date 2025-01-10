import axios from "axios"
import { useState } from "react"
export interface CreateReservation {
  idUsuario: number,
  idHabitacion: number,
  fechaEntrada: string,
  fechaSalida: string
}
export const useCreateRoom = () => {
  const [data, setData] = useState([])
  const createReservation = async (data: CreateReservation) => {
    const createPath = `http://localhost:8080/Habitaciones/rest/reservas/registrar`
    const resData = await axios.post(createPath, data)
    setData(resData.data)
  }

  return {
    createReservation,
    data
  }
}