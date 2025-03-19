import { AppRouter } from 'components/appRouter';
import { routes } from 'components/appRouter/routes';
import Styles from './app.module.scss';

function App() {
	return (
		<div>
			<Layout>
				<AppRouter routes={routes} />
			</Layout>
		</div>
	);
}

const Layout = ({ children }) => (
	<div className={Styles.mainContainer}>
		<div className={Styles.contentContainer}>
			{children}
		</div>
	</div>
);

export { App };
