const jsondata = {
  'about': 'Since 1995, I have been interested in computers, programming and developing websites.  Beginning with my first website in "SiliconValley Heights" on GeoCities, I was determined to constantly grow and learn.  I began my adventure of systems administration with a Slackware server in 1999.',
  'work': [
    {
      'company': 'NameItCreateIt, LLC.',
      'position': 'Owner',
      'location': 'Fairbanks, AK',
      'website': 'https://www.nameitcreateit.com',
      'startDate': '10/1/2017',
      'endDate': '',
      'summary': 'Manage a domain registration website, conduct contracted web design and hosting jobs for local businesses, manage and run a private cloud solution utilizing Digital Ocean, Docker, Kubernetes, and Rancher. Development projects involve PHP, Perl, Python, and Go with persistent storage via Redis and MySQL database servers in a high availability cluster.'
    },
    {
      'company': 'AirStats',
      'position': 'Developer',
      'location': '',
      'website': 'https://www.airstats.org',
      'startDate': '4/30/2017',
      'endDate': '',
      'summary': 'Utilizing Git, MariaDB, proprietary data formats parsers, AWS S3 data storage, Laravel-based backend API, and a ReactJS with Redux front end, create and maintain a website that tracks, logs, archives flights and creates statistics for flights conducted on the Virtual Air Traffic Simulation (VATSIM) network by members using Microsoft Flight Simulator, X-Plane and Lockheed Martin\'s Prepar3D.'
    },
    {
      'company': 'AirCharts',
      'position': 'Developer',
      'location': '',
      'website': 'https://www.aircharts.org',
      'startDate': '7/1/2011',
      'endDate': '',
      'summary': 'Utilizing Git, MariaDB, AWS S3 data storage, Golang, and Laravel with Bootstrap and jQuery, create a series of spiders that crawl the web indexing links for aviation charts used for flight simulation purposes that are presented through the website, mobile interface (Electronic Chart Reader [ECR]) and API used by dozens of other virtual flight simulation related groups.  Created and actively maintain separate interface utilizing ReactJS and the public is available that is used for embedded devices and implementations (ECR).'
    },
    {
      'company': 'Department of Transportation, Federal Aviation Administration',
      'position': 'Air Traffic Control Specialist',
      'location': 'Fairbanks Flight Service Station, Fairbanks, AK',
      'website': 'https://www.faa.gov',
      'startDate': '8/7/2016',
      'endDate': '',
      'summary': 'Provide pre-flight weather briefings, Search and Rescue assistance and coordination, flight plan creation and dissemination, Notices to Airmen of airport and safety conditions and flight services throughout the state of Alaska. While rotating through Deadhorse Flight Service Station, provide additional services including airport traffic advisory services, SVFR clearances, taking weather observations and diseminating weather and airport information via a recorded Automatic Flight Information Service (AFIS).'
    },
    {
      'company': 'Department of Transportation, Federal Aviation Administration',
      'position': 'Air Traffic Control Specialist',
      'location': 'Fairbanks Air Traffic Control Tower, Fairbanks, AK',
      'website': 'https://www.faa.gov',
      'startDate': '7/27/2016',
      'endDate': '8/7/2016',
      'summary': 'Provide ground movement instructions, flight plan dissemination and coordination, provide departure and approach separation and services to aircraft in and around Fairbanks, AK airspace'
    },
    {
      'company': 'Virtual Air Traffic Simulation (VATSIM) Network, USA Division',
      'position': 'Data Services Manager',
      'location': '',
      'website': 'https://www.vatusa.net',
      'startDate': '1/16/2015',
      'endDate': '',
      'summary': 'Manage and develop IT systems including email, MariaDB, Redis and the web services.  Utilizing Laravel, Bootstrap, Semantic UI and jQuery, developed and maintain a website used by over 18,000 active VATISM Network users and maintain an API that allows integration and provides Single Sign-On authentication services with the 22 sub-divisions within the USA Division. Backend processes involve usage of AWS S3, Python, Perl, PHP and shell scripting. Containerization using Docker and Docker Swarm.'
    },
    {
      'company': 'United States Navy',
      'position': 'Air Traffic Controller 1st Class (E-6)',
      'location': 'CVN-73 USS George Washington',
      'website': 'https://www.navy.mil',
      'startDate': '8/15/2012',
      'endDate': '4/17/2015',
      'summary': 'Provide ATC services to aircraft around the carrier to include: holding, approach, final approach monitoring and departure.  Plot, track and ensure aircraft do not penetrate foreign airspace.  Responsible for disseminating flight plan and aircraft status information to squadrons and officers throughout the carrier'
    },
    {
      'company': 'United States Navy',
      'position': 'Air Traffic Controller 2nd Class (E-5)',
      'location': 'Naval Air Station Pensacola, FL',
      'website': 'https://www.navy.mil',
      'startDate': '10/28/2008',
      'endDate': '8/15/2012',
      'summary': 'Provide ground movement instructions, flight plan dissemination and coordination and provided Precision Approach Radar services.  Activate and Deactivate scheduled military airspace over the Gulf of Mexico.  Provide en-route radar services to participating aircraft and non-participating aircraft entering, transiting and leaving the airspace and ensuring separation from hazardous events.'
    }
  ],
  'skills': [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'ES6',
    'jQuery',
    'Bootstrap',
    'React',
    'Redux',
    'Perl',
    'PHP',
    'Laravel',
    'AWS',
    'Node',
    'MySQL/MariaDB',
    'Git',
    'UNIX Shell Scripts',
    'Docker',
    'Docker Swarm',
    'Rancher',
    'Golang',
    'Linux Administration (CentOS/Ubuntu)',
    'Windows Server 2008',
    'Visual Basic',
    'C#'
  ],
  'interests': [
    'Programming',
    'Systems Administration',
    'Photography',
    'Traveling'
  ],
  'education': [
    {
      'institution': 'Western Governors University',
      'area': 'Software Development (in Progress)',
      'studyType': 'Bachelor of Science'
    },
    {
      'institution': 'University of Maryland, University College',
      'area': 'Computer Science',
      'studyType': 'Coursework'
    },
    {
      'institution': 'Irvine Valley College',
      'area': 'Management of Information Systems',
      'studyType': 'Coursework'
    }
  ],
  'certifications': [
    'CompTIA A+',
    'CompTIA Network+',
    'VMWare Certified Associate - Data Center Virtualization',
    'CIW Site Development Associate'
  ],
  'projects': [
    {
      'name': 'Aircharts',
      'image': './projects/aircharts.png',
      'url': 'https://www.aircharts.org',
      'src': 'https://www.bitbucket.com/dhawton/aircharts3'
    },
    {
      'name': 'Aircharts.ECR',
      'image': '/projects/aircharts.ecr.png',
      'url': 'https://www.aircharts.org/ecr',
      'src': 'https://bitbucket.org/dhawton/aircharts.ecr'
    },
    {
      'name': 'AWIDS',
      'image': '/projects/AWIDS.png',
      'url': 'https://www.github.com/dhawton/awids',
      'src': 'https://www.github.com/dhawton/awids'
    },
    {
      'name': 'FrozenLens',
      'image': '/projects/frozenlens.png',
      'url': 'http://www.frozenlens.org',
      'src': 'https://www.bitbucket.com/dhawton/frozenlens'
    },
    {
      'name': 'VATUSA',
      'image': '/projects/vatusa.png',
      'url': 'https://www.vatusa.net',
      'src': ''
    },
    {
      'name': 'Resume',
      'image': '/projects/resume.png',
      'url': 'https://www.danielhawton.com',
      'src': 'https://www.github.com/dhawton/resume'
    }
  ]
}

export default jsondata
