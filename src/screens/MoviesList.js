import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, Dimensions, TextInput, Button, Pressable } from "react-native";
import { fetchMoviesData } from "../actions/MoviesListActions";
import ShowListCard from '../components/ShowListCard';
import { useNavigation } from "@react-navigation/native";



const MoviesList = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data = useSelector((state) => state.moviesData);
    const [page, setPage] = useState(1);
    const { moviesData, loading } = data;
    const numColumns = 2; // Number of columns in the grid
    const [searchText, setSearchText] = useState('');



    useEffect(() => {
        dispatch(fetchMoviesData(page));

    }, [dispatch, page]);

    const renderMoviesList = ({ item }) => {
        return (
            <ShowListCard item={item} />
        );
    }

    const loadMorePage = () => {
        if (!loading) {
            setPage(page + 1);

        }
    }
    const handleSearch = () => {
        navigation.navigate("Search");

    };


    return (

        <SafeAreaView style={style.container}>
            <Pressable onPress={handleSearch} >
                <View style={style.searchBar}>
                    <Text>
                        Search Movies
                    </Text>
                </View>
            </Pressable>
            <View>

                <FlatList data={moviesData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderMoviesList}
                    numColumns={numColumns}
                    contentContainerStyle={style.listStyle}
                    onEndReached={loadMorePage}
                    onEndReachedThreshold={0.5}
                    windowSize={10}
                    initialNumToRender={10}
                    ListFooterComponent={loading && <ActivityIndicator style={{ marginBottom: 70 }} size={'large'} />}

                />
            </View>
        </SafeAreaView>
    );

}
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    listStyle: {
        padding: 16
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    searchBar: {

        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        margin: 12
    }



});
export default MoviesList;