"use strict";
(self["webpackChunkreact_ssr"] = self["webpackChunkreact_ssr"] || []).push([["src_Comments_js"],{

/***/ "./src/Comments.js":
/*!*************************!*\
  !*** ./src/Comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _withDataFetching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withDataFetching */ "./src/withDataFetching.js");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const Comments = ({
  data
}) => {
  return /*#__PURE__*/React.createElement("div", null, data?.map((comment, i) => /*#__PURE__*/React.createElement("p", {
    className: "comment",
    key: i
  }, comment)));
};
Comments.getDataId = function () {
  return 'comment-list';
};
Comments.getFetchingProps = function (data) {
  return data.read();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withDataFetching__WEBPACK_IMPORTED_MODULE_0__["default"])(Comments));

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": () => (/* binding */ DataProvider),
/* harmony export */   "useData": () => (/* binding */ useData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.0.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function DataProvider({
  children,
  data
}) {
  return /*#__PURE__*/React.createElement(DataContext.Provider, {
    value: data
  }, children);
}
function useData() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DataContext);
  return ctx;
}

/***/ }),

/***/ "./src/withDataFetching.js":
/*!*********************************!*\
  !*** ./src/withDataFetching.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(WrappedComponent) {
  return function ({
    ...props
  }) {
    const resource = (0,_data__WEBPACK_IMPORTED_MODULE_0__.useData)();
    const id = WrappedComponent.getDataId();
    const isClientSide = typeof window !== 'undefined';
    let data;
    if (isClientSide) {
      const dataElement = document.querySelector(`#${id}`);
      const serverData = JSON.parse(dataElement.dataset.serverData || '');
      if (serverData) {
        data = serverData;
      }
    }
    // 其他 case 下使用 data fetching 获取数据（服务端、客户端是同构的）
    if (!data) {
      data = WrappedComponent.getFetchingProps(resource);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      id: id,
      "data-server-data": JSON.stringify(data)
    }), /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
      data: data
    })));
  };
}
;

/***/ })

}]);
//# sourceMappingURL=src_Comments_js.main.js.map