import { View, StyleSheet, Pressable } from "react-native";
import Span from "./Span";

const Timezone = ({ name, onPress }: TimezoneProps) => {
    return (
        <Pressable style={style.container} onPress={onPress}>
            <Span>{name}</Span>
        </Pressable>
    );
};

const style = StyleSheet.create({
    container: {
        padding: 12,
    },
});

export interface TimezoneProps {
    name: string;
    onPress?: () => void;
}

export default Timezone;
