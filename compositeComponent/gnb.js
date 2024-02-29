import React from "react";
import Headers from "../baseComponents/headers";
import { View, Button, Text } from "react-native";

const Gnb = () => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderColor: "gray",
                borderWidth: 0.3,
            }}
        >
            <Button title="<-"></Button>
            <Headers>Nhattrang94</Headers>
        </View>
    )
}

export default Gnb; 