import { Card, Page, Layout, TextContainer, Text, Grid } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

import identify from '../assets/images/risk.svg'
export default function PageName() {
  const { t } = useTranslation();
  return (
    <Page fullWidth title="Sentry Address Risk and Validation" >
      <section style={{ paddingBottom: "3rem" }}>
        <Card sectioned >
          <div style={{ paddingTop: "70px" }}>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div style={{ paddingLeft: "64px", paddingTop: "60px"}}>
                  <Text variant="heading3xl" as="h2">
                    Identify Address Risk
                  </Text>
                  <p style={{ marginTop: '15px', color: "#303030" }}>Sentry by Swift can be accessed directly from the Orders page in<br />  Shopify Admin</p>
                  <ol style={{ paddingLeft: "12px" }}>
                    <li>Select orders for which Sentry needs to run address verification.</li>
                    <li>
                      Click on the “More Actions” menu</li>
                    <li>Choose “Verify Address using Sentry”</li>
                  </ol>
                  <div style={{ marginBlock: '15px' }}>
                    <button className="common-btn" onClick={() => navigate('identify')}>Continue</button>
                  </div>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div style={{
                  width: "100%", display: "flex", justifyContent: "end", height: "544px", position: "relative",
                }}>
                  <img src={identify} alt="" />
                </div>
              </Grid.Cell>
            </Grid>
          </div>
        </Card>
      </section>
    </Page>
  );
}
