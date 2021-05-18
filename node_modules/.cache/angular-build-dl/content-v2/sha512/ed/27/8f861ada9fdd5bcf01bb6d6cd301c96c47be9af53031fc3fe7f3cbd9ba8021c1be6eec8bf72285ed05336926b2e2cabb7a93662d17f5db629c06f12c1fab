(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-landing-owner-landing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOwnerLandingOwnerLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-buttons>\r\n    <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n\r\n    <!-- <div class=\"top\" style=\"background-color: #E5E9F8;\">\r\n        <ion-icon style=\"width: 30px; height: 30px; color: #A944F1; size: 5px;\" slot=\"start\" name=\"log-out-outline\" (click)=\"logout()\">Sign out</ion-icon>\r\n    </div> -->\r\n    <!-- <div class=\"bgImg\"> <img style=\"width: 100%; height: 50%;\" src=\"assets/bgg.jpg\"></div> -->\r\n    <ion-content>\r\n    <div class=\"wrapper\">\r\n        <div class=\"textBorder\">\r\n            <p style=\"font-size:24px; color:black; font-weight: bold; text-align: center;\">Welcome to MySpace!</p>\r\n            <p style=\"font-size: 14px; color: black; text-align: center;\">You can begin adding your work space.</p>\r\n        </div>\r\n        <!-- <div class=\"new\">\r\n            <p style=\"font-size: 18px; color: black;\">You can begin adding your working space.</p>\r\n        </div> -->\r\n        <!-- <div class=\"stats\"> -->\r\n            <!-- <p style=\"font-size: 10px; color: rgb(150, 141, 141);position: absolute;right: 3%;\">25-12-12</p> -->\r\n            <!-- <p style=\"font-size: 20px; font-weight: bold; color: white;position: absolute;left: 3%;\">My stats</p> -->\r\n            <!-- <p style=\"font-size: 12px;position: absolute;color: rgb(150, 141, 141);left: 3%;\">Your content at a bird eye's view</p>\r\n        </div> -->\r\n        <div class=\"stats2\">\r\n            <p style=\"font-size: 18px;font-weight: bold; color: black;position: absolute;left: 3%;\">My stats</p>\r\n        </div>\r\n        <div class=\"catagories\">\r\n\r\n            <ion-card style=\"width:40%; background-color: #A944F1; height: 100%;\">\r\n                <p *ngIf=\"this.newBookNum!=0\" style=\"position: absolute;left: 5%;top: 2%;font-weight: bold;font-size: 20px;\">{{ this.newBookNum}}</p>\r\n                <p *ngIf=\"this.newBookNum==0\" style=\"position: absolute;left: 5%;top: 2%;font-weight: bold;font-size: 20px;\">{{ this.newBookNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">New Bookings</p>\r\n            </ion-card>\r\n            <ion-card style=\"width:40%; background-color: #16D6E3; height: 100%;font-size: 20px;font-weight: bold\">\r\n                <p *ngIf=\"this.oldBookNum!=0\" style=\"position: absolute;left:5%;top: 2%;\">{{this.oldBookNum}}</p>\r\n                <p *ngIf=\"this.oldBookNum==0\" style=\"position: absolute;left:5%;top: 2%;\">{{this.oldBookNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">History</p>\r\n            </ion-card>\r\n            <ion-card style=\"width:40%; background-color: #2D98E6; height: 100%;font-size: 20px;font-weight: bold\">\r\n                <p *ngIf=\"this.spacesNum!=0\" style=\"position: absolute;left: 5%;top: 2%;\"> {{this.spacesNum}}</p>\r\n                <p *ngIf=\"this.spacesNum==0\" style=\"position: absolute;left: 5%;top: 2%;\"> {{this.spacesNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">Spaces\r\n\r\n                </p>\r\n            </ion-card>\r\n        </div>\r\n\r\n        <div class=\"bottom\">\r\n           \r\n\r\n            <ion-segment style=\"position: absolute; top: 0%;\" [(ngModel)]=\"selectedtabs\">\r\n                <ion-segment-button value=\"History\">\r\n                    <ion-label style=\"color:black;\">New bookings</ion-label>\r\n                </ion-segment-button>\r\n                <ion-segment-button (click)=\"history()\" value=\"Newbookings\">\r\n                    <ion-label style=\"color: black;\">History</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n\r\n            <div class=\"segments\" style=\"padding:0%;width: 100%; height: 90%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'History'\">\r\n                <ion-card style=\"width: 100%;height: 65%;background-color: white;padding:0%;\">\r\n\r\n\r\n                    <ion-grid>\r\n                        <ion-row *ngFor=\"let y of bookings\" style=\"color:grey;font-size:0.8em;\">\r\n                            <ion-col size=\"12\"> <a [routerLink]=\"['/viewbooking',y.reservationuid,y.profiles_uid,y.profile_uid,y.space_uid,y.user_uid]\" style=\"color:grey\">{{y.checkin}} / {{y.checkout}} / {{y.timein}} / {{y.timeout}} <ion-badge *ngIf=\"y.read==false\" style=\"color: red;\"  color=\"light\">new</ion-badge></a></ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ion-card>\r\n            </div>\r\n\r\n\r\n            <div class=\"segments\" style=\"width: 100%; height: 90%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'Newbookings'\">\r\n\r\n                <ion-card style=\"width: 100%;height: 65%;background-color: white;\">\r\n                    <ion-grid>\r\n                        <ion-row *ngFor=\"let y of bookingsHistory\" style=\"color:grey;font-size:0.8em;\">\r\n                            <ion-col size=\"12\"> <a [routerLink]=\"['/viewhistory',y.reservationuid,y.profiles_uid,y.profile_uid,y.space_uid,y.user_uid]\" style=\"color:grey\">{{y.checkin}} / {{y.checkout}} / {{y.timein}} / {{y.timeout}} <ion-badge *ngIf=\"y.read==false\" style=\"color: red;\"  color=\"light\">new</ion-badge></a></ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ion-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"z-index: 1;position: absolute; height: 65px;bottom: 0px;background-color:  #6E66B0; display: flex;justify-content: center;align-items: center;\">\r\n    <div style=\"width:20%;height: 50px;background-color:  #E5E9F8;color:#60bdcf;left: 40%;position: relative;border-radius: 100%;top:-20px;text-align: center;\">\r\n        <ion-icon [routerLink]=\"'/add-space'\" style=\"font-size: 40px;color:#60bdcf;padding: 2%;\" name=\"add-circle-outline\"></ion-icon> \r\n    </div>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col><ion-icon [routerLink]=\"'/profile'\" style=\"font-size: 30px;position: absolute;right: 7%;color: white;\" name=\"person-outline\"></ion-icon></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-icon [routerLink]=\"'/walkins'\" style=\"font-size: 30px;position: absolute;right: 45%;color: white;\" name=\"walk-outline\"></ion-icon>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-icon [routerLink]=\"'/owner-landing'\" style=\"font-size: 30px;position: absolute;left: 7%;color: white;\" name=\"home-outline\"></ion-icon>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer>\r\n\r\n\r\n<!-- <ion-content>\r\n    <div>\r\n        <ion-icon style=\"width: 30px; height: 30px; color: #A944F1; size: 5px;\" slot=\"start\" name=\"log-out-outline\" (click)=\"logout()\">Sign out</ion-icon>\r\n    </div>\r\n\r\n    <div class=\"bgImg\"> <img style=\"width: 100%; height: 50%;\" src=\"assets/bgg.jpg\"></div>\r\n    <div class=\"wrapper\">\r\n        <div class=\"textBorder\">\r\n     \r\n\r\n        </div>\r\n        <div class=\"stats\">\r\n\r\n            <p style=\"font-size: 10px; color: rgb(150, 141, 141);position: absolute;right: 3%;\">25-12-12</p>\r\n         \r\n            <p style=\"font-size: 12px;position: absolute;color: rgb(150, 141, 141);left: 3%;\">Your content at a bird eye's view</p>\r\n        </div>\r\n        <div class=\"stats2\">\r\n\r\n\r\n            <p style=\"font-size: 12px;font-weight: bold; color: white;position: absolute;left: 3%;\">My stats</p>\r\n\r\n        </div>\r\n        <div class=\"catagories\">\r\n\r\n            <ion-card style=\"width:40%; background-color: #A944F1; height: 100%;\">\r\n                <p *ngIf=\"this.newBookNum!=0\" style=\"position: absolute;left: 5%;top: 2%;font-weight: bold;font-size: 20px;\">{{ this.newBookNum}}</p>\r\n                <p *ngIf=\"this.newBookNum==0\" style=\"position: absolute;left: 5%;top: 2%;font-weight: bold;font-size: 20px;\">{{ this.newBookNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">New Bookings</p>\r\n            </ion-card>\r\n            <ion-card style=\"width:40%; background-color: #16D6E3; height: 100%;font-size: 20px;font-weight: bold\">\r\n                <p *ngIf=\"this.oldBookNum!=0\" style=\"position: absolute;left:5%;top: 2%;\">{{this.oldBookNum}}</p>\r\n                <p *ngIf=\"this.oldBookNum==0\" style=\"position: absolute;left:5%;top: 2%;\">{{this.oldBookNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">History</p>\r\n            </ion-card>\r\n            <ion-card style=\"width:40%; background-color: #2D98E6; height: 100%;font-size: 20px;font-weight: bold\">\r\n              \r\n\r\n\r\n                <p *ngIf=\"this.spacesNum!=0\" style=\"position: absolute;left: 5%;top: 2%;\"> {{this.spacesNum}}</p>\r\n                <p *ngIf=\"this.spacesNum==0\" style=\"position: absolute;left: 5%;top: 2%;\"> {{this.spacesNum}}</p>\r\n                <p style=\"position: absolute; right:5%;bottom: 2%;font-size: 10px;\">Spaces\r\n\r\n                </p>\r\n            </ion-card>\r\n        </div>\r\n\r\n        <div class=\"bottom\">\r\n         \r\n\r\n\r\n            <ion-segment style=\"position: absolute; top: 0%;\" [(ngModel)]=\"selectedtabs\">\r\n                <ion-segment-button value=\"History\">\r\n                    <ion-label style=\"color:grey;\">New bookings</ion-label>\r\n                </ion-segment-button>\r\n                <ion-segment-button (click)=\"history()\" value=\"Newbookings\">\r\n                    <ion-label style=\"color: grey;\">History</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n\r\n            <div class=\"segments\" style=\"padding:0%;width: 100%; height: 85%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'History'\">\r\n                <ion-card style=\"width: 80%;height: 90%;background-color: black; opacity: 30%;padding:0%;\">\r\n\r\n\r\n                    <ion-grid>\r\n                        <ion-row *ngFor=\"let y of bookings\" style=\"color:white;font-size:0.8em;\">\r\n                            <ion-col size=\"12\"> <a [routerLink]=\"['/viewbooking',y.reservationuid,y.profiles_uid,y.profile_uid,y.space_uid,y.user_uid]\" style=\"color:white\">{{y.checkin}} / {{y.checkout}} / {{y.timein}} / {{y.timeout}} <ion-badge *ngIf=\"y.read==false\" style=\"color: red;\"  color=\"light\">new</ion-badge></a></ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </ion-card>\r\n            </div>\r\n            <div class=\"segments\" style=\"width: 100%; height: 85%;position: absolute;bottom:0px;\" *ngIf=\"selectedtabs == 'Newbookings'\">\r\n\r\n                <ion-card style=\"width: 80%;height: 90%;background-color: black; opacity: 30%; \">\r\n                    <ion-grid>\r\n                        <ion-row *ngFor=\"let y of bookingsHistory\" style=\"color:white;font-size:0.8em;\">\r\n                            <ion-col size=\"12\"> <a [routerLink]=\"['/viewhistory',y.reservationuid,y.profiles_uid,y.profile_uid,y.space_uid,y.user_uid]\" style=\"color:white\">{{y.checkin}} / {{y.checkout}} / {{y.timein}} / {{y.timeout}} <ion-badge *ngIf=\"y.read==false\" style=\"color: red;\"  color=\"light\">new</ion-badge></a></ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </ion-card>\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n   </div>\r\n\r\n</ion-content>\r\n<ion-footer style=\"position: absolute; height: 50px;bottom: 0px;background-color:  #303d3d; display: flex;justify-content: center;align-items: center;\">\r\n\r\n    <ion-icon [routerLink]=\"'/profile'\" style=\"font-size: 30px;position: absolute;right: 7%;color: grey;\" name=\"person-outline\"></ion-icon>\r\n   <ion-icon [routerLink]=\"'/walkins'\" style=\"font-size: 30px;position: absolute;right: 33%;color: grey;\" name=\"walk-outline\"></ion-icon>\r\n    <ion-icon [routerLink]=\"'/owner-landing'\" style=\"font-size: 30px;position: absolute;left: 7%;color: grey;\" name=\"home-outline\"></ion-icon>\r\n    <ion-icon [routerLink]=\"'/add-space'\" style=\"position: absolute;left:33%;font-size: 30px;color: grey;\" name=\"add-circle-outline\"></ion-icon>\r\n</ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/pages/owner-landing/owner-landing-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/owner-landing/owner-landing-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OwnerLandingPageRoutingModule */

    /***/
    function srcAppPagesOwnerLandingOwnerLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerLandingPageRoutingModule", function () {
        return OwnerLandingPageRoutingModule;
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


      var _owner_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./owner-landing.page */
      "./src/app/pages/owner-landing/owner-landing.page.ts");

      var routes = [{
        path: '',
        component: _owner_landing_page__WEBPACK_IMPORTED_MODULE_3__["OwnerLandingPage"]
      }];

      var OwnerLandingPageRoutingModule = function OwnerLandingPageRoutingModule() {
        _classCallCheck(this, OwnerLandingPageRoutingModule);
      };

      OwnerLandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OwnerLandingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/owner-landing/owner-landing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/owner-landing/owner-landing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OwnerLandingPageModule */

    /***/
    function srcAppPagesOwnerLandingOwnerLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerLandingPageModule", function () {
        return OwnerLandingPageModule;
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


      var _owner_landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./owner-landing-routing.module */
      "./src/app/pages/owner-landing/owner-landing-routing.module.ts");
      /* harmony import */


      var _owner_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./owner-landing.page */
      "./src/app/pages/owner-landing/owner-landing.page.ts");

      var OwnerLandingPageModule = function OwnerLandingPageModule() {
        _classCallCheck(this, OwnerLandingPageModule);
      };

      OwnerLandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _owner_landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnerLandingPageRoutingModule"]],
        declarations: [_owner_landing_page__WEBPACK_IMPORTED_MODULE_6__["OwnerLandingPage"]]
      })], OwnerLandingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/owner-landing/owner-landing.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/owner-landing/owner-landing.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOwnerLandingOwnerLandingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  --background: #1D2729;\n}\n\n.bgImg {\n  position: absolute;\n  height: 70%;\n  width: 100%;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n  background-color: #E5E9F8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.textBorder {\n  width: 100%;\n  height: 29%;\n  border-right: 0px;\n  border-left: 0px;\n  border-top: 0px;\n  border-color: grey;\n  position: absolute;\n  top: 6%;\n  left: 3px;\n  border-width: 1px;\n  color: white;\n}\n\n.date {\n  font-size: 10px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.stats {\n  border-radius: 6px;\n  background-color: #303d3d;\n  width: 90%;\n  height: 5%;\n  border-color: white;\n  position: absolute;\n  top: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.stats2 {\n  border-radius: 6px;\n  width: 90%;\n  height: 5%;\n  border-color: white;\n  position: absolute;\n  top: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.catagories {\n  width: 100%;\n  height: 10%;\n  border-color: honeydew;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottom {\n  width: 100%;\n  height: 40%;\n  position: absolute;\n  bottom: 9%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 0px;\n  border-left: 0px;\n  border-bottom: 0px;\n  border-width: 1px;\n}\n\n.bottom1 {\n  width: 50%;\n  height: 70%;\n  position: absolute;\n  left: 5%;\n  top: 20%;\n}\n\n.bottom2 {\n  width: 45%;\n  height: 33%;\n  position: absolute;\n  right: 3%;\n  top: 20%;\n}\n\n.bottom3 {\n  width: 45%;\n  height: 35%;\n  position: absolute;\n  right: 3%;\n  top: 55%;\n}\n\n.bottomText {\n  position: absolute;\n  top: 0%;\n  left: 5%;\n  color: #9c9c9c;\n  top: 12%;\n}\n\nion-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.history {\n  background-color: white;\n  width: 70%;\n  height: 90%;\n}\n\n.segments {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.shape {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #E5E9F8;\n  width: 20%;\n  height: 8%;\n  border-radius: 50%;\n  z-index: 2;\n  margin-left: 150px;\n  margin-bottom: 48px;\n}\n\nion-footer {\n  border-top-left-radius: 8%;\n  border-top-right-radius: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXItbGFuZGluZy9vd25lci1sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdFO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0U7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZOOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFTRTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNFO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0U7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFORjs7QUFTRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQU5OOztBQVNNO0VBQ0UsVUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBTlY7O0FBU1U7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7QUFOZDs7QUFTVTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU5kOztBQVNVO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQU5aOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFBYyx1QkFBQTtFQUNkLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWxhbmRpbmcvb3duZXItbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXIgOyAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxRDI3Mjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ0ltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTlGODtcclxuICAgIC8vIG9wYWNpdHk6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dEJvcmRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyOSU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYlO1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRhdGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5zdGF0c3sgXHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMDNkM2Q7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5zdGF0czJ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuY2F0YWdvcmllc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItY29sb3I6IGhvbmV5ZGV3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwJTsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYm90dG9te1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDklO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20xe1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIHRvcDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbTJ7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgdG9wOiAyMCU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmJvdHRvbTN7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDMlO1xyXG4gICAgICAgICAgdG9wOjU1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmJvdHRvbVRleHR7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNTYsIDE1NiwgMTU2KTtcclxuICAgICAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5oaXN0b3J5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gIC5zZWdtZW50c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2hhcGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU5Rjg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWZvb3RlcntcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDglO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDglO1xyXG5cclxuICB9XHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6Y2VudGVyIDsgIFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMUQyNzI5O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuYmdJbWd7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGhlaWdodDogNzAlO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICBcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLndyYXBwZXJ7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjcyOTtcclxuLy8gICAgICBvcGFjaXR5OiA5MCU7XHJcbi8vICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4vLyAgIH1cclxuLy8gICAudGV4dEJvcmRlcntcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGhlaWdodDogMjklO1xyXG4gICAgICBcclxuLy8gICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuLy8gICAgIGJvcmRlci10b3A6IDBweDtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIHRvcDogMyU7XHJcbi8vICAgICAgIGxlZnQ6IDNweDtcclxuLy8gICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgXHJcbi8vICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIH1cclxuLy8gICAuZGF0ZXtcclxuLy8gICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICBib3R0b206IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5zdGF0c3sgXHJcbiAgICBcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzMwM2QzZDtcclxuLy8gICAgIHdpZHRoOiA5MCU7XHJcbi8vICAgICBoZWlnaHQ6IDUlO1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMzAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICB9XHJcbiAgXHJcbiAgXHJcbi8vICAgLnN0YXRzMnsgXHJcbiAgICBcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBcclxuLy8gICAgIHdpZHRoOiA5MCU7XHJcbi8vICAgICBoZWlnaHQ6IDUlO1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMzUlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbi8vICAgLmNhdGFnb3JpZXN7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgIFxyXG4vLyAgIGJvcmRlci1jb2xvcjogaG9uZXlkZXc7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJvdHRvbTogNTAlO1xyXG4gICAgIFxyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmJvdHRvbXtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGhlaWdodDogNDAlO1xyXG4gXHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIGJvdHRvbTogOSU7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4vLyAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG4gIFxyXG4vLyAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIFxyXG4vLyAgIH1cclxuLy8gICAuYm90dG9tMXtcclxuLy8gICB3aWR0aDogNTAlO1xyXG4vLyAgIGhlaWdodDogNzAlO1xyXG4gIFxyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBsZWZ0OiA1JTtcclxuLy8gICB0b3A6IDIwJTtcclxuLy8gICB9XHJcbi8vICAgLmJvdHRvbTJ7XHJcbi8vICAgICAgIHdpZHRoOiA0NSU7XHJcbi8vICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgXHJcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgcmlnaHQ6IDMlO1xyXG4vLyAgICAgICB0b3A6IDIwJTtcclxuLy8gICAgICAgfVxyXG4gIFxyXG4vLyAgICAgICAuYm90dG9tM3tcclxuLy8gICAgICAgICB3aWR0aDogNDUlO1xyXG4vLyAgICAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgIFxyXG4vLyAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgcmlnaHQ6IDMlO1xyXG4vLyAgICAgICAgICAgdG9wOjU1JTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIC5ib3R0b21UZXh0e1xyXG4vLyAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4vLyAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4vLyAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTU2LCAxNTYsIDE1Nik7XHJcbi8vICAgICAgICAgICAgICAgdG9wOiAxMiU7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBpb24tY2FyZHtcclxuLy8gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4vLyAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgIH1cclxuICBcclxuLy8gICAgICAgICAgIC5oaXN0b3J5e1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgLnNlZ21lbnRze1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/owner-landing/owner-landing.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/owner-landing/owner-landing.page.ts ***!
      \***********************************************************/

    /*! exports provided: OwnerLandingPage */

    /***/
    function srcAppPagesOwnerLandingOwnerLandingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerLandingPage", function () {
        return OwnerLandingPage;
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OwnerLandingPage = /*#__PURE__*/function () {
        function OwnerLandingPage(menu, router, route, ownerservice, account) {
          _classCallCheck(this, OwnerLandingPage);

          // console.log(this.account.getUserSession())
          //   this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
          //   get()
          //   .then(snap => {
          //     snap.forEach(dat=>{
          //       this.bookings.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
          //     })
          //   })
          this.menu = menu;
          this.router = router;
          this.route = route;
          this.ownerservice = ownerservice;
          this.account = account;
          this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
          this.bookings = [];
          this.bookingsHistory = []; // spacesArray: any[] = [];

          this.spacesArray = new Array(); // let spaces = []

          this.spaces = new Array();
          this.spacesArrayfinal = new Array();
          this.newBookArray = [];
          this.oldBookArray = [];
          this.oldBookNum = 0;
          this.newBookNum = 0;
          this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](0);
        }

        _createClass(OwnerLandingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            location.reload();
            console.log("we are entering the owner page");
            window.stop();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            location.reload();
            console.log("owner page reloaded!");
            window.stop();
            console.log(this.account.getUserSession());
            this.db.collectionGroup('reservation').where('profiles_uid', '==', this.account.getUserSession()).where("read", "==", false).orderBy("date").get().then(function (snap) {
              snap.forEach(function (dat) {
                _this.bookings = [];

                _this.bookings.push(Object.assign(dat.data(), {
                  'reservationuid': dat.id
                }));

                _this.bookings.sort();
              });
            });
            this.spacesArray = [];
            this.space();
            this.newReservations();
            this.oldBookings(); // location.reload();

            console.log("ionViewDidEnter"); // window.stop();
          }
        }, {
          key: "space",
          value: function space() {
            var _this2 = this;

            this.db.collectionGroup('space').where('uid', '==', this.account.getUserSession()).get().then(function (snapshot) {
              snapshot.forEach(function (dat) {
                _this2.spacesArray.push(Object.assign(dat.data(), {
                  'reservationuid': dat.id
                }));

                _this2.spacesArray.sort();

                _this2.spacesNum = _this2.spacesArray.length;
                console.log(_this2.spacesArray.length);
              });
            });
          }
        }, {
          key: "newReservations",
          value: function newReservations() {
            var _this3 = this;

            this.db.collectionGroup('reservation').where('profiles_uid', '==', this.account.getUserSession()).where("read", "==", false).orderBy("date").get().then(function (snap) {
              snap.forEach(function (dat) {
                _this3.newBookArray = [];

                _this3.newBookArray.push(Object.assign(dat.data(), {
                  'reservationuid': dat.id
                }));

                _this3.newBookArray.sort();

                _this3.newBookNum = _this3.newBookArray.length;
              });
            });
          }
        }, {
          key: "history",
          value: function history() {
            var _this4 = this;

            this.db.collectionGroup('reservation').where('profiles_uid', '==', this.account.getUserSession()).where("read", "==", true).orderBy("date").get().then(function (snap) {
              snap.forEach(function (dat) {
                _this4.bookingsHistory = [];

                _this4.bookingsHistory.push(Object.assign(dat.data(), {
                  'reservationuid': dat.id
                }));

                _this4.bookingsHistory.sort();
              });
            });
          }
        }, {
          key: "oldBookings",
          value: function oldBookings() {
            var _this5 = this;

            this.db.collectionGroup('reservation').where('profiles_uid', '==', this.account.getUserSession()).where("read", "==", true).orderBy("date").get().then(function (snap) {
              snap.forEach(function (dat) {
                _this5.oldBookArray = [];

                _this5.oldBookArray.push(Object.assign(dat.data(), {
                  'reservationuid': dat.id
                }));

                _this5.oldBookArray.sort();

                _this5.oldBookNum = _this5.oldBookArray.length;
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.account.logOut();
            this.router.navigateByUrl('signin');
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "openEnd",
          value: function openEnd() {
            this.menu.open('end');
          }
        }, {
          key: "openCustom",
          value: function openCustom() {
            this.menu.enable(true, 'custom');
            this.menu.open('custom');
          }
        }]);

        return OwnerLandingPage;
      }();

      OwnerLandingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"]
        }];
      };

      OwnerLandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./owner-landing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner-landing/owner-landing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./owner-landing.page.scss */
        "./src/app/pages/owner-landing/owner-landing.page.scss"))["default"]]
      })], OwnerLandingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-owner-landing-owner-landing-module-es5.js.map