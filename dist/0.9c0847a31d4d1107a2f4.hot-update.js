webpackHotUpdate(0,{

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _index = __webpack_require__(624);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(622);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(72);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(623);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _reactRedux = __webpack_require__(416);\n\nvar _actions = __webpack_require__(628);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _components = {\n\t_component: {}\n};\n\nvar _DWwwLoudtronixLoudappNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n\tfilename: 'D:/www/loudtronix/loudapp/components/SearchBar.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _DWwwLoudtronixLoudappNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n\tfilename: 'D:/www/loudtronix/loudapp/components/SearchBar.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _DWwwLoudtronixLoudappNode_modulesReactTransformHmrLibIndexJs2(_DWwwLoudtronixLoudappNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n\t};\n}\n\nvar SearchBar = _wrapComponent('_component')(_react3.default.createClass({\n\tdisplayName: 'SearchBar',\n\n\tpropTypes: {\n\n\t\tonChange: _react2.PropTypes.func.isRequired\n\t},\n\trender: function render() {\n\n\t\treturn _react3.default.createElement(\n\t\t\t'form',\n\t\t\tnull,\n\t\t\t_react3.default.createElement('input', { type: 'text', onChange: function (_onChange) {\n\t\t\t\t\tfunction onChange(_x) {\n\t\t\t\t\t\treturn _onChange.apply(this, arguments);\n\t\t\t\t\t}\n\n\t\t\t\t\tonChange.toString = function () {\n\t\t\t\t\t\treturn _onChange.toString();\n\t\t\t\t\t};\n\n\t\t\t\t\treturn onChange;\n\t\t\t\t}(function (e) {\n\t\t\t\t\treturn onChange(e.target.value);\n\t\t\t\t}) }),\n\t\t\t_react3.default.createElement('input', { type: 'submit', value: 'submit' })\n\t\t);\n\t}\n\n}));\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tyo: \"yo\"\n\t};\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tonChange: function onChange(value) {\n\t\t\tdispatch((0, _actions.autofillSearch)(value));\n\t\t}\n\n\t};\n};\n\n(0, _reactRedux.connect)()(SearchBar);\n\nexports.default = SearchBar;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(485)(module)))//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzP2U5MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFZpc2liaWxpdHlGaWx0ZXIsIGF1dG9maWxsU2VhcmNoLCByZXN1bHRzU2VhcmNoIH0gZnJvbSAnLi4vYWN0aW9ucydcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRwcm9wVHlwZXM6e1xyXG5cdFx0XHJcblx0XHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG5cdH0sXHJcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdHJldHVybiAoXHJcblx0XHQ8Zm9ybSA+XHJcblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIi8+XHJcblx0PC9mb3JtPilcclxuXHR9XHJcblx0XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPSAoc3RhdGUpID0+e1xyXG5cdHJldHVybiB7XHJcblx0XHR5bzogXCJ5b1wiXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBcdG9uQ2hhbmdlOiAodmFsdWUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYXV0b2ZpbGxTZWFyY2godmFsdWUpKVxyXG4gICAgfVxyXG5cdCAgXHJcbiAgfVxyXG59XHJcblxyXG5jb25uZWN0KCkoU2VhcmNoQmFyKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbXBvbmVudHMvU2VhcmNoQmFyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})