'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // let means you plan on chaning variable value along the way

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // we are on the server or user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/JFy6fh9FoWmkxHXGR0JC' // portal to get access to Ethereum network
  ); // url of infura node

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCLEMsQ0FBbUI7O0FBRW5CLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFO0FBQ3ZFO0FBQ0FBLFNBQU8sa0JBQVNDLE9BQU9ELElBQVAsQ0FBWUUsZUFBckIsQ0FBUDtBQUNELENBSEQsTUFHTztBQUNMO0FBQ0EsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsZ0RBQWhDLENBQWlGO0FBQWpGLEdBQWYsQ0FGSyxDQUdGOztBQUVITCxTQUFPLGtCQUFTRyxRQUFULENBQVA7QUFDRDs7a0JBRWNILEkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG52YXIgd2ViMyA9IHZvaWQgMDsgLy8gbGV0IG1lYW5zIHlvdSBwbGFuIG9uIGNoYW5pbmcgdmFyaWFibGUgdmFsdWUgYWxvbmcgdGhlIHdheVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuICAvLyB3ZSBhcmUgaW4gYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZ1xuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG4gIC8vIHdlIGFyZSBvbiB0aGUgc2VydmVyIG9yIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgdmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby9KRnk2Zmg5Rm9XbWt4SFhHUjBKQycgLy8gcG9ydGFsIHRvIGdldCBhY2Nlc3MgdG8gRXRoZXJldW0gbmV0d29ya1xuICApOyAvLyB1cmwgb2YgaW5mdXJhIG5vZGVcblxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCLEMsQ0FBbUI7O0FBRW5CLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFO0FBQ3ZFO0FBQ0FBLFNBQU8sa0JBQVNDLE9BQU9ELElBQVAsQ0FBWUUsZUFBckIsQ0FBUDtBQUNELENBSEQsTUFHTztBQUNMO0FBQ0EsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsZ0RBQWhDLENBQWlGO0FBQWpGLEdBQWYsQ0FGSyxDQUdGOztBQUVITCxTQUFPLGtCQUFTRyxRQUFULENBQVA7QUFDRDs7a0JBRWNILEkiLCJmaWxlIjoidW5rbm93biJ9