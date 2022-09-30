import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentInteractionComponent } from './parent-component-interaction.component';

describe('ParentComponentInteractionComponent', () => {
  let component: ParentComponentInteractionComponent;
  let fixture: ComponentFixture<ParentComponentInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
