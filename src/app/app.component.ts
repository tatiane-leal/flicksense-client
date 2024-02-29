import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { CurrentUser } from '../models/user.interface';
import { Observable } from 'rxjs';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-root',
  providers: [ApiService, AuthService, TokenStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MessageComponent,
    RegisterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ClarityModule,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private _apiService: ApiService,
    private _tokenStorageService: TokenStorageService,
    private _router: Router
  ) {}
  ngOnInit(): void {}

  logoutUser(): void {
    console.log('logout user');
    this.authService.logoutUser().subscribe({
      next: () => {
        this._router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  switchToDarkMode(): void {
    console.log('switch to dark mode');
  }
}
