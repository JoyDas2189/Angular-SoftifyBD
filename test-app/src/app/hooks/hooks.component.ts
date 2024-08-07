import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css',
})
export class HooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() demoValue: string = 'Joy';

  constructor() {
    console.log('constructor called!!');
  }

  ngOnInit(): void {
    //Called once after the first ngOnChanges(). Ideal for component initialization.
    console.log('ngOnInit Called!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //angular app runs for the first time and also the each time property value changes..
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngDoCheck(): void {
    //get called everytime the change detection cycle runs..
    //Whenever an event occurs angular will run the change detection cycle..
    console.log('ngDoCheck Called!!');
  }

  ngAfterContentInit(): void {
    //gets called when component projected content has been fully initialized..
    console.log('ngAfterContentInit Called!!');
  }

  ngAfterContentChecked(): void {
    //gets called whenever projected content changes..
    console.log('ngAfterContentChecked Called!!');
  }

  ngAfterViewInit(): void {
    //gets called whenever component view and all it's child views ase fully initialized..
    console.log('ngAfterViewInit Called!!');
  }

  ngAfterViewChecked(): void {
    //get called for each change detection cycle..
    console.log('ngAfterviewChecked Called!!');
  }

  ngOnDestroy(): void {
    //Called before the instance is destroyed.
    console.log('ngOnDestroy Called!!');
  }
}
