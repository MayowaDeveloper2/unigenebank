const SearchResults = ({detailedResults, setseeSearch, query}) => {


    return ( <>
     <div className="my-modal">
        <div className="my-col-6 off-3 right down-6 p-absolte" onClick={()=> {setseeSearch(false)}}><span className="my-btn-sm c-pointer"><i className="fas fa-times white"></i></span></div>
        <div className="my-col-6 off-3 down-2 my-bottom-30 bg-white">
            <div className="my-col-10 off-1 down-3">
                <div className="my-mother bd-bottom"><span className="px13 black"> <span className="bold">Search Results</span>  <div className="my-mother down-1 px12 faded">displaying {detailedResults?.length} results for {query}</div> </span></div>
            </div>
            <div className="my-col-10 off-1 ov-scroll-search">
            {detailedResults?.slice(0, detailedResults?.length - 1)?.map((i, index) => (
             <div className="my-mother down-1 my-bottom-20 bg-faded" key={index}>
                <div className="my-col-10 off-1 down-3">
                    <div className="my-mother">
                      <div className="my-col-4"><span className="px12"><span className="bold">Gene Uid</span>:<br /><span className="px13">{i.uid}</span> </span></div>
                      <div className="my-col-4"><span className="px12"><span className="bold">Name</span>: <br /><span className="px13">{i.uid}</span> </span></div>
                      <div className="my-col-4"><span className="px12"><span className="bold">Description</span>:<br /><span className="px12">{i.description}</span></span></div>
                      <div className="my-mother down-3"><span className="px13 c-pointer my-btn-sm white rad-10  bg-color-code-1 px13" onClick={()=> {window.open(`https://www.ncbi.nlm.nih.gov/gene/${i.uid}`)}}>view on NCBI</span></div>
                    </div>
                </div>
             </div>
            ))}
            </div>
        </div>
     </div>
    </> );
}
 
export default SearchResults;