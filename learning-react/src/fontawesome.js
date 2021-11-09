//Khởi tạo thư viện icon của riêng bạn
import { library } from '@fortawesome/fontawesome-svg-core'; 

//Import các icon mà bạn muốn sử dụng trong từng gói
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';  
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart,faVideo,faPauseCircle, faMicrophoneAlt,faWindowRestore,faVolumeUp,faListUl, faRandom,faBackward,faForward,faRetweet, faStarHalfAlt,faPlayCircle,faEllipsisH, faChevronLeft,faTimes, faChevronRight, faCloudUploadAlt,faCog,faTshirt, faSearch, faArrowRight,faArrowLeft, faPlay,faClock, faMusic,faDotCircle,faChartLine,faHeadphones,faList,faMicrophone,faIcons,faGuitar} 
from '@fortawesome/free-solid-svg-icons';
// import {faGithub} from '@fortawesome/free-brands-svg-icons'
//Add các icon đã được import vào trong thư viện của bạn
library.add( fab,faHeart,faRandom,faPauseCircle,faBackward,faForward,faVideo, faMicrophoneAlt,faWindowRestore,faVolumeUp,faListUl,faRetweet,faStarHalfAlt,faPlayCircle,faEllipsisH,faCloudUploadAlt,faTimes, faChevronLeft,faChevronRight,faCog,faTshirt,faSearch,faPlay,faArrowRight,faArrowLeft,faClock, faMusic,faChartLine,faIcons,faMicrophone,faHeadphones,faGuitar,faList,faDotCircle);

