import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list-element',
  templateUrl: './link-list-element.component.html',
  styleUrls: ['./link-list-element.component.scss']
})
export class LinkListElementComponent implements OnInit {

  @Input() website_name: string;
  @Input() icon: string;
  @Input() address: string;

  private formated_website_name: string;

  constructor() { }

  ngOnInit() {
    this.formated_website_name = this.website_name;
    if (this.website_name.includes('https://')) {
      this.formated_website_name = this.website_name.replace('https://', '');
    }
    if (this.website_name.includes('http://')) {
      this.formated_website_name = this.website_name.replace('http://', '');
    }
    if (this.formated_website_name.includes('www.')) {
      this.formated_website_name = this.formated_website_name.replace('www.', '');
    }
    if (this.formated_website_name.endsWith('/')) {
      this.formated_website_name = this.formated_website_name.slice(0, -1);
    }
  }
}
