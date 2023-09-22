import React from 'react';
import Image from 'next/image';
import Vector162Image from '../assets/images/Vector.png';
import { styled } from '@mui/material/styles';

const Vector161 = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
});

function Vector16(props) {
    return (
        <Vector161 className={props.className}>
            <Image style={{ marginTop: "-60px" }} src={Vector162Image} alt={'Vector 16'} width={508} layout="responsive" />
        </Vector161>
    );
}

export default Vector16;
