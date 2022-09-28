import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCdkComponent } from './angular-cdk.component';

describe('AngularCdkComponent', () => {
  let component: AngularCdkComponent;
  let fixture: ComponentFixture<AngularCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
