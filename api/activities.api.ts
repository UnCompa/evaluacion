const API = 'http://localhost:8080/m3-evaluacion-1.0.0/api'
export const getService = async () => {
  const res = await fetch(`${API}/rooms/services`)
  console.log(res);
  
  const data = res.json()
  console.log(data);
  return data
}