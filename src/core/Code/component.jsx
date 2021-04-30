import React from "react";

import "./component.css";
import { highlight } from "./component.js";

export default function Code({ language, snippet }) {
  const HTMLraw = highlight(language, `${snippet}`.trim());
  const className = `font-mono language-${language}`;
  return (
    <div className="hljs p-32 overflow-auto" data-id="code">
      <pre lang={language}>
        <code className={className} dangerouslySetInnerHTML={{ __html: HTMLraw }} />
      </pre>
    </div>
  );
}
