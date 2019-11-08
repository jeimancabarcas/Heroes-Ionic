import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DashboardComponent} from '../Components/dashboard/dashboard.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: DashboardComponent },
        ])
  ],
  declarations: [
      DashboardComponent
  ]
})
export class Tab1PageModule {}
