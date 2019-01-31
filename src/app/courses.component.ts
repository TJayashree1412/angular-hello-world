import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent{
    title = "List of courses";
    getTitle(){
        return this.title;
    }
}