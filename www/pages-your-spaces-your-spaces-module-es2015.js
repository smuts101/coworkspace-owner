(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-your-spaces-your-spaces-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/your-spaces/your-spaces.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/your-spaces/your-spaces.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n    <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\n        <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\">\n\n            <div style=\"padding-bottom:10%;\">\n                <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\n                    <ion-row>\n                        <!-- <ion-buttons style=\"color:#1E3D58\" >\n                          <ion-back-button (click)=\"returnHome()\"></ion-back-button>\n                        </ion-buttons> -->\n                        <a (click)=\"returnHome()\">back</a>\n                      </ion-row>\n                    <ion-row>\n                        <h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Categories</h1>\n                        \n                    </ion-row> \n                </ion-grid>\n            </div>\n            <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 70%;overflow: scroll;\">\n                <ion-grid style=\"width: 100%;\">\n                    <ion-row *ngFor=\"let x of ret_array\">\n                        <div *ngIf=\"x=='Sharing'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color:#F8EFFB;border-radius: 15px;\">\n                            <a style=\"color:#603F8B;text-decoration: none;\" [routerLink]=\"['/update-space/',x]\">\n                                <h5>{{x}}</h5>\n                            </a>\n                        </div>\n                        <div *ngIf=\"x=='private office'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color: #EFF8FB;border-radius: 15px;color:#5882FA\">\n                            <a style=\"color:#5882FA;text-decoration: none\" [routerLink]=\"['/update-space/',x]\">\n                                <h5>{{x}}</h5>\n                            </a>\n                        </div>\n                        <div *ngIf=\"x=='Pair'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color: #FBF8EF;border-radius: 15px;color:#F7D358\">\n                            <a style=\"color:#F7D358;text-decoration: none\" [routerLink]=\"['/update-space/',x]\">\n                                <h5>{{x}}</h5>\n                            </a>\n                        </div>\n                        <div *ngIf=\"x=='BoardRoom'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%;background-color: #FBEFF2;border-radius: 15px;color:#FA5882\">\n                            <a style=\"color:#FA5882;text-decoration: none\" [routerLink]=\"['/update-space/',x]\">\n                                <h5>{{x}}</h5>\n                            </a>\n                        </div>\n                        <div *ngIf=\"x=='OpenSpace'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%;background-color: #FBEFF2;border-radius: 15px;color:#a78991\">\n                            <a style=\"color:#a78991;text-decoration: none\" [routerLink]=\"['/update-space/',x]\">\n                                <h5>{{x}}</h5>\n                            </a>\n                        </div>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/your-spaces/your-spaces-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/your-spaces/your-spaces-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: YourSpacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourSpacesPageRoutingModule", function() { return YourSpacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _your_spaces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./your-spaces.page */ "./src/app/pages/your-spaces/your-spaces.page.ts");




const routes = [
    {
        path: '',
        component: _your_spaces_page__WEBPACK_IMPORTED_MODULE_3__["YourSpacesPage"]
    }
];
let YourSpacesPageRoutingModule = class YourSpacesPageRoutingModule {
};
YourSpacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], YourSpacesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/your-spaces/your-spaces.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/your-spaces/your-spaces.module.ts ***!
  \*********************************************************/
/*! exports provided: YourSpacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourSpacesPageModule", function() { return YourSpacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _your_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./your-spaces-routing.module */ "./src/app/pages/your-spaces/your-spaces-routing.module.ts");
/* harmony import */ var _your_spaces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-spaces.page */ "./src/app/pages/your-spaces/your-spaces.page.ts");







let YourSpacesPageModule = class YourSpacesPageModule {
};
YourSpacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _your_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__["YourSpacesPageRoutingModule"]
        ],
        declarations: [_your_spaces_page__WEBPACK_IMPORTED_MODULE_6__["YourSpacesPage"]]
    })
], YourSpacesPageModule);



/***/ }),

/***/ "./src/app/pages/your-spaces/your-spaces.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/your-spaces/your-spaces.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lvdXItc3BhY2VzL3lvdXItc3BhY2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/your-spaces/your-spaces.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/your-spaces/your-spaces.page.ts ***!
  \*******************************************************/
/*! exports provided: YourSpacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourSpacesPage", function() { return YourSpacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");











let YourSpacesPage = class YourSpacesPage {
    constructor(popover, formBuilder, ownerservice, account, loadingCtrl, router, alertCtrl) {
        this.popover = popover;
        this.formBuilder = formBuilder;
        this.ownerservice = ownerservice;
        this.account = account;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        ////update coworking space///
        this.viewSpace = 0;
        this.spaces = [];
        this.spacesT = [];
        this.spacesTT = [];
        this.ret_array = [];
        this.array = [];
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles")
            .doc(this.account.getUserSession())
            .collection("profile")
            .where("uid", "==", this.account.getUserSession())
            .get()
            .then(doc => {
            doc.forEach(dat => {
                // console.log("hh"+dat.id) 
                this.profileUid = dat.id;
                this.workingSpaces();
            });
        });
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
    ionViewWillEnter() {
        location.reload();
        console.log("we are entering the owner page");
        window.stop();
    }
    ionViewDidEnter() {
        location.reload();
        console.log("owner page reloaded!");
        window.stop();
        console.log(this.account.getUserSession());
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles")
            .doc(this.account.getUserSession())
            .collection("profile").doc(this.profileUid).collection("space")
            .where("uid", "==", this.account.getUserSession())
            .get()
            .then(snap => {
            snap.forEach(doc => {
                // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );
                this.array.push(doc.data().categories);
                this.ownerservice.setWorkSpaceUID(doc.data().workspace_uid);
                //  this.spaces.push(this.remove_duplicates(array))  
                this.unique(this.array);
                console.log(this.returnUniq());
            });
        });
        // location.reload();
        console.log("ionViewDidEnter");
        // window.stop();
    }
    ngOnInit() {
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
        //  this.viewSpace =1;
        this.array = [];
        // this.workingSpaces();
    }
    returnHome() {
        this.router.navigateByUrl('/owner-landing');
    }
};
YourSpacesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_8__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
];
YourSpacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-your-spaces',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./your-spaces.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/your-spaces/your-spaces.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./your-spaces.page.scss */ "./src/app/pages/your-spaces/your-spaces.page.scss")).default]
    })
], YourSpacesPage);



/***/ })

}]);
//# sourceMappingURL=pages-your-spaces-your-spaces-module-es2015.js.map