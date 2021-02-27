import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
// import { join } from 'path';
// import { data } from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  array: any;
  profile: any;
  profileUid: string;
  ret_array:any = [];
  viewSpace = 0; 
  constructor(public ownerservice:OwnerServiceService,public account:SignInSignUpService,public loadingCtrl: LoadingController) {
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
    
   }


 ionViewWillEnter(){
    // console.log("ionViewWillEnter")
    // for(let i = 0; i < 100000; i++){
    //   console.log(i);
    // }
    // window.location.reload();
    //       window.stop();
   console.log("we are entering the profile page");
}
  ionViewDidEnter() {
    firebase.firestore().collectionGroup("profile").where("uid", "==", this.account.getUserSession())
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.profile = doc.data();
       
          // this.array.push(doc.data());
          this.profileUid= doc.id;
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
  
   workingSpaces(){
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("profile").doc(this.profileUid).collection("space")
    .where("uid","==",this.account.getUserSession())
    .get()
    .then(snap => {

      snap.forEach(doc => {
        var array:any=[]
    
      // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );
     array.push(doc.data().categories );
     this.ownerservice.setWorkSpaceUID(doc.data().workspace_uid)
  
  //  this.spaces.push(this.remove_duplicates(array))  

  this.unique(array)
 console.log(this.returnUniq()) 

      });
    });
   
  }
  unique(array){
    for(var i in array){
      if(this.ret_array.indexOf(array[i]) === -1){
        this.ret_array.push(array[i]);
        // console.log(this.ret_array) 
      }
  }
}

returnUniq(){
  return this.ret_array;
}
view(){
  this.viewSpace =1;
  this.workingSpaces()
}
  ngOnInit() {
    location.reload();
    console.log('refreshed page');
    window.stop();
  }
 async reload() {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait...',
        duration: 3000
      });

      await loading.present();
    }
}
