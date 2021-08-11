import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Footer from "./footer";

const ListLink = (props) => {
  const isActiveMenu = props.menu.toLowerCase() === props.children.toLowerCase();
  const isHideOnMobile = props.isHideOnMobile || false;
  const breakpoints = [576, 768, 992, 1200];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  return (
    <li
      style={{
        marginRight: `1rem`,
        display: mq[0] && isHideOnMobile ? "none" : "inline-block",
      }}
    >
      <Link
        to={props.to}
        style={{
          color: isActiveMenu ? `#007AFF` : ``,
          textDecoration: isActiveMenu ? `underline` : `none`,
        }}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default ({ menu = "", title = "", children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  title = title === "" ? data.site.siteMetadata.title : title;

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 800px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header
        css={css`
          margin-bottom: ${rhythm(1.5)};
        `}
      >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3
            css={css`
              display: inline;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul
          css={css`
      list-style=none;
      float: right;
      `}
        >
          <ListLink to="/" menu={menu} isHideOnMobile="true">
            Home
          </ListLink>
          <ListLink to="/dev" menu={menu}>
            Dev
          </ListLink>
          <ListLink to="/diary" menu={menu}>
            Diary
          </ListLink>
          <ListLink to="/tags" menu={menu}>
            Tags
          </ListLink>
          <ListLink to="/about" menu={menu}>
            About
          </ListLink>
        </ul>
      </header>

      {children}

      <Footer />
    </div>
  );
};
