const ProfileCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      {/* <img src={require('')} alt="" /> */}
      <h2>Tomas Fridekrans</h2>
    </div>
  )
}

export default ProfileCard
