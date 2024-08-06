import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userProfile: string = "../assets/luffy.jpg";
  userName: string = 'Monkye D. Luffy';
  userAge: number = 19;
  userEmail: string = 'nika@gmail.com';
  userRole: string = 'Future Pirate King';
  userExperience: string = "2 years";
}
