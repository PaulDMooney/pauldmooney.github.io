export default {

  skills: [
    {
      name: "Java 8",
      rating: 0.9
    },
    {
      name: "Spring",
      rating: 0.8
    },
    {
      name: "NodeJS",
      rating: 0.6
    }
  ],
  education: {
    institutes: [
      {
        company: "McMaster University",
        from: new Date(2000,8),
        to: new Date(2005, 4),
        projects: [{
          name: "B. Sc. Honours Computer Science",
          description: `Study of advanced data structures and algorithms, computer architecture, advanced programming
          paradigms, algorithm analysis, abstract data types, recursion, modularization, object-oriented
          modelling and design, fault tolerance and reliability, design specifications and implementation,
          operating system concepts and design, advanced operating systems for distributed systems,
          compiler construction, and database schema design.`
        }]
      }

    ]

  },
  experience: {
    jobs: [
      {
        title: "Technical Lead",
        company: "Architech",
        from: new Date(2014,8),
        description: "",
        projects: [
          {
            name: "RotoRooter",
            description: "Modernizing and optimizing www.rotorooter.com and implementing new features.",
            responsibilities: [
              "Modernize technology stack and cleanup of legacy technical debt items.",
              "Establish standards and guides for reusable site components.",
              "Lead team to develop new features."
            ]
          },
          {
            name: "BelFuse",
            description: "Consolidating all sub brands and their product catalogs into a unified catalog under a single site.",
            responsibilities: [
              "Aided in developing content modelling and migration strategy.",
              "Client-side developer consulting and education.",
              "Lead team to develop new site under the DotCMS content management system."
            ]
          }
        ]
      }
    ]
  }
}
