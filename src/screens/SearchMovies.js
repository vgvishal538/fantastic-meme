import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, FlatList, Keyboard } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData } from '../actions/SearchMoviesActions'
import ShowListCard from "../components/ShowListCard";


const SearchMovie = () => {
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.searchData);
    const { searchData, loading } = data;
    const numColumns = 2;
    const windowSize = 10;
    const initialToRender = 10;


    const handleSearch = () => {
        Keyboard.dismiss();
        dispatch(fetchSearchData(page, searchText));
    };
    const renderMoviesList = ({ item }) => {
        return (
            <ShowListCard item={item} />
        );
    }

    const handleOnchangeText = (text) => {
        setSearchText(text);

    }

    return (
        <View style={styles.outer}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={handleOnchangeText}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            <View style={styles.flatlistStyle}>
                {loading && <ActivityIndicator style={styles.styleloader} size={'large'} />}
                {searchData?.length !== 0 ?
                    <FlatList data={searchData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderMoviesList}
                        numColumns={numColumns}
                        contentContainerStyle={styles.listStyle}
                        windowSize={windowSize}
                        initialNumToRender={initialToRender}


                    /> : <Text style={styles.noDataStyle} >NO DATA FOUND </Text>}
            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    outer: {
        flexDirection: 'column'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
    },
    listStyle: {
        padding: 16
    },
    flatlistStyle: {
        marginBottom: 150,

    },
    noDataStyle: {
        alignSelf: 'center',
        marginTop: 30

    },
    styleloader: {
        marginBottom: 70
    }
});
export default SearchMovie;