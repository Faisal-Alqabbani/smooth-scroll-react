import React from "react";
import {
  ServicesContainer,
  ServiceIcon,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./servicesElement";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-1.svg";
function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServiceIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServiceIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            you can access our platform online anywhere in the world!
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServiceIcon src={Icon3} />
          <ServicesH2>Premium Benifits</ServicesH2>
          <ServicesP>
            unluck our special member card that return 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
