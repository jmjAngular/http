import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import {HEROES} from '../heroes/mock-heroes';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor() {    }

    ngOnInit() {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroes =  HEROES.slice(1, 4);
    }
}