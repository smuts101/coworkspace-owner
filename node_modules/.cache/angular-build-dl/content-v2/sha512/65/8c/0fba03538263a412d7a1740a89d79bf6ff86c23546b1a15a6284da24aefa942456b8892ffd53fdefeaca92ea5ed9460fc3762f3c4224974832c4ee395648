(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepages-working-spaces-working-spaces-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/working-spaces/working-spaces.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/working-spaces/working-spaces.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Working spaces</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>,\r\n<ion-content fullscreen>\r\n  <ion-card  *ngFor=\"let x of workingSpaces\">\r\n    \r\n   \r\n    <img [src]=\"x.image\" />\r\n    <ion-card-header>\r\n      <ion-card-title>{{x.categories}}</ion-card-title>\r\n      <ion-card-subtitle>{{x.address}}</ion-card-subtitle>\r\n      <ion-grid>\r\n        <ion-row >\r\n          <ion-col size=\"5\"> </ion-col>\r\n          <ion-col size=\"6\"> </ion-col>\r\n          <ion-col size=\"1\"> <a [routerLink] = \"['/view-space',x.workspace_uid,x.uid,x.spaceId]\"> <ion-icon name=\"arrow-forward-outline\"></ion-icon> </a></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n     \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n<ion-grid >\r\n  <ion-row   >\r\n    <ion-col *ngFor=\"let y of x.amenities\" > \r\n     {{y}}\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n   </ion-card-content>\r\n \r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/homepages/working-spaces/working-spaces-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/homepages/working-spaces/working-spaces-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkingSpacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingSpacesPageRoutingModule", function() { return WorkingSpacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _working_spaces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./working-spaces.page */ "./src/app/pages/homepages/working-spaces/working-spaces.page.ts");




const routes = [
    {
        path: '',
        component: _working_spaces_page__WEBPACK_IMPORTED_MODULE_3__["WorkingSpacesPage"]
    }
];
let WorkingSpacesPageRoutingModule = class WorkingSpacesPageRoutingModule {
};
WorkingSpacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkingSpacesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/homepages/working-spaces/working-spaces.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/homepages/working-spaces/working-spaces.module.ts ***!
  \*************************************************************************/
/*! exports provided: WorkingSpacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingSpacesPageModule", function() { return WorkingSpacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _working_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./working-spaces-routing.module */ "./src/app/pages/homepages/working-spaces/working-spaces-routing.module.ts");
/* harmony import */ var _working_spaces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./working-spaces.page */ "./src/app/pages/homepages/working-spaces/working-spaces.page.ts");







let WorkingSpacesPageModule = class WorkingSpacesPageModule {
};
WorkingSpacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _working_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkingSpacesPageRoutingModule"]
        ],
        declarations: [_working_spaces_page__WEBPACK_IMPORTED_MODULE_6__["WorkingSpacesPage"]]
    })
], WorkingSpacesPageModule);



/***/ }),

/***/ "./src/app/pages/homepages/working-spaces/working-spaces.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/homepages/working-spaces/working-spaces.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlcy93b3JraW5nLXNwYWNlcy93b3JraW5nLXNwYWNlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/homepages/working-spaces/working-spaces.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/homepages/working-spaces/working-spaces.page.ts ***!
  \***********************************************************************/
/*! exports provided: WorkingSpacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingSpacesPage", function() { return WorkingSpacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");








let WorkingSpacesPage = class WorkingSpacesPage {
    constructor(route, ownerservice, account) {
        this.route = route;
        this.ownerservice = ownerservice;
        this.account = account;
        this.workingSpaces = [];
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collectionGroup("space")
            .get()
            .then(snap => {
            snap.forEach(dat => {
                this.workingSpaces.push(Object.assign(dat.data(), { 'spaceId': dat.id }));
            });
        });
    }
    ngOnInit() {
    }
};
WorkingSpacesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"] }
];
WorkingSpacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-working-spaces',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./working-spaces.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepages/working-spaces/working-spaces.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./working-spaces.page.scss */ "./src/app/pages/homepages/working-spaces/working-spaces.page.scss")).default]
    })
], WorkingSpacesPage);



/***/ })

}]);
//# sourceMappingURL=pages-homepages-working-spaces-working-spaces-module-es2015.js.map