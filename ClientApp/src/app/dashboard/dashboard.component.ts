import { CreateMeetingDialogComponent } from "./create-meeting-dialog/create-meeting-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ServerService } from "../shared/services/server.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  createMeetingUrl = "Meeting/Create";
  getMeetingListUrl = "Meeting/GetMeetingList";
  joinUrl = "Meeting/Join";
  endUrl = "Meeting/End";

  meetingList: any = [];
  displayedColumns: string[] = [
    "meetingID",
    "meetingName",
    "createDate",
    "actions",
  ];
  createMeetingOptions: any;

  constructor(private http: ServerService, public dialog: MatDialog) {
    this.getMeetingList();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  createMeetingClick() {
    this.openDialog();
  }

  createMeeting(model: any) {
    this.http.post(this.createMeetingUrl, model).subscribe(
      (data: any) => {
        console.log("createMeeting", data);
        if (data.meetingID !== "") alert("جلسه با موفقیت ساخته شد.");

        this.getMeetingList();
      },
      (err) => {
        console.log(err);
        alert(err.error.message);

        this.getMeetingList();
      }
    );
  }

  getMeetingList() {
    this.http.get(this.getMeetingListUrl).subscribe((data: any) => {
      console.log(data.meetings);
      this.meetingList = data.meetings;
    });
  }

  endMeeting(row: any) {
    console.log("endMeeting", row);
    this.http
      .post(
        this.endUrl +
          "?meetingID=" +
          row.meetingID +
          "&role=1" +
          "&pass=" +
          row.moderatorPW +
          "&token=0"
      )
      .subscribe((data: any) => {
        this.getMeetingList();
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateMeetingDialogComponent, {
      width: "500px",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("The dialog was closed", result);
        this.createMeetingOptions = result;
        this.createMeeting(this.createMeetingOptions);
      }
    });
  }

  joinAsModerator(row: any) {
    this.http
      .post(
        this.joinUrl +
          "?meetingID=" +
          row.meetingID +
          "&role=1" +
          "&pass=" +
          row.moderatorPW +
          "&token=0"
      )
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.url) window.open(data.url.url, "_blank");
      });
  }

  joinAsAttendee(row: any) {
    this.http
      .post(
        this.joinUrl +
          "?meetingID=" +
          row.meetingID +
          "&role=0" +
          "&pass=" +
          row.attendeePW +
          "&token=0"
      )
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.url) window.open(data.url.url, "_blank");
      });
  }
}
