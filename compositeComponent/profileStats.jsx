import { Text, View } from "react-native"
import BoldText from "../baseComponents/boldText";

const ProfileStats = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row", gap: 20, padding: 20 }}>
            <BoldText>27 post</BoldText>
            <BoldText>331 followers</BoldText>
            <BoldText>331 following</BoldText>
        </View>
    )
}

export default ProfileStats;