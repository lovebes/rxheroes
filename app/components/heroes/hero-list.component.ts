import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rx-hero-list',
    template: `
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect.emit(hero)" [class.selected]="hero === selectedHero">
                <span class="hero-element">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </span>
                <button class="delete-button" (click)="delete($event, hero)">Delete</button>
            </li>
        </ul>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
        button {
            font-family: Arial;
            background-color: #eee;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            cursor: hand;
        }
        button:hover {
            background-color: #cfd8dc;
        }
        button.delete-button {
            float: right;
            background-color: gray !important;
            color: white;
        }
    `]
})
export class HeroList {
    @Input() heroes;
    @Input() selectedHero;

    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    delete($event, hero) {
        $event.stopPropagation();
        this.onDelete.emit(hero);
    }
}