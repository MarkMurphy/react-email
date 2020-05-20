import React from 'react';
import {
  Body,
  Button,
  Column,
  Head,
  Section,
  Spacer,
  Style,
  Template,
  Text,
} from './components';

function Email(props: any) {
  return (
    <Template>
      <Head>
        <title>Example Email</title>
        <Style>{`
          body {
            background-color: #fafafa;
          }
        `}</Style>
      </Head>
      <Body>
        <Section>
          <Column>
            <Text align="center">Hello {props.name}</Text>
          </Column>
        </Section>

        <Section>
          <Column>
            <Text>Head</Text>
            <Spacer />
            <Button href="/">Button</Button>
            <Spacer />
            <Text>Foot</Text>
          </Column>
        </Section>

        <Section>
          <Column>
            <Button href="/">Left Side</Button>
          </Column>
          <Column>
            <Button href="/">Center</Button>
          </Column>
          <Column>
            <Button href="/">Right Size</Button>
          </Column>
        </Section>

        <Section>
          <Column>
            <Text align="center">Footer</Text>
          </Column>
        </Section>
      </Body>
    </Template>
  );
}

export default Email;
