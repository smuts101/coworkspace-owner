(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-forget-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget/forget.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget/forget.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesForgetForgetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Forgot Password</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n\r\n<ion-content>\r\n    <div class=\"container\">\r\n       <h1 style=\"font-size: 24px;text-align: center; margin-top: -100px;\">Reset password</h1>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-label>Email</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\r\n        </ion-item>\r\n        <ion-button (click)=\"Reset()\" expand=\"full\" style=\"margin-left: 90px; margin-top: 50px;\">Reset</ion-button>\r\n    </ion-list>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/forget/forget-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/forget/forget-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ForgetPageRoutingModule */

    /***/
    function srcAppPagesForgetForgetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPageRoutingModule", function () {
        return ForgetPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _forget_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget.page */
      "./src/app/pages/forget/forget.page.ts");

      var routes = [{
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPage"]
      }];

      var ForgetPageRoutingModule = function ForgetPageRoutingModule() {
        _classCallCheck(this, ForgetPageRoutingModule);
      };

      ForgetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/forget/forget.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/forget/forget.module.ts ***!
      \***********************************************/

    /*! exports provided: ForgetPageModule */

    /***/
    function srcAppPagesForgetForgetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function () {
        return ForgetPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forget-routing.module */
      "./src/app/pages/forget/forget-routing.module.ts");
      /* harmony import */


      var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget.page */
      "./src/app/pages/forget/forget.page.ts");

      var ForgetPageModule = function ForgetPageModule() {
        _classCallCheck(this, ForgetPageModule);
      };

      ForgetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPageRoutingModule"]],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
      })], ForgetPageModule);
      /***/
    },

    /***/
    "./src/app/pages/forget/forget.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/forget/forget.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesForgetForgetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  display: flex;\n  flex-direction: column;\n  --background: #9010F5;\n  width: 100px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5MDEwRjU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/forget/forget.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/forget/forget.page.ts ***!
      \*********************************************/

    /*! exports provided: ForgetPage */

    /***/
    function srcAppPagesForgetForgetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPage", function () {
        return ForgetPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");

      var ForgetPage = /*#__PURE__*/function () {
        function ForgetPage(auth, route, loadingCtrl, alertCtrl) {
          _classCallCheck(this, ForgetPage);

          this.auth = auth;
          this.route = route;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(ForgetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Reset",
          value: function Reset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      loading = _context.sent;

                      if (!this.email) {
                        _context.next = 8;
                        break;
                      }

                      firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth().sendPasswordResetEmail(this.email).then(function (r) {
                        console.log("Email Reset");

                        _this.showAlertEmailSent();

                        _this.route.navigateByUrl('/signin');
                      }).then(function () {
                        loading.dismiss().then(function () {// this.router.navigateByUrl('/update-space');
                        });
                      }, function (error) {
                        loading.dismiss().then(function () {
                          console.log(error.message);

                          _this.showAlertErrorEmail();
                        });
                      });
                      _context.next = 7;
                      return loading.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showAlertErrorEmail",
          value: function showAlertErrorEmail() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        message: 'The entered Email ' + ' ' + this.email + ' ' + ' does not exist on our databases, enteterd correct one.',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showAlertEmailSent",
          value: function showAlertEmailSent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        message: "Success!!, An Email was sent to this Email address " + '  ' + this.email + '  ' + ' Click Okay to continue to Sign In',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return ForgetPage;
      }();

      ForgetPage.ctorParameters = function () {
        return [{
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignInSignUpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ForgetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forget.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget/forget.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forget.page.scss */
        "./src/app/pages/forget/forget.page.scss"))["default"]]
      })], ForgetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forget-forget-module-es5.js.map