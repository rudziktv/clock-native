import { View, StyleSheet } from "react-native";
import Span from "./Span";
import { useState } from "react";

const Clock = ({
    name = "Timezone",
    timezone = "Europe/Warsaw",
}: ClockProps) => {
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 1000);

    return (
        <View style={style.card}>
            <Span>{name}</Span>
            <Span style={style.time}>
                {date.toLocaleTimeString("pl-PL", { timeZone: timezone })}
            </Span>
        </View>
    );
};

export interface ClockProps {
    name?: string;
    timezone?: string;
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#1F1F1F",
        padding: 12,
        borderRadius: 8,
    },
    time: {
        fontSize: 36,
    },
});

export default Clock;
