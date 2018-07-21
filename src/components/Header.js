import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'

class Header extends React.Component {
  state = {
    text: '# hello world'
  }

  onChange = e => {
    this.setState({ text: e.target.value })
  }
  render() {
    return (
      <div className="markdown">
        <div id="preview">
          {
            remark()
              .use(reactRenderer)
              .processSync(this.state.text).contents
          }
        </div>
        <textarea value={this.state.text} onChange={this.onChange} />
      </div>
    )
  }
}

export default Header
