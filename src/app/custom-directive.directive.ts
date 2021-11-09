import { Directive,Input,OnInit,ElementRef,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  @Input()defaultColor :string = 'transparent';
  @Input()highlightColor :string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  
constructor(
  private elementref:ElementRef,
  private render:Renderer2
  ) { }
 
ngOnInit(){
    // this.elementref.nativeElement.style.marginLeft  = '20px';
   this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseover')mouseover(event:Event){
    console.log(event)
    // this.render.setStyle(this.elementref.nativeElement,'background-color','red'); 
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')mouseleave(){
    // this.render.setStyle(this.elementref.nativeElement,'background-color','blue'); 
    this.backgroundColor = "red";
  }
  @HostListener('keyup')click(){
    this.render.setStyle(this.elementref.nativeElement,'background-color','green'); 

  }

}
