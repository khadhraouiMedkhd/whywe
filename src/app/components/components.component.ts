import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: []
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2,private router: Router) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }
   
    ngOnInit() {
        // this.startCounter();
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
    public  openTargetComponent() {
        this.router.navigate(['/recipientf']);
      }
    public  openSponsorComponent() {
        this.router.navigate(['/sponsorf']);
      }  
        public  openSponsorCreateForm() {
        this.router.navigate(['/sponsorcreateform']);
      }
      startCounter(): void {
        const counterElement = document.getElementById('counter');
        
        if (counterElement) {   
            // Parse the target value from the data attribute
            const target = parseInt(counterElement.getAttribute('data-target') || '0', 10);
            let counter = 0;
    
            // Check for valid target
            if (isNaN(target)) {
                console.error("Invalid target value");
                return;
            }
    
            // Increment counter and update text content
            const interval = setInterval(() => {
                counter++;
                counterElement.textContent = counter.toString();
    
                if (counter === target) {
                    clearInterval(interval);
                }
            }, 50); // Adjust the interval speed as needed
        } else {
            console.error("Counter element not found");
        }
    }
    
}
    