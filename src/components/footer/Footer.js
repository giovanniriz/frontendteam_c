import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyle";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "right",
          marginTop: "700px",
          marginRight: "30px",
          fontSize: "23px",
          paddingTop: "30px",
        }}
      >
        tutorin
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Course</Heading>
            <FooterLink href="#">Math & Science</FooterLink>
            <FooterLink href="#">Design & Style</FooterLink>
            <FooterLink href="#">Lifestyle</FooterLink>
            <FooterLink href="#">Music</FooterLink>
            <FooterLink href="#">Technology</FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
        </Row>
      </Container>
      <h4
        style={{
          color: "white",
          textAlign: "right",
          marginBottom: "-100px",
          size: "10px",
          marginRight: "30px",
          paddingBottom: "20px",
          fontSize: "12px",
        }}
      >
        Tutorin &copy;{new Date().getFullYear()}| All rights reserved |
      </h4>
    </Box>
  );
};
export default Footer;
