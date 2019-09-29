import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosVinosComponent } from './nuestros-vinos.component';

describe('NuestrosvinosComponent', () => {
  let component: NuestrosVinosComponent;
  let fixture: ComponentFixture<NuestrosVinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosVinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
