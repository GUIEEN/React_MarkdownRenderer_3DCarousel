import React from 'react'

class Carousel extends React.Component {
  state = {
    carousel: undefined,
    figure: undefined,
    nav: undefined,
    numImages: undefined,
    theta: undefined,
    currImage: undefined,
    initialize: true
  }

  onClick = e => {
    console.log(this.state.currImage)
    var t = e.target
    if (this.state.initialize) {
      e.stopPropagation()
      console.log('-------INITIAL------')
      var carousel = document.querySelector('.carousel'),
        figure = carousel.querySelector('figure'),
        numImages = figure.childElementCount,
        theta = (2 * Math.PI) / numImages,
        currImage = 0
      console.log(this.state.currImage)
      if (t.tagName.toUpperCase() !== 'BUTTON') return

      if (t.classList.contains('next')) {
        currImage++
      } else {
        currImage--
      }
      figure.style.transform = `rotateY(${currImage * -theta}rad)`

      this.setState({
        carousel,
        figure,
        numImages,
        theta,
        currImage,
        initialize: false
      })
      console.log(this.state.currImage)
    } else {
      e.stopPropagation()
      console.log(e.target)
      if (t.tagName.toUpperCase() !== 'BUTTON') return

      if (t.classList.contains('next')) {
        this.state.currImage++
        // this.setState({ currImage: this.state.currImage + 1 })
      } else {
        this.state.currImage--
      }

      this.state.figure.style.transform = `rotateY(${this.state.currImage *
        -this.state.theta}rad)`
    }
  }

  render() {
    return (
      <div className="carousel">
        <figure>
          <img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt="" />
          <img src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt="" />
          <img src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt="" />
          <img src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt="" />
          <img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt="" />
          <img src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt="" />
          <img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt="" />
          <img src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt="" />
        </figure>
        <nav onClick={this.onClick}>
          <button className="nav prev">Prev</button>
          <button className="nav next">Next</button>
        </nav>
      </div>
    )
  }
}

export default Carousel
