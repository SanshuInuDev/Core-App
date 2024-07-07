import DiscoverSheet from '@/components/market/DiscoverSheet';
import MarketSearchSheet from '@/components/market/MarketSearchSheet';
import NewsSheet from '@/components/market/NewsSheet';
import LoginSheet from '@/components/more/LoginSheet';
import { SheetDefinition, registerSheet } from 'react-native-actions-sheet';

/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */

/** more page */
registerSheet('login-sheet', LoginSheet);

/** market page */
registerSheet('market-search-sheet', MarketSearchSheet);
registerSheet('discover-sheet', DiscoverSheet);
registerSheet('news-sheet', NewsSheet);
export { };


declare module 'react-native-actions-sheet' {
  interface Sheets {
    'login-sheet': SheetDefinition<{
      payload: {
        mode: 'Login' | 'Signup';
      };
    }>;
  }
}
/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */
