import { ExtensionType, LanguageNameType } from '../types/Extension';

export const LANGUAGES: Record<LanguageNameType, ExtensionType> = {
	java: 'java',
	cpp: 'cpp',
	c: 'c',
	python: 'py',
	node: 'js',
	go: 'go',
	rust: 'rs',
	ruby: 'rb',
	elixir: 'exs'
};
