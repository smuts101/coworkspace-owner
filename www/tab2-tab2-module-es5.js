(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Google Map\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <agm-map [usePanning]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"12\" [disableDefaultUI]=\"false\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=true></agm-marker>\r\n  </agm-map>\r\n  <ion-grid class=\"status-grid\">\r\n    <ion-row>\r\n      <ion-col *ngIf=\"showingCurrent\">\r\n        Showing Current Location\r\n      </ion-col>\r\n      <ion-col *ngIf=\"!showingCurrent\">\r\n        Showing Geocoded Location\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-button color=\"success\" (click)=\"setCurrentPosition()\" expand=\"full\" class=\"ion-margin\">Show My Location\r\n  </ion-button>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Enter Address to Geocode</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"address\" name=\"address\"></ion-input>\r\n  </ion-item>\r\n  <ion-row class=\"ion-padding-horizontal ion-padding-top\" *ngIf=\"!showingCurrent\">\r\n    <ion-text class=\"coords\">My Latitude : {{lat}}</ion-text>\r\n  </ion-row>\r\n  <ion-row class=\"ion-padding-horizontal\" *ngIf=\"!showingCurrent\">\r\n    <ion-text class=\"coords\">My Longitude : {{lng}}</ion-text>\r\n  </ion-row>\r\n  <ion-button color=\"success\" (click)=\"geocode()\" expand=\"full\" class=\"ion-margin\">\r\n    Geocode Address</ion-button>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
        }])],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "agm-map {\n  height: 50vh;\n}\n\nagm-map .gm-svpc {\n  display: none;\n}\n\n.status-grid {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgLmdtLXN2cGMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLnN0YXR1cy1ncmlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          Geolocation = _capacitor_core__WEBP.Geolocation,
          Toast = _capacitor_core__WEBP.Toast;

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(nativeGeocoder, ngZone) {
          _classCallCheck(this, Tab2Page);

          this.nativeGeocoder = nativeGeocoder;
          this.ngZone = ngZone;
          this.showingCurrent = true;
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setCurrentPosition();
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var coordinates;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Geolocation.getCurrentPosition();

                    case 2:
                      coordinates = _context.sent;
                      this.ngZone.run(function () {
                        _this.lat = coordinates.coords.latitude;
                        _this.lng = coordinates.coords.longitude;
                      });
                      this.showingCurrent = true;

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "geocode",
          value: function geocode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.address != "")) {
                        _context2.next = 5;
                        break;
                      }

                      options = {
                        useLocale: true,
                        maxResults: 5
                      };
                      this.nativeGeocoder.forwardGeocode(this.address, options).then(function (result) {
                        _this2.ngZone.run(function () {
                          _this2.lat = parseFloat(result[0].latitude);
                          _this2.lng = parseFloat(result[0].longitude); // this.myMap.triggerResize()
                          //   .then(() => (this.myMap as any)._mapsWrapper.setCenter({ lat: this.lat, lng: this.lng }));
                        });

                        _this2.showingCurrent = false;
                      })["catch"](function (error) {
                        return console.log(error);
                      });
                      _context2.next = 7;
                      break;

                    case 5:
                      _context2.next = 7;
                      return Toast.show({
                        text: 'Please add address to Geocode'
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map