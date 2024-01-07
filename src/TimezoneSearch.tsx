import {
    View,
    StyleSheet,
    useWindowDimensions,
    TextInput,
    ScrollView,
    Pressable,
    FlatList,
} from "react-native";
import Span from "./Span";
import { Timezones } from "./timezones";
import Timezone from "./Timezone";
import { useEffect, useState } from "react";
import TextField from "./TextField";

const TimezoneSearch = ({
    setTimezone,
    filtered,
    search,
    setSearch,
}: TimezoneSearchProps) => {
    // const dimensions = useWindowDimensions();
    // const [search, setSearch] = useState("");
    // const [filtered, setFiltered] = useState(Timezones);

    // const filter = () => {
    //     setFiltered(
    //         Timezones.filter((tz) =>
    //             tz.toLowerCase().includes(search.toLowerCase().trim())
    //         )
    //     );
    // };

    // useEffect(() => {
    //     const delay = setTimeout(async () => {
    //         filter();
    //     }, 500);

    //     return () => clearTimeout(delay);
    // }, [search]);

    const style = StyleSheet.create({
        blur: {
            // position: "absolute",
            // top: 0,
            // left: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 3,

            flex: 1,

            justifyContent: "center",
            alignItems: "stretch",

            padding: 24,
        },
        box: {
            backgroundColor: "#1F1F1F",
            padding: 12,
            borderRadius: 8,
            maxHeight: 512,
            gap: 8,
            marginVertical: "auto",
            marginHorizontal: 12,

            // alignSelf: "center",
        },
        title: {
            fontSize: 18,
            fontWeight: "bold",
        },
    });

    return (
        <View style={style.blur}>
            <View style={style.box}>
                <Span style={style.title}>Select timezone</Span>
                <TextField
                    placeholder="Type city..."
                    value={search}
                    onChangeText={setSearch}
                />
                {/* <ScrollView> */}
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => item}
                    renderItem={({ item, index: i }) => (
                        <Timezone
                            key={item}
                            name={item.replace(/_/g, " ")}
                            style={{
                                borderTopWidth: i === 0 ? 0 : 1,
                                borderTopColor: "#333333",
                            }}
                            onPress={() => setTimezone?.(item)}
                        />
                    )}
                />
                {/* {filtered.map((tz, i) => (
                        <Timezone
                            key={tz}
                            name={tz.replace(/_/g, " ")}
                            style={{
                                borderTopWidth: i === 0 ? 0 : 1,
                                borderTopColor: "#333333",
                            }}
                            onPress={() => setTimezone?.(tz)}
                        />
                    ))} */}
                {/* </ScrollView> */}
            </View>
        </View>
    );
};

export interface TimezoneSearchProps {
    setTimezone?: (tz: string) => void;
    onClose?: () => void;

    search?: string;
    setSearch?: (search: string) => void;
    filtered: string[];
}

export default TimezoneSearch;
