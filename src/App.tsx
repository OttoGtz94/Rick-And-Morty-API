import { useState } from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import Home from './components/pages/Home';
import MuiThemeProvider from './theme';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Cards from './components/layout/Cards';
import Doc from './components/pages/Doc';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<MuiThemeProvider>
						<BrowserRouter>
							<Routes>
								<Route path='/' element={<Home />}>
									<Route
										index
										element={<Cards />}
									/>
									<Route
										path='/documentacion'
										element={<Doc />}
									/>
								</Route>
							</Routes>
						</BrowserRouter>
					</MuiThemeProvider>
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
