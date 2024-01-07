import { useState } from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";

const TextField = ({ ...props }: TextFieldProps) => {
    const [focused, setFocused] = useState(false);

    const style = StyleSheet.create({
        box: {
            backgroundColor: "#333333",
            borderRadius: 20,
            // borderBottomWidth: focused ? 2 : 1,
            // borderBottomColor: focused ? "#5863F8" : "grey",
            // marginBottom: focused ? 0 : 1,
        },
        input: {
            color: "white",
            fontSize: 16,
            height: 40,
            paddingHorizontal: 16,
        },
    });

    return (
        <View style={style.box}>
            <TextInput
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={[style.input, props.style]}
                placeholderTextColor={"gray" || props.placeholderTextColor}
                cursorColor={"#5863F8" || props.cursorColor}
                {...props}
            />
        </View>
    );
};

export interface TextFieldProps extends TextInputProps {}

export default TextField;
