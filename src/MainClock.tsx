import { View, StyleSheet } from "react-native";
import Span from "./Span";
import { useState } from "react";

const MainClock = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        setCurrentDate(new Date().toLocaleDateString());
    }, 1000);

    return (
        <View style={styles.container}>
            <Span style={styles.timezone}>Current</Span>
            <Span style={styles.time}>{currentTime}</Span>
            <Span style={styles.date}>{currentDate}</Span>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        // padding: 24,
    },
    timezone: {
        fontSize: 14,
        color: "grey",
    },
    time: {
        fontSize: 48,
    },
    date: {
        fontSize: 18,
        color: "lightgrey",
    },
});

export default MainClock;
