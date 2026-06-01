import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  // 'local' means it saves files straight to your computer right now.
  // We will change this to 'github' later when we put it live!
  storage: {
    kind: 'local',
    // repo: {
    //   owner: 'hjortolarskafe',
    //   name: 'website',
    // },
  },
  
  // Singletons are for things where there is only ONE of them (like site settings or opening hours)
  singletons: {
    openingHours: singleton({
      label: 'Öppettider (Opening Hours)',
      path: 'src/data/openingHours',
      format: { data: 'json' },
      schema: {
        monday: fields.text({ label: 'Måndag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        tuesday: fields.text({ label: 'Tisdag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        wednesday: fields.text({ label: 'Onsdag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        thursday: fields.text({ label: 'Torsdag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        friday: fields.text({ label: 'Fredag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        saturday: fields.text({ label: 'Lördag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
        sunday: fields.text({ label: 'Söndag', defaultValue: '11 - 16' , description: 'Lämna tomt om det är stängt'}),
      },
    }),
    homepage: singleton({
      label: 'Startsida (Homepage Text)',
      path: 'src/content/index',
      format: { data: 'json' }, // JSON is the perfect, clean format for simple text!
      schema: {
        // Swedish Fields
        text_sv: fields.text({ label: 'Text (Svenska)', multiline: true }),
        
        // English Fields
        text_en: fields.text({ label: 'Text (English)', multiline: true }),
        
        // German Fields
        text_de: fields.text({ label: 'Text (Deutsch)', multiline: true }),
      },
    }),
    about: singleton({
      label: 'Om oss (About Text)',
      path: 'src/content/about',
      format: { data: 'json' },
      schema: {
        // Swedish Fields
        text_sv: fields.text({ label: 'Text (Svenska)', multiline: true }),
        
        // English Fields
        text_en: fields.text({ label: 'Text (English)', multiline: true }),
        
        // German Fields
        text_de: fields.text({ label: 'Text (Deutsch)', multiline: true }),
      },
    }),
    afternoonTea: singleton({
      label: 'Afternoon Tea (Text)',
      path: 'src/content/afternoon-tea',
      format: { data: 'json' },
      schema: {
        // Swedish Fields
        text_sv: fields.text({ label: 'Text (Svenska)', multiline: true }),
        
        // English Fields
        text_en: fields.text({ label: 'Text (English)', multiline: true }),
        
        // German Fields
        text_de: fields.text({ label: 'Text (Deutsch)', multiline: true }),
      },
    }),
    booking: singleton({
      label: 'Boka / Beställ (Text)',
      path: 'src/content/booking',
      format: { data: 'json' },
      schema: {
        // Swedish Fields
        text_sv: fields.text({ label: 'Text (Svenska)', multiline: true }),
        
        // English Fields
        text_en: fields.text({ label: 'Text (English)', multiline: true }),
        
        // German Fields
        text_de: fields.text({ label: 'Text (Deutsch)', multiline: true }),
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

        image: fields.image({
          label: 'Bild (Image)',
          // This tells Keystatic to save uploaded files into your public folder
          directory: 'public/images/menu', 
          // This is the URL Astro will use to display the image
          publicPath: '/images/menu/', 
        }),

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

    events: collection({
      label: 'Evenemang (Events)',
      slugField: 'title',
      path: 'src/data/events/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titel (Title)' } }),
        date: fields.date({
          label: 'Datum (Date)',
          description: 'Vilken dag sker detta?',
          validation: { isRequired: true }
        }),
        eventType: fields.select({
          label: 'Typ av event (Event Type)',
          description: 'Vad är detta för typ av event?',
          options: [
            { label: 'Open', value: 'open' },
            { label: 'Afternoon Tea', value: 'afternoon-tea' },
            { label: 'Privat Event / Abonnerat', value: 'private' },
            { label: 'Closed', value: 'closed' },
          ],
          defaultValue: 'open', // Makes it act like a normal day by default
        }),
        hasAvailableSpots: fields.checkbox({
          label: 'Finns det lediga platser? (Available spots)',
          description: 'Kryssa ur denna när eventet är fullbokat!',
          defaultValue: true, // It defaults to true when you create a new event
        }),
        description: fields.text({ label: 'Kort beskrivning (Description)' }),
      },
    }),
  },
});