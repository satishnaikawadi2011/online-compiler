import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
import { IconButton, NormalButton } from '../Button/Button';
import { ITestComponent } from '../Editor/Editor';
import DropdownIcon from '../Icons/Dropdown';

const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
  position:relative;
`;

const DropDownListContainer =
	styled('div') <
	ITestComponent >
	`
  position: absolute;
  bottom:60px;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
    color: #cad1d8;
    background-color: #22262c;
    border: 1px solid #333;
    box-shadow: 0 2px 9px 3px rgb(0 0 0 / 25%);

`;

const ListItem = styled('li')`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.375rem 1.5rem;
	cursor: pointer;
	transition-property: background-color,color;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
  &:hover {
    background-color:#31363c ;
  }
`;

interface IDropdownMenuItem {
	label: string;
	value: string | number;
}

interface IDropdownProps extends ITestComponent {
	items: IDropdownMenuItem[];
	onOptionClicked: (item: IDropdownMenuItem) => void;
	selectedOption: IDropdownMenuItem;
}
// React.FC<IDropdownProps & React.HTMLProps<HTMLDivElement>>
const DropdownMenu = React.forwardRef<
	React.RefObject<HTMLDivElement>,
	IDropdownProps & React.HTMLProps<HTMLDivElement>
>(({ items = [], onOptionClicked, selectedOption, ...props }, ref) => {
	const [
		isOpen,
		setIsOpen
	] = useState(false);

	const menuRef: any = useRef();
	const onClickOutside = () => {
		setIsOpen(false);
	};
	useClickOutside(menuRef, onClickOutside);

	const toggling = () => setIsOpen(!isOpen);

	const handleOptionClick = (item: IDropdownMenuItem) => () => {
		onOptionClicked(item);
		setIsOpen(false);
	};

	return (
		<React.Fragment>
			<DropDownContainer ref={menuRef} {...props as any}>
				<IconButton Icon={DropdownIcon} onClick={toggling}>
					{selectedOption.label}
				</IconButton>
				{isOpen && (
					<DropDownListContainer data-testid="dropdown-list-container">
						<DropDownList>
							{items.map((item: IDropdownMenuItem) => (
								<ListItem onClick={handleOptionClick(item)} key={item.label}>
									{item.label}
								</ListItem>
							))}
						</DropDownList>
					</DropDownListContainer>
				)}
			</DropDownContainer>
		</React.Fragment>
	);
});

export default DropdownMenu;
