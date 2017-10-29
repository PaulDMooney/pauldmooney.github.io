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
          },
          {
            name: "Boar’s Head DOCK",
            description: "Revision of Boar’s Head’s information portal for distributors, named DOCK. Implemented in the DotCMS platform.",
            responsibilities: [
              "Planning, estimating, and disseminating work items to team.",
              "Provided aid for client developers in using DotCMS platform, provided best practice guidelines, development VMs, and jump start for testing in DotCMS.",
              "Developed extensions for platform to meet client’s custom needs beyond platforms abilities."
            ]
          },
          {
            name: "Microsoft Technology Center Digital Concierge",
            description: "A set of web applications to allow client’s of Microsoft’s Technology Center to register for an engagement and check-in on site via facial recognition.",
            responsibilities: [
              "Implemented web service layer in C# .Net utilizing Entity Framework 6 and Web API as well as deployments to Azure.",
              "Investigated walk up detection Javascript libraries to use in client UI.",
              "Ported facial recognition libraries to web service layer"
            ]
          },
          {
            name: "CDK Global",
            description: "Replatforming CDK Global’s dealership software offerings from IBM I-series green screen application to a modern stack implemented using Spring Boot and AngularJS.",
            responsibilities: [
              "Provided development team at CDK with guidance on choosing technologies, architecting and implementing in languages and paradigms unfamiliar to them",
              "Supplemented CDK team’s planning and development efforts"
            ]
          },
          {
            name: "Serco DriveTest",
            description: "Large scale software update for DriveTest centers across all of Ontario.",
            responsibilities: [
              "Designed interaction between vendor products for scheduling road tests, test center queuing system, and test result tracking systems.",
              "Verified and validated several use case documents related to bookings, check-ins, and test executions."
            ]
          },
          {
            name: "Internal",
            responsibilities: [
              "Provide pre-sales support including investigations and architecting possible solutions, providing estimates, aiding in development of SOW, client presentations.",
              "Mentor junior developers in growing their skillsets and proper handling of project duties.",
              "Promote and create awareness of new technologies and techniques."
            ]
          }
        ]
      },
      {
        title: "Java EE Developer / Team Lead",
        company: "QuickPlay Media",
        from: new Date(2008, 2),
        to: new Date(2014, 8)
      },
      {
        title: "Java EE/Web Developer",
        company: "Adjuvant Informatics",
        from: new Date(2006,1),
        to: new Date(2008,2),
      }
    ]
  }
}
