import React from "react";
import T from "prop-types";

import MeganavControl from "../MeganavControl/component.jsx";
import SignOutLink from "../SignOutLink/component.jsx";

const MeganavItemsSignedIn = ({ sessionState, paths, theme }) => {
  const links = Object.keys(sessionState.account.links).map((key) => sessionState.account.links[key]);

  return (
    <ul className="hidden md:flex items-center">
      <li className="ui-meganav-item relative">
        <MeganavControl iconSpritesPath={paths.iconSprites} ariaControls="account-panel" theme={theme}>
          {sessionState.accountName}
        </MeganavControl>

        <div className="ui-meganav-panel-account invisible" id="account-panel" data-id="meganav-panel">
          <p className="ui-meganav-overline mt-24 mx-16">Your account</p>
          <ul className="mb-16 mx-16">
            {links.map((item) => (
              <li key={item.href}>
                <a className="ui-meganav-account-link" href={item.href}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <p className="ui-meganav-overline mx-16">{sessionState.preferredEmail}</p>
          <ul className="mb-8 mx-16">
            <li>
              <a href={sessionState.mySettings.href} className="ui-meganav-account-link">
                {sessionState.mySettings.text}
              </a>
            </li>
          </ul>

          <hr className="ui-meganav-hr mb-16" />

          {sessionState.logOut && (
            <div className="mb-16 px-16">
              <SignOutLink {...sessionState.logOut}>
                {({ text, href, onClick }) => (
                  <a onClick={onClick} href={href} className="ui-meganav-account-link">
                    {text}
                  </a>
                )}
              </SignOutLink>
            </div>
          )}
        </div>
      </li>

      {sessionState.account && (
        <li className="ml-16">
          <a href={sessionState.account.links.dashboard.href} className="ui-btn-secondary px-16">
            Dashboard
          </a>
        </li>
      )}
    </ul>
  );
};

MeganavItemsSignedIn.propTypes = {
  sessionState: T.object,
  paths: T.shape({
    iconSprites: T.string,
  }),
  theme: T.object,
};

export default MeganavItemsSignedIn;