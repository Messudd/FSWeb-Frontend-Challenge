const myInfo = {
  intro: {
    head: " Creative thinker Minimalism lover",
    content:
      "Hi, I’m Mesud. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
  },
  other: {
    hireMe: 'Hire me',
    skill: 'Skills',
    proj: 'Projects',
    profil: 'Profile',
    more: '| More Info',
    per: 'Personal Blog',
    DT :'Date Of Birth : ',
    loc : 'City : ',
    degree: 'Education : ',
    rl : 'Role : ',
    aboutMe : 'About Me',
    lang : 'TÜRKÇE',
    footerSlogan :'Let’s work together on your next product.',
    visit: 'View Site',
    send: 'Send',
    res: 'Reset',
    con : 'Contact Me'
  },
  skills: {
    name: ["https://wikiskola.se/images/thumb/6/6a/JavaScript-logo.png/JavaScript-logo.png", "https://miro.medium.com/v2/resize:fit:600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg", "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg","https://cdn-icons-png.flaticon.com/512/732/732212.png", "https://logospng.org/download/css-3/logo-css-3-2048.png", "https://e7.pngegg.com/pngimages/431/965/png-clipart-figma-designer-computer-icons-material-design-design-rectangle-poster-thumbnail.png"],
  },
  profile: {
    date_of_birth: "04.07.1993",
    city: "İstanbul / Pendik",
    education: "Erciyes Universty - Electrical and Electronics Engineering",
    role: "Frontend, UI",
    about:
      "As an electronics engineer, I have always been very interested in the software world for this reason, I decided to become a software developer and took a 6-month full - stack bootcamp training. I  hope that I can further develop this experience under teamwork in real and challenging projects in the sector and achieve excellence. If you are looking for a member of your team,  I am here.",
  },
  projects: [
    {
      image: './../image/pizzaApp.png',
      name: "Pizza Order",
      content:
        "In this pizza project, upon the user accurately filling out the order form, a redirection process to the confirmation page is implemented upon clicking the Place Order button.",
      used: ["React", "Yup", "Axios"],
      github: "https://github.com/Messudd/fsweb-s7-challenge-pizza",
      url: "https://challenge-pizza-orcku6296-messudd.vercel.app/",
    },
    {
      image: './../image/filmApp.png',
      name: "Film App",
      content:
        "A web application has been developed that pulls film data from an API, creates detailed pages for each film, and allows users to add selected films to their favorite list.",
      used: ["React", "Props-Drilling", "Axios"],
      github: "https://github.com/Messudd/React_Film_App",
      url: "https://react-film-ghy8i4ap6-messudd.vercel.app/",
    },
    {
      image: './../image/playerAPP.png',
      name: "Player Form",
      content:
        "A web application was experienced where players can register, delete and update by validly filling out a form.In this application, feedback is given to the user with toastify.",
      used: ["React", "Form - Validation","Toastify"],
      github: "https://github.com/Messudd/fsweb-s7g2-team-builder",
      url: "https://fsweb-s7g2-team-builder-jdsktdvrs-messudd.vercel.app/",
    },
  ],
  infoPage :{
    general:{
      spec: 'Spesific Info',
      inInfo: 'Intro',
      ex: 'Experience',
      cn: 'Contact',
      edu: 'Education',
      lan: 'Language',
      hob: 'Hobbies'
    },
    spesificInfo:{
      gender: 'Gender : ',
      military : 'Military Service : ',
      nation: 'Nationality : ',
      driver: 'Driver - License : ',
      gen: 'Male',
      mil: 'OK',
      nat: 'T.C',
      dr: 'B'
    },
    introInfo : {
      summary: 'Summary',
      content: 'As an electronics engineer, I am interested in many areas of the software world, especially in the electronic field, such as embedded software development and desktop GUI development for these software. In addition, I like to deal with front end technologies in the web field and develop and share personal projects in these areas. I can say that this is more than a hobby for me. I hope that in the business world, I can engage in work that I enjoy and love doing, and that I can have the opportunity to improve myself a lot in these areas.',
    },
    exper : {
    date : "August 2022- March 2023",
    company : "OTAM A.Ş l Tosb , Kocaeli",
    job:"Test Engineer",
    content: "In the automotive sector, specific part tests have been conducted. The process involved the formulation of test scenarios, the execution of the testing procedures, and the reporting of results for incoming parts. Throughout this process, the conducted tests generally focused on fatigue, durability, and vibration."
  },
    contactMe : {
      mob : ["Mobile :" , "+905364529415"],
      emailMe : ["Email :" ,"eem.mesud.28@gmail.com"]
    } ,
    edu : ["Universty : ", "Erciyes - Universty | Electrical - Electronics Engineering","Course : ","Workintech | Full Stack Developer"],
    hobbies: ['Animation','Film','Documentary','Mitologi','Astronomi'],
    my_Info: 'MY INFO',
    lang: {lg: ['- Turkish ', '- English '],level: ['(Native)','(Middle-Level)']},
  }
};

export default myInfo;
