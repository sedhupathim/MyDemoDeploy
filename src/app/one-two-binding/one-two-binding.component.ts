import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-two-binding',
  templateUrl: './one-two-binding.component.html',
  styleUrls: ['./one-two-binding.component.css']
})
export class OneTwoBindingComponent implements OnInit {

  constructor() { }
  name = "";
  enableClick = false;
 

  onInput(event){

    console.log(event.target.value);
    if(event.target.value!=''){
      this.enableClick = true;
    }
    else{
      this.enableClick = false;
    }
    
  }


submit(){
// document.getElementsByClassName('btn').value= '';
 this.name ='';
 this.enableClick = false;
}
  


  ngOnInit() {
  }

}
