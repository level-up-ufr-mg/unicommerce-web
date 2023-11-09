import { TestBed } from '@angular/core/testing';
import { ClienteComponent } from './cliente.component';
describe('ClienteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ClienteComponent]
        });
        fixture = TestBed.createComponent(ClienteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cliente.component.spec.js.map