import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

const mockUserValidToken = {
    token: {
        access_token: 'Mock Access Token'
    }
};

const mockUserInvalidToken = {
    token: {}
};

fdescribe('AuthGuard', () => {
    let authGuard: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard]
        });

        authGuard = TestBed.get(AuthGuard);
    });

    it('should return false', () => {
        spyOn(sessionStorage, 'getItem').and.returnValue(mockUserInvalidToken);

        let result: boolean;

        authGuard.canActivate().subscribe(value => (result = value));
        expect(result).toBe(false);
    });

    it('should return true', () => {
        spyOn(sessionStorage, 'getItem').and.returnValue(mockUserValidToken);

        let result: boolean;

        authGuard.canActivate().subscribe(value => (result = value));
        expect(result).toBe(true);
    });
});
