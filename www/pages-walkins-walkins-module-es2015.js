(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-walkins-walkins-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkins/walkins.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkins/walkins.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>walkins</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<!-- \r\n<ion-buttons slot=\"start\">\r\n  <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n</ion-buttons> -->\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n     \r\n  <div>\r\n    <ion-grid style=\"padding-top:10%;padding-bottom:5%;\">\r\n      <ion-row>\r\n        <ion-buttons style=\"color:#1E3D58\" >\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n      </ion-row>\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">REGISTER WALKIN</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n \r\n  <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 70%;overflow: scroll;\">\r\n  <form [formGroup]=\"walkinsForm\">\r\n    \r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n              <ion-input style=\"width: 100%;\" type=\"text\" formControlName=\"name\" type=\"text\" placeholder=\"Name\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n            </div>\r\n            <div style=\"color:red;width:100%;\" *ngIf=\"isValidInput('name')\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"walkinsForm.controls['name'].errors.required\">\r\n              name is required.\r\n            </div>\r\n            <div *ngIf=\"walkinsForm.controls['name'].errors.maxLength\">\r\n             Maximum length is 20\r\n            </div>\r\n            <div *ngIf=\"walkinsForm.controls['name'].errors.minLength\">\r\n              min length is 2\r\n             </div>\r\n             <div *ngIf=\"walkinsForm.controls['name'].errors.pattern\">\r\n              Chars are not allowed\r\n             </div>\r\n          </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n            <ion-input style=\"width: 100%;\" type=\"text\" formControlName=\"surname\" placeholder=\"surname\"style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n          </div>\r\n          <div style=\"color:red;\" *ngIf=\"isValidInput('surname')\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"walkinsForm.controls['surname'].errors.required\">\r\n            surname is required.\r\n          </div>\r\n          <div *ngIf=\"walkinsForm.controls['surname'].errors.maxLength\">\r\n           Maximum length is 20\r\n          </div>\r\n          <div *ngIf=\"walkinsForm.controls['surname'].errors.minLength\">\r\n            min length is 2\r\n           </div>\r\n          \r\n        </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n            <ion-input style=\"width: 100%;\" type=\"email\" formControlName=\"email\" placeholder=\"email\"style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n            </div>\r\n            <div style=\"color:red;\" *ngIf=\"isValidInput('email')\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"walkinsForm.controls['email'].errors.required\">\r\n             Email is required\r\n            </div>\r\n             <div *ngIf=\"walkinsForm.controls['email'].errors.pattern\">\r\n            incorrect email format\r\n             </div>\r\n            </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n            <ion-input style=\"width: 100%;\" type=\"number\" formControlName=\"phone\" placeholder=\"phone\"style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n            </div>\r\n            <div style=\"color:red;\" *ngIf=\"isValidInput('phone')\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"walkinsForm.controls['phone'].errors.required\">\r\n              phone is required.\r\n            </div>\r\n            <div *ngIf=\"walkinsForm.controls['phone'].errors.maxLength\">\r\n             Maximum length is 10\r\n            </div>\r\n             <div *ngIf=\"walkinsForm.controls['phone'].errors.pattern\">\r\n              Incorrect phone number\r\n             </div>\r\n          </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">Checkin </ion-label>\r\n              <ion-input style=\"width: 100%;\" type=\"date\" formControlName=\"checkin\"  style=\"background-color: #E8EEF1;border-radius: 20px;\" placeholder=\"phone\"></ion-input>\r\n              <div style=\"color:red;width: 100%;\" *ngIf=\"isValidInput('checkin')\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"walkinsForm.controls['checkin'].errors.required\">\r\n                checkin is required\r\n              </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">Timein </ion-label>\r\n              <ion-input style=\"width: 100%;\" type=\"time\" formControlName=\"timein\" style=\"background-color: #E8EEF1;border-radius: 20px;\" placeholder=\"phone\"></ion-input>\r\n              <div style=\"color:red;width: 100%;\" *ngIf=\"isValidInput('timein')\"\r\n    class=\"alert alert-danger\">\r\n    <div *ngIf=\"walkinsForm.controls['timein'].errors.required\">\r\n      timein is required\r\n    </div>\r\n    </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">Checkout </ion-label>\r\n              <ion-input style=\"width: 100%;\" type=\"date\"  formControlName=\"checkout\"  style=\"background-color: #E8EEF1;border-radius: 20px;\" placeholder=\"phone\"></ion-input>\r\n              <div style=\"color:red;width: 100%;\" *ngIf=\"isValidInput('checkout')\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"walkinsForm.controls['checkout'].errors.required\">\r\n                checkout is required\r\n              </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">timein </ion-label>\r\n              <ion-input style=\"width: 100%;\" type=\"time\"  formControlName=\"timeout\" style=\"background-color: #E8EEF1;border-radius: 20px;\" placeholder=\"phone\"></ion-input>\r\n              <div style=\"color:red;\" *ngIf=\"isValidInput('timeout')\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"walkinsForm.controls['timeout'].errors.required\">\r\n                timeout is required\r\n              </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n         <ion-row>\r\n           <div style=\"width:100%;padding-top:5%;padding-bottom:5%; \">\r\n            <ion-button [disabled]=\"!walkinsForm.valid\"   (click)=\"walkinsBooking()\"  style=\"width: 100%;border-radius: 10px;background-color: #1E3D58;\">BOOK</ion-button>\r\n           </div>\r\n         </ion-row>\r\n        </ion-grid>\r\n    \r\n    </form>\r\n  </div>\r\n    </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n  <!-- -----------------------------------------\r\n  -----------------------------------------\r\n  -----------------------------------------\r\n   -->\r\n\r\n  <!-- <div class=\"top\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <h1 style=\"font-size: 20px; text-align: center;color: white;\">Register walk-ins below</h1>\r\n  \r\n  </div>\r\n  <div class=\"curve\">\r\n    \r\n  </div>\r\n  \r\n  <div class=\"wrapper\">\r\n\r\n<form [formGroup]=\"walkinsForm\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n        <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Name\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('name')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['name'].errors.required\">\r\n        name is required.\r\n      </div>\r\n      <div *ngIf=\"walkinsForm.controls['name'].errors.maxLength\">\r\n       Maximum length is 20\r\n      </div>\r\n      <div *ngIf=\"walkinsForm.controls['name'].errors.minLength\">\r\n        min length is 2\r\n       </div>\r\n       <div *ngIf=\"walkinsForm.controls['name'].errors.pattern\">\r\n        Chars are not allowed\r\n       </div>\r\n    </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-item>\r\n      <ion-input formControlName=\"surname\" type=\"text\" placeholder=\"Surname\"></ion-input>\r\n    </ion-item>\r\n    </ion-col>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('surname')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['surname'].errors.required\">\r\n        surname is required.\r\n      </div>\r\n      <div *ngIf=\"walkinsForm.controls['surname'].errors.maxLength\">\r\n       Maximum length is 20\r\n      </div>\r\n      <div *ngIf=\"walkinsForm.controls['surname'].errors.minLength\">\r\n        min length is 2\r\n       </div>\r\n       <div *ngIf=\"walkinsForm.controls['surname'].errors.pattern\">\r\n        Chars are not allowed\r\n       </div>\r\n    </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-item>\r\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Email\"></ion-input>\r\n      </ion-item>\r\n      </ion-col>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('email')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['email'].errors.required\">\r\n       Email is required\r\n      </div>\r\n       <div *ngIf=\"walkinsForm.controls['email'].errors.pattern\">\r\n      incorrect email format\r\n       </div>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-item>\r\n      <ion-input formControlName=\"phone\" type=\"number\" placeholder=\"Phone\"></ion-input>\r\n      </ion-item>\r\n      </ion-col>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('phone')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['phone'].errors.required\">\r\n        phone is required.\r\n      </div>\r\n      <div *ngIf=\"walkinsForm.controls['phone'].errors.maxLength\">\r\n       Maximum length is 10\r\n      </div>\r\n       <div *ngIf=\"walkinsForm.controls['phone'].errors.pattern\">\r\n        Incorrect phone number\r\n       </div>\r\n    </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      <ion-input formControlName=\"checkin\" type=\"date\" placeholder=\"checkin\"></ion-input>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('checkin')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['checkin'].errors.required\">\r\n        checkin is required\r\n      </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      \r\n      <ion-input formControlName=\"timein\" type=\"time\" placeholder=\"timein\" ></ion-input>\r\n    </ion-col>\r\n    <div style=\"color:red;\" *ngIf=\"isValidInput('timein')\"\r\n    class=\"alert alert-danger\">\r\n    <div *ngIf=\"walkinsForm.controls['timein'].errors.required\">\r\n      timein is required\r\n    </div>\r\n    </div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n   \r\n      <ion-input formControlName=\"checkout\"  type=\"date\"></ion-input>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('checkout')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['checkout'].errors.required\">\r\n        checkout is required\r\n      </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n    \r\n      <ion-input formControlName=\"timeout\" type=\"time\" placeholder=\"timeout\" ></ion-input>\r\n      <div style=\"color:red;\" *ngIf=\"isValidInput('timeout')\"\r\n      class=\"alert alert-danger\">\r\n      <div *ngIf=\"walkinsForm.controls['timeout'].errors.required\">\r\n        timeout is required\r\n      </div>\r\n      </div>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button [disabled]=\"!walkinsForm.valid\"   (click)=\"walkinsBooking()\" expand=\"full\">BOOK</ion-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  \r\n</form> -->\r\n\r\n<!-- [disabled]=\"!walkinsForm.valid\" -->\r\n\r\n<!-- </div> -->\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/walkins/walkins-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/walkins/walkins-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WalkinsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsPageRoutingModule", function() { return WalkinsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _walkins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkins.page */ "./src/app/pages/walkins/walkins.page.ts");




const routes = [
    {
        path: '',
        component: _walkins_page__WEBPACK_IMPORTED_MODULE_3__["WalkinsPage"]
    }
];
let WalkinsPageRoutingModule = class WalkinsPageRoutingModule {
};
WalkinsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkinsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/walkins/walkins.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/walkins/walkins.module.ts ***!
  \*************************************************/
/*! exports provided: WalkinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsPageModule", function() { return WalkinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walkins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkins-routing.module */ "./src/app/pages/walkins/walkins-routing.module.ts");
/* harmony import */ var _walkins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkins.page */ "./src/app/pages/walkins/walkins.page.ts");








let WalkinsPageModule = class WalkinsPageModule {
};
WalkinsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walkins_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkinsPageRoutingModule"]
        ],
        declarations: [_walkins_page__WEBPACK_IMPORTED_MODULE_6__["WalkinsPage"]]
    })
], WalkinsPageModule);



/***/ }),

/***/ "./src/app/pages/walkins/walkins.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/walkins/walkins.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGtpbnMvd2Fsa2lucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/walkins/walkins.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/walkins/walkins.page.ts ***!
  \***********************************************/
/*! exports provided: WalkinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsPage", function() { return WalkinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");




// import { AlertController } from '@ionic/angular/providers/alert-controller';




let WalkinsPage = class WalkinsPage {
    constructor(popover, account, route, ownerservice, formBuilder, loadingCtrl, router, alertCtrl) {
        this.popover = popover;
        this.account = account;
        this.route = route;
        this.ownerservice = ownerservice;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.spaceuid = this.route.snapshot.params.spaceuid;
        this.category = this.route.snapshot.params.category;
        this.profileuid = this.route.snapshot.params.profileuid;
        this.walkinsForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            checkin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkout: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            timein: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            timeout: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    get checkin() {
        return this.walkinsForm.get("checkin");
    }
    get checkout() {
        return this.walkinsForm.get("checkout");
    }
    get timein() {
        return this.walkinsForm.get("timein");
    }
    get timeout() {
        return this.walkinsForm.get("timeout");
    }
    get name() {
        return this.walkinsForm.get("name");
    }
    get surname() {
        return this.walkinsForm.get("surname");
    }
    get email() {
        return this.walkinsForm.get("email");
    }
    get phone() {
        return this.walkinsForm.get("phone");
    }
    //this.reservationForm.value.timeout
    walkinsBooking() {
        this.proccessWalkin();
        console.log(this.profileuid, this.spaceuid);
        this.ownerservice.walkinBooking(this.account.getUserSession(), this.profileuid, this.spaceuid, this.walkinsForm.value.name, this.walkinsForm.value.surname, this.walkinsForm.value.email, this.walkinsForm.value.phone, this.walkinsForm.value.timeout, this.walkinsForm.value.timein, this.walkinsForm.value.checkout, this.walkinsForm.value.checkin, this.category);
    }
    isValidInput(fieldName) {
        return this.walkinsForm.controls[fieldName].invalid &&
            (this.walkinsForm.controls[fieldName].dirty || this.walkinsForm.controls[fieldName].touched);
    }
    proccessWalkin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: 'Booking your Space',
                duration: 2000,
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('Loading dismissed after 2 seconds', dis);
                    // location.reload();
                    const alert = yield this.alertCtrl.create({
                        message: `Space Successfully Booked, Click okay to close.`,
                        buttons: [
                            {
                                text: 'Okay',
                                handler: () => {
                                    // this.walkinsForm.reset();
                                    this.router.navigateByUrl('/view-walkins');
                                }
                            }
                        ]
                    });
                    return yield alert.present();
                }));
            });
        });
    }
    ngOnInit() {
    }
};
WalkinsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_6__["SignInSignUpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_5__["OwnerServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
WalkinsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkins',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./walkins.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkins/walkins.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./walkins.page.scss */ "./src/app/pages/walkins/walkins.page.scss")).default]
    })
], WalkinsPage);



/***/ })

}]);
//# sourceMappingURL=pages-walkins-walkins-module-es2015.js.map