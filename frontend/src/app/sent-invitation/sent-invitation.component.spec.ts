import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentInvitationComponent } from './sent-invitation.component';

describe('RecievedInvitationComponent', () => {
  let component: SentInvitationComponent;
  let fixture: ComponentFixture<SentInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
