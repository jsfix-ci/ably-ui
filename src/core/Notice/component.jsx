import React, { useEffect } from "react";
import T from "prop-types";

const contentWrapperClasses = "font-light w-full pr-8 text-p3 self-center";

import NoticeScripts from "./component.js";
import Icon from "../Icon/component.jsx";

const ContentWrapper = ({ buttonLink, children }) =>
  buttonLink ? (
    <a href={buttonLink} className={contentWrapperClasses}>
      {children}
    </a>
  ) : (
    <div className={contentWrapperClasses}>{children}</div>
  );

ContentWrapper.propTypes = {
  buttonLink: T.string,
  children: T.node,
};

const Notice = ({ buttonLink, buttonLabel, bodyText, title, config, closeBtn, bgColor = "bg-gradient-active-orange", textColor = "text-white" }) => {
  useEffect(() => {
    NoticeScripts({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config.cookieId,
      noticeId: config.noticeId,
      options: {
        collapse: config.collapse,
      },
    });
  }, []);

  const wrapperClasses = ["ui-announcement", bgColor, textColor].join(" ");

  return (
    <div className={wrapperClasses} data-id="ui-notice" style={{ maxHeight: 0, overflow: "hidden" }}>
      <div className="ui-grid-px py-16 max-w-screen-xl mx-auto flex items-start">
        <ContentWrapper buttonLink={buttonLink}>
          <strong className="font-medium whitespace-nowrap pr-4">{title}</strong>
          <span className="pr-4">{bodyText}</span>
          {buttonLabel && <span className="underline cursor-pointer whitespace-nowrap">{buttonLabel}</span>}
        </ContentWrapper>

        {closeBtn && (
          <button type="button" className="ml-auto h-20 w-20 border-none bg-none self-baseline">
            <Icon name="icon-gui-close" size="1.25rem" color="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

Notice.propTypes = {
  buttonLink: T.string,
  buttonLabel: T.string,
  bodyText: T.string,
  title: T.string,
  closeBtn: T.bool,
  config: T.shape({
    collapse: T.bool,
    noticeId: T.string,
    cookieId: T.string,
  }),
  bgColor: T.string,
  textColor: T.string,
};

export default Notice;
