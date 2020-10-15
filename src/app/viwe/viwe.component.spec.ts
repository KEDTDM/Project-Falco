import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweComponent } from './viwe.component';

describe('ViweComponent', () => {
  let component: ViweComponent;
  let fixture: ComponentFixture<ViweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
