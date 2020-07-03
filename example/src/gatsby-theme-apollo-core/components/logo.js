import React from 'react';
import styled from '@emotion/styled';
//https://commons.wikimedia.org/wiki/File:HelloWorld.svg
import logo from '../../assets/logo.svg';
import {ReactComponent as DocsIcon} from 'gatsby-theme-apollo-docs/src/assets/docs.svg';

const Wrapper = styled.div({
    display: 'flex',
    fontSize: 24,
});

const StyledHelloLogoIcon = styled.img({
    position: 'relative',
    width: 'auto',
    height: '1em',
    marginRight: '0.2857142857em',

});

const StyledDocsIcon = styled(DocsIcon)({
    height: '0.7857142857em',
    marginTop: '0.07142857143em',
});

export default function Logo() {
    return (
        <Wrapper>
            <StyledHelloLogoIcon src={logo}/>
            <StyledDocsIcon/>
        </Wrapper>
    );
}
