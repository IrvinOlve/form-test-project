import styled from "styled-components";

export const WizardSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  //position: absolute;
  //width: 100%;
  overflow: hidden;
  border-radius: 10px;
  //padding: 3px 0px 3px 0px;

  input,
  label {
    display: block;
  }

  input {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    height: 40px;
    border: 0px;
    border-radius: 10px;
    background: white;
  }

  button {
    background-image: linear-gradient(#404bb5, #7664d3);
    width: 75%;
    color: white;
    height: 35px;
    border: 0px;
    border-radius: 10px;
  }
`;

export const WizardSectionHeader = styled.div`
  background-color: #dedede;
`;

export const WizardSectionTitle = styled.span`
  display: flex;
  background-image: linear-gradient(#fec70c, #eea30e);
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  color: white;
  padding: 20px 15px 20px 15px;
`;

export const WizardSectionContent = styled.div`
  padding: 20px 15px 20px 15px;
  background-color: #dedede;
`;
