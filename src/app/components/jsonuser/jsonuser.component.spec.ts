import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonuserComponent } from './jsonuser.component';

describe('JsonuserComponent', () => {
  let component: JsonuserComponent;
  let fixture: ComponentFixture<JsonuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
