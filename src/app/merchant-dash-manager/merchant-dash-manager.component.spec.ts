import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDashManagerComponent } from './merchant-dash-manager.component';

describe('MerchantDashManagerComponent', () => {
  let component: MerchantDashManagerComponent;
  let fixture: ComponentFixture<MerchantDashManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantDashManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDashManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
