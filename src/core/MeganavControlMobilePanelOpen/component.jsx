import React from "react";
import T from "prop-types";

const MeganavControlMobilePanelOpen = ({ ariaControls, children }) => (
  <button
    type="button"
    className="ui-meganav-mobile-link"
    data-id="meganav-control-mobile-panel-open"
    aria-expanded="false"
    aria-controls={ariaControls}
    aria-label={`Show ${children}`}
  >
    {children}
    <svg className="transform -rotate-90 ml-auto float-right w-12 h-12 ui-icon-cool-black">
      <use xlinkHref="#sprite-disclosure-arrow"></use>
    </svg>
  </button>
);

MeganavControlMobilePanelOpen.propTypes = {
  ariaControls: T.string,
  children: T.node,
};

export default MeganavControlMobilePanelOpen;
