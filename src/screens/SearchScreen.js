import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function SearchScreen(){
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <View>
            <SearchBar 
            term={searchTerm} 
            onTermChange={newTerm => setSearchTerm(newTerm)}
            onTermSubmit={onTermSubmit}
            />
            <Text>{searchTerm}</Text>
        </View>
    )
}

