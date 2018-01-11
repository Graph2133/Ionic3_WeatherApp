import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';


@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  statusExpanded: boolean = false;
  @ViewChild("cardContent") cardContent: any;
  @Input('title') title: string;

  icon: string = "md-arrow-round-forward";
  constructor(public renderer: Renderer) {

  }
  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, 'webkitTransition',
      'max-height 500ms , padding 500ms');
  }
  toggleAccordion() {
    if (this.statusExpanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '0px');
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'padding', '0px 16px');
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height', '5000px');
      this.renderer.setElementStyle(this.cardContent.nativeElement, 'padding', '13px 16px');
    }
    this.statusExpanded = !this.statusExpanded;
    this.icon = this.icon == "md-arrow-round-forward" ? "md-arrow-round-down" : "md-arrow-round-forward";
  }
}
