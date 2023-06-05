import { Component } from '@angular/core';

import { MissionService } from './mission.service';

//Parent

/*
Sixth, imo most complicated example,

A parent component and its children 
share a service whose interface enables bidirectional 
communication within the family.

Components outside this component subtree have 
no access to the service or their communications.

*/

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button type="button" (click)="announce()">Announce mission</button>

    <app-astronaut
      *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </app-astronaut>

    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  
  //this ones will be forwarded to child
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    //parent subscribes to confirmed missions
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`); //getting
      });
  }

  //parent announces a mission
  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
