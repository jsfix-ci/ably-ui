import React from "react";
import T from "prop-types";

import MeganavData from "../Meganav/component.json";
import MeganavControl from "../MeganavControl/component.jsx";

const MeganavDesktopItems = ({ panels, paths, theme, absUrl }) => (
  <ul className="hidden md:flex" data-id="meganav-items-desktop">
    {MeganavData.panels.map((panel) => {
      const PanelComponent = panels[panel.component];
      const bgCSS = ["platform-panel", "use-cases-panel"].includes(panel.id) ? "ui-meganav-panel-split-bg" : "";

      return (
        <li className="ui-meganav-item" key={panel.id}>
          <MeganavControl theme={theme} ariaControls={panel.id} ariaLabel={panel.label}>
            <span className="hidden lg:inline">{panel.label}</span>
            <span className="lg:hidden">{panel.shortLabel}</span>
          </MeganavControl>

          <div className={`ui-meganav-panel invisible ${bgCSS}`} id={panel.id} data-id="meganav-panel">
            <PanelComponent paths={paths} absUrl={absUrl} />
          </div>
        </li>
      );
    })}

    <li className="ui-meganav-item">
      <a href={absUrl("/pricing")} data-id="meganav-link" className={`ui-meganav-link h-64 items-center flex ${theme.textColor}`}>
        Pricing
      </a>
    </li>
  </ul>
);

MeganavDesktopItems.propTypes = {
  panels: T.object,
  paths: T.shape({
    logo: T.string,
    iconSprites: T.string,
    ablyStack: T.string,
    blogThumb1: T.string,
    blogThumb2: T.string,
    blogThumb3: T.string,
  }),
  theme: T.object,
  absUrl: T.func,
};

export default React.memo(MeganavDesktopItems);
