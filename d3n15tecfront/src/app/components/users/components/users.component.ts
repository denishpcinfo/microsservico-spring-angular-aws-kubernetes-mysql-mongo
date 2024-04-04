import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OverlayPanel } from "primeng/overlaypanel";
import { UserList } from 'src/app/shared/models/user-list.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild('overlayPanel') overlayPanel: OverlayPanel;

  public tableItem: UserList[] = [];
  
  searchString = '';
  filter: any;
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
          const { allUsuarios, totalItems } = data;
          this.tableItem = allUsuarios;
          this.count = totalItems;
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
    params[`sort`] = "firstname";
    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllUSersPage();
  }
}
