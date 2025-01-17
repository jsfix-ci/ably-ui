import React from "react";
import ReactDOM from "react-dom";

const renderComponent = (Component, props, node) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(<Component {...props} />, node);

export { renderComponent };

export default function reactRenderer(components) {
  const reactComponents = document.querySelectorAll("[data-react]");

  Array.from(reactComponents).forEach((node) => {
    const className = node.getAttribute("data-react");
    const Constructor = components[className];

    if (!Constructor) return;

    const propsJson = node.getAttribute("data-react-props");
    const props = propsJson && JSON.parse(propsJson || {});

    ReactDOM.render(<Constructor {...props} />, node);

    node.removeAttribute("data-react");
    node.removeAttribute("data-react-props");
  });
}
