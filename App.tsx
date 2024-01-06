import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Span from "./src/Span";
import { useState } from "react";
import MainClock from "./src/MainClock";
import ActionButton from "./src/ActionButton";
import Clock from "./src/Clock";
import TimezoneSearch from "./src/TimezoneSearch";

export default function App() {
    return (
        <View style={styles.container}>
            <MainClock />
            <TimezoneSearch />

            <ScrollView
                style={{ alignSelf: "stretch" }}
                contentContainerStyle={styles.scroll}
            >
                <Clock name="Warsaw" />
                <Clock name="New York" timezone="America/New_York" />
            </ScrollView>
            <ActionButton />
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
