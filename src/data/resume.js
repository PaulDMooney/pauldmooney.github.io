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
      name: "Javascript / ES6 / ES2017",
      rating: 0.75,
    },
    {
      name: "NodeJS",
      rating: 0.6
    },
    {
      name: "Vagrant",
      rating: 0.8
    },
    {
      name: "Ansible",
      rating: 0.8
    },
    {
      name: "Docker",
      rating: 0.6
    },
    {
      name: "Terraform",
      rating: 0.4
    },
    {
      name: "Gradle",
      rating: 0.9
    },
    {
      name: "CSS",
      rating: 0.9
    },
    {
      name: "TypeScript",
      rating: 0.6
    },
    {
      name: "Kotlin",
      rating: 0.5
    }
  ],
  education: {
    institutes: [
      {
        company: "McMaster University",
        location: "Hamilton, Ontario",
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
        location: "Toronto, Ontario",
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
        location: "Toronto, Ontario",
        from: new Date(2008, 2),
        to: new Date(2014, 8),
        projects: [
          {
            name: "IndyCar Mobile",
            description: `Verizon sponsored IndyCar Mobile application is a companion app for Android and iOS that
includes IndyCar related news, photos, videos, tweets, driver and event statistics, live video feeds,
as well as a live interactive leaderboard.`,
            responsibilities: [
              `Requirements gathering, Planning, estimating, and story preparations.`,
              `Designing aspects of, or assisting in designs of server-side systems such as data collection,
administration consoles, live leaderboard protocol, web services, and push notifications.`,
              `Interfacing with customer regularly for design and troubleshooting topics.`,
              `Developing and testing server-side components.`,
              `Designed protocol to allow time synchronization between live video and live leaderboard.`,
              `Developed image resizing web service for simpler, more efficient, image handling.`
            ]
          },
          {
            name: "AT&T Uverse",
            description: "TV Uverse OTT offering by AT&amp;T for mobile subscribers.",
            responsibilities: [
              `Refactored video transcoding platform workflow to reuse transcoded variants of a video
asset for multiple delivery types and DRM solutions.`,
              `Lead team to develop live streaming delivery solution with DRM.`,
              `Designed and lead team to develop transcoding optimizations for 32-core CPU hardware.`
            ]
          },
          {
            name: "Samsung MediaHub",
            description: `MediaHub is a central application to Samsung smart TVs. QuickPlay is contracted to provide
transcoding services of video content to be delivered to MediaHub. This is done using its
horizontally scalable video transcoding platform called Media Processor.`,
            responsibilities: [
              `Added Service Level Agreement (SLA) tracking and reporting capabilities, as well as UIs to
Media Processor to follow video assets that may or may not finish transcoding within a set
time period.`,
              `Designed load balanced work flow to ensure fair distribution of video transcoding time to all
content providers as well as prioritizing assets based on their type: Movie, same day TV
show, next day TV show.`
            ]
          },
          {
            name: "Internal",
            responsibilities:[
              `Developed administrative UI for the core platform used in all of QuickPlay's managed
services. UI was created to be extensible to allow for any enhancements and customizations
required in a customized managed service project.`,
              `Maintained and developed video transcoding platform. Particularly applying transcoding
optimizations, adapting the platform's grid aspects to use map-reduce pattern, and enhancing
build system to ease development and reduce build-deploy- test cycle time.`,
              `Developed UI to apply slates or blackouts to live channels. Includes embedded video
preview.`,
              `Review resumes, conduct interviews, and assist in creaaating standardization in the hiring
process.`,
              `Mentor new hires in company development practices and core projects.`
            ]
          }
        ]
      },
      {
        title: "Java EE/Web Developer",
        company: "Adjuvant Informatics",
        location: "Flamborough, Ontario",
        from: new Date(2006,1),
        to: new Date(2008,2),
        description: `Software firm specializing in the clinical anaesthetic and acute pain management domains.
Adjuvant Informatics is a Java shop which utilizes Agile and Test First development practices.`,
        responsibilities: [
          `Wrote a hospital tracking systems (HL7) interface for Adjuvant’s Acute Pain Service
Manager product. Deployed in Sunnybrook, Hamilton Health Sciences, and St. Joseph's
Hospital.`,
          `Created SOAP web service and application which receives information and events from
remote PCA Infusion pumps, and pushes data to client web browsers using Flex Data
Management Services in order to update charts displayed in Flash.`,
          `Created a data driven questionnaire with a web interface used for Pre-Operative Assessment.`,
          `Used Hibernate, Struts, AJAX (DWR and YUI) and service oriented design pattern to create
a system for tracking information regarding notable incidents in hospitals, as well as any
follow up meetings, recommendations, and root cause analyses.`,
          `Aided in the design of the domain model shared among current and future web application
modules in the Clinical Anaesthesia Information System suite.`,
          `Created a hybrid authentication and authorization infrastructure using JNDI/LDAP and
JDBC security realms for the preceding web applications.`,
          `Aided in the sprint planning process, particularly devising the next sprints list of
stories/tasks and putting time estimates on them.`
        ]
      },
      {
        title: "Java/Web Developer (Contract)",
        company: "Open Sky Solutions",
        location: "Hamilton, Ontario",
        from: new Date(2005,6),
        to: new Date(2005,11),
        description: "Software firm dealing mainly in contracts for Renaissance Humanist projects.",
        responsibilities: [
          `In a team, developed York University’s PACE site using the Apache Cocoon framework.`,
          `Wrote converter to convert various sources of information into database entries for the
PACE site. This includes parsing Access database XML, Excel XML, and various volumes
of Word Document formatted texts.`,
          `Recreated company website using Cocoon and XSL, so that a WML version was supported
using the same source XHTML for content as the desktop version of the site.`
        ]
      }
    ]
  }
}
