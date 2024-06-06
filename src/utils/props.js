export const DEFAULT_COMPONENT = {
    CTA: {
      name: "CTA",
      props: {
        text: {
            type: "text",
            value: "CTA Text",
        },
        backgroundColor: {
            type: "text",
            value: "#4c64f2",
        },
        color: {
            type: "text",
            value: "#ffffff",
        },
        link: {
            type: "text",
            value: "#",
        },
        buttonText: {
            type: "text",
            value: "Pulsante",
        },
        buttonBackgroundColor: {
            type: "text",
            value: "blue",
        },
        buttonTextColor: {
            type: "text",
            value: "white",
        },
      },
    },
    Hero: {
      name: "Hero",
      props: {
        title: {
            type: "text",
            value: "Hero Title",
        },
        subtitle: {
            type: "text",
            value: "Hero Subtitle",
        },
        backgroundColor: {
            type: "text",
            value: "#f5f9ff",
        },
        color: {
            type: "text",
            value: "#182aa1",
        },
        type: {
            type: "select",
            value: "medium",
            options: ["small", "medium", "large"],
        },
        contentImage: {
            type: "text",
            value: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Blue_Morpho.jpg/1200px-Blue_Morpho.jpg",
        },
        imageOrientation: {
            type: "select",
            value: "left",
            options: ["left", "right"],
        },
      },
    },
    Features: {
        name: "Features",
        props: {
            title: {
                type: "text",
                value: "Features Title",
            },
            subtitle: {
                type: "text",
                value: "Features Subtitle",
            },
            features: {
                type: "list",
                value: [
                    {
                        title: "Feature 1",
                        description: "Feature 1 Description",
                        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                    },
                ],
            },
        },
  },
};