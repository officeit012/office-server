// Product data for the featured products section

const products = [
  {
    id: "1",
    name: "ThinkPad X1 Carbon",
    price: 1499.99,
    discount: 0,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Ultra-lightweight business laptop with powerful performance and long battery life.",
    availability: "In Stock",
    specs: {
      processor: "Intel Core i7-1165G7",
      memory: "16GB DDR4",
      storage: "512GB SSD",
      display: '14" 4K UHD',
      os: "Windows 11 Pro",
    },
  },
  {
    id: "2",
    name: "HP Color LaserJet Pro",
    price: 449.99,
    discount: 0,
    category: "Printers",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Professional color laser printer perfect for small to medium businesses.",
    availability: "In Stock",
    specs: {
      type: "Color Laser",
      printSpeed: "22 ppm",
      resolution: "1200 x 1200 dpi",
      connectivity: "USB, Ethernet, Wi-Fi",
      paperSize: "Up to A4",
    },
  },
  {
    id: "3",
    name: "Cisco Meraki MS120-8",
    price: 599.99,
    discount: 0,
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Cloud-managed network switch with 8 gigabit ethernet ports.",
    availability: "In Stock",
    specs: {
      ports: "8x Gigabit Ethernet",
      powerConsumption: "20W max",
      throughput: "10 Gbps",
      management: "Cloud-based",
      mounting: "Desktop or rack",
    },
  },
  {
    id: "4",
    name: "Microsoft Office 365 Business",
    price: 12.99,
    discount: 0,
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Complete office suite with Word, Excel, PowerPoint, Outlook and more.",
    availability: "In Stock",
    specs: {
      subscription: "Monthly",
      users: "1 user",
      storage: "1TB OneDrive",
      applications: "Word, Excel, PowerPoint, Outlook",
      compatibility: "Windows, macOS, iOS, Android",
    },
  },
  {
    id: "5",
    name: 'Dell UltraSharp 27" Monitor',
    price: 349.99,
    discount: 0,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Professional 4K monitor with USB-C connectivity and excellent color accuracy.",
    availability: "In Stock",
    specs: {
      size: "27 inch",
      resolution: "3840 x 2160 (4K)",
      panelType: "IPS",
      refreshRate: "60Hz",
      connectivity: "HDMI, DisplayPort, USB-C",
    },
  },
  {
    id: "6",
    name: 'Apple MacBook Pro 14"',
    price: 1999.99,
    discount: 0,
    category: "Computers",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Powerful MacBook Pro with M1 Pro chip for professional creative work.",
    availability: "In Stock",
    specs: {
      processor: "Apple M1 Pro",
      memory: "16GB Unified Memory",
      storage: "512GB SSD",
      display: '14" Liquid Retina XDR',
      os: "macOS Monterey",
    },
  },
  {
    id: "7",
    name: "Logitech MX Master 3",
    price: 99.99,
    discount: 0,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Advanced wireless mouse with customizable buttons and precision tracking.",
    availability: "In Stock",
    specs: {
      connectivity: "Bluetooth, USB Receiver",
      buttons: "7 programmable buttons",
      dpi: "Up to 4000 DPI",
      battery: "Up to 70 days",
      compatibility: "Windows, macOS",
    },
  },
  {
    id: "8",
    name: "Netgear Nighthawk AX12",
    price: 399.99,
    discount: 0,
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "High-performance WiFi 6 router for ultra-fast wireless connectivity.",
    availability: "Out of Stock",
    specs: {
      wifiStandard: "WiFi 6 (802.11ax)",
      speed: "Up to 6Gbps",
      coverage: "Up to 3,500 sq ft",
      ports: "5x Gigabit Ethernet",
      processor: "1.8GHz quad-core",
    },
  },
  {
    id: "9",
    name: "Canon imageCLASS MF445dw",
    price: 599.99,
    discount: 459.99,
    category: "Printers",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "All-in-one wireless laser printer with duplex printing, scanning, and copying capabilities.",
    availability: "In Stock",
    specs: {
      type: "Monochrome Laser",
      printSpeed: "40 ppm",
      resolution: "600 x 600 dpi",
      connectivity: "USB, Ethernet, Wi-Fi, Mobile",
      paperSize: "Up to Legal",
    },
  },
  {
    id: "10",
    name: 'LG UltraGear 32" Gaming Monitor',
    price: 799.99,
    discount: 649.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "High-performance 4K gaming monitor with 144Hz refresh rate and HDR10 support.",
    availability: "In Stock",
    specs: {
      size: "32 inch",
      resolution: "3840 x 2160 (4K)",
      panelType: "IPS",
      refreshRate: "144Hz",
      connectivity: "HDMI 2.1, DisplayPort, USB-C",
    },
  },
];
