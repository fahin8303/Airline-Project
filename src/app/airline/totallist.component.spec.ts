import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallistComponent } from './totallist.component';

describe('TotallistComponent', () => {
  let component: TotallistComponent;
  let fixture: ComponentFixture<TotallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotallistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
