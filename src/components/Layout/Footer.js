import * as classes from "./Footer.module.css";
import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const queryData = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          option1 {
            uid
          }
          option2 {
            uid
          }
          option3 {
            uid
          }
          quick_links {
            text
          }
          logo {
            url
          }
          cta_link {
            url
          }
          cta_text {
            text
          }
          cta_content {
            text
          }
        }
      }
      prismicSocialMedia {
        data {
          title {
            text
          }
          social_media {
            link {
              url
            }
            name {
              text
            }
          }
        }
      }
      prismicContactInf {
        data {
          title {
            text
          }
          phone_number {
            text
          }
          gmail {
            text
          }
          country {
            text
          }
        }
      }
    }
  `);

  const {
    prismicContactInf: { data: contactInfoData },
    prismicFooter: { data: footerData },
    prismicSocialMedia: { data: socialMediaData },
  } = queryData;

  const {
    cta_content: { text: footerCtaContent },
    cta_link: { url: footerCtaLink },
    cta_text: { text: footerCtaText },
    logo: { url: footerLogo },
    quick_links: { text: footerQuickLink },
    option1: { uid: footerOption1 },
    option2: { uid: footerOption2 },
    option3: { uid: footerOption3 },
  } = footerData;

  console.log(contactInfoData);
  console.log(socialMediaData);
  return (
    <footer className="container">
      <div className={`primary-2 ${classes["footer__cta"]}`}>
        <div className=" row">
          <div className="col-sm-6 ">
            <h1>{footerCtaText}</h1>
          </div>
          <div className={`col-sm-6  ${classes["footer__cta__btn"]}`}>
            <button className={`secondary-1 `}>
              <a href={footerCtaLink}>{footerCtaContent}</a>
            </button>
          </div>
        </div>
      </div>
      <div className={`${classes["footer__content"]} mt-5 text-center`}>
        <div className="row">
          <div className="col-md-3 col-sm-12 footer_logo">
            <a href="#">
              <img
                src={footerLogo}
                width="200"
                height="80"
                className="d-inline-block align-top"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-xs-12 footer_quicklinks">
            <h5 className="text-center">{footerQuickLink}</h5>
            <ul>
              <li>
                <Link to={`/${footerOption1}`}>About</Link>
              </li>
              <li>
                <Link to={`/${footerOption2}`}>Blog</Link>
              </li>
              <li>
                <Link to={`/${footerOption3}`}>Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-xs-12 footer_contactinfo">
            <h5>{contactInfoData.title.text}</h5>
            <ul>
              <li>{contactInfoData.gmail.text}</li>
              <li>{contactInfoData.phone_number.text}</li>
              <li>{contactInfoData.country.text}</li>
            </ul>
          </div>
          <div className="col-md-3 col-xs-12 footer_socialmedia">
            <h5>{socialMediaData.title.text}</h5>
            <ul>
              {socialMediaData.social_media.map((item) => (
                <li>
                  <Link to={item.link.url}>{item.name.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
