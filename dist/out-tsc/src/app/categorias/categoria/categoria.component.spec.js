import { TestBed } from '@angular/core/testing';
import { CategoriaComponent } from './categoria.component';
describe('CategoriaComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriaComponent]
        });
        fixture = TestBed.createComponent(CategoriaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categoria.component.spec.js.map