import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { MaterialCommunityIcons,Fontisto,FontAwesome5 } from '@expo/vector-icons';
import { Card } from "react-native-elements";
import { Platform } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Home = ({navigation}) => {

    const cards = [
        { key: 1, title: 'Diagnostic', backgroundColor: '#ff6f29', fontColor: '#fff', icon: <FontAwesome5 name="pen-fancy" size={24} color="#fff" /> },
        { key: 2, title: 'Shots', backgroundColor: '#fff', fontColor: 'black', icon:<Fontisto name="injection-syringe" size={24} color="#687aeb" /> },
        { key: 3, title: 'Consultation', backgroundColor: '#fff', fontColor: 'black', icon:<MaterialCommunityIcons name="phone-plus"  size={24} color="#687aeb" /> },
        { key: 4, title: 'Ambulance', backgroundColor: '#fff', fontColor: 'black', icon:<MaterialCommunityIcons name="ambulance" size={24} color="#687aeb" /> },
        { key: 5, title: 'Nurse', backgroundColor: '#ff6f29', fontColor: '#fff', icon:<FontAwesome5 name="user-nurse"  size={24} color="#fff"/> },
        { key: 6, title: 'Lab Work', backgroundColor: '#fff', fontColor: 'black', icon: <MaterialCommunityIcons name="test-tube" size={24} color="#687aeb"  /> }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.childOne}>
                <View style={{backgroundColor:'#e3ecff',paddingBottom:20}}>
                <View style={{ marginTop: 25, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/lady1.jpg')}
                            style={{ width: 45, height: 45, borderRadius: 8 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 30, fontFamily: 'NunitoRegular' }}>Hello,</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>Jesica!</Text>

                        <Image source={require('../assets/pill.png')}
                            style={{ width: 38, height: 38,marginLeft:5 }} />

                    </View>

                </View>
                </View>

                <View style={{backgroundColor:'#fff',borderTopLeftRadius:15,marginTop:-5,overflow:"hidden",height:height}}>


                <View style={{ flexDirection: "row", backgroundColor: '#fff',borderColor:'black',borderWidth:0.2,marginTop:10,marginLeft:5,marginRight:5, borderRadius: 15, padding: 10,zIndex:5,overflow:"hidden" }}>
                    <MaterialCommunityIcons name="magnify" size={24} color="black" />
                    <TextInput
                        underlineColorAndroid='transparent'
                        cursorColor={'transparent'}
                        style={Platform.OS==='web' ? { paddingLeft: 15, width: '100%',marginLeft:5,marginRight:5,outlineStyle: 'none' } : { paddingLeft: 15, width: '100%',marginLeft:5,marginRight:5}} placeholder="Search..."

                    />
                </View>
                <Card elevation={3}
                    containerStyle={{ borderColor: 'transparent', borderRadius: 15, backgroundColor: '#687aeb', position: "relative" }}>
                    <View style={{ flexDirection: "row", paddingBottom: 0, justifyContent: 'space-between' }}>

                        <View>
                            <Text style={{ fontFamily: 'NunitoRegular', fontSize: 20, fontWeight: "bold", color: '#fff' }}>Stay Home!</Text>
                            <Text style={{ fontFamily: 'NunitoRegular', fontSize: 19, color: '#d4d8fc' }}>Schedule an e-visit </Text>
                            <Text style={{ fontFamily: 'NunitoRegular', fontSize: 19, color: '#d4d8fc' }}>and discuss the plan</Text>
                            <Text style={{ fontFamily: 'NunitoRegular', fontSize: 19, color: '#d4d8fc' }}>with a doctor </Text>
                        </View>
                        <Image
                            source={require("../assets/girlnew.png")}
                            style={{
                                width: 130,
                                height: 130,
                                alignSelf: "center"
                            }}
                        />
                    </View>
                    <View style={{
                        width: 30,
                        height: 30,
                        position: "absolute",
                        zIndex: 5,
                        alignSelf: 'flex-end',
                        marginTop: -25,
                        borderRadius: 100,
                        shadowColor: "white",
                        backgroundColor: '#ff6f29',
                        justifyContent:"center",
                        top: 0,
                    }} >
                    <MaterialCommunityIcons name="close" size={24} color="#fff" style={{alignSelf:'center'}}/>
                    </View>

                </Card>

                <Text style={{ fontFamily: 'NunitoRegular', fontSize: 25, fontWeight: "700", color: 'black', marginLeft: 10 }}>What do you need?</Text>

                <View style={{justifyContent:"center",alignItems:"center"}}>
                <FlatList
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    data={cards}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('TopDoctors')}>
                            <Card
                                elevation={3}
                                containerStyle={{ borderColor: 'transparent',margin:5, borderRadius: 15, backgroundColor: item.backgroundColor}}>
                                <View style={{ alignItems: 'center' }}>
                                    {item.icon}
                                    <Text style={{ fontFamily: 'NunitoRegular', color: item.fontColor}}>{item.title}</Text>
                                </View>

                            </Card>
                            </TouchableOpacity>
                        </View>
                    )} />
                </View>
                </View>

            </View>

        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    childOne: {
        flex: 1,
        marginBottom:10,
        backgroundColor:'#e3ecff'
    },

});