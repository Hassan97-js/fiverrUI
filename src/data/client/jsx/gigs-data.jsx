import { FaTrash, FaEnvelope } from "react-icons/fa";

import { CustomIcon } from "../../../components";

const myGigsTableData = [
  {
    tableHeaders: [
      { id: 1, text: "Image" },
      { id: 2, text: "Title" },
      { id: 3, text: "Price" },
      { id: 4, text: "Sales" },
      { id: 5, text: "Action" }
    ],
    tableData: [
      {
        id: 1,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Gig1",
          price: 40,
          sales: 55,
          action: (
            <CustomIcon
              icon={FaTrash}
              color="rgb(239 68 68)"
              size="1em"
              aria-label="A check logo"
            />
          )
        }
      },
      {
        id: 2,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Gig2",
          price: 58,
          sales: 100,
          action: (
            <CustomIcon
              icon={FaTrash}
              color="rgb(239 68 68)"
              size="1em"
              aria-label="A check logo"
            />
          )
        }
      },
      {
        id: 3,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Gig3",
          price: 92,
          sales: 20,
          action: (
            <CustomIcon
              icon={FaTrash}
              color="rgb(239 68 68)"
              size="1em"
              aria-label="A check logo"
            />
          )
        }
      },
      {
        id: 4,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Gig4",
          price: 101,
          sales: 14,
          action: (
            <CustomIcon
              icon={FaTrash}
              color="rgb(239 68 68)"
              size="1em"
              aria-label="A check logo"
            />
          )
        }
      }
    ]
  }
];

const currentUser = {
  id: 1,
  name: "John Doe",
  isSeller: true
};

const sellerOrBuyer = currentUser.isSeller ? "buyer" : "seller";

const ordersTableData = [
  {
    tableHeaders: [
      { id: 1, text: "Image" },
      { id: 2, text: "Title" },
      { id: 3, text: "Price" },
      { id: 4, text: currentUser.isSeller ? "Buyer" : "Seller" },
      { id: 5, text: "Contact" }
    ],

    tableData: [
      {
        id: 1,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "order 1",
          price: 40,
          [sellerOrBuyer]: "John Doe",
          contact: (
            <CustomIcon icon={FaEnvelope} size="1em" aria-label="An Envelope icon" />
          )
        }
      },
      {
        id: 2,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Order 2",
          price: 58,
          [sellerOrBuyer]: "John Doe",
          contact: (
            <CustomIcon icon={FaEnvelope} size="1em" aria-label="An Envelope icon" />
          )
        }
      },
      {
        id: 3,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Order 3",
          price: 92,
          [sellerOrBuyer]: "John Doe",
          contact: (
            <CustomIcon icon={FaEnvelope} size="1em" aria-label="An Envelope icon" />
          )
        }
      },
      {
        id: 4,
        data: {
          imgURL:
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Order 4",
          price: 101,
          [sellerOrBuyer]: "John Doe",
          contact: (
            <CustomIcon icon={FaEnvelope} size="1em" aria-label="An Envelope icon" />
          )
        }
      }
    ]
  }
];

export { ordersTableData, myGigsTableData };
