import useSettings from "app/hooks/useSettings";

export default function MatxLogo({ className }) {
	const { settings } = useSettings();
	const theme = settings.themes[settings.activeTheme];

	return <img src='/assets/images/logo-main.png' width='100px' alt='' />;
}
