// ============================================================
// MENU DATA — Replace `image: null` with your image paths
// e.g. image: '/images/tartuffo-pasta.jpg'
// ============================================================

export const menuData = {
  pasta: [
    {
      id: 'p1',
      name: 'Tartuffo Pasta',
      descEl: 'Χειροποίητα ζυμαρικά με τρούφα, κρέμα γάλακτος και παρμεζάνα',
      descEn: 'Handmade pasta with truffle, cream and parmesan',
      price: '€8.50',
      popular: true,
      image: null, // TODO: Replace with '/images/tartuffo-pasta.jpg'
    },
    {
      id: 'p2',
      name: 'Mac N Cheese Pasta',
      descEl: 'Κλασική συνταγή με τρία τυριά και τραγανή κρούστα',
      descEn: 'Classic recipe with three cheeses and a crispy crust',
      price: '€7.00',
      popular: true,
      image: null, // TODO: Replace with '/images/mac-n-cheese.jpg'
    },
    {
      id: 'p3',
      name: 'Rigatoni Bolognese',
      descEl: 'Παραδοσιακή μπολονέζ σάλτσα με φρέσκο κιμά και βασιλικό',
      descEn: 'Traditional bolognese sauce with fresh minced meat and basil',
      price: '€7.50',
      popular: true,
      image: null, // TODO: Replace with '/images/rigatoni-bolognese.jpg'
    },
    {
      id: 'p4',
      name: 'Cacio e Pepe',
      descEl: 'Η κλασική ρωμαϊκή συνταγή με πεκορίνο και μαύρο πιπέρι',
      descEn: 'The classic Roman recipe with pecorino and black pepper',
      price: '€7.00',
      popular: false,
      image: null, // TODO: Replace with '/images/cacio-e-pepe.jpg'
    },
    {
      id: 'p5',
      name: 'Penne Arrabbiata',
      descEl: 'Σπιτική σάλτσα ντομάτας με καυτερή πιπεριά και σκόρδο',
      descEn: 'Homemade tomato sauce with chili pepper and garlic',
      price: '€6.50',
      popular: false,
      image: null, // TODO: Replace with '/images/penne-arrabbiata.jpg'
    },
    {
      id: 'p6',
      name: 'Pasta Carbonara',
      descEl: 'Αυθεντική καρμπονάρα με guanciale, αυγό και πεκορίνο',
      descEn: 'Authentic carbonara with guanciale, egg and pecorino',
      price: '€8.00',
      popular: false,
      image: null, // TODO: Replace with '/images/carbonara.jpg'
    },
  ],
  salads: [
    {
      id: 's1',
      name: 'Caesar Salad',
      descEl: 'Μαρούλι romaine, κρουτόν, παρμεζάνα, σάλτσα Caesar',
      descEn: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
      price: '€6.00',
      popular: true,
      image: null, // TODO: Replace with '/images/caesar-salad.jpg'
    },
    {
      id: 's2',
      name: 'Greek Salad',
      descEl: 'Φρέσκα λαχανικά, φέτα ΠΟΠ, ελιές Καλαμάτας',
      descEn: 'Fresh vegetables, PDO feta cheese, Kalamata olives',
      price: '€5.50',
      popular: false,
      image: null, // TODO: Replace with '/images/greek-salad.jpg'
    },
    {
      id: 's3',
      name: 'Rucola & Parmesan',
      descEl: 'Ρόκα, παρμεζάνα, κερασάτα ντοματίνια, βινεγκρέτ λεμονιού',
      descEn: 'Arugula, parmesan, cherry tomatoes, lemon vinaigrette',
      price: '€6.50',
      popular: false,
      image: null, // TODO: Replace with '/images/rucola-salad.jpg'
    },
  ],
  drinks: [
    {
      id: 'd1',
      name: 'House Red Wine',
      descEl: 'Επιλεγμένο κρασί της ημέρας, ποτήρι',
      descEn: 'Selected wine of the day, by the glass',
      price: '€4.50',
      popular: false,
      image: null, // TODO: Replace with '/images/red-wine.jpg'
    },
    {
      id: 'd2',
      name: 'Sparkling Water',
      descEl: 'Ανθρακούχο νερό 500ml',
      descEn: 'Sparkling water 500ml',
      price: '€1.50',
      popular: false,
      image: null, // TODO: Replace with '/images/sparkling-water.jpg'
    },
    {
      id: 'd3',
      name: 'Fresh Lemonade',
      descEl: 'Φρεσκοστυμμένη λεμονάδα με δυόσμο',
      descEn: 'Freshly squeezed lemonade with mint',
      price: '€3.50',
      popular: true,
      image: null, // TODO: Replace with '/images/lemonade.jpg'
    },
  ],
}

// ============================================================
// GALLERY DATA — Replace `src: null` with your image paths
// e.g. src: '/images/gallery-1.jpg'
// ============================================================
export const galleryData = [
  { id: 'g1', captionEl: 'Η κουζίνα μας', captionEn: 'Our kitchen', src: null },
  { id: 'g2', captionEl: 'Χειροποίητη ζύμη', captionEn: 'Handmade dough', src: null },
  { id: 'g3', captionEl: 'Tartuffo Pasta', captionEn: 'Tartuffo Pasta', src: null },
  { id: 'g4', captionEl: 'Ο χώρος μας', captionEn: 'Our space', src: null },
  { id: 'g5', captionEl: 'Η εμπειρία', captionEn: 'The experience', src: null },
  { id: 'g6', captionEl: 'Φρέσκα υλικά', captionEn: 'Fresh ingredients', src: null },
]

export const reviews = [
  {
    id: 'r1',
    nameEl: 'Μαρία Κ.',
    nameEn: 'Maria K.',
    textEl: 'Καταπληκτική χειροποίητη ζυμαρικά, συγκρίσιμα με αυτά της Ιταλίας! Θα επιστρέψω σίγουρα.',
    textEn: 'Amazing homemade pasta, comparable to Italy! I will definitely be back.',
    rating: 5,
    date: '2024-11',
  },
  {
    id: 'r2',
    nameEl: 'Γιώργης Π.',
    nameEn: 'Giorgis P.',
    textEl: 'Μεγάλες μερίδες, ποιοτικά υλικά και άψογες τιμές. Το καλύτερο pasta bar της περιοχής!',
    textEn: 'Great portions, quality ingredients and excellent prices. The best pasta bar in the area!',
    rating: 5,
    date: '2024-10',
  },
  {
    id: 'r3',
    nameEl: 'Ελένη Σ.',
    nameEn: 'Eleni S.',
    textEl: 'Επαγγελματικό και φιλικό προσωπικό. Η εμπειρία φαγητού εδώ είναι μοναδική.',
    textEn: 'Professional and friendly staff. The dining experience here is unique.',
    rating: 5,
    date: '2024-09',
  },
]
