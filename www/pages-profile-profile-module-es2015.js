(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>update-space</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n    <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n        <div style=\"width:100%; height: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n         \r\n      \r\n          <div>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-buttons style=\"color:#1E3D58\" >\r\n                      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n                    </ion-buttons>\r\n                  </ion-row>\r\n              <ion-row>\r\n                <h1 style=\"font-family:Arial, Helvetica, sans-serif;font-size: 2em;\">{{profile?.company_name}}</h1>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                 <div style=\"font-family:Arial, Helvetica, sans-serif;font-size: 1em;padding-top:10%;\"><span>Company address:</span>\r\n                <p style=\"font-size: .7em;font-family:  sans-serif;color:gray;\">{{profile?.company_address}} </p>\r\n                </div> \r\n                 <div style=\"font-family:Helvetica, sans-serif;font-size: .9em;color:gray;padding-top:2%;\"><span>Email:</span>\r\n                  <p style=\"font-size: .7em;font-family:  sans-serif;\">{{profile?.company_emaile}} </p>\r\n                </div> \r\n                 <div style=\"font-family:Helvetica, sans-serif;font-size: .9em;color:gray;padding-top:2%;\"><span>Telephone:</span>\r\n                  <p style=\"font-size: .7em;font-family:  sans-serif;\">{{profile?.company_tel}} </p>\r\n                </div> \r\n                <div style=\"font-family:Helvetica, sans-serif;font-size: .9em;color:gray;padding-top:2%;\"><span>Website:</span>\r\n                    <p style=\"font-size: .7em;font-family:  sans-serif;\">\r\n                        <a href=\"https://x.company_website\">{{profile?.company_website}}</a>\r\n                    </p>\r\n                  </div> \r\n\r\n<!--                \r\n                 <div style=\"font-family:Helvetica, sans-serif;font-size: .9em;font-weight:bold;color:rgb(111, 111, 241);padding-top:10%;\"><a ><span>Spaces</span></a></div>\r\n               -->\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <img style=\"width:10em;height:50%;border-radius: 30%;\"  [src]=\"profile?.img_profile\">\r\n                  <ion-icon  [routerLink]=\"'/profile-add'\" style=\"background-color: #1E3D58; position: relative;bottom:40%;left:76%;bottom:15%;width:25%;color:white;font-size: 2em;border-radius: 100%;\" name=\"create-outline\"></ion-icon>\r\n                 </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div >\r\n                 <p style=\"padding:3%;background-color:#f1fdd0;border-radius: 5%;color:#75a104;font-size:.9em;font-family:  sans-serif;\"> {{profile?.aboutus}}</p>\r\n                </div>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n\r\n        </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n-----------------------------------------\r\n-----------------------------------------\r\n----------------------------------------- -->\r\n\r\n\r\n    <!-- <div class=\"wrapper\"> -->\r\n        <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons> -->\r\n\r\n        <!-- <div class=\"top\">\r\n\r\n            <img style=\"width: 100%; height: 100%;\" src=\"assets/profilebg.jpg\">\r\n\r\n            <ion-avatar style=\"position: absolute; top: 20%; width: 30%; height: 40%;\"> -->\r\n                <!-- <ion-icon style=\"position: absolute;top: 25%;font-size: 30px;color: white; font-weight:bold;left: 90%;\"\r\n          name=\"create-outline\"></ion-icon> -->\r\n                <!-- <img [src]=\"profile?.img_profile\">\r\n\r\n            </ion-avatar>\r\n            <p style=\"position:absolute; font-weight:bold;color:white; bottom:20%\"> {{profile?.company_name}}</p>\r\n            <p style=\"position:absolute;color:white; bottom:15%; font-size: 12px;\">Company address: {{profile?.company_address}}</p>\r\n\r\n        </div>\r\n        <div style=\"width: 100%;height: 10%; position: absolute;bottom: 57%;display: flex;justify-content: center;\">\r\n            <ion-button [routerLink]=\"'/profile-add'\" style=\"height: 25px;--background:whitesmoke; font-size: 11px;color: black;opacity: 80%;\"> Edit</ion-button>\r\n        </div>\r\n        <div class=\"bottom\">\r\n\r\n            <ion-card style=\"width: 90%; height: 90%; display: flex;justify-content: left;align-items: initial;flex-direction: column;\">\r\n                <ion-grid style=\"margin: 0;width:100%;\"> -->\r\n                    <!-- <ion-row>\r\n            <p style=\"font-weight: bold; font-size:14px;position:absolute;left:3%;\">Description <br><span style=\"font-weight: lighter;\">{{x.aboutus}}</span></p>\r\n          </ion-row> -->\r\n                    <!-- <ion-row>\r\n                        <span style=\"font-weight: bold;\">AboutUs</span>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <span>  {{profile?.aboutus}} </span>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <span><b>Telephone: </b> {{profile?.company_tel}}  </span>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <span><b>Email: </b> {{profile?.company_emaile}} </span>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <span><b>Website: </b>  <a href=\"https://x.company_website\">{{profile?.company_website}}</a> </span>\r\n                    </ion-row>\r\n                </ion-grid> -->\r\n\r\n\r\n                <!-- <p style=\"position: absolute;left: 3%; top: 16%;\">{{x.aboutus}}</p> -->\r\n            <!-- </ion-card>\r\n\r\n        </div>\r\n        <div class=\"segments\">\r\n\r\n            <ion-segment [(ngModel)]=\"selectedtabs \" style=\"position: absolute; top: 0px;\">\r\n                <ion-segment-button (click)=\"view()\" value=\"Spaces\">\r\n                    <ion-label>Spaces</ion-label>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"Reviews\">\r\n                    <ion-label>Reviews</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment> -->\r\n\r\n\r\n            <!-- <div style=\"width: 100%; height: 85%; display: flex;justify-content: center;align-self: center;\" *ngIf=\"selectedtabs == 'Spaces'\">\r\n                <ion-card style=\"width: 90%;height: 70%;background-color: white;position: absolute;bottom: 5%;\">\r\n                    <div *ngIf=\"viewSpace==1\">\r\n                        <ion-grid style=\"margin: 0%;\">\r\n                            <ion-row *ngFor=\"let x of ret_array\">\r\n                                <ion-icon [routerLink]=\"['/update-space/',x]\" name=\"caret-forward-outline\" class=\"space\"></ion-icon>{{x}}\r\n                              -->\r\n                                <!-- <a   [routerLink]=\"['/update-space/',x]\">{{x}}</a> -->\r\n                            <!-- </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n                </ion-card>\r\n            </div>\r\n            <div style=\"width: 100%; height: 85%; display: flex;justify-content: center;align-self: center;\" *ngIf=\"selectedtabs == 'Reviews'\">\r\n\r\n                <ion-card style=\"width: 90%;height: 70%;background-color: white;position: absolute;bottom: 5%;\">\r\n                    <ion-avatar style=\"position: absolute; top: 10%;left: 5%;\">\r\n                        <img style=\"width: 50px; height: 50px;\" src=\"assets/bg.jpg\">\r\n                    </ion-avatar>\r\n                    <p style=\"position: absolute;left: 23%;top: 5%; font-size: 11px;\">Reviewer</p>\r\n                    <p style=\"position: absolute;top: 5%;right: 5%;font-size: 11px;\">10-23-12</p>\r\n                    <p style=\"position: absolute;top: 30%;left: 20%;\">This is the first review card</p>\r\n\r\n\r\n                </ion-card>\r\n            </div> -->\r\n\r\n\r\n\r\n\r\n        <!-- </div>\r\n\r\n\r\n\r\n    </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.top {\n  width: 100%;\n  height: 40%;\n  position: absolute;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n}\n\n.bottom {\n  background-color: white;\n  position: absolute;\n  width: 100%;\n  height: 20%;\n  top: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.segments {\n  position: absolute;\n  width: 100%;\n  height: 40%;\n  bottom: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.space {\n  font-size: 30px;\n  color: #16D6E3;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0Q0o7O0FBMENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhDSjs7QUE0Q0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekNKOztBQTZDQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTNDSjs7QUE4Q0E7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBNUNKOztBQWdEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBN0NKOztBQWdEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE3Q0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyAud3JhcHBlcntcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4vLyB9XHJcbi8vIC5wcm9maWxldmlld3tcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogOTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5hZGRwcm9maWxle1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDIwJTtcclxuLy8gICAgZGlzcGxheTogZmxleDtcclxuLy8gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2RDZFMztcclxuLy8gICAgIG9wYWNpdHk6IDYwJTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMHB4O1xyXG5cclxuLy8gfVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4udG9we1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxufVxyXG5cclxuLmJvdHRvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlZ21lbnRze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3BhY2V7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzE2RDZFMztcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








// import { join } from 'path';
// import { data } from 'jquery';
let ProfilePage = class ProfilePage {
    constructor(ownerservice, account, loadingCtrl) {
        //  firebase.firestore().collectionGroup("profile")
        // .where("uid", "==", this.account.getUserSession())
        // .get()
        // .then(snap => {
        //   snap.forEach(doc => {
        //   this.array.push(doc.data() )
        //   this.profileUid= doc.id;
        //     console.log(this.array)
        //   });
        // });
        this.ownerservice = ownerservice;
        this.account = account;
        this.loadingCtrl = loadingCtrl;
        this.ret_array = [];
        this.viewSpace = 0;
    }
    ionViewWillEnter() {
        // console.log("ionViewWillEnter")
        // for(let i = 0; i < 100000; i++){
        //   console.log(i);
        // }
        // window.location.reload();
        //       window.stop();
        console.log("we are entering the profile page");
    }
    ionViewDidEnter() {
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collectionGroup("profile").where("uid", "==", this.account.getUserSession())
            .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.profile = doc.data();
                // this.array.push(doc.data());
                this.profileUid = doc.id;
                console.log("data: ", this.profile);
                // this.ionViewDidEnter();
                // window.location.reload();
                // window.stop();
            });
            // cities.push(doc.data());
            console.log("Current profile: ", this.profile);
        });
        console.log("ionViewDidEnter");
    }
    workingSpaces() {
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles")
            .doc(this.account.getUserSession())
            .collection("profile").doc(this.profileUid).collection("space")
            .where("uid", "==", this.account.getUserSession())
            .get()
            .then(snap => {
            snap.forEach(doc => {
                var array = [];
                // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );
                array.push(doc.data().categories);
                this.ownerservice.setWorkSpaceUID(doc.data().workspace_uid);
                //  this.spaces.push(this.remove_duplicates(array))  
                this.unique(array);
                console.log(this.returnUniq());
            });
        });
    }
    unique(array) {
        for (var i in array) {
            if (this.ret_array.indexOf(array[i]) === -1) {
                this.ret_array.push(array[i]);
                // console.log(this.ret_array) 
            }
        }
    }
    returnUniq() {
        return this.ret_array;
    }
    view() {
        this.viewSpace = 1;
        this.workingSpaces();
    }
    ngOnInit() {
        location.reload();
        console.log('refreshed page');
        window.stop();
    }
    reload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please wait...',
                duration: 3000
            });
            yield loading.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map