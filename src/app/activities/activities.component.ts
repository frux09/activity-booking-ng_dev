import { Component } from '@angular/core';
import { Activity } from '../data/activity.type';
import { ActivitiesService } from '../data/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  allActivities: Activity[] = []; // this.activitiesService.getAllActivities();

  constructor(private activitiesService: ActivitiesService) {
    // this.allActivities = activitiesService.getAllActivities();
  }

  ngOnInit(): void {
    this.allActivities = this.activitiesService.getAllActivities();
  }
}
