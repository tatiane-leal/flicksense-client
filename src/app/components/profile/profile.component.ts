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
import { CurrentUser } from '../../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { Movie } from '../../../models/movie.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDialogComponent } from '../dialog/review-dialog.component';

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
    MatTooltipModule,
  ],
  templateUrl: './profile.component.html',
  providers: [ApiService, AuthService],
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userID: string | null = '';
  profile: any = {};
  currentUser!: CurrentUser | null;
  userMovies$!: Observable<Movie[]>;
  sentimentResult: { [key: number]: any } = {};

  constructor(
    private _apiService: ApiService,
    private _authService: AuthService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._authService.currentUser.subscribe((currentUser) => {
      this.currentUser = currentUser;
      console.log('profile', this.currentUser);
    });

    this.userMovies$ = this._apiService.getUserMovies(
      this.currentUser?.UserInfo?.id
    );
  }

  fallbackImage(event: any, movie: any): void {
    const backdropUrl = movie.backdrop_path
      ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
      : null;
    if (backdropUrl) {
      event.target.src = backdropUrl;
    } else {
      event.target.src =
        'https://fastly.picsum.photos/id/299/160/250.jpg?hmac=aODh_nRRY3uV6gUfmbkzbuovqDnsinL1tA9b5fs0JKA';
    }
  }

  shouldShowEllipsis(movieTitle: string) {
    return movieTitle.length > 16;
  }

  addMovieReview(movie: Movie): void {
    const dialogRef = this._dialog.open(ReviewDialogComponent, {
      width: '400px',
      height: '280px',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: { movieName: movie.title, movieId: movie.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.sentimentResult[movie.id] = result.sentiment;
        console.log(this.sentimentResult);
        this.userMovies$ = this._apiService.updateMovieSentiment(
          this.currentUser?.UserInfo?.id,
          movie.id,
          this.sentimentResult[movie.id]
        );
      }
    });
  }
}
