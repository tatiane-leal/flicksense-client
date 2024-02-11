import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
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
  ],
})
export class AppComponent implements OnInit {
  // constructor(public router: Router) {}
  ngOnInit(): void {}

  // navigateToRegister() {
  //   this.router.navigate(['/register']);
  // }
}
