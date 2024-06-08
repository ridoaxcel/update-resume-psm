import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConfirmLogin extends Page {
    /**
     * define selectors using getter methods
     */
    get checkLogin () {
        return $('img[alt=""]');
    }

}

export default new ConfirmLogin();
