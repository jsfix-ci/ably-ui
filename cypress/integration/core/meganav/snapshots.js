import { fixSnapshotSpec } from "../../../support";
import { MOBILE_DROPDOWN_CONTROL, NOTICE } from "./shared";

beforeEach(fixSnapshotSpec(__filename));

describe("ControlMobileDropdown", () => {
  const sharedSpecs = () => {
    it("renders correctly by default", () => {
      cy.get(MOBILE_DROPDOWN_CONTROL).toMatchSnapshot();
    });

    it("renders correctly on click", () => {
      cy.get(MOBILE_DROPDOWN_CONTROL).trigger("click").toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("iphone-8");
  });

  describe("react", () => {
    beforeEach(() => {
      cy.visit("/components/meganav");
    });

    sharedSpecs();
  });

  describe("vw", () => {
    beforeEach(() => {
      cy.visit("/components/meganav?framework=vw");
    });

    sharedSpecs();
  });
});

describe("Notice", () => {
  const sharedSpecs = () => {
    it("renders correctly by default", () => {
      cy.get(NOTICE).toMatchSnapshot();
    });
  };

  beforeEach(() => {
    cy.viewport("iphone-8");
  });

  describe("react", () => {
    beforeEach(() => {
      cy.visit("/components/meganav");
    });

    sharedSpecs();
  });

  describe("vw", () => {
    beforeEach(() => {
      cy.visit("/components/meganav?framework=vw");
    });

    sharedSpecs();
  });
});
