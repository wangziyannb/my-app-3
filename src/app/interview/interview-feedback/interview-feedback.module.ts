import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewFeedbackRoutingModule } from './interview-feedback-routing.module';
import { AddInterviewFeedbackComponent } from './add-interview-feedback/add-interview-feedback.component';
import { GetInterviewFeedbackComponent } from './get-interview-feedback/get-interview-feedback.component';
import { ListInterviewFeedbackComponent } from './list-interview-feedback/list-interview-feedback.component';
import { DeleteInterviewFeedbackComponent } from './delete-interview-feedback/delete-interview-feedback.component';
import { UpdateInterviewFeedbackComponent } from './update-interview-feedback/update-interview-feedback.component';


@NgModule({
  declarations: [
    AddInterviewFeedbackComponent,
    GetInterviewFeedbackComponent,
    ListInterviewFeedbackComponent,
    DeleteInterviewFeedbackComponent,
    UpdateInterviewFeedbackComponent
  ],
  imports: [
    CommonModule,
    InterviewFeedbackRoutingModule
  ]
})
export class InterviewFeedbackModule { }
