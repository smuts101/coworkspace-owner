(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewhistory-viewhistory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewhistory/viewhistory.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewhistory/viewhistory.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesViewhistoryViewhistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>viewhistory</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\" >\r\n     \r\n  <div >\r\n\r\n    <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n      <ion-row>\r\n        <ion-buttons style=\"color:black\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n      </ion-row>\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Booking History</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n      <div style=\"border:1px solid white;bottom:0%;;position:relative;width:100%;\">\r\n        \r\n         <ion-grid>\r\n  \r\n  <ion-row>\r\n    <ion-item  *ngFor=\"let x of userprofile; let i = index\">\r\n      <ion-avatar style=\"width: 15%;height: 15%;\" slot=\"start\">\r\n        <img  [src]=\"x.img_profile\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div>  <span style=\"font-weight: bold;font-size: 1.5em;\">{{x.name}} {{x.surname}}</span></div>\r\n        <div><span style=\"font-size: 1em;color:rgb(168, 168, 168)\" >Email: {{x.email}}</span></div>\r\n        <div><span style=\"font-size: 1em;color:rgb(168, 168, 168)\" >Phone: {{x.phone}}</span></div>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-row>\r\n  \r\n           <ion-row>\r\n            <ion-card style=\"width:100%;left: 0;margin: 0%;\">\r\n              <img  style=\"width:100%;height: 300px;\" [src]=\"image\" />\r\n              <div style=\"position: relative;bottom:18px;z-index: 1;\">\r\n           </div>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color:#1E3D58;font-weight: bold;\">{{categories}}</ion-card-title>\r\n                <ion-card-subtitle>city: {{city}}</ion-card-subtitle>\r\n                <ion-card-subtitle>province: {{province}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <span style=\"color:rgb(126, 126, 231);\"><b>Anemities</b></span>\r\n                </ion-row>\r\n                <ion-row *ngFor=\"let y of amenities\">\r\n                  <ion-col size=\"2\">  {{y}}</ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              </ion-card-content>\r\n              <ion-grid style=\"padding-right: 2%;padding-left: 2%;width: 96%;border:1px solid whitesmoke;border-radius: 15px;background-color: whitesmoke;\">\r\n                <ion-row>\r\n                  <span style=\"color:rgb(126, 126, 231);\"><b>Checkin Dates</b></span>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>checkin: {{checkin}}</ion-col>\r\n                  <ion-col>timein: {{timein}} </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>checkout: {{checkout}} </ion-col>\r\n                  <ion-col>timeout: {{timeout}}</ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <ion-grid style=\"margin-top:2%; padding-right: 2%;padding-left: 2%;width: 96%;border:1px solid whitesmoke;border-radius: 15px;background-color: whitesmoke;\">\r\n                <ion-row>\r\n                  <span style=\"color:rgb(126, 126, 231);\"><b>Extras</b></span>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col><b>Item</b></ion-col>\r\n                  <ion-col><b>Price</b></ion-col>\r\n                  <ion-col><b>Total</b></ion-col>\r\n                  <ion-col><b>space+total</b></ion-col>\r\n                </ion-row>\r\n                <ion-row  *ngFor=\"let x of extras; let i = index\">\r\n                  <ion-col size=\"3\" >{{x.extraAmenities}}</ion-col> \r\n                  <ion-col size=\"3\" >R{{x.price}} </ion-col> \r\n                  <ion-col size=\"3\" >R{{x. extrasTotal}}</ion-col> \r\n                  <ion-col size=\"3\" >R{{x. totalCost}}</ion-col> \r\n                 </ion-row>\r\n              </ion-grid>\r\n            </ion-card>\r\n           </ion-row>\r\n         </ion-grid>\r\n  \r\n  \r\n          \r\n    \r\n      </div>\r\n  \r\n    </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n\r\n  <ion-grid style=\"font-size: 0.8em;\">\r\n    <ion-row>\r\n      <ion-list>\r\n        <ion-list-header>\r\n         <b>Profile</b>  \r\n        </ion-list-header>\r\n\r\n        <ion-item *ngFor=\"let x of userprofile; let i = index\" >\r\n          <ion-avatar slot=\"start\">\r\n            <img [src]=\"x.img_profile\">\r\n        \r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col><h2>{{x.name}}</h2></ion-col>\r\n                <ion-col><h2>{{x.surname}}</h2></ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3>Email: {{x.email}} </h3>\r\n              </ion-row>\r\n              <ion-row>\r\n                <h3>phone: {{x.phone}} </h3>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item >\r\n    \r\n  <ion-card  >\r\n    \r\n    \r\n    <img [src]=\"image\" style=\"width:100%;height: 50%;\">\r\n    <ion-card-header>\r\n      <ion-card-title> {{categories}}</ion-card-title>\r\n      <ion-card-subtitle>total: {{category_number}} </ion-card-subtitle>\r\n      <ion-card-subtitle>categories: {{categories}} </ion-card-subtitle>\r\n      <ion-card-subtitle>city: {{city}} </ion-card-subtitle>\r\n      <ion-card-subtitle>province: {{province}} </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n\r\n   <ion-grid>\r\n     <ion-row> \r\n  <ion-col  *ngFor=\"let y of amenities\">\r\n    {{y}}\r\n   </ion-col>\r\n  </ion-row>\r\n</ion-grid> \r\n   </ion-card-content>\r\n  \r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </ion-item>\r\n</ion-list>\r\n    </ion-row>\r\n    <ion-row>   <b>Date and Time</b>   </ion-row>\r\n    <ion-row >\r\n      <ion-col >checkin: {{checkin}} </ion-col> \r\n      <ion-col >timein: {{timein}} </ion-col> \r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-col >checkout: {{checkout}} </ion-col> \r\n      <ion-col >timeout: {{timeout}} </ion-col> \r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid >\r\n    <ion-row style=\"font-size: .9em;font-weight: bold;\">   <b>Extras   </b>    </ion-row>\r\n    <ion-row style=\"font-size: 0.8em;font-weight: bold;\" >\r\n     <ion-col  >Extras</ion-col> \r\n     <ion-col >Price</ion-col> \r\n     <ion-col >TotalExtras</ion-col> \r\n     <ion-col >Space()+Extras</ion-col> \r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid style=\"font-size: 0.8em;\">\r\n   \r\n    <ion-row  *ngFor=\"let x of extras; let i = index\">\r\n     <ion-col size=\"3\" >{{x.extraAmenities}}</ion-col> \r\n     <ion-col size=\"3\" >R{{x.price}} </ion-col> \r\n     <ion-col size=\"3\" >R{{x. extrasTotal}}</ion-col> \r\n     <ion-col size=\"3\" >R{{x. totalCost}}</ion-col> \r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <div *ngIf=\"available==0\">\r\n    <ion-button >padding booking</ion-button>\r\n    <p>Your are fully booked</p>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/viewhistory/viewhistory-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/viewhistory/viewhistory-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ViewhistoryPageRoutingModule */

    /***/
    function srcAppPagesViewhistoryViewhistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewhistoryPageRoutingModule", function () {
        return ViewhistoryPageRoutingModule;
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


      var _viewhistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./viewhistory.page */
      "./src/app/pages/viewhistory/viewhistory.page.ts");

      var routes = [{
        path: '',
        component: _viewhistory_page__WEBPACK_IMPORTED_MODULE_3__["ViewhistoryPage"]
      }];

      var ViewhistoryPageRoutingModule = function ViewhistoryPageRoutingModule() {
        _classCallCheck(this, ViewhistoryPageRoutingModule);
      };

      ViewhistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewhistoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/viewhistory/viewhistory.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/viewhistory/viewhistory.module.ts ***!
      \*********************************************************/

    /*! exports provided: ViewhistoryPageModule */

    /***/
    function srcAppPagesViewhistoryViewhistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewhistoryPageModule", function () {
        return ViewhistoryPageModule;
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


      var _viewhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./viewhistory-routing.module */
      "./src/app/pages/viewhistory/viewhistory-routing.module.ts");
      /* harmony import */


      var _viewhistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./viewhistory.page */
      "./src/app/pages/viewhistory/viewhistory.page.ts");

      var ViewhistoryPageModule = function ViewhistoryPageModule() {
        _classCallCheck(this, ViewhistoryPageModule);
      };

      ViewhistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _viewhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewhistoryPageRoutingModule"]],
        declarations: [_viewhistory_page__WEBPACK_IMPORTED_MODULE_6__["ViewhistoryPage"]]
      })], ViewhistoryPageModule);
      /***/
    },

    /***/
    "./src/app/pages/viewhistory/viewhistory.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/viewhistory/viewhistory.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesViewhistoryViewhistoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdoaXN0b3J5L3ZpZXdoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/viewhistory/viewhistory.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/viewhistory/viewhistory.page.ts ***!
      \*******************************************************/

    /*! exports provided: ViewhistoryPage */

    /***/
    function srcAppPagesViewhistoryViewhistoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewhistoryPage", function () {
        return ViewhistoryPage;
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


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");
      /* harmony import */


      var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/owner.service */
      "./src/app/services/owner.service.ts");
      /* harmony import */


      var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");

      var ViewhistoryPage = /*#__PURE__*/function () {
        function ViewhistoryPage(route, ownerservice, account) {
          var _this = this;

          _classCallCheck(this, ViewhistoryPage);

          this.route = route;
          this.ownerservice = ownerservice;
          this.account = account;
          this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
          this.user_uid = this.route.snapshot.params.useruid;
          this.reservationuid = this.route.snapshot.params.reservuid;
          this.profiles_uid = this.route.snapshot.params.profiles_uid;
          this.profile_uid = this.route.snapshot.params.profileuid;
          this.space_uid = this.route.snapshot.params.spaceuid;
          this.extras = [];
          this.spaceBooked = [];
          this.userprofile = [];
          this.amenities = [];
          console.log(this.user_uid);
          this.db.collectionGroup('user-profile').where("uid", "==", this.user_uid).get().then(function (snap) {
            snap.forEach(function (dat) {
              console.log(">>>>>" + dat.data());

              _this.userprofile.push(dat.data());
            });
          });
          console.log(this.reservationuid);
          this.db.collection("profiles").doc(this.account.getUserSession()).collection("profile").doc(this.profile_uid).collection("space").doc(this.space_uid).collection('reservation').doc(this.reservationuid).get().then(function (snap) {
            console.log(snap.data());
            _this.checkin = snap.data().checkin;
            _this.checkout = snap.data().checkout;
            _this.timein = snap.data().timein;
            _this.timeout = snap.data().timeout;
            _this.date = snap.data().date;
            _this.available = snap.data().availabe;
            _this.extras = Object.values(snap.data().extras);
            _this.read = snap.data().read; // if(!this.read)
            // this.ownerservice. readOrNot(this.account.getUserSession(),this.profile_uid,this.space_uid,this.reservationuid,true)
          });
        }

        _createClass(ViewhistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSpace();
          }
        }, {
          key: "getSpace",
          value: function getSpace() {
            var _this2 = this;

            this.db.collection("profiles").doc(this.account.getUserSession()).collection("profile").doc(this.profile_uid).collection("space").doc(this.space_uid).get().then(function (snap) {
              console.log("+++" + snap.data());
              _this2.categories = snap.data().categories;
              _this2.image = snap.data().image;
              _this2.category_number = snap.data().category_number;
              _this2.price = snap.data().price;
              _this2.address = snap.data().address;
              _this2.city = snap.data().city;
              _this2.province = snap.data().province;

              _this2.amenities.push(snap.data().amenities);
            });
          }
        }]);

        return ViewhistoryPage;
      }();

      ViewhistoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"]
        }];
      };

      ViewhistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewhistory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./viewhistory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewhistory/viewhistory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./viewhistory.page.scss */
        "./src/app/pages/viewhistory/viewhistory.page.scss"))["default"]]
      })], ViewhistoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-viewhistory-viewhistory-module-es5.js.map