import CircularPicture from "../baseComponents/circularPicture";
import { Text, View } from "react-native";
import Gnb from "../compositeComponent/gnb2";
import ProfileStats from "../compositeComponent/profileStats";
import ProfileTabs from "../compositeComponent/profileTabs";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <Gnb />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CircularPicture />
        <ProfileStats />
      </View>
      <View>
        <Text>Nhat Trang</Text>
        <Text
          style={{
            borderColor: "gray",
            borderWidth: 1,
            alignSelf: "flex-start",
            borderRadius: 10,
            paddingLeft: 3,
            paddingRight: 3,
          }}
        >
          @Nhattrang49
        </Text>
        <Text>UW Seattle</Text>
        <Text>Hobbies:E.P</Text>
        <Text>
          devonshire. In mile an form snug were been sell. Hastened admitted joy
          nor absolute gay its. Extremely ham any his departure for contained
          curiosity defective. Way now instrument had eat diminution melancholy
          expression sentiments stimulated. One built fat you out manor books.
          Mrs interested now his affronting inquietu
        </Text>
        <Text
          style={{
            color: "blue",
          }}
        >
          @nha_mily
        </Text>
      </View>
      <View>
        <ProfileTabs />
      </View>
    </View>
  );
};

export default Profile;
