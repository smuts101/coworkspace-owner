(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-space-update-space-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-space/update-space.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-space/update-space.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content>\r\n  <div  *ngIf=\"GallaryStatusValue==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:10%;padding-bottom:10%;\">\r\n  \r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Gallary</h1></ion-row>\r\n \r\n    </ion-grid>\r\n  </div>\r\n      <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 80%;overflow: scroll;\">\r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n          </ion-row>\r\n          <ion-row>\r\n              <ion-col >\r\n                <ion-input  type=\"file\"  required  *ngIf=\"this.gallaryArraySize < 4\"  name=\"img\"  accept=\"image/*\" id=\"upload\" (change)=\"onselect($event)\" style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div>\r\n              <div  style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n            </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <div style=\"margin-top:5%;\" >\r\n                <ion-button    (click)=\"uploadGallary()\"  style=\"width: 100%;\">Submit</ion-button>\r\n               </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <div style=\"margin-top:5%;\" >\r\n                <ion-button    (click)=\"closeGallary()\" color=\"danger\"  style=\"width: 100%;\">Close</ion-button>\r\n               </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div style=\"height: 200px;overflow: scroll;\">\r\n                <img style=\"width:100%;\" *ngFor=\"let url of urls\" [src]=\"url\">\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n   </div> \r\n  \r\n  <div *ngIf=\"showProfile==0\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\" >\r\n  <div >\r\n    \r\n    <ion-grid style=\"padding-top:10%;padding-bottom:0%;\">\r\n      <ion-row>\r\n        <ion-buttons style=\"color:#1E3D58\" >\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n      </ion-row>\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">WorkSPace</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n      <div style=\"border:1px solid white;bottom:0%;;position:relative;width:100%;height: 75%;overflow: scroll;position: relative;\">\r\n          <ion-card   *ngFor=\"let x of arrayList\" style=\"width:100%;left: 0;margin: 0%;border-bottom: 2px solid rgb(153, 156, 153);\">\r\n            <img  style=\"width:100%;height: 270px;\" [src]=\"x.image\" />\r\n            <div style=\"position: relative;bottom:18px;z-index: 1;width:100%;\">\r\n              <ion-icon name=\"create-sharp\"  (click)=\"EditForm(x.spaceuid)\" name=\"create-outline\" class=\"editing\" style=\"background-color: #603F8B;border-radius: 100%;font-size:2em ;color: white;\"></ion-icon>\r\n              <ion-icon name=\"trash-sharp\" (click)=\"remove(x.spaceuid)\" style=\"background-color: rgb(97, 17, 17);border-radius: 100%;font-size:2em ;margin-left:4%;color:white\"></ion-icon>\r\n              <a style=\"position: absolute; right: 32%;font-size: 1em;padding-top:5%;color:green;\" [routerLink] = \"['/previews',x.uid,x.workspace_uid,x.spaceuid]\">Previews</a> \r\n              <a (click)=\"ShowchangeProfileImg()\"  style=\"position: absolute; right: 2%;font-size: 1em;padding-top:5%;color:#603F8B;\">Change Picture</a>\r\n            </div>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"color:#1E3D58;font-weight: bold;\">{{x.categories}}</ion-card-title>\r\n              <ion-card-subtitle>R{{x.price}}</ion-card-subtitle>\r\n              <ion-card-subtitle> {{x.address}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              {{x.description}}\r\n              <div>\r\n                <a (click)=\"ShowGoogleMaps()\">Add space  address to Google Maps</a>\r\n              </div>\r\n              <div>\r\n                <a (click)=\"showExtra()\">Add Extras</a>\r\n              </div>\r\n            </ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row style=\"text-align: center;color:#603F8B;font-weight: bold;\">\r\n                <ion-col  >\r\n                 <div > <a (click)=\" addGallary(x.spaceuid)\"> <ion-icon  style=\"font-size: 1.5em;\" name=\"images-sharp\"></ion-icon></a></div>\r\n                 <div style=\"font-size: 1em;\">Gallary</div>\r\n                </ion-col>\r\n                <ion-col>\r\n                 <div ><a [routerLink] = \"['/walkins',x.spaceuid,x.categories,x.workspace_uid]\"> <ion-icon style=\"font-size: 1.5em;\" name=\"walk-sharp\"></ion-icon></a></div>\r\n                 <div style=\"font-size: 1em;\">Walkin</div>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <div><a [routerLink] = \"['/view-walkins',x.spaceuid,x.categories,x.workspace_uid]\"><ion-icon style=\"font-size: 1.5em;\" name=\"eye-sharp\"></ion-icon></a></div>\r\n                  <div style=\"font-size: 1em;\">View Walkin</div>\r\n                </ion-col>\r\n               \r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card>\r\n      </div>\r\n    </div>\r\n   </div>\r\n  \r\n\r\n\r\n   <div *ngIf=\"showFormvalue==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;\" >\r\n     \r\n  <div>\r\n    <ion-grid style=\"padding-top:10%;padding-bottom:10%;\">\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Update Space Details</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div style=\"border:1px solid white;bottom:0%;height: 60%;position:relative;width:100%;overflow: scroll;position: relative;\">\r\n      <!-- <div style=\"border:1px solid white;bottom:0%;;position:relative;height: 80%;overflow: scroll;;\"> -->\r\n        <form #editSpaceForm=\"ngForm\" >\r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n            <ion-textarea   \r\n            type=\"text\"    \r\n            [(ngModel)]=\"description_\" \r\n            name=\"description\" \r\n            required\r\n            maxlength=\"100\"\r\n            #description=\"ngModel\" \r\n            placeholder=\"Description\" style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n            </ion-textarea>\r\n            <div style=\"color:red;\" *ngIf=\"!description?.valid && (description?.dirty || description?.touched)\">\r\n              Invalid description\r\n              <div *ngIf=\"description.errors.required\">\r\n                description is required\r\n             </div>\r\n             <div *ngIf=\"description.errors.maxlength\">\r\n              maxlength is 100\r\n           </div>\r\n           </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;padding-top: 5%;width: 100%;\">\r\n            <ion-textarea   \r\n            type=\"text\"  \r\n            [(ngModel)]=\"address_\" \r\n            name=\"address\" \r\n            required\r\n            maxlength=\"100\"\r\n            #address=\"ngModel\" \r\n             style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n            </ion-textarea>\r\n          </div>\r\n          <div style=\"color:red;\" *ngIf=\"!address?.valid && (address?.dirty || address?.touched)\">\r\n            Invalid address\r\n            <div *ngIf=\"address.errors.required\">\r\n              address is required\r\n           </div>\r\n           <div *ngIf=\"address.errors.maxlength\">\r\n            maxlength is 100\r\n         </div>\r\n         </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"padding-bottom: 5%;width: 100%;\">\r\n              <ion-input\r\n               style=\"width: 100%;\"\r\n                type=\"text\"  \r\n              placeholder=\"province\"\r\n              [(ngModel)]=\"province_\" \r\n              required\r\n              maxlength=\"100\"\r\n              #province=\"ngModel\" \r\n              name=\"province\"\r\n               style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n            </div>\r\n            <div style=\"color:red;\" *ngIf=\"!province?.valid && (province?.dirty || province?.touched)\">\r\n              Invalid province\r\n              <div *ngIf=\"province.errors.required\">\r\n                province is required\r\n             </div>\r\n             <div *ngIf=\"province.errors.maxlength\">\r\n              maxlength is 100\r\n           </div>\r\n           </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">Price </ion-label>\r\n              <ion-input style=\"width: 100%;\"    \r\n              type=\"number\"  \r\n              [(ngModel)]=\"price_\" \r\n              name=\"price_\"\r\n              placeholder=\"Price\"\r\n               style=\"background-color: #E8EEF1;border-radius: 20px;width: 100%;\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label style=\"font-family: Arial, Helvetica, sans-serif;font-size: .9em;color:#057DCD;font-weight: bold;\">Category </ion-label>\r\n              <ion-select  [(ngModel)]=\"category_number_\"   required     #category_number=\"ngModel\"  name=\"category_number\">\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n            </ion-select>\r\n            <div style=\"color:red;\" *ngIf=\"!category_number?.valid && (category_number?.dirty || category_number?.touched)\">\r\n              Invalid category_number\r\n              <div *ngIf=\"address.errors.required\">\r\n                category_number is required\r\n             </div>\r\n          </div>\r\n            </ion-col>\r\n          </ion-row>\r\n         \r\n          <ion-row>\r\n            <div style=\"font-family: Arial, Helvetica, sans-serif;font-size: 1em;color:#057DCD;font-weight: bold;padding-top: 5%;padding-bottom: 5%;\">\r\n              <b>Animenities</b>\r\n            </div>\r\n          </ion-row>\r\n          <ion-row style=\"height: 100px;overflow: scroll;\">\r\n            <ion-col *ngFor=\"let cartoon of cartoonsData\" size=\"2\" style=\"text-align: center;font-size: .8em;\">\r\n              <div style=\"font-size: 14px;\"> \r\n                  <input type=\"checkbox\" type=\"checkbox\"    (change)=\"onChange(cartoon.name, $event.target.checked)\"  />\r\n              </div>\r\n              <div> {{ cartoon.name }}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col style=\"width:100%; \">\r\n             <div style=\"width:100%;padding-top:5%;padding-bottom:5%;right: -13px;position: absolute; \">\r\n               <ion-button (click)=\" updateSpace()\" [disabled]=\"!editSpaceForm.valid\"   style=\"color:black; width: 100%;--border-radius: 20px;--background: #E1C340;height: 50px;font-weight: bold;\">EDIT</ion-button>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n            <div style=\"width:100%;padding-top:5%;padding-bottom:5%;position: absolute;left: -15px; \">\r\n             <ion-button  (click)=\" close()\" style=\"width: 100%;--border-radius: 20px;--background: #DB1F48;height: 50px;color:white\">CLOSE</ion-button>\r\n            </div>\r\n          </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n      </div>\r\n    </div>\r\n   </div>\r\n   <div *ngIf=\"googleMaps==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:10%;padding-bottom:10%;\">\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Google Maps</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <form #setMapForm=\"ngForm\" >\r\n    <div style=\"border:1px solid white;bottom:0%;;position:relative;overflow: scroll;position: relative;height: 70%;\">\r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n            <div style=\"width: 100%;\" >\r\n              <ion-textarea \r\n              placeholder=\"add workspace address to google maps...\"\r\n              type=\"text\" \r\n              [(ngModel)]=\"addressLocation\" \r\n              name=\"addressLocation\"\r\n              required\r\n              minlength=\"2\"\r\n              pattern=\"^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$\"\r\n              #addressLocationErr=\"ngModel\" \r\n              style=\"background-color: #E8EEF1;border-radius: 5px\">\r\n        </ion-textarea>\r\n            </div>\r\n         \r\n            <div style=\"color:red;width: 100%;\" *ngIf=\"!addressLocationErr?.valid && (addressLocationErr?.dirty || addressLocationErr?.touched)\">\r\n              Invalid First Name\r\n              <div *ngIf=\"addressLocationErr.errors.required\">\r\n                First Name is required\r\n             </div>\r\n             <div *ngIf=\"addressLocationErr.errors.minlength\">\r\n               First Name Minimum Length is {{addressLocationErr.errors.minlength?.requiredLength}}\r\n             </div>\r\n           </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col  *ngIf=\"!showingCurrent\">\r\n              <ion-text class=\"coords\">My Latitude : {{lat}}</ion-text>\r\n            </ion-col>\r\n            <ion-col  *ngIf=\"!showingCurrent\">\r\n              <ion-text class=\"coords\">My Longitude : {{lng}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div >\r\n              <ion-col>\r\n                <ion-button color=\"success\" [disabled]=\"!setMapForm.valid\" (click)=\"geocode()\"   style=\"width: 100%;margin-top: 5%;\">\r\n                  Add to Google Maps\r\n                </ion-button>\r\n              </ion-col>\r\n            </div>\r\n            <ion-col>\r\n              <ion-button  (click)=\" close()\" style=\"--background: #DB1F48;color:white;margin-top: 5%;\">CLOSE</ion-button>\r\n            </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </form>\r\n    </div>\r\n   </div>\r\n   <div *ngIf=\"showExtras==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:10%;padding-bottom:10%;\">\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Add Extras</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div style=\"border:1px solid white;bottom:0%;;position:relative;overflow: scroll;position: relative;height: 70%;\">\r\n        <form *ngIf=\"showExtras==1\" #extrasForm=\"ngForm\">  \r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n           <div>Items: </div>\r\n           <div style=\"background-color: #FAD02C;font-size: 1.1em;border-radius: 50%;width: 8%;text-align: center;\">{{this.extrasCart}}</div> \r\n          </ion-row>\r\n          <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-input style=\"width: 100%;\"   \r\n                type=\"text\"  \r\n                placeholder=\"Amenity\"\r\n                [(ngModel)]=\"enemity\" \r\n                name=\"enemity\"\r\n                maxlength=\"8\"\r\n                required\r\n                minlength=\"2\"\r\n                pattern=\"^[a-zA-Z]+$\"\r\n                #enemityErr=\"ngModel\"  style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n                <div style=\"color:red;\" *ngIf=\"!enemityErr?.valid && (enemityErr?.dirty || enemityErr?.touched)\">\r\n                  Invalid First item\r\n                  <div *ngIf=\"enemityErr.errors.required\">\r\n                    item is required\r\n                 </div>\r\n                 <div *ngIf=\"enemityErr.errors.minlength\">\r\n                   First Name Minimum Length is {{enemityErr.errors.minlength?.requiredLength}}\r\n                 </div>\r\n                 <div *ngIf=\"enemityErr.errors.maxlength\">\r\n                  First Name Maximum Length is {{enemityErr.errors.maxlength?.requiredLength}}\r\n                </div>\r\n               </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input \r\n                type=\"number\"  \r\n                placeholder=\"Price\"\r\n                [(ngModel)]=\"price\" \r\n                name=\"price\"\r\n                required\r\n                maxlength=\"3\"\r\n                minlength=\"2\"\r\n                pattern=\"^[0-9]+$\"\r\n                #priceErr=\"ngModel\"\r\n                 style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n              </ion-col>\r\n              <div style=\"color:red;\" *ngIf=\"!priceErr?.valid && (priceErr?.dirty || priceErr?.touched)\">\r\n                Invalid Price\r\n                <div *ngIf=\"priceErr.errors.required\">\r\n                  Price is required\r\n               </div>\r\n               <div *ngIf=\"priceErr.errors.minlength\">\r\n                Price Minimum Length is {{priceErr.errors.minlength?.requiredLength}}\r\n               </div>\r\n               <div *ngIf=\"priceErr.errors.maxlength\">\r\n                Price Maximum Length is {{priceErr.errors.maxlength?.requiredLength}}\r\n              </div>\r\n             </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-fab  horizontal=\"end\"  >\r\n                <ion-fab-button *ngIf=\"this.extrasCart<5\"  [disabled]=\"!extrasForm.valid\" (click)=\"addExtrasToarray()\" color=\"danger\">\r\n                  <ion-icon name=\"add\"></ion-icon>\r\n                </ion-fab-button>\r\n              </ion-fab>\r\n            </ion-col>\r\n          </ion-row>\r\n      \r\n        </ion-grid>\r\n        </form>\r\n        <div style=\"margin-top:20%;\" >\r\n          <ion-button *ngIf=\"this.extrasCart>0\"  [disabled]=\"!extrasForm.valid\" expand=\"full\" color=\"secondary\" (click)=\"addExtras()\"> SUBMIT</ion-button>\r\n         </div>\r\n         <div style=\"margin-top:20%;\" >\r\n          <ion-button (click)=\"close()\"  expand=\"full\" color=\"danger\" (click)=\"addExtras()\"> CLOSE</ion-button>\r\n         </div>\r\n      </div>\r\n    </div>\r\n   </div>  \r\n\r\n   <div *ngIf=\"ShowchangeProfileImage==1\" style=\"border: 1px solid white;height: 100%;  background-image: url(../assets/background2.png)\">\r\n    <div style=\"height: 100%;width: 100%; border: 1px solid white;background-color: white;bottom: 0%;left: 0;position: absolute;border-top-right-radius:20%;border-bottom-right-radius:10%\" >\r\n  <div>\r\n  <ion-grid style=\"padding-top:10%;padding-bottom:10%;\">\r\n      <ion-row><h1 style=\"font-family: Arial, Helvetica, sans-serif;color:#1E3D58 ;\">Change Profile Picture</h1></ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div style=\"border:1px solid white;bottom:0%;;position:relative;overflow: scroll;position: relative;height: 70%;\">\r\n     \r\n        <form #changeImageForm=\"ngForm\">\r\n        <ion-grid  style=\"width: 100%;\">\r\n          <ion-row>\r\n          </ion-row>\r\n          <ion-row>\r\n              <ion-col >\r\n                <ion-input style=\"width: 100%;\" \r\n                type=\"file\"  required   name=\"img\"  accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"\r\n                            style=\"background-color: #E8EEF1;border-radius: 20px;\"></ion-input>\r\n              </ion-col>\r\n              <div style=\"color:red;width: 100%;\" *ngIf=\"!priceErr?.valid && (priceErr?.dirty || priceErr?.touched)\">\r\n                Invalid Price\r\n                <div *ngIf=\"priceErr.errors.required\">\r\n                  Price is required\r\n               </div>\r\n             </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div>\r\n              <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n            </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div style=\"margin-top:20%;\" >\r\n              <ion-button  [disabled]=\"!changeImageForm.valid\" *ngIf=\" this.isImageSaved\" expand=\"full\" color=\"success\"  (click)=\"changeImage()\"  style=\"width: 100%;\">SUBMIT</ion-button>\r\n             </div>\r\n          </ion-row>\r\n          <ion-row>\r\n            <div  >\r\n              <ion-button   expand=\"full\" color=\"danger\"  (click)=\"close()\"  style=\"width: 100%;\">CLOSE</ion-button>\r\n             </div>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n \r\n      </div>\r\n    </div>\r\n   </div> \r\n\r\n\r\n\r\n <div > \r\n  <div >  \r\n    <!-- <form *ngIf=\"showExtras==1\" #extrasForm=\"ngForm\">  \r\n      \r\n    <h3 style=\"font-size: 18px; margin-top: 15px;\">Add extras</h3>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input  class=\"amenity\"\r\n          type=\"text\"  \r\n          placeholder=\"Amenity\"\r\n          [(ngModel)]=\"enemity\" \r\n          name=\"enemity\"\r\n          maxlength=\"8\"\r\n          required\r\n          minlength=\"2\"\r\n          pattern=\"^[a-zA-Z]+$\"\r\n          #enemityErr=\"ngModel\" \r\n          >\r\n       </ion-input>\r\n       <div style=\"color:red;\" *ngIf=\"!enemityErr?.valid && (enemityErr?.dirty || enemityErr?.touched)\">\r\n        Invalid First item\r\n        <div *ngIf=\"enemityErr.errors.required\">\r\n          item is required\r\n       </div>\r\n       <div *ngIf=\"enemityErr.errors.minlength\">\r\n         First Name Minimum Length is {{enemityErr.errors.minlength?.requiredLength}}\r\n       </div>\r\n       <div *ngIf=\"enemityErr.errors.maxlength\">\r\n        First Name Maximum Length is {{enemityErr.errors.maxlength?.requiredLength}}\r\n      </div>\r\n     </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input  class=\"price\"\r\n          type=\"number\"  \r\n          placeholder=\"Price\"\r\n          [(ngModel)]=\"price\" \r\n          name=\"price\"\r\n          required\r\n          maxlength=\"3\"\r\n          minlength=\"2\"\r\n          pattern=\"^[0-9]+$\"\r\n          #priceErr=\"ngModel\" \r\n          >\r\n       </ion-input>\r\n       <div style=\"color:red;\" *ngIf=\"!priceErr?.valid && (priceErr?.dirty || priceErr?.touched)\">\r\n        Invalid Price\r\n        <div *ngIf=\"priceErr.errors.required\">\r\n          Price is required\r\n       </div>\r\n       <div *ngIf=\"priceErr.errors.minlength\">\r\n        Price Minimum Length is {{priceErr.errors.minlength?.requiredLength}}\r\n       </div>\r\n       <div *ngIf=\"priceErr.errors.maxlength\">\r\n        Price Maximum Length is {{priceErr.errors.maxlength?.requiredLength}}\r\n      </div>\r\n     </div>\r\n        </ion-col>\r\n     \r\n        <ion-col>\r\n          {{this.messageValue}}\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <div>Items:{{this.extrasCart}}</div>\r\n          <ion-fab  horizontal=\"end\"  >\r\n            <ion-fab-button *ngIf=\"this.extrasCart<5\"  [disabled]=\"!extrasForm.valid\" (click)=\"addExtrasToarray()\" color=\"danger\">\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n      \r\n        <ion-button *ngIf=\"this.extrasCart>0\"  [disabled]=\"!extrasForm.valid\" expand=\"full\" color=\"secondary\" (click)=\"addExtras()\"> Add</ion-button>\r\n      </ion-row>\r\n    </ion-grid>\r\n</form> -->\r\n</div> \r\n   \r\n   \r\n\r\n\r\n    <!-- <form #editSpaceForm=\"ngForm\" type=\"text\" style=\"width: 100%;top: 15%;height: 80%;\">\r\n            <ion-label>Description</ion-label>\r\n           <ion-textarea\r\n              type=\"text\"    \r\n              [(ngModel)]=\"description_\" \r\n              name=\"description\" \r\n              required\r\n              maxlength=\"100\"\r\n              #description=\"ngModel\" \r\n              placeholder=\"Company name\"\r\n              style=\"border-style: solid;height: 15%;border-width: 1px;border-color: #16D6E3;border-top: 0px;margin: 0px;\"></ion-textarea>\r\n            <div style=\"color:red;\" *ngIf=\"!description?.valid && (description?.dirty || description?.touched)\">\r\n              Invalid description\r\n              <div *ngIf=\"description.errors.required\">\r\n                description is required\r\n             </div>\r\n             <div *ngIf=\"description.errors.maxlength\">\r\n              maxlength is 100\r\n           </div>\r\n           </div>\r\n           <ion-label>Price</ion-label>\r\n          <ion-input  \r\n              type=\"number\"  \r\n              placeholder=\"price\"\r\n              [(ngModel)]=\"price_\" \r\n              name=\"price_\">\r\n          </ion-input>\r\n          <ion-label>Province</ion-label>\r\n         <ion-input  \r\n          type=\"text\"  \r\n          placeholder=\"province\"\r\n          [(ngModel)]=\"province_\" \r\n          required\r\n          maxlength=\"100\"\r\n          #province=\"ngModel\" \r\n          name=\"province\">\r\n       </ion-input>\r\n       <div style=\"color:red;\" *ngIf=\"!province?.valid && (province?.dirty || province?.touched)\">\r\n        Invalid province\r\n        <div *ngIf=\"province.errors.required\">\r\n          province is required\r\n       </div>\r\n       <div *ngIf=\"province.errors.maxlength\">\r\n        maxlength is 100\r\n     </div>\r\n     </div>\r\n     <ion-label>Address</ion-label>\r\n           <ion-textarea  \r\n           type=\"text\"  \r\n           [(ngModel)]=\"address_\" \r\n           name=\"address\" \r\n           required\r\n           maxlength=\"100\"\r\n           #address=\"ngModel\" \r\n           style=\"border-style: solid;height: 15%;border-width: 1px;border-color: #16D6E3;border-top: 0px;margin: 0px;\">\r\n          </ion-textarea>\r\n          <div style=\"color:red;\" *ngIf=\"!address?.valid && (address?.dirty || address?.touched)\">\r\n            Invalid address\r\n            <div *ngIf=\"address.errors.required\">\r\n              address is required\r\n           </div>\r\n           <div *ngIf=\"address.errors.maxlength\">\r\n            maxlength is 100\r\n         </div>\r\n         </div>\r\n            <ion-label>Category Number</ion-label>\r\n            <ion-select  [(ngModel)]=\"category_number_\"   required     #category_number=\"ngModel\"  name=\"category_number\">\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n            </ion-select>\r\n            <div style=\"color:red;\" *ngIf=\"!category_number?.valid && (category_number?.dirty || category_number?.touched)\">\r\n              Invalid category_number\r\n              <div *ngIf=\"address.errors.required\">\r\n                category_number is required\r\n             </div>\r\n          </div>\r\n<ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n     <ion-label style=\"font-size:18px;color: black;\">Update amenities</ion-label>\r\n    </ion-row>\r\n     <ion-row style=\"color: black;margin: 5px;\">\r\n       <ion-col *ngFor=\"let cartoon of cartoonsData\">\r\n         <div style=\"font-size: 14px;\">{{ cartoon.name }} <br>  <input type=\"checkbox\"    (change)=\"onChange(cartoon.name, $event.target.checked)\" />\r\n         </div>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n </ion-item>\r\n<ion-item>\r\n  <ion-button (click)=\" updateSpace()\" [disabled]=\"!editSpaceForm.valid\"   expand=\"full\" class=\"edit\">Edit</ion-button>\r\n  <ion-button (click)=\" close()\"   expand=\"full\" class=\"close\">Close</ion-button>\r\n</ion-item>\r\n    </form> -->\r\n<div>\r\n   <!-- <form #setMapForm=\"ngForm\" >\r\n  <ion-label style=\"font-size: 18px; margin-left: 10px;\">Add workspace address to google maps</ion-label>\r\n  <ion-item>\r\n    <ion-label style=\"font-size: 18px;\">Enter Address to Geocode</ion-label>\r\n    <ion-input \r\n                type=\"text\" \r\n                [(ngModel)]=\"addressLocation\" \r\n                name=\"addressLocation\"\r\n                required\r\n                minlength=\"2\"\r\n                pattern=\"^[_A-z0-9]*((-|\\s)*[_A-z0-9])*$\"\r\n               \r\n                #addressLocationErr=\"ngModel\" \r\n                ></ion-input>\r\n                <div style=\"color:red;\" *ngIf=\"!addressLocationErr?.valid && (addressLocationErr?.dirty || addressLocationErr?.touched)\">\r\n                  Invalid First Name\r\n                  <div *ngIf=\"addressLocationErr.errors.required\">\r\n                    First Name is required\r\n                 </div>\r\n                 <div *ngIf=\"addressLocationErr.errors.minlength\">\r\n                   First Name Minimum Length is {{addressLocationErr.errors.minlength?.requiredLength}}\r\n                 </div>\r\n               </div>\r\n  </ion-item>\r\n  <ion-row  *ngIf=\"!showingCurrent\">\r\n    <ion-text class=\"coords\">My Latitude : {{lat}}</ion-text>\r\n  </ion-row>\r\n  <ion-row  *ngIf=\"!showingCurrent\">\r\n    <ion-text class=\"coords\">My Longitude : {{lng}}</ion-text>\r\n  </ion-row>\r\n  <ion-button color=\"success\" [disabled]=\"!setMapForm.valid\" (click)=\"geocode()\" expand=\"full\" class=\"ion-margin\">\r\n    Add to Google Maps</ion-button>  \r\n  </form> -->\r\n</div> \r\n</div> \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n <ion-grid>\r\n    <!--  <ion-row>\r\n  <ion-card  *ngFor=\"let x of arrayList\">\r\n    <div class=\"newimage\">\r\n      <img [src]=\"x.image\">\r\n    </div>\r\n    <ion-label>\r\n     <ion-grid>\r\n       <ion-row>\r\n        {{x.categories}}\r\n       </ion-row>\r\n       <ion-row>\r\n        {{x.price}}\r\n       </ion-row>\r\n       <ion-row>\r\n        {{x.address}}\r\n       </ion-row>\r\n       <ion-row>\r\n        {{x.description}}\r\n       </ion-row>\r\n       <ion-row>\r\n         <ion-col *ngFor=\"let y of x.amenities\">\r\n          {{y}} \r\n         </ion-col>\r\n       </ion-row>\r\n       <ion-row>\r\n\r\n       \r\n         <p [routerLink] = \"['/previews',x.uid,x.workspace_uid,x.spaceuid]\" style=\"color: #9010F5; font-size: 14px;\">Reviews</p>\r\n       </ion-row>\r\n       <ion-row>\r\n         <ion-col> -->\r\n          <!-- <ion-button (click)=\"EditForm(x.spaceuid)\">Edit</ion-button> -->\r\n          <!-- <ion-icon (click)=\"EditForm(x.spaceuid)\" name=\"create-outline\" class=\"editing\"></ion-icon>Edit\r\n         </ion-col>\r\n         <ion-col >\r\n           <ion-button (click)=\" addGallary(x.spaceuid)\" class=\"gallery\" shape=\"round\">Gallery</ion-button>\r\n         </ion-col>\r\n         <ion-col> -->\r\n          <!-- <ion-button color=\"danger\" (click)=\"remove(x.spaceuid)\">Remove</ion-button> -->\r\n          <!-- <ion-icon color=\"danger\" (click)=\"remove(x.spaceuid)\" name=\"trash-outline\" class=\"remove\"></ion-icon>Remove\r\n         </ion-col>\r\n         <ion-col>\r\n          <ion-button  [routerLink] = \"['/walkins',x.spaceuid,x.categories,x.workspace_uid]\" class=\"walkins\" shape=\"round\">Walkins</ion-button>\r\n         </ion-col> -->\r\n       <!-- </ion-row> -->\r\n       <!-- <ion-row> -->\r\n         <!-- <ion-col>\r\n        <ion-button  [routerLink] = \"['/view-walkins',x.spaceuid,x.categories,x.workspace_uid]\" class=\"view\" shape=\"round\">View Walkins</ion-button>\r\n        </ion-col>\r\n       </ion-row>\r\n     </ion-grid>\r\n    </ion-label>\r\n  </ion-card>\r\n</ion-row>-->\r\n<ion-row> \r\n\r\n<!--  \r\n      <ion-input type=\"file\"  required  *ngIf=\"this.gallaryArraySize < 4\"  name=\"img\"  accept=\"image/*\" id=\"upload\" (change)=\"onselect($event)\"></ion-input>\r\n      <div>\r\n        <div  style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n      </div>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n       <b>Total images upload: {{this.gallaryArraySize}}</b> \r\n\r\n      </ion-row>\r\n   \r\n      <ion-row>\r\n        <ion-fab  horizontal=\"end\"  >\r\n          <ion-fab-button    (click)=\"uploadGallary()\"color=\"warning\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-row>\r\n      <ion-row (click)=\"freshers()\" >\r\n        <img *ngFor=\"let url of urls\" [src]=\"url\">\r\n      </ion-row>\r\n    </ion-grid> \r\n\r\n  </div> -->\r\n</ion-row>\r\n      <ion-row>\r\n        \r\n  \r\n  \r\n  <!-- <ion-item> \r\n    <div *ngIf=\"showExtras==1\"> \r\n      <form #extrasForm=\"ngForm\">    \r\n      <h3 style=\"font-size: 18px; margin-top: 15px;\">Add extras</h3>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-input  class=\"amenity\"\r\n            type=\"text\"  \r\n            placeholder=\"Amenity\"\r\n            [(ngModel)]=\"enemity\" \r\n            name=\"enemity\"\r\n            maxlength=\"8\"\r\n            required\r\n            minlength=\"2\"\r\n            pattern=\"^[a-zA-Z]+$\"\r\n            #enemityErr=\"ngModel\" \r\n            >\r\n         </ion-input>\r\n         <div style=\"color:red;\" *ngIf=\"!enemityErr?.valid && (enemityErr?.dirty || enemityErr?.touched)\">\r\n          Invalid First item\r\n          <div *ngIf=\"enemityErr.errors.required\">\r\n            item is required\r\n         </div>\r\n         <div *ngIf=\"enemityErr.errors.minlength\">\r\n           First Name Minimum Length is {{enemityErr.errors.minlength?.requiredLength}}\r\n         </div>\r\n         <div *ngIf=\"enemityErr.errors.maxlength\">\r\n          First Name Maximum Length is {{enemityErr.errors.maxlength?.requiredLength}}\r\n        </div>\r\n       </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input  class=\"price\"\r\n            type=\"number\"  \r\n            placeholder=\"Price\"\r\n            [(ngModel)]=\"price\" \r\n            name=\"price\"\r\n            required\r\n            maxlength=\"3\"\r\n            minlength=\"2\"\r\n            pattern=\"^[0-9]+$\"\r\n            #priceErr=\"ngModel\" \r\n            >\r\n         </ion-input>\r\n         <div style=\"color:red;\" *ngIf=\"!priceErr?.valid && (priceErr?.dirty || priceErr?.touched)\">\r\n          Invalid Price\r\n          <div *ngIf=\"priceErr.errors.required\">\r\n            Price is required\r\n         </div>\r\n         <div *ngIf=\"priceErr.errors.minlength\">\r\n          Price Minimum Length is {{priceErr.errors.minlength?.requiredLength}}\r\n         </div>\r\n         <div *ngIf=\"priceErr.errors.maxlength\">\r\n          Price Maximum Length is {{priceErr.errors.maxlength?.requiredLength}}\r\n        </div>\r\n       </div>\r\n          </ion-col>\r\n       \r\n          <ion-col>\r\n            {{this.messageValue}}\r\n          </ion-col>\r\n \r\n          <ion-col>\r\n            <div>Items:{{this.extrasCart}}</div>\r\n            <ion-fab  horizontal=\"end\"  >\r\n              <ion-fab-button *ngIf=\"this.extrasCart<5\"  [disabled]=\"!extrasForm.valid\" (click)=\"addExtrasToarray()\" color=\"danger\">\r\n                <ion-icon name=\"add\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n        \r\n          <ion-button *ngIf=\"this.extrasCart>0\"  [disabled]=\"!extrasForm.valid\" expand=\"full\" color=\"secondary\" (click)=\"addExtras()\"> Add</ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n</form>\r\n</div> \r\n<div *ngIf=\"ShowchangeProfileImage==1\">\r\n<form #changeImageForm=\"ngForm\">\r\n        <h3 style=\"font-size: 18px;\">Change profile</h3>\r\n        <div>\r\n          <ion-input type=\"file\"  required   name=\"img\"  accept=\"image/*\" id=\"upload\" (change)=\"fileChangeEvent($event)\"></ion-input>\r\n        \r\n          <div style=\"color:red;\" *ngIf=\"!priceErr?.valid && (priceErr?.dirty || priceErr?.touched)\">\r\n            Invalid Price\r\n            <div *ngIf=\"priceErr.errors.required\">\r\n              Price is required\r\n           </div>\r\n         </div>\r\n         <ion-button [disabled]=\"!changeImageForm.valid\" *ngIf=\" this.isImageSaved\" expand=\"full\" color=\"success\"  (click)=\"changeImage()\"> Change Profile</ion-button>\r\n          <div>\r\n            <div style=\"color:red;\" *ngIf=\" this.imageError!==''\">{{this.imageError}}</div>\r\n          </div>\r\n          \r\n        </div>\r\n  \r\n      </form>\r\n</div>\r\n     -->\r\n      </ion-row>\r\n    </ion-grid>\r\n   \r\n    \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/update-space/update-space-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/update-space/update-space-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpacePageRoutingModule", function() { return UpdateSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _update_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-space.page */ "./src/app/pages/update-space/update-space.page.ts");




const routes = [
    {
        path: '',
        component: _update_space_page__WEBPACK_IMPORTED_MODULE_3__["UpdateSpacePage"]
    }
];
let UpdateSpacePageRoutingModule = class UpdateSpacePageRoutingModule {
};
UpdateSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateSpacePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/update-space/update-space.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/update-space/update-space.module.ts ***!
  \***********************************************************/
/*! exports provided: UpdateSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpacePageModule", function() { return UpdateSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-space-routing.module */ "./src/app/pages/update-space/update-space-routing.module.ts");
/* harmony import */ var _update_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-space.page */ "./src/app/pages/update-space/update-space.page.ts");







let UpdateSpacePageModule = class UpdateSpacePageModule {
};
UpdateSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateSpacePageRoutingModule"]
        ],
        declarations: [_update_space_page__WEBPACK_IMPORTED_MODULE_6__["UpdateSpacePage"]]
    })
], UpdateSpacePageModule);



/***/ }),

/***/ "./src/app/pages/update-space/update-space.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/update-space/update-space.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1zcGFjZS91cGRhdGUtc3BhY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/update-space/update-space.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/update-space/update-space.page.ts ***!
  \*********************************************************/
/*! exports provided: UpdateSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSpacePage", function() { return UpdateSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sign-in-sign-up.service */ "./src/app/sign-in-sign-up.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/owner.service */ "./src/app/services/owner.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/feedback/masseges/masseges.page */ "./src/app/feedback/masseges/masseges.page.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");










//////////////Geolocation and Geocode//////////

const { Geolocation, Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];

let UpdateSpacePage = class UpdateSpacePage {
    constructor(loader, nativeGeocoder, ngZone, popover, route, ownerservice, account) {
        this.loader = loader;
        this.nativeGeocoder = nativeGeocoder;
        this.ngZone = ngZone;
        this.popover = popover;
        this.route = route;
        this.ownerservice = ownerservice;
        this.account = account;
        this.extras = {};
        this.extrasArray = [];
        this.arrayList = [];
        this.arrayEdit = [];
        this.category = this.route.snapshot.params.category;
        this.amenities_ = [];
        this.showProfile = 0;
        this.showExtras = 0;
        this.ShowchangeProfileImage = 0;
        this.googleMaps = 0;
        this.amenitiesEdit = [];
        this.cartoonsData = [
            { id: 0, name: 'lights' },
            { id: 1, name: 'guachairsrds' },
            { id: 2, name: 'aircon' },
            { id: 3, name: 'plugs' },
            { id: 4, name: 'kitchen' },
            { id: 5, name: 'sunlight' },
            { id: 6, name: 'toilet' },
            { id: 7, name: 'clean' },
            { id: 8, name: 'safety' },
            { id: 9, name: 'tv' },
            { id: 10, name: 'wifi' },
            { id: 11, name: 'microphone' },
            { id: 12, name: 'speakers' },
            { id: 13, name: 'phone' },
            { id: 14, name: 'desktop' },
            { id: 15, name: 'bin' }
        ];
        this.GallaryStatusValue = 0;
        this.gallaryArray = [];
        this.gallaryArraySize = -1;
        this.extrasCart = 0;
        /**********************Multiple file upload********************/
        this.urls = [];
        this.showingCurrent = true;
        this.imageList = [];
        ////Refreshers
        this.dummyList = [];
        //this.checkGallary();
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles")
            .doc(this.account.getUserSession())
            .collection("profile").doc(this.ownerservice.getWorkSpaceUID()).collection("space")
            .where("uid", "==", this.account.getUserSession()).where("categories", "==", this.category)
            .get()
            .then(doc => {
            doc.forEach(dat => {
                this.arrayList.push(Object.assign(dat.data(), { "spaceuid": dat.id }));
                this.workspaceuid = dat.id;
            });
            this.checkGallary(this.workspaceuid);
            console.log(this.arrayList);
        });
    }
    onChange(name, isChecked) {
        this.amenitiesEdit.push((name));
        console.log(this.amenitiesEdit);
    }
    onselect(e) {
        if (e.target.files) {
            for (let i = 0; i < File.length; i++) {
                var reader = new FileReader();
                reader.readAsDataURL(e.target.files[i]);
                reader.onload = (events) => {
                    this.urls.push(events.target.result);
                };
            }
        }
    }
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            //////////////////////////////////////////////////////////    
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
            /////////////////////////////
        }
    }
    ngOnInit() {
    }
    EditForm(id) {
        this.showProfile = 1;
        this.showFormvalue = 1;
        this.GallaryStatusValue = 0;
        this.spaceUid = id;
        console.log(this.spaceUid);
        console.log(this.category);
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection("profiles")
            .doc(this.account.getUserSession())
            .collection("profile").doc(this.ownerservice.getWorkSpaceUID()).collection("space").doc(this.spaceUid)
            .get()
            .then(doc => {
            this.description_ = doc.data().description;
            this.address_ = doc.data().address;
            this.category_number_ = doc.data().category_number;
            this.price_ = doc.data().price;
            this.province_ = doc.data().province;
            this.amenities_ = (doc.data().amenities);
            this.categories_ = doc.data().categories;
            this.city_ = doc.data().city;
            this.spaceid = doc.id;
            console.log(this.amenities_);
        });
    }
    updateSpace() {
        // console.log( this.description_+"/"+this.address_+"/"+this.category_number_+"/"+this.price_+"/"+this.province_+"/"+this.amenitiesEdit )
        this.ownerservice.updateCoworkingSpace(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.spaceUid, this.categories_, this.category_number_, this.address_, this.price_, this.city_, this.province_, this.amenitiesEdit, this.description_);
        this.CreatePopover();
    }
    close() {
        this.showFormvalue = 0;
        this.showProfile = 0;
        this.googleMaps = 0;
        this.showExtras = 0;
        this.ShowchangeProfileImage = 0;
    }
    remove(id) {
        this.ownerservice.deleteSpace(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), id);
        this.CreatePopover();
    }
    changeImage() {
        this.ownerservice.changeImgSpace(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.cardImageBase64, this.spaceUid);
        this.CreatePopover();
    }
    addExtrasToarray() {
        var extrasx = {
            anemenity: this.enemity,
            price: this.price
        };
        this.extrasArray.push(extrasx);
        this.extrasCart = this.extrasArray.length;
        console.log(this.extrasArray);
    }
    addExtras() {
        this.ownerservice.extrasAmenities(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.extrasArray, this.spaceUid);
    }
    addGallary(x) {
        this.showFormvalue = 0;
        this.GallaryStatusValue = 1;
        this.workspaceuid = x;
        this.showProfile = 1;
    }
    closeGallary() {
        this.GallaryStatusValue = 0;
        this.showProfile = 0;
    }
    ShowGoogleMaps() {
        this.googleMaps = 1;
        this.showProfile = 1;
    }
    showExtra() {
        this.showExtras = 1;
        this.showProfile = 1;
    }
    ShowchangeProfileImg() {
        this.ShowchangeProfileImage = 1;
        this.showProfile = 1;
    }
    getSpaceUid() {
        return this.workspaceuid;
    }
    uploadGallary() {
        console.log(this.workspaceuid);
        this.ownerservice.addGallary(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.workspaceuid, this.urls, this.gallaryuid);
        // this.imageArrayList(this.cardImageBase64)
        //  this.freshers(); gallaryArray
    }
    imageInArray() {
        var gallary = {
            img: this.cardImageBase64
        };
        this.imageList.push(gallary);
        //this.extrasCart=this.extrasArray.length
        console.log(this.imageList);
    }
    checkGallary(valueuid) {
        console.log(this.ownerservice.getWorkSpaceUID());
        console.log(this.account.getUserSession());
        console.log(valueuid);
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
        var hotelsRef = db.collection("profiles").doc(this.account.getUserSession());
        hotelsRef.collection("profile").doc(this.ownerservice.getWorkSpaceUID())
            .collection("space").doc(valueuid)
            .collection("gallary").where("uid", "==", this.account.getUserSession())
            .get().then(doc => {
            doc.forEach(dat => {
                this.gallaryArray.push(Object.assign(dat.data(), { 'gallaryuid': dat.id }));
                this.gallaryuid = dat.id;
                this.gallaryArraySize = this.gallaryArray.length - 1;
            });
        });
    }
    deleteImage(spaceuid, gallaryuid) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
        var hotelsRef = db.collection("profiles").doc(this.account.getUserSession());
        hotelsRef.collection("profile").doc(this.ownerservice.getWorkSpaceUID())
            .collection("space").doc(spaceuid)
            .collection("gallary").doc(gallaryuid).delete().then((res) => {
            console.log("deleted");
        });
    }
    CreatePopover() {
        this.popover.create({ component: src_app_feedback_masseges_masseges_page__WEBPACK_IMPORTED_MODULE_9__["MassegesPage"],
            showBackdrop: false }).then((popoverElement) => {
            popoverElement.present();
        });
    }
    //////////////Geolocation and Geocode//////////
    geocode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ownerservice.geoCodeLocation(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.spaceUid, -26.269212999999997, 27.790485);
            if (this.addressLocation != "") {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.forwardGeocode(this.addressLocation, options)
                    .then((result) => {
                    this.ngZone.run(() => {
                        this.lat = parseFloat(result[0].latitude);
                        this.lng = parseFloat(result[0].longitude);
                        this.ownerservice.geoCodeLocation(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.spaceUid, this.lat, this.lng);
                        //  geoCodeLocation(user_uid, profile_uid,cate_uid,lat,log)
                        // this.myMap.triggerResize()
                        //   .then(() => (this.myMap as any)._mapsWrapper.setCenter({ lat: this.lat, lng: this.lng }));
                    });
                    this.showingCurrent = false;
                })
                    .catch((error) => console.log(error));
            }
            else {
                yield Toast.show({
                    text: 'Please add address to Geocode'
                });
            }
        });
    }
    doRefresh(event) {
        console.log('Pull Event Triggered!');
        setTimeout(() => {
            this.dummyList = Array(5);
            event.target.complete();
        }, 1500);
    }
    doRefreshT(event) {
        console.log('Pull Event Triggered!');
    }
    freshers() {
        this.loader.create({
            message: 'This Loader Will Auto Hide in 2 Seconds',
            duration: 2000
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
                console.log('Loading dismissed! after 2 Seconds', dis);
            });
        });
    }
};
UpdateSpacePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_owner_service__WEBPACK_IMPORTED_MODULE_7__["OwnerServiceService"] },
    { type: src_app_sign_in_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignInSignUpService"] }
];
UpdateSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-space.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-space/update-space.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-space.page.scss */ "./src/app/pages/update-space/update-space.page.scss")).default]
    })
], UpdateSpacePage);



/***/ })

}]);
//# sourceMappingURL=pages-update-space-update-space-module-es2015.js.map