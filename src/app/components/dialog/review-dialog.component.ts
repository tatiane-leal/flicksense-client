import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-review-dialog',
  standalone: true,
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ReviewDialogComponent {
  userReview: string = '';
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    private _apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  analyzeAndClose(): void {
    this.isLoading = true;
    this._apiService.getMovieReviewAnalysis(this.userReview).subscribe({
      next: (analysisResult) => {
        this.isLoading = false;
        this.dialogRef.close(analysisResult);
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        this.dialogRef.close();
      },
    });
  }
}
