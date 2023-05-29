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
            <button>
              <CustomIcon
                icon={FaTrash}
                color="rgb(239 68 68)"
                size="1em"
                aria-label="A trash icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaTrash}
                color="rgb(239 68 68)"
                size="1em"
                aria-label="A trash icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaTrash}
                color="rgb(239 68 68)"
                size="1em"
                aria-label="A trash icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaTrash}
                color="rgb(239 68 68)"
                size="1em"
                aria-label="A trash icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaEnvelope}
                size="1em"
                aria-label="An Envelope icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaEnvelope}
                size="1em"
                aria-label="An Envelope icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaEnvelope}
                size="1em"
                aria-label="An Envelope icon"
              />
            </button>
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
            <button>
              <CustomIcon
                icon={FaEnvelope}
                size="1em"
                aria-label="An Envelope icon"
              />
            </button>
          )
        }
      }
    ]
  }
];

const messagesTableData = [
  {
    isMessages: true,
    tableHeaders: [
      { id: 1, text: "Buyer" },
      { id: 2, text: "Last Message" },
      { id: 3, text: "Date" },
      { id: 4, text: "Action" }
    ],
    tableData: [
      {
        id: 1,
        data: {
          buyer: "John Doe",
          lastMessage: {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            unread: true
          },
          date: "1 hour ago",
          action: <button className="btn btn-sm btn-secondary">Mark as Read</button>,
          routePath: "/message/123"
        }
      },
      {
        id: 2,
        data: {
          buyer: "John Doe",
          lastMessage: {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            unread: true
          },
          date: "2 hours ago",
          action: <button className="btn btn-sm btn-secondary">Mark as Read</button>,
          routePath: "/message/123"
        }
      },
      {
        id: 3,
        data: {
          buyer: "John Doe",
          lastMessage: {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            unread: true
          },
          date: "1 day ago",
          action: <button className="btn btn-sm btn-secondary">Mark as Read</button>,
          routePath: "/message/123"
        }
      },
      {
        id: 4,
        data: {
          buyer: "John Doe",
          lastMessage: {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            unread: false
          },
          date: "2 days ago",
          action: <button className="btn btn-sm btn-secondary">Mark as Read</button>,
          routePath: "/message/123"
        }
      },
      {
        id: 5,
        data: {
          buyer: "John Doe",
          lastMessage: {
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            unread: false
          },
          date: "1 week ago",
          action: <button className="btn btn-sm btn-secondary">Mark as Read</button>,
          routePath: "/message/123"
        }
      }
    ]
  }
];

export { ordersTableData, myGigsTableData, messagesTableData };
