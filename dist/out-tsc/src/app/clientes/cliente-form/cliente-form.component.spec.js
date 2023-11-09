import { TestBed } from '@angular/core/testing';
import { ClienteFormComponent } from './cliente-form.component';
describe('ClienteFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ClienteFormComponent]
        });
        fixture = TestBed.createComponent(ClienteFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cliente-form.component.spec.js.map