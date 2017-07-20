import {RECEIVE_ARTWORK, RECEIVE_ARTWORKS,
  DESTROY_ARTWORK, fetchArtworks, fetchArtwork, createArtwork,
  deleteArtwork} from '../actions/artwork_actions';
import {merge} from 'lodash/merge';

const defaultState = () => ({
  artworks: {},
  currentArtwork: null,
});

const ArtworksReducer = (state=defaultState(), action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_ARTWORK:
      const artwork = action.artwork;
      return Object.assign({}, state,
        {
          artworks: {[artwork.id]: artwork},
          currentArtwork: artwork.id
        });
    case RECEIVE_ARTWORKS:
      const artworks = action.artworks;
      return Object.assign({}, state, {artworks: artworks});
    case DESTROY_ARTWORK:
      nextState = Object.assign({},state);
      delete nextState.artworks[action.id];
      return nextState;
    default:
      return state;
  }
};

export default ArtworksReducer;