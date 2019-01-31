import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent{
    title = "List of courses";
    courses = ["courses1","courses2","courses3"];
}