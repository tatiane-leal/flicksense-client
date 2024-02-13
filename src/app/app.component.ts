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

@Component({
  selector: 'app-root',
  providers: [ApiService],
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
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getUsers().subscribe(users => {
      console.log(users);
    });
  }
}
