import { TestBed } from '@angular/core/testing';
import { NotFoudComponent } from './not-foud.component';
describe('NotFoudComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoudComponent]
        });
        fixture = TestBed.createComponent(NotFoudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=not-foud.component.spec.js.map