const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        claret: {
          'DEFAULT': "#AB4A6B",
          '100': "#FADEDB",
          '200': "#FAD1CC",
          '300': "#E4A7AF",
          '400': "#C67178",
          '500': "#AB4A6B",
          '600': "#731933"
        },
      }
    },
  },
  plugins: [],
};
