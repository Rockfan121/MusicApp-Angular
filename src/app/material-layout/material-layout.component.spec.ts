
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLayoutComponent } from './material-layout.component';

describe('MaterialLayoutComponent', () => {
  let component: MaterialLayoutComponent;
  let fixture: ComponentFixture<MaterialLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
