
const Card = ({Input,data}) => {

  //to fiter the data
  const filterData = data.filter(query =>{

    //if query is empty
    if(query.Input === ""){

      return query;
    } //return the item which contains the user input
    else {
        return query.name.toLowerCase().includes(Input)
    }
   })

    
  return (
    // <!-- component -->
    
    <main className="min-h-screen  flex  justify-center   px-4">
      {/* this div is make the card center */}
      <div className="py-5 w-1/2 sm:max-w-xl sm:mx-auto flex flex-wrap">
        {/* this section is about the  main card and content */}
        {filterData.map(content =>{
          const {id,name,tagline,ph,first_brewed,image_url,target_fg} = content;
            return(
              <section className="shadow-lg border-gray-950 max-h-80	w-full border sm:rounded-3xl p-8 flex space-x-8 m-2" key={id}>
              <div className=" w-1/2 
              ">
                  <img className="rounded-3xl shadow-lg h-64 m-auto" src={image_url} alt={name}/>
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{name}</h2>
                  <div className="bg-yellow-400 font-bold rounded-xl p-2">{ph || 4.3} </div>
                </div>
                <div>
                  <div className="text-lg text-gray-500">TagLine</div>
                  <div className="text-sm text-gray-800 font-medium">{tagline}</div>
                </div>
                  <p className=" text-gray-400 max-h-40 overflow-y-hidden">first brewed : {first_brewed}</p>
                <div className="flex text-2xl font-bold text-a">${target_fg}.00</div>
              </div>
        
            </section>
            )
      })}
       
      </div>
      
    </main>
   
    
  )
}

export default Card