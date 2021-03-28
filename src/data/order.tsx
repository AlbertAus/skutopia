export const IntegrationOrder1 = {
  integration: {
    name: "shopify",
  },
  created_at: "2021-03-09T00:17:05.485Z",
  payload: {
    id: 1123978,
    order_number: "98798379234",
    order_line_items: [
      {
        product_variant_id: 239823,
        SKU: "P4321",
        description: "Large ripped jeans",
        quantity: 3,
        options: [
          {
            name: "colour",
            value: "blue",
            option_id: 14238,
          },
          {
            name: "size",
            value: "L",
            option_id: 23904,
          },
        ],
      },
      {
        product_variant_id: 5678,
        SKU: "S4321",
        description: "US 6 Pink Heels",
        quantity: 3,
        options: [
          {
            name: "colour",
            value: "pink",
            option_id: 394733,
          },
          {
            name: "size",
            value: "6",
            option_id: 29374,
          },
        ],
      },
    ],
    shipping_purchased: {
      service_name: "Express",
      amount_paid: 11,
      currency: "USD",
    },
    customer_details: {
      id: 793875,
      name: "Angela Potter",
      email: "angela.potter@gmail.com",
    },
    shipping_details: {
      contact_name: "Angela Potter",
      contact_email: "angela.potter@gmail.com",
      address: [
        "1 Bluxome st",
        "San Francisco",
        "CA",
        "940176",
        "United States",
      ],
    },
  },
};
export const IntegrationOrder2 = {
  integration: {
    name: "woo_commerce",
  },
  created_at: "2021-03-09T00:17:05.485Z",
  payload: {
    Id: "052ac9b7-ab0c-409f-875a-537ee994d6a1",
    Ref: "12523453",
    Currency: "USD",
    LineItems: [
      {
        VariantId: "6650de76-fe01-4537-a340-b8eab9d6f59a",
        Sku: "P4321",
        Description: "Large ripped jeans",
        Quantity: 3,
        UnitPrice: 150,
        Options: [
          "de41bcdf-1858-49eb-9cea-2acf4c31ab0c",
          "f184143f-2abd-4d6b-92d6-500ddf67af44",
        ],
      },
      {
        VariantId: "af9b87fb-b81d-431e-8394-a589d69aea7a",
        Sku: "S4321",
        Description: "US 6 Pink Heels",
        Quantity: 3,
        UnitPrice: 200,
        Options: [
          "1013eaf7-f2b4-4e7f-9216-48b2fdb39009",
          "6202b3d9-f23c-4d0a-86f1-294d2a4220ca",
        ],
      },
    ],
    Options: [
      {
        Id: "de41bcdf-1858-49eb-9cea-2acf4c31ab0c",
        Name: "colour",
        Value: "blue",
      },
      {
        Id: "f184143f-2abd-4d6b-92d6-500ddf67af44",
        Name: "size",
        Value: "L",
      },
      {
        Id: "1013eaf7-f2b4-4e7f-9216-48b2fdb39009",
        Name: "colour",
        Value: "pink",
      },
      {
        Id: "6202b3d9-f23c-4d0a-86f1-294d2a4220ca",
        Name: "size",
        Value: "6",
      },
    ],
    ShippingType: "Express",
    ShippingPrice: 11.0,
    CustomerId: "0edf5835-39d1-459f-983c-e9f3d07fa844",
    CustomerName: "Angela Potter",
    CustomerEmail: "angela.potter@gmail.com",
    ShippingContactName: "Angela Potter",
    ShippingContactEmail: "angela.potter@gmail.com",
    ShippingAddress: [
      "1 Bluxome st",
      "San Francisco",
      "CA",
      "940176",
      "United States",
    ],
  },
};
