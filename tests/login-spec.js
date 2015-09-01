describe('Question', function () {
    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should redirect to Login', function () {
        expect(browser().location().url()).toBe('/Log/In'); // <- Hangs here
    });

    it('should try login with error', function () {
        expect(
            browser()
                .fill('input[name="Email"]', "wrongemail")
                .fill('input[name="Password"]', "wrongpassword")
                .pressButton('button[id="button-log-in"]', function() {
                    expect(browser.html('span[id="passwordError"]'));
                    next();
            })
        ); 
    });
});