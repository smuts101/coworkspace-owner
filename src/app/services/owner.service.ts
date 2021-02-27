import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
  db = firebase.firestore()
  array:Array<any>=[];
  firebase: any;
  auth = firebase.auth();
  arr = [];
  resArr = new Array()
  resProfArray = new Array()
  UID: any;
  workspace_uid: any;
  _error: any;
  constructor(private router: Router,public loadingCtrl: LoadingController, public alertCtrl: AlertController) { }

  signAuth() {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        //  this.setSession(users);
        this.setuid(uid)
        console.log('user logged in: ', user);
      } else {
        console.log('user logged out')
      }
    });
  }
  setuid(a) {
    this.UID = a;
  }
  getUid() {
    return this.UID;
  }
  reserve() {
    return firebase.firestore().collection('CoWorking-Space');
  }
  //   gallery() {
  //   return firebase.firestore().doc('space');
  // }

  async updateProfile(user_uid, uid, company_tel, company_address,
    company_website, social_media, company_emaile,
    company_name, img_profile, outside_features, aboutus) {
    // const loading = await this.loadingCtrl.create();
   this.uploadSpaceSuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(user_uid)
        .set({
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
        }, { merge: true })
      
    ]).catch((error) => {
      this._error = error.message;
      console.log(this._error);
      this.updateSpaceError();
          // this.router.navigateByUrl('/add-space');
     
    })
// return await loading.present();
  }
  
 async editProfile(user_uid, uid, company_tel, company_address,
    company_website, company_emaile,
    company_name, outside_features: any[], aboutus) {
    const loading = await this.loadingCtrl.create();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(uid).collection("profile").doc(user_uid)
    .set({
      company_address: company_address,
      company_tel: company_tel,
      company_website: company_website,
   
      company_emaile: company_emaile,
      company_name: company_name,
      uid: uid,
      user_uid: user_uid,
      outside_features: outside_features,
      aboutus: aboutus
     }, { merge: true }).then(a => {
            loading.dismiss().then(() => {
          console.log("Changed");
        this.router.navigateByUrl('/profile');
         });
          console.log("Changed")
     }),error => {
        loading.dismiss().then(() => {
          console.log(error.message);
          // this.addSpaceerror();
        });
      }
      
   return await loading.present();
  }
  changeImg(user_uid, uid, img_profile) {
    this.uploadProfilepicSuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(uid).collection("profile").doc(user_uid)
    .set({
      uid: uid,
      user_uid: user_uid,
      img_profile: img_profile
     }, { merge: true })
  }

  changeImgSpace(user_uid, profile_uid, image, cate_uid) {
    this.uploadSpacepicSuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
    .update({
      image: image
     })
  }
  extrasAmenities(user_uid, profile_uid, extras:any[],cate_uid) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
    .set({
      extraAmenities: extras
     }, { merge: true })
  }
  geoCodeLocation(user_uid, profile_uid,cate_uid,lat,log) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
    .set({
      lat: lat,
      lng:log
     }, { merge: true })
  }
  // console.log( this.addCoSpaceForm.value.categories+" "+
  // this.addCoSpaceForm.value.category_number
  // +" "+this.addCoSpaceForm.value.address
  // +" "+this.addCoSpaceForm.value.city
  // +" "+this.addCoSpaceForm.value.province)



  async addcoworkingSpace(profiles_uid,profile_uid,categories,category_number,address,city,province,amenities,image,price,description) {
    // const loading = await this.loadingCtrl.create();
    this.addSpace();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space")
        .add({
          uid: profiles_uid,
          workspace_uid:profile_uid,
          categories:categories,
          category_number:category_number,
          address:address,
          city:city,
          province:province,
          amenities:amenities,
          image:image,
          price:price,
          description: description,
          
        }).catch((error) => {
          this._error = error.message;
          console.log(this._error);
          this.addSpaceerror();
          // this.router.navigateByUrl('/add-space');
     
    })
    ])
    // return await loading.present();
   
  }
  //  async addcoworkingSpace(profiles_uid,profile_uid,categories,category_number,address,city,province,amenities,image,price,description) {
    
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


  addGallary(profiles_uid, profile_uid, spaceuid, image: [], gallaryid) {
    this.uploadgallerySuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid)
               .collection("space").doc(spaceuid)
               .collection("gallary").doc(gallaryid)
        .set({
          uid: profiles_uid,
          workspace_uid:profile_uid,
          spaceuid:spaceuid,
          image:image
        }).then(a => {
          console.log("Changed")
        })
    ]);
  }

  walkinBooking(profiles_uid,profile_uid,spaceuid,name,
          surname,email,phone,timeout,timein,checkout,
          checkin,category
  ) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid)
               .collection("space").doc(spaceuid)
               .collection("walkins")
        .add({
          name: name,
          surname:surname,
          email:email,
          phone:phone,
          timeout:timeout,
          timein:timein,
          checkout:checkout,
          checkin:checkin,
          spaceuid:spaceuid,
          category:category,
          date: new Date() 
        }).then(a => {
          console.log("Changed");
          this.router.navigateByUrl('/view-walkins')
        })
    ]);
  }


  updateCoworkingSpace(profiles_uid,profile_uid,cate_uid,categories,category_number,address,price,city,province,amenities,description) {
    this.updateSpaceSuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
        .update({
          uid: profiles_uid,
          workspace_uid:profile_uid,
          categories:categories,
          category_number:category_number,
          address:address,
          city:city,
          province:province,
          amenities:amenities,
          price:price,
          description:description
        }).then(a => {
          console.log("Changed")
        })
    ]);
  }
  deleteSpace(profiles_uid, profile_uid, cate_uid) {
    this.deleteSpaceSuccess();
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
        .delete().then(a => {
          console.log("Changed")
        })
    ]);
  }


  reservation(uid, name, surname, phone, checkin, checkout, timein, timeout, spaceBooked, usertype) {
    var citiesRef = firebase.firestore().collection('profiles')
    var hotel = Promise.all([
      citiesRef.doc("8j3w4lEbm3OBxgQYVNGQmN1YU292").collection("bookings").add({
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
      }).then((res) => {

      })
    ]);
  }




  readOrNot(profiles_uid,profile_uid,space_uid,reserv_uid,read:boolean) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid)
               .collection("space").doc(space_uid)
               .collection("reservation").doc(reserv_uid)
        .set({
          read:true
        },{ merge: true }).then(a => {
          console.log("Changed")
        })
    ]);
  }
///////////////////////////////////////////////////////////////////
//////////////////////////Get Workspace Uid///////////////////////
setWorkSpaceUID(uid){
  this.workspace_uid =uid;
}
getWorkSpaceUID(){
 return this.workspace_uid ;
  }
  
   async addSpacesuccess() { 
  const alert = await this.alertCtrl.create({ 
    header: 'Successful', 
       message: 'Your space was added successfully, Click Okay to go Home',
      buttons: [
        {
          text: 'Okay',
          handler: async () => {
            this.router.navigateByUrl('/owner-landing');
          }
          
        },
      ]
    }); 
    await alert.present(); 
    
    
    
  }
  async addSpace() {
    const loader = await this.loadingCtrl.create({
      message: 'Uploading Space',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your space was added successfully, Click Okay to go Home`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/owner-landing');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
  async addSpaceerror() { 
  const alert = await this.alertCtrl.create({ 
    header: 'Successful', 
       message: 'Something went wrong while adding your space, Please try again.',
      buttons: [
        {
          text: 'Okay',
          handler: async () => {
            this.router.navigateByUrl('/add-space');
          }
          
        },
      ]
    }); 
    await alert.present(); 
    
    
    
  }
   async uploadSpaceSuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Updating profile',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your profile was updated successfully, Click Okay to view you profile`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/profile');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
  
    async updateSpaceError() { 
  const alert = await this.alertCtrl.create({ 
    header: 'Successful', 
       message: 'Your space was added successfully, Click Okay to go Home',
      buttons: [
        {
          text: 'Okay',
          handler: async () => {
            this.router.navigateByUrl('/owner-landing');
          }
          
        },
      ]
    }); 
    await alert.present(); 
    
    
    
  }
  
    async uploadProfilepicSuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Updating Profile picture',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your Profile picture was updated successfully, Click Okay to view you profile`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/profile');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
    async uploadSpacepicSuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Updating Space Profile pic',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your space profile picture was updated successfully, Click Okay to view you profile`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/add-space');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }

    async uploadgallerySuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Creating Gallery',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your gallery picture was added successfully`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/add-space');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
  
  
    async updateSpaceSuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Updating Space',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your space was updated successfully`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/home');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
  
    async deleteSpaceSuccess() {
    const loader = await this.loadingCtrl.create({
      message: 'Deleting',
      duration: 2000,
    }).then((res) => {
      res.present()
      res.onDidDismiss().then(async (dis) => {
        console.log('Loading dismissed after 2 seconds', dis)
        const alert = await this.alertCtrl.create({
          message: `Your space was deleted successfully`,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.router.navigateByUrl('/owner-landing');
              }
            }
          ]

        });
        return await alert.present();
      })
    });
  }
}
