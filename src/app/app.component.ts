import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {INCREMENT, DECREMENT, RESET} from "./counter";

export interface AppState {
  counter: number;
}

@Component({
  selector: 'my-app',
  template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class MyApp {
  public counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = this.store.select('counter');
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
