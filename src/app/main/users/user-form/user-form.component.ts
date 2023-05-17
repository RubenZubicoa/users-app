import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/api/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public user: User = {
    id: Math.trunc(Math.random() * 100),
    firstname: '',
    address: {id: Math.trunc(Math.random() * 100)},
    birthDate: '',
    email: '',
    lastname: ''
  }

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {user?: User},
  ){

  }
  ngOnInit(): void {
    if (this.data.user !== undefined){
      this.user = this.data.user
    }
  }

  close(){
    this.dialogRef.close(this.user);
  }


}
