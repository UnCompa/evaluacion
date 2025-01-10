import axios from "axios";
import { useEffect, useState } from "react";

export const useGetServices = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchData = async () => {  
      const getServicePath = `http://192.168.100.113:8080/Habitaciones/rest/servicios/todos`
      const resData = await axios.get(getServicePath)
      setServices(resData.data)
    }
    fetchData()
  }, [])
  return {
    services
  }
}