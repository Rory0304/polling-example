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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_getTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/getTask */ \"(app-pages-browser)/./src/api/getTask.ts\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/Subject.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/observable/interval.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/take.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/observable/from.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/first.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ \"(app-pages-browser)/./node_modules/react-use/esm/useUnmount.js\");\n\n\n\n\nconst useTaskGet = (param)=>{\n    let { taskId, onSuccess, onError } = param;\n    const [taskStatus, setTaskStatus] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n    const unsubscribeTask = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());\n    const pollingStatus = ()=>{\n        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(5), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(unsubscribeTask.current), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)((0,_api_getTask__WEBPACK_IMPORTED_MODULE_1__.getTask)())), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)((task)=>Boolean(task), null)).toPromise().then((res)=>{\n            console.log(res.result);\n            if (res.result) {\n                setTaskStatus(res.result || null);\n                if (res.result === \"done\") {\n                    console.log(\"done\");\n                    onSuccess();\n                    return;\n                }\n            }\n        }).catch((err)=>{\n            console.error(err);\n            onError();\n            return;\n        });\n    };\n    if (!!taskId) {\n        pollingStatus();\n    }\n    (0,react_use__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(()=>{\n        console.log(\"unmount\");\n        unsubscribeTask.current.complete();\n    });\n    return {\n        taskStatus\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTaskGet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VUYXNrR2V0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBUzFCO0FBQ3lCO0FBUXZDLE1BQU1VLGFBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFtQjtJQUNqRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2YscURBQWMsQ0FBZ0I7SUFDbEUsTUFBTWlCLGtCQUFrQmpCLG1EQUFZLENBQUMsSUFBSUUseUNBQU9BO0lBRWhELE1BQU1pQixnQkFBZ0I7UUFDcEJoQiw4Q0FBUUEsQ0FBQyxNQUNOaUIsSUFBSSxDQUNIaEIsMENBQUlBLENBQUMsSUFDTEcsK0NBQVNBLENBQUNVLGdCQUFnQkksT0FBTyxHQUNqQ2IsOENBQVFBLENBQUMsSUFBTUgsMENBQUlBLENBQUNKLHFEQUFPQSxNQUMzQkssMkNBQUtBLENBQUMsQ0FBQ2dCLE9BQVNDLFFBQVFELE9BQU8sT0FFaENFLFNBQVMsR0FDVEMsSUFBSSxDQUFDLENBQUNDO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsTUFBTTtZQUN0QixJQUFJSCxJQUFJRyxNQUFNLEVBQUU7Z0JBQ2RkLGNBQWNXLElBQUlHLE1BQU0sSUFBSTtnQkFFNUIsSUFBSUgsSUFBSUcsTUFBTSxLQUFLLFFBQVE7b0JBQ3pCRixRQUFRQyxHQUFHLENBQUM7b0JBQ1poQjtvQkFDQTtnQkFDRjtZQUNGO1FBQ0YsR0FDQ2tCLEtBQUssQ0FBQyxDQUFDQztZQUNOSixRQUFRSyxLQUFLLENBQUNEO1lBQ2RsQjtZQUNBO1FBQ0Y7SUFDSjtJQUVBLElBQUksQ0FBQyxDQUFDRixRQUFRO1FBQ1pRO0lBQ0Y7SUFFQVYscURBQVVBLENBQUM7UUFDVGtCLFFBQVFDLEdBQUcsQ0FBQztRQUNaWCxnQkFBZ0JJLE9BQU8sQ0FBQ1ksUUFBUTtJQUNsQztJQUVBLE9BQU87UUFBRW5CO0lBQVc7QUFDdEI7QUFFQSwrREFBZUosVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVGFza0dldC50cz81OTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFRhc2sgfSBmcm9tIFwiQC9hcGkvZ2V0VGFza1wiO1xuaW1wb3J0IHtcbiAgU3ViamVjdCxcbiAgaW50ZXJ2YWwsXG4gIHRha2UsXG4gIGZyb20sXG4gIGZpcnN0LFxuICB0YWtlVW50aWwsXG4gIG1lcmdlTWFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdXNlVW5tb3VudCB9IGZyb20gXCJyZWFjdC11c2VcIjtcblxuaW50ZXJmYWNlIHVzZVRhc2tHZXRQcm9wcyB7XG4gIHRhc2tJZDogc3RyaW5nO1xuICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQ7XG4gIG9uRXJyb3I6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHVzZVRhc2tHZXQgPSAoeyB0YXNrSWQsIG9uU3VjY2Vzcywgb25FcnJvciB9OiB1c2VUYXNrR2V0UHJvcHMpID0+IHtcbiAgY29uc3QgW3Rhc2tTdGF0dXMsIHNldFRhc2tTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlVGFzayA9IFJlYWN0LnVzZVJlZihuZXcgU3ViamVjdCgpKTtcblxuICBjb25zdCBwb2xsaW5nU3RhdHVzID0gKCkgPT4ge1xuICAgIGludGVydmFsKDEwMDApXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSg1KSxcbiAgICAgICAgdGFrZVVudGlsKHVuc3Vic2NyaWJlVGFzay5jdXJyZW50KSxcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gZnJvbShnZXRUYXNrKCkpKSxcbiAgICAgICAgZmlyc3QoKHRhc2spID0+IEJvb2xlYW4odGFzayksIG51bGwpXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XG4gICAgICAgIGlmIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgc2V0VGFza1N0YXR1cyhyZXMucmVzdWx0IHx8IG51bGwpO1xuXG4gICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09IFwiZG9uZVwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgICAgICAgICBvblN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIG9uRXJyb3IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaWYgKCEhdGFza0lkKSB7XG4gICAgcG9sbGluZ1N0YXR1cygpO1xuICB9XG5cbiAgdXNlVW5tb3VudCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ1bm1vdW50XCIpO1xuICAgIHVuc3Vic2NyaWJlVGFzay5jdXJyZW50LmNvbXBsZXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHRhc2tTdGF0dXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRhc2tHZXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRUYXNrIiwiU3ViamVjdCIsImludGVydmFsIiwidGFrZSIsImZyb20iLCJmaXJzdCIsInRha2VVbnRpbCIsIm1lcmdlTWFwIiwidXNlVW5tb3VudCIsInVzZVRhc2tHZXQiLCJ0YXNrSWQiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwidGFza1N0YXR1cyIsInNldFRhc2tTdGF0dXMiLCJ1c2VTdGF0ZSIsInVuc3Vic2NyaWJlVGFzayIsInVzZVJlZiIsInBvbGxpbmdTdGF0dXMiLCJwaXBlIiwiY3VycmVudCIsInRhc2siLCJCb29sZWFuIiwidG9Qcm9taXNlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImVycm9yIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useTaskGet.ts\n"));

/***/ })

});