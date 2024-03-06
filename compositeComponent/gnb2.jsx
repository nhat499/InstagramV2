import React from "react";
import Headers from "../baseComponents/headers";
import { View, Button, Text } from "react-native";

const Gnb = () => {
    return (
        <View
            style={{
                position: "relative",
                left: 0,
                top: 0,
                minWidth: 300,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderColor: "gray",
                borderWidth: 0.3,
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Button title="<-"></Button>
                <Headers>Nhattrang94</Headers>
            </View>

            <View
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Button title="@" />
                <Button title="[+]"></Button>
                <Button title="="></Button>
            </View>
        </View>
    )
}

export default Gnb; 