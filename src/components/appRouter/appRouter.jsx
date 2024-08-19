function AppRouter({ component: Component, ...props }) {
	document.title = props.title;

	return <Component {...props} />;
}

export { AppRouter };
