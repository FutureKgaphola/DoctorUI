import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons, Fontisto, FontAwesome5,FontAwesome, Ionicons } from '@expo/vector-icons';
import { Card } from "react-native-elements";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const TopDoctors = ({ navigation }) => {
    const cards = [
        { key: 1, title: '', backgroundColor: '#fff', fontColor: 'black', icon: <FontAwesome name="heartbeat" size={28} color="#687aeb" /> },
        { key: 2, title: '', backgroundColor: '#ff6f29', fontColor: '#fff', icon: <Fontisto name="stethoscope" size={28} color="#fff" /> },
        { key: 3, title: '', backgroundColor: '#fff', fontColor: 'black', icon: <FontAwesome5 name="tooth" size={28} color="#687aeb" /> },
        { key: 4, title: '', backgroundColor: '#fff', fontColor: 'black', icon: <MaterialCommunityIcons name="dna" size={28} color="#687aeb" /> },
        { key: 5, title: '', backgroundColor: '#ff6f29', fontColor: '#fff', icon: <Fontisto name="pills" size={28} color="#fff" /> },
    ];
    const doctors = [
        { key: 1, title: 'Dr. Jaison',subtitle:'Pulmonogist', backgroundColor: '#00bed8',time:'10:00 AM - 3:00 PM'},
        { key: 2, title: 'Dr. Wilson',subtitle:'General pulmonogist', backgroundColor: '#687ae9',time:'10:00 AM - 2:00 PM'},
        { key: 3, title: 'Dr. Adams', subtitle:'Pulmonogist',backgroundColor: '#00c985',time:'11:00 AM - 4:00 PM'},
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
                                                
                                            </View>

                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            )} />
                    </View>

                    <FlatList
                    data={doctors}
                    renderItem={({item})=>(
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
                                    backgroundColor: item.backgroundColor,
                                    borderRadius: 6
                                }}
                            />

                            <View >
                                <Text style={{ color:'black',marginLeft: 20,fontFamily:'NunitoRegular',fontWeight:'bold'}}>Doctor J</Text>
                                <Text style={{color:'gray', marginLeft: 20,fontFamily:'NunitoRegular'}}>{item.subtitle}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between',marginTop:10 }}>
                                    <View style={{marginLeft:18}}>
                                        <Text style={{color:'black',fontFamily:'NunitoRegular'}}>⭐5.5 </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color:'black',fontFamily:'NunitoRegular'}}>
                                        🕝 {item.time}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </Card>
                    )}
                    
                    
                    />

                    

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