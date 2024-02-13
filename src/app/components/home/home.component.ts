import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}
  movies = [
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
    { title: 'Inception', poster: 'https://picsum.photos/100' },
  ];

  ngOnInit(): void {}

  addFavorite(movie: any) {
    // Adicionar lógica para adicionar filme aos favoritos
    console.log('Added to favorites:', movie.title);
  }

  onResize(event: any) {
    // Adicionar lógica para ajustar o número de colunas com base no tamanho da janela
  }
}
