import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { from } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { SignInSignUpService} from '../../sign-in-sign-up.service';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  db = firebase.firestore()
  Uid: any
  emailOwner: any;
   email: any;
  uid: any;
  // UID:any;
  status: boolean;
  onboardingStatus: boolean = false;
  group: any;
  _error: any;
 constructor(private router: Router, public route: ActivatedRoute, public alertCtrl: AlertController,public loadingCtrl: LoadingController, public account: SignInSignUpService) { }

  ngOnInit() {
    // this.addstatus();
    // this.checkExistance(this.account.getUserSession());
  }
  
 
  
  // async addstatus() {
  //   const loading = await this.loadingCtrl.create();
  //   var user = firebase.auth().currentUser;
  //   // this.Uid = user.uid;
  //   // Adding new menu
  //   this.account.reserve().doc(this.account.getUserSession()).collection('profile').add({
  //     // uid: this.uid,
  //     onboardingStatus: this.onboardingStatus = true,
     
  //   }).then(() => {
  //     loading.dismiss().then(() => {
  //       // this.router.navigateByUrl('/rest-home')
        
  //     });
  //   },
  //     error => {
  //       loading.dismiss().then(() => {
  //         console.log(error);
  //       });
  //     }
  //   );
  //   return await loading.present();
  // }
  // checkExistance(uid) {
  //     //  var user = firebase.auth().currentUser
  //   this.db.collectionGroup("profile")
  //     .where("uid", "==", (uid))
  //     .get()
  //     .then(snap => {
  //       snap.forEach(doc => {
  //         if (!doc.exists) {
  //           console.log("No such user in the profiles Document!");
  //         } 
  //       if(doc.exists)
  //           if (doc.data().onboardingStatus == true) {
  //             console.log("Owner")
  //             this.status = true;            
  //             console.log("Document data:", doc.data());
  //             console.log("Yeess! looks like you have a business account profile with us");
              
  //             this.router.navigateByUrl('/owner-landing');
  //           } 
  //             else  {
  //             console.log('status:', this.onboardingStatus)
  //             this.router.navigateByUrl('/onboarding');
  //               // this.status = false;
  //             }
          
  //       });
  //       if (this.status != true) {
  //         console.log('status:', this.onboardingStatus)
  //         console.log("please complete Onboarding");
                
  //               this.router.navigateByUrl('/onboarding');
  //       }
        
  //     });
  // }

}
