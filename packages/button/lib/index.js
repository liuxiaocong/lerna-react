"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = _styledComponents["default"].button.withConfig({
  displayName: "src__Button",
  componentId: "hjweup-0"
})(["background:yellow;color:#fff;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:400;padding:9px 36px;"]);

var _default = Button;
exports["default"] = _default;