import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, Dimensions } from "react-native";
import { fetchMoviesData } from "../actions/movies_list_actions";
import ShowListCard from '../components/ShowListCard';



const MoviesList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.moviesData);
    const [page, setPage] = useState(1);
    const [moviesDataList, setmoviesDataList] = useState([]);
    const { moviesData, loading } = data;
    const numColumns = 2; // Number of columns in the grid


    useEffect(() => {
        dispatch(fetchMoviesData(page));

    }, [dispatch]);


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
        console.log("ss" + JSON.stringify(data)),
        <SafeAreaView style={style.container}>
            <View>
                {loading ? <ActivityIndicator size={'large'} />
                    : <FlatList data={moviesData}
                        keyExtractor={(index) => index.id}
                        renderItem={renderMoviesList}
                        numColumns={numColumns}
                        contentContainerStyle={style.listStyle}
                        onEndReached={loadMorePage}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={loading && <ActivityIndicator style={{ marginBottom: 30 }} size={'large'} />}

                    />}
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