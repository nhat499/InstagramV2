import { Image } from "react-native"
import React from "react";
import { View } from "react-native-web";
const CircularPicture = () => {
    return (
        <View>
            <Image
                source={{
                    uri: './assets/nhatInstaPic.jpg',
                }}

                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
        </View>
    )
}

export default CircularPicture;