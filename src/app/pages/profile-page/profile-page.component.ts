import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: 1234,
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Maple Street',
    phone: '555-6789'
  };

  editMode = false;

  ngOnInit() {
    // TODO: load real user data here
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  save() {
    // TODO: persist changes (e.g. call service or save in localStorage)
    console.log('Saved user:', this.user);
    this.editMode = false;
  }
}
