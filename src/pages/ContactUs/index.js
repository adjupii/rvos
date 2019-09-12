import React from 'react';
import H2 from 'app/components/Layouts/App/H2';
import Block from './Block';
import PaperPlane from 'app/components/Icons/PaperPlane';
import Thundercloud from 'app/components/Icons/Thundercloud';
import Question from 'app/components/Icons/Question';
import Phone from 'app/components/Icons/Phone';
import Office from 'app/components/Icons/Office';
import MailBox from 'app/components/Icons/MailBox';
import { Link } from 'app/components/common/Button';
import {
  Row,
  Col
} from 'app/components/common/Grid';

const ContactUs = () => (
  <>
    <H2 className="c-app-h2--contact-us">
      Get in touch with us
    </H2>

    <Row>
      <Col className="col-12 col-m-6">
        <Block
          icon={<PaperPlane />}
          className="c-contact-us-block--common"
        >
          <p>Email Us</p>
          <span>Ask questions or provide feedback using our</span>
          <Link to="contact-us/request">Online form</Link>
        </Block>
      </Col>

      <Col className="col-12 col-m-6">
        <Block
          icon={<Thundercloud />}
          className="c-contact-us-block--common"
        >
          <p>Emergency Claims</p>
          <span>Call 1-800-792-3084</span>
          <Link to="/app/claims">visit our claim center</Link>
        </Block>
      </Col>
    </Row>

    <Row>
      <Col className="col-12 col-m-4">
        <Block
          icon={<Phone />}
          className="c-contact-us-block--additional"
        >
          <p>Phone Number</p>
          <span>1-800-792-3084</span>
          <span>Fax: 254-773-1122</span>
        </Block>
      </Col>

      <Col className="col-12 col-m-4">
        <Block
          icon={<MailBox />}
          className="c-contact-us-block--additional"
        >
          <p>Mailing Address</p>
          <span>P.O. Box 6106</span>
          <span>Temple, TX 76503-6106</span>
        </Block>
      </Col>

      <Col className="col-12 col-m-4">
        <Block
          icon={<Office />}
          className="c-contact-us-block--additional"
        >
          <p>Home Office Address</p>
          <span>2301 S 37th St.</span>
          <span>Temple, TX 76504</span>
        </Block>
      </Col>
    </Row>

    <H2 className="c-app-h2--contact-us">
      Have a question?
    </H2>

    <Row>
      <Col className="col-12 col-l-6">
        <Block
          icon={<Question />}
          className="c-contact-us-block--common"
        >
          <p>Still got questions?</p>
          <span>Search for answers in our Common Questions section.</span>
          <Link to="/app/common-questions">Visit our information center</Link>
        </Block>
      </Col>
    </Row>
  </>
);


export default ContactUs;