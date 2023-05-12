import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/data/activities.service';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.css']
})
export class ActivityNewComponent {
  constructor(private activitiesService: ActivitiesService) {}

  onSubmit() {
    console.log('Form submitted!');
    // this.activitiesService.postActivity();
  }
}
