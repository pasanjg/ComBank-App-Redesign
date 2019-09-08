import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDetailsPage } from './accountDetails';

@NgModule({
  declarations: [
    AccountDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountDetailsPage),
  ],
})
export class AccountDetailsPageModule {}
