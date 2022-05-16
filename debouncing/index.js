const getData = () =>{
   console.log("fetching Data....")
}

const debouncer = (fun,delay) =>{
    let timer;
    return function () {
        let context = this
        // args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
           getData.apply(context)
        },delay)
    }
}

const betterfunction = debouncer(getData,300);
