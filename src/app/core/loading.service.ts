import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  visible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }
}