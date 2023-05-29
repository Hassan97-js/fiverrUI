const gigCategories = [
  {
    id: 1,
    title: "AI Artists",
    description: "Add talent to AI",
    imgURL:
      "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 2,
    title: "Logo Design",
    description: "Build yor brand",
    imgURL:
      "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 3,
    title: "WordPress",
    description: "Customize your site",
    imgURL:
      "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 4,
    title: "Voice Over",
    description: "Share your message",
    imgURL:
      "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 5,
    title: "Video Explainer",
    description: "Engage your audience",
    imgURL:
      "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 6,
    title: "Social Media",
    description: "Reach more customers",
    imgURL:
      "https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 7,
    title: "SEO",
    description: "Unlock growth online",
    imgURL:
      "https://images.pexels.com/photos/4820241/pexels-photo-4820241.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  },
  {
    id: 8,
    title: "Illustration",
    description: "Color you dreams",
    imgURL:
      "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  }
];

const gigProjects = [
  {
    id: 1,
    imgURL:
      "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Web and Mobile Design",

    client: {
      profileURL:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Anna Bell"
    }
  },
  {
    id: 2,
    imgURL:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Logo Design",

    client: {
      profileURL:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Morton Green"
    }
  },
  {
    id: 3,
    imgURL:
      "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",

    category: "Animated GIFs",

    client: {
      profileURL:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Emmett Potter"
    }
  },
  {
    id: 4,
    imgURL:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Packaging Design",

    client: {
      profileURL:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Freddie Johnston"
    }
  },
  {
    id: 5,
    imgURL:
      "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Social Media Design",

    client: {
      fullName: "Audrey Richards",
      profileURL:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 6,
    imgURL:
      "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Illustration",
    client: {
      profileURL:
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Dalton Hudson"
    }
  },
  {
    id: 7,
    imgURL:
      "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Book Design",

    client: {
      profileURL:
        "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Hannah Dougherty"
    }
  },
  {
    id: 8,
    imgURL:
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Digital Marketing",

    client: {
      profileURL:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      fullName: "Ward Brewer"
    }
  }
];

const routeGigs = [
  {
    id: 1,
    imgURL:
      "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 59,

    client: {
      stars: 5,
      fullName: "Anna Bell",
      profileURL:
        "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 2,
    imgURL:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 79,

    client: {
      stars: 5,
      fullName: "Lannie Coleman",
      profileURL:
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 3,
    imgURL:
      "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 112,

    client: {
      stars: 5,
      fullName: "Carol Steve",
      profileURL:
        "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 4,
    imgURL:
      "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 99,

    client: {
      stars: 4,
      fullName: "Don Weber",
      profileURL:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 5,
    imgURL:
      "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 59,

    client: {
      stars: 5,
      fullName: "Audrey Richards",
      profileURL:
        "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 6,
    imgURL:
      "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 79,

    client: {
      stars: 4,
      fullName: "Walton Shepard",
      profileURL:
        "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 7,
    imgURL:
      "https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 89,

    client: {
      stars: 5,
      fullName: "Waverly Schaefer",
      profileURL:
        "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  },
  {
    id: 8,
    imgURL:
      "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I will create AI art character from your images and prompts",
    price: 110,

    client: {
      star: 4,
      fullName: "Wilton Hunt",
      profileURL:
        "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  }
];

export { gigCategories, routeGigs, gigProjects };
