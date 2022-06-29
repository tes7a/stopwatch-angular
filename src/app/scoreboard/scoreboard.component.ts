import {Component, OnInit} from "@angular/core";
import {interval, timer} from 'rxjs';
import {BtnNameConstants} from "./btn-name.constants";

interface Timer {
  seconds: number;
  minutes: number;
  running: boolean;
  clickCount: number;
}

@Component({
  selector: "app-scoreboard",
  templateUrl: "./scoreboard.component.html",
  styleUrls: ["./scoreboard.component.scss"]
})

export class ScoreboardComponent implements OnInit {
  readonly BtnNameConstants = BtnNameConstants;

  timerValues: Timer = {
    seconds: 0,
    minutes: 0,
    running: false,
    clickCount: 0
  };

  ngOnInit(): void {
    interval(1000)
      .subscribe(() => {
        if (this.timerValues.running) {
          this.incrementTimer();
        }
      })
  }

  startButtonClickHandler(): void {
    this.timerValues.running = true;
  }

  stopButtonClickHandler(): void {
    this.stopTimer();
    this.reset();
  }

  waitButtonClickHandler(): void {
    if (!this.timerValues.clickCount) {
      this.waitTimeoutHandle();
    }
    this.timerValues.clickCount++;
  }

  resetButtonClickHandler(): void {
    this.reset();
  }

  private reset(): void {
    this.timerValues.minutes = 0;
    this.timerValues.seconds = 0;
  }

  private waitTimeoutHandle(): void {
    timer(500)
      .subscribe(() => {
        if (this.timerValues.clickCount === 2) {
          this.stopTimer();
        }
        this.timerValues.clickCount = 0;
      })
  }

  private incrementTimer(): void {
    this.timerValues.seconds++;
    if (this.timerValues.seconds === 60) {
      this.timerValues.minutes++;
      this.timerValues.seconds = 0;
    }
  }

  private stopTimer(): void {
    this.timerValues.running = false;
  }
}
