export interface Product {
  id: string;
  name: string;
  composition: string;
  category: string; // e.g. "Analgesic", "Antibiotic", "Feed Additive"
  division: "human-pharma" | "human-nutra" | "vet-pharma" | "vet-supplements" | "ectoparasiticides";
  form: "Tablet" | "Capsule" | "Injection" | "Oral Liquid" | "Bolus" | "Powder" | "Pour-on" | "Spray" | "Softgel";
  packSize: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  // --- Human Pharmaceuticals ---
  {
    id: "hp-1",
    name: "RUS-PARA 500",
    composition: "Paracetamol BP 500mg",
    category: "Analgesic & Antipyretic",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Blister",
    description: "Rapid relief from mild to moderate pain including headache, toothache, and lowering high fever."
  },
  {
    id: "hp-2",
    name: "AMOXY-RUS 500",
    composition: "Amoxicillin Trihydrate BP eq. to Amoxicillin 500mg",
    category: "Antibacterial / Antibiotic",
    division: "human-pharma",
    form: "Capsule",
    packSize: "10 x 10 Alu-Alu",
    description: "Broad-spectrum penicillin antibiotic used to treat bacterial infections of the respiratory tract, urinary tract, and skin."
  },
  {
    id: "hp-3",
    name: "AZITH-RUS 500",
    composition: "Azithromycin Dihydrate USP eq. to Azithromycin 500mg",
    category: "Macrolide Antibiotic",
    division: "human-pharma",
    form: "Tablet",
    packSize: "1 x 3 Blister / 1 x 5 Blister",
    description: "Advantageous short-course treatment for upper and lower respiratory tract infections, tonsillitis, and skin infections."
  },
  {
    id: "hp-4",
    name: "GLYCI-RUS 500",
    composition: "Metformin Hydrochloride IP 500mg",
    category: "Oral Antidiabetic",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 15 Blister",
    description: "First-line oral medication for the management of Type-2 diabetes mellitus, assisting in blood glucose control."
  },
  {
    id: "hp-5",
    name: "LIPID-RUS 10",
    composition: "Atorvastatin Calcium IP eq. to Atorvastatin 10mg",
    category: "Cardiovascular / Lipid-lowering",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Alu-Alu",
    description: "HMG-CoA reductase inhibitor (statin) used to lower cholesterol and triglycerides, reducing cardiovascular risk."
  },
  {
    id: "hp-6",
    name: "OME-RUS 20",
    composition: "Omeprazole BP 20mg (as enteric coated granules)",
    category: "Gastrointestinal / Proton Pump Inhibitor",
    division: "human-pharma",
    form: "Capsule",
    packSize: "10 x 10 Alu-Alu",
    description: "Highly effective PPI used to treat gastroesophageal reflux disease (GERD), peptic ulcers, and acid hypersecretion."
  },
  {
    id: "hp-7",
    name: "PANTO-RUS 40",
    composition: "Pantoprazole Sodium BP eq. to Pantoprazole 40mg",
    category: "Gastrointestinal / Proton Pump Inhibitor",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Alu-Alu",
    description: "Gastro-resistant formulation for hyperacidity, duodenal ulcers, and reflux esophagitis management."
  },
  {
    id: "hp-8",
    name: "CIPRO-RUS 500",
    composition: "Ciprofloxacin Hydrochloride USP eq. to Ciprofloxacin 500mg",
    category: "Fluoroquinolone Antibiotic",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Blister",
    description: "Potent fluoroquinolone antibacterial used for serious respiratory, urinary, bone, and gastrointestinal infections."
  },
  {
    id: "hp-9",
    name: "RUS-NAC 50",
    composition: "Diclofenac Sodium BP 50mg",
    category: "NSAID / Pain Specialist",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Blister",
    description: "Non-steroidal anti-inflammatory drug providing reliable relief from joint pain, arthritis, and muscle inflammation."
  },
  {
    id: "hp-10",
    name: "HIST-RUS 10",
    composition: "Cetirizine Hydrochloride BP 10mg",
    category: "Antihistamine / Anti-Allergy",
    division: "human-pharma",
    form: "Tablet",
    packSize: "10 x 10 Blister",
    description: "Non-sedating antihistamine for the relief of symptoms associated with seasonal allergic rhinitis and chronic urticaria."
  },

  // --- Human Nutraceuticals & Supplements ---
  {
    id: "hn-1",
    name: "VITA-RUS GOLD",
    composition: "Multivitamins, Essential Minerals, Ginseng & Trace Elements",
    category: "Daily Wellness & Vitality",
    division: "human-nutra",
    form: "Tablet",
    packSize: "3 x 10 Blister / Bottle of 30s",
    description: "Comprehensive health supplement designed to replenish daily nutritional gaps, boost immunity, and sustain energy levels."
  },
  {
    id: "hn-2",
    name: "CAL-RUS D3",
    composition: "Calcium Carbonate USP 1250mg eq. to Elemental Calcium 500mg + Vitamin D3 250 IU",
    category: "Bone & Joint Support",
    division: "human-nutra",
    form: "Tablet",
    packSize: "10 x 10 Blister",
    description: "Essential mineral-vitamin blend for optimal bone density, teeth strength, and prevention of osteopenia."
  },
  {
    id: "hn-3",
    name: "OMEGA-RUS 1000",
    composition: "Fish Oil BP 1000mg yielding EPA 180mg + DHA 120mg",
    category: "Cardiovascular & Cognitive Wellness",
    division: "human-nutra",
    form: "Softgel",
    packSize: "Bottle of 60s / 10 x 1 x 10 Blister",
    description: "Premium cold-pressed marine lipids providing highly purified EPA and DHA to protect cardiac vessels and brain health."
  },
  {
    id: "hn-4",
    name: "CO-RUS Q10",
    composition: "Coenzyme Q10 USP 100mg",
    category: "Cellular Energy & Cardiovascular Health",
    division: "human-nutra",
    form: "Capsule",
    packSize: "3 x 10 Alu-Alu",
    description: "Powerful antioxidant helper which maintains cardiac muscle efficiency and shields tissues from free-radical damage."
  },
  {
    id: "hn-5",
    name: "NEURO-RUS B12",
    composition: "Methylcobalamin (Vitamin B12) 1500mcg",
    category: "Neurological & Red Blood Cell Booster",
    division: "human-nutra",
    form: "Tablet",
    packSize: "10 x 10 Alu-Alu",
    description: "Active form of Vitamin B12 to support healthy nerve conduction, reduce numbness, and combat megaloblastic anemia."
  },
  {
    id: "hn-6",
    name: "HEMA-RUS Z",
    composition: "Carbonyl Iron eq. to Elemental Iron 100mg + Folic Acid 1.5mg + Zinc Sulfate 61.8mg",
    category: "Hematinic / Blood Enricher",
    division: "human-nutra",
    form: "Capsule",
    packSize: "10 x 10 Blister",
    description: "Superior iron absorption profile with minimal gastrointestinal discomfort. Ideal for pregnancy, lactation, and nutritional anemia."
  },
  {
    id: "hn-7",
    name: "RUS-COLLAGEN PEPTIDES",
    composition: "Hydrolyzed Collagen Peptides, Glucosamine, Chondroitin & Vitamin C",
    category: "Joint Matrix & Skin Restorative",
    division: "human-nutra",
    form: "Powder",
    packSize: "200g Premium Tin Jar",
    description: "Assists in lubricating joint cartilages, increasing flexibility, and enhancing skin elasticity from within."
  },

  // --- Veterinary Pharmaceuticals ---
  {
    id: "vp-1",
    name: "IVER-RUS 1% INJ",
    composition: "Ivermectin BP 1.0% w/v",
    category: "Broad-spectrum Endectocide",
    division: "vet-pharma",
    form: "Injection",
    packSize: "10ml / 50ml / 100ml Vial",
    description: "Highly effective systemic therapy for the control of internal roundworms, lungworms, and external mites, lice, and grubs in cattle, sheep, and swine."
  },
  {
    id: "vp-2",
    name: "ALBEN-RUS 600 BOLUS",
    composition: "Albendazole USP 600mg",
    category: "Broad-spectrum Anthelmintic",
    division: "vet-pharma",
    form: "Bolus",
    packSize: "10 x 4 Bolus Box",
    description: "Single-dose deworming bolus targeting adult and larval roundworms, lungworms, tapeworms, and adult liver flukes in livestock."
  },
  {
    id: "vp-3",
    name: "ENRO-RUS 10% ORAL",
    composition: "Enrofloxacin USP 10% w/v",
    category: "Broad-spectrum Antibacterial",
    division: "vet-pharma",
    form: "Oral Liquid",
    packSize: "100ml / 500ml / 1L Bottle",
    description: "Fluoroquinolone chemotherapeutic indicated for complicated gastrointestinal, respiratory, and urinary bacterial infections in poultry and calves."
  },
  {
    id: "vp-4",
    name: "MELO-RUS 5 INJ",
    composition: "Meloxicam BP 5mg/ml",
    category: "Non-Steroidal Anti-inflammatory (NSAID)",
    division: "vet-pharma",
    form: "Injection",
    packSize: "30ml / 100ml Vial",
    description: "Rapidly acts to reduce pain, fever, and acute inflammation associated with mastitis, pneumonia, and musculoskeletal disorders in livestock."
  },
  {
    id: "vp-5",
    name: "OTC-RUS 20% L.A. INJ",
    composition: "Oxytetracycline Dihydrate eq. to Oxytetracycline 200mg/ml (L.A.)",
    category: "Long-acting Tetracycline Antibiotic",
    division: "vet-pharma",
    form: "Injection",
    packSize: "50ml / 100ml Glass Vial",
    description: "Formulated to provide sustained therapeutic blood levels for 3 days after a single deep intramuscular dose. Treats shipping fever, anaplasmosis, and mastitis."
  },
  {
    id: "vp-6",
    name: "FEN-RUS 2.5% SUSP",
    composition: "Fenbendazole BP 2.5% w/v",
    category: "Anthelmintic (Dewormer)",
    division: "vet-pharma",
    form: "Oral Liquid",
    packSize: "100ml / 500ml / 1L Bottle",
    description: "Safe, broad-spectrum oral dewormer for cattle, sheep, and goats, targeting nematodes and tapeworms without affecting milk yield."
  },
  {
    id: "vp-7",
    name: "CEFTI-RUS 1.0G STERILE",
    composition: "Sterile Ceftiofur Sodium eq. to Ceftiofur 1.0g",
    category: "Third-Generation Cephalosporin",
    division: "vet-pharma",
    form: "Injection",
    packSize: "1g Vial with Sterile Diluent",
    description: "Advanced veterinary antibiotic of choice for acute bovine respiratory disease (shipping fever) and acute bovine interdigital necrobacillosis (foot rot)."
  },

  // --- Veterinary Feed Supplements ---
  {
    id: "vs-1",
    name: "RUS-CAL LIQUID",
    composition: "Calcium Phosphates, Vitamin D3, B12, and Carbohydrates",
    category: "High-yield Lactation & Growth Booster",
    division: "vet-supplements",
    form: "Oral Liquid",
    packSize: "1L / 5L / 10L Can",
    description: "Rich, highly bioavailable calcium-phosphorus feed supplement. Drastically increases milk yield in dairy cattle, prevents milk fever, and supports bone density."
  },
  {
    id: "vs-2",
    name: "RUS-MIX CHELATED",
    composition: "Chelated Essential Minerals, Vitamins, Yeast Culture & Amino Acids",
    category: "Complete Mineral Optimization Supplement",
    division: "vet-supplements",
    form: "Powder",
    packSize: "1kg Bag / 5kg Bag / 25kg Bulk Bag",
    description: "Fortified with chelated (organic) trace minerals for superior bioavailability. Optimizes reproductive efficiency, improves conception rates, and enhances fat percentage."
  },
  {
    id: "vs-3",
    name: "HEPA-RUS LIVER TONIC",
    composition: "Choline Chloride, Liver Extract, B-Complex Vitamins & Herbal Extract Mix",
    category: "Hepatoprotective & Metabolic Stimulant",
    division: "vet-supplements",
    form: "Oral Liquid",
    packSize: "500ml / 1L / 5L Can",
    description: "Protects animal liver parenchyma from mycotoxins, stimulates appetite, improves feed conversion ratio (FCR), and facilitates rapid weight recovery."
  },
  {
    id: "vs-4",
    name: "RUS-BIND ULTRA",
    composition: "HSCAS, Organic Acids, Mannan Oligosaccharides (MOS) & Carbon Activators",
    category: "Broad-Spectrum Toxin Binder",
    division: "vet-supplements",
    form: "Powder",
    packSize: "25kg Multi-wall Paper Bag",
    description: "High-grade feed-additive designed to lock polar and non-polar mycotoxins, prevent mold growth in stored feed, and improve poultry survival rates."
  },
  {
    id: "vs-5",
    name: "HEAT-RUS ELECTROLYTES",
    composition: "Sodium, Potassium, Dextrose Monohydrate, Vitamin C & Betaine",
    category: "Anti-Heat Stress Powder",
    division: "vet-supplements",
    form: "Powder",
    packSize: "200g Sachet / 1kg Pouch",
    description: "Essential hydration restorer to protect poultry, cattle, and goats from extreme summer heat stress, preventing dehydration and respiratory alkalosis."
  },
  {
    id: "vs-6",
    name: "RUS-FAT BYPASS",
    composition: "Fractionated Palm Fats (Rumen Bypass Fatty Acids 99%)",
    category: "Rumen Bypass Energy Boost",
    division: "vet-supplements",
    form: "Powder",
    packSize: "25kg Bag",
    description: "Highly digestible dry rumen bypass fat, delivering dense energy to early lactating dairy cows to mitigate negative energy balance and improve milk fat."
  },

  // --- Ectoparasiticides ---
  {
    id: "ep-1",
    name: "AMITRAZ-RUS 12.5% EC",
    composition: "Amitraz BP 12.5% w/v",
    category: "Ectoparasiticide / Acaricide",
    division: "ectoparasiticides",
    form: "Pour-on",
    packSize: "15ml / 50ml / 250ml / 1L Alum Bottle",
    description: "Highly effective emulsifiable concentrate for spraying or dipping livestock to treat and control ticks, mange mites, lice, and keds on cattle, sheep, goats, and pigs."
  },
  {
    id: "ep-2",
    name: "CYPER-RUS 10%",
    composition: "Cypermethrin BP 10% w/v",
    category: "Synthetic Pyrethroid Ectoparasiticide",
    division: "ectoparasiticides",
    form: "Pour-on",
    packSize: "100ml / 1L HDPE Bottle",
    description: "Broad-spectrum contact insecticide for cattle and poultry houses to kill fleas, house flies, lice, and stable flies. Long residual protection."
  },
  {
    id: "ep-3",
    name: "DELTA-RUS POUR-ON",
    composition: "Deltamethrin BP 1.25% w/v",
    category: "Convenient Pour-On Parasiticide",
    division: "ectoparasiticides",
    form: "Pour-on",
    packSize: "250ml / 1L Squeeze & Measure Bottle",
    description: "Extremely easy-to-use pour-on application along the spine. Protects dairy herds and sheep from biting lice, tsetse flies, stable flies, and ticks for up to 6 weeks."
  },
  {
    id: "ep-4",
    name: "FLUME-RUS 1% POUR-ON",
    composition: "Flumethrin 1% w/v",
    category: "Acaricide & Tick Specialist",
    division: "ectoparasiticides",
    form: "Pour-on",
    packSize: "250ml / 500ml / 1L Squeeze Measure Bottle",
    description: "Surgical ectoparasiticide designed specifically for elimination of resistant ticks (including Boophilus spp) in cattle. Extremely low systemic toxicity."
  },
  {
    id: "ep-5",
    name: "FIPRO-RUS SPRAY",
    composition: "Fipronil BP 0.25% w/v",
    category: "Companion Animal Flea & Tick Guard",
    division: "ectoparasiticides",
    form: "Spray",
    packSize: "100ml / 250ml Spray Pump Bottle",
    description: "Specially formulated safety-spray for cats and dogs, instantly killing fleas, ticks, and chewing lice. Keeps companion pets free of infestation for up to 3 months."
  }
];
