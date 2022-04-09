import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDesComponent } from './quote-des.component';

describe('QuoteDesComponent', () => {
  let component: QuoteDesComponent;
  let fixture: ComponentFixture<QuoteDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
