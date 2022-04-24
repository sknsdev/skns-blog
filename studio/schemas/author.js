export default {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      title: "Full Name",
      name: "full_name",
      type: "string",
      validation: (Rule) => [Rule.required().error("Full Name is required")],
    },
    {
      title: "About author",
      name: "about_author",
      type: "text",
    },
    {
      title: "Avatar",
      name: "avatar",
      type: "image",
      validation: (Rule) => [Rule.required().error("Author image is required")],
    },
  ],
};
