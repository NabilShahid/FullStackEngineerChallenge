  import { Component, OnInit, Input,Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-reviews-list",
  templateUrl: "./reviews-list.component.html",
  styleUrls: ["./reviews-list.component.css"]
})
export class ReviewsListComponent implements OnInit {
  data = [];
  @Input() adminMode: boolean = false;
  ngOnInit(): void {
    this.loadData(1);
  }
  @Output() submitFeedback=new EventEmitter();

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: "http://ant.design",
        title: `ant design part ${index} (page: ${pi})`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        jobTitle: "Job Title",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources " +
          "(Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
      };
    });
  }
}
