import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'nes.css/css/nes.min.css';
import '../src/global.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
