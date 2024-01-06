import {
    ButtonProps,
    Pressable,
    PressableProps,
    StyleSheet,
    View,
} from "react-native";
import Span from "./Span";

const ActionButton = (props: PressableProps) => {
    return (
        <View style={style.container}>
            <Pressable
                style={style.pressable}
                android_ripple={{ color: "#0000001f", borderless: true }}
                {...props}
            >
                <Span style={style.icon}>+</Span>
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5863F8",

        height: 56,
        width: 56,
        borderRadius: 12,

        position: "absolute",
        right: 24,
        bottom: 24,
    },
    pressable: {
        height: 56,
        width: 56,

        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: "#fff",
        fontSize: 24,
    },
});

export default ActionButton;
