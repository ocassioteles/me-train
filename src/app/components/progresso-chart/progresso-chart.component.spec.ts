import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoChartComponent } from './progresso-chart.component';

describe('ProgressoChartComponent', () => {
  let component: ProgressoChartComponent;
  let fixture: ComponentFixture<ProgressoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
