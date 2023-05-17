import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/api/models/user';
import { ApiService } from 'src/app/api/services';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private readonly apiService = inject(ApiService)
  private readonly dialog = inject(MatDialog)

  dataSource: User[] = [];

  displayedColumns = ['id', 'firstname', 'lastname', 'email', 'birthDate', 'actions']

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.apiService.usersGet().subscribe((users) => {
      this.dataSource = users
    })
  }

  createUser(){
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {user: undefined},
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe((user) => {
      this.apiService.usersPost({body: user}).subscribe(() => this.getUsers())
    });
  }

  updateUser(user: User){
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {user},
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe((userUpdated) => {
      this.apiService.usersUserIdPut({userId: user.id, body: userUpdated}).subscribe(() => this.getUsers())
    });
  }

  deleteUser(id: number): void{
    this.apiService.usersUserIdDelete({userId: id}).subscribe(() => this.getUsers())
  }
}
