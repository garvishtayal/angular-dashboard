import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ChildComponent } from '../child/child.component';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgClass, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  allUsers: any[] = [];
  users: any[] = [];
  showPopup: boolean = false;
  selectedUser: any = {}
  blurBackground: boolean = false;
  popupState: string = 'add';
  totalPages: number = 2;
  currentPage: number = 1;

  testuser = {
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: {
      city : 'New York'
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService
    ) {}


    ngOnInit() {
      this.loadUsers();
    }
  
    loadUsers() {
      this.dataService.getUsers().subscribe(
        (response) => {
          this.allUsers = response;
          this.totalPages = Math.ceil(response.length / 8);
          this.users = this.allUsers.slice(0, 8);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  
    deleteUser(userId: number) {
      this.dataService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== userId);
          this.allUsers = this.allUsers.filter(user => user.id !== userId);
          this.toastr.error(`User with id: ${userId} deleted`);
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  
    addUser(newUser: any) {
      this.dataService.createUser(newUser).subscribe(
        (response) => {
          if(this.currentPage==this.totalPages) {
            this.users.push(response)
          }
          this.allUsers.push(response);
          this.toastr.success(`User: ${newUser.name} added successfully`);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  
    updateUser(userId: number, updatedUser: any) {
      this.dataService.updateUser(userId, updatedUser).subscribe(
        () => {
          const index = this.users.findIndex(user => user.id === userId);
          if (index !== -1) {
            this.users[index] = updatedUser;
            this.allUsers[index]=updatedUser;
            console.log(this.allUsers)
            this.toastr.success(`User updated successfully`);
          }
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }

    //pop-up state manage
    newUser() {
      this.popupState = 'add';
      this.showPopup = true;
      this.blurBackground = true;
    }
    editUser(user: any) {
      this.popupState = 'edit';
      this.selectedUser = user;
      this.showPopup = true;
      this.blurBackground = true;
    }
    closePopup() {
      this.showPopup = false;
      this.blurBackground = false;
    }


    //paging
    getPageNumbers(totalPages: number): number[] {
      const numbers = [];
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    }
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.users = this.allUsers.slice((this.currentPage - 1) * 8, this.currentPage * 8);
      }
    }
  
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.users = this.allUsers.slice((this.currentPage - 1) * 8, this.currentPage * 8);
      }
    }
  
    // Function to set CSS class based on current page
    isActive(page: number): boolean {
      return page === this.currentPage;
    }
    
}
