import { Component, OnInit } from '@angular/core';

declare var CKEDITOR: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  constructor() {
    this.content = '<p>Hello <strong>World !</strong></p>';
  }

  ngOnInit() {
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline( 'inline-editor1' );
  }

}
