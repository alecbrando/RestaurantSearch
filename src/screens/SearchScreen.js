import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultList';

export default function SearchScreen(){
    const [searchTerm, setSearchTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()


    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
            term={searchTerm} 
            onTermChange={setSearchTerm}
            onTermSubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Big Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
}

