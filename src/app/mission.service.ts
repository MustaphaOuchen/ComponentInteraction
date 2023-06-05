import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/*
Sixth, imo most complicated example,

A parent component and its children 
share a service whose interface enables bidirectional 
communication within the family.

Components outside this component subtree have 
no access to the service or their communications.

*/
@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut); //emitting
  }
}
