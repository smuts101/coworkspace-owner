(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-add-profile-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons> -->\r\n\r\n<ion-content style=\"background-image: url(../assets/background2.png)\">\r\n\r\n\r\n    \r\n     <div  *ngIf=\"editForm==false;else loggedOut\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n        <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\" >\r\n      <div>\r\n        <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n            <ion-row>\r\n                <ion-buttons style=\"color:#1E3D58\" >\r\n                  <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n                </ion-buttons>\r\n              </ion-row>\r\n          <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Create Profile</h1></ion-row>\r\n        </ion-grid>\r\n      </div>\r\n          <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 70%;overflow: scroll;\">\r\n            <form *ngIf=\"editForm==false;else loggedOut\" [formGroup]=\"updateForm\" type=\"text\" style=\"width: 100%;position: absolute;top: 0%;height: 80%;\">\r\n            <ion-grid  style=\"width: 100%;\">\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"text\" formControlName=\"company_name\" placeholder=\"Company Name\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;\" *ngIf=\"isValidInput('company_name')\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"updateForm.controls['company_name'].errors.required\">\r\n                        company name is required.\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['company_name'].errors.maxLength\">\r\n                        Maximum length is 20\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['company_name'].errors.minLength\">\r\n                        min length is 2\r\n                    </div>\r\n\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"email\" formControlName=\"company_emaile\" placeholder=\"Email\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;\" *ngIf=\"isValidInput('company_emaile')\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"updateForm.controls['company_emaile'].errors.required\">\r\n                        Email is required\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['company_emaile'].errors.pattern\">\r\n                        incorrect email format\r\n                    </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"number\" formControlName=\"company_tel\" placeholder=\"Telephone\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;width:100%;\" *ngIf=\"isValidInput('company_tel')\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"updateForm.controls['company_tel'].errors.required\">\r\n                        phone is required.\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['company_tel'].errors.maxLength\">\r\n                        Maximum length is 10\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['company_tel'].errors.pattern\">\r\n                        Incorrect phone number\r\n                    </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"number\" formControlName=\"company_website\" placeholder=\"Website\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-textarea placeholder=\"Address\" type=\"text\" formControlName=\"company_address\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n                </ion-textarea>\r\n                <div style=\"color:red;width: 100%;\" *ngIf=\"isValidInput('company_address')\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"updateForm.controls['company_address'].errors.required\">\r\n                        company address is required.\r\n                    </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;padding-top: 2%;\">\r\n                <ion-textarea placeholder=\"About Us\" type=\"text\" formControlName=\"aboutus\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n                </ion-textarea>\r\n              </div>\r\n              <div style=\"color:red;\" *ngIf=\"isValidInput('aboutus')\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"updateForm.controls['aboutus'].errors.required\">\r\n                    description is required.\r\n                </div>\r\n                <div *ngIf=\"updateForm.controls['aboutus'].errors.maxLength\">\r\n                    Maximum length is 20\r\n                </div>\r\n                <div *ngIf=\"updateForm.controls['aboutus'].errors.minLength\">\r\n                    min length is 2\r\n                </div>\r\n            </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n                </div>\r\n                <div>\r\n                    <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                </div>\r\n               \r\n              </ion-row>\r\n          <ion-row>       \r\n                <ion-col style=\"width:100%; \">\r\n                 <div style=\"width:100%;padding-top:1%;padding-bottom:5%;right: -13px;position: absolute; \">\r\n                   <ion-button  (click)=\"submit()\" style=\"color:white; width: 100%;--border-radius: 20px;--background: #59981A;height: 50px;font-weight: bold;\">SUBMIT</ion-button>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col>\r\n                <div style=\"width:100%;padding-top:1%;padding-bottom:5%;position: absolute;left: -15px; \">\r\n                 <ion-button  (click)=\"update()\" style=\"width: 100%;--border-radius: 20px;--background: #F8D210;height: 50px;color:black\">EDIT</ion-button>\r\n                </div>\r\n              </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n          </div> \r\n        </div>\r\n       </div> \r\n\r\n       \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n       \r\n       <ng-template #loggedOut>\r\n\r\n\r\n\r\n      \r\n\r\n       <div style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n        <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\" >\r\n      <div>\r\n        <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n            <!-- <ion-row>\r\n                <ion-buttons style=\"color:#1E3D58\" >\r\n                  <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n                </ion-buttons> \r\n              </ion-row> -->\r\n          <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Edit Profile</h1></ion-row>\r\n        </ion-grid>\r\n      </div>\r\n          <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 70%;overflow: scroll;\">\r\n            <form #editForm=\"ngForm\" *ngFor=\"let x of array\" type=\"text\" style=\"width: 100%;position: absolute;top: 0%;height: 80%;\">\r\n            <ion-grid  style=\"width: 100%;\">\r\n                <ion-row>\r\n                    <div style=\"font-family: Arial, Helvetica, sans-serif;font-size: 1em;color:#057DCD;font-weight: bold;padding-top: 1%;padding-bottom: 1%;\">\r\n                      <b>Change Profile Picture</b>\r\n                    </div>\r\n                  </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                      <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                          <ion-input style=\"width: 100%;\" type=\"file\"required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                        </div>\r\n                        <div>\r\n                            <div style=\"color:red;width:100%;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <div style=\"width: 100%;\"> <ion-button style=\"width:100%\"  color=\"primary\" (click)=\"changeImage()\">Upload</ion-button></div>\r\n                    </ion-col>\r\n                 </ion-row>\r\n                <ion-row>\r\n                  <div>\r\n                      <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                  </div>\r\n                </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input  type=\"text\" [(ngModel)]=\"company_name_\" name=\"company_name\" required minlength=\"2\" pattern=\"^[a-zA-Z]+$\" #company_name=\"ngModel\" placeholder=\"Company name..\"  placeholder=\"Company Name\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;\" *ngIf=\"!company_name?.valid && (company_name?.dirty || company_name?.touched)\">\r\n                    Invalid First company_name_\r\n                    <div *ngIf=\"company_name.errors.required\">\r\n                        company_name_ is required\r\n                    </div>\r\n                    <div *ngIf=\"company_name.errors.minlength\">\r\n                        First Name Minimum Length is {{company_name.errors.minlength?.requiredLength}}\r\n                    </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"email\" placeholder=\"Email\"  [(ngModel)]=\"company_emaile_\" name=\"company_emaile\" required email #company_emaile=\"ngModel\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;width:100%;\" *ngIf=\"!company_emaile?.valid && (company_emaile?.dirty || company_emaile?.touched)\">\r\n                    Invalid email\r\n                    <div *ngIf=\"company_emaile.errors.required\">\r\n                        email is required\r\n                    </div>\r\n                    <div *ngIf=\"company_emaile.errors.email\">\r\n                        Email format incorrect\r\n                    </div>\r\n                    <div style=\"color:red;width:100%;\" *ngIf=\"!company_tel?.valid && (company_tel?.dirty || company_tel?.touched)\">\r\n                        Invalid phone\r\n                        <div *ngIf=\"company_tel.errors.required\">\r\n                            phone is required\r\n                        </div>\r\n                        <div *ngIf=\"company_tel.errors.maxlength\">\r\n                            maxlength is 10\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"number\" placeholder=\"Telephone\" [(ngModel)]=\"company_tel_\" name=\"company_tel\" required maxlength=\"10\" #company_tel=\"ngModel\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n                <div style=\"color:red;width:100%;\" *ngIf=\"!company_tel?.valid && (company_tel?.dirty || company_tel?.touched)\">\r\n                    Invalid phone\r\n                    <div *ngIf=\"company_tel.errors.required\">\r\n                        phone is required\r\n                    </div>\r\n                    <div *ngIf=\"company_tel.errors.maxlength\">\r\n                        maxlength is 10\r\n                    </div>\r\n\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;\">\r\n                  <ion-input style=\"width: 100%;\" type=\"text\" placeholder=\"Website..\" [(ngModel)]=\"company_website_\" name=\"company_website_\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-textarea placeholder=\"Address\" type=\"text\" [(ngModel)]=\"company_address_\" required maxlength=\"100\" #company_address=\"ngModel\" name=\"company_address\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n                </ion-textarea>\r\n                <div style=\"color:red;width:100%;\" *ngIf=\"!company_address?.valid && (company_address?.dirty || company_address?.touched)\">\r\n                    Invalid address\r\n                    <div *ngIf=\"company_address.errors.required\">\r\n                        address is required\r\n                    </div>\r\n                    <div *ngIf=\"company_address.errors.maxlength\">\r\n                        maxlength is 100\r\n                    </div>\r\n\r\n                </div>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div style=\"padding-bottom: 2%;width: 100%;padding-top: 1%;\">\r\n                <ion-textarea placeholder=\"Description\" [(ngModel)]=\"aboutus_\" name=\"aboutus\" required maxlength=\"150\" minlength=\"5\" #aboutus=\"ngModel\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n                </ion-textarea>\r\n              </div>\r\n              <div style=\"color:red;width:100%;\" *ngIf=\"!aboutus?.valid && (aboutus?.dirty || aboutus?.touched)\">\r\n                Invalid about us\r\n                <div *ngIf=\"aboutus.errors.required\">\r\n                    about us is required\r\n                </div>\r\n                <div *ngIf=\"aboutus.errors.maxlength\">\r\n                    maxlength is 150\r\n                </div>\r\n                <div *ngIf=\"aboutus.errors.minlength\">\r\n                    minlength is 5\r\n                </div>\r\n               </div>\r\n              </ion-row>\r\n             \r\n            \r\n            </ion-grid>\r\n            <ion-grid> \r\n                <ion-row>\r\n                \r\n                    <ion-col style=\"width:100%; \">\r\n                     <div style=\"width:100%;padding-top:1%;padding-bottom:1%;right: -13px;position: absolute; \">\r\n                       <ion-button (click)=\" editForms()\"  style=\"color:white; width: 100%;--border-radius: 20px;--background: #54a304;height: 50px;font-weight: bold;\">SUBMIT</ion-button>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                    <div style=\"width:100%;padding-top:1%;padding-bottom:1%;position: absolute;left: -15px; \">\r\n                     <ion-button (click)=\" editAll()\"  style=\"width: 100%;--border-radius: 20px;--background: #F51720;height: 50px;color:white\">CLOSE</ion-button>\r\n                    </div>\r\n                  </ion-col>\r\n                    </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n          </div>\r\n        </div>\r\n       </div>\r\n\r\n    </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n    -----------------------------------------\r\n    ------------------------------------------\r\n    ----------------------------------------- -->\r\n     <!-- <div class=\"holder\">\r\n       <div class=\"image\">\r\n            <ion-buttons style=\"background-color: #D8CDC7;\" slot=\"start\">\r\n                <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n            </ion-buttons>\r\n            <img src=\"assets/back.jpg\">\r\n        </div> -->\r\n        <!-- <ion-icon style=\"position: absolute;left:3%;font-size: 30px;top: 15%;color: #303d3d;\" name=\"images-outline\"></ion-icon> -->\r\n        <!-- <div class=\"top\">\r\n    \r\n    </div> -->\r\n        <!-- <ion-button style=\"position: absolute;top: 15%;right: 5%;height: 20px;--background:rgb(224, 18, 53);\"> Submit</ion-button> -->\r\n        <!-- <div style=\"position: absolute;width: 6.5%;height: 4%; border-radius: 50%; background-color:white;top: 15%;left: 1%; display: flex;justify-content: center;align-items: center;\">\r\n    <ion-icon style=\"font-size: 20px;color: white;background-color: #16D6E3; border-radius: 50%;\" name=\"add-circle-outline\"></ion-icon>\r\n  </div> -->\r\n        <!-- <ion-icon style=\"font-size: 50px; position: absolute;top: 20%;right: 5%;color:red;\" name=\"add-circle-outline\"></ion-icon> -->\r\n        <!-- <div class=\"bottom\">\r\n            <p style=\"font-size:22px;font-weight: bolder;position: absolute;top: 0%;left: 5%;color: #2D98E6;\">Profile</p>\r\n\r\n            <form *ngIf=\"editForm==false;else loggedOut\" [formGroup]=\"updateForm\" type=\"text\" style=\"width: 100%;position: absolute;top: 15%;height: 80%;\">\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"text\" formControlName=\"company_name\" placeholder=\"Company name\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('company_name')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"updateForm.controls['company_name'].errors.required\">\r\n                            company name is required.\r\n                        </div>\r\n                        <div *ngIf=\"updateForm.controls['company_name'].errors.maxLength\">\r\n                            Maximum length is 20\r\n                        </div>\r\n                        <div *ngIf=\"updateForm.controls['company_name'].errors.minLength\">\r\n                            min length is 2\r\n                        </div>\r\n\r\n                    </div>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"text\" formControlName=\"company_address\" placeholder=\"Address\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('company_address')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"updateForm.controls['company_address'].errors.required\">\r\n                            company address is required.\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"text\" formControlName=\"company_emaile\" placeholder=\"Email\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('company_emaile')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"updateForm.controls['company_emaile'].errors.required\">\r\n                            Email is required\r\n                        </div>\r\n                        <div *ngIf=\"updateForm.controls['company_emaile'].errors.pattern\">\r\n                            incorrect email format\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"text\" formControlName=\"company_tel\" placeholder=\"Telephone\"></ion-input>\r\n                    <div style=\"color:red;\" *ngIf=\"isValidInput('company_tel')\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"updateForm.controls['company_tel'].errors.required\">\r\n                            phone is required.\r\n                        </div>\r\n                        <div *ngIf=\"updateForm.controls['company_tel'].errors.maxLength\">\r\n                            Maximum length is 10\r\n                        </div>\r\n                        <div *ngIf=\"updateForm.controls['company_tel'].errors.pattern\">\r\n                            Incorrect phone number\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-input type=\"text\" formControlName=\"company_website\" placeholder=\"Website\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-textarea type=\"text\" formControlName=\"aboutus\" placeholder=\"Description\" style=\"border-style: solid;height: 15%;border-width: 1px;border-color: #16D6E3; border-top: 0px;margin: 0px;\"></ion-textarea>\r\n                <div style=\"color:red;\" *ngIf=\"isValidInput('aboutus')\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"updateForm.controls['aboutus'].errors.required\">\r\n                        description is required.\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['aboutus'].errors.maxLength\">\r\n                        Maximum length is 20\r\n                    </div>\r\n                    <div *ngIf=\"updateForm.controls['aboutus'].errors.minLength\">\r\n                        min length is 2\r\n                    </div>\r\n                </div>\r\n\r\n                <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n                <div>\r\n                    <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                </div> -->\r\n\r\n                <!-- <div *ngFor=\"let cartoon of cartoonsData\">\r\n    <input type=\"checkbox\"    (change)=\"onChange(cartoon.name, $event.target.checked)\" />\r\n    {{ cartoon.name }}\r\n  </div> -->\r\n                <!-- <p style=\"font-size:18px; color: black;font-weight: bold; margin-left: 10px;\">Select Amenities</p>\r\n                <ion-grid>\r\n                    <ion-row style=\"color: black;margin: 5px;\">\r\n                        <ion-col *ngFor=\"let cartoon of cartoonsData\">\r\n                            <div style=\"font-size: 14px;\">{{ cartoon.name }} <br>\r\n                                <input type=\"checkbox\" formControlName=\"nameAnim\" (change)=\"onChange(cartoon.name, $event.target.checked)\" />\r\n                            </div>\r\n                        </ion-col>\r\n                        <div style=\"color:red;\" *ngIf=\"isValidInput('nameAnim')\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"updateForm.controls['nameAnim'].errors.required\">\r\n                                Atleast one Amenity should be selected\r\n                            </div>\r\n\r\n                        </div>\r\n                    </ion-row>\r\n                </ion-grid>\r\n                <ion-button (click)=\"submit()\" expand=\"full\" class=\"submit\">Submit</ion-button>\r\n                <ion-button (click)=\"update()\" expand=\"full\" class=\"edit\">Edit</ion-button>\r\n                <br><br><br><br><br>\r\n            </form>\r\n            <ng-template #loggedOut>\r\n                <form #editForm=\"ngForm\" *ngFor=\"let x of array\" type=\"text\" style=\"width: 100%;position: absolute;top: 15%;height: 80%;\">\r\n\r\n                    <ion-item>\r\n                        <ion-input type=\"text\" [(ngModel)]=\"company_name_\" name=\"company_name\" required minlength=\"2\" pattern=\"^[a-zA-Z]+$\" #company_name=\"ngModel\" placeholder=\"Company name..\">\r\n                        </ion-input>\r\n                        <div style=\"color:red;\" *ngIf=\"!company_name?.valid && (company_name?.dirty || company_name?.touched)\">\r\n                            Invalid First company_name_\r\n                            <div *ngIf=\"company_name.errors.required\">\r\n                                company_name_ is required\r\n                            </div>\r\n                            <div *ngIf=\"company_name.errors.minlength\">\r\n                                First Name Minimum Length is {{company_name.errors.minlength?.requiredLength}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-input type=\"text\" placeholder=\"Address\" [(ngModel)]=\"company_address_\" required maxlength=\"100\" #company_address=\"ngModel\" name=\"company_address\">\r\n                        </ion-input>\r\n                        <div style=\"color:red;\" *ngIf=\"!company_address?.valid && (company_address?.dirty || company_address?.touched)\">\r\n                            Invalid address\r\n                            <div *ngIf=\"company_address.errors.required\">\r\n                                address is required\r\n                            </div>\r\n                            <div *ngIf=\"company_address.errors.maxlength\">\r\n                                maxlength is 100\r\n                            </div>\r\n\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"company_emaile_\" name=\"company_emaile\" required email #company_emaile=\"ngModel\">\r\n                        </ion-input>\r\n                        <div style=\"color:red;\" *ngIf=\"!company_emaile?.valid && (company_emaile?.dirty || company_emaile?.touched)\">\r\n                            Invalid email\r\n                            <div *ngIf=\"company_emaile.errors.required\">\r\n                                email is required\r\n                            </div>\r\n                            <div *ngIf=\"company_emaile.errors.email\">\r\n                                Email format incorrect\r\n                            </div>\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-input type=\"text\" placeholder=\"Telephone\" [(ngModel)]=\"company_tel_\" name=\"company_tel\" required maxlength=\"10\" #company_tel=\"ngModel\">\r\n\r\n                        </ion-input>\r\n                        <div style=\"color:red;\" *ngIf=\"!company_tel?.valid && (company_tel?.dirty || company_tel?.touched)\">\r\n                            Invalid phone\r\n                            <div *ngIf=\"company_tel.errors.required\">\r\n                                phone is required\r\n                            </div>\r\n                            <div *ngIf=\"company_tel.errors.maxlength\">\r\n                                maxlength is 10\r\n                            </div>\r\n\r\n                        </div>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-input type=\"text\" placeholder=\"Website\" [(ngModel)]=\"company_website_\" name=\"company_website_\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-textarea type=\"text\" placeholder=\"Description\" [(ngModel)]=\"aboutus_\" name=\"aboutus\" required maxlength=\"150\" minlength=\"5\" #aboutus=\"ngModel\" style=\"border-style: solid;height: 15%;border-width: 1px;border-color:#16D6E3;border-top: 0px;margin: 0px;\"></ion-textarea>\r\n                    <div style=\"color:red;\" *ngIf=\"!aboutus?.valid && (aboutus?.dirty || aboutus?.touched)\">\r\n                        Invalid about us\r\n                        <div *ngIf=\"aboutus.errors.required\">\r\n                            about us is required\r\n                        </div>\r\n                        <div *ngIf=\"aboutus.errors.maxlength\">\r\n                            maxlength is 150\r\n                        </div>\r\n                        <div *ngIf=\"aboutus.errors.minlength\">\r\n                            minlength is 5\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                    <ion-input type=\"file\" required name=\"img\" accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n                    <div>\r\n                        <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n                    </div>\r\n                    <button class=\"profile\" style=\"background-color:#c788f7; text-align: center; margin-left: 10px;\" (click)=\"changeImage()\">Change Profile</button>\r\n\r\n\r\n\r\n\r\n                    <p style=\"font-size:18px; color: black; font-weight: bold; margin-left: 20px;\">Amenities</p>\r\n                    <ion-item>\r\n                        <ion-grid>\r\n                            <ion-row style=\"color: black;margin: 5px;\">\r\n\r\n\r\n                                <ion-col *ngFor=\"let xx of x.outside_features\">\r\n                                    <div class=\"circles\" style=\"font-size: 14px;\">{{ xx }} <br>\r\n                                    </div>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                                <p style=\"font-size:18px; color: black; font-weight: bold;\">Update Amenities</p>\r\n                            </ion-row>\r\n                            <ion-row style=\"color: black;margin: 5px;\">\r\n                                <ion-col *ngFor=\"let cartoon of cartoonsData\">\r\n                                    <div style=\"font-size: 14px;\">{{ cartoon.name }} <br>\r\n                                        <input type=\"checkbox\" (change)=\"onChange(cartoon.name, $event.target.checked)\" />\r\n                                    </div>\r\n                                </ion-col>\r\n\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-item> -->\r\n                    <!-- [disabled]=\"!editForm.valid\"  -->\r\n                    <!-- <ion-item>\r\n                        <ion-button (click)=\" editForms()\" expand=\"full\" class=\"edit2\">Edit</ion-button>\r\n                        <ion-button (click)=\" editAll()\" expand=\"full\" class=\"editall\">Edit All</ion-button>\r\n                    </ion-item>\r\n\r\n\r\n\r\n                    <br><br><br><br><br>\r\n                </form>\r\n\r\n\r\n            </ng-template>\r\n\r\n        </div>\r\n    </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/profile-add/profile-add-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPageRoutingModule", function() { return ProfileAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-add.page */ "./src/app/pages/profile-add/profile-add.page.ts");




const routes = [
    {
        path: '',
        component: _profile_add_page__WEBPACK_IMPORTED_MODULE_3__["ProfileAddPage"]
    }
];
let ProfileAddPageRoutingModule = class ProfileAddPageRoutingModule {
};
ProfileAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileAddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPageModule", function() { return ProfileAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-add-routing.module */ "./src/app/pages/profile-add/profile-add-routing.module.ts");
/* harmony import */ var _profile_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-add.page */ "./src/app/pages/profile-add/profile-add.page.ts");







let ProfileAddPageModule = class ProfileAddPageModule {
};
ProfileAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileAddPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_profile_add_page__WEBPACK_IMPORTED_MODULE_6__["ProfileAddPage"]]
    })
], ProfileAddPageModule);



/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".holder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n}\n\n.bottom {\n  width: 100%;\n  height: 60%;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  z-index: 0;\n}\n\nion-select {\n  font-size: 10px;\n}\n\n.submit {\n  display: flex;\n  flex-direction: column;\n  --background: #9010F5;\n  width: 200px;\n  margin-left: 70px;\n}\n\n.edit {\n  display: flex;\n  flex-direction: column;\n  --background: #16D6E3;\n  width: 200px;\n  margin-left: 70px;\n  line-break: 20px;\n}\n\n.editall {\n  display: flex;\n  flex-direction: column;\n  --background:#2D98E6;\n  width: 200px;\n  height: 40px;\n}\n\n.edit2 {\n  display: flex;\n  flex-direction: column;\n  --background: #16D6E3;\n  width: 200px;\n  height: 40px;\n  margin-left: 20px;\n}\n\nion-button {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n\n.profile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  width: 110px;\n  height: 20px;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1hZGQvcHJvZmlsZS1hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpKOztBQXdCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBdEJKOztBQXlCQTtFQUNJLGVBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF0Qko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBdkJKOztBQTJCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXhCSjs7QUE2QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLWFkZC9wcm9maWxlLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLmhvbGRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLy8gLmJhY2tncm91bmQtaW1hZ2V7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOnBpbms7XHJcbiAgICBcclxuLy8gfVxyXG5cclxuLy8gLnRvcHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgIFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBcclxuLy8gfVxyXG4uYm90dG9te1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIHotaW5kZXg6IC0wO1xyXG5cclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc3VibWl0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5MDEwRjU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuXHJcbn1cclxuXHJcbi5lZGl0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxNkQ2RTM7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIGxpbmUtYnJlYWs6IDIwcHg7XHJcbn1cclxuXHJcbi5lZGl0YWxse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtLWJhY2tncm91bmQ6IzJEOThFNjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuXHJcbn1cclxuXHJcbi5lZGl0MntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTZENkUzO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnByb2ZpbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile-add/profile-add.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile-add/profile-add.page.ts ***!
  \*******************************************************/
/*! exports provided: ProfileAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAddPage", function() { return ProfileAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/feedback/masseges/masseges.page */ "./src/app/feedback/masseges/masseges.page.ts");












let ProfileAddPage = class ProfileAddPage {
    constructor(popover, formBuilder, ownerservice, account, loadingCtrl, router, alertCtrl) {
        this.popover = popover;
        this.formBuilder = formBuilder;
        this.ownerservice = ownerservice;
        this.account = account;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.array = [];
        this.status = false;
        this.editForm = false;
        this.outside_features = [];
        this.amenitie = [];
        this.amenitiesEdit = [];
        this.cartoonsData = [
            { id: 0, name: 'cameras' },
            { id: 1, name: 'guards' },
            { id: 2, name: 'water' },
            { id: 3, name: 'electricity' },
            { id: 4, name: 'parking' },
            { id: 5, name: 'gardens' },
            { id: 6, name: 'bicycles' },
            { id: 7, name: 'cafeteria' },
            { id: 8, name: 'gym' },
            { id: 9, name: 'cleaners' }
        ];
        this.updateForm = this.formBuilder.group({
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(2)]],
            company_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            company_tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]+$')]],
            company_website: [''],
            social_media: [''],
            company_emaile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            aboutus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(2)]],
            name: this.formBuilder.array([]),
            nameAnim: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].requiredTrue]
        });
        this.errorMessages = {
            aboutus: [
                { type: 'required', message: 'aboutus is required' }
            ],
            name: [
                { type: 'required', message: 'name is required' }
            ],
            company_address: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email address' }
            ],
            company_tel: [
                { type: 'required', message: 'company_tel is required' }
            ],
            company_website: [
                { type: 'required', message: 'company_website is required' }
            ],
            social_media: [
                { type: 'required', message: 'social_media is required' }
            ],
            company_emaile: [
                { type: 'required', message: 'company_emaile is required' }
            ],
            company_name: [
                { type: 'required', message: 'company_emaile is required' }
            ]
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collectionGroup("profile")
            .where("uid", "==", this.account.getUserSession())
            .get()
            .then(snap => {
            snap.forEach(doc => {
                this.array.push(Object.assign(doc.data(), { "profile_uid": doc.id }));
                this.company_name_ = doc.data().company_name;
                this.company_tel_ = doc.data().company_tel;
                this.company_address_ = doc.data().company_address;
                this.company_website_ = doc.data().company_website;
                this.social_media_ = doc.data().social_media;
                this.company_emaile_ = doc.data().company_emaile;
                this.aboutus_ = doc.data().aboutus;
                this.outside_features = (doc.data().outside_features);
                this.useruid = doc.id;
            });
        });
    }
    onChange(name, isChecked) {
        const cartoons = this.updateForm.controls.name;
        if (isChecked) {
            cartoons.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](name));
            this.amenitie = cartoons;
            this.amenitiesEdit.push((name));
        }
        else {
            const index = cartoons.controls.findIndex(x => x.value === name);
            cartoons.removeAt(index);
        }
    }
    isValidInput(fieldName) {
        return this.updateForm.controls[fieldName].invalid &&
            (this.updateForm.controls[fieldName].dirty || this.updateForm.controls[fieldName].touched);
    }
    get nameAnim() {
        return this.updateForm.get("nameAnim");
    }
    get aboutus() {
        return this.updateForm.get("aboutus");
    }
    get name() {
        return this.updateForm.get("name");
    }
    get company_address() {
        return this.updateForm.get("company_address");
    }
    get company_tel() {
        return this.updateForm.get("company_tel");
    }
    get company_website() {
        return this.updateForm.get("company_website");
    }
    get social_media() {
        return this.updateForm.get("social_media");
    }
    get company_emaile() {
        return this.updateForm.get("company_emaile");
    }
    get company_name() {
        return this.updateForm.get("company_emaile");
    }
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            if (!allowed_types.includes(fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        return this.cardImageBase64;
                    }
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            console.log(this.updateForm.value.name);
            this.ownerservice.updateProfile(this.useruid, this.account.getUserSession(), this.updateForm.value.company_tel, this.updateForm.value.company_address, this.updateForm.value.company_website, this.updateForm.value.social_media, this.updateForm.value.company_emaile, this.updateForm.value.company_name, this.cardImageBase64, this.updateForm.value.name, this.updateForm.value.aboutus);
            // this.CreatePopover();
            // this.reload();
            // this.router.navigateByUrl('/profile');
        });
    }
    editForms() {
        if (this.amenitiesEdit.length - 1 > -1) {
            this.ownerservice.editProfile(this.useruid, this.account.getUserSession(), this.company_tel_, this.company_address_, this.company_website_, this.company_emaile_, this.company_name_, this.amenitiesEdit, this.aboutus_);
            // this.CreatePopover()
        }
        else {
            this.ownerservice.editProfile(this.useruid, this.account.getUserSession(), this.company_tel_, this.company_address_, this.company_website_, this.company_emaile_, this.company_name_, this.outside_features, this.aboutus_);
            // this. CreatePopover()
        }
    }
    changeImage() {
        this.ownerservice.changeImg(this.useruid, this.account.getUserSession(), this.cardImageBase64);
        this.CreatePopover();
    }
    update() {
        this.editForm = true;
    }
    editAll() {
        this.editForm = false;
    }
    ngOnInit() {
    }
    CreatePopover() {
        this.popover.create({ component: src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_10__["MassegesPage"],
            showBackdrop: false }).then((popoverElement) => {
            popoverElement.present();
            this.router.navigateByUrl('/profile');
        });
    }
};
ProfileAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_9__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
ProfileAddPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"],] }]
};
ProfileAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-add/profile-add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-add.page.scss */ "./src/app/pages/profile-add/profile-add.page.scss")).default]
    })
], ProfileAddPage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-add-profile-add-module-es2015.js.map