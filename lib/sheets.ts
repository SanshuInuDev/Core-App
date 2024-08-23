import DiscoverSheet from '@/components/market/DiscoverSheet';
import MarketSearchSheet from '@/components/market/MarketSearchSheet';
import NewsSheet from '@/components/market/NewsSheet';
import LoginSheet from '@/components/more/LoginSheet';
import AddPortfiolioSheet from '@/components/portfolio/AddPortfiolioSheet';
import CryptoExchangeSheet from '@/components/portfolio/CryptoExchangeSheet';
import ManualAddAssets from '@/components/portfolio/ManualAddAssets';
import ManualAddPortfolioSheet from '@/components/portfolio/ManualAddPortfolioSheet';
import PortfolioSelectSheet from '@/components/portfolio/PortfolioSelectSheet';
import WalletConnectSheet from '@/components/portfolio/WalletConnectSheet';
import AddAddressSheet from '@/components/watching/AddAddressSheet';
import AddWatchListSheet from '@/components/watching/AddWatchListSheet';
import SwitchList from '@/components/watching/SwitchListSheet';
import TransactionSheet from '@/components/watching/TransactionSheet';
import { RouteDefinition, SheetDefinition, registerSheet } from 'react-native-actions-sheet';

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

/** portfolio page */
registerSheet('portfolio-wallet-connect-sheet', WalletConnectSheet)
registerSheet('portfolio-crypto-exchange-sheet', CryptoExchangeSheet)
registerSheet('portfolio-add-portfolio-sheet', AddPortfiolioSheet)
registerSheet('portfolio-select-sheet', PortfolioSelectSheet)
registerSheet('portfolio-manual-add-sheet', ManualAddPortfolioSheet)
registerSheet('portfolio-manual-add-assets-sheet', ManualAddAssets)


/** watching page */
registerSheet('watching-add-list-sheet', AddWatchListSheet)
registerSheet('watching-add-address-sheet', AddAddressSheet)
registerSheet('watching-transaction-sheet', TransactionSheet)
registerSheet('watching-switch-list-sheet', SwitchList)

export { };


declare module 'react-native-actions-sheet' {
  interface Sheets {
    'login-sheet': SheetDefinition<{
      payload: {
        mode: 'Login' | 'Signup';
      };
    }>;
    'market-search-sheet': SheetDefinition,
    'discover-sheet': SheetDefinition,
    'news-sheet': SheetDefinition,

    'portfolio-wallet-connect-sheet': SheetDefinition,
    'portfolio-crypto-exchange-sheet': SheetDefinition<{
      routes: {
        'exchange-select': RouteDefinition
        // Route B with params.
        'coninbase-exchange': RouteDefinition
      };
    }>,
    'portfolio-add-portfolio-sheet': SheetDefinition,
    'portfolio-select-sheet': SheetDefinition,
    'portfolio-manual-add-sheet': SheetDefinition,
    'portfolio-manual-add-assets-sheet': SheetDefinition<{
      routes: {
        'discovers': RouteDefinition
        // Route B with params.
        'amount': RouteDefinition
        'price-per-coin': RouteDefinition
        'date': RouteDefinition
        'fee': RouteDefinition
        'notes': RouteDefinition
      };
    }>,
    'watching-add-list-sheet': SheetDefinition<{
      payload: string[],
      returnValue: string[]
    }>,
    'watching-add-address-sheet': SheetDefinition,
    'watching-transaction-sheet': SheetDefinition,
    'watching-switch-list-sheet': SheetDefinition,
  }
}
/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
 */
