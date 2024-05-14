import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() oldUser?: User;
  @Input() state: string = 'add';
  @Output() updateUser = new EventEmitter<any>();
  @Output() addUser = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  UserInput: User = {
    name: '',
    username: '',
    email: '',
    address: {
      city: ''
    }
  };

  constructor(private toastr: ToastrService) { }
  ngOnInit() {
    if (this.oldUser && this.state === 'edit') {
      this.UserInput = { ...this.oldUser };
    }
  }
  cross() {
    this.close.emit();
  }

  submitUpdate() {
    if (this.UserInput.name === '' ||
      this.UserInput.username === '' ||
      this.UserInput.email === '' ||
      this.UserInput.address.city === ''
    ) {
      console.log('Please fill in all fields');
      this.toastr.error('Please fill in all fields');
      return
    }

    if (this.state === 'add') {
      this.addUser.emit(this.UserInput);
    } else {
      this.updateUser.emit(this.UserInput);
    }
    this.cross();
  }
}
