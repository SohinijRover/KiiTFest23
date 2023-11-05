"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import {Robot_Invaders } from 'next/font/google'\nconst Timer = ()=>{\n    _s();\n    const ct = new Date(\"Nov 10, 2023 00:00:00\").getTime();\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function updateCountdown() {\n            const currentDate = new Date().getTime();\n            const timeRemaining = ct - currentDate;\n            setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));\n            setHours(Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));\n            setMinutes(Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60)));\n            setSeconds(Math.floor(timeRemaining % (1000 * 60) / 1000));\n        }\n        setInterval(updateCountdown, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl\",\n                        children: days\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl\",\n                        children: \"DAYS\"\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl\",\n                        children: hours\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl\",\n                        children: \"HOURS\"\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"/Assets/Timer/Dots.svg\",\n                alt: \"dots\"\n            }, void 0, false, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl\",\n                        children: minutes\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl\",\n                        children: \"MINS\"\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[106px] p-2  flex flex-col justify-between items-center text-white bg-gradient-to-b w-[110px] rounded-lg from-thGradBlue via-thGradDBlue to-thGradPink\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl\",\n                        children: seconds\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 14\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl\",\n                        children: \"SECS\"\n                    }, void 0, false, {\n                        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Timer.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timer, \"Eb+VxA7Tbkp7jVFfvE3lE1BUgpA=\");\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDQTtBQUNRO0FBQ0Q7QUFDaEMsbURBQW1EO0FBRW5ELE1BQU1JLFFBQVE7O0lBQ1YsTUFBTUMsS0FBSyxJQUFJQyxLQUFLLHlCQUF5QkMsT0FBTztJQUVwRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFJdkNELGdEQUFTQSxDQUFDO1FBQ04sU0FBU2M7WUFDTCxNQUFNQyxjQUFjLElBQUlYLE9BQU9DLE9BQU87WUFDdEMsTUFBTVcsZ0JBQWdCYixLQUFLWTtZQUczQlIsUUFBUVUsS0FBS0MsS0FBSyxDQUFDRixnQkFBaUIsUUFBTyxLQUFLLEtBQUssRUFBQztZQUN0RFAsU0FBU1EsS0FBS0MsS0FBSyxDQUFDLGdCQUFrQixRQUFPLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEVBQUM7WUFFNUVQLFdBQVdNLEtBQUtDLEtBQUssQ0FBQyxnQkFBa0IsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7WUFFcEVMLFdBQVdJLEtBQUtDLEtBQUssQ0FBQyxnQkFBa0IsUUFBTyxFQUFDLElBQU07UUFFMUQ7UUFDQUMsWUFBWUwsaUJBQWlCO0lBQ2pDLEdBQUUsRUFBRTtJQUlOLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNWLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBWWY7Ozs7OztrQ0FDM0IsOERBQUNjO3dCQUFJQyxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRS9CLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZYjs7Ozs7O2tDQUMzQiw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFL0IsOERBQUN0Qiw2Q0FBS0E7Z0JBQUN1QixLQUFJO2dCQUF5QkMsS0FBSTs7Ozs7OzBCQUN4Qyw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNWLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBWVg7Ozs7OztrQ0FDM0IsOERBQUNVO3dCQUFJQyxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRS9CLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZVDs7Ozs7O2tDQUMzQiw4REFBQ1E7d0JBQUlDLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQW5ETW5CO0tBQUFBO0FBcUROLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGltZXIuanN4Pzg0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHtSb2JvdF9JbnZhZGVycyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5cbmNvbnN0IFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGN0ID0gbmV3IERhdGUoXCJOb3YgMTAsIDIwMjMgMDA6MDA6MDBcIikuZ2V0VGltZSgpIFxuXG4gICAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKVxuXG5cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdGltZVJlbWFpbmluZyA9IGN0IC0gY3VycmVudERhdGU7XG4gICAgICAgIFxuXG4gICAgICAgICAgICBzZXREYXlzKE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkpXG4gICAgICAgICAgICBzZXRIb3VycyhNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpKVxuICAgICBcbiAgICAgICAgICAgIHNldE1pbnV0ZXMoTWF0aC5mbG9vcigodGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpKVxuICAgICAgIFxuICAgICAgICAgICAgc2V0U2Vjb25kcyhNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCkpIC8gMTAwMCkpXG4gIFxuICAgICAgICB9XG4gICAgICAgIHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgMTAwMCk7XG4gICAgfSxbXSlcblxuICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVsxMDZweF0gcC0yICBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iIHctWzExMHB4XSByb3VuZGVkLWxnIGZyb20tdGhHcmFkQmx1ZSB2aWEtdGhHcmFkREJsdWUgdG8tdGhHcmFkUGluayc+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNXhsJz57ZGF5c308L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0zeGwnPkRBWVM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVsxMDZweF0gcC0yICBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iIHctWzExMHB4XSByb3VuZGVkLWxnIGZyb20tdGhHcmFkQmx1ZSB2aWEtdGhHcmFkREJsdWUgdG8tdGhHcmFkUGluayc+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNXhsJz57aG91cnN9PC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtM3hsJz5IT1VSUzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9Bc3NldHMvVGltZXIvRG90cy5zdmdcIiBhbHQ9XCJkb3RzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzEwNnB4XSBwLTIgIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWIgdy1bMTEwcHhdIHJvdW5kZWQtbGcgZnJvbS10aEdyYWRCbHVlIHZpYS10aEdyYWREQmx1ZSB0by10aEdyYWRQaW5rJz5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC01eGwnPnttaW51dGVzfTwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTN4bCc+TUlOUzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzEwNnB4XSBwLTIgIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWIgdy1bMTEwcHhdIHJvdW5kZWQtbGcgZnJvbS10aEdyYWRCbHVlIHZpYS10aEdyYWREQmx1ZSB0by10aEdyYWRQaW5rJz5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC01eGwnPntzZWNvbmRzfTwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTN4bCc+U0VDUzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRpbWVyIiwiY3QiLCJEYXRlIiwiZ2V0VGltZSIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJ1cGRhdGVDb3VudGRvd24iLCJjdXJyZW50RGF0ZSIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiZmxvb3IiLCJzZXRJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Timer.jsx\n"));

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = next;

/***/ })

});