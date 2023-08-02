import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0;
       line-height: normal;
       overflow-x: hidden;
       width: 100%;
    }

    * {
      box-sizing: border-box;
    }
:root {

/* fonts */
--font-rubik: Rubik;

/* font sizes */
--font-size-5xl: 24px;
--font-size-base: 16px;
--font-size-xl: 20px;
--font-size-21xl: 40px;
--font-size-9xl: 28px;
--font-size-19xl: 38px;

/* Colors */
--dark-mode-lightest: #30343b;
--off-black: #2c3239;
--color-gray: #1b2027;
--white: #fff;

/* Gaps */
--gap-11xs: 2px;
--gap-21xl: 40px;
--gap-xs: 12px;

/* border radiuses */
--br-9xs: 4px;

}
`;
