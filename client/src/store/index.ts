import create from 'zustand';

export type ActiveLinkType = '/' | '/editor' | '/about';

type AppStore = {
	activeLink: ActiveLinkType;
	currentLanguage: string;
	isMobileNavOpen?: boolean;
	setActiveLink: (link: ActiveLinkType) => void;
	setCurrentLanguage: (language: string) => void;
	setIsMobileNavOpen: (b: boolean) => void;
};

export const useAppStore = create<AppStore>((set, get) => ({
	activeLink: '/',
	currentLanguage: 'C++',
	isMobileNavOpen: false,
	setActiveLink: (link) => set((state) => set({ ...state, activeLink: link })),
	setCurrentLanguage: (language) => set((state) => set({ ...state, currentLanguage: language })),
	setIsMobileNavOpen: (b) => set((state) => ({ ...state, isMobileNavOpen: b }))
}));
