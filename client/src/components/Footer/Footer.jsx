import React from "react";
import { Container, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary">
      {/* Grid container */}
      <Container className="pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          {/* Twitter */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Button>

          {/* Google */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Button>

          {/* Instagram */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Button>

          {/* Linkedin */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin"></i>
          </Button>

          {/* Github */}
          <Button
            variant="link"
            className="btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>
        {/* Section: Social media */}
      </Container>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
