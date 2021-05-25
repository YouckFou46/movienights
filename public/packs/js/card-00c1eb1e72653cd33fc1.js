/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/card.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/card.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Script for the movie-card & Up-Down Votes
document.addEventListener("turbolinks:load", function (event) {
  var card = document.getElementsByClassName('moviecard__folder');
  var shortDescription = document.getElementsByClassName('moviecard__short_description');
  var extended = document.getElementsByClassName('moviecard__extended');
  var actors = document.getElementsByClassName('moviecard__actors');
  var upvote = document.getElementsByClassName('vote__upvote');
  var downvote = document.getElementsByClassName('vote__downvote');
  var upvoteNumber = document.getElementsByClassName('vote__number_upvotes');
  var downvoteNumber = document.getElementsByClassName('vote__number_downvotes');
  var state = "neutral";
  console.log(shortDescription);

  var _loop = function _loop(i) {
    var count = i; //Die Anzahl der Aktuellen Up- und Downvotes wird gespeichert

    var currentUpvotes = upvoteNumber[count].innerHTML;
    var currentDownvotes = downvoteNumber[count].innerHTML;
    card[count].addEventListener("click", function () {
      if (card[count].innerHTML === "AUSKLAPPEN") {
        shortDescription[count].classList.remove("moviecard__short_description--visible");
        shortDescription[count].classList.add("moviecard__short_description--invisible");
        extended[count].classList.remove("moviecard__extended--invisible");
        extended[count].classList.add("moviecard__extended--visible");
        actors[count].style.display = "block";
        card[count].innerHTML = "EINKLAPPEN";
      } else {
        shortDescription[count].classList.add("moviecard__short_description--visible");
        shortDescription[count].classList.remove("moviecard__short_description--invisible");
        extended[count].classList.add("moviecard__extended--invisible");
        extended[count].classList.remove("moviecard__extended--visible");
        card[count].innerHTML = "AUSKLAPPEN";
        actors[count].style.display = "none";
      }
    });
  };

  for (var i = 0; i < card.length; i++) {
    _loop(i);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=card-00c1eb1e72653cd33fc1.js.map