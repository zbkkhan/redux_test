webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(159);\n\nvar _actions = __webpack_require__(161);\n\nvar initialState = {\n  page: \"home\",\n  autofill: \"\"\n};\n\nfunction search() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? initalState : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.SEARCH_TYPING:\n      return Object.assign({}, state, {\n        autofill: action.autofillResults\n      });\n    default:\n      return state;\n  }\n}\n//const todoApp = combineReducers({\n//\tsearch\n//})\n\nexports.default = search;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7U0VBUkNIX1RZUElORyAsIFNFQVJDSF9TVUJNSVR9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG52YXIgaW5pdGlhbFN0YXRlPXtcclxuXHRwYWdlOiBcImhvbWVcIixcclxuXHRhdXRvZmlsbDpcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFQVJDSF9UWVBJTkc6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBhdXRvZmlsbDogYWN0aW9uLmF1dG9maWxsUmVzdWx0c1xyXG4gICAgICAgICAgfSlcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4vL2NvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vL1x0c2VhcmNoXHJcbi8vfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiByZWR1Y2Vycy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBUUE7Ozs7O0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})