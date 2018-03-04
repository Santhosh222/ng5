import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject(["First goal", "Second goal"]);
  goalObs = this.goals.asObservable();

  constructor() { }

  changeGoal(goalList){
    this.goals.next(goalList);
  }
}
