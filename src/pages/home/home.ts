import { ChatPage } from './../chat/chat';
import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;

  constructor(private alertCtrl:AlertController, public navCtrl: NavController) {

  }

    alert(title:string,message:string){
 let alert = this.alertCtrl.create({
      title:title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

signInUser(){
  if(/^[a-zA-Z0-9]+$/.test(this.username)){
    this.navCtrl.push(ChatPage,{
      username:this.username
    })
    
  }else{
    this.alert('Error', 'Invalid username');
  }
}
}
