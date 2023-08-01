"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/hooks/useTaskGet.ts":
/*!*********************************!*\
  !*** ./src/hooks/useTaskGet.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_getTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/getTask */ \"(app-pages-browser)/./src/api/getTask.ts\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/Subject.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/observable/interval.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/take.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/observable/from.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/first.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ \"(app-pages-browser)/./node_modules/react-use/esm/useUnmount.js\");\n\n\n\n\nconst useTaskGet = (param)=>{\n    let { taskId, onSuccess, onError } = param;\n    const [taskStatus, setTaskStatus] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n    const unsubscribeTask = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());\n    const pollingStatus = ()=>{\n        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(5), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(unsubscribeTask.current), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)((0,_api_getTask__WEBPACK_IMPORTED_MODULE_1__.getTask)())), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)((task)=>Boolean(task), null)).toPromise().then((res)=>{\n            console.log(res);\n            if (res) {\n                setTaskStatus(res.result || null);\n                if (res.result === \"done\") {\n                    console.log(\"done\");\n                    onSuccess();\n                    return;\n                }\n            }\n        }).catch((err)=>{\n            console.error(err);\n            onError();\n            return;\n        });\n    };\n    if (!!taskId) {\n        pollingStatus();\n    }\n    (0,react_use__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(()=>{\n        console.log(\"unmount\");\n        unsubscribeTask.current.complete();\n    });\n    return {\n        taskStatus\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTaskGet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VUYXNrR2V0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBUzFCO0FBQ3lCO0FBUXZDLE1BQU1VLGFBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFtQjtJQUNqRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YscURBQWMsQ0FBZ0I7SUFDbEUsTUFBTWlCLGtCQUFrQmpCLG1EQUFZLENBQUMsSUFBSUUseUNBQU9BO0lBRWhELE1BQU1pQixnQkFBZ0I7UUFDcEJoQiw4Q0FBUUEsQ0FBQyxNQUNOaUIsSUFBSSxDQUNIaEIsMENBQUlBLENBQUMsSUFDTEcsK0NBQVNBLENBQUNVLGdCQUFnQkksT0FBTyxHQUNqQ2IsK0NBQVNBLENBQUMsSUFBTUgsMENBQUlBLENBQUNKLHFEQUFPQSxNQUM1QkssMkNBQUtBLENBQUMsQ0FBQ2dCLE9BQVNDLFFBQVFELE9BQU8sT0FFaENFLFNBQVMsR0FDVEMsSUFBSSxDQUFDLENBQUNDO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxLQUFLO2dCQUNQWCxjQUFjVyxJQUFJRyxNQUFNLElBQUk7Z0JBRTVCLElBQUlILElBQUlHLE1BQU0sS0FBSyxRQUFRO29CQUN6QkYsUUFBUUMsR0FBRyxDQUFDO29CQUNaaEI7b0JBQ0E7Z0JBQ0Y7WUFDRjtRQUNGLEdBQ0NrQixLQUFLLENBQUMsQ0FBQ0M7WUFDTkosUUFBUUssS0FBSyxDQUFDRDtZQUNkbEI7WUFDQTtRQUNGO0lBQ0o7SUFFQSxJQUFJLENBQUMsQ0FBQ0YsUUFBUTtRQUNaUTtJQUNGO0lBRUFWLHFEQUFVQSxDQUFDO1FBQ1RrQixRQUFRQyxHQUFHLENBQUM7UUFDWlgsZ0JBQWdCSSxPQUFPLENBQUNZLFFBQVE7SUFDbEM7SUFFQSxPQUFPO1FBQUVuQjtJQUFXO0FBQ3RCO0FBRUEsK0RBQWVKLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRhc2tHZXQudHM/NTk1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUYXNrIH0gZnJvbSBcIkAvYXBpL2dldFRhc2tcIjtcbmltcG9ydCB7XG4gIFN1YmplY3QsXG4gIGludGVydmFsLFxuICB0YWtlLFxuICBmcm9tLFxuICBmaXJzdCxcbiAgdGFrZVVudGlsLFxuICBzd2l0Y2hNYXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB1c2VVbm1vdW50IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5pbnRlcmZhY2UgdXNlVGFza0dldFByb3BzIHtcbiAgdGFza0lkOiBzdHJpbmc7XG4gIG9uU3VjY2VzczogKCkgPT4gdm9pZDtcbiAgb25FcnJvcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgdXNlVGFza0dldCA9ICh7IHRhc2tJZCwgb25TdWNjZXNzLCBvbkVycm9yIH06IHVzZVRhc2tHZXRQcm9wcykgPT4ge1xuICBjb25zdCBbdGFza1N0YXR1cywgc2V0VGFza1N0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdW5zdWJzY3JpYmVUYXNrID0gUmVhY3QudXNlUmVmKG5ldyBTdWJqZWN0KCkpO1xuXG4gIGNvbnN0IHBvbGxpbmdTdGF0dXMgPSAoKSA9PiB7XG4gICAgaW50ZXJ2YWwoMTAwMClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDUpLFxuICAgICAgICB0YWtlVW50aWwodW5zdWJzY3JpYmVUYXNrLmN1cnJlbnQpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbShnZXRUYXNrKCkpKSxcbiAgICAgICAgZmlyc3QoKHRhc2spID0+IEJvb2xlYW4odGFzayksIG51bGwpXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHNldFRhc2tTdGF0dXMocmVzLnJlc3VsdCB8fCBudWxsKTtcblxuICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSBcImRvbmVcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICAgICAgICAgICAgb25TdWNjZXNzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBvbkVycm9yKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmICghIXRhc2tJZCkge1xuICAgIHBvbGxpbmdTdGF0dXMoKTtcbiAgfVxuXG4gIHVzZVVubW91bnQoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidW5tb3VudFwiKTtcbiAgICB1bnN1YnNjcmliZVRhc2suY3VycmVudC5jb21wbGV0ZSgpO1xuICB9KTtcblxuICByZXR1cm4geyB0YXNrU3RhdHVzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUYXNrR2V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0VGFzayIsIlN1YmplY3QiLCJpbnRlcnZhbCIsInRha2UiLCJmcm9tIiwiZmlyc3QiLCJ0YWtlVW50aWwiLCJzd2l0Y2hNYXAiLCJ1c2VVbm1vdW50IiwidXNlVGFza0dldCIsInRhc2tJZCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJ0YXNrU3RhdHVzIiwic2V0VGFza1N0YXR1cyIsInVzZVN0YXRlIiwidW5zdWJzY3JpYmVUYXNrIiwidXNlUmVmIiwicG9sbGluZ1N0YXR1cyIsInBpcGUiLCJjdXJyZW50IiwidGFzayIsIkJvb2xlYW4iLCJ0b1Byb21pc2UiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useTaskGet.ts\n"));

/***/ })

});