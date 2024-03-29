import { StatusBar } from "expo-status-bar";
import {
    FlatList,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Span from "./src/Span";
import { useEffect, useState } from "react";
import MainClock from "./src/MainClock";
import ActionButton from "./src/ActionButton";
import Clock from "./src/Clock";
import TimezoneSearch from "./src/TimezoneSearch";
import { Timezones } from "./src/timezones";

export default function App() {
    // const date = new Date();

    const [date, setDate] = useState(new Date());

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

    useEffect(() => {
        if (!selectorShown) setSearch("");
    }, [selectorShown]);

    useEffect(() => {
        const tick = setInterval(() => {
            setDate(new Date());
            // console.log(date);
        }, 1000);

        return () => clearInterval(tick);
    }, []);

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

            {/* <ScrollView
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
            </ScrollView> */}
            <FlatList
                style={{ alignSelf: "stretch" }}
                contentContainerStyle={styles.scroll}
                data={clocks}
                renderItem={({ item: tz, index: i }) => (
                    <Clock
                        date={date}
                        name={tz.split("/").pop()?.replace("_", " ")}
                        key={tz}
                        timezone={tz}
                        onDelete={() =>
                            setClocks(clocks.filter((_, j) => i !== j))
                        }
                    />
                )}
            />
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
