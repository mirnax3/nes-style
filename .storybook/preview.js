import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../src/global.css';
import "nes.css/css/nes.min.css";
import "https://fonts.googleapis.com/css?family=Press+Start+2P"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
