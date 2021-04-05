import axios from 'axios';

export const getGifs=async (category)=>{

        const url=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=lNbvVEkLDn4j4WVU0MKNxvGBHBgokeLS`; 
        const resp = await axios.get(url);
        //const {data}=resp.data;
        // o sino tmb puedo escribirlo asi
        const data=resp.data.data;

        const gifs=data.map((img)=>{
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url

            }
        })
      
        return ( gifs)
        
        
    }