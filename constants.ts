import { ChartBar, Clock, DollarSign, Lock, MessageCircle, Smartphone, User, Users } from 'lucide-react';

export const CONTACT_INFO = {
  whatsapp: "918851666208",
  email: "suraj.gasdeveloper@gmail.com",
  displayPhone: "+91 88516 66208"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Owner Dashboard', href: '#dashboard' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Contact', href: '#contact' },
];

export const FEATURES_CUSTOMER = [
  {
    title: 'Dynamic Menu Catalog',
    desc: 'Purane zamane ki PDF menu bhejna band karein! CakeSarthi aapke cakes ko ek sunder grid mein dikhata hai with Category Filter (Chocolate, Vanilla, Fruit).',
    icon: 'Grid',
  },
  {
    title: 'Smart Cart & Add-ons',
    desc: 'Sirf cake hi kyu? Profit toh extra cheezo mein hai! Auto-suggest candles, toppers, and gift wrapping to increase order value by 20-30%.',
    icon: 'ShoppingCart',
  },
  {
    title: 'Occasion Tracking',
    desc: 'System customer se delivery time aur occasion (Birthday/Anniversary) poochta hai. Yeh data aapke liye sone ki khadan hai!',
    icon: 'Calendar',
  },
  {
    title: 'Secure Payment',
    desc: 'Order confirm karne ke liye 30% advance payment mandatory. Direct UPI integration (GPay, PhonePe, Paytm). No more "Payment baad mein denge!"',
    icon: 'CreditCard',
  },
];

export const FEATURES_OWNER = [
  {
    title: 'Live Business Stats',
    desc: 'Total Orders, Pending Orders, Revenue, aur Pending Payments - sab kuch ek nazar mein dashboard par dekhein.',
    icon: ChartBar,
  },
  {
    title: 'Order Management',
    desc: 'WhatsApp chat mein order dhundna bhool jaiye. Status badliye: Pending ➡️ Confirmed ➡️ Completed. Transparency builds trust.',
    icon: Users,
  },
  {
    title: "Today's Special Occasions",
    desc: 'Humara secret weapon! Pata karein aaj kis purane customer ka birthday hai aur unhe wish karke discount offer karein.',
    icon: User,
  },
  {
    title: 'Deep WhatsApp Integration',
    desc: 'Single click mein "Order Status" ya "Payment Reminder" bhejein. Professional messages without typing.',
    icon: MessageCircle,
  },
];

export const BENEFITS = [
  {
    title: 'Zero Commission',
    desc: 'Zomato/Swiggy ka 30% commission bachayein. 0% Commission. Jo kamaya, wo pura aapka.',
    icon: DollarSign,
  },
  {
    title: 'Brand Value',
    desc: 'Jab aap website link bhejte hain, toh aap ek Professional Brand lagte hain, jiske liye customers zyada pay karne ko taiyar hote hain.',
    icon: Smartphone,
  },
  {
    title: 'Time is Money',
    desc: 'Order lene aur pata poochne mein lagne wala 10-15 minute ab 0 minute hai. Bache hue samay mein 2 extra cake banayein!',
    icon: Clock,
  },
  {
    title: 'Security & Reliability',
    desc: 'Google ki security. Owner Lock, Script Lock aur Cloud Backup. Phone kho bhi jaye, business chalta rahega.',
    icon: Lock,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul's Bakery",
    text: "CakeSarthi ne mera order management ka tarika hi badal diya. Ab hisab mein koi gadbadi nahi hoti!",
    role: "Home Baker"
  },
  {
    name: "Sweet Delights",
    text: "Occasion tracking feature kamaal ka hai. Mere recurring orders 40% badh gaye hain.",
    role: "Shop Owner"
  }
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    icon: "🥉",
    price: "₹499",
    period: "/ month",
    subtitle: "For Home Bakers",
    features: [
      { name: "Digital Cake Menu", included: true },
      { name: "Category-wise Menu", included: true },
      { name: "Online Cart & Checkout", included: true },
      { name: "Mobile Friendly Design", included: true },
      { name: "Owner Dashboard", included: true },
      { name: "Order Status Management", included: true },
      { name: "Add-ons Upselling", included: false },
      { name: "Occasion Capture", included: false },
      { name: "Occasion Reminder Dashboard", included: false },
      { name: "WhatsApp Offer Link", included: false },
      { name: "Revenue Tracking", included: false },
      { name: "Custom Branding", included: false },
    ],
    highlight: false,
    color: "gray"
  },
  {
    name: "Standard",
    icon: "⭐",
    price: "₹999",
    period: "/ month",
    subtitle: "For Local Bakeries",
    features: [
      { name: "Digital Cake Menu", included: true },
      { name: "Category-wise Menu", included: true },
      { name: "Online Cart & Checkout", included: true },
      { name: "Mobile Friendly Design", included: true },
      { name: "Owner Dashboard", included: true },
      { name: "Order Status Management", included: true },
      { name: "Add-ons Upselling", included: true },
      { name: "Occasion Capture", included: true },
      { name: "Occasion Reminder Dashboard", included: true },
      { name: "WhatsApp Offer Link", included: true },
      { name: "Revenue Tracking", included: true },
      { name: "Custom Branding", included: false },
    ],
    highlight: true,
    badge: "Most Popular",
    description: "80% bakeries isi plan se start karti hain. Monthly affordable & automated repeat orders.",
    color: "pink"
  },
  {
    name: "Professional",
    icon: "💼",
    price: "₹7,999",
    period: "/ year",
    subtitle: "For Smart Businesses",
    features: [
      { name: "Everything in Standard", included: true },
      { name: "Save 33% (Pay for 8 months, get 12)", included: true },
      { name: "Priority Support", included: true },
      { name: "Quarterly Business Review", included: true },
      { name: "Mobile Friendly Design", included: true },
      { name: "Owner Dashboard", included: true },
      { name: "Order Status Management", included: true },
      { name: "Add-ons Upselling", included: true },
      { name: "Occasion Capture", included: true },
      { name: "Revenue Tracking", included: true },
      { name: "Custom Branding", included: false },
    ],
    highlight: false,
    badge: "Best Value",
    description: "Commit for a year & save big. Perfect for established bakeries looking for stability.",
    color: "blue"
  },
  {
    name: "Lifetime",
    icon: "♾️",
    price: "₹12,999",
    period: "(One-Time)",
    subtitle: "For Serious Business Owners",
    features: [
      { name: "All Standard Features", included: true },
      { name: "Custom Branding (Your Name)", included: true },
      { name: "Priority Support", included: true },
      { name: "Future Feature Updates", included: true },
      { name: "No Monthly Fees", included: true },
      { name: "Lifetime Access", included: true },
    ],
    highlight: false,
    badge: "High Trust Builder",
    description: "Ek baar pay kijiye, zindagi bhar use kijiye. Just 30 Swiggy orders commission = Lifetime free.",
    color: "indigo"
  }
];

export const SETUP_SERVICES = [
  { service: "Initial Setup & Menu Upload", price: "Free", note: "Future: ₹399/time" },
  { service: "Menu Image Optimization", price: "Free", note: "Future: ₹399/time" }
];