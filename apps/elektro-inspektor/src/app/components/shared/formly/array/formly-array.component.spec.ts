import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepeatRowComponent } from './formly-array.component';

describe('RepeatRowComponent', () => {
  let component: RepeatRowComponent;
  let fixture: ComponentFixture<RepeatRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepeatRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
