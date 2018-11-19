import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {

  @Input('url')
  private url: string;

  @Input('offset-x')
  private offsetx: number;

  @Input('offset-y')
  private offsety: number;

  @Input('width')
  private width: number;

  @Input('height')
  private height: number;

  @Output('img-click')
  public imgClick: EventEmitter<void> = new EventEmitter<void>();


  cardStyles = {
    'background': '',
    'background-position': '0px 0px',
    'width': '100px',
    'height': '100px',
  };

  ngOnChanges() {
    this.cardStyles.background = `url(${this.url})`;
    this.cardStyles['background-position'] = `${this.offsetx}px ${this.offsety}px`;
    this.cardStyles.width = this.width + 'px';
    this.cardStyles.height = this.height + 'px';
  }

  constructor() {
  }

}
