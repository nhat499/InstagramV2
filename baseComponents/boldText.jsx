
import { Text } from "react-native";

const BoldText = ({ children }) => {
    return (
        <Text style={{
            color: "black",
            fontSize: "12px",
            fontWeight: "bold",
        }}>{children}</Text>
    );
}

export default BoldText;