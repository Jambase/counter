import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scoreForteamA=0;
  scoreForteamB=0;

  constructor(public navCtrl: NavController) {

  }

 teamA(value:number):void{
   this.scoreForteamA += value;

 }
 teamB(value:number):void{
  this.scoreForteamB += value;

}

reset():void{

 this.scoreForteamA=0;
 this.scoreForteamB=0;
 }
 end():void{

  this.navCtrl.push(WinnerPage);

 }
}
