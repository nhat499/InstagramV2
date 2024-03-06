
import { Text } from "react-native";

const Headers = ({ children }) => {
    return (
        <Text style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
        }}>{children}</Text>
    );
}

export default Headers;