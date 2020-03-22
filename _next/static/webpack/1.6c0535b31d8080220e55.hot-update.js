webpackHotUpdate(1,{

/***/ "./simulations/Physics.js":
/*!********************************!*\
  !*** ./simulations/Physics.js ***!
  \********************************/
/*! exports provided: checkCollision, changeDirections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCollision", function() { return checkCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDirections", function() { return changeDirections; });
/* eslint-disable no-param-reassign */
var checkCollision = function checkCollision(currentPerson, otherPerson) {
  var horizontalDistance = otherPerson.x - currentPerson.x;
  var verticalDistance = otherPerson.y - currentPerson.y;
  return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2)) <= currentPerson.radius;
};

var changeDirections = function changeDirections(currentPerson, otherPerson) {
  var horizontalDistance = otherPerson.x - currentPerson.x;
  var verticalDistance = otherPerson.y - currentPerson.y;
  var impactAngle = Math.atan2(verticalDistance, horizontalDistance);
  var horizontalForce = Math.cos(impactAngle);
  var verticalForce = Math.sin(impactAngle);
  currentPerson.horizontalSpeed -= horizontalForce;
  currentPerson.verticalSpeed -= verticalForce;
  otherPerson.horizontalSpeed = horizontalForce;
  otherPerson.verticalSpeed = verticalForce;
};



/***/ })

})
//# sourceMappingURL=1.6c0535b31d8080220e55.hot-update.js.map