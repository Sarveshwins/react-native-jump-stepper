"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepView = void 0;
const react_native_1 = require("react-native");
const StepHeaderView_1 = require("./StepHeaderView");
const react_1 = __importStar(require("react"));
const StepProvider_1 = require("../StepProvider");
const ActionButton_1 = require("./ActionButton");
const ActionButton_2 = require("./ActionwithoutButton");
// const ActionWithoutButton_1 =require("./ActionwithoutButton");
const constants_1 = require("../constants");
// view for horizontal stepper
//let backEnable = false
function StepView({ position = 0, title, subTitle, children, color, onNext, onPrevious, onStartOver, onJumpOver, nextButtonText = 'Next', previousButtonText = 'Back', newnextButtonText = "Start Over", jumpButtonText = "Jump",orientation, allowTapOnTitle, onTitleTap, }) {
    console.log('orientationCheck',orientation)
    const { activeStep, stepCount, jumpStep, jumpToStep, themeColor } = StepProvider_1.useStep();
    if (onNext === undefined)
        onNext = () => Promise.resolve(true);

    if (onStartOver === undefined && position !== 0 && position !== 6 && !allowTapOnTitle && orientation!=="horizontal")
        onStartOver = () => Promise.resolve(true);
    if (onStartOver === 0 || onStartOver === 6)
        onStartOver = undefined;

    // undefined when tap on title is not allowd
    if (onPrevious === undefined && !allowTapOnTitle)
        onPrevious = () => Promise.resolve(true);
    // if (position === 0)
    //     onPrevious = undefined;
    const [err, setErr] = react_1.useState(undefined);
    const onNextPressed = async () => {
        // start loading screen
  //      backEnable = true
        const object = onNext && (await onNext());
        console.log('jumbing.. ', object);
        if (object.Isvalid === true) {
            setErr(undefined);
     //       backEnable = false
            if (object.Step) {
                jumpToStep && jumpToStep(object.Step);
            }
            else {
                jumpStep && jumpStep('up');
            }
        }
        else {
            if (typeof object === 'string')
                setErr(object);
        }
        // end loading screen
    };
    const onPreviousPressed = async () => {
        // start loading screen
      debugger  
        const isValid = onPrevious && (await onPrevious());

     //   backEnable = true
        if (isValid === true) {
            setErr(undefined);
            console.log('jumping down');
            jumpStep && jumpStep('down');
        }
        else {
            if (typeof isValid === 'string')
                setErr(isValid);
        }
        // end loading screen
    };
    const onStartOverPressed = async (a) => {
        debugger
        console.log('AAAA', a)
        // start loading screen

           const isValid = onStartOver && (await onStartOver());
           console.log('jumbing.. ', isValid);
        //  if (isValid === true) {
        //        setErr(undefined);
        // jumpStep && jumpStep('index');
        jumpToStep && jumpToStep(0);
        //  }
        //   else {
        // if (typeof isValid === 'string'){}
        //     setErr(isValid);
        //   }
        // end loading screen

    };

    const onJumpPressed = async () => {
        debugger
        // start loading screen
        //       setbackEnable(true)
        

        // let isValid = onJumpOver 
        // console.log('iSVALID', isValid)
        if (onJumpOver =="CopyAgenda") {
      //      alert('false')
      console.log('JumpIF',onJumpOver)
      jumpToStep && jumpToStep(10);
      onJumpOver="AddAgnda"
      console.log('JumpIFAfter',onJumpOver)
   //   backEnable = false
        } else {
        //    backEnable = false
        console.log('JumpElse',onJumpOver)
            
        }
     //   console.log('iSVALID', isValid)
        // console.log('iSVALID',isValid)
        //    console.log('jumbing.. ', isValid);
        //  if (isValid === true) {
        //        setErr(undefined);

        //  }
        //   else {
        // if (typeof isValid === 'string'){}
        //     setErr(isValid);
        //   }
        // end loading screen

    };
    console.log('CheckBack', onJumpOver)
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.indexRow },
            react_1.default.createElement(react_native_1.View, { style: { ...styles.stepperCircle, backgroundColor: position <= activeStep ? themeColor : constants_1.lineColor } },
                react_1.default.createElement(react_native_1.Text, { style: styles.stepperCircleText }, position + 1)),
            position < stepCount - 1 && react_1.default.createElement(react_native_1.View, { style: styles.connectingLine })),
        react_1.default.createElement(react_native_1.View, { style: styles.contentRow },
            react_1.default.createElement(StepHeaderView_1.StepHeaderView, { allowTapOnTitle: allowTapOnTitle || false, onTitleTap: onTitleTap, title: title, subTitle: subTitle, position: position, color: color }),
            react_1.default.createElement(react_native_1.View, { style: styles.contentView },
                err && react_1.default.createElement(react_native_1.Text, { style: { color: 'red' } }, `Error: ${err}`),
                position === activeStep && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_native_1.View, { style: styles.contentChildren }, children),
                    react_1.default.createElement(react_native_1.View, { style: styles.buttonRow },
                        //   react_1.default.createElement(ActionButton_2.ActionWithoutButton, { title: jumpButtonText, color: "#EA5333", onPress: onJumpPressed, hidden: onStartOver === undefined }),
                        react_1.default.createElement(ActionButton_1.ActionButton, { title: newnextButtonText, color: "#EA5333", onPress:  onStartOverPressed, hidden: onStartOver === undefined }),
                        //       react_1.default.createElement(ActionButton_1.ActionButton, { title: previousButtonText, color: themeColor, onPress: onPreviousPressed, hidden: onPrevious === undefined }),
                        onJumpOver!=="CopyAgenda"? react_1.default.createElement(ActionButton_1.ActionButton, { title: previousButtonText, color: themeColor, onPress: onPreviousPressed, hidden: onPrevious === undefined }) :
                            react_1.default.createElement(ActionButton_2.ActionWithoutButton, { title: previousButtonText, color: themeColor, onPress: onJumpPressed, hidden: onPrevious === undefined }),
                        react_1.default.createElement(ActionButton_1.ActionButton, { title: nextButtonText, color: themeColor, onPress: onNextPressed, hidden: onNext === undefined }))))))));
}
exports.StepView = StepView;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    indexRow: {},
    connectingLine: {
        flexGrow: 1,
        width: 1,
        backgroundColor: constants_1.lineColor,
        alignSelf: 'center',
        margin: 4,
    },
    contentRow: {
        paddingBottom: 16,
        flexShrink: 1,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    contentView: {
        padding: 4,
    },
    contentChildren: {},
    stepperCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        margin: 4,
    },
    stepperCircleText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 3,
        paddingVertical: 15,
        justifyContent: 'flex-end',
    },
});
//# sourceMappingURL=StepView.js.map