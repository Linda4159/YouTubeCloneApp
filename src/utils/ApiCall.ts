import Instance from "./AxiosConfig";

export const searchYoutubeVideo = async () => {
  const options = {
    method: "GET",
    url: "/search",
    params: {
      query: "rick roll",
      next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
      hl: "en",
      gl: "US",
      upload_date: "t",
      type: "v",
      duration: "s",
      features: "li;hd",
      sort: "v",
    },
  };

  try {
    const response = await Instance.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const VideoDetail = async (id: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/video",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "39d4eabca4msh4182ee568df27a3p199885jsnf2b7d76abcb2",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  try {
    const response = await Instance.request(options);
    console.log("kate",response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const VideoComments = async (id:string)=>{
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
        params: {
            id: id,
            next: 'Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D'
          },
        
        headers: {
          'X-RapidAPI-Key': '39d4eabca4msh4182ee568df27a3p199885jsnf2b7d76abcb2',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
      try{
          const response = await Instance.request(options);
          console.log("joy",response.data);
          return response.data
      } catch (error) {
          console.error(error);
      
}
}
