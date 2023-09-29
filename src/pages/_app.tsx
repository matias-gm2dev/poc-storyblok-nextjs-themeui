import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { ThemeProvider } from '@emotion/react';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { Grid } from '@/modules/shared/components/layout/Grid.component';
import { Stack } from '@/modules/shared/components/layout/Stack.component';
import { Page } from '@/modules/shared/components/layout/Page.component';
import { NavBar } from '@/modules/shared/components/navigation/NavBar.componet';
import { HeroBanner } from '@/modules/shared/components/custom/HeroBanner.components';
import { Heading } from '@/modules/shared/components/dataDisplay/Heading.component';
import { NavLink } from '@/modules/shared/components/navigation/NavLink.componet';
import { HorizontalTextSlide } from '@/modules/shared/components/custom/HorizontalTextSlide.component';
import { ImageCard } from '@/modules/shared/components/dataDisplay/ImageCard.component';
import { Container } from '@/modules/shared/components/layout/Container.component';
import { Image } from '@/modules/shared/components/dataDisplay/Image.componet';
import { NewsletterCard } from '@/modules/shared/components/forms/NewsletterCard.component';
import { ImageGrid } from '@/modules/shared/components/dataDisplay/ImageGrid.component';
import { Footer } from '@/modules/shared/components/layout/Footer.component';
import { darkTempation } from '@/modules/core/themes/darkTempation';
import { baseTheme } from '@/modules/core/themes/base';

const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const components = {
  grid: Grid,
  stack: Stack,
  heading: Heading,
  page: Page,
  navBar: NavBar,
  navLink: NavLink,
  heroBanner: HeroBanner,
  horizontalTextSlide: HorizontalTextSlide,
  imageCard: ImageCard,
  container: Container,
  image: Image,
  newsletterCard: NewsletterCard,
  imageGrid: ImageGrid,
  footer: Footer
};

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  components,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={baseTheme}>
      <style jsx global>{`
        :root {
          --font-body: ${sourceSans.style.fontFamily};
          --font-heading: ${montserrat.style.fontFamily};
        }
        * {
          padding: 0;
          margin: 0;
        }
        html {
          font-family: var(--font-body);
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
