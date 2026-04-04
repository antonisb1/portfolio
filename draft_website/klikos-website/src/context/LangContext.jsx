import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  el: {
    // Nav
    navHome: 'Αρχική',
    navAbout: 'Σχετικά',
    navMenu: 'Μενού',
    navServices: 'Υπηρεσίες',
    navContact: 'Επικοινωνία',
    orderNow: 'Παραγγελία Τώρα',

    // Hero
    heroBadge: 'Ανοιχτά Καθημερινά από 13:00',
    heroTitle1: 'Φρέσκια Χειροποίητη',
    heroTitle2: 'Ζυμαρικά',
    heroAccent: 'Φτιαγμένα Καθημερινά',
    heroSub: 'Απολαύστε αυθεντική ιταλική κουζίνα με φρέσκα υλικά και χειροποίητα ζυμαρικά στην καρδιά της Ελευσίνας',
    heroMenu: 'Δείτε το Μενού →',
    heroVisit: 'Επισκεφτείτε μας',
    heroRating: '4.7 βάσει 311 κριτικών',

    // About
    aboutLabel: 'Η Ιστορία μας',
    aboutTitle: 'Πάθος για Αυθεντικά Ζυμαρικά',
    aboutP1: 'Στην Klikos, κάθε πιάτο αρχίζει με φρέσκια ζύμη που φτιάχνεται την ίδια μέρα. Χρησιμοποιούμε επιλεγμένα υλικά από τοπικούς προμηθευτές για να σας προσφέρουμε τη γεύση της αυθεντικής ιταλικής παράδοσης.',
    aboutP2: 'Το προσωπικό μας, με επαγγελματική εκπαίδευση και πάθος για το φαγητό, είναι πάντα εδώ για να σας εξυπηρετήσει με χαμόγελο και αγάπη.',
    feat1Title: 'Φρέσκα Υλικά',
    feat1Sub: 'Επιλεγμένα καθημερινά',
    feat2Title: 'Χειροποίητα Ζυμαρικά',
    feat2Sub: 'Φτιαγμένα με αγάπη',
    feat3Title: 'Επαγγελματικό Προσωπικό',
    feat3Sub: 'Φιλική εξυπηρέτηση',

    // Menu
    menuLabel: 'Γεύσεις',
    menuTitle: 'Το Μενού μας',
    menuSub: 'Ανακαλύψτε τα πιο δημοφιλή μας πιάτα',
    tabPasta: 'Ζυμαρικά',
    tabSalads: 'Σαλάτες',
    tabDrinks: 'Ποτά',
    popular: 'Δημοφιλές',
    addPlaceholder: 'Προσθέστε Εικόνα',
    viewFullMenu: 'Δείτε το Πλήρες Μενού →',

    // Services
    servicesLabel: 'Πώς Λειτουργούμε',
    servicesTitle: 'Οι Υπηρεσίες μας',
    svc1Title: 'Dine-In',
    svc1Sub: 'Απολαύστε τα πιάτα μας σε ζεστό περιβάλλον',
    svc2Title: 'Takeaway',
    svc2Sub: 'Παραλάβετε την παραγγελία σας',
    svc3Title: 'Delivery',
    svc3Sub: 'Ανέπαφη παράδοση στην πόρτα σας',

    // Reviews
    reviewsLabel: 'Τι Λένε οι Πελάτες',
    reviewsTitle: 'Κριτικές',

    // Gallery
    galleryLabel: 'Ατμόσφαιρα',
    galleryTitle: 'Στιγμές από το Klikos',
    galleryPlaceholder: 'Προσθέστε Φωτογραφία',

    // Contact
    contactLabel: 'Βρείτε μας',
    contactTitle: 'Επικοινωνία & Τοποθεσία',
    address: 'Νικολαΐδου 5, Ελευσίνα 192 00',
    phone: '+30 21 0554 7352',
    hours: 'Καθημερινά: 13:00 – 24:00',
    getDirections: 'Οδηγίες →',
    callUs: 'Καλέστε μας',

    // Footer
    footerTagline: 'Φρέσκια Χειροποίητη Ζυμαρικά από το 2020',
    footerRights: '© 2025 Klikos The Pasta Bar. Όλα τα δικαιώματα διατηρούνται.',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navMenu: 'Menu',
    navServices: 'Services',
    navContact: 'Contact',
    orderNow: 'Order Now',

    heroBadge: 'Open Daily from 1 PM',
    heroTitle1: 'Fresh Handmade',
    heroTitle2: 'Pasta',
    heroAccent: 'Made Every Day',
    heroSub: 'Experience authentic Italian cuisine with fresh ingredients and handmade pasta in the heart of Elefsina, Greece',
    heroMenu: 'View Menu →',
    heroVisit: 'Visit Us',
    heroRating: '4.7 based on 311 reviews',

    aboutLabel: 'Our Story',
    aboutTitle: 'Passion for Authentic Pasta',
    aboutP1: 'At Klikos, every dish starts with fresh dough made the same day. We use carefully selected ingredients from local suppliers to bring you the taste of authentic Italian tradition.',
    aboutP2: 'Our professionally trained team, passionate about food, is always here to serve you with a smile and love for what they do.',
    feat1Title: 'Fresh Ingredients',
    feat1Sub: 'Selected daily',
    feat2Title: 'Handmade Pasta',
    feat2Sub: 'Made with love',
    feat3Title: 'Professional Staff',
    feat3Sub: 'Friendly service',

    menuLabel: 'Flavors',
    menuTitle: 'Our Menu',
    menuSub: 'Discover our most popular dishes',
    tabPasta: 'Pasta',
    tabSalads: 'Salads',
    tabDrinks: 'Drinks',
    popular: 'Popular',
    addPlaceholder: 'Add Image',
    viewFullMenu: 'View Full Menu →',

    servicesLabel: 'How We Work',
    servicesTitle: 'Our Services',
    svc1Title: 'Dine-In',
    svc1Sub: 'Enjoy our dishes in a warm atmosphere',
    svc2Title: 'Takeaway',
    svc2Sub: 'Pick up your order',
    svc3Title: 'Delivery',
    svc3Sub: 'No-contact delivery to your door',

    reviewsLabel: 'What Customers Say',
    reviewsTitle: 'Reviews',

    galleryLabel: 'Atmosphere',
    galleryTitle: 'Moments at Klikos',
    galleryPlaceholder: 'Add Photo',

    contactLabel: 'Find Us',
    contactTitle: 'Contact & Location',
    address: 'Nikolaidou 5, Elefsina 192 00, Greece',
    phone: '+30 21 0554 7352',
    hours: 'Daily: 1:00 PM – 12:00 AM',
    getDirections: 'Get Directions →',
    callUs: 'Call Us',

    footerTagline: 'Fresh Handmade Pasta since 2020',
    footerRights: '© 2025 Klikos The Pasta Bar. All rights reserved.',
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('el')
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'el' ? 'en' : 'el')
  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
