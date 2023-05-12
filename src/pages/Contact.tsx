import React from "react"

interface Props {
  name?: string;
}

const Contact = (props: Props) => {
  return (
    <div>
      <h1>hello: {props.name?.length}</h1>
    </div>)
}

export default Contact