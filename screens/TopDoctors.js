import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons, Fontisto, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Card } from "react-native-elements";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const TopDoctors = ({ navigation }) => {
    const cards = [
        { key: 1, title: 'Diagnostic', backgroundColor: '#ff6f29', fontColor: '#fff', icon: <FontAwesome5 name="pen-fancy" size={24} color="#fff" /> },
        { key: 2, title: 'Shots', backgroundColor: '#fff', fontColor: 'black', icon: <Fontisto name="injection-syringe" size={24} color="#687aeb" /> },
        { key: 3, title: 'Consultation', backgroundColor: '#fff', fontColor: 'black', icon: <MaterialCommunityIcons name="phone-plus" size={24} color="#687aeb" /> },
        { key: 4, title: 'Ambulance', backgroundColor: '#fff', fontColor: 'black', icon: <MaterialCommunityIcons name="ambulance" size={24} color="#687aeb" /> },
        { key: 5, title: 'Diagnostic', backgroundColor: '#ff6f29', fontColor: '#fff', icon: <FontAwesome5 name="user-nurse" size={24} color="#fff" /> },
        { key: 6, title: 'Diagnostic', backgroundColor: '#fff', fontColor: 'black', icon: <MaterialCommunityIcons name="test-tube" size={24} color="#687aeb" /> }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.childOne}>
                <View style={{ backgroundColor: '#7081fb', paddingBottom: 20 }}>
                    <View style={{ marginTop: 25, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                            width: 45,
                            height: 45, borderRadius: 8, backgroundColor: '#ebecf1',
                            justifyContent: 'center',
                            margin: 5, marginLeft: 10
                        }}>
                            <Ionicons name="md-chevron-back" size={24} color="black" style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>

                        <Text style={{ fontSize: 30, fontWeight: "bold", color: '#fff', fontFamily: 'NunitoRegular', marginLeft: 10, marginTop: 30, alignSelf: 'center' }}>Top Doctors ⭐</Text>

                    </View>
                </View>

                <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 15, marginTop: -5, overflow: "hidden", height: height }}>

                    <View style={{ marginTop: 25, padding: 6, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'NunitoRegular', fontWeight: "bold" }}>Categories</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'NunitoRegular' }}>See all</Text>
                    </View>


                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cards}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                        <Card
                                            elevation={3}
                                            containerStyle={{ borderColor: 'transparent', margin: 5, borderRadius: 15, backgroundColor: item.backgroundColor }}>
                                            <View style={{ alignItems: 'center' }}>
                                                {item.icon}
                                                <Text style={{ fontFamily: 'NunitoRegular', color: item.fontColor }}>{item.title}</Text>
                                            </View>

                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            )} />
                    </View>



                    <Card
                        elevation={3}
                        containerStyle={{ borderColor: 'transparent', margin: 5, borderRadius: 15, backgroundColor: '#fff' }}>

                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/doctor.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center",
                                    backgroundColor: '#00bed8',
                                    borderRadius: 6
                                }}
                            />

                            <View >
                                <Text>Doctor J</Text>
                                <Text>Doctor J</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>⭐ 5.5</Text>
                                    </View>
                                    <View>
                                        <Text style={{ marginLeft: width - 300 }}>
                                        🕝 10:00AM - 03:00PM
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </Card>

                </View>

            </View>

        </View>
    );
}

export default TopDoctors;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    childOne: {
        flex: 1,
        backgroundColor: '#7081fb'
    },

});