import { Card, Page, Text, Grid } from "@shopify/polaris";
import identify from '../assets/images/risk.svg'
import { useNavigate } from "react-router-dom";
import { identifyAddressRiskPageConfig } from "../utils/config";

export default function PageName() {
  const navigate = useNavigate()
  return (
    <Page fullWidth title={identifyAddressRiskPageConfig.pagetitle} >
      <section className="section-bottom">
        <Card sectioned >
          <div className="pt-70">
            <Grid>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="pl-64 pt-60">
                  <div className="page-title">
                    <Text variant="heading3xl" as="h2">
                      {identifyAddressRiskPageConfig.title}
                    </Text></div>
                  <p style={{ marginTop: '15px', color: "#303030" }}>{identifyAddressRiskPageConfig.description}</p>
                  <ol className="pl-sm">
                    {identifyAddressRiskPageConfig.steps.map((step, index) => {
                      return <li key={index}>{step}</li>
                    })}
                  </ol>
                  <div className="my-15">
                    <button className="common-btn" onClick={() => navigate('/confirm')}>{identifyAddressRiskPageConfig.continueButtonLabel}</button>
                  </div>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="w-100 right-img relative flex justify-end" >
                  <img src={identify} alt="right-img" />
                </div>
              </Grid.Cell>
            </Grid>
          </div>
        </Card>
      </section>
    </Page>
  );
}
