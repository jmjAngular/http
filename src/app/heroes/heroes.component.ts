import {Component, OnInit} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {catchError, map, tap} from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    // heroes = HEROES;
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    // selectedHero: Hero;

    // onSelect(heroClicked: Hero): void {
    //     this.selectedHero = heroClicked;
    // }
    private heroesUrl = 'http://127.0.0.1/jo/heros.json';  // URL to web api
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.getHeros();
    }

    getHeros() {
        var heros = this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                catchError(this.handleError('getHeroes', []))
            );
        console.log(heros);
        // return true;

    }
}
