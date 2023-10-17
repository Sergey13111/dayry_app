import './App.css';
import MasterProvider from './context/MasterProvider';
import Main from './components/Main/Main';

const App: React.FC = () => {
	return (
		<MasterProvider>
			<div className='app-wrapper container-fluid'>
				<aside className='aside'>
					<h2>DAYRY APP</h2>
					<span>Comment whit no sense</span>
				</aside>
				<Main />
			</div>
		</MasterProvider>
	);
};

export default App;
