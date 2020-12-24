import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultList';

export default function SearchScreen(){
    const [searchTerm, setSearchTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    return (
        <View>
            <SearchBar 
            term={searchTerm} 
            onTermChange={setSearchTerm}
            onTermSubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {results.length === 0 ? null : <Text>We have found {results.length} results</Text>}
            <ResultsList title="Cost Effective"/>
            <ResultsList title="Big Pricier" />
            <ResultsList title="Big Spender" />
        </View>
    )
}

