import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "harsh",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "Home",
        label: "Homepage",
        path: "src/content/blog",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true }, // Added `required: true`
          { type: "string", name: "description", label: "Description" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "ctaText", label: "Note" },
          { type: "string", name: "ctaLink", label: "Note" },
        ],
      },
      {
         name: "About",//that represents name of the template in Tina CMS
          label: "About Me Page",//That Represents The collection Name in Tina CMS.
          path:"src/content/About",//represents the path from which tina fetch the value.
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
            { type: "datetime", name: "pubDate", label: "Publication Date" },
            { type: "image", name: "heroImage", label: "Hero Image" },
            { type: "rich-text", name: "content", label: "Content" },
          ],
      }
    ],
  },
});
