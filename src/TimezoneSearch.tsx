import {
    View,
    StyleSheet,
    useWindowDimensions,
    TextInput,
    ScrollView,
} from "react-native";
import Span from "./Span";
import { Timezones } from "./timezones";
import Timezone from "./Timezone";
import { useState } from "react";

const TimezoneSearch = () => {
    const dimensions = useWindowDimensions();
    const [search, setSearch] = useState("");

    const style = StyleSheet.create({
        blur: {
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 3,

            width: dimensions.width,
            height: dimensions.height + 32,

            justifyContent: "center",
            alignItems: "stretch",

            padding: 24,
        },
        box: {
            backgroundColor: "#1F1F1F",
            padding: 12,
            borderRadius: 8,
            maxHeight: 512,
        },
        title: {
            fontSize: 18,
        },
    });

    return (
        <View style={style.blur}>
            <View style={style.box}>
                <Span style={style.title}>Select timezone</Span>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={"grey"}
                    value={search}
                    onChangeText={setSearch}
                />
                <ScrollView>
                    {Timezones.filter((zone) =>
                        zone.toLowerCase().includes(search.toLowerCase())
                    ).map((timezone) => (
                        <Timezone
                            name={timezone.replace("_", " ")}
                            key={timezone}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default TimezoneSearch;
