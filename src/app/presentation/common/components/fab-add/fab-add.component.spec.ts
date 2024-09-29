import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FabAddComponent} from './fab-add.component';

describe('FabAddComponent', () => {
  let component: FabAddComponent;
  let fixture: ComponentFixture<FabAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabAddComponent]
    });
    fixture = TestBed.createComponent(FabAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
