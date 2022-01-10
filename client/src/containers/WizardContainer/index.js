import React from 'react'
import {WizardWrapper} from "./styles";

const WizardContainer = ({children}) => {
  return (
    <WizardWrapper>
      {children}
    </WizardWrapper>
  )
};

export default WizardContainer;