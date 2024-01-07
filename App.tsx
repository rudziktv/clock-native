import { StatusBar } from "expo-status-bar";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import Span from "./src/Span";
import { useEffect, useState } from "react";
import MainClock from "./src/MainClock";
import ActionButton from "./src/ActionButton";
import Clock from "./src/Clock";
import TimezoneSearch from "./src/TimezoneSearch";
import { Timezones } from "./src/timezones";

export default function App() {
    // const date = new Date();

    const [date, setDate] = useState(Date.now());

    const [clocks, setClocks] = useState<string[]>([]);

    const [selectorShown, setSelectorShown] = useState(false);
    const [timezone, setTimezone] = useState("");

    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(Timezones);

    const filter = () => {
        setFiltered(
            Timezones.filter((tz) =>
                tz.toLowerCase().includes(search.toLowerCase().trim())
            )
        );
    };

    useEffect(() => {
        const delay = setTimeout(async () => {
            filter();
        }, 500);

        return () => clearTimeout(delay);
    }, [search]);

    useEffect(() => {
        if (timezone) {
            setSelectorShown(false);
            setClocks([...clocks, timezone]);
        }
    }, [timezone]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setDate(new Date().getTime());
    //         // console.log(date);
    //     }, 200);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <View style={styles.container}>
            <MainClock date={date} />
            <Modal
                transparent
                animationType="slide"
                visible={selectorShown}
                onRequestClose={() => setSelectorShown(false)}
            >
                <TimezoneSearch
                    filtered={filtered}
                    search={search}
                    setSearch={setSearch}
                    setTimezone={setTimezone}
                    // onClose={() => setSelectorShown(false)}
                />
            </Modal>

            <ScrollView
                style={{ alignSelf: "stretch" }}
                contentContainerStyle={styles.scroll}
            >
                <Clock date={date} name="Warsaw" />
                <Clock
                    date={date}
                    name="New York"
                    timezone="America/New_York"
                />
                {clocks.map((tz, i) => (
                    <Clock
                        date={date}
                        name={tz.split("/").pop()?.replace("_", " ")}
                        key={tz}
                        timezone={tz}
                        onDelete={() =>
                            setClocks(clocks.filter((_, j) => i !== j))
                        }
                    />
                ))}
            </ScrollView>
            <ActionButton onPress={() => setSelectorShown(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        paddingTop: 48,
    },
    scroll: {
        alignItems: "stretch",
        padding: 12,
        gap: 12,
    },
});
