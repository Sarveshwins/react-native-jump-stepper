"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_2 = require("react");
const hideStyle = {
    width: 0,
    paddingHorizontal: 0,
};
exports.ActionButton = ({ hidden = false, style = {}, color = '#9F9F9F', title, onPress }) => {
    const [loading, setLoading] = react_2.useState(false);
    // onPress
    const onPressAction = async () => {
    //    setLoading(true);
        await onPress();
     //   setLoading(false);
    };
    // occupy space but hide.
    const defaultStyle = {
        backgroundColor: color,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 4,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        marginRight: 6,
    };
    const hide = hidden
        ? {
            width: 0,
            paddingHorizontal: 0,
        }
        : {};
    return hidden ? null : (react_1.default.createElement(react_native_1.TouchableOpacity, { style: { ...defaultStyle, ...style, ...hide }, disabled: hidden || loading, onPress: onPressAction }, loading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { size: 'small', color: '#ffffff', style: { paddingRight: 8 } })) : (react_1.default.createElement(react_native_1.Text, { style: { color: style.color || defaultStyle.color } }, title))));
};
//# sourceMappingURL=ActionButton.js.map