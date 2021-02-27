import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import { BehaviorSubject } from 'rxjs';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.page.html',
  styleUrls: ['./owner-landing.page.scss'],
})
export class OwnerLandingPage implements OnInit {
db =firebase.firestore();
  bookings:any[]=[];
  bookingsHistory:any[]=[]
  // spacesArray: any[] = [];
  spacesArray = new Array();

  // let spaces = []
  spaces = new Array();
  spacesArray1: any;
  spacesArrayfinal = new Array();
  newBookArray:any[]=[];
  oldBookArray:any[]=[];
  oldBookNum: number=0;
  newBookNum:number=0;
  spacesNum:any;
 public cartItemCount = new BehaviorSubject(0);
  constructor(private menu: MenuController,private router: Router,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
  // console.log(this.account.getUserSession())
  //   this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
  //   get()
  //   .then(snap => {
  //     snap.forEach(dat=>{
  //       this.bookings.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
  //     })
  //   })
  
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
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat => {
        this.bookings = [];
        this.bookings.push(Object.assign(dat.data(), { 'reservationuid': dat.id }))
        this.bookings.sort();
      })
    })
    this.spacesArray = []
    this.space();
    this.newReservations();
    this.oldBookings();
    // location.reload();
    console.log("ionViewDidEnter");
    // window.stop();

    
}

  space(){
    this.db.collectionGroup('space').where('uid','==',this.account.getUserSession()).
    get()
    .then(snapshot => {
      snapshot.forEach(dat => {
        this.spacesArray.push(Object.assign(dat.data(), { 'reservationuid': dat.id }))
        this.spacesArray.sort();
        this.spacesNum = this.spacesArray.length;
          console.log(this.spacesArray.length); 
      })
    })
  }

  newReservations(){
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat => {
        this.newBookArray = [];
        this.newBookArray.push(Object.assign(dat.data(), { 'reservationuid': dat.id }));
        this.newBookArray.sort();
        this.newBookNum = this.newBookArray.length;
      })
    })

  }


  history(){
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",true).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat => {
        this.bookingsHistory = [];
        this.bookingsHistory.push(Object.assign(dat.data(), { 'reservationuid': dat.id }))
        this.bookingsHistory.sort();
      })
    })
  }
  oldBookings(){
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",true).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat => {
        this.oldBookArray = [];
        this.oldBookArray.push(Object.assign(dat.data(), { 'reservationuid': dat.id }))
        this.oldBookArray.sort();
        this.oldBookNum = this.oldBookArray.length;
        
      })
    })
  }

  ngOnInit() {
    
  } 

 logout(){
    this.account.logOut();
    this.router.navigateByUrl('signin');
  } 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
