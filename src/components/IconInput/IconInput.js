import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS} from "../../constants";

const STYLES = {
	small: {
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
		height: 24,
	},
	large: {
		fontSize: 18,
		iconSize: 24,
		borderThickness: 2,
		height: 36,
	}
}

const IconInput = ({
					   label,
					   icon,
					   width = 250,
					   size,
					   ...props
				   }) => {
	const styles = STYLES[size]

	if (!styles) throw new Error("Unknown size passed for size param.")

	return (
		<Wrapper>
			<VisuallyHidden> {label}</VisuallyHidden>
			<IconWrapper style={{'--size': styles.iconSize + "px"}}>
				<Icon id={icon} size={styles.iconSize}/>
			</IconWrapper>
			<TextInput {...props} style={{
				'--width': width + 'px',
				'--font-size': styles.fontSize / 16 + 'rem',
				'--height': styles.height / 16 + 'rem',
				'--thickness': styles.borderThickness + 'px',
			}}/>
		</Wrapper>
	);
};

const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`

const TextInput = styled.input`
    height: var(--height);
    width: var(--width);
    border: none;
    border-bottom: var(--thickness) solid ${COLORS.black};
    padding-left: var(--height);
    color: inherit;
    font-weight: 700;
    font-size: var(--font-size);

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }

    &:focus {
        outline-offset: 3px;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
`

export default IconInput;
