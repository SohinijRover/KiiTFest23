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

/***/ "./components/Events.jsx":
/*!*******************************!*\
  !*** ./components/Events.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst EventSection = (param)=>{\n    let { isMenuShown } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img\",\n        style: {\n            backgroundImage: 'url(\"/assets/background-images/events-bg.png\")'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8 flex flex-col items-center justify-center duration-500 w-full \".concat(isMenuShown ? \"opacity-20\" : \"opacity-100\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/assets/gradients/event_gradient.png\",\n                alt: \"event details\",\n                width: 60,\n                height: 50,\n                style: {\n                    alignSelf: \"flex-start\",\n                    marginLeft: 0\n                }\n            }, void 0, false, {\n                fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Events.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Events.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gauravtripathi/Desktop/personal/KiiTFest23/components/Events.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EventSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventSection);\nvar _c;\n$RefreshReg$(_c, \"EventSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V2ZW50cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxXQUFXLEVBQUU7SUFDbkMscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsT0FBTztZQUFFQyxpQkFBaUI7UUFBaUQ7a0JBRTNFLDRFQUFDSDtZQUNDQyxXQUFXLHFFQUVWLE9BRENGLGNBQWMsZUFBZTtzQkFHL0IsNEVBQUNGLG1EQUFLQTtnQkFDTk8sS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkwsT0FBTztvQkFBRU0sV0FBVztvQkFBY0MsWUFBWTtnQkFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RDtLQXJCTVg7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudHMuanN4P2ZlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEV2ZW50U2VjdGlvbiA9ICh7IGlzTWVudVNob3duIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIG1iLTEyIGJnLWZpeGVkIGJnLWNlbnRlciBiZy1jb3ZlciBjdXN0b20taW1nXCJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChcIi9hc3NldHMvYmFja2dyb3VuZC1pbWFnZXMvZXZlbnRzLWJnLnBuZ1wiKScgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHAtOCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBkdXJhdGlvbi01MDAgdy1mdWxsICR7XG4gICAgICAgICAgaXNNZW51U2hvd24gPyBcIm9wYWNpdHktMjBcIiA6IFwib3BhY2l0eS0xMDBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvZ3JhZGllbnRzL2V2ZW50X2dyYWRpZW50LnBuZ1wiXG4gICAgICAgIGFsdD1cImV2ZW50IGRldGFpbHNcIlxuICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsIG1hcmdpbkxlZnQ6IDAgfX1cbiAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkV2ZW50U2VjdGlvbiIsImlzTWVudVNob3duIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImFsaWduU2VsZiIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Events.jsx\n"));

/***/ })

});