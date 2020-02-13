import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { SharedUiChartModule } from '@coding-challenge/shared/ui/chart';
import { INITIAL_CHART_DATA } from './constants/chart.constants';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should set chart initial data', () => {
      component.ngOnInit();
      expect(component.chart).toEqual(INITIAL_CHART_DATA);
    });
  });
});
