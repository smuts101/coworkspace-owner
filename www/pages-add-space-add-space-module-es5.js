(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-space-add-space-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddSpaceAddSpacePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div  *ngIf=\"viewSpace==0\"> -->\r\n    <div *ngIf=\"viewSpace==0\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n        <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\">\r\n\r\n            <div>\r\n                <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n                    <ion-row>\r\n                        <h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">ADD SPACE</h1>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n            <div  style=\"border:1px solid white;bottom:0%;;position:relative;height: 78%;overflow: scroll;\">\r\n                <form style=\"height: 100%;\" [formGroup]=\"addCoSpaceForm\">\r\n                    <ion-grid style=\"width: 100%;\">\r\n                        <ion-row style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">\r\n                            <ion-col>\r\n                                <ion-label>Space Category</ion-label>\r\n                                <ion-select formControlName=\"categories\">\r\n                                    <ion-select-option value=\"private office\">Private Office</ion-select-option>\r\n                                    <ion-select-option value=\"boardroom\">BoardRoom</ion-select-option>\r\n                                    <ion-select-option value=\"Pair\">Pair Office</ion-select-option>\r\n                                    <ion-select-option value=\"Sharing\">Shared Office</ion-select-option>\r\n                                    <ion-select-option value=\"OpenSpace\">Open Plan</ion-select-option>\r\n                                </ion-select>\r\n                                <div style=\"color:red;\" *ngIf=\"isValidInput('categories')\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['categories'].errors.required\">\r\n                                        categories is required\r\n                                    </div>\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['categories'].errors.pattern\">\r\n                                        categories email format\r\n                                    </div>\r\n                                </div>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-label>Category Number</ion-label>\r\n                                <ion-select formControlName=\"category_number\">\r\n                                    <ion-select-option value=\"1\">1</ion-select-option>\r\n                                    <ion-select-option value=\"2\">2</ion-select-option>\r\n                                    <ion-select-option value=\"3\">3</ion-select-option>\r\n                                    <ion-select-option value=\"4\">4</ion-select-option>\r\n                                </ion-select>\r\n                                <div style=\"color:red;\" *ngIf=\"isValidInput('category_number')\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['category_number'].errors.required\">\r\n                                        category_number is required\r\n                                    </div>\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['category_number'].errors.pattern\">\r\n                                        category_number format\r\n                                    </div>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <ion-col size=\"6\">\r\n                                <div style=\"padding-bottom: 5%;width: 100%;\">\r\n                                    <ion-input style=\"width: 100%;\" type=\"decimal\" formControlName=\"price\" placeholder=\"Price\" minlength=\"5\" maxlength=\"6\" required placeholder=\"Price\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                                </div>\r\n                                <div style=\"color:red;\" *ngIf=\"isValidInput('price')\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['price'].errors.required\">\r\n                                        price is required\r\n                                    </div>\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['price'].errors.pattern\">\r\n                                        price format\r\n                                    </div>\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['price'].hasError('maxlength')\">\r\n                                        minLength is 5\r\n                                    </div>\r\n                                    <div *ngIf=\"addCoSpaceForm.controls['price'].hasError('minlength')\">\r\n                                        maxLength is 3\r\n                                    </div>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <ion-textarea placeholder=\"Description\" formControlName=\"description\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n                            </ion-textarea>\r\n                            <div style=\"color:red;\" *ngIf=\"!description?.valid && (description?.dirty || description?.touched)\">\r\n                                Invalid description\r\n                                <div *ngIf=\"description.errors.required\">\r\n                                    description is required\r\n                                </div>\r\n                                <div *ngIf=\"description.errors.maxlength\">\r\n                                    maxlength is 150\r\n                                </div>\r\n                                <div *ngIf=\"description.errors.minlength\">\r\n                                    minlength is 5\r\n                                </div>\r\n\r\n                            </div>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <div style=\"font-family: Arial, Helvetica, sans-serif;font-size: 1.1em;color:#1E3D58;font-weight: bold;padding-top: 5%;padding-bottom: 5%;\">\r\n                                <b>Enter your adress below</b>\r\n                            </div>\r\n\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n                                <ion-textarea placeholder=\"Address\" formControlName=\"address\" style=\"background-color: #E8EEF1;border-radius: 5px\"></ion-textarea>\r\n\r\n                            </div>\r\n                            <div style=\"color:red;\" *ngIf=\"!address?.valid && (address?.dirty || address?.touched)\">\r\n                                Invalid description\r\n                                <div *ngIf=\"address.errors.required\">\r\n                                    address is required\r\n                                </div>\r\n                            </div>\r\n                        </ion-row>\r\n                        <ion-row style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">\r\n                            <ion-label>Province</ion-label>\r\n                            <ion-select formControlName=\"province\">\r\n                                <ion-select-option value=\"gauteng\">Gauteng</ion-select-option>\r\n                                <ion-select-option value=\"limpopo\">Limpopo</ion-select-option>\r\n                                <ion-select-option value=\"kzn\">KZN</ion-select-option>\r\n                                <ion-select-option value=\"mpumalanga\">Mpumalanga</ion-select-option>\r\n                                <ion-select-option value=\"northwest\">North West</ion-select-option>\r\n                                <ion-select-option value=\"easterncape\">Eastern Cape</ion-select-option>\r\n                            </ion-select>\r\n                            <div style=\"color:red;\" *ngIf=\"!city?.valid && (city?.dirty || city?.touched)\">\r\n                                Invalid Province\r\n                                <div *ngIf=\"city.errors.required\">\r\n                                    address is Province\r\n                                </div>\r\n                            </div>\r\n                        </ion-row>\r\n\r\n                        <ion-row>\r\n                            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n                                <ion-input style=\"width: 100%;\" type=\"text\" formControlName=\"city\" placeholder=\"city\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                            </div>\r\n                            <div style=\"color:red;\" *ngIf=\"!city?.valid && (city?.dirty || city?.touched)\">\r\n                                Invalid city\r\n                                <div *ngIf=\"city.errors.required\">\r\n                                    address is required\r\n                                </div>\r\n                            </div>\r\n                        </ion-row>\r\n\r\n\r\n                        <ion-row>\r\n                            <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n                            <div>\r\n                                <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                            </div>\r\n                        </ion-row>\r\n\r\n                        <ion-row>\r\n                            <div style=\"font-family: Arial, Helvetica, sans-serif;font-size: 1em;color:#057DCD;font-weight: bold;padding-top: 5%;padding-bottom: 5%;\">\r\n                                <b>Add Amenities</b>\r\n                            </div>\r\n                        </ion-row>\r\n\r\n\r\n                        <ion-row>\r\n                            <div style=\"height: 100px;width: 100%;border: 1px solid whitesmoke;overflow: scroll;background-color: whitesmoke;border-radius: 5px;\">\r\n                                <ion-grid style=\"width: 100%;\">\r\n\r\n                                    <ion-row>\r\n\r\n                                        <ion-col *ngFor=\"let amenities of amenitiesData\" size=\"3\">\r\n                                            <div style=\"font-size: 1em;\">\r\n                                                <input type=\"checkbox\" formControlName=\"nameAnim\" (change)=\"onChange(amenities.name, $event.target.checked)\" />\r\n                                            </div>\r\n                                            <div style=\"font-size: .7em;\"> {{ amenities.name }}</div>\r\n                                        </ion-col>\r\n                                        <div style=\"color:red;\" *ngIf=\"isValidInput('nameAnim')\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"addCoSpaceForm.controls['nameAnim'].errors.required\">\r\n                                                Atleast one Amenity should be selected\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </ion-row>\r\n                                </ion-grid>\r\n                            </div>\r\n                        </ion-row>\r\n\r\n                        <ion-row>\r\n\r\n                            <ion-col style=\"width:100%; \">\r\n                                <div style=\"width:100%;padding-top:5%;padding-bottom:5%;right: -13px;position: absolute; \">\r\n                                    <ion-button (click)=\"submit()\" style=\"width: 100%;--border-radius: 20px;--background: #1b8022;height: 50px;color:#bbf0bf\">ADD SPACE</ion-button>\r\n                                </div>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <div style=\"width:100%;padding-top:5%;padding-bottom:5%;position: absolute;left: -15px; \">\r\n                                    <ion-button routerLink=\"/your-spaces\" (click)=\"view()\" style=\"width: 100%;--border-radius: 20px;--background: #be0023;height: 50px;color:#eec0c8\">VIEW SPACE</ion-button>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n\r\n                    </ion-grid>\r\n\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- </div> -->\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div *ngIf=\"viewSpace==1\"> --> \r\n\r\n\r\n\r\n    <!-- <div *ngIf=\"viewSpace==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n            <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n             \r\n          <div style=\"padding-bottom:10%;\">\r\n            <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n              <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Categories</h1></ion-row>\r\n            </ion-grid>\r\n          </div>\r\n              <div style=\"border:1px solid white;bottom:0%;;position:relative;;\">\r\n                <ion-grid  style=\"width: 100%;\">\r\n                  <ion-row   *ngFor=\"let x of ret_array\">\r\n                     <div  *ngIf=\"x=='Sharing'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color:#F8EFFB;border-radius: 15px;\">\r\n                        <a  style=\"color:#603F8B;text-decoration: none;\" [routerLink]=\"['/update-space/',x]\"><h5>{{x}}</h5></a> \r\n                     </div>\r\n                     <div *ngIf=\"x=='private office'\"  style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color: #EFF8FB;border-radius: 15px;color:#5882FA\">\r\n                        <a  style=\"color:#5882FA;text-decoration: none\" [routerLink]=\"['/update-space/',x]\"><h5>{{x}}</h5></a>\r\n                  </div>\r\n                  <div *ngIf=\"x=='Pair'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%; background-color: #FBF8EF;border-radius: 15px;color:#F7D358\">\r\n                    <a style=\"color:#F7D358;text-decoration: none\" [routerLink]=\"['/update-space/',x]\"><h5  >{{x}}</h5></a>\r\n                </div>\r\n                <div *ngIf=\"x=='BoardRoom'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%;background-color: #FBEFF2;border-radius: 15px;color:#FA5882\">\r\n                    <a style=\"color:#FA5882;text-decoration: none\" [routerLink]=\"['/update-space/',x]\"><h5>{{x}}</h5></a>\r\n              </div>\r\n              <div *ngIf=\"x=='OpenSpace'\" style=\"margin-bottom: 5%; text-align: center; height: 50px;width: 100%;background-color: #FBEFF2;border-radius: 15px;color:#a78991\">\r\n                <a style=\"color:#a78991;text-decoration: none\" [routerLink]=\"['/update-space/',x]\"><h5>{{x}}</h5></a>\r\n            </div>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </div>\r\n           </div>  -->\r\n\r\n    <!-- </div>  -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div >\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n</div> -->\r\n    <!-- <div class=\"holder\">\r\n        <ion-icon style=\"position: absolute;left:3%;font-size: 30px;margin-top: 5px; top: 15%;color: #9010F5;\" name=\"images-outline\">\r\n            <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n        </ion-icon>\r\n\r\n        <div class=\"top\">\r\n            <ion-buttons slot=\"start\">\r\n                <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n            </ion-buttons>\r\n\r\n            <p style=\"font-size: 24px; font-weight: bold; color:white; margin-top: -20px;\">Add your space</p>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"viewSpace==1\">\r\n            <ion-grid style=\"margin: 0%;\">\r\n                <ion-row *ngFor=\"let x of ret_array\">\r\n\r\n          \r\n                    <ion-icon class=\"viewspaces\" name=\"caret-forward-outline\" [routerLink]=\"['/update-space/',x]\"></ion-icon>{{x}}\r\n\r\n\r\n\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n\r\n        <div class=\"bottom\" *ngIf=\"viewSpace==0\">\r\n\r\n\r\n\r\n\r\n\r\n            <div style=\"position: absolute;width: 6.5%;height: 4%; border-radius: 50%; background-color:white;top: 15%;left: 1%; display: flex;justify-content: center;align-items: center;\">\r\n                <ion-icon style=\"font-size: 20px;color: white;background-color: #16D6E3; border-radius: 50%;\" name=\"add-circle-outline\"></ion-icon>\r\n            </div>\r\n\r\n            <form style=\"height: 100%;\" [formGroup]=\"addCoSpaceForm\">\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n                    <div>\r\n                        <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>Space category</ion-label>\r\n                    <ion-select formControlName=\"categories\">\r\n                        <ion-select-option value=\"private office\">Private Office</ion-select-option>\r\n                        <ion-select-option value=\"boardroom\">BoardRoom</ion-select-option>\r\n                        <ion-select-option value=\"Pair\">Pair Office</ion-select-option>\r\n                        <ion-select-option value=\"Sharing\">Shared Office</ion-select-option>\r\n                        <ion-select-option value=\"OpenSpace\">Open Plan</ion-select-option>\r\n\r\n                    </ion-select>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('categories')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addCoSpaceForm.controls['categories'].errors.required\">\r\n                            categories is required\r\n                        </div>\r\n                        <div *ngIf=\"addCoSpaceForm.controls['categories'].errors.pattern\">\r\n                            categories email format\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>Category Number</ion-label>\r\n                    <ion-select formControlName=\"category_number\">\r\n\r\n                        <ion-select-option value=\"1\">1</ion-select-option>\r\n                        <ion-select-option value=\"2\">2</ion-select-option>\r\n                        <ion-select-option value=\"3\">3</ion-select-option>\r\n                        <ion-select-option value=\"4\">4</ion-select-option>\r\n\r\n                    </ion-select>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('category_number')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addCoSpaceForm.controls['category_number'].errors.required\">\r\n                            category_number is required\r\n                        </div>\r\n                        <div *ngIf=\"addCoSpaceForm.controls['category_number'].errors.pattern\">\r\n                            category_number format\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-input type=\"decimal\" formControlName=\"price\" placeholder=\"Price\" minlength=\"5\" maxlength=\"6\" required></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('price')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addCoSpaceForm.controls['price'].errors.required\">\r\n                            price is required\r\n                        </div>\r\n                        <div *ngIf=\"addCoSpaceForm.controls['price'].errors.pattern\">\r\n                            price format\r\n                        </div>\r\n                        <div *ngIf=\"addCoSpaceForm.controls['price'].hasError('maxlength')\">\r\n                            minLength is 5\r\n                        </div>\r\n                        <div *ngIf=\"addCoSpaceForm.controls['price'].hasError('minlength')\">\r\n                            maxLength is 3\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n\r\n                <ion-textarea type=\"text\" formControlName=\"description\" placeholder=\"Description\" style=\"border-style: solid;height: 15%;border-width: 1px;border-color: #16D6E3;border-top: 0px;margin: 0px;\"></ion-textarea>\r\n                <div style=\"color:red;\" *ngIf=\"!description?.valid && (description?.dirty || description?.touched)\">\r\n                    Invalid description\r\n                    <div *ngIf=\"description.errors.required\">\r\n                        description is required\r\n                    </div>\r\n                    <div *ngIf=\"description.errors.maxlength\">\r\n                        maxlength is 150\r\n                    </div>\r\n                    <div *ngIf=\"description.errors.minlength\">\r\n                        minlength is 5\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <p style=\"font-size: 18px;font-weight: bold; text-align: center\">Enter your address below.</p>\r\n                <ion-item>\r\n                    <ion-input formControlName=\"address\" placeholder=\"Address\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"!address?.valid && (address?.dirty || address?.touched)\">\r\n                        Invalid description\r\n                        <div *ngIf=\"address.errors.required\">\r\n                            address is required\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-input formControlName=\"city\" placeholder=\"City\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"!city?.valid && (city?.dirty || city?.touched)\">\r\n                        Invalid city\r\n                        <div *ngIf=\"city.errors.required\">\r\n                            address is required\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-input formControlName=\"province\" placeholder=\"Province\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"!province?.valid && (province?.dirty || province?.touched)\">\r\n                        Invalid province\r\n                        <div *ngIf=\"province.errors.required\">\r\n                            province is required\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <div style=\"height: 40%; width: 100%; overflow: visible;\">\r\n                 \r\n                    <ion-grid>\r\n                        <ion-row style=\"color: black;margin: 5px; position: relative;\">\r\n                            <ion-col *ngFor=\"let amenities of amenitiesData\">\r\n                                <div style=\"font-size: 14px; border-style: solid 3px;border-color: #16D6E3;\">{{ amenities.name }} <br>\r\n                                    <input type=\"checkbox\" formControlName=\"nameAnim\" (change)=\"onChange(amenities.name, $event.target.checked)\" />\r\n                                </div>\r\n                            </ion-col>\r\n                            <div style=\"color:red;\" *ngIf=\"isValidInput('nameAnim')\" class=\"alert alert-danger\">\r\n                                <div *ngIf=\"addCoSpaceForm.controls['nameAnim'].errors.required\">\r\n                                    Atleast one Amenity should be selected\r\n                                </div>\r\n\r\n                            </div>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                 \r\n\r\n                    <ion-button class=\"btn-submit\" (click)=\"submit()\" [disabled]=\"!addCoSpaceForm.valid\" style=\"--background:#9010F5; width: 193px; height: 55px;\">Submit</ion-button>\r\n\r\n\r\n\r\n                    <ion-button class=\"spaces\" (click)=\"view()\" style=\"--background: #16D6E3; width: 190px; height: 55px; margin-left: -30px;\">View Spaces</ion-button>\r\n\r\n                  \r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/add-space/add-space-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/add-space/add-space-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddSpacePageRoutingModule */

    /***/
    function srcAppPagesAddSpaceAddSpaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSpacePageRoutingModule", function () {
        return AddSpacePageRoutingModule;
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


      var _add_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-space.page */
      "./src/app/pages/add-space/add-space.page.ts");

      var routes = [{
        path: '',
        component: _add_space_page__WEBPACK_IMPORTED_MODULE_3__["AddSpacePage"]
      }];

      var AddSpacePageRoutingModule = function AddSpacePageRoutingModule() {
        _classCallCheck(this, AddSpacePageRoutingModule);
      };

      AddSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddSpacePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add-space/add-space.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/add-space/add-space.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddSpacePageModule */

    /***/
    function srcAppPagesAddSpaceAddSpaceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSpacePageModule", function () {
        return AddSpacePageModule;
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


      var _add_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-space-routing.module */
      "./src/app/pages/add-space/add-space-routing.module.ts");
      /* harmony import */


      var _add_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-space.page */
      "./src/app/pages/add-space/add-space.page.ts");

      var AddSpacePageModule = function AddSpacePageModule() {
        _classCallCheck(this, AddSpacePageModule);
      };

      AddSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddSpacePageRoutingModule"]],
        declarations: [_add_space_page__WEBPACK_IMPORTED_MODULE_6__["AddSpacePage"]]
      })], AddSpacePageModule);
      /***/
    },

    /***/
    "./src/app/pages/add-space/add-space.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/add-space/add-space.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddSpaceAddSpacePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".holder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.top {\n  width: 100%;\n  height: 16%;\n  position: absolute;\n  top: 0px;\n  background-color: #9010F5;\n  text-align: center;\n}\n\n.bottom {\n  width: 100%;\n  height: 80%;\n  position: absolute;\n  bottom: 0px;\n}\n\nion-select {\n  font-size: 10px;\n}\n\n.viewspaces {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #9010F5;\n  margin-top: -10px;\n}\n\n.btn-submit {\n  border-top-left-radius: 100%;\n}\n\n.spaces {\n  border-top-right-radius: 100%;\n}\n\n.buttons2 {\n  width: 100%;\n  height: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXNwYWNlL2FkZC1zcGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtc3BhY2UvYWRkLXNwYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNiU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzkwMTBGNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG9wYWNpdHk6IDgwJTtcclxufVxyXG4uYm90dG9te1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnZpZXdzcGFjZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjOTAxMEY1OyAgXHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDsgIFxyXG59XHJcblxyXG4uYnRuLXN1Ym1pdHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFjZXN7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbnMye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzkwMTBGNTtcclxuICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2JTtcclxuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xyXG59XHJcblxyXG4vLyAuc2hhcGUye1xyXG4vLyAgICAgd2lkdGg6IDcwJTtcclxuLy8gICAgIGhlaWdodDogMjUlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNkQ2RTM7XHJcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTYlO1xyXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTQwMHB4O1xyXG4vLyB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/add-space/add-space.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-space/add-space.page.ts ***!
      \***************************************************/

    /*! exports provided: AddSpacePage */

    /***/
    function srcAppPagesAddSpaceAddSpacePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSpacePage", function () {
        return AddSpacePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/owner.service */
      "./src/app/services/owner.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/feedback/masseges/masseges.page */
      "./src/app/feedback/masseges/masseges.page.ts");

      var AddSpacePage = /*#__PURE__*/function () {
        function AddSpacePage(popover, formBuilder, ownerservice, account, loadingCtrl, router, alertCtrl) {
          var _this = this;

          _classCallCheck(this, AddSpacePage);

          this.popover = popover;
          this.formBuilder = formBuilder;
          this.ownerservice = ownerservice;
          this.account = account;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.amenityList = [];
          this.amenitie = [];
          this.amenitiesData = [{
            id: 0,
            name: 'cameras'
          }, {
            id: 1,
            name: 'reception'
          }, {
            id: 2,
            name: 'projector'
          }, {
            id: 3,
            name: 'coffee'
          }, {
            id: 4,
            name: 'wifi'
          }, {
            id: 5,
            name: 'tv'
          }, {
            id: 7,
            name: 'Aircon'
          }];
          this.ret_array = []; ////update coworking space///

          this.viewSpace = 0;
          this.spaces = [];
          this.spacesT = [];
          this.spacesTT = [];
          this.addCoSpaceForm = this.formBuilder.group({
            categories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            province: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(20)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[0-9]+.[0-9]{2}/g)]],
            name: this.formBuilder.array([]),
            nameAnim: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].requiredTrue]
          });
          this.errorMessages = {
            price: [{
              type: 'required',
              message: 'price is required'
            }],
            description: [{
              type: 'required',
              message: 'description is required'
            }],
            categories: [{
              type: 'required',
              message: 'categories is required'
            }],
            category_number: [{
              type: 'required',
              message: 'category_number is required'
            }],
            address: [{
              type: 'required',
              message: 'address is required'
            }],
            city: [{
              type: 'required',
              message: 'city is required'
            }],
            province: [{
              type: 'required',
              message: 'province is required'
            }],
            name: [{
              type: 'required',
              message: 'name is required'
            }]
          };
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles").doc(this.account.getUserSession()).collection("profile").where("uid", "==", this.account.getUserSession()).get().then(function (doc) {
            doc.forEach(function (dat) {
              // console.log("hh"+dat.id) 
              _this.profileUid = dat.id;
            });
          });
        }

        _createClass(AddSpacePage, [{
          key: "onChange",
          value: function onChange(name, isChecked) {
            var cartoons = this.addCoSpaceForm.controls.name;

            if (isChecked) {
              cartoons.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](name));
              this.amenitie = cartoons;
              this.amenityList.push(name);
            } else {
              var index = cartoons.controls.findIndex(function (x) {
                return x.value === name;
              });
              cartoons.removeAt(index);
            }
          }
        }, {
          key: "isValidInput",
          value: function isValidInput(fieldName) {
            return this.addCoSpaceForm.controls[fieldName].invalid && (this.addCoSpaceForm.controls[fieldName].dirty || this.addCoSpaceForm.controls[fieldName].touched);
          }
        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(fileInput) {
            var _this2 = this;

            this.imageError = null;

            if (fileInput.target.files && fileInput.target.files[0]) {
              var max_size = 20971520;
              var allowed_types = ['image/png', 'image/jpeg'];
              var max_height = 15200;
              var max_width = 25600;

              if (fileInput.target.files[0].size > max_size) {
                this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
              }

              if (!allowed_types.includes(fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
              }

              var reader = new FileReader();

              reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;

                image.onload = function (rs) {
                  var img_height = rs.currentTarget['height'];
                  var img_width = rs.currentTarget['width'];
                  console.log(img_height, img_width);

                  if (img_height > max_height && img_width > max_width) {
                    _this2.imageError = 'Maximum dimentions allowed ' + max_height + '*' + max_width + 'px';
                    return false;
                  } else {
                    var imgBase64Path = e.target.result;
                    _this2.cardImageBase64 = imgBase64Path;
                    _this2.isImageSaved = true;
                    return _this2.cardImageBase64;
                  }
                };
              };

              reader.readAsDataURL(fileInput.target.files[0]);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            //console.log(this.addCoSpaceForm.value.name) 
            this.ownerservice.addcoworkingSpace(this.account.getUserSession(), this.profileUid, this.addCoSpaceForm.value.categories, this.addCoSpaceForm.value.category_number, this.addCoSpaceForm.value.address, this.addCoSpaceForm.value.city, this.addCoSpaceForm.value.province, this.addCoSpaceForm.value.name, this.cardImageBase64, this.addCoSpaceForm.value.price, this.addCoSpaceForm.value.description); // this.reload();
            //  this.  CreatePopover()
          } // async reload() {
          //   const loading = await this.loadingCtrl.create({
          //     message: 'Please wait...',
          //     // duration: 3000
          //   });
          //   this.router.navigateByUrl('/owner-landing');
          //   await loading.present();
          // }

        }, {
          key: "workingSpaces",
          value: function workingSpaces() {
            var _this3 = this;

            firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles").doc(this.account.getUserSession()).collection("profile").doc(this.profileUid).collection("space").where("uid", "==", this.account.getUserSession()).get().then(function (snap) {
              snap.forEach(function (doc) {
                var array = []; // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );

                array.push(doc.data().categories);

                _this3.ownerservice.setWorkSpaceUID(doc.data().workspace_uid); //  this.spaces.push(this.remove_duplicates(array))  


                _this3.unique(array);

                console.log(_this3.returnUniq());
              });
            });
          }
        }, {
          key: "unique",
          value: function unique(array) {
            for (var i in array) {
              if (this.ret_array.indexOf(array[i]) === -1) {
                this.ret_array.push(array[i]); // console.log(this.ret_array) 
              }
            }
          }
        }, {
          key: "returnUniq",
          value: function returnUniq() {
            return this.ret_array;
          }
        }, {
          key: "view",
          value: function view() {
            this.viewSpace = 1;
            this.workingSpaces();
          }
        }, {
          key: "CreatePopover",
          value: function CreatePopover() {
            this.popover.create({
              component: src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_10__["MassegesPage"],
              showBackdrop: false
            }).then(function (popoverElement) {
              popoverElement.present();
            });
          }
        }, {
          key: "description",
          get: function get() {
            return this.addCoSpaceForm.get("description");
          }
        }, {
          key: "price",
          get: function get() {
            return this.addCoSpaceForm.get("price");
          }
        }, {
          key: "categories",
          get: function get() {
            return this.addCoSpaceForm.get("categories");
          }
        }, {
          key: "category_number",
          get: function get() {
            return this.addCoSpaceForm.get("category_number");
          }
        }, {
          key: "address",
          get: function get() {
            return this.addCoSpaceForm.get("address");
          }
        }, {
          key: "city",
          get: function get() {
            return this.addCoSpaceForm.get("city");
          }
        }, {
          key: "province",
          get: function get() {
            return this.addCoSpaceForm.get("province");
          }
        }, {
          key: "name",
          get: function get() {
            return this.addCoSpaceForm.get("name");
          }
        }]);

        return AddSpacePage;
      }();

      AddSpacePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_8__["OwnerServiceService"]
        }, {
          type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }];
      };

      AddSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-space.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-space/add-space.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-space.page.scss */
        "./src/app/pages/add-space/add-space.page.scss"))["default"]]
      })], AddSpacePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-space-add-space-module-es5.js.map