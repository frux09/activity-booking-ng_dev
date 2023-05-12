import { Component } from '@angular/core';
import { ActivitiesService } from '../data/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  publishedActivities: Activity[] = [];
  private sortOrder: number = 1;

  constructor(private activitiesService: ActivitiesService) {
    this.publishedActivities = activitiesService.getPublishedActivities();
  }

  onSort() {
    this.sortOrder = this.sortOrder * -1;
    this.sortActivities();
  }

  private sortActivities() {
    this.activitiesService.sortByPrice(
      this.publishedActivities,
      this.sortOrder
    );
  }
}
