import React from 'react';
import styled from 'styled-components';
import {getDisplayedValue} from './Select.helpers';
import {COLORS} from "../../constants";
import Icon from "../Icon";

const Select = ({label, value, onChange, children}) => {
	const displayedValue = getDisplayedValue(value, children);

	return (<Wrapper>
		<NativeSelect value={value} onChange={onChange}>
			{children}
		</NativeSelect>
		<PresentationBit>
			{displayedValue}
			<IconWrapper style={{'--size': 24 + 'px'}}>
				<Icon id={"chevron-down"} strokeWidth={1} size={24}/>
			</IconWrapper>
		</PresentationBit>
	</Wrapper>);
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
	appearance: none; /* Allows height override on older Safari browsers */
`

const PresentationBit = styled.div`
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    padding: 12px 52px 12px 16px;
    font-size: 1rem;
    border-radius: 8px;
	
	${NativeSelect}:focus + & {
		outline: 2px solid blue; /* Fallback in the instance the below line is invalid for a browser */
		outline: 5px auto -webkit-focus-ring-color;
	}

    ${NativeSelect}:hover + & {
        color: black;
    }

    &:hover {
        color: black;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: var(--size);
    height: var(--size);
	pointer-events: none;
	
	&:hover {
        color: black;
    }
`
export default Select;
