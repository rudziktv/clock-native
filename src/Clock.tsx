import { View, StyleSheet, Pressable } from "react-native";
import Span from "./Span";
import { useEffect, useState } from "react";

const Clock = ({
    date,
    name = "Timezone",
    timezone = "Europe/Warsaw",
    refreshSec = 1000,
    onDelete,
}: ClockProps) => {
    // const [currentTime, setCurrentTime] = useState(
    //     new Date().toLocaleTimeString("pl-PL", { timeZone: timezone })
    // );

    // useEffect(() => {
    //     const tick = setInterval(() => {
    //         setCurrentTime(
    //             new Date().toLocaleTimeString("pl-PL", { timeZone: timezone })
    //         );
    //     }, refreshSec);

    //     return () => clearInterval(tick);
    // }, []);

    return (
        <Pressable style={style.card} onLongPress={onDelete}>
            <Span>{name}</Span>
            <Span style={style.time}>
                {date.toLocaleTimeString("pl-PL", { timeZone: timezone })}
            </Span>
        </Pressable>
    );
};

export interface ClockProps {
    date: Date;
    name?: string;
    timezone?: string;
    refreshSec?: number;
    onDelete?: () => void;
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
