import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    name: 'Joan',
    lastName: 'Roca'
	}
});

export default app;
