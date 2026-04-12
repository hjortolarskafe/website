import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  // 'local' means it saves files straight to your computer right now.
  // We will change this to 'github' later when we put it live!
  storage: {
    kind: 'local',
  },
  
  // Singletons are for things where there is only ONE of them (like site settings or opening hours)
  singletons: {
    openingHours: singleton({
      label: 'Öppettider (Opening Hours)',
      path: 'src/data/openingHours',
      format: { data: 'json' },
      schema: {
        monFri: fields.text({ label: 'Måndag - Fredag', defaultValue: '08:00 - 18:00' }),
        saturday: fields.text({ label: 'Lördag', defaultValue: '09:00 - 16:00' }),
        sunday: fields.text({ label: 'Söndag', defaultValue: 'Stängt' }),
      },
    }),
  },

  collections: {
    menu: collection({
      label: 'Meny (Menu Items)',
      slugField: 'title',
      path: 'src/data/menu/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Namn på rätt/bakverk (Name)' } }),
        description: fields.text({ label: 'Kort beskrivning (Description)' }),
        // This checkbox is the magic toggle!
        isActive: fields.checkbox({
          label: 'Visa på dagens meny? (Show on menu today?)',
          defaultValue: true,
          description: 'Kryssa ur denna om du vill spara rätten i systemet men dölja den från hemsidan.'
        }),
        // This creates a multi-select dropdown for your dietary flags
        dietary: fields.multiselect({
          label: 'Allergier / Kost (Dietary flags)',
          options: [
            { label: 'Vegan', value: 'Vegan' },
            { label: 'Vegetarisk', value: 'Vegetarisk' },
            { label: 'Glutenfri', value: 'Glutenfri' },
            { label: 'Laktosfri', value: 'Laktosfri' },
            { label: 'Nötfri', value: 'Nötfri' },
          ],
          defaultValue: [],
        }),
      },
    }),
  },
});