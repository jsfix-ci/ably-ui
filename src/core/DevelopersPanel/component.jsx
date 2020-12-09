import React from "react";
import T from "prop-types";

const DevelopersPanel = ({ paths }) => (
  <div className="c-meganav-panel md:grid-cols-3">
    <div>
      <p className="c-meganav-overline">Documentation</p>
      <div className="mb-16">
        <form className="relative" action="/search" method="get">
          <svg className="absolute top-8 left-8 w-24 h-24 pt-1 mt-1 icon-cool-black">
            <use href={`${paths.iconSprites}/#sprite-search`}></use>
          </svg>
          <input type="search" name="q" className="c-meganav-search-input" placeholder="Search docs" />
        </form>
      </div>
      <p className="text-p1 text-cool-black mb-20">
        Docs, quick start guides, tutorials, and API reference to help you start building with Ably’s platform and APIs.
      </p>
      <a href="/documentation" className="c-meganav-link group">
        Visit Documentation
        <svg className="w-12 h-12 transform -rotate-90 align-top icon-dark-grey group-hover:icon-gui-hover ml-4">
          <use href={`${paths.iconSprites}/#sprite-disclosure-arrow`}></use>
        </svg>
      </a>
    </div>

    <div>
      <p className="c-meganav-overline">EXPLORE</p>
      <ul>
        <li>
          <a href="/integrations" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Third-party integrations & plugins</p>
            <p className="c-meganav-media-copy">Extend Ably’s platform into third party clouds and systems like AWS Lambda and AWS Kinesis.</p>
          </a>
        </li>
        <li>
          <a href="/protocols" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Multi-protocol messaging</p>
            <p className="c-meganav-media-copy">Protocols serve different purposes. We support WebSockets, MQTT, SSE, and more.</p>
          </a>
        </li>
        <li>
          <a href="/hub" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Streaming data sources</p>
            <p className="c-meganav-media-copy">Free streaming data sources from across industries like transport and finance.</p>
          </a>
        </li>
        <li>
          <a href="https://labs.ably.com" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Ably Labs</p>
            <p className="c-meganav-media-copy">See Ably in action. See what you can do with Ably. Do more with Ably.</p>
          </a>
        </li>
      </ul>
    </div>

    <ul>
      <li>
        <a href="/download" className="group c-meganav-media py-12">
          <p className="c-meganav-media-heading">Download an SDK</p>
        </a>
      </li>

      <li>
        <a href="https://changelog.ably.com/" className="group c-meganav-media py-12">
          <p className="c-meganav-media-heading">Platform changelog</p>
        </a>
      </li>

      <li>
        <a href="/support" className="group c-meganav-media py-12">
          <p className="c-meganav-media-heading">Support & FAQs</p>
        </a>
      </li>

      <li>
        <a href="http://status.ably.io/" className="group c-meganav-media py-12">
          <p className="c-meganav-media-heading">Status</p>
        </a>
      </li>
    </ul>
  </div>
);

DevelopersPanel.propTypes = {
  paths: T.shape({
    iconSprites: T.string,
  }),
};

export default DevelopersPanel;