import { GoogleHomePage} from "../page-objects/Google-home-page";

describe('Automation testing for google home page', () => {
    const googleHomePage = new GoogleHomePage()
    it('loads google home page successfully', () => {
        googleHomePage.verifyGoogleLogo();
    })
})