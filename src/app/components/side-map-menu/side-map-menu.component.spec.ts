import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMapMenuComponent } from './side-map-menu.component';

describe('SideMapMenuComponent', () => {
  let component: SideMapMenuComponent;
  let fixture: ComponentFixture<SideMapMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMapMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMapMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
