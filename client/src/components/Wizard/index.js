import React from "react";
import WizardContainer from "../../containers/WizardContainer";
import WizardSectionContainer from "../../containers/WizardSectionContainer";
import Input from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { Button } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Errors from "../Errors";

const Wizard = (props) => {
  const {
    handleSubmit,
    formState: { errors },
    ...formMethods
  } = useForm();

  const postForm = (data) => {
    console.log("post data", data);
    fetch("http://localhost:9000/postForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
  };

  const validatedForm = (data) => {
    console.log("valid data: ", data);
    postForm(data);
  };

  return (
    <WizardContainer>
      <FormProvider {...formMethods}>
        <WizardSectionContainer
          sectionTitle="Step 1: Your details"
          defaultCollapsed={false}
        >
          <Row>
            <Col xs={4}>
              <Input name="First Name" type="text" required />
            </Col>
            <Col xs={4}>
              <Input name="Surname" type="text" required />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Input name="Email" type="email" required />
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Errors errors={errors} />
            </Col>
            <Col xs={4} className="d-flex justify-content-end ms-auto">
              <Button
                className="w-75"
                onClick={() => handleSubmit(validatedForm)()}
              >
                {`Next >`}
              </Button>
            </Col>
          </Row>
        </WizardSectionContainer>
        <WizardSectionContainer sectionTitle="Step 2: More comments"></WizardSectionContainer>
        <WizardSectionContainer sectionTitle="Step 3: Final comments"></WizardSectionContainer>
      </FormProvider>
    </WizardContainer>
  );
};

export default Wizard;
