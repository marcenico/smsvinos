import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViniedosComponent } from './viniedos.component';

describe('ViniedosComponent', () => {
  let component: ViniedosComponent;
  let fixture: ComponentFixture<ViniedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViniedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViniedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
