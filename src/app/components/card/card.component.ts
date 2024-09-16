import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/personaje-service.service';
import { Character } from '../../interface/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  characters: Character[] = [];

  constructor(private charactersService: ApiService) { }

  ngOnInit(): void {
    this.charactersService.getUsers().subscribe({
      next: (response: { results: Character[] }) => {
        this.characters = response.results;
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
      }
    });
  }

}
