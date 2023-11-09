import { TestBed } from '@angular/core/testing';
import { ErrosComponent } from './erros.component';
describe('ErrosComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrosComponent]
        });
        fixture = TestBed.createComponent(ErrosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=erros.component.spec.js.map