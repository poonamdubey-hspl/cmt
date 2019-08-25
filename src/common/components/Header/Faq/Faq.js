import React, { Component } from "react";
import faq from "../../../../assets/images/faq.svg";
import { Headerinfo, Faqlink, Linktext, Link } from "./Style";

class FAQ extends Component {
  state = {};
  render() {
    return (
      <Headerinfo>
        <Faqlink>
          <Link>
            <i>
              <img src={faq} />
            </i>
            <Linktext> FAQ's</Linktext>
          </Link>
        </Faqlink>
      </Headerinfo>
    );
  }
}

export default FAQ;
