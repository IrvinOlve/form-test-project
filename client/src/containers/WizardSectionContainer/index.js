import React, {useState} from 'react';
import {WizardSectionContent, WizardSectionHeader, WizardSectionTitle, WizardSectionWrapper} from "./styles";

const WizardSectionContainer = ({isCollapsible = true, sectionTitle, defaultCollapsed = true, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const handleCollapseClick = () => {
    // console.log('header clicked')
    setIsCollapsed(oldVal => !oldVal)
  }

  return (
    <WizardSectionWrapper>
      <WizardSectionHeader onClick={() => isCollapsible && handleCollapseClick()}>
        <WizardSectionTitle>
          {sectionTitle && sectionTitle}
        </WizardSectionTitle>
      </WizardSectionHeader>

      <WizardSectionContent style={{display: isCollapsed ? 'none' : 'block'}}>
        {children}
      </WizardSectionContent>
    </WizardSectionWrapper>
  );
}

export default WizardSectionContainer;