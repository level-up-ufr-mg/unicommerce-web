import { TestBed } from '@angular/core/testing';
import { CategoriasComponent } from './categorias.component';
describe('CategoriasComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriasComponent]
        });
        fixture = TestBed.createComponent(CategoriasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categorias.component.spec.js.map