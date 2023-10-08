import React, { createContext, useState, useEffect } from 'react'
// import axios from 'axios'

export const GlobalStateContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [allDogs, setAllDogs] = useState([])
  const [allDogsCopy, setAllDogsCopy] = useState([])
  const [allDogsFiltered, setAllDogsFiltered] = useState([])
  const [allDogsWhenGet, setAllDogsWhenGet] = useState([])
  const [allTemperaments, setAllTemperaments] = useState([])
  const [selectedTemperaments, setSelectedTemperaments] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])
  const [selectedOrigin, setSelectedOrigin] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getAllDogs = async () => {
      return fetch('https://pi-deploy-production-9023.up.railway.app/dogs')
        .then((response) => response.json())
        .then((response) => {
          setAllDogsCopy(response)
          setAllDogs(response)
        })
        .catch((error) => console.error(error))
    }

    if (allDogsCopy.length === 0) {
      getAllDogs()
    }
  }, [])

  return (
    <GlobalStateContext.Provider
      value={{
        allDogs,
        setAllDogs,
        allDogsCopy,
        setAllDogsCopy,
        allDogsFiltered,
        setAllDogsFiltered,
        allDogsWhenGet,
        setAllDogsWhenGet,
        allTemperaments,
        setAllTemperaments,
        selectedTemperaments,
        setSelectedTemperaments,
        selectedOrder,
        setSelectedOrder,
        selectedOrigin,
        setSelectedOrigin,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
