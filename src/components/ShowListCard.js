import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import FastImage from 'react-native-fast-image'


const ShowListCard = React.memo(({ item, }) => {
    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    };

    return (
        <View style={style.itemContainer}>
            <View style={style.innerStyle}>
                <FastImage
                    style={style.imgStyle}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={style.titleStyle} numberOfLines={2}>
                    {item.original_title}
                </Text>
                <Text style={style.releaseTxt}>
                    {item?.release_date !== "" ? formatDate(item.release_date) : "N/A"}
                </Text>
                <Text style={style.overviewStyle} numberOfLines={2} >
                    {item.overview}
                </Text>
            </View>

        </View>

    );

});
const style = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 8,

        height: 350,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2
    },
    innerStyle: {
        flexDirection: 'column',

    },
    titleStyle: {
        margin: 5,
        color: 'black',
        fontWeight: 'bold'
    },
    imgStyle: {
        width: 'auto',
        height: 243,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    releaseTxt: {
        marginLeft: 5
    },
    overviewStyle: {
        marginLeft: 5,
        fontSize: 10
    }
});
export default ShowListCard;