// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onChangethumbnailState, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onThumbnailClick = () => {
    onChangethumbnailState(id)
  }
  const thumbnailClassName = isActive ? '' : 'thumbnain-click'

  return (
    <li className="thumbnail-item-container">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${thumbnailClassName}`}
          onClick={onThumbnailClick}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
