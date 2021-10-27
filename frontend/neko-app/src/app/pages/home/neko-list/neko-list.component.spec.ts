import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekoListComponent } from './neko-list.component';

describe('NekoListComponent', () => {
  let component: NekoListComponent;
  let fixture: ComponentFixture<NekoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NekoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NekoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
