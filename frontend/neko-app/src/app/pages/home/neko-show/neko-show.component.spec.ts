import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekoShowComponent } from './neko-show.component';

describe('NekoShowComponent', () => {
  let component: NekoShowComponent;
  let fixture: ComponentFixture<NekoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekoShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NekoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
