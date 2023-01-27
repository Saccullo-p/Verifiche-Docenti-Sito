import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificheComponent } from './verifiche.component';

describe('VerificheComponent', () => {
  let component: VerificheComponent;
  let fixture: ComponentFixture<VerificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
