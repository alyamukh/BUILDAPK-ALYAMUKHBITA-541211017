import react from "react";
import {
  View,
  Text,
  Image,
  Button,
  Linking,
  ScrollView,
  SafeAreaView,
} from "react-native";

const contactme = "https://www.instagram.com/_jeongjaehyun/?hl=id";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: "ffffff",
            padding: "100",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 160, height: 160 }}
            source={{
              uri: "https://meccha-japan.com/448796-large_default/figure-s-jessie-toy-story-4-cosbaby-disney.jpg",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              color: "black",
            }}
          >
            Alya Mukhbita
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "gray",
              padding: 20,
            }}
          >
            {" "}
            Saya suka kim mingyu{" "}
          </Text>
          <Button
            title="Contact Me"
            color="#A73121"
            onPress={() => Linking.openURL(contactme)}
          />

          <Text
            style={{
              padding: 20,
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            My Project
          </Text>
          <Image
            style={{ width: 160, height: 160 }}
            source={{
              uri: "https://cdn.dribbble.com/users/14584629/screenshots/20363447/media/adf95c1963832692766ce553028e8452.jpeg?resize=768x576&vertical=center",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "left",
              color: "black",
            }}
          >
            iPocket
          </Text>
          <Text
            style={{
              fontWeight: "medium",
              fontSize: 20,
              textAlign: "center",
              color: "blue",
            }}
          >
            UI UX Desain
          </Text>
          <Image
            style={{ width: 160, height: 160 }}
            source={{
              uri: "https://cdn.dribbble.com/users/14584629/screenshots/20363410/media/c150b7603d546cb77c7e62a856ce9e3a.jpeg?resize=768x576&vertical=center",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            See Trash
          </Text>
          <Text
            style={{
              fontWeight: "medium",
              fontSize: 20,
              textAlign: "center",
              color: "blue",
            }}
          >
            UI UX Desain
          </Text>
          <Image
            style={{ width: 160, height: 160 }}
            source={{
              uri: "https://cdn.dribbble.com/users/14584629/screenshots/20315398/media/c473081ca19beeb9652adc291b13fc74.png?resize=768x576&vertical=center",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            Product Desain
          </Text>
          <Text
            style={{
              fontWeight: "medium",
              fontSize: 20,
              textAlign: "center",
              color: "blue",
            }}
          >
            Web Design
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
