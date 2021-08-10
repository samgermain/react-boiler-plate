import React, {useState} from "react";
import styled from 'styled-components';

import gridBreakpoints from "data/grid-breakpoints";


const Toggle = ({ 
    options,
    onClick=(e, option) => {},
    ...props
}) => {

    const [selected, setSelected] = useState("");

    return (
        <div {...props}>
            {options.map(op => (
                <button
                    key={op}
                    className={`
                        toggle
                        rounded-4
                        shadow-2
                        ${selected == op ? "bg-secondary" : "bg-white"}
                    `}
                    style={{
                        height: 50,
                        border: "none"
                    }}
                    onClick={e => {
                        setSelected(op)
                        onClick(e, op)  //Pass button and selected option to callback
                    }}
                >{op}</button>
            ))}
        </div>
    );
};

const StyledToggle = styled(Toggle)`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-gap: 1.5em;

    @media (max-width: ${props => props.breakpoint}px) {
        grid-template-rows: repeat(${props => props.col}, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default ({
    col=3,
    breakpoint=gridBreakpoints.md,
    ...props
}) => (
    <StyledToggle 
        col={col}
        breakpoint={breakpoint}
        {...props}
    />
);