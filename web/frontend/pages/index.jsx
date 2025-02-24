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

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <Page fullWidth title="Sentry Address Risk and Validation" >
      <section style={{ paddingBottom: "3rem" }}>
        <Card sectioned >
          <div style={{ paddingTop: "70px" }}>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div style={{ paddingLeft: "64px" }}>
                  <Text variant="heading3xl" as="h2">
                    Welcome
                  </Text>
                  <p style={{ marginTop: '15px', color: "#303030" }}>Sentry by Swift enables you to identify address risks that can lead to <br /> delivery issues.</p>
                  <p style={{ marginTop: '15px', color: "#303030" }}>Click on Continue to get started</p>
                  <div style={{ marginBlock: '12px' }}>
                    <button className="common-btn" onClick={() => navigate('identify')}>Continue</button>
                  </div>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div style={{
                  width: "100%", display: "flex", justifyContent: "end", height: "544px", position: "relative",
                }}>
                  <img
                    src={welcomeImage}
                    alt="Dashboard preview"
                    style={{ borderRadius: '8px', position: "absolute", bottom: "-60px" }}
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
