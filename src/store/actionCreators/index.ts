import * as PostActionCreators from './post'
import * as AlbumActionCreators from './album'

export default {
  ...PostActionCreators,
  ...AlbumActionCreators,
}
