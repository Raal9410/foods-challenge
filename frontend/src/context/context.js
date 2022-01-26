import { useState, createContext } from 'react'
import API from '../config/API'

const useAPI = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    meals: [],
    tags: [],
    mealTypes: [],
  })

  const fetchData = async (mealType, tags) => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }))

    const response = await API.get(`/?mealType=${mealType ? mealType : ''}&tags=${tags ? tags.join(',') : ''}`)

    setState(prevState => ({
      ...prevState,
      loading: false,
      error: response.data.message,
      meals: response.data.meals,
      tags: response.data.tags,
      mealTypes: response.data.mealTypes,
    }))
  }

  return { ...state, fetchData }
}

const Context = createContext(null)

export { useAPI, Context }
