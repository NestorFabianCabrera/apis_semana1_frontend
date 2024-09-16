import { Component, OnInit, Directive, HostListener, ElementRef, Renderer2  } from '@angular/core';
import { ApiService } from './services/personaje-service.service';
import { Character } from './interface/character';
import {Observable} from "rxjs";

@Directive({
  selector: 'appHighlight'
})

export class Hig{
  mouseover: boolean | undefined;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('mouseover') onMouseOver() {
    this.mouseover = true;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseout') onMouseOut() {
    this.mouseover = false;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  characters: Character[] = [];
  constructor(private charactersService: ApiService) { }

  ngOnInit() {

    this.charactersService.getUsers().subscribe({
      next: (response: { results: Character[] }) => {
        this.characters = response.results;
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
      }
    });

    const observable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

    });

    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Observable ready')
    });
  }

  @HostListener('document:click', ['$event'])
  onclick(event: { target: { matches: (arg0: string) => any; }; }) {
    if(event.target.matches('.editor-div')) {
      alert('click to editor div')
    }
  }

  @HostListener('document:mouseover', ['$event'])
  mouseover(event: { target: { matches: (arg0: string) => any; }; }) {
    if(event.target.matches('.editor-div')) {
      alert('hover to editor div')
    }
  }

}


