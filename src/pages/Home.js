import im1 from '../images/im3.avif'
const Home = () => {
 return ( <>
   <div className="bg-landing bg-color-code-1 centere">
    <div>
     <div className="my-col-10 off-1 xs-off-1 down-8">
      <div className="my-mother">
       <div className="px50 my-mother xs-down-18 down-2"><span className="bold alice">University Of Ilorin <span className="color-code-1"> Biomedical Engineering</span> Genebank </span></div>
       <div className="my-mother down-2"><span className="white bold">A repository for genetic information... DNA, RNA, etc</span></div>
       <div className="my-mother down-3">
        <div className="my-col-10 down-2">
         <div className="search-box my-col-8"><input type="text" className="input" placeholder="Search for genetic Materials e.g ATTACCD" /></div>
         <div className="my-col-2"> <span className="submit-btn bg-color-code-1"><i className="px30 down-2 fas fa-search"></i></span></div>
         {/* <div className='my-mother down-5 color-code-1'><span><u>Upload Data <i className='fas fa-angle-right'></i></u></span></div> */}
        </div>
       </div>
      </div>
     </div>
    </div>
   </div> 
   <div className="my-mother bg-white my-bottom-50">
    <div className="my-col-10 off-1 my-bottom-50 bg-white">
     <div className="my-col-6 xs-down-5 down-5">
      <div><i className="fas fa-question px100"></i></div>
       <div className="my-mother down-1"> <span className="black px60 bold">What Is a <br /> <b className="color-code-1">Genetic</b> Bank</span></div>
     </div>
     <div className="my-col-6 down-10">
      <div className="img-container"><img src={im1} alt="" /></div>
     </div>
     <div className="my-col-8 xs-down-2 xs-off-1 down-1">
       <div className="gene-what">
         <span className="px13 faded">A gene bank, often referred to as a "biobank" or "biorepository," is a specialized facility or organization that systematically collects, processes, stores, and manages genetic material, including DNA and sometimes RNA, obtained from human biological samples. These gene banks are crucial for various scientific and medical purposes and are designed to ensure the long-term preservation and accessibility of genetic information from human donors</span>
        </div>
     </div>
    </div>
   </div>
    <div className='my-mother bg-color-code-1 my-bottom-50'>
     <div className='my-col-10 xs-off-1 xs-down-5 solution off-1 down-5'>
    <div className='my-col-12 centerd'>
      <div><span className='px30 bold white'><i className='fas fa-boxes'></i> Solutions</span></div>
      <div><span className='px13 white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</span></div>
      </div>
      <div className='my-col-3 xs-down-3 down-1'>
        <div className='my-container down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-book color-code-1'></i>
            <div className='my-mother down-2 bold'><span className='px13 color-code-1'>Books and Journals</span></div>
            <div className='my-mother down-5 px10 faded-1'>Empower your decision with world's expertise</div>
            <div className='my-mother xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-microscope color-code-1'></i>
            <div className='my-mother down-2 bold'><span className='px13 color-code-1'>Research</span></div>
            <div className='my-mother down-5 px10 faded-1'> Gain insights into the most recent advancements in understanding the human genome, and relentless quest to decode the intricate language of genetics</div>
            <div className='my-mother xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-users color-code-1'></i>
            <div className='my-mother down-2 bold'><span className='px13 color-code-1'>Conference and Talks</span></div>
            <div className='my-mother down-5 px10 faded-1'>Sharing the latest breakthroughs in genomics and DNA research</div>
            <div className='my-mother xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
      <div className='my-col-3 down-1'>
        <div className='my-container xs-down-4 down-5 bg-white my-bottom-20'>
          <div className='my-col-10 xs-off-1 xs-md-off-1 xs-down-3 off-1 down-10'>
            <i className='fas fa-plus-square color-code-1'></i>
            <div className='my-mother down-2 bold'><span className='px13 color-code-1'>Healthcare Education</span></div>
            <div className='my-mother down-5 px10 faded-1'>Smart learning solution for staff and students of Biomedical Engineering</div>
            <div className='my-mother xs-down-4 down-10 px10 color-code-1'><span className='btn-sm-card'>Explore <i className='fas fa-angle-right color-code-1'></i></span></div>
          </div>
        </div>
      </div>
     </div>
    </div>
    <div className='my-mother down-3 centered my-bottom-50'>
     <div className='my-col-10 xs-down-3 off-1 down-1'>
        <div className='my-mother centered'><span className=''>Explore Our Gene Calculator</span></div>
        <div className='my-mother down-5'><span className='px50'>Coming Soon !!!!</span></div>
     </div>
    </div>
 </> );
}
 
export default Home;