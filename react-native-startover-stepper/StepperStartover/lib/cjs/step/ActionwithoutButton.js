"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionWithoutButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
import{useEffect} from 'react';
const react_2 = require("react");
const hideStyle = {
    width: 0,
    paddingHorizontal: 0,
};

exports.ActionWithoutButton = ({ hidden = false, style = {}, color = '#9F9F9F', title, onPress }) => {
    const [loading, setLoading] = react_2.useState(false);
    // onPress
    useEffect(() => {
        onPresswithoutAct();
      }, []);
    const onPresswithoutAct = async () => {
   //     setLoading(true);
        await onPress();
     //   setLoading(false);
    };
    // occupy space but hide.
    const defaultStyle = {
        backgroundColor: color,
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        elevation: 4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginRight: 16,
    };
    const hide = hidden
        ? {
            width: 0,
            paddingHorizontal: 0,
        }
        : {};
    return hidden ? null : (react_1.default.createElement(react_native_1.TouchableOpacity, { style: { ...defaultStyle, ...style, ...hide }, disabled: hidden || loading, onPress: onPresswithoutAct }, loading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { size: 'small', color: '#ffffff', style: { paddingRight: 8 } })) : (react_1.default.createElement(react_native_1.Text, { style: { color: style.color || defaultStyle.color } }, title))));
};
//# sourceMappingURL=ActionButton.js.map