import { cloneElement } from 'react'

export default ({ children, renderer = <div /> }) => {
  return (
    <>
      {cloneElement(renderer, {
        children,
        className: `center-container ${renderer.props.className || ''}`,
      })}
      <style jsx global>
        {`
          .center-container {
            flex: 1 1 auto;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            padding: 1.8rem 1.2rem 0 1.8rem;
            height: 100%;
            // background: red;
          }
        `}
      </style>
    </>
  )
}
