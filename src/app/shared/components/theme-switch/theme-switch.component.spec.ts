import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitchComponent } from './theme-switch.component';

describe('SwitchComponent', () => {
    let component: ThemeSwitchComponent;
    let fixture: ComponentFixture<ThemeSwitchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ThemeSwitchComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
