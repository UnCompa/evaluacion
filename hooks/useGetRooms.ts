import axios from "axios";
import { useEffect, useState } from "react";

export const useGetRooms = (fechaInicio: string, fechaFin: string) => {
  const [rooms, setServices] = useState([])
  useEffect(() => {
    const fetchData = async () => {  
      const getServicePath = `http://192.168.100.113:8080/Habitaciones/rest/habitaciones/disponibles?fechaEntrada=${fechaInicio}&fechaSalida=${fechaFin}`
      const resData = await axios.get(getServicePath)
      setServices(resData.data)
    }
    fetchData()
  }, [])
  return {
    rooms
  }
}