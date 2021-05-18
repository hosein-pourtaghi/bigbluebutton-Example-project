import { CreateMeetingRequest, ICreateMeetingRequest } from './meeting-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-create-meeting-dialog',
  templateUrl: './create-meeting-dialog.component.html',
  styleUrls: ['./create-meeting-dialog.component.css']
})
export class CreateMeetingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICreateMeetingRequest
  ) {
   }

  ngOnInit(): void {
    this.data =new CreateMeetingRequest();

  }

  onNoClick(): void {
    this.dialogRef.close();

  }


}
