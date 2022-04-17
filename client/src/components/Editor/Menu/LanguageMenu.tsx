import { languages } from '../../../constants';
import { useAppStore } from '../../../store';
import DropdownMenu from '../../Dropdown/Dropdown';

const convertToItems = () => {
	const labels = Object.keys(languages);

	const items: any = [];
	labels.forEach((l) => {
		items.push({ label: l, value: languages[l] });
	});

	return items;
};

const LanguageMenu = () => {
	const { currentLanguage, setCurrentLanguage } = useAppStore();
	return (
		<DropdownMenu
			items={convertToItems()}
			selectedOption={{ label: currentLanguage, value: languages[currentLanguage] }}
			onOptionClicked={(item) => setCurrentLanguage(item.label)}
			placement="top"
		/>
	);
};

export default LanguageMenu;
