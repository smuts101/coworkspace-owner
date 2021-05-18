(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-walkins-view-walkins-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-walkins/view-walkins.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-walkins/view-walkins.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesViewWalkinsViewWalkinsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n\r\n\r\n<ion-content>\r\n  <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:5%;padding-bottom:5%;\">\r\n    <ion-row>\r\n      <ion-buttons style=\"color:#1E3D58\" >\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-row>\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">View Walkins</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div style=\"border:1px solid white;bottom:0%;;position:relative;overflow: scroll;position: relative;height: 70%;\">\r\n        <ion-card *ngFor=\"let x of walkinList\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <div style=\"width: 100%;padding-top: 3%;\">Name: {{x.name}}</div>\r\n              <div style=\"width: 100%;padding-top: 3%;\">Surname: {{x.surname}}</div>\r\n              <div style=\"width: 100%;padding-top: 3%;\">Email: {{x.email}}</div>\r\n              <div style=\"width: 100%;padding-top: 3%;;padding-bottom: 3%;\">Phone:{{x.phone}}</div>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                checkin :{{x.checkin}}\r\n              </ion-col>\r\n              <ion-col>\r\n                timein :{{x.timein}}\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                checkout :{{x.checkout}}\r\n              </ion-col>\r\n              <ion-col>\r\n                timeout :{{x.timeout}}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      \r\n      </div>\r\n    </div>\r\n   </div> \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/view-walkins/view-walkins-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/view-walkins/view-walkins-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ViewWalkinsPageRoutingModule */

    /***/
    function srcAppPagesViewWalkinsViewWalkinsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewWalkinsPageRoutingModule", function () {
        return ViewWalkinsPageRoutingModule;
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


      var _view_walkins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-walkins.page */
      "./src/app/pages/view-walkins/view-walkins.page.ts");

      var routes = [{
        path: '',
        component: _view_walkins_page__WEBPACK_IMPORTED_MODULE_3__["ViewWalkinsPage"]
      }];

      var ViewWalkinsPageRoutingModule = function ViewWalkinsPageRoutingModule() {
        _classCallCheck(this, ViewWalkinsPageRoutingModule);
      };

      ViewWalkinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewWalkinsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/view-walkins/view-walkins.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/view-walkins/view-walkins.module.ts ***!
      \***********************************************************/

    /*! exports provided: ViewWalkinsPageModule */

    /***/
    function srcAppPagesViewWalkinsViewWalkinsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewWalkinsPageModule", function () {
        return ViewWalkinsPageModule;
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


      var _view_walkins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-walkins-routing.module */
      "./src/app/pages/view-walkins/view-walkins-routing.module.ts");
      /* harmony import */


      var _view_walkins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-walkins.page */
      "./src/app/pages/view-walkins/view-walkins.page.ts");

      var ViewWalkinsPageModule = function ViewWalkinsPageModule() {
        _classCallCheck(this, ViewWalkinsPageModule);
      };

      ViewWalkinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_walkins_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewWalkinsPageRoutingModule"]],
        declarations: [_view_walkins_page__WEBPACK_IMPORTED_MODULE_6__["ViewWalkinsPage"]]
      })], ViewWalkinsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/view-walkins/view-walkins.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/view-walkins/view-walkins.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesViewWalkinsViewWalkinsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctd2Fsa2lucy92aWV3LXdhbGtpbnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/view-walkins/view-walkins.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/view-walkins/view-walkins.page.ts ***!
      \*********************************************************/

    /*! exports provided: ViewWalkinsPage */

    /***/
    function srcAppPagesViewWalkinsViewWalkinsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewWalkinsPage", function () {
        return ViewWalkinsPage;
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


      var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");
      /* harmony import */


      var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/owner.service */
      "./src/app/services/owner.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js"); //////////////Geolocation and Geocode//////////


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Geolocation = _capacitor_core__WEBP.Geolocation,
          Toast = _capacitor_core__WEBP.Toast;

      var ViewWalkinsPage = /*#__PURE__*/function () {
        function ViewWalkinsPage(nativeGeocoder, ngZone, popover, route, ownerservice, account) {
          var _this = this;

          _classCallCheck(this, ViewWalkinsPage);

          this.nativeGeocoder = nativeGeocoder;
          this.ngZone = ngZone;
          this.popover = popover;
          this.route = route;
          this.ownerservice = ownerservice;
          this.account = account;
          this.spaceuid = this.route.snapshot.params.spaceuid;
          this.category = this.route.snapshot.params.category;
          this.profileuid = this.route.snapshot.params.profileuid;
          this.walkinList = [];
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles").doc(this.account.getUserSession()).collection("profile").doc(this.profileuid).collection("space").doc(this.spaceuid).collection("walkins").where("spaceuid", "==", this.spaceuid).orderBy("date").get().then(function (doc) {
            doc.forEach(function (dat) {
              _this.walkinList.push(Object.assign(dat.data(), {
                "walkinuid": dat.id
              }));

              console.log(dat.data());
            });
          });
        }

        _createClass(ViewWalkinsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ViewWalkinsPage;
      }();

      ViewWalkinsPage.ctorParameters = function () {
        return [{
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerServiceService"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"]
        }];
      };

      ViewWalkinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-walkins',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-walkins.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-walkins/view-walkins.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-walkins.page.scss */
        "./src/app/pages/view-walkins/view-walkins.page.scss"))["default"]]
      })], ViewWalkinsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-view-walkins-view-walkins-module-es5.js.map