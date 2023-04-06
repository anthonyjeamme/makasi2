import { GetServerSideProps } from "next";
import Page from "@/makasi/core/Page/Page";
import { TPageData } from "@/makasi/core/PageEdition/Page.types";
import { headerSectionDefinition } from "@/sections/HeaderSection/HeaderSection.definition";
import { paragraphSectionDefinition } from "@/sections/ParagraphSection/ParagraphSection.definition";
import { FC } from "react";
import { introSectionDefinition } from "@/sections/IntroSection/IntroSection.definition";
import { danspratlingSections } from "@/sections/danspratling";

interface THomeProps {
  pageData: TPageData;
}

export const Home: FC<THomeProps> = ({ pageData }) => {
  return (
    <div>
      <Page pageData={pageData} sectionsDefinitions={sectionsDefinitions} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      pageData,
    },
  };
};

const sectionsDefinitions = [...danspratlingSections];

const pageData = {
  id: "home",
  metadata: {
    title: "Page d'exemple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://images.unsplash.com/photo-1679939099455-6fb0ec91e794?auto=format&fit=crop&w=500&q=60",
    canonical: "https://google.com",
    url: "https://google.com",
  },
  sections: [
    {
      id: "lg45ngmo",
      name: "danspratling/header-section",
      params: {
        background: { type: "color", color: "--dark" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { text: "I create beautiful websites your users will love" },
        overtitle: { text: "Design. Build. Improve." },
        button: {
          content: "Make it happen",
          backgroundColor: "--primary",
          textColor: "--white",
        },
      },
    },
    {
      id: "lg46h3la",
      name: "danspratling/portfolio-section",
      params: {
        background: { type: "color", color: "--primary" },
        textColor: { color: "--light" },
      },
      fieldsData: {},
    },
    {
      id: "lg46olga",
      name: "danspratling/arguments-section",
      params: {
        background: { type: "color", color: "--dark" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { text: "Everything you need for a perfect website" },
        linktext: { text: "Find out more about my services" },
        "arg-title-0": { text: "Website Review" },
        "arg-title-1": { text: "Business Strategy" },
        "arg-title-2": { text: "User Experience Design" },
        "arg-title-5": { text: "Ongoing Support" },
        "arg-title-4": { text: "Rigorous Testing" },
        "arg-title-3": { text: "Tailored Development" },
        "arg-text-0": {
          text: "I make sure your website is performing its best by thoroughly reviewing it before making any changes.",
        },
        "arg-text-3": {
          text: "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.",
        },
        "arg-text-5": {
          text: "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.",
        },
        "arg-text-4": {
          text: "I ensure your website is of excellent quality by thoroughly testing using multiple approaches.",
        },
        "arg-text-2": {
          text: "I design your website to be as easy to use as possible while guiding users towards the end goal.",
        },
        "arg-text-1": {
          text: "We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.",
        },
      },
    },
    {
      id: "lg47esbh",
      name: "danspratling/contact-section",
      params: {
        background: { type: "color", color: "--dark" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { text: "I'm Tony" },
        text: {
          text: "I help growing companies like yours convert more customers and make more sales by combining your goals with your user’s needs.",
        },
      },
    },
    {
      id: "lg47h0a5",
      name: "danspratling/testimonials-section",
      params: {
        background: { type: "color", color: "--neutralmuted" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { text: "Bringing a personal touch" },
        text: {
          text: "Building a great website is more than just knowing how to make things look pretty or writing clever code. I listen to your needs, ensuring you get a product you’re happy with. Listen to the great things others have said.\n\n",
        },
      },
    },
    {
      id: "lg47iopw",
      name: "danspratling/trust-section",
      params: {
        background: { type: "color", color: "--dark" },
        textColor: { color: "--light" },
      },
      fieldsData: { title: { text: "Trusted by teams" } },
    },
    {
      id: "lg47q50x",
      name: "danspratling/getting-started-section",
      params: {
        background: { type: "color", color: "--dark" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { text: "Where do we start?" },
        paragraph: {
          text: "Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals. I only work with two people each month so book a call now to avoid missing out.\n\n",
        },
      },
    },
  ],
  layout: {},
};
