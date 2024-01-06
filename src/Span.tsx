import { Text, TextProps } from "react-native";

const Span = (props: TextProps) => (
    <Text style={[{ color: "#fff" }, props.style]}>{props.children}</Text>
);

export default Span;
