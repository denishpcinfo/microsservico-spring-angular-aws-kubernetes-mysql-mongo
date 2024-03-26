import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public tableItem: any;

  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];

  constructor( 
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getAllUSersPage();
  }


  getAllUSersPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.userService.getAll(params)
      .subscribe({
        next: (data) => {
          console.log(data)
          const { allUsuarios, totalItems } = data;
          this.tableItem = allUsuarios;
          this.count = totalItems;
          console.log("this.tableItem")
          console.log(this.tableItem)
        
        }
      });
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllUSersPage();
  }
}
