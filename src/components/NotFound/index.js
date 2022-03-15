import React, { Fragment } from 'react'
import ButtonPrimary from '../Common/ButtonPrimary';
import Message from '../Common/Message';


const NotFound = () => (
  <Fragment>
    <Message text="404: Not Found"/>
    <ButtonPrimary type="back" to="/"/>
  </Fragment>
)

export default NotFound;