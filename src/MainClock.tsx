import { View, StyleSheet } from "react-native";
import Span from "./Span";
import { useEffect, useState } from "react";

const MainClock = ({ refreshSec = 1000 }: MainClockProps) => {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
    );
    const [currentDate, setCurrentDate] = useState(
        new Date().toLocaleDateString()
    );

    useEffect(() => {
        const tick = setInterval(() => {
            const date = new Date();
            setCurrentTime(date.toLocaleTimeString());
            setCurrentDate(date.toLocaleDateString());
        }, refreshSec);

        return () => clearInterval(tick);
    }, []);

    return (
        <View style={styles.container}>
            <Span style={styles.timezone}>Current</Span>
            <Span style={styles.time}>{currentTime}</Span>
            <Span style={styles.date}>{currentDate}</Span>
        </View>
    );
};

export interface MainClockProps {
    // date: Date;
    refreshSec?: number;
}

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
