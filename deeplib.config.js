import { defineConfig } from 'bc-deeplib/build';

export default defineConfig({
	entry: 'index.ts',
	outfile: 'index.js',
	modInfo: {
		name: 'ModName',
		fullName: 'ModFullName',
		repository: 'https://github.com/ModAuthor/ModRepository'
	},
	esbuildOptions: {
		globalName: 'ModName',
		target: ['es2021']
	}
});
