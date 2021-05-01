import { CompileShallowModuleMetadata } from '@angular/compiler';
import { 
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {
  @Input() element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef

  constructor() {  
    console.log("CONSTRUCTER called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called" , changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
    console.log('Text Content Of Paragraph  :', this.paragraph.nativeElement.textContent)
    console.log('Text Content: ',this.header.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterContentInit() {
    console.log('Text Content Of Paragraph  :', this.paragraph.nativeElement.textContent)
    console.log('ngAfterContentInit called!');
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked called!');
  }

  ngAfterViewInit () {
    console.log('ngAfterViewChecked called!');
    console.log('Text Contnet : ',this.header.nativeElement.textContent)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
