import { TestBed } from '@angular/core/testing';
import { CategoriaFormComponent } from './categoria-form.component';
describe('CategoriaFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriaFormComponent]
        });
        fixture = TestBed.createComponent(CategoriaFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categoria-form.component.spec.js.map