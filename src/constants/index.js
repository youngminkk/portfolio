import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";
import portf1 from "../assets/img/port/main_work_img_1.jpg";
import portf2 from "../assets/img/port/main_work_img2.jpg";
import portf3 from "../assets/img/port/main_work_img3.jpg";
import portf4 from "../assets/img/port/main_work_img4.jpg";
import reactImg from '../assets/img/stack/front/react.png';
import ajaxImg from '../assets/img/stack/front/ajax.png';
import jsImg from '../assets/img/stack/front/js.png';
import bootstrapImg from '../assets/img/stack/front/bootstap.png';
import jqueryImg from '../assets/img/stack/front/jquery.png';
import javaImg from '../assets/img/stack/back/java.png';
import mariaImg from '../assets/img/stack/back/mariadb.png';
import oracleImg from '../assets/img/stack/back/oracle.png';
import rdsImg from '../assets/img/stack/back/rds.png';
import servletImg from '../assets/img/stack/back/servlet.png';
import springImg from '../assets/img/stack/back/spring.png';
import springbootImg from '../assets/img/stack/back/springboot.png';
import springSecImg from '../assets/img/stack/back/springsecurity.png';
import awsImg from '../assets/img/stack/cicd/aws.png';
import sssImg from '../assets/img/stack/cicd/s3.png';
import gitImg from '../assets/img/stack/infra/github.png';
import gradleImg from '../assets/img/stack/infra/gradle.png';
import mavenImg from '../assets/img/stack/infra/maven.png';
import nginxImg from '../assets/img/stack/infra/nginx.png';
import tomcatImg from '../assets/img/stack/infra/tomcat.png';




export const headerNav = [
    {
        title: "about",
        url: "#about"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#card"
    },
    {
        title: "portfolio",
        url: "#portf"
    },
    {
        title: "project",
        url: "#port"
    }
];

export const aboutText = {
    title: "about me :",
    desc: ["Kim Young Min","web developer"],
    about: ["무한히 공부하고 사고하는 개발자가 되고 싶고 동시에 개발의 즐거움이 끊임없이 이어지기를 바랍니다."
    ,"제가 생각하는 개발은 끊임없이 변화하고 발전하는 분야이기에 개발자는 계속해서 새로운 기술과 트렌드에 대해 학습하고 문제를 해결하는 창의적인 사고를 발전시키는 것이 중요하다고 생각합니다."
     ,"프로젝트 협업을 통해 지식을 공유하고 함께 성장하는 개발자로써의 역량을 키워 나가겠습니다. "
     ,"개발자로서의 여정이 행복하고 의미 있는 일이 되면 좋겠습니다."
     ,""]
}
export const modalText = {
    title: "안녕하세요🙋‍♂️",
    desc: ["개발자 김영민입니다."
    ,"현재 사이트는 React / Gsap / Swiper 등을 사용하여 제작되었습니다."
    ,"제가 관심을 가지고 있는 기술이나 주제에 대해 궁금한 점이 있으시다면," 
    ,"언제든지 연락 주시기 바랍니다."
    ,"📧mmmin0610@gmail.com 입니다."
    ,"저는 항상 새로운 것을 배우고, 다양한 사람들과 함께 성장하는 것을 좋아합니다."
    , "당신과 함께 성장할 수 있는 기회를 갖게 되면 정말 기쁠 것 같습니다."
    ,"제 웹사이트를 방문해주셔서 감사합니다." 
    ,"좋은 하루 보내시길 바랍니다! ⛄"],
}
export const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
        title: "나에게 정직하다.",
        desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    }
]

export const siteText = [
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "비트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vite",
        view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-react",
        view: "https://port2023-react.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, react",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vue",
        view: "https://port2023-vue.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, vue",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "넥스트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-next",
        view: "https://port2023-next.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];
export const portFolio = [
    {
        num: "1",
        title: "어워드에도 올라간 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: portf1,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "2",
        title: "빛나는 밤에 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf2,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "3",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf3,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "4",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf4,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
]
export const portText = [
    {
        num: "01",
        title: "어워드에도 올라간 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: port01,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "02",
        title: "빛나는 밤에 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port02,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "03",
        title: "열정이 넘치는 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: port03,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "04",
        title: "모던한 포트폴리오",
        desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
        img: port04,
        code: "https://github.com/dlgnsrb227/portfolio-next",
        view: "https://hoongportfolio-next.netlify.app/",
        name: "이훈* 포트폴리오",
    },
    {
        num: "05",
        title: "가로모드의 정석 포트폴리오",
        desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
        img: port05,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        name: "박준* 포트폴리오",
    },
    {
        num: "06",
        title: "화려함의 정석 포트폴리오",
        desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
        img: port06,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
        name: "포트폴리오",
    },
    {
        num: "07",
        title: "패럴랙스 정석 포트폴리오",
        desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
        img: port07,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
        name: "포트폴리오",
    },
    {
        num: "08",
        title: "트랜지션 포트폴리오",
        desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
        img: port08,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
        name: "포트폴리오",
    },
    {
        num: "09",
        title: "스크롤의 정석 포트폴리오",
        desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
        img: port09,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/ChoJaeHyung/index.html",
        name: "포트폴리오",
    },
    {
        num: "10",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port10,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/JooHyeji/index.html",
        name: "포트폴리오",
    },
];


export const iconLink = [
{
    title: "gitIcon",
    desc: "",
    link: "https://github.com/youngminkk",
},
{
    title: "instaIcon",
    desc: "",
    link: "https://www.instagram.com/",
},
{
    title: "tistoryIcon",
    desc: "",
    link: "https://mpago.tistory.com/",
},
];

export const stackImg = [
    {
      category: 'frontend',
      stacks: [
        { name: 'React', img: reactImg },
        { name: 'JS', img: jsImg  },
        { name: 'jquery',  img: jqueryImg  },
        { name: 'bootstrap',  img: bootstrapImg  },
        { name: 'ajax',  img: ajaxImg  },
      ],
    },
    {
      category: 'backend',
      stacks: [
        { name: 'Java', img: javaImg },
        { name: 'Spring', img: springImg },
        { name: 'SpringBoot', img: springbootImg },
        { name: 'SpringSecurity', img: springSecImg },
        { name: 'Oracle', img: oracleImg },
        { name: 'MariaDB', img: mariaImg },
        { name: 'RDS', img: rdsImg },
        { name: 'Servlet', img: servletImg },
      ],
    },
    {
      category: 'cicd',
      stacks: [
        { name: 'AWS', img: awsImg },
        { name: 'S3', img: sssImg },
      ],
    },
    {
      category: 'infra',
      stacks: [
        { name: 'GibHub', img: gitImg },
        { name: 'Gradle', img: gradleImg },
        { name: 'Maven', img: mavenImg },
        { name: 'Nginx', img: nginxImg },
        { name: 'Tomcat', img: tomcatImg },
      ],
    },
  ];
  //이미지 동적로드는  src, src prop을 키로 사용하여 이미지 렌더링이 쉬움
  export const projects = [
    {
      title: "Matthias Leidinger",
      content: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      img: port01,
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#CFB0B6"
    },
    {
      title: "Clément Chapillon",
      content: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      img: port02,
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#B9ADA4"
    },
    {
      title: "Zissou",
      content: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      img: port03,
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#EB6230"
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      content: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      img: port04,
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#C74145"
    },
    {
      title: "Mark Rammers",
      content: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      img: port05,
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#CDC38E"
    }
  ]