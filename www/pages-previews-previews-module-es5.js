(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-previews-previews-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previews/previews.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previews/previews.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPreviewsPreviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n  <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n    <ion-row>\r\n      <ion-buttons style=\"color:#1E3D58\" >\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-row>\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Previews</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  \r\n      <div style=\"border:1px solid white;bottom:0%;;position:relative;overflow: scroll;position: relative;height: 70%;\">\r\n        <ion-card *ngFor=\"let y of commentsList\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <p style=\"font-family: Helvetica, sans-serif;font-size:1em;color:rgb(59, 59, 59);font-weight: bold;\">{{y.comment}}.</p>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col style=\"font-family: Arial, Helvetica, sans-serif;font-size:.9em;color:rgb(233, 177, 177);\">\r\n                {{y.datecomment}}/{{y.timecomment}} \r\n              </ion-col>\r\n            </ion-row>\r\n           \r\n          </ion-grid>\r\n        </ion-card>\r\n      \r\n      </div>\r\n    </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"container\">\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let y of commentsList\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <p>{{y.comment}}</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>Date: {{y.datecomment}}</ion-col>\r\n          <ion-col>Time: {{y.timecomment}} </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  </div> -->\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/previews/previews-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/previews/previews-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PreviewsPageRoutingModule */

    /***/
    function srcAppPagesPreviewsPreviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewsPageRoutingModule", function () {
        return PreviewsPageRoutingModule;
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


      var _previews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./previews.page */
      "./src/app/pages/previews/previews.page.ts");

      var routes = [{
        path: '',
        component: _previews_page__WEBPACK_IMPORTED_MODULE_3__["PreviewsPage"]
      }];

      var PreviewsPageRoutingModule = function PreviewsPageRoutingModule() {
        _classCallCheck(this, PreviewsPageRoutingModule);
      };

      PreviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreviewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/previews/previews.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/previews/previews.module.ts ***!
      \***************************************************/

    /*! exports provided: PreviewsPageModule */

    /***/
    function srcAppPagesPreviewsPreviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewsPageModule", function () {
        return PreviewsPageModule;
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


      var _previews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./previews-routing.module */
      "./src/app/pages/previews/previews-routing.module.ts");
      /* harmony import */


      var _previews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./previews.page */
      "./src/app/pages/previews/previews.page.ts");

      var PreviewsPageModule = function PreviewsPageModule() {
        _classCallCheck(this, PreviewsPageModule);
      };

      PreviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _previews_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreviewsPageRoutingModule"]],
        declarations: [_previews_page__WEBPACK_IMPORTED_MODULE_6__["PreviewsPage"]]
      })], PreviewsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/previews/previews.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/previews/previews.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPreviewsPreviewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJldmlld3MvcHJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJldmlld3MvcHJldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vLyAuY29udGFpbmVye1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZENkUzO1xyXG4vLyB9XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/previews/previews.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/previews/previews.page.ts ***!
      \*************************************************/

    /*! exports provided: PreviewsPage */

    /***/
    function srcAppPagesPreviewsPreviewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewsPage", function () {
        return PreviewsPage;
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

      var PreviewsPage = /*#__PURE__*/function () {
        function PreviewsPage(router, route, ownerservice, account) {
          var _this = this;

          _classCallCheck(this, PreviewsPage);

          this.router = router;
          this.route = route;
          this.ownerservice = ownerservice;
          this.account = account;
          this.uidprofiles = this.route.snapshot.params.uidprofiles;
          this.uidprofile = this.route.snapshot.params.uidprofile;
          this.uidspace = this.route.snapshot.params.uidspace;
          this.commentsList = [];
          console.log(this.account.getUserSession());
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles").doc(this.uidprofiles).collection("profile").doc(this.uidprofile).collection("space").doc(this.uidspace).collection("previews").where("space_uid", "==", this.uidspace).get().then(function (doc) {
            doc.forEach(function (list) {
              _this.commentsList.push(list.data());

              console.log(_this.commentsList);
            });
          });
        }

        _createClass(PreviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('previews');
          }
        }]);

        return PreviewsPage;
      }();

      PreviewsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerServiceService"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"]
        }];
      };

      PreviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-previews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./previews.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/previews/previews.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./previews.page.scss */
        "./src/app/pages/previews/previews.page.scss"))["default"]]
      })], PreviewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-previews-previews-module-es5.js.map