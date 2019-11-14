import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private authSvc: AuthService) { }

  ngOnInit() {}

  onSignUp(f: NgForm){
    console.log(f.value);
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp=>{
      console.log(resp);
      this.modalCtrl.dismiss();
    });
  }
  onCancel() {
    this.modalCtrl.dismiss();
  }
}
