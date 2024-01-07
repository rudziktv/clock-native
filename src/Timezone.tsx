import {
    View,
    StyleSheet,
    Pressable,
    StyleProp,
    ViewStyle,
} from "react-native";
import Span from "./Span";

const Timezone = ({ name, onPress, style }: TimezoneProps) => {
    return (
        <Pressable
            style={[styles.container, style]}
            onPress={onPress}
            android_ripple={{
                color: "#ffffff2f",
                borderless: false,
            }}
        >
            <Span>{name}</Span>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
});

export interface TimezoneProps {
    name: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export default Timezone;
