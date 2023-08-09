import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { fetchMoviesData } from "../actions/movies_list_actions";
import ShowListCard from '../components/ShowListCard';



const MoviesList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.moviesData);
    const [page, setPage] = useState(1);
    const { moviesData, loading } = data;
    const numColumns = 2; // Number of columns in the grid


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

    return (

        <SafeAreaView style={style.container}>
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

});
export default MoviesList;