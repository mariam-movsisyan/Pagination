import { Component } from '@angular/core';
import { USERS } from './database';
import { pageItemCount } from './globals/globals';
import { IUser } from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination';
  private users: IUser[] = USERS;
  public showUsers!: IUser[];
  private filterUsers!: IUser[];
  public pages: number[] = [];
  public activePage: number = 1;

  constructor(){
    this.filterUsers = this.users;
    this.showUsers = this.filterUsers;
    this.generatePagination();
    this.setData();
  }
  onsearch(search: string){
    this.filterUsers = this.users.filter(element => (element.lastName.toLowerCase().includes(search.toLowerCase()) ||
    element.firstName.toLowerCase().includes(search.toLowerCase()) ||  
    element.email.toLowerCase().includes(search.toLowerCase()) || 
    element.address.city.toLowerCase().includes(search.toLowerCase()) || 
    element.phone.includes(search) || element.age === Number(search)))
    this.showUsers = this.filterUsers;
    this.activePage = 1;
    this.setData();
    this.generatePagination()
  }

  generatePagination(){
    this.pages = []
    const maxPage = Math.ceil(this.filterUsers.length / pageItemCount);
    for(let i = 1; i <= maxPage; i++){
      this.pages.push(i);
    }
    this.setData();

  }

  public onClickActivePage(page: number): void{
    this.activePage = page;
    this.setData();
  }

  public setData(){
    const data = this.filterUsers.slice((this.activePage - 1) * pageItemCount, this.activePage * pageItemCount);
    this.showUsers = data
    window.scrollTo(0, 0);
  }
}
