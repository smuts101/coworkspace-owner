import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourSpacesPage } from './your-spaces.page';

describe('YourSpacesPage', () => {
  let component: YourSpacesPage;
  let fixture: ComponentFixture<YourSpacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSpacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourSpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
