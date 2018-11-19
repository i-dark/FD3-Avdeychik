import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sprite';
  spriteUrl = 'http://fe.it-academy.by/Examples/cards2.png';
  spriteOffsetx = 140;
  spriteOffsety = 0;

  imgClicked($ev) {
    this.spriteOffsetx += 143;
    console.log(this.spriteOffsetx);
  }

}
