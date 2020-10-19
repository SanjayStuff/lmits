import React from 'react';
import aboutImg from '../../assets/images/about.svg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Layout, Row, Col } from 'antd';

const AboutUs = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Layout>
      <section className="section bg-light">
        <div className="about-container">
          <Row justify="space-around" align="middle">
            <Col md={9} className="features-img">
              <img src={aboutImg} alt="LMiTS About Img" className="img-fluid" />
            </Col>

            <Col md={14} md={{ span: 14, offset: 1 }}>
              <Row>
                <div className="title">
                  <h3 className="font-weight-normal text-left text-dark ">
                    About
                    <span className="text-warning font-weight-medium"> Us</span>
                  </h3>
                  <p className="about-text text-muted font-weight-normal text-left">
                    Logistics is the process of planning and executing the
                    efficient transportation and storage of goods from the point
                    of origin to the point of consumption. The goal of LMiTS is
                    to meet customer requirements in a timely, cost-effective
                    and ease of access with us innovative technology.
                  </p>
                  <Row>
                    <a
                      onClick={handleClickOpen('paper')}
                      className=" font-weight-normal read-more"
                    >
                      Read more <span className="right-icon">→</span>
                    </a>
                  </Row>
                </div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  scroll={scroll}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">About Us</DialogTitle>
                  <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                      id="scroll-dialog-description"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      <p className="about-text">
                        The era of technological innovation has revolutionized
                        the way the world use to function. It has impacted every
                        other industry we know and is helping to transform them
                        at an unprecedented rate. The logistics sector has also
                        been disrupted by this technological transformation as
                        it is not only helping in reducing the friction in the
                        world of logistics but is also making it a more
                        efficient and automated process.
                      </p>
                      <p className="about-text">
                        The new-age start-ups that are backed by technological
                        advancements are able to adapt to emerging imperatives
                        such as agility, customer centricity and the need to
                        constantly innovate in a better and precise way. The use
                        of technology has enabled them to drive efficiency and
                        lower costs, as well as pursue new business
                        opportunities. The digitalization of the sector will
                        also help customers to track their shipments in
                        real-time, reduce inefficiencies and streamline
                        operations. Switching from the age-old method of
                        tracking orders on paper to the digital platform will
                        leave lesser room for error. Today, LMiTS Solutions
                        Private Limited provides mobile application-based
                        shipments have made booking convenient and has reduced
                        human intervention.
                      </p>
                      <p>
                        The evolution in technology is creating strong ripples
                        in the world of logistics market segment. On one hand it
                        is responsible for increased productivity, on the other
                        hand it facilitates cost and error reduction in the
                        supply chain. LMiTS Solution &amp; Technology aims to
                        strike every sector of the logistic segment viz.,
                        shipment tracking systems, GPS, fleet management, cloud
                        based computing and social media. AI and ML are enabling
                        the logistics players to reduce the friction in last
                        mile delivery system. The time we are living in can be
                        referred to as the golden period of technology. The new
                        age logistics ventures are embracing the futuristic
                        changes in the domain to remain updated and enhance
                        efficiency.
                      </p>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      style={{ outLine: 'none' }}
                      onClick={handleClose}
                      color="primary"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>

                <Col md={12}>
                  <h6 className="text-dark f-20">Our Vision</h6>
                  <p className="text-muted font-weight-normal">
                    We aim to simplify the logistics industry process. Our
                    vision is to enable the LMiTS Solutions &amp; technology in
                    all the logistics process grounded worldwide as a trusted
                    partner to all our clients. We envision to surpass our
                    success &amp; customer loyalty level year by year.
                  </p>
                </Col>
                <Col md={11} md={{ span: 11, offset: 1 }}>
                  <h6 className="text-dark f-18 ">Our Mission</h6>
                  <p className="text-muted font-weight-normal">
                    To promote teamwork &amp; create a work environment
                    encouraging the workforce to continuously strive for quality
                    &amp; excellence, providing high-quality service to
                    customers under one roof.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
