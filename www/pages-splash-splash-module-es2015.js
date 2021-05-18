(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>splash</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n<h1 style=\"font-size: 30px;\">MY</h1><ion-icon class=\"block1\" name=\"square\"></ion-icon>\r\n<ion-icon class=\"block2\" name=\"square\"></ion-icon><h2 style=\"font-size: 30px; margin-left: 150px; margin-top: -35px;\">SPACE</h2>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/splash/splash-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function() { return SplashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ "./src/app/pages/splash/splash.page.ts");




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/splash/splash.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-routing.module */ "./src/app/pages/splash/splash-routing.module.ts");
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash.page */ "./src/app/pages/splash/splash.page.ts");







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "./src/app/pages/splash/splash.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #9010F5;\n  color: white;\n}\n\nion-icon {\n  display: flex;\n  flex-direction: column;\n  font-size: 40px;\n}\n\n.block1 {\n  display: flex;\n  flex-direction: column;\n  margin-left: 90px;\n  margin-top: -50px;\n}\n\n.h2 {\n  display: flex;\n  flex-direction: column;\n  margin-left: 90px;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwbGFzaC9zcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMEY1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uYmxvY2sxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG59XHJcblxyXG4uaDJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi8vIC5ibG9jazJ7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogO1xyXG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/pages/splash/splash.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        // location.reload();
        // window.stop();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.router.navigate(["onboarding"]);
        }, 5000);
    }
    ngOnInit() {
        // location.reload();
        // window.stop();
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./splash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./splash.page.scss */ "./src/app/pages/splash/splash.page.scss")).default]
    })
], SplashPage);



/***/ })

}]);
//# sourceMappingURL=pages-splash-splash-module-es2015.js.map