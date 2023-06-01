import type { TinaField } from "tinacms";
export function recipe_templatesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      options: [
        "Breakfast",
        "Christmas",
        "Dinner",
        "Easter",
        "Holiday",
        "Needs Work",
        "Northern Italy",
        "Southern Italy",
        "Thanksgiving",
        "Mardi Gras",
      ],
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
      options: [
        "Appetizers",
        "Breads",
        "Breakfast",
        "Cookies",
        "Desserts",
        "Drinks",
        "Main Dishes",
        "Pasta",
        "Salads",
        "Sauces",
        "Sides",
        "Soups and Stews",
        "Fish and Seafood",
      ],
    },
    {
      type: "string",
      name: "prepTime",
      label: "prepTime",
    },
    {
      type: "string",
      name: "cookTime",
      label: "cookTime",
    },
    {
      type: "string",
      name: "servings",
      label: "servings",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "ingredients",
      label: "ingredients",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "directions",
      label: "directions",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
