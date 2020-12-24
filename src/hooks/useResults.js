import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (term) => {
        try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            searchTerm: term,
            location: 'san jose'
          }
        })
        setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
      }

      useEffect(() => {
          searchApi('starbucks')
      },[])


      return [searchApi, results, errorMessage]
}