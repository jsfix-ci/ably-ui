import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const WhyAblyPanel = ({ paths }) => (
  <div className="ui-meganav-panel md:grid-cols-3">
    <div>
      <p className="ui-meganav-overline">Why companies choose Ably</p>
      <ul>
        <li>
          <a href="/customers" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Customer stories</p>
          </a>
        </li>

        <li>
          <a href="/compare" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Compare our tech</p>
          </a>
        </li>

        <li>
          <a href="/migrate" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Risk-free migration</p>
          </a>
        </li>

        <li>
          <a href="/enterprise" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">For enterprises</p>
          </a>
        </li>

        <li>
          <a href="/aws" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Ably & AWS</p>
          </a>
        </li>

        <li>
          <a href="/resources/datasheets" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Resources</p>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <p className="ui-meganav-overline">Four pillars of dependability</p>
      <ul className="mb-8">
        <li>
          <a href="/four-pillars-of-dependability#performance" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Predictable performance</p>
            <p className="ui-meganav-media-copy">A low-latency global edge network across 200+ PoPs.</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#integrity" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Guaranteed ordering & delivery</p>
            <p className="ui-meganav-media-copy">We guarantee in-order data delivery, even after disconnections.</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#reliability" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Fault tolerant infrastructure</p>
            <p className="ui-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLAs.</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#availability" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">High scalability & availability</p>
            <p className="ui-meganav-media-copy">Elastic, battle-tested global infrastructure for massive scale.</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url="/four-pillars-of-dependability" iconSpritesPath={paths.iconSprites}>
        Explore our Four Pillars of Dependability
      </FeaturedLink>
    </div>

    <div>
      <p className="ui-meganav-overline">Blog</p>
      <ul className="mb-8">
        <li>
          {/* Without thumb until we fetch them dynamically, use CSS class ui-meganav-media-with-image */}
          <a href="/blog/ably-wins-two-2020-devportal-awards" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Ably wins two 2020 Devportal Awards</p>
            <p className="ui-meganav-media-copy">Nov 26, 2020</p>
          </a>
        </li>
        <li>
          <a href="/blog/achieving-exactly-once-message-processing-with-ably" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Achieving exactly-once message processing with Ably</p>
            <p className="ui-meganav-media-copy">Nov 17, 2020</p>
          </a>
        </li>

        <li>
          <a href="/blog/ablys-partnership-with-aws" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Ably’s partnership and global GTM strategy with AWS</p>
            <p className="ui-meganav-media-copy">Oct 15, 2020</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url="/blog" iconSpritesPath={paths.iconSprites}>
        More from our Blog
      </FeaturedLink>
    </div>
  </div>
);

WhyAblyPanel.propTypes = {
  paths: T.shape({
    blogThumb1: T.string,
    blogThumb2: T.string,
    blogThumb3: T.string,
    iconSprites: T.string,
  }),
};

export default WhyAblyPanel;
