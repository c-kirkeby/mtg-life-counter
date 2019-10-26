import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import { ReactNode } from 'react'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 10px;
    min-height: 100vh;
  }
  body {
    min-height: 100vh;
    /* Helvetica-based font stack: https://css-tricks.com/snippets/css/font-stacks/ */
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0;
    background-color: #ffffff;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
  }
`

// const Outer = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
//   margin: 0 auto;
//   max-width: 1160px;
// `

// const Inner = styled.main`
//   display: flex;
//   flex: 1;
//   padding: 0 .75rem;
// `

// const Footer = styled.footer`

// `

export default (props: { children: ReactNode }): JSX.Element =>
  <>
    {/* <ThemeProvider theme={theme}> */}
    <>
      <GlobalStyle />
      {/* <Outer> */}
      <Meta />
      {/* <Inner> */}
      {props.children}
      {/* </Inner> */}
      {/* </Outer> */}
    </>
    {/* </ThemeProvider> */}
  </>