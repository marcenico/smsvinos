import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosViniedosComponent } from './nuestros-viniedos.component';

describe('NuestrosViniedosComponent', () => {
  let component: NuestrosViniedosComponent;
  let fixture: ComponentFixture<NuestrosViniedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosViniedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosViniedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
