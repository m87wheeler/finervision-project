import { createGlobalStyle } from "styled-components";

export const CSSVariables = createGlobalStyle`
  :root {
    /** application colours */
    --black: #0c0c0c;
    --white: #ffffff;

    --primary: #fec500;
    --primary-dark: #eea40e;
    --secondary: #464daf;
    --secondary-light: #7463d1;

    --body-color: #d2e1ff;

    --danger: crimson;

    --form-bg: #dedede;
    --shadow-shade: #929292;

    /** font styles */
    --font-xs: .75rem;
    --font-sm: .9rem;
    --font-md: 1rem;
    --font-lg: 1.1rem;
    --font-xl: 1.25rem;

    /**  */
    --border-radius: .6rem;
    --inset-shadow: 1px 1px 4px 1px var(--shadow-shade) inset;
    --drop-shadow: 0 14px 28px var(--shadow-shade), 0 10px 10px var(--shadow-shade);
  }
`;
