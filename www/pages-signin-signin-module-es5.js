(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signin-signin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"width: 100%;\">\r\n\r\n    <div class=\"container\">\r\n        <h1 class=\"login\">Login</h1>\r\n\r\n        <form class=\"formload\" [formGroup]=\"LoginForm\" (ngSubmit)=\"submit()\">\r\n\r\n            <div id=\"circle\"></div>\r\n            <div id=\"circle2\"></div>\r\n            <div id=\"circle3\"></div>\r\n            <div id=\"circle4\"></div>\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-item class=\"purple\">\r\n                        <ion-icon name=\"person-outline\"></ion-icon>\r\n                        <ion-input class=\"input\" type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\r\n                        <div *ngFor=\"let error of errorMessages.email\">\r\n                            <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\r\n                                <small class=\"error-message\">{{error.message}}</small>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n                    </ion-item>\r\n                    <ion-item class=\"purple\">\r\n                        <ion-icon name=\"key-outline\"></ion-icon>\r\n                        <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\r\n                        <div *ngFor=\"let error of errorMessages.password\">\r\n                            <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || email.touched)\">\r\n                                <small class=\"error-message\">{{error.message}}</small>\r\n                            </ng-container>\r\n                        </div>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-item style=\"width: 100%;\">\r\n                <ion-label style=\"color: black;\" routerLink=\"/forget\">Forgot password?</ion-label>\r\n\r\n                <ion-button type=\"submit\" [disabled]=\"!LoginForm.valid\">LOGIN</ion-button>\r\n            </ion-item>\r\n\r\n            <p routerLink=\"/signup\" class=\"signup\">Sign Up</p>\r\n        </form>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content>\r\n\r\n  <h1 class=\"header\" style=\"text-align: center; font-weight: bolder; color: rgb(53, 53, 87);\" >Sign In</h1>\r\n \r\n  <div class=\"FormHolder\">\r\n     \r\n   <div class=\"ion-padding\">\r\n   <form class=\"formload\" [formGroup]=\"LoginForm\" (ngSubmit)=\"submit()\" class=\"ion-padding\">\r\n   \r\n     <div class=\"wrap-input\">\r\n     <input class=\"input\" type=\"email\"  formControlName=\"email\" placeholder=\"Email\">\r\n     <div *ngFor=\"let error of errorMessages.email\">\r\n       <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\r\n         <small class=\"error-message\">{{error.message}}</small>\r\n       </ng-container>\r\n     </div>\r\n     </div>\r\n     <br>\r\n         <div class=\"wrap-input\">\r\n         <input class=\"input\" type=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n         <div *ngFor=\"let error of errorMessages.password\">\r\n           <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || email.touched)\">\r\n             <small class=\"error-message\">{{error.message}}</small>\r\n           </ng-container>\r\n         </div>  \r\n         </div>  \r\n         <br><br>\r\n         <div class=\"container-form-btn\">\r\n         <button  class=\"form-btn custom-font\" type=\"submit\" [disabled]=\"!LoginForm.valid\">Sign In</button>\r\n         </div>\r\n         <p class=\"social\" style=\"text-align: center;\">Or using social media</p>\r\n         <div class=\"icons\">\r\n         <ion-icon name=\"logo-facebook\"></ion-icon><ion-icon class=\"google\" name=\"logo-google\"></ion-icon><ion-icon class=\"twitter\" name=\"logo-twitter\"></ion-icon>\r\n         </div>\r\n           <label class=\"account\" [routerLink]=\"'/signup'\">Don't have an account?</label>Sign Up\r\n   </form>\r\n   </div>\r\n   </div>\r\n </ion-content> -->";
      /***/
    },

    /***/
    "./src/app/pages/signin/signin-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/signin/signin-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SigninPageRoutingModule */

    /***/
    function srcAppPagesSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
        return SigninPageRoutingModule;
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


      var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin.page */
      "./src/app/pages/signin/signin.page.ts");

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
      }];

      var SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SigninPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/signin/signin.module.ts ***!
      \***********************************************/

    /*! exports provided: SigninPageModule */

    /***/
    function srcAppPagesSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
        return SigninPageModule;
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


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signin-routing.module */
      "./src/app/pages/signin/signin-routing.module.ts");
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signin.page */
      "./src/app/pages/signin/signin.page.ts");

      var SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
      })], SigninPageModule);
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/signin/signin.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.login {\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  font-weight: bolder;\n  margin-right: 250px;\n  margin-top: 20px;\n  font-size: 24px;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  margin-top: 80px;\n}\n\nion-icon {\n  color: purple;\n}\n\nion-item {\n  --border-color: purple;\n}\n\nion-radio {\n  --color: purple;\n}\n\nion-button {\n  color: white;\n  --background: purple;\n  width: 90px;\n  border-top-left-radius: 100%;\n  border-bottom-left-radius: 100%;\n  right: 0%;\n}\n\n.signup {\n  font-size: 24px;\n  font-weight: bolder;\n  margin-left: 250px;\n  margin-top: 200px;\n}\n\n#circle {\n  width: 20%;\n  height: 10%;\n  background-color: purple;\n  position: absolute;\n  top: 0%;\n  right: 0px;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n#circle2 {\n  width: 20%;\n  height: 10%;\n  background-color: purple;\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n#circle3 {\n  width: 10%;\n  height: 5%;\n  background-color: purple;\n  position: absolute;\n  bottom: 30%;\n  left: 18%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n\n#circle4 {\n  width: 10%;\n  height: 5%;\n  background-color: purple;\n  position: absolute;\n  bottom: 0%;\n  right: 0px;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNELFdBQUE7RUFDQyxRQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQUFKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0QsV0FBQTtFQUNDLFNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDRCxVQUFBO0VBQ0EsVUFBQTtFQUNDLDJCQUFBO0VBQ0EsK0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbmlvbi1yYWRpb3tcclxuICAgIC0tY29sb3I6IHB1cnBsZTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogcHVycGxlO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxufVxyXG5cclxuLnNpZ251cHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuI2NpcmNsZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cHVycGxlIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTsgIFxyXG59XHJcblxyXG4jY2lyY2xlMntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cHVycGxlIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiAxNSU7XHJcbiAgICBsZWZ0OjAlIDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICBcclxufVxyXG5cclxuI2NpcmNsZTN7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cHVycGxlIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiAzMCU7XHJcbiAgICBsZWZ0OjE4JSA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jY2lyY2xlNHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpwdXJwbGUgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBib3R0b206IDAlO1xyXG4gICByaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5jb250YWluZXJ7XHJcbi8vICAgICBkaXNwbGF5OmZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIGhlaWdodDoxMDAlO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5hY2NvdW50e1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuc29jaWFse1xyXG4vLyAgICAgZm9udC1zaXplOjE0cHg7XHJcbi8vICAgICBjb2xvcjogI0E5NDRGMTtcclxuXHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pY29uIHtcclxuLy8gICAgIGNvbG9yOiByZ2IoMTIsIDEyLCAyMTQpO1xyXG4vLyAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4vLyAgIH1cclxuXHJcbi8vIC50d2l0dGVye1xyXG4vLyAgICAgY29sb3I6ICMyZDk4ZTY7XHJcbi8vIH1cclxuLy8gLmdvb2dsZXtcclxuLy8gICAgIGNvbG9yOiByZ2IoMjUzLCA4NCwgODQpO1xyXG4vLyB9XHJcblxyXG4vLyAuaWNvbnN7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4vLyB9XHJcblxyXG4vLyBmb3Jte1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC53cmFwLWlucHV0e1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCA4NiwgODYpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGhlaWdodDogNDZweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXItZm9ybS1idG4ge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1idG4ge1xyXG4vLyAgICAgZGlzcGxheTpmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4vLyAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuLy8gICAgIGhlaWdodDogNDJweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNkQ2RTM7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgY29sb3I6d2hpdGU7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjUpO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1idG46aG92ZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXBhZGRpbmd7XHJcbi8vICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXHJcbi8vIH1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/signin/signin.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/signin/signin.page.ts ***!
      \*********************************************/

    /*! exports provided: SigninPage */

    /***/
    function srcAppPagesSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
        return SigninPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");

      var SigninPage = /*#__PURE__*/function () {
        function SigninPage(accountServices, formBuilder, accountService, router, nav, loadingCtrl, alertCtrl) {
          _classCallCheck(this, SigninPage);

          // location.reload();
          this.accountServices = accountServices;
          this.formBuilder = formBuilder;
          this.accountService = accountService;
          this.router = router;
          this.nav = nav;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.showpassword = false;
          this.passwordToggleIcon = 'eye';
          this.LoginForm = this.formBuilder.group({
            email: [''],
            password: ['']
          });
          this.errorMessages = {
            email: [{
              type: 'required',
              message: 'Email is required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid email address'
            }],
            password: [{
              type: 'required',
              message: 'password number is required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid password'
            }]
          };
        }

        _createClass(SigninPage, [{
          key: "togglePassword",
          value: function togglePassword() {
            this.showpassword = !this.showpassword;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // location.reload();
            // console.log('refreshed!');
            // window.stop()
          } // ngOnDestroy(): void {
          //   //Called once, before the instance is destroyed.
          //   //Add 'implements OnDestroy' to the class.
          // }

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // location.reload();
            console.log("we are entering the owner page"); // window.stop();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            //   location.reload();
            //   console.log("sign in page reloaded!");
            window.stop();
            window.addEventListener('error', function (e) {
              // prompt user to confirm refresh
              if (/Loading chunk [\d]+ failed/.test(e.message)) {
                window.location.reload();
              }
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      loading = _context.sent;
                      console.log(this.LoginForm.value);
                      this.accountService.SignIn(this.LoginForm.value.email, this.LoginForm.value.password).then(function (res) {// this.accountService.checkVerification();
                      }).then(function () {
                        loading.dismiss().then(function () {// this.router.navigateByUrl('/update-space');
                        });
                      }, function (error) {
                        loading.dismiss().then(function () {
                          // this.router.navigateByUrl('/signin')
                          console.log(error);
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
          key: "email",
          get: function get() {
            return this.LoginForm.get("email");
          }
        }, {
          key: "password",
          get: function get() {
            return this.LoginForm.get('password');
          }
        }]);

        return SigninPage;
      }();

      SigninPage.ctorParameters = function () {
        return [{
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignInSignUpService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignInSignUpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signin.page.scss */
        "./src/app/pages/signin/signin.page.scss"))["default"]]
      })], SigninPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-signin-signin-module-es5.js.map