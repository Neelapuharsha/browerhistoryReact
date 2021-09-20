import './index.css'

const HistoryDetails = props => {
  const {HisDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HisDetails
  const onClickingDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p> {domainUrl} </p>
      <button
        className="button"
        type="button"
        onClick={onClickingDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryDetails
