import { Card, Page, Layout, TextContainer, Text, Grid, TextField } from "@shopify/polaris";
import identify from '../assets/images/risk.svg'
import { useCallback, useState } from "react";
import { welcomePageConfig } from "../utils/config";

const confirm = () => {
  const [username, setValue] = useState('Jaded Pixel');
  const [email, setEmail] = useState('john.smith@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+919876543210');
  const handleChangeName = useCallback(
    (newValue) => setValue(newValue),
    [],
  );
  const handleEmailChange = useCallback(
    (newValue) => setEmail(newValue),
    [],
  );
  const handleNumberChange = useCallback(
    (newValue) => setPhoneNumber(newValue),
    [],
  );

  return (
    <Page fullWidth title={welcomePageConfig.pagetitle} >
      <section className="section-bottom">
        <Card sectioned>
          <div className="pt-70">
            <Grid>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="pt-60 pl-64">
                  <div className="page-title">
                    <Text variant="heading3xl" as="h2">
                      Confirm your Details
                    </Text></div>
                  <div className="custom-input-wrapper">
                    <TextField
                      label="What’s your name?"
                      value={username}
                      onChange={handleChangeName}
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-input-wrapper">
                    <TextField
                      label="What’s your email address?"
                      value={email}
                      onChange={handleEmailChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-input-wrapper">
                    <TextField
                      label="Phone number (with country code)"
                      value={phoneNumber}
                      onChange={handleNumberChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="mt-2">
                    <button type="button" role="button" className="common-btn" onClick={() => navigate('/')}>Get Started</button>
                  </div>
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <div className="w-100 right-img relative flex justify-end">
                  <img src={identify} alt="" />
                </div>
              </Grid.Cell>
            </Grid>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export default confirm 