webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./store/index.js");



var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  index: _index__WEBPACK_IMPORTED_MODULE_2__["default"]
});
function initializeStore(state) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, // Object.assign({}, initialState, state),
  Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
  return store;
}

/***/ })

})
//# sourceMappingURL=index.js.62573b41be4225dcfb75.hot-update.js.map