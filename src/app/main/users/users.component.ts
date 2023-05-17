import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { User } from 'src/app/api/models/user';
import { ApiService } from 'src/app/api/services';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private readonly apiService = inject(ApiService)
  private readonly dialog = inject(MatDialog)
  private readonly usersService = inject(UsersService)

  dataSource = new MatTableDataSource();

  displayedColumns = ['id', 'firstname', 'lastname', 'email', 'birthDate', 'actions']

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.usersService.getUsers().subscribe((users) => {
      this.dataSource.data = users
    })
  }

  createUser(){
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {user: undefined},
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe((user) => {
      this.usersService.createUser(user).subscribe(() => this.getUsers())
    });
  }

  updateUser(user: User){
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {user},
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe((userUpdated) => {
      this.usersService.updateUser(user.id, userUpdated).subscribe(() => this.getUsers())
    });
  }

  deleteUser(id: number): void{
    this.usersService.deleteUser(id).subscribe(() => this.getUsers())
  }
}
