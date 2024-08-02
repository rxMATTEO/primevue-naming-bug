import {definePreset} from "@primevue/themes";
import Aura from '@primevue/themes/aura';

const index = {
  semantic: {
    colorScheme: {
      dark: {
        overlay: {
          modal: {
            background: 'var(--color-section)',
            borderColor: 'none',
          }
        },
      }
    },
  }
};

export default { preset: definePreset(Aura, index) };
//# sourceMappingURL=index.mjs.map
