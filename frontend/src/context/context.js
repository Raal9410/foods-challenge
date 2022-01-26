import { useState, useContext } from 'react'
import API from '../config/API'

const useAPI = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    meals: [],
    tags: [],
    mealTypes: [],
  })
}