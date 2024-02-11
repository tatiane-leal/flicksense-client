import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID: string | null = '';
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
  
    this._route.paramMap.subscribe(params => {
      this.userID = params.get('id');
      console.log("profile user id is: ", this.userID);
    });
  }
}
