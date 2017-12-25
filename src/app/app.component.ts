import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'ng2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('rangeInput') rangeInput: ElementRef;
  @ViewChild('ArcSize') arcSize: ElementRef;
  @ViewChild('ArcGap') arcGap: ElementRef;
  @ViewChild('selectBackground') selectBackground: ElementRef;
  @ViewChild('selectFill') selectFill: ElementRef;
  @ViewChild('strokeWidth') strokeWidth: ElementRef;

  progressValue: number;
  arcSizeValue: number;
  arcGapValue: number;
  arcBackgroundColor: string;
  arcFillColor: string;
  arcStrokeWidth: number;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.progressValue = this.rangeInput.nativeElement.value;
    this.arcSizeValue = this.arcSize.nativeElement.value;
    this.arcGapValue = this.arcGap.nativeElement.value;
    this.arcBackgroundColor = this.selectBackground.nativeElement.value;
    this.arcFillColor = this.selectFill.nativeElement.value;
    this.arcStrokeWidth = this.strokeWidth.nativeElement.value;
    this.cd.detectChanges();

  }

  updateProgress(event) {
    this.progressValue = event.target.value;
  }

  updateSize(event) {
    this.arcSizeValue = event.target.value;
  }

  updateGap(event) {
    this.arcGapValue = event.target.value;
  }

  updateBackgroundColor(event) {
    this.arcBackgroundColor = event.target.value;
  }

  updateFillColor(event) {
    this.arcFillColor = event.target.value;
  }

  updateStroke(event) {
    this.arcStrokeWidth = event.target.value;
  }
}
