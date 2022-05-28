/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function Nav() {
  return (
    <nav css={navbar}>
      <div css={logoSize}>
        <span>👩🏻‍💻 한슬희 | dogvelopers</span>
      </div>
    </nav>
  );
}

export default Nav;

const navbar = css`
  padding: 0.8rem 1.1rem;
`;

const logoSize = css`
  font-weight: 300;
`;
