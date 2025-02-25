import {
  Card,
  Button,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Grid,
  Box,
} from "@shopify/polaris";
import welcomeImage from '../assets/images/welcome.svg'
import { useNavigate } from "react-router-dom";
import { welcomePageConfig } from "../utils/config";

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <Page fullWidth title={welcomePageConfig.pagetitle} >
      <section className="section-bottom">
        <Card sectioned >
          <div className="pt-70">
            <Grid>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="pl-64">
                  <Text variant="heading3xl" as="h2">
                    {welcomePageConfig.title}
                  </Text>
                  <p className="mt-15 paragraph-clr">{welcomePageConfig.description}</p>
                  <p className="mt-15 paragraph-clr">{welcomePageConfig.descriptionSecondary}</p>
                  <div style={{ marginBlock: '12px' }}>
                    <button className="common-btn" onClick={() => navigate('identify')}>{welcomePageConfig.continueButtonLabel}</button>
                  </div>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="relative right-img w-100 flex justify-end">
                  <img
                    src={welcomeImage}
                    alt="Dashboard preview"
                    className="absolute"
                    style={{ borderRadius: '8px', bottom: "-60px" }}
                  />
                </div>
              </Grid.Cell>
            </Grid>
          </div>
        </Card>
      </section>
    </Page>
  );
}
