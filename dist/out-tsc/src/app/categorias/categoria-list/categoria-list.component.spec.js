import { TestBed } from '@angular/core/testing';
import { CategoriaListComponent } from './categoria-list.component';
describe('CategoriaListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriaListComponent]
        });
        fixture = TestBed.createComponent(CategoriaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categoria-list.component.spec.js.map