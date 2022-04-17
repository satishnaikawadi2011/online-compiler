import create from 'zustand';

export type ActiveLinkType = '/' | '/editor' | '/about';

type AppStore = {
	activeLink: ActiveLinkType;
	currentLanguage: string;
	setActiveLink: (link: ActiveLinkType) => void;
	setCurrentLanguage: (language: string) => void;
};

export const useAppStore = create<AppStore>((set, get) => ({
	activeLink: '/',
	currentLanguage: 'C++',
	setActiveLink: (link) => set((state) => set({ ...state, activeLink: link })),
	setCurrentLanguage: (language) => set((state) => set({ ...state, currentLanguage: language }))
}));
