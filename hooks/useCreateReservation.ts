import axios from "axios"
import { useState } from "react"
export interface CreateReservation {
  idUsuario: number,
  idHabitacion: number,
  fechaEntrada: string,
  fechaSalida: string
}
export const useCreateReservation = () => {
  const [data, setData] = useState([])
  const createReservation = async (data: any) => {
    console.log(data);
    
    const createPath = `http://192.168.100.113:8080/Habitaciones/rest/reservas/registrar`
    const resData = await axios.post(createPath, data)
    console.log(resData);
    
    setData(resData.data)
  }

  return {
    createReservation,
    data
  }
}