import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCarouselComponent } from './campaign-carousel.component';

describe('CampaignCarouselComponent', () => {
  let component: CampaignCarouselComponent;
  let fixture: ComponentFixture<CampaignCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
