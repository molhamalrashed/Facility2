export const getUsersData = () => {
  const data = localStorage.getItem('usersData');
  return data ? JSON.parse(data) : usersData;
}

export const addNewUser = (newUser) => {
  const data = getUsersData();
  data.push(newUser);
  localStorage.setItem('usersData', JSON.stringify(data));
}

export const usersData = [
    {
      userId: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      gender: "male",
      nationality: "American",
      password: "password123",
      numberOfProperties: 2,
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
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-01-15",
          lastRenovationDate: "2022-12-01",
          status: "available",
          realEstateDocuments: [
            { title: "Deed", documentType: "Legal", documentUrl: "https://example.com/deed.pdf" },
            { title: "Insurance Policy", documentType: "Insurance", documentUrl: "https://example.com/insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for plumbing on July 5th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Monthly rent payment due on July 15th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Arrange Housekeeping", 
              taskDescription: "Schedule weekly housekeeping service.",
              assignedTo: "Housekeeping Services Inc.",
              dueDate: "2023-06-30",
              taskStatus: "pending"
            },
            { 
              taskName: "Garden Maintenance", 
              taskDescription: "Water the plants and trim hedges.",
              assignedTo: "Green Thumb Landscaping",
              dueDate: "2023-07-05",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-10",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 4 },
            { date: "2023-07-01", hoursWorked: 5 }
          ],
          reservations: [
            { reservationDate: "2023-07-15", reservationTime: "10:00 AM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-01-01",
            leaseEndDate: "2024-01-01",
            monthlyRent: 1200,
            leaseTerms: "One-year lease agreement."
          },
          facilities: [
            { facilityName: "Gym", facilityDescription: "Shared gym access.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 800,
            roomDimensions: {
              livingRoom: { width: 15, length: 20 },
              bedroom: { width: 12, length: 15 },
              kitchen: { width: 8, length: 10 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-20", purchaseAmount: 2000, purchaseDescription: "New furniture for living room." }
          ],
          suppliers: [
            { supplierName: "Furniture Store", supplierContact: "123-456-7890" }
          ],
          portfolio: {
            portfolioName: "Investment Properties",
            portfolioDescription: "Diverse portfolio of rental properties.",
            portfolioValue: 600000
          },
          contractDocuments: [
            { contractName: "Rental Agreement", contractType: "Rental", contractUrl: "https://example.com/rental_contract.pdf" }
          ],
          inventories: [
            { inventoryItem: "Bed Linens", inventoryQuantity: 10, inventoryLocation: "Closet" }
          ],
          lendingPool: {
            poolName: "Maintenance Fund",
            poolDescription: "Fund for property maintenance and repairs.",
            poolValue: 5000
          }
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
          size: 1200, // in square feet
          numRooms: 3,
          numBathrooms: 2,
          price: 450000,
          description: "A charming house with a garden in Rotterdam.",
          yearBuilt: 2005,
          amenities: ["garden", "garage"],
          photos: [
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-02-20",
          lastRenovationDate: "2023-01-10",
          status: "available",
          realEstateDocuments: [
            { title: "Title Deed", documentType: "Legal", documentUrl: "https://example.com/title_deed.pdf" },
            { title: "Property Insurance", documentType: "Insurance", documentUrl: "https://example.com/property_insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for garden on July 10th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Monthly mortgage payment due on July 20th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Lawn Care", 
              taskDescription: "Mow the lawn and trim bushes.",
              assignedTo: "Green Thumb Landscaping",
              dueDate: "2023-07-05",
              taskStatus: "pending"
            },
            { 
              taskName: "Painting", 
              taskDescription: "Touch up exterior paint.",
              assignedTo: "Local Painters Ltd.",
              dueDate: "2023-07-15",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-12",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 6 },
            { date: "2023-07-01", hoursWorked: 4 }
          ],
          reservations: [
            { reservationDate: "2023-07-18", reservationTime: "11:00 AM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-03-01",
            leaseEndDate: "2024-03-01",
            monthlyRent: 1500,
            leaseTerms: "Two-year lease agreement."
          },
          facilities: [
            { facilityName: "Garage", facilityDescription: "Attached garage for one car.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 1200,
            roomDimensions: {
              livingRoom: { width: 18, length: 22 },
              bedroom1: { width: 14, length: 18 },
              bedroom2: { width: 12, length: 15 },
              kitchen: { width: 10, length: 12 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-25", purchaseAmount: 3000, purchaseDescription: "New appliances for kitchen." }
          ],
          suppliers: [
            { supplierName: "Appliance Store", supplierContact: "987-654-3210" }
          ],
          portfolio: {
            portfolioName: "Rental Properties",
            portfolioDescription: "Investment portfolio of residential properties.",
            portfolioValue: 800000
          },
          contractDocuments: [
            { contractName: "Lease Agreement", contractType: "Lease", contractUrl: "https://example.com/lease_agreement.pdf" }
          ],
          inventories: [
            { inventoryItem: "Garden Tools", inventoryQuantity: 5, inventoryLocation: "Garage" }
          ],
          lendingPool: {
            poolName: "Maintenance Fund",
            poolDescription: "Fund for property maintenance and repairs.",
            poolValue: 5000
          }
        }
      ]
    },
    {
      userId: 2,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      gender: "female",
      nationality: "British",
      password: "securepassword",
      numberOfProperties: 1,
      properties: [
        {
          propertyId: 3,
          propertyName: "Modern Loft",
          address: "789 Park Lane",
          city: "Amsterdam",
          state: "NH",
          country: "Netherlands",
          postalCode: "1002 CD",
          propertyType: "Loft",
          size: 1000, // in square feet
          numRooms: 1,
          numBathrooms: 1,
          price: 400000,
          description: "A modern loft with minimalist design.",
          yearBuilt: 2015,
          amenities: ["rooftop terrace", "gym"],
          photos: [
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-03-10",
          lastRenovationDate: "2023-02-01",
          status: "available",
          realEstateDocuments: [
            { title: "Title Deed", documentType: "Legal", documentUrl: "https://example.com/title_deed.pdf" },
            { title: "Property Insurance", documentType: "Insurance", documentUrl: "https://example.com/property_insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for HVAC system on July 8th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Monthly HOA fee due on July 10th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Roof Maintenance", 
              taskDescription: "Inspect and clean rooftop terrace.",
              assignedTo: "Maintenance Services Ltd.",
              dueDate: "2023-07-05",
              taskStatus: "pending"
            },
            { 
              taskName: "Fitness Equipment Check", 
              taskDescription: "Inspect gym equipment and schedule maintenance.",
              assignedTo: "Fitness Equipment Services",
              dueDate: "2023-07-10",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-15",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 3 },
            { date: "2023-07-01", hoursWorked: 4 }
          ],
          reservations: [
            { reservationDate: "2023-07-20", reservationTime: "2:00 PM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-02-01",
            leaseEndDate: "2024-02-01",
            monthlyRent: 1800,
            leaseTerms: "Two-year lease agreement."
          },
          facilities: [
            { facilityName: "Rooftop Terrace", facilityDescription: "Private rooftop terrace with city views.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 1000,
            roomDimensions: {
              livingRoom: { width: 20, length: 25 },
              kitchen: { width: 12, length: 15 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-18", purchaseAmount: 2500, purchaseDescription: "New furniture for living room." }
          ],
          suppliers: [
            { supplierName: "Furniture World", supplierContact: "123-456-7890" }
          ],
          portfolio: {
            portfolioName: "Rental Investments",
            portfolioDescription: "Portfolio of high-end rental properties.",
            portfolioValue: 900000
          },
          contractDocuments: [
            { contractName: "HOA Agreement", contractType: "HOA", contractUrl: "https://example.com/hoa_agreement.pdf" }
          ],
          inventories: [
            { inventoryItem: "Fitness Equipment", inventoryQuantity: 3, inventoryLocation: "Gym" }
          ],
          lendingPool: {
            poolName: "Property Improvement Fund",
            poolDescription: "Fund for loft upgrades and maintenance.",
            poolValue: 7000
          }
        }
      ]
    },
    {
      userId: 3,
      firstName: "Emma",
      lastName: "Johnson",
      email: "emma.johnson@example.com",
      gender: "female",
      nationality: "Dutch",
      password: "mysecurepassword",
      numberOfProperties: 1,
      properties: [
        {
          propertyId: 4,
          propertyName: "Spacious Villa",
          address: "567 Villa Street",
          city: "Utrecht",
          state: "UT",
          country: "Netherlands",
          postalCode: "3502 DE",
          propertyType: "Villa",
          size: 2500, // in square feet
          numRooms: 5,
          numBathrooms: 3,
          price: 750000,
          description: "A spacious villa with garden and swimming pool.",
          yearBuilt: 2012,
          amenities: ["garden", "swimming pool", "sauna"],
          photos: [
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-04-05",
          lastRenovationDate: "2023-03-01",
          status: "available",
          realEstateDocuments: [
            { title: "Title Deed", documentType: "Legal", documentUrl: "https://example.com/title_deed.pdf" },
            { title: "Property Insurance", documentType: "Insurance", documentUrl: "https://example.com/property_insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for swimming pool on July 12th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Monthly property tax payment due on July 20th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Garden Care", 
              taskDescription: "Trim hedges and plant new flowers.",
              assignedTo: "Green Thumb Landscaping",
              dueDate: "2023-07-10",
              taskStatus: "pending"
            },
            { 
              taskName: "Pool Maintenance", 
              taskDescription: "Clean and refill swimming pool.",
              assignedTo: "Pool Services Ltd.",
              dueDate: "2023-07-15",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-20",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 5 },
            { date: "2023-07-01", hoursWorked: 6 }
          ],
          reservations: [
            { reservationDate: "2023-07-25", reservationTime: "3:00 PM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-05-01",
            leaseEndDate: "2024-05-01",
            monthlyRent: 3000,
            leaseTerms: "Three-year lease agreement."
          },
          facilities: [
            { facilityName: "Sauna", facilityDescription: "Indoor sauna for relaxation.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 2500,
            roomDimensions: {
              livingRoom: { width: 25, length: 30 },
              bedroom1: { width: 18, length: 20 },
              bedroom2: { width: 16, length: 18 },
              kitchen: { width: 15, length: 18 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-30", purchaseAmount: 5000, purchaseDescription: "New furniture for dining room." }
          ],
          suppliers: [
            { supplierName: "Furniture Plus", supplierContact: "987-654-3210" }
          ],
          portfolio: {
            portfolioName: "Luxury Homes Portfolio",
            portfolioDescription: "Portfolio of luxury residential properties.",
            portfolioValue: 1500000
          },
          contractDocuments: [
            { contractName: "Property Management Agreement", contractType: "Management", contractUrl: "https://example.com/management_contract.pdf" }
          ],
          inventories: [
            { inventoryItem: "Pool Supplies", inventoryQuantity: 20, inventoryLocation: "Pool House" }
          ],
          lendingPool: {
            poolName: "Property Enhancement Fund",
            poolDescription: "Fund for villa maintenance and upgrades.",
            poolValue: 10000
          }
        }
      ]
    },
    {
      userId: 4,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      gender: "male",
      nationality: "German",
      password: "strongpassword",
      numberOfProperties: 1,
      properties: [
        {
          propertyId: 5,
          propertyName: "Riverside Cottage",
          address: "890 Riverside Road",
          city: "Amsterdam",
          state: "NH",
          country: "Netherlands",
          postalCode: "1003 EF",
          propertyType: "Cottage",
          size: 1500, // in square feet
          numRooms: 4,
          numBathrooms: 2,
          price: 500000,
          description: "A charming riverside cottage with scenic views.",
          yearBuilt: 2008,
          amenities: ["garden", "riverside view"],
          photos: [
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-05-15",
          lastRenovationDate: "2023-04-01",
          status: "available",
          realEstateDocuments: [
            { title: "Title Deed", documentType: "Legal", documentUrl: "https://example.com/title_deed.pdf" },
            { title: "Property Insurance", documentType: "Insurance", documentUrl: "https://example.com/property_insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for garden on July 12th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Monthly mortgage payment due on July 20th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Garden Care", 
              taskDescription: "Trim hedges and plant new flowers.",
              assignedTo: "Green Thumb Landscaping",
              dueDate: "2023-07-10",
              taskStatus: "pending"
            },
            { 
              taskName: "Exterior Painting", 
              taskDescription: "Touch up paint on exterior walls.",
              assignedTo: "Local Painters Ltd.",
              dueDate: "2023-07-15",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-20",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 5 },
            { date: "2023-07-01", hoursWorked: 6 }
          ],
          reservations: [
            { reservationDate: "2023-07-25", reservationTime: "3:00 PM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-05-01",
            leaseEndDate: "2024-05-01",
            monthlyRent: 2000,
            leaseTerms: "Two-year lease agreement."
          },
          facilities: [
            { facilityName: "Riverside Deck", facilityDescription: "Deck overlooking the river for relaxation.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 1500,
            roomDimensions: {
              livingRoom: { width: 22, length: 25 },
              bedroom1: { width: 16, length: 18 },
              bedroom2: { width: 14, length: 15 },
              kitchen: { width: 12, length: 15 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-30", purchaseAmount: 3000, purchaseDescription: "New furniture for living room." }
          ],
          suppliers: [
            { supplierName: "Furniture World", supplierContact: "123-456-7890" }
          ],
          portfolio: {
            portfolioName: "Riverfront Properties",
            portfolioDescription: "Investment portfolio of waterfront properties.",
            portfolioValue: 1200000
          },
          contractDocuments: [
            { contractName: "Mortgage Agreement", contractType: "Mortgage", contractUrl: "https://example.com/mortgage_agreement.pdf" }
          ],
          inventories: [
            { inventoryItem: "Outdoor Furniture", inventoryQuantity: 10, inventoryLocation: "Riverside Deck" }
          ],
          lendingPool: {
            poolName: "Property Improvement Fund",
            poolDescription: "Fund for cottage maintenance and improvements.",
            poolValue: 8000
          }
        }
      ]
    },
    {
      userId: 5,
      firstName: "Sophie",
      lastName: "Wilson",
      email: "sophie.wilson@example.com",
      gender: "female",
      nationality: "Dutch",
      password: "password1234",
      numberOfProperties: 1,
      properties: [
        {
          propertyId: 6,
          propertyName: "Historic Townhouse",
          address: "101 Historical Lane",
          city: "Amsterdam",
          state: "NH",
          country: "Netherlands",
          postalCode: "1004 FG",
          propertyType: "Townhouse",
          size: 1800, // in square feet
          numRooms: 3,
          numBathrooms: 2,
          price: 600000,
          description: "A historic townhouse with modern amenities.",
          yearBuilt: 1900,
          amenities: ["fireplace", "attic"],
          photos: [
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4",
            "https://images.unsplash.com/photo-1506748686214-e9dfac2239c4"
          ],
          listingDate: "2023-06-01",
          lastRenovationDate: "2023-05-01",
          status: "available",
          realEstateDocuments: [
            { title: "Title Deed", documentType: "Legal", documentUrl: "https://example.com/title_deed.pdf" },
            { title: "Property Insurance", documentType: "Insurance", documentUrl: "https://example.com/property_insurance.pdf" }
          ],
          notifications: [
            { 
              notificationType: "Maintenance", 
              message: "Scheduled maintenance for HVAC system on July 10th, 2023.",
              notificationDate: "2023-06-28T09:00:00Z" 
            },
            { 
              notificationType: "Payment Due", 
              message: "Quarterly property tax payment due on July 15th, 2023.",
              notificationDate: "2023-07-01T12:00:00Z" 
            }
          ],
          tasks: [
            { 
              taskName: "Chimney Inspection", 
              taskDescription: "Inspect and clean fireplace chimney.",
              assignedTo: "Fireplace Services",
              dueDate: "2023-07-05",
              taskStatus: "pending"
            },
            { 
              taskName: "Attic Cleanup", 
              taskDescription: "Organize attic and remove clutter.",
              assignedTo: "Home Organizers Ltd.",
              dueDate: "2023-07-10",
              taskStatus: "pending"
            }
          ],
          delivery: {
            deliveryDate: "2023-07-20",
            deliveryStatus: "delivered"
          },
          hours: [
            { date: "2023-06-30", hoursWorked: 4 },
            { date: "2023-07-01", hoursWorked: 5 }
          ],
          reservations: [
            { reservationDate: "2023-07-25", reservationTime: "2:00 PM", reservationStatus: "confirmed" }
          ],
          lease: {
            leaseStartDate: "2023-06-01",
            leaseEndDate: "2024-06-01",
            monthlyRent: 2500,
            leaseTerms: "One-year lease agreement."
          },
          facilities: [
            { facilityName: "Attic", facilityDescription: "Spacious attic for storage.", facilityStatus: "open" }
          ],
          policies: [
            { policyName: "Pet Policy", policyDescription: "Pets allowed with additional deposit." }
          ],
          measurements: {
            areaSize: 1800,
            roomDimensions: {
              livingRoom: { width: 20, length: 25 },
              bedroom1: { width: 15, length: 18 },
              bedroom2: { width: 14, length: 16 },
              kitchen: { width: 12, length: 15 }
            }
          },
          purchases: [
            { purchaseDate: "2023-06-30", purchaseAmount: 1500, purchaseDescription: "New lighting fixtures for kitchen." }
          ],
          suppliers: [
            { supplierName: "Home Lighting Solutions", supplierContact: "555-123-4567" }
          ],
          portfolio: {
            portfolioName: "Historic Properties",
            portfolioDescription: "Portfolio of historic residential properties.",
            portfolioValue: 1800000
          },
          contractDocuments: [
            { contractName: "Property Insurance Policy", contractType: "Insurance", contractUrl: "https://example.com/insurance_policy.pdf" }
          ],
          inventories: [
            { inventoryItem: "Home Decor", inventoryQuantity: 10, inventoryLocation: "Living Room" }
          ],
          lendingPool: {
            poolName: "Property Improvement Fund",
            poolDescription: "Fund for townhouse repairs and renovations.",
            poolValue: 6000
          }
        }
      ]
    }
  ]
  