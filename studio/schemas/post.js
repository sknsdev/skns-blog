export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => [
        Rule.required().min(10).error("Title must be atleast 10 characters"),
        Rule.required().max(60).warning("Title is too long"),
      ],
    },
    {
      title: "content",
      name: "content",
      type: "text",
      validation: (Rule) => [
        Rule.required().min(10).error("Text must be atleast 10 characters"),
        Rule.required().max(1200).warning("Text is too long"),
      ],
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => [
        Rule.required().error("Author is required"),
      ],
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "string",
      validation: (Rule) => [
        Rule.required().max(120).error("Excerpt is too long"),
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => [
        Rule.required().error("Image is required"),
      ],
    },
  ],
};
