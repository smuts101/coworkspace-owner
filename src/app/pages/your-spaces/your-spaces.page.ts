import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


import { ModalController } from '@ionic/angular';
import { OwnerServiceService } from 'src/app/services/owner.service';

import {  PopoverController } from '@ionic/angular';
import { MassegesPage } from 'src/app/feedback/masseges/masseges.page';
import {  LoadingController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-your-spaces',
  templateUrl: './your-spaces.page.html',
  styleUrls: ['./your-spaces.page.scss'],
})
export class YourSpacesPage implements OnInit {
 imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;
profileUid:any
  ////update coworking space///
  viewSpace = 0; 
  spaces:any=[]
  spacesT:any=[]
  spacesTT: any = []
  ret_arr: any[];
  ret_array: any = [];
  array:any=[]
    constructor(private popover:PopoverController,private formBuilder:FormBuilder,public ownerservice:OwnerServiceService,public account:SignInSignUpService,public loadingCtrl: LoadingController, private router: Router,private alertCtrl: AlertController) { 
    
    firebase.firestore().collection("profiles")
                        .doc(this.account.getUserSession())
                        .collection("profile")
                        .where("uid","==",this.account.getUserSession())
.get()
.then(doc => {

    doc.forEach(dat=>{
      // console.log("hh"+dat.id) 
      this.profileUid=dat.id;
      this.workingSpaces();
    })
})
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
   ionViewWillEnter(){
    location.reload();
    console.log("we are entering the owner page");
    window.stop();
}
  ionViewDidEnter() {
    location.reload();
    console.log("owner page reloaded!");
   window.stop();
    console.log(this.account.getUserSession());
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("profile").doc(this.profileUid).collection("space")
    .where("uid","==",this.account.getUserSession())
    .get()
    .then(snap => {

      snap.forEach(doc => {
        
    
      // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );
     this.array.push(doc.data().categories );
     this.ownerservice.setWorkSpaceUID(doc.data().workspace_uid)
  
  //  this.spaces.push(this.remove_duplicates(array))  

  this.unique(this.array)
 console.log(this.returnUniq()) 

      });
    });
    // location.reload();
    console.log("ionViewDidEnter");
    // window.stop();

    
}
  ngOnInit() {
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
    //  this.viewSpace =1;
    this.array = [];
    // this.workingSpaces();
  }

  returnHome(){
    this.router.navigateByUrl('/owner-landing');
  }


}
