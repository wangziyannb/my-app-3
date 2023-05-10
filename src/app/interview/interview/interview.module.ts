import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { GetInterviewComponent } from './get-interview/get-interview.component';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { DeleteInterviewComponent } from './delete-interview/delete-interview.component';
import { UpdateInterviewComponent } from './update-interview/update-interview.component';


@NgModule({
  declarations: [
    AddInterviewComponent,
    GetInterviewComponent,
    ListInterviewComponent,
    DeleteInterviewComponent,
    UpdateInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})
export class InterviewModule { }
