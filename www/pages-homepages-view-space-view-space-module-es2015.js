(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepages-view-space-view-space-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/view-space/view-space.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/view-space/view-space.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>view-space</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-card  >\r\n    \r\n    \r\n    <img [src]=\"this.image\" />\r\n    <ion-card-header>\r\n      <div>\r\n      <ion-card-title>{{this.categories}}</ion-card-title>\r\n      <ion-card-subtitle>{{this.address}}</ion-card-subtitle>\r\n    </div>\r\n    <div>\r\n      <form>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <span>Checkin</span>\r\n              <ion-input type=\"date\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span>Timein</span>\r\n              <ion-input type=\"time\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <span>Checkout</span>\r\n              <ion-input type=\"date\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span>Timeout</span>\r\n              <ion-input type=\"time\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </div>\r\n  \r\n     \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n<ion-grid >\r\n  <ion-row>  <span><b>Description</b></span></ion-row>\r\n  <ion-row>\r\n  \r\n   {{this.description}}\r\n  </ion-row>\r\n  <ion-row><span><b>amenities</b></span></ion-row>\r\n  <ion-row >\r\n    \r\n   <ion-col  *ngFor=\"let y of amenities\">\r\n    {{y}}\r\n   </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n   </ion-card-content>\r\n  \r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/homepages/view-space/view-space-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/homepages/view-space/view-space-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpacePageRoutingModule", function() { return ViewSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-space.page */ "./src/app/pages/homepages/view-space/view-space.page.ts");




const routes = [
    {
        path: '',
        component: _view_space_page__WEBPACK_IMPORTED_MODULE_3__["ViewSpacePage"]
    }
];
let ViewSpacePageRoutingModule = class ViewSpacePageRoutingModule {
};
ViewSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewSpacePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/homepages/view-space/view-space.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/homepages/view-space/view-space.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpacePageModule", function() { return ViewSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-space-routing.module */ "./src/app/pages/homepages/view-space/view-space-routing.module.ts");
/* harmony import */ var _view_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-space.page */ "./src/app/pages/homepages/view-space/view-space.page.ts");







let ViewSpacePageModule = class ViewSpacePageModule {
};
ViewSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewSpacePageRoutingModule"]
        ],
        declarations: [_view_space_page__WEBPACK_IMPORTED_MODULE_6__["ViewSpacePage"]]
    })
], ViewSpacePageModule);



/***/ }),

/***/ "./src/app/pages/homepages/view-space/view-space.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/homepages/view-space/view-space.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlcy92aWV3LXNwYWNlL3ZpZXctc3BhY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/homepages/view-space/view-space.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/homepages/view-space/view-space.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpacePage", function() { return ViewSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");








let ViewSpacePage = class ViewSpacePage {
    constructor(route, ownerservice, account) {
        this.route = route;
        this.ownerservice = ownerservice;
        this.account = account;
        this.spaceuid = this.route.snapshot.params.spaceuid;
        this.profuid = this.route.snapshot.params.profuid;
        this.spaceId = this.route.snapshot.params.spaceId;
        this.amenities = [];
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection("profiles")
            .doc(this.profuid)
            .collection("profile").doc(this.spaceuid).collection("space").doc(this.spaceId).get().then(doc => {
            this.address = doc.data().address;
            this.categories = doc.data().categories;
            this.image = doc.data().image;
            this.description = doc.data().description;
            this.amenities.push(doc.data().amenities);
            console.log(doc.data());
        });
    }
    ngOnInit() {
    }
};
ViewSpacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"] }
];
ViewSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-space.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/view-space/view-space.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-space.page.scss */ "./src/app/pages/homepages/view-space/view-space.page.scss")).default]
    })
], ViewSpacePage);



/***/ })

}]);
//# sourceMappingURL=pages-homepages-view-space-view-space-module-es2015.js.map