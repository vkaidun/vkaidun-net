import { config, singleton, fields } from '@keystatic/core';

const keystaticConfig = config({
  storage: {
    kind: "github",
    repo: "vkaidun/vkaidun-net"
  },
  singletons: {
    hero: singleton({
      label: "Hero section",
      path: "src/content/hero",
      format: { data: "yaml" },
      schema: {
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        linkedinUrl: fields.url({ label: "LinkedIn URL" }),
        portfolioUrl: fields.url({ label: "Portfolio URL" }),
        behanceUrl: fields.url({ label: "Behance URL" })
      }
    }),
    services: singleton({
      label: "Services (What I Can Help With)",
      path: "src/content/services",
      format: { data: "yaml" },
      schema: {
        sectionTitle: fields.text({ label: "Section title" }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true })
          }),
          {
            label: "Services",
            itemLabel: (props) => props.fields.title.value || "Service"
          }
        )
      }
    }),
    howItWorks: singleton({
      label: "How It Works",
      path: "src/content/how-it-works",
      format: { data: "yaml" },
      schema: {
        sectionTitle: fields.text({ label: "Section title" }),
        content: fields.text({ label: "Content", multiline: true })
      }
    }),
    footer: singleton({
      label: "Footer",
      path: "src/content/footer",
      format: { data: "yaml" },
      schema: {
        charityText: fields.text({ label: "Charity message", multiline: true }),
        contactEmail: fields.text({ label: "Contact email" })
      }
    })
  }
});

export { keystaticConfig as k };
