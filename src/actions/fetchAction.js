import store from "../store";
import axios from 'axios';
export const fetch_photos = () => {
  return {
    type: "FETCH_PHOTOS"
  };
};

export const receive_photos = photos => {
  return {
    type: "FETCHED_PHOTOS",
    data: photos
  };
};

export const receive_error = error => {
  return {
    type: "RECEIVE_ERROR",
    error : error
  };
};

export const getPhotos = () => {
    store.dispatch(fetch_photos());
    return function(dispatch) {
      return axios.get('https://www.flickr.com/services/feeds/photos_public.gne?tags=marylin,monroe&format=json&nojsoncallback=1', { crossdomain : true })
        .then(res => { dispatch(receive_photos(res.data));
        })
        .catch(err => dispatch(receive_error(err)))
    };
  };