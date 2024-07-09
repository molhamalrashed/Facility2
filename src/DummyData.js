export const getUsersData = () => {
  const data = localStorage.getItem("usersData");
  return data ? JSON.parse(data) : usersData;
};

export const addNewUser = (newUser) => {
  const data = getUsersData();
  data.push(newUser);
  localStorage.setItem("usersData", JSON.stringify(data));
};

export const categories = [
  "realEstateDocuments",
  "notifications",
  "tasks",
  "delivery",
  "hours",
  "reservations",
  "lease",
  "facilities",
  "policies",
  "measurements",
  "purchases",
  "suppliers",
  "portfolio",
  "contractDocuments",
  "inventories",
  "lendingPool",
];

export const usersData = [
  {
    userId: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "male",
    nationality: "American",
    password: "password123",
    numberOfProperties: 3,
    properties: [
      {
        propertyId: 1,
        propertyName: "Cozy Apartment",
        address: "123 Main Street",
        city: "Amsterdam",
        state: "NH",
        country: "Netherlands",
        postalCode: "1001 AB",
        propertyType: "Apartment",
        size: 800,
        numRooms: 2,
        numBathrooms: 1,
        price: 300000,
        description: "A cozy apartment in the heart of Amsterdam.",
        yearBuilt: 2010,
        amenities: ["balcony"],
        photos: [
          "https://res.cloudinary.com/dtb1hpuil/image/upload/v1720385660/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash_fwajrn.jpg",
        ],
        listingDate: "2023-01-15",
        lastRenovationDate: "2022-12-01",
        status: "available",
        realEstateDocuments: [
          {
            title: "Deed",
            documentType: "Legal",
            documentUrl: "https://example.com/deed.pdf",
            uploadDate: "2023-01-10",
            expiryDate: "2025-01-10",
          },
          {
            title: "Insurance Policy",
            documentType: "Insurance",
            documentUrl: "https://example.com/insurance.pdf",
            uploadDate: "2023-01-10",
            expiryDate: "2024-01-10",
          },
          {
            title: "Energy Certificate",
            documentType: "Energy",
            documentUrl: "https://example.com/energy_certificate.pdf",
            uploadDate: "2023-01-12",
            expiryDate: "2026-01-12",
          },
        ],
        notifications: [
          {
            notificationType: "Maintenance",
            message: "Scheduled maintenance for plumbing on July 5th, 2023.",
            notificationDate: "2023-06-28T09:00:00Z",
            status: "pending",
            assignedTo: "Facility Services",
            priority: "High",
          },
          {
            notificationType: "Payment Due",
            message: "Monthly rent payment due on July 15th, 2023.",
            notificationDate: "2023-07-01T12:00:00Z",
            status: "pending",
            assignedTo: "Accounting Department",
            priority: "Medium",
          },
          {
            notificationType: "Inspection",
            message: "Annual property inspection on August 1st, 2023.",
            notificationDate: "2023-07-20T08:00:00Z",
            status: "scheduled",
            assignedTo: "Inspection Team",
            priority: "Low",
          },
        ],
        tasks: [
          {
            taskName: "Arrange Housekeeping",
            taskDescription: "Schedule weekly housekeeping service.",
            assignedTo: "Housekeeping Services Inc.",
            dueDate: "2023-06-30",
            taskStatus: "pending",
            priority: "Low",
          },
          {
            taskName: "Garden Maintenance",
            taskDescription: "Water the plants and trim hedges.",
            assignedTo: "Green Thumb Landscaping",
            dueDate: "2023-07-05",
            taskStatus: "pending",
            priority: "Medium",
          },
          {
            taskName: "Repair Light Fixtures",
            taskDescription: "Fix broken light fixtures in the hallway.",
            assignedTo: "Electricians Inc.",
            dueDate: "2023-07-10",
            taskStatus: "completed",
            priority: "High",
          },
        ],
        delivery: [
          {
            deliveryDate: "2023-07-10",
            deliveryStatus: "delivered",
            deliveryItems: [
              {
                itemName: "New Sofa",
                itemDescription: "Leather sofa for living room.",
                quantity: 1,
                deliveryService: "Furniture Delivery Co.",
              },
            ],
          },
        ],
        hours: [
          { date: "2023-06-30", hoursWorked: 4 },
          { date: "2023-07-01", hoursWorked: 5 },
          { date: "2023-07-02", hoursWorked: 3 },
        ],
        reservations: [
          {
            reservationDate: "2023-07-15",
            reservationTime: "10:00 AM",
            reservationStatus: "confirmed",
            reservationType: "Meeting",
            reservedBy: "John Doe",
          },
          {
            reservationDate: "2023-07-20",
            reservationTime: "2:00 PM",
            reservationStatus: "cancelled",
            reservationType: "Maintenance",
            reservedBy: "John Doe",
          },
        ],
        lease: [
          {
            leaseStartDate: "2023-01-01",
            leaseEndDate: "2024-01-01",
            monthlyRent: 1200,
            leaseTerms: "One-year lease agreement.",
          },
        ],
        facilities: [
          {
            facilityName: "Gym",
            facilityDescription: "Shared gym access.",
            facilityStatus: "open",
            operatingHours: "6:00 AM - 10:00 PM",
            rules: "No loud music",
          },
        ],
        policies: [
          {
            policyName: "Pet Policy",
            policyDescription: "Pets allowed with additional deposit.",
            policyEffectiveDate: "2023-01-01",
          },
        ],
        measurements: {
          areaSize: 800,
          roomDimensions: {
            livingRoom: { width: 15, length: 20 },
            bedroom: { width: 12, length: 15 },
            kitchen: { width: 8, length: 10 },
          },
        },
        purchases: [
          {
            purchaseDate: "2023-06-20",
            purchaseAmount: 2000,
            purchaseDescription: "New furniture for living room.",
            vendor: "Furniture Store",
          },
          {
            purchaseDate: "2023-07-01",
            purchaseAmount: 500,
            purchaseDescription: "New kitchen appliances.",
            vendor: "Appliance Store",
          },
        ],
        suppliers: [
          { supplierName: "Furniture Store", supplierContact: "123-456-7890" },
          { supplierName: "Appliance Store", supplierContact: "098-765-4321" },
        ],
        portfolio: [
          {
            portfolioName: "Investment Properties",
            portfolioDescription: "Diverse portfolio of rental properties.",
            portfolioValue: 600000,
          },
        ],
        contractDocuments: [
          {
            contractName: "Rental Agreement",
            contractType: "Rental",
            contractUrl: "https://example.com/rental_contract.pdf",
            effectiveDate: "2023-01-01",
            expiryDate: "2024-01-01",
          },
        ],
        inventories: [
          {
            inventoryItem: "Bed Linens",
            inventoryQuantity: 10,
            inventoryLocation: "Closet",
            lastUpdated: "2023-01-15",
          },
          {
            inventoryItem: "Towels",
            inventoryQuantity: 20,
            inventoryLocation: "Bathroom",
            lastUpdated: "2023-02-01",
          },
        ],
        lendingPool: [
          {
            poolName: "Maintenance Fund",
            poolDescription: "Fund for property maintenance and repairs.",
            poolValue: 5000,
            lastContributionDate: "2023-06-15",
          },
        ],
      },
      {
        propertyId: 2,
        propertyName: "Charming House",
        address: "456 Oak Avenue",
        city: "Rotterdam",
        state: "ZH",
        country: "Netherlands",
        postalCode: "3001 CD",
        propertyType: "House",
        size: 1200,
        numRooms: 3,
        numBathrooms: 2,
        price: 450000,
        description: "A charming house with a garden in Rotterdam.",
        yearBuilt: 2005,
        amenities: ["garden", "garage"],
        photos: [
          "https://res.cloudinary.com/dtb1hpuil/image/upload/v1720385657/ronnie-george-9gGvNWBeOq4-unsplash_wnz8jt.jpg",
        ],
        listingDate: "2023-02-20",
        lastRenovationDate: "2023-01-10",
        status: "available",
        realEstateDocuments: [
          {
            title: "Title Deed",
            documentType: "Legal",
            documentUrl: "https://example.com/title_deed.pdf",
            uploadDate: "2023-02-01",
            expiryDate: "2026-02-01",
          },
          {
            title: "Property Insurance",
            documentType: "Insurance",
            documentUrl: "https://example.com/property_insurance.pdf",
            uploadDate: "2023-02-15",
            expiryDate: "2024-02-15",
          },
          {
            title: "Mortgage Agreement",
            documentType: "Mortgage",
            documentUrl: "https://example.com/mortgage_agreement.pdf",
            uploadDate: "2023-02-10",
            expiryDate: "2033-02-10",
          },
        ],
        notifications: [
          {
            notificationType: "Maintenance",
            message: "Scheduled maintenance for garden on July 10th, 2023.",
            notificationDate: "2023-06-28T09:00:00Z",
            status: "pending",
            assignedTo: "Gardening Services",
            priority: "Medium",
          },
          {
            notificationType: "Payment Due",
            message: "Monthly mortgage payment due on July 20th, 2023.",
            notificationDate: "2023-07-01T12:00:00Z",
            status: "pending",
            assignedTo: "Finance Department",
            priority: "High",
          },
          {
            notificationType: "Inspection",
            message: "Annual property inspection on August 5th, 2023.",
            notificationDate: "2023-07-25T08:00:00Z",
            status: "scheduled",
            assignedTo: "Inspection Team",
            priority: "Low",
          },
        ],
        tasks: [
          {
            taskName: "Lawn Care",
            taskDescription: "Mow the lawn and trim bushes.",
            assignedTo: "Green Thumb Landscaping",
            dueDate: "2023-07-05",
            taskStatus: "pending",
            priority: "Medium",
          },
          {
            taskName: "Painting",
            taskDescription: "Touch up exterior paint.",
            assignedTo: "Local Painters Ltd.",
            dueDate: "2023-07-15",
            taskStatus: "pending",
            priority: "High",
          },
          {
            taskName: "Roof Repair",
            taskDescription: "Fix roof leaks.",
            assignedTo: "Roofing Services Inc.",
            dueDate: "2023-07-20",
            taskStatus: "completed",
            priority: "High",
          },
        ],
        delivery: [
          {
            deliveryDate: "2023-07-12",
            deliveryStatus: "delivered",
            deliveryItems: [
              {
                itemName: "New Dining Table",
                itemDescription: "Wooden dining table for the dining room.",
                quantity: 1,
                deliveryService: "Furniture Delivery Co.",
              },
            ],
          },
        ],
        hours: [
          { date: "2023-06-30", hoursWorked: 6 },
          { date: "2023-07-01", hoursWorked: 4 },
          { date: "2023-07-02", hoursWorked: 5 },
        ],
        reservations: [
          {
            reservationDate: "2023-07-18",
            reservationTime: "11:00 AM",
            reservationStatus: "confirmed",
            reservationType: "Maintenance",
            reservedBy: "John Doe",
          },
          {
            reservationDate: "2023-07-25",
            reservationTime: "3:00 PM",
            reservationStatus: "cancelled",
            reservationType: "Inspection",
            reservedBy: "John Doe",
          },
        ],
        lease: [
          {
            leaseStartDate: "2023-03-01",
            leaseEndDate: "2024-03-01",
            monthlyRent: 1500,
            leaseTerms: "Two-year lease agreement.",
          },
        ],
        facilities: [
          {
            facilityName: "Garage",
            facilityDescription: "Attached garage for one car.",
            facilityStatus: "open",
            operatingHours: "24/7",
            rules: "No storage of hazardous materials",
          },
        ],
        policies: [
          {
            policyName: "Pet Policy",
            policyDescription: "Pets allowed with additional deposit.",
            policyEffectiveDate: "2023-03-01",
          },
        ],
        measurements: {
          areaSize: 1200,
          roomDimensions: {
            livingRoom: { width: 18, length: 22 },
            bedroom1: { width: 14, length: 18 },
            bedroom2: { width: 12, length: 15 },
            kitchen: { width: 10, length: 12 },
          },
        },
        purchases: [
          {
            purchaseDate: "2023-06-25",
            purchaseAmount: 3000,
            purchaseDescription: "New appliances for kitchen.",
            vendor: "Appliance Store",
          },
          {
            purchaseDate: "2023-07-05",
            purchaseAmount: 1500,
            purchaseDescription: "New garden furniture.",
            vendor: "Garden Supplies Ltd.",
          },
        ],
        suppliers: [
          { supplierName: "Appliance Store", supplierContact: "987-654-3210" },
          {
            supplierName: "Garden Supplies Ltd.",
            supplierContact: "456-789-1230",
          },
        ],
        portfolio: [
          {
            portfolioName: "Rental Properties",
            portfolioDescription:
              "Investment portfolio of residential properties.",
            portfolioValue: 800000,
          },
        ],
        contractDocuments: [
          {
            contractName: "Lease Agreement",
            contractType: "Lease",
            contractUrl: "https://example.com/lease_agreement.pdf",
            effectiveDate: "2023-03-01",
            expiryDate: "2024-03-01",
          },
        ],
        inventories: [
          {
            inventoryItem: "Garden Tools",
            inventoryQuantity: 5,
            inventoryLocation: "Garage",
            lastUpdated: "2023-02-20",
          },
          {
            inventoryItem: "Kitchen Utensils",
            inventoryQuantity: 20,
            inventoryLocation: "Kitchen",
            lastUpdated: "2023-03-10",
          },
        ],
        lendingPool: [
          {
            poolName: "Maintenance Fund",
            poolDescription: "Fund for property maintenance and repairs.",
            poolValue: 7000,
            lastContributionDate: "2023-06-20",
          },
        ],
      },
      {
        propertyId: 3,
        propertyName: "Modern Loft",
        address: "789 Park Lane",
        city: "Amsterdam",
        state: "NH",
        country: "Netherlands",
        postalCode: "1002 CD",
        propertyType: "Loft",
        size: 1000,
        numRooms: 1,
        numBathrooms: 1,
        price: 400000,
        description: "A modern loft with minimalist design.",
        yearBuilt: 2015,
        amenities: ["rooftop terrace", "gym"],
        photos: [
          "https://res.cloudinary.com/dtb1hpuil/image/upload/v1720385655/brian-babb-XbwHrt87mQ0-unsplash_e2m8ed.jpg",
        ],
        listingDate: "2023-03-10",
        lastRenovationDate: "2023-02-01",
        status: "available",
        realEstateDocuments: [
          {
            title: "Title Deed",
            documentType: "Legal",
            documentUrl: "https://example.com/title_deed.pdf",
            uploadDate: "2023-03-01",
            expiryDate: "2026-03-01",
          },
          {
            title: "Property Insurance",
            documentType: "Insurance",
            documentUrl: "https://example.com/property_insurance.pdf",
            uploadDate: "2023-03-15",
            expiryDate: "2024-03-15",
          },
          {
            title: "Renovation Contract",
            documentType: "Renovation",
            documentUrl: "https://example.com/renovation_contract.pdf",
            uploadDate: "2023-03-05",
            expiryDate: "2024-03-05",
          },
        ],
        notifications: [
          {
            notificationType: "Maintenance",
            message: "Scheduled maintenance for HVAC system on July 8th, 2023.",
            notificationDate: "2023-06-28T09:00:00Z",
            status: "pending",
            assignedTo: "HVAC Services",
            priority: "High",
          },
          {
            notificationType: "Payment Due",
            message: "Monthly HOA fee due on July 10th, 2023.",
            notificationDate: "2023-07-01T12:00:00Z",
            status: "pending",
            assignedTo: "HOA Management",
            priority: "Medium",
          },
          {
            notificationType: "Inspection",
            message: "Annual property inspection on August 10th, 2023.",
            notificationDate: "2023-07-30T08:00:00Z",
            status: "scheduled",
            assignedTo: "Inspection Team",
            priority: "Low",
          },
        ],
        tasks: [
          {
            taskName: "Roof Maintenance",
            taskDescription: "Inspect and clean rooftop terrace.",
            assignedTo: "Maintenance Services Ltd.",
            dueDate: "2023-07-05",
            taskStatus: "pending",
            priority: "Low",
          },
          {
            taskName: "Fitness Equipment Check",
            taskDescription: "Inspect gym equipment and schedule maintenance.",
            assignedTo: "Fitness Equipment Services",
            dueDate: "2023-07-10",
            taskStatus: "pending",
            priority: "Medium",
          },
          {
            taskName: "Paint Walls",
            taskDescription: "Repaint interior walls.",
            assignedTo: "Painters Inc.",
            dueDate: "2023-07-15",
            taskStatus: "completed",
            priority: "High",
          },
        ],
        delivery: [
          {
            deliveryDate: "2023-07-15",
            deliveryStatus: "delivered",
            deliveryItems: [
              {
                itemName: "New Bed",
                itemDescription: "Queen size bed for the bedroom.",
                quantity: 1,
                deliveryService: "Furniture Delivery Co.",
              },
            ],
          },
        ],
        hours: [
          { date: "2023-06-30", hoursWorked: 3 },
          { date: "2023-07-01", hoursWorked: 4 },
          { date: "2023-07-02", hoursWorked: 5 },
        ],
        reservations: [
          {
            reservationDate: "2023-07-20",
            reservationTime: "2:00 PM",
            reservationStatus: "confirmed",
            reservationType: "Meeting",
            reservedBy: "John Doe",
          },
          {
            reservationDate: "2023-07-25",
            reservationTime: "4:00 PM",
            reservationStatus: "cancelled",
            reservationType: "Inspection",
            reservedBy: "John Doe",
          },
        ],
        lease: [
          {
            leaseStartDate: "2023-02-01",
            leaseEndDate: "2024-02-01",
            monthlyRent: 1800,
            leaseTerms: "Two-year lease agreement.",
          },
        ],
        facilities: [
          {
            facilityName: "Rooftop Terrace",
            facilityDescription: "Private rooftop terrace with city views.",
            facilityStatus: "open",
            operatingHours: "6:00 AM - 10:00 PM",
            rules: "No parties after 10 PM",
          },
        ],
        policies: [
          {
            policyName: "Pet Policy",
            policyDescription: "Pets allowed with additional deposit.",
            policyEffectiveDate: "2023-02-01",
          },
        ],
        measurements: {
          areaSize: 1000,
          roomDimensions: {
            livingRoom: { width: 20, length: 25 },
            kitchen: { width: 12, length: 15 },
          },
        },
        purchases: [
          {
            purchaseDate: "2023-06-18",
            purchaseAmount: 2500,
            purchaseDescription: "New furniture for living room.",
            vendor: "Furniture World",
          },
          {
            purchaseDate: "2023-07-05",
            purchaseAmount: 800,
            purchaseDescription: "New lighting fixtures.",
            vendor: "Lighting Store",
          },
        ],
        suppliers: [
          { supplierName: "Furniture World", supplierContact: "123-456-7890" },
          { supplierName: "Lighting Store", supplierContact: "555-987-6543" },
        ],
        portfolio: [
          {
            portfolioName: "Rental Investments",
            portfolioDescription: "Portfolio of high-end rental properties.",
            portfolioValue: 900000,
          },
        ],
        contractDocuments: [
          {
            contractName: "HOA Agreement",
            contractType: "HOA",
            contractUrl: "https://example.com/hoa_agreement.pdf",
            effectiveDate: "2023-02-01",
            expiryDate: "2024-02-01",
          },
        ],
        inventories: [
          {
            inventoryItem: "Fitness Equipment",
            inventoryQuantity: 3,
            inventoryLocation: "Gym",
            lastUpdated: "2023-03-10",
          },
          {
            inventoryItem: "Kitchen Appliances",
            inventoryQuantity: 10,
            inventoryLocation: "Kitchen",
            lastUpdated: "2023-04-15",
          },
        ],
        lendingPool: [
          {
            poolName: "Property Improvement Fund",
            poolDescription: "Fund for loft upgrades and maintenance.",
            poolValue: 7000,
            lastContributionDate: "2023-06-25",
          },
        ],
      },
    ],
  },
];
