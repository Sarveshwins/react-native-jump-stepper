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
exports.StepProvider = exports.useStep = exports.StepContext = void 0;
const react_1 = __importStar(require("react"));
exports.StepContext = react_1.default.createContext({
    activeStep: 0,
    stepCount: 0,
    themeColor: '#2196F3',
    jumpStep: undefined,
    jumpToStep: undefined,
});
function useStep() {
    return react_1.useContext(exports.StepContext);
}
exports.useStep = useStep;
exports.StepProvider = ({ children, themeColor, submitButtonText, allowTapOnTitle }) => {
    const [activeStep, setActiveStep] = react_1.default.useState(0);
    const [stepCount, setStepCount] = react_1.default.useState(0);
    react_1.useEffect(() => {
        const count = react_1.default.Children.count(children);
        console.log('Children Count', count);
        setStepCount(count);
    }, []);
    // Callback function from ProgressStep that passes current step.
    const jumpStep = (type) => {
        // Guard against setting current step higher than total step count.
        console.log('====',type)
      debugger
        let change = 0;
        if (type === 'up') {
            setActiveStep((actStep) => {
                    var newVal = actStep + 1;
                console.log('jumbing.. ', type, actStep, ' act:', activeStep, newVal);
                return newVal > -1 && newVal < stepCount ? newVal : actStep;
            });
        }
        else if (type === 'down') {
            setActiveStep((actStep) => {
                var newVal = actStep - 1;
            console.log('jumbing.. ', type, actStep, ' act:', activeStep, newVal);
            return newVal > -1 && newVal < stepCount ? newVal : actStep;
        });
        }
        else if (type === 'index') {
            debugger
            setActiveStep((actStep) => {
                var newVal = 0;
                console.log('check',stepCount)
            console.log('jumbing.. ', type, actStep, change, ' act:', activeStep, newVal);
            return newVal > -1 && newVal < stepCount ? newVal : actStep;
        });
        }

        // setActiveStep((actStep) => {
        //     console.log('===indexuse====', use)
        //     debugger
        //     if (use !== 'index') {
        //         var newVal = actStep + change;
        //     } else if (use == 'index') {
        //         var newVal = 0;
        //     }
        //     console.log('jumbing.. ', type, actStep, change, ' act:', activeStep, newVal);
        //     return newVal > -1 && newVal < stepCount ? newVal : actStep;
        // });
    };
    // jumpToStep
    const jumpToStep = (newStep) => {
        // Guard against setting current step higher than active step count.
        console.log('JUmpStep',newStep)
        if (newStep >= 0) {
            setActiveStep(newStep);
        }
    };
    const childrenArray = react_1.default.Children.toArray(children);
    const clonedArray = childrenArray.map((aChild, idx) => {
        const newProps = { position: idx };
        if (allowTapOnTitle)
            newProps['allowTapOnTitle'] = submitButtonText;
        if (idx === childrenArray.length - 1)
            newProps['nextButtonText'] = submitButtonText;
        return react_1.default.cloneElement(aChild, newProps);
    });
    return react_1.default.createElement(exports.StepContext.Provider, { value: { activeStep, stepCount, jumpStep, jumpToStep, themeColor } }, react_1.default.createElement(react_1.default.Fragment, null, clonedArray));
};
//# sourceMappingURL=StepProvider.js.map