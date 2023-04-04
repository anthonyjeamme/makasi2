import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const headerSectionDefinition: TSectionDefinition = {
  id: "header-section",
  Component: dynamic(() => import("./HeaderSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    title: {
      tag: "h1",
      text: "Title",
    },
    subtitle: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
    },
  }),
  getDefaultParams: () => ({
    background:
      "https://images.unsplash.com/photo-1550945364-6373abbd7a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    color: "white",
  }),
};
