const links = [
  {
    id: "1",
    href: "/",
    text: "Home",
    pageTitle: "Home Page",
    pageSubtitle: "This is the bravegrumpy Homepage!",
  },
  {
    id: "2",
    href: "/writing",
    text: "Writing",
    pageTitle: "Creative  Writing",
    pageSubtitle: "There is a lot of creative writing here.",
    subnav: [
      {
        id: "2-0",
        href: "/writing/huetopia",
        text: "Fantasy",
        pageTitle: "Huetopia Homepage",
        pageSubtitle: "A colorful continent within a magical world",
        subnav: [
          {
            id: '2-0-0',
            href: '/writing/huetopia/wbw',
            text: 'Coursera Work by Week',
            pageTite: 'Coursera Work by Week',
            pageSubtitle: 'Writing Excercises'
          },
          {
            id: "2-0-1",
            href: "/writing/huetopia/content",
            text: 'Read Now',
            pageTitle: "Narrative",
            pageSubtitle: "What I've written so far"
          }
        ],
      },
      {
        id: "2-1",
        href: "/writing/blog",
        text: "Blog",
        pageTitle: "Blog",
        pageSubtitle: "Written works about my thoughts and feelings.",
      },
    ],
  },
  //   {
  //     id: '2',
  //     href: '/writing',
  //     text: 'Writing',
  //     pageTitle: 'Creative Writing',
  //     pageSubtitle: 'This is the home for my creative writing works',
  //     aside: `
  //     <h2>Creative Writing</h2>
  //     <p>Over time, I have a few different creative works. The largest is my Huetopia fantasy story.</p>
  //     <p>Currently, I also have a blob.</p>
  //     <p>I do have another <a>fictional work</a> on the roadmap. </p>
  //     `,
  //     subnav: [
  //       {
  //         id: '2-0',
  //         href: '/writing/fantasy',
  //         text: 'Huetopia',
  //         pageTitle: 'Huetopia',
  //         pageSubtitle: 'A colorful continent within a magical world',
  //         // subSubnav: [{
  //         //     id: '2-0-1',
  //         //     href: '/writing/fantasy/huetopia',
  //         //     text: 'Huetopia',
  //         //     pageTitle: 'Huetopia Homepage',
  //         //     pageSubtitle: 'A grey world that yerns for color again.'

  //         // }]
  //       },
  //       {
  //         id: '2-1',
  //         href: '/writing/blog',
  //         text: 'blog',
  //         pageTitle: 'Blog',
  //         pageSubtitle: 'This is where  Iput my thoughts and feelings'
  //       }
  //     ]
  //   },
  {
    id: "3",
    href: "/links",
    text: "Links",
    pageTitle: "Link Repository",
    pageSubtitle: "This is a list of helpful links",
    // subnav: [
    //   {
    //     id: '3-1',
    //     href: '/links/one',
    //     text: 'First',
    //     pageTitle: 'First List Page',
    //     pageSubtitle: 'First page of Links'
    //   },{
    //     id: '3-2',
    //     href: '/links/two',
    //     text: 'Second',
    //     pageTitle: 'Second List Page',
    //     pageSubtitle: 'Another attempt at making a reasonable base layout'
    //   }
    // ]
  },
  {
    id: '4',
    href: '/archive',
    text: 'Archives',
    pageTitle: 'Archives',
    pageSubtitle: 'Previous versions of this website',
    subnav: [
      {
        id: '4-0',
        href: '/archive/sites',
        text: 'Sites',
        pageTite: 'Old Website Versions',
        pageSubtitle: "Previous iterations of this website."
      },
      {
        id: '4-1',
        href: '/archive/content',
        text: 'Content',
        pageTitle: "Archived Content",
        pageSubtitle: 'Contnet I no longer stand by'
      }
    ],
  }
];

const currentTab = "/links";

const listOfIds = [
  `#ior`,
  `#rs`,
  `#lighting`,
  `#lightingOnline`,
  `#finiteLight`,
  `#infiniteLight`,
];

const listOfTabs = [
  `${currentTab}${listOfIds[0]}`,
  `${currentTab}${listOfIds[1]}`,
  `${currentTab}${listOfIds[2]}`,
  `${currentTab}${listOfIds[3]}`,
  `${currentTab}${listOfIds[4]}`,
  `${currentTab}${listOfIds[5]}`,
];

const headings = [
  {
    id: "3-0-0",
    active: currentTab === listOfTabs[0],
    href: listOfIds[0],
    text: "Index of Refraction",
  },
  {
    id: "3-0-1",
    active: currentTab === listOfTabs[1],
    href: listOfIds[1],
    text: "Realistic Scale",
  },
  {
    id: "3-0-2",
    active: currentTab === listOfTabs[2],
    href: listOfIds[2],
    text: "Realistic Scale",
  },
  {
    id: "3-0-3",
    active: currentTab === listOfTabs[3],
    href: listOfIds[3],
    text: "Lighting, general",
  },
  {
    id: "3-0-4",
    active: currentTab === listOfTabs[4],
    href: listOfIds[4],
    text: "Finite Light Source",
  },
  {
    id: "3-0-5",
    active: currentTab === listOfTabs[5],
    href: listOfIds[5],
    text: "Infinite Light Source",
  },
];

export default links;
export { headings };
