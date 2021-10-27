import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekoEditComponent } from './neko-edit.component';

describe('NekoEditComponent', () => {
  let component: NekoEditComponent;
  let fixture: ComponentFixture<NekoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NekoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
