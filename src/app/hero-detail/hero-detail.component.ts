import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '../heroes/hero';
import {HEROES} from '../heroes/mock-heroes';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() heroInput: Hero;
    heroes = HEROES;

    constructor(private route: ActivatedRoute,
                private location: Location) {
    }


    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.heroInput = HEROES.filter(function (item) {
            return (item.id == id);
        })[0];
    }

    goBack(): void {
        this.location.back();
    }
}
