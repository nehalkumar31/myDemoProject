import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNewComponent } from './crud-new.component';

describe('CrudNewComponent', () => {
  let component: CrudNewComponent;
  let fixture: ComponentFixture<CrudNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
