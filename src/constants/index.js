import portf1 from "../assets/img/port/portf1.png";
import site1 from "../assets/img/site/site1.png";
import site2 from "../assets/img/site/site2.png";
import site3 from "../assets/img/site/site3.png";
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
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineRise, AiOutlineFolderOpen } from 'react-icons/ai';
import { FaRegCreditCard } from 'react-icons/fa';


export const headerNav = [
    {
        title: "about",
        url: "#about"
    },
    {
        title: "goals",
        url: "#goals"
    },
    {
        title: "site",
        url: "#card"
    },
    {
        title: "portfolio",
        url: "#portf"
    },
    // {
    //     title: "project",
    //     url: "#port"
    // }
];
export const navbar = [
  {
    title: "intro",
    url: "#intro",
    icon: <AiOutlineHome />
},
{
    title: "about",
    url: "#about",
    icon: <AiOutlineInfoCircle />
},
{
    title: "goals",
    url: "#goals",
    icon: <AiOutlineRise />
},
{
    title: "card",
    url: "#card",
    icon: <FaRegCreditCard />
},
{
    title: "portfolio",
    url: "#portf",
    icon: <AiOutlineFolderOpen />
}
]

export const aboutText = {
    title: "about",
    desc: ["Kim Young Min","web developer"],
    about: ["무한히 공부하고 사고하는 개발자가 되고 싶습니다."
    ,"제가 생각하는 개발은 끊임없이 변화하고 발전하는 분야이기에 개발자는 계속해서 새로운 기술과 트렌드에 대해 학습하고 문제를 해결하는 창의적인 사고를 발전시키는 것이 중요하다고 생각합니다."
     ,"지식의 선순환을 꿈꾸는 개발자가 되고 싶습니다.","협업을 통해 지식을 공유하고 함께 성장하는 개발자가 되고 싶습니다. "
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
export const goalsText = [
    {
        title: "정의하는 개발자가 되고 싶습니다.",
        desc: "문제를 잘 해결하려면 문제가 무엇인지부터 잘 정의해야 합니다. 문제를 직면하고 단순히 해결 한다고 좋은 개발자는 아니라 생각합니다. 문제가 왜 생겼으며 추가적으로 발생할 문제가 무엇인지 개발자의 관점, 사용자의 관점에서 바라봐야 합니다. 문제들을 정의하는 것은 창의력이 중요하고 창의력은 기본기에서 나옵니다. 계속해서 공부하고 개발하겠습니다. "
    },
    {
        title: "감각 있는 개발자가 되고 싶습니다.",
        desc: "제가 생각하는 균형감각 있는 개발자란 전체 프로세스를 이해하고 넓은 시야와 다양한 관점에서 문제를 해결할 수 있어야 한다고 생각합니다. 그 과정에서 끊임없는 소통과 협의를 진행해야 합니다. 또한, 프로젝트마다 속도가 중요할 때가 있고, 최신버전 리팩토링보다 안정성이 보장된 레거시가 필요할 때도 있습니다. 시기와 상황에 맞는 효율적인 방법을 적재적소에 사용하고 싶습니다."
    },
    {
        title: "사용자인 개발자가 되고 싶습니다.",
        desc: "저는 사용자 친화적인 환경을 제공하기 위해 다양한 의견과 피드백을 소중히 듣고, 개선점을 파악하여 그에 맞는 기능과 서비스를 제공하겠습니다. 사용자의 편의성과 사용성을 고려한 UI/UX 추구하고, 다양한 기기와 환경에서도 일관된 서비스를 이용할 수 있도록 노력하겠습니다. 사용자들의 개인정보를 보호하고, 데이터의 신뢰성과 안정성을 고려하겠습니다. 사용자들이 서비스를 안심하고 이용할 수 있도록 만들고, 저 또한 개발자인 동시에 사용자가 되겠습니다." 
    }
]

export const portFolio = [
    {
        num: "1",
        title: "React로 만든 포트폴리오",
        desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
        img: portf1,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
        name: "김상* 포트폴리오",
    },
    {
        num: "2",
        title: "React로 만든 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf1,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "3",
        title: "React로 만든 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf1,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
    {
        num: "4",
        title: "React로 만든 포트폴리오",
        desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
        img: portf1,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
        name: "천설* 포트폴리오",
    },
]

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
      title: "To Make Light",
      content: "To Make Light'는 HTML과 CSS로만 만든 사이트입니다. 이 웹사이트는 기본적인 웹사이트의 구조와 웹페이지 디자인에 대한 연습하기 위해 만들어졌습니다.",
      img: site1,
      link: "https://github.com/youngminkk/html-css",
      color: "#CFB0B6"
    },
    {
      title: "Moving",
      content: "'Moving'은 JSP&Servlet을 활용하여 개발한 웹사이트입니다. HTML5, CSS3, Bootstrap을 사용하여 사용자 인터페이스를 구성, JavaScript와 jQuery를 사용하여 동적인 기능을 추가, Java를 사용하여 서버 측 로직을 구현하였습니다.",
      img: site2,
      link: "https://github.com/youngminkk/Movingprj",
      color: "#B9ADA4"
    },
    {
      title: "Carpibara",
      content: "To Make Light'는 HTML과 CSS로만 만든 사이트입니다. 이 웹사이트는 기본적인 웹사이트의 구조와 웹페이지 디자인에 대한 연습하기 위해 만들어졌습니다.",
      img: site3,
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#EB6230"
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      content: "To Make Light'는 HTML과 CSS로만 만든 사이트입니다. 이 웹사이트는 기본적인 웹사이트의 구조와 웹페이지 디자인에 대한 연습하기 위해 만들어졌습니다.",
      img: site1,
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#C74145"
    },
    {
      title: "Mark Rammers",
      content: "To Make Light'는 HTML과 CSS로만 만든 사이트입니다. 이 웹사이트는 기본적인 웹사이트의 구조와 웹페이지 디자인에 대한 연습하기 위해 만들어졌습니다.",
      img: site1,
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#CDC38E"
    }
  ]