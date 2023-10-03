import resd from "../images/bio1.jpg"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from './search2';
import Type from '../components/typewriter';
import logoicons from '../images/logoicons.jpg';
const Home = () => {
 return ( <>
   <Navbar/>
   <div className="my-mother bg-landing xs-down-8 down-2 my-bottom-50">
   <div className="black bmetext  xs-off-1 xs-8 xs-px20 px30 bold alice centered xs-down-9 down-2">BME Gene Bank is pioneering big data solutions in Biology</div>
    <div className="xs-off-2 centered xs-6 off-3 my-col-5">
     <Type/>
    </div> 
    <div className="my-col-10 xs-6">
      <div className="down-3 xs-down-8 xs-off-3 off-4 xs-7 my-col-6">
      <SearchBar/>
      <div className="px10 bold text-g">Examples: covid-19, "prostate cancer", brca, collagen, metabolism</div>
      </div>
     </div> 
   </div> 
   <div className="my-mother bg-white my-bottom-50">
    <div className="my-col-3 off-1 xs-down-8 xs-off-2 down-4">
      <img className="resd" src={resd} alt="" />
    

    </div>
    <div className="my-col-6 xs-10 mg-5 xs-down-4 down-8">
      <div className="px20 bold xs-off-1 xs-down-2 blue">Our Mission</div>
      <div className="px12 xs-down-2 xs-off-1">To create a repository of genetic data and position the
        department of Biomedical Engineering, University of Ilorin
        at the forefront of genomic studies, facilitating genetic based research,
        , experience and opportunites for all studnets and researchers.
      </div>
      <div className="px12 xs-down-2 xs-off-1 down-1">We are committed to preserving genetic diversity, enabling groundbreaking research, and fostering, collaborations that contribute to
        a better understanding of life's fundamental building blocks. Our dedication to excellence drives us to safeguard genetic information for
        current and future generations, ensuring it remains a valubale resource for scinetific innovation and biodiversity conservation.
      </div>

    </div>
   </div>
    <div className='my-mother bg-color-code-1 my-bottom-50'>
     <div className='my-col-10 xs-10 xs-off-1 xs-down-5 solution off-1 down-5'>
    <div className='my-col-12 centerd'>
      <div><span className='px30 bold white'><i className='fas fa-boxes'></i> Solutions</span></div>
      </div>
      <div className='my-col-3 xs-down-3 down-1'>
        <div className='my-container down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-book color-code-1'></i>
            <div className='down-2 bold'><span className='px13 color-code-1'>Books and Journals</span></div>
            <div className='down-5 px10 faded-1'>Empower your decision with world's expertise</div>
            <div className='xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-microscope color-code-1'></i>
            <div className='down-2 bold'><span className='px13 color-code-1'>Research</span></div>
            <div className='down-5 px10 faded-1'> Gain insights into the most recent advancements in the human gene</div>
            <div className='xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-users color-code-1'></i>
            <div className='down-2 bold'><span className='px13 color-code-1'>Conference and Talks</span></div>
            <div className='down-5 px10 faded-1'>Sharing the latest breakthroughs in genomics and DNA research</div>
            <div className='xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-plus-square color-code-1'></i>
            <div className='down-2 bold'><span className='px13 color-code-1'>Healthcare Education</span></div>
            <div className='down-5 px10 faded-1'>Smart learning solution for staff and students of Biomedical Engineering</div>
            <div className='xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
     </div>
    </div>
    <div className="my-col-10 xs-8">
      <div className="down-2 xs-down-8 xs-off-2 off-1">About BME Gene Bank <i className="fas fa-solid blue fa-circle-arrow-right"/></div>
    </div>
    <div className="my-col-3">
      <div className="off-3 xs-off-1"><img className="logoicons" src={logoicons} alt=""/></div>
    </div>
    <div className="my-col-6 xs-8 xs-off-1">
      <div className="px12 genetext">BME Gene Bank was founded in 2023 under the leadership of the Head of the Department of Biomedical Engineering,
      Dr. Yahaya Suleiman Abimbola and Engr. Mrs T.M. Ajibola.</div>
      <div className="px12 xs-down-2 genetext down-1">It was created to address the department's researchers, staff and students inability to perform genetic research
             and create a novel applications in personalized medicine.</div>
    </div>
    <Footer/>
 </> 
 );
}
 
export default Home;