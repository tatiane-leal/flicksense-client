import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatCardModule, 
    MatGridListModule,
  ],
  templateUrl: './profile.component.html',
  providers: [ApiService],
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userID: string | null = '';
  profile: any = {};

  movies = [
    { title: 'Movie 1', year: '2021', image: 'https://picsum.photos/200' },
    { title: 'Movie 2', year: '2022', image: 'https://picsum.photos/200' },
    // ... add more movies here
  ];

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
      console.log('profile user id is: ', this.userID);
    });

    this._apiService.getUserProfile(this.userID).subscribe({
      next: (response) => {
        console.log('profile response: ', response);
        this.profile = response;
      },
      error: (error) => {
        console.error('profile error: ', error);
      },
    });
  }
}
