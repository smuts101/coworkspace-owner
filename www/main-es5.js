(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu style=\"background-color: #E5E9F8;\" side=\"start\" menuId=\"first\" contentId=\"menuContent\">\r\n\r\n\r\n    <ion-content style=\"--background:#E5E9F8;\">\r\n      <!-- <div class=\"wrapper\"> -->\r\n        <ion-list>\r\n            <ion-menu-toggle>\r\n              <ion-item [routerLink]=\"'/profile'\">\r\n                <ion-icon style=\"font-size: 30px; color: black;\" name=\"person-circle-outline\"></ion-icon>\r\n                Profile</ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle>\r\n              <ion-item (click)=\"logout()\">\r\n                <ion-icon style=\"font-size: 30px; color: black;\" name=\"log-out-outline\" ></ion-icon>\r\n                Logout</ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n          <!-- </div> -->\r\n          </ion-content>\r\n          </ion-menu>\r\n          <!-- <ion-menu-controller></ion-menu-controller> -->\r\n\r\n  <ion-router-outlet id=\"menuContent\"></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/masseges/masseges.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/masseges/masseges.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFeedbackMassegesMassegesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n \r\n<ion-content padding>\r\n   <ion-grid>\r\n     <ion-row><ion-col>Process done successfully.</ion-col></ion-row>\r\n     <ion-row><ion-col><ion-button color=\"success\" expand=\"block\" (click)=\"ClosePopover()\">Ok</ion-button></ion-col></ion-row>\r\n   </ion-grid> \r\n </ion-content> ";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'signin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-signin-signin-module */
          "pages-signin-signin-module").then(__webpack_require__.bind(null,
          /*! ./pages/signin/signin.module */
          "./src/app/pages/signin/signin.module.ts")).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-signup-signup-module */
          "pages-signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./pages/signup/signup.module */
          "./src/app/pages/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'owner-landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-owner-landing-owner-landing-module */
          "pages-owner-landing-owner-landing-module").then(__webpack_require__.bind(null,
          /*! ./pages/owner-landing/owner-landing.module */
          "./src/app/pages/owner-landing/owner-landing.module.ts")).then(function (m) {
            return m.OwnerLandingPageModule;
          });
        }
      }, {
        path: 'add-space',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-space-add-space-module */
          "pages-add-space-add-space-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-space/add-space.module */
          "./src/app/pages/add-space/add-space.module.ts")).then(function (m) {
            return m.AddSpacePageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'profile-add',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-add-profile-add-module */
          "pages-profile-add-profile-add-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile-add/profile-add.module */
          "./src/app/pages/profile-add/profile-add.module.ts")).then(function (m) {
            return m.ProfileAddPageModule;
          });
        }
      }, {
        path: 'update-space/:category',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-update-space-update-space-module */
          [__webpack_require__.e("default~pages-update-space-update-space-module~pages-view-walkins-view-walkins-module~tab1-tab1-modu~be6bf6e9"), __webpack_require__.e("pages-update-space-update-space-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/update-space/update-space.module */
          "./src/app/pages/update-space/update-space.module.ts")).then(function (m) {
            return m.UpdateSpacePageModule;
          });
        }
      }, {
        path: 'working-spaces',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-homepages-working-spaces-working-spaces-module */
          "pages-homepages-working-spaces-working-spaces-module").then(__webpack_require__.bind(null,
          /*! ./pages/homepages/working-spaces/working-spaces.module */
          "./src/app/pages/homepages/working-spaces/working-spaces.module.ts")).then(function (m) {
            return m.WorkingSpacesPageModule;
          });
        }
      }, {
        path: 'view-space/:spaceuid/:profuid/:spaceId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-homepages-view-space-view-space-module */
          "pages-homepages-view-space-view-space-module").then(__webpack_require__.bind(null,
          /*! ./pages/homepages/view-space/view-space.module */
          "./src/app/pages/homepages/view-space/view-space.module.ts")).then(function (m) {
            return m.ViewSpacePageModule;
          });
        }
      }, {
        path: 'viewbooking/:reservuid/:profilesuid/:profileuid/:spaceuid/:useruid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-viewbooking-viewbooking-module */
          "pages-viewbooking-viewbooking-module").then(__webpack_require__.bind(null,
          /*! ./pages/viewbooking/viewbooking.module */
          "./src/app/pages/viewbooking/viewbooking.module.ts")).then(function (m) {
            return m.ViewbookingPageModule;
          });
        }
      }, {
        path: 'viewhistory/:reservuid/:profilesuid/:profileuid/:spaceuid/:useruid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-viewhistory-viewhistory-module */
          "pages-viewhistory-viewhistory-module").then(__webpack_require__.bind(null,
          /*! ./pages/viewhistory/viewhistory.module */
          "./src/app/pages/viewhistory/viewhistory.module.ts")).then(function (m) {
            return m.ViewhistoryPageModule;
          });
        }
      }, {
        path: 'previews/:uidprofiles/:uidprofile/:uidspace',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-previews-previews-module */
          "pages-previews-previews-module").then(__webpack_require__.bind(null,
          /*! ./pages/previews/previews.module */
          "./src/app/pages/previews/previews.module.ts")).then(function (m) {
            return m.PreviewsPageModule;
          });
        }
      }, {
        path: 'previews',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-previews-previews-module */
          "pages-previews-previews-module").then(__webpack_require__.bind(null,
          /*! ./pages/previews/previews.module */
          "./src/app/pages/previews/previews.module.ts")).then(function (m) {
            return m.PreviewsPageModule;
          });
        }
      }, {
        path: 'masseges',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./feedback/masseges/masseges.module */
          "./src/app/feedback/masseges/masseges.module.ts")).then(function (m) {
            return m.MassegesPageModule;
          });
        }
      }, {
        path: 'walkins',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-walkins-walkins-module */
          "pages-walkins-walkins-module").then(__webpack_require__.bind(null,
          /*! ./pages/walkins/walkins.module */
          "./src/app/pages/walkins/walkins.module.ts")).then(function (m) {
            return m.WalkinsPageModule;
          });
        }
      }, {
        path: 'walkins/:spaceuid/:category/:profileuid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-walkins-walkins-module */
          "pages-walkins-walkins-module").then(__webpack_require__.bind(null,
          /*! ./pages/walkins/walkins.module */
          "./src/app/pages/walkins/walkins.module.ts")).then(function (m) {
            return m.WalkinsPageModule;
          });
        }
      }, {
        path: 'view-walkins/:spaceuid/:category/:profileuid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-view-walkins-view-walkins-module */
          [__webpack_require__.e("default~pages-update-space-update-space-module~pages-view-walkins-view-walkins-module~tab1-tab1-modu~be6bf6e9"), __webpack_require__.e("pages-view-walkins-view-walkins-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/view-walkins/view-walkins.module */
          "./src/app/pages/view-walkins/view-walkins.module.ts")).then(function (m) {
            return m.ViewWalkinsPageModule;
          });
        }
      }, {
        path: 'forget',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forget-forget-module */
          "pages-forget-forget-module").then(__webpack_require__.bind(null,
          /*! ./pages/forget/forget.module */
          "./src/app/pages/forget/forget.module.ts")).then(function (m) {
            return m.ForgetPageModule;
          });
        }
      }, {
        path: 'onboarding',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-onboarding-onboarding-module */
          "pages-onboarding-onboarding-module").then(__webpack_require__.bind(null,
          /*! ./pages/onboarding/onboarding.module */
          "./src/app/pages/onboarding/onboarding.module.ts")).then(function (m) {
            return m.OnboardingPageModule;
          });
        }
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-splash-splash-module */
          "pages-splash-splash-module").then(__webpack_require__.bind(null,
          /*! ./pages/splash/splash.module */
          "./src/app/pages/splash/splash.module.ts")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'your-spaces',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-your-spaces-your-spaces-module */
          "pages-your-spaces-your-spaces-module").then(__webpack_require__.bind(null,
          /*! ./pages/your-spaces/your-spaces.module */
          "./src/app/pages/your-spaces/your-spaces.module.ts")).then(function (m) {
            return m.YourSpacesPageModule;
          });
        }
      }, {
        path: 'nav-menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-nav-menu-nav-menu-module */
          "pages-nav-menu-nav-menu-module").then(__webpack_require__.bind(null,
          /*! ./pages/nav-menu/nav-menu.module */
          "./src/app/pages/nav-menu/nav-menu.module.ts")).then(function (m) {
            return m.NavMenuPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: #E5E9F8;\n}\n\n.wrapper {\n  background-color: #E5E9F8;\n}\n\nion-list {\n  background-color: #E5E9F8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNUU5Rjg7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTVFOUY4O1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0U1RTlGODtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_owner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/owner.service */
      "./src/app/services/owner.service.ts");
      /* harmony import */


      var _sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sign-in-sign-up.service */
      "./src/app/sign-in-sign-up.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, menu, router, route, ownerservice, account) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.menu = menu;
          this.router = router;
          this.route = route;
          this.ownerservice = ownerservice;
          this.account = account;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.account.logOut();
            this.router.navigateByUrl('signin');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_owner_service__WEBPACK_IMPORTED_MODULE_6__["OwnerServiceService"]
        }, {
          type: _sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignInSignUpService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");
      /* harmony import */


      var firebase_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! firebase/database */
      "./node_modules/firebase/database/dist/index.esm.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var _feedback_masseges_masseges_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./feedback/masseges/masseges.module */
      "./src/app/feedback/masseges/masseges.module.ts");

      var firebaseConfig = {
        apiKey: "AIzaSyDxB_DkempfeYitUSydU4rmbKSS8RXglno",
        authDomain: "synergic-app.firebaseapp.com",
        databaseURL: "https://synergic-app.firebaseio.com",
        projectId: "synergic-app",
        storageBucket: "synergic-app.appspot.com",
        messagingSenderId: "65487277177",
        appId: "1:65487277177:web:15e865dbd5be2d3e1918a8",
        measurementId: "G-4316EVE5PJ"
      }; // Initialize Firebase

      firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].initializeApp(firebaseConfig); // firebase.analytics();

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDug8dO2sLm-xN-feiWEyVj5q7dm7sRgNM',
          libraries: ['places']
        }), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _feedback_masseges_masseges_module__WEBPACK_IMPORTED_MODULE_15__["MassegesPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/feedback/masseges/masseges-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/feedback/masseges/masseges-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: MassegesPageRoutingModule */

    /***/
    function srcAppFeedbackMassegesMassegesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MassegesPageRoutingModule", function () {
        return MassegesPageRoutingModule;
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


      var _masseges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./masseges.page */
      "./src/app/feedback/masseges/masseges.page.ts");

      var routes = [{
        path: '',
        component: _masseges_page__WEBPACK_IMPORTED_MODULE_3__["MassegesPage"]
      }];

      var MassegesPageRoutingModule = function MassegesPageRoutingModule() {
        _classCallCheck(this, MassegesPageRoutingModule);
      };

      MassegesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MassegesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/feedback/masseges/masseges.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/feedback/masseges/masseges.module.ts ***!
      \******************************************************/

    /*! exports provided: MassegesPageModule */

    /***/
    function srcAppFeedbackMassegesMassegesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MassegesPageModule", function () {
        return MassegesPageModule;
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


      var _masseges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./masseges-routing.module */
      "./src/app/feedback/masseges/masseges-routing.module.ts");
      /* harmony import */


      var _masseges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./masseges.page */
      "./src/app/feedback/masseges/masseges.page.ts");

      var MassegesPageModule = function MassegesPageModule() {
        _classCallCheck(this, MassegesPageModule);
      };

      MassegesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _masseges_routing_module__WEBPACK_IMPORTED_MODULE_5__["MassegesPageRoutingModule"]],
        declarations: [_masseges_page__WEBPACK_IMPORTED_MODULE_6__["MassegesPage"]]
      })], MassegesPageModule);
      /***/
    },

    /***/
    "./src/app/feedback/masseges/masseges.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/feedback/masseges/masseges.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFeedbackMassegesMassegesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL21hc3NlZ2VzL21hc3NlZ2VzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/feedback/masseges/masseges.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/feedback/masseges/masseges.page.ts ***!
      \****************************************************/

    /*! exports provided: MassegesPage */

    /***/
    function srcAppFeedbackMassegesMassegesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MassegesPage", function () {
        return MassegesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var MassegesPage = /*#__PURE__*/function () {
        function MassegesPage(popover) {
          _classCallCheck(this, MassegesPage);

          this.popover = popover;
        }

        _createClass(MassegesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ClosePopover",
          value: function ClosePopover() {
            this.popover.dismiss();
          }
        }]);

        return MassegesPage;
      }();

      MassegesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      MassegesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-masseges',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./masseges.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/masseges/masseges.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./masseges.page.scss */
        "./src/app/feedback/masseges/masseges.page.scss"))["default"]]
      })], MassegesPage);
      /***/
    },

    /***/
    "./src/app/services/owner.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/owner.service.ts ***!
      \*******************************************/

    /*! exports provided: OwnerServiceService */

    /***/
    function srcAppServicesOwnerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerServiceService", function () {
        return OwnerServiceService;
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


      var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");
      /* harmony import */


      var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/database */
      "./node_modules/firebase/database/dist/index.esm.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OwnerServiceService = /*#__PURE__*/function () {
        function OwnerServiceService(router, loadingCtrl, alertCtrl) {
          _classCallCheck(this, OwnerServiceService);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
          this.array = [];
          this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth();
          this.arr = [];
          this.resArr = new Array();
          this.resProfArray = new Array();
        }

        _createClass(OwnerServiceService, [{
          key: "signAuth",
          value: function signAuth() {
            var _this2 = this;

            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (user) {
              if (user) {
                var uid = user.uid; //  this.setSession(users);

                _this2.setuid(uid);

                console.log('user logged in: ', user);
              } else {
                console.log('user logged out');
              }
            });
          }
        }, {
          key: "setuid",
          value: function setuid(a) {
            this.UID = a;
          }
        }, {
          key: "getUid",
          value: function getUid() {
            return this.UID;
          }
        }, {
          key: "reserve",
          value: function reserve() {
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('CoWorking-Space');
          } //   gallery() {
          //   return firebase.firestore().doc('space');
          // }

        }, {
          key: "updateProfile",
          value: function updateProfile(user_uid, uid, company_tel, company_address, company_website, social_media, company_emaile, company_name, img_profile, outside_features, aboutus) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var db, hotelsRef, hotel;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // const loading = await this.loadingCtrl.create();
                      this.uploadSpaceSuccess();
                      db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
                      hotelsRef = db.collection("profiles").doc(uid);
                      hotel = Promise.all([hotelsRef.collection("profile").doc(user_uid).set({
                        company_address: company_address,
                        company_tel: company_tel,
                        company_website: company_website,
                        social_media: social_media,
                        company_emaile: company_emaile,
                        company_name: company_name,
                        uid: uid,
                        user_uid: user_uid,
                        img_profile: img_profile,
                        outside_features: outside_features,
                        aboutus: aboutus
                      }, {
                        merge: true
                      })])["catch"](function (error) {
                        _this3._error = error.message;
                        console.log(_this3._error);

                        _this3.updateSpaceError(); // this.router.navigateByUrl('/add-space');

                      }); // return await loading.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editProfile",
          value: function editProfile(user_uid, uid, company_tel, company_address, company_website, company_emaile, company_name, outside_features, aboutus) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var loading, db, hotelsRef;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      loading = _context2.sent;
                      db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
                      hotelsRef = db.collection("profiles");
                      hotelsRef.doc(uid).collection("profile").doc(user_uid).set({
                        company_address: company_address,
                        company_tel: company_tel,
                        company_website: company_website,
                        company_emaile: company_emaile,
                        company_name: company_name,
                        uid: uid,
                        user_uid: user_uid,
                        outside_features: outside_features,
                        aboutus: aboutus
                      }, {
                        merge: true
                      }).then(function (a) {
                        loading.dismiss().then(function () {
                          console.log("Changed");

                          _this4.router.navigateByUrl('/profile');
                        });
                        console.log("Changed");
                      }), function (error) {
                        loading.dismiss().then(function () {
                          console.log(error.message); // this.addSpaceerror();
                        });
                      };
                      _context2.next = 8;
                      return loading.present();

                    case 8:
                      return _context2.abrupt("return", _context2.sent);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeImg",
          value: function changeImg(user_uid, uid, img_profile) {
            this.uploadProfilepicSuccess();
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles");
            hotelsRef.doc(uid).collection("profile").doc(user_uid).set({
              uid: uid,
              user_uid: user_uid,
              img_profile: img_profile
            }, {
              merge: true
            });
          }
        }, {
          key: "changeImgSpace",
          value: function changeImgSpace(user_uid, profile_uid, image, cate_uid) {
            this.uploadSpacepicSuccess();
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles");
            hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid).update({
              image: image
            });
          }
        }, {
          key: "extrasAmenities",
          value: function extrasAmenities(user_uid, profile_uid, extras, cate_uid) {
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles");
            hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid).set({
              extraAmenities: extras
            }, {
              merge: true
            });
          }
        }, {
          key: "geoCodeLocation",
          value: function geoCodeLocation(user_uid, profile_uid, cate_uid, lat, log) {
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles");
            hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid).set({
              lat: lat,
              lng: log
            }, {
              merge: true
            });
          } // console.log( this.addCoSpaceForm.value.categories+" "+
          // this.addCoSpaceForm.value.category_number
          // +" "+this.addCoSpaceForm.value.address
          // +" "+this.addCoSpaceForm.value.city
          // +" "+this.addCoSpaceForm.value.province)

        }, {
          key: "addcoworkingSpace",
          value: function addcoworkingSpace(profiles_uid, profile_uid, categories, category_number, address, city, province, amenities, image, price, description) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var db, hotelsRef, hotel;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // const loading = await this.loadingCtrl.create();
                      this.addSpace();
                      db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
                      hotelsRef = db.collection("profiles").doc(profiles_uid);
                      hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").add({
                        uid: profiles_uid,
                        workspace_uid: profile_uid,
                        categories: categories,
                        category_number: category_number,
                        address: address,
                        city: city,
                        province: province,
                        amenities: amenities,
                        image: image,
                        price: price,
                        description: description
                      })["catch"](function (error) {
                        _this5._error = error.message;
                        console.log(_this5._error);

                        _this5.addSpaceerror(); // this.router.navigateByUrl('/add-space');

                      })]); // return await loading.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //  async addcoworkingSpace(profiles_uid,profile_uid,categories,category_number,address,city,province,amenities,image,price,description) {
          //   const loading = await this.loadingCtrl.create();
          //   this.accountService.SignIn(this.LoginForm.value.email, this.LoginForm.value.password).then((res) => {
          //     // this.accountService.checkVerification();
          //   }).then(() => {
          //     loading.dismiss().then(() => {
          //       // this.router.navigateByUrl('/update-space');
          //     });
          //   },
          //     error => {
          //       loading.dismiss().then(() => {
          //         // this.router.navigateByUrl('/signin')
          //         console.log(error);
          //       });
          //     }
          //   );
          //   return await loading.present();
          // }

        }, {
          key: "addGallary",
          value: function addGallary(profiles_uid, profile_uid, spaceuid, image, gallaryid) {
            this.uploadgallerySuccess();
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles").doc(profiles_uid);
            var hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(spaceuid).collection("gallary").doc(gallaryid).set({
              uid: profiles_uid,
              workspace_uid: profile_uid,
              spaceuid: spaceuid,
              image: image
            }).then(function (a) {
              console.log("Changed");
            })]);
          }
        }, {
          key: "walkinBooking",
          value: function walkinBooking(profiles_uid, profile_uid, spaceuid, name, surname, email, phone, timeout, timein, checkout, checkin, category) {
            var _this6 = this;

            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles").doc(profiles_uid);
            var hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(spaceuid).collection("walkins").add({
              name: name,
              surname: surname,
              email: email,
              phone: phone,
              timeout: timeout,
              timein: timein,
              checkout: checkout,
              checkin: checkin,
              spaceuid: spaceuid,
              category: category,
              date: new Date()
            }).then(function (a) {
              console.log("Changed");

              _this6.router.navigateByUrl('/view-walkins');
            })]);
          }
        }, {
          key: "updateCoworkingSpace",
          value: function updateCoworkingSpace(profiles_uid, profile_uid, cate_uid, categories, category_number, address, price, city, province, amenities, description) {
            this.updateSpaceSuccess();
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles").doc(profiles_uid);
            var hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid).update({
              uid: profiles_uid,
              workspace_uid: profile_uid,
              categories: categories,
              category_number: category_number,
              address: address,
              city: city,
              province: province,
              amenities: amenities,
              price: price,
              description: description
            }).then(function (a) {
              console.log("Changed");
            })]);
          }
        }, {
          key: "deleteSpace",
          value: function deleteSpace(profiles_uid, profile_uid, cate_uid) {
            this.deleteSpaceSuccess();
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles").doc(profiles_uid);
            var hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid)["delete"]().then(function (a) {
              console.log("Changed");
            })]);
          }
        }, {
          key: "reservation",
          value: function reservation(uid, name, surname, phone, checkin, checkout, timein, timeout, spaceBooked, usertype) {
            var citiesRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('profiles');
            var hotel = Promise.all([citiesRef.doc("8j3w4lEbm3OBxgQYVNGQmN1YU292").collection("bookings").add({
              name: name,
              surname: surname,
              phone: phone,
              checkin: checkin,
              checkout: checkout,
              timein: timein,
              timeout: timeout,
              spaceBooked: spaceBooked,
              usertype: usertype,
              date: new Date()
            }).then(function (res) {})]);
          }
        }, {
          key: "readOrNot",
          value: function readOrNot(profiles_uid, profile_uid, space_uid, reserv_uid, read) {
            var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
            var hotelsRef = db.collection("profiles").doc(profiles_uid);
            var hotel = Promise.all([hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(space_uid).collection("reservation").doc(reserv_uid).set({
              read: true
            }, {
              merge: true
            }).then(function (a) {
              console.log("Changed");
            })]);
          } ///////////////////////////////////////////////////////////////////
          //////////////////////////Get Workspace Uid///////////////////////

        }, {
          key: "setWorkSpaceUID",
          value: function setWorkSpaceUID(uid) {
            this.workspace_uid = uid;
          }
        }, {
          key: "getWorkSpaceUID",
          value: function getWorkSpaceUID() {
            return this.workspace_uid;
          }
        }, {
          key: "addSpacesuccess",
          value: function addSpacesuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        header: 'Successful',
                        message: 'Your space was added successfully, Click Okay to go Home',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      this.router.navigateByUrl('/owner-landing');

                                    case 1:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "addSpace",
          value: function addSpace() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this8 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Uploading Space',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            var _this9 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context6.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your space was added successfully, Click Okay to go Home",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this9.router.navigateByUrl('/owner-landing');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context6.sent;
                                    _context6.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context6.abrupt("return", _context6.sent);

                                  case 7:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context7.sent;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addSpaceerror",
          value: function addSpaceerror() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertCtrl.create({
                        header: 'Successful',
                        message: 'Something went wrong while adding your space, Please try again.',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      this.router.navigateByUrl('/add-space');

                                    case 1:
                                    case "end":
                                      return _context8.stop();
                                  }
                                }
                              }, _callee8, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "uploadSpaceSuccess",
          value: function uploadSpaceSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this11 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Updating profile',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            var _this12 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context10.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your profile was updated successfully, Click Okay to view you profile",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this12.router.navigateByUrl('/profile');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context10.sent;
                                    _context10.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context10.abrupt("return", _context10.sent);

                                  case 7:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context11.sent;

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "updateSpaceError",
          value: function updateSpaceError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this13 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.alertCtrl.create({
                        header: 'Successful',
                        message: 'Your space was added successfully, Click Okay to go Home',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                while (1) {
                                  switch (_context12.prev = _context12.next) {
                                    case 0:
                                      this.router.navigateByUrl('/owner-landing');

                                    case 1:
                                    case "end":
                                      return _context12.stop();
                                  }
                                }
                              }, _callee12, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context13.sent;
                      _context13.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "uploadProfilepicSuccess",
          value: function uploadProfilepicSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this14 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Updating Profile picture',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            var _this15 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context14.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your Profile picture was updated successfully, Click Okay to view you profile",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this15.router.navigateByUrl('/profile');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context14.sent;
                                    _context14.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context14.abrupt("return", _context14.sent);

                                  case 7:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context15.sent;

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "uploadSpacepicSuccess",
          value: function uploadSpacepicSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this16 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Updating Space Profile pic',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                            var _this17 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee16$(_context16) {
                              while (1) {
                                switch (_context16.prev = _context16.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context16.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your space profile picture was updated successfully, Click Okay to view you profile",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this17.router.navigateByUrl('/add-space');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context16.sent;
                                    _context16.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context16.abrupt("return", _context16.sent);

                                  case 7:
                                  case "end":
                                    return _context16.stop();
                                }
                              }
                            }, _callee16, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context17.sent;

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "uploadgallerySuccess",
          value: function uploadgallerySuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this18 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Creating Gallery',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                            var _this19 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee18$(_context18) {
                              while (1) {
                                switch (_context18.prev = _context18.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context18.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your gallery picture was added successfully",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this19.router.navigateByUrl('/add-space');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context18.sent;
                                    _context18.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context18.abrupt("return", _context18.sent);

                                  case 7:
                                  case "end":
                                    return _context18.stop();
                                }
                              }
                            }, _callee18, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context19.sent;

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "updateSpaceSuccess",
          value: function updateSpaceSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this20 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Updating Space',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                            var _this21 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee20$(_context20) {
                              while (1) {
                                switch (_context20.prev = _context20.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context20.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your space was updated successfully",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this21.router.navigateByUrl('/home');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context20.sent;
                                    _context20.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context20.abrupt("return", _context20.sent);

                                  case 7:
                                  case "end":
                                    return _context20.stop();
                                }
                              }
                            }, _callee20, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context21.sent;

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "deleteSpaceSuccess",
          value: function deleteSpaceSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this22 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Deleting',
                        duration: 2000
                      }).then(function (res) {
                        res.present();
                        res.onDidDismiss().then(function (dis) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                            var _this23 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee22$(_context22) {
                              while (1) {
                                switch (_context22.prev = _context22.next) {
                                  case 0:
                                    console.log('Loading dismissed after 2 seconds', dis);
                                    _context22.next = 3;
                                    return this.alertCtrl.create({
                                      message: "Your space was deleted successfully",
                                      buttons: [{
                                        text: 'Ok',
                                        handler: function handler() {
                                          _this23.router.navigateByUrl('/owner-landing');
                                        }
                                      }]
                                    });

                                  case 3:
                                    alert = _context22.sent;
                                    _context22.next = 6;
                                    return alert.present();

                                  case 6:
                                    return _context22.abrupt("return", _context22.sent);

                                  case 7:
                                  case "end":
                                    return _context22.stop();
                                }
                              }
                            }, _callee22, this);
                          }));
                        });
                      });

                    case 2:
                      loader = _context23.sent;

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }]);

        return OwnerServiceService;
      }();

      OwnerServiceService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      OwnerServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OwnerServiceService);
      /***/
    },

    /***/
    "./src/app/sign-in-sign-up.service.ts":
    /*!********************************************!*\
      !*** ./src/app/sign-in-sign-up.service.ts ***!
      \********************************************/

    /*! exports provided: SignInSignUpService */

    /***/
    function srcAppSignInSignUpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInSignUpService", function () {
        return SignInSignUpService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SignInSignUpService = /*#__PURE__*/function () {
        function SignInSignUpService(router, route, alertCtrl, loadingCtrl) {
          _classCallCheck(this, SignInSignUpService);

          this.router = router;
          this.route = route;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
          this.onboardingStatus = false;
        }

        _createClass(SignInSignUpService, [{
          key: "signAuth",
          value: function signAuth() {
            var _this24 = this;

            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (user) {
              if (user) {
                var uid = user.uid;

                _this24.setuid(uid);

                console.log('user logged in: ', user);
              } else {
                console.log('user logged out');
              }
            });
          }
        }, {
          key: "setuid",
          value: function setuid(a) {
            this.uid = a;
          }
        }, {
          key: "getUid",
          value: function getUid() {
            return this.uid;
          }
        }, {
          key: "Signup",
          value: function Signup(email, password) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (res) {
              var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
              var userGroupCollecion = db.collection("profiles");
              return userGroupCollecion.doc(res.user.uid).collection("profile").doc(res.user.uid).set({
                company_name: "company name",
                company_email: email,
                company_tel: "company telephone",
                company_website: "www.webste.com",
                social_media: "social media links",
                company_address: "address",
                usergroup: "owner",
                // onboardstatus: this.onboardingStatus,
                uid: res.user.uid,
                date: new Date()
              }).then(function () {
                console.log(res.user);
              })["catch"](function (error) {
                this._error = error.message;
                this.showAlertErrorfb();
                console.log(error);
              });
            });
          }
        }, {
          key: "checkVerification",
          value: function checkVerification() {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (user) {
                console.log(user);

                if (user.emailVerified == false) {
                  console.log('you did not verify your email');

                  _this25.showAlertEmailVerification(); // this.router.navigateByUrl('/signin');


                  resolve(0);
                } else {
                  //  this.router.navigateByUrl('/owner-landing');
                  resolve(1);
                }
              });
            });
          }
        }, {
          key: "SignIn",
          value: function SignIn(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this26 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(email, password).then(function (results) {
                        console.log(results);
                        var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().currentUser;
                        var email, uid;

                        if (user != null) {
                          email = user.email;
                          uid = user.uid;

                          _this26.userSession(uid);

                          _this26.checkExistance(_this26.getUserSession());

                          _this26.loginSucessful();

                          console.log("details: " + email + ' ' + _this26.getUserSession());
                        }
                      })["catch"](function (error) {
                        _this26._error = error.message;

                        _this26.showAlertErrorfb();

                        _this26.router.navigateByUrl('/signin');

                        console.log(_this26._error);
                      });

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));
          }
        }, {
          key: "userSession",
          value: function userSession(uidOwner) {
            this.uidOwner = uidOwner;
          }
        }, {
          key: "userEmail",
          value: function userEmail(emailOwner) {
            this.emailOwner = emailOwner;
          }
        }, {
          key: "getUserSession",
          value: function getUserSession() {
            return this.uidOwner;
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.uidOwner = null;
            return this.uidOwner;
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return this.emailOwner;
          }
        }, {
          key: "checkExistance",
          value: function checkExistance(uid) {
            var _this27 = this;

            this.db.collectionGroup("profile").where("uid", "==", uid).get().then(function (snap) {
              snap.forEach(function (doc) {
                if (!doc.exists) {
                  console.log("No such user in the profiles Document!");
                }

                if (doc.exists) if (doc.data().usergroup == 'owner') {
                  console.log("Owner");
                  _this27.status = true;
                  console.log("Document data:", doc.data());
                  console.log("Yeess! looks like you have a business account profile with us");

                  _this27.checkVerification(); // this.router.navigateByUrl('/owner-landing');

                } else {
                  console.log("User");
                  _this27.status = false;
                }
              });

              if (_this27.status != true) {
                console.log("User");
                console.log("Oops! looks like you don't have a business account profile with us");

                _this27.showAlertError(); // this.router.navigateByUrl('/signup'); 

              }
            });
          }
        }, {
          key: "reserve",
          value: function reserve() {
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('profiles');
          }
        }, {
          key: "setStatus",
          value: function setStatus(x) {
            this.status = x;
          }
        }, {
          key: "returnStatus",
          value: function returnStatus() {
            return this.status;
          }
        }, {
          key: "preventCrossLogin",
          value: function preventCrossLogin() {}
        }, {
          key: "showAlertError",
          value: function showAlertError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var _this28 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.alertCtrl.create({
                        // header: 'Alert!', 
                        message: 'Oops! looks like you do not have a business account profile with us, Click Okay to Create one.',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                                while (1) {
                                  switch (_context25.prev = _context25.next) {
                                    case 0:
                                      this.router.navigateByUrl('/signup');

                                    case 1:
                                    case "end":
                                      return _context25.stop();
                                  }
                                }
                              }, _callee25, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context26.sent;
                      _context26.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "showAlertErrorfb",
          value: function showAlertErrorfb() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this29 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.alertCtrl.create({
                        header: 'Alert',
                        // subHeader: 'Sign in error!',
                        message: this._error,
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                                while (1) {
                                  switch (_context27.prev = _context27.next) {
                                    case 0:
                                      this.router.navigateByUrl('/signin');

                                    case 1:
                                    case "end":
                                      return _context27.stop();
                                  }
                                }
                              }, _callee27, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context28.sent;
                      _context28.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "showAlertEmailVerification",
          value: function showAlertEmailVerification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var _this30 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.alertCtrl.create({
                        header: 'Alert!',
                        message: 'It looks like you did not veirfy your Email, please do so before you can signin',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                                while (1) {
                                  switch (_context29.prev = _context29.next) {
                                    case 0:
                                      this.router.navigateByUrl('/sign-in');

                                    case 1:
                                    case "end":
                                      return _context29.stop();
                                  }
                                }
                              }, _callee29, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context30.sent;
                      _context30.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "loginSucessful",
          value: function loginSucessful() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this31 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.alertCtrl.create({
                        header: 'Alert!',
                        message: 'Login Successful!, Click okay to Complete your Profile, ignore msg if you already did',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
                              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                                while (1) {
                                  switch (_context31.prev = _context31.next) {
                                    case 0:
                                      this.router.navigateByUrl('/profile-add');

                                    case 1:
                                    case "end":
                                      return _context31.stop();
                                  }
                                }
                              }, _callee31, this);
                            }));
                          }
                        }, {
                          text: 'Ignore',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
                              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                                while (1) {
                                  switch (_context32.prev = _context32.next) {
                                    case 0:
                                      this.router.navigateByUrl('/owner-landing');

                                    case 1:
                                    case "end":
                                      return _context32.stop();
                                  }
                                }
                              }, _callee32, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context33.sent;
                      _context33.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }]);

        return SignInSignUpService;
      }();

      SignInSignUpService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      SignInSignUpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SignInSignUpService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\user\ionicApps\owner-app\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map