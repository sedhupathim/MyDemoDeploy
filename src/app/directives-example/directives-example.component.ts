import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {

  constructor() { }

  secretPassword : boolean = false;
  displayArray = [];
  changeColor = false;
  number = 10;
  arg1 = 1;
  arg2 =2;
  
  myFiles:string [] = [];
  sMsg:string = '';

  ngOnInit() {
  } 

  toggle(){
    this.secretPassword = !this.secretPassword ;
    let i ;
    this.displayArray.push(this.displayArray.length+1);

  }

  onBlur(){
    this.changeColor = !this.changeColor ;

  }




  getFileDetails (e) {

    console.log(e)
    console.log (e.target.files.length);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }


}
