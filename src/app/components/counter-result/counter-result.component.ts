import { Component, Input, AfterViewInit } from '@angular/core';
 
@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.css']
})
export class CounterResultComponent implements AfterViewInit{
  @Input() targetValue: number = 0; // Value to count up to
  @Input() counterId: string = ''; // Dynamic counter ID

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.startCounter();
  }
  startCounter(): void {
    const counterElement = document.getElementById(this.counterId);

    if (counterElement) {
      let counter = 0;

      // Increment counter and update text content
      const interval = setInterval(() => {
        counter++;
        counterElement.textContent = counter.toString();

        if (counter === this.targetValue) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval speed as needed
    } else {
      console.error("Counter element not found");
    }
  }
}
