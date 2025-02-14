import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface WelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const PropDefaults: WelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          Discuss sexual health without fear of stigma.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          Share experiences and connect with like-minded individuals.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          Learn from experts with trusted insights and advice.
        </li>
      ),
    },
  ],
  links: ['Visit the app', 'Post a confession', 'Get an expert view'],
};

export const WelcomeEmail = ({
  steps = PropDefaults.steps,
  // links = PropDefaults.links,
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2e0536',
                offwhite: '#fafbfb',
                white: '#ffffff',
                black: '#000000',
                link: '#ed2790',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Preview>Glowvibeapp Welcome</Preview>
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`${baseUrl}/static/emailheader2.jpg`}
            width="100%"
            height="75"
            alt="glowvibe logo"
            className="mx-auto my-20"
          />
          <Container className="bg-white text-black p-45">
            <Heading className="text-start text-[24px] my-0 leading-[30px]">
              Welcome to GlowVibeapp
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  You are officially on the GlowVibeapp waitlist—welcome!
                </Text>

                <Text className="text-base">
                  We are building a safe, judgment-free, and completely anonymous space where you can:
                </Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Text className='text-base'>
              <strong>Stay Connected & Be the First to Know</strong>
            </Text>

            <Text className='text-base'>
              The best way to stay in the loop is by following us on social media. We all be sharing exclusive updates, expert insights, and launch details first on these platforms.
            </Text>

            <Row>
              <Text className='text-base'>
                <strong>Instagram:</strong> <Link href='https://www.instagram.com/glowvibeapp/' className="text-link underline font-bold">@glowvibeapp</Link>
              </Text>
              <Text className='text-base'>
                <strong>X (Twitter):</strong> <Link href='https://twitter.com/glowvibeapp' className="text-link underline font-bold">@glowvibeapp</Link>
              </Text>
            </Row>

            <Text className='text-base'>
              By following us, you’ll be the first to know when we go live and get exclusive content, special launch perks, and insider access.
            </Text>

            <Text className='text-base'>
              If you have any questions or suggestions, feel free to reply to this email. We’d love to hear from you.
            </Text>

            <Text className='text-base'>
              <strong>Best regards,</strong>
              <br />
              <strong>The GlowVibeapp Team</strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;