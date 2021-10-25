const BackgroundIcon = () => {
  const itemArray = Array.from(Array(2), (_, i) => {
    return (
      <div key={i}>
        <i className="fas fa-space-shuttle"></i>
        <i className="fas fa-user-astronaut"></i>
        <i className="fas fa-meteor"></i>
        <i className="fas fa-rocket"></i>
        <i className="fas fa-backspace"></i>
        <i className="fas fa-satellite-dish"></i>
        <i className="fas fa-mortar-pestle"></i>
        <i className="fas fa-newspaper"></i>
        <i className="fas fa-baseball-ball"></i>
        <i className="fas fa-basketball-ball"></i>
        <i className="fas fa-barcode"></i>
        <i className="fab fa-angular"></i>
        <i className="fas fa-archive"></i>
        <i className="fas fa-arrows-alt"></i>
        <i className="fas fa-atom"></i>
        <i className="fas fa-atlas"></i>
        <i className="fas fa-space-shuttle"></i>
        <i className="fas fa-user-astronaut"></i>
        <i className="fas fa-meteor"></i>
        <i className="fas fa-rocket"></i>
        <i className="fas fa-archive"></i>
        <i className="fas fa-arrows-alt"></i>
        <i className="fas fa-atom"></i>
        <i className="fas fa-atlas"></i>
      </div>
    )
  })

  return (
    // TODO: loop this 2 div
    <div className="rows">{itemArray}</div>
  )
}

export default BackgroundIcon
