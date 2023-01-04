import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Randomcolor = () => {

    const [newColor, setNewColor] = useState([]);
    const [totalColors, setTotalColors] = useState(0);


    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        setTotalColors(totalColors + 1);

        return `rgb(${red},${green},${blue})`;
    }
    return (
        <View>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    setNewColor([...newColor, randomColor()]);
                }}  >
                <Text style={{
                    color: "azure",
                    padding: 10
                }} >Generate Random Color....</Text>
            </TouchableOpacity>

            <Text style={{
                padding: 10,
                borderColor: "gray",
                borderWidth: 1,
                marginVertical: 10,
                textAlign: "center"
            }}  > Total Colors Generated - {totalColors}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                data={newColor}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box} >
                            <Text style={{
                                backgroundColor: item,
                                width: 120,
                                height: 120,
                                borderRadius: 10,
                                textAlign: "center",
                                padding: 10
                            }}>   {item} </Text>
                        </View>
                    )
                }} />

        </View>
    )

}

const styles = StyleSheet.create({
    list: {
        border: 4,
        borderColor: "black",
        display: "flex",

    },
    box: {
        backgroundColor: "azure",
        marginVertical: 10,
        marginHorizontal: 30
    },
    btn: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 4,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "cyan",
        backgroundColor: "black",



    }
})
export default Randomcolor;