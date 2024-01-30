/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
    small: {
        height: 8,
        padding: 0,
        radius: 4
    },
    medium: {
        height: 12,
        padding: 0,
        radius: 4
    },
    large: {
        height: 16,
        padding: 4,
        radius: 8
    }
}

const ProgressBar = ({value, size}) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error("Unknown sized passed to progress bar.")
    }

    return (
        <Wrapper
            role={"progressbar"}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            style={{'--padding': styles.padding + 'px', '--radius': styles.radius + 'px'}}
            radius={styles.radius}
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
                <Bar style={{'--height': styles.height + 'px', '--width': value + '%'}}/>
            </BarWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`

const BarWrapper = styled.div`
    border-radius: 4px;
    overflow: hidden;
`

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
`;

export default ProgressBar;
