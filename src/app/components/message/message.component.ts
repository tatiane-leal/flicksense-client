import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../../../models/post.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-message',
  providers: [ApiService],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
})
export class MessageComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getMessages().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
